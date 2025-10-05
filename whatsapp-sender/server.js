const { Client, LocalAuth } = require('whatsapp-web.js');
const puppeteer = require('puppeteer');
const qrcode = require('qrcode-terminal');
const axios = require('axios');
const fs = require('fs');
const path = require('path');


const configPath = path.join(__dirname, 'config.json');
let config;

try {
    config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
} catch {
    console.error("❌ Missing or invalid config.json file.");
    process.exit(1);
}

const FLASK_API = config.flask_api;
const ADMIN_NUMBER = config.admin_number;

const logFile = path.join(__dirname, 'log.txt');
function log(msg) {
    const time = new Date().toISOString().replace('T', ' ').split('.')[0];
    fs.appendFileSync(logFile, `[${time}] ${msg}\n`);
}

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    executablePath: puppeteer.executablePath(), // ensures it finds Chromium
  }
});

client.on('qr', qr => {
    log('📱 WhatsApp not initialized. Scan this QR code.');
    qrcode.generate(qr, { small: true });
});
client.on('ready', async () => {
    log('✅ WhatsApp client is ready!');

    await sendPendingMessages();
    log('🎯 Finished all tasks. Press any key to exit.');
    console.log('Press any key to exit...');
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on('data', process.exit.bind(process, 0));
});
process.on('uncaughtException', err => {
    fs.appendFileSync('log.txt', `[${new Date().toISOString()}] Uncaught Exception: ${err.stack}\n`);
});

process.on('unhandledRejection', err => {
    fs.appendFileSync('log.txt', `[${new Date().toISOString()}] Unhandled Rejection: ${err.stack}\n`);
});


async function sendPendingMessages() {
    try {
        log("🔍 Fetching pending messages...");
        const res = await axios.get(`${FLASK_API}/messages`);
        const messages = res.data.data || [];
        const pending = messages.filter(m => m.status === "Queue");

        if (!pending.length) {
            log("✅ No pending messages found.");
            return;
        }

        for (const msg of pending) {
            const fullMessage =
                `📩 *New Inquiry*\n\n` +
                `👤 Name: ${msg.first_name} ${msg.last_name}\n` +
                `📞 Phone: ${msg.phone}\n` +
                `📧 Email: ${msg.email}\n` +
                `🎯 Course: ${msg.course}\n` +
                `💬 Message: ${msg.message}\n\n` +
                `— Sent from Website Contact Form`;

            await client.sendMessage(`${ADMIN_NUMBER}@c.us`, fullMessage);
            log(`✅ Message sent: ${msg.id}`);

            await axios.put(`${FLASK_API}/update-message/${msg.id}`, {
                status: "Sent",
                response_message: "Delivered to WhatsApp"
            });

            log(`🟢 Status updated for message: ${msg.id}`);
        }

        log("📬 All messages processed successfully.");
    } catch (err) {
        log(`❌ Error: ${err.message}`);
    }
}

log('🚀 Starting WhatsApp client...');
client.initialize();

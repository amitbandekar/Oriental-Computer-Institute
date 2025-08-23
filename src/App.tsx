import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useRef } from 'react';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import ContactSection from './components/ContactSection';

const queryClient = new QueryClient();

const App = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Header contactRef={contactRef} />
        <ContactSection ref={contactRef} />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

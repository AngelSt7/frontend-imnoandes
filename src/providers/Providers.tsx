'use client';

import { ReactQueryProvider } from './ReactQueryProvider';
import { HeroUIProviderWrapper } from './HeroUIProviderWrapper';
import { Toaster } from 'react-hot-toast';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <HeroUIProviderWrapper>
        {children}
        <Toaster position="top-right" toastOptions={{
          duration: 5000
        }} /> 
      </HeroUIProviderWrapper>
    </ReactQueryProvider>
  );
}

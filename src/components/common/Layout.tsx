'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from './Footer';
import FloatingDownload from '@/components/FloatingDownload';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation currentPage={currentPage} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingDownload />
    </div>
  );
};

export default Layout; 
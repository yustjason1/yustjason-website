"use client";
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamic import to prevent SSR issues
const PDFViewer = dynamic(() => import('./components/PDFViewer'), {
  ssr: false,
  loading: () => <div className="flex justify-center items-center h-64">Loading PDF...</div>
});

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-8">
        <PDFViewer />
      </div>
    </div>
  );
}
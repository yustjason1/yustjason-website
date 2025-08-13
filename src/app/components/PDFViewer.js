"use client";
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import react-pdf components to prevent SSR issues
const Document = dynamic(
  () => import('react-pdf').then(mod => mod.Document),
  { ssr: false }
);

const Page = dynamic(
  () => import('react-pdf').then(mod => mod.Page),
  { ssr: false }
);

export default function PDFViewer({ fileURL }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [workerReady, setWorkerReady] = useState(false);
  const [fileUrl, setFileUrl] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true on client side
    setMounted(true);
    
    // Dynamically import pdfjs to avoid SSR issues
    import('react-pdf').then(({ pdfjs }) => {
      // Use local worker file to avoid CDN issues
      pdfjs.GlobalWorkerOptions.workerSrc = '/Resume/pdf.worker.min.js';
      setWorkerReady(true);
    });
    
    // Test if the file is accessible
    fetch(fileURL)
      .then(response => {
        if (response.ok) {
          setFileUrl(fileURL);
        } else {
          console.error('PDF file not accessible, status:', response.status);
        }
      })
      .catch(error => {
        console.error('Error accessing PDF file:', error);
      });
  }, [fileURL]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    console.log('PDF loaded successfully with', numPages, 'pages');
  }

  function onDocumentLoadError(error) {
    console.error('PDF load error:', error);
  }

  const handleDownload = () => {
  if (fileUrl) {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'JasonYust_Resume.pdf'; // Custom filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

  if (!mounted || !workerReady || !fileUrl) {
    return <div className="flex justify-center items-center h-64">
      {!mounted ? "Initializing..." : !workerReady ? "Setting up PDF viewer..." : "Checking PDF file..."}
    </div>;
  }

  return (
    <div className="text-center">
      <div className="mb-4 flex justify-end">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 rounded"
          style={{ backgroundColor: "var(--download-pdf)", color: "white" }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "var(--download-pdf-hover)"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = "var(--download-pdf)"}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF
        </button>
      </div>
      
      <Document
        file={fileUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={<div className="flex justify-center items-center h-64">Loading PDF...</div>}
        error={<div className="text-red-500">Error loading PDF. Check the console for details.</div>}
        className="flex justify-center"
      >
        <Page 
          pageNumber={pageNumber} 
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="shadow-lg"
          width={800}
        />
      </Document>
      
      {numPages > 1 && (
        <div className="mt-4 flex justify-center items-center space-x-4">
          <button
            onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
            disabled={pageNumber <= 1}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          <span className="text-foreground bg-muted px-3 py-2 rounded">
            Page {pageNumber} of {numPages}
          </span>
          <button
            onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
            disabled={pageNumber >= numPages}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
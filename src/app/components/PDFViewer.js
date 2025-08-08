"use client";
import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

export default function PDFViewer({ fileURL }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [workerReady, setWorkerReady] = useState(false);
  const [fileUrl, setFileUrl] = useState(null);

  useEffect(() => {
    // Use local worker file to avoid CDN issues
    pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
    setWorkerReady(true);
    
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
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    console.log('PDF loaded successfully with', numPages, 'pages');
  }

  function onDocumentLoadError(error) {
    console.error('PDF load error:', error);
  }

  if (!workerReady || !fileUrl) {
    return <div className="flex justify-center items-center h-64">
      {!workerReady ? "Setting up PDF viewer..." : "Checking PDF file..."}
    </div>;
  }

  return (
    <div className="text-center">
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
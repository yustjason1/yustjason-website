"use client";
import { useState } from 'react';
import dynamic from 'next/dynamic';

// Import CSS on client side only
if (typeof window !== 'undefined') {
  import('react-pdf/dist/Page/AnnotationLayer.css');
  import('react-pdf/dist/Page/TextLayer.css');
}

const Document = dynamic(
  () => import('react-pdf').then(mod => {
    mod.pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      'pdfjs-dist/build/pdf.worker.min.mjs',
      import.meta.url,
    ).toString();
    return mod.Document;
  }),
  { ssr: false }
);

const Page = dynamic(
  () => import('react-pdf').then(mod => mod.Page),
  { ssr: false }
);

export default function PDFViewer({ fileURL }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="w-full max-w-full">
      <div className="mb-4 flex justify-end">
        <a
          href={fileURL}
          download="JasonYust_Resume.pdf"
          className="flex items-center gap-2 px-4 py-2 rounded text-white"
          style={{ backgroundColor: "var(--download-pdf)", color: "white" }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "var(--download-pdf-hover)"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = "var(--download-pdf)"}
        >
          Download PDF
        </a>
      </div>
      
      {/* Scrollable PDF Container */}
      <div className="w-full overflow-x-auto overflow-y-hidden">
        <div className="flex justify-center min-w-fit">
          <Document
            file={fileURL}
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
        </div>
      </div>
      
      {numPages > 1 && (
        <div className="mt-4 flex justify-center items-center space-x-4">
          <button
            onClick={() => setPageNumber(p => Math.max(1, p - 1))}
            disabled={pageNumber <= 1}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>Page {pageNumber} of {numPages}</span>
          <button
            onClick={() => setPageNumber(p => Math.min(numPages, p + 1))}
            disabled={pageNumber >= numPages}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
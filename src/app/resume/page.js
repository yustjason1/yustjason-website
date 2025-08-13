import PDFViewer from '../components/PDFViewer';

export default function Resume() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      <div className="container mx-auto py-8">
        <PDFViewer fileURL="/Resume/JasonYustResumeFall2025.pdf" />
      </div>
    </div>
  );
}
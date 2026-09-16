import PDFViewer from '../components/PDFViewer';

export default function Resume() {
  return (
    <div className="min-h-screen px-8" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      <div className="container mx-auto py-8">
        <iframe
          src="/Resume/JasonYustResumeFall2026.pdf"
          className="h-[90vh] w-full rounded border"
          title="Resume PDF"
        />
      </div>
    </div>
  );
}
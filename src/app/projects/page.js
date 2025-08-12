import HorizontalLine from "../components/HorizontalLine";
import TimelineItem from "../components/TimelineItem";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-8">
        
        <h1 className="text-3xl font-bold mb-4">My Projects</h1>

        <HorizontalLine />

        <TimelineItem
          title="AI Help Integration Prototype"
          date="July 2025"
          items={[
            {
              type: 'text',
              content: "Developed a prototype for AI Help integration using OpenAI's Generative AI and a RAG system for dynamic prompt creation. This project included:"
            },
            {
              type: 'list',
              items: [
                'Pre-processing an entire course catalog into a Qdrant Vector Database',
                'Using a vectorization of the paragraph the user wants to clarify and searching Qdrant for relevant context',
                'Injecting relevant course material into the Generative AI prompt and returning AI-powered clarifications',
                'Creating a user-friendly interface for interacting with the AI'
              ]
            },
            {
              type: 'gif',
              src: '/CompuScholarAIClarify.gif',
              alt: 'AI Help Integration GIF',
              caption: 'AI Paragraph Clarification'
            },
            {
              type: 'text',
              content: "Additional prototype work included utilizing AI to explain coding errors and providing suggestions for fixing them, as well as reading activity instructions and producing pseudo-code."
            },
            {
              type: 'gif',
              src: '/CompuScholarAICodeCheck.gif',
              alt: 'AI Code Check GIF',
              caption: 'AI Code Check'
            }
          ]}
        />

        <HorizontalLine />

        <TimelineItem
          title="Reporting Engine"
          date="May 2025 - July 2025"
        />

        <HorizontalLine />

        <TimelineItem
          title="Spotify Class Project"
          date="March 2024 - May 2024"
        />
      </div>
    </div>
  );
}

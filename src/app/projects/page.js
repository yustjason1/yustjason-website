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
          description="what"
        />

        <HorizontalLine />

        <TimelineItem
          title="Reporting Engine"
          date="May 2025 - July 2025"
          description="what"
        />

        <HorizontalLine />

        <TimelineItem
          title="Spotify Class Project"
          date="March 2024 - May 2024"
          description="what"
        />
      </div>
    </div>
  );
}

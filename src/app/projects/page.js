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
              content: "Developed a prototype for several different types of AI integration using OpenAI's Generative AI and a RAG system for dynamic prompt creation. The different types of AI Integration include feeding a paragraph into OpenAI's API for clarification, feeding user code into OpenAI's API for debugging, and using a RAG system for dynamic context injection. Steps to achieve this included:"
            },
            {
              type: 'list',
              items: [
                'Pre-processing an entire course catalog into a Qdrant Vector Database',
                'Using a vectorization of the paragraph the user wants to clarify and searching Qdrant for relevant context',
                'Injecting relevant course material into the Generative AI prompt and returning AI-powered help',
                'Creating a user-friendly interface for interacting with the AI'
              ]
            },
            {
              type: 'text',
              content: 'The first prototype focused on AI-powered paragraph clarification. It allowed users to click a paragraph and receive a more detailed explanation utilizing previous relevant lessons as context.'
            },
            {
              type: 'video',
              src: '/Projects/CompuScholarAI/CompuScholarAIClarify.mp4',
              alt: 'AI Help Integration Video',
              caption: 'AI Paragraph Clarification'
            },
            {
              type: 'text',
              content: "The second prototype focused on AI-powered code debugging. It allowed users to click a button in the inline code editor to receive suggestions for fixing errors. The AI utilized the context of the code to determine language and returned suggestions in formatted HTML for easy integration."
            },
            {
              type: 'video',
              src: '/Projects/CompuScholarAI/CompuScholarAICodeCheck.mp4',
              alt: 'AI Code Check Video',
              caption: 'AI Code Check'
            },
            {
              type: 'text',
              content: 'The third prototype focused on AI-powered pseudocode generation. It allowed users to click a button to receive a structured outline of how the current activity could be completed.'
            },
            {
              type: 'video',
              src: '/Projects/CompuScholarAI/CompuScholarAIPseudoCode.mp4',
              alt: 'AI Pseudo Code Video',
              caption: 'AI Pseudo Code Generation'
            }
          ]}
        />

        <HorizontalLine />

        <TimelineItem
          title="Reporting Engine"
          date="May 2025 - July 2025"
          items={[
            {
              type: 'text',
              content: 'Developed a reporting engine to provide teachers and students insights into their learning progress and areas for improvement. This project involved full-stack development, including complex SQL statements, data visualization, and user interface design. Successfully led this project from start to finish, including concept development, front and back-end implementation, and user testing.'
            },
            {
              type: 'text',
              content: 'Technologies used for this project include:'
            },
            {
              type: 'list',
              items: [
                'PHP for server-side logic',
                'JavaScript for client-side interactivity and tracking statistics',
                'MySQL for database management',
                'HTML/CSS for layout and design',
                'Google Charts API for data visualization'
              ]
            },
            {
              type: 'text',
              content: 'An example teacher dashboard may look like this:'
            },
            {
              type: 'video',
              src: '/Projects/CompuScholarReporting/CompuScholarTeacherReport.mp4',
              alt: 'Teacher Report Dashboard Video',
              caption: 'Teacher Report Dashboard'
            },
            {
              type: 'text',
              content: 'The reporting engine also includes a specialized student dashboard, giving more personalized data insights to each individual user. An example student dashboard may look like this:'
            },
            {
              type: 'video',
              src: '/Projects/CompuScholarReporting/CompuScholarStudentReport.mp4',
              alt: 'Student Report Dashboard Video',
              caption: 'Student Report Dashboard'
            }
          ]}
        />

        <HorizontalLine />

        <TimelineItem
          title="Spotify Class Project"
          date="March 2024 - May 2024"
          items={[
            {
              type: 'text',
              content: 'Worked with a team of 7 classmates to develop an android app using the Spotify API. This android app allowed users to visualize their music listening habits and compare them with their friends.'
            },
            {
              type: 'text',
              content: 'This app used several libraries and technologies, including:'
            },
            {
              type: 'list',
              items: [
                'Spotify API for music data',
                'Android SDK for app development',
                'Firebase for cloud account creation and data storage'
              ]
            },
            {
              type: 'text',
              content: 'This app also utilized the Spotify authentication flow, including management of access and refresh tokens.'
            },
            {
              type: 'video',
              src: '/Projects/SpotifyClassProject/SpotifyClassProject.mp4',
              alt: 'Spotify Class Project Video',
              caption: 'Spotify Music Visualization App'
            }
          ]}
        />
      </div>
    </div>
  );
}

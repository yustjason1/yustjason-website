import HorizontalLine from "../components/HorizontalLine";
import TimelineItem from "../components/TimelineItem";

export default function Projects() {
	return (
		<div className="min-h-screen px-8" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
			<div className="container mx-auto py-8">
				
				<h1 className="text-3xl font-bold mb-4">My Projects</h1>

				<p>For additional projects, view my <a href="https://github.com/yustjason1" className="text-blue-500 hover:underline">GitHub</a>.</p>

				<HorizontalLine />

				<TimelineItem
					title="Agentic Software Documentation - Capstone Project"
					date="August 2025 - December 2025"
					items={[
						{
							type: "text",
							content: "Developed a startup from the ideation and customer interviews phase to a launch-viable MVP with a team of 4 as part of my capstone project at Georgia Tech. This startup, 'North* Documentation', focuses on automatic generation of high-quality end-user documentation for web applications using AI. Several technologies were used in this project, including:"
						},
						{
							type: "list",
							items: [
								"Next.js for the web application framework",
								"AWS for cloud hosting and deployment",
								"Playwright for web scraping and interaction",
								"Gemini 2.5 Pro for our AI pipeline",
								"Docker to host arbitrary web applications to localhost",
								"GitHub Application to enable installation on user repositories",
								"Nextra for markdown rendering and documentation preview"
							]
						},
						{
							type: "text",
							content: "The GitHub Application allows users to easily install our documentation generator on any repository. Once installed, users can trigger the documentation generation process with a single click. The application then uses Playwright to scrape and interact with the web application, gathering necessary information for documentation generation."
						},
						{
							type: "video",
							src: "/Projects/NorthStarCapstone/NorthStar_ConnectingGitHub_GeneratingDocumentation_v2.mp4",
							alt: "North* Documentation GitHub App Video",
							caption: "Connecting GitHub Repository and Starting Documentation Generation"
						},
						{
							type: "text",
							content: "When a repository gets submitted for documentation, our system clones the repository into a temporary folder and uses Docker to host the web application as an isolated container. From there, our AI pipeline iterates through each page of the web application using the following steps. This process repeats until all pages are processed:"
						},
						{
							type: "numbered-list",
							items: [
								"Perceive -- Use Playwright to take a screenshot and gather the page's source code.",
								"Reason -- Feed the screenshot and source code into Gemini 2.5 Pro to determine the next action (e.g., click a button, fill a form).",
								"Act -- Use Playwright to perform the action determined by the AI."
							]
						},
						{
							type: "text",
							content: "Once all pages are processed, the AI compiles the screenshots and instructions into a well-structured markdown format, which can be downloaded and converted to HTML or PDF for distribution. Previewing the documentation is also possible on our system, which uses Nextra to render the markdown and display it to the end-user as seen below:"
						},
						{
							type: "video",
							src: "/Projects/NorthStarCapstone/NorthStar_ViewingDocumentation.mp4",
							alt: "North* Documentation Preview Video",
							caption: "Previewing Generated Documentation"
						}
					]}
				/>

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

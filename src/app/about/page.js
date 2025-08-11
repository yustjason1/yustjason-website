import Image from 'next/image';
import HorizontalLine from '../components/HorizontalLine';

export default function About() {
    return (
    <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <div className="flex flex-row gap-8 items-start py-4">
                <Image 
                    src="/JasonYustProfilePicture.jpg" 
                    alt="Profile Picture" 
                    width={250} 
                    height={250} 
                    className="rounded-[25%] mb-4 object-contain"
                />
                <div>
                    <p className="mb-4">Current student at the Georgia Institute of Technology in the College of Computing and Software Engineering. 
                        4 years of leadership training through the Boy Scouts of America and current Eagle Scout. 
                        Valedictorian of Covenant Christian Academy class of 2022. 
                        I aspire to work in Software Engineering where I can grow as a person and improve my skills.
                    </p>
                    <p className="mb-4">Past job experiences include:</p>
                    <ul className="list-disc pl-5">
                        <li className="mb-4">Software Internship at AppVault, where I built stand-alone tools for internal use with the Electron platform, added production code involving integration with Twilio, created several automations with Microsoft Power Automate, and worked with AI using Microsoft AI Builder and Microsoft Copilot.</li>
                        <li className="mb-4">Software Internship at CompuScholar, where I successfully led two projects from start to finish, including a full Reporting Engine that went into production for end users and a prototype AI integration which utilized OpenAI's Generative AI and a RAG system for dynamic prompt creation.</li>
                    </ul>
                </div>
            </div>
        </div>

        <HorizontalLine />

        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">About This Website</h2>
            <p className="mb-4">This website is a portfolio showcasing my work and projects. Built with Next.js, React, and Tailwind CSS, featuring a responsive design with dark/light theme support.</p>
        </div>
    </div>
    );
}

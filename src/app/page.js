import Image from 'next/image';

export default function Home() {
    return (
    <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <div className="flex flex-row gap-8 items-start py-4">
                <Image 
                    src="/About/JasonYustProfilePicture.jpg" 
                    alt="Profile Picture" 
                    width={250} 
                    height={250} 
                    className="rounded-[25%] mb-4 object-contain"
                />
                <div>
                    <p className="mb-4">
                        Hi, I’m Jason Yust — a senior at Georgia Tech majoring in Computer Science. I’ve always enjoyed figuring out how things work and finding better ways to make them work, which naturally led me to software development. I’m especially passionate about building applications that are both efficient and user-friendly, and I’m fascinated by the ways AI can be integrated into real-world systems to make them smarter and more adaptable.
                    </p>
                    <p className='mb-4'>
                        Over the past couple of years, I’ve had the opportunity to work in some exciting internship roles. In Summer 2025, I joined CompuScholar, where I built a Production Report Engine from the ground up and prototyped an AI-powered content system using AWS, PHP, Python, the OpenAI API, and vector databases. The summer before, I was at AppVault, where I worked on production code in .NET Core MVC, automated workflows with Power Automate, and developed internal tools using Electron and JavaScript.
                    </p>
                    <p className='mb-4'>
                        Outside of my coursework and internships, I’m teaching myself Japanese and enjoy exploring Japanese literature and media. I’ve found that learning a new language challenges me to think differently and appreciate new perspectives — something I believe also makes me a better problem-solver.
                    </p>
                    <p className='mb-4'>
                        Now, I’m looking ahead to Summer 2026 and hoping to join a forward-thinking company where I can take on meaningful projects, continue learning from talented teammates, and hopefully grow into a full-time software engineering role after graduation.
                    </p>
                </div>
            </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-700 container mx-auto" />

        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold mb-4">About This Website</h2>
            <p className="mb-4">This website is built using several industry-standard technologies, including Next.js, React, and Tailwind CSS.</p>
            <p className="mb-4">This website is hosted on Amazon Web Services EC2.</p>
            <p className="mb-4">The source code for this website is available on <a href="https://github.com/yustjason1/yustjason-website" className="text-blue-500 hover:underline">GitHub</a>.</p>
        </div>
    </div>
    );
}

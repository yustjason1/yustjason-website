import Image from 'next/image';
import HorizontalLine from './components/HorizontalLine';

export default function Home() {
    return (
    <div className="min-h-screen px-8" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
        <div className="container mx-auto pt-8">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <div className="flex flex-col gap-8 items-start py-4 md:flex-row">
                <Image 
                    src="/About/JasonYustProfilePicture.jpg" 
                    alt="Profile Picture" 
                    width={300} 
                    height={300} 
                    className="rounded-[15%] mb-4 object-contain"
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
                    <p className='mb-4'>
                        Outside of classes and internships, I’ve had some pretty cool experiences. I’m an Eagle Scout and was my high school valedictorian, both of which taught me the value of hard work and persistence. I have earned certifications in AWS Cloud Practitioner and JavaScript programming, and I’m always exploring new frameworks and tools.
                    </p>
                </div>
            </div>
        </div>

        <HorizontalLine />

        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold mb-4">About This Website</h2>
            <p className="mb-4">
                This website is built using several industry-standard technologies:
            </p>
            <ul className='list-disc list-inside mb-4'>
                <li>Next.js</li>
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>Amazon Web Services EC2</li>
            </ul>
            <p className="mb-4">
                The source code for this website is available on
                    <a href="https://github.com/yustjason1/yustjason-website" className="text-blue-500 hover:underline"> GitHub</a>
                .
            </p>
        </div>
    </div>
    );
}

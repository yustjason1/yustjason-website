import Image from 'next/image';
import HorizontalLine from './components/HorizontalLine';

export default function Home() {
    return (
    <div className="min-h-screen px-8" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
        <div className="container mx-auto pt-8">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <div className="flex flex-col gap-8 items-start py-4 md:flex-row">
                <Image 
                    src="/JasonYustSpring2026HeadshotNoGlasses.jpg" 
                    alt="Profile Picture" 
                    width={300} 
                    height={300} 
                    className="rounded-[15%] mb-4 object-contain"
                />
                <div>
                    <p className="mb-4">
                        Hi, I’m Jason Yust — a senior at Georgia Tech majoring in Computer Science, graduating in December 2026. I’ve always enjoyed figuring out how things work and finding better ways to make them work, which naturally led me to software development. I’m especially passionate about building applications that are both efficient and user-friendly, and I’m fascinated by the ways AI can be integrated into real-world systems to make them smarter and more adaptable.
                    </p>
                    <p className='mb-4'>
                        Over the past few years, I’ve had the opportunity to work in some exciting roles. Most recently, during Summer 2026, I was a Software Engineer Intern at Tyler Technologies. There, I worked across multiple teams using Angular and TypeScript to resolve ADA compliance issues and ship new features, all while embracing an AI-forward culture by leveraging coding assistants like Claude and Codex to accelerate my workflow. Prior to that, I built a Production Report Engine and an AI-powered RAG system at CompuScholar, developed .NET Core MVC production code at AppVault, and built an AI startup MVP called NorthStar.
                    </p>
                    <p className='mb-4'>
                        Outside of my coursework and internships, I'm always tinkering with new tech — whether that's experimenting with game development in Unity and Unreal Engine 5, optimizing my local UniFi network, or exploring interesting use cases for AI. I’m also teaching myself Japanese and enjoy exploring Japanese literature and media, which challenges me to think differently and appreciate new perspectives.
                    </p>
                    <p className='mb-4'>
                        As an Eagle Scout, I’ve learned the value of hard work and persistence. Now, as I wrap up my final semester, I’m looking to join a forward-thinking company where I can take on meaningful projects, continue learning from talented teammates, and step into a full-time software engineering role.
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

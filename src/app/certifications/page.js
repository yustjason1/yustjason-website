import HorizontalLine from "../components/HorizontalLine";

export default function Certifications() {
    
    const imageSize = 250;

    return (
        <div className="min-h-screen" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            <div className="container mx-auto py-8">

                <h1 className="text-3xl font-bold mb-8">Certifications</h1>

                <HorizontalLine />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    <div className="flex flex-col items-center">
                        <img
                            src="/Certifications/AWSCloudPractitioner.png"
                            alt="AWS Certified Cloud Practitioner"
                            height={imageSize}
                            width={imageSize}
                        />
                        <p className="mt-2 text-center">AWS Certified Cloud Practitioner</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="/Certifications/JavaScriptEntryLevelProgrammer.png"
                            alt="JavaScript Entry-Level Programmer"
                            height={imageSize}
                            width={imageSize}
                        />
                        <p className="mt-2 text-center">JavaScript Entry-Level Programmer</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="/Certifications/AWSAIPractitioner.png"
                            alt="AWS Certified AI Practitioner"
                            height={imageSize}
                            width={imageSize}
                        />
                        <p className="mt-2 text-center">AWS Certified AI Practitioner (IN PROGRESS)</p>
                    </div>
                </div>

                <HorizontalLine />

                <a href="https://www.credly.com/users/jason-yust/" className="text-blue-500 hover:underline">
                    View all certifications
                </a>

            </div>
        </div>
    );
}

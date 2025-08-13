export default function Contact() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
                <p className="mb-4">Feel free to reach out to me via any of these channels: </p>
                <ul className="list-none pl-5">
                    <li className="mb-4 flex items-center">
                        <img src="/Contact/address.svg" alt="Address Icon" className="w-5 h-5 mr-3 flex-shrink-0 contact-icon" />
                        <span>859 Spring Street NW, Atlanta GA 30308</span>
                    </li>
                    <li className="mb-4 flex items-center">
                        <img src="/Contact/internet.svg" alt="Internet Icon" className="w-5 h-5 mr-3 flex-shrink-0 contact-icon" />
                        <a href="https://www.linkedin.com/in/jason-yust" className="text-blue-500 hover:underline">www.linkedin.com/in/jason-yust</a>
                    </li>
                    <li className="mb-4 flex items-center">
                        <img src="/Contact/email.svg" alt="Email Icon" className="w-5 h-5 mr-3 flex-shrink-0 contact-icon" />
                        <span>jasonryust@gmail.com</span>
                    </li>
                    <li className="mb-4 flex items-center">
                        <img src="/Contact/phone.svg" alt="Phone Icon" className="w-5 h-5 mr-3 flex-shrink-0 contact-icon" />
                        <span>(678) 761-5975</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

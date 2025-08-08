export default function Contact() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
                <p className="mb-4">Feel free to reach out to me via any of these channels: </p>
                <ul className="list-none pl-5">
                    <li className="mb-4">859 Spring Street NW, Atlanta GA 30308</li>
                    <li className="mb-4"><a href="https://www.linkedin.com/in/jason-yust" className="text-blue-500 hover:underline">www.linkedin.com/in/jason-yust</a></li>
                    <li className="mb-4">jasonryust@gmail.com</li>
                    <li className="mb-4">(678) 761-5975</li>
                </ul>
            </div>
        </div>
    );
}

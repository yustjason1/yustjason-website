"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Hamburger from "./Hamburger";
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Header() {

    const pathname = usePathname();

    // Scroll to top when pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <header className="drop-shadow-lg sticky top-0 z-9999" style={{ backgroundColor: "var(--header)", color: "var(--foreground)" }}>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold">
                        Jason Yust
                    </Link>

                    <div className="flex items-center space-x-8">
                        {/* Desktop Navigation - Hidden on mobile */}
                        <nav className="hidden md:flex space-x-8">
                            <Link 
                                href="/" 
                                className={"hover:drop-shadow-lg"}
                            >
                                Home
                            </Link>
                            <Link 
                                href="/resume" 
                                className={"hover:drop-shadow-lg"}
                            >
                                Resume
                            </Link>
                            <Link 
                                href="/projects" 
                                className={"hover:drop-shadow-lg"}
                            >
                                Projects
                            </Link>
                            <Link 
                                href="/certifications" 
                                className={"hover:drop-shadow-lg"}
                            >
                                Certifications
                            </Link>
                            <Link 
                                href="/contact" 
                                className={"hover:drop-shadow-lg"}
                            >
                                Contact
                            </Link>
                        </nav>

                        <div className="hidden md:block">
                            <ThemeToggle />
                        </div>
                    </div>

                    <div className="absolute right-4 md:hidden">
                        <Hamburger />
                    </div>
                </div>
            </div>
        </header>
    );
}
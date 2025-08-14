"use client";

import { useState } from 'react';
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button
                className={`hamburger flex flex-col justify-center items-center w-8 h-8 space-y-1.5 relative z-50 md:hidden cursor-pointer ${isOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span className={`block w-6 h-0.5 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: "var(--foreground)" }}></span>
                <span className={`block w-6 h-0.5 ${isOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: "var(--foreground)" }}></span>
                <span className={`block w-6 h-0.5 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: "var(--foreground)" }}></span>
            </button>

            {isOpen && (
                <div 
                    className="fixed inset-0 md:hidden"
                    onClick={closeMenu}
                />
            )}

            {/* Mobile Menu */}
            <nav className={`fixed top-0 right-0 h-full w-64 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col p-6 pt-16 drop-shadow-lg rounded-[5%]" style={{ backgroundColor: "var(--header)" }}>
                    {/* Theme Toggle in Mobile Menu */}
                    <div className="mb-8 flex justify-center">
                        <ThemeToggle />
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col space-y-6">
                        <Link 
                            href="/" 
                            className={"hover:drop-shadow-lg hover:underline"}
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                        <Link 
                            href="/resume" 
                            className={"hover:drop-shadow-lg hover:underline"}
                            onClick={closeMenu}
                        >
                            Resume
                        </Link>
                        <Link 
                            href="/projects" 
                            className={"hover:drop-shadow-lg hover:underline"}
                            onClick={closeMenu}
                        >
                            Projects
                        </Link>
                        <Link 
                            href="/certifications" 
                            className={"hover:drop-shadow-lg hover:underline"}
                            onClick={closeMenu}
                        >
                            Certifications
                        </Link>
                        <Link 
                            href="/contact" 
                            className={"hover:drop-shadow-lg hover:underline"}
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
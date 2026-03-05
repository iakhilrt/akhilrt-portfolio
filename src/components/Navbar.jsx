import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Code2, Github, Linkedin } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Capabilities', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
            <div className="container nav-container">
                <a href="#home" className="logo">
                    <Code2 className="logo-icon" />
                    <span className="logo-text">akhilrt<span className="text-gradient">.com</span></span>
                </a>

                {/* Desktop Nav */}
                <div className="nav-links desktop-only">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                    <div className="nav-socials">
                        <a href="https://github.com/iakhilrt" target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="GitHub">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/akhilrt" target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                    </div>
                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-actions mobile-only">
                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        className="menu-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu glass ${mobileMenuOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="mobile-nav-link"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
                <div className="mobile-socials">
                    <a href="https://github.com/iakhilrt" target="_blank" rel="noopener noreferrer" className="mobile-social-link" aria-label="GitHub">
                        <Github size={20} />
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/akhilrt" target="_blank" rel="noopener noreferrer" className="mobile-social-link" aria-label="LinkedIn">
                        <Linkedin size={20} />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

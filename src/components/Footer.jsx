import React from 'react';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">

                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#home" className="logo">
                            <Code2 className="logo-icon" />
                            <span className="logo-text">akhilrt<span className="text-gradient">.com</span></span>
                        </a>
                        <p className="footer-tagline">Built with passion for technology.</p>
                    </div>

                    <div className="footer-social">
                        <a href="https://github.com/iakhilrt" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/akhilrt" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:iakhilrt@gmail.com" className="social-link" aria-label="Email">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">&copy; 2026 Akhil R T. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

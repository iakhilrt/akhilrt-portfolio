import React from 'react';
import { ArrowRight, Terminal, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">

                <div className="hero-content reveal">
                    <div className="hero-badge">
                        <Terminal size={16} />
                        <span>Available for Opportunities</span>
                    </div>

                    <h1 className="hero-title">
                        Hi, I'm <br />
                        <span className="text-gradient">Akhil R T</span>
                    </h1>

                    <h2 className="hero-subtitle">
                        Java Full Stack Developer | Tech Enthusiast
                    </h2>

                    <p className="hero-description">
                        I build scalable web applications using Java, Spring Boot, and modern frontend technologies. Passionate about problem-solving and modern backend architecture.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            View Projects
                            <ArrowRight size={18} className="btn-icon" />
                        </a>
                        <a href="https://drive.google.com/file/d/1Wbxj4RbcfKnUF7o7RCh6_m-fzU65qd1n/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            Resume
                            <Download size={18} className="btn-icon" />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

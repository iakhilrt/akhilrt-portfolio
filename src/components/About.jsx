import React from 'react';
import { Server, Shield, Lightbulb, Rocket } from 'lucide-react';
import './About.css';

const About = () => {
    const highlights = [
        {
            icon: <Server className="highlight-icon" />,
            title: 'Backend Architecture',
            desc: 'Expertise in building robust, performant server-side systems with Java and Spring Boot.'
        },
        {
            icon: <Shield className="highlight-icon" />,
            title: 'Cybersecurity',
            desc: 'Strong interest in securing scalable applications and learning modern defense mechanisms.'
        },
        {
            icon: <Lightbulb className="highlight-icon" />,
            title: 'Emerging Tech',
            desc: 'Enthusiastic about integrating new technologies to solve complex problems efficiently.'
        },
        {
            icon: <Rocket className="highlight-icon" />,
            title: 'Continuous Learner',
            desc: 'Always exploring, building, and optimizing projects to expand my skill set.'
        }
    ];

    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="reveal">
                    <h2 className="section-title">
                        About <span className="text-gradient">Me</span>
                    </h2>
                </div>

                <div className="about-content">
                    <div className="about-text glass reveal">
                        <ul className="about-list">
                            <li><strong>Java Full Stack Developer:</strong> Experienced in building scalable web applications with Java, Spring Boot, and modern frontends.</li>
                            <li><strong>System Architecture:</strong> Passionate about diving deep into backend design and complex problem-solving.</li>
                            <li><strong>End-to-End Development:</strong> Focused on building efficient systems from the ground up, not just writing code.</li>
                            <li><strong>Continuous Learner:</strong> Driven to explore cybersecurity, emerging platforms, and meaningful collaborative projects.</li>
                        </ul>
                    </div>

                    <div className="about-highlights reveal">
                        {highlights.map((item, index) => (
                            <div key={index} className="highlight-card card-hover glass">
                                <div className="highlight-icon-wrapper">
                                    {item.icon}
                                </div>
                                <h3 className="highlight-title">{item.title}</h3>
                                <p className="highlight-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

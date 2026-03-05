import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            role: 'Java Software Engineer Intern',
            company: 'Srishti Innovative',
            duration: 'Oct 2025 - Present',
            description: [
                'Full-stack development using Java, Spring Boot, React.js',
                'API development, database integration, and UI implementation',
                'Debugging, testing, and collaborative development using Git'
            ]
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <div className="reveal">
                    <h2 className="section-title text-center">
                        My <span className="text-gradient">Experience</span>
                    </h2>
                </div>

                <div className="experience-timeline reveal">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="timeline-item">
                            <div className="timeline-marker">
                                <Briefcase size={20} className="marker-icon" />
                            </div>
                            <div className="timeline-content glass card-hover">
                                <div className="experience-header">
                                    <h3 className="experience-role">{exp.role}</h3>
                                    <span className="experience-duration">
                                        <Calendar size={14} /> {exp.duration}
                                    </span>
                                </div>
                                <h4 className="experience-company">{exp.company}</h4>
                                <ul className="experience-list">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

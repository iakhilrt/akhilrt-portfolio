import React from 'react';
import { Database, Layout, Server, Wrench } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            icon: <Layout className="skill-icon" />,
            skills: ['HTML', 'CSS', 'JavaScript', 'React']
        },
        {
            title: 'Backend',
            icon: <Server className="skill-icon" />,
            skills: ['Java', 'Spring Boot', 'REST API']
        },
        {
            title: 'Database',
            icon: <Database className="skill-icon" />,
            skills: ['MySQL']
        },
        {
            title: 'Tools',
            icon: <Wrench className="skill-icon" />,
            skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'Render']
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <div className="reveal">
                    <h2 className="section-title text-center">
                        Skills & <span className="text-gradient">Expertise</span>
                    </h2>
                </div>

                <div className="skills-grid reveal">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="skill-category glass card-hover">
                            <div className="category-header">
                                <div className="category-icon-wrapper">
                                    {category.icon}
                                </div>
                                <h3 className="category-title">{category.title}</h3>
                            </div>
                            <ul className="skill-list">
                                {category.skills.map((skill, index) => (
                                    <li key={index} className="skill-item">
                                        <span className="skill-dot"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

import React from 'react';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Vault',
            description: 'A personal finance SaaS for tracking budgets and expenses. Built with Spring Boot, React + Vite, and Tailwind CSS v4. Features JWT authentication, secure REST APIs, React Query for state management, and a mobile-first responsive UI.',
            tech: ['Spring Boot', 'React', 'Tailwind CSS', 'JWT', 'MySQL'],
            github: 'https://github.com/iakhilrt/expense-tracker.git',
            demo: 'https://vault.akhilrt.com'
        },
        {
            title: 'Inkwell',
            description: 'Full-stack blogging platform with JWT auth, OTP email verification, Cloudinary image management, and a premium dark UI. Backend on Spring Boot, frontend on React + Vite.',
            tech: ['React', 'Spring Boot', 'MySQL', 'Vanilla CSS'],
            github: 'https://github.com/iakhilrt/blog-app',
            demo: 'https://inkwell.akhilrt.com'
        },
        {
            title: 'Student Management App',
            description: 'A comprehensive full-stack records management portal. Engineered with secure JWT authentication, real-time analytics, and a responsive data dashboard.',
            tech: ['React', 'Spring Boot', 'MySQL', 'JWT'],
            github: 'https://github.com/iakhilrt/student-management-app',
            demo: 'https://student.akhilrt.com'
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="reveal">
                    <h2 className="section-title text-center">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                </div>

                <div className="projects-grid reveal">
                    {projects.map((project, idx) => (
                        <div key={idx} className="bento-card project-card">
                            <div className="project-header">
                                <FolderGit2 className="project-folder" size={32} />
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub Repository">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.demo} target={project.demo.startsWith('#') ? '_self' : '_blank'} rel={project.demo.startsWith('#') ? undefined : 'noopener noreferrer'} className="project-link" aria-label="Live Demo">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>

                            <div className="project-tech-list">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="project-tech">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

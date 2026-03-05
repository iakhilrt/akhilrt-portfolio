import React from 'react';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Blog App',
            description: 'A high-performance CMS backend driving a modern blogging frontend. Features complete CRUD capabilities and a streamlined RESTful architecture.',
            tech: ['React', 'Java', 'Spring Data JPA', 'Tailwind'],
            metrics: { posts: '10k+', views: '50k/mo' },
            github: 'https://github.com/iakhilrt/blog-app',
            demo: '#'
        },
        {
            title: 'Student Management App',
            description: 'A comprehensive full-stack records management portal. Engineered with secure JWT authentication, real-time analytics, and a responsive data dashboard.',
            tech: ['React', 'Spring Boot', 'MySQL', 'JWT'],
            metrics: { users: '+500', uptime: '99.9%' },
            github: 'https://github.com/iakhilrt/student-management-app',
            demo: '#'
        },
        {
            title: 'Developer Portfolio',
            description: 'A lightning-fast, minimalist personal portfolio focused on performance and typography. Built with modern React and pure CSS for maximum efficiency.',
            tech: ['React', 'Vite', 'Vanilla CSS'],
            metrics: { perf: '100', access: '100' },
            github: 'https://github.com/iakhilrt',
            demo: '#'
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
                        <div key={idx} className="project-card glass card-hover">
                            <div className="project-header">
                                <FolderGit2 className="project-folder" size={32} />
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub Repository">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Demo">
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

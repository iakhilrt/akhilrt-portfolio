import React from 'react';
import { Monitor, Database, Server, Smartphone } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: <Monitor size={32} />,
            title: 'Scalable Web Applications',
            description: 'Building end-to-end platforms that are optimized for high performance, utilizing React for the UI and Spring Boot for the logic.'
        },
        {
            icon: <Server size={32} />,
            title: 'Robust Backend Systems',
            description: 'Designing secure, high-availability server architectures and microservices ready to handle enterprise scale.'
        },
        {
            icon: <Database size={32} />,
            title: 'RESTful API Integration',
            description: 'Creating and consuming clean, stateless REST APIs for seamless communication between frontend apps and complex databases.'
        },
        {
            icon: <Smartphone size={32} />,
            title: 'Responsive Interfaces',
            description: 'Translating Figma designs into pixel-perfect, mobile-first frontend components that provide exceptional user experiences.'
        }
    ];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="reveal">
                    <h2 className="section-title text-center">
                        What I Can <span className="text-gradient">Build</span>
                    </h2>
                </div>

                <div className="services-grid reveal">
                    {services.map((service, idx) => (
                        <div key={idx} className="service-card glass card-hover">
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

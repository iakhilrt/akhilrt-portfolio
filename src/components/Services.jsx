import React from 'react';
import { Monitor, Database, Server, Smartphone } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: <Monitor size={32} />,
            title: 'Full Stack Web Development',
            description: 'End-to-end web application development bridging responsive frontends with robust, scalable backends.'
        },
        {
            icon: <Server size={32} />,
            title: 'Backend Development',
            description: 'Building secure and highly available server-side architectures using Java and Spring Boot ecosystem.'
        },
        {
            icon: <Database size={32} />,
            title: 'REST API Development',
            description: 'Designing and implementing efficient, stateless RESTful services for seamless cross-platform integration.'
        },
        {
            icon: <Smartphone size={32} />,
            title: 'Frontend UI Development',
            description: 'Crafting interactive, user-friendly, and mobile-responsive interfaces using React and modern CSS.'
        }
    ];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="reveal">
                    <h2 className="section-title text-center">
                        My <span className="text-gradient">Services</span>
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

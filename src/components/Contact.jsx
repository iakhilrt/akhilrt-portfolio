import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Check } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(e.target);
            await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdatdZhmwD2P5HmGwSl66C_1oNdisW5N0rbp9R2iAuo2V-wHg/formResponse', {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            });
            setIsSubmitted(true);
            e.target.reset();
            setTimeout(() => setIsSubmitted(false), 5000);
        } catch (error) {
            console.error('Error submitting form', error);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="reveal">
                    <h2 className="section-title text-center">
                        Get In Touch
                    </h2>
                </div>

                <div className="contact-content reveal">
                    <div className="contact-info">
                        <h3>Let's Connect</h3>
                        <p>I'm open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>

                        <div className="info-items">
                            <div className="info-item">
                                <Mail size={20} className="info-icon" />
                                <div>
                                    <span className="info-label">Email</span>
                                    <p>iakhilrt@gmail.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <MapPin size={20} className="info-icon" />
                                <div>
                                    <span className="info-label">Location</span>
                                    <p>Thiruvananthapuram, Kerala, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-social">
                            <span className="info-label">Find me on:</span>
                            <div className="social-links">
                                <a href="https://github.com/iakhilrt" target="_blank" rel="noopener noreferrer" className="social-circle">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/akhilrt" target="_blank" rel="noopener noreferrer" className="social-circle">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="entry.1231515730" placeholder="John Doe" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="entry.1779166172" placeholder="john@example.com" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="entry.1927786578" rows="4" placeholder="How can I help you?" required></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
                            {isSubmitted ? <Check size={18} className="btn-icon" /> : (!isSubmitting && <Send size={18} className="btn-icon" />)}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

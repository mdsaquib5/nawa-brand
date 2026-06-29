"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { PiPhoneCallThin, PiEnvelopeSimpleThin, PiMapPinThin } from 'react-icons/pi';
import { BsArrowRight } from 'react-icons/bs';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        orderId: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: '', email: '', phone: '', orderId: '', message: '' });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <section className="contact-page-section">
            <div className="container">
                <div className="contact-split-grid">
                    {/* Left Column: The Artisan Story & Contact Info */}
                    <div className="contact-story-col">
                        <div className="contact-story-image-wrapper">
                            <img src="/brand-image/weaver_craft.png" alt="Odisha Weaver" className="contact-story-image" />
                            <div className="contact-story-overlay"></div>
                            <div className="contact-story-content">
                                <span className="contact-story-subtitle">Crafted with Grace</span>
                                <h3 className="contact-story-title">Every thread tells a story of heritage</h3>
                                <p className="contact-story-desc">
                                    Rooted in Odisha's rich thread-craft heritage, every stitch on a Nawa suit is an ode to our weavers. Have a question about our collections or your order? We are here to assist.
                                </p>
                            </div>
                        </div>

                        <div className="contact-info-list">
                            <div className="contact-info-item">
                                <div className="contact-info-icon"><PiPhoneCallThin size={24} /></div>
                                <div className="contact-info-text">
                                    <h4>Call or WhatsApp</h4>
                                    <p><Link href="tel:+919821917346">+91 98219 17346</Link></p>
                                    <span>Mon-Sat: 9 AM - 6 PM</span>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="contact-info-icon"><PiEnvelopeSimpleThin size={24} /></div>
                                <div className="contact-info-text">
                                    <h4>Email Us</h4>
                                    <p><Link href="mailto:info@nawaofficials.com">info@nawaofficials.com</Link></p>
                                    <span>We reply within 24 hours</span>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="contact-info-icon"><PiMapPinThin size={24} /></div>
                                <div className="contact-info-text">
                                    <h4>Our Workshop</h4>
                                    <p>Bhubaneswar, Odisha, India</p>
                                    <span>Handloom Cluster Area</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="contact-form-col">
                        <div className="contact-form-header">
                            <h2 className="contact-form-title">Send a Message</h2>
                            <p className="contact-form-subtitle">Fill out the form below and our team will get back to you shortly.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="contact-form-el">
                            <div className="form-group-row">
                                <div className="form-field-group">
                                    <label htmlFor="name">Your Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="form-field-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <div className="form-group-row">
                                <div className="form-field-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div className="form-field-group">
                                    <label htmlFor="orderId">Order ID (if applicable)</label>
                                    <input
                                        type="text"
                                        id="orderId"
                                        name="orderId"
                                        value={formData.orderId}
                                        onChange={handleChange}
                                        placeholder="e.g. #NW-1001"
                                    />
                                </div>
                            </div>

                            <div className="form-field-group full-width-field">
                                <label htmlFor="message">Your Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tell us how we can help you..."
                                ></textarea>
                            </div>

                            <button type="submit" className="contact-submit-btn btn-primary" disabled={submitted}>
                                {submitted ? "Sending Message..." : "Send Message"} <BsArrowRight size={18} />
                            </button>

                            {submitted && (
                                <div className="submit-success-alert">
                                    Thank you! Your message has been sent successfully. We will contact you soon.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
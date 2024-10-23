"use client"
import React from 'react';
import { FaWhatsapp, FaArrowRight } from "react-icons/fa6";

export const ContactCTA = () =>
{
    return (
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 font-sans py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0">
                        <div className="absolute -right-8 -top-8 w-48 h-48 bg-blue-100 rounded-full opacity-50" />
                        <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-blue-50 rounded-full opacity-50" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Ready to Transform Your Future?
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 mb-10">
                                Take the first step towards achieving your educational goals.
                                Our team is here to guide you every step of the way.
                            </p>

                            {/* Cards */}
                            <div className="grid md:grid-cols-2 gap-6 mb-10">
                                <div className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors duration-300">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                                    <p className="text-gray-600">Get personalized support from our experienced team</p>
                                </div>
                                <div className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors duration-300">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Response</h3>
                                    <p className="text-gray-600">We typically respond within 24 hours</p>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a
                                    href="/contact"
                                    className="group inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300"
                                >
                                    Contact Us
                                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                                <a
                                    href="https://wa.me/353899421994"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors duration-300"
                                >
                                    <FaWhatsapp className="mr-2 text-xl" />
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
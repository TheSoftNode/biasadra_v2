"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, } from 'lucide-react'
import { FaFacebook } from 'react-icons/fa6'
import { BsInstagram, BsTwitterX } from 'react-icons/bs'
import { LiaLinkedin } from 'react-icons/lia'

const Footer: React.FC = () =>
{
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        quickLinks: [
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
            { name: "Online Application", href: "https://docs.google.com/forms/d/1WD9wtTeykbfAASNj-UiruXLV-hiTkncWZ1BB6PfAqLg/edit?pli=1" },
        ],
        academicBoards: [
            { name: "Ireland", href: "/Ireland" },
            { name: "Germany", href: "/Germany" },
            { name: "United Kingdom", href: "/UK" },
            { name: "Netherlands", href: "/Netherlands" },
        ],
        aiAcademy: [
            { name: "AI4Energy", href: "/Energy" },
            { name: "AI4Art&Design", href: "/Art" },
        ],
        contact: [
            { icon: Mail, text: "contact@yourdomain.com", href: "mailto:contact@yourdomain.com" },
            { icon: Phone, text: "+1 (234) 567-8900", href: "tel:+12345678900" },
            { icon: MapPin, text: "123 Education Street, Academic District", href: "#" },
        ],
        social: [
            { icon: FaFacebook, href: "#" },
            { icon: BsTwitterX, href: "#" },
            { icon: LiaLinkedin, href: "#" },
            { icon: BsInstagram, href: "#" },
        ],
    }

    return (
        <footer className="bg-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <div className="mb-6">
                            <Image
                                src="/images/logo.jpg"
                                alt="Company Logo"
                                width={150}
                                height={60}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            Empowering students worldwide with access to quality education through our comprehensive university application platform.
                        </p>
                        <div className="flex space-x-4">
                            {footerLinks.social.map((item, index) =>
                            {
                                const Icon = item.icon
                                return (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {footerLinks.quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-indigo-600 text-sm transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Academic Programs</h3>
                        <div className="space-y-3">
                            <div>
                                <h4 className="text-gray-700 font-medium mb-2">Academic Boards</h4>
                                <ul className="space-y-2">
                                    {footerLinks.academicBoards.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                href={link.href}
                                                className="text-gray-600 hover:text-indigo-600 text-sm transition-colors duration-200"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-gray-700 font-medium mb-2">AI Academy</h4>
                                <ul className="space-y-2">
                                    {footerLinks.aiAcademy.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                href={link.href}
                                                className="text-gray-600 hover:text-indigo-600 text-sm transition-colors duration-200"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            {footerLinks.contact.map((item, index) =>
                            {
                                const Icon = item.icon
                                return (
                                    <li key={index} className="flex items-start space-x-3">
                                        <Icon className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                                        <Link
                                            href={item.href}
                                            className="text-gray-600 hover:text-indigo-600 text-sm transition-colors duration-200"
                                        >
                                            {item.text}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-600">
                            © {currentYear} Biasadra. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <Link
                                href="/privacy"
                                className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
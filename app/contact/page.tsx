import React from "react";
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

// Contact Info Card Component
interface ContactMethodProps
{
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
}

const ContactMethod: React.FC<ContactMethodProps> = ({ icon, title, value, link }) => (
  <a
    href={link}
    className="group flex items-center gap-4 p-6 rounded-xl bg-white hover:shadow-lg transition-all duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#E0EDFF] text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <div>
      <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
      <p className="font-semibold text-gray-900">{value}</p>
    </div>
  </a>
);

// Contact Form Component
const ContactForm: React.FC = () => (
  <form className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
        <input
          type="text"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          placeholder="John"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
        <input
          type="text"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          placeholder="Doe"
        />
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
      <input
        type="email"
        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        placeholder="john@example.com"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
      <input
        type="text"
        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        placeholder="How can we help?"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
      <textarea
        rows={4}
        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        placeholder="Your message..."
      />
    </div>
    <button
      type="submit"
      className="w-full bg-blue-600 text-white font-semibold py-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
    >
      Send Message
    </button>
  </form>
);

// Main Contact Page
const ContactUs: React.FC = () =>
{
  const contactMethods = [
    {
      icon: <FaWhatsapp className="text-xl" />,
      title: "WhatsApp",
      value: "+353 899 421994",
      link: "https://wa.me/353899421994"
    },
    {
      icon: <FaPhone className="text-xl" />,
      title: "Phone",
      value: "+353 899 421994",
      link: "tel:+353899421994"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email",
      value: "board@biasadra.com",
      link: "mailto:board@biasadra.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Location",
      value: "Dublin, Ireland",
      link: "https://maps.google.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-[Manrope]">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <Image
              src="/images/logo.jpg"
              alt="Biasadra Logo"
              fill
              className="object-contain p-2 rounded-3xl"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 w-full mx-auto">
            We&apos;re here 24/7 to support your journey. Whether you have questions or need assistance, our team is ready to help.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form Section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Info Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <ContactMethod key={index} {...method} />
              ))}
            </div>
            {/* Map or Additional Info */}
            <div className="mt-8 bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

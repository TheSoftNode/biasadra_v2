"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Rocket, Target, Users } from 'lucide-react';

const About = () =>
{
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const teamFeatures = [
    {
      title: "Expertise and Experience",
      content: "BIASADRA LTD consists of a team of seasoned professionals who bring years of experience in educational consultancy. Their deep knowledge ensures that students and institutions receive top-tier guidance tailored to their unique needs.",
      icon: Award,
      gradientClass: "from-blue-500 to-blue-700",
      bgClass: "bg-blue-50"
    },
    {
      title: "Personalized Approach",
      content: "Unlike many agencies that offer one-size-fits-all solutions, BIASADRA LTD takes a personalized approach. They assess each client's specific educational goals, aspirations, and challenges, providing customized support that maximizes success.",
      icon: Users,
      gradientClass: "from-purple-500 to-purple-700",
      bgClass: "bg-purple-50"
    },
    {
      title: "Innovative Solutions",
      content: "BIASADRA LTD stays ahead of industry trends by offering innovative, cutting-edge solutions. Whether it's leveraging technology for better decision-making or offering creative approaches to academic challenges, the firm continuously evolves to meet modern needs.",
      icon: Rocket,
      gradientClass: "from-indigo-500 to-indigo-700",
      bgClass: "bg-indigo-50"
    },
    {
      title: "Commitment to Success",
      content: "BIASADRA LTD is driven by a passion for helping students and institutions achieve their educational and career goals. Their dedication to client success is evident in every step of the consultancy process.",
      icon: Target,
      gradientClass: "from-pink-500 to-pink-700",
      bgClass: "bg-pink-50"
    },
    {
      title: "Global Reach",
      content: "With a broad network and global perspective, BIASADRA LTD is well-positioned to help clients navigate the complexities of both local and international education systems, expanding opportunities for students and institutions alike.",
      icon: Globe,
      gradientClass: "from-emerald-500 to-emerald-700",
      bgClass: "bg-emerald-50"
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Us Section */}
        <motion.div
          {...fadeIn}
          className="mb-16 lg:mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 font-display">
                About Us
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed font-sans tracking-wide">
                Welcome to BIASADRA LTD! We are a team of dedicated professionals committed to providing exceptional educational consultancy services. Our mission is to empower students and institutions with innovative solutions, guiding them toward success in their academic and career aspirations. We strive to help individuals and organizations achieve their educational goals through personalized support and expert advice.
              </p>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src="/images/image01.avif"
                alt="About Us"
                className="w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </motion.div>

        {/* Our Vision Section */}
        <motion.div
          {...fadeIn}
          className="mb-16 lg:mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 font-display leading-tight">
                Our Vision
              </h2>
              <p className="text-lg lg:text-xl text-gray-800 leading-relaxed font-sans tracking-wide">
                Our vision at BIASADRA LTD is to become a global leader in educational consultancy, continuously evolving to meet the diverse needs of our clients and adapting to the ever-changing landscape of education and professional development.
              </p>
              <div className="mt-6 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-purple-100">
                <p className="text-base text-purple-800 italic font-medium">
                &ldquo;Transforming educational journeys through innovative consultancy and personalized guidance.&rdquo;
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-1 flex justify-center">
              <img
                src="/images/vision.webp"
                alt="Our Vision"
                className="w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </motion.div>

        {/* Our Team Section */}
        <motion.div
          {...fadeIn}
          className="mb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">Our Expertise</span>
            <h2 className="mt-2 text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 font-display mb-4">
              Our Team
            </h2>
            <p className="mt-4 text-xl text-gray-600 font-sans tracking-wide max-w-3xl mx-auto">
              Meet the professionals dedicated to transforming educational journeys through expertise and innovation.
            </p>
          </div>

          <div className="relative mb-16">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-white px-4">
                <img
                  src="/images/team.webp"
                  alt="Our Team"
                  className="w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="relative group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className={`absolute inset-0 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r ${feature.gradientClass}`}
                />
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="p-8">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 bg-gradient-to-r ${feature.gradientClass}`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 font-display mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-sans tracking-wide">
                      {feature.content}
                    </p>
                  </div>
                  <div className={`h-1 bg-gradient-to-r ${feature.gradientClass}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;


"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FeatureCard = ({
  icon,
  title,
  description,
  index
}: {
  icon: string;
  title: string;
  description: string;
  index: number;
}) =>
{
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="relative h-full"
    >
      <div className="h-full p-6 rounded-2xl bg-white shadow-sm border border-gray-100
        hover:shadow-lg hover:border-blue-100 transition-all duration-500">
        {/* Card content container */}
        <div className="relative z-10">
          {/* Icon container */}
          <motion.div
            variants={iconVariants}
            className="relative flex items-center justify-center w-16 h-16 mb-6 rounded-2xl
              bg-blue-500 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10" />
            <Image
              src={icon}
              alt={title}
              width={32}
              height={32}
              className="relative z-10 brightness-0 invert"
            />
          </motion.div>

          {/* Content */}
          <motion.div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900">
              {title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>

            {/* Learn more link */}
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center text-blue-500 font-medium pt-3 group"
            >
              Learn more
              <motion.svg
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ x: 0 }}
                animate={{ x: 3 }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Section1: React.FC = () =>
{
  const features = [
    {
      icon: '/images/Vector1.svg',
      title: 'Smart Application Management',
      description: 'Streamline your entire application process with our AI-powered platform featuring automated tracking and instant notifications.'
    },
    {
      icon: '/images/Vector3.svg',
      title: 'Intelligent Course Matching',
      description: 'Find your perfect academic fit with our sophisticated matching algorithm that analyzes your profile and aspirations.'
    },
    {
      icon: '/images/Vector2.svg',
      title: 'Visa Support System',
      description: 'Navigate visa applications confidently with our comprehensive guidance system and real-time requirement updates.'
    },
    {
      icon: '/images/Vector4.svg',
      title: 'Financial Aid Finder',
      description: 'Discover personalized scholarship opportunities and financial aid programs tailored to your academic profile.'
    }
  ];

  return (
    <section className="relative py-24 font-[Manrope] overflow-hidden">
      {/* Clean, subtle background */}
      <div className="absolute inset-0 bg-gray-50/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/80 via-transparent to-transparent" />

      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-50/50 rounded-full filter blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-50/50 rounded-full filter blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl font-black mb-6 text-blue-600"
          >
            Why Choose BIASADRA
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Your all-in-one platform for seamless university applications, from research to enrollment,
            powered by cutting-edge technology and industry expertise.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;
import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () =>
{
  const navItem = { name: "Submit Application", link: "/Login", isButton: true };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[300px] w-full flex flex-col justify-center items-center text-background bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/ai4energy_back.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-16 md:py-24">
          <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-[Manrope] font-black text-white text-center leading-tight">
            Unlock the power of AI creativity with our AI Generation course, where you&apos;ll learn to develop and deploy AI models capable of generating text, images, and more.
          </h1>
          <p className="mt-6 md:mt-8 font-[Gotu] text-base sm:text-lg md:text-xl text-center max-w-3xl text-gray-100">
            A transition from Academic to Industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 md:mt-12">
            <Link href="/">
              <button className="bg-white text-black px-8 py-3 rounded-lg border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent">
                Apply Now
              </button>
            </Link>
            <Link href="/">
              <button className="text-white px-8 py-3 rounded-lg border-2 border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 md:mb-8 text-gray-900">
            Why Choose Our AI4Energy Course?
          </h2>
          <p className="text-lg md:text-xl mb-12 text-gray-700 max-w-4xl mx-auto">
            Our professional training courses in AI and machine learning are designed to help you excel in the fast-evolving field of artificial intelligence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-indigo-50 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">Expert Instructors</h3>
              <p className="text-gray-700">Learn from top AI experts and practitioners with real-world experience in machine learning and AI development.</p>
            </div>
            <div className="bg-indigo-50 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">Comprehensive Curriculum</h3>
              <p className="text-gray-700">Our courses cover a wide range of AI topics, from the basics of machine learning to advanced AI applications.</p>
            </div>
            <div className="bg-indigo-50 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">Flexible Learning</h3>
              <p className="text-gray-700">With both online and offline options, you can learn at your own pace and schedule, making it easier to balance studies and work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learning Outcomes Section */}
      <section className="bg-white py-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 md:mb-8 text-gray-900">
            Key Learning Outcomes
          </h2>
          <p className="text-lg md:text-xl mb-12 text-gray-700 max-w-4xl mx-auto">
            Our professional training courses in AI and machine learning are designed to help you excel in the fast-evolving field of artificial intelligence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-indigo-50 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="/images/ai4energy3.webp" alt="AI Image" className="w-full h-48 md:h-64 object-cover rounded-lg mb-6" />
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">Apply AI to Smart Grid Management:</h3>
              <p className="text-gray-700">Understand how AI technologies can enhance electricity distribution by forecasting demand, optimizing energy flow, and supporting the integration of renewable energy sources to improve efficiency and reduce waste.</p>
            </div>
            <div className="bg-indigo-50 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="/images/ai4energy4.webp" alt="AI Image" className="w-full h-48 md:h-64 object-cover rounded-lg mb-6" />
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">Implement AI for Predictive Maintenance:</h3>
              <p className="text-gray-700">Use AI-driven solutions to predict and prevent equipment failures within energy infrastructure, enabling proactive maintenance, increasing system reliability, and minimizing operational downtime.</p>
            </div>
            <div className="bg-indigo-50 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="/images/ai4energy2.webp" alt="AI Image" className="w-full h-48 md:h-64 object-cover rounded-lg mb-6" />
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">Optimize Energy Consumption with AI:</h3>
              <p className="text-gray-700">Leverage AI tools to analyze usage patterns and dynamically adjust energy consumption across various sectors, promoting energy efficiency, cost savings, and a lower environmental footprint.</p>
            </div>
            <div className="bg-indigo-50 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="/images/ai4energy1.webp" alt="AI Image" className="w-full h-48 md:h-64 object-cover rounded-lg mb-6" />
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">Utilize AI for Renewable Energy Forecasting:</h3>
              <p className="text-gray-700">Analyze how AI can enhance the accuracy of energy production forecasts from renewable sources, contributing to better grid balancing and a reduced dependence on fossil fuels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 md:mb-8 text-gray-900">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-lg md:text-xl mb-12 text-gray-700 max-w-4xl mx-auto">
            Submit your application today and begin your professional training in AI and machine learning with our expert-led courses.
          </p>
          <div className="mt-8">
            <Link href={navItem.link}>
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-lg font-semibold">
                {navItem.name}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () =>
{
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-96 w-full flex flex-col justify-center items-center text-background bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/ai4energy_back.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-[Manrope] font-black text-white text-center">
            Unlock the power of AI creativity with our AI Generation course, where you&apos;ll learn to develop and deploy AI models capable of generating text, images, and more.
          </h1>
          <p className="mt-8 font-[Gotu] text-lg md:text-xl text-center max-w-3xl">
            A transition from Academic to Industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
            <Link href="/">
              <button className="bg-white text-black px-6 py-2 rounded border border-white hover:bg-transparent hover:text-white transition-colors">
                Apply Now
              </button>
            </Link>
            <Link href="/">
              <button className="text-white px-6 py-2 rounded border border-white hover:bg-white hover:text-black transition-colors">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* New Section - Why Choose Us */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Our AI4Energy Course?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Our professional training courses in AI and machine learning are designed to help you excel in the fast-evolving field of artificial intelligence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Expert Instructors</h3>
              <p>Learn from top AI experts and practitioners with real-world experience in machine learning and AI development.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Comprehensive Curriculum</h3>
              <p>Our courses cover a wide range of AI topics, from the basics of machine learning to advanced AI applications.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Flexible Learning</h3>
              <p>With both online and offline options, you can learn at your own pace and schedule, making it easier to balance studies and work.</p>
            </div>
          </div>
          <div className="mt-8">

          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Key Learning Outcomes
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Our professional training courses in AI and machine learning are designed to help you excel in the fast-evolving field of artificial intelligence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Course */}
            <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
              <img src="/images/ai4energy3.webp" alt="AI Image" className="mb-4 rounded-lg" />
              <h3 className="text-2xl font-semibold mb-4">Apply AI to Smart Grid Management:</h3>
              <p>
                Understand how AI technologies can enhance electricity distribution by forecasting demand, optimizing energy flow, and supporting the integration of renewable energy sources to improve efficiency and reduce waste.
              </p>
            </div>

            {/* Second Course */}
            <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
              <img src="/images/ai4energy4.webp" alt="AI Image" className="mb-4 rounded-lg" />
              <h3 className="text-2xl font-semibold mb-4">Implement AI for Predictive Maintenance:</h3>
              <p>
                Use AI-driven solutions to predict and prevent equipment failures within energy infrastructure, enabling proactive maintenance, increasing system reliability, and minimizing operational downtime.
              </p>
            </div>

            {/* Third Course */}
            <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
              <img src="/images/ai4energy2.webp" alt="AI Image" className="mb-4 rounded-lg" />
              <h3 className="text-2xl font-semibold mb-4">Optimize Energy Consumption with AI:</h3>
              <p>
                Leverage AI tools to analyze usage patterns and dynamically adjust energy consumption across various sectors, promoting energy efficiency, cost savings, and a lower environmental footprint.
              </p>
            </div>

            {/* Fourth Course */}
            <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
              <img src="/images/ai4energy1.webp" alt="AI Image" className="mb-4 rounded-lg" />
              <h3 className="text-2xl font-semibold mb-4">Utilize AI for Renewable Energy Forecasting:</h3>
              <p>
                Analyze how AI can enhance the accuracy of energy production forecasts from renewable sources, contributing to better grid balancing and a reduced dependence on fossil fuels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Submit your application today and begin your professional training in AI and machine learning with our expert-led courses.
          </p>

          <div className="mt-8">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-colors">
              Submit Application
            </button>
          </div>
        </div>
      </section>


    </>
  );
};

export default Hero;

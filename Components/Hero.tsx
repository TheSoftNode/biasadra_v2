import React from 'react';
import Link from 'next/link';
import { ArrowRight, GraduationCap } from 'lucide-react';

const Hero: React.FC = () =>
{
  const navItem = { name: "Apply Now", link: "/Login", isButton: true };

  return (
    <section className="relative min-h-[60vh] w-full flex flex-col justify-center items-center bg-cover bg-center bg-fixed overflow-hidden"
      style={{
        backgroundImage: "url('/images/Figma_hero.jpg')",
      }}
    >
      {/* Gradient overlay with animated shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />

      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4 md:px-6 lg:px-8 py-12 max-w-6xl mx-auto">
        {/* Small decorative element */}
        <div className="flex items-center gap-2 mb-4 animate-fade-in-up">
          <GraduationCap className="w-5 h-5 text-indigo-400" />
          <span className="text-sm font-medium text-indigo-200 tracking-wide">
            Your Global Education Journey Starts Here
          </span>
        </div>

        {/* Main heading with gradient text effect */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-[Manrope] font-black text-center 
          bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-indigo-200
          leading-tight animate-fade-in-up [animation-delay:200ms]">
          The Smart, Easy Way to
          <span className="block mt-1">Apply to Universities Worldwide</span>
        </h1>

        {/* Subtitle with balanced max-width */}
        <p className="mt-6 font-[Gotu] text-base md:text-lg text-center max-w-2xl 
          text-gray-200 leading-relaxed animate-fade-in-up [animation-delay:400ms]">
          Manage your entire application process seamlessly, from research to final decision,
          with our comprehensive platform designed for your success.
        </p>

        {/* CTA buttons with enhanced hover effects */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 w-full max-w-md mx-auto 
          animate-fade-in-up [animation-delay:600ms]">
          <Link
            href="https://docs.google.com/forms/d/1WD9wtTeykbfAASNj-UiruXLV-hiTkncWZ1BB6PfAqLg/edit?pli=1"
            className="flex-1"
          >
            <button className="w-full bg-white text-black px-6 py-3 rounded-lg font-semibold
              border-2 border-white hover:bg-transparent hover:text-white
              transition-all duration-300 ease-in-out transform hover:scale-105
              flex items-center justify-center gap-2 group">
              {navItem.name}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>

          <Link href="/" className="flex-1">
            <button className="w-full text-white px-6 py-3 rounded-lg font-semibold
              border-2 border-white/80 hover:bg-white hover:text-black
              transition-all duration-300 ease-in-out transform hover:scale-105
              backdrop-blur-sm hover:border-white">
              Learn More
            </button>
          </Link>
        </div>

        {/* Stats or trust indicators */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 
          animate-fade-in-up [animation-delay:800ms]">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">50+</div>
            <div className="text-xs md:text-sm text-gray-300">Partner Universities</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">95%</div>
            <div className="text-xs md:text-sm text-gray-300">Success Rate</div>
          </div>
          <div className="text-center hidden md:block">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-xs md:text-sm text-gray-300">Support Available</div>
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
    </section>
  );
};

export default Hero;
"use client"

import React from 'react';
import Image from 'next/image';

interface BenefitItemProps
{
  icon: string;
  title: string;
  description: string;
}


const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, description }) => (
  <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-white/50 transition-colors duration-200">
    <div className="mt-1">
      <Image
        src={icon}
        alt="checkmark"
        width={20}
        height={20}
        className="flex-shrink-0"
      />
    </div>
    <div className="flex-1">
      <h3 className="font-semibold text-base md:text-lg text-gray-900 mb-1.5">
        {title}
      </h3>
      <p className="text-sm md:text-base text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const Section2: React.FC = () =>
{
  const benefits: BenefitItemProps[] = [
    {
      title: "Diverse University Options",
      description: "Explore a wide range of universities in different regions, from Ivy League schools in the U.S. to prestigious universities in Europe and Asia.",
      icon: "/images/Vector5.png"
    },
    {
      title: "Study Abroad Opportunities",
      description: "Apply to top universities in countries known for their excellence in higher education, and broaden your cultural and academic horizons.",
      icon: "/images/Vector5.png"
    },
    {
      title: "Customizable Filters",
      description: "Narrow your search by location, program, tuition fees, and more to find the perfect match for your educational and career goals.",
      icon: "/images/Vector5.png"
    },
    {
      title: "Global Network, Local Focus",
      description: "Whether you want to study in a nearby country or halfway across the world, our platform makes it easy to find and apply to universities that align with your aspirations.",
      icon: "/images/Vector5.png"
    }
  ];

  return (
    <section className="bg-[#E0EDFF] w-full">
      <div className="container mx-auto px-6 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-stretch">
          {/* Image Container */}
          <div className="flex items-center justify-center h-full min-h-[300px] md:min-h-full relative order-1 md:order-none">
            <div className="w-full h-full relative aspect-[4/3] md:aspect-square">
              <Image
                src="/images/Section2.png"
                alt="Section 2"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Content Container */}
          <div className="flex flex-col h-full order-2 md:order-none">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
              Key Benefits
            </h2>

            <div className="flex flex-col gap-1 md:gap-4 flex-grow">
              {benefits.map((benefit, index) => (
                <BenefitItem
                  key={index}
                  {...benefit}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;


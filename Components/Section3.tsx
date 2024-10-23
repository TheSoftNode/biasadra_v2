// import React from 'react'
// import Image from 'next/image'

// const Section3: React.FC = () => {

//   return (
//     <div className='mt-32 font-[Manrope] flex flex-col space-y-8'>
//       <h1 className=" text-4xl font-black text-center">
//         Who Can Benefit from Biasadra board
//       </h1>
//       <p className='text-center'>
//       All-in-one platform, you can manage every aspect of your application process from research to final decision, ensuring you never miss a step.
//       </p>
//       <div className='py-5 px-7 grid grid-cols-4 gap-4 '>
//         <div className="flex flex-col justify-center items-center">
//           <Image
//             src='/images/AboutImg03.avif'
//             alt='Group 1'
//             width={250}
//             height={200}
//             className='mt-2'
//           />
//           <div className='justify-center items-center text-center mt-7 space-y-3'>
//           <p className="font-black">High School Students</p>
//            <p>Start early by exploring colleges and <br />creating a strategic plan for your future. <br />Manage your tests, recommendations, and <br />application documents all in one place.</p>
//           </div>
//         </div>
//         <div className="flex flex-col justify-center items-center">
//         <Image
//             src='/images/AboutImg02.avif'
//             alt='Group 3'
//             width={250}
//             height={200}
//             className=''
//           />
//           <div className='justify-center items-center text-center mt-7 space-y-3'>
//           <p className="font-black">Transfer Students</p>
//            <p>Our platform makes it easy to find transfer <br />opportunities, organize documents, and <br />apply with confidence.</p>
//           </div>
//         </div>
//         <div className="flex flex-col justify-center items-center">
//         <Image
//             src='/images/GalleryImg05.avif'
//             alt='Group 2'
//             width={250}
//             height={200}
//             className=''
//           />
//           <div className='justify-center items-center text-center mt-7 space-y-3'>
//           <p className="font-black">International Students</p>
//            <p>With translation tools, document storage, <br />and global university search, international <br />applications have never been easier.</p>
//           </div>
//         </div>
//         <div className="flex flex-col justify-center items-center">
//         <Image
//             src='/Contact_img.avif'
//             alt='Group 4'
//             width={250}
//             height={200}
//             className=''
//           />
//           <div className='justify-center items-center text-center mt-7 space-y-3'>
//           <p className="font-black">Educators & Counsellors</p>
//            <p>Help students succeed by tracking their <br />progress, offering feedback, and managing <br />recommendation letter requests through <br />our collaborative platform.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section3

import React from 'react';
import Image from 'next/image';

interface BenefitCardProps
{
  image: string;
  title: string;
  description: string;
  alt: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ image, title, description, alt }) => (
  <div className="group bg-white/40 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-4">
    <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden rounded-lg">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
    </div>
    <div className="p-2">
      <h3 className="font-black text-[#1a1a1a] mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {description.split('<br />').join(' ')}
      </p>
    </div>
  </div>
);

const Section3: React.FC = () =>
{
  const benefits: BenefitCardProps[] = [
    {
      image: '/images/AboutImg03.avif',
      title: 'High School Students',
      description: 'Start early by exploring colleges and creating a strategic plan for your future. Manage your tests, recommendations, and application documents all in one place.',
      alt: 'High School Students'
    },
    {
      image: '/images/AboutImg02.avif',
      title: 'Transfer Students',
      description: 'Our platform makes it easy to find transfer opportunities, organize documents, and apply with confidence.',
      alt: 'Transfer Students'
    },
    {
      image: '/images/GalleryImg05.avif',
      title: 'International Students',
      description: 'With translation tools, document storage, and global university search, international applications have never been easier.',
      alt: 'International Students'
    },
    {
      image: '/Contact_img.avif',
      title: 'Educators & Counsellors',
      description: 'Help students succeed by tracking their progress, offering feedback, and managing recommendation letter requests through our collaborative platform.',
      alt: 'Educators and Counsellors'
    }
  ];

  return (
    <section className="py-16 font-[Manrope] bg-[#E0EDFF]/30">
      <div className="container mx-auto max-w-7xl px-4 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-4">
            Who Can Benefit from Biasadra board
          </h1>
          <p className="text-gray-600">
            All-in-one platform, you can manage every aspect of your application process from research to final decision, ensuring you never miss a step.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              {...benefit}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
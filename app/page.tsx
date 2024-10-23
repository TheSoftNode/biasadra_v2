import React from 'react';
import Hero from '../Components/Hero';
import Section1 from '../Components/Section1';
import Section2 from '../Components/Section2';
import Section3 from '../Components/Section3';
import { ContactCTA } from '../Components/ContactCTA';


const page = () =>
{
  return (
    <div className='flex flex-col'>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <ContactCTA />
    </div>
  )
}

export default page;

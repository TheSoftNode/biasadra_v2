"use client";
import React, { useState } from 'react';
import Link from 'next/link';
interface Course {
  name: string;
  description: string;
  features: string[]; // Added features array
}

interface College {
  name: string;
  courses: Course[];
}

const colleges: College[] = [
  {
    name: 'University of Europe for Applied Sciences',
    courses: [

      {
        name: 'MA Communication Design(Berlin, Germany)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: 'MA Design Leadership (Hamburg, Germany)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: 'MA Digital Content Creation(Hamburg, Germany)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: 'MA Generative Design and AI (UE Innovation Hub, Germany)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: 'MA Innovation Design Management (UE Innovation Hub, Germany)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: 'MA International Sport and Event Management(Berlin, Germany)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: 'MA Marketing Management(Hamburg, Germany)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },


      {
        name: 'MA Photography (Berlin, Germany)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },

      {
        name: 'MA Visual and Experience Design (UE Innovation Hub, Germany)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: 'MBA Digital Health Transformation(Iserlohn, Germany)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },

      {
        name: ' B.A. Communication Design with Foundation Diploma (Berlin, Germany)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: 'B.A. Digital Product Management with Foundation Diploma (UE Innovation Hub, Germany)',
        description: ' 1.5 Years, 7/10/2024,26/2/2025, 13/5/2025, 3/7/2025, 6/10/2025  Tuition fees: 14850 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: 'B.A. Digital Product Management with Foundation Diploma (UE Innovation Hub, Germany)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: 'B.A. Film + Motion Design with Foundation Diploma (Berlin, Germany)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: 'B.A. Game Design with Foundation Diploma (Berlin, Germany)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: ' B.A. Illustration with Foundation Diploma (Berlin, Germany)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },

      {
        name: ' B.A. Illustration with Foundation Diploma (Berlin, Germany)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: 'MBA Digital Health Transformation(Iserlohn, Germany)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
        
      },

      {
        name: 'Master of Social Science (Social Work)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
        
      },
      
       

       
       

      
       
    ],
  },
  
  {
    name: 'Berlin School of Business and Innovation',
    courses: [
      {
        name: 'DBA Doctorate in Business Administration:Doctorate (Berlin, Germany)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: 'Global MBA - UCA (Berlin, Germany)',
        description: ' 1.5 Years, 7/10/2024,26/2/2025, 13/5/2025, 3/7/2025, 6/10/2025  Tuition fees: 14850 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: 'MA Game Design (Hamburg, Germany)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: 'MA in Energy Management (Berlin, Germany)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: 'BA (Hons) Animation (Hamburg, Germany)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: 'BA (Hons) Animation (Hamburg, Germany)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: 'Master of Social Science (Social Work)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
        
      },

      {
        name: 'Master of Social Science (Social Work)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
        
      },
      
       

       
       

      
       
    ],
  },
  {
    name: 'Gisma University of Applied Sciences',
    courses: [
      {
        name: 'MSc Business Management & Cybersecurity / MSc IBM (Berlin, Germany)',
        description: ' 2 Years, 1/1/2025: 12750 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: 'MSc Business Management & Finance / MSc IBM (Berlin, Germany)',
        description: ' 2 Years, 1/1/2025: 12750 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: 'MSc Business Management & Human Resources / MSc IBM (Berlin, Germany)',
        description: ' 2 Years, 1/1/2025: 12750 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: 'MSc Business Management & Project Management / MSc IBM (Berlin, Germany)',
        description: ' 2 Years, 1/1/2025: 12750 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: 'MSc Data Science, AI and Digital Business / MSc IBM (Berlin, Germany)',
        description: ' 2 Years, 1/1/2025: 12750 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      {
        name: 'BA (Hons) Animation (Hamburg, Germany)',
        description: ' Hamburg, 3 Years, 7/10/2024, Intake:7/10/2024: 33000 EUR, 6/10/2025: 33000 EUR',
        features: [
          'IELTS:	6 or Equivalent',
           
        ],
      },
      

      
       
    ],
  },

];

const CollegeCourseSelection: React.FC = () => {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleCollegeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const college = colleges.find(u => u.name === event.target.value) || null;
    setSelectedCollege(college);
    setSelectedCourse(null);
  };

  const handleCourseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (selectedCollege) {
      const course = selectedCollege.courses.find(c => c.name === event.target.value) || null;
      setSelectedCourse(course);
    }
  };

  const handleStartApplication = () => {
    alert(`Starting application for ${selectedCourse?.name} at ${selectedCollege?.name}`);
  };
  const navItem = { name: "Submit Application", link: "/Login", isButton: true };
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-6 md:p-12 animate-gradient-xy">
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          College and Course Selection
        </h1>

        <div className="space-y-8">
          <div className="relative">
            <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-2">
              Select College
            </label>
            <div className="relative">
              <select
                id="college"
                className="block w-full pl-4 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent rounded-lg shadow-sm transition duration-150 ease-in-out bg-white appearance-none"
                onChange={handleCollegeChange}
                value={selectedCollege?.name || ''}
              >
                <option value="">-- Choose a College --</option>
                {colleges.map((college, index) => (
                  <option key={index} value={college.name}>
                    {college.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          {selectedCollege && (
            <div className="relative">
              <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                Select Course
              </label>
              <div className="relative">
                <select
                  id="course"
                  className="block w-full pl-4 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent rounded-lg shadow-sm transition duration-150 ease-in-out bg-white appearance-none"
                  onChange={handleCourseChange}
                  value={selectedCourse?.name || ''}
                >
                  <option value="">-- Choose a Course --</option>
                  {selectedCollege.courses.map((course, index) => (
                    <option key={index} value={course.name}>
                      {course.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          )}

          {selectedCourse && (
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100 shadow-sm">
              <h2 className="text-xl font-semibold text-indigo-900 mb-3">{selectedCourse.name}</h2>
              <p className="text-indigo-800 mb-3">{selectedCourse.description}</p>
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">Minimum English language requirements:</h3>
              <ul className="list-disc list-inside text-indigo-800">
                {selectedCourse.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {selectedCourse && (
            <div className="pt-6 flex justify-center">
           <Link href="https://docs.google.com/forms/d/1WD9wtTeykbfAASNj-UiruXLV-hiTkncWZ1BB6PfAqLg/edit?pli=1">
  <button
    onClick={handleStartApplication}
    className="w-full px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  >
    {navItem.name}
  </button>
</Link>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollegeCourseSelection;

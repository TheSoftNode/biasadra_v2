// // Add this line to make the component a Client Component
// "use client";

// import React, { useState } from 'react';

// const AuthForm = () => {
//   const [isLogin, setIsLogin] = useState(true); // To toggle between Sign Up and Login

//   // Add new fields: fullName, courseName, and birthday
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     courseName: '',
//     birthday: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your logic here (e.g., form submission or API call)
//     console.log(isLogin ? 'Log In submitted' : 'Sign Up submitted', formData);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             {isLogin ? 'Log In to Your Account' : 'Sign Up for Your Account'}
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             {isLogin ? (
//               <>
//                 Don't have an account?{' '}
//                 <button
//                   className="font-medium text-indigo-600 hover:text-indigo-500"
//                   onClick={() => setIsLogin(false)}
//                 >
//                   Sign Up
//                 </button>
//               </>
//             ) : (
//               <>
//                 Already have an account?{' '}
//                 <button
//                   className="font-medium text-indigo-600 hover:text-indigo-500"
//                   onClick={() => setIsLogin(true)}
//                 >
//                   Log In
//                 </button>
//               </>
//             )}
//           </p>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <input type="hidden" name="remember" value="true" />
//           <div className="rounded-md shadow-sm -space-y-px">
//             {/* Full Name (only for Sign Up) */}
//             {!isLogin && (
//               <>
//                 <div>
//                   <label htmlFor="fullName" className="sr-only">
//                     Full Name
//                   </label>
//                   <input
//                     id="fullName"
//                     name="fullName"
//                     type="text"
//                     required
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                     placeholder="Full Name"
//                   />
//                 </div>
//                 {/* Course Name */}
//                 <div>
//                   <label htmlFor="courseName" className="sr-only">
//                     Course Name
//                   </label>
//                   <input
//                     id="courseName"
//                     name="courseName"
//                     type="text"
//                     required
//                     value={formData.courseName}
//                     onChange={handleChange}
//                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                     placeholder="Course Name"
//                   />
//                 </div>
//                 {/* Birthday */}
//                 <div>
//                   <label htmlFor="birthday" className="sr-only">
//                     Birthday
//                   </label>
//                   <input
//                     id="birthday"
//                     name="birthday"
//                     type="date"
//                     required
//                     value={formData.birthday}
//                     onChange={handleChange}
//                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                     placeholder="Birthday"
//                   />
//                 </div>
//               </>
//             )}

//             {/* Email */}
//             <div>
//               <label htmlFor="email" className="sr-only">
//                 Email Address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Email Address"
//               />
//             </div>
//             {/* Password */}
//             <div>
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Password"
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               {isLogin ? 'Log In' : 'Sign Up'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;

"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData
{
  fullName: string;
  email: string;
  password: string;
  courseName: string;
  birthday: string;
}

const AuthForm: React.FC = () =>
{
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    courseName: '',
    birthday: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
  {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>
  {
    e.preventDefault();
    console.log(isLogin ? 'Log In submitted' : 'Sign Up submitted', formData);
  };

  return (
    <div className="min-h-[500px] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? 'Log In to Your Account' : 'Sign Up for Your Account'}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {isLogin ? (
              <>
                Don&apos;t have an account?{' '}
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
                  onClick={() => setIsLogin(true)}
                >
                  Log In
                </button>
              </>
            )}
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm space-y-4">
            {/* Full Name (only for Sign Up) */}
            {!isLogin && (
              <>
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="John Doe"
                  />
                </div>
                {/* Course Name */}
                <div>
                  <label htmlFor="courseName" className="block text-sm font-medium text-gray-700 mb-1">
                    Course Name
                  </label>
                  <input
                    id="courseName"
                    name="courseName"
                    type="text"
                    required
                    value={formData.courseName}
                    onChange={handleChange}
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Computer Science"
                  />
                </div>
                {/* Birthday */}
                <div>
                  <label htmlFor="birthday" className="block text-sm font-medium text-gray-700 mb-1">
                    Birthday
                  </label>
                  <input
                    id="birthday"
                    name="birthday"
                    type="date"
                    required
                    value={formData.birthday}
                    onChange={handleChange}
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </>
            )}

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="your@email.com"
              />
            </div>
            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              {isLogin ? 'Log In' : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;

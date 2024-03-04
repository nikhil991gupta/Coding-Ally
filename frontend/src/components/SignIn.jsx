// import logo from "../assets/logo11.png";
// import Navbar from "./Navbar";

// const SignIn = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="flex justify-center items-center bg-white">
//         <div className="max-w-screen-lg flex flex-col md:flex-row w-full mx-6">
//           <div className="md:w-1/2 py-8 md:py-0">
//             <form className="bg-white shadow-md rounded px-8 py-8">
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//                   Username
//                 </label>
//                 <input
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="username"
//                   type="text"
//                   placeholder="Username"
//                 />
//               </div>
//               <div className="mb-6">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//                   Password
//                 </label>
//                 <input
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//                   id="password"
//                   type="password"
//                   placeholder="Password"
//                 />
//               </div>
//               <div className="flex items-center justify-between">
//                 <button
//                   className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                   type="button"
//                 >
//                   Sign In
//                 </button>
//                 <p className="text-gray-500 text-xs">
//                   New to Coding Ally? <a className="text-purple-600 hover:text-purple-800" href="#">Sign Up</a>
//                 </p>
//               </div>
//             </form>
//           </div>
//           <div className="md:w-1/2 flex flex-col items-center py-8 md:py-0">
//             <img src={logo} alt="Coding Ally Logo" className="w-32 mb-4" />
//             <h2 className="text-gray-800 text-2xl font-bold mb-4">Welcome to Coding Ally</h2>
//             <p className="text-gray-600 text-lg mb-8">
//               Sign in to continue to your account.
//             </p>
//             <div className="space-y-4">
//               <div className="flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-purple-600 mr-2"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17 13v-2a4 4 0 00-4-4H5m14 6v2a4 4 0 01-4 4H5"
//                   />
//                 </svg>
//                 <p className="text-gray-700">"dwnjnjeknnjknjkekek"</p>
//               </div>
//               <div className="flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-purple-600 mr-2"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17 13v-2a4 4 0 00-4-4H5m14 6v2a4 4 0 01-4 4H5"
//                   />
//                 </svg>
//                 <p className="text-gray-700">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
//               </div>
//               <div className="flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-purple-600 mr-2"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17 13v-2a4 4 0 00-4-4H5m14 6v2a4 4 0 01-4 4H5"
//                   />
//                 </svg>
//                 <p className="text-gray-700">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };


// export default SignIn;




import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post('/api/auth/signin', { username, password });
      // Handle successful sign-in, such as redirecting the user to another page
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 py-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
        <div className="flex items-center justify-between">
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSignIn}
          >
            Sign In
          </button>
          <p className="text-gray-500 text-xs">
            New to Coding Ally? <a className="text-purple-600 hover:text-purple-800" href="#">Sign Up</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;


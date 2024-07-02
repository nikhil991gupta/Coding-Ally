// // import Navbar from './Navbar';
// import Footer from './Footer';

// function SignUp() {
//   return (
//     <>
//       {/* <Navbar /> */}
//       <div className="flex items-center justify-center h-screen">
//         <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//               Username
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="username"
//               type="text"
//               placeholder="Username"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//               id="password"
//               type="password"
//               placeholder="******************"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
//               Confirm Password
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//               id="confirmPassword"
//               type="password"
//               placeholder="******************"
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="button"
//             >
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default SignUp;
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

function SignUp() {
  // State variables to store form input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle form submission
  const handleSignUp = async () => {
    try {
      // Check if passwords match
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      // Make HTTP POST request to backend API endpoint
      const response = await axios.post('/api/signup', {
        username,
        password
      });

      // Handle success response
      alert(response.data.message);
      
      // Reset form fields after successful signup
      setUsername('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      // Handle error response
      console.error('Error signing up:', error.response.data.message);
      alert('Error signing up');
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="******************"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSignUp} // Call handleSignUp function on button click
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;

// import { useState } from 'react';

// const InterviewTips = () => {
//   const [questionnaire, setQuestionnaire] = useState({
//     fullName: '',
//     email: '',
//     graduationYear: '',
//     major: '',
//     tip1: '',
//     tip2: '',
//     tip3: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setQuestionnaire({
//       ...questionnaire,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Questionnaire submitted:', questionnaire);
//     // Clear form fields
//     setQuestionnaire({
//       fullName: '',
//       email: '',
//       graduationYear: '',
//       major: '',
//       tip1: '',
//       tip2: '',
//       tip3: '',
//     });
//   };

//   return (
//     <section className="container mx-auto px-6 py-10">
//       <h2 className="text-3xl font-bold text-gray-800 mb-6">Interview Tips Questionnaire</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="mb-4">
//             <label htmlFor="fullName" className="block text-gray-800 font-medium">Full Name</label>
//             <input type="text" id="fullName" name="fullName" value={questionnaire.fullName} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" required />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-800 font-medium">Email</label>
//             <input type="email" id="email" name="email" value={questionnaire.email} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" required />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="graduationYear" className="block text-gray-800 font-medium">Graduation Year</label>
//             <input type="text" id="graduationYear" name="graduationYear" value={questionnaire.graduationYear} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" required />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="major" className="block text-gray-800 font-medium">Major</label>
//             <input type="text" id="major" name="major" value={questionnaire.major} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" required />
//           </div>
//           <div className="col-span-2 mb-4">
//             <label className="block text-gray-800 font-medium">What are your top 3 interview tips?</label>
//             <textarea id="tip1" name="tip1" value={questionnaire.tip1} onChange={handleInputChange} rows="3" className="mt-1 p-2 w-full border rounded-md resize-none" required></textarea>
//           </div>
//           <div className="col-span-2 mb-4">
//             <textarea id="tip2" name="tip2" value={questionnaire.tip2} onChange={handleInputChange} rows="3" className="mt-1 p-2 w-full border rounded-md resize-none" required></textarea>
//           </div>
//           <div className="col-span-2 mb-4">
//             <textarea id="tip3" name="tip3" value={questionnaire.tip3} onChange={handleInputChange} rows="3" className="mt-1 p-2 w-full border rounded-md resize-none" required></textarea>
//           </div>
//         </div>
//         <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
//       </form>
//     </section>
//   );
// };

// export default InterviewTips;


import { useState } from 'react';
import Navbar from './Navbar';

const InterviewTips = () => {
  const [questionnaire, setQuestionnaire] = useState({
    fullName: '',
    email: '',
    Role: '',
    Company: '',
    tip1: '',
    tip2: '',
    tip3: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuestionnaire({
      ...questionnaire,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Questionnaire submitted:', questionnaire);
    // Clear form fields
    setQuestionnaire({
      fullName: '',
      email: '',
      Role: '',
      Company: '',
      tip1: '',
      tip2: '',
      tip3: '',
    });
  };

  return (
    <>
    <Navbar/>
    <section className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Interview Tips Questionnaire</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-800 font-medium">Full Name</label>
            <input type="text" id="fullName" name="fullName" value={questionnaire.fullName} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 font-medium">Email</label>
            <input type="email" id="email" name="email" value={questionnaire.email} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="graduationYear" className="block text-gray-800 font-medium">Graduation Year</label>
            <input type="text" id="graduationYear" name="graduationYear" value={questionnaire.graduationYear} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="major" className="block text-gray-800 font-medium">Major</label>
            <input type="text" id="major" name="major" value={questionnaire.major} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" required />
          </div>
          <div className="col-span-2 mb-4">
            <label className="block text-gray-800 font-medium">What are your top 3 interview tips?</label>
            <textarea id="tip1" name="tip1" value={questionnaire.tip1} onChange={handleInputChange} rows="3" className="mt-1 p-2 w-full border rounded-md resize-none" required></textarea>
          </div>
          <div className="col-span-2 mb-4">
            <textarea id="tip2" name="tip2" value={questionnaire.tip2} onChange={handleInputChange} rows="3" className="mt-1 p-2 w-full border rounded-md resize-none" required></textarea>
          </div>
          <div className="col-span-2 mb-4">
            <textarea id="tip3" name="tip3" value={questionnaire.tip3} onChange={handleInputChange} rows="3" className="mt-1 p-2 w-full border rounded-md resize-none" required></textarea>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
      </form>

      <div className="mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Interview Tips</h2>
        <ul className="list-disc list-inside">
          <li>Learn about your interviewers and the company</li>
          <li>Use the company's product</li>
          <li>Ask for the interview format</li>
          <li>Prepare your answers for commonly asked interview questions</li>
          <li>Read the job description more than twice</li>
          <li>Answer questions using the STAR method</li>
          <li>Ask for help to practice your answers</li>
          <li>Prepare a reference list</li>
          <li>Come prepared with your work examples</li>
          <li>Have smart questions for the interviewers</li>
        </ul>
      </div>
    </section>
    </>
  );
};

export default InterviewTips;

import { useState } from 'react';
// import interviewImage from "./assets/interview.jpg";
import Navbar from './Navbar';

const MockInterview = () => {
  const [bookingInfo, setBookingInfo] = useState({
    name: '',
    email: '',
    date: '',
    sessionType: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo({
      ...bookingInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', bookingInfo);
    // Clear form fields
    setBookingInfo({
      name: '',
      email: '',
      date: '',
      sessionType: '',
    });
  };

  return (

    <>
          <Navbar/>

    <section className="container mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          {/* <img src={interviewImage} alt="Mock Interview" className="rounded-lg shadow-lg" /> */}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Mock Interviews & 1-on-1 Sessions</h2>
          <p className="text-gray-600 mb-6">Prepare for your upcoming interviews with our experienced professionals. Book a mock interview or a personalized 1-on-1 session to boost your confidence and improve your interview skills.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-800 font-medium">Name</label>
              <input type="text" id="name" name="name" value={bookingInfo.name} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800 font-medium">Email</label>
              <input type="email" id="email" name="email" value={bookingInfo.email} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" required />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-800 font-medium">Preferred Date</label>
              <input type="date" id="date" name="date" value={bookingInfo.date} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" required />
            </div>
            <div className="mb-4">
              <label htmlFor="sessionType" className="block text-gray-800 font-medium">Session Type</label>
              <select id="sessionType" name="sessionType" value={bookingInfo.sessionType} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" required>
                <option value="">Select Session Type</option>
                <option value="Mock Interview">Mock Interview</option>
                <option value="1-on-1 Session">1-on-1 Session</option>
              </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Book Now</button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default MockInterview;

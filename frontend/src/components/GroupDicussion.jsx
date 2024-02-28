import { useState } from 'react';
// import discussionImage from "./assets/group_discussion.jpg";
import Navbar from './Navbar';

const GroupDiscussion = () => {
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
          {/* <img src={discussionImage} alt="Group Discussion" className="rounded-lg shadow-lg" /> */}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Group Discussions & Debate Sessions</h2>
          <p className="text-gray-600 mb-6">Participate in group discussions and debate sessions to enhance your communication skills, critical thinking, and teamwork abilities. Our experienced moderators will guide you through various topics and provide valuable feedback.</p>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Tips and Strategies:</h3>
          <ul className="list-disc list-inside mb-6">
            <li>Listen actively to other participants and respect their viewpoints.</li>
            <li>Organize your thoughts before speaking and express yourself clearly and concisely.</li>
            <li>Maintain eye contact and use appropriate body language to convey confidence.</li>
            <li>Support your arguments with relevant examples and evidence.</li>
            <li>Stay calm and composed, even in challenging situations.</li>
          </ul>
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
                <option value="Group Discussion">Group Discussion</option>
                <option value="Debate Session">Debate Session</option>
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

export default GroupDiscussion;

// import img1 from "../assets/statsimg-1.jpg";
// import img2 from "../assets/statsimg-2.jpg";
// import img3 from "../assets/statsimg-3.jpg";

// const Stats = () => {
//   return (
//     <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="max-w-2xl mx-auto text-center">
//           <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
//             Trusted by Atheletes & Fitness Experts
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
//           <div className="md:px-4 lg:px-10">
//             <img
//               className="-rotate-1 rounded-lg"
//               src={img1}
//               alt=""
//             />
//             <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
//               Quick Home Workouts
//             </h3>
//             <p className="mt-4 text-base text-gray-600">
//                 Keep your results going strong with aour easy to follow home routines in less time
//             </p>
//           </div>

//           <div className="md:px-4 lg:px-10  ">
//             <img
//               className="rotate-1 rounded-lg"
//               src={img2}
//               alt=""
//             />
//             <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
//               Progress History
//             </h3>
//             <p className="mt-4 text-base text-gray-600">
//               Record your progress on daily basis that helps you to keep track of your progress
//             </p>
//           </div>

//           <div className="md:px-4 lg:px-10">
//             <img
//               className="-rotate-1 rounded-lg"
//               src={img3}
//               alt=""
//             />
//             <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
//               100% Visible results
//             </h3>
//             <p className="mt-4 text-base text-gray-600">
//               Stay consistent with the plan and get visible effects to your physique and confidence
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Stats;
// import img1 from "../assets/statsimg-1.jpg";
// import img2 from "../assets/statsimg-2.jpg";
// import img3 from "../assets/statsimg-3.jpg";

const Stats = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
            Empowering Students for Success
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
          <div className="md:px-4 lg:px-10">
            <img
              className="-rotate-1 rounded-lg"
             // src={img1}
              alt="Quick Home Workouts"
            />
            <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
              Comprehensive Study Materials
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Access our extensive library of study materials covering various topics to enhance your preparation.
            </p>
          </div>

          <div className="md:px-4 lg:px-10  ">
            <img
              className="rotate-1 rounded-lg"
           //   src={img2}
              alt="Progress History"
            />
            <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
              Mock Tests & Assessments
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Practice with our mock tests and assessments to gauge your progress and identify areas for improvement.
            </p>
          </div>

          <div className="md:px-4 lg:px-10">
            <img
              className="-rotate-1 rounded-lg"
            //  src={img3}
              alt="Visible Results"
            />
            <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
              Expert Guidance & Mentorship
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Benefit from personalized guidance and mentorship from industry experts to excel in your online tests, interviews, and group discussions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

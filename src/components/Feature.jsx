// import img from "../assets/img12.jpg";
// const Feature = () => {
//   return (
//     <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
//       <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
//         <div class="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
//           <div class="relative pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
//             <img
//               class="absolute top-6 -right-4 xl:-right-12"
//               src="https://cdn.rareblocks.xyz/collection/celebration/images/features/3/dots-pattern.svg"
//               alt=""
//             />

//             <div class="relative max-w-xs ml-auto">
//               <div class="overflow-hidden aspect-w-3 aspect-h-4">
//                 <img
//                   class="object-cover w-full h-full scale-125"
//                   src={img}
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>

//           <div class="md:order-1">
//             <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
//               Just 7 minutes for a confident body and relaxed mind
//             </h2>
//             <p class="mt-6 text-base leading-relaxed text-gray-600">
//               start your fitness journey with just spending 7 minutes a day and achieve the desired fitness goals. Your fitness is just few minutes away...
//             </p>

//             <a
//               href="#"
//               title=""
//               class="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-semibold text-purple-300 transition-all duration-200 bg-black rounded-full hover:bg-gray-700 focus:bg-gray-700"
//               role="button"
//             >
//               {" "}
//               Get Fit Now{" "}
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Feature;
//import img from "../assets/img12.jpg";

const Feature = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
          <div className="relative pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
            <img
              className="absolute top-6 -right-4 xl:-right-12"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/features/3/dots-pattern.svg"
              alt=""
            />

            <div className="relative max-w-xs ml-auto">
              <div className="overflow-hidden aspect-w-3 aspect-h-4">
                <img
                  className="object-cover w-full h-full scale-125"
                 // src={img}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="md:order-1">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Ace Online Tests & Interviews with Confidence
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              Start your journey to success by mastering online tests and interviews. Gain the confidence you need to excel in your career path. Your success is just a few steps away...
            </p>

            <a
              href="#"
              title="Get Fit Now"
              className="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-semibold text-purple-300 transition-all duration-200 bg-black rounded-full hover:bg-gray-700 focus:bg-gray-700"
              role="button"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;

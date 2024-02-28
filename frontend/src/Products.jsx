

//courses.jsx
import Navbar from "./components/Navbar";
// import p1 from "./assets/p1.jpg";
// import p3 from "./assets/p3.jpg";
// import p4 from "./assets/p4.jpg";
// import p2 from "./assets/p2.jpg";
// import p5 from "./assets/p5.jpg";
// import p6 from "./assets/p6.jpg";

const Products = () => {
  return (
    <>
    <Navbar/>
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-4xl font-bold text-center text-gray-800 capitalize lg:text-3xl ">
        Advance Your Career with Our Courses
        </h1>

        <div class="flex justify-center mx-auto mt-4">
          <span class="inline-block w-40 h-1 bg-purple-500 rounded-full"></span>
          <span class="inline-block w-3 h-1 mx-1 bg-purple-500 rounded-full"></span>
          <span class="inline-block w-1 h-1 bg-purple-500 rounded-full"></span>
        </div>

        <p class="max-w-2xl mx-auto mt-6 text-center text-gray-500">
        Prepare for your upcoming tests, interviews, and group discussions
          with our comprehensive courses designed to help you succeed.
        </p>
      </div>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="https://bit.ly/3Hv9T4t">
            <img
             // src={p1}
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                vegan bit
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                Preworkout Blueberry 300g
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  ₹779
                </p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">
                    ₹1399
                  </p>
                </del>
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="https://bit.ly/3ngRAsR">
            <img
            //  src={p2}
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                MERN
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                Creatine Monohydrate 100g
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  ₹549
                </p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">₹899</p>
                </del>
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="https://bit.ly/3LHCqGr">
            <img
              //src={p3}
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">

JAVA              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
PURA JABAA
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  ₹1999
                </p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">
                    ₹3499
                  </p>
                </del>
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="https://bit.ly/41TY7J2">
            <img
            //  src={p4}
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
FULL STACK              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
WEB DEV
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  ₹2499
                </p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">
                    ₹5999
                  </p>
                </del>
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="https://bit.ly/3LktKEx">
            <img
             // src={p5}
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
MAUJ MASTI
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
MASTI
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  ₹2899
                </p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">
                    ₹5899
                  </p>
                </del>
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="https://bit.ly/42bMop0">
            <img
            //  src={p6}
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
SLEEPY
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
SLEEPY
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  ₹1499
                </p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">
                    ₹4399
                  </p>
                </del>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Products;

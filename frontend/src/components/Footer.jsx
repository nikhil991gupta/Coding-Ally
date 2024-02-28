import logo from "../assets/logo11.png";
import tnc from "../assets/terms&conditions.pdf"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section class="py-10 bg-purple-50 sm:pt-16 lg:pt-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
          <div class="col-span-2 md:col-span-4 xl:pr-8">
            <img class="w-auto h-14" src={logo} alt="" />

            <a
              href="#"
              title=""
              class="inline-flex items-center justify-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-black rounded-full hover:bg-purple-700 focus:bg-purple-700 mt-14"
            >
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Get the App Now
            </a>
          </div>

          <div class="lg:col-span-2">
            <ul class="mt-6 space-y-5">
              <li>
                <a
                  href="/"
                  title=""
                  class="flex text-sm text-gray-800 transition-all duration-200 hover:text-purple-600 focus:text-purple-600"
                >
                  Home{" "}
                </a>
              </li>

              <li>
                <a
                  href="/Products"
                  title=""
                  class="flex text-sm text-gray-800 transition-all duration-200 hover:text-purple-600 focus:text-purple-600"
                >
                  Products{" "}
                </a>
              </li>
            </ul>
          </div>

          <div class="lg:col-span-2">
            <ul class="mt-6 space-y-5">
              <li>
                <a
                  href="/About"
                  title=""
                  class="flex text-sm text-gray-800 transition-all duration-200 hover:text-purple-600 focus:text-purple-600"
                >
                  {" "}
                  About{" "}
                </a>
              </li>
            </ul>
          </div>

          <div class="lg:col-span-2">
            <ul class="mt-6 space-y-5">
              <li>
                <a
                  href={tnc}
                  download="terms"
                  target="_blank"
                  title="terms_and_conditions"
                  class="flex text-sm text-gray-800 transition-all duration-200 hover:text-purple-600 focus:text-purple-600"
                >
                  Terms & Conditions{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-sm text-gray-800 transition-all duration-200 hover:text-purple-600 focus:text-purple-600"
                >
                  Back to Top{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class=" text-center md:mt-6">
          <p class="text-sm text-gray-600">
            © Copyright {currentYear}, All Rights Reserved by Coding Ally
          </p>
        </div>

        <hr class="mt-16 mb-10 border-gray-200" />
      </div>
    </section>
  );
};

export default Footer;

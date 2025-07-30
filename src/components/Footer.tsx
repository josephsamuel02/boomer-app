import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-auto mt-24 mx-auto flex flex-col">
      <div className="bg-customOrange text-white py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
          {/* Left Section: Brand & Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Your Brand</h2>
            <p className="text-gray-400 w-[300px]">
              CineDrop Real ratings. Honest reviews. Download and share movies with the
              community.
            </p>
          </div>

          {/* Center Section: Links */}
          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-12">
            {/* Links Column 1 */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <a href="#" className="text-gray-400 hover:text-white">
                Home
              </a>

              <a href="#" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </div>

            {/* Links Column 2 */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Legal</h3>

              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Disclaimer
              </a>
            </div>
          </div>

          {/* Right Section: Social Media */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className=" text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Your Brand. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-green-950 text-green-500 w-full px-12 montserrat text-sm pt-16 pb-8 mobile:px-4 tablet:px-8">
      <div className="flex justify-between items-start gap-10 mobile:flex-col tablet:flex-col">
        <div className='flex flex-col w-1/4 mobile:w-full mobile:text-center tablet:w-full tablet:text-center'>
          <h3 className="text-lg font-semibold mb-4">EcoVision</h3>
          <p className="text-gray-400">
            EcoVision is a platform dedicated to optimizing urban green spaces for sustainable development.
          </p>
        </div>

        <div className='flex flex-col w-1/4 justify-center items-center mobile:w-full tablet:w-full'>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><ScrollLink to="home" smooth={true} className="text-gray-400 hover:text-white transition duration-300">Home</ScrollLink></li>
            <li><ScrollLink to="about" smooth={true} className="text-gray-400 hover:text-white transition duration-300">About Us</ScrollLink></li>
            <li><ScrollLink to="features" smooth={true} className="text-gray-400 hover:text-white transition duration-300">Features</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} className="text-gray-400 hover:text-white transition duration-300">Contact</ScrollLink></li>
          </ul>
        </div>

        <div className='flex flex-col w-1/4 mobile:w-full mobile:text-center tablet:w-full tablet:text-center'>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">Ahmedabad, Gujarat, India</p>
          <p className="text-gray-400">Phone: +91 76350 41471</p>
          <p className="text-gray-400">Email: info@ecovision.tech</p>
        </div>

        <div className='flex flex-col w-1/4 mobile:w-full mobile:text-center tablet:text-center'>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <form className="flex mobile:justify-center tablet:justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-green-100 opacity-70 outline-none text-gray-500 px-4 py-2 rounded-l"
            />
            <button
              type="submit"
              className="font-bold openSans text-[#434a52] bg-[#FFC107] hover:bg-[#E0A800] hover:text-white outline-none py-2 px-4 rounded-r mobile:text-xs tablet:text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col laptop:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm mb-4 sm:mb-0">
          © 2025 EcoVision. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

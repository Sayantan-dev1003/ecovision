import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import LOGOImg from "../images/LOGOImg.png"
import LOGOName from "../images/LOGOName.png"
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink from react-scroll
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const SideBar = ({ isOpen, onClose }) => {
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 flex flex-col justify-between items-center h-full"
                    onClick={onClose}
                ></div>
            )}
            <div
                className={`fixed top-0 right-0 w-1/4  laptop:w-1/4 mobile:w-3/4 tablet:w-1/2 h-full bg-[#165e27] text-white transform transition-transform flex flex-col justify-between duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col items-start justify-between p-4 h-full">
                    <div className='w-full flex flex-col'>
                        <div className="flex items-center justify-between w-full border-b border-b-[#6C757D] pb-2">
                            <div className='flex'>
                                <img src={LOGOImg} className="w-[3rem] h-auto mobile:w-[2rem]" alt="" />
                                <img src={LOGOName} className="w-auto h-[3rem] mobile:h-[2rem]" alt="" />
                            </div>
                            <FontAwesomeIcon icon={faArrowRight} className="cursor-pointer" onClick={onClose} />
                        </div>
                        <p className="openSans text-justify mt-2 text-base mobile:text-xs tablet:text-base">EcoVision is a platform dedicated to optimizing urban green spaces for sustainable development.</p>
                        <div className="flex flex-col gap-2 items-start mt-12 w-full openSans">
                            <ScrollLink to="home" smooth={true} className="p-2 w-full tracking-wide hover:bg-[#5eb462] cursor-pointer rounded-md" onClick={onClose}>Home</ScrollLink>
                            <ScrollLink to="about" smooth={true} className="p-2 w-full tracking-wide hover:bg-[#5eb462] cursor-pointer rounded-md" onClick={onClose}>About</ScrollLink>
                            <ScrollLink to="features" smooth={true} className="p-2 w-full tracking-wide hover:bg-[#5eb462] cursor-pointer rounded-md" onClick={onClose}>Features</ScrollLink>
                            <ScrollLink to="contact" smooth={true} className="p-2 w-full tracking-wide hover:bg-[#5eb462] cursor-pointer rounded-md" onClick={onClose}>Contact</ScrollLink>
                            <button className="font-bold text-[#434a52] bg-[#FFC107] hover:bg-[#E0A800] hover:text-white outline-none py-2 px-4 mt-8 rounded-lg" onClick={() => navigate('/signin')}>Sign In</button>
                        </div>
                    </div>
                    <div className="mt-8 pt-3 border-t border-b-[#6C757D] flex flex-col justify-between items-center">
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
                </div>
            </div>
        </>
    );
};

SideBar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default SideBar;
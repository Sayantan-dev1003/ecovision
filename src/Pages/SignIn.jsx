import { useState } from "react";
import GoogleIcon from "../images/GoogleIcon.png";
import LinkedInIcon from "../images/LinkedInIcon.png";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg mx-4 p-6 w-full max-w-lg">
                <div className="flex justify-between items-center mb-6">
                    <button className="text-[#2E7D32] cursor-pointer font-medium transition-transform hover:scale-110" onClick={() => navigate('/')}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                </div>
                <h1 className="text-2xl montserrat font-bold text-center text-[#2E7D32] mb-6">
                    Sign In
                </h1>
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 openSans">
                    <div className="w-full flex flex-col mobile:text-sm">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email address"
                            required
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-700 focus:border-green-700"
                        />
                    </div>

                    <div className="flex flex-col w-full mobile:text-sm">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            required
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-700 focus:border-green-700"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#2E7D32] text-white rounded-md py-2 hover:bg-green-800"
                    >
                        Sign In
                    </button>

                    {/* OAuth Options */}
                    <div className="flex items-center justify-center">
                        <hr className="w-1/2 h-[0.1rem] bg-gray-300 mr-4" />
                        <span className="text-sm text-gray-400">Or</span>
                        <hr className="w-1/2 h-[0.1rem] bg-gray-300 ml-4" />
                    </div>
                    <div className="flex gap-4 items-center justify-center">
                        <div className="cursor-pointer bg-[#f4f4f4] rounded-full p-2 transition-transform hover:scale-10 mobile:text-sm5 hover:shadow-lg">
                            <img src={GoogleIcon} className="w-8" alt="Google OAuth" />
                        </div>
                        <div className="cursor-pointer bg-[#f4f4f4] rounded-full p-2 transition-transform hover:scale-105 hover:shadow-lg">
                            <img src={LinkedInIcon} className="w-8" alt="LinkedIn OAuth" />
                        </div>
                    </div>

                    <p className="text-xs text-center poppins w-full mt-4 mx-auto text-gray-400">New to EcoVision? <span className="text-[#2E7D32] cursor-pointer font-medium hover:border-b-[#2E7D32] hover:border-b" onClick={() => navigate("/signup")}>Sign Up</span></p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;

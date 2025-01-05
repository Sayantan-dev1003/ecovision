import { useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const HomeText = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="bg-[#f4f4f4] laptop:hidden text-center text-[#2E7D32] w-full flex flex-col items-center justify-center gap-4 mobile:pt-20 mobile:pb-40 tablet:pt-28 tablet:pb-72 montserrat">
                <h1 className="text-2xl mobile:text-[22px] tablet:text-2xl font-bold montserrat w-4/5 text-center">
                    ReImagine Urban Green Spaces for a Sustainable Future
                </h1>
                <p className="mobile:text-xs tablet:text-sm tablet:w-[85vw] font-medium montserrat text-center text-[#2B2B2B]">
                    EcoVision helps cities optimize green spaces for sustainability and well-being using AI and data-driven insights.
                </p>
                <div className="flex gap-10 mt-10">
                    <button className="font-bold text-[#434a52] bg-[#FFC107] hover:bg-[#E0A800] hover:text-white outline-none py-2 px-4 rounded-lg mobile:text-xs tablet:text-sm" onClick={() => navigate('/signup')}>
                        Get Started
                    </button>
                    <ScrollLink to="about" smooth={true} className="font-bold text-[#434a52] bg-[#FFC107] hover:bg-[#E0A800] hover:text-white outline-none py-2 px-4 rounded-lg mobile:text-xs tablet:text-sm">
                        Learn More
                    </ScrollLink>
                </div>
            </div>
        </>
    )
}

export default HomeText
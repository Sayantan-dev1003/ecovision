import AboutIMG from "../images/AboutIMG.webp"

const About = () => {
    return (
        <>
            <div className="w-full px-12 py-16 bg-[#f4f4f4] flex gap-8">
                <div className="w-1/2">
                    <p className="text-3xl montserrat font-bold text-[#2E7D32]">About EcoVision: Building Sustainable Futures Together</p>
                    <p className="text-base italic montserrat text-[#2B2B2B] mb-6 font-semibold">Redefining urban landscapes through technology and sustainability.</p>
                    <div className="openSans flex flex-col gap-2 text-justify text-[#6C757D]">
                        <p>At EcoVision, we believe in the power of technology to transform urban living. With growing urbanization, the need for sustainable and efficient green spaces has never been greater. EcoVision combines advanced AI and machine learning with urban planning to create a seamless solution for optimizing green spaces in cities.</p>
                        <p>Our platform analyzes data from various sources, including environmental factors, population density, and urban layouts, to provide actionable insights that help city planners and citizens make informed decisions. By promoting sustainability and improving urban ecosystems, we aim to build cities that are not only livable but also thrive in harmony with nature.</p>
                    </div>
                    <div className="openSans mt-5 flex flex-col gap-4">
                        <div className="bg-[#E8F5E9] border border-[#66BB6A] p-3 rounded-md transition hover:bg-[#d2eed4] hover:scale-[1.01] cursor-pointer hover:shadow-md">
                            <h4 className="text-[#2E7D32] text-sm font-bold">Our Mission:</h4>
                            <p className="text-sm text-[#2B2B2B]">To empower communities and urban planners with intelligent tools that promote sustainability, enhance urban green spaces, and ensure a healthier future for all.</p>
                        </div>
                        <div className="bg-[#E8F5E9] border border-[#66BB6A] p-3 rounded-md transition hover:bg-[#d2eed4] hover:scale-[1.01] cursor-pointer hover:shadow-md">
                            <h4 className="text-[#2E7D32] text-sm font-bold">Our Vision:</h4>
                            <p className="text-sm text-[#2B2B2B]">To be at the forefront of innovation, leading the way in transforming cities into vibrant, eco-friendly environments that balance development and nature.</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src={AboutIMG} className="rounded-tr-[4rem] rounded-bl-[4rem]" alt="" />
                </div>
            </div>
        </>
    )
}

export default About
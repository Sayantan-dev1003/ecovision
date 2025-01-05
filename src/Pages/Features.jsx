import { faLeaf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Features = () => {
    return (
        <>
            <div className="w-full px-12 pt-28 pb-16 bg-[#f4f4f4] flex flex-col mobile:px-4 mobile:py-16 tablet:px-8 tablet:py-16">
                <p className="text-3xl montserrat font-bold text-[#2E7D32] mobile:text-xl tablet:text-2xl">What Can EcoVision Do for You?</p>
                <p className="openSans mt-8 text-justify text-[#6C757D]">Discover how EcoVision is transforming urban spaces with cutting-edge features designed to optimize and sustain green areas. From advanced data analysis to actionable insights, our platform empowers city planners and communities to create harmonious, eco-friendly urban environments. Explore the tools and innovations that make sustainable urban living a reality.</p>
                <div className="openSans mt-6 flex flex-wrap gap-4 w-full">
                    <div className="w-[32.4%] mobile:w-full tablet:w-full text-justify bg-[#E8F5E9] border border-[#66BB6A] p-3 rounded-md transition hover:bg-[#d2eed4] hover:scale-[1.01] cursor-pointer hover:shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                            <FontAwesomeIcon icon={faLeaf} className="text-[#2E7D32] text-xl" />
                            <h4 className="text-[#2E7D32] text-lg font-bold">Advanced Spatial Analysis and Predictive Insights</h4>
                        </div>
                        <p className="text-sm text-[#2B2B2B]">EcoVision uses AI to analyze urban layouts, identify underutilized areas for green spaces, and forecast the environmental impact of these developments, ensuring data-driven urban planning.</p>
                    </div>
                    <div className="w-[32.4%] mobile:w-full tablet:w-full text-justify bg-[#E8F5E9] border border-[#66BB6A] p-3 rounded-md transition hover:bg-[#d2eed4] hover:scale-[1.01] cursor-pointer hover:shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                            <FontAwesomeIcon icon={faLeaf} className="text-[#2E7D32] text-xl" />
                            <h4 className="text-[#2E7D32] text-lg font-bold">Sustainable Urban Development and Biodiversity Conservation</h4>
                        </div>
                        <p className="text-sm text-[#2B2B2B]">The platform emphasizes sustainability by offering strategies to reduce carbon footprints and preserve biodiversity, aligning urban growth with ecological preservation.</p>
                    </div>
                    <div className="w-[32.4%] mobile:w-full tablet:w-full text-justify bg-[#E8F5E9] border border-[#66BB6A] p-3 rounded-md transition hover:bg-[#d2eed4] hover:scale-[1.01] cursor-pointer hover:shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                            <FontAwesomeIcon icon={faLeaf} className="text-[#2E7D32] text-xl" />
                            <h4 className="text-[#2E7D32] text-lg font-bold">Intuitive Dashboards and Community Engagement</h4>
                        </div>
                        <p className="text-sm text-[#2B2B2B]">With interactive dashboards and tools for public participation, EcoVision empowers city planners and citizens to collaboratively create and manage urban green spaces.</p>
                    </div>
                    <div className="w-[32.4%] mobile:w-full tablet:w-full text-justify bg-[#E8F5E9] border border-[#66BB6A] p-3 rounded-md transition hover:bg-[#d2eed4] hover:scale-[1.01] cursor-pointer hover:shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                            <FontAwesomeIcon icon={faLeaf} className="text-[#2E7D32] text-xl" />
                            <h4 className="text-[#2E7D32] text-lg font-bold">Tailored Solutions for Diverse Urban Needs</h4>
                        </div>
                        <p className="text-sm text-[#2B2B2B]">EcoVision provides customized green space recommendations based on city-specific factors like population density, climate, and available land, catering to unique urban requirements.</p>
                    </div>
                    <div className="w-[32.4%] mobile:w-full tablet:w-full text-justify bg-[#E8F5E9] border border-[#66BB6A] p-3 rounded-md transition hover:bg-[#d2eed4] hover:scale-[1.01] cursor-pointer hover:shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                            <FontAwesomeIcon icon={faLeaf} className="text-[#2E7D32] text-xl" />
                            <h4 className="text-[#2E7D32] text-lg font-bold">Measurable Impact Tracking and Analytics</h4>
                        </div>
                        <p className="text-sm text-[#2B2B2B]">The platform offers detailed analytics to track the impact of green space developments on urban ecosystems, including metrics like air quality improvement and carbon sequestration.</p>
                    </div>
                    <div className="w-[32.4%] mobile:w-full tablet:w-full text-justify bg-[#E8F5E9] border border-[#66BB6A] p-3 rounded-md transition hover:bg-[#d2eed4] hover:scale-[1.01] cursor-pointer hover:shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                            <FontAwesomeIcon icon={faLeaf} className="text-[#2E7D32] text-xl" />
                            <h4 className="text-[#2E7D32] text-lg font-bold">Visionary Tools for Urban Ecosystem Transformation</h4>
                        </div>
                        <p className="text-sm text-[#2B2B2B]">Simulate future scenarios, encourage public involvement through gamified tools, and enable cross-city collaboration to create a greener, sustainable future.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features
const HomeText = () => {
    return (
        <>
            <div className="laptop:hidden text-center text-[#165e27] w-full flex flex-col items-center justify-center gap-4 my-8 montserrat">
                <h1 className="text-2xl mobile:text-xl tablet:text-2xl font-bold montserrat w-4/5 text-center">
                    Reimagine Urban Green Spaces for a Sustainable Future
                </h1>
                <p className="mobile:text-xs tablet:text-sm tablet:w-[85vw] font-medium montserrat text-center">
                    EcoVision helps cities optimize green spaces for sustainability and well-being using AI and data-driven insights.
                </p>
                <div className="flex gap-10">
                    <button className="font-bold text-[#434a52] bg-[#FFC107] hover:bg-[#E0A800] hover:text-white outline-none py-2 px-4 rounded-lg mobile:text-xs tablet:text-sm">
                        Get Started
                    </button>
                    <button className="font-bold text-[#434a52] bg-[#FFC107] hover:bg-[#E0A800] hover:text-white outline-none py-2 px-4 rounded-lg mobile:text-xs tablet:text-sm">
                        Learn More
                    </button>
                </div>
            </div>
        </>
    )
}

export default HomeText
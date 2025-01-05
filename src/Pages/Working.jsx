import { useNavigate } from 'react-router-dom';

const Working = () => {
    const navigate = useNavigate();

    const steps = [
        {
            title: 'Data Collection and Integration',
            description:
                'EcoVision gathers data from diverse sources, including satellite imagery, city maps, environmental sensors, and demographic information. This data provides insights into existing green spaces, population density, air quality, and urban heat islands.',
            icon: '🌍',
        },
        {
            title: 'AI-Powered Analysis',
            description:
                'Our advanced AI and machine learning models process the collected data to identify patterns and correlations. This analysis highlights areas in need of green space intervention, suggests optimal locations for new green spaces, and evaluates the impact of existing ones.',
            icon: '🤖',
        },
        {
            title: 'Interactive Mapping and Visualization',
            description:
                'Using intuitive mapping tools, EcoVision presents analyzed data in a visually engaging format. Users can view detailed maps, explore potential green space scenarios, and interact with real-time insights tailored to their city’s unique needs.',
            icon: '🗺️',
        },
        {
            title: 'Personalized Recommendations',
            description:
                'Based on the analysis, EcoVision offers actionable recommendations, including the best plant species for specific regions, green infrastructure designs, and strategies to mitigate urban heat islands. These insights cater to city planners, environmentalists, and community leaders.',
            icon: '🎯',
        },
        {
            title: 'Download Actionable Reports for Implementation',
            description:
                'EcoVision allows users to download comprehensive and actionable reports summarizing the analysis and recommendations. These reports are tailored to guide the practical implementation of green space projects, ensuring ease of execution for stakeholders.',
            icon: '📂',
        },
    ];

    return (
        <section className="w-full px-12 py-10 bg-[#f4f4f4] flex flex-col mobile:px-4 mobile:py-10 tablet:px-8 tablet:py-10">
            <h2 className="text-3xl montserrat font-bold text-[#2E7D32] mobile:text-xl tablet:text-2xl">How EcoVision Works</h2>
            <p className="text-base italic montserrat text-[#2B2B2B] mb-5 font-semibold mobile:text-xs tablet:text-sm">A streamlined process to transform urban green spaces.</p>
            <p className="openSans mb-4 text-justify text-[#6C757D]">EcoVision employs a seamless integration of advanced technologies to optimize urban green spaces and promote sustainable development. Here&apos;s an overview of the process:</p>
            <div className="w-full flex items-center justify-center gap-5 laptop:h-[52vh] mobile:flex-wrap tablet:flex-wrap">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="w-1/5 mobile:w-full mobile:flex-col mobile:h-auto tablet:w-full tablet:flex-col tablet:h-auto flex h-full flex-col items-center justify-center text-justify p-4 shadow-lg bg-white rounded-lg hover:scale-105 transition-transform"
                    >
                        <div className="text-4xl mb-4">{step.icon}</div>
                        <h3 className="text-lg text-center font-semibold text-green-700 mb-2">
                            {step.title}
                        </h3>
                        <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center mt-8 gap-1">
                <h2 className="text-xl montserrat font-bold text-[#2E7D32] mobile:text-lg tablet:text-lg">Ready to Transform Your City?</h2>
                <button className="font-bold openSans text-[#434a52] bg-[#FFC107] hover:bg-[#E0A800] hover:text-white outline-none py-2 px-4 rounded-lg mobile:text-xs tablet:text-sm" onClick={() => navigate('/signup')}>Get Started</button>
            </div>
        </section>
    );
};

export default Working;

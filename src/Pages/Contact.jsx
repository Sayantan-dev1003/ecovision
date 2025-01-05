import { useState } from "react";

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Email: ${email}, Message: ${message}`);
        setEmail('');
        setMessage('');
    };

    return (
        <>
            <div className="w-full px-12 pt-28 pb-16 bg-[#f4f4f4] flex flex-col mobile:px-4 mobile:py-16 tablet:px-8 tablet:py-16">
                <h2 className="text-3xl montserrat font-bold text-[#2E7D32] mobile:text-xl tablet:text-2xl">Connect with EcoVision</h2>
                <p className="text-base italic montserrat text-[#2B2B2B] mb-5 font-semibold mobile:text-xs tablet:text-sm">
                    We&apos;d love to hear from you! Reach out for enquiries or feedback.
                </p>
                <div className="p-8 rounded-xl w-1/2 mx-auto bg-[#e7e7e7] mt-8 mobile:w-full tablet:w-full">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 py-3 px-5 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" placeholder="Your Email" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={3} className="mt-1 py-3 px-5 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" placeholder="Your message..."></textarea>
                        </div>
                        <button type="submit" className="font-bold openSans text-[#434a52] bg-[#FFC107] hover:bg-[#E0A800] hover:text-white outline-none py-2 px-4 rounded-lg mobile:text-xs tablet:text-sm">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
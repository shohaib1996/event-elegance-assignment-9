import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {

    return (
        <div className='mt-4'>

            <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center bg-fixed h-[90vh] lg:h-[80vh]">
                <div className="bg-black bg-opacity-60 h-full text-center flex items-center justify-center flex-col p-5 space-y-5" >
                    <h1 className="font-bold text-6xl text-white" data-aos="zoom-in">Your Dream Events, Our Expertise</h1>
                    <p className="text-white" data-aos="zoom-in">At <span className="font-bold bg-fuchsia-600 text-white rounded-md p-1">eventElegance</span>, we are committed to making your dream events come true. We understand that every celebration, whether it&apos;s a wedding, birthday, anniversary, or any special occasion, holds a unique place in your heart. Our team of experienced event planners is here to transform your ideas, aspirations, and dreams into meticulously planned and flawlessly executed events.</p>
                    <div data-aos="zoom-in">
                        <a href='#card' className="btn bg-fuchsia-600 text-white border-none">Booking Now <FaArrowRight></FaArrowRight></a >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
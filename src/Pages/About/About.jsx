import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const About = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">About Our Event Planning Business</h1>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
                <p>
                    Welcome to our event planning business! We are passionate about creating memorable experiences for our clients. Our journey began in 2020 when Shohaib Hossain founded the company with a vision to provide an extraordinary event in budget friendly money.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
                <p>
                    Our dedicated team of professionals is committed to turning your event dreams into reality.
                </p>

            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
                <p>
                    We specialize in planning a wide range of events, including weddings, birthday parties, anniversaries, engagement parties, retirement parties, and baby showers. Our comprehensive services ensure a stress-free and enjoyable experience for our clients.
                    <Link to="/">
                        <div className="mt-4" data-aos="zoom-in">
                            <a href='#card' className="btn bg-fuchsia-600 text-white border-none">Our services <FaArrowRight></FaArrowRight></a >
                        </div>
                    </Link>
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
                <p>
                    Have questions or ready to start planning your next event with us? Contact us today!
                    <p>Email: khanshohaibhossain@gmail.com</p>
                </p>

            </div>

        </div>
    );
};

export default About;

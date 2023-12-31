import { useLoaderData } from "react-router-dom";
import Gallery from "../../Gallery/Gallery";
import Banner from "../../Header/Banner";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";



const Home = () => {
    const cards = useLoaderData()
    const [testimonial, setTestimonial] = useState([])
    console.log(cards);
    useEffect(() => {
        fetch('/data/testimonial.json')
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [])
    return (
        <div className="max-w-screen-xl mx-auto mb-12">
            <Banner></Banner>
            <Gallery></Gallery>
            <div id="card" data-aos="fade-right">
                <h1 className="font-bold text-5xl text-center mb-12" >Our Services</h1>
                <div className="max-w-screen-xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 lg:p-0">
                    {
                        cards.map(card => <Card key={card.id} card={card}></Card>)
                    }

                </div>
            </div>

            <div className="mt-20">
                <h1 className="font-bold text-5xl text-center mb-12">Testimonial</h1>
                <div className="max-w-screen-lg mx-auto  grid grid-cols-1 lg:grid-cols-4 gap-5 p-2 lg:p-0" data-aos="fade-up"
     data-aos-duration="3000">
                    {
                        testimonial.map(person => <TestimonialCard key={person.id} person={person}></TestimonialCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
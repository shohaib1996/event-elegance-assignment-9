import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import TotalList from "../components/TotalList/TotalList";
import { Link } from "react-router-dom";


const Cart = () => {
    const [eventCards, setEventCards] = useState([]);
    useEffect(() => {
        const event = JSON.parse(localStorage.getItem('event'));
        setEventCards(event);
    }, []);
    console.log(eventCards);
    const totalPrice = eventCards.reduce((prev, curr) => prev + Number(curr.price), 0)
    return (
        <div className="max-w-screen-xl mx-auto mt-12 mb-12 flex gap-8 justify-center flex-col-reverse lg:flex-row">
            <div className="w-full lg:w-2/3  grid gap-8 grid-cols-1 lg:grid-cols-2 p-3 lg:p-0">
                {
                    eventCards.map(card => <Card key={card.id} card={card}></Card>)
                }

            </div>
            <div className="w-full lg:w-1/3 p-10">
                <h1 className="text-3xl font-bold text-center">Events</h1>
                <div className=' mt-8 border-b-2 border-b-gray-600 pb-3'>
                    {
                        eventCards.map(card => <TotalList key={card.id} card={card}></TotalList>)
                    }
                </div>
                <div>
                    <h1 className="text-center text-xl">Total Price - ${totalPrice}</h1>
                </div>
                <div className="mt-12">
                    <button className="btn w-full bg-fuchsia-600 text-white">
                        Book Now
                    </button>
                    <div className="py-3 flex items-center text-base font-bold  uppercase before:flex-[1_1_0%] before:border-t before:border-gray-400 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-400 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600 text-black ">
                        Or
                    </div>
                    <Link to="/contact">
                        <button className="btn w-full bg-fuchsia-600 text-white">
                            Contact With Us
                        </button>
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default Cart;
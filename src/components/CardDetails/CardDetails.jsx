
import toast from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {
    const cards = useLoaderData()
    const {id} = useParams()
    const card = cards.find(card => card.id == id)
    console.log(card);
    const { name, image, price, short_description } = card
    const handleAddToCart = () => {
        const getEventCard = JSON.parse(localStorage.getItem('event')) || [];
        const isExit = getEventCard.find(card => card.id === id * 1)
        if(!isExit){
            getEventCard.push(card)
            localStorage.setItem('event', JSON.stringify(getEventCard))
            return toast.success('Successfully Added to Cart!')
        }else{
            return toast.error('Duplicate Item!')
        }
    }
    return (
        <div className="max-w-screen-xl mx-auto mt-12 mb-12 p-3">
            <div>
                <div className="hero h-[80vh] relative" style={{ backgroundImage: `url(${image})`,backgroundSize: 'cover',backgroundPosition: 'center' }}>
                    <div className="hero-overlay bg-opacity-60 absolute  top-[75%] h-[25%] inset-0"></div>
                    <button onClick={handleAddToCart} className="btn absolute top-[85%] md:top-[80%] right-[60%] md:right-[80%] lg:right-[85%] text-white font-bold outline-none border-none bg-fuchsia-600" >Add to Cart ${price}</button>

                </div>
            </div>
            <h1 className="text-3xl font-bold text-black mb-6 mt-20">{name}</h1>
            <p className="text-justify text-black">{short_description}</p>
        </div>

    );
};

export default CardDetails;
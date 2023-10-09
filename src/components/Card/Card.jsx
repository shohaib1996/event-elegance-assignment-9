import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    const { name, image, price, short_description, id } = card
    return (

        <div className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <div className='' data-aos="flip-right" data-aos-duration="3000">
                <img className=" rounded-t-lg h-[300px]" src={image} alt="product image" />
            </div>

            <div className="px-5 pb-5 space-y-4">
                <a href="#">
                    <h5 className="text-xl mt-5 font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5 h-[120px]">
                    {short_description}
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                    <Link to={`/service/${id}`}>
                        <button className="text-white bg-fuchsia-600 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800">View Details</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};
Card.propTypes = {

    card: PropTypes.object,
}

export default Card;
import PropTypes from 'prop-types';

const TestimonialCard = ({ person }) => {
    const {img, quote, author} = person
    return (
        <div className="p-5 w-full h-[320px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
            <div className="flex flex-col items-center pb-10 text-center">
                <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={img}
                    alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {author}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                   {quote}
                </span>
                
            </div>
        </div>

    );
};
TestimonialCard.propTypes = {
    
    person: PropTypes.object,
}

export default TestimonialCard;
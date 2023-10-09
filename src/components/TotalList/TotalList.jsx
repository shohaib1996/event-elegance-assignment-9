import PropTypes from 'prop-types';


const TotalList = ({ card }) => {
    const { name, price } = card
    return (
        <div>
            <div className=''>
                <li className='list-none px-5 text-center text-xl'>{name} - ${price}</li>
            </div>
        </div>
    );
};
TotalList.propTypes = {

    card: PropTypes.object,
}

export default TotalList;
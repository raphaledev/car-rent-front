import PropTypes from "prop-types";

function Car (props) {
    const PF = "http://localhost:5000/uploads/";
    return (
    <div className="flex flex-col my-4">
        <img className="rounded-lg mb-2 h-80" src={PF + props.photos} alt={props.brand} />
        <div className="flex justify-between">
            <span className="mx-4 font-bold text-blue-500 text-sm">{props.brand} {props.model} {props.energy} {props.year}</span>
            <span className="mx-4 font-bold text-green-500 text-sm">{props.price}f/ jour</span>
        </div>
        <div>
            <p className="m-4 whitespace-pre-line font-sans font-medium">{props.desc}</p>
        </div>
        {/* <div>
            <p className="m-4 whitespace-pre-line font-sans font-medium">Total :  {props.price}</p>
        </div> */}
    </div>
);
}

Car.propTypes = {
    brand: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    energy: PropTypes.string,
    photos: PropTypes.string,
    desc: PropTypes.string,
    // photos: PropTypes.arrayOf(PropTypes.string) à réécrire
    price: PropTypes.number,
    unavailableDates: PropTypes.arrayOf(PropTypes.Date)
};

export default Car;




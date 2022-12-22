import { Link } from "react-router-dom";
import Car from "./Car";

const CarList = ({ cars }) => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cars.map((car) => (
                <div key={car._id}>
                <Link to={`book/${car._id}`}>
                    <Car
                        brand={car.brand}
                        model={car.model}
                        year={car.year}
                        photos={car.photos}
                        price={car.price}
                    />
                </Link>
                </div>
            ))}
        </div>
    );
};  
export default CarList;
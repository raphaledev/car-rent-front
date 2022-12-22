import Car from "./Car";

const CarItem = ({ car }) => {
    return (
        <div className="">
            {car.map((item) => (
                <Car
                key={item._id}
                brand={item.brand}
                model={item.model}
                year={item.year}
                photos={item.photos}
                energy={item.energy}
                price={item.price}
                desc={item.desc}
                />
            ))}
        </div>
    );
};  
export default CarItem;
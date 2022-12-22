import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import CarItem from "./CarItem";

const Booking = () => {
    const [cars, setCars] = useState(null);
    const { id } = useParams();

// http://localhost:5000/api/cars
    useEffect(() => {
        axios.get("https://car-rent-mern.herokuapp.com/api/cars").then((result) => {
            setCars(result.data);
        });
    }, []);

    return (
        <div className="">
            <div>
                <Navbar/>
            </div>
            <hr></hr>
            {/* <div className="w-64 mx-16 mt-4">
                <Calendar period={period} />
            </div> */}
            <div className="my-8 grid md:grid-cols-4 xl:grid-cols-5">
                <div className="col-start-1 md:col-start-2 md:col-span-2 xl:col-start-2 xl:col-span-3 text-center xl:mx-32">
                    {cars ? (
                    <CarItem car={cars.filter(car => car._id == id)} />
                    ) : (
                    <h1>Loading...</h1>
                    )}
                </div>
                <div className="col-start-1 md:col-start-2 xl:col-start-3">
                    <button className="w-64 text-blue-500 font-bold border-solid border-2 border-blue">Confirmer la réservation</button>
                </div>
            </div>
        </div>
    )
}


export default Booking;
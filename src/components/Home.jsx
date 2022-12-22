import {useState, useEffect} from "react";
import Datepicker from "react-tailwindcss-datepicker";
import axios from "axios";
import Navbar from "./Navbar";
import CarList from "./CarList";

const Home = () => {
    const [cars, setCars] = useState(null);
    const [value, setValue] = useState({
        startDate: null,
        endDate: null,
    });

    const [period, setPeriod] = useState(0);
    const [bookingDays, setBookingDays] = useState([]);

    const days = d => new Date(d).getTime()/86400000;

    const bookingDates = (start, end) => {
        start = days(start);
        end = days(end);
        let dateRange = [];
        while (start < end){
            dateRange.push(start);
            start++;
        }
        return dateRange;
    }

    const isAvailable = (booked, toBook) => {
        booked = booked.map(e => days(e));
        const common = toBook.some(x => {
            return booked.includes(x);
        });
        return (!common)
    }

    const dateFormat = (date) => {
        date = new Date(date);
        return date.toLocaleString("fr-FR").split(' ')[0];
    }

    const dayDiff  = (end, start) => {
        start = new Date(start);
        end = new Date(end);
        const diff = end.getTime() - start.getTime();   
        return diff / (1000 * 60 * 60 * 24); 
    }

    const handleValueChange = (newValue) => {
        setValue(newValue);
        setPeriod(dayDiff(newValue.endDate, newValue.startDate));
        setBookingDays(bookingDates(newValue.startDate, newValue.endDate));
    }

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
                {/* <div className="m-2">{nb} {nb > 1 ? 'éléments trouvés' : 'élément touvé'}</div> */}
                <div className=" flex flex-row my-5">
                    <div className="basis-5/12"></div>
                    <div>
                        <Datepicker
                            i18n={"fr"} 
                            configs={{
                                footer: {
                                cancel: "Annuler",
                                apply: "Valider",
                                }
                            }}
                            primaryColor={"emerald"} 
                            value={value}
                            onChange={handleValueChange}
                            placeholder={"Date Début ~ Date Fin"}
                            showFooter={true} 
                        />
                    </div>
                    <div className="basis-5/12"></div>
                </div>
                {/* Affichage conditionnel */}
                <div className="text-center font-bold my-8">
                    {value.endDate ? (
                    <h2 className="text-xl text-blue-500"> Liste des véhicules disponibles pour la période du {dateFormat(value.startDate)} au {dateFormat(value.endDate)}</h2>
                    ): 
                    <h2 className="text-xl text-blue-500">Liste de tous les véhicules</h2>}
                    {/* <span>Durée : {period} {period > 1 ? 'jours': 'jour'} </span> */}
                </div>
                <div className="">
                    {cars ? (
                        <CarList cars={cars.filter(car => isAvailable(car.unavailableDates, bookingDays))} />
                    ) : (
                    <h1>Loading...</h1>
                    )}
                </div> 
            </div>
        );
}

export default Home;
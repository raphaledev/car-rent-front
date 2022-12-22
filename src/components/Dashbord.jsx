import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Dashbord = () => {
    return (  
        <div>
            <div>
                <Navbar/>
            </div>
            <hr></hr>
            <h1 className="text-center text-lime-600 font-bold m-10">Tableau De Bord</h1>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 sm:grid-cols-3 m-5">
                <Link to={'/carform'}>
                    <div className="admin-options">Ajouter un véhicule</div>
                </Link>
                <div className="admin-options">Ajouter une réservation</div>
                <div className="admin-options">Modifier une résevation</div>
                <div className="admin-options">Annuler une réservation</div>
                <div className="admin-options">Voir la liste des véhicules disponibles</div>
                <div className="admin-options">Voir la liste de tous les véhicules</div>
                <div className="admin-options">Voir la liste des véhicules loués</div>
                <div className="admin-options">Voir les réservations</div>
            </div>
        </div>
    );
}

export default Dashbord;

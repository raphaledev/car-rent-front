import { useState } from "react"
import Navbar from "./Navbar"
import axios from 'axios'

const CarForm = () => {
    const [brand, setBrand] = useState('BMW')
    const [model, setModel] = useState('X1')
    const [year, setYear] = useState('2017')
    const [energy, setEnergy] = useState('Essence')
    const [desc, setDesc] = useState(' Très beau véhicule de sport avec une conduite très agréable.\n 50 000 km, révision complète, full options.\n Intérieur cuir, caméra de recul, toit ouvrant, etc.')
    const [price, setPrice] = useState('30000')
    const [file, setFile] = useState(null);
    // const [unavailableDates, setUnavailabledates] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const car = {brand, model, year, energy, price, desc}

        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            car.photos = filename;
            try {
                await axios.post('http://localhost:5000/api/upload', data);
            } catch (err) {}
        }

        const response = await fetch('http://localhost:5000/api', {
            method: 'POST',
            body: JSON.stringify(car),
            headers: {
            'Content-Type': 'application/json'
        }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            setBrand('')
            setModel('')
            setYear('')
            setFile(null)
            setEnergy('')
            setDesc('')
            setPrice('')
            setMessage('Véhicule ajouté avec succès')
            console.log('new car added:', json)
        }
    }

    return (
        <div className="m-5">
            <Navbar/>
            <hr></hr>
            <h1 className="text-center my-5">Ajouter un véhicule</h1>
            <form className="flex flex-wrap m-5 items-center" onSubmit={handleSubmit}>
                <label>
                    Marque
                    <input 
                        className="w-32 m-8 px-4 py-2 rounded-md"
                        type="text"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    />
                </label>
                <label>
                    Modèle
                    <input 
                        className="w-32 m-8 px-4 py-2 rounded-md"
                        type="text"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                    />                
                </label>
                <label>
                    Année
                    <input 
                        className="w-24 m-8 px-4 py-2 rounded-md"
                        type="number"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </label>
                <label>
                    Prix
                    <input 
                        className="w-24 m-8 px-4 py-2 rounded-md"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </label>
                <label>
                    Energie
                    <select className="m-8 p-2 rounded-md" 
                        value={energy} 
                        onChange={(e) => setEnergy(e.target.value)}>
                        <option value="Essence">Essence</option>
                        <option value="Diesel">Diesel</option>
                    </select>
                </label>
                <label>
                    Photo
                    <input 
                        className="m-5 p-2 rounded-md"
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </label>
                <label>
                    <textarea 
                        className="w-96 h-32 m-5 rounded-md p-2"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </label>
                <button className="m-5 bg-green-700 text-white font-bold" type="submit">Valider</button>
            </form>
            <div className="text-center text-green-500">{message}</div>
        </div>
    );
}

export default CarForm;
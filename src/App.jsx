import {Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Dashbord from "./components/Dashbord";
import CarForm from "./components/CarForm";
import Booking from "./components/Booking";
import Login from "./components/Auth/Login";

function App() {
    return (
      <div className="bg-neutral-100 mx-20">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/dashbord" element={<Dashbord />}/>
          <Route path="/carform" element={<CarForm />}/>
          <Route path="/book/:id" element={<Booking />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    );
};

export default App;


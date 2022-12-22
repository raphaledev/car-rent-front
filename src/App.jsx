import {Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Dashbord from "./components/Dashbord";
import CarForm from "./components/CarForm";
import Booking from "./components/Booking";

function App() {
    return (
      <div className="bg-neutral-100 mx-20">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/dashbord" element={<Dashbord />}/>
          <Route path="/carform" element={<CarForm />}/>
          <Route path="/book/:id" element={<Booking />} />
        </Routes>
      </div>
    );
};

export default App;


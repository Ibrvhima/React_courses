import { Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import TechnoListe from "./pages/TechnoList";

import { useState } from "react";

function App() {
  const [addTechno, setAddTechno] = useState([]);

  const handleAddTechno = (newTechno) => {
    setAddTechno([...addTechno, newTechno]);
    console.log("Technologie ajoutée :", newTechno);
  };

  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/form"
          element={<Form handleAddTechno={handleAddTechno} />}
        />
       <Route path="/list" element={<TechnoListe techs={addTechno} />} />

      </Routes>
    </div>
  );
}
export default  App

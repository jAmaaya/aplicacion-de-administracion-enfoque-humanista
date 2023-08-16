import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Author from "./components/author/Author"
import Abraham from "./components/abraham/Abraham"
import Elton from "./components/elton/Elton"
import Mcgregor from "./components/mcgregor/Mcgregor"




export const Rutas = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Author />} />

        <Route path="/abraham" element={<Abraham />} />

        <Route path="/elton" element={<Elton />} />

        <Route path="/mcgregor" element={<Mcgregor />} />
          
      

      </Routes>
    </Router>
  )
}
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/Navbar/MainLayout";
import EventLoom from "./pages/EventLoom";
import Gratick_click from "./pages/Gratick_click";
import Promoloom from "./pages/Promoloom";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route path="products/eventloom" element={<EventLoom />} />
          <Route path="products/captureLoom" element={<Gratick_click />} />
          <Route path="products/promoloom" element={<Promoloom />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

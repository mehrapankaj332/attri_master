import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Pages from "./pages/Pages.jsx";
import Menu from "./pages/Menu.jsx";
import Cart from "./pages/Cart.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/About" element={<About />} />
<Route path="/Pages" element={<Pages />} />
<Route path="/Menu" element={<Menu />} />
<Route path="/Cart" element={<Cart />} />
    </Routes>
  );
}

import "./App.css";
import Header from "./components/Header.jsx";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Menu from "./pages/Menu.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header.jsx";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader.jsx";

const HomeLazy = lazy(() => import("./pages/Login.jsx"));
const MenuLazy = lazy(() => import("./pages/Menu.jsx"));
const CartLazy = lazy(() => import("./pages/Cart.jsx"));
const OrderLazy = lazy(() => import("./pages/OrderNew.jsx"));
const OrderDetailsLazy = lazy(() => import("./pages/OrderDetails.jsx"));

const PageNotFoundLazy = lazy(() => import("./pages/PageNotFound.jsx"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomeLazy />} />
          <Route path="/menu" element={<MenuLazy />} />
          <Route path="/cart" element={<CartLazy />} />
          <Route path="/Order" element={<OrderLazy />} />
          <Route path="/order/:id" element={<OrderDetailsLazy />} />

          <Route path="*" element={<PageNotFoundLazy />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

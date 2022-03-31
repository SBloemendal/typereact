import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import NotFound from "./notfound/NotFound";
import Detail from "./detail/Detail";
import Account from "./account/Account";
import Header from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="account" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

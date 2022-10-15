import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminCompany from "./pages/adminCompany";
import AdminComplex from "./pages/adminComplex";
import AdminRoom from "./pages/adminRoom";
import Home from "./pages/home";
import Login from "./pages/login";
import PageNotFound from "./pages/PageNotFound";
import Private from "./Routes/Private";
import Public from "./Routes/Public";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Public />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<PageNotFound />} />
        </Route>
        <Route path="/" element={<Private />}>
          <Route path="/admin/companies" element={<AdminCompany />} />
          <Route path="/admin/complexs" element={<AdminComplex />} />
          <Route path="/admin/rooms" element={<AdminRoom />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

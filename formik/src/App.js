import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MenuForm from "./components/MenuForm";
import Navbar from "./components/Navbar";
import Pagination from "./Pagination/Pagination";
class App extends Component {
  render() {
    return (
      <div className="">
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/formik" element={<MenuForm />} />
          <Route path="/pagination" element={<Pagination />} />
        </Routes>
      </div>
    );
  }
}

export default App;

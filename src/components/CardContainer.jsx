import React from "react"
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Navigation"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites";
import Messages from "./pages/Messages";
import SchoolPics from "./components/pages/SchoolPics";
import SeniorPics from "./pages/SeniorPics";

export default function CardContainer() {
    const [currentPage, setCurrentPage] = useState("Home");

const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Favorites') {
      return <Favorites />;
    }
    if (currentPage === 'Messages') {
      return <Messages />;
    }
    if (currentPage === 'SchoolPics') {
        return <SchoolPics />;
      }
    return <SeniorPics />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        {renderPage()}
    </div>
  )
}
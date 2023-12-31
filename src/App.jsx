// below is from react portfolio
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/pages/Home"
import SchoolPics from "./components/pages/SchoolPics"
import SeniorPics from "./components/pages/SeniorPics"
import Favorites from "./components/pages/Favorites"
import Messages from "./components/pages/Messages"
import {ChakraProvider} from "@chakra-ui/react"

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
      <div>
        <Header/>
        {/* <SchoolPics/> */}
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/schoolpics" element={<SchoolPics />}/>
          <Route path="/seniorpics" element={<SeniorPics />}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/messages" element={<Messages/>}/>

        </Routes>
       
        <Footer/>
      </div>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
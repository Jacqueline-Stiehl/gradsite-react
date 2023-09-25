// below is from react portfolio
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer"
import Header from "./components/Header"
import SchoolPics from "./pages/SchoolPics"
import SeniorPics from "./pages/SeniorPics"
import {ChakraProvider} from "@chakra-ui/react"
// import Project from "./components/Project"

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
      <div>
        <Header/>
        <SchoolPics/>
        <Routes>
        <Route path="/schoolpics" element={<SchoolPics />}/>
          <Route path="/seniorpics" element={<SeniorPics />}/>
        </Routes>
       
        <Footer/>
      </div>
      
      
      </BrowserRouter>
      
    </ChakraProvider>
  )
}

export default App
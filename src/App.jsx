// below is from App.jsx in MinneGrowta
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components"
// import { UserProvider } from "./ctx/UserContext";
import { HomePage, LoginPage, SignupPage, MyFavorites, Forum, Planner, PlantSearch, UserDashboard } from "./pages";
import { ChakraProvider } from '@chakra-ui/react';

import { render } from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/App.css'
import { useState } from "react";

function App() {
  // const [search, setSearch] = useState([])

  return (
      <ChakraProvider>
        <BrowserRouter>
          <UserProvider>
            {/* <Wrapper> */}
              {/* <Header setSearch={setSearch}/> */}
              <div className="content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/messages" element={<Messages />} />
                  <Route path="/schoolpics" element={<SchoolPics />} />
                </Routes>
                </div>
              <Footer />
            {/* </Wrapper> */}
          </UserProvider>
        </BrowserRouter>
      </ChakraProvider>
  );
}

export default App;




//below is what was originally on App.jsx:
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

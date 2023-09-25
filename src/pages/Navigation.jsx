// import React from "react";
// import { useEffect, useState } from "react";
// import Nav from 'react-bootstrap/Nav'; 
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function Navigation(props) {

//   const style = {
//     card: { 
//         background: "22223B", 
//         padding: "5px", 
//         margin: 20,
//   },
//     heading: {
//         background: "22223B",
//         minHeight: 50,
//         lineHeight: 3.5,
//         fontSize: "25px",
//         color: "#f2e9e4",
//         padding: "20px",
//     },
// }

// useEffect(() => {
//     console.log("Hello")
// }, [window.location.href])

//   return (
//     <>
//       <Nav style={style.card} className="justify-content-end" activeKey="/home">
//         <Nav.Item>
//           <Nav.Link onClick={() => props.handlePageChange('Home')} style={style.heading} href="/home">About Me</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//         <Nav.Link onClick={() => props.handlePageChange('SchoolPics')} style={style.heading} href="#" eventKey="link-1">Portfolio</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link onClick={() => props.handlePageChange('SeniorPics')} style={style.heading} href="#" eventKey="link-2">Contact</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link onClick={() => props.handlePageChange('Favorites')} style={style.heading} href="#" eventKey="link-3">Resume</Nav.Link>
//         </Nav.Item>
//       </Nav>
//     </>
//     )
// }

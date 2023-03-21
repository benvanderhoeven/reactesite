// import {createRoot} from "react-dom/client";

// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./Style.css";
// import ReorderIcon from '@mui/icons-material/Reorder';

// function Navbar () {
//   const [expandNavbar, setExpandNavbar] = useState(false);

//   const location = useLocation();

//   useEffect(() => {
//     setExpandNavbar(false);
//   }, [location]);
  
//   return (
    
//     <div className="navbar" id={expandNavbar ? "open" : "close"}>
//       <div className="toggleButton">
//         <button onclick={() => { setExpandNavbar((prev) => !prev); }}><ReorderIcon /></button>
//       </div>
//       <div className="links">
        
//             <Link to="/home">Home</Link>
        
        
//             <Link to="/about">About</Link>
        
        
//             <Link to="/portfolio">Portfolio</Link>
         
//     </div>
//     </div>
const Navbar = () => {
  return (
     
  <nav className= 'navbar'>
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/portfolio">Portfolio</Link>
    </li>
    
  </div>
  </nav>
  );
}
export default Navbar;




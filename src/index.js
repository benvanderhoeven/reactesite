import { createRoot } from "react-dom/client";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Utility from "./Components/Utility";
import Footer from "./Components/Footer"
import "./Components/style.css"
import Home from "./Components/Home"
import About from "./Components/About"
import Portfolio from "./Components/Portfolio"




const App = () => {
    return (
    
    
    <BrowserRouter>
        
        <Navbar />

        
            
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
                

            </Routes>

            <main className= "main"></main>

        
            
        <Footer />
      
        
    </BrowserRouter>

    
    )
};
const appElement = document.getElementById("app");
const root = createRoot(appElement);
root.render(<App />)


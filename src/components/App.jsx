import React from "react";
import Header from "./Header";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Productspage from "./Productspage";
import Aboutpage from "./Aboutpage";
import Blogpage from "./Blogpage";
import Contactpage from "./Contactpage";
import Cartpage from "./Cartpage";
import AdminPage from "./AdminPage";
import AddProducts from "./AddProducts";
import Card from "./Card";


function App(){
    return <div>
        <Header />
        <div className="Container-i">
        <Router>
            <Routes>
                <Route path="/" exact element={<Homepage/>}></Route>
                <Route path="/products" exact element={<Productspage/>}></Route>
                <Route path="/about" exact element={<Aboutpage/>}></Route>
                <Route path="/blog" exact element={<Blogpage/>}></Route>
                <Route path="/contact" exact element={<Contactpage/>}></Route>
                <Route path="/cart" exact element={<Cartpage/>}></Route>
                <Route path="/admin" exact element={<AdminPage/>}></Route>
                <Route path="/add-product" exact element={<AddProducts/>}></Route>
                <Route path="/card" exact element={<Card/>}></Route>
            </Routes>
            
        </Router>
        </div>
        
    </div>
}

export default App;
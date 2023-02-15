import React from 'react'
import { useState } from 'react';
import Cart from '../Cart/Cart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import "./Navbar.scss";
const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    
    <div className="navbar">
    <div className="wrapper">
      <div className="left">
        <div className="item">
          <img src="/" alt="" />
          <KeyboardArrowDownIcon />
        </div>
        <div className="item">
          <span>BREED</span>
          <KeyboardArrowDownIcon />
        </div>
        <div className="item">
          <Link className ="link" to="/products/1">DOG</Link>
        </div>
        <div className="item">
          <Link className ="link" to="/products/2">CAT</Link>
        </div>
        <div className="item">
          <Link className ="link" to="/products/3">BIRDS</Link>
        </div>
      </div>
      <div className="center">
        <Link className ="link" to="/">VAIBSTORE</Link>
      </div>
      <div className="right">
        <div className="item">
          <Link className ="link" to="/">Homepage</Link>
        </div>
        <div className="item">
          <Link className ="link" to="/">About</Link>
        </div>
        <div className="item">
          <Link className ="link" to="/">Contact</Link>
        </div>
        <div className="item">
          <Link className ="link" to="/">Stores</Link>
        </div>
              <div className="icons">
                <SearchIcon/>
                <PersonIcon/>
                <FavoriteBorderIcon/>
                <div className="cartIcon" onClick={()=>setOpen(!open)}>
                  <AddShoppingCartIcon/>
                  <span>0</span>
                </div>
              </div>
              
              </div>
              </div>
              {open && <Cart/>}
</div>
  
  );
};

export default Navbar

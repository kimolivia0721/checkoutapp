import React from 'react';

const Navbar = ()=>{
    
    return(
        
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Shop!</a>
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><a href="meat_seafood.html">meat/seafood</a></li>
                    <li><a href="vegetable.html">vegetable</a></li>
                    <li><a href="fruits.html">fruits</a></li>
                    <li><a href="frozen.html">frozen</a></li>
                </ul>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="user.html">person</a></li>
                    <li><a href="cart.html">shopping_cart</a></li>
                </ul>
            </div>
         </nav> 
    )
}

export default Navbar;
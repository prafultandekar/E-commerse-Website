import React from 'react'
import {Link} from "react-router-dom"
// import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
function Navbar() {
    const { isAuth, logout } = useAuth();
   const { cart } = useCart();
  return (
    <nav>
{/* <h2>E-Commerse</h2> */}
<div style={styles.navbar} >
  <h2 style={styles.logo}>ShopClone</h2>
  <div style={styles.links}>
    <Link to="/" style={styles.link} >Home</Link>
   <Link to="/cart">Cart ({cart.length}) </Link>
      {isAuth ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <Link to="/signup">Signup</Link>

      <Link to="/checkout">Checkout</Link>
    </div>
</div>

    </nav>
  )
}

export default Navbar

const styles = {
  navbar:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
     backgroundColor: "#333",
      padding: "10px 20px",
  },
  logo:{
    color:"white",
    margin:"0"
  },
  links:{
    display:"flex",
    gap:"15px"
  },
  link:{
    color:"white",
    textDecoration:"none"
  }
}
import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';  

export default function Header() {
  return (
    <div
      style={{
        backgroundColor: "teal",
        color: "#fff",
        position: "fixed",
        width: "100%",
        top: "0",
        left: "0",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      <div>
        
        <p style={{ margin: 0 , fontFamily: "sans-serif", fontSize:"2rem"}}> 
        <FaShoppingCart
          style={{ margin: "0 15px", cursor: "pointer", fontSize: "24px" }}/>
           UniGilet</p>
      </div>

      <div style={{ flex: 0.93, display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          placeholder="Rechercher des gilets..."
          style={{
            padding: "10px",
            width: "30%",
            borderRadius: "20px",
            border: "none",
            outline: "none",
            fontSize: "16px",
          }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <FaShoppingCart
          style={{ margin: "0 15px", cursor: "pointer", fontSize: "24px" }}
          
        />
        <FaUser
          style={{ cursor: "pointer", fontSize: "24px" }}
        />
      </div>
    </div>
  );
}

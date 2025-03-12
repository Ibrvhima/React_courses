import React from "react";
import { FaTrash } from "react-icons/fa"; 

export default function Panier({ panier, onRemoveFromPanier, onUpdateQuantity }) {
  return (
    <div style={{marginTop:"60px", fontFamily:"sans-serif"}}>
      <h2 style={{width:"100%",backgroundColor:"teal", color:'#fff', fontSize:"1.4rem",padding:"5px"}}>Panier</h2>
      {panier.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
            borderBottom: "1px solid #ddd",
            padding: "10px 0",
            width: "440px",
          }}
        >
          
          <select
            value={item.quantite}
            onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value, 10))}
          >
            {[...Array(item.stock + 1).keys()].slice(1).map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>
          
          <img
            src={item.image}
            alt={item.nom}
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
          />
          <p>{item.nom}</p>
          <p>Prix: {item.prix * item.quantite}$</p>
          
         
          <button
            onClick={() => onRemoveFromPanier(item.id)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "red",
              fontSize: "1.2rem",
            }}
          >
            <FaTrash />
          </button>
        </div>
      ))}
      <div style={{marginTop:"2.8rem"}}>
        <button style={{width:"100%",backgroundColor:"teal", color:'#fff', fontSize:"1rem",padding:"5px", border:"none", cursor:"pointer"}}>Procede to checkout</button>
      </div>
    </div>
    
  );
}

export default function Products({ produit, onAddToPanier }) {
     const isOutOfStock = produit.stock === 0; 
   
     return (
       <div
         style={{
           width: "200px",
           textAlign: "center",
           boxShadow: "1px 1px 2px 2px #ccc",
           padding: "10px",
           margin: "10px",
           opacity: isOutOfStock ? 0.5 : 1, 
         }}
       >
         <img
           src={produit.image}
           alt={produit.nom + produit.prix}
           width="150"
           style={{ borderRadius: "8px" }}
         />
         <p>
           <span style={{ fontSize: "18px" }}>{produit.nom}</span>
         </p>
         <p>{produit.prix}$</p>
         <p>Stock: {produit.stock}</p>
   
         <button
           onClick={() => onAddToPanier(produit)}
           disabled={isOutOfStock} 
           style={{
             backgroundColor: isOutOfStock ? "#ccc" : "teal", 
             color: "white",
             border: "none",
             cursor: isOutOfStock ? "not-allowed" : "pointer",
             padding: "10px 15px",
             marginTop: "10px",
           }}
         >
           Ajouter au panier
         </button>
       </div>
     );
   }
   
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Products({ produit, onAddToPanier }) {
  return (
    <div className="card shadow-sm w-100 h-100 mt">
      <img
        src={produit.image}
        className="card-img-top mt-4"
        alt={produit.nom}
        style={{ height: '220px'}} 
      />
      <div className="card-body d-flex flex-column align-items-center text-center">
        <h5 className="card-title">{produit.nom}</h5>
        <p className="card-text">{produit.prix} €</p>
        <button
          className="btn bg-teal text-white"
          onClick={() => onAddToPanier(produit)}
        >
          Ajouter au Panier
        </button>
      </div>
    </div>
  );
}

export default Products;

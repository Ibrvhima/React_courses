import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Products({ produit, onAddToPanier }) {
  return (
    <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex">
      <div className="card shadow-sm w-100 mt-3">
        <img
          src={produit.image}
          className="card-img-top img-fluid"
          alt={produit.nom}
          style={{ height: '220px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column align-items-center text-center">
          <h5 className="card-title">{produit.nom}</h5>
          <p className="card-text">Stock : {produit.stock}</p>
          <p className="card-text">Prix : {produit.prix} €</p>
          <button
            className="btn bg-teal text-white mt-auto"
            onClick={() => onAddToPanier(produit)}
          >
            Ajouter au Panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;

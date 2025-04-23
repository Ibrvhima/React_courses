import React from "react";
import { FaTrash } from "react-icons/fa";

export default function Panier({ panier, onRemoveFromPanier, onUpdateQuantity }) {
  return (
    <div className="container mt-0 pt-4 " style={{ fontFamily: "sans-serif" }}>
      <h2 className="bg-teal text-white p-0 mb-4 rounded text-center fs-4">Panier</h2>

      {panier.length === 0 ? (
        <p className="text-center text-muted">Votre panier est vide.</p>
      ) : (
        <div className="row">
          {panier.map((item) => (
            <div
              key={item.id}
              className="col-18 mb-3 d-flex align-items-center justify-content-between border-bottom pb-2"
            >
              {/* Quantité */}
              <select
                className="form-select w-auto me-2"
                value={item.quantite}
                onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
              >
                {[...Array(item.stock + 1).keys()].slice(1).map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </select>

              {/* Image */}
              <img
                src={item.image}
                alt={item.nom}
                className="img-fluid"
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />

              {/* Infos */}
              <div className="flex-grow-1 mx-2">
                <p className="mb-0 fw-bold">{item.nom}</p>
                <small className="text-muted">Prix: {item.prix * item.quantite}$</small>
              </div>

              {/* Supprimer */}
              <button
                className="btn btn-link text-danger p-0"
                onClick={() => onRemoveFromPanier(item.id)}
              >
                <FaTrash size={18} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Bouton checkout */}
      {panier.length > 0 && (
        <button className="btn btn-teal w-100 mt-4">Procéder au paiement</button>
      )}
    </div>
  );
}

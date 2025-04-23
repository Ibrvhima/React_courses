import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

export default function Header({ cartItemCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-teal fixed-top shadow-sm py-2">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        <div className="d-flex align-items-center text-white">
          <FaShoppingCart className="me-2" size={24} />
          <span className="fs-4 fw-bold">UniGilet</span>
        </div>

        
        <div className="d-none d-md-flex flex-grow-1 justify-content-center px-3">
          <input
            className="form-control rounded-pill w-75"
            type="search"
            placeholder="Rechercher des gilets..."
            aria-label="Rechercher"
          />
        </div>

        <div className="d-flex align-items-center position-relative text-white">
          <div className="position-relative me-3 ">
            <FaShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ">
                {cartItemCount}
              </span>
            )}
          </div>
          <FaUser size={24} />
        </div>
      </div>

      {/* Barre de recherche pour mobile (en dessous) */}
      <div className="container-fluid d-md-none mt-2 px-3">
        <input
          className="form-control rounded-pill"
          type="search"
          placeholder="Rechercher des gilets..."
          aria-label="Rechercher"
        />
      </div>
    </nav>
  );
}

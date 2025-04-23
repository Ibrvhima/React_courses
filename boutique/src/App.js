import { useState } from "react";
import Header from "./header";
import Panier from "./panier";
import Products from "./products";
import './index.css';  
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Menu() {
  const initialProduits = [
    { id: 1, image: "/jilet1.jpeg", nom: "Gilet Scolaire", prix: 170, stock: 10 },
    { id: 2, image: "/jilet2.jpeg", nom: "Gilet Scolaire", prix: 150, stock: 15 },
    { id: 3, image: "/jilet3.jpeg", nom: "Gilet Scolaire", prix: 120, stock: 13 },
    { id: 4, image: "/jilet4.jpeg", nom: "Gilet Scolaire", prix: 190, stock: 15 },
    { id: 5, image: "/jilet6.jpeg", nom: "Gilet Scolaire", prix: 110, stock: 10 },
    { id: 6, image: "/jilet8.jpeg", nom: "Gilet Scolaire", prix: 100, stock: 18 },
    { id: 7, image: "/jilet9.jpeg", nom: "Gilet Scolaire", prix: 170, stock: 17 },
    { id: 8, image: "/jilet13.jpeg", nom: "Gilet Scolaire", prix: 160, stock: 20 },
    { id: 9, image: "/jilet14.jpeg", nom: "Gilet Scolaire", prix: 190, stock: 19 },
    { id: 10, image: "/jilet15.jpeg", nom: "Gilet Scolaire", prix: 130, stock: 16 },
    { id: 11, image: "/jilet16.jpeg", nom: "Gilet Scolaire", prix: 150, stock: 12 },
    { id: 12, image: "/jilet1.jpeg", nom: "Gilet Scolaire", prix: 126, stock: 10 },
  ];

  const [produits, setProduits] = useState(initialProduits);
  const [panier, setPanier] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleAddToPanier = (produit) => {
    if (produit.stock <= 0) return;

    setPanier((prevPanier) => {
      const itemExists = prevPanier.find((item) => item.id === produit.id);

      if (itemExists) {
        return prevPanier.map((item) =>
          item.id === produit.id ? { ...item, quantite: item.quantite + 1 } : item
        );
      } else {
        return [...prevPanier, { ...produit, quantite: 1 }];
      }
    });

    setProduits((prevProduits) =>
      prevProduits.map((p) => (p.id === produit.id ? { ...p, stock: p.stock - 1 } : p))
    );

    setCartItemCount((prevCount) => prevCount + 1);
  };

  const handleRemoveFromPanier = (produitId) => {
    setPanier((prevPanier) => prevPanier.filter((item) => item.id !== produitId));

    setProduits((prevProduits) =>
      prevProduits.map((p) => {
        const produitInitial = initialProduits.find((item) => item.id === p.id);
        if (p.id === produitId) {
          return { ...p, stock: produitInitial.stock };
        }
        return p;
      })
    );

    setCartItemCount((prevCount) =>
      panier.reduce((total, item) => (item.id !== produitId ? total + item.quantite : total), 0)
    );
  };

  const handleUpdateQuantity = (produitId, newQuantity) => {
    setPanier((prevPanier) =>
      prevPanier.map((item) =>
        item.id === produitId ? { ...item, quantite: newQuantity } : item
      )
    );

    setProduits((prevProduits) =>
      prevProduits.map((p) => {
        const produitDansPanier = panier.find((item) => item.id === produitId);
        const ancienneQuantite = produitDansPanier ? produitDansPanier.quantite : 0;
        return p.id === produitId
          ? { ...p, stock: p.stock - (newQuantity - ancienneQuantite) }
          : p;
      })
    );

    setCartItemCount(
      panier.reduce((total, item) => total + (item.id === produitId ? newQuantity : item.quantite), 0)
    );
  };

  return (
    <>
      <Header cartItemCount={cartItemCount} />

      <div className="container-fluid pt-5 mt-4">
        <div className="row">
          {/* Colonne Products */}
          <div className="col-lg-18 col-md-8 col-sm-12">
            <div className="row">
              {produits.map((produit) => (
                <div key={produit.id} className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 mt-10">
                  <Products produit={produit} onAddToPanier={handleAddToPanier} />
                </div>
              ))}
            </div>
          </div>

          {/* Colonne Panier */}
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Panier panier={panier} onRemoveFromPanier={handleRemoveFromPanier} onUpdateQuantity={handleUpdateQuantity} />
          </div>
        </div>
      </div>
    </>
  );
}

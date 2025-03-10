import { useState } from "react";
import Header from "./header";
import Panier from "./panier";
import Products from "./products";

export default function Menu() {
  // État initial des produits
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

  // Ajouter un produit au panier
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

    // Décrémenter le stock
    setProduits((prevProduits) =>
      prevProduits.map((p) => (p.id === produit.id ? { ...p, stock: p.stock - 1 } : p))
    );
  };

  // Supprimer un produit du panier
  const handleRemoveFromPanier = (produitId) => {
    setPanier((prevPanier) => prevPanier.filter((item) => item.id !== produitId));

    // Restaurer le stock initial
    setProduits((prevProduits) =>
      prevProduits.map((p) => {
        const produitInitial = initialProduits.find((item) => item.id === p.id);
        if (p.id === produitId) {
          return { ...p, stock: produitInitial.stock };
        }
        return p;
      })
    );
  };

  // Mettre à jour la quantité d'un produit dans le panier
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
  };

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            fontFamily: "sans-serif",
            marginTop: "70px",
            width: "800px",
          }}
        >
          {produits.map((produit) => (
            <Products key={produit.id} produit={produit} onAddToPanier={handleAddToPanier} />
          ))}
        </div>

        <Panier
          panier={panier}
          onRemoveFromPanier={handleRemoveFromPanier}
          onUpdateQuantity={handleUpdateQuantity}
        />
      </div>
    </>
  );
}

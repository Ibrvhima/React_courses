function Products(props) {
  return (
    <>
      <p>
        Nom du Produit: {props.produits.nom} / {props.produits.prix} GNF
      </p>
      <img src={props.produits.image} alt={props.produits.nom} width="100" />
    </>
  );
}

export default function Fruit() {
  const produit = [
    { nom: "mango", prix: 1000, image: "/ai-generated-8512889_1280.jpg" },
    { nom: "banana", prix: 1000, image: "/banana-1025109_1280.jpg" },
    { nom: "apple", prix: 1000, image: "/apple-1834639_1280.jpg" },
    { nom: "Grapes", prix: 1000, image: "/table-grapes-74344_1280.jpg"},
    { nom: "orange", prix: 1000, image: "/fruits-2202426_1280.jpg" },
  ];

  return (
    <div>
      <h1>liste des fruits</h1>
      {produit.map((produit, index) => (
        <Products key={index} produits={produit} />
      ))}
    </div>
  );
}

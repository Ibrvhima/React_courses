function Products(props) {
  return (
    <>
      <p>Nom du Produit: {props.produits.nom} / {props.produits.prix} GNF</p>
    </>
  );
}

export default function Fruit() {
  const produit = [{ nom: "mango", prix: 1000 },
     { nom: "mango", prix: 1000 },
     { nom: "banana", prix: 1000 },
     { nom: "apple", prix: 1000 },
     { nom: "craps", prix: 1000 },
     { nom: "orange", prix: 1000 }
  ];

  return (
     <div>
          <h1>
               liste des fruits
          </h1>
          {produit.map((produit,index) => (
               <Products key={index} produits = {produit} />
          ))}
     </div>
  )
}

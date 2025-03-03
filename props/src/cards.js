function Card(props) {
  return (
    <div
      style={{
        border: "1px",
        backgroundColor: "skyblue",
        padding: "10px",
        textAlign: "center",
        borderRadius: "8px",
        boxShadow: "1px 2px 2px 1px #cccc",
      }}
    >
      {props.children}
    </div>
  );
}

export default function Menu() {

     const produits =[
          {nom:"iphone 13", image:"/iphone-13-pro-max-7173413_1280.jpg",prix:1199},
          {nom:"iphone 13", image:"/samsung.jpg",prix:1199},
          {nom:"iphone 13", image:"/iphone-13-pro-max-7173413_1280.jpg",prix:1199},
          {nom:"iphone 13", image:"/iphone-13-pro-max-7173413_1280.jpg",prix:1199},

     ]
     
  return (
    <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap"}}>
     {produits.map((produit, index) =>(
          <Card key={index}>
               <img src={produit.image} alt={produit.nom} width="150" />
               <p>{produit.nom}</p>
               <p>{produit.prix}$</p>
               <button onClick={() => alert(`vous avez acheter ${produit.nom} pour ${produit.prix}$`)}>Acheter🛒</button>

          </Card>
     ))}
     
    </div>
  );
}

function Article (props){

     const handleClick = () =>{
          
          alert(`Vous avez acheter ${props.produits.nom} pour ${props.produits.prix}€`)
     }
     return(
          <div>
               <p>Nom Article: {props.produits.nom}</p>
               <img src={props.produits.image} alt={props.produits.nom}  width="100"/>
               <p>Prix: {props.produits.prix}€ </p>
               <button onClick={handleClick}>Acheter</button>
          </div>
     )
}

export default function Vente(){
     const articles =[
          {nom: "Camera G2-23", prix: 243, image: "/camera-431119_1280.jpg"},
          {nom: "Iphon 13 pro-max", prix: 1243, image: "iphone-13-pro-max-7173413_1280.jpg"},
          {nom: "Macbook air-15", prix: 2243, image: "/macbookair-2018-.webp"},
          {nom: "Samsung  S25", prix: 1243, image: "/samsung.jpg"},
          {nom: "Webcam wb-23", prix: 243, image: "/w800.png"},
          {nom: "Lenovo L480", prix: 1223, image: "/lenovo.jpg"},
          {nom: "Clavier Cl300", prix: 13, image: "/clavier.jpeg"},
          
     ]
      

     return(
          <div>
               <h1>Ce que nous vendons</h1>
               {articles.map((articles , index) =>(
                    <Article key={index} produits={articles} />
               ))}
          </div>
     )
}
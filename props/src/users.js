// Passer un objet entier en prose

//creation du composant enfant

function Utilsateur(props){
     return <p>Bonjour{props.utilsateur.nom} vous avez {props.utilsateur.age}</p>
}

// Creation du composant parent qui contiendra l'obje
export default function App(){

     // Cration de l'objet
     const user = {nom: "Diallo Ibrahima", age: 23}

     return(
          <Utilsateur utilsateur ={user} />
     )
}

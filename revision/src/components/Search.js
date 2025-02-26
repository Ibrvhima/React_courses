import { useState } from "react"

export default function FilterList(){

     // Creation du tableau d'etudiant
     const [students] = useState(["diallo","bah","cisse","keita","barry","sidibe"])
     const[nameSearch, setnameSearhc] = useState("")

     // Fonction de filtrage 
     const searchByName = students.filter((saisi) =>
          saisi.toLowerCase().includes(nameSearch.toLowerCase()) 
     )


     return(
          <>
          <p>Rechercher une etudiant par son nom</p>
          <input type="search" placeholder="recherher..." value={nameSearch} 
          onChange={(e) => setnameSearhc(e.target.value)}/>
         

          <ul>
               {
                    searchByName.length > 0 ? (searchByName.map((searchByName, index) => <li key={searchByName}>{searchByName}</li>)) : <p>aucun nom trouvé!! 🙄</p>
               }
          </ul>
          </>
     )
}
function Boite(props){
     return(
          <div style={{
               border: "1px",
               color: "black",
               backgroundColor: "teal",
               padding: "10px",
               margin: "10px",
               borderRadius: "5px"
          }}>
               {props.children}
          </div>
     )
}

export default function Contenu(){
     return(
          <div>
               <h1>Quelque elements qui seront afficher dans la Boite</h1>
               <Boite>
                    <h1>Bienvenu✨</h1>
                    <p>ceci est un message dans une Boite</p>
               </Boite>
               <Boite>
                    <img src="/logo192.png" alt="logo react" width="100"/>
                    <p>ceci est le logo du Framework React</p>
               </Boite>
               <Boite>
                    <button onClick={() => alert("Click reusi")}>cliquer ici</button>
               </Boite>
          </div>
     )
}
function Temoignage(props){
     return(
          <div style={{
               borderRadius: "8px",
               padding: "10px",
               margin:"10px",
               boxShadow:"1px 2px 1px 1px #ccc",
               width: "220px",
               textAlign: "center"

          }}>{props.children}</div>
     )
}

export default function Testimonials(){
     const customers =[
          {image:"https://i.pravatar.cc/150?img=5",  non:"Aminata Diallo",text:"Je vous recommande vraiment la boutique Media7"},
          {image:"https://i.pravatar.cc/152?img=4",  non:"Mamadou  Diallo",text:"J'ai aime le produit et la procedur d'achat etait safe😊"},
          {image:"https://i.pravatar.cc/154?img=3",  non:"Ibrahima Bah",text:"Pour vos besoin en tout ce qui est materiels informatique je vous recommande la Boutique Media7"},
          {image:"https://i.pravatar.cc/157?img=1",  non:"Fodeba Keita",text:"J'ai longtemps galerer à trouver mon odinateur de rêve🤗mais avec Media7 les reves devient réalité"},
          {image:"https://i.pravatar.cc/159?img=8",  non:"Oumar Diallo",text:"Rien à dire la boutique N°1 c'est Media7"},
          {image:"https://i.pravatar.cc/156?img=9",  non:"Mabinty Bangoura",text:"Je voulais un support d'ordinateur et j'ai longtemps scroller sur les different boutique en ligne mais Media7 m'a impressionnée"},
     ] 

     return(
          <div style={{display: "flex",gap:"2rem", flexWrap:"wrap", margin:"20px"}}>
               {customers.map((customer, index) =>(
                    <Temoignage key={index}>
                         <img  src={customer.image} alt={customer.non + customer.image} width="100" style={{borderRadius:"50%"}}/>
                         <p><strong style={{fontFamily:"sans-serif"}}>{customer.non}</strong></p>
                         <p>‶{customer.text}″</p>
                    </Temoignage>
               ))}
          </div>
     )
}
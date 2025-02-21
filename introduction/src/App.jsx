const style = { color: "red", border: "none", backgroundColor: "skyblue" };

const handleClic = () =>{
  alert("hey! vous avez cliquez sur le titre😎")
}

//rendu conditionnel
const doYouLikeReact = false;


function App(){
  return (
    <>
      <h1 onClick={handleClic} className = "title" style = {style}>bonjour le monde</h1>
      {doYouLikeReact ?<h2>Oui j'aime React 🙂 </h2> :  <h2>Non je N'aime pas React 😣 </h2>  }
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
        laboriosam totam culpa blanditiis, aliquam quis sequi, voluptate saepe
        assumenda tenetur sed esse ad iusto aliquid fugit! Autem, vel eos! Hic!
      </p>
    </>
  );
}

export default App;

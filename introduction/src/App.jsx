const style = { color: "red", border: "none", backgroundColor: "skyblue" };

// L'evenement de clic 'onClick'
const handleClic = () => {
  alert("hey! vous avez cliquez sur le titre😎");
};

//rendu conditionnel
const doYouLikeReact = true;

// Affichage automatique des liste
const todos = [
  "Presenter React",
  "Parler du JSX",
  "Parler des composant React",
  "Parler du rendu conditionnel",
];

function App() {
  return (
    <>
      <h1 onClick={handleClic} className="title" style={style}>
        bonjour le monde
      </h1>
      <SousTitre color = "green">Cours de React Js</SousTitre>
      {doYouLikeReact ? (
        <h2>Oui j'aime React 🙂 </h2>
      ) : (
        <h2>Non je N'aime pas React 😣 </h2>
      )}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
        laboriosam totam culpa blanditiis, aliquam quis sequi, voluptate saepe
        assumenda tenetur sed esse ad iusto aliquid fugit! Autem, vel eos! Hic!
      </p>
      <ul>
        {todos.map((todos) => (
          <li key={todos}>{todos}</li>
        ))}
      </ul>
    </>
  );
}
function SousTitre({color, children}) {
  return <h2 style = {{color:color}}>{children}</h2>;
}

export default App;

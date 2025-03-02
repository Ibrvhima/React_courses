import { useState } from "react";
export default function App() {
  //l'evenement de clique onClick
  const handelClic = () => {
    alert("vous avez cliquer le boutton");
  };

  //rendu conditionnel
  const [isLogginde, setisLoggined] = useState(false);

  //list autoamtique des taches
  const todos = ["se lever", "se laver", "cuisiner", "manger"];

  //lis automatique des utilisateur
  const users = [
    { id: "001", name_: "Diallo", phone: 622334455, email: "diallo@mail.com" },
    { id: "002", name_: "Bah", phone: 622778855, email: "bah@mail.com" },
    { id: "003", name_: "Camara", phone: 622223344, email: "camara@mail.com" },
    { id: "004", name_: "Sylla", phone: 623669876, email: "sylla@mail.com" },
    {
      id: "005",
      name_: "Bangoura",
      phone: 611227788,
      email: "bangoura@mail.com",
    },
  ];

  return (
    <>
      <h1>Bonjour le monde</h1>
      <h2>
        {setisLoggined}
        {isLogginde ? "vous etes connecter" : "vous n'etes pas connecter"}
      </h2>
      <button onClick={handelClic}>Clic me</button>
      <h3>la liste de mes taches</h3>
      <ul>
        {todos.map((todos) => (
          <li key={todos}>{todos}</li>
        ))}
      </ul>

      <ul>
        {users.map((users) => (
          <li key={users}>
            {users.id}--{users.name_}--{users.phone}--{users.email}
          </li>
        ))}
      </ul>
    </>
  );
}

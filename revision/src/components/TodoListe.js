import { useState } from "react";

export default function TodoList() {
  // Creation des variable d'etat
  const [todos, settodos] = useState([]);
  const [newTodo, setnewTodo] = useState("");

  //   Fonctionnalité d'ajout de tache
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      settodos([...todos, newTodo]);
      setnewTodo("");
    }
  };

//   fonctionnalité qui supprime une tache
const deletTodo = (todoToRemove) =>{
     settodos(todos.filter((todo)=> todo !== todoToRemove))

}

  return (
    <>
      <h1>Gestionnaires des taches</h1>
      <input
        type="texte"
        placeholder="ajouter une tache ici..."
        value={newTodo}
        onChange={(e) => setnewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Ajouter</button>

      {/* La Liste de toutes les taches */}
      <ul>
        {todos.map((todos) => (
          <li key={todos}>
            {todos} <button onClick={() => deletTodo(todos)}>🗑</button>
          </li>
        ))}
      </ul>
    </>
  );
}

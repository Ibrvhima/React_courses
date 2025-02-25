// Declaration du tableau d'objet
const usersList = [
  { id: "U-001", nom: "Diallo Ibrahim", age: 20 },
  { id: "U-002", nom: "Barry Mamadou Moussa", age: 25 },
  { id: "U-003", nom: "Diallo Mariam", age: 20 },
  { id: "U-004", nom: "Bah Ismael", age: 28 },
  { id: "U-005", nom: "Bongoura Mariama", age: 20 },
];

export default function UsersList() {
  return (
    <>
      <h1>les membres du groupe</h1>
      <ul>
          {usersList.map(usersList =>(<li key ={usersList.id}>{usersList.nom}- {usersList.age}ans</li>))}
      </ul>
    </>
  );
}

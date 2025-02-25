import { useState } from "react";

export default function LikeButton() {
  // cration de la variable d'etats
  const [count, setCount] = useState(0);

  //fonctionnalité de click
  const handleClick = (e) => {
    setCount(count + 1);
  };
  // Fonctionnalité qui reinitialise le compteur
  const reinitialise = () => {
    setCount(0);
  };

  return (
    <>
      <p>
        like<button onClick={handleClick}>❤</button>
      </p>
      <p>vous avez liker {count} fois</p>

      <button onClick={reinitialise}>reinitialisez!!</button>
    </>
  );
}

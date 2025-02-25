import {useState} from "react"
export default function StatusMessage() {
 const [isLoggedIn, setisLoggedIn] = useState(false)

  const toggelStatus = () => {
    setisLoggedIn(!isLoggedIn);
  };

  return <>
  <h1>
     {isLoggedIn ? "Bienvenu dans mon cours" : "connectez vous"}
  </h1>
  <button onClick={toggelStatus}>
     {isLoggedIn ? "Logout": "Login"}
  </button>
  </>;
}

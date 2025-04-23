import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div className="container p-3 rounded mt-3 bg-primary shadow">
      <ul className="d-flex justify-content-center fs-5 list-unstyled m-0">
        <li className="mx-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link px-3 py-2 rounded fw-semibold ${
                isActive ? "bg-light text-primary" : "text-white"
              }`
            }
            style={{ textDecoration: "none" }}
          >
            Accueil
          </NavLink>
        </li>
        <li className="mx-4">
          <NavLink
            to="form"
            className={({ isActive }) =>
              `nav-link px-3 py-2 rounded fw-semibold ${
                isActive ? "bg-light text-primary" : "text-white"
              }`
            }
            style={{ textDecoration: "none" }}
          >
            Ajouter Techno
          </NavLink>
        </li>
        <li className="mx-4">
          <NavLink
            to="list"
            className={({ isActive }) =>
              `nav-link px-3 py-2 rounded fw-semibold ${
                isActive ? "bg-light text-primary" : "text-white"
              }`
            }
            style={{ textDecoration: "none" }}
          >
            Liste des Technos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;

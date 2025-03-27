import { COLORS } from "../constants/Colors";
import { BiNotepad } from "react-icons/bi";

export default function Header({ setTheme }) {
  return (
    <header className="d-flex bg-white justify-content-between align-items-center rounded p-3">
      <h1 className="fs-4 fw-bold d-flex align-items-center gap-2">
        <BiNotepad size={35} /> NoteHack
      </h1>
      <div className="d-flex gap-2">
        {Object.values(COLORS).map((color, index) => (
          <span
            key={index}
            onClick={() =>
              setTheme({
                backgroundImage: color.image,
                backgroundColor: color.color,
              })
            }
            style={{
              cursor: "pointer",
              width: 20,
              height: 20,
              display: "inline-block",
              borderRadius: "50%",
              backgroundColor: color.color,
              backgroundImage: color.image,
            }}
          ></span>
        ))}
      </div>
    </header>
  );
}

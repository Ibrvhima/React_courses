import { useState } from "react";
import { COLORS } from "./constants/Colors";
import { BiPencil, BiTrash } from "react-icons/bi";

export default function App() {
  const [theme, setTheme] = useState({
    backgroundImage: COLORS.gradientOne.image,
    backgroundColor: COLORS.gradientOne.color,
  });

  const [notes, setnotes] = useState([]);
  const [noteList, setnoteList] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    if (!noteList.trim()) return;

    let newNote = { title: noteList, date: Date.now() };
    setnotes([newNote, ...notes]);
    setnoteList("");
  };
  return (
    <div style={{ ...theme, height: "100dvh" }}>
      <div className="container py-3">
        {/* Section header */}
        <header className="d-flex bg-white justify-content-between align-items-center rounded p-3">
          <h1 className="fs-6 fw-normal">NoteHack</h1>
          <div className="d-flex gap-2">
            <span
              onClick={() =>
                setTheme({
                  backgroundImage: COLORS.gradientOne.image,
                  backgroundColor: COLORS.gradientOne.color,
                })
              }
              style={{
                cursor: "pointer",
                width: 20,
                height: 20,
                display: "inline-block",
                borderRadius: "100%",
                backgroundColor: COLORS.gradientOne.color,
                backgroundImage: COLORS.gradientOne.image,
              }}
            ></span>
            <span
              onClick={() =>
                setTheme({
                  backgroundImage: COLORS.gradientTwo.image,
                  backgroundColor: COLORS.gradientTwo.color,
                })
              }
              style={{
                cursor: "pointer",
                width: 20,
                height: 20,
                display: "inline-block",
                borderRadius: "100%",
                backgroundColor: COLORS.gradientTwo.color,
                backgroundImage: COLORS.gradientTwo.image,
              }}
            ></span>
            <span
              onClick={() =>
                setTheme({
                  backgroundImage: COLORS.gradientThree.image,
                  backgroundColor: COLORS.gradientThree.color,
                })
              }
              style={{
                cursor: "pointer",
                width: 20,
                height: 20,
                display: "inline-block",
                borderRadius: "100%",
                backgroundColor: COLORS.gradientThree.color,
                backgroundImage: COLORS.gradientThree.image,
              }}
            ></span>
            <span
              onClick={() =>
                setTheme({
                  backgroundImage: COLORS.gradientFour.image,
                  backgroundColor: COLORS.gradientFour.color,
                })
              }
              style={{
                cursor: "pointer",
                width: 20,
                height: 20,
                display: "inline-block",
                borderRadius: "100%",
                backgroundColor: COLORS.gradientFour.color,
                backgroundImage: COLORS.gradientFour.image,
              }}
            ></span>
            <span
              onClick={() =>
                setTheme({
                  backgroundImage: COLORS.gradientFive.image,
                  backgroundColor: COLORS.gradientFive.color,
                })
              }
              style={{
                cursor: "pointer",
                width: 20,
                height: 20,
                display: "inline-block",
                borderRadius: "100%",
                backgroundColor: COLORS.gradientFive.color,
                backgroundImage: COLORS.gradientFive.image,
              }}
            ></span>

            <span
              onClick={() =>
                setTheme({
                  backgroundImage: COLORS.gradientSix.image,
                  backgroundColor: COLORS.gradientSix.color,
                })
              }
              style={{
                cursor: "pointer",
                width: 20,
                height: 20,
                display: "inline-block",
                borderRadius: "100%",
                backgroundColor: COLORS.gradientSix.color,
                backgroundImage: COLORS.gradientSix.image,
              }}
            ></span>
          </div>
        </header>
        {/* Section NoteForm */}
        <div style={{ marginTop: "100px" }}>
          <form className="py-4 px-3 bg-white rounded">
            <div className="d-flex gap-3">
              <input
                value={noteList}
                onChange={(e) => {
                  setnoteList(e.target.value);
                }}
                type="text"
                className="form-control"
                aria-label="note"
                placeholder="add a note here..."
              />
              <button className="btn btn-success px-4" onClick={addNote}>
                Add
              </button>
            </div>
          </form>
        </div>
        {/* Section NoteItems */}
        <footer
          className="bg-white p-3 mt-3 rounded"
          style={{ minHeight: "300px" }}
        >
          {/* Header NoteItems */}
          <div
            className="d-flex gap-1 border-bottom border-2"
            style={{ borderColor: "#dfdfdf" }}
          >
            <p className="fw-bold">Note</p>
            <span
              style={{
                width: 25,
                height: 25,
                borderRadius: "50%",
                textAlign:"center",
                color: "red",
                backgroundColor: "#dfdfdf",
              }}
            >
              5
            </span>
          </div>
          <div className="mt-3 d-flex flex-wrap gap-2">
            {notes.map((note, index) => (
              <div
                key={index}
                className="d-flex flex-column justify-content-between ps-2 pe-4 rounded border-5 border-start border-primary"
                style={{
                  backgroundColor: "#dfdfdf",
                  width: "310px",
                  height: "100px",
                  padding: "10px",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  whiteSpace: "normal",
                  overflow: "hidden",
                }}
              >
                <div className="div d-flex justify-content-between gap-2">
                  <div>
                    <p className="fs-normal m-0">{note.title}</p>
                    <span className="fw-light text-muted small">
                      Date : {new Date(note.date).toLocaleString()}
                    </span>
                  </div>

                  <div className="d-flex flex-column align-items-end gap-2">
                    <button
                      className="btn btn-sm btn-primary"
                      style={{ fontSize: "0.8rem", padding: "0.2rem 0.5rem" }}
                    >
                      <BiPencil />
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      style={{ fontSize: "0.8rem", padding: "0.2rem 0.5rem" }}
                    >
                      <BiTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}

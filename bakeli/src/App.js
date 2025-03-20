import { useState } from "react";
import { COLORS } from "./constants/Colors";

export default function App() {
  const [theme, setTheme] = useState({
    backgroundImage: COLORS.gradientOne.image,
    backgroundColor: COLORS.gradientOne.color,
  });

  const [notes, setnotes] = useState([])
  const [noteList, setnoteList] = useState("")

  const addNote = (e) => {
    e.preventDefault()
    
    let newNote = {title: noteList, date: Date.now()}
    setnotes([newNote, ...notes])
    setnoteList("")

  }
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
                onChange={(e) =>{setnoteList(e.target.value)}}
                type="text"
                className="form-control"
                aria-label="note"
                placeholder="add a note here..."
              />
              <button className="btn btn-success px-4" onClick={addNote}>Add</button>
            </div>
          </form>
        </div>
        {/* Section NoteItems */}
        <footer
          className="bg-white p-3 mt-3 rounded"
          style={{ minHeight: "300px" }}
        >
          {/* Header NoteItems */}
          <div className="d-flex border-bottom align-items-center justify-content-between py-2">
            <div className="d-flex gap-2 align-items-center text-align-center">
              <span className="fw-bold fs-6">Notes</span>
              <span
                style={{
                  width: 25,
                  height: 25,
                  display: "inline-block",
                  borderRadius: "100%",
                  backgroundColor: "#dfdfdf",
                  textAlign: "center",
                  color: "red",
                }}
              >
                2
              </span>
            </div>
            <button className="btn bg-primary text-white">clear All</button>
          </div>
          {/* Liste des notes */}
          <div className="mt-3 d-flex flex-wrap gap-2">
         
            {
              notes.map((notes,index) => {
                return <div 
                key={index}
                className="d-flex p-1 rounded border-5 border-start border-primary"
                style={{
                  backgroundColor: "#dfdfdf",
                  minWidth: "300px",
                  height: "70px",
                }}
              >
                <div>
                  <p className="fs-normal m-0">{notes.title}</p>
                  <span className="fw-light" style={{ fontSize: "10" }}>
                  Date : {new Date(notes.date).toLocaleString()}
                  </span>
                </div>
              </div>
              })
            }
            
            
          </div>
        </footer>
      </div>
    </div>
  );
}

import NoteItem from "./NoteItem";

export default function NoteList({ notes, startEditing, deleteNote, clearAllNotes }) {
  return (
    <footer className="bg-white p-3 mt-3 rounded" style={{ minHeight: "300px" }}>
      <div className="d-flex justify-content-between align-items-center border-bottom border-2 p-1">
        <div className="d-flex gap-1 " style={{ borderColor: "#dfdfdf" }}>
          <p className="fw-bold">Notes</p>
          <span
            style={{
              width: 25,
              height: 25,
              borderRadius: "50%",
              textAlign: "center",
              color: "red",
              backgroundColor: "#dfdfdf",
            }}
          >
            {notes.length}
          </span>
        </div>
        {/* Appel de clearAllNotes via les props */}
        <button className="btn btn-primary" onClick={clearAllNotes}>
          Clear All
        </button>
      </div>

      <div className="mt-3 d-flex flex-wrap gap-2">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} startEditing={startEditing} deleteNote={deleteNote} />
        ))}
      </div>
    </footer>
  );
}

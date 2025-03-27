import { BiPencil, BiTrash } from "react-icons/bi";

export default function NoteItem({ note, startEditing, deleteNote }) {
  return (
    <div
      className="d-flex flex-column justify-content-between ps-2 pe-4 rounded border-5 border-start border-primary"
      style={{
        backgroundColor: "#dfdfdf",
        width: "310px",
        height: "80px",
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
            {new Date(note.date).toLocaleString()}
          </span>
        </div>

        <div className="d-flex flex-column align-items-end gap-2">
          <button
            className="btn btn-sm btn-primary"
            onClick={() => startEditing(note)}
            style={{ fontSize: "0.8rem", padding: "0.2rem" }}
          >
            <BiPencil />
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => deleteNote(note.id)}
            style={{ fontSize: "0.8rem", padding: "0.2rem" }}
          >
            <BiTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

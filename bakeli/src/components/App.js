import { useState } from "react";
import Header from "./Header";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { COLORS } from "../constants/Colors";

export default function App() {
  const [theme, setTheme] = useState({
    backgroundImage: COLORS.gradientOne.image,
    backgroundColor: COLORS.gradientOne.color,
  });

  const [notes, setNotes] = useState([]);
  const [noteList, setNoteList] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const addNote = (e) => {
    e.preventDefault();
    if (!noteList.trim()) return;
    const newNote = { id: Date.now(), title: noteList, date: Date.now() };
    setNotes([newNote, ...notes]);
    setNoteList("");
  };

  const updateNote = (e) => {
    e.preventDefault();
    if (!noteList.trim() || !selectedNote) return;
    setNotes(notes.map((note) => (note.id === selectedNote.id ? { ...note, title: noteList } : note)));
    setIsUpdate(false);
    setSelectedNote(null);
    setNoteList("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  
  const clearAllNotes = () => {
    setNotes([]);  
    setNoteList("");  
  };

  const startEditing = (note) => {
    setNoteList(note.title);
    setIsUpdate(true);
    setSelectedNote(note);
  };

  return (
    <div style={{ ...theme, height: "100vh" }}>
      <div className="container py-3">
        <Header setTheme={setTheme} />
        <NoteForm noteList={noteList} setNoteList={setNoteList} isUpdate={isUpdate} addNote={addNote} updateNote={updateNote} />
        <NoteList notes={notes} startEditing={startEditing} deleteNote={deleteNote} clearAllNotes={clearAllNotes} />
      </div>
    </div>
  );
}

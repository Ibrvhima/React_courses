export default function NoteForm({ noteList, setNoteList, isUpdate, addNote, updateNote }) {
     return (
       <form className="py-4 px-3 bg-white rounded mt-5">
         <div className="d-flex gap-3">
           <input
             value={noteList}
             onChange={(e) => setNoteList(e.target.value)}
             type="text"
             className="form-control"
             placeholder="Ajouter une note..."
           />
           <button
             className={`btn px-4 ${isUpdate ? "btn-warning" : "btn-success"}`}
             onClick={isUpdate ? updateNote : addNote}
           >
             {isUpdate ? "Modifier" : "Ajouter"}
           </button>
         </div>
       </form>
     );
   }
   
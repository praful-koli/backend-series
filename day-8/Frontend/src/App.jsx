import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [updateNoteid, setUpdateNoteid] = useState(null);
  const [note, setNote] = useState({});
  const [notes, setNotes] = useState([]);
  const  URL='https://backend-day-2-0lqw.onrender.com'
  function fatchNotes() {
    axios
      .get(`${URL}/api/notes`)
      .then((res) => {
        setNotes(res.data.notes);
      })
      .catch((error) => console.log(error.message));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (updateNoteid) {
      axios.patch(`${URL}/api/notes/${updateNoteid}`, {
        title: note.title,
        description: note.description,
      }).then((res) => {
        console.log(res.data);
         fatchNotes();
      })
      setNote({})
      setUpdateNoteid(null)
    }
    else {
       axios
      .post(`${URL}}/api/notes`, {
        title: note.title,
        description: note.description,
      })
      .then((res) => {
        console.log(res.data);
        fatchNotes();
      });
      setNote({})
    }
  }

  function handleDeleteNote(noteId) {
    axios.delete(`${URL}/api/notes/${noteId}`).then((res) => {
      console.log(res.data);
      fatchNotes();
    });
  }

  function handleUpdateNote(noteId, noteData) {
    setNote({
      title: noteData.title,
      description: noteData.description,
    });
    setUpdateNoteid(noteId);
  }

  function noteFormData(e) {
    setNote({ ...note, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    fatchNotes();
  }, []);

  return (
    <>
      <form className="note-create-form" onSubmit={handleSubmit}>
        <input
          onChange={noteFormData}
          name="title"
          type="text"
          placeholder="Enter title"
          value={note.title || ""}
        />
        <input
          onChange={noteFormData}
          name="description"
          type="text"
          placeholder="Enter decription"
          value={note.description || ""}
        />
        <button>Submit</button>
      </form>

      <div className="notes">
        {notes.map((note, idx) => {
          return (
            <div key={idx} className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button
                style={{ backgroundColor: "red" }}
                onClick={() => handleDeleteNote(note._id)}
              >
                Delete
              </button>
              <button onClick={() => handleUpdateNote(note._id, note)}>
                update
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;

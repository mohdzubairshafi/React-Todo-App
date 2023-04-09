import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNote } from "./../Redux/action";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, TextareaAutosize } from "@mui/material";

export default function UpdateForm({ noteId, currentTitle, currentContent, setSelectedNote, handleClose }) {
  const [newTitle, setNewTitle] = useState(currentTitle);
  const [newContent, setNewContent] = useState(currentContent);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateNote(noteId, newTitle, newContent));
    // Close the form
    setSelectedNote(null);
    handleClose();
  };

  return (
    <>
      <DialogTitle>Update Note</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          id='title'
          label='Title'
          type='text'
          fullWidth
          variant='standard'
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
        <TextField
          margin='dense'
          id='content'
          label='Content'
          type='text'
          fullWidth
          variant='standard'
          value={newContent}
          onChange={(event) => setNewContent(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Update</Button>
      </DialogActions>
    </>
  );
}

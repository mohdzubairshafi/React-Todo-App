import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeNote } from "../Redux/action";
import UpdateForm from "./UpdateForm";
import Dialog from "@mui/material/Dialog";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import Navbar from "./Navbar";

export default function AllNotes() {
  const notes = useSelector((state) => state.notes);
  console.log(notes);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = (noteIndex, noteTitle, noteContent) => {
    // Set the selected note in the state
    // console.log("id ", noteIndex, "title ", noteTitle, "content", noteContent);
    setSelectedNote({
      id: noteIndex,
      title: noteTitle,
      content: noteContent,
    });
    setOpen(true);
  };

  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, m: 5 }}>
        {notes.map((note, index) => {
          return (
            <>
              <Card
                sx={{
                  width: "18rem",
                  p: 2,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {note.title}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {note.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  <a href='#' className='btn btn-danger' onClick={() => dispatch(removeNote(index))}>
                    Delete
                  </a>
                  <a href='#' className='btn btn-danger' onClick={() => handleUpdate(index, note.title, note.content)}>
                    Update
                  </a>
                </CardActions>
              </Card>
            </>
          );
        })}
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <UpdateForm
          noteId={selectedNote?.id}
          currentTitle={selectedNote?.title}
          currentContent={selectedNote?.content}
          setSelectedNote={setSelectedNote}
          handleClose={handleClose}
        />
      </Dialog>
    </>
  );
}

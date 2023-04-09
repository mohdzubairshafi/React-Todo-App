import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addNote } from "../Redux/action";
import { Box, Button, Card, TextField, TextareaAutosize, Typography } from "@mui/material";
import Navbar from "./Navbar";

export default function NotesForm() {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleSubmission(e) {
    e.preventDefault();
    dispatch(addNote(title, content));
    setTitle("");
    setContent("");
    navigate("/allNotes");
  }

  return (
    <>
      <Navbar />

      <Typography variant='h2' sx={{ textAlign: "center", color: "red", mt: 10 }}>
        React Notes App
      </Typography>
      <Box
        sx={{
          height: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          p: 5,
        }}
      >
        <form onSubmit={handleSubmission}>
          <Card
            sx={{
              minWidth: "290px",
              maxWidth: "700px",
              height: "100%",
              m: 4,
              p: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "30vw",
              gap: 6,
            }}
          >
            <TextField
              autoFocus
              margin='dense'
              id='title'
              label='Title'
              fullWidth
              variant='standard'
              type='text'
              name='title'
              value={title}
              placeholder='Enter Title'
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <TextareaAutosize
              aria-label='Content'
              minRows={4}
              type='text'
              name='content'
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder='Enter Content'
              required
              style={{ width: "100%" }}
            />

            <Button type='submit' variant='contained'>
              Add note
            </Button>
          </Card>
        </form>
      </Box>
    </>
  );
}

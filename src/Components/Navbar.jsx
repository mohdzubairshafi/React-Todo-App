import { Button, Card } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Card sx={{ height: "10vh", display: "flex", justifyContent: "start", alignItems: "center", p: 4, gap: 4 }}>
      <Button variant='contained' type='button' onClick={() => navigate("/")}>
        Home
      </Button>
      <Button variant='contained' type='button' onClick={() => navigate("/allNotes")}>
        AllNotes
      </Button>
    </Card>
  );
}

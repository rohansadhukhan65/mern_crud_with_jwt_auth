import { Button, Card, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditContact = () => {
  const [name, setName] = useState(null);
  const [contact, setContact] = useState(null);

  const submitHandler = () => {
    try {
      if (!name) return alert("Enter Name !");
      if (!contact) return alert("Enter Contact !");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100dvh",
      }}
    >
      <Card
        style={{
          width: "500px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h1>Create Contact</h1>
        <TextField
          placeholder="Name"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          placeholder="Contact"
          defaultValue={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={"/contacts"}>
            <Button variant="outlined" style={{ width: "25%" }}>
              Back
            </Button>
          </Link>
          <Button
            style={{ width: "25%" }}
            primary
            variant="contained"
            onClick={submitHandler}
          >
            Create
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default EditContact;

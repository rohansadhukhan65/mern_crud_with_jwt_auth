import { Button, Card, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BACK_END_DOMAIN } from "../../helper/constants";

const CreateContact = () => {
  const [name, setName] = useState(null);
  const [contact, setContact] = useState(null);

  const submitHandler = async () => {
    try {
      if (!name) return alert("Enter Name !");
      if (!contact) return alert("Enter Contact !");

      const response = await fetch(BACK_END_DOMAIN + "/api/create-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          number: contact,
        }),
      });
      setName("");
      setContact("");
      if (response.ok) return alert("Contact Created !");
    } catch (error) {
      setName("");
      setContact("");
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          placeholder="Contact"
          value={contact}
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

export default CreateContact;

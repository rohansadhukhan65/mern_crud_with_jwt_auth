import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <Button variant="contained">
        <Link className="home-get-started" to={'/contacts'}>Get Started !</Link>
      </Button>
    </div>
  );
};

export default Home;

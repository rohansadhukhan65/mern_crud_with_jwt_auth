import React from "react";
import ContactContainer from "../components/ContactsCard/ContactContainer";

const Contacts = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100dvh",
      }}
    >
      <ContactContainer />
    </div>
  );
};

export default Contacts;

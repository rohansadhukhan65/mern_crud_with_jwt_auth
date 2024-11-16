import { Router } from "express";
import {
  createContact,
  deleteContact,
  editContact,
  readContacts,
} from "../Controller/ContactController.js";

const route = Router();

route.get("/test", (req, res) => {
  res.status(200).json({
    message: "Api Working !",
  });
});

route.post("/create-contact", createContact);
route.get("/read-contacts", readContacts);
route.post("/del-contact", deleteContact);
route.post("/edit-contact", editContact);

export default route;

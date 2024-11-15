import { ContactModel } from "../Models/ContactModel.js";

export const createContact = async (req, res) => {
  try {
    const { name, number } = req.body;
console.log(name)
console.log(number)
    const newContact = new ContactModel({ name: name, phone: number });
    await newContact.save();
    res.status(200).json({
      message: "Contact Created !",
      data: newContact,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Error: ${error}`,
      data: {},
    });
  }
};

export const readContacts = async (req, res) => {
  try {
    const listOfContacts = await ContactModel.find({});

    res.status(200).json({ message: "Contact List !", data: listOfContacts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Error : ${error}` });
  }
};

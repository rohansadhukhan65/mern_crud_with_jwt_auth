import { ContactModel } from "../Models/ContactModel.js";

export const createContact = async (req, res) => {
  try {
    const { name, number } = req.body;
    console.log(name);
    console.log(number);
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

export const editContact = async (req, res) => {
  try {
    const { name, number, id } = req.body; // Get updated data from the request body

    // Find the contact by ID
    const contact = await ContactModel.findById(id);

    if (!contact) {
      return res.status(404).json({
        message: "Contact not found!",
        data: {},
      });
    }

    // Update the fields manually
    if (name) contact.name = name;
    if (number) contact.phone = number;

    // Save the updated contact
    const updatedContact = await contact.save();

    res.status(200).json({
      message: "Contact updated successfully!",
      data: updatedContact,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Error: ${error.message}`,
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

export const deleteContact = async (req, res) => {
  try {
    const { id } = req.body; // Get the contact ID from the request parameters

    // Find and delete the contact by ID
    const deletedContact = await ContactModel.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({
        message: "Contact not found!",
        data: {},
      });
    }

    res.status(200).json({
      message: "Contact deleted successfully!",
      data: deletedContact,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Error: ${error.message}`,
      data: {},
    });
  }
};

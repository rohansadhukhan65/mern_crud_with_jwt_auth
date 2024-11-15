import {
  Avatar,
  Button,
  Card,
  CardContent,
  Divider,
  Fade,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageIcon from "@mui/icons-material/Image";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BACK_END_DOMAIN } from "../../../helper/constants";

const ContactContainer = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openElem, setOpenElem] = useState("");
  const [contactlists, setContactList] = useState([]);
  const handleOptionMenuClick = (e, itemStr) => {
    setAnchorEl(e.currentTarget);
    setOpenElem(itemStr);
  };
  const handleClose = () => {
    setOpenElem(false);
  };

  const readContacts = async () => {
    try {
      const response = await fetch(BACK_END_DOMAIN + "/api/read-contacts");
      if (response.ok) {
        const { data } = await response.json();
        setContactList(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    readContacts();
  }, []);

  return (
    <Card style={{ width: "500px" }}>
      <CardContent>
        <div style={{ margin: "10px 0px", textAlign: "right" }}>
          <Link to={"/create-contact"}>
            <Button primary variant="contained">
              Add Contact
            </Button>
          </Link>
        </div>
        <TextField style={{ width: "100%" }} label="Search Contact" />
        <List
          style={{
            maxHeight: "450px",
            scrollBehavior: "smooth",
            overflowY: "auto",
          }}
        >
          {contactlists.map((contact) => (
            <div key={contact.name}>
              <Divider style={{ margin: "10px 0px" }} />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={contact.name}
                  secondary={contact.phone}
                />
                <div>
                  <IconButton
                    onClick={(e) => handleOptionMenuClick(e, `item-1`)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={openElem === "item-1" ? true : false}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <MenuItem
                      style={{
                        color: "cyan",
                        display: "flex",
                        gap: "10px",
                        fontWeight: "bolder",
                      }}
                      onClick={handleClose}
                    >
                      <EditIcon />
                      Edit
                    </MenuItem>
                    <MenuItem
                      style={{
                        color: "red",
                        display: "flex",
                        gap: "10px",
                        fontWeight: "bolder",
                      }}
                      onClick={handleClose}
                    >
                      <DeleteIcon />
                      Delete
                    </MenuItem>
                  </Menu>
                </div>
              </ListItem>
            </div>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ContactContainer;

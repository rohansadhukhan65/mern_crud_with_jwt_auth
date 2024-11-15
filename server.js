import express from "express";
import cors from "cors";
import route from "./Server/Routes/Api.js";
import { mongoConnect } from "./Server/DB/mongooseConnect.js";
import { FRONT_END_DOMAIN } from "./Server/Helpers/Constants.js";
const app = express();

mongoConnect();
app.use(
  cors({
    origin: `${FRONT_END_DOMAIN}`,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);
app.use(express.json());
app.use("/api", route);

app.listen(3000, () => {
  console.log("App running ...... on http://localhost:3000/");
});

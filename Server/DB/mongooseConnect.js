import mongoose from "mongoose";

const URI = "mongodb://localhost:27017/merncontactdb";
export const mongoConnect = () => {
  mongoose
    .connect(URI)
    .then(() => {
      console.log("Mongo DB Connected !");
    })
    .catch((err) => {
      console.log(`MongoError : ${err}`);
    });
};

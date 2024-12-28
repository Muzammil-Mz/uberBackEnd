import config from "config";
import mongoose from "mongoose";

async function dbConnect() {
  try {
    let db = config.get("URL");
    await mongoose.connect(db);
    console.log("db connected successfully");
  } catch (error) {
    console.log(error);
  }
}
dbConnect();

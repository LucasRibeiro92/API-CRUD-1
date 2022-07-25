import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const users = mongoose.model("users", userSchema);

export default users;

/*
Example of call:

{
	"name": "Your Name"
}
*/

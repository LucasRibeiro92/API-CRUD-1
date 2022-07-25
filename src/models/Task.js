import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String },
    comments: { type: String },
    timeToFinish: { type: Date },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const tasks = mongoose.model("tasks", taskSchema);

export default tasks;

/*
Example of call:

{
	"title": "First task",
	"body": "My first task's body",
	"comments": "My first task's comment",
	"timeToFinish": "2024-01-22T14:56:59.301Z",
	"owner": "..."
}
*/

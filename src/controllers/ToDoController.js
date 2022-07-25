import tasks from "../models/Task.js";

class ToDoController {
  static getTasks = (req, res) => {
    tasks
      .find()
      .populate("owner")
      .exec((err, tasks) => {
        res.status(200).json(tasks);
      });
  };

  static getTaskById = (req, res) => {
    const id = req.params.id;
    tasks
      .findById(id)
      .populate("owner")
      .exec((err, tasks) => {
        if (err) {
          res
            .status(400)
            .send({ message: `${err.message} - Task not founded.` });
        } else {
          res.status(200).send(tasks);
        }
      });
  };

  static createTask = (req, res) => {
    let task = new tasks(req.body);
    task.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err} - Failure creating a Task.` });
      } else {
        res.status(201).send(task.toJSON());
      }
    });
  };

  static updateTask = (req, res) => {
    const id = req.params.id;
    tasks.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Task update successfuly" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteTask = (req, res) => {
    const id = req.params.id;
    tasks.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Task deleted!" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static getDeadline = (req, res) => {
    const id = req.params.id;
    tasks.findById(id).exec((err, task) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res
          .status(200)
          .send({
            message: `Deadline ${task.timeToFinish.toLocaleDateString()}`,
          });
      }
    });
  };
}

export default ToDoController;

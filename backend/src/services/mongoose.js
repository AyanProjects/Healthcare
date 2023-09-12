import mongoose from "mongoose";
import Config from "../config";

mongoose.Types.ObjectId.prototype.view = function () {
  return { id: this.toString() };
};

mongoose.connection.on("connected", function () {
  console.log("MongoDB connection established");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error: " + err);
  process.exit(-1);
});

export default () => mongoose.connect(Config.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

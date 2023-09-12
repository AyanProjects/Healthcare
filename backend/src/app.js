import express from "express";
import logger from "morgan";
import api from "./api";
import mongoose from "./services/mongoose";

var app = express();

mongoose();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", api);

export default app;

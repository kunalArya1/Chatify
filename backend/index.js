import express from "express";
import { chats } from "../backend/data/data.js";
import dotenv from "dotenv";

const app = express();
dotenv.config({ path: "../.env" });

app.get("/", (req, res) => {
  res.send("Api is Running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const id = req.params.id;
  const chat = chats.find((c) => c._id === id);
  res.send(chat);
});

app.get("/chat", (req, res) => {});
app.get("/chat", (req, res) => {});
app.get("/chat", (req, res) => {});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});

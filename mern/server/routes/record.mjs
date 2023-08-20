import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// list all issues
router.get("/", async (req, res) => {
  let collection = await db.collection("issues");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// get specific issue
router.get("/:id", async (req, res) => {
  let collection = await db.collection("issues");
  let query = {_id: new ObjectId(req.params.id)};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// create new issue
router.post("/", async (req, res) => {
  let newDocument = {
    title: req.body.title,
    content: req.body.content,
  };
  let collection = await db.collection("issues");
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// update by id
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates =  {
    $set: {
      title: req.body.title,
      content: req.body.content,
    }
  };

  let collection = await db.collection("issues");
  let result = await collection.updateOne(query, updates);
  res.send(result).status(200);
});

// Delete issue
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("issues");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;
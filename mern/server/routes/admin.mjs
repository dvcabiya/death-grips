import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
const adminKey = process.env.adminID || "";


const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection("admin");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// 0 no 1 yes
router.post("/", async (req, res) => {
  let newDocument = {
    _id: `${adminKey}`,
    bool: req.body.bool,
  };
  let collection = await db.collection("admin");
  if (collection.length >= 1){
    return
  }
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

router.patch("/", async (req, res) => {
  const query = { _id: `${adminKey}` };
  const updates =  {
    $set: {
      bool: req.body.bool,
    }
  };
  let collection = await db.collection("admin");
  let result = await collection.updateOne(query, updates);
  res.send(result).status(200);
});

router.delete("/", async (req, res) => {
  const query = { _id: `${adminKey}` };

  const collection = db.collection("admin");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;
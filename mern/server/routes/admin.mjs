import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
const adminKey = process.env.adminID || "";


const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection("admin");
  let query = {_id: `${adminKey}`};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});


export default router;
import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import issues from "./routes/issues.mjs";
import admin from "./routes/admin.mjs"

const PORT = 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/issues", issues);
app.use("/admin", admin)

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDb } from "./database/db.js";
import { contactRoute } from "./routes/contact.route.js";

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

const port = process.env.PORT || 4000;
connectDb();

app.use("/api", contactRoute);

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

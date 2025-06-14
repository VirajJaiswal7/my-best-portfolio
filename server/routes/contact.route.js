import express from "express";
import { contact } from "../controllers/contact.controller.js";

export const contactRoute = express.Router();

contactRoute.post("/contact", contact);

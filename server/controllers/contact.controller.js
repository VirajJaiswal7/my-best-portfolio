import validator from "validator";
import { Contact } from "../models/contact.model.js";

export const contact = async (req, res) => {
  try {
    let { name, email, location, description } = req.body;

    name = name.trim();
    email = email.trim();
    location = location.trim();
    description = description.trim();

    if (!name || !email || !location || !description) {
      return res.status(404).json({
        message: "All fields are required",
        success: false,
      });
    }

    const wordCount = description.split(/\s+/);
    if (wordCount.length < 50) {
      return res.status(400).json({
        message: "Write words above 50",
        success: false,
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: "Enter correct email",
        success: false,
      });
    }

    const contact = new Contact({
      name,
      email,
      location,
      description,
    });

    await contact.save();

    return res.status(200).json({
      message: "Contact successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

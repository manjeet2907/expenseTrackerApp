import express from "express";
import {
  create_Categories,
  get_Categories,
} from "../Controllers/categoryController.js";
const router = express.Router();

router.route("/categories").post(create_Categories);
router.route("/categories").get(get_Categories);

export default router;

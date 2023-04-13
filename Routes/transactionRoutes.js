import express from "express";
import {
  create_Transaction,
  get_Transaction,
  delete_Transaction,
  get_Labels,
} from "../Controllers/transactionController.js";

const router = express.Router();

router.route("/transaction").post(create_Transaction);
router.route("/transaction").get(get_Transaction);
router.route("/transaction").delete(delete_Transaction);
router.route("/labels").get(get_Labels);

export default router;

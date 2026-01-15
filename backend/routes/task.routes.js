import express from "express";
import authMiddleware from "../middleware/auth.js";
import { getTasks, createTask, deleteTask, getStats } from "../controllers/task.controller.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/", getTasks);
router.post("/", createTask);
router.delete("/:id", deleteTask);
router.get("/stats", getStats);

export default router;

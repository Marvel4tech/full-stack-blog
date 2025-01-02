import { Router } from "express";
import { getUserSavedPost, savePost } from "../controllers/userControllers.js";

const router = Router()

router.get("/saved", getUserSavedPost)
router.patch("/save", savePost)

export default router
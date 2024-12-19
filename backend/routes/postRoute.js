import { Router } from "express";
import { createPost, deletePost, getAllPosts, getSinglePost } from "../controllers/postControllers.js";


const router = Router()

router.get("/", getAllPosts)
router.get("/:slug", getSinglePost)
router.post("/", createPost)
router.delete("/:id", deletePost)

export default router
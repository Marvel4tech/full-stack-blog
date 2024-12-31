import { Router } from "express";
import { createPost, deletePost, getAllPosts, getSinglePost, uploadAuth } from "../controllers/postControllers.js";


const router = Router()

router.get("/upload-auth", uploadAuth)

router.get("/", getAllPosts)
router.get("/:slug", getSinglePost)
router.post("/", createPost)
router.delete("/:id", deletePost)

export default router
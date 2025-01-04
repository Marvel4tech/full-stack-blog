import { Router } from "express";
import { createPost, deletePost, featurePost, getAllPosts, getSinglePost, uploadAuth } from "../controllers/postControllers.js";


const router = Router()

router.get("/upload-auth", uploadAuth)

router.get("/", getAllPosts)
router.get("/:slug", getSinglePost)
router.post("/", createPost)
router.delete("/:id", deletePost)
router.patch("/feature", featurePost)

export default router
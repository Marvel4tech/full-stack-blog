import { Router } from "express";
import { clerkWebHook } from "../controllers/webhookController.js";
import bodyParser from "body-parser";

const router = Router();

router.post("/clerk", bodyParser.raw({ type: 'application/json' }), clerkWebHook)

export default router
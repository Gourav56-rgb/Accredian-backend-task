import express from "express"
import { create, get } from "../controllers/referral.js"

const router = express.Router()

router.post("/create", create)
router.get("/get", get)

export default router
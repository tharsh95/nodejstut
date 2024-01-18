import express from "express";
import { generateUrl, getRedirect } from "../controllers/url.js";
const router = express.Router();

router.post('/',generateUrl);
router.get('/:shortId',getRedirect)

export default router;
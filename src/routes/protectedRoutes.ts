import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/test", authMiddleware, (req, res) => {
  res.status(200).json({
    session: res.locals.session,
    message: "Protected route",
  });
});

export default router;

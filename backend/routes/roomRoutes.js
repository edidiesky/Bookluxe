import express from "express";
const router = express.Router();
import {
  adminMiddleware,
  authMiddleware,
} from "../middleware/authentication.js";

import {
  CreateRooms,
  GetAllRoom,
  GetSingleRoom,
  DeleteRoom,
} from "../controllers/roomControllers.js";

router
  .route("/")
  .get(GetAllRoom)
  .post(authMiddleware, adminMiddleware, CreateRooms);

router
  .route("/:id")
  .get(GetSingleRoom)
  .delete(authMiddleware, adminMiddleware, DeleteRoom);

export default router;

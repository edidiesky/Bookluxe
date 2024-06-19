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
  GetAllAdminRooms,
  GetAllRoomAndReservations,
} from "../controllers/roomControllers.js";

router
  .route("/")
  .get(GetAllRoom)
  .post(authMiddleware, adminMiddleware, CreateRooms);
router.route("/admin").get(GetAllAdminRooms);
router
  .route("/room-reservation-history")
  .get(authMiddleware, adminMiddleware, GetAllRoomAndReservations);
router
  .route("/:id")
  .get(GetSingleRoom)
  .delete(authMiddleware, adminMiddleware, DeleteRoom);

export default router;

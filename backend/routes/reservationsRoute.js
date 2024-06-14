import express from "express";
const router = express.Router();
import {
  adminMiddleware,
  authMiddleware,
} from "../middleware/authentication.js";

import {
  CreateUserReservation,
  GetUserReservation,
  GetSingleReservation,
} from "../controllers/reservationsControllers.js";

// router.route("/buyer/:id").get(authMiddleware, GetSingleBuyerReservations);
router.route("/").get(authMiddleware, GetUserReservation);
// router.route("/host").get(authMiddleware, GetAllHostReservations);
router
  .route("/:id")
  .post(authMiddleware, CreateUserReservation)
  .get(authMiddleware, CreateUserReservation);
// .put(authMiddleware, UpdateBuyerReservations)
// .delete(authMiddleware, DeleteBuyerReservations);

export default router;

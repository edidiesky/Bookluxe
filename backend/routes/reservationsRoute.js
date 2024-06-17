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
  GetAllReservation,
} from "../controllers/reservationsControllers.js";

// router.route("/buyer/:id").get(authMiddleware, GetSingleBuyerReservations);
router.route("/user").get(authMiddleware, GetUserReservation);
router.route("/history").get(authMiddleware,adminMiddleware, GetUserReservation);
// router.route("/host").get(authMiddleware, GetAllHostReservations);
router
  .route("/:id")
  .post(authMiddleware, CreateUserReservation)
  .get(authMiddleware, GetSingleReservation);
// .put(authMiddleware, UpdateBuyerReservations)
// .delete(authMiddleware, DeleteBuyerReservations);

export default router;

import express from "express";
const router = express.Router();
import {
  adminMiddleware,
  authMiddleware,
} from "../middleware/authentication.js";

import { CreateRooms, GetAllRoom } from "../controllers/roomControllers.js";

router
  .route("/")
  .get(GetAllRoom)
  .post(authMiddleware, adminMiddleware, CreateRooms);

// router.route("/host/:id").get(GetHostListing);
// router.route("/wish/:id").put(authMiddleware, CreateListingWishlist);
// router.route("/wish").get(authMiddleware, getUserListingWishlist);
// router
//   .route("/:id")
//   .get(GetSingleListing)
//   .put(authMiddleware, adminMiddleware, UpdateListing)
//   .delete(authMiddleware, DeleteListing);

export default router;

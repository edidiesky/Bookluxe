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
} from "../controllers/roomControllers.js";

router
  .route("/")
  .get(GetAllRoom)
  .post(authMiddleware, adminMiddleware, CreateRooms);

router.route("/:id").get(GetSingleRoom);
// router.route("/wish/:id").put(authMiddleware, CreateListingWishlist);
// router.route("/wish").get(authMiddleware, getUserListingWishlist);
// router
//   .route("/:id")
//   .get(GetSingleListing)
//   .put(authMiddleware, adminMiddleware, UpdateListing)
//   .delete(authMiddleware, DeleteListing);

export default router;

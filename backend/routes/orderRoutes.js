import express from "express"
const router = express.Router()
import {
  CreatePayment,
  GetPaymentHistoryForAdmin,
  UpdatePaymentToFailed,
  GetSinglePaymentDetails,
  UpdatePaymentToSuccess,
} from "../controllers/orderControllers.js";
import {
    adminMiddleware,
    authMiddleware
} from '../middleware/authentication.js'


router.route("/").post(authMiddleware, CreatePayment);
router.get("/history", authMiddleware,adminMiddleware, GetPaymentHistoryForAdmin);
router.get("/payment/success/:id", authMiddleware, UpdatePaymentToSuccess);
router.get("/payment/failed/:id", authMiddleware, UpdatePaymentToFailed);
router.get("/payment/:id", authMiddleware, GetSinglePaymentDetails);


export default router



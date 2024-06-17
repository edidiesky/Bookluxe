import asyncHandler from "express-async-handler";
import prisma from "../prisma/index.js";
const GetStatisticsDataForAdmin = asyncHandler(async (req, res) => {
  const payment = await prisma.payment.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return res.json(payment);
});

export { GetStatisticsDataForAdmin };

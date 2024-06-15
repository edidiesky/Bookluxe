// import Product from "../models/Product.js";
import dotenv from "dotenv";
dotenv.config();
import prisma from "../prisma/index.js";
import expressAsyncHandler from "express-async-handler";

// User
const CreatePayment = expressAsyncHandler(async (req, res) => {
  // instantiate the form data from the request body
  const { userId } = req.user;
  const { roomid, amount, currency } = req.body;

  // create payment history for the user
  const payment = await prisma.payment.create({
    roomid,
    amount,
    currency,
    userid: userId,
    roomid: roomid,
  });

  // find the reservation
  const reservation = await prisma.reservations.findUnique({
    where: {
      userid: req.user.userId,
      roomidid: roomid,
    },
    include: {
      user: true,
      rooms: true,
    },
  });
  if (reservation) {
    await prisma.reservations.update({
      where: {
        userid: req.user.userId,
        roomidid: roomid,
      },
      data: {
        status: "CONFIRMED",
      },
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

  res.status(200).json({ payment });
});

const GetPaymentHistoryForAdmin = expressAsyncHandler(async (req, res) => {
  // instantiate the form data from the request body
  const payment = await prisma.payment.findMany({
    include: {
      user: true,
      rooms: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

  res.status(200).json({ payment });
});

const GetSinglePaymentDetails = expressAsyncHandler(async (req, res) => {
  // instantiate the form data from the request body
  const { userId } = req.body;
  const payment = await prisma.payment.findUnique({
    where: {
      id: req.params.id,
      userid: userId,
    },
    include: {
      user: true,
      rooms: true,
    },
  });
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

  res.status(200).json({ payment });
});

const UpdatePaymentToFailed = expressAsyncHandler(async (req, res) => {
  // instantiate the form data from the request body
  const { userId } = req.body;
  const payment = await prisma.payment.update({
    where: {
      id: req.params.id,
    },
    data: {
      status: "CANCELLED",
    },
    include: {
      user: true,
      rooms: true,
    },
  });
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

  res.status(200).json({ payment });
});

const UpdatePaymentToSuccess = expressAsyncHandler(async (req, res) => {
  // instantiate the form data from the request body
  const { userId } = req.body;
  const payment = await prisma.payment.update({
    where: {
      id: req.params.id,
    },
    data: {
      status: "CONFIRMED",
    },
    include: {
      user: true,
      rooms: true,
    },
  });
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

  res.status(200).json({ payment });
});
export {
  CreatePayment,
  GetPaymentHistoryForAdmin,
  UpdatePaymentToFailed,
  GetSinglePaymentDetails,
  UpdatePaymentToSuccess,
};

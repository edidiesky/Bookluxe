import asyncHandler from "express-async-handler";
import { parse, formatISO } from "date-fns";
import prisma from "../prisma/index.js";
const GetUserReservation = asyncHandler(async (req, res) => {
  const availableRooms = await prisma.reservations.findMany({
    where: {
      userid: req.user.userId,
    },
    include: {
      user: true,
      rooms: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return res.json(availableRooms);
});

const GetAllReservation = asyncHandler(async (req, res) => {
  const availableRooms = await prisma.reservations.findMany({
    include: {
      user: true,
      rooms: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return res.json(availableRooms);
});
const GetSingleReservation = asyncHandler(async (req, res) => {
  const availableRooms = await prisma.reservations.findUnique({
    where: {
      userid: req.user.userId,
      id: req.params.id,
    },
    include: {
      user: true,
      rooms: true,
    },
  });
  return res.json(availableRooms);
});

const CreateUserReservation = asyncHandler(async (req, res) => {
  let { startDate, endDate, totalPrice } = req.body;
  const id = req.params.id;
  startDate = formatISO(parse(startDate, "MMMM do yyyy", new Date()));
  endDate = formatISO(parse(endDate, "MMMM do yyyy", new Date()));
  // check for available rooms
  const availableRooms = await prisma.reservations.findMany({
    where: {
      roomid: id,
      OR: [
        {
          AND: [
            { startDate: { lte: startDate } },
            { endDate: { gte: startDate } },
          ],
        },
        {
          AND: [{ startDate: { lte: endDate } }, { endDate: { gte: endDate } }],
        },
      ],
    },
  });

  if (availableRooms.length > 0) {
    res.status(404);
    throw new Error("Room has alrady been booked");
  }

  // Book the room
  const reservationData = {
    startDate,
    endDate,
    totalPrice,
    userid: req.user.userId,
    roomid: id,
    status: "PENDING",
  };

  const newReservation = await prisma.reservations.create({
    data: reservationData,
  });

  return res.json(newReservation);
});

export { GetUserReservation,GetAllReservation, CreateUserReservation, GetSingleReservation };

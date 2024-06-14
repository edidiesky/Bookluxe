import asyncHandler from "express-async-handler";
import prisma from "../prisma/index.js";
const GetAllRoom = asyncHandler(async (req, res) => {
  const rooms = await prisma.rooms.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return res.json(rooms);
});

const CreateRooms = asyncHandler(async (req, res) => {
  const room = await prisma.rooms.create({
    data: {
      userid: req.user?.userid,
      ...req.body,
    },
  });

  return res.json(room);
});

const GetSingleRoom = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const room = await prisma.rooms.findUnique({
    where: {
      id: id,
    },
  });

  if (!room) {
    return NextResponse.json(
      { message: "No room has being found" },
      { status: 404 }
    );
  }

  return res.json(room);
});
export { GetAllRoom, CreateRooms, GetSingleRoom };

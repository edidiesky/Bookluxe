import asyncHandler from "express-async-handler";
import prisma from "../prisma/index.js";
const GetAllRoom = asyncHandler(async (req, res) => {
  const rooms = await prisma.rooms.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  return res.json(rooms);
});

const CreateRooms = asyncHandler(async (req, res) => {
  const room = await prisma.rooms.create({
    data: {
      userid: req.user?.userid,
      ...req.body,
    },
  });
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
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
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  return res.json(room);
});

const DeleteRoom = asyncHandler(async (req, res) => {
  const rooms = await prisma.rooms.findUnique({
    where: {
      id: req.params.id,
    },
  });
  if (!rooms) {
    res.status(404);
    throw new Error("The rooms does not exist");
  }
  await prisma.rooms.delete({
    where: { id: req.params.id },
  });
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

  res.status(200).json({ msg: "The rooms has been successfully deleted" });
});
export { GetAllRoom, CreateRooms, GetSingleRoom, DeleteRoom };

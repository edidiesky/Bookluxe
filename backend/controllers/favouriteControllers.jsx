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

const CreateUserFavouriteRoom = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const room = await prisma.rooms.findUnique({
    where: { id: id },
  });

  if (!room) {
    res.status(404);
    throw new Error("No room has been found");
  }

  let userRoomFavourites = currentUser?.favourites
    ? currentUser?.favourites
    : [];
  const isSavedRoomIncluded = userRoomFavourites.includes(room?.id);

  if (isSavedRoomIncluded) {
    // Remove the user ID from the favourites array
    userRoomFavourites = userRoomFavourites.filter(
      (favId) => favId !== room?.id
    );
  } else {
    // Add the user ID to the favourites array
    userRoomFavourites.push(room?.id);
  }
  // const favouritesJson = JSON.stringify(favourites);
  // Update the room's favourites in the database
  const user = await prisma.user.update({
    where: { id: currentUser?.id },
    data: { favourites: userRoomFavourites },
  });

  const message = isSavedRoomIncluded
    ? `${room.title} has been removed from your collections`
    : `${room.title} has been saved to your collections`;

  return res
  ({
    message: message,
    favourite: !isSavedRoomIncluded,
    user: user,
  });
});

export { GetAllRoom, CreateUserFavouriteRoom };

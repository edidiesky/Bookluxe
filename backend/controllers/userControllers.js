import asyncHandler from "express-async-handler";
import prisma from "../prisma/index.js";
//PRIVATE/ADMIN
const GetUserById = asyncHandler(async (req, res) => {
  const { userId, username } = req.user;
  const user = await prisma.user.findOne({ _id: req.params.id });
  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

  res.status(200).json({ user });
});

// Private
// single user
//PRIVATE/ADMIN
const GetUsersProfile = asyncHandler(async (req, res) => {
  const user = await prisma.user.findOne({ _id: req.params.id });
  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

  res.status(200).json({ user });
});

//PRIVATE/USER
const UpdateUser = asyncHandler(async (req, res) => {
  const user = await prisma.user.findById({ _id: req.params.id });
  const {
    firstname,
    lastname,
    phone,
    email,
    username,
    country,
    street,
    city,
    state,
  } = req.body;

  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }

  const updatedbodydata = {
    firstname: firstname ? firstname : user?.firstname,
    lastname: lastname ? lastname : user?.lastname,
    phone: phone ? phone : user?.phone,
    email: email ? email : user?.email,
    username: username ? username : user?.username,
    address: {
      country: country ? country : user?.address?.country,
      street: street ? street : user?.address?.street,
      city: city ? city : user?.address?.city,
      state: state ? state : user?.address?.state,
    },
  };
  const updatedUser = await prisma.user.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

  res.status(200).json({ updatedUser });
});

//PRIVATE/ADMIN
const AdminUpdateUser = asyncHandler(async (req, res) => {
  const { userId, username } = req.user;
  const user = await prisma.user.findUnique({
    where: {
      id: req.params.id,
    },
  });
  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  const updatedUser = await prisma.user.update({
    where: { id: req.params.id, data: { ...req.body } },
  });
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

  res.status(200).json({ updatedUser });
});
//PRIVATE/ADMIN
const DeleteUser = asyncHandler(async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.params.id,
    },
  });
  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  await prisma.user.delete({
    where: { id: req.params.id },
  });
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

  res.status(200).json({ msg: "The user has been successfully deleted" });
});

// PRIVATE/ADMIN
const GetAllUser = asyncHandler(async (req, res) => {
  const limit = req.query.limit || 5;
  const page = req.query.page || 1;
  const skip = (page - 1) * limit;

  const totalUser = await prisma.user.count({});

  const user = await prisma.user.findMany({
    skip: skip,
    take: limit,
  });

  const noOfPages = Math.ceil(totalUser / limit);
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

  res.status(200).json({ user, noOfPages, totalUser });
});

export {
  GetUserById,
  GetAllUser,
  UpdateUser,
  DeleteUser,
  AdminUpdateUser,
  GetUsersProfile,
};

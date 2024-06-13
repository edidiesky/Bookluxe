import mongoose from "mongoose";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
const apartmentDataList = [
  // Hazel
  {
    userid: "66476760ef11a9967074c22c",
    bedroom: 2,
    bathroom: 4,
    city: "London",
    address: "101 London Rad",
    images: [
      "/images/hazel_1.jpeg",
      "/images/hazel_2.jpeg",
      "/images/hazel_3.jpeg",
      "/images/hazel_4.jpeg",
      "/images/hazel_5.jpeg",
      "/images/hazel_6.jpeg",
      "/images/hazel_7.jpeg",
      "/images/hazel_8.jpeg",
      "/images/hazel_9.jpeg",
      "/images/hazel_10.jpeg",
      "/images/hazel_11.jpeg",
    ],
    title: "Hazel",
    description:
      "Family room, nice and spacious with a double and single bed with the fabulous shower room. You won’t want to leave.",
    price: 100,
  },
  // mocha
  {
    userid: "66476760ef11a9967074c22c",
    bedroom: 1,
    bathroom: 1,
    city: "London",
    address: "101 London Road",
    images: [
      "/images/mocha_1.jpeg",
      "/images/mocha_2.jpeg",
      "/images/mocha_3.jpeg",
      "/images/mocha_4.jpeg",
      "/images/mocha_5.jpeg",
    ],
    title: "Mocha",
    description:
      "Family room, nice and spacious with a double and single bed with the fabulous shower room. You won’t want to leave.",
    price: 70,
  },
  // pearl
  {
    userid: "66476760ef11a9967074c22c",
    bedroom: 1,
    bathroom: 1,
    city: "London",
    address: "101 London Road",
    images: [
      "/images/pearl_1.jpeg",
      "/images/pearl_2.jpeg",
      "/images/pearl_3.jpeg",
      "/images/pearl_4.jpeg",
      "/images/pearl_5.jpeg",
      "/images/pearl_6.jpeg",
      "/images/pearl_7.jpeg",
      "/images/pearl_8.jpeg",
      "/images/pearl_9.jpeg",
      "/images/pearl_10.jpeg",
    ],
    title: "Pearl",
    description:
      "Family room, nice and spacious with a double and single bed with the fabulous shower room. You won’t want to leave.",
    price: 70,
  },
  // Valentina
  {
    userid: "66476760ef11a9967074c22c",
    bedroom: 1,
    bathroom: 1,
    city: "London",
    address: "101 London Road",
    images: [
      "/images/valentina_1.jpeg",
      "/images/valentina_2.jpeg",
      "/images/valentina_3.jpeg",
      "/images/valentina_4.jpeg",
    ],
    title: "Valentina",
    description:
      "Family room, nice and spacious with a double and single bed with the fabulous shower room. You won’t want to leave.",
    price: 70,
  },
  // Cinammon
  {
    userid: "66476760ef11a9967074c22c",
    bedroom: 1,
    bathroom: 1,
    city: "London",
    address: "101 London Road",
    images: [
      "/images/hazel_12.jpeg",
      "/images/hazel_13.jpeg",
      "/images/hazel_14.jpeg",
      "/images/hazel_15.jpeg",
      "/images/hazel_16.jpeg",
    ],
    title: "Cinammon",
    description:
      "Family room, nice and spacious with a double and single bed with the fabulous shower room. You won’t want to leave.",
    price: 70,
  },
  // Scarlett
  {
    userid: "66476760ef11a9967074c22c",
    bedroom: 1,
    bathroom: 1,
    city: "London",
    address: "101 London Road",
    images: [
      "/images/hazel_7.jpeg",
      "/images/hazel_8.jpeg",
      "/images/hazel_9.jpeg",
      "/images/hazel_10.jpeg",
    ],
    title: "Scarlett",
    description:
      "Family room, nice and spacious with a double and single bed with the fabulous shower room. You won’t want to leave.",
    price: 120,
  },
];

dotenv.config();

const prisma = new PrismaClient();
const mongoUrl = process.env.DATABASE_URL;
if (!mongoUrl) {
  throw new Error("MongoDB connection string is not defined.");
}

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (error) =>
  console.error("MongoDB connection error:", error)
);

const importData = async () => {
  try {
    // Use Prisma to insert data
    await prisma.rooms.createMany({
      data: apartmentDataList,
    });
    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error("Error importing data:", error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // Use Prisma to delete data
    await prisma.rooms.deleteMany();
    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error("Error destroying data:", error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}

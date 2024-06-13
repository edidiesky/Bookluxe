// import Product from "../models/Product.js";
import dotenv from "dotenv";
dotenv.config();
import stripe from "stripe";
const stripeClient = stripe(process.env.STRIPE_KEY);
import Order from "../models/Order.js";
import moment from "moment";
import asyncHandler from "express-async-handler";
import expressAsyncHandler from "express-async-handler";
import Reservations from "../models/Reservations.js";

// GET All Order
//  Private
//  Only Admin
const GetAllOrder = async (req, res) => {
  // instantiate the Order variable

  const limit = req.query.limit || 6;
  const page = req.query.page || 1;
  const skip = (page - 1) * limit;
  const totalOrder = await Order.countDocuments({});

  const order = await Order.find({})
    .populate("buyerId", "firstname lastname email address")
    .skip(skip)
    .limit(limit);

  const noOfPages = Math.ceil(totalOrder / limit);

  res.setHeader("Content-Type", "text/html");
res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
 
  res.status(200).json({ order, noOfPages, totalOrder });
};

// GET All Order
//  Private
//  Admin and User

const GetCustomerOrder = async (req, res) => {
  // instantiate the user id from the req.user
  const { userId } = req.user;
  // instantiate the Order variable
  const order = await Order.find({ buyerId: userId })
    .populate("buyerId", "firstname lastname email address")
    .populate("reservation_id", "image title price countInStock deliveryDays");
  res.setHeader("Content-Type", "text/html");
res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
 
    res.status(200).json({ order });
};

// GET
// Get sellers order
const GetSellerOrder = async (req, res) => {
  // instantiate the user id from the req.user
  const { userId } = req.user;
  // instantiate the Order variable
  const order = await Order.find({ sellerId: userId })
    .populate("sellerId", "image username email address")
    .populate("buyerId", "image username email address name")
    .populate("reservation_id", "image title price countInStock deliveryDays");
  res.setHeader("Content-Type", "text/html");
res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
 
    res.status(200).json({ order });
};

// get the order id
const GetOrderById = async (req, res) => {
  // instantiate the user id from the req.user
  const { id } = req.params;
  // instantiate the Order variable
  const order = await Order.findById({ _id: id }).populate(
    "buyerId",
    "firstname lastname email address"
  );
  res.setHeader("Content-Type", "text/html");
res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
 
  res.status(200).json({ order });
};

// Create Order for the user
//  Private
// User
const CreateOrder = expressAsyncHandler(async (req, res) => {
  // instantiate the form data from the request body
  const { userId } = req.user;
  const {
    image,
    title,
    price,
    children,
    infants,
    adults,
    startDate,
    endDate,
    orders,
    reservation_id,
    sellerId,
  } = req.body;

  const order = await Order.create({
    buyerId: userId,
    sellerId: sellerId,
    image: orders[0].image,
    title,
    price: parseInt(price),
    startDate,
    endDate,
    children,
    infants,
    adults,
    reservation_id,
  });

  const session = await stripeClient.checkout.sessions.create({
    line_items: orders.map((items) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: items.title,
            images: items.image,
          },
          unit_amount: price * 100,
        },
        quantity: items.quantity,
      };
    }),
    mode: "payment",
    payment_method_types: ["card"],
    success_url: `${process.env.WEB_ORIGIN}/${order?._id}/order`,
    cancel_url: `${process.env.WEB_ORIGIN}/reservations`,
  });

  res.setHeader("Content-Type", "text/html");
res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
 
  res.status(200).json({ order, url: session.url });

  // console.log(req.body);y
});

// Update Order to paid for the user
//  Private
// Admin
const UpdateOrderToPaid = expressAsyncHandler(async (req, res) => {
  // const { reservation_id } = req.body;
  // find the user order in the data base
  // if the order id was being provided
  if (req.params.id !== "undefined") {
    const order = await Order.findOne({
      _id: req.params.id,
      buyerId: req.user.userId,
    });
    // // check if the order exist
    if (!order) {
      res.status(403);
      throw new Error("This order request does not exist");
    }
    // // // udate the cart
    const updatedOrder = await Order.findOneAndUpdate(
      { _id: req.params.id, buyerId: req.user.userId },
      {
        isPaid: true,
        paidAt: Date.now(),
      },
      { new: true }
    );

    // get the whi=ole user order
    const userorder = await Order.find({
      buyerId: req.user.userId,
    });
    res.setHeader("Content-Type", "text/html");
res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
 
    res.status(200).json({ userorder });
  } else {
    const userorder = await Order.find({
      buyerId: req.user.userId,
    });
    res.setHeader("Content-Type", "text/html");
res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
 
    res.status(200).json({ userorder });
  }
  // console.log(req.params.id == 'undefined');
});
// Update Order to Delivered for the user
//  Private
// Admin
const UpdateOrderToIsDelivered = async (req, res) => {
  // find the user order in the data base
  const order = await Order.findById({ _id: req.params.id });
  // check if the order exist
  if (!order) {
    res.status(403);
    throw new Error("This order request does not exist");
  }

  // update the order based on the req params
  const updatedOrder = await Order.findByIdAndUpdate(
    { _id: req.params.id },
    {
      isDelivered: true,
      deliveredAt: Date.now(),
    },
    { new: true }
  );
  res.setHeader("Content-Type", "text/html");
res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
 
  res.status(200).json({ updatedOrder });
};

// PRIVATE/ADMIN
const AggregateUserOrderStats = asyncHandler(async (req, res) => {
  // get the total order based on the title
  let totalOrder = await Order.aggregate([
    // match the users to nothing
    { $match: {} },
    // group based on year and month
    {
      $group: {
        _id: {
          year: {
            $year: "$createdAt",
          },
          month: {
            $month: "$createdAt",
          },
        },
        totalQuantity: { $sum: "$TotalShoppingPrice" },
        averageOrderQuantity: { $avg: "$totalQuantity" },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
  ]);

  // modify the stats
  totalOrder = totalOrder.map((stats) => {
    const {
      _id: { year, month },
      totalQuantity,
      averageOrderQuantity,
    } = stats;
    const date = moment()
      .month(month - 1)
      .year(year)
      .format("MMM Y");

    return { date, totalQuantity, averageOrderQuantity };
  });

  res.setHeader("Content-Type", "text/html");
res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
 
  res.status(200).json({ totalOrder });
});

export {
  CreateOrder,
  GetOrderById,
  GetAllOrder,
  UpdateOrderToPaid,
  GetCustomerOrder,
  UpdateOrderToIsDelivered,
  AggregateUserOrderStats,
  GetSellerOrder,
};

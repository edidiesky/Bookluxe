import React, { useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Loader from "./components/home/loader";
import Layout from "./screens/Layout";
import DashboardLayout from "./screens/DashboardLayout";
import {
  Statistics,
  Rooms,
  Customers,
  CreateRoom,
  Reservation,
  Orders,
} from "./screens/dashboard";
import { ProtectRoute } from "./lib/ProtectRoute";
const HomeWrapper = lazy(() => import("./screens/Home"));
const SearchWrapper = lazy(() => import("./screens/Search"));
const SingleWrapper = lazy(() => import("./screens/Single"));
const SavedWrapper = lazy(() => import("./screens/Saved"));
const TripsWrapper = lazy(() => import("./screens/Trips"));
const PaymentWrapper = lazy(() => import("./screens/Payment"));
const PaymentSuccess = lazy(() => import("./screens/Payment-Success"));
// PaymentSuccess
export default function App() {
  const [height, setHeight] = useState(0);

  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <HomeWrapper />
              </Suspense>
            }
          />
          <Route
            path="search"
            element={
              <Suspense fallback={<Loader />}>
                <SearchWrapper />
              </Suspense>
            }
          />
          <Route
            path="room/:id"
            element={
              <Suspense fallback={<Loader />}>
                <SingleWrapper />
              </Suspense>
            }
          />
          <Route
            path="savedhomes"
            element={
              <Suspense fallback={<Loader />}>
                <SavedWrapper />
              </Suspense>
            }
          />
          <Route
            path="trips"
            element={
              <Suspense fallback={<Loader />}>
                <TripsWrapper />
              </Suspense>
            }
          />
          <Route
            path="reservation/payment/:id"
            element={
              <Suspense fallback={<Loader />}>
                <PaymentWrapper />
              </Suspense>
            }
          />
          <Route
            path="payment-success/:id"
            element={
              <Suspense fallback={<Loader />}>
                <PaymentSuccess />
              </Suspense>
            }
          />
        </Route>

        <Route
          path={"/dashboard"}
          element={
            <ProtectRoute>
              <DashboardLayout />
            </ProtectRoute>
          }
        >
          <Route
            exact
            index
            element={
              <Suspense fallback={<Loader />}>
                <Statistics />
              </Suspense>
            }
          />
          <Route
            exact
            path="rooms"
            element={
              <Suspense fallback={<Loader />}>
                <Rooms />
              </Suspense>
            }
          />
          <Route
            exact
            path="customers"
            element={
              <Suspense fallback={<Loader />}>
                <Customers />
              </Suspense>
            }
          />
          <Route
            exact
            path="reservation"
            element={
              <Suspense fallback={<Loader />}>
                <Reservation />
              </Suspense>
            }
          />

          <Route
            exact
            path="orders"
            element={
              <Suspense fallback={<Loader />}>
                <Orders />
              </Suspense>
            }
          />
          {/* Reservation */}

          <Route
            exact
            path="rooms/create-room"
            element={
              <Suspense fallback={<Loader />}>
                <CreateRoom />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

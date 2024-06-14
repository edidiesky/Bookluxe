import React, { useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Loader from "./components/home/loader";
import Layout from "./screens/Layout";
const HomeWrapper = lazy(() => import("./screens/Home"));
const SearchWrapper = lazy(() => import("./screens/Search"));
const SingleWrapper = lazy(() => import("./screens/Single"));
const SavedWrapper = lazy(() => import("./screens/Saved"));
const TripsWrapper = lazy(() => import("./screens/Trips"));
const PaymentWrapper = lazy(() => import("./screens/Payment"));

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
        </Route>
      </Routes>
    </div>
  );
}

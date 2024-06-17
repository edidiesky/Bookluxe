// import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import DashboardIndex from "./components";
import { useEffect } from "react";
import { GetPaymentHistory } from "@/features/payment/paymentReducer";
import Loader from "@/components/home/loader";

export default function Orders() {
  const dispatch = useDispatch()
const { getpaymentisLoading } = useSelector((store) => store.payment);
  useEffect(()=> {
    dispatch(GetPaymentHistory());
  },[])

  if(getpaymentisLoading) {
    return <Loader/>
  }
  return (
    <div>
      <DashboardIndex />
    </div>
  );
}

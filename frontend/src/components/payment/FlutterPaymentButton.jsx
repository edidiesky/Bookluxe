import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { CreatePayment } from "@/features/payment/paymentReducer";
import { useNavigate } from "react-router-dom";
const FlutterPaymentButton = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((store) => store.auth);
  const { reservation } = useSelector((store) => store.reservation);
  const { payment } = useSelector((store) => store.payment);

  const config = {
    public_key: import.meta.env.VITE_FLUTTER_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: reservation?.totalPrice,
    currency: "USD",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: currentUser?.email,
      phonenumber: currentUser?.phone,
      name: currentUser?.name,
    },
    customizations: {
      title: "Payment for Booking",
      description: "Payment for booking a room",
      logo: "https://yourlogo.com/logo.png",
    },
  };

  const handleFlutterwavePayment = useFlutterwave(config);
  const dispatch = useDispatch();
  const handleCreateOrderPayment = () => {
    dispatch(
      CreatePayment({
        roomid: reservation?.roomid,
        amount: reservation?.totalPrice,
        currency: "NGN",
      })
    );
  };

  console.log(payment);
  return (
    <button
      onClick={() => {
        handleCreateOrderPayment();
        handleFlutterwavePayment({
          callback: (response) => {
            // handleCreateOrderPayment();
            // console.log(response);
            if (response.status === "successful") {
              // Handle successful payment here
              toast.success("Payment Successfully!! Redirecting Soon...");
              if (payment) {
                navigate(`/payment-success/${payment?.id}`);
              }

              // alert("Payment Successful");
              // For example, you can send the payment response to your backend to verify the transaction
              // fetch('/api/verify-payment', { method: 'POST', body: JSON.stringify(response) })
            } else {
              // Handle payment failure here
              // alert("Payment Failed");
              toast.error("Payment Failed");
            }
            closePaymentModal(); // Close the modal programmatically
          },
          onClose: () => {
            // Handle when the payment modal is closed
            alert("Payment Modal Closed");
          },
        });
      }}
      className="btn p-6 cursor-pointer px-8 text-base font-bold uppercase text-center rounded-lg text-white font-booking_font"
    >
      pay now
    </button>
  );
};

export default FlutterPaymentButton;

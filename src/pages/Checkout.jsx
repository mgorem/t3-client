import React, { useState } from "react";
import axios from "axios";

const Checkout = () => {
  const [phone, setPhone] = useState();
  const [amount, setAmount] = useState();

  const submitPaymentDetails = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/token", {
        phone,
        amount,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mt-10 justify-center items-center flex flex-col">
      <h1 className="text-2xl my-3 text-tertiary">
        Buy <span className="text-green-600 font-bold my-3">Gem</span>
      </h1>
      <form className="flex flex-col space-y-5">
        <label className="font-bold text-tertiary">Phone Number</label>
        <input
          placeholder="enter phone number"
          onChange={(e) => setPhone(e.target.value)}
          className="bg-slate-100 text-center rounded-2xl py-2"
        />
        <label className="font-bold text-tertiary">Amount</label>
        <input
          placeholder="enter amount"
          onChange={(e) => setAmount(e.target.value)}
          className="bg-slate-100 text-center rounded-2xl py-2"
        />
        <button
          onClick={submitPaymentDetails}
          className="bg-green-600 font-bold text-white px-2 py-2 rounded-3xl"
        >
          Pay Gem Now
        </button>
      </form>
    </div>
  );
};

export default Checkout;

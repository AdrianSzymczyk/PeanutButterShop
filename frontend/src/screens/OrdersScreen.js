import React from "react";
import Header from "./../components/Header";
import Orders from "../components/orders/Orders";

const OrdersScreen = () => {
  return (
    <>
      <Header />
      <div className="main-wrap">
        <Orders />
      </div>
    </>
  );
};

export default OrdersScreen;

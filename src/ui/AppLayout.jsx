import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  return (
    <div className="layout">
      {navigation.state === "loading" && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

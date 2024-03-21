import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
  return (
    <div>
      <Link to="">Go back to homepage</Link>
      <SearchOrder />
    </div>
  );
}

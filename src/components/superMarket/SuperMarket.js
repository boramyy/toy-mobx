import React, { Component } from "react";
import "./SuperMarket.css";
import ProductsWrapper from "./ProductsWrapper";
import BasketWrapper from "./BasketWrapper";

class SuperMarket extends Component {
  render() {
    return (
      <div className="wrap_supermarket">
        <h2>super market</h2>
        <ProductsWrapper />
        <BasketWrapper className="wrap_basket" />
      </div>
    );
  }
}

export default SuperMarket;

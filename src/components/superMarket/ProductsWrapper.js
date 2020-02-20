import React, { Component } from "react";
import { observer, inject } from "mobx-react";

const Product = props => {
  const {
    product: { pid, name, price },
    addBasketItem,
    ...rest
  } = props;

  const onClickProduct = () => {
    addBasketItem({ pid, name, price });
  };

  return (
    <div className="box_product" {...rest} onClick={onClickProduct}>
      <strong>{name}</strong>
      <span>{price}원</span>
    </div>
  );
};

@inject("basket")
@inject("productStock")
@observer
class ProductsWrapper extends Component {
  render() {
    const {
      productStock: { stocks },
      basket: { addBasketItem }
    } = this.props;

    return (
      <div className="wrap_products">
        <ul>
          {stocks.map((product, index) => {
            return (
              <li key={`product_${index}`}>
                <Product product={product} addBasketItem={addBasketItem} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProductsWrapper;

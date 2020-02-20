import React, { Component } from "react";
import { observer, inject } from "mobx-react";

const BasketItem = props => {
  const {
    basket: { pid, name, price, count },
    removeBasketItem
  } = props;
  const onClickRemove = () => {
    removeBasketItem(pid);
  };
  return (
    <div className="box_basket">
      <div class="info_basket">
        <span>{name}</span>
        <span>{count}</span>
      </div>
      <span>{price}원</span>
    </div>
  );
};
@inject("basket")
@observer
class BasketWrapper extends Component {
  render() {
    const {
      basket: { selectedItems, total, removeBasketItem }
    } = this.props;

    console.log("selectedItems", selectedItems);
    return (
      <div className="wrap_basket">
        <ul>
          {selectedItems.map((basket, index) => {
            return (
              <li key={`basket_${index}`}>
                <BasketItem
                  basket={basket}
                  removeBasketItem={removeBasketItem}
                />
              </li>
            );
          })}
        </ul>
        <div class="box_total">total: {total}</div>
      </div>
    );
  }
}

export default BasketWrapper;

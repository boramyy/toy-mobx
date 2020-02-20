import { observable, action } from "mobx";

class BasketStore {
  @observable selectedItems = [];

  @action
  addBasketItem = ({ pid, name, price }) => {
    const currentItem = this.selectedItems.find(item => item.pid === pid);

    if (currentItem) {
      currentItem.count++;
    } else {
      this.selectedItems.push({ pid, name, price, count: 1 });
    }
  };

  @action
  removeBasketItem = pid => {
    const currentItem = this.selectedItems.find(item => item.pid === pid);

    if (currentItem.count > 1) {
      currentItem.count--;
    } else {
      this.selectedItems = this.selectedItems.filter(item => pid !== item.pid);
    }
  };

  get total() {
    console.log("총합!");
    return this.selectedItems.reduce((prev, curr) => {
      return prev + curr.price * curr.count;
    }, 0);
  }
}

export default BasketStore;

/**
 * 제어의 역전
 * ioc
 * di
 */

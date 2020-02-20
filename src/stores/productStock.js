import { observable, action } from "mobx";

class ProductStockStore {
  @observable stocks = [
    {
      pid: "0001",
      name: "생수",
      price: 850,
      stock: 0
    },
    {
      pid: "0002",
      name: "칸쵸",
      price: 1000,
      stock: 0
    }
  ];

  @action
  addProductStock({ pid, name, price, stock }) {
    console.log("stock add");
    this.stocks.push({
      pid,
      name,
      price,
      stock
    });
  }

  @action
  removeProductStock() {
    console.log("stock remove");
  }
}

export default ProductStockStore;

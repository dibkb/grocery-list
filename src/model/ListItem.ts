export default class ListItem {
  _id: string;
  _item: string;
  _quantity: number;
  _checked: boolean;
  constructor(id: string, item: string, quantity: number, checked: boolean) {
    this._id = id;
    this._item = item;
    this._quantity = quantity;
    this._checked = checked;
  }
  incrementQuantity(val: number) {
    this._quantity += val;
  }
  incrementOnce() {
    this.incrementQuantity(1);
  }
}

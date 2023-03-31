import ListItem from "./ListItem";
interface List {
  _list: ListItem[];
  get list(): ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}
export default class FulllList implements List {
  _list: ListItem[];
  constructor(list: ListItem[]) {
    this._list = list;
  }
  get list() {
    return this._list;
  }
  load(): void {
    const storedList: string | null = localStorage.getItem("MY_LIST");
    if (typeof storedList !== "string") return;
    const parsedList: {
      _id: string;
      _item: string;
      _quantity: number;
      _checked: boolean;
    }[] = JSON.parse(storedList);
    parsedList.forEach((itemObj) => {
      const newListItem = new ListItem(
        itemObj._id,
        itemObj._item,
        itemObj._quantity,
        itemObj._checked
      );
      this.addItem(newListItem);
    });
  }
  save(): void {
    localStorage.setItem("MY_LIST", JSON.stringify(this._list));
  }
  clearList(): void {
    this._list = [];
    this.save();
  }
  addItem(item: ListItem): void {
    this._list.push(item);
    this.save();
  }
  removeItem(id: string): void {
    this._list.filter((item) => item._id !== id);
    this.save();
  }
}

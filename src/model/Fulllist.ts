import ListItem from "./ListItem";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}
export default class FulllList implements List {
  static instance: FulllList = new FulllList();
  private constructor(private _list: ListItem[] = []) {}
  get list(): ListItem[] {
    return this._list;
  }
  load(): void {
    const storedList: string | null = localStorage.getItem("GROCERY_LIST");
    if (typeof storedList !== "string") return;
    const parseList: {
      _id: string;
      _item: string;
      _quantity: number;
      _checked: boolean;
    }[] = JSON.parse(storedList);
    parseList.forEach(({ _id, _item, _quantity, _checked }) => {
      const newListItem = new ListItem(_id, _item, _quantity, _checked);
      FulllList.instance.addItem(newListItem);
    });
  }
  addItem(objItem: ListItem): void {
    this._list.push(objItem);
    this.save();
  }
  save(): void {
    localStorage.setItem("GROCERY_LIST", JSON.stringify(this._list));
  }
  clearList(): void {
    this._list = [];
    this.save();
  }
}

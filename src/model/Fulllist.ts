import ListItem from "./ListItem";
interface List {
  _list: ListItem[];
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
  load(): void {}
  save(): void {}
  clearList(): void {}
  addItem(): void {}
  removeItem(): void {}
}

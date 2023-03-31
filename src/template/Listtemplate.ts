import FulllList from "../model/Fulllist";
interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FulllList): void;
}
export default class ListTemplate implements DOMList {
  ul: HTMLUListElement;
  constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement;
  }
  clear() {
    this.ul.innerHTML = "";
  }
  render(fullList: FulllList) {
    this.clear();
    fullList.list.forEach((item) => {
      const li = document.createElement("li") as HTMLLIElement;
      li.textContent = item._item;
    });
  }
}

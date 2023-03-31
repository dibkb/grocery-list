import FulllList from "../model/Fulllist";
interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FulllList): void;
  createButton(): HTMLButtonElement;
}
export default class ListTemplate implements DOMList {
  ul: HTMLUListElement;
  constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement;
  }
  clear() {
    this.ul.innerHTML = "";
  }
  createButton() {
    const button = document.createElement("button") as HTMLButtonElement;
    button.textContent = "Delete";
    button.setAttribute("id", "delete");
    return button;
  }
  render(fullList: FulllList) {
    this.clear();
    fullList.list.forEach((item) => {
      const li = document.createElement("li") as HTMLLIElement;
      const pOne = document.createElement("p") as HTMLParagraphElement;
      const pTwo = document.createElement("p") as HTMLParagraphElement;
      const btn = this.createButton();
      pOne.textContent = item._item;
      pTwo.textContent = item._quantity.toString();
      li.appendChild(pOne);
      li.appendChild(pTwo);
      li.appendChild(btn);
      this.ul.appendChild(li);
    });
  }
}

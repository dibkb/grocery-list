import FullList from "./model/Fulllist";
import ListItem from "./model/ListItem";
import ListTemplate from "./template/Listtemplate";
function initApp() {
  const fullList = new FullList();
  const template = new ListTemplate();
  const form = document.getElementById("form") as HTMLFormElement;
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const item: string = this.elements[0].value;
    const quantity: number = Number(this.elements[1]?.value);
    const itemId: number = fullList.list.length + 1;
    const newItem = new ListItem(itemId.toString(), item, quantity, false);
    fullList.addItem(newItem);
    template.render(fullList);
  });
}

document.addEventListener("DOMContentLoaded", initApp);

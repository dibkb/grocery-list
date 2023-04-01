import FullList from "./model/Fulllist";
import ListItem from "./model/ListItem";
import ListTemplate from "./template/Listtemplate";
function initApp() {
  const fullList = new FullList();
  const template = new ListTemplate();
  const form = document.getElementById("form") as HTMLFormElement;
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const item = this.elements[0] as HTMLInputElement;
    const quantity = this.elements[1] as HTMLInputElement;
    const itemId: number = fullList.list.length + 1;
    const newItem = new ListItem(
      itemId.toString(),
      item.value,
      Number(quantity.value),
      false
    );
    fullList.addItem(newItem);
    template.render(fullList);
    item.value = "";
    quantity.value = 1;
  });
}

document.addEventListener("DOMContentLoaded", initApp);

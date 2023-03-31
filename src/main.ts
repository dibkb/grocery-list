import FullList from "./model/Fulllist";
import ListItem from "./model/ListItem";
import ListTemplate from "./templates/ListTemplate";
function initApp() {
  const button = document.querySelector("button") as HTMLButtonElement;
  const form = document.getElementById("form") as HTMLFormElement;
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const item: string = this.elements[0].value;
    const quantity: number = Number(this.elements[1]?.value);
    console.log(item);
  });
}

document.addEventListener("DOMContentLoaded", initApp);

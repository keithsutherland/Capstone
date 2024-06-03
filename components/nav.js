import html from "html-literal";
// Example of using a component inside another component
import navItem from "./navItem.js";

export default navItem => {
  return html`
  <nav>
      <i class="bars"></i>
      <ul class="">
        ${navItems.map(item => navItem(item)).join("")}
      </ul>
    </nav>
  `
}



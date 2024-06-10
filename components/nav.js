import html from "html-literal";
// Example of using a component inside another component
import navItem from "./navItem.js";

export default navItems => {
  return html`
    <nav id="navWrapper">
      <i class="fa-bars"></i>
      <ul class="">
        ${navItems.map(item => navItem(item)).join("")}
      </ul>
    </nav>
  `;
};

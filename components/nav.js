import html from "html-literal";
// Example of using a component inside another component
import navItem from "./navItem.js";

export default navItems => {
  return html`
    <!-- <div id="navWrapper"> -->
    <button class="hamburger">
      <div class="bar"></div>
    </button>
    <nav class="mobile-nav">
      <a href="/">Character Select</a>
      <a href="./howToUse.js">How to Use</a>
    </nav>
    <nav id="navWrapper">
      <i class="fa-bars"></i>
      <ul class="">
        ${navItems.map(item => navItem(item)).join("")}
      </ul>
    </nav>
  `;
};

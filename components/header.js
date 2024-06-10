import html from "html-literal";
import logo from "../capstoneSite/images/virtuaframelogo.png";
export default state =>
  html`
    <header>
      <!-- <img
        id="virtuaframelogo"
        src="./capstoneSite/images/virtuaframelogo.png"
        alt="Virtua Frame logo"
      /> -->
      ${state.header}
      <span
        ><a href="/"><img id="virtuaframelogo" src=${logo}/></a
      ></span>
    </header>
  `;

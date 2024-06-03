import html from "html-literal";
import logo from "../capstone site/images/virtuaframelogo.png";
export default state =>
  html`
    <header>
      ${state.header}
      <span
        ><a href="/"><img src=${logo}/></a
      ></span>
    </header>
  `;

import html from "html-literal";
import akira from "../../capstoneSite/images/vfSiteAkira.jpg";
import jean from "../../capstoneSite/images/vfSiteJean.jpg";
import jacky from "../../capstoneSite/images/vfSiteJacky.jpg";


export default state => html`
  <header>
    <!-- <img id="virtuaframelogo"src="./capstoneSite/images/virtuaframelogo.png" alt="Virtua Frame logo"> -->
  </header>
  <!-- <nav id="navWrapper">
      <ul>
        <li><a href="index.html">Character Select</a></li>
        <li></li><a href="howToUse.html">How to Use</a></li>
        <li><a href="">About</a></li>
        </ul>
    </nav> -->
  <div class="wrapper">
  <a href="/akiraData"><img id="akira" src=${akira} alt="Link to Akira framedata" /></a>
    <img id="jean" src=${jean} alt="Link to Jean framedata" />
    <img id="jacky" src=${jacky} alt="Link to Jacky framedata" />
  </div>
`;

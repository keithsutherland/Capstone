import html from "html-literal";

export default state => html`
  <header>
    <img id="virtuaframelogo"src="./images/virtuaframelogo.png" alt="Virtua Frame logo">
  </header>
    <nav id="navWrapper">
      <ul>
        <li><a href="index.html">Character Select</a></li>
        <li></li><a href="howToUse.html">How to Use</a></li>
        <li><a href="">About</a></li>
        </ul>
    </nav>
  <div class ="wrapper">
<img id = "akira" src="images/vfSiteAkira.jpg" alt="Link to Akira framedata">
<img id = "jean" src="images/vfSiteJean.jpg" alt="Link to Jean framedata">
<img id = "jacky" src="images/vfSiteJacky.jpg" alt="Link to Jacky framedata">
  </div>
`;

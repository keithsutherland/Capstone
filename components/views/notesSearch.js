import html from "html-literal";

export default state => html`
  <div id="searchWrapper">
    <form id="characterSearch" method="GET" action="">
      <label for="character">Character</label>
      <select id="character" name="character">
        <option value="akira">AKIRA</option>
        <option value="jean">JEAN</option>
        <option value="jacky">JACKY</option>
        <option value="paichan">PAI CHAN</option>
        <option value="lion">LION</option>
      </select>
      <input type="submit" value="Search" />
    </form>
  </div>
`;

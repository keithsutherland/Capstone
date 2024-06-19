import html from "html-literal";

export default state => html`
  <div class="noteswrapper">
    <section id="notes">
      <form id="order" method="POST" action="">
        <h1>Make Character Notes</h1>
        <div>
          <label for="character">Character</label>
          <select id="character" name="character">
            <option value="akira">AKIRA</option>
            <option value="jean">JEAN</option>
            <option value="jacky">JACKY</option>
            <option value="paichan">PAI CHAN</option>
            <option value="lion">LION</option>
          </select>
        </div>
        <div>
          <label for="noteCategory"
            >What Category of Note Are You Making?</label
          >
          <input
            type="text"
            name="noteCategory"
            id="noteCategory"
            placeholder="Ex: Juggle Combo, Punish, Punish Combo, Character Weight Combo ect..."
            required
          />
        </div>
        <div id="noteBody">
          <label for="noteBody">Note:</label>
          <textarea
            rows="5"
            name="noteBody"
            id="noteBody"
            placeholder="put that genius idea right here~"
            required=""
            style="width: 518px; height: 71px;"
          >
          </textarea>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </section>
  </div>
`;

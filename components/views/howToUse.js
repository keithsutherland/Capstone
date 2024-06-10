import html from "html-literal";
import vf5framedatapic from "../../capstoneSite/images/vf5framedatapic.jpg";

export default () => html`
  <div class="wrapper">
  <section id="info">
      <h1>"What is FrameData?"</h1>
      <!-- <div class = "flexbox"> -->
      <p>
        Frame data is a count of the frames of animation of a given move of a
        character. If your thought is "that could be anything," then, you'd be
        right. Which is why the data itself is given some context through your
        games' frame rate. If your games runs at 60 frames a second, this means
        that means you can generally use that measurement to imagine the speed
        of a move. If I say a move is "12 frames," this tells you the move
        connects with the opponent in 2/10ths of a second (or the move takes
        about 20% of a second) to hit your opponent. From the time you hit the
        button til the moment when that move can hit your opponent, those
        animation frames in specific are called "Startup frames." The move
        pictured here has 17 Startup frames, however, the game does not tell us
        the "active" or "recovery" frames of this move. (more on this info
        later...)
      </p>
      <a
        target="blank"
        href="https://virtuafighter.com/commands/list?ver=5fsa&chara=jean"
      >
        <img
          id="jeanframedata"
          src=${vf5framedatapic}
          alt="Jean in-game frame data example"
        />
      </a>
    </div>
  </section>
`;

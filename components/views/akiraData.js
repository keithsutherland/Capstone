import html from "html-literal";

export default state => html`
  <div id="tableWrapper">
    <table id="akiradata">
      <tr bgcolor="grey">
        <th>Input</th>
        <th>Level</th>
        <th>Startup</th>
        <th>Active</th>
        <th>Guard</th>
        <th>Escape</th>
      </tr>
      <tr bgcolor="lightgrey">
        <td>P</td>
        <td>H</td>
        <td>12</td>
        <td>2</td>
        <td>+2</td>
        <td>-</td>
      </tr>
      <tr>
        <td>PP</td>
        <td>H</td>
        <td>12</td>
        <td>2</td>
        <td>-8</td>
        <td>-</td>
      </tr>
      <tr bgcolor="lightgrey">
        <td>PK</td>
        <td>H</td>
        <td>14</td>
        <td>2</td>
        <td>-4</td>
        <td>-</td>
      </tr>
      <tr>
        <td>(6)P</td>
        <td>H</td>
        <td>12</td>
        <td>2</td>
        <td>2</td>
        <td>-</td>
      </tr>
      <tr bgcolor="lightgrey">
        <td>6P</td>
        <td>M</td>
        <td>17</td>
        <td>2</td>
        <td>-4</td>
        <td>-</td>
      </tr>
      <tr>
        <td>6P4</td>
        <td>M</td>
        <td>17</td>
        <td>2</td>
        <td>-6</td>
        <td>-</td>
      </tr>
      <tr bgcolor="lightgrey">
        <td>6P4P</td>
        <td>M-H</td>
        <td>17</td>
        <td>2</td>
        <td>Guardbreaks</td>
        <td>-</td>
      </tr>
      <tr>
        <td>6P4PP</td>
        <td>M-H-M</td>
        <td>17</td>
        <td>2</td>
        <td>-6</td>
        <td>-</td>
      </tr>
      <tr bgcolor="lightgrey">
        <td>6P4K</td>
        <td>M-L</td>
        <td>17</td>
        <td>4</td>
        <td>-17</td>
        <td>-</td>
      </tr>
      <tr>
        <td>6P4K(on hit)P+G</td>
        <td>Attack Throw</td>
        <td>24</td>
        <td>4</td>
        <td>-17</td>
        <td>cannot escape if hit with 4K</td>
      </tr>
      <tr bgcolor="lightgrey">
        <td>6P4P-P+K</td>
        <td>M</td>
        <td>17</td>
        <td>3</td>
        <td>-7</td>
        <td>-</td>
      </tr>
      <tr>
        <td>66P</td>
        <td>M</td>
        <td>13</td>
        <td>2</td>
        <td>-5</td>
        <td>-</td>
      </tr>
      <tr bgcolor="lightgrey">
        <td>666P</td>
        <td>M</td>
        <td>15</td>
        <td>2</td>
        <td>-5</td>
        <td>-</td>
      </tr>
      <tr>
        <td>4P</td>
        <td>H</td>
        <td>16</td>
        <td>2</td>
        <td>-2</td>
        <td>-</td>
      </tr>
      <tr bgcolor="lightgrey">
        <td>4PP</td>
        <td>H</td>
        <td>16</td>
        <td>2</td>
        <td>-4</td>
        <td>-</td>
      </tr>
      <tr>
        <td>4P-P+K</td>
        <td>H</td>
        <td>16</td>
        <td>2</td>
        <td>-4</td>
        <td>-</td>
      </tr>
      <tr bgcolor="lightgrey">
        <td>46P</td>
        <td>H</td>
        <td>14</td>
        <td>2</td>
        <td>1</td>
        <td>-</td>
      </tr>
      <tr>
        <td>43P</td>
        <td>M</td>
        <td>21</td>
        <td>3</td>
        <td>0</td>
        <td>-</td>
      </tr>
      <tr bgcolor="lightgrey">
        <td>43P8P (or2P)</td>
        <td>M</td>
        <td>14(8 or 4 P)</td>
        <td>2</td>
        <td>-8</td>
        <td>-</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
`;

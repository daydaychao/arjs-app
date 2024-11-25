import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import litLogo from "./assets/lit.svg";

@customElement("app-ui")
export class AppUi extends LitElement {
  static properties = {
    result: { type: Number },
    playerName: { type: String },
  };

  result = 1;
  playerName = "guest";

  render() {
    return html`
      <div class="border h-full aboslute bottom-0">
        <img src=${litLogo} class="logo lit" alt="Lit logo" />

        Player:${this.playerName}
        <div class="card">
          <button
            @click=${() => {
              console.log("click water");
            }}
            part="button"
          >
            water
          </button>
          <button
            @click=${() => {
              console.log("click sun");
            }}
            part="button"
          >
            sun
          </button>
        </div>
      </div>
    `;
  }
}

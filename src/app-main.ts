import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

import { AppAr } from "./app-ar";
import { AppUi } from "./app-ui";

@customElement("app-main")
export class AppMain extends LitElement {
  render() {
    return html`
      <div class="h-full w-full border border-yellow">
        <div class="bg-red-500 p-4 m-4 text-red text-2xl">Test UnoCSS</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    appMain: AppMain;
    appUi: AppUi;
    appAr: AppAr;
  }
}

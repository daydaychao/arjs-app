import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import "@unocss/reset/tailwind.css";

import { AppAr } from "./app-ar";
import { AppUi } from "./app-ui";

@customElement("app-main")
export class AppMain extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      height: ${window.innerHeight}px;
    }
    @unocss-placeholder;
  `;
  render() {
    return html`
      <div class="bg-red-500 p-4 m-4 text-red text-2xl">Test UnoCSS</div>
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

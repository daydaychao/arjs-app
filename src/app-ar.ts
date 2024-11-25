import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-ar")
export class AppAr extends LitElement {
  render() {
    return html` <div class="border w-300 h-300">AR here</div> `;
  }
}

import './style.scss';
import { LitElement, html } from "lit-element";

class Header extends LitElement {
  render() {
    return html` <div>This is a header in shadow dom</div>`;
  }
  static get properties() {
    return {
      eg: {
        type: String,
      },
    };
  }
  constructor() {
    super();
  }
}

customElements.define("app-header", Header);
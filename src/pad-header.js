import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

export class padHeader extends SimpleColors {
  static get tag() {
    return 'pad-header';
  }

  constructor() {
    super();
    this.dark = false;
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          background-color: var(--simple-colors-default-theme-accent-1);
          color: var(--simple-colors-default-theme-grey-12);
          font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
      `,
    ];
  }

  render() {
    return html`<div><slot></slot></div>`;
  }
}

window.customElements.define(padHeader.tag, padHeader);

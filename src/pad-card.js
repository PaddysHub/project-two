import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

export class padCard extends SimpleColors {
  static get tag() {
    return 'pad-card';
  }

  constructor() {
    super();
    this.myIcon = null;
    this.type = '';
    this.accentColor = 'blue';
    this.dark = 'false';
    this.mainheader = 'This is the main header.';
    this.subheader = 'This is the subheader.';
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
        }
      `,
    ];
  }

  render() {
    return html``;
  }
}

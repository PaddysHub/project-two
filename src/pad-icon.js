import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

export class padIcon extends SimpleColors { /* A lot of this can be taken from learning card, since it already contains the icons */
    static get tag() {
    return 'pad-icon';
}

constructor() {
    super();

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

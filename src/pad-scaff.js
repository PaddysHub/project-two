import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

import './pad-header.js';
import './pad-icon.js';
import './pad-card.js'; /* imported so they can be used in the scaffold */

export class padScaff extends SimpleColors {
    static get tag() {
    return 'pad-scaff';
}

constructor() {
    super();
    this.title = "Paddy's Hub";
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
            #content {
                border-top: transparent;
                background-color: white;
                border: 1px solid black;
                padding-top: 10px;
                padding-bottom: 10px;
                padding-left: 100px;
                margin: 0px;
            }
        }
      `,
    ];
  }

render() { /* Not completely filled in yet. Once card, icon, and header are complete this can be implemented in the html file */
    return html `
        <div id="card">
            <slot name="card"></slot>
        </div>
        <div id="icon">
            <slot name="icon"></slot>
        </div>
        <div id="header">
            <slot name="header"></slot>
        </div>
    `;
    }
}

window.customElements.define(padScaff.tag, padScaff);

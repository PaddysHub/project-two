import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

export class padIcon extends SimpleColors {
  /* A lot of this can be taken from learning card, since it already contains the icons */
  static get tag() {
    return 'pad-icon';
  }

  constructor() {
    super();
    this.myIcon = beaker;
    this.type = 'chem connection';
  }

  static get properties() {
    return {
      ...super.properties,
      type: { type: String },
      icon: { type: String },
    };
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'did you know') {
        this.myIcon = question;
      }
      if (propName === 'type' && this[propName] === 'chem connection') {
        this.myIcon = beaker;
      }
      if (propName === 'type' && this[propName] === 'learning objectives') {
        this.myIcon = lightbulb;
      }
    });
  }

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  // HTMLElement life-cycle, element has been connected to the page / added or moved
  // this fires EVERY time the element is moved

  connectedCallback() {
    super.connectedCallback();
  }
  // HTMLElement life-cycle, element has been removed from the page OR moved
  // this fires every time the element moves

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
        }

        /* this is how you match something on the tag itself like <learning-card type="math"> and then style the img inside */

        :host([type='learning objectives']) img {
          height: var(--learning-card-height, 100px);
          width: var(--learning-card-width, 100px);
          background-color: orange;
        }
        :host([type='chem connection']) img {
          height: var(--learning-card-height, 100px);
          width: var(--learning-card-width, 100px);
          background-color: green;
        }

        :host([type='did you know']) img {
          height: var(--learning-card-height, 100px);
          width: var(--learning-card-width, 100px);
          background-color: blue;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="outline">
        <img src="${this.icon}" alt="" style="height: 100px; width: 100px;" />
      </div>
    `;
  }
}

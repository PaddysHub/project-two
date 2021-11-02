// dependencies / things imported
import { LitElement, html, css } from 'lit';
import './pad-header.js';
import './pad-icon.js';

// this is the base path to the assets calculated at run time
// this ensures that assets are shipped correctly when building the demo
// on github pages, or when people reuse assets outside your elements in production
// because this won't change we can leverage as an internal variable without being
// declared in properties. This let's us ship the icons while referencing them correctly
const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;
// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class LearningCard extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'learning-card';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults

  constructor() {
    super();
    this.myIcon = beaker;
    this.type = 'chem connection';
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle

  static get properties() {
    return {
      // reflect allows state changes to the element's property to be leveraged in CSS selectors
      type: { type: String, reflect: true },
      // attribute helps us bind the JS spec for variables names to the HTML spec
      // <learning-card my-icon="whatever" will set this.myIcon to "whatever"
      // need to add string
      myIcon: { type: String, attribute: 'my-icon' },
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic

  // Needs to be done with each type of card. Math/Science/English

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'did you know') {
        this.myIcon = question;
        this.subheading = 'Science Objectives';
      }
      if (propName === 'type' && this[propName] === 'chem connection') {
        this.myIcon = beaker;
        this.subheading = 'Math Objectives';
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

  // CSS - specific to Lit

  static get styles() {
    return css`
      :host {
        display: grid;
        border: 1px solid black;
        margin: 35px;
      }

      /* this is how you match something on the tag itself like <learning-card type="math"> and then style the img inside */

      :host([type='learning objectives']) #cardbackground {
        height: var(--learning-card-height, 100px);
        width: var(--learning-card-width, 100%);
        background-color: orange;
      }
      :host([type='chem connection']) #cardbackground {
        height: var(--learning-card-height, 100px);
        width: var(--learning-card-width, 100%);
        background-color: green;
      }

      :host([type='did you know']) #cardbackground {
        height: var(--learning-card-height, 100px);
        width: var(--learning-card-width, 100%);
        background-color: blue;
      }
    `;
  }

  // HTML - specific to Lit
  // display: inline; position: absolute; font-size: 30px; color: white;
  render() {
    return html`
      <div id="cardbackground" style="display: inline;">
        <img src="${this.myIcon}" alt="" style="height: 100px; width: 100px;" />

        <div
          style="display: inline; position: absolute; color: white; text-transform: uppercase;"
        >
          <header style="font-size: 36px; font-weight: bold">Unit 1</header>
          <h2 style="font-size: 32px;margin: -1.0%;">${this.type}</h2>
        </div>
      </div>
      <div>
        <pad-header></pad-header>

        <div
          class="slot-wrapper"
          data-label="Header"
          data-layout-slotname="header"
        >
          <slot name="header"></slot>
        </div>
        <div slot="content" class="content-card">
          <p>Body</p>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          <!--Need to figure out how to have program determine what icon is used rather than pasting them all -->

          <div
            class="slot-wrapper"
            data-label="Content"
            data-layout-slotname="content"
          >
            <slot name="content"></slot>
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return {
      canScale: false,
      canPosition: false,
      canEditSource: true,
      contentEditable: true,
      gizmo: {
        title: 'Learning Card',
        description: 'An element that you have to replace / fix / improve',
        icon: 'credit-card',
        color: 'blue',
        groups: ['Content', 'Presentation', 'Education'],
      },
      settings: {
        configure: [
          {
            property: 'type',
            title: 'Type',
            description: 'Identifies the card',
            inputMethod: 'select',
            options: {
              science: 'Science',
              math: 'Math',
            },
          },
        ],
        advanced: [],
      },
      demoSchema: [
        {
          tag: LearningCard.tag,
          properties: {
            type: 'science',
          },
          content:
            "<p slot='header'>This tag renders in the header</p><ul><li>This renders</li><li>Below the tag</li></ul>",
        },
      ],
    };
  }
}

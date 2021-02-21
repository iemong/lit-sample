import {LitElement, html, css} from 'lit-element';

class MyElement2 extends LitElement {
  protected message: string;
  protected myBool: boolean;
  protected myArray: string[];

  constructor() {
    super();
    this.message = 'Hello world! From my-element';
    this.myBool = true;
    this.myArray = ['an', 'array', 'of', 'test', 'data'];
  }

  static get properties() {
    return {
      message: {type: String},
      myBool: {type: Boolean},
      myArray: {type: Array},
    };
  }

  static get styles() {
    return css`
      p {
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
      }
      .red {
        color: red;
      }
      .blue {
        color: blue;
      }
    `;
  }

  clickHandler(event: Event) {
    console.log(event.target);
    this.myBool = !this.myBool;
  }

  render() {
    return html`
      <p>${this.message}</p>
      <ul>
        ${this.myArray.map((item) => html`<li>${item}</li>`)}
      </ul>
      ${this.myBool
        ? html`<p>Render some HTML if myBool is true</p>`
        : html`<p>Render some other HTML if myBool is false</p>`}
      <button @click=${this.clickHandler}>Click</button>
      <p class="${this.myBool ? 'red' : 'blue' }">styled paragraph</p>
    `;
  }
}

customElements.define('my-element2', MyElement2);

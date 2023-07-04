export class ListComponent extends HTMLElement {
  private _root: ShadowRoot;
  constructor() {
    super();
    this._root = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    console.log('list');
    this._root.innerHTML = 'list';
  }

  disconnectedCallback() {
    // Called when the component is removed from the DOM
  }

  //attributeChangedCallback(attrName, oldValue, newValue) {
  // Called when one of the component's attributes changes
  //}
}

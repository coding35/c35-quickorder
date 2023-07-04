export class SearchComponent extends HTMLElement {
  private _root: ShadowRoot;
  constructor() {
    super();
    this._root = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this._root.innerHTML = 'search';
  }

  disconnectedCallback() {
    // Called when the component is removed from the DOM
  }

  // attributeChangedCallback(attrName: any, oldValue: any, newValue: any) {
  // Called when one of the component's attributes changes
  //}
}



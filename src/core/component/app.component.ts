import { SearchComponent } from "./search.component";

export class AppComponent extends HTMLElement {
    private _root: ShadowRoot;
    constructor() {
        super();
        this._root = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        customElements.define('c35-search', SearchComponent);
        this._root.innerHTML = '<c35-search></c35-search>';
    }
    disconnectedCallback() {
        // Called when the component is removed from the DOM
    }
    //attributeChangedCallback(attrName, oldValue, newValue) {
    // Called when one of the component's attributes changes
    //}
}
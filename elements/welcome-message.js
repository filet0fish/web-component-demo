class WelcomeClass extends HTMLElement {

    constructor() {
        super();
        // Class is instantiated
    }

    connectedCallback() {
        // Element is attached to the DOM
        this.innerHTML = "Hello, Web Components";
    }

    disconnectedCallback() {
        // Element is removed from the DOM
    }

    adoptedCallback() {
        // Element is moved to a new document
    }

    attributeChangedCallback() {
        // An attribute change on the element
    }

    static get observedAttributes() { return ['class', 'message']; }
}
window.customElements.define('welcome-message', WelcomeClass);
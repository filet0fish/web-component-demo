class WelcomeClass extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = "Hello, Web Components";
    }
}
window.customElements.define('welcome-message', WelcomeClass);
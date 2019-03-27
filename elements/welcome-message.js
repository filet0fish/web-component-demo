class WelcomeClass extends HTMLElement {

    constructor() {
        super();
        this.innerHTML = "Hello, Web Components";
    }
}
window.customElements.define('welcome-message', WelcomeClass);
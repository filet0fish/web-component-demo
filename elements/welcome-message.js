class WelcomeClass extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        let templateElement = document.getElementById('message');
        let ourCopy = document.importNode(templateElement.content, true); // True == copy nodes
        this.appendChild(ourCopy);
    }
}
window.customElements.define('welcome-message', WelcomeClass);
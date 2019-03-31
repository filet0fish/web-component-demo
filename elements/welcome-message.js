class WelcomeClass extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
            <style>
                h1 { color: cornflowerblue; }
            </style>
            <h1>Hello, Shadow Dom!</h1>
        `;
    }
}
window.customElements.define('welcome-message', WelcomeClass);
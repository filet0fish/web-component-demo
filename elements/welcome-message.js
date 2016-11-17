class WelcomeClass extends HTMLElement {

    constructor() {
        super();

        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
            <style>
                h1 { color: rebeccapurple; }
            </style>
            <h1>Hello, shadow dom!</h1>
        `;
    }

    connectedCallback() {}
}
window.customElements.define('welcome-message', WelcomeClass);
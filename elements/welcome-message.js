import { ColorPicker } from "./color-lib.js";

class WelcomeClass extends HTMLElement {

    constructor() {
        super();

        let colors = new ColorPicker();

        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
            <style>
                h1 { color: ${colors.textColor}; }
            </style>
            <h1>Hello, ES Module Imports!</h1>
        `;
    }
}
window.customElements.define('welcome-message', WelcomeClass);
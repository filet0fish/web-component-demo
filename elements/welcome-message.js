import "./welcome-divider.js";

class WelcomeClass extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        let templateName = this.getAttribute('use-template');
        this.render((templateName) ? document.getElementById(templateName) : null);
    }

    render(templateElement){
        let elementStyles = document.createElement('style');
        elementStyles.innerHTML = `h1 { color: cornflowerblue; }`;
        let content; 

        if (templateElement) {
            content = document.importNode(templateElement.content, true);
        } else {
            content = document.createElement('div');
            content.innerHTML = `<h1>Hello, <slot></slot></h1><welcome-divider></welcome-divider>`;
        }

        content.appendChild(elementStyles);
        this.shadowRoot.appendChild(content);
    }
}
window.customElements.define('welcome-message', WelcomeClass);
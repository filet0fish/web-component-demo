import "./welcome-divider.js";

class WelcomeClass extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});

        this.elementStyles = document.createElement('style');
        this.elementStyles.innerHTML = `h1 { color: cornflowerblue; }`;
    }
    
    static get observedAttributes() { return ['use-template']; }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'use-template') {
            this.render();
        }
    }

    connectedCallback() {
        this.render();
    }

    render(){
        let content; 
        let templateElement = this.getAttribute('use-template') && document.querySelector(`#${this.getAttribute('use-template')}`);
            
        if (templateElement) {
            content = document.importNode(templateElement.content, true);
        } else {
            content = document.createElement('div');
            content.innerHTML = `<h1>Hello, <slot></slot></h1><welcome-divider></welcome-divider>`;
        }

        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(this.elementStyles);
        this.shadowRoot.appendChild(content);
    }
}
window.customElements.define('welcome-message', WelcomeClass);
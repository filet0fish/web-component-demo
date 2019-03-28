class DividerClass extends HTMLElement {

    constructor() {
        super();
        this.innerText = `-=-=-=-=-=-=-=-=-`;
    }
}
window.customElements.define('welcome-divider', DividerClass);
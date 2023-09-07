export class MenuPage extends HTMLElement {
  constructor() {
    super();

    // Attach the shadow dom
    this.root = this.attachShadow({ mode: "open" });

    // You can perform any additional setup here if needed
  }

  connectedCallback() {
    const template = document.getElementById("menu-page-template");
    const content = template.content.cloneNode(true); // Clone the template once
    this.root.appendChild(content); // Append the cloned content
  }
}

customElements.define("menu-page", MenuPage);

export class DetailsPage extends HTMLElement {
  constructor() {
    super();

    // create it as as shadow dom
    this.root = this.attachShadow({ mode: "open" });

    // Load the styles
    const styles = document.createElement("style");
    this.root.appendChild(styles);

    async function loadCSS() {
      const request = await fetch("/components/DetailsPage.css");
      const css = request.text();
      styles.textContent = css;
    }
    loadCSS();
  }

  connectedCallback() {

        const template = document.getElementById("details-page-template");
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);
        this.renderData();

  }

  async renderData(){

    if(this.dataset.id){

    }else {
        alert('Invalid Product Id');
    }

  }
}


customElements.define("details-page" , DetailsPage);
// web component
class AbakoHome extends HTMLElement {
  // connect component
  connectedCallback() {
    this.textContent = "Abako";
  }
}

// register component
customElements.define("abako-home", AbakoHome);

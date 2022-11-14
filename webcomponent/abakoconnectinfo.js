// web component
class AbakoConnectInfo extends HTMLElement {
  // connect component
  connectedCallback() {
    this.textContent =
      "© Abako Oy 2022, Pyhäjärvenkatu 5 B, 33200 Tampere, 010 229 3800.";
  }
}

// register component
customElements.define("abako-connect-info", AbakoConnectInfo);

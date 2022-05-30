//Paragraph page

class pCodeOne extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
<textarea readonly rows="1" class="html-snippet">
<p>Hello, World!</p>
</textarea>
      `;
    }
  }

class pCodeTwo extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<textarea readonly rows="9" class="html-snippet">
<body>
    <h1>This is a title</h1>
    <p>Hello, World!</p>
    <p>Hello, World!</p>
    <p>Hello, World!</p>
    <p>Hello, World!</p>
    <p>Hello, World!</p>
    <p>Hello, World!</p>
</body>
</textarea>
      `;
    }
  }
  
  customElements.define('p-code-one', pCodeOne);
  customElements.define('p-code-two', pCodeTwo);
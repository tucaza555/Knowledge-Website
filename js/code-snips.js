//----------------Example-----------------------

class CodeBlockExample extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `  
<textarea readonly rows="1" class="html-snippet">
<p>Hello, World!</p>
<p>This is an example of a code snippet</p>
</textarea>
    `;
  }
}

customElements.define('code-example', CodeBlockExample);

//----------------------------------------------

//Headings page
class Headings extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<textarea readonly rows="6" class="html-snippet">
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
</textarea>
    `;
  }
}

customElements.define('headings-one', Headings);

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
  class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <header class="header">
        <a class="header-item" href="index.html">HOME</a>
        <a class="header-item" href="html-home.html">HTML</a>
        <a class="header-item" href="css-home.html">CSS</a>
        <a class="header-item" href="js-home.html">JAVASCRIPT</a>
      </header>
      `;
    }
  }

  class htmlList extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="split left">
            <nav class="column">
                <h3>HTML Basics</h3>
                <ul>
                    <a href="#"><li><p class="list-item">Headings</p></li></a>
                    <a href="#"><li><p class="list-item">Paragraphs</p></li></a>
                    <a href="#"><li><p class="list-item">Comments</p></li></a>
                </ul>
            </nav>
        </div>
      `;
    }
  }

  class cssList extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="split left">
            <nav class="column">
                <h3>CSS Basics</h3>
                <ul>
                    <a href="#"><li><p class="list-item">Headings</p></li></a>
                    <a href="#"><li><p class="list-item">Paragraphs</p></li></a>
                    <a href="#"><li><p class="list-item">Comments</p></li></a>
                </ul>
            </nav>
        </div>
      `;
    }
  }

  class jsList extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="split left">
            <nav class="column">
                <h3>Javascript Basics</h3>
                <ul>
                    <a href="#"><li><p class="list-item">Headings</p></li></a>
                    <a href="#"><li><p class="list-item">Paragraphs</p></li></a>
                    <a href="#"><li><p class="list-item">Comments</p></li></a>
                </ul>
            </nav>
        </div>
      `;
    }
  }
  
  customElements.define('header-component', Header);
  customElements.define('html-list', htmlList);
  customElements.define('css-list', cssList);
  customElements.define('js-list', jsList);
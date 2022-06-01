//Header reusable
  class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <header class="header">
        <a class="header-item" href="index.html">HOME</a> 
        <a class="header-item" href="html-home.html">HTML</a>
        <a class="header-item" href="css-home.html">CSS</a>
        <a class="header-item" href="js-home.html">JAVASCRIPT</a>
        <!--<a class="header-item" href="template.html">TEMPLATE</a>-->
      </header>
      `;
    }
  }

//HTML left list reusable
  class htmlList extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="split left">
            <nav class="column">
                <h3 class="list-heading">HTML Basics</h3>
                <ul>
                    <a href="HTMLheadings.html"><li><p class="list-item">HTML Headings</p></li></a>
                    <a href="HTMLparagraphs.html"><li><p class="list-item">HTML Paragraphs</p></li></a>
                </ul>
            </nav>
        </div>
      `;
    }
  }

//CSS left list reusable
  class cssList extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="split left">
            <nav class="column">
                <h3 class="list-heading">CSS Basics</h3>
                <ul>
                    <a href="#"><li><p class="list-item">CSS Headings</p></li></a>
                    <a href="#"><li><p class="list-item">CSS Paragraphs</p></li></a>
                    <a href="#"><li><p class="list-item">CSS Comments</p></li></a>
                </ul>
            </nav>
        </div>
      `;
    }
  }

//Javascript left list reusable
  class jsList extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="split left">
            <nav class="column">
                <h3 class="list-heading">Javascript Basics</h3>
                <ul>
                    <a href="#"><li><p class="list-item">JS Data Types</p></li></a>
                    <a href="#"><li><p class="list-item">JS Functions</p></li></a>
                    <a href="#"><li><p class="list-item">JS Comments</p></li></a>
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
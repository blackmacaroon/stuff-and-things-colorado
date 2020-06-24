class Navbar {
    constructor(element) {
          this.element = element;
          // console.log("element", element);
          this.button = this.element.querySelector('.hamburger');
          // console.log("button", this.button);
          this.content = this.element.querySelector('.dropdown-content');
          // Add a click handler to the button reference and call the toggleContent method.
          // console.log("content", this.content);
          this.button.addEventListener('click', () => this.dropdown());
          
    }
  
    dropdown() {
          this.content.classList.toggle('dropdown-hidden');
          // console.log('click');
    }
}

let navbars = document.querySelectorAll('.dropdown').forEach( navbar => {new Navbar(navbar)});


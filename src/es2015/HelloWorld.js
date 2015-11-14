
export default class HelloWorld {
  constructor(args) {
    this.name = 'Stranger';
  }

  sayHello() {
    var appElement = document.querySelector('#es2015');
    appElement.textContent = 'Hello ' + this.name;
  }

  // methods
}
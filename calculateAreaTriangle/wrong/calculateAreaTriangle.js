document.addEventListener("DOMContentLoaded", function () {

});

class figure {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
  setColor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
}

class Triangle extends figure {
  constructor(name, color, base, height) {
    super(name, color);
    this.base = base;
    this.height = height;
  }

  getArea() {
    return (this.base * this.height) / 2;
  }
}

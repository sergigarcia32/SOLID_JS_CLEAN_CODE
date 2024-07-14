document.addEventListener("DOMContentLoaded", function () {

  const triangle = new Triangle("red", 5, 8);
  triangle.printArea();
});

class Figure {
  constructor(color) {
    this.color = color;
  }
 
  setColor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
}

class Triangle extends Figure {
  constructor(color, base, height) {
    super(color);
    this.base = base;
    this.height = height;
  }

  getName() {
    return "Triangle";
  }
  getArea() {
    return (this.base * this.height) / 2;
  }

  printArea() {
    console.log(`El área del ${this.getName()} es ${this.getArea()}`);
  }
}

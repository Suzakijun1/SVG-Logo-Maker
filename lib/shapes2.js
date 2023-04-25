class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  setColor(color) {
    this.shapeColor = color;
  }
}

class Circle extends Shape {
  render() {
    //Returns a string that represents a circle element, using literals to pass color.

    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 2 270, 182 33, 182" fill="${this.shapeColor}"/>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x = "75" y = "35" width="150" height= "150" fill="${this.shapeColor}" />`;
  }
}

module.exports = { Circle, Triangle, Square };

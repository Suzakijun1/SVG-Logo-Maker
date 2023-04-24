class SVG {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }
  // Need to create a render method that returns a string that represents an SVG file with our passed in elements.
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
  }

  // We need to create a setText method that takes in a message and a color and sets the textElement property to a string that represents a text element, using literals to pass in the message and color.
  setText(text, textColor) {
    if (text.length > 3) {
      throw new Error("Text must not exceed 3 characters.");
    } else {
      this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
  }

  // We need to create a setShape method that takes in a shape and sets the shapeElement property to the shape's render method.
  setShape(shape) {
    this.shapeElement = shape.render();
  }
}

module.exports = SVG;

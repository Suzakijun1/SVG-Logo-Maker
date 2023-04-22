const { Square, Triangle, Circle } = require("../lib/shapes2");

describe("Circle", () => {
  test("should render green circle", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
    const circle = new Circle();
    circle.setColor("green");
    const actualSvg = circle.render();
    expect(expectedSvg).toEqual(actualSvg);
  });
  test("should accept a color", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
    const circle = new Circle();
    circle.setColor("blue");
    const actualSvg = circle.render();
    expect(expectedSvg).toEqual(actualSvg);
  });
});

// Write tests for others
describe("Square", () => {
  test("should render square", () => {
    const expectedSvg = '<rect width="150" height= "150" fill="green" />';
    const square = new Square();
    square.setColor("green");

    expect(expectedSvg).toEqual(square.render());
  });
  test("should accept a color", () => {
    const expectedSvg = '<rect width="150" height= "150" fill="blue" />';
    const square = new Square();
    square.setColor("blue");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Triangle", () => {
  test("should render square", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182 fill="green">';
    const triangle = new Triangle();
    triangle.setColor("green");

    expect(expectedSvg).toEqual(triangle.render());
  });
  test("should accept a color", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182 fill="blue">';
    const triangle = new Triangle();
    triangle.setColor("blue");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

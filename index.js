const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes2");
const SVG = require("./lib/svg2");
const fs = require("fs");

class CLI {
  run() {
    return inquirer
      .prompt([
        // Prompt the user for the specs they want to display in the SVGAElement.
        {
          type: "input",
          name: "text",
          message: "Enter up to three characters for your SVG",
          validate: (nameInput) => {
            if (nameInput.length > 3) {
              console.log("Cannot be greater than 3 characters");
              return false;
            } else {
              return true;
            }
          },
        },
        {
          type: "input",
          name: "textColor",
          message: "What would you like the text color to be?",
        },
        {
          type: "list",
          name: "shapeType",
          message: "Please choose a shape",
          choices: ["circle", "triangle", "square"],
        },
        {
          type: "input",
          name: "shapeColor",
          message: "What would you like the shape color to be?",
        },
      ])
      .then(({ text, textColor, shapeType, shapeColor }) => {
        // create some conditional logic to generate a new instance of the shape class, and pass in user input!
        // Create a new instance of the SVG class and set the text and shapeColor.
        // return the writeFile method, passing in the file name and the rendered svg.
        let shape;

        switch (shapeType) {
          case "circle":
            shape = new Circle();
            break;
          case "square":
            shape = new Square();
            break;
          case "triangle":
            shape = new Triangle();
            break;
        }

        shape.setColor(shapeColor);

        const svg = new SVG();
        svg.setText(text, textColor);
        console.log("text:", text, "textColor", textColor);
        svg.setShape(shape);

        console.log(typeof shapeType);
        console.log(typeof shapeColor);
        fs.writeFile("newSvg.svg", svg.render(), function (err) {
          if (err) {
            console.error(err);
          } else {
            console.log("Generated newSvg.svg");
          }
        });
        // function
      })
      .then(() => {
        console.log("Generated logo.svg");
        // log a message to the console that the file has been generated.
      })
      .catch((error) => {
        console.log(error);
        console.log("Something went wrong.");
        // console.log(error) for debugging purposes
      });
  }
}

module.exports = CLI;

new CLI().run();

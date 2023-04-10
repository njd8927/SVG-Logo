const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes.js');



function svgContent (){
inquirer.prompt ([
    {
        type: "input",
        name: "logoText",
        message: "Please enter text for the logo (max of 3 characters)",
    },
    {
        type: "input",
        name: "logoColor",
        message: "Please enter a text color for the logo",
    },
    {
        type: "list",
        name: "shapeChoice",
        message: "Please choose the shape of your logo from the list below",
        choices: ["circle", "triangle", "square"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Please enter a color for the logo shape",
    }
]). then((answersObj) => {
    console.log("Generated logo.svg!");
    let newShape;
    if(answersObj.shapeChoice === "circle") {
        newShape = new Circle(answersObj.logoText, answersObj.logoColor, answersObj.shapeColor)
    } else if (answersObj.shapeChoice === "triangle") {
        newShape = new Triangle(answersObj.logoText, answersObj.logoColor, answersObj.shapeColor)
    } else {
        newShape = new Square(answersObj.logoText, answersObj.logoColor, answersObj.shapeColor)
    }
    writeToFile('logo.svg', newShape.render());
})};


function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err => {
        if (err)
        return console.log(err);

        console.log('Your SVG file has been created successfully!');
    });
};


svgContent();
const inquirer = require('inquirer');
// pulls in inquirer package
const fs = require('fs');
// pulls in file system package
const {Circle, Triangle, Square} = require('./lib/shapes.js');
// pulls in and deconstructs the 3 shape classes from shapes.js



function svgContent (){
    // function to generate SVG logo. inquirer used to obtain data from user via prompts
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
    // conditional statement to generate correct shape data based on user inputs
    if(answersObj.shapeChoice === "circle") {
        newShape = new Circle(answersObj.logoText, answersObj.logoColor, answersObj.shapeColor)
    } else if (answersObj.shapeChoice === "triangle") {
        newShape = new Triangle(answersObj.logoText, answersObj.logoColor, answersObj.shapeColor)
    } else {
        newShape = new Square(answersObj.logoText, answersObj.logoColor, answersObj.shapeColor)
    }
    // writeToFile method used to generate the logo based on user input
    writeToFile('logo.svg', newShape.render());
})};

// function to create new file and advise user the file has been created successfully or if there was an error
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err => {
        if (err)
        return console.log(err);

        console.log('Your SVG file has been created successfully!');
    });
};

// call function to gather user inputs and generate logo
svgContent();
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./shapes.js');




function svgContent (){
inquirer.prompt ([
    {
        type: "input",
        name: "logo text",
        message: "Please enter text for the logo (max of 3 characters)",
    },
    {
        type: "input",
        name: "logo text color",
        message: "Please enter a text color for the logo",
    },
    {
        type: "list",
        name: "shape choice",
        message: "Please choose the shape of your logo from the list below",
        choices: ["circle", "triangle", "square"],
    },
    {
        type: "input",
        name: "shape color",
        message: "Please enter a color for the logo shape",
    }
]). then((answersObj) => {
    console.log("Generated logo.svg!");
    const data = answersObj;
    writeToFile('logo.svg', data);
})};


function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err => {
        if (err)
        return console.log(err);

        console.log('Your SVG file has been created successfully!');
    });
};


svgContent();
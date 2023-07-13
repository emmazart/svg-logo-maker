const inquirer = require('inquirer');
const {Triangle, Square, Circle} = require("./lib/shapes");

let newShape;

// declare questions array
const questions = [
    {
        type: 'input',
        message: 'Enter up to three (3) characters:',
        name: 'char',
        required: 'true'
        // enforce a max length of 3 characters
    },
    {
       type: 'input',
       message: 'Enter a text color (color keyword or a hexidecimal number):',
       name: 'textcolor', 
       required: 'true'
    },
    {
        type: 'list',
        message: 'Choose a shape:',
        name: 'shape',
        choices: ['circle', 'triangle', 'square'],
        required: 'true'
    },
    {
        type: 'input',
        message: 'Enter a shape color (color keyword or a hexidecimal number):',
        name: 'fill',
        required: 'true' 
     }
];

// function for writing new svg file
function writeSvgFile({textColor, text, shape, fill}) {
    // const {textColor, text, shape, fill} = newShape;
    console.log(textColor, text, shape, fill);
}

// prompt user for input
inquirer
    .prompt(questions)
    .then(data => {
        // console.log(data);
        switch(data.shape){
            case "square":
                newShape = new Square(data.char, data.textcolor, data.shape, data.fill);
                break;
            case "triangle":
                newShape = new Triangle(data.char, data.textcolor, data.shape, data.fill);
                break;
            case "circle":
                newShape = new Circle(data.char, data.textcolor, data.shape, data.fill);
                break;
            default:
                console.log("ERROR: You did not select a shape. Please try again.")
                break;
        }
        console.log(newShape);
    })
    .then(() => {
        writeSvgFile(newShape)
    });
// create svg file called logo.svg using inputs
    // logo.svg should be a 300x200 pixel image
// print "Generated logo.svg" to command line

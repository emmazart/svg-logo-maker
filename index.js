const inquirer = require('inquirer');

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
        name: 'shapecolor',
        required: 'true' 
     }
];

// prompt user for input
inquirer
    .prompt(questions)
    .then(data => console.log(data));
// create svg file called logo.svg using inputs
    // logo.svg should be a 300x200 pixel image
// print "Generated logo.svg" to command line

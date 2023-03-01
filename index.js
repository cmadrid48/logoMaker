//pulling all required npm and sourced scripts
const inquirer = require('inquirer');
const fs = require('fs');
const {generateSvg} = require('./lib/generateSvg');
const {createShape} = require('./lib/createShape');

//inquirer user questions to be used in project, this will then direct the new logo where to go
inquirer
    .prompt([
        {
            type: 'input',
            name: 'logoName',
            message: 'Please enter text, must not be more than 3 letters',
        },
        {
            type: 'input',
            name: 'textColour',
            message: `Please enter text colour keyword or a hexadecimal number for the logo's test color`,
        },
        {
            type: 'input',
            name: 'logoColour',
            message: `Please enter a colour keyword or a hexadecimal number for the logo's background colour`,
        },
        {
            type: 'list',
            name: 'logoShape',
            message: `Please choose logo shape`,
            choices: ['triangle', 'circle', 'square'],
        },
])

.then((data) => {
    const svgPath = './examples/circle.svg';
    const finalLogo = createShape(data);

    //Creates the svg logo
    fs.writeFile(svgPath, generateSvg(finalLogo), (err) => 
    err ? console.error(err) : console.log('Generated logo.svg'));
})

.catch((err) => console.log(err));
//pulls in "is-css3-color" npm
const isCssColor = require('is-css3-color');

//creates the shape class which will be the parent in creating logo
class Shape {
    constructor({ logoName, textColour, logoColour, logoShape}) {
        this.logoShape = logoShape;
        
        //verifying inputs are correct while also collecting user data
        this.validTextInput(logoName);
        this.logoName = logoName;

        this.validColourInput(textColour);
        this.textColour = textColour;

        this.validColourInput(logoColour);
        this.logoColour = logoColour;
    }

    //throws errors if user input does not equal required data
    ifInputEmpty(input) {
        if (!input)
        throw new Error ('Input cannot be empty. Please try again...');
    }

    validTextInput(input) {
        this.ifInputEmpty(input);

        if (input.length > 3) {
            throw new Error ('Logo cannot be more than 3 characters. Please try again...');
        }
    }

    validColourInput(input) {
        this.ifInputEmpty(input);

        //Crates lowercase color names to prevent errors
        input = input.toLowerCase();

        if (!isCssColor(input)) {
            throw new Error ('Please eneter a valid "css color keyword or hexcode');
        }
    }

    render() {
        throw new Error ('Child shapes must implement a render() method.')
    }
}
//exports script to be locally sourced
module.exports = Shape;
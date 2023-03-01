const isCssColor = require('is-css3-color');

class Shape {
    constructor({ logoName, textColour, logoColour, logoShape}) {
        this.logoShape = logoShape;

        //
        this.logoName = logoName;

        //
        this.textColour = textColour;

        //
        this.logoColour = logoColour;
    }

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

module.exports = Shape;
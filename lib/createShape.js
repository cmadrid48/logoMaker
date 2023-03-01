const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

const createShape = (data) => {
    const {logoShape} = data;
    switch (logoShape) {
        case 'circle':
            const createCircle = new Circle(data);
            return createCircle;
            break;

        case 'triangle':
            const createTriangle = new Triangle(data);
            return createTriangle;
            break;
        
        case 'square':
            const createSquare = new Square(data);
            return createSquare;
            break;

        default:
            return `Something is not right!. please try again`;
            break;
    }
};

module.exports = {createShape}
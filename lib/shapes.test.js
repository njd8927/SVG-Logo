const {Circle, Triangle, Square} = require('./shapes.js');


describe('square', () => {
    it('should return code that creates a square', () => {
        const userShape = new Square();
        userShape.setColor("blue");
        const shape = userShape.render();
        expect(shape).toEqual(`<svg version="1.1" width="300" height="200" xmlns="https://www.w3.org/TR/SVG/">
        <rect x="90" y="90" width="100" height="100" fill="blue"/>
        <text x="140" y="150" font-size="27" text-anchor="middle">undefined</text>
        </svg>`);
    });
});


describe('circle', ()=> {
    it('should return code that creates a circle', () => {
        const userShape = new Circle();
        userShape.setColor("green");
        const shape = userShape.render();
        expect(shape).toEqual(`<svg version="1.1" width="300" height="200" xmlns="https://www.w3.org/TR/SVG/">
        <circle cx="75" cy="75" r="30" fill="green"/>
        <text x="75" y="80" font-size="27" text-anchor="middle" fill="green">undefined</text>
        </svg>`);

    });
});

describe('triangle', () => {
    it('should return code that creates a triangle', () => {
        const userShape = new Triangle();
        userShape.setColor("red");
        const shape = userShape.render();
        expect(shape).toEqual(`<svg version="1.1" width="300" height="200" xmlns="https://www.w3.org/TR/SVG/">
        <polygon points="150,25 250,150 50,150" fill="red"/>
        <text x="145" y="100" font-size="27" text-anchor="middle" fill="red">undefined</text>
        </svg>`);
    });
});
const shapes = require('./lib/shapes.js');

describe('square', () => {
    it('should return code that creates a square', () => {
        const userShape = new square();
        shape.setColor('green');
        const shape = userChoice.render();
        expect(shape).toBe(`<rect x="90" y="90" width="100" height="100" fill="green" />`);
    });
});


describe('circle', ()=> {
    it('should return code that creates a circle', () => {
        const userShape = new circle();
        shape.setColor('blue');
        const shape = userShape.render();
        expect(shape).toBe(`<circle cx="75" cy="75" r="30" fill="blue" />`);

    });
});

describe('triangle', () => {
    it('should return code that creates a triangle', () => {
        const userShape = new triangle();
        shape.setColor('red');
        const shape = userShape.render();
        expect(shape).toBe(`<polygon points="150,25 250,150 50,150" fill="red" `);
    });
});
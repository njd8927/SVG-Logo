const shapes = require('./shapes.js');

describe('square', () => {
    it('should return code that creates a square', () => {
        const userChoice = new square();
        shape.setColor('green');
        const shape = userChoice.render();
        expect(shape).toBe(`<rect x="10" y="10" width="30" height="30" fill="green" />`);
    });
});


describe('circle', ()=> {
    it('should return code that creates a circle', () => {
        const userChoice = new circle();
        shape.setColor('blue');
        const shape = userChoice.render();
        expect(shape).toBe(`<circle cx="25" cy="75" r="20" fill="blue" />`);

    });
});

describe('triangle', () => {
    it('should return code that creates a triangle', () => {
        const userChoice = new triangle();
        shape.setColor('red');
        const shape = userChoice.render();
        expect(shape).toBe(`<polygon points="150,50 200,100 75,125" fill="red" `);
    });
});
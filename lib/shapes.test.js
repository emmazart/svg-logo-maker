//Arrange, Act, Assert

const { Triangle, Square, Circle } = require('./shapes.js');

// test provided by the acceptance criteria
describe('Shape', () => {

    describe('Triangle', () => {
        it('should create a new triangle', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })

    describe('Square', () => {
        it('should create a new square', () => {
            const shape = new Square();
            shape.setColor('green');
            expect(shape.render()).toEqual('<rect x="10" y="10" width="30" height="30" fill="green"/>');
        })
    })

    describe('Circle', () => {
        it('should create a new circle', () => {
            const shape = new Circle();
            shape.setColor('yellow');
            expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="yellow"/>');
        })
    })

})
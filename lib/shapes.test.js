const { Triangle } = require('./shapes.js');

// test provided by the acceptance criteria
describe('Shape', () => {
    describe('Triangle', () => {
        it('should create a new triangle', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

        })
    })
})
const Pet = require("../src/my-pet");


describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    const baby = new Pet('Fido');
    it('gives the pet a name', () => {
        expect(baby.name).toBe('Fido');
    })
});
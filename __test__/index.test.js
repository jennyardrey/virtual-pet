const Pet = require("../src/my-pet");


describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    const baby = new Pet('Fido');
    it('gives the pet a name', () => {
        expect(baby.name).toBe('Fido');
    });
});

describe('constructor', () => {
    const baby = new Pet('Fido');
    it('has an initial age of 0', () => {
        expect(baby.age).toEqual(0);
    });
});

describe('growUp', () => {
    it('increases age in increments of 1', () => {
        const baby = new Pet('Fido');
        baby.growUp();
        expect(baby.age).toEqual(1);
        expect(baby.hunger).toEqual(5);
        expect(baby.fitness).toEqual(7);
    });
});
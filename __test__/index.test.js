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

describe('walk', () => {
    const baby = new Pet('Fido');
    it('increases fitness by 4', () => {
        baby.growUp();
        baby.growUp();
        baby.walk();
        expect(baby.fitness).toEqual(8);
    })
    it('never increases past 10', () => {
        baby.growUp();     
        baby.walk();
        baby.walk();
        expect(baby.fitness).toEqual(10);
    })
})

describe('fee', () => {
    const baby = new Pet('Fido');
    it('decreases hunger by 3', () => {
        baby.growUp();
        baby.feed();
        expect(baby.hunger).toEqual(2);
    })
    it('doesnt allow hunger to go below 0', () => {
        baby.hunger = 2;
        baby.feed();
        expect(baby.hunger).toEqual(0);
    })
})
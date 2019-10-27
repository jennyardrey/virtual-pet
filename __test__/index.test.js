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
    it('throws an error if the pet is DEAD', () => {
        const baby = new Pet('Fido');
        baby.age = 31;
        expect(() => baby.growUp()).toThrow('Your pet is DEAD!');
    })
});

describe('walk', () => {
    
    it('increases fitness by 4', () => {
        const baby = new Pet('Fido');
        baby.fitness = 4;
        baby.walk();
        expect(baby.fitness).toEqual(8);
    })
    it('never increases past 10', () => {
        const baby = new Pet('Fido');
        baby.fitness = 9;
        baby.walk();
        expect(baby.fitness).toEqual(10);
    })
    it('throws an error if the pet is DEAD', () => {
        const baby = new Pet('Fido');
        baby.fitness = 0;
        expect(() => baby.walk()).toThrow('Your pet is DEAD!');
    })
})

describe('feed', () => {
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
    it('throws an error if the pet is DEAD', () => {
        baby.age = 30;
        expect(() => baby.feed()).toThrow('Your pet is DEAD!');
    })
})

describe('checkUp', () => {
    const baby = new Pet('Fido');
    it('tells if baby is unfit', () => {
        baby.fitness = 2;
        baby.hunger = 0;
        baby.checkUp();
        expect(baby.checkUp()).toBe('I need a walk');
    })
    it('tells if baby is hungry', () => {
        baby.hunger = 7;
        baby.fitness = 9;
        baby.checkUp();
        expect(baby.checkUp()).toBe('I am hungry');
    })
    it('tells if baby is unfit and hungry', () => {
        baby.fitness = 2;
        baby.hunger = 7;
        baby.checkUp();
        expect(baby.checkUp()).toBe('I am hungry AND I need a walk');
    })
    it('tells if baby is perfectly fine thank you very much', () => {
        baby.fitness = 8;
        baby.hunger = 1;
        expect(baby.checkUp()).toBe('I feel great!');
    })
    it('tells if baby is no longer with us', () => {
        baby.fitness = 0;
        baby.hunger = 10;
        baby.age = 30;
        expect(() => baby.checkUp()).toThrow('Your pet is DEAD!');
    })
    
})

/* if the pet's fitness is 0 or less, it should return false.

if the pet's hunger is 10 or more, it should return false.

if the pet's age is 30 or more, it should return false.

otherwise it should return true. */

describe('isAlive', () => {
    let baby;
    beforeEach(() => {
        baby = new Pet('Fido');
    })
    
    it('tells if the baby is alive or dead', () => {
        
        expect(baby.isAlive).toBe(true);
    })
    it('tells if the baby is alive or dead', () => {
        baby.hunger = 11;
        
        expect(baby.isAlive).toBe(false);
    })
    it('tells if the baby is alive or dead', () => {
        baby.age = 31;
        
        expect(baby.isAlive).toBe(false);
    })
    it('tells if the baby is alive or dead', () => {
        baby.fitness = 5;
        baby.hunger = 5;
        baby.age = 5;
        
        expect(baby.isAlive).toBe(true);
    })
})

describe('haveBaby', () => {
    const baby = new Pet('Fido');
    baby.haveBaby('Jenny')
    console.log(baby.children);
    it('creates baby inside parent', () => {
        expect(baby.children).toBeInstanceOf(Array);
    })
    
})

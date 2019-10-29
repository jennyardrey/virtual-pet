const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const HUNGRY = 'I am hungry';
const UNFIT = 'I need a walk';
const HUNGRY_UNFIT = 'I am hungry AND I need a walk';
const ALL_FINE = 'I feel great!';
const DEAD_PETS = 'Your pet is DEAD!';
// let children = [];


function Pet (name) {
    this.name = name
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;
    this.children = [];
}

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
    
}

/*    Pet.prototype.isAlive = function() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
} */

Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error(DEAD_PETS);
    } else  {
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    };
};

Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error(DEAD_PETS);
    }
    if (this.fitness + 4 <= MAXIMUM_FITNESS) {
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
};

Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error(DEAD_PETS);
    }
    if (this.hunger - 3 > MINIMUM_HUNGER) {
        this.hunger -= 3;
    } else {
        this.hunger = MINIMUM_HUNGER;
    }
}
/* Pet.prototype.checkUp = function() {
    return !this.isAlive ? new Error(DEAD_PETS)
    : this.fitness <= 3 && this.hunger >= 5 ? HUNGRY_UNFIT
    : this.fitness <= 3 ? UNFIT
    : this.hunger >= 5 ? HUNGRY
    : ALL_FINE 
} */



Pet.prototype.checkUp = function() {
    if (!this.isAlive) {
        throw new Error(DEAD_PETS)
    }  if (this.fitness <= 3 && this.hunger >= 5) {
        return HUNGRY_UNFIT;
    }  if (this.fitness <= 3) {
        return UNFIT;
    } if (this.hunger >= 5) {
        return HUNGRY;
    } else { return ALL_FINE };
}
// children = [];
Pet.prototype.haveBaby = function(babyName) {
    
    const child = new Pet(babyName);
    child.parent = this.name;
    this.children.push(child.name);
}   


//if i put children array inside function it resets everytime its run
//and so only ever has the latest child in the array


// Pet.prototype.children = [];
//if i put the children array outside the function, all the babies 
//have the children in their thing as well even thought they arent the parent







module.exports = Pet;
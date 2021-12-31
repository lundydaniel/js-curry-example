console.log('Connected');

//! Making a Cephalopod

//** Building out a function to differentiate what type of Cephalopod it is. */

function buildAppendages(numArms) {
    return function(hasSuckers) {
        let suckerState = "with no suckers";
        if (hasSuckers == true) {
            return function(suckerLocation) {
                if (suckerLocation == "ends") {
                    suckerState = "with sucker at the ends"
                    return `${numArms} tentacles ${suckerState}`;
                } else {
                    return `${numArms} arms`;
                }
            }
        } else {
            return `${numArms} tentacles ${suckerState}`;
        }
    }
}

let tentacles = buildAppendages(10)(true)("ends");
console.log(tentacles);
let arms = buildAppendages(8)(true)();
console.log(arms);

//** A function for building a Cephalopod */

function buildCephalopod(speciesName) {
    return function(hasShell) {
        return function(description) {
            return function(mood) {
                return function() {
                    let output = {};
                    output.name = speciesName;
                    output.hasShell = hasShell;
                    output.description = description;
                    output.mood = mood;
                    output.arms = arguments[0];
                    output.tentacles = arguments[1];
                    return output;
                }
            }
        }
    }
}

//** Building some Cephalopods */

let spirulida = buildCephalopod("Spirulida")(true)()()(buildAppendages(2)(true)(), buildAppendages(8)(true)("ends"));
console.log(spirulida);

let octopoda = buildCephalopod("Octopoda")(false)()()(buildAppendages(8)(true)(), "");
console.log(octopoda);

let philimenia = new buildCephalopod("Philimenia")(true)("I'm a Cephalopod that not many people know about. Mostly Because I live very deep in the ocean.")(0.7)(buildAppendages(0)(true)(), buildAppendages(300)(true)("ends"));
console.log(philimenia);

let maniafuego = buildCephalopod("Maniafuego")(false)("If you don't want to be set on fire stay away from my sting. I'm an unknown poisonous Myriapoda Cephalopod.")(0.2)(buildAppendages(1000)(true)(), buildAppendages(1000)(true)("ends"));
console.log(maniafuego);

//** Creating a function that will create another Cephalopod, take in a name, calculate if the mood is greater or equal to math.random. If mood is less, the cephalopod will not want to be pet. */

function petCephalopod() {
    let cephName = this.name;
    if (this.mood >= Math.random() * 1) {
        return `${cephName}'s mood is ${this.mood} and loved that pet.`;
    } else {
        if (this.mood < Math.random() * 1) {
            return `${cephName}'s mood is ${this.mood} and did not like that pet at all. I'd watch out if I were you.`;
        }
    }
}

//** Using bind, call and apply for show examples of its use. */

let myCeph = petCephalopod.bind(maniafuego);
console.log(myCeph());
console.log(petCephalopod.call(maniafuego));
console.log(petCephalopod.apply(maniafuego));

let mySecondCeph = petCephalopod.bind(philimenia);
console.log(mySecondCeph());
console.log(petCephalopod.call(philimenia));
console.log(petCephalopod.apply(philimenia));
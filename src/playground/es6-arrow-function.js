
// arguments object no longer works
const createArr = function(a, b) {
    console.log(arguments);
}

// the following will not work
// const createArrTwo = (a, b) => {
//     console.log(arguments);
// }

// 'this' keyword no longer bounds 
const user = {
    name: 'Hugh',
    cities: ['Boston', 'Ho Chi Minh City', 'Providence', 'Sydney', 'Worcester'],
    printPlacesLived() {
        this.cities.forEach(city => {
            console.log(`${this.name} has lived in ${city}`)
        });
    }
};

// the following will not work because this.cities and this.name no longer bound to the userTwo object
// const userTwo = {
//     name: 'Hugh',
//     cities: ['Boston', 'Ho Chi Minh City', 'Providence', 'Sydney', 'Worcester'],
//     printPlacesLived: () => {
//         this.cities.forEach(city => {
//             console.log(`${this.name} has lived in ${city}`)
//         });
//     }
// };

// user.printPlacesLived();

const multiplier = {
    numbers: [1, 5, 7, 10, 17, 24, 33],
    multiplier: 2,
    multiply() {
        return this.numbers.map(number => number * this.multiplier);
    }
};

console.log(multiplier.multiply());

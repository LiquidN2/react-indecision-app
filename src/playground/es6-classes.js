class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I am ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major; // !!undefined -> false
    }

    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += ` I studied ${this.major}`;
        }
        return description;
    }
}


class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getDescription() {
        let description = super.getDescription();
        if(this.hasHomeLocation()) {
            description += ` I'm visting from ${this.homeLocation}`;
        }
        return description;
    }
}

const me = new Person('Hugh', 33);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());

const student = new Student('Hugh', 33, 'Biochem');
console.log(student.hasMajor());
console.log(student.getDescription());

const traveler = new Traveler('Hugh', 33, 'Sydney');
console.log(traveler.getDescription());
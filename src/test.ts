console.log("helloWorld");

class Human {
    public name: string;
    private age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human("lynn", 18, "femane");
console.log(lynn)



const name = "elbum",
    age = 24, gender = "male";

// let sayHi = (name, age, gender?): string => {
//     return `Hello ${name}, you are ${age} , and you are ${gender}`;

// };

let sayHi = (person: Human): void => {
    console.log(`Hello ${person.name}, you are ${age} , and you are ${gender}`);

};

// sayHi(name, age, gender);
// sayHi(name, age);
// sayHi("hello", "24", "female");   // type

sayHi(lynn);

export { };





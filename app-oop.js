class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age || 1;
  }
  walk() { // method
    console.log(`${this.name} is walking`);
  }
  run() { // method
    console.log(`${this.name} is running`);
  }
}

class Employee extends Human { // class turunan
  constructor(name, age, profession, salary) {
    super(name, age);
    this.profession = profession;
    this.salary = salary;
  }
}
class Boss extends Human { // class turunan
  constructor(name, age, power, income) {
    super(name, age);
    this.power = power;
    this.income = income;
  }
}

const dedek = new Human("Dedek", 26);
const fuad = new Employee("Fuad", 23, "Developer", 9999);
const dody = new Boss("Dody", 31, "Goreng Gorengan", 1323244);

console.log(dedek);
console.log(fuad);
console.log(dody);

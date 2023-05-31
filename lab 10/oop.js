
class GameCharacter {
  constructor(name, type, level) {
    this.name = name;
    this.type = type;
    this.level = level;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getType() {
    return this.type;
  }

  setType(type) {
    this.type = type;
  }

  getLevel() {
    return this.level;
  }

  setLevel(level) {
    this.level = level;
  }

  move(x, y) {
    console.log(`${this.name} рухається до координат (${x}, ${y}).`);
  }
}


class Warrior extends GameCharacter {
  constructor(name, level) {
    super(name, "Воїн", level);
  }
}

class Mage extends GameCharacter {
  constructor(name, level) {
    super(name, "Маг", level);
  }
}


const character = new GameCharacter("Джон", "Лицар", 5);
console.log(character.getName());  
character.setType("Паладін");
console.log(character.getType());  
character.move(10, 20);  

const warrior = new Warrior("Артур", 3);
console.log(warrior.getType());  

const mage = new Mage("Мерлін", 8);
console.log(mage.getLevel()); 



function Car(brand, model, year, color) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.color = color;
}


Car.prototype.getBrand = function() {
  return this.brand;
}

Car.prototype.getModel = function() {
  return this.model;
}

Car.prototype.getYear = function() {
  return this.year;
}

Car.prototype.getColor = function() {
  return this.color;
}

Car.prototype.setColor = function(color) {
  this.color = color;
}

Car.prototype.move = function(x, y) {
  console.log(`${this.brand} ${this.model} рухається до координат (${x}, ${y}).`);
}


const car = new Car("Toyota", "Camry", 2022, "Срібний");
console.log(car.getBrand());  
console.log(car.getModel()); 
console.log(car.getYear());   
console.log(car.getColor()); 
car.setColor("Червоний");
console.log(car.getColor()); 
car.move(50, 60);  




const boundMove = car.move.bind(car);
boundMove(70, 80); 


car.move.call({ brand: "BMW", model: "X5" }, 90, 100); 


car.move.apply({ brand: "Mercedes", model: "E-Class" }, [110, 120]);  
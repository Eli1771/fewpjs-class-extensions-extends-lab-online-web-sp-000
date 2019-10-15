// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  
  get countSides() {
    return this.sides.length;
  }
  
  get perimeter() {
    return this.sides.reduce((total, side) => total + side);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3) {
      console.log('has three sides!');
      console.log('1: ' + this.sides[0]);
      console.log('2: ' + this.sides[1]);
      console.log('3: ' + this.sides[2]);
    }
  }
}
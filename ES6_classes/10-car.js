export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') {
      throw TypeError('brand must be string');
    }
    if (typeof motor !== 'string') {
      throw TypeError('motor must be string');
    }
    if (typeof color !== 'string') {
      throw TypeError('color must be string');
    }
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand
  }

  set brand(value) {
    if (typeof value !== 'string') {
      throw TypeError('value must be string');
    }
    this._brand = value;
  }

  get motor() {
    return this._motor
  }

  set motor(value) {
    if (typeof value !== 'string') {
      throw TypeError('value must be string');
    }
    this._motor = value;
  }

  get color() {
    return this._color
  }

  set color(value) {
    if (typeof value !== 'string') {
      throw TypeError('value must be string');
    }
    this._color = value;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}

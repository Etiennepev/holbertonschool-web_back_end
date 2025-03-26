export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('sqft must be a number');
    }
    if (new.target === Building) {
      throw new Error('Building is an abstact class and can\'t be instantiated directly');
    }
    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }
  get sqft() {
    return this._sqft;
  }
  evacuationWarningMessage() {
    return `Evacuate ${this._floor} slowly`
  }
}

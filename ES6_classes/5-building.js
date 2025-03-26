export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('sqft must be a number');
    }
    this._sqft = sqft;
    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
  get sqft() {
    return this._sqft;
  }
  evacuationWarningMessage() {
    return `Evacuate ${this._floor} floor slowly`;
  }
}

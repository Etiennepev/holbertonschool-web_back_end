import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount,
    this.currency = currency
  }
  
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new Error('amount must be a number')
    }
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new Error('currency must be an instance of Currency')
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this.currency.code})`
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new error('amount must be a number')
    }
    if (typeof conversionRate !== 'number') {
      throw new error('conversionRate must be a number')
    }
    return (amount * conversionRate)
  }
}

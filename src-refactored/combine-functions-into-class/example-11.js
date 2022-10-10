// 函数组合成类

// 单条数据范例： { quantity: 10, month: 9, year: 2022 }

// 这是一个mock函数，代表当前客户端返回的用户数据，无需更改
function acquireReading() {
  return { quantity: 10, month: 9, year: 2022 };
}

// 这是计算基础数据的函数
function baseRate(month, year) {
  if (month && year) {
    return 0.2;
  }
  throw new Error('params invalidate');
}

// 获取每年的免税额度, 固定为1元及以下免税
function taxThreshold(year) {
  if (year) {
    return 1;
  }
}

class Reading {
  constructor(data) {
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }

  get quantity() {
    return this._quantity;
  }

  get month() {
    return this._month;
  }

  get year() {
    return this._year;
  }

  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }

  get taxableCharge() {
    return Math.max(0, this.baseCharge - taxThreshold(this.year))
  }
}

// 客户端
const aReading = acquireReading();
const reading = new Reading(aReading);
const taxableCharge = reading.taxableCharge;

// test
console.log(taxableCharge);
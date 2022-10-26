// 封装记录-封装嵌套记录
// 重构后
import _ from 'lodash'

const Data={
    "1920": {
        name: "martin",
        id: "1920",
        //利用率
        usages: {
            "2016": {
                "1": 50,
                "2": 55,
                // remaining months of the year
            },
            "2015": {
                "1": 70,
                "2": 63,
                // remaining months of the year
            }
        }
    },
    "38673": {
        name: "neal",
        id: "38673",
        usages: {
            "2016": {
                "1": 50,
                "2": 55,
                // remaining months of the year
            },
            "2015": {
                "1": 70,
                "2": 63,
                // remaining months of the year
            }
        }
    }
}
const amount=10;
let customerData=null;
class CustomerData {
  constructor(data) {
    this._data = data;
  }
  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }
  get rawData() {
    return _.cloneDeep(this._data);
  }
  usage(customerID, year, month) {
    return this._data[customerID].usages[year][month];
  }
}
function getCustomerData() {
  return customerData;
}
function getRawDataOfCustomers() {
  return customerData.rawData;
}
function setRawDataOfCustomers(arg) {
  customerData = new CustomerData(arg);
}
setRawDataOfCustomers(Data)

//读取的例子
function compareUsage(customerID, laterYear, month) {
  const later = getCustomerData().rawData[customerID].usages[laterYear][month];
  const earlier = getCustomerData().rawData[customerID].usages[laterYear - 1][
    month
  ];
  return { laterAmount: later, change: later - earlier };
}
//更新的例子
getCustomerData().setUsage("1920", "2016", "1", amount);
console.log(compareUsage("1920","2016","1"))
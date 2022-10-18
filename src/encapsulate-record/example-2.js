// 封装记录-封装嵌套记录
// 重构前
import _ from 'lodash'

const customerData={
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
//读取的例子
function compareUsage(customerID, laterYear, month) {
    const later = customerData[customerID].usages[laterYear][month];
    const earlier = customerData[customerID].usages[laterYear - 1][month];
    return { laterAmount: later, change: later - earlier };
}
//更新的例子
customerData["1920"].usages["2016"]["1"] = amount;
console.log(compareUsage("1920","2016","1"))
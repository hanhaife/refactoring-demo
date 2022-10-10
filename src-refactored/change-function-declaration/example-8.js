// 把参数改为属性
function NEWinNewEngland(stateCode) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

// test
console.log(
  NEWinNewEngland("MA")
);
console.log(
  NEWinNewEngland("KK")
);
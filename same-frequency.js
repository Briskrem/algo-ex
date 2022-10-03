// add whatever parameters you deem necessary
function sameFrequency(num, num2) {
    let str1 = num.toString();
    let str2 = num2.toString();
    let table1 = {}
    let table2 = {}
  
    for (let i = 0; i < str1.length; i++) {
      table1[str1[i]] = (table1[str1[i]] || 0) + 1;
    }
    for (let j = 0; j < str2.length; j++) {
      table2[str2[j]] = (table2[str2[j]] || 0) + 1;
    }
    for (let key in table1) {
      if (table1[key] !== table2[key]) return false;
    }
    return true
}

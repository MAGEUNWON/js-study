"use strict";
let check = 100000;
let payPrice = 34830;
let restMoney = 65170; //15170 
let money = 50000;
let money2 = 10000;
function change_moneys(a, b) {
    const num = a % b;
    if (num === 0) {
        console.log(false);
        // 50000 * 나머지(정수)
        // restMoney - 50000 
        // 결과 값 출력 (15710) 
    }
    else {
        console.log(true);
        let restMoney2 = Math.floor(num);
        console.log(restMoney2);
        let temp = restMoney;
        restMoney = restMoney2;
        restMoney2 = restMoney;
        money = money2;
        money2 = money;
        console.log(restMoney, money);
    }
}
change_moneys(restMoney, money);

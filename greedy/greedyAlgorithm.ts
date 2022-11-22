let check :number = 100000
let payPrice : number= 34830
let restMoney : number= 65170; //15170 
let money :number = 50000;
let money2 : number = 10000; 




  function change_moneys(a :number, b :number){
    const num :number = a % b
    if (num === 0){
      console.log(false)
      // 50000 * 나머지(정수)
      // restMoney - 50000 
      // 결과 값 출력 (15710) 
    }else{
      console.log(true)
      let restMoney2 :number = Math.floor(num);
      console.log(restMoney2)
      let temp : number= restMoney;
      restMoney = restMoney2
      restMoney2 = restMoney
      money = money2
      money2 = money
      console.log(restMoney, money)
      
    }
    
  }




change_moneys(restMoney, money)

import math

check = 100000
payPrice = 34830
restMoney = 65170;
money = 50000;
money2 = 10000; 




def change_money(a, b) :
    num = a % b
    if num == 0 :
        print('false')
      
    else:
        print('true')
        restMoney2 = math.floor(num);
        print(restMoney2)
        restMoney = 65170;
        money = 50000;
        money2 = 10000; 
        temp = restMoney
        restMoney = restMoney2
        restMoney2 = restMoney
        money = money2
        money2 = money
        print(restMoney, money)
      


change_money(restMoney, money)

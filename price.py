class fix:
    value = []

    def info(self, fix1, fix2, fix3):
        self.fix1 = fix1
        self.fix2 = fix2
        self.fix3 = fix3
        print('{0}, {1}, {2}'.format(self.fix1, self.fix2, self.fix3))

        # fix.value.append(fix4)
        # print('{}'.format(fix.value))

    def info2(self, fix1, fix2, fix3):
        self.fix1 = fix1
        self.fix2 = fix2
        self.fix3 = fix3
        print('{0}, {1}, {2}'.format(self.fix1, self.fix2, self.fix3))

price = fix()


price.info('출퇴근비용 : {카카오톡자전거 : 1500원, 택시 : 3500원}', '커피 : {엔시나 : 4500원, 카누 : 200원}', '고양이간식 : {닭고기 : 400원, 락토프리우유 : 800원}' )

price.info2('출퇴근비용 : {카카오톡자전거 : 19회, 택시 : 3회}', '커피 : {엔시나 : 6잔, 카누 : 15잔}', '고양이간식 : {닭고기 : 30개, 락토프리우유 : 2개}')
# 이렇게 만드는게 맞나??? 근데 info 전체를 다시 객체로 묶어야하나??

# class price:
    
#     def cost(self, item1, item2, item3, item4, item5, item6):
#         self.item1 = item1
#         self.item2 = item2
#         self.item3 = item3
#         self.item4 = item4
#         self.item5 = item5
#         self.item6 = item6
#         print('{0}, {1}, {2}, {3}, {4}, {5}'.format(self.item1, self.item2, self.item3, self.item4, self.item5, self.item6))

    
#     def count(self, item1, item2, item3, item4, item5, item6):
#         self.item1 = item1
#         self.item2 = item2
#         self.item3 = item3
#         self.item4 = item4
#         self.item5 = item5
#         self.item6 = item6
#         print('{0}, {1}, {2}, {3}, {4}, {5}'.format(self.item1, self.item2, self.item3, self.item4, self.item5, self.item6))


# cost = price()

# cost.cost('kakao : 1500', 'taxi : 3500', 'cafe : 4500', 'cano : 200', 'chicken : 400', 'milk : 800')

# cost.count('kakao : 19', 'taxi : 3', 'cafe : 6', 'cano : 15', 'chicken : 30', 'milk : 2')
# 얘는 문자형이라 숫자 계산을 할 수가 없네 


kakaoCost = 1500
taxiCost = 3500
cafeCost = 4500
canoCost = 200
chickenCost = 400
milkCost = 800
#  숫자형으로 어떻게 하나로 묶을 수 있을까

kakaoCount = 19
taxiCount = 3
cafeCount = 6
canoCount = 15
chickenCount = 30
milkCount = 2
#  숫자형으로 어떻게 하나로 묶을 수 있을까

cal = (kakaoCost * kakaoCount) + + (taxiCost * taxiCount) + (cafeCost * cafeCount) + (canoCost * canoCost) + (chickenCost * chickenCount) + (milkCost * milkCount)

fixedExpenses = 100000 #고정지출 예산
gamePrice  = 64800 #게임가격
restPrice = fixedExpenses - gamePrice #게임사면 남는 돈
totalRest = fixedExpenses - cal #고정지출 예산 = 총 고정지출 비용
saveCost = gamePrice - totalRest #게임 사려면 더 필요한 돈

def commingsoon():
    for i in cafeCount:
      # cafeCount가 왜 숫자로 처리되는지 모르겠음.
        if(saveCost - (cafeCost * i) + (canoCost * (canoCount + i)) > 0):
          a = (saveCost - (cafeCost*i) + (canoCost * canoCount +i))
          print(f'게임을 사기까지 {a} 이 부족합니다')
        else :print(f'게임을 살 수 있습니다.')

commingsoon()
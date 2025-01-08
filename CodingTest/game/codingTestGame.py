import math


gold = 1 //0.5
silver = gold * 4 
copper = gold * 32 
silverLeather = silver / 2 
leatehr  = gold / (silver / 2) 
totalLeather = 45
totalLeatherSilver = totalLeather * 2

def game_money() :
    
    totalGold = totalLeatherSilver / 4 
    hourGold =  totalGold / 8 
    totalCopper = (totalGold%1)*32 
    hourCopper = (hourGold%1)*32 

    print("이날 공미남 플레이어가 한시간 동안 플레이로 얻은 gold의 갯수는" + str (math.floor(hourGold)) + "입니다. gold를 제외한 나머지 값어치는 모두 copper로 바꾸어놓아, 총" + str (math.floor(hourCopper)) + "개의 copper를 챙겼습니다. 공미남 플레이어는 한시간으로 게임을 끝내지 않고 장장 8시간 플레이하여 총" + str(math.floor(totalGold)) + "gold,"+ str(math.floor(totalCopper)) + "copper를 얻었습니다.")

game_money()

    
import random  #랜덤 숫자뽑기 하려고 import

zeroArray = [[0 for col in range(10) ] for row in range(5)]
print(zeroArray)
# 근데 이렇게 구하면 변수 선언은 어떻게 해야하지?

def sol(string):
    answer = None
    stack = []
    for i in range(len(string)):
        stack.append(string[i])
        if stack[stack.index-1] == stack[stack.index-2]: #이건 파이썬으로 어떻게 표현해야 할지 모르겠음
          stack.pop()
          stack.pop()
    if stack.index == 0 | 1:
      return answer

randomNum = random.randint(1,100) 
# print(randomNum)
# bin = bin(randomNum) 이렇게 하면 2진수로 변하긴 하지만 숫자 앞에 ob가 붙음
bin = format(randomNum, 'b') #이렇게 해주면 2진수로 바꾸는데 ob빼고 숫자만 나옴, 근데 반환값은 문자열임
print(len(bin))

print(sol(bin))

if sol(bin) ==1:
    randomIndex1 = random.randint(1, 10)
    randomIndex2 = random.randint(1, 10)
    randomIndex3 = random.randint(1, 10)
    randomIndex4 = random.randint(1, 10)
    randomIndex5 = random.randint(1, 10)

#위에 zeroArray 배열들 변수 선언한거 가져오지 
  
import random #배열 랜덤으로 하려고 import함

fromInput = " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) "

fromInputReplace = fromInput.replace(" ", "") #문자열 공백 없이 합침
print({fromInputReplace})

srtLower = fromInputReplace.lower()
print(srtLower)
#대문자 소문자로 바꿈


list = list(srtLower) #배열로 변경
print(list)

count = {} #각 음절 횟수 카운팅할 딕셔너리
for i in list:
    try:
      count[i] +=1  #이미 등장한 값
    except:
      count[i] = 1 #처음 등장한 값
print(count) #객체로 어떤 알파벳이 몇 번 쓰였는지 나옴

values = count.values() #값만 추출함
print(values)

maxNum = max(values)
print(maxNum)
minNum = min(values)
print(minNum)

substraction = maxNum - minNum
print(substraction)

repeatList = []
for i in range(substraction):
  repeatList.append('i') #i를 최대값-최소값 한만큼 빈 배열에 넣음
# print(repeatList)

# print(list)

list.extend(repeatList) #원래 배열과 i추가한 배열 합침
# print(list)

random.shuffle(list)
print(list) #합친 배열 랜덤으로 재정렬

joinList = "".join(list)
# print(joinList)
#문자열을 합침

length = 5
fiveChunk = [joinList[i:i+length] for i in range(0, len(joinList), length)]
print(fiveChunk)

# 5 글자씩 출력

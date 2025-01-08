import matplotlib.pyplot as plt
import numpy as np

x = np.arange(10) #주어진 범위와 간격에 따라 균일한 값을 갖는 배열 반환
day = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] #x축에 표시될 값
kdt_invest = [2003, 1980, 1989, 1995, 2003, 2007, 2001, 2003, 1970, 1995]
# values = [1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010]
#막대 그래프의 y값
color = ["yellow", "coral", "blue", "pink", "green", "red", "orange", "black", "purple", "skyblue"]

plt.bar(x, kdt_invest)
plt.xticks(x, day)
plt.bar(day, kdt_invest, color = color)
plt.ylim(1920, 2010)

plt.show()
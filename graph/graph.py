import matplotlib.pyplot as plt
import numpy as np

x = np.arange(10)
years = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
values = [1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010]

plt.bar(x, values)
plt.xticks(x, years)

plt.show()
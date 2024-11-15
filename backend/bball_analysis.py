import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns
from matplotlib.pyplot import figure

pd.set_option('display.max_columns', None)

df_unp = pd.read_csv('duke_mbb_players.csv')
#rename AVG to AVG points
df = df_unp.rename(columns={'AVG':'AVG points'})

#print(df['Player + Year'])

ppg_sorted_df = df.sort_values(by = 'AVG points', ascending = False)
print(ppg_sorted_df[['Player + Year', 'AVG points']])

top_ppg_players = ppg_sorted_df.head(5)
top_ppg_players.plot.bar(x = 'Player + Year', y = 'AVG points', figsize = (15,6))

# Set x-axis labels to horizontal
plt.xticks(rotation=0)

plt.xlabel('Player + Year')
plt.ylabel('Avg. points per game')
plt.title('Top 5 Scoring Duke MBB Players since 2016-17 season')

plt.show()
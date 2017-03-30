import csv
with open('WeekB.csv', 'r') as f:
	reader = csv.reader(f)
	l = list(reader)
JSON = {i[0]: i[1:] for i in l}
print(JSON)
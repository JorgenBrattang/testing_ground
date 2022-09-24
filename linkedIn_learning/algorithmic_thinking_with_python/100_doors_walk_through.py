doors = [False] * 11

for i in range(1, 11):
    for j in range(i, 11, i):
        print(f"i: {i}; j: {j} step size: {i}. Toggle door number {j}.")
        doors[j] = not doors[j]

for i in range(1, 11):
    if doors[i] is True:
        print(f"Door number {i} remains open.")
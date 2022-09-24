# Creates the array of 100 doors (+1)
doors = [False] * 101

# Here we take the range from 1 to 101 which eliminates the extra one
# So We only have 100 doors that are set to False
for i in range(1, 101):
    # Here we move on to our inner for loop that's using the index (i)
    # To increment the inner for loop by 1 each pass, so you can do a
    # pass for each door and skip the 2nd, 3rd, 4th etc... until you reach
    # The final pass where you only check the 100th door.
    for j in range(i, 101, i):
        # This code flips the door from example False to True and vice versa
        doors[j] = not doors[j]
# Here we go through the doors again and checks which onces are set to True
for i in range(1, 101):
    if doors[i] is True:
        # This handy little end= will give a output like this:
        # 1, 2, 3, etc...
        print(i, end=", ")

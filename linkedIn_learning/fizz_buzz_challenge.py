# If divisible by 3 Fizz
# If divisible by 5 Buzz
# If divisible by 15 FizzBuzz

# Long Version
for i in range(1, 16):
    if i % 5 == 0 and i % 3 == 0:
        i = "FizzBuzz"
    elif i % 5 == 0:
        i = "Buzz"
    elif i % 3 == 0:
        i = "Fizz"
    print(i)

# Short Version
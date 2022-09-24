"""Linear Search"""


def linear_search(data, target):
    """Finds the target using Linear Search"""
    for i, v in enumerate(data):
        if v == target:
            return i  # Early exit if item is found
    return -1


DATA = [4, 5, 2, 7, 1, 8]
TARGET = 1
result = linear_search(DATA, TARGET)
if result == -1:
    print("Item not found.")
else:
    print(f"Item found at position {result}.")

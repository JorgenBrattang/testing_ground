"""Find the minimum value"""


def find_min(data):
    """Finds the min value"""
    min_index = 0
    for i, v in enumerate(data):
        if v < data[min_index]:
            min_index = i
    return data[min_index]


xs = [3, 4, 6, 5, 5]
min_value = find_min(xs)
print(f"The minimium value is {min_value}.")

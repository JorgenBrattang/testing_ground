"""Leet code"""
# Square root every even number
# ------------------------------
# array = [17, 18, 5, 4, 6, 1]
# counter = 0
# for i, v in enumerate(array):
#     if counter % 2 == 0:
#         array[i] = v * v
#     counter += 1
# print(array)

# Replace Elements with Greatest Element on Right Side
# ------------------------------
# array = [17, 18, 5, 4, 6, 1]
# c = 0
# for i, v in enumerate(array):
#     c += 1
#     if c == len(array):
#         array[i] = -1
#         break
#     max_value = max(array[c:])
#     array[i] = max_value
# print(array)

# Remove duplicates
# ------------------------------
# dup_array = [1, 1, 2]
# Different way to solve it.
# # dup_array = list(dict.fromkeys(dup_array))
# dup_array = list(sorted(set(dup_array)))
# print(dup_array)

nums = [0,1,0,3,12]


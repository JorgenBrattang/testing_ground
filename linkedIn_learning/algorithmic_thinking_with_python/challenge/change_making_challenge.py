# Works but... Yeaahhh the one below is this but simplified
# def make_change(target_amount):
#     coins_used = []
#     while target_amount != 0:
#         if target_amount >= 200:
#             target_amount = target_amount - 200
#             coins_used.append(200)
#         elif target_amount >= 100:
#             target_amount = target_amount - 100
#             coins_used.append(100)
#         elif target_amount >= 50:
#             target_amount = target_amount - 50
#             coins_used.append(50)
#         elif target_amount >= 20:
#             target_amount = target_amount - 20
#             coins_used.append(20)
#         elif target_amount >= 10:
#             target_amount = target_amount - 10
#             coins_used.append(10)
#         elif target_amount >= 5:
#             target_amount = target_amount - 5
#             coins_used.append(5)
#         elif target_amount >= 2:
#             target_amount = target_amount - 2
#             coins_used.append(2)
#         elif target_amount >= 1:
#             target_amount = target_amount - 1
#             coins_used.append(1)
#         else:
#             break
#     return coins_used

def make_change(target_amount):
    denominations = [200, 100, 50, 20, 10, 5, 2, 1]  # Order is important here
    coin_count = 0  # Initialise count
    values = []  # Store values here
    for coin in denominations:
        while target_amount >= coin:  # Use the current coin until its value is to large
            target_amount -= coin  # Decrease the remaining amount
            values.append(coin)  # Make a note of which coin was coins_used
            coin_count += 1
    return coin_count, values


print(make_change(24))
print(make_change(163))

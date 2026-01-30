# The are multiple ways to effectively use for loops in python that do not exist in JS
# We will be going through the basics and the advanced applications/combinations possible with for loops
# First there are only 2 types of for loops for in and for range

fav_snack_foods = ["Pretzels", "Hummus", "Chesse", "Mangoes", "Salsa + Chips"]
# choose 5 items
annoying_word = "supercalifragilisticexpialidocious"

for some_variable in fav_snack_foods:
    print(some_variable)
# iterating through a list

for some_character in annoying_word:
    print(some_character)
# iterating through a string
# if you need to end a python for loop prematurely you need to use the break statement

for some_other_variable in fav_snack_foods:
    print(some_other_variable)
    if some_other_variable == "Mangoes":
        break
# if you need the loop to skip a value skip a step in the loop process use cotinue
for any_variable in fav_snack_foods:
    if any_variable == "Hummus":
        continue
    print(any_variable)
    # this will skip hummus from being printed as it will skip all code after this loop aka the print statement and move on to the next item in the list

# next type of for loop is in range()
for num in range(6):
    print(num)
    # in range there are several option for range to be used
    # range(number) -> counting 0 up to 5 which is 6 numbers
    # range(starting_number, ending_number) -> counting from start to end numbers given
    # range(starting_number, ending_number, step to count by)

for num2 in range(50, 60):
    print(num2)

for num3 in range(0, 100, 5):
    print(num3)

# else can be used in a for loop blovck when the loop is finished and the else block will be executed
for num4 in range(11):
    print(num4)
else:
    print("counting completed")

for num5 in range(11):
    if num5 == 4: break # you can do that in one line btw
    print(num5)

# in python all for loops must have content in them or they will error
# if you need to make an empty loop as a placeholder use the pass statement

for a_num in [1,2,3,4,5,6,7,8]:
    pass
print("it should work now")

for num_x in [1,2,3,4,5,6,7,8]:
    for num_y in [10,11,12,13,14,15,16,17,18,19]:
        print(num_x, num_y)
        
the_array = ["apple", "banana", "orange", "peach"]
the_list = [1, True, "defense", 5.43, ["reverse", 4.3, False]]


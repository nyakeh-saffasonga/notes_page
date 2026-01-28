print("hi")
type(20)


a = 5
b = "Beast"
c = "True"
d = [5,12,6,5,33]
e = 55

print ("In DOTA I am a " + b)
# comment
print(type(d))

the_message = """

i am a 
multi
line
code

"""

print(the_message)

name = "nyakeh"
age = 16
alive = True
fav_foods = ['mexican', "italian", 'chinese']

# this does not work : print(name + " " + age + " " + alive + " " + fav_foods)
#                            ~~~~~~~~~~~^~~~~

# the fix is:

print(name + " " + str(age) + " " + str(alive) + " " + str(fav_foods))

age_1 = 23
age_2 = 56

if (age_2 > 45):
    print("They OLD")
elif age < 30:
    print("Babies am I right")
else:
    print()


thing1 = False
number1 = 56

if thing1 or (number1 == 56):
    print("hi")
elif not thing1:
    print("uh oh")
else:
    print("bye")

name = input("yo")
age = 16
alive = True
fav_foods = ['mexican', "italian", 'chinese']

print("Hello," + name + "! I see you are the dumb one")
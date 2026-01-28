points = 0

answer = input("What is 1+1? ")

if answer == "2":
    print("Correct!")
    points = points + 1
else:
    print("Wrong!")


print(" ")



answer = input("What is 3*4? ")

if answer == "12":
    print("Correct!")
    points = points + 1
else:
    print("Wrong!")


print(" ")



answer = input("What is 7+9? ")

if answer == "16":
    print("Correct!")
    points = points + 1
else:
    print("Wrong!")

answer = input("What is 30/2? ")

if answer == "15":
    print("Correct!")
    points = points + 1
else:
    print("Wrong!")


print(" ")



answer = input("What is 17+15? ")

if answer == "32":
    print("Correct!")
    points = points + 1
else:
    print("Wrong!")


print(" ")



answer = input("What is 6+7? ")

if answer == "13":
    print("Correct!")
    points = points + 1
else:
    print("Wrong!")


print(" ")



answer = input("What is 10*10? ")

if answer == "100":
    print("Correct!")
    points = points + 1
else:
    print("Wrong!")


print(" ")



answer = input("What is 12*12? ")

if answer == "144":
    print("Correct!")
    points = points + 1
else:
    print("Wrong!")


print(" ")



answer = input("What is 100+650? ")

if answer == "750":
    print("Correct!")
    points = points + 1
else:
    print("Wrong!")


print(" ")



answer = input("What's 9+10? ")

if answer == "19":
    print("Correct!")
    points = points + 1
elif answer == "21":
    print("Wrong, but you're funny. I'll give you a point for that.")
    points = points + 1
else:
    print("Wrong!")


print(" ")





print("QUIZ RESULTS")
print("You got " + str(points) + "/10")

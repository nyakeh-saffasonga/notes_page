x = 4
result = ((2*x) - 3) ** 2
print("The value of (2x-3)² when x = 4 is " + str(result))

# --------------------------------------------------------------------

def foil(var1, number1, var2, number2):
    result = ""

    if str(var1) == str(var2):
        result += str(var1) + "² "
    else:
        result += str(var1) + str(var2) + " "

    if not str(var1) == str(var2):
        if int(number2) >= 0: 
            result += "+ " + str(number2) + str(var1) + " "
        else:
            result += "- " + str(abs(number2)) + str(var1) + " "

        print(result)
        
        if int(number1) >= 0: 
            result += "+ " + str(number1) + str(var2) + " "
        else:
            result += "- " + str(abs(number1)) + str(var2) + " "
    else:
        if (int(number1) + int(number2)) >= 0:
            result += "+ " + str(int(number1) + int(number2)) + str(var2) + " "
        else:
            result += "- " + str(abs(int(number1) + int(number2))) + str(var2) + " "

    if (int(number1) * int(number2)) >= 0:
        result += "+ " + str((int(number1) * int(number2)))
    else:
        result += "- " + str(abs((int(number1) * int(number2))))

    print(result)

foil("x", +5, "x", -2) # (x+5)(x-2)
foil("y", +5, "x", +3) # (y+5)(x+3)

# --------------------------------------------------------------------

def calculate_binomial(a, b, x):
    output = ((((int(a)*int(x))) + int(b)) ** 2)
    print("The value of the binomial (" + str(a) + "x + " + str(b) + ") when is " + str(x) + " is " + str(output))

calculate_binomial(2,-3,4) #(2x - 3)^2 when x is 4
calculate_binomial(3,-1,2) #(3x - 3)^2 when x is 2

    

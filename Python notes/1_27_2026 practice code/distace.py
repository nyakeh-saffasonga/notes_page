point1X = input("We are going to calculate distance between 2 points! Enter the X value for the 1st coordinate: ")
point1Y = input("Enter the Y value for the 1st coordinate: ")
point2X = input("Enter the X value for the 2nd coordinate: ")
point2Y = input("Enter the Y value for the 2nd coordinate: ")
distance = ((int(point2Y) - int(point1Y))**2 + (int(point2X) - int(point1X))**2)**0.5
print("The distance between those points is " + str(distance))
# A1 --------------------------------------------

s = "West-MEC Coding 2026!"

print(s[0]) # takes the character of the position 0, which is "W"
print(s[len(s) - 1]) # 
print(s[9:16]) #
print(s[16:(len(s) - 1)]) # 
print(s[0:(len(s) - 1)]) #

# A2 --------------------------------------------

raw = "   hElLo, WoRlD   "

print(raw.strip()[0].upper() + raw.strip()[1:len(raw)].lower()) #
print(raw.strip().upper()) #
print(raw.strip().lower()) #

# A3 --------------------------------------------

msg = "banana bread and banana smoothie"

print("Banana appears " + str(msg.count("banana")) + " times.") #
print("The word 'bread' is at position " + str(msg.find("bread")) + ".") #
print(msg.replace("smoothie", "muffin")) #


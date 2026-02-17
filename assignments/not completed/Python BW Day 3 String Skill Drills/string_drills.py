# A1 --------------------------------------------

s = "West-MEC Coding 2026!"

print(s[0]) # takes the character of the position 0, which is "W"
print(s[len(s) - 1]) # takes the character of the position that is one less than the length of the string, which is the last character of the string, which is "!"
print(s[9:16]) # takes the characters of the positions from 9 to 15, which is "Coding"
print(s[16:(len(s) - 1)]) # takes the characters of the positions from 16 to one less than the length of the string, which is from "2" to "6", which is "2026"
print(s[0:(len(s) - 1)]) # takes the characters of the positions from 0 to one less than the length of the string, which is from "W" to "!", which is the entire string except for the last character, which is "West-MEC Coding 2026"

# A2 --------------------------------------------

raw = "   hElLo, WoRlD   "

print(raw.strip()[0].upper() + raw.strip()[1:len(raw)].lower()) # takes the first character of the string after stripping leading and trailing whitespace, which is "h", converts it to uppercase, which is "H", then takes the rest of the characters of the string after stripping leading and trailing whitespace, which is "ElLo, WoRlD", converts it to lowercase, which is "ello, world", then concatenates the two parts together, which is "Hello, world"
print(raw.strip().upper()) # takes the entire string after stripping leading and trailing whitespace, which is "hElLo, WoRlD", converts it to uppercase, which is "HELLO, WORLD"
print(raw.strip().lower()) # takes the entire string after stripping leading and trailing whitespace, which is "hElLo, WoRlD", converts it to lowercase, which is "hello, world"

# A3 --------------------------------------------

msg = "banana bread and banana smoothie"

print("Banana appears " + str(msg.count("banana")) + " times.") # counts the number of times the substring "banana" appears in the string, which is 2, then converts that number to a string and concatenates it with the rest of the message, which is "Banana appears 2 times."
print("The word 'bread' is at position " + str(msg.find("bread")) + ".") # finds the position of the first occurrence of the substring "bread" in the string, which is 7, then converts that number to a string and concatenates it with the rest of the message, which is "The word 'bread' is at position 7."
print(msg.replace("smoothie", "muffin")) # replaces the first occurrence of the substring "smoothie" with the substring "muffin" in the string, which results in "banana bread and banana muffin"


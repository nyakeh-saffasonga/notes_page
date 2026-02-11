import re # regex

# return a list conatining every occurence of "ai":
# if nothing is found, an empty list is returned

txt = "The rain in Spain"
x = re.findall("ai", txt)
print(x)

# ------------------------------------------------------

x = re.search("Spain", txt)
print("The first white-space character is located in position:", x.start())
# returns none of there is nothing found


x = re.split("a", txt)
print(x)
# ['The r', 'in in Sp', 'in']

x = re.sub("\s", "9", txt, 2)
print(x)
# replaces the first 2 occurences of a white-space character with the digit 9

print(re.findall(r"\d{2}", "12345"))
# find every pair of 2 digits
# ['12', '34']


print(re.search(r"[0-9]{5}", "67892"))
print(re.search(r"\d{4}", "7890"))
print(re.findall(r"[a-zA-Z]", "a9d6h7"))

text = "apple banana 123"
s = re.findall(r"\d+", text)
print(s) # ['123']
s = re.findall(r"[aeiou]", "apple") 
print(s) # ['a', 'e']

pattern = r"\d{3}-\d{3}-\d{4}" # pattern for a phone number (3-3-4 grouping)
text = "My number is 555-655-7555"
s = re.search(pattern, text)
print(s) # "555-655-7555"

pattern = r"\d{3}" # or r"\d+", that would also work
text = "My room number is 204"
s = re.search(pattern, text)
print(s) # "204"

print(bool(re.search(r"\d{5}", "abc85004xyz")))
print(bool(re.search(r"^\d{5}$", "85004")))

print(bool(re.search(r"\w{5}$", "mumbai3321")))
print(bool(re.search(r"[a-zA-Z]{5}$", "mumbai3321")))

print(re.search(r"[a-zA-Z][a-zA-Z0-9_]{4,14}$", "cybersp_")) # username
print(re.search(r"^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}", "cybersp0101@gmail.com")) # email


# python strings use both '' and ""

# multiline strings
note = """
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
"""

print(note)

# in python string can also be considered arrays
new_note = "THis is a test of what can be done with python strings"
print(new_note[5])

# you can also loop through a string
for some_name in new_note:
    print(some_name)

# string also have the same property in JavaScript but instead of .length its len()
print(len(new_note))

# you can also ckeck to see if a string contains another string through print
print("python" in new_note)
# or
if "python" in new_note:
    print("yes python is present")
# you can also do the opposite
print("python" not in new_note)
# or
if "python" not in new_note:
    print("yes python is present")

# there are several methods for string in python much like JavaScript

# slicing -------------------------------
# slice from the beginning 
print(new_note[:15])
# slice from the end
print(new_note[15:])
# slice from the begnning to the end
print(new_note[5:15])
# just for certifications you can also use negative indexes as well, which will read FROM RIGHT TO LEFT
print(new_note[-10:-2])

print(new_note[::-1])
# this reverses the string. the syntax for this is [start:stop:step], where step is the incriments it counts by. by setting the start and stop to nothing, python defaults to taking the ENTIRE string. because the step is -1, it counts from backwards (because negative values go bakcwards and vice versa)


# basic changes to strings in python -------------------------------
# .lower() lowercases all string characters
# .upper() uppercases all string characters
# .strip() removes all whitespace from a string
# .capitalize() capitalizes only the first character in the string
# .swapcase() swaps lowercase and uppercase characters
# .title() capitalizes the first letter of each word
print(new_note.upper())
print(new_note.strip())

# replace is also a method in both but is better in python as it replaces all
random = "hdsjkghfkshhaskhdsahdfshisghdsikhgsdghasgkhfdash"
print(random.replace('h', 'j'))

# split works the same in python as it does in JavaScript
print(new_note.split(" "))

# strings or formated strings
name = "nyakeh"
print(f"this is how {name} creates a new string")

cost = 145
print(f"The total cose is {5 * cost:.2f}")
# sets the number of decimals

# some string will be quotes and need to use double quotes twice
print(f"This is a test if \"This was all a dream\" quotes")
# the are a few other options like the following are the most common you will use
#: \\ backslash     \n newline      \t tab      \b backspace

# string methods: search and check methods ------------------------
# find() - finds the first occurence and returns -1 if not found
# rfind() - finds the last occurence
# index() - like find but errors if not found
# rindex() - reverse index
# startswith() - checks prefix
# endswith() - check suffix
# count() - counts occurences

# string methods: character type checks ------------------------
# isalnum() - letters/numbers
# isalpha() - letters only
# isascii() - ASCII characters only
# isdecimal() - decimal characters
# isnumeric() - numeric characters
# islower() - is lowercase
# isupper() - is uppercase
# isspace() - whitespace only
# istitle() - title-cased
# isidentifier() - valid python identifier

# string methods




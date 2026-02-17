# C1 --------------------------------------------

def password_strength(pw: str) -> str:

    # make variables to keep track of whether the password contains a number, a letter, an uppercase letter, and a lowercase letter.

    hasNumber = False
    hasLetter = False
    hasUpper = False
    hasLower = False

    # loop through each character in the password and check if it is a number, a letter, an uppercase letter, or a lowercase letter.

    for i in pw:
        if i.isdigit(): hasNumber = True
        if i.isalpha(): hasLetter = True
        if i.isupper(): hasUpper = True
        if i.islower(): hasLower = True
        elif i.isascii(): pass

    if len(pw) < 8: # if the password is less than 8 characters long, it is considered weak regardless
        return "weak"
    elif (len(pw) < 12): # if the password is between 8 and 12 characters long, it is considered medium if it contains both a number and a letter, otherwise it is considered weak

        if hasNumber and hasLetter: 
            return "medium"
        else:
            return "weak"

    else: # if the password is 12 or more characters long, it is considered strong if it contains a number, a letter, an uppercase letter, and a lowercase letter, otherwise it is considered medium
        
        if hasNumber and hasLetter and hasUpper and hasLower: 
            return "strong"
        else: 
            return "medium"

print(password_strength("aA22asjdk_nbm"))
print(password_strength("Capital-1A"))
print(password_strength("thing_1"))

# C2 --------------------------------------------
            
def manual_split(text: str, delimiter: str) -> list[str]:

    words = [] # make a list to hold the words that will be created by splitting the text based on the delimiter
    nextAppend = "" # make a string to hold the next word that will be created by adding characters to it until the delimiter is reached, then add that word to the list of words and reset the next word string to be empty again

    for i in text: # 
        if i != delimiter: # if the current character is not the delimiter, add it to the next word string
            nextAppend += i
        else:
            if len(delimiter) > 0: # if the delimiter is not an empty string, add the next word string to the list of words and reset the next word string to be empty again.
                words.append(nextAppend)
                nextAppend = ""
            else: # if the delimiter is an empty string, then we want to split the text into individual characters, so we will add an empty string to the list of words for each occurrence of the delimiter (which is an empty string) in the text.
                words.append("")
    
    words.append(nextAppend) # after the loop is finished, we need to add the last word string to the list of words, since it will not have been added yet because it will not have been followed by a delimiter

    return words

print(manual_split("a,,b,", ","))
print(manual_split("coding is fun", " "))
print(manual_split("easter", "6"))

# C3 --------------------------------------------

def most_frequent_char(text: str) -> tuple[str, int]:

    mostFrequent = "" # make a variable to hold the most frequent character 
    mostFrequentCount = 0 # make a variable to hold the amount of the most frequent character

    for i in text:
        count = text.count(i)
        if count > mostFrequentCount: # if the count of the current character is greater than the count of the most frequent character, then we have a new most frequent character, so we will update the most frequent character and its count to be the current character and its count
            mostFrequent = i
            mostFrequentCount = count

    return (mostFrequent, mostFrequentCount)

print(most_frequent_char("hello world"))
print(most_frequent_char("mississippi"))
print(most_frequent_char("aabbccdd"))




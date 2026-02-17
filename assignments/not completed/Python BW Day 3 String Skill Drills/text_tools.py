# B1 --------------------------------------------

def sanitize_username(name: str) -> str:
    if len(name) > 0: # check if the name is not an empty string, which is a basic requirement for a valid username
        return name.strip().replace(" ", "_").replace(".", "").lower() # 
    
    return "invalid" # return "invalid" if the name is an empty string, otherwise return the sanitized username by stripping leading and trailing whitespace, replacing spaces with underscores, removing periods, and converting all characters to lowercase

print(sanitize_username("John Smith"))
print(sanitize_username("A.B.C"))
print(sanitize_username(""))

# B2 --------------------------------------------

def title_case(sentence: str) -> str:
    words = sentence.strip().split(" ") # need to strip the sentence first to avoid empty strings in the list of words, then split the sentence into a list of words
    newWords = [] # make a list to hold the new words that will be created by capitalizing the first letter of each word and making the rest of the letters lowercase

    for i in words: # for each word in the list of words
        newWords.append((i[0].upper() + i[1:(len(i))].lower()).strip()) # capitalize the first letter of the word and make the rest of the letters lowercase, then add the new word to the list of new words. Also need to strip the new word to remove any leading or trailing whitespace that may have been added by the original sentence.
    
    return " ".join(newWords) # join the list of new words into a single string with spaces in between each word, then return the new sentence

print(title_case(" hello WORLD "))
print(title_case("up down left right b a"))
print(title_case("mouse Pad"))

# B3 --------------------------------------------

def mask_email(email: str) -> str:
    if email.count("@") == 1: # check if the email contains exactly one "@" symbol, which is a basic requirement for a valid email address
        replacement = "" # make a string to hold the replacement characters that will be used to mask the email address

        for i in email[1:(email.index("@") - 1)]: # for each character in the email address that is between the first character and the character before the "@" symbol
            replacement += "*" # add a "*" character to the replacement string for each character that is being masked

        return email[0] + replacement + email[(email.index("@") - 1):len(email)] # return the email address with the first character, the replacement string, and the rest of the email address starting from the character before the "@" symbol. 
    return "invalid" 

print(mask_email("student.name@school.org"))
print(mask_email("nsaffa682@west-mec.edu"))
print(mask_email("fakeemail@@@maple.com"))


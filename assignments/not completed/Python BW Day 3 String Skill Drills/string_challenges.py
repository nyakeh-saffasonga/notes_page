def password_strength(pw: str) -> str:

    hasNumber = False
    hasLetter = False
    hasUpper = False
    hasLower = False

    for i in pw:
        if i.isdigit(): hasNumber = True
        if i.isalpha(): hasLetter = True
        if i.isupper(): hasUpper = True
        if i.islower(): hasLower = True
        elif i.isascii(): pass

    if len(pw) < 8:
        return "weak"
    elif (len(pw) < 12):

        if hasNumber and hasLetter: 
            return "medium"
        else:
            return "weak"

    else:
        
        if hasNumber and hasLetter and hasUpper and hasLower: 
            return "strong"
        else: 
            return "medium"

print(password_strength("aA22asjdk_nbm"))
print(password_strength("Capital-1A"))
print(password_strength("thing_1"))
            

def manual_split(text: str, delimiter: str) -> list[str]:

    words = []
    nextAppend = ""

    for i in text:
        if i != delimiter:
            nextAppend += i
        else:
            if len(delimiter) > 0:
                words.append(nextAppend)
                nextAppend = ""
            else:
                words.append("")
    
    words.append(nextAppend)

    return words

print(manual_split("a,,b,", ","))
print(manual_split("coding is fun", " "))
print(manual_split("easter", "6"))

# def most_frequent_char(text: str) -> tuple[str, int]:



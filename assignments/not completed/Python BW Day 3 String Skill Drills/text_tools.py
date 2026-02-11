def sanitize_username(name: str) -> str:
    if len(name) > 0: # 
        return name.strip().replace(" ", "_").replace(".", "").lower() # 
    
    return "invalid" # 

print(sanitize_username("John Smith"))
print(sanitize_username("A.B.C"))
print(sanitize_username(""))

def title_case(sentence: str) -> str:
    words = sentence.strip().split(" ") # 
    newWords = [] # 

    for i in words: # 
        newWords.append((i[0].upper() + i[1:(len(i))].lower()).strip()) # 
    
    return " ".join(newWords) # 

print(title_case(" hello WORLD "))


def mask_email(email: str) -> str:
    if email.count("@") == 1: # 


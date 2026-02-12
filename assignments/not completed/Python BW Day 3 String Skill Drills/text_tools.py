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
print(title_case("up down left right b a"))
print(title_case("mouse Pad"))


def mask_email(email: str) -> str:
    if email.count("@") == 1: #
        replacement = "" # 

        for i in email[1:(email.index("@") - 1)]: #
            replacement += "*" # 

        return email[0] + replacement + email[(email.index("@") - 1):len(email)] # 
            
    return "invalid" 

print(mask_email("student.name@school.org"))
print(mask_email("nsaffa682@west-mec.edu"))
print(mask_email("fakeemail@@@maple.com"))


def what_century(year):
    for i in range(100, int(year) + 100, 100):
        
        if int(year) == i:

            first2 = str(year)[0:2]

            if first2[0] == "1":
                return str(int(first2)) + "th"

            if first2[len(first2) - 1] == "1":
                return str(year)[0:2] + "st"
            if first2[len(first2) - 1] == "2":
                return str(year)[0:2]  + "nd"
            if first2[len(first2) - 1] == "3":
                return str(year)[0:2]  + "rd"
            
            return str(year)[0:2]  + "th"

        if int(year) > i and int(year) < i + 100:

            first2 = str(int(str(year)[0:2]) + 1)

            if first2[0] == "1":
                return str(int(first2)) + "th"

            if first2[len(first2) - 1] == "1":
                return str(int(first2)) + "st"
            if first2[len(first2) - 1] == "2":
                return str(int(first2)) + "nd"
            if first2[len(first2) - 1] == "3":
                return str(int(first2))  + "rd"
            
            return str(int(first2))  + "th"



print(what_century("2000"))
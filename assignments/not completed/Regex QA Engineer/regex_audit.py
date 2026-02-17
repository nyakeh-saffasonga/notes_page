# MAIN PROJECT --------------------------------------------------------------------

import json
import re


with open('MOCK_DATA.json', 'r') as file:
    data = json.load(file)

# count how many records there are
totalRecords = len(data)

# look at some of the data
print("Total records:", totalRecords)
print("First 3 records:", data[:3])

cleanRecords = []
dirtyRecords = []

# check each record
for record in data:
    reasons = []

    # check date format
    def validateDate(date_str):
        pattern = r"(1[0-2]|0?[1-9])/(3[01]|[12][0-9]|0?[1-9])/(\d{4})"
        m = re.fullmatch(pattern, date_str)
        if m:
            month = int(m.group(1))
            day = int(m.group(2))
            year = int(m.group(3))
            if day > 31:
                return False
            if month == 2 and day > 29:
                return False
            if month in [4, 6, 9, 11] and day > 30:
                return False
            return True
        return False

    # checks level
    def validateLevel(level):
        return level.upper() in ['INFO', 'WARN', 'ERROR', 'DEBUG']

    # checks email
    def validateEmail(email):
        pattern = r"[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}"
        return re.fullmatch(pattern, email) != None

    # checks IP address
    def validateIP(ip):
        pattern = r"\d{1,3}(\.\d{1,3}){3}"
        if re.fullmatch(pattern, ip):
            parts = ip.split('.')
            for part in parts:
                if int(part) > 255:
                    return False
            return True
        return False

    # checks order number is 9 digits
    def validateOrder(order):
        return re.fullmatch(r"\d{9}", order) != None

    # checks status
    def validateStatus(status):
        return status.upper() in ['PAID', 'PENDING', 'DECLINED', 'REFUNDED']




    # after all of that, it checks each field
    dateOk = validateDate(record.get('timestamp', ''))
    levelOk = validateLevel(record.get('level', ''))
    emailOk = validateEmail(record.get('user_email', ''))
    ipOk = validateIP(record.get('network_ip', ''))
    orderOk = validateOrder(record.get('order_number', ''))
    try:
        payment = float(record.get('payment_total', -1))
        paymentOk = payment >= 0
    except:
        paymentOk = False
    statusOk = validateStatus(record.get('status', ''))

    # if its all good, it saves it as clean
    if dateOk and levelOk and emailOk and ipOk and orderOk and paymentOk and statusOk:
        # Change date to format like 2023-04-30
        m = re.fullmatch(r"(1[0-2]|0?[1-9])/(3[01]|[12][0-9]|0?[1-9])/(\d{4})", record['timestamp'])
        if m:
            month = int(m.group(1))
            day = int(m.group(2))
            year = m.group(3)
            date_iso = f"{year}-{month:02d}-{day:02d}"
        else:
            date_iso = None


        # save clean records
        cleanRecords.append({
            "event_id": record.get("event_id"),
            "date_iso": date_iso,
            "level": record.get("level", "").upper(),
            "user_email": record.get("user_email"),
            "network_ip": record.get("network_ip"),
            "order_number": record.get("order_number"),
            "payment_total": payment,
            "status": record.get("status", "").upper(),
            "flags": []
        })

    else:

        # save bad record and reasons why
        dirtyRecords.append({
            "original": record,
            "reasons": [r for r in [
                "INVALID_DATE" if not dateOk else "",
                "INVALID_LEVEL" if not levelOk else "",
                "INVALID_EMAIL" if not emailOk else "",
                "INVALID_IP" if not ipOk else "",
                "INVALID_ORDER" if not orderOk else "",
                "INVALID_PAYMENT" if not paymentOk else "",
                "INVALID_STATUS" if not statusOk else ""
            ] if r]
        })

# show how many are good and bad
print("Good records:", len(cleanRecords))
print("Bad records:", len(dirtyRecords))






# DEGUG SECTION --------------------------------------------------------------------


# 1. --------------------------------------------------------------------
# any string with an @ somewhere in it with 1+ character before and after, and a dot somewhere after the @ with at 2+ characters after the dot
# its too loose and does not check for .com or .net or other domain endings, and allows invalid characters in the email
# r"[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}"
# 2. --------------------------------------------------------------------
# any string that has 1 or 2 digits, then a slash, then 1 or 2 digits, then a slash, then 4 digits
# it only checks format and not the range of the numbers (eg month can be 13, day can be 32, etc)
# r"(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\d{4}"
# 3. --------------------------------------------------------------------
# any string that has 9 digits in a row
# it only checks that there are 9 digits, but does not check for any other format (eg it could be part of a longer string)
# r"\d{9}"
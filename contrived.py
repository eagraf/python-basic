def testcontrived(data):
    string = bytes(data).decode()

    total = 5
    if 'a' in string:
        total -= 1
    if 'b' in string:
        total -= 1
    if 'c' in string:
        total -= 1
    if 'd' in string:
        total -= 1
    if 'e' in string:
        total -= 1
    if 'f' in string:
        total -= 1
    if 'g' in string:
        total -= 1
    if 'h' in string:
        total -= 1
    if 'i' in string:
        total -= 1
    if 'j' in string:
        total -= 1

    1/max(total, 0)


def drawStaircase(n):
    for i in range(3, n + 1):
        if i % 2 == 1:
            for j in range(1, i + 1):
                print("#", end="")
            print()
        else:
            if i == 7:
                print("#")
            else:
                for j in range(1, i + 1):
                    if j % 2 == 0:
                        print(" ", end="")
                    else:
                        print("#", end="")
                print()

drawStaircase(30)

#oikea vastaus
def drawStaircase(n):
    second_last_line = ""  # Muuttuja toiseksi viimeiselle riville
    last_line = ""  # Muuttuja viimeiselle riville

    for i in range(3, n + 1):
        if i % 2 == 1:
            line = "#" * i
            print(line)
            second_last_line = last_line  # Päivitetään toiseksi viimeinen rivi
            last_line = line
        else:
            if i == 7:
                line = "#"
                print(line)
                second_last_line = last_line  # Päivitetään toiseksi viimeinen rivi
                last_line = line
            else:
                line = "".join(["#" if j % 2 == 1 else " " for j in range(1, i + 1)])
                print(line)
                second_last_line = last_line  # Päivitetään toiseksi viimeinen rivi
                last_line = line

    # Tulostetaan hajanaiset risuaidat viimeisen ja toiseksi viimeisen rivin väliin
    if last_line and second_last_line:
        for i in range(1, max(len(second_last_line), len(last_line)) + 1):
            if i % 2 == 1:
                print("#", end="")
            else:
                print(" ", end="")
        print()

    print(last_line)  # Tulostetaan viimeinen rivi uudelleen

drawStaircase(61)

#optimoitu vastaus
n = 30

for i in range(n):

    print("#"*(2*i+3))

    print("#"+" #"*(i+1))

print("#"*(2*n+1))

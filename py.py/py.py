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

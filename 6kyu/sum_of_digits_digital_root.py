def digital_root(n):
    x = sum([int(a) for a in str(n)])
    while (len(str(x)) > 1):
        x = sum([int(a) for a in str(x)])
    return x

#BEST practice
#def digital_root(n):
#    return n if n < 10 else digital_root(sum(map(int,str(n))))

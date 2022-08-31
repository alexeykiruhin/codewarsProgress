def is_triangle(a, b, c):
    l = [a,b,c]
    l.remove(max(l))
    return max(a, b, c) < sum(l)

#BEST practice
#def is_triangle(a, b, c):
#    return (a<b+c) and (b<a+c) and (c<a+b)

def number(bus_stops):
    inb, outb = 0, 0
    for e in bus_stops:
        inb = inb + e[0]
        outb = outb + e[1]
    return inb - outb
    
#BEST practice
#def number(bus_stops):
#    return sum([stop[0] - stop[1] for stop in bus_stops])

// Thinking of You

print(".------------------------.")
print("|     thinking of you    |")
print("|     __  ______  __     |")
print("|    (  )|).....|(  )    |")
print("|    (__)|)_____|(__)    |")
print("|    ________________    |")
print("|___/_._o________o_._\\___|")

var mixtape = [String]()

mixtape.append("Muse - Undisclosed Desires")
mixtape.append("Aqualung - Brighter Than Sunshine")
mixtape.append("Chantal Kreviazuk - Feels Like Home")
mixtape.append("Michelle Branch - You Get Me")
mixtape.append("Santana + Michelle Branch - The Game of Love")
mixtape.append("Santana & Rob Thomas - Smooth")
mixtape.append("Lifehouse - Hanging by a Moment")
mixtape.append("Jessica Andrews - Helplessly, Hopelessly")
mixtape.append("The Corrs - Irresistible")
mixtape.append("The Afters - Love is in the Air")
mixtape.append("The Cure - Just Like Heaven")
mixtape.append("The Turtles - Happy Together")
mixtape.append("The Turtles - Is it any Wonder")
mixtape.append("Halestorm - Beautiful with You")
mixtape.append("Halestorm - New Modern Love")
mixtape.append("Halestorm - Break in")
mixtape.append("Billie Eilish - Ocean Eyes")
mixtape.append("A Great Big World - This is the New Year")
mixtape.append("Judy Collins - Send in the Clowns")
mixtape.append("Katy Perry - Unconditionally")
mixtape.append("Hozier - Take Me to Church")
mixtape.append("P!nk - Just Give Me a Reason")
mixtape.append("Tree Jenkins and Julia Dominczak - Grounder Anthem")
mixtape.append("Paramore - Still Into You")
mixtape.append("Lady A - Need You Now")
mixtape.append("Muse - Endlessly")

mixtape.remove(at: 24)
mixtape.remove(at: 23)
mixtape.remove(at: 21)
mixtape.remove(at: 20)
mixtape.remove(at: 17)
mixtape.remove(at: 10)

var song: String = mixtape.remove(at: 13)
mixtape.insert(song, at: 2)
mixtape.remove(at: 16)
mixtape.remove(at: 3)

var i: Int = 0
print()
print("Side A:")
print()
while i <= mixtape.count / 2 - 1 {
    print("\(i+1). \(mixtape[i])")
    i += 1
}
print()
print("Side B:")
print()
i = 9
while i < mixtape.count {
    print("\(i+1). \(mixtape[i])")
    i += 1
}

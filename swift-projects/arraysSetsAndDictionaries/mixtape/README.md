# Make a Mixtape 101

It is the era of the [cassette tape](https://en.wikipedia.org/wiki/Cassette_tape) and making a homemade mixtape for that special someone is no laughing matter. It’s serious business! ♪♪

> “The making of a good compilation tape is a very subtle art. Many do’s and don’ts. First of all, you’re using someone else’s poetry to express how you feel. This is a delicate thing.” - High Fidelity

Write a program in **Mixtape.swift** that holds the ultimate playlist of music in a Swift array.

Let’s get started!

## Tasks

### Setting Up

1. 
An impressive compilation tape has a theme and conveys a message. Think about the person you are making the tape for and what you hope to express to them.

Write a comment at the top of the program with the theme of your mixtape.

2. 
Next, think of a name for the playlist!

Copy and paste the following ASCII art into the program:

    print(".------------------------.")
    print("| mixtape name    90 min |")
    print("|     __  ______  __     |")
    print("|    (  )|).....|(  )    |")
    print("|    (__)|)_____|(__)    |")
    print("|    ________________    |")
    print("|___/_._o________o_._\\___|")

And print the name of your playlist within it.

### Choose Your Songs

3. 
Declare an array called `mixtape` that stores `String` values.

4. 
Take some time to find ten or more songs that you want to add the playlist.

As you are finding them, use `.append()` to add them to the `mixtape` array.

Make sure to include both the artist name and the song title.

### Less Is More

5. 
> “Making a tape is like writing a letter – there’s a lot of erasing and rethinking and starting again.” - High Fidelity

Less is more! Don’t just dump all your favorite songs onto the mixtape. If you want to send a message, be spare with your selections. Use only what you need to say what you want, and nothing more.

Use the `.count` property to determine the number of songs in your mixtape. Wrap it in a `print()` statement to output that number.

6. 
This compilation tape should not contain any fillers. Every song should be gold and from the heart. And a super long album sometimes gets stale.

Use the `.remove()` method to take out one or two of the songs.

### Order

7. 
> “The making of a great compilation tape, like breaking up, is hard to do and takes ages longer than it might seem. You gotta kick off with a killer, to grab attention. Then you got to take it up a notch, then you got to cool it off a notch.” - High Fidelity

Order your songs carefully. Putting tracks in the perfect order is part of the art of the mixtape. Consider the narrative, tonal, emotional and musical arc of the mixtape. Craft your songs into a story.

Use `.remove()` and `.insert()` methods to delete and add more tracks.

### Tracklist

8. 
Last but not least, let’s print out the tracklist using a `for`-`in` loop so that the output looks something like:

    Porches - Xanny Bar 
    Mitski - First Love / Late Spring
    Quarterbacks - Center
    LVL UP - Hookwink'd
    LVL UP - Spirit Was
    Mount Eerie - Great Ghosts
    Mount Eerie - You Swan, Go On
    The Microphones - I Felt Your Shape
    Posture - Circles
    David Bowie - Soul Love
    Porches - rangerover
    Mitski - Last Words of a Shooting Star

### Optional

9. 
Create a tracklist for the two sides of the compilation tape, “Side A” and “Side B”, using `for`-`in` loop(s). For example:

    Side A:
    
    1. Porches - Xanny Bar 
    2. Mitski - First Love / Late Spring
    3. Quarterbacks - Center
    4. LVL UP - Hookwink'd
    5. LVL UP - Spirit Was
    6. Mount Eerie - Great Ghosts
    
    Side B:
    
    7. Mount Eerie - You Swan, Go On
    8. The Microphones - I Felt Your Shape
    9. Posture - Circles
    10. David Bowie - Soul Love
    11. Porches - rangerover
    12. Mitski - Last Words of a Shooting Star

### Solutions

10. 
Take out your boombox and throw on your denim jacket. It’s time to play the songs from the top!

### Solutions:

- [AwesomeMixVol1.swift](https://github.com/Codecademy/learn-swift/blob/master/5-arrays-and-sets/mixtape/AwesomeMixVol1.swift)
- [Taylor.swift](https://github.com/Codecademy/learn-swift/blob/master/5-arrays-and-sets/mixtape/Taylor.swift)

If you make something cool, share it with us!

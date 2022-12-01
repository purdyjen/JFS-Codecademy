var text: [String] = ["h", "e", "l", "l", "o"]
text = ["l", "e", "v", "e", "l"]
text = ["a", "n", "n", "a"]
var reversed = [String]()
var counter: Int = text.count - 1

while counter >= 0 {
    reversed.append(text[counter])
    counter -= 1
}

if text == reversed {
    print("We have a palindrome!")
} else {
    print("We don't have a palindrome.")
}
// Create your Whale Talk program below:

let input: String = "Fish or cut bait"
var output: String = ""

for char in input {
  let lowerChar = char.lowercased()

  switch lowerChar {
    case "a", "i", "o":
      output += lowerChar.uppercased()
    case "e", "u":
      output += lowerChar.uppercased()
      output += lowerChar.uppercased()
    default:
      continue
  }
}
print(output)

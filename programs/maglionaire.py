# Count number of vowels
sentence = input("Enter your sentence: ")
vowel = {
    "a": 0,
    "e": 0,
    "i": 0,
    "o": 0,
    "u": 0
}

for letter in sentence.lower():
    for key, count in vowel.items():
        if letter == key:
            vowel[key] = count + 1
print(vowel)

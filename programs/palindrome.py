def isPalindrome(s):
  s = s.lower()
  s = s.replace(" ","")
  return s == s[::-1]

#kata = (input("Input kata : "))
kata1 = "No lemon, no melon"
kata2 = "Madam, I’m Adam"
kata3 = "kasur rusak"
print (isPalindrome(kata1))
print (isPalindrome(kata2))
print (isPalindrome(kata3))
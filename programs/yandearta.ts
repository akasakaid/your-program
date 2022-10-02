// TypeScript Password Generator

const generatePassword = (
  characterAmount = 8,
  {
    includeUpper = true,
    includeNumbers = true,
    includeSymbols = true,
  }: {
    includeUpper?: boolean
    includeNumbers?: boolean
    includeSymbols?: boolean
  } = {}
) => {
  const UPPERCASE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const LOWERCASE_CHAR = "abcdefghijklmnopqrstuvwxyz"
  const NUMBER_CHAR = "1234567890"
  const SYMBOL_CHAR = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

  let combinedCharacters = LOWERCASE_CHAR

  if (includeUpper) combinedCharacters += UPPERCASE_CHAR
  if (includeNumbers) combinedCharacters += NUMBER_CHAR
  if (includeSymbols) combinedCharacters += SYMBOL_CHAR

  let password = ""
  for (let i = 0; i < characterAmount; i++) {
    password += combinedCharacters.charAt(Math.floor(Math.random() * combinedCharacters.length))
  }

  return password
}

const password1 = generatePassword(10)
const password2 = generatePassword(16, { includeSymbols: false })

console.log({ password1, password2 })

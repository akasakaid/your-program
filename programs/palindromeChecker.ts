function palindrome<T extends string>(str: T) {
  const regex: RegExp = /[A-Za-z1-10]/gi;
  const newStr: string | undefined = str?.match(regex)?.join("").toLowerCase();
  const strReverse: string | undefined = str
    ?.split("")
    .reverse()
    .join("")
    .match(regex)
    ?.join("")
    .toLowerCase();

  if (newStr === strReverse) return true;
  else return false;
}

console.log(palindrome("Typescript")); // false
console.log(palindrome("Ada-Ada")); // true

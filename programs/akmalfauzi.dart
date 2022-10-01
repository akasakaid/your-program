import 'dart:io';

void main(List<String> args) {
  print("Faktorial");
  stdout.write("Faktorial " + faktorial(3).toString());
}

faktorial(number) {
  if (number <= 0) {
    return 1;
  } else {
    return (number * faktorial(number - 1));
  }
}

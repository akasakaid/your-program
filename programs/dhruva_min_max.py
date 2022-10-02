'''Program to find minimum and maximum of three numbers'''
num1 = int(input("Enter first number : "))
num2 = int(input("Enter second number : "))
num3 = int(input("Enter third number : "))
print()
if (num1 < num2) and (num1 < num3):
    print ("num1 is smaller")
elif (num3 < num2):
    print ("num3 is smaller")
else :
    print ("num2 is smaller")
print()
if(num1>num2):
    if(num1>num3):
        print("num1 is greater")
    else:
        print("num3 is greater")
elif(num2>num3):
    print("num2 is greater")
else:
    print("num3 is greater")

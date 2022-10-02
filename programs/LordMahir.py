#fibonacci series using iteration
n=int(input("Enter upper bound "))
a=1
b=1
print("Fibonacci Series: ",a,b,end=" ")
for i in range(3,n+1):
    c=a+b
    a=c
    b=c
    print(b,end=" ")
'''Problem: Fibonacci Words
Link: https://codeforces.com/contest/1505/problem/C'''
n=input()
x=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
for i in range(2,len(n)):
 if (x.index(n[i-2])+1+x.index(n[i-1]))%26==x.index(n[i])+1:
  '''print(x.index(n[i-2]),n[i-2])
  print(x.index(n[i-1]),n[i-1])
  print(x.index(n[i]),n[i])'''
  continue
 else:
  print("NO")
  break
else:
 print("YES")

"""
Max sub-array Product
"""
a=[1,2,-3,0,-4,-5]
p1=a[0]
p2=a[0]
m=a[0]
for i in range(1,len(a)):
    print(a[i],p1,p2,m)
    t=max(a[i],a[i]*p1,p2*a[i])
    p2=min(a[i],a[i]*p1,p2*a[i])
    p1=t
    m=max(m,p1)
print(m)
#finding common factors of two numbers
def commonFactors(self, a: int, b: int) -> int:
        a_factors=set()
        for x in range(1,a//2 +1):
            if a%x==0:
                a_factors.add(x)
        ab_factor=0
        a_factors.add(a)
        print(a_factors)
        for i in a_factors:
            if b%i==0:
                ab_factor+=1
        return ab_factor
        

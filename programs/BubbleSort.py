def Bubble_Sort(nums):
    n=len(nums)
    for i in range(n-1):
        for j in range(n-1):
            if nums[j] > nums[j+1]:
                nums[j],nums[j+1] = nums[j+1],nums[j]

    return nums



if __name__=='__main__':
    l=[2,4,56,7,3,5,23,1]
    print(Bubble_Sort(l))

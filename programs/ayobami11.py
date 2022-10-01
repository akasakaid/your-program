from random import randrange

def quicksort(arr):
    if len(arr) <= 1:
        return arr
    else:
        random_index = randrange(len(arr))
        pivot = arr[random_index]

        less_than_pivot = []
        greater_than_pivot = []

        for index, element in enumerate(arr):
            if index == random_index:
                continue

            less_than_pivot.append(element) if element <= pivot else greater_than_pivot.append(element)

        return quicksort(less_than_pivot) + [pivot] + quicksort(greater_than_pivot)
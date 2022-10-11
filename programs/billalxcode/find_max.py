# Author: @billalxcode
# Created at: 11 Okt 2022

def find_max(data: list[int]):
    m = data[0] # Mengambil data index ke-0
    for row in data:
        if row >= m:
            m = row
    return m

if __name__ == "__main__":
    data = [4, 2, 2, 5, 10, 3]
    print (find_max(data))
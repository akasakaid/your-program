# Author: @billalxcode
# Created at: 11 Okt 2022
# Ini merupakan program lanjutan dari program find_max.py

def find_min(data: list[int]):
    m = data[0] # Mengambil data index ke-0
    for row in data:
        if row <= m:
            m = row
    return m

if __name__ == "__main__":
    data = [4, 2, 2, 5, 10, 3, -3]
    print (find_min(data))
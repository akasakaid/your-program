# Generate Key
def generateKey(string, key):
    key = list(key)
    if len(string) == len(key):
        return(key)
    else:
        for i in range(len(string) - len(key)):
            key.append(key[i % len(key)])
    return("" . join(key))
    
# Encrypt Text
def cipherText(string, key):
    cipher_text = []
    for i in range(len(string)):
        x = (ord(string[i]) +
            ord(key[i])) % 26
        x += ord('A')
        cipher_text.append(chr(x))
    return("" . join(cipher_text))
    
# Decrypt Text
def plainText(cipher_text, key):
    plain_text = []
    for i in range(len(cipher_text)):
        x = (ord(cipher_text[i]) -
            ord(key[i]) + 26) % 26
        x += ord('A')
        plain_text.append(chr(x))
    return("" . join(plain_text))
    
# Main Menu
while True:
    print("===== Menu =====")
    print("[1] Encrypt")
    print("[2] Decrypt")
    print("[3] Exit")

    i = int(input("Select : "))
    
    if (i == 1):
        string = input("Masukkan Plain Text : ").upper()
        keyword = input("Masukkan Key : ").upper()
        key = generateKey(string, keyword)
        cipher_text = cipherText(string,key)
        print("Ciphertext : ", cipher_text)
    elif(i == 2):
        string = input("Masukkan Cipher Text : ").upper()
        keyword = input("Masukkan Key : ").upper()
        print("Decrypt Text : ", plainText(cipher_text, key))
    else:
        exit()
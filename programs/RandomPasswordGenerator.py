import random
import string

print('Welcome to Random Password generator!')
length_of_password = int(input('\nEnter the length of password: '))
password=''
if(input("Allow lower case letters(y/n): ")=='y'):
    password=password + string.ascii_lowercase
if(input("Allow upper case letters(y/n): ")=='y'):
    password=password + string.ascii_uppercase
if(input("Allow digits letters(y/n): ")=='y'):
    password=password + string.digits
if(input("Allow special characters: ")=='y'):
    password=password + string.punctuation

random_password = random.sample(password, length_of_password)
password = "".join(random_password)
print("\n Your password is: ",password)

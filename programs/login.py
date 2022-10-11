import getpass

print (34*"=")
print ("============= LOGIN ==============")
print (34*"=")
print ("============ default =============")
print ("======== username : admin ========")
print ("========= password : 123 =========")
print (34*"=")

while True:
    username = input("USERNAME : ")
    password = getpass.getpass("PASSWORDNYA : ")
    if username == "admin" and password == '123':
        print (34*"=")
        print ("SBERHASIL LOGIN!")
        print (34*"=")
        break
    elif username != "admin" and password == '123':
        print (34*"=")
        print ("USERNAME SALAH, ULANGI LAGI !")
        print (34*"=")
    elif username == "admin" and password != '123':
        print (34*"=")
        print ("PASSWORD SALAH, ULANGI LAGI !")
        print (34*"=")
    else:
        print (34*"=")
        print ("USERNAME & PASSWORD SALAH, ULANGI LAGI !")
        print (34*"=")
    
 
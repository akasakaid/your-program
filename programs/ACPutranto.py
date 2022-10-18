tambah = lambda x,y: x+y
kurang = lambda x,y: x-y
kali = lambda x,y: x*y
print('Selamat datang di kalkulator')
print('1.Pertambahan')
print('2.Pengurangan')
print('3.Perkalian')
print('4.Pembagian')
pilih=input('Silahkan pilih = ')
no=int(input('no pertama = '))
no1=int(input('no kedua = '))
if pilih=='1':
    print("{}+{}={}".format(no,no1,tambah(no,no1)))
elif pilih=='2':
    print(f"{no}-{no1}={kurang(no,no1)}")
elif pilih=='3':
    print(no,'X',no1,'=',kali(no,no1))
elif pilih=='4':
    n =+ no; nn =+ no1
    print(f"{n}/{nn}={n/nn}")

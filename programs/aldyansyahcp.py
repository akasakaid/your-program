import random
import os

def roll(sides=6):
	lempardadu = random.randint(1,sides)
	return lempardadu

def main():
	putar = True
	while putar:
		tanya = str(input('\nIngin melempar dadu? [y/n]'))
		if tanya.lower() != 'n':
			dadu = roll()
			print('Dadu yang keluar: ', dadu)
		else:
			putar = False
	print('\nTerimakasih Sudah Bermain')

main()

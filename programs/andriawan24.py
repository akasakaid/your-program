import requests

url = 'https://dummyjson.com/todos/random'
results = requests.get(url)

print('quotes for today: ' + results.json()['todo'])
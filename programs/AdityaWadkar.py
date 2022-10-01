# https://openweathermap.org/ #register to get api key and run the program
import requests

# 
weather_api_key="YOUR_API_KEY_AFTER_REGISTRATION"
url = f"http://api.openweathermap.org/data/2.5/weather?q=Mumbai&units=metric&appid={weather_api_key}"
main_page = requests.get(url).json()
# print(main_page)
temp = main_page["main"]['temp']
# weather1 = main_page["weather"][0]['main']
temperature = str(temp) + " \N{DEGREE SIGN}C"
print(temperature)

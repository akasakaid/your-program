# This program gets the current temperature from OpenWeather API pf any city in the world.

# import required modules

import requests, json

# Enter your API key here

api_key = "Your_API_Key"

 

# base_url variable to store url

base_url = "http://api.openweathermap.org/data/2.5/weather?"

 

# Give city name

city_name = input("Enter city name : ")

# complete url address

complete_url = base_url + "appid=" + api_key + "&q=" + city_name

 

# get method of requests module

# return response object

response = requests.get(complete_url)

 

# json method of response object

x = response.json()

 

# Now x contains list of nested dictionaries

# Check the value of "cod" key is equal to

# "404", means city is found otherwise,

# city is not found

if x["cod"] != "404":

 

    # store the value of "main"

    # key in variable y

    y = x["main"]

 

    # store the value corresponding

    # to the "temp" key of y

    current_temperature = y["temp"]


    # print following values

    print(" Temperature (in kelvin unit) = " +

                    str(current_temperature))

 

else:

    print(" City Not Found ")

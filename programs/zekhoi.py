import requests as req
from bs4 import BeautifulSoup as bs
import csv
import pandas as pd

def getHTML(kelas):
  return req.get("https://skm.dgip.go.id/index.php/skm/detailkelas/" + str(kelas)).text

classes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

file = open("skmscrape.csv","w")
writer = csv.writer(file)
writer.writerow(["Nama Barang (Indonesia)", "Nama Barang (English)", "Kelas"])

for kelas in classes:
  html = getHTML(kelas)
  parser = bs(html, "html.parser")
  data = parser.find_all("tr","even gradeA")
  for row in data:
    barang = row.find_all("td")
    nama = barang[0].text
    name = barang[1].text
    writer.writerow([nama, name, kelas])

file.close()
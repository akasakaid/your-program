import pyqrcode
import png
link = "https://www.github.com/fadhila36/"
qr_code = pyqrcode.create(link)
qr_code.png("github.png", scale=5)
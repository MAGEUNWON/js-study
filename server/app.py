from http.server import HTTPServer, BaseHTTPRequestHandler
# import fileinput
# import glob

# f = ['head.txt', 'header.txt', 'body.txt', 'footer.txt']

# with fileinput.input(glob.glob("*.txt")) as f:
#     for line in f:
#         print(line)

header =  open("header.txt", 'r')
y = header.read()

file =  open("head.txt", 'w')
file.write(y)


files = open("head.txt", "r")
x = files.read()
print(type(x))

# file =  open("head.txt", 'r')
# f = file.read()
# print(x)






# with open("header.txt", 'r') as file:
#     a = file.readlines()
#     print(a)


# files=('head.txt', 'header.txt', 'body.txt', 'footer.txt')) as file:
#     for line in file

port = 5000

# # # httpd = HTTPServer(('127.0.0.1', 5000), SimpleHTTPRequestHandler)
# # # print('서버시작')
# # # httpd.serve_forever()
# # # print('서버종료')

# class MyHTTPRequestHandler( BaseHTTPRequestHandler) :
#   def do_GET(self):
#     print('GET방식 요청')


#     self.send_response(200)
#     self.send_header('Content-type', 'text/html; charset=utf-8')
#     self.end_headers() 
    

#     # f = ['head.txt', 'header.txt', 'body.txt', 'footer.txt']

#     # with fileinput.input(glob.glob("*.txt")) as f:
#     #     for line in f:
#     #         print(line)


#     # readFile = open(f, 'r')
#     # data = readFile.read()
    
    
#     self.wfile.write(x)

class server :
  def __init__(self):
      self.send_response(200)

    @property
    def 
   
    self.send_header('Content-type', 'text/html; charset=utf-8')
    self.end_headers() 
    

    # f = ['head.txt', 'header.txt', 'body.txt', 'footer.txt']

    # with fileinput.input(glob.glob("*.txt")) as f:
    #     for line in f:
    #         print(line)


    # readFile = open(f, 'r')
    # data = readFile.read()
    
    
    self.wfile.write(x)



if __name__ == '__main__':
  httpd = HTTPServer(('0.0.0.0', port), MyHTTPRequestHandler)
  print('서버시작')
  httpd.serve_forever()
  print('서버종료')
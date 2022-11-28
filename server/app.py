from http.server import HTTPServer, BaseHTTPRequestHandler

port = 5000

# httpd = HTTPServer(('127.0.0.1', 5000), SimpleHTTPRequestHandler)
# print('서버시작')
# httpd.serve_forever()
# print('서버종료')

class MyHTTPRequestHandler( BaseHTTPRequestHandler) :
  def do_GET(self):
    print('GET방식 요청')
    self.send_response(200)
    self.send_header('Content-type', 'text/html; charset=utf-8')
    self.end_headers()
    
    f = ['head.txt', 'header.txt', 'body.txt', 'footer.txt']

    readFile = open(f, 'r')
    data = readFile.read()
    
    

    # html = f'''
    #   {data} + {data2}
    # '''
    self.wfile.write(data.encode('utf-8'))

    


    
    


if __name__ == '__main__':
  httpd = HTTPServer(('0.0.0.0', port), MyHTTPRequestHandler)
  print('서버시작')
  httpd.serve_forever()
  print('서버종료')
from http.server import HTTPServer, BaseHTTPRequestHandler
import base64
# import fileinput
# import glob

# f = ['head.txt', 'header.txt', 'body.txt', 'footer.txt']

# with fileinput.input(glob.glob("*.txt")) as f:
#     for line in f:
#         print(line)


head = open("head.txt", "r", encoding="UTF8")
rHead = head.read()

body = open("body.txt", "r", encoding="UTF8")
rBody = body.read()

header = open("header.txt", "r", encoding="UTF8")
rHeader = header.read()

main = open("main.txt", "r", encoding="UTF8")
rMain = main.read()

footer = open("footer.txt", "r", encoding="UTF8")
rFooter = footer.read()


inputBody = open("body.txt", 'a', encoding="UTF8")
# y = inputBody.write(f'\n {rHeader} \n {rMain} \n {rFooter}')
# rInputBody = inputBody.read()
# print(rHead)
# print(type(rBody))
# inputBody.close()

inputHead = open("head.txt", "a", encoding="UTF8")
# html = inputHead.write(f'\n {rBody}')
# rHtml = inputHead.read()
print(rHead)
# rInputBody = open("body.txt", "r", encoding="UTF8" )
# readInputBody = rInputBody.read()
# print(readInputBody)
# files = open("head.txt", "a", encoding='UTF-8')
# x = files.write(f'\n {header}')
# print(x)
# files.close()

# text_byte = rHead.decode('utf-8')
# print(text_byte)

encode = rHead.encode('UTF-8')
print(encode)
# c = rHead.encode("UTF-8")
# print(c)

decoding = encode.decode('UTF-8')
# print(decoding)
# s = base64.b64decode(c)
# print(type(s))

port = 5000

# # httpd = HTTPServer(('127.0.0.1', 5000), SimpleHTTPRequestHandler)
# # print('서버시작')
# # httpd.serve_forever()
# # print('서버종료')

class MyHTTPRequestHandler( BaseHTTPRequestHandler) :
  def do_GET(self):
    print('GET방식 요청')


    self.send_response(200)
    self.send_header('Content-type', 'text/html; charset=utf-8')
    self.end_headers() 
    self.wfile.write(encode)

# # class server :
# #   def __init__(self, send_response, send_header, end_headers):
# #       self.__send_response = send_response
# #       self.send_header = send_header
# #       self.end_headers = end_headers

# #       @property
# #       def send_response(self):
# #         return self.__send_response

# #       @send_response.setter
# #       def send_response(self, send_response):
# #         self.__send_response = 200

# #         # self.send_header('Content-type', 'text/html; charset=utf-8')
# #         # self.end_headers() 


if __name__ == '__main__':
  httpd = HTTPServer(('0.0.0.0', port), MyHTTPRequestHandler)
  print('서버시작')
  httpd.serve_forever()
  print('서버종료')


  # *@property 데코레이터란?
  # 객체의 프로퍼티를 보호해주는  함수
  
  # 이를 알기 위해서 먼저 알아야한 개념으로 접근 제어자가 있음.
  # 접근제어자는 객체 프로퍼티의 접근을 제한하는 명령어로 객체내에 선언되어 있는 프로퍼티를 접근할 수 있는 범위를 제한하는 것
  # 대표적인 객체 지향 언어인 자바에서는 public, private, protected
  # 1. public : 모든 접근 허용(어떤 것이든 객체에 프로퍼티 접근이 가능). 
  # 2. private : 현재 객체 내에서만 접근 가능
  # 3. protected : 같은 패키지내에 있는 객체들과 상속관계에 있는 객체들만 접근 가능
  # 접근제어자는 변경을 위해 존재하는 것이 존재의 이유임. 만약 모든 객체의 property가 public하게 선언되어 있다고 가정 할 때, public하게 선언되어 있다는 의미는 모든 접근에 열려있다는 의미이고 모든 접근에 열려 있다면 모든 객체가 중구난방으로 연결되어 있다는 말이고 결과적으로 해당 객체의 프로퍼티가 변경되었을 때 연결된 모든 객체를 변경해줘야 한다는 말과 동일함. 연결되어 있는 객체가 100개라면 번거롭고 버그 발생하기 좋음. 이러한 이유로 객체지향 언어에서는 접근 제한자를 두어 적당히 폐쇄적이고 적당히 열려있는 객체를 만듬. 하지만 프로그래밍을 하다보면 필연적으로 private와 같은 접근제한자가 걸려있는 프로퍼티에 접근(읽거나, 지정하거나)해야 하는 일이 발생. 이런 기능을 수행하기 위해 직접 접근하는 것이 아닌 getter, setter 메소드를 만들어 접근. getter는 해당 프로퍼티를 읽어오는 메서드 이고 setter는 프로퍼티를 변경하는 메서드임. 

  # getter, setter 메소드 예시
  # class 예시:
  #     def __init__(self):
  #       self.__bullshit = "예시임"
  # 파이썬에서 private property는 앞에 __을 붙여줌. 

  #     def get_bullshit(self):
  #         return self.__bullshit
      
  #     def set_bullshit(self, bullshit):
  #         self.__bullshit = bullshit
  #         return

  # 파이썬에서도 자바와 마찬가지로 접근제한자가 지정되어있는 변수들에 대한 getter/setter 메서드를 만들어 객체의 프로퍼티를 읽거나 수정할 수 있음. getter를 property, setter는 @[property].setter를 이용해 구현 가능

  # class Dog:     클래스로 구현
  #     def __init__(self):
  #       self.__legs = legs

  #     def get_legs(self):
  #       return self.__legs

  #     def set_legs(self, legs):
  #       self.__legs = legs

  # 이 클래스는 @property와 @[property].setter로 구현

  # class Dog:
  #     def __init__(self):
  #         self.__legs = 4
      
  #     @property   -> 얘는 getter의 역할을 함. 
  #     def legs(self):
  #         return self.__legs
          
  #     @legs.setter -> 얘는 값을 지정하는 역할을 함. 
  #     def legs(self, legs):
  #         self.__legs = legs

  # 이렇게 사용해서 얻을 수 있는 이점은 값을 읽을 때마다 getter/function을 따로 불러주는게 아니라 property이름으로 접근할 수 있게 됨. 

  # property를 사용하지 않을 때 

  # dog = Dog()
  # print(dog.get_legs())
  # >>>4

  # dog.set_legs(5)
  # print(dog.get_legs())
  # >>>5

  # property를 사용할 때 
  # dog = Dog()
  # print(dog.legs)
  # >>4

  # dog.legs = 6
  # print(dog.legs)
  # >>6
<!-- external.js 파일 내용 -->
var externalVariable = "Hello, world!"; 

<!-- index.html 파일 내용 --> 
<!DOCTYPE html> 
<html> 
  <head> 
    <meta charset="UTF-8"> 
    <title>External JavaScript Example</title> 
  </head> 
  <body> 
    <script src="external.js"></script> 
    <script> 
      // 외부 파일에 정의된 변수를 사용하기 위해 다시 정의 
      var localVariable = externalVariable; 
      console.log(localVariable); // "Hello, world!" 
    </script> 
  </body> 
</html>


//array, object


//var i = if(true){console.log(1)};  <=오류
//while w = while(true){console.log(1)}; <== while구문도 값이 될 수 없다.

//함수는 연관된 데이터를 그룹핑하는 객체 //java script에서 함수는 값이기도 하다. 
var f =function(){
  console.log(1+1);
  console.log(1+2);
}
var a = [f];
a[0]();

var o ={
  func:f
}
o.func();

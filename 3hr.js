//字串
"小黑"
//數字
87
87.3
//boolean
true
false
//只能是英文大小寫或是數字 開頭不能是數字
/*var myname = "小白";
var myage = 87;
var ismale = true;
document.write(ismale);
document.write("<br/>");
document.write(myage);
document.write("<br/>");
document.write("167");
document.write("<br/>");
document.write("25");
document.write("<br/>");*/
//使用字串,數字 字串用法
/*var phrase = "hello Mr.doki";
document.write(phrase.substring(2,10));
document.write("<br/>");
var number = 2.3
document.write(Math.round(Math.random() *10));
document.write("<br/>");*/
//製作計算機
/*var num1 = prompt("請輸入數字1");
var num2 = prompt("請輸入數字2");
num1 = parseFloat(num1);
num2 = parseFloat(num2);
document.write(num1 + num2);*/
//array
/*var scores = [80,60,30,20,50];
var frinedes = [true,false,"black","green"];
document.write(frinedes.length);*/
//function
/*function add(num1,num2){
   document.write(num1 + num2);
   document.write("<br/>");
	return 10;
	document.write("你好");
}
value = add(3,2);
document.write( value );*/
//if..else
/*var hungry = true;
if(hungry){
	document.write("我就去吃飯");
}
var rainy = false;
document.write("<br/>");
if(rainy){
	document.write("drive car");
}else{
	document.write("walk");
}
document.write("<br/>");
var rose = 10;
if(rose == 9 || rose > 9){
	document.write("yes");
}else{
	document.write("no");
}
//object
var person = {
	name:"小白",
	age:23,
	is_male:true,
	print_name:function(){
		document.write(this.name);
	}
};
person.print_name();*/
//object現實
/*var movie = {
	title:"刻在你心裡的名字",
	maker:"氧氣電影",
	duration:114,
	actors:[
		{
			name:"陳昊森",
			age:24,
			is_male:true
		},
		{
			name:"曾敬鏵",
			age:23,
			is_male:true
		}
	]
};
document.write(movie.actors[0].name);
//while and do while
var i = 1;
while(i <= 5){
	document.write(i);
	document.write("<br/>");
	i++;
}
do{
	document.write(i);
	document.write("<br/>");
	i++;
}while( i <= 3)*/
//answerkey檢驗
/*var password = 123456;
var input;
var entry_count = 0;
var entry_limit = 3;
var out_of_limit = false;
while(password!=input && !out_of_limit){
	entry_count++;
	if(entry_count <= entry_limit){
	    input=prompt("請輸入密碼");
	}else{
		out_of_limit=true;
	}	
}

if(out_of_limit){
	alert("超出錯誤次數");
}else{
	alert("登入成功");
}
//for
for(var i = 0; i < 3;i++){
	document.write(i);
}*/
//問答程式





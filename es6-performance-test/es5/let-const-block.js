
'use strict';
var i = 0;
var t1 = +new Date(),
	t2;

while(i++ < 1000000){
	var a = 1;
	var b = '1';
	var c = true;
	var d = {};
	var e = [];
}

t2 = +new Date() - t1;
console.log(t2);

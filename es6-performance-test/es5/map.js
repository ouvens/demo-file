
'use strict'
let i = 0;
let t1 = +new Date(),
	t2;

while(i++ < 1000000){
	var map = {};
	map['key'] = 'value';
}

t2 = +new Date() - t1;
console.log(t2);

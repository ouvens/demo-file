
'use strict'
var i = 0;
var t1 = +new Date(),
	t2;
var vars = {
	name: 'ouven',
	address: 'tencent'
}

while(i++ < 1000000){

	let str = 'string text ' + vars.name + 'string '+ vars.address;
}

t2 = +new Date() - t1;
console.log(t2);

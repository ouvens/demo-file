
'use strict'
let i = 0;
let t1 = +new Date(),
	t2;

while(i++ < 1000000){
	
	let map = new Map();
	map.set('key','value');
}

t2 = +new Date() - t1;
console.log(t2);

'use strict'
let i = 0;
let t1 = +new Date(),
	t2;

while(i++ < 1000000){
	const a = 1;
	const b = '1';
	const c = true;
	const d = {};
	const e = [];
}

t2 = +new Date() - t1;
console.log(t2);

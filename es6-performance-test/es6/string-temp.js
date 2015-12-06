
'use strict'
let i = 0;
let t1 = +new Date(),
	t2;

let vars = {
	name: 'ouven',
	address: 'tencent'
};

while(i++ < 1000000){

	let str = `string text ${vars.name} string ${vars.address}`;
	
}

t2 = +new Date() - t1;
console.log(t2);

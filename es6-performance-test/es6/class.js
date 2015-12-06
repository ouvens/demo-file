
'use strict'
let i = 0;
let t1 = +new Date(),
	t2;

while(i++ < 100000){
	class A{
		constructor() {
		   this.name = 'ouven';
		}
		getName(){
			return this.name;
		}
	}

	const a = new A();
	a.getName();
}

t2 = +new Date() - t1;
console.log(t2);


'use strict';
var i = 0;
var t1 = +new Date(),
	t2;

while(i++ < 100000){
	function A(){
		this.name = 'ouven';
	}
	A.prototype.getName = function() {
		return this.name;
	};
	var a = new A();
	a.getName();
}

t2 = +new Date() - t1;
console.log(t2);

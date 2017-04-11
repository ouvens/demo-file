var Try = Try || {
    defineError: defineError,
    report: _reportError,
    init: function () {
        // 定义初始化函数方法
        defineError(['__def', 'require', 'define', 'setTimeout', 'setInterval'], window);

    }
};


/**
 * 注入错误入口封装，定义哪些注入方法可以被try...catch
 * @param  {[type]} fnArray [函数方法数组或单个函数方法名称;当为函数方法名时，执行返回内容带try...catch的函数]
 * @param  {[type]} scope   [当前的作用域this]
 * @return {[type]}         [返回函数]
 */

function defineError(fnArray, scope) {

    var noop = function() {};
    scope = scope || this;

    if (Object.prototype.toString.call(fnArray).slice(8, -1).toLowerCase() === 'array') {
        for (var i = 0, length = fnArray.length; i < length; i++) {
            _wrapFunctionArray(fnArray[i], scope);
        }
        return true;
    } else if (typeof(fnArray) === 'string') {

        return _wrapFunction(scope[fnArray]);

    } else if(typeof(fnArray) === 'function'){
        return _wrapFunction(fnArray);
    }else{
        return noop;
    }
}

// 包裹单个函数作用域，将原有函数封装，形成带有try...catch包裹的函数
function _wrapFunction(fn){
    // ES6 的语法
    return function(...params) {

        try {
            return fn.apply(this, params); // 将函数参数用 try...catch 包裹 
        } catch (e) {
            _reportError(e);
        }
    }
}

// 包裹scope作用域下的属性函数
function _wrapFunctionArray(fnName, scope) {

    scope[fnName] = _wrapFunction(scope[fnName]);

    var _newFn = scope[fnName] || function() {};

    if (typeof(scope[fnName]) !== 'function') {
        return;
    }

    if (['__def', 'require', 'define'].indexOf(fnName) >= 0) {

        scope[fnName] = function(id, deps, factory) {

            if (typeof(factory) !== 'function' || !factory) {
                return _newFn(id, deps);
            } else {
                return _newFn(id, deps, _wrapFunction(factory));
            }
        };
    } else if (['setInterval', 'setTimeout'].indexOf(fnName) >= 0) {
        scope[fnName] = function(fn, time) {
            // ES6 的语法
            return _newFn(_wrapFunction(fn), time);
        };
    } else if(['on'].indexOf(fnName) >= 0) {
        scope[fnName] = function(eventName, subElem, fn) {
            if (typeof(fn) !== 'function' || !fn) {
                return _newFn(eventName, _wrapFunction(fn));
            } else {
                return _newFn(eventName, subElem, _wrapFunction(fn));
            }
        };
    } else {
        return _newFn.call(this, arguments);
    }
}

function _reportError(e, opt) {
    opt = {};

    console.log('错误类型' + e.name);
    console.log('错误信息' + e.message);
    console.log('错误堆栈' + e.stack);

    // console.log(e.stack.split('\n'));
    setTimeout(function() {
        __WPO && __WPO.error(e.name, e.message + e.stack);
    }, 5000);
}



// 错误上报
// window.onerror = function(msg, file, line, row, errorObj) {
//     console.log(msg);   // script error.
//     console.log(file);  // 
//     console.log(row);   // 0
//     console.log(column);  // 0
//     console.log(errorObj); // {}
//     // setTimeout(function() {
//     //     __WPO && __WPO.error(e.name, e.message + e.stack);
//     // }, 5000);
// }

Try.init();

// defineError(['on'], ($ && $.fn));
// demo
// function a(num){

//     console.log(num + 1);
// }

// b = defineError(a);
// b(2);


//  打点性能测试
function perfomanceFn() {
    // 巨大的操作模块
    var a = {
        b: 1,
        c: 1   　
    };
    var arr = [1,2,3,4,5];
    var c = function(){
        return a.b + a.c;
    }

    for(var i =1; i< 100; i++){
        a.b += i;
        a.c += 2*i;

        arr.map(function(item) {
           return item * 3; 
        });

    }

    return c();
}


var T1 = +new Date(), T2,T3;
for(let i =0; i < 10000; i++){
    defineError(perfomanceFn)();
}

T2 = +new Date();
console.log(T2 - T1);

for(let i =0; i < 10000; i++){
    perfomanceFn();
}

T3 = +new Date();
console.log(T3 - T2);     // 相差40-60ms，8%左右，所以这里性能问题影响不大



- [FE-interview](#fe-interview)
  - [$HTML， HTTP，web综合问题](#$html，-http，web综合问题)
    - [web开发中会话跟踪的方法有哪些](#web开发中会话跟踪的方法有哪些)
    - 1. Cookies
    - 2. URL重写
    - 3. 隐藏式表单域
    - 4. Session机制
    - ### Cookies
    -      Cookies是使用最广泛的会话跟踪机制，Cookies是有服务器创建，并把Cookies信息保存在用户机器上的硬盘上，下次用户再次访问该站点服务器的时候，保存在用户机器上硬盘的Cookies信息就被送回给服务器。一般Cookies一般不多于4KB，且用户的敏感信息如信用卡账号密码不应该保存在Cookies中。
    -###URL重写
          URL重用户在每个URL结尾附加标识回话的数据，与标识符关联的服务器保存有关与会话的数据，如我们访问某个新闻的时候，在地址栏我们一般会看到这样的信息：http://www.XXX.com/news?id=??,通常的话id后面的问号表示该条新闻在后台数据库中的新闻表的id。URL重写能够在客户端停用cookies或者不支持cookies的时候仍然能够发挥作用。
    -### 隐藏式表单域
         通常，在表单中我们使用隐藏表单域的时候会有这么一句代码：<input type=”hidden” name=”XXX”  value=”XXX”/>。通过给type属性赋值为hidden值来实现隐藏，这样用户在浏览的时候看不到这行代码的数据，但是当用户通过查看源代码还是可以看到的。
    -####Session机制
         这个机制要慎用，特别是对于访问量很大的站点，因为这种机制是吧Session信息保存在服务器端。如果访问量特别大的话，对于服务器的承受力的要求有多高是可想而知的。
    - 
    - [`<img>`的`title`和`alt`有什么区别](#img的title和alt有什么区别)
    - src 指 "source"。源属性的值是图像的 URL 地址。要在页面上显示图像，你需要使用源属性（src）。
       定义图像的语法是：
        `<img src="url" />`` 
        URL 指存储图像的位置。如果名为 "boat.gif" 的图像位于 www.w3school.com.cn 的 images 目录中，那么其 URL 为 http://www.w3school.com.cn/images/boat.gif。
    -alt 属性用来为图像定义一串预备的可替换的文本。替换文本属性的值是用户定义的。
        定义图像的语法是：
       `<img src="boat.gif" alt="Big Boat">`
       在浏览器无法载入图像时，替换文本属性告诉读者她们失去的信息。此时，浏览器将显示这个替代性的文本而不是图像。为页面上的图像都加上替换文本属性是个好习惯，这样有助于更好的显示信息，并且对于那些使用纯文本浏览器的人来说是非常有用的。

    - [doctype是什么,举例常见doctype及特点](#doctype是什么举例常见doctype及特点)
      1. DOCTYPE是Document Type（文档类型）的简写，在页面中，用来指定页面所使用的XHTML（或者HTML）的版本。要想制作符合标准的页面，一个必不可少的关键组成部分就是DOCTYPE声明。只有确定了一个正确的DOCTYPE，XHTML里的标识和CSS才能正常生效。
      2.  常见的doctype及特点
          常见的doctype有过渡的（Transitional）、严格的（Strict）和框架的（Frameset）。
            -过渡的：一种要求不很严格的DTD，允许在页面中使用HTML4.01的标识（符合xhtml语法标准）。过渡的DTD的写法如下：
            `"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`
            -严格的：一种要求严格的DTD，不允许使用任何表现层的标识和属性，严格的DTD的写法如下：
            `"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">`
            -框架的：一种专门针对框架页面所使用的DTD，当页面中含有框架元素时，就要采用这种DTD。框架的DTD的写法如下：
            `"http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">`
          
    - [HTML全局属性(global attribute)有哪些](#html全局属性global-attribute有哪些)
    - [什么是web语义化,有什么好处](#什么是web语义化有什么好处)
    - [HTTP method](#http-method)
    - [从浏览器地址栏输入url到显示页面的步骤(以HTTP为例)](#从浏览器地址栏输入url到显示页面的步骤以http为例)
    - [HTTP request报文结构是怎样的](#http-request报文结构是怎样的)
    - [HTTP response报文结构是怎样的](#http-response报文结构是怎样的)
    - [如何进行网站性能优化](#如何进行网站性能优化)
    - [什么是渐进增强](#什么是渐进增强)
    - [HTTP状态码及其含义](#http状态码及其含义)
    - [常见排序算法的时间复杂度,空间复杂度](#常见排序算法的时间复杂度空间复杂度)
    - [前端需要注意哪些SEO](#前端需要注意哪些seo)
  - [$CSS部分](#$css部分)
    - [CSS选择器有哪些](#css选择器有哪些)
    - [css sprite是什么,有什么优缺点](#css-sprite是什么有什么优缺点)
    - [`display: none;`与`visibility: hidden;`的区别](#display-none与visibility-hidden的区别)
    - [css hack原理及常用hack](#css-hack原理及常用hack)
    - [specified value,computed value,used value计算方法](#specified-valuecomputed-valueused-value计算方法)
    - [`link`与`@import`的区别](#link与@import的区别)
    - [``display: block;``和``display: inline;``的区别](#display-block和display-inline的区别)
    - [PNG,GIF,JPG的区别及如何选](#pnggifjpg的区别及如何选)
    - [CSS有哪些继承属性](#css有哪些继承属性)
    - [IE6浏览器有哪些常见的bug,缺陷或者与标准不一致的地方,如何解决](#ie6浏览器有哪些常见的bug缺陷或者与标准不一致的地方如何解决)
    - [容器包含若干浮动元素时如何清理(包含)浮动](#容器包含若干浮动元素时如何清理包含浮动)
    - [什么是FOUC?如何避免](#什么是fouc如何避免)
    - [如何创建块级格式化上下文(block formatting context),BFC有什么用](#如何创建块级格式化上下文block-formatting-contextbfc有什么用)
    - [display,float,position的关系](#displayfloatposition的关系)
    - [外边距折叠(collapsing margins)](#外边距折叠collapsing-margins)
    - [如何确定一个元素的包含块(containing block)](#如何确定一个元素的包含块containing-block)
    - [stacking context,布局规则](#stacking-context布局规则)
    - [如何水平居中一个元素](#如何水平居中一个元素)
    - [如何竖直居中一个元素](#如何竖直居中一个元素)


    
  - [$javascript概念部分](#$javascript概念部分)
    - [DOM元素e的e.getAttribute(propName)和e.propName有什么区别和联系](#dom元素e的egetattributepropname和epropname有什么区别和联系)
    > e.getAttribute()，是标准DOM操作文档元素属性的方法，具有通用性可在任意文档上使用，返回元素在源文件中设置的属性
   e.propName通常是在HTML文档中访问特定元素的特性，浏览器解析元素后生成对应对象（如a标签生成HTMLAnchorElement），这些对象的特性会根据特定规则结合属性设置得到，对于没有对应特性的属性，只能使用getAttribute进行访问
   e.getAttribute()返回值是源文件中设置的值，类型是字符串或者null（有的实现返回""）
   e.propName返回值可能是字符串、布尔值、对象、undefined等
   大部分attribute与property是一一对应关系，修改其中一个会影响另一个，如id，title等属性
   一些布尔属性`<input hidden/>`的检测设置需要hasAttribute和removeAttribute来完成，或者设置对应property
   像`<a href="../index.html">link</a>`中href属性，转换成property的时候需要通过转换得到完整URL
   一些attribute和property不是一一对应如：form控件中`<input value="hello"/>`对应的是defaultValue，修改或设置value property修改的是控件当前值，setAttribute修改value属性不会改变value property
    - [offsetWidth/offsetHeight,clientWidth/clientHeight与scrollWidth/scrollHeight的区别](#offsetwidthoffsetheightclientwidthclientheight与scrollwidthscrollheight的区别)
     >1. offsetWidth/offsetHeight返回值包含content + padding + border，效果与e.getBoundingClientRect()相同
     >2. clientWidth/clientHeight返回值只包含content + padding，如果有滚动条，也不包含滚动条
     >3. scrollWidth/scrollHeight返回值包含content + padding + 溢出内容的尺寸
    - [XMLHttpRequest通用属性和方法](#xmlhttprequest通用属性和方法)
    >1.readyState:表示请求状态的整数，取值：
       - UNSENT（0）：对象已创建
       - OPENED（1）：open()成功调用，在这个状态下，可以为xhr设置请求头，或者使用send()发送请求
       - HEADERS_RECEIVED(2)：所有重定向已经自动完成访问，并且最终响应的HTTP头已经收到
       - LOADING(3)：响应体正在接收
       - DONE(4)：数据传输完成或者传输产生错误
       
    >2 . onreadystatechange：readyState改变时调用的函数
    >3. status：服务器返回的HTTP状态码（如，200， 404）
    >4. statusText:服务器返回的HTTP状态信息（如，OK，No Content）
     >5. responseText:作为字符串形式的来自服务器的完整响应
     >6. responseXML: Document对象，表示服务器的响应解析成的XML文档
     >7.abort():取消异步HTTP请求
     >8.getAllResponseHeaders(): 返回一个字符串，包含响应中服务器发送的全部HTTP报头。每个报头都是一个用冒号分隔开的名/值对，并且使用一个回车/换行来分隔报头行
     >9.getResponseHeader(headerName):返回headName对应的报头值
     >10.open(method, url, asynchronous [, user, password]):初始化准备发送到服务器上的请求。method是HTTP方法，不区分大小写；url是请求发送的相对或绝对URL；asynchronous表示请求是否异步；user和password提供身份验证
     >11.setRequestHeader(name, value):设置HTTP报头
     >12. send(body):对服务器请求进行初始化。参数body包含请求的主体部分，对于POST请求为键值对字符串；对于GET请求，为null
    - [focus/blur与focusin/focusout的区别与联系](#focusblur与focusinfocusout的区别与联系)
    >1.focus/blur不冒泡，focusin/focusout冒泡
    >
    >2.focus/blur兼容性好，focusin/focusout在除FireFox外的浏览器下都保持良好兼容性，如需使用事件托管，可考虑在FireFox下使用事件捕获elem.addEventListener('focus', handler, true)

    >3.可获得焦点的元素：
    
    > i. window
    
    >ii.链接被点击或键盘操作

    >iii.表单空间被点击或键盘操作

    >iv.设置tabindex属性的元素被点击或键盘操作
    - [mouseover/mouseout与mouseenter/mouseleave的区别与联系](#mouseovermouseout与mouseentermouseleave的区别与联系)
    
      >1.mouseover/mouseout是标准事件，所有浏览器都支持；mouseenter/mouseleave是IE5.5引入的特有事件后来被DOM3标准采纳，现代标准浏览器也支持

     >2.mouseover/mouseout是冒泡事件；mouseenter/mouseleave不冒泡。需要为多个元素监听鼠标移入/出事件时，推荐mouseover/mouseout托管，提高性能

     >3.标准事件模型中event.target表示发生移入/出的元素,vent.relatedTarget对应移出/如元素；在老IE中event.srcElement表示发生移入/出的元素，event.toElement表示移出的目标元素，event.fromElement表示移入时的来源元素

    - [sessionStorage,localStorage,cookie区别](#sessionstoragelocalstoragecookie区别) 
    
    >1.都会在浏览器端保存，有大小限制，同源限制
    >
    >2.cookie会在请求时发送到服务器，作为会话标识，服务器可修改cookie；web storage不会发送到服务器
    >
    >3.cookie有path概念，子路径可以访问父路径cookie，父路径不能访问子路径cookie
    >
    >4.有效期：cookie在设置的有效期内有效，默认为浏览器关闭；sessionStorage在窗口关闭前有效，localStorage长期有效，直到用户删除
    >
    >5.共享：sessionStorage不能共享，localStorage在同源文档之间共享，cookie在同源且符合path规则的文档之间共享
    >
    >6.localStorage的修改会促发其他文档窗口的update事件
    >
    >7.cookie有secure属性要求HTTPS传输
    >
    >8.浏览器不能保存超过300个cookie，单个服务器不能超过20个，每个cookie不能超过4k。web storage大小支持能达到5M
    - [javascript跨域通信](#javascript跨域通信)
    >同源：两个文档同源需满足

     *协议相同

     *域名相同

     *端口相同

    跨域通信：js进行DOM操作、通信时如果目标与当前窗口不满足同源条件，浏览器为了安全会阻止跨域操作。跨域通信通常有以下方法

    > 如果是log之类的简单单项通信，新建`<img>,<script>,<link>,<iframe>`元素，通过`src，href`属性设置为目标`url`。实现跨域请求
    >
    > 如果请求json数据，使用`<script>`进行`jsonp`请求
    >
    > 现代浏览器中多窗口通信使用`HTML5`规范的`targetWindow.postMessage(data, origin);`其中data是需要发送的对象，`origin`是目标窗口的`origin。window.addEventListener('message', handler, false);handler的event.data`是`postMessage`发送来的数据，`event.origin`是发送窗口的`origin，event.source`是发送消息的窗口引用
    > 
    >内部服务器代理请求跨域url，然后返回数据
    >
    > 跨域请求数据，现代浏览器可使用HTML5规范的CORS功能，只要目标服务器返回HTTP头部Access-`Control-Allow-Origin: *`即可像普通ajax一样访问跨域资源
    - [javascript有哪几种数据类型](#javascript有哪几种数据类型)
    > 六种基本数据类型

    undefined

     null

    string

    boolean

    number

    symbol(ES6) 一种引用类型

    Object
    - [什么闭包,闭包有什么用](#什么闭包闭包有什么用)
    >闭包是在某个作用域内定义的函数，它可以访问这个作用域内的所有变量。闭包作用域链通常包括三个部分：

    函数本身作用域。

    闭包定义时的作用域。
 
    全局作用域。

    闭包常见用途：

    >1.创建特权方法用于访问控制
    >
    >2.事件处理程序及回调
    - [javascript有哪几种方法定义函数](#javascript有哪几种方法定义函数)
    >1.函数声明表达式
    >
     2.function操作符
    >
     3.Function 构造函数
    >
     4.ES6:arrow function
    
    - [应用程序存储和离线web应用](#应用程序存储和离线web应用)
    > HTML5新增应用程序缓存，允许web应用将应用程序自身保存到用户浏览器中，用户离线状态也能访问。 
    > 
    > 1.为html元素设置manifest属性:<html manifest="myapp.appcache">，其中后缀名只是一个约定，真正识别方式是通过text/cache-manifest作为MIME类型。所以需要配置服务器保证设置正确 
    > 
    > 2.manifest文件首行为CACHE MANIFEST，其余就是要缓存的URL列表，每个一行，相对路径都相对于manifest文件的url。注释以#开头 3.url分为三种类型：CACHE:为默认类型。NETWORK：表示资源从不缓存。 FALLBACK:每行包含两个url，第二个URL是指需要加载和存储在缓存中的资源， 第一个URL是一个前缀。任何匹配该前缀的URL都不会缓存，如果从网络中载入这样的URL失败的话，就会用第二个URL指定的缓存资源来替代。
    - [客户端存储localStorage和sessionStorage](#客户端存储localstorage和sessionstorage)
    >	localStorage有效期为永久，sessionStorage有效期为顶层窗口关闭前
    >	
	>同源文档可以读取并修改localStorage数据，sessionStorage只允许同一个窗口下的文档访问，如通过iframe引入的同源文档。
	>
	>Storage对象通常被当做普通javascript对象使用：通过设置属性来存取字符串值，也可以通过setItem(key, value)设置，getItem(key)读取，removeItem(key)删除，clear()删除所有数据，length表示已存储的数据项数目，key(index)返回对应索引的key

    - [cookie及其操作](#cookie及其操作)
    >- cookie是web浏览器存储的少量数据，最早设计为服务器端使用，作为HTTP协议的扩展实现。cookie数据会自动在浏览器和服务器之间传输。
    >	
    >- 通过读写cookie检测是否支持
    >
    >- cookie属性有名，值，max-age，path, domain，secure；
    >
    >- cookie默认有效期为浏览器会话，一旦用户关闭浏览器，数据就丢失，通过设置max-age=seconds属性告诉浏览器cookie有效期
    >
    >- cookie作用域通过文档源和文档路径来确定，通过path和domain进行配置，web页面同目录或子目录文档都可访问
    >
    >- 通过cookie保存数据的方法为：为document.cookie设置一个符合目标的字符串如下
    >
    >- 读取document.cookie获得'; '分隔的字符串，key=value,解析得到结果

    
    - [javascript有哪些方法定义对象](#javascript有哪些方法定义对象)
    >1.	对象字面量： var obj = {};
    >2. 构造函数： var obj = new Object();
    >3.	Object.create(): var obj = Object.create(Object.prototype);

    - [===运算符判断相等的流程是怎样的](#===运算符判断相等的流程是怎样的)
    >1.	如果两个值不是相同类型，它们不相等
    >2. 如果两个值都是null或者都是undefined，它们相等
    >3.	如果两个值都是布尔类型true或者都是false，它们相等
    >4.	如果其中有一个是NaN，它们不相等
    >5.	如果都是数值型并且数值相等，他们相等， -0等于0
    >6.	如果他们都是字符串并且在相同位置包含相同的16位值，他它们相等；如果在长度或者内容上不等，它们不相等；两个字符串显示结果相同但是编码不同==和===都认为他们不相等
    >7.	如果他们指向相同对象、数组、函数，它们相等；如果指向不同对象，他们不相等

    - [==运算符判断相等的流程是怎样的](#==运算符判断相等的流程是怎样的)
    >1.	如果两个值类型相同，按照===比较方法进行比较
    >2.	如果类型不同，使用如下规则进行比较
      >i.如果其中一个值是null，另一个是undefined，它们相等
      >ii.	如果一个值是数字另一个是字符串，将字符串转换为数字进行比较
      >iii.	如果有布尔类型，将true转换为1，false转换为0，然后用==规则继续比较
      >iv.	如果一个值是对象，另一个是数字或字符串，将对象转换为原始值然后用==规则继续比较
      >v.	其他所有情况都认为不相等

    - [对象到字符串的转换步骤](#对象到字符串的转换步骤)
    >1.	如果对象有toString()方法，javascript调用它。如果返回一个原始值（primitive value如：string number boolean）,将这个值转换为字符串作为结果
    >2.	如果对象没有toString()方法或者返回值不是原始值，javascript寻找对象的valueOf()方法，如果存在就调用它，返回结果是原始值则转为字符串作为结果
    >3.	否则，javascript不能从toString()或者valueOf()获得一个原始值，此时throws a TypeError

    - [对象到数字的转换步骤](#对象到数字的转换步骤)
    > 1. 如果对象有valueOf()方法并且返回元素值，javascript将返回值转换为数字作为结果
    >2. 否则，如果对象有toString()并且返回原始值，javascript将返回结果转换为数字作为结果
    >3. 否则，throws a TypeError

    - [<,>,<=,>=的比较规则](#==的比较规则)
    > 所有比较运算符都支持任意类型，但是比较只支持数字和字符串，所以需要执行必要的转换然后进行比较，转换规则如下: 
    > 1. 如果操作数是对象，转换为原始值：如果valueOf方法返回原始值，则使用这个值，否则使用toString方法的结果，如果转换失败则报错 
    > 2. 经过必要的对象到原始值的转换后，如果两个操作数都是字符串，按照字母顺序进行比较（他们的16位unicode值的大小）
    > 3. 否则，如果有一个操作数不是字符串，将两个操作数转换为数字进行比较
    - [+运算符工作流程](#运算符工作流程)
    >1.	如果有操作数是对象，转换为原始值
    >2.	此时如果有一个操作数是字符串，其他的操作数都转换为字符串并执行连接
    >3.	否则：所有操作数都转换为数字并执行加法

    - [函数内部arguments变量有哪些特性,有哪些属性,如何将它转换为数组](#函数内部arguments变量有哪些特性有哪些属性如何将它转换为数组)
    >•	arguments所有函数中都包含的一个局部变量，是一个类数组对象，对应函数调用时的实参。如果函数定义同名参数会在调用时覆盖默认对象
    >
    >•	arguments[index]分别对应函数调用时的实参，并且通过arguments修改实参时会同时修改实参
    >
    >•	arguments.length为实参的个数（Function.length表示形参长度）
    >
    >•	arguments.callee为当前正在执行的函数本身，使用这个属性进行递归调用时需注意this的变化
    >
    >•	arguments.caller为调用当前函数的函数（已被遗弃）
    >
    >•	转换为数组：var args = Array.prototype.slice.call(arguments, 0);

    - [DOM事件模型是如何的,编写一个EventUtil工具类实现事件管理兼容](#dom事件模型是如何的编写一个eventutil工具类实现事件管理兼容)
    >•	DOM事件包含捕获（capture）和冒泡（bubble）两个阶段：捕获阶段事件从window开始触发事件然后通过祖先节点一次传递到触发事件的DOM元素上；冒泡阶段事件从初始元素依次向祖先节点传递直到window
    >•	标准事件监听elem.addEventListener(type, handler, capture)/elem.removeEventListener(type, handler, capture)：handler接收保存事件信息的event对象作为参数，event.target为触发事件的对象，handler调用上下文this为绑定监听器的对象，event.preventDefault()取消事件默认行为，event.stopPropagation()/event.stopImmediatePropagation()取消事件传递
    >•	老版本IE事件监听elem.attachEvent('on'+type, handler)/elem.detachEvent('on'+type, handler)：handler不接收event作为参数，事件信息保存在window.event中，触发事件的对象为event.srcElement，handler执行上下文this为window使用闭包中调用handler.call(elem, event)可模仿标准模型，然后返回闭包，保证了监听器的移除。event.returnValue为false时取消事件默认行为，event.cancleBubble为true时取消时间传播
    >•	通常利用事件冒泡机制托管事件处理程序提高程序性能。

    - [评价一下三种方法实现继承的优缺点,并改进](#评价一下三种方法实现继承的优缺点并改进)
  
    >function Shape() {}

    function Rect() {}

    >// 方法1
    Rect.prototype = new Shape();

    >// 方法2
    Rect.prototype = Shape.prototype;

    >// 方法3
    Rect.prototype = Object.create(Shape.prototype);

    >Rect.prototype.area = function () {
    // do something
    };
    >
    >方法1：
    >优点：正确设置原型链实现继承
    >2.	优点：父类实例属性得到继承，原型链查找效率提高，也能为一些属性提供合理的默认值
    >3.	缺点：父类实例属性为引用类型时，不恰当地修改会导致所有子类被修改
    >4.	缺点：创建父类实例作为子类原型时，可能无法确定构造函数需要的合理参数，这样提供的参数继承给子类没有实际意义，当子类需要这些参数时应该在构造函数中进行初始化和设置
    >5.	总结：继承应该是继承方法而不是属性，为子类设置父类实例属性应该是通过在子类构造函数中调用父类构造函数进行初始化
    >
    >方法2：
    >1.	优点：正确设置原型链实现继承
    >2.	缺点：父类构造函数原型与子类相同。修改子类原型添加方法会修改父类
    >
    >方法3：
    >1.	优点：正确设置原型链且避免方法1.2中的缺点
    >2.	缺点：ES5方法需要注意兼容性
    >
    >改进：
    >1.	所有三种方法应该在子类构造函数中调用父类构造函数实现实例属性初始化
    `function Rect() {
    Shape.call(this);
    }`

    >1.	用新创建的对象替代子类默认原型，设置Rect.prototype.constructor = Rect;保证一致性
    >
    >2.	第三种方法的polyfill：
    function create(obj) {
    >
    if (Object.create) {
        return Object.create(obj);
    }

    function f() {};
    f.prototype = obj;
    return new f();
    }
- [$javascript编程部分](#$javascript编程部分)
    - [请用原生js实现一个函数,给页面制定的任意一个元素添加一个透明遮罩(透明度可变,默认0.2),使这个区域点击无效,要求兼容IE8+及各主流浏览器,遮罩层效果如下图所示:](#请用原生js实现一个函数给页面制定的任意一个元素添加一个透明遮罩透明度可变默认02使这个区域点击无效要求兼容ie8及各主流浏览器遮罩层效果如下图所示)
    ><pre> `<style>`
    `#target {
     width: 200px;
     height: 300px;
     margin: 40px;
     background-color: tomato;
     }
    </style>`
    > `<div id="target"></div>`
    > `<script>`
    function addMask(elem, opacity) {
    opacity = opacity || 0.2;
    var rect = elem.getBoundingClientRect();
    var style = getComputedStyle(elem, null);
    var mask = document.createElement('div');
    mask.style.position = 'absolute';
    var marginLeft = parseFloat(style.marginLeft);
    mask.style.left = (elem.offsetLeft - marginLeft) + 'px';
    var marginTop = parseFloat(style.marginTop);
    mask.style.top = (elem.offsetTop - marginTop) + 'px';
    mask.style.zIndex = 9999;
    mask.style.opacity = '' + opacity;
    mask.style.backgroundColor = '#000';
    mask.style.width = (parseFloat(style.marginLeft) +
        parseFloat(style.marginRight) + rect.width) + 'px';
    mask.style.height = (parseFloat(style.marginTop) +
        parseFloat(style.marginBottom) + rect.height) + 'px';
    elem.parentNode.appendChild(mask);
    }
    var target = document.getElementById('target');
    addMask(target);

    `target.addEventListener('click', function () {
    console.log('click');
    }, false);`
    >
    >`</script> `</pre>
    	
    - [请用代码写出(今天是星期x)其中x表示当天是星期几,如果当天是星期一,输出应该是"今天是星期一"](#请用代码写出今天是星期x其中x表示当天是星期几如果当天是星期一输出应该是今天是星期一)
    <pre>var days = ['日','一','二','三','四','五','六'];
    var date = new Date();
    console.log('今天是星期' + days[date.getDay()]);
    </pre>
    
    - [下面这段代码想要循环延时输出结果0 1 2 3 4,请问输出结果是否正确,如果不正确,请说明为什么,并修改循环内的代码使其输出正确结果](#下面这段代码想要循环延时输出结果0-1-2-3-4请问输出结果是否正确如果不正确请说明为什么并修改循环内的代码使其输出正确结果)
    <pre>for (var i = 0; i < 5; ++i) {
     setTimeout(function () {
    console.log(i + ' ');
    }, 100);
    }</pre>
    不能输出正确结果，因为循环中setTimeout接受的参数函数通过闭包访问变量i。JavaScript运行环境为单线程，setTimeout注册的函数需要等待线程空闲才能执行，此时for循环已经结束，i值为5.五个定时输出都是5 修改方法：将setTimeout放在函数立即调用表达式中，将i值作为参数传递给包裹函数，创建新闭包
    <pre>for (var i = 0; i < 5; ++i) {
    (function (i) {
    setTimeout(function () {
      console.log(i + ' ');
    }, 100);
    }(i));
    }
    </pre>
    - [现有一个Page类,其原型对象上有许多以post开头的方法(如postMsg);另有一拦截函数chekc,只返回ture或false.请设计一个函数,该函数应批量改造原Page的postXXX方法,在保留其原有功能的同时,为每个postXXX方法增加拦截验证功能,当chekc返回true时继续执行原postXXX方法,返回false时不再执行原postXXX方法](#现有一个page类其原型对象上有许多以post开头的方法如postmsg另有一拦截函数chekc只返回ture或false请设计一个函数该函数应批量改造原page的postxxx方法在保留其原有功能的同时为每个postxxx方法增加拦截验证功能当chekc返回true时继续执行原postxxx方法返回false时不再执行原postxxx方法)
    <pre>function Page() {}
    Page.prototype = {
     constructor: Page,
     postA: function (a) {
    console.log('a:' + a);
    },
    postB: function (b) {
    console.log('b:' + b);
    },
    postC: function (c) {
    console.log('c:' + c);
    },
    check: function () {
    return Math.random() > 0.5;
    }
    }
    function checkfy(obj) {
     for (var key in obj) {
    if (key.indexOf('post') === 0 && typeof obj[key] === 'function') {
      (function (key) {
        var fn = obj[key];
        obj[key] = function () {
          if (obj.check()) {
            fn.apply(obj, arguments);
          }
        };
      }(key));
    }
    }
    } // end checkfy()
    checkfy(Page.prototype);
    var obj = new Page();
    obj.postA('checkfy');
     obj.postB('checkfy');
    obj.postC('checkfy');
    </pre>

    - [完成下面的tool-tip](#完成下面的tool-tip)
    - [编写javascript深度克隆函数deepClone](#编写javascript深度克隆函数deepclone)
    <pre>nction deepClone(obj) {
    var _toString = Object.prototype.toString;
    // null, undefined, non-object, function
    if (!obj || typeof obj !== 'object') {
        return obj;
    }
    // DOM Node
    if (obj.nodeType && 'cloneNode' in obj) {
        return obj.cloneNode(true);
    }
    // Date
    if (_toString.call(obj) === '[object Date]') {
        return new Date(obj.getTime());
    }
    // RegExp
    if (_toString.call(obj) === '[object RegExp]') {
        var flags = [];
        if (obj.global) { flags.push('g'); }
        if (obj.multiline) { flags.push('m'); }
        if (obj.ignoreCase) { flags.push('i'); }

        return new RegExp(obj.source, flags.join(''));
    }
    var result = Array.isArray(obj) ? [] :
        obj.constructor ? new obj.constructor() : {};

    for (var key in obj ) {
        result[key] = deepClone(obj[key]);
    }
    return result;
    }
    function A() {
    this.a = a;
    }
    var a = {
    name: 'qiu',
    birth: new Date(),
    pattern: /qiu/gim,
    container: document.body,
    hobbys: ['book', new Date(), /aaa/gim, 111]
    };
    var c = new A();
    var b = deepClone(c);
    console.log(c.a === b.a);
    console.log(c, b);
    </pre>
    - [补充代码,鼠标单击Button1后将Button1移动到Button2的后面](#补充代码鼠标单击button1后将button1移动到button2的后面)
    <pre> <!doctype html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>TEst</title>
    </head>
    <body>
    <div>
      <input type="button" id ="button1" value="1" />
      <input type="button" id ="button2" value="2" />
    </div>
    <script type="text/javascript">
    var btn1 = document.getElementById('button1');
    var btn2 = document.getElementById('button2');
    addListener(btn1, 'click', function (event) {
        btn1.parentNode.insertBefore(btn2, btn1);
    });
    function addListener(elem, type, handler) {
        if (elem.addEventListener) {
            elem.addEventListener(type, handler, false);
            return handler;
        } else if (elem.attachEvent) {
            function wrapper() {
                var event = window.event;
                event.target = event.srcElement;
                handler.call(elem, event);
            }
            elem.attachEvent('on' + type, wrapper);
            return wrapper;
        }
    }
    </script>
    </body>
    </html>
    </pre>
    - [网页中实现一个计算当年还剩多少时间的倒数计时程序,要求网页上实时动态显示"××年还剩××天××时××分××秒"](#网页中实现一个计算当年还剩多少时间的倒数计时程序要求网页上实时动态显示××年 还剩××天××时××分××秒)
      <pre><!doctype html>
     <html>
    <head>
    <meta charset="utf-8">
    <title>TEst</title>
     </head>
     <body>
    <span id="target"></span>
    <script type="text/javascript">
    // 为了简化。每月默认30天
    function getTimeString() {
        var start = new Date();
        var end = new Date(start.getFullYear() + 1, 0, 1);
        var elapse = Math.floor((end - start) / 1000);

        var seconds = elapse % 60 ;
        var minutes = Math.floor(elapse / 60) % 60;
        var hours = Math.floor(elapse / (60 * 60)) % 24;
        var days = Math.floor(elapse / (60 * 60 * 24)) % 30;
        var months = Math.floor(elapse / (60 * 60 * 24 * 30)) % 12;
        var years = Math.floor(elapse / (60 * 60 * 24 * 30 * 12));

        return start.getFullYear() + '年还剩' + years + '年' + months + '月' + days + '日'
            + hours + '小时' + minutes + '分' + seconds + '秒';
    }

    function domText(elem, text) {
        if (text == undefined) {

            if (elem.textContent) {
                return elem.textContent;
            } else if (elem.innerText) {
                return elem.innerText;
            }
        } else {
            if (elem.textContent) {
                elem.textContent = text;
            } else if (elem.innerText) {
                elem.innerText = text;
            } else {
                elem.innerHTML = text;
            }
        }
    }
    var target = document.getElementById('target');
    setInterval(function () {
        domText(target, getTimeString());
    }, 1000)
       </script>
     </body>
    </html></pre>
    - [完成一个函数,接受数组作为参数,数组元素为整数或者数组,数组元素包含整数或数组,函数返回扁平化后的数组](#完成一个函数接受数组作为参数数组元素为整数或者数组数组元素包含整数或数组函数返回扁平化后的数组)
     <pre>如：[1, [2, [ [3, 4], 5], 6]] => [1, 2, 3, 4, 5, 6]
    var data =  [1, [2, [ [3, 4], 5], 6]];

    function flat(data, result) {
        var i, d, len;
        for (i = 0, len = data.length; i < len; ++i) {
            d = data[i];
            if (typeof d === 'number') {
                result.push(d);
            } else {
                flat(d, result);
            }
        }
    }
    var result = [];
    flat(data, result);

    console.log(result);
     </pre>
    - [如何判断一个对象是否为数组](#如何判断一个对象是否为数组)
    >如果浏览器支持Array.isArray()可以直接判断否则需进行必要判断
     <pre>/**
      * 判断一个对象是否是数组，参数不是对象或者不是数组，返回false
     *
     * @param {Object} arg 需要测试是否为数组的对象
    * @return {Boolean} 传入参数是数组返回true，否则返回false
     */
    function isArray(arg) {
    if (typeof arg === 'object') {
        return Object.prototype.toString.call(arg) === '[object Array]';
    }
    return false;
    }</pre>
    - [请评价以下事件监听器代码并给出改进意见](#请评价以下事件监听器代码并给出改进意见)
    <pre>if (window.addEventListener) {
    var addListener = function (el, type, listener, useCapture) {
    el.addEventListener(type, listener, useCapture);
    };
    }
    else if (document.all) {
    addListener = function (el, type, listener) {
    el.attachEvent('on' + type, function () {
      listener.apply(el);
    });
    };
    }
    作用：浏览器功能检测实现跨浏览器DOM事件绑定
    优点：
      1.	测试代码只运行一次，根据浏览器确定绑定方法
      2.	通过listener.apply(el)解决IE下监听器this与标准不一致的地方
      3.	在浏览器不支持的情况下提供简单的功能，在标准浏览器中提供捕获功能
     缺点：
       1.	document.all作为IE检测不可靠，应该使用if(el.attachEvent)
       2.	addListener在不同浏览器下API不一样
      3.	listener.apply使this与标准一致但监听器无法移除
      4.	未解决IE下listener参数event。 target问题
     改进:
    var addListener;

    if (window.addEventListener) {
    addListener = function (el, type, listener, useCapture) {
    el.addEventListener(type, listener, useCapture);
    return listener;
     };
     }
    else if (window.attachEvent) {
    addListener = function (el, type, listener) {
    // 标准化this，event，target
    var wrapper = function () {
      var event = window.event;
      event.target = event.srcElement;
      listener.call(el, event);
    };

    el.attachEvent('on' + type, wrapper);
    return wrapper;
    // 返回wrapper。调用者可以保存，以后remove
    };
     }</pre>

    - [如何判断一个对象是否为函数](#如何判断一个对象是否为函数)
    <pre>/**
 * 判断对象是否为函数，如果当前运行环境对可调用对象（如正则表达式）
 * 的typeof返回'function'，采用通用方法，否则采用优化方法
 *
 * @param {Any} arg 需要检测是否为函数的对象
 * @return {boolean} 如果参数是函数，返回true，否则false
 */
function isFunction(arg) {
    if (arg) {
        if (typeof (/./) !== 'function') {
            return typeof arg === 'function';
        } else {
            return Object.prototype.toString.call(arg) === '[object Function]';
        }
    } // end if
    return false;
    }</pre>
    - [编写一个函数接受url中query string为参数,返回解析后的Object,query string使用application/x-www-form-urlencoded编码](#编写一个函数接受url中query-string为参数返回解析后的objectquery-string使用applicationx-www-form-urlencoded编码)
    <pre>/**
 * 解析query string转换为对象，一个key有多个值时生成数组
 *
 * @param {String} query 需要解析的query字符串，开头可以是?，
 * 按照application/x-www-form-urlencoded编码
 * @return {Object} 参数解析后的对象
 */
function parseQuery(query) {
    var result = {};

    // 如果不是字符串返回空对象
    if (typeof query !== 'string') {
        return result;
    }

    // 去掉字符串开头可能带的?
    if (query.charAt(0) === '?') {
        query = query.substring(1);
    }

    var pairs = query.split('&');
    var pair;
    var key, value;
    var i, len;

    for (i = 0, len = pairs.length; i < len; ++i) {
        pair = pairs[i].split('=');
        // application/x-www-form-urlencoded编码会将' '转换为+
        key = decodeURIComponent(pair[0]).replace(/\+/g, ' ');
        value = decodeURIComponent(pair[1]).replace(/\+/g, ' ');

        // 如果是新key，直接添加
        if (!(key in result)) {
            result[key] = value;
        }
        // 如果key已经出现一次以上，直接向数组添加value
        else if (isArray(result[key])) {
            result[key].push(value);
        }
        // key第二次出现，将结果改为数组
        else {
            var arr = [result[key]];
            arr.push(value);
            result[key] = arr;
        } // end if-else
    } // end for

    return result;
    }

    function isArray(arg) {
    if (arg && typeof arg === 'object') {
        return Object.prototype.toString.call(arg) === '[object Array]';
    }
    return false;
    }
    /**
    console.log(parseQuery('sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8'));
      */ </pre>

    - [解析一个完整的url,返回Object包含域与window.location相同](#解析一个完整的url返回object包含域与windowlocation相同)
    <pre>/**
 * 解析一个url并生成window.location对象中包含的域
 * location:
 * {
 *      href: '包含完整的url',
 *      origin: '包含协议到pathname之前的内容',
 *      protocol: 'url使用的协议，包含末尾的:',
 *      username: '用户名', // 暂时不支持
 *      password: '密码',  // 暂时不支持
 *      host: '完整主机名，包含:和端口',
 *      hostname: '主机名，不包含端口'
 *      port: '端口号',
 *      pathname: '服务器上访问资源的路径/开头',
 *      search: 'query string，?开头',
 *      hash: '#开头的fragment identifier'
 * }
 *
 * @param {string} url 需要解析的url
 * @return {Object} 包含url信息的对象
 *     /
    function parseUrl(url) {
    var result = {};
    var keys = ['href', 'origin', 'protocol', 'host',
                'hostname', 'port', 'pathname', 'search', 'hash'];
    var i, len;
    var regexp = /(([^:]+:)\/\/(([^:\/\?#]+)(:\d+)?))(\/[^?#]*)?(\?[^#]*)?(#.*)?/;

    var match = regexp.exec(url);

    if (match) {
        for (i = keys.length - 1; i >= 0; --i) {
            result[keys[i]] = match[i] ? match[i] : '';
        }
    }

    return result;
}
    </pre>
    - [完成函数getViewportSize返回指定窗口的视口尺寸](#完成函数getviewportsize返回指定窗口的视口尺寸)
    <pre>/**
    * 查询指定窗口的视口尺寸，如果不指定窗口，查询当前窗口尺寸
    **/
    function getViewportSize(w) {
    w = w || window;

    // IE9及标准浏览器中可使用此标准方法
    if ('innerHeight' in w) {
        return {
            width: w.innerWidth,
            height: w.innerHeight
        };
    }
    var d = w.document;
    // IE 8及以下浏览器在标准模式下
    if (document.compatMode === 'CSS1Compat') {
        return {
            width: d.documentElement.clientWidth,
            height: d.documentElement.clientHeight
        };
    }
    // IE8及以下浏览器在怪癖模式下
    return {
        width: d.body.clientWidth,
        height: d.body.clientHeight
    };
     }</pre>
    - [完成函数getScrollOffset返回窗口滚动条偏移量](#完成函数getscrolloffset返回窗口滚动条偏移量)
       <pre>/**
          * 获取指定window中滚动条的偏移量，如未指定则获取当前window
          * 滚动条偏移量
          *
          * @param {window} w 需要获取滚动条偏移量的窗口
          * @return {Object} obj.x为水平滚动条偏移量,obj.y为竖直滚动条偏移量
        */
     function getScrollOffset(w) {
    w =  w || window;
    // 如果是标准浏览器
    if (w.pageXOffset != null) {
        return {
            x: w.pageXOffset,
            y: w.pageYOffset
        };
    }
    // 老版本IE，根据兼容性不同访问不同元素
    var d = w.document;
    if (d.compatMode === 'CSS1Compat') {
        return {
            x: d.documentElement.scrollLeft,
            y: d.documentElement.scrollTop
        }
    }
    return {
        x: d.body.scrollLeft,
        y: d.body.scrollTop
    };
    }
    </pre>
    - [现有一个字符串richText,是一段富文本,需要显示在页面上.有个要求,需要给其中只包含一个img元素的p标签增加一个叫pic的class.请编写代码实现.可以使用jQuery或KISSY.](#现有一个字符串richtext是一段富文本需要显示在页面上有个要求需要给其中只包含一个img元素的p标签增加一个叫pic的class请编写代码实现可以使用jquery或kissy)
     <pre>function richText(text) {
    var div = document.createElement('div');
    div.innerHTML = text;
    var p = div.getElementsByTagName('p');
    var i, len;
    for (i = 0, len = p.length; i < len; ++i) {
        if (p[i].getElementsByTagName('img').length === 1) {
            p[i].classList.add('pic');
        }
    }
    return div.innerHTML;
    }
     </pre>
    - [请实现一个Event类,继承自此类的对象都会拥有两个方法on,off,once和trigger](#请实现一个event类继承自此类的对象都会拥有两个方法onoffonce和trigger)
    <pre>function Event() {
    if (!(this instanceof Event)) {
        return new Event();
    }
    this._callbacks = {};
    }
    Event.prototype.on = function (type, handler) {
    this_callbacks = this._callbacks || {};
    this._callbacks[type] = this.callbacks[type] || [];
    this._callbacks[type].push(handler);
    return this;
    };
    Event.prototype.off = function (type, handler) {
    var list = this._callbacks[type];
    if (list) {
        fo          list.splice(i, 1);
            }
        }
    }
    return this;
    };
    Event.prototype.trigger = function (type, data) {
    var list = this._callbacks[type];
    if (list) {
        for (var i = 0, len = list.length; i < len; ++i) {
            list[i].call(this, data);
        }
    }
    };
    Event.prototype.once = functio   (type, handler) {
    var self = this;
    function wrapper() {
        handler.apply(self, arguments);
        self.off(type, wrapper);
    }
    this.on(type, wrapper);
    return this;
     };</pre>

    - [编写一个函数将列表子元素顺序反转](#编写一个函数将列表子元素顺序反转)
    <pre>    <ul id="target">
        <li>1</li>
        <li>2</li>
         <li>3</li>
        <li>4</li>
        </ul>
    <script>
    var target = document.getElementById('target');
    var i;
    var frag = document.createDocumentFragment();

    for (i = target.children.length - 1; i &gt;= 0; --i) {
        frag.appendChild(target.children[i]);
    }
    target.appendChild(frag);
    </script></pre>

    - [以下函数的作用是?空白区域应该填写什么](#以下函数的作用是空白区域应该填写什么)
    <pre>// define
    (function (window) {
    function fn(str) {
        this.str = str;
    }

    fn.prototype.format = function () {
        var arg = __1__;
        return this.str.replace(__2__, function (a, b) {
            return arg[b] || '';
        });
    };

    window.fn = fn;
    })(window);

    // use
    (function () {
    var t = new fn('<p><a href="{0}">{1}</a><span>{2}</span></p>');
    console.log(t.format('http://www.alibaba.com', 'Alibaba', 'Welcome'));
    })();
    define部分定义一个简单的模板类，使用{}作为转义标记，中间的数字表示替换目标，format实参用来替换模板内标记 横线处填：
      1.	Array.prototype.slice.call(arguments, 0)
      2.	/\{\s*(\d+)\s*\}/g
    </pre>
    - [编写一个函数实现form的序列化(即将一个表单中的键值序列化为可提交的字符串)](#编写一个函数实现form的序列化即将一个表单中的键值序列化为可提交的字符串)
    <pre><form id="target">
    <select name="age">
        <option value="aaa">aaa</option>
        <option value="bbb" selected>bbb</option>
    </select>
    <select name="friends" multiple>
        <option value="qiu" selected>qiu</option>
        <option value="de">de</option>
        <option value="qing" selected>qing</option>
    </select>
    <input name="name" value="qiudeqing">
    <input type="password" name="password" value="11111">
    <input type="hidden" name="salery" value="3333">
    <textarea name="description">description</textarea>
    <input type="checkbox" name="hobby" checked value="football">Football
    <input type="checkbox" name="hobby" value="basketball">Basketball
    <input type="radio" name="sex" checked value="Female">Female
    <input type="radio" name="sex" value="Male">Male
    </form> 
     <script>
    /**
         * 将一个表单元素序列化为可提交的字符串
        *
          * @param {FormElement} form 需要序列化的表单元素
         * @return {string} 表单序列化后的字符串
       */
     function serializeForm(form) {
    if (!form || form.nodeName.toUpperCase() !== 'FORM') {
    return;
    }
    var result = [];
     var i, len;
    var field, fieldName, fieldType;
    for (i = 0, len = form.length; i < len; ++i) {
    field = form.elements[i];
    fieldName = field.name;
    fieldType = field.type;

    if (field.disabled || !fieldName) {
      continue;
    } // enf if
    switch (fieldType) {
      case 'text':
      case 'password':
      case 'hidden':
      case 'textarea':
        result.push(encodeURIComponent(fieldName) + '=' +
            encodeURIComponent(field.value));
        break;
      case 'radio':
      case 'checkbox':
        if (field.checked) {
          result.push(encodeURIComponent(fieldName) + '=' +
            encodeURIComponent(field.value));
        }
        break;
      case 'select-one':
      case 'select-multiple':
        for (var j = 0, jLen = field.options.length; j < jLen; ++j) {
          if (field.options[j].selected) {
            result.push(encodeURIComponent(fieldName) + '=' +
              encodeURIComponent(field.options[j].value || field.options[j].text));
          }
        } // end for
        break;
      case 'file':
      case 'submit':
        break; // 是否处理？

      default:
        break;
    } // end switch
    } 
    // end for
    return result.join('&');
    }
    var form = document.getElementById('target');
    console.log(serializeForm(form));
    </script>
    </pre>
    - [使用原生javascript给下面列表中的li节点绑定点击事件,点击时创建一个Object对象,兼容IE和标准浏览器](#使用原生javascript给下面列表中的li节点绑定点击事件点击时创建一个object对象兼容ie和标准浏览器)
     <pre><ul id="nav">
      <li><a href="http://11111">111</a></li>
        <li><a href="http://2222">222</a></li>
         <li><a href="http://333">333</a></li>
         <li><a href="http://444">444</a></li>
    </ul>
    Object:
    {
    "index": 1,
    "name": "111",
    "link": "http://1111"
    }
    script:
    var EventUtil = {
    getEvent: function (event) {
        return event || window.event;
    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    // 返回注册成功的监听器，IE中需要使用返回值来移除监听器
    on: function (elem, type, handler) {
        if (elem.addEventListener) {
            elem.addEventListener(type, handler, false);
            return handler;
        } else if (elem.attachEvent) {
            function wrapper(event) {
                return handler.call(elem, event);
            };
            elem.attachEvent('on' + type, wrapper);
            return wrapper;
        }
    },
    off: function (elem, type, handler) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handler, false);
        } else if (elem.detachEvent) {
            elem.detachEvent('on' + type, handler);
        }
    },
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else if ('returnValue' in event) {
            event.returnValue = false;
        }
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else if ('cancelBubble' in event) {
            event.cancelBubble = true;
        }
    }
    };
    var DOMUtil = {
    text: function (elem) {
        if ('textContent' in elem) {
            return elem.textContent;
        } else if ('innerText' in elem) {
            return elem.innerText;
        }
    },
    prop: function (elem, propName) {
        return elem.getAttribute(propName);
    }
    };
    var nav = document.getElementById('nav');
    EventUtil.on(nav, 'click', function (event) {
    var event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    var children = this.children;
    var i, len;
    var anchor;
    var obj = {};
    for (i = 0, len = children.length; i < len; ++i) {
        if (children[i] === target) {
            obj.index = i + 1;
            anchor = target.getElementsByTagName('a')[0];
            obj.name = DOMUtil.text(anchor);
            obj.link = DOMUtil.prop(anchor, 'href');
        }
    }
    alert('index: ' + obj.index + ' name: ' + obj.name +
        ' link: ' + obj.link);
    });</pre>

    - [有一个大数组,var a = ['1', '2', '3', ...];a的长度是100,内容填充随机整数的字符串.请先构造此数组a,然后设计一个算法将其内容去重](#有一个大数组var-a-=-1-2-3-a的长度是100内容填充随机整数的字符串请先构造此数组a然后设计一个算法将其内容去重)
     >P`/**`
    *数组去重
    **/
    function normalize(arr) {
        if (arr && Array.isArray(arr)) {
            var i, len, map = {};
            for (i = arr.length; i >= 0; --i) {
                if (arr[i] in map) {
                    arr.splice(i, 1);
                } else {
                    map[arr[i]] = true;
                }
            }
        }
        return arr;
    }`

   ` /**`
     *用100个随机整数对应的字符串填充数组。
    `**/`
    >
    `function fillArray(arr, start, end) {
        start = start == undefined ? 1 : start;
        end = end == undefined ?  100 : end;`

        if (end <= start) {
            end = start + 100;
        }

        var width = end - start;
        var i;
        for (i = 100; i >= 1; --i) {
            arr.push('' + (Math.floor(Math.random() * width) + start));
        }
        return arr;
    }

    var input = [];
    fillArray(input, 1, 100);
    input.sort(function (a, b) {
        return a - b;
    });
    console.log(input);

    normalize(input);
    console.log(input);`

##《JavaScript高级程序设计》
###Chapter 1 JavaScript简介
####总结提要：
JavaScript主要由三个不同的部分组成：

* ECMAScript——由ECMA-262定义，提供核心语言功能
* 文档对象模型(DOM)——提供访问和操作网页内容的方法和接口
* 浏览器对象模型(BOM)——提供与浏览器交互的方法和接口

JavaScript诞生于1995年，开始主要的目的是处理以前由服务器端语言(如perl)负责的一些输入验证操作。它是Netscape(网景公司)最初的杰作。但后来微软的IE浏览器加入JScript的JavaScript实现，出现两个标准的JavaScript。1997年，欧洲计算机制造商协会(ECMA)给出了ECMA-262，第一个JavaScript的标准。

但一个完整的JavaScript包括：

* 核心(ECMAScript)
* 文档对象模型(DOM)
* 浏览器对象模型(BOM)

####ECMAScript
ECMAScript的组成部分:语法，类型，语句，关键字，保留字，操作符，对象

ECMAScript版本：截止到2009年位置，ECMAScript发布了5个版本，第三版标志ECMAScript成为一门真正的编程语言。(修改内容涉及：字符串处理，错误定义和数值输出；新增：正则表达式，新控制语句，try-catch异常处理)

ECMAScript支持Unicode标准

####文档对象模型(DOM)
针对XML但经过扩展用于HTML的应用程序编程接口(API)

通过DOM创建的文档树形图，借助DOM的API，开发人员可以轻松删除，添加，替代或修改任何节点

DOM的级别：

* DOM1级——DOM Core和DOM HTML
* DOM2级——新增DOM视图(DOM Views)，DOM事件(DOM Events)，DOM样式(DOM Style)，DOM遍历和范围(DOM Traversal and Range)
* DOM3级——新增加载和保存文档的方法(在DOM Load and Save 模块中定义)，验证文档的方法(DOM Validation模块中定义)，支持XML1.0规范
* 传说中的DOM0级——IE4.0和Netscape Navigator 4.0最初支持的DHTML

DOM的其他标准：

* SVG(可伸缩矢量图) 
* MathML(数字标记语言) 
* SMIL(同步多媒体集成语言)

####浏览器对象模型(BOM)

2014-2-17 14:13

----------

###Chapter 2 在HTML中使用JavaScript
####总结提要：

* 在HTML页面中使用JavaScript要使用`<script></script>`标签。可以引入外部JavaScript文件或内嵌JavaScript代码
* 包含外部JavaScript文件时，用src包含相应文件的URL，文件可以来自任意域
* `<script>`元素最后放在主要内容后面，即`</body>`标签前面
* 所有不使用`defer` `async`属性的`<script>`元素都会按照它们在页面出现的先后顺序依次被解析
* 延迟脚本使用`defer="defer"`属性，脚本在文档完全呈现之后再执行。延迟脚本是顺序执行的
* 异步脚本使用`async="async"`属性，当前脚本不必等待其他脚本，也不必阻塞文档呈现。异步脚本不保证顺序执行
* 最好一个页面最多只包含一个延迟脚步或异步脚本
* ` <noscript>`指定不支持JavaScript脚本的浏览器中显示的替代内容

`<script type="text/javascript"></script>`中德type不是必须的，如果没有指定这个属性，默认值为`text/javascript`

嵌入JavaScript代码中，不能包含`</script>`代码，可以用`<\/script>`转义字符"\"来解决

JavaScript文件不必带.js扩展名，但通过动态脚本PHP等产生的JavaScript文件必须返回正确的MIME类型**(application/x-javascript)**

通过src包含外部JavaScript脚本的`<script></script>`标签内再包含内嵌脚本，嵌入的代码会被忽略，只执行外部脚本

在XHTML中使用JavaScript

"<"符号会被XHTML当作为新标签的开始解析，所以要使用hack去兼容，如：
```
<script>
//<![CDATA[
function compare(a,b){
     if(a<b){
          alert("A is less than B");
     }else if(a>b){
          alert("A is greater than B");
     }else{
          alert("A is equal to B");
     }
}
//]]>
</script>
```
开发时，尽可能使用外部js文件，这样有以下优点：可维护性，可缓存，适应未来

文档模式(doctype)：最初由IE引入混杂模式(quirks mode)和标准模式(standards mode)，主要影响是CSS的加载上，但有时也会影响JavaScript。而HTML使用的文档模式主要有以下 几种：
```
<!-- HTML 4.01过渡型 -->
<!DOCTYPE html
PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
"http://www.w3.org/TR/html4/loose.dtd">
```
```
<!-- HTML 4.01框架集型 -->
<!DOCTYPE html
PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" 
"http://www.w3.org/TR/html4/frameset.dtd">
```
```
<!-- HTML 4.01严格型 -->
<!DOCTYPE html
PUBLIC "-//W3C//DTD HTML 4.01 Strict//EN" 
"http://www.w3.org/TR/html4/strict.dtd">
```
```
<!-- XHTML 1.0 过渡型 -->
<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```
```
<!-- XHTML 1.0 框架集型 -->
<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```
```
<!-- XHTML 1.0 严格型 -->
<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 
"http://www.w3.org/TR/xhtml1/DTDxhtml1-/strict.dtd">
```
```
<!-- HTML5 -->
<!DOCTYPE HTML>
```
2014-2-17 16:09 /update 2016-3-10 9:48

###Chapter 3 基本概念
####总结概要：

* ECMAScript 5种基本数据类型：Undefined Null Boolean Number String 
* ECMAScript复杂数据类型：Object
* 严格模式："use strict";
* 基本运算符：算术运算符、布尔操作符、关系操作符、相等操作符及赋值操作符等
* 流控制语句：if语句、for语句、switch语句等
* 函数：ECMAScript函数任何时候可以返回任何值，未指定返回值得函数返回一个特殊的undefined值；ECMAScript没有函数签名的概念，因为其函数参数是由arguments对象(类数组)的形式传递的，所以， ECMAScript函数也不能重载


####语法
ECMAScript中的一切(变量、函数名和操作符)都区分大小写(如类型判断符`typeof`不能使用`typeOf`)

ECMAScript标记符采用驼峰大小写格式

####注释

```
// 单行注释

/*
*多行注释
*
*/
```

####严格模式
ECMAScript 5引入严格模式(strict mode)，在代码的顶部添加：
`"use strict";`
支持严格模式的浏览器包括：IE10+, Firefox 4+, Safari 5.1+, Opera 12+, Chrome

####变量
`var message;` //未经初始化的变量会保存为一个特殊的值——undefined

函数中使用var定义的变量在函数退出后被销毁

省略var操作符，会创建一个全局变量，但不建议这样做

严格模式下，未经声明的变量赋值会抛出ReferenceError错误，也不能定义名为eval或arguments的变量

####数据类型
基本数据类型：Undefined Null Boolean Number String
#####typeof操作符
有时使用typeof操作符会返回令人疑惑的结果，如`typeof null`将返回object。解决类型检测请参考《Javascript程序员参考手册》
#####Undefined类型
注意的一点事——对未初始化的变量执行`typeof`操作符会返回`undefined`，而对未声明的变量执行`typeof`也会返回`undefined` !
#####Null类型
`undefined`值是派生自`null`的，如：

```
               alert(null == undefined);  // true
```

#####Boolean类型
true和false(严格区分大小写，并且true不一定等于1，false不一定等于0)，调用转型函数Boolean()可以将其他数据类型转换为Boolean类型
#####Number类型

* 尽量使用十进制数值，在进行算术计算时，所有八进制和十六进制表示的数值将会转换成十进制数值
* 保存浮点数需要的内存空间是保存整数值的两倍，因此ECMAScript会不失时机地将浮点数值转换为整数值
* 数值范围：最大数`Number.MAX_VALUE` 最小数`Number.MIN_VALUE` 超过最小值或最大值的数值会被自动转换成`—Infinity`，可以用函数`isFinite()`判断，正负`Infinity`可以反问 `Number.NEGATIVE_INFINITY` 和 `Number.POSITIVE_INFINITY`
* ECMAScript中使用IEEE754格式（二进制的格式）来表示整数和浮点数。即能够精确表示1/2，1/4，但不能精确表示0.1
* 在进行算术时，所有八进制和十六进制的数值最终被转换成十进制的数值
#####NaN类型
这个数值用于表示一个本来要返回数值的操作数未返回数值的情况(不会抛出错误)，**NaN不等于任何值，包括NaN本身。**用`isNaN()`函数来判断是否数值

**0除以0返回NaN，正数除以0返回Infinity，负数除以0返回-Infinity**

#####数值转换函数：
* `Number()`——用于任何数据类型
* `parseInt()` `parseFloat()`——用于把字符串转换成数值
* `parseInt(arg1,arg2)`函数，第二个参数arg2表示转换的进制，10为十进制
#####String类型
ECMAScript中的字符串是不可变的，即字符串一旦创建，它们的值就不能改变。要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值得字符串填充该变量

其他类型变量用toString()函数可以转换为字符串
#####Object类型
     ——constructor
     ——hasOwnProperty(propertyName)
     ——isPrototypeOf(object)
     ——propertyIsEnumerable(propertyName)
     ——toLocaleString()
     ——toString()
     ——valueOf()
####基本操作符
* 位操作符(按位非"~"  按位与"&"  按位或"|"  按位异或"^"  左移"<<"  有符号右移">>"  无符号右移">>>" ) 按位非操作的本质：操作数的负值减1
* 布尔操作符(逻辑非"!"  逻辑与"&&"  逻辑或"||")
* 乘性操作符
* 加性操作符：加号还可以是两个字符串拼接
* 关系操作符
* 相等操作符(相等"=="  不相等"!=" 全等"===" 不全等"!==")
* 条件操作符(variable = boolean_expression ? true_value : false_value;)
* 赋值操作符

####语句
- if语句
- do-while语句
- while语句
- for语句 
- for-in语句 for (var property in expression) statement
- label语句？// 不太明白
- continue和break语句
- with语句 with(expression) statement; 将代码的作用域设置到一个特定的对象中 // 不建议使用with语句
- switch语句 比较值时使用的是全等操作符，因为不会发生类型转换(例如：字符串"10"不等于数值10)

####函数
- 函数的参数由arguments对象保存，类似数组，但不是Array的实例。
- arguments的值永远与对应命名参数的值保持同步
- 没有传递值得命名参数将会自动被赋予undefined值
- ECMAScript中的所有参数传递的都是值，不可能通过引用传递参数
- ECMAScript函数不能重载

记录于2014-2-17 23:45


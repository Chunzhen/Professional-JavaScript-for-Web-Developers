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
总结提要：

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

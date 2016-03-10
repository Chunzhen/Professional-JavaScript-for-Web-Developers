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

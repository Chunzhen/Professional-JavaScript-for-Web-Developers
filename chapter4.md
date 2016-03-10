###chapter 4 变量、作用域和内存回收
####总结概要：
* JavaScript变量可以用来保存两种类型的值：基本类型值和引用类型值
* 所有变量都存在于一个执行环境(作用域)中，这个执行环境决定了变量的声明周期以及哪一部分代码可以访问其中的变量
* JavaScript是一门具有自动垃圾收集的编程语言，开发人员不必关心内存分配和回收问题

####ECMAScript变量类型
* 基本类型值：Undefined、Null、Boolean、Number和String 被保存在**栈内存**中
* 引用类型值：Object 被保存在**堆内存**中
* 引用类型值复制：当从一个变量向另外一个变量复制引用值时，实际上是复制一个指针副本，两个变量(指针)指向存储在堆中的同一个对象。所以改变其中一个变量，就会影响另一个变量。
* ECMAScript函数的所有参数都是按值传递的：传递的参数会在函数内部创建一个`arguments`对象，函数执行完，`arguments`对象销毁。
* 传递参数令人疑惑：在向参数传递引用类型的值时，会把这个值在内存中的地址复制给一个局部变量，因此这个局部变量的变化会反映在函数的外部。但，如例2，但将这个局部变量指向新的Object，即不再指向这个地址，那么之后的所有修改不会影响外部的值。
区分两个例子：

```
eg:
function setName(obj){
     obj.name="mbl";
}
var person=new Object();
setName(person);
alert(person.name); // "mbl"
```

```
eg:
function setName(obj){
     obj.name="mbl";
     obj=new Object();
     obj.name="Greg";
}
var person=new Object();
setName(person);
alert(person.name); // "mbl"
```
**检测类型：**解决类型检测请参考《Javascript程序员参考手册》。确定一个值是哪种类型可以用`typeof`操作符，而确定是哪种引用类型可以使用`instanceof`操作符。

####执行环境及作用域
#####作用域链
当代码在一个环境中执行时，会创建变量对象的一个**作用域链(scope chain)**，保证对执行环境有权访问的所有变量和函数的有序访问。
#####标示符解析
* 沿着作用域链一级一级地搜索标记符的过程。搜索过程从作用域；链的前端开始，然后逐级地向后回溯，直到找到标记符为止，找不到会导致错误。
* 内部环境可以通过作用域链访问所有的外部环境，外部环境不能访问内部环境中的任何变量和函数。
* 延长作用域：通过`try-catch`语句的`catch`块和`with`语句 (不常用)
* JavaScript没有块机作用域，即像if语句、for语句内声明的变量在语句结束后还可以被访问。

####垃圾收集
JavaScript具有自动垃圾收集机制，主要收集的方式有两种：**标记清除(mark-and-sweep)**和**引用计数**
#####标记清除
垃圾回收器运行时给内存中的所有变量的某个标志位标记，然后去掉环境变量中的变量以及被环境变量引用的变量的标记，当执行完环境后，这些变量某个标志位被标记为另外的值，在垃圾收集器下一次运行内存清除时将这些变量的内存空间回收。
#####引用计数(reference counting)
* 跟踪记录每个值被引用的次数，当引用次数为0时，将其占用的内存空间回收。
* 引用计数会造成循环引用的问题。循环引用指的是对象A中包含一个指向对象B的指针，而对象B中也包含一个指向对象A的引用。
```	
eg:
function problem(){
     var objectA=new Object();
     var objectB=new Object();
     objectA.somOtherObject=objectB;
     objectB.anotherObject=objectA;          
}
```
```
eg:
var element=document.getElementById('some_element');
var myObject=new Object();
myObject.element=element;
element.someObject=myObject; //循环引用
//在不使用时，手动断开原生Js对象与DOM元素之间的连接
myObject.element=null;
element.someObject=null;
```
目前主流浏览器IE、Firefox、Opera、Chrome、Safari使用的都是标记清除式的垃圾收集策略。

但IE中有一部分对象并不是原生JavaScript对象。如BOM和DOM的对象是使用C++以COM(Component Object Model, 组件对象模型)对象的形式实现的。COM对象的垃圾收集机制是引用计数策略。

IE9把BOM和DOM对象都转换成真正的JavaScript对象

####性能问题
垃圾收集器多长时间运行一次，这个时间应该是根据内存回收垃圾量的大小而动态改变的。在有的浏览器中可以触发垃圾收集过程，如IE中可以调用`window.CollecGarbage()`、Opera 7及更高版本可以调用`window.opera.collect()`，但不建议调用。

将不再使用的变量设置为`null`来解除引用(dereferencing)是很好的编程习惯。这一做法对大多数全局变量和全局对象的属性有效。局部变量会在它们离开执行环境时自动被解除引用

update 2016-3-10

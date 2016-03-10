###chapter 5 引用类型
####Object类型
- 通过对象字面量表示法创建对象时，如果在最后一个属性后面添加逗号，会在IE7及更早版本和Opera中导致错误。
- 利用字面量对象作为函数的传入参数是个不错的选择。最好的做法是对那些必需值使用命名参数，而使用对象字面量来封装多个可选参数
- 访问对象的属性，可以用点表示法，也可用数组的方式来访问。数组的方式好处在于能够传入变量动态访问。

####Array类型
创建：
1. 使用Array构造函数（可以忽略new操作符）；
2. 使用数组字面量表示法。
```
var values=[1,2,]; //不要这样创建数组，会创建一个2或3项的数组，在IE中可能创建3个项的数组，而在其他浏览器中会创建2个项的数组
```
原因是IE8及之前版本中的ECMAScript实现在字面量方面有bug

数组的length属性很有特点——**它不是只读的**。即可以通过设置length属性来从数组的末尾移除项或向数组中添加新项。
```
var colors=['red','blue','green'];
colors[colors.length]='black'; //相当于colors.push('black');
```
检测数组的方法，参考《JavaScript程序员指南》。

ECMAScript中新增了`Array.isArray()`方法。支持的浏览器又IE9+, Firefox 4+, Safari 5+, Opera 10.5+和Chrome。

**转换方法**，`toString()`：返回','相隔的字符串；`valueOf()`返回的还是数组；`toLocaleString()`：

**`join()`方法**。 eg: colors.join(','); 如果不给方法传入任何值，或者给它传入undefined，则使用逗号为分隔符。但在IE7及更早版本中会错误地使用“undefined”作为分隔符

**栈方法：**LIFO (Last-In-First-Out)，方法：push() 和 pop()

**队列方法：**FIFO(First-In-First-Out)，方法：shift() 和 push()  unshift() 和 pop()

**重排序方法：**reverse() 和 sort()

sort()方法可以传入函数，自定义排序类型

**操作方法**
`concat()`：返回一个新数组；
```
eg:
var colors=['red','green','blue'];
var colors2=colors.concat('yellow',['black','brown']);
```
`slice()`方法：截取数组，返回一个新数组，不会影响原数组

**splice()**

1. 删除，可以删除任何数量项。 splice(0,2) 删除数组中的前两项
2. 插入，三个参数：起始位置，0（要删除的项数），要插入的项。 splice(2, 0, 'red', 'green')，在位置2插入字符串“red”和“green”
3. 替换， splice(2, 1, 'red', 'green') 删除位置为2的项，再插入“red”和“green"两项

**位置方法** indexOf() 和 lastIndexOf()

**迭代方法：**
1. every() 给定一个函数，如果每个项都访问true，则返回true
2. filter() 给定一个函数，返回这个返回返回为true的项组成的数组
3. forEach() 给定一个函数，这个方法没有返回，只是对所有的项都执行这个函数
4. map() 给定一个函数，返回每次函数调用的结果组成的数组
5. some() 给定一个函数，任意一个项返回true，都返回true

**归并方法：**reduce()和reduceRight()，接受4个参数，前一个值，当前值，项的索引和数组对象。
```
eg:
var values=[1,2,3,4,5];
var sum=values.reduce(function(prev,cur,index,array){
     return prev+cur;
});
```
####Date类型
var now=new Date();

ECMAScript提供 Date.parse()方法和Date.UTC()方法，返回一个日期对象。

Date.parse()方法接受一个字符串。 Date.UTC(年份，基于0的月份，月的哪一天，小时，分，秒，毫秒)

ECMAScript添加Date.now()方法获取毫秒数，而可以用var time=+new Date(); 将Date对象转换为毫秒数

继承方法：toString(), toLocaleString() ——不同浏览器返回格式不一样；Date类型的valueOf()返回日期的毫秒数

日期格式化的方法：

1. toDateString() 实现特定格式的星期几，月，日和年
2. toTimeString() 实现特定格式的时，分，秒和时区
3. toLocaleDateString() 实现特定地区格式的星期几，月，日和年
4. toLocaleTimeString() 实现特定格式的时，分，秒
5. toUTCString() 完整UTC日期

日期、时间组件方法 P103

####RegExp类型
var expression= / pattern / flag;

匹配模式支持下列3个标志

**g: 表示全局(global)模式；i: 表示不区分大小写(case-insensitive)； m: 表示多行模式(multiline)**
```
//匹配第一个'bat'或'cat'，不区分大小写
var pattern1=/[bc]at/i;
//与pattern1相同，只不过使用构造函数创建的
var pattern2=new RegExp("[bc]at","i");
```
字面量模式与等价的字符串模式： /\[bc\]at\/  "\\[bc||]at"

在ECMAScript 3中，正则表达式字面量始终会共享一个RegExp实例，而使用构造函数创建的每一个实例都是一个新实例。 P105的经典案例。

而在ECMAScript 5中明确规定，使用正则表达式字面量都必须像直接调用RegExp构造函数那样，每次都创建新的RegExp实例。

RegExp实例属性

- global：布尔值，表示是否设置了g标志
- ignoreCase：布尔值，表示是否设置了i标志
- lastIndex: 整数，下次搜索起始位置
- source：正则表达式的字符串表示。存储的是字面量模式中的值
- RegExp实例方法
- exec()
- test()
- RegExp构造函数属性

####Function类型
函数实际上是对象，每个函数都是Function类型的实例，而且都与其他引用类型一样具有属性和方法（构造函数的使用）。由于函数式对象，因此函数名实际上是一个指向函数的指针。

创建函数： 1. 函数声明；2. 函数表达式； 3. Function构造函数（不建议） 
```
eg: var sum=new Function('num1','num2','return num1+num2'); //不推荐
```
**JavaScript中没有函数重载**

函数声明创建函数和函数表达式创建函数的区别是，函数声明创建的函数，在代码执行前，解析器就已经通过一个名为函数提升（function declaration hoisting）的过程，读取并将函数声明添加到执行环境中
而表达式创建的函数在没有创建前调用会抛出“unexpected identifier”意外标识符的错误。

作为值的函数：因为ECMAScript中函数名本身是变量，所以函数也可以作为值来使用。不仅可以像参数一样把一个函数传递给另一个函数，而且可以将一个函数作为另一个函数的结果返回。
```
//按照特定的key的value来排序。
function createComparisonFunction(propertyName){
    return function(object1,object2){
        var value1=object1[propertyName];
        var value2=object2[propertyName];
        return value2-value1;
    };
}
var data=[{name:'chunzhen',age:'24'},{name:'miko',age:'24'}];
data.sort(createComparisonFunction('name'));
data.sort(createComparisonFunction('age'));
```
函数内部属性：arguments和this

**arguments.callee**，该属性是一个指针，指向拥有这个arguments对象的函数

利用**arguments.calle**消除函数执行与函数名之间的耦合关系。如下面阶乘函数：
```
function factorial(num){
    if(num<=1){
        return 1;
    }else{
        return num*arguments.callee(num-1);
    }
}
```
当函数在严格模式下，访问**arguments.callee**会导致错误。

函数的对象和方法：

函数包含两个属性： 1. **length**: 表示希望接受命名参数的个数，也就是形参的个数；2. **prototype **此属性不可枚举

每个函数都包含非继承而来的方法：`apply()` 和`call()`

apply(): 第一个参数是运行函数的作用域；第二个参数是参数数组。 而call() 方法第2-n个参数是参数列表。

apply()和call()的最强大之处在于，它能够扩充函数赖以运行的作用域

使用call()和apply()来扩充作用域的最大好处，就是对象不需要与方法有任何耦合关系

ECMAScript 5还定义了 bind()方法。 eg: syaColor.bind(o);

####基本包装类型 Boolean, Number, String
引用类型与基本包装类型的主要区别就是对象的生命周期。使用new操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存。而自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁。这意味我们不能在运行中为基本类型添加属性和方法：
```
eg:
var s1="some text";
s1.color="red";
alert(s1.color); //undefined
```
####Boolean类型
```
通过var booleanObject=new Boolean(false); 创建的为一个引用对象
即  booleanObject && true; //返回true
而var booleanValue=false; booleanValue && true; //返回false
```
基本类型与引用类型的布尔值还有两个不同：1. typeof操作符对基本类型返回“boolean”，而对引用类型返回“object”；2. 由于Boolean对象是Boolean类型的实例，所以使用instanceof操作符测试Boolean对象会返回true，而测试基本类型的布尔值则返回false
####Number类型
`toFiexed()`方法，指定有效位数；`toExponential()`指数表示法；`toPrecision()`保留小数位数

同样地，Number对象是Number类型的实例，而基本类型的数值则不是

####String类型
- 字符方法：charAt() 和 charCodeAt()
- 字符串操作方法：concat() 与 加号一直；slice()，substr()，substring()
- 在传递负参数时，slice()方法会将传入的负数与字符串长度相加；substr()方法将负的第一个参数加上字符串长度，而将第二个参数转换为0；substring()方法会将所有负值参数转换为0。
- 字符串位置方法：indexOf() ， lastIndexOf()
- 字符串大小写转换方法：toLowerCase()，toLocaleLowerCase()，toUpperCase()，toLocaleUpperCase()
- 字符串的模式匹配方法：match() 与 RegExp的exec()一致； search()； replace() ；split()
- localeCompare方法，fromCharCode()方法

####单体内置对象
#####Global对象
- 对URI进行编码的方法：encodeURI(), encodeURIComponent()；
- 解码方法：decodeURI(), decodeURIComponent()
#####Math对象
max(), min(), ceil(), floor(), round(), random()

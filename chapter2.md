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
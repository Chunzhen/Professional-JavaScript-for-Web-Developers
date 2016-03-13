function createPerson(name,age,job){
	var o=new Object();
	o.name=name;
	o.age=age;
	o.job=job;
	s.sayName=function(){
		alert(this.name);
	};
	return o;
}
var person1=createPerson('mbl',24,'coder');
var person2=createPerson('miko',34,'designer')
/************************************************/
function Person(name,age,job){
	this.name=name;
	this.age=age;
	this.job=job;
	this.sayName=function(){
		alert(this.name);
	};
}
var person1=Person('mbl',24,'coder');
var person2=Person('miko',24,'designer');
/************************************************/
function Person(name,age,job){
	this.name=name;
	this.age=age;
	this.friends=['miko','hei'];
}

Person.prototype={
	constructor:Person,
	sayName:function(){
		alert(this.name);
	}
}
var person1=Person('mbl',24,'coder');
var person2=Person('miko',24,'designer');
/************************************************/

function SuperType(){
	this.property=true;
}
SuperType.prototype.getSuperValue=function(){
	return this.property;
};
function SubType(){
	this.subproperty=false;
}
//继承了SuperType
SubType.prototype=new SuperType();

SubType.property.getSubValue=function(){
	return this.subproperty;
};

var instance=new SubType();
alert(instance.getSuperValue());	//true

/************************************************/
function SuperType(name){
	this.name=name;
	this.colors=['red','blue','green'];
}
SuperType.prototype.sayName=function(){
	alert(this.name);
};
function SubType(name,age){
	SuperType.call(this,name); //第二次调用SuperType()
	this.age=age;
}
SubType.prototype=new SuperType(); //第一次调用SuperType()
SubType.prototype.constructor=SubType;
SubType.prototype.sayAge=function(){
	alert(this.age);
};
/************************************************/
function object(o){
	function F(){}
	F.prototype=o;
	return new F();
}
function inheritPrototype(subType,superType){
	var prototype=object(superType.prototype);
	prototype.constructor=subType;
	subType.prototype=prototype;
}
function SuperType(name){
	this.name=name;
	this.colors=['red','blue','green'];
}
SuperType.prototype.sayName=function(){
	alert(this.name);
};
function SubType(name,age){
	SuperType.call(this,name);
	this.age=age;
}
inheritPrototype(SubType,SuperType());
SubType.prototype.sayAge=function(){
	alert(this.age);
};
/************************************************/
function createXHR(){
	if (typeof XMLHttpRequest !='undefined'){
		return new XMLHttpRequest();
	}
	else if(typeof arguments.callee.activeXString!='string'){
		var versions=['MSXML2.XMLHttp.6.0','MSXML2.XMLHttp.3.0','MSXML2.XMLHttp'],i,len;
		for i=0,len=versions.length;i<len;i++){
			try{
				new ActiveXObject(versions[i]);
				arguments.callee.activeXString=versions[i];
			}catch(ex){

			}
		}
		return new ActiveXObject(arguments.callee.activeXString);		
	}else{
		throw new Error('No XHR object available.');
	}
}
var xhr=createXHR();
/************************************************/
var xhr=createXHR();
xhr.onreadystatechange=function(){
	if (xhr.readyState==4){
		if ((xhr.status>=200) && (xhr.status<300) || xhr.status==304){
			alert(xhr.responseText);
		}else{
			alert('Request was unsuccessful:'+xhr.status);
		}
	}
};
xhr.open('get','example.txt',true);
xhr.send(null);
/************************************************/
function addURLParam(url,name,value){
	url+=(url.indexOf('?')==-1?'?':'&');
	url+=encodeURIComponent(name)+'='+encodeURIComponent(value);
	return url;
};
/************************************************/
var data=new FormData();
data.append('name','mbl');

var data=new FormData(document.form[0]);
var xhr=createXHR();
xhr.onreadystatechange=function(){
	if (xhr.readyState==4){
		if ((xhr.status>=200) && (xhr.status<300) || xhr.status==304){
			alert(xhr.responseText);
		}else{
			alert('Request was unsuccessful:'+xhr.status);
		}
	}
};
xhr.open('get','example.php',true);
var form=document.getElementById('user-info');
xhr.send(new FormData(form));
/************************************************/
xhr.timeout=1000;
xhr.ontimeout=function(){
	alert('Request did not return in a second.');
};
/************************************************/
function createCORSRequest(method,url){
	var xhr=new XMLHttpRequest();
	if ("withCredentials" in xhr){
		xhr.open(method,url,true);
	}else if(typeof XDomainRequest != 'undefined'){
		xhr=new XDomainRequest();
		xhr.open(method,url);
	}else{
		return null;
	}
	return xhr;
}
/************************************************/
var element=document.getElementById('some_element');
var myObject=new Object();
myObject.element=element;
element.someObject=myObject; //循环引用
//在不使用时，手动断开原生Js对象与DOM元素之间的连接
myObject.element=null;
element.someObject=null;
/************************************************/
//匹配第一个'bat'或'cat'，不区分大小写
var pattern1=/[bc]at/i;
//与pattern1相同，只不过使用构造函数创建的
var pattern2=new RegExp("[bc]at","i");
/************************************************/
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
/************************************************/
function factorial(num){
    if(num<=1){
        return 1;
    }else{
        return num*arguments.callee(num-1);
    }
}
/************************************************/
var age=29;
window.color='red';
//在IE<9时抛出错误，在其他浏览器中返回false
delete window.age;
//在IE<9时抛出错误，在其他浏览器中返回true
delete window.color;
alert(window.age); //29
alert(window.color); //undefined
/************************************************/
var leftPos=(typeof window.screenLeft=='number')? window.screenLeft : window.screenX;
var topPos=(typeof window.screenTop=='number')? window.screenTop:window.screenY;
/************************************************/
var pageWidth=window.innerWidth;
var pageHeight=window.innerHeight;
if(typeof pageWidth!='number'){
	if(document.compatMode=='CSS1Compat'){
		pageWidth=document.documentElement.clientWidth;
		pageHeight=document.documentElement.clientHeight;
	}else{
		pageWidth=document.body.clientWidth;
		pageHeight=document.body.clientHeight;
	}
}
/************************************************/
function getQueryStringArgs(){
	//取得字符串并去掉问号
	var qs=(location.search.length>0)?location.search.substring(1):"",
		args={},
		items=qs.length?qs.split('&'):[],
		item=null,
		name=null,
		value=null,
		i=0,
		len=items.length;
		//逐个项添加到args对象
		for(i=0;i<len;i++){
			item=item[i].split('=');
			name=decodeURIComponent(item[0]);
			value=decodeURIComponent(item[1]);
			if(name.length){
				args[name]=value;
			}
		}
		return args;
}
/************************************************/
//取得文档标题
var originalTitle=document.title;
//设置文档标题
document.title='New page title';
/************************************************/
function loadScript(url){
	var script=document.createElement("script");
	script.type="text/javascript";
	script.src=url;
	document.body.appendChild(script);
}
function loadScriptString(code){
	var script=document.createElement('script');
	script.type='text/javascript';
	try{
		script.append(document.createTextNode(code));
	}catch(ex){
		script.text=code;
	}
	document.body.appendChild(script);
}
function loadStyles(url){
	var link=document.createElement('link');
	link.rel='stylesheet';
	link.type='text/css';
	link.href=url;
	var head=document.getElementsByTagName('head')[0];
	head.append(link);
}
function loadStyleString(css){
	var style=document.createElement('style');
	style.type='text/css';
	try{
		style.appendChild(document.createTextNode(css));
	}catch (ex){
		style.stylesheet.cssText=css;
	}
	var head=document.getElementsByTagName('head')[0];
	head.append(style);
}
/************************************************/
function Person(name,age,job){
	if(this instanceof Person){
		this.name=name;
		this.age=age;
		this.job=job;
	}else{
		return new Person(name,age,job);
	}
}
/************************************************/
function createXHR(){
	if(typeof XMLHttpRequest != 'undefined'){
		createXHR=function(){
			return new XMLHttpRequest();
		};
	}else if(typeof ActiveXObject != 'undefined'){
		createXHR=function(){
			if(typeof arguments.callee.activeXString!='string'){
				var versions=['MSXML2.XMLHttp.6.0','MSXML2.XMLHttp.3.0','MSXML2.XMLHttp'],i,len;
				for(i=0,len=versions.length;i<len;i++){
					try{
						new ActiveXObject(versions[i]);
						arguments.callee.activeXString=versions[i];
					}catch(ex){

					}
				}
				return new ActiveXObject(arguments.callee.activeXString);
			}
		};
	}else{
		createXHR=function(){
			throw new Error('No XHR object available');
		}
	}
}
var createXHR=(function(){
	if(typeof XMLHttpRequest != 'undefined'){
		return function(){
			return new XMLHttpRequest();
		};
	}else if(typeof ActiveXObject != 'undefined'){
		return function(){
			if(typeof arguments.callee.activeXString!='string'){
				var versions=['MSXML2.XMLHttp.6.0','MSXML2.XMLHttp.3.0','MSXML2.XMLHttp'],i,len;
				for(i=0,len=versions.length;i<len;i++){
					try{
						new ActiveXObject(versions[i]);
						arguments.callee.activeXString=versions[i];
					}catch(ex){

					}
				}
				return new ActiveXObject(arguments.callee.activeXString);
			}
		};
	}else{
		return function(){
			throw new Error('No XHR object available');
		}
	}
})();
/************************************************/
function bind(fn, context){
	return function(){
		return fn.apply(context,arguments);
	}
}
/************************************************/
function carry(fn){
	var args=Array.prototype.slice.call(arguments,1);
	return function(){
		var innerArgs=Array.prototype.slice.call(arguments);
		var finalArgs=args.concat(innerArgs);
		return fn.apply(null,finalArgs);
	};
}
/************************************************/
setTimeout(function(){
	//代码
	setTimeout(arguments.callee,interval);
},interval);
/************************************************/
function throttle(method,context){
	clearTimeout(method.tId);
	method.tId=setTimeout(function(){
		method.call(context);
	},100);
}
/************************************************/
EventUtil.addHandler(applicationCache,'updateready',function(){
	applicationCache.swapCache();
});
/************************************************/
var EventUtil={
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent('on'+type,handler);
		}else{
			element['on'+type]=handler;
		}
	},
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler);
		}else if(element.detachEvent){
			element.detachEvent('on'+type,handler);
		}else{
			element['on'+type]=null;
		}
	},
	getEvent:function(event){
		return event ? event || window.event;
	},
	getTarget:function(event){
		return event.target || event.srcElement;
	},
	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue=false;
		}
	},
	stopPropagation:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancalBubble=true;
		}
	},
	getRelatedTarget:function(event){
		if(event.relatedTarget){
			return event.relatedTarget;
		}else if(event.toElement){
			return event.toElement;
		}else if(event.fromElement){
			return event.fromElement;
		}else{
			return null;
		}
	},
	getButton:function(event){
		if(document.implementation.hasFeature('MouseEvents','2.0')){
			return event.button;
		}else{
			switch(event.button){
				case 0:
				case 1:
				case 3:
				case 5:
				case 7:
					return 0;
				case 2:
				case 6:
					return 2;
				case 4:
					return 1;
			}
		}
	},
	getWheelDelta:function(event){
		if(event.wheelDelta){
			return (client.engine.opera && client.engine.opera<9.5) ? -event.wheelDelta : event.wheelDelta);
		}else{
			return -event.detail*40; //Firefox
		}
	}
};
/************************************************/
EventUtil.addHandler(window,'scroll',function(event){
	if(document.compatMode=='CSS1Compat'){
		alert(document.documentElement.scrollTop);
	}else{
		alert(document.body.scrollTop);
	}
});
/************************************************/
var isSupperted=document.implementation.hasFeature('MouseEvents','2.0');
var isSupperted=document.implementation.hasFeature('MouseEvent','3.0');

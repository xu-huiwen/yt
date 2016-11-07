function getClass(classname,obj){
	obj=obj||document;
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(classname)
	}else{
		var arr=[];
		var objs=obj.getElementsByTagName('*')
		for(var i=0;i<objs.length;i++){
			if(checkClass(objs[i],classname)){
                  arr.push(objs[i])
                 
			}
		} 
		return arr;
	}

function checkClass(obj,val){
	var classStr=obj.className
	var classArr=classStr.split(' ')
	for(var i=0;i<classArr.length;i++){
		if(val==classArr[i]){
			return true;
		}else{
    return false;
  }
	}
	
}
}



function getText(obj,val){
     if(val!=undefined){
     	if(obj.innerText){
     		obj.innerText=val
     	}else{
     		
     	obj.textContent=val;
     }
     }else{
     	if(obj.innerText){
     		return obj.innerText;
     	}else{
     		return obj.textContent;
     	}
     }
}





function getStyle(obj,style){
    if(obj.currentStyle){
     	return obj.currentStyle[style];
    }else if(getComputedStyle(obj,null)){
     	return getComputedStyle(obj,null)[style];
     }
  }



function $(val,obj){
   if(typeof val=='string'){
   var obj=obj||document;
   val=val.replace(/^\s*|\s*$/g,"");
   if(val.charAt(0)=="#"){
    return document.getElementById(val.slice(1))
   }else if(val.charAt(0)=="."){
    return getClass(val.slice(1),obj)
   }else if(/^[a-zA-Z][a-zA-Z0-9]{0,10}$/.test(val)){
         return obj.getElementsByTagName(val)
   }
   else if(/^<[a-zA-Z][a-zA-Z0-9]{0,10}>$/.test(val)){
   return document.createElement(val.slice(1,-1))
}
}else if(typeof val=='function'){
   window.onload=function(){
      val();
   }
 }
}





//拿到子节点
function getChilds(obj,type){
  var type=type||'no'
  var kids=obj.childNodes;
  var arr=[]
  for(var i=0;i<kids.length;i++){
  if(type=='no'){
     if(kids[i].nodeType=='1'){
      arr.push(kids[i])
     }
  }else if(type=='yes'){
    if(kids[i].nodeType=='1'||kids[i].nodeType==3&&kids[i].nodeValue.replace(/^\s*|\*$/g,"")){
      arr.push(kids[i])
    }
  }
 }
 return arr;
}






//第一个值
function getFirst(obj,type){
   var type=type||'no'
    return getChilds(obj,type)[0]
}
//最后一个值
function getLast(obj,type){
   var type=type||'no'
   var childs=getChilds(obj,type)
   return childs[childs.length-1]
}

//第n个值
function getN(obj,n,type){
   var type=type||'no'
   var childs=getChilds(obj,type)
   if(n>childs.length||n<1){
    return false;
   }
   return childs[n-1]
}

//下一个兄弟节点
function getNext(obj,type){
  var type=type||'no'
  var next=obj.nextSibling
  if(next==null){
    return false
  }

  if(type=='no'){
    while(next.nodeType=='3'||next.nodeType=='8'){
    next=next.nextSibling;
    if(next==null){
      return false
    }
   }
    return next;
  }else if(type=='yes'){
   while(next.nodeType=='3'&&!next.nodeValue.replace(/^\s*|\*$/g,"")||next.nodeType=='8'){
    next=next.nextSibling;
    if(next==null){
      return false
    }
   }
    return next;
  }
}




//上一个兄弟节点
function getPrevious(obj,type){
  var type=type||'no'
  var previous=obj.previousSibling
  if(previous==null){
    return false
  }

  if(type=='no'){
    while(previous.nodeType=='3'||previous.nodeType=='8'){
    previous=previous.previousSibling;
    if(previous==null){
      return false
    }
   }
    return previous;
  }else if(type=='yes'){
   while(previous.nodeType=='3'&&!previous.nodeValue.replace(/^\s*|\*$/g,"")||previous.nodeType=='8'){
    previous=previous.previousSibling;
    if(previous==null){
      return false;
    }
   }
    return previous;
  }
}



//插入之前
function insertBefore(obj,beforeobj){
  var parent=beforeobj.parentNode;
    parent.insertBefore(obj,beforeobj)
}





//插入之后 
function insertAfter(obj,afterobj){
  var parent=afterobj.parentNode;
  var next=getNext(afterobj,'yes')
  if(!next){
    parent.appendChild(obj)
  }else{
    parent.insertBefore(obj,next)
  }
}




// //添加事件
// function addEvent(obj,event,fyn){
//   if(obj.attachEvent){
//     obj.attachEvent("on"+event,fun)
//   }else{
//     obj.addEventListener(event,fun,false)
//   }
// }




//删除事件
// function Delete(){
//   if(obj.detachEvent){
//     obj.detachEvent("on"+event,fun)
//   }else{
//     obj.removeEventListener(event,fun,false)
//   }
// }


//鼠标滚轮
function mouseWheel(obj,up,down){
  if(obj.attachEvent){
    //IE添加滚轮
    document.attachEvent("onmousewheel",scrollFun)
  }else if(obj.addEventListener){
    //FF添加滚轮
   document.addEventListener("mousewheel",scrollFun,false)
  document.addEventListener("DOMMouseScroll",scrollFun,false)
  }
  function scrollFun(e){
    var e=e||window.event
    if(e.preventDefault){
      e.preventDefault();
    }else{
      e.returnValue=false;
    }
    var nub=e.wheelDelta||e.detail
    if(nub==120||nub==-3){
      //改变this指针，让this指向obj
      up.call(obj)
    }else if(nub==-120||nub==3){
      down.call(obj)
    }
  }
}

 // mouseWheel(function(){

 // },function(){

 // })








//判断某个元素是否包含有另外一个元素
function contains (parent,child) {
  if(parent.contains){
    return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
}

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
function checkHover (e,target) {
  if(getEvent(e).type=="mouseover"){
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
      !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
  }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
      !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
  }
}
//鼠标移入移出事件
/*
 obj   要操作的对象
 overfun   鼠标移入需要处理的函数
 outfun     鼠标移除需要处理的函数
 */
function hover (obj,overfun,outfun) {
  if(overfun){
    obj.onmouseover=function  (e) {
      if(checkHover(e,obj)){
        overfun.call(obj,[e]);
      }
    }
  }
  if(outfun){
    obj.onmouseout=function  (e) {
      if(checkHover(e,obj)){
        outfun.call(obj,[e]);
      }
    }
  }
}
function getEvent (e) {
  return e||window.event;
}





function setCookie(attr,value,time){
  if(time==undefined){
    document.cookie=attr+"="+value
  }else{
    var now=new Date()
    now.setTime(now.getTime()+time*1000)
    document.cookie=attr+"="+value+";expires="+now.toGMTString();
  }
}






function getCookie(val){
  var str=document.cookie;
  var arr=str.split("; ")
  for(var i=0;i<arr.length;i++){
    var arrValue=arr[i].split("=")
    if(val==arrValue[0]){
      return arrValue[1]
    }
  }
  return false;
}



function delCookie(attr){
  var now=new Date()
    now.setTime(now.getTime()-1)
    document.cookie=attr+"=adasa;expires="+now.toGMTString();
}











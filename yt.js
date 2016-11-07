window.onload=function(){





//顶部左侧
var hleft1=$('.zuo')
var xuanzhuan1=$(".xuanzhuan")[0]


          for(var i=0;i<hleft1.length;i++){
            hover (hleft1[i],function(){
                this.style.background='#FFF'
                     var ul=$('.hidden1',this)[0]
                    var a=$(".as",this)[0]
                   
                     animate(ul,{height:125},500)
                     ul.style.display='block'

                     a.style.width=125+'px';
                      a.style.display='block';
                      a.style.background='#FFF'

                      xuanzhuan1.style.transform='rotate(360deg)'
                     
                     
            },function(){
                     var that=this
                     var ul=$('.hidden1',this)[0]
                     var a=$(".as",this)[0]
                     animate(ul,{height:0},500,function(){
                     that.style.background='#EEEEEE'
                     }) 
 
                     a.style.width=97+'px';
                      a.style.display='block';
                      a.style.background='#EEEEEE'
                    ul.style.display='none'
           xuanzhuan1.style.transform='rotate(0deg)'
         
          
            })
          }








var hleftj=$('.youj')
var xuanzhuan2=$(".xuanzhuan")[1]
          for(var i=0;i<hleftj.length;i++){
            hover (hleftj[i],function(){
                this.style.background='#FFF'
                     var ul=$('.hidden1',this)[0]
                    var a1=$(".an",this)[0]
                     animate(ul,{height:155},0)
                     ul.style.display='block'

                     a1.style.width=155+'px';
                      a1.style.display='block';
                      a1.style.background='#FFF'
                       xuanzhuan2.style.transform='rotate(360deg)'
            },function(){
                     var that=this
                     var ul=$('.hidden1',this)[0]
                     var a1=$(".an",this)[0]
                     animate(ul,{height:0},0,function(){
                     that.style.background='#EEEEEE'
                     }) 
 
                     a1.style.width=97+'px';
                      a1.style.display='block';
                      a1.style.background='#EEEEEE'
                    ul.style.display='none'
             xuanzhuan2.style.transform='rotate(0deg)'
            })
          }




//顶部右侧
var hright2=$('.hright2')
var xuanzhuan3=$(".xuanzhuan")[2]
          for(var i=0;i<hright2.length;i++){
            
            hover (hright2[i],function(){
              
               var height5=this.offsetHeight
                this.style.background='#FFF'
                     var ul5=$('.hidden5',this)[0]
                     var len5=$('li',ul5).length
                     var ulHeight5=len5*height5
                     animate(ul5,{height:ulHeight5},500)
                      xuanzhuan3.style.transform='rotate(360deg)'
                },function(){
                     var that=this
                     var ul5=$('.hidden5',this)[0]
                       
                     animate(ul5,{height:0},500,function(){
                     that.style.background='#EEEEEE'
                     }) 
                      xuanzhuan3.style.transform='rotate(0deg)'
            })
          }


























	var bnzj=$('.bannerzj')[0]
	var imgs=$('img',bnzj)
  var nav=$('.nav')[0]
  var img=$('img',nav)
	var left=$('.left',bnzj)[0]
	var right=$('.right',bnzj)[0]
	var square=$('.square')[0]
	var squareLi=$('.square-li')

	var width=parseInt(getStyle(bnzj,'width'))
  var width1=parseInt(getStyle(nav,'width'))
	var n=0;
	var next=0;
  var flag=true;
	 var t=setInterval(fun,2000)
     function fun(type){
      var type=type||'l'
      if(!flag){
        return;
      }
      flag=false;
      
      if(type=='l'){
        next=n+1;
         if(next>=imgs.length){
          next=0;
         }      
           if(next>=img.length){
          next=0;
         }
        animate(imgs[n],{opacity:0},600)
        animate(imgs[next],{opacity:1},600)
        animate(img[n],{opacity:0},600)
        animate(img[next],{opacity:1},600,function(){
          flag=true;
        })
       
      }else if(type=='r'){
           next=n-1
          if(next<0){
          next=imgs.length-1
     } 
     if(next<0){
          next=img.length-1
     }
     
     animate(imgs[n],{opacity:0},600)
     animate(imgs[next],{opacity:1},600)
     animate(img[n],{opacity:0},600)
     animate(img[next],{opacity:1},600,Tween.Linear,function(){
          flag=true;
        })
     
   }
     for(var i=0;i<squareLi.length;i++){
     squareLi[i].style.background='#211616'
    }
    squareLi[next].style.background='#E5004F'
    n=next;
  } 
  right.onclick=function(){
     fun('l');
}
  left.onclick=function(){
       fun('r')
}
  bnzj.onmouseover=function(){
     clearInterval(t)
}
  bnzj.onmouseout=function(){
     t=setInterval(fun,2000)
}


for(var i=0;i<imgs.length;i++){
    squareLi[i].index=i;
    squareLi[i].onclick=function(){
    if(!flag){
        return;
      }
        flag=false;
      if(this.index>n){
    animate(img[n],{opacity:0},600) 
    animate(imgs[n],{opacity:0},600)
    
 }
else if(this.index<n){
     
     animate(img[n],{opacity:0},600)
     animate(imgs[n],{opacity:0},600)
    
      }
    animate(img[this.index],{opacity:1},600)
    animate(imgs[this.index],{opacity:1},600,Tween.Linear,function(){
          flag=true;
        })
    for(var i=0;i<squareLi.length;i++){
      squareLi[n].style.background='#211616'
    }
      squareLi[this.index].style.background='#E5004F'
      n=this.index;
      next=this.index
    }
  
}



//banner下拉
  var lis=$('.bannerdiff')
          for(var i=0;i<lis.length;i++){
            
            hover (lis[i],function(){
              
               var height=this.offsetHeight
                this.style.background='#E5004F'
                     var ul=$('.hidden',this)[0]
                     var len=$('div',ul).length
                     var ulHeight=len*height
                     animate(ul,{height:435},1)
                    
            },function(){
                     var that=this
                     var ul=$('.hidden',this)[0]
                     animate(ul,{height:0},1,function(){
                     that.style.background='#333333'
                     })

            })
          }      
     



//选项卡1
  var box=getClass('sellingleft')
  var top=getClass('sellinglefttop')

  var sellinglefttop1=getClass('sellinglefttop1')
  var xiaojian=$(".xiaojian")

  var sellingleftbottomz1=getClass('sellingleftbottomz1')
  for(var i=0;i<sellinglefttop1.length;i++){
    sellinglefttop1[i].index=i;
    sellinglefttop1[i].onclick=function(){
    for(var j=0;j<sellinglefttop1.length;j++){
      sellinglefttop1[j].style.cssText='border-bottom:5px solid #333333';

      }
        this.style.cssText='border-bottom:5px solid #E5004F';

        for(var x=0;x<sellingleftbottomz1.length;x++){
          sellingleftbottomz1[x].style.display='none';
        }
        sellingleftbottomz1[this.index].style.display='block';
       for(var y=0;y<xiaojian.length;y++){
          xiaojian[y].style.display='none';
        }
        xiaojian[this.index].style.display='block';
       }
    }














//选项卡2

  var brandbottomrighttop1=getClass('brandbottomrighttop1')
  var brandbottomrightbottom=getClass('brandbottomrightbottom')
  var xiaojian1=$(".xiaojian1")
  for(var i=0;i<brandbottomrighttop1.length;i++){
    brandbottomrighttop1[i].index=i;
    brandbottomrighttop1[i].onclick=function(){
    for(var j=0;j<brandbottomrighttop1.length;j++){
      brandbottomrighttop1[j].style.cssText='border-bottom:5px solid #333333';
      }
        this.style.cssText='border-bottom:5px solid #E70050';

        for(var x=0;x<brandbottomrightbottom.length;x++){
          brandbottomrightbottom[x].style.display='none';
        }
        brandbottomrightbottom[this.index].style.display='block';
        for(var y=0;y<xiaojian1.length;y++){
          xiaojian1[y].style.display='none';
        }
        xiaojian1[this.index].style.display='block';
       }
    }











//热卖
var sellingleftbottom1=$(".sellingleftbottom1")
for(var i=0;i<sellingleftbottom1.length;i++){
  hover(sellingleftbottom1[i],function(){
    var sh=this.offsetHeight
    var sw=this.offsetWidth
    var top1=$(".top1",this)[0]
    var bottom1=$(".bottom1",this)[0]
    var left1=$(".left1",this)[0]
    var right1=$(".right1",this)[0]
    animate(top1,{width:sw},500)
    animate(bottom1,{width:sw},500)
    animate(left1,{height:sh},500)
    animate(right1,{height:sh},500)
    top1.style.height=1+'px'
    bottom1.style.height=1+'px'
    left1.style.width=1+'px'
    right1.style.width=1+'px'
  },function(){
    var top1=$(".top1",this)[0]
    var right1=$(".right1",this)[0]
    var bottom1=$(".bottom1",this)[0]
    var left1=$(".left1",this)[0]
    animate(top1,{width:0},500)
    animate(bottom1,{width:0},500)
    animate(left1,{height:0},500)
    animate(right1,{height:0},500)
  })
}










function xian1(xian1){


var brandbottomrightbottom=xian1

for(var i=0;i<brandbottomrightbottom.length;i++){
  hover(brandbottomrightbottom[i],function(){
    var sh10=this.offsetHeight
    var sw10=this.offsetWidth
    var top10=$(".top10",this)[0]
    var bottom10=$(".bottom10",this)[0]
    var left10=$(".left10",this)[0]
    var right10=$(".right10",this)[0]
    animate(top10,{width:sw10-2},500)
    animate(bottom10,{width:sw10-2},500)
    animate(left10,{height:sh10-2},500)
    animate(right10,{height:sh10-2},500)
    top10.style.height=1+'px'
    bottom10.style.height=1+'px'
    left10.style.width=1+'px'
    right10.style.width=1+'px'
  },function(){
    var top10=$(".top10",this)[0]
    var right10=$(".right10",this)[0]
    var bottom10=$(".bottom10",this)[0]
    var left10=$(".left10",this)[0]
    animate(top10,{width:0},500)
    animate(bottom10,{width:0},500)
    animate(left10,{height:0},500)
    animate(right10,{height:0},500)
  })
}
}
xian1($(".brandbottomrightbottomp"))
















function xiaotupian(tu1,tu2,tu3){
  var bnzji=tu1

  var imgsi=$('.xiaopicture',bnzji)
  var lefti=tu2
  var righti=tu3
  var widthi=parseInt(getStyle(bnzji,'width'))
  var ni=0;
  var nexti=0;
  var flagi='i'
     function movem(typem){
      var typem=typem||'g'
      if(!flagi){
        return;
      }
      flagi=false;
      if(typem=='g'){
        nexti=ni+1;
         if(nexti>=imgsi.length){
           nexti=0;
         }      
         imgsi[nexti].style.left=widthi+'px'
        animate(imgsi[ni],{left:-widthi},600)
        animate(imgsi[nexti],{left:0},600,Tween.Linear,function(){
          flagi='i';
        })
      }else if(typem=='j'){
             nexti=ni-1
     if(nexti<0){
          nexti=imgsi.length-1
     }
     imgsi[nexti].style.left=-widthi+'px'
     animate(imgsi[ni],{left:widthi},600)
     animate(imgsi[nexti],{left:0},600,Tween.Linear,function(){
      flagi='i';
    })
   }
       
        ni=nexti;
         } 
     righti.onclick=function(){
    movem('g');
}
     lefti.onclick=function(){
      movem('j')
    }
 }
xiaotupian($('.fashionbottomleftbottom1')[0],$('.tom1zleft')[0],$('.tom1zright')[0])
xiaotupian($('.fashionbottomleftbottom1')[1],$('.tom1zleft')[1],$('.tom1zright')[1])
xiaotupian($('.fashionbottomleftbottom1')[2],$('.tom1zleft')[2],$('.tom1zright')[2])
xiaotupian($('.fashionbottomleftbottom1')[3],$('.tom1zleft')[3],$('.tom1zright')[3])
xiaotupian($('.fashionbottomleftbottom1')[4],$('.tom1zleft')[4],$('.tom1zright')[4])
xiaotupian($('.fashionbottomleftbottom1')[5],$('.tom1zleft')[5],$('.tom1zright')[5])
xiaotupian($('.fashionbottomleftbottom1')[6],$('.tom1zleft')[6],$('.tom1zright')[6])
xiaotupian($('.fashionbottomleftbottom1')[7],$('.tom1zleft')[7],$('.tom1zright')[7])
xiaotupian($('.fashionbottomleftbottom1')[8],$('.tom1zleft')[8],$('.tom1zright')[8])



















// anniu
function anniu(anniu){
  var fashionbottomzj=anniu
  var left0=$('.Left')[0]

   var right0=$('.Right')[0]
   var left1=$('.Left')[1]
   var right1=$('.Right')[1]
   var left2=$('.Left')[2]
   var right2=$('.Right')[2]
   var left3=$('.Left')[3]
   var right3=$('.Right')[3]
   var left4=$('.Left')[4]
   var right4=$('.Right')[4]
   var left5=$('.Left')[5]
   var right5=$('.Right')[5]
  hover(fashionbottomzj,function(){
      animate(left0,{left:0},200)
      animate(right0,{right:0},200)
      animate(left1,{left:0},200)
      animate(right1,{right:0},200)
      animate(left2,{left:0},200)
      animate(right2,{right:0},200)
      animate(left3,{left:0},200)
      animate(right3,{right:0},200)
      animate(left4,{left:0},200)
      animate(right4,{right:0},200)
      animate(left5,{left:0},200)
      animate(right5,{right:0},200)
  },function(){
      animate(left0,{left:-30},200)
       animate(right0,{right:-30},200)
       animate(left1,{left:-30},200)
       animate(right1,{right:-30},200)
       animate(left2,{left:-30},200)
       animate(right2,{right:-30},200)
       animate(left3,{left:-30},200)
       animate(right3,{right:-30},200)
       animate(left4,{left:-30},200)
       animate(right4,{right:-30},200)
       animate(left5,{left:-30},200)
       animate(right5,{right:-30},200)
  })
   
}


anniu($('.fashionbottomzj')[1])
anniu($('.fashionbottomzj')[3])
anniu($('.fashionbottomzj')[4])
anniu($('.fashionbottomzj')[5])
anniu($('.fashionbottomzj')[6])
anniu($('.fashionbottomzj')[7])








//遮罩
function zhao(zhao){
    var zez=zhao
   
    zez.onmouseover=function(){
      zez.style.background='rgba(255,255,255,0.4)'
      

    }
    zez.onmouseout=function(){
       zez.style.background='rgba(255,255,255,0)'
       

    } 
}
zhao($(".zhao")[0])
zhao($(".zhao")[1])
zhao($(".zhao")[2])
zhao($(".zhao")[3])
zhao($(".zhao")[4])
zhao($(".zhao")[5])
zhao($(".zhao")[6])
zhao($(".zhao")[7])
zhao($(".zhao")[8])
zhao($(".zhao")[9])
zhao($(".zhao")[10])
zhao($(".zhao")[11])







// 内轮播
var fas=getClass('fas')

var imgs0=$('img',fas[0])
var imgs1=$('img',fas[1])
var imgs2=$('img',fas[2])
var imgs3=$('img',fas[3])
var imgs4=$('img',fas[4])
var imgs5=$('img',fas[5])

   var circle=$('.circle')
   var circleLi0=$('.circle-li',circle[0])

   var circleLi1=$('.circle-li',circle[1])
   var circleLi2=$('.circle-li',circle[2])
   var circleLi3=$('.circle-li',circle[3])
   var circleLi4=$('.circle-li',circle[4])
   var circleLi5=$('.circle-li',circle[5])

   
   var left0=$('.Left')[0]

   var right0=$('.Right')[0]
   var left1=$('.Left')[1]
   var right1=$('.Right')[1]
   var left2=$('.Left')[2]
   var right2=$('.Right')[2]
   var left3=$('.Left')[3]
   var right3=$('.Right')[3]
   var left4=$('.Left')[4]
   var right4=$('.Right')[4]
   var left5=$('.Left')[5]
   var right5=$('.Right')[5]
  
   right0.onclick=function(){
        animate(imgs0[0],{left:390},500)
        animate(imgs0[1],{left:0},500)
        circleLi0[0].style.background='#6E6E6E'
        circleLi0[1].style.background='#D1024A'
   }

left0.onclick=function(){
    animate(imgs0[0],{left:0},500)
    animate(imgs0[1],{left:-390},500)
    circleLi0[0].style.background='#D1024A'
    circleLi0[1].style.background='#6E6E6E'
  }
   circleLi0[0].onclick=function(){
  animate(imgs0[0],{left:0},500)
  animate(imgs0[1],{left:-390},500)
   
     circleLi0[0].style.background='#D1024A'
     circleLi0[1].style.background='#6E6E6E'
   }
   circleLi0[1].onclick=function(){
        animate(imgs0[0],{left:390},500)
        animate(imgs0[1],{left:0},500)
        
        circleLi0[0].style.background='#6E6E6E'
        circleLi0[1].style.background='#D1024A'
   }
   

right1.onclick=function(){
        animate(imgs1[0],{left:390},500)
        animate(imgs1[1],{left:0},500)
        
        circleLi1[0].style.background='#6E6E6E'
        circleLi1[1].style.background='#D1024A'
   }
   left1.onclick=function(){
     animate(imgs1[0],{left:0},500)
     animate(imgs1[1],{left:-390},500)
   
     circleLi1[0].style.background='#D1024A'
     circleLi1[1].style.background='#6E6E6E'
  }
  circleLi1[0].onclick=function(){
        animate(imgs1[0],{left:0},500)
     animate(imgs1[1],{left:-390},500)
   
     circleLi1[0].style.background='#D1024A'
     circleLi1[1].style.background='#6E6E6E'
   }
   circleLi1[1].onclick=function(){
        animate(imgs1[0],{left:390},500)
        animate(imgs1[1],{left:0},500)
        
        circleLi1[0].style.background='#6E6E6E'
        circleLi1[1].style.background='#D1024A'
   }
   

right2.onclick=function(){
        animate(imgs2[0],{left:390},500)
        animate(imgs2[1],{left:0},500)
        
        circleLi2[0].style.background='#6E6E6E'
        circleLi2[1].style.background='#D1024A'
   }
   left2.onclick=function(){
     animate(imgs2[0],{left:0},500)
     animate(imgs2[1],{left:-390},500)
   
     circleLi2[0].style.background='#D1024A'
     circleLi2[1].style.background='#6E6E6E'
  }
   
  circleLi2[0].onclick=function(){
        animate(imgs2[0],{left:0},500)
     animate(imgs2[1],{left:-390},500)
   
     circleLi2[0].style.background='#D1024A'
     circleLi2[1].style.background='#6E6E6E'
   }
   circleLi2[1].onclick=function(){
        animate(imgs2[0],{left:390},500)
        animate(imgs2[1],{left:0},500)
        
        circleLi2[0].style.background='#6E6E6E'
        circleLi2[1].style.background='#D1024A'
   }
right3.onclick=function(){
        animate(imgs3[0],{left:390},500)
        animate(imgs3[1],{left:0},500)
        
        circleLi3[0].style.background='#6E6E6E'
        circleLi3[1].style.background='#D1024A'
   }
   left3.onclick=function(){
     animate(imgs3[0],{left:0},500)
     animate(imgs3[1],{left:-390},500)
   
     circleLi3[0].style.background='#D1024A'
     circleLi3[1].style.background='#6E6E6E'
  }
   
circleLi3[0].onclick=function(){
        animate(imgs3[0],{left:0},500)
     animate(imgs3[1],{left:-390},500)
   
     circleLi3[0].style.background='#D1024A'
     circleLi3[1].style.background='#6E6E6E'
   }
   circleLi3[1].onclick=function(){
        animate(imgs3[0],{left:390},500)
        animate(imgs3[1],{left:0},500)
        
        circleLi3[0].style.background='#6E6E6E'
        circleLi3[1].style.background='#D1024A'
   }
right4.onclick=function(){
        animate(imgs4[0],{left:390},500)
        animate(imgs4[1],{left:0},500)
        
        circleLi4[0].style.background='#6E6E6E'
        circleLi4[1].style.background='#D1024A'
   }
   left4.onclick=function(){
     animate(imgs4[0],{left:0},500)
     animate(imgs4[1],{left:-390},500)
   
     circleLi4[0].style.background='#D1024A'
     circleLi4[1].style.background='#6E6E6E'
  }
   circleLi4[0].onclick=function(){
        animate(imgs4[0],{left:0},500)
     animate(imgs4[1],{left:-390},500)
   
     circleLi4[0].style.background='#D1024A'
     circleLi4[1].style.background='#6E6E6E'
   }
   circleLi4[1].onclick=function(){
        animate(imgs4[0],{left:390},500)
        animate(imgs4[1],{left:0},500)
        
        circleLi4[0].style.background='#6E6E6E'
        circleLi4[1].style.background='#D1024A'
   }

right5.onclick=function(){
        animate(imgs5[0],{left:390},500)
        animate(imgs5[1],{left:0},500)
        
        circleLi5[0].style.background='#6E6E6E'
        circleLi5[1].style.background='#D1024A'
   }
   left5.onclick=function(){
     animate(imgs5[0],{left:0},500)
     animate(imgs5[1],{left:-390},500)
   
     circleLi5[0].style.background='#D1024A'
     circleLi5[1].style.background='#6E6E6E'
  
}
circleLi5[0].onclick=function(){
     animate(imgs5[0],{left:0},500)
     animate(imgs5[1],{left:-390},500)
   
     circleLi5[0].style.background='#D1024A'
     circleLi5[1].style.background='#6E6E6E'
   }
   circleLi5[1].onclick=function(){
        animate(imgs5[0],{left:390},500)
        animate(imgs5[1],{left:0},500)
        
        circleLi5[0].style.background='#6E6E6E'
        circleLi5[1].style.background='#D1024A'
   }








//xian
function xian(xian){


var sellingleftbottom2=xian

for(var i=0;i<sellingleftbottom2.length;i++){
  hover(sellingleftbottom2[i],function(){
    var sh2=this.offsetHeight
    var sw2=this.offsetWidth
    var top2=$(".top2",this)[0]
    var bottom2=$(".bottom2",this)[0]
    var left2=$(".left2",this)[0]
    var right2=$(".right2",this)[0]
    animate(top2,{width:sw2-2},500)
    animate(bottom2,{width:sw2-2},500)
    animate(left2,{height:sh2-2},500)
    animate(right2,{height:sh2-2},500)
    top2.style.height=1+'px'
    bottom2.style.height=1+'px'
    left2.style.width=1+'px'
    right2.style.width=1+'px'
  },function(){
    var top2=$(".top2",this)[0]
    var right2=$(".right2",this)[0]
    var bottom2=$(".bottom2",this)[0]
    var left2=$(".left2",this)[0]
    animate(top2,{width:0},500)
    animate(bottom2,{width:0},500)
    animate(left2,{height:0},500)
    animate(right2,{height:0},500)
  })
}
}
xian($(".fashionbottomrightpic"))










//跳楼
function tiaolou(tiaolou2,tiaolou3,tiaolou4,tiaolou5,tiaolou6){
      var  lastte=$(".lastte")[0]
      var  floor_nav=tiaolou2
      var floor_lis=tiaolou3
      var floor=tiaolou4
      var  floor_nav1=tiaolou5
      var floor_lis1=tiaolou6
      var now
      var flag=true
      var flag1=true
      var CHeight=document.documentElement.clientHeight
      for(var i=0;i<floor.length;i++){
        floor[i].h=floor[i].offsetTop;
      }
      window.onscroll=function(){
        var obj=document.body.scrollTop? document.body:document.documentElement;
        var top=obj.scrollTop
        if(top>=floor[0].h-300){
          floor_nav.style.display='block';
          floor_nav1.style.display='none';
          var nHeight=floor_nav.offsetHeight;
      floor_nav.style.top=(CHeight-nHeight)/2+'px';
      floor_nav1.style.top=(CHeight-nHeight)/2+'px';
      if(flag){
        flag=false
      }
         }else if(top<floor[0].h-300){
              floor_nav.style.display='none';
              floor_nav1.style.display='none';
              if(flag1){
                   flag1=false 
              }
              
          }
          
      
          for(var i=0;i<floor.length;i++){ 
          if(top>=floor[i].h-200){
            for(var j=0;j<floor_lis.length;j++){
              floor_lis[j].style.color="#000"
              floor_lis[j].style.display="block"
              
              
            }    
              floor_lis[i].style.color="rgba(0,0,0,0)"
              now=i
          }
      }
      for(var i=0;i<floor.length;i++){ 
          if(top>=floor[i].h-200){
            for(var j=0;j<floor_lis1.length;j++){
              floor_lis1[j].style.color="rgba(0,0,0,0)"
              floor_lis1[j].style.display="block"
              floor_nav1.style.display='block';
              floor_lis1[j].style.background="rgba(0,0,0,0)"
              
              
            }    
              floor_lis1[i].style.background="#E5004F"
              floor_lis1[i].style.color="#FFF"
              floor_lis1[i].style.display="block"
              now=i
          }
      }
      
      }
      for(var i=0;i<floor_lis.length;i++){
        floor_lis1[i].index=i;
        if(i<floor_lis.length-1){
        floor_lis1[i].onclick=function(){
            animate(document.body,{scrollTop:floor[this.index].h})
            animate(document.documentElement,{scrollTop:floor[this.index].h})

            now=this.index
        } }
      else if(i==9){
        floor_lis1[i].onclick=function(){
            animate(document.body,{scrollTop:0})
            animate(document.documentElement,{scrollTop:0})

            now=this.index
          }
      }
        floor_lis1[i].onmouseover=function(){
            // this.style.color='red'
            this.style.background="#E5004F"
              this.style.color="#FFF"
              this.style.display="block"
        }
        floor_lis1[i].onmouseout=function(){
            if(this.index==now){
                return
            }
            this.style.color="rgba(0,0,0,0)"
              this.style.display="block"
             
              this.style.background="rgba(0,0,0,0)"

        }
      }
}
tiaolou($('.floor-nav')[0],$('.floor-lis'),$('.floor'),$('.floor-nav1')[0],$('.floor-lis1'))
























}
$(document).ready(function(){
	//国美会员下拉显示效果
	function vip(){
		$(".headerLeft .vip").hover(function(){
			$(this).css("border-color","#e6e6e6")
			$(this).children(".public").show()
			$("#vip").css("color","#c00")
			$(this).children(".border").css("transform","rotate(180deg)")
			$(this).children(".null").show()
		},function(){
			$(this).css("border-color","#f8f8f8")
			$(this).children(".public").hide()
			$("#vip").css("color","#888")
			$(this).children(".border").css("transform","rotate(0deg)")
			$(this).children(".null").hide()
		})
	}
	vip()
	//国美会员下拉框中点击轮播效果
	function vipLunbo(){
			var flag=true
			var width=$(".public .user-icon div").width()
			var ulLeft=$(".public .user-icon div ul").position().left
		$(".public .user-icon .gt").click(function(){
			if(!flag){
				return
			}
			flag=false
			var left=ulLeft-width
			if(left<-width*2){
				left=-width*2
			}
			$(".public .user-icon div ul").animate({left:left},400,function(){
				flag=true
			})
			ulLeft=left
		})
		$(".public .user-icon .gt").hover(function(){
			$(this).css("background-position","-76 -513")
		},function(){
			$(this).css("background-position","-76 -357")
		})
		$(".public .user-icon .lt").hover(function(){
			$(this).css("background-position","-60 -513")
		},function(){
			$(this).css("background-position","-60 -357")
		})
		$(".public .user-icon .lt").click(function(){
			var left=ulLeft+width
			if(left>=0){
				left=0
			}
			$(".public .user-icon div ul").animate({left:left},400,function(){
				flag=true
			})
			ulLeft=left
		})
	}
	vipLunbo()
	//header部分右部下拉显示效果
	function headerRight(){
		$(".headerRight .nav").hover(function(){
			$(this).css("border-color","#e6e6e6")
			$(this).children(".public").show()
			$("#vip").css("color","#c00")
			$(this).children(".border").css("transform","rotate(180deg)")
			$(this).children(".null").show()
		},function(){
			$(this).css("border-color","#f8f8f8")
			$(this).children(".public").hide()
			$("#vip").css("color","#888")
			$(this).children(".border").css("transform","rotate(0deg)")
			$(this).children(".null").hide()
		})
	}
	headerRight()
	//header部分下面图片点击关闭效果
	function off(){
		$(".topad .off").hover(function(){
			$(this).css({"background":"#333","opacity":"0.6"})
		},function(){
			$(this).css({"background":"transparent","opacity":"1"})
		})
		$(".topad .off").click(function(){
			$(".topad").hide()
		})
	}
	off()
	
	//购物车效果
	function cart(){
		$(".gome-cart .cart").hover(function(){
			$(".gome-cart .cart .shop").show()
		},function(){
			$(".gome-cart .cart .shop").hide()
		})
	}
	cart()
	//banner左侧导航栏效果
	function bannerLeftNav(){
		$("#leftnav ul li").hover(function(){
			$(this).children(".fff").show()
			$(this).children(".full").show()
			$(this).css("background","#fff")
			$(this).children("h3").children("a").css("color","#333")
		},function(){
			$(this).children(".fff").hide()
			$(this).children(".full").hide()
			$(this).css("background","transparent")
			$(this).children("h3").children("a").css("color","#fff")
		})
		$("#leftnav ul li h3 a").hover(function(){
			$(this).css("color","#E3101E")
		},function(){
			$(this).css("color","#333")
		})
	}
	bannerLeftNav()
	//	banner右上方轮播	
	function bannerLeftTop(){
		var t=setInterval(move,5000)
		function move(){
			$(".category-box .category-nav .sideroll .adnav ul").animate({top:-38},1000,function(){
				$(this).append($(this).children("li:first"))
				$(this).css("top","0")
			})
		}
	}
	bannerLeftTop()
	//	banner轮播
	function bannerLunBo(){
		var flag=true
		var n=0
		var next=0
		var t=setInterval(move,4500)
		function move(){
			if(!flag){
				return
			}
			flag=false
			next=n+1
			if(next>=$("#slide .slide ul li:even").length){
				next=0
			}
			$("#slide .slide ul li:even").eq(next).css("opacity","0")
			$("#slide .slide ul li:even").eq(n).animate({opacity:0},400).end().eq(next).animate({opacity:1},400,function(){
				flag=true
			})
			$("#slide .slide-tab .lang").eq(n).show(100)
			$("#slide .slide-tab .lang").eq(next).hide(100)
			$("#slide .slide-tab .item").eq(n).hide(100,function(){
				$(this).children("i").css({"background":"#fff","height":"3px"})
			})
			$("#slide .slide-tab .item").eq(next).show(100,function(){
				$(this).children("i:first").css({"background":"#e3101e","height":"5px"})
			})
			n=next
		}
		$("#slide .slide ul li").hover(function(){
			clearInterval(t)
		},function(){
			t=setInterval(move,4500)
		})
		$("#slide .slide-tab .edit-mode").mouseover(function(){
			var index=$(this).index()
			$("#slide .slide-tab .edit-mode").children(".lang").show()
			$("#slide .slide-tab .edit-mode").children(".item").hide()
			$("#slide .slide-tab .edit-mode").eq(index).children(".lang").hide()
			$("#slide .slide-tab .edit-mode").eq(index).children(".item").show()
//			$("#slide .slide ul").hide()
//			$("#slide .slide ul").eq(index).show(function(){
//				var index=$(this).children("i").index()
//				$(this).children("li").animate({opacity:1})
//			})
//			$("#slide .slide-tab .edit-mode").eq(index).find(".item i").mouseover(function(){
//				var index=$(this).index()
//				$("#slide .slide ul").find("li").eq(index).animate({opacity:1})
//			})
	})
			$("#slide .slide-tab .edit-mode").find(".item i").on("mouseover",function(){
				var index=$(this).index()
				console.log(index)
			})
			
	}
	bannerLunBo()
	
    //猜你喜欢
    function like(){
		var n=0
		var next=0
    	$(".like .like-box .title .other a").click(function(){
    		next=n+1
    		if(next>=$("#guess ul").length){
    			next=0
    		}
    		$("#guess ul").eq(next).hide()
    		$("#guess ul").eq(n).hide().end().eq(next).show()
    		n=next
    	})
    }
    like()

	
	//楼层中的精选中的轮播
	function floorOneLunBo(obj1,obj2,obj3,obj4,obj5){
		var n=0
		var next=0
		var flag=true
		var t=setInterval(move,4500)
		function move(type){
			var type=type||"right"
			if(!flag){
				return
			}
			flag=false
			if(type=="right"){
				next=n+1
				if(next>=obj1.length){
					next=0
				}
			}else if(type=="left"){
				next=n-1
				if(next<0){
					next=obj1.length-1
				}
			}
			obj1.eq(n).animate({opacity:0},600).end().eq(next).animate({opacity:1},600,function(){
				flag=true
			})
			obj2.eq(n).css("background","#3e3e3e")
			obj2.eq(next).css("background","#b61b1f")
			n=next
		}
		obj3.hover(function(){
			clearInterval(t)
			obj4.show()
			obj5.show()
		},function(){
			t=setInterval(move,4500)
			obj4.hide()
			obj5.hide()
		})
		obj5.on("click",function(){
			move("right")
		})
		obj4.on("click",function(){
			move("left")
		})
		obj2.each(function(index){
			$(this).on("mouseover",function(){
				if(index!=n){
					if(!flag){
						return
					}
					flag=false
				}
				obj1.eq(n).animate({opacity:0},600).end().eq(index).animate({opacity:1},600,function(){
					flag=true
				})
				obj2.eq(n).css("background","#3e3e3e")
				obj2.eq(index).css("background","#b61b1f")
				n=index
			})
		})
	}
	floorOneLunBo($(".floor1 .slider-box .pic a"),$(".floor1 .slider-box .roll li a"),$(".floor1 .slider-box"),$(".floor1 .slider-box .slider-left"),$(".floor1 .slider-box .slider-right"))
	floorOneLunBo($(".floor2 .slider-box .pic a"),$(".floor2 .slider-box .roll li a"),$(".floor2 .slider-box"),$(".floor2 .slider-box .slider-left"),$(".floor2 .slider-box .slider-right"))
	floorOneLunBo($(".floor3 .slider-box .pic a"),$(".floor3 .slider-box .roll li a"),$(".floor3 .slider-box"),$(".floor3 .slider-box .slider-left"),$(".floor3 .slider-box .slider-right"))
	floorOneLunBo($(".floor4 .slider-box .pic a"),$(".floor4 .slider-box .roll li a"),$(".floor4 .slider-box"),$(".floor4 .slider-box .slider-left"),$(".floor4 .slider-box .slider-right"))
	floorOneLunBo($(".floor5 .slider-box .pic a"),$(".floor5 .slider-box .roll li a"),$(".floor5 .slider-box"),$(".floor5 .slider-box .slider-left"),$(".floor5 .slider-box .slider-right"))
	
		
	//楼层中的选项卡效果
	function floorXuan(obj1,obj2,obj3){
		obj2.each(function(){
			$(this).hover(function(){
				obj3.show()
			},function(){
				obj3.hide()
			})
		})
			var n=0
			var next=0
			var flag=true
		obj3.each(function(){
			$(this).click(function(){
				next=n+1
				if(!flag){
					return
				}
				flag=false
				if(next>=obj2.children(".main").length){
					next=0
				}
				obj2.children(".main").eq(next).css("display","none")
				obj2.children(".main").eq(n).hide()
				obj2.children(".main").eq(next).show(function(){
					flag=true
				})
				obj1.children("a").eq(n).css({"background":"#fff","color":"#333"})
				obj1.children("a").eq(next).css({"background":"#535353","color":"#fff"})
				n=next
			})
		})
		obj1.each(function(index){
			$(this).mouseover(function(){
				obj2.each(function(){
					$(this).children(".main").stop(true).hide()
					obj1.children("a").css({"background":"#fff","color":"#333"})
				})
				obj2.children(".main").eq(index).stop(true).show()
				obj1.children("a").eq(index).css({"background":"#535353","color":"#fff"})
				n=index
			})
		})
	}
	floorXuan($(".floor1 .box .title .tab li"),$(".floor1 .box .con"),$(".floor1 .box .con .side-right"))
	floorXuan($(".floor2 .box .title .tab li"),$(".floor2 .box .con"),$(".floor2 .box .con .side-right"))
	floorXuan($(".floor3 .box .title .tab li"),$(".floor3 .box .con"),$(".floor3 .box .con .side-right"))
	floorXuan($(".floor4 .box .title .tab li"),$(".floor4 .box .con"),$(".floor4 .box .con .side-right"))
	floorXuan($(".floor5 .box .title .tab li"),$(".floor5 .box .con"),$(".floor5 .box .con .side-right"))


	//楼层跳转
	function floor(){
		var wHeight=$(window).height()
		var wWidth=$(window).width()
		var now;
		var nheight
		for(var i=0;i<$(".floor").length;i++){
			var juli=$(".floor").eq(i).position();
			$(".floor").eq(i).prop("h",juli.top)
		}
		$(window).on("scroll",function(){
			var top=$(window).scrollTop()
			if(top>$(".floor").first().prop("h")-300){
				$(".fix-floors").css("display","block")
				var width=$(".fix-floors").width()
				var height=$(".fix-floors").height()
				var fLeft=(wWidth-1200)/2-66+"px"
				var fTop=(wHeight-height)/2+"px"
				console.log(fLeft,fTop)
				$(".fix-floors").css({"top":fTop,"left":fLeft})
			}
			if(top<$(".floor").first().prop("h")-300){
				$(".fix-floors").css("display","none")
			}
			for(var i=0;i<$(".floor").length;i++){
				if(top>=$(".floor").eq(i).prop("h")-200){
					$(".fix-floors .floor-tab").eq(i).find("a").css("color","#c00").end().siblings().find("a").css("color","#5e5e5e")
					$(".fix-floors .floor-tab").eq(i).find("i").css("display","block").end().siblings().find("i").css("display","none")
					now=i
				}
			}
		})
		$(".fix-floors .floor-tab").on("click",function(){
			var index=$(this).index()
			var hh=$(".floor").eq(index).prop("h")
			var top=$(window).scrollTop()
			var src={aa:top}
			$(src).animate({aa:hh},{
				duration:300,
				step:function(){
					$(window).scrollTop(src.aa)
				}
			})
			$(this).find("a").css("color","#c00").end().siblings().find("a").css("color","#5e5e5e")
			$(this).find("i").css("display","block").end().siblings().find("i").css("display","none")
            now=index;
		})
		$(".up").on("click",function(){
			var top=$(window).scrollTop()
			var src={aa:top}
			$(src).animate({aa:0},{
				duration:300,
				step:function(){
					$(window).scrollTop(src.aa)
				}
			})
		})
		$(".up-down .down").on("click",function(){
			var top=$(window).scrollTop()
			var hh=$("body").height()
			var src={aa:top}
			$(src).animate({aa:hh},{
				duration:300,
				step:function(){
					$(window).scrollTop(src.aa)
				}
			})
		})
		$(".fix-floors .floor-tab").hover(function(){
			$(this).find("i").css("display","block")
			$(this).find("a").css("color","#c00")
		},function(){
			if($(this).index()==now){
                return;
            }
            $(this).find("a").css("color","#5e5e5e")
            $(this).find("i").css("display","none")
		})
//		
	}
	floor()
	//	右侧固定栏鼠标移入效果
	function fixLeft(){
		$(".fix-right .fix-right-bottom li").hover(function(){
			$(this).children(".fav-con").animate({left:-80},300)
			$(this).children(".fav-first").show(200)
			$(this).children(".a").children("b").show()
		},function(){
			$(this).children(".fav-con").animate({left:0},300)
			$(this).children(".fav-first").hide(200)
			$(this).children(".a").children("b").hide()
		})
	}
	fixLeft()
	
	
	
	
	
	
	
	
	
	
	
	
	
})

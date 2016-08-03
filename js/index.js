
/*获取对象函数*/
/*function $id(objId){
	return document.getElementById(objId);
}
function $name(objId){
	return document.getElementsByName(objId);
}*/
/*添加边框颜色*/
/*function addBorderColor(){
	$id("ipt-bx").style.borderColor = "#4791ff";
}*/
/*恢复边框颜色*/
/*function removeBorderColor(){
	$id("ipt-bx").style.borderColor = "#b6b6b6";
}*/
/*显示子菜单*/
/*function showSubmenu(){
	$id("submenu").style.display = "block";
}*/
/*隐藏子菜单*/
/*function hideSubmenu(){
	$id("submenu").style.display = "none";
}*/



var app = (function(){
	/*工厂模式*/
	var factory = function(type){
		return new selector[type]();
	}
	var me;
	/*单例模式*/
	var info = {
		getObj : function(type){
			if(!me){
				me = new factory(type);
			}
			return me;
		}
	}
	return info;

})();

var selector = (function(){
	var fn = {
		getId : function(){
			return function(objId){
				return document.getElementById(objId);
			}
		},
		getName : function(){
			return function(objId){
				return document.getElementsByName(objId);
			}
		}
	};
	return fn;
})();
/*添加边框颜色*/
function addBorderColor(){
	var $id = app.getObj("getId");
	$id("ipt-bx").style.borderColor = "#4791ff";
}
/*恢复边框颜色*/
function removeBorderColor(){
	var $id = app.getObj("getId");
	$id("ipt-bx").style.borderColor = "#b6b6b6";
}
/*显示子菜单*/
function showSubmenu(){
	var $id = app.getObj("getId");
	$id("submenu").style.display = "block";
}
/*隐藏子菜单*/
function hideSubmenu(){
	var $id = app.getObj("getId");
	$id("submenu").style.display = "none";
}





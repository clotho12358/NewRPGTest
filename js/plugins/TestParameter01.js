/*:
* @author Kevin

* @param 角色名後ID顯示開關
* @desc 角色名後ID顯示(1:ON, 0 or other:OFF)
* @default 1
*/
(function(){
    var pluginName = 'TestParameter01';
    var param = PluginManager.parameters(pluginName);
    var show_Id = Number(param['角色名後ID顯示開關'])||0;       //Number(...)除了1以外都是0
    
    if(show_Id){
        var _Game_Actor_name = Game_Actor.prototype.name;
        Game_Actor.prototype.name = function(){
            var temp = _Game_Actor_name.call(this);
            return temp + ":" + this.actorId();
        };
    }
})();
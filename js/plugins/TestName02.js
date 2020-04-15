(function(){
    //Game_Actor都在rpg_object裡
   var _Game_Actor_name = Game_Actor.prototype.name;        //將其他方法的資料先留下來
   var _Game_Actor_setName = Game_Actor.prototype.setName;

   Game_Actor.prototype.name = function(){
       var temp = _Game_Actor_name.call(this);      //呼叫其他方法的資料
       return temp + "書類@2";      //疊加上去
        //return String(this.actorId());
    };
    Game_Actor.prototype.setName = function(name){
        var temp = _Game_Actor_setName.call(this,name);     //將輸入的資料丟給temp
        return temp;        //傳資料temp
    };
})();
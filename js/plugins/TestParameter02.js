/*:
* @author Kevin

* @param Id開關
* @desc 名字後面是否要加上Id(1:ON Other:OFF)
* @default 1

* @help 學習教材
*/

(function(){
    var pluginName = 'TestParameter02';
    var param = PluginManager.parameters(pluginName);       //param對應到此程式的外部參數
    var booleanId = Number(param['Id開關'])||0;         //將特定的外部參數帶入
    var _Game_Actor_name = Game_Actor.prototype.name;       //暫存角色名初始設定
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;     //暫存插件指令初始設定
    var _Game_Enemy_name = Game_Enemy.prototype.name;

    
    /*
    //沒有用file去存取資料, 退出遊戲後數值全部回歸初始值
    Game_Actor.prototype.name = function(){
        var temp = _Game_Actor_name.call(this);     //提出初始設定
        if(booleanId){
            return temp + ":" + this.actorId();
        }else{
            return temp;
        }
    };

    Game_Interpreter.prototype.pluginCommand = function(command, args){         //設定插件指令
        _Game_Interpreter_pluginCommand.call(this, command, args);      //提出初始設定
        if(command == pluginName){
            if(args[0] == "show_Id"){
                switch(args[1]){
                    case "ON":
                        console.log("ON");
                        booleanId = 1;
                        break;
                    case "OFF":
                        console.log("OFF");
                        booleanId = 0;
                        break;
                }
            }
        }

    };*/
    
    //file能藉由保存來存取資料
    Game_Actor.prototype.name = function(){
        var temp = _Game_Actor_name.call(this);
        var f = $gameSystem[pluginName + "_show_aid"];
        if(f === undefined ? booleanId : f){
            return temp + ":" + this.actorId();
        }else{
            return temp;
        }
    };

    Game_Enemy.prototype.name = function(){
        var temp = _Game_Enemy_name.call(this);
        var f = $gameSystem[pluginName + "_show_eid"];
        if(f === undefined ? booleanId : f){
            return temp + ":" + this.enemyId();
        }else{
            return temp;
        }
    };

    Game_Interpreter.prototype.pluginCommand = function(command, args){
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if(command == pluginName){
            if(args[0] == "show_Id"){
                switch(args[1]){
                    case "ON":
                        $gameSystem[pluginName + "_show_aid"] = 1;
                        $gameSystem[pluginName + "_show_eid"] = 1;
                        break;
                    case "OFF":
                        $gameSystem[pluginName + "_show_aid"] = 0;
                        $gameSystem[pluginName + "_show_eid"] = 0;
                        break;
                }
            }
        }
    };
    
    

})();
/*:
* @author Kevin

*/

(function(_global){
    var pluginName ='battle_windows';

    Game_Interpreter.prototype.pluginCommand = function(command, args){
        _Game_Interpreter_pluginCommand.call(command, args);
        if(command == pluginName){
            if(args == "battle_start"){
                Window_Base();
            }
        }
    };
})(this);
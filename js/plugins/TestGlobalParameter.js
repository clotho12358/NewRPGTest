/*:
* @author Kevin
* @help 外部のparameter使用
*/

var Test_Sample = {};

(function(_global){
    if(!_global["Test_Sample"]){        //此plugin要有_global & this才能讀到上方的Test_Sample
        throw new Error('Test_Sample is not exist');
    }else{
        console.log("Test_Sample is find");
    }
    if(!_global["Test_Sample2"]){        //此plugin要有_global & this才能讀到TestClass plugin的Test_Sample2
        throw new Error('Test_Sample2 is not exist');
    }else{
        console.log("Test_Sample2 is find");
    }

    if(!Test){      //TestClass plugin要有宣告function Test(){}
        throw new Error('Class Test is not exist');
    }else{
        console.log("Class Test is find");
    }
    console.log(Test.fu(5));    //讀到TestClass plugin的function
})(this);
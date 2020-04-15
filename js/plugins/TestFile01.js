//處理數據存取的細節

(function(){
    var _DataManager_makeSaveContents = DataManager.makeSaveContents;
    var _DataManager_extractSaveContents = DataManger.extractSaveContents;

    DataManager.makeSaveContents = function(){
        var data = _DataManager_makeSaveContents.call(this);
        return data;
    }

    DataManager.makeSaveContents = function(contents){
        var data = _DataManager_extractSaveContents.call(this.contents);
        return data;
    }

})();
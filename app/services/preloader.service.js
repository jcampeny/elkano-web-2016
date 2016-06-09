angular.module('app').service("preloader",[ '$q', function($q) {
    var stateLoad = {
        window: false,
        db : false
    };
    return {
        preload : preload,
        foo : foo,
        load : load
    };
    function load(from){
        var allLoaded = false;
        switch(from) {
            case 'db':
                stateLoad.db = true;
                break;
            case 'window':
                stateLoad.window = true;
                break;
            default:
                allLoaded = true;
        }
        
        if(stateLoad.db == stateLoad.window){ 
            allLoaded = true;
        }

        return allLoaded;
    }
    function loadImg(img) {
        var defered = $q.defer();
        var promise = defered.promise;
        img.addEventListener('load', function() {
            defered.resolve({value : 1});
        });
//modificar valores si queremos % en el loaging
        return promise;
    }
    function preload(images) {

        var defered = $q.defer();
        var promise = defered.promise;
        var imgsLoadeds = [];
        if(typeof images == "object"){
            angular.forEach(images, function(value, key) {
                var image = new Image();
                image.src = value;
                if(!image.complete){
                    imgsLoadeds[key] = loadImg(image);
                }

            });
            $q.all(imgsLoadeds).then(function(){
                defered.resolve();
            });   
        } 
        return promise;
    }
 
    function foo(){

        return Math.random(1);
    }
}]);

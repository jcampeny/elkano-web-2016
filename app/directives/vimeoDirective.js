angular.module('app')
    .directive('autoplayekd', function($document, screenService, $rootScope) {
        return {
            restrict: 'EA',
            scope: {
            },
            link: function postLink(s, e, a) {
                s.isPlaying = false;

                var scrollHandling = {
                    allow: true,
                    reallow: function() {
                        scrollHandling.allow = true;
                    },
                    delay: 100 //++ to improve performance
                };

                var iframe = e[0],
                player = $f(iframe);

                if(a.src.indexOf("autoplay") > 0){
                    $rootScope.$watch('loaded', function(){
                        videoController();       
                    });
                
                    $document.bind('mousewheel DOMMouseScroll touchmove scroll', function(){
                        videoController();
                    });
                }
                function videoController(){
                    if($rootScope.loaded && scrollHandling.allow){
                        scrollHandling.allow = false;
                        scrollHandling.reallow();
                        if(screenService.inScreen($(e)) && !s.isPlaying){
                            s.isPlaying = true;
                            player.api('play');
                        }
                        if(!screenService.inScreen($(e)) && s.isPlaying){
                            s.isPlaying = false;
                            player.api('pause');
                        }
                    }
                }
            }
        };
    });

/*
angular.module('app')
    .directive('autoplayvimeo', function($document, screenService, $rootScope) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
            },
            template: '<iframe></iframe>',
            link: function postLink(s, e, a) {
                s.isPlaying = false;

                var scrollHandling = {
                    allow: true,
                    reallow: function() {
                        scrollHandling.allow = true;
                    },
                    delay: 100 //++ to improve performance
                };

                var url = "http://player.vimeo.com/video/" + a.vid + "?title=0&byline=0&portrait=0&api=" + a.pid;
                e.attr('src', url);

                var iframe = e[0],
                player = $f(iframe);

                $rootScope.$watch('loaded', function(){
                    videoController();       
                });

                $document.bind('mousewheel DOMMouseScroll touchmove scroll', function(){
                    videoController();
                });

                function videoController(){
                    if($rootScope.loaded && scrollHandling.allow){
                        scrollHandling.allow = false;
                        scrollHandling.reallow();
                        if(screenService.inScreen($(e)) && !s.isPlaying){
                            s.isPlaying = true;
                            player.api('play');
                        }
                        if(!screenService.inScreen($(e)) && s.isPlaying){
                            s.isPlaying = false;
                            player.api('pause');
                        }
                    }
                }
            }
        };
    });


*/
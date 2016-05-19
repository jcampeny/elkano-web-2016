/**
 * The BlogService retrieves and processes the json response from WP-API into a form that Angular can use.
 *
 * @param $http
 * @param $sce
 * @param config
 * @returns {{allPosts: allPosts, allPostsByTag: allPostsByTag, allPostsBySearchTerm: allPostsBySearchTerm, featuredPosts: featuredPosts, post: post}}
 * @constructor
 */
 angular
    .module('app')
    .service('DataService', ['$http', '$sce'/*, 'config'*/, function($http, $sce/*, config*/){

        function getMedia (img){
            var d = new DOMParser();
            var p = d.parseFromString(img, "text/html");
            var imgDOM = $('img', p); 

            return imgDOM;
        }

        function createInfographicContent(customPost){
            return {
                firstImg    : getMedia(customPost.first_img),
                title1      : customPost.title.rendered,
                subtitle    : customPost.content.rendered,
                title2      : customPost.title_2,
                content2    : customPost.content_2,
                images      : getMedia(customPost.images),
                category    : customPost.embed_categories[0]
            };
        }

        function createMotionContent(customPost){
            return {
                firstImg    : getMedia(customPost.first_img),
                title1      : customPost.title.rendered,
                subtitle    : customPost.content.rendered,
                video       : customPost.video,
                title2      : customPost.title_2,
                content2    : customPost.content_2,
                images      : getMedia(customPost.images),
                title3      : customPost.title_3,
                content3    : customPost.content_3,
                gifs        : getMedia(customPost.gifs),
                styleFrames : getMedia(customPost.styleframes),
                category    : customPost.embed_categories[0]
            };
        }

        function createReportContent(customPost){

            return {
                firstImg    : getMedia(customPost.first_img),
                title1      : customPost.title.rendered,
                subtitle    : customPost.content.rendered,
                title2      : customPost.title_2,
                content2    : customPost.content_2,
                images      : getMedia(customPost.images),
                styleFrames : getMedia(customPost.styleframes)
            };
        }

        function createInteractiveContent(customPost){
            return {
                firstImg    : getMedia(customPost.first_img),
                title1      : customPost.title.rendered,
                subtitle    : customPost.content.rendered,
                video       : customPost.video,
                title2      : customPost.title_2,
                content2    : customPost.content_2,
                images      : getMedia(customPost.images),
                title3      : customPost.title_3,
                content3    : customPost.content_3,
                gifs        : getMedia(customPost.gifs),
                styleFrames : getMedia(customPost.styleframes),
                category    : customPost.embed_categories[0]
            };
        }
        return {
            all     : all,
            getById : getById,
            getMediaFromCustomPost  : getMediaFromCustomPost,
            getInfoFromCategory     : getInfoFromCategory
        };

        function getInfoFromCategory(customPost){
            var category = customPost.embed_categories[0];
            var content;

            switch (category){
                case 'motion':
                    return createMotionContent(customPost);
                case 'infographic':
                    return createInfographicContent(customPost);
                case 'interactive':
                    return createInteractiveContent(customPost);
                case 'report':
                    return createReportContent(customPost);
                default:
                    return createMotionContent(customPost);
            }
        }

        function getMediaFromCustomPost (customPost, metabox, slug){
            return getMedia(customPost[metabox]);
        }

        function all(type, results, page) {
            var pagination = "";
            if(typeof results !== "undefined" && typeof type !== "undefined"){
                if(results === "all"){
                    pagination = "&page=1&per_page=100";    
                }else{
                    pagination = (typeof page !== "undefined") ? ("&page="+page+"&per_page="+ results) : ("&page=1&per_page="+results);
                }
                
            }
            return getData(type+"?_embed"+pagination);
        }

        // function allByTag(type, tag) {
        //     return getData(type+'?filter[tag]=' + tag);
        // }

        // function allPostsBySearchTerm(searchTerm) {
        //     return getData('posts?filter[category_name]=post&filter[s]=' + searchTerm);
        // }

        // function featuredPosts() {
        //     return getData('posts?filter[category_name]=post%2Bfeatured');
        // }

        function getById(type, id) {
            return getData(type+'/' + id + '?_embed');
        }

        function getData(url) {
            var path = "/wordpress/wp-json/wp/v2/";
            return $http
                .get(path + url, { cache: true })
                .then(function(response) {
                    if (response.data instanceof Array) {
                        var items = response.data.map(function(item) {
                            return decorateResult(item);
                        });
                        return items;
                    } else {
                        return decorateResult(response.data);
                    }
                });
        }

        /**
         * Decorate a post to make it play nice with AngularJS
         * @param result
         * @returns {*}
         */
        function decorateResult(result) {

            if(typeof result.taxonomy === "undefined"){
                //if(typeof result.title.rendered !== "undefined"){result.title = $sce.trustAsHtml(result.title.rendered);}
                if(typeof result.excerpt !== "undefined"){result.excerpt = $sce.trustAsHtml(result.excerpt.rendered);}
                if(typeof result.date !== "undefined"){result.date = Date.parse(result.date);}
                //if(typeof result.content !== "undefined"){result.content_untrust = result.content.rendered;}
                //if(typeof result.content !== "undefined"){result.content = $sce.trustAsHtml(result.content.rendered);}


                if(typeof result._embedded !== "undefined" && typeof result._embedded['wp:featuredmedia'] !== "undefined" && result._embedded['wp:featuredmedia'].length > 0){
                    result.image = result._embedded['wp:featuredmedia'][0].source_url;
                }

                if(typeof result._embedded !== "undefined" && typeof result._embedded['wp:term'] !== "undefined" && result._embedded['wp:term'].length > 0){
                    result.embed_categories = [];

                    angular.forEach(result._embedded['wp:term'],function(term){
                        if(Array.isArray(term)){
                            angular.forEach(term, function(cat){
                                if(cat.taxonomy === "category"){
                                    result.embed_categories.push(cat.slug);
                                }
                            });
                        }
                    });
                }
            }
            return result;
        }
    }]);





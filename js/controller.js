(function(){

    let model = app.model;
    let view = app.view;
    
    function bindSearch() {
        view.eventHolder.on( view.searchEventName, (event, item) => {
            model.searchFilms(item).then((newFilms) => {
                initGallery(newFilms);
                bindEvents();
            });
        })
    }
    
    function bindEvents(){
        bindSearch();
    }
    
    function initGallery(films){
        view.init(films);
    }

    function init() {
        model.getFilms().then((films) => {
            initGallery(films);
            bindEvents();
        });
    }
    init();
    
}());

(function(){

    let model = app.model;
    let view = app.view;
    
    function bindSearch() {
        view.eventHolder.on( view.searchEventName, (event, item) => {
            model.searchData(item).then((data) => {
                initGallery(data);
                bindEvents();
            });
        })
    }
    
    function bindEvents(){
        bindSearch();
    }
    
    function initGallery(data){
        view.init(data);
    }

    function init() {
        model.getData().then((data) => {
            initGallery(data);
            bindEvents();
        });
    }
    init();
    
}());

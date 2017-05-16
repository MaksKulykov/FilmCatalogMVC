'use strict';
(function(){
    
    let model = function() {

        let url = "http://www.omdbapi.com/?page=1&s=";
        let filmName = "Matrix";

        function getFilms() {
            return $.get( url + filmName, function( films ) {
                console.log("Initial data is loaded");
            })
        }
        
        function searchFilms(item) {
            filmName = item;
            return getFilms();
        }
        
        return {
            getFilms : getFilms,
            searchFilms: searchFilms,
        }
    };
    
    window.app = window.app || {};
    window.app.model = model();
}());

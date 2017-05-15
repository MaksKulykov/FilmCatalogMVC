'use strict';
(function(){
    
    let model = function() {

        let url = "http://www.omdbapi.com/?page=1&s=";
        let filmName = "Matrix";

        function getData() {
            return $.get( url + filmName, function( data ) {
                console.log("Initial data is loaded");
            })
        }
        
        function searchData(item) {
            filmName = item;
            return getData();
        }
        
        return {
            getData : getData,
            searchData: searchData,
        }
    };
    
    window.app = window.app || {};
    window.app.model = model();
}());

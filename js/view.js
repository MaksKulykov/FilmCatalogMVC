"use strict";
(function () {

    let view = function () {

        let DOMElements = {
            result : document.querySelector("#result"),
            form : document.querySelector("#form")
        };
        let eventHolder = $({});
        let searchEventName = "search";

        function initListener() {
            DOMElements.form.addEventListener("click", (event) => {
                if (event.target.getAttribute("data-class") === "btnSearch") {
                    let newFilm = event.target.closest(".form-search");
                    eventHolder.trigger(searchEventName, [searchElement(newFilm)]);
                }
            });
        }

        function searchElement(element) {
            return element.getElementsByTagName("input")[0].value;
        }

        function buildList(data) {
            let res = data.Search.reduce(function (sum, item){
                return sum + `<div class="col-xs-6" >\
        <img src="${item.Poster}" class="img-thumbnail">\
            <div class="info-wrapper">\
                <div class="text-muted">${item.Title}</div>\
                <div class="text-muted">${item.Year}</div>\
                <button class="btn btn-default" type="button" data-toggle="tooltip" data-placement="left" title="Подробнее">Подробнее</button>\
            </div>\
        </div>`;
            },"");
            DOMElements.result.innerHTML = res;
        }

        return {
            eventHolder : eventHolder,
            searchEventName : searchEventName,

            init : function(data){
                buildList(data);
                initListener();
            }
        }
    };

    window.app = window.app || {};
    window.app.view = view();

}());

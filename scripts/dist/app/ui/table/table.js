define(["jquery"],function(e){return{setResponsive:function(e){e.wrap("<div class='table-responsive-wrapper' />");var t=e.clone();t.find("td:not(:first-child), th:not(:first-child)").css("display","none"),t.removeClass("table-responsive"),e.closest(".table-responsive-wrapper").append(t),t.wrap("<div class='table-responsive-pinned' />"),e.wrap("<div class='table-responsive-scrollable' />")},destroyResponsive:function(e){e.closest(".table-responsive-wrapper").find(".table-responsive-pinned").remove(),e.unwrap(),e.unwrap()}}});
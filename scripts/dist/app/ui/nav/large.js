define(["jquery","hoverIntent","ajaxInclude","evensteven"],function(e){function i(){t=e("#js-nav-primary"),n=t.find(".nav-section"),r=t.find(".js-nav-section-with-menu")}function s(){m(),h();if(e(".no-touch").length){r.hoverIntent(l);return}o()}function o(){r.each(function(){e(this).find(".js-nav-section-link").on("click",l)}),e("body").on("click",c)}function u(){r.find(".js-nav-section-link").unbind("click",l),r.unbind("mouseenter").unbind("mouseleave"),r.removeProp("hoverIntent_t"),r.removeProp("hoverIntent_s"),n.evenSteven("destroy"),g()}function a(){t.find(".is-expanded").find(".nav-feature").length&&v(),t.find("[data-replace]").on("ajaxInclude",function(e){setTimeout(function(){v()},100)})}function f(){p()}function l(n){n.preventDefault();var r=e(this),i=r.is(".js-nav-section-with-menu")?r:r.closest(".js-nav-section-with-menu"),s=t.find(".is-expanded");i.find(".nav-feature").length||i.find("[data-replace]").ajaxInclude(),d(i),n.type==="click"&&s.find(".js-nav-section-link")[0]!==this&&s.removeClass("is-expanded"),i.is(".is-disabled")||i.toggleClass("is-expanded")}function c(n){var r=e(n.target);!r.closest("#js-nav-primary").length&&t.find(".is-expanded").length&&t.find(".is-expanded").removeClass("is-expanded")}function h(){n.evenSteven({resize:!0})}function p(){n.each(function(){var t=e(this);t.find(".nav-positioning, .nav-secondary").css("height","")})}function d(t){t.find(".lazy").filter(function(){var t=e(this);return this.src.indexOf(t.attr("data-original"))===-1}).lazyload({effect:"fadeIn"})}function v(){d(t.find(".is-expanded").find(".nav-feature"))}function m(){t.data("nav","true")}function g(){t.removeData("nav")}var t,n,r;return{init:i,bind:s,unbind:u,bindNavWidescreen:a,unbindNavWidescreen:f}});
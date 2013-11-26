define(["jquery","pubsub"],function(e){var t,n;return{init:function(){t=e("#map-pod"),n=e("#map-intro"),this._initSubscriptions()},getCurrentRegion:function(){return t.data("region")},_initSubscriptions:function(){e.subscribe("/map/update",e.proxy(this._transitionPod,this))},_transitionPod:function(e){var t=this;this._hidePod(function(){t._updateText(e.url,e.heading,e.copy)}),setTimeout(function(){t._updateCurrent(e.region),t._updateImage(e.src,e.alt),t._showPod()},300)},_updateCurrent:function(e){t.data("region",e)},_updateImage:function(e,n){var r=t.find("img")[0];r.src=e,r.alt=n},_updateText:function(n,r,i){var s=t.find(".js-map-heading"),o=e("#map-pod").find(".pod-image");s[0].href=n,s.text(r),t.find(".js-map-body").html(i),o.attr("href",n)},_hideIntro:function(){Modernizr.csstransitions?n.removeClass("is-visible").addClass("is-hidden"):n.stop(!0,!0).animate({opacity:0},200,"easeInOutExpo")},_showPod:function(){Modernizr.csstransitions?t.removeClass("is-hidden").addClass("is-visible"):(t.stop(!0,!0).animate({opacity:1},200,"easeInOutExpo"),isIE&&t.find(".figure-image").stop(!0,!0).animate({opacity:1},200,"easeInOutExpo"))},_hidePod:function(e){Modernizr.csstransitions?(t.removeClass("is-visible").addClass("is-hidden"),e()):(t.stop(!0,!0).animate({opacity:0},200,"easeInOutExpo",function(){t.css("visibility")==="hidden"&&t.css("visibility","visible"),e()}),isIE&&t.find(".figure-image").stop(!0,!0).animate({opacity:0},200,"easeInOutExpo"))}}});
define(["jquery","colorbox","app/ui/lightbox/lightbox"],function(e,t,n){return{init:function(){var t={transition:"none",iframe:!0,innerHeight:"70%",innerWidth:"90%",maxWidth:"90%",title:n.setTitle,onLoad:n.onLoadProcessing,onComplete:n.onCompleteProcessing};n.init(),e(".js-lightbox-video").find(".js-lightbox-image").colorbox(t)},open:function(){e(this).trigger("click")},destroy:function(){e(".js-lightbox-video").find(".js-lightbox-image").removeClass("cboxElement").removeData("colorbox")}}});
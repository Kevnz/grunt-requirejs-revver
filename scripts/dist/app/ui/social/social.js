define("app/ui/popup/popup",[],function(){return{open:function(e,t,n){var r=window.open(e,"name","height="+n+",width="+t);window.focus&&r.focus()}}}),define("app/ui/social/social",["jquery","app/ui/popup/popup"],function(e,t){return{init:function(){e(".js-social-popup").on("click",this._processClick)},_processClick:function(e){e.preventDefault(),t.open(this.href,550,450)}}});
(function(e,t,n,r){function o(t){this.pluginName=i,this.element=t,this.$element=e(t),this.init()}var i="tableScroll",s='<div class="tablescroll"><div class="tablescroll-inner"></div></div>';o.prototype.init=function(){var e,t;this._wrapTable(),this._initEvents(),e=this.$element.closest(".tablescroll-inner")[0],t=this._checkWidth(e),t&&this._checkPosition(e)},o.prototype._initEvents=function(){this.$element.closest(".tablescroll-inner").on("scroll",{plugin:this},e.throttle(250,this._scrollEvent)),e(t).on("resize",{plugin:this},e.throttle(250,this._tableResizeEvent))},o.prototype._wrapTable=function(){this.$element.wrap(s)},o.prototype._checkWidth=function(t){var n=e(t),r=n.find("table"),i=r.width()>n.width();return i?(n.closest(".tablescroll").addClass("is-scrolling"),!0):(n.closest(".tablescroll").removeClass("is-scrolling"),!1)},o.prototype._scrollEvent=function(e){var t=e.data.plugin,n=t._checkWidth(this);n&&t._checkPosition(this)},o.prototype._tableResizeEvent=function(t){if(!t||!t.data||!t.data.plugin||t.data.plugin.pluginName==="evenSteven")return;var n=t.data.plugin,r=e(".tablescroll-inner");for(var i=0,s=r.length;i<s;i++){var o=r[i],u=n._checkWidth(o);u&&n._checkPosition(o)}},o.prototype._checkPosition=function(t){var n=e(t),r=n.find("table").width(),i=n.scrollLeft(),s=n.width(),o=i===0,u=r<=i+s;this._setClasses(o,u,n.closest(".tablescroll"))},o.prototype._setClasses=function(e,t,n){if(e||t){e&&n.addClass("is-start"),t&&n.addClass("is-end");return}n.removeClass("is-start").removeClass("is-end")},e.fn[i]=function(t){return this.each(function(){e.data(this,i)||e.data(this,i,new o(this,t))})}})(jQuery,window,document);
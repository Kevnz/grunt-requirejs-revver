(function(e,t,n,r){function o(t,n){this.pluginName=i,this.element=t,this.options=e.extend({},s,n),this._heightCalc=this.options.outerHeight?"outerHeight":"height",this._tallest=0,this._defaults=s,this._name=i,this._elems=[],this.init()}var i="evenSteven",s={outerHeight:!1,columns:0,selector:"",resize:!1};o.prototype.init=function(){this.retrieveNodes(),this.runCalculations(),this.options.resize&&(this.initResizeEvent(),this.initTriggers())},o.prototype.runCalculations=function(){this.options.columns?this.setColumnHeights():this.setAllHeights()},o.prototype.retrieveNodes=function(){var t=this._elems;e(this.element).each(function(){t.push(e(this))})},o.prototype.setAllHeights=function(){this.calculateHeights(),this.setHeights()},o.prototype.setColumnHeights=function(){for(var e=0,t=this._elems.length;e<t;e+=this.options.columns)this.calculateHeights(e),this.setHeights(e)},o.prototype.setHeights=function(e){var t=e!=null?e:0,n=e!=null?e+this.options.columns:this._elems.length;for(;t<n;t++){var r=this._elems[t];if(!r)return;this._elems[t].height(this._tallest)}},o.prototype.calculateHeights=function(e){this._tallest=0;var t=e!=null?e:0,n=e!=null?e+this.options.columns:this._elems.length;for(;t<n;t++){var r=this._elems[t];if(!r)return;var i=r[this._heightCalc]();i>this._tallest&&(this._tallest=i)}},o.prototype.resetHeights=function(){for(var e=0,t=this._elems.length;e<t;e++){var n=this._elems[e];if(!n)return;n.css("height","")}},o.prototype.update=function(t){t&&(this.options=e.extend({},this.options,t)),this.resetHeights(),this.runCalculations()},o.prototype.runResizeEvent=function(e){if(!e||!e.data||!e.data.plugin||e.data.plugin.pluginName!=="evenSteven")return;e.data.plugin.update()},o.prototype.initResizeEvent=function(){e(t).on("resize",{plugin:this},e.throttle(250,this.runResizeEvent))},o.prototype.removeResizeEvent=function(){e(t).off("resize",this.runResizeEvent)},o.prototype.initTriggers=function(){e(this).on("on.resize.evensteven",this.initResizeEvent),e(this).on("off.resize.evensteven",this.removeResizeEvent)},o.prototype.removeTriggers=function(){e(this).off("on.resize.evensteven",this.initResizeEvent),e(this).off("off.resize.evensteven",this.removeResizeEvent)},o.prototype.removeData=function(){e(this.element).removeData("plugin_"+i)},o.prototype.destroy=function(){this.removeTriggers(),this.removeResizeEvent(),this.resetHeights(),this.removeData()},e.fn[i]=function(t){var n;if(t==="destroy"){n=e(this).data("plugin_"+i);if(!n)return;n.destroy();return}return e.data(this,"plugin_"+i)||(n=new o(this,t),e(this).data("plugin_"+i,n)),n}})(jQuery,window,document);
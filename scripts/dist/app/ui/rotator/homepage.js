define(["jquery","brotator"],function(e){return{$homepageRotator:null,bind:function(){this.$homepageRotator=e(".js-rotator-homepage"),this.$homepageRotator.brotator({content:".js-rotator-homepage-content",timeout:8e3,easing:"easeInOutSine",contentSetup:"responsive",hasMenu:!1,hasButtons:!0,next:".js-next",previous:".js-prev",animationSpeed:500,lazyloader:!0,namespace:"/homepage-rotator",animation:"slide",autorotate:!1})},unbind:function(){this.$homepageRotator.brotator("destroy")},startTimer:function(){this.$homepageRotator.trigger("start.timer.brotator")},stopTimer:function(){this.$homepageRotator.trigger("stop.timer.brotator")}}});
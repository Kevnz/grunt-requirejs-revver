(function(e){function y(){b(E(240,t))}function b(e){$("#viewport").width(e)}function w(){g=!1,clearInterval(m),m=!1}function E(e,t){return Math.random()*(t-e)+e}var t=document.body.clientWidth,n=document.body.clientHeight,r=$("#viewport"),i=$("#url-toggle"),s=$("#size-toggle"),o=$("#size"),u=$("#size-s"),a=$("#size-m"),f=$("#size-l"),l=$("#size-xl"),c=$("#size-random"),h=$("#size-disco"),p=$("#size-enter"),d,v,m=!1,g;$(e).resize(function(){t=document.body.clientWidth,n=document.body.clientHeight}),i.on("click",function(e){e.preventDefault(),$(this).parents(".nav").toggleClass("active")}),s.on("click",function(e){e.preventDefault(),$(this).parents("ul").toggleClass("active")}),u.on("click",function(e){e.preventDefault(),w(),b(E(240,500))}),a.on("click",function(e){e.preventDefault(),w(),b(E(500,800))}),f.on("click",function(e){e.preventDefault(),w(),b(E(800,1200))}),l.on("click",function(e){e.preventDefault(),w(),b(E(1200,1920))}),c.on("click",function(e){e.preventDefault(),w(),b(E(240,t))}),h.on("click",function(e){e.preventDefault(),g?w():(g=!0,m=setInterval(y,800))}),p.submit(function(){var e=$("#size-num").val();return b(e),!1})})(this);
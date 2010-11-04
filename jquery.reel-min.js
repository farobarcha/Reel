/*
 Copyright (c) 2009-2010 Petr Vostrel (http://petr.vostrel.cz/)
 Dual licensed under the MIT (MIT-LICENSE.txt)
 and GPL (GPL-LICENSE.txt) licenses.

 http://jquery.vostrel.cz/reel
 Version: 1.1 RC 2
 Updated: 2010-11-04

 Requires jQuery 1.4.x
*/
jQuery.fn.reel||function(k,aa,Ya,o){function Za(l){return"<"+l+"/>"}function ba(l){return"."+l}function ca(l){return"url("+l+")"}function A(l){return+l.toFixed(4)}function O(l,a,t){return P(l,Ca(a,t))}function $a(l){function a(){k.fn[this]||(k.fn[this]=function(){return this})}k.each(l,a)}function da(l,a){return B(l)*(a?-1:1)}function Q(l){return l.originalEvent.touches[0]}var ab=k.reel={footage:6,frame:1,frames:36,hint:"",horizontal:true,hotspot:o,indicator:0,klass:"",loops:true,reversed:o,spacing:0,
stitched:o,suffix:"-reel",tooltip:"",area:o,brake:0.5,clickfree:false,couple:o,cw:false,delay:-1,directional:false,draggable:true,graph:o,image:o,images:[],laziness:8,monitor:o,maximum:100,minimum:0,path:"",preloader:4,rebound:0.5,revolution:o,row:1,rows:0,speed:0,step:o,steps:o,tempo:18,timeout:2,throwable:true,value:o,wheelable:true};k.fn.reel=function(l){var a=k.extend({},ab,l);l=function(g){var d=[];g.filter(bb).each(function(){var c=k(this),m=a.images.length&&a.images||a.image||c.attr(Da),x=
R(c.css(Ea)),u=R(c.css(Fa));!m||m==Ga||!x||!u||d.push(c)});g.filter(Ha+ba(v)).each(function(){d.push(k(this))});return k(d)}(this);var t=[],I=1E3/(a.tempo/=cb?a.laziness:1);a.reversed&&(a.cw=true);a.tooltip&&(a.hint=a.tooltip);a.hotspot&&(a.area=a.hotspot);ea=ea||function g(){C.trigger(fa);return setTimeout(g,I)}();l.each(function(){var g=k(this),d=function(f,b){g.data(f,b);g.trigger("store");return b},c=function(f){g.trigger("recall");return g.data(f)},m=function(f){db||delete this;return f},x={setup:function(f){if(g.hasClass(v))return m.call(f);
var b=g.attr(Da),e=g.attr(eb),i=g.attr("style"),j=a.images,h=a.stitched,q=a.loops,n={x:R(g.css(Ea)),y:R(g.css(Fa))},p=d(Ia,!a.rows&&j.length||a.frames),ga=h?1:Ja(p/a.footage),ha={display:"block",width:n.x,height:n.y};e="#"+e+a.suffix;var Ka=g.attr("className"),ia={position:"relative",width:n.x,height:n.y};ia=k(J,{id:e.substr(1),className:Ka+S+fb,css:ia});ha=g.wrap(ia).attr({className:v,style:ha}).bind(x);t.push(ha[0]);d(ja,j.length&&j.length||a.image||b.replace(/^(.*)\.(jpg|jpeg|png|gif)$/,"$1"+a.suffix+
".$2"));d(La,Ka);d(D,a.frame);d(Ma,a.spacing);d(E,n);d(r,0);d(ka,a.steps||a.frames);d(T,a.revolution||h/2||n.x*2);d(la,ga);d(U,1/(p-(q&&!h?0:1)));d(gb,1/P(p,c(ka)));d(Na,h);d(Oa,h-(q?0:n.x));d(Pa,n.x-a.indicator);d(V,e);d(y,d(ma,a.speed)<0);d(F,0);d(w,(a.row-1)/(a.rows-1));d(G,a.value||0);d(W,da(1,!a.cw&&!h));d(Qa,{src:b,style:i||Ga});ea&&C.bind(fa,x.tick);m.call(f);g.trigger("start")},teardown:function(f){g.unbind(s).unbind(x);var b=g.data("events"),e=g.clone().attr(g.data(Qa)).removeClass(v).addClass(c(La));
for(var i in b)k.each(b[i],function(j,h){e.bind(i+"."+h.namespace,h.handler,h.data)});k(c(V)).before(e).detach();X();C.unbind(Y).unbind(Z).unbind(fa,x.tick);m.call(f)},start:function(f){var b=c(E),e=c(Ia),i=P(e,c(ka));i=d(r,1/i*((a.step||a.frame)-1));d(D,i*e+1);e=c(ja);var j=a.images;e=!j.length?[e]:[].concat(j);g.attr("id");var h=g[0];h.frames=e.length;h.preloads=h.preloads||[];h.preloaded=h.preloaded||0;i=g.parent();var q=k(J,{className:hb,css:{position:$,left:0,top:0,width:b.x,height:b.y,background:na,
opacity:0}}).appendTo(i);q=d(oa,k(a.area||q));var n=g.add(a.couple);ib?q.css({WebkitUserSelect:"none",WebkitBackgroundSize:j.length?"auto":c(Na)||b.x*a.footage+"px "+b.y*c(la)*(a.rows||1)*(a.directional?2:1)+"px"}).bind(jb,function(p){n.trigger("down",[Q(p).clientX,Q(p).clientY,true]);return false}).bind(kb,function(p){n.trigger("slide",[Q(p).clientX,Q(p).clientY,true]);return false}).bind(lb,function(){n.trigger("up",[true]);return false}).bind(mb,function(){n.trigger("up",[true]);return false}):
q.css({cursor:"url("+Ra+"), "+pa}).bind(Z,function(p){n.trigger("over",[p.pageX,p.pageY])}).bind(nb,function(p,ga){n.trigger("wheel",[ga]);return false}).bind(ob,function(){n.trigger("play")}).bind(a.clickfree?pb:qb,function(p){n.trigger("down",[p.clientX,p.clientY]);return false}).bind(a.clickfree?rb:Y,function(){n.trigger("up");return false}).disableTextSelect();a.hint&&q.attr(sb,a.hint);a.monitor&&i.append(qa=k(J,{className:tb,css:{position:$,left:0,top:0}}))||(qa=k());a.indicator&&i.append(Sa("x"));
a.rows&&a.indicator&&i.append(Sa("y"));g.trigger("stop");for(i.append(ra=k(J,{className:ub,css:{position:$,left:0,top:b.y-a.preloader,height:a.preloader,backgroundColor:na}}));e.length;){j=new Image;q=a.path+e.shift();i.append(k(j).hide().bind("load"+s,function(){h.preloaded++;ra.css({width:1/h.frames*h.preloaded*b.x});if(h.frames==h.preloaded){ra.remove();a.delay>0&&z();a.value!=o&&g.trigger("valueChange",c(G));g.trigger(a.rows&&!a.stitched?"rowChange":"frameChange");m.call(f);g.trigger("loaded").trigger("play").attr({src:vb})}}));
j.src=q;h.preloads.push(j)}},tick:function(f){var b=c(F);if(K){var e=A(b-wb*K);b=!(b*e<=0||b<B(e))&&d(F,b>B(c(ma))?e:(K=u=0))}qa.text(c(a.monitor));b&&K++;u&&u++;Ta(0);g[0].value!=c(G)&&g.trigger("valueChange",g[0].value);if(u&&!b)return m.call(f);if(c(sa))return m.call(f,z());e=c(W)*da(1,c(y));b=(c(ta)?b:B(c(ma))+b)/a.tempo;d(r,c(r)-b*e);m.call(f);g.trigger("fractionChange")},play:function(f){var b=d(ua,true);d(ta,!b);Ua();m.call(f)},pause:function(f){d(ua,false);z();m.call(f)},stop:function(f){var b=
d(ta,true);d(ua,!b);m.call(f)},down:function(f,b,e,i){if(!a.draggable)return m.call(f);d(sa,true);d(F,0);va(b,e,c(r),c(T),c(w));wa=o;z();X();!i&&C.bind(Z,function(j){g.trigger("slide",[j.clientX,j.clientY]);m.call(j)}).css({cursor:ca(xb)+", "+pa})&&!a.clickfree&&C.bind(Y,function(j){g.trigger("up");m.call(j)})&&c(oa);m.call(f)},up:function(f,b){if(!a.draggable)return m.call(f);d(sa,false);var e=d(F,!a.throwable?0:B(L[0]+L[1])/60);K=e?1:0;e?Ua():z();X();!b&&C.unbind(Y).unbind(Z)&&c(oa).css({cursor:ca(Ra)+
", "+pa});m.call(f)},slide:function(f,b,e){if(!a.draggable)return m.call(f);var i=c(T),j=c(Va),h=Ta(b-wa||0),q=d(r,Wa(b-j.x,c(xa),i,c(ya),c(za),c(W)));h&&d(y,h<0);if(a.rows){h=c(E).y;var n=c(Xa),p=-n*h;d(w,A(k.reel.math.envelope(e-j.y,n,h,p,p+h,-1)))}!(q%1)&&!a.loops&&va(b,e,q,i,c(w));z();wa=b;m.call(f);g.trigger("fractionChange")},wheel:function(f,b){if(!a.wheelable)return m.call(f);var e=Ja(yb(B(b))/2);e=da(e,b>0);b=0.2*c(T);va(o,o,c(r),b,c(w));d(r,Wa(e,c(xa),b,c(ya),c(za),c(W)));e&&d(y,e<0);d(F,
0);z();m.call(f);g.trigger("fractionChange");return false},fractionChange:function(f,b,e){b=!b?c(r):d(r,b);b=a.loops?b-M(b):O(0,1,b);b=d(r,A(b));d(D,1+M(b/c(U)));d(G,A(k.reel.math.interpolate(b,a.minimum,a.maximum)));if(!a.loops&&a.rebound){!u&&!(b%1)?Aa++:(Aa=0);Aa>=a.rebound*1E3/a.tempo&&d(y,!c(y))}m.call(f);e||g.trigger("valueChange");g.trigger(a.rows&&!a.stitched?"rowChange":"frameChange")},rowChange:function(f,b){var e=M(c(r)/c(U))+1;b=d(w,O(0,1,A(b!=o?(b-1)/(a.rows-1):c(w))));d(D,e+(!a.rows?
0:N(b*(a.rows-1))*a.frames));m.call(f);g.trigger("frameChange")},frameChange:function(f,b){var e=!b?c(r):d(r,A(c(U)*(b-1)));b=d(D,N(b?b:c(D)));var i=a.images,j=a.footage,h=a.horizontal;if(a.stitched)h=[-N(e*c(Oa))+H,0+H];else{var q=b%j-1;q=q<0?j-1:q;var n=M((b-0.1)/j);n+=a.rows?0:c(y)?0:c(la);j=c(E);var p=c(Ma);n=n*((h?j.y:j.x)+p);q=q*((h?j.x:j.y)+p);h=i.length?[0,0]:h?[-q+H,-n+H]:[-n+H,-q+H]}b=i[b-1]||c(ja);i=c(Pa);e=O(0,i,N(k.reel.math.interpolate(e,-1,i+2)));e=!a.cw||a.stitched?e:i-e;i={background:ca(a.path+
b)+S+h.join(S)};a.images.length?g.attr({src:a.path+b}):g.css(i);k(ba(Ba+".x"),c(V)).css({left:e});if(!a.rows)return m.call(f);e=c(E).y-a.indicator;e=O(0,e,N(k.reel.math.interpolate(c(w),-1,e+2)));k(ba(Ba+".y"),c(V)).css({top:e});m.call(f)},valueChange:function(f,b){f=b!==o&&d(r,b/(a.maximum-a.minimum));g[0].value=b===o?c(G):d(G,b);f===false||g.trigger("fractionChange",[o,true])}},u,K=0,Ua=function(){return u=0},z=function(){return u=-a.timeout*a.tempo},qa,ra,Sa=function(f){return k(J,{className:[Ba,
f].join(S),css:{width:a.indicator,height:a.indicator,top:f=="y"?o:c(E).y-a.indicator,left:f=="x"?o:0,position:$,backgroundColor:na}})},Aa=0,wa=0,Ta=function(f){return L.push(f)&&L.shift()&&f},X=function(){return L=[0,0]},L=X(),wb=a.brake/a.tempo,Wa=a.graph||k.reel.math[a.loops?"hatch":"envelope"],va=function(f,b,e,i,j){d(xa,e);d(Xa,j);d(ya,a.loops?0:-e*i);d(za,a.loops?i:i-e*i);return f&&d(Va,{x:f,y:b})||o};x.setup()});return k(t)};k.reel.math={envelope:function(l,a,t,I,g,d){return a+P(I,Ca(g,-l*d))/
t},hatch:function(l,a,t,I,g,d){l=(l<I?g:0)+l%g;l=a+-l*d/t;return l-M(l)},interpolate:function(l,a,t){return a+l*(t-a)}};$a("mousewheel disableTextSelect enableTextSelect".split(/ /));var C=k(Ya);aa=navigator.userAgent;var ib=/iphone|ipod|ipad|android/i.test(aa),cb=/iphone|ipod|ipad/i.test(aa),db=k.browser.msie,pa="ew-resize",ea,v="jquery-reel",fb=v+"-overlay",Ba=v+"-indicator",ub=v+"-preloader",tb=v+"-monitor",hb=v+"-interface",vb="data:image/gif;base64,R0lGODlhCAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7",
Ra="data:image/gif;base64,R0lGODlhEAAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAI3lC8AeBDvgosQxQtne7yvLWGStVBelXBKqDJpNzLKq3xWBlU2nUs4C/O8cCvU0EfZGUwt19FYAAA7",xb="data:image/gif;base64,R0lGODlhEAAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAIslI95EB3MHECxNjBVdE/5b2zcRV1QBabqhwltq41St4hj5konmVioZ6OtEgUAOw==",N=Math.round,M=Math.floor,Ja=Math.ceil,Ca=Math.min,P=Math.max,B=Math.abs,yb=Math.sqrt,R=parseInt,oa="area",Qa="backup",y="backwards",U="bit",La="classes",sa="clicked",Va="clicked_location",
xa="clicked_on",Xa="clicked_row",W="cwish",E="dimensions",r="fraction",D="frame",Ia="frames",za="hi",ja="image",Pa="indicator_travel",ya="lo",ua="playing",T="revolution",w="row",la="rows",Ma="spacing",ma="speed",V="stage",ka="steps",Na="stitched",Oa="stitched_travel",ta="stopped",G="value",F="velocity",gb="wheel_step",s=".reel",ob="dblclick"+s,qb="mousedown"+s,pb="mouseenter"+s,rb="mouseleave"+s,Z="mousemove"+s,Y="mouseup"+s,nb="mousewheel"+s,fa="tick"+s,mb="touchcancel"+s,lb="touchend"+s,jb="touchstart"+
s,kb="touchmove"+s,Ga="",S=" ",$="absolute",Ha="div",J=Za(Ha),Fa="height",na="#000",eb="id",bb="img",H="px",Da="src",sb="title",Ea="width"}(jQuery,window,document);

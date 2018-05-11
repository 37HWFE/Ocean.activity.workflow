/*
 * artDialog 4.1.2
 * Date: 2011-09-04 30:36
 * //code.google.com/p/artdialog/
 * (c) 2009-2011 TangBin, //www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: //creativecommons.org/licenses/LGPL/2.1/
 */
(function(d,n,h){d.noop=d.noop||function(){};var p,b,l,c,t=0,u=d(n),j=d(document),g=d("html"),f=d(function(){f=d("body")}),o=document.documentElement,a=n.VBArray&&!n.XMLHttpRequest,r="createTouch" in document&&!("onmousemove" in o)||/(iPhone|iPad|iPod)/i.test(navigator.userAgent),q="artDialog"+(new Date).getTime();var m=function(e,w,A){e=e||{};if(typeof e==="string"||e.nodeType===1){e={content:e,fixed:!r}}var x,z=[],B=m.defaults,y=e.follow=this.nodeType===1&&this||e.follow;for(var v in B){if(e[v]===h){e[v]=B[v]}}d.each({ok:"yesFn",cancel:"noFn",close:"closeFn",init:"initFn",okVal:"yesText",cancelVal:"noText"},function(C,D){e[C]=e[C]!==h?e[C]:e[D]});if(typeof y==="string"){y=d(y)[0]}e.id=y&&y[q+"follow"]||e.id||q+t;x=m.list[e.id];if(y&&x){return x.follow(y).focus()}if(x){return x.focus()}if(r){e.fixed=false}if(!d.isArray(e.button)){e.button=e.button?[e.button]:[]}if(w!==h){e.ok=w}if(A!==h){e.cancel=A}e.ok&&e.button.push({name:e.okVal,callback:e.ok,focus:true});e.cancel&&e.button.push({name:e.cancelVal,callback:e.cancel});m.defaults.zIndex=e.zIndex;t++;return m.list[e.id]=p?p._init(e):new m.fn._init(e)};m.fn=m.prototype={version:"4.1.2",_init:function(e){var x=this,w,v=e.icon,y=v&&(a?{png:"icons/"+v+".png"}:{backgroundImage:"url('"+e.path+"/skins/icons/"+v+".png')"});x._isRun=true;x.config=e;x.DOM=w=x.DOM||x._getDOM();w.wrap.addClass(e.skin);w.close[e.cancel===false?"hide":"show"]();w.icon[0].style.display=v?"":"none";w.iconBg.css(y||{background:"none"});w.se.css("cursor",e.resize?"se-resize":"auto");w.title.css("cursor",e.drag?"move":"auto");w.content.css("padding",e.padding);x[e.show?"show":"hide"](true);x.button(e.button).title(e.title).content(e.content,true).size(e.width,e.height).time(e.time);e.follow?x.follow(e.follow):x.position(e.left,e.top);x.focus(e.focus);e.lock&&x.lock();x._addEvent();x._ie6PngFix();p=null;e.init&&e.init.call(x,n);return x},content:function(x){var z,A,G,D,B=this,I=B.DOM,w=I.wrap[0],v=w.offsetWidth,H=w.offsetHeight,y=parseInt(w.style.left),E=parseInt(w.style.top),F=w.style.width,e=I.content,C=e[0];B._elemBack&&B._elemBack();w.style.width="auto";if(x===h){return C}if(typeof x==="string"){e.html(x)}else{if(x&&x.nodeType===1){D=x.style.display;z=x.previousSibling;A=x.nextSibling;G=x.parentNode;B._elemBack=function(){if(z&&z.parentNode){z.parentNode.insertBefore(x,z.nextSibling)}else{if(A&&A.parentNode){A.parentNode.insertBefore(x,A)}else{if(G){G.appendChild(x)}}}x.style.display=D;B._elemBack=null};e.html("");C.appendChild(x);x.style.display="block"}}if(!arguments[1]){if(B.config.follow){B.follow(B.config.follow)}else{v=w.offsetWidth-v;H=w.offsetHeight-H;y=y-v/2;E=E-H/2;w.style.left=Math.max(y,0)+"px";w.style.top=Math.max(E,0)+"px"}if(F&&F!=="auto"){w.style.width=w.offsetWidth+"px"}B._autoPositionType()}B._ie6SelectFix();B._runScript(C);return B},title:function(y){var w=this.DOM,v=w.wrap,x=w.title,e="aui_state_noTitle";if(y===h){return x[0]}if(y===false){x.hide().html("");v.addClass(e)}else{x.show().html(y||"");v.removeClass(e)}return this},position:function(B,H){var G=this,z=G.config,w=G.DOM.wrap[0],C=a?false:z.fixed,F=a&&G.config.fixed,A=j.scrollLeft(),J=j.scrollTop(),E=C?0:A,x=C?0:J,D=u.width(),v=u.height(),y=w.offsetWidth,I=w.offsetHeight,e=w.style;if(B||B===0){G._left=B.toString().indexOf("%")!==-1?B:null;B=G._toNumber(B,D-y);if(typeof B==="number"){B=F?(B+=A):B+E;e.left=Math.max(B,E)+"px"}else{if(typeof B==="string"){e.left=B}}}if(H||H===0){G._top=H.toString().indexOf("%")!==-1?H:null;H=G._toNumber(H,v-I);if(typeof H==="number"){H=F?(H+=J):H+x;e.top=Math.max(H,x)+"px"}else{if(typeof H==="string"){e.top=H}}}if(B!==h&&H!==h){G._follow=null;G._autoPositionType()}return G},size:function(x,E){var C,D,e,G,A=this,y=A.config,F=A.DOM,w=F.wrap,z=F.main,B=w[0].style,v=z[0].style;if(x){A._width=x.toString().indexOf("%")!==-1?x:null;C=u.width()-w[0].offsetWidth+z[0].offsetWidth;e=A._toNumber(x,C);x=e;if(typeof x==="number"){B.width="auto";v.width=Math.max(A.config.minWidth,x)+"px";B.width=w[0].offsetWidth+"px"}else{if(typeof x==="string"){v.width=x;x==="auto"&&w.css("width","auto")}}}if(E){A._height=E.toString().indexOf("%")!==-1?E:null;D=u.height()-w[0].offsetHeight+z[0].offsetHeight;G=A._toNumber(E,D);E=G;if(typeof E==="number"){v.height=Math.max(A.config.minHeight,E)+"px"}else{if(typeof E==="string"){v.height=E}}}A._ie6SelectFix();return A},follow:function(P){var e,D=this,Q=D.config;if(typeof P==="string"||P&&P.nodeType===1){e=d(P);P=e[0]}if(!P||!P.offsetWidth&&!P.offsetHeight){return D.position(D._left,D._top)}var B=q+"follow",G=u.width(),w=u.height(),y=j.scrollLeft(),A=j.scrollTop(),z=e.offset(),L=P.offsetWidth,K=P.offsetHeight,C=a?false:Q.fixed,x=C?z.left-y:z.left,I=C?z.top-A:z.top,E=D.DOM.wrap[0],O=E.style,v=E.offsetWidth,N=E.offsetHeight,F=x-(v-L)/2,J=I+K,M=C?0:y,H=C?0:A;F=F<M?x:(F+v>G)&&(x-v>M)?x-v+L:F;J=(J+N>w+H)&&(I-N>H)?I-N:J;O.left=F+"px";O.top=J+"px";D._follow&&D._follow.removeAttribute(B);D._follow=P;P[B]=Q.id;D._autoPositionType();return D},button:function(){var x=this,v=arguments,B=x.DOM,e=B.wrap,z=B.buttons,w=z[0],C="aui_state_highlight",A=x._listeners=x._listeners||{},y=d.isArray(v[0])?v[0]:[].slice.call(v);if(v[0]===h){return w}d.each(y,function(F,H){var D=H.name,G=!A[D],E=!G?A[D].elem:document.createElement("button");if(!A[D]){A[D]={}}if(H.callback){A[D].callback=H.callback}if(H.className){E.className=H.className}if(H.focus){x._focus&&x._focus.removeClass(C);x._focus=d(E).addClass(C);x.focus()}E[q+"callback"]=D;E.disabled=!!H.disabled;if(G){E.innerHTML=D;A[D].elem=E;w.appendChild(E)}});z[0].style.display=y.length?"":"none";x._ie6SelectFix();return x},show:function(){this.DOM.wrap.show();!arguments[0]&&this._lockMaskWrap&&this._lockMaskWrap.show();return this},hide:function(){this.DOM.wrap.hide();!arguments[0]&&this._lockMaskWrap&&this._lockMaskWrap.hide();return this},close:function(){if(!this._isRun){return this}var z=this,y=z.DOM,x=y.wrap,A=m.list,w=z.config.close,e=z.config.follow;z.time();if(typeof w==="function"&&w.call(z,n)===false){return z}z.unlock();z._elemBack&&z._elemBack();x[0].className=x[0].style.cssText="";y.title.html("");y.content.html("");y.buttons.html("");if(m.focus===z){m.focus=null}if(e){e.removeAttribute(q+"follow")}delete A[z.config.id];z._removeEvent();z.hide(true)._setAbsolute();for(var v in z){if(z.hasOwnProperty(v)&&v!=="DOM"){delete z[v]}}p?x.remove():p=z;return z},time:function(e){var w=this,v=w.config.cancelVal,x=w._timer;x&&clearTimeout(x);if(e){w._timer=setTimeout(function(){w._click(v)},1000*e)}return w},focus:function(){var B,y=this,x=y.DOM,w=x.wrap,A=m.focus,v=m.defaults.zIndex++;w.css("zIndex",v);y._lockMask&&y._lockMask.css("zIndex",v-1);A&&A.DOM.wrap.removeClass("aui_state_focus");m.focus=y;w.addClass("aui_state_focus");if(!arguments[0]){try{B=y._focus&&y._focus[0]||x.close[0];B&&B.focus()}catch(z){}}return y},lock:function(){if(this._lock){return this}var z=this,A=m.defaults.zIndex-1,w=z.DOM.wrap,y=z.config,B=j.width(),E=j.height(),C=z._lockMaskWrap||d(f[0].appendChild(document.createElement("div"))),x=z._lockMask||d(C[0].appendChild(document.createElement("div"))),v="(document).documentElement",e=r?"width:"+B+"px;height:"+E+"px":"width:100%;height:100%",D=a?"position:absolute;left:expression("+v+".scrollLeft);top:expression("+v+".scrollTop);width:expression("+v+".clientWidth);height:expression("+v+".clientHeight)":"";z.focus(true);w.addClass("aui_state_lock");C[0].style.cssText=e+";position:fixed;z-index:"+A+";top:0;left:0;overflow:hidden;"+D;x[0].style.cssText="height:100%;background:"+y.background+";filter:alpha(opacity=0);opacity:0";if(a){x.html('<iframe src="about:blank" style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:-1;filter:alpha(opacity=0)"></iframe>')}x.stop();x.bind("click",function(){z._reset()}).bind("dblclick",function(){z.close()});if(y.duration===0){x.css({opacity:y.opacity})}else{x.animate({opacity:y.opacity},y.duration)}z._lockMaskWrap=C;z._lockMask=x;z._lock=true;return z},unlock:function(){var y=this,w=y._lockMaskWrap,e=y._lockMask;if(!y._lock){return y}var x=w[0].style;var v=function(){if(a){x.removeExpression("width");x.removeExpression("height");x.removeExpression("left");x.removeExpression("top")}x.cssText="display:none";p&&w.remove()};e.stop().unbind();y.DOM.wrap.removeClass("aui_state_lock");if(!y.config.duration){v()}else{e.animate({opacity:0},y.config.duration,v)}y._lock=false;return y},_getDOM:function(){var y=document.createElement("div");y.style.cssText="position:absolute;left:0;top:0";y.innerHTML=m.templates;document.body.appendChild(y);var v,x=0,z={wrap:d(y)},w=y.getElementsByTagName("*"),e=w.length;for(;x<e;x++){v=w[x].className.split("aui_")[1];if(v){z[v]=d(w[x])}}return z},_toNumber:function(e,w){if(!e&&e!==0||typeof e==="number"){return e}var v=e.length-1;if(e.lastIndexOf("px")===v){e=parseInt(e)}else{if(e.lastIndexOf("%")===v){e=parseInt(w*e.split("%")[0]/100)}}return e},_ie6PngFix:a?function(){var v=0,x,A,w,e,z=m.defaults.path+"/skins/",y=this.DOM.wrap[0].getElementsByTagName("*");for(;v<y.length;v++){x=y[v];A=x.currentStyle.png;if(A){w=z+A;e=x.runtimeStyle;e.backgroundImage="none";e.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+w+"',sizingMethod='crop')"}}}:d.noop,_ie6SelectFix:a?function(){var v=this.DOM.wrap,y=v[0],z=q+"iframeMask",x=v[z],w=y.offsetWidth,e=y.offsetHeight;w=w+"px";e=e+"px";if(x){x.style.width=w;x.style.height=e}else{x=y.appendChild(document.createElement("iframe"));v[z]=x;x.src="about:blank";x.style.cssText="position:absolute;z-index:-1;left:0;top:0;filter:alpha(opacity=0);width:"+w+";height:"+e}}:d.noop,_runScript:function(z){var e,x=0,A=0,w=z.getElementsByTagName("script"),y=w.length,v=[];for(;x<y;x++){if(w[x].type==="text/dialog"){v[A]=w[x].innerHTML;A++}}if(v.length){v=v.join("");e=new Function(v);e.call(this)}},_autoPositionType:function(){this[this.config.fixed?"_setFixed":"_setAbsolute"]()},_setFixed:(function(){a&&d(function(){var e="backgroundAttachment";if(g.css(e)!=="fixed"&&f.css(e)!=="fixed"){g.css({backgroundImage:"url(about:blank)",backgroundAttachment:"fixed"})}});return function(){var x=this.DOM.wrap,y=x[0].style;if(a){var A=parseInt(x.css("left")),z=parseInt(x.css("top")),w=j.scrollLeft(),v=j.scrollTop(),e="(document.documentElement)";this._setAbsolute();y.setExpression("left","eval("+e+".scrollLeft + "+(A-w)+') + "px"');y.setExpression("top","eval("+e+".scrollTop + "+(z-v)+') + "px"')}else{y.position="fixed"}}}()),_setAbsolute:function(){var e=this.DOM.wrap[0].style;if(a){e.removeExpression("left");e.removeExpression("top")}e.position="absolute"},_click:function(e){var w=this,v=w._listeners[e]&&w._listeners[e].callback;return typeof v!=="function"||v.call(w,n)!==false?w.close():w},_reset:function(A){var z,y=this,e=y._winSize||u.width()*u.height(),x=y._follow,v=y._width,C=y._height,w=y._left,B=y._top;if(A){z=y._winSize=u.width()*u.height();if(e===z){return}}if(v||C){y.size(v,C)}if(x){y.follow(x)}else{if(w||B){y.position(w,B)}}},_addEvent:function(){var e,y=this,v=y.config,w="CollectGarbage" in n,x=y.DOM;y._winResize=function(){e&&clearTimeout(e);e=setTimeout(function(){y._reset(w)},40)};u.bind("resize",y._winResize);x.wrap.bind("click",function(A){var B=A.target,z;if(B.disabled){return false}if(B===x.close[0]){y._click(v.cancelVal);return false}else{z=B[q+"callback"];z&&y._click(z)}y._ie6SelectFix()}).bind("mousedown",function(){y.focus(true)})},_removeEvent:function(){var v=this,e=v.DOM;e.wrap.unbind();u.unbind("resize",v._winResize)}};m.notice=function(D){var w=D||{},B,e,A,v,C,y=800;var x={id:"Notice",left:"100%",top:"100%",fixed:true,drag:false,resize:false,follow:null,lock:false,init:function(E){B=this;e=B.config;v=B.DOM.wrap;C=parseInt(v[0].style.top);A=C+v[0].offsetHeight;v.css("top",A+"px").animate({top:C+"px"},y,function(){w.init&&w.init.call(B,E)})},close:function(E){v.animate({top:A+"px"},y,function(){w.close&&w.close.call(this,E);e.close=d.noop;B.close()});return false}};for(var z in w){if(x[z]===h){x[z]=w[z]}}return m(x)};m.fn._init.prototype=m.fn;d.fn.dialog=d.fn.artDialog=function(){var e=arguments;this[this.live?"live":"bind"]("click",function(){m.apply(this,e);return false});return this};m.focus=null;m.list={};j.bind("keydown",function(w){var y=w.target,z=y.nodeName,e=/^INPUT|TEXTAREA$/,v=m.focus,x=w.keyCode;if(!v||!v.config.esc||e.test(z)){return}x===27&&v._click(v.config.cancelVal)});c=n._artDialog_path||(function(e,v,w){for(v in e){if(e[v].src&&e[v].src.indexOf("artDialog")!==-1){w=e[v]}}b=w||e[e.length-1];w=b.src.replace(/\\/g,"/");return w.lastIndexOf("/")<0?".":w.substring(0,w.lastIndexOf("/"))}(document.getElementsByTagName("script")));l=b.src.split("skin=")[1];if(l){var k=document.createElement("link");k.rel="stylesheet";k.href=c+"/skins/"+l+".css?"+m.fn.version;b.parentNode.insertBefore(k,b)}u.bind("load",function(){setTimeout(function(){if(t){return}m({left:"-9999em",time:9,fixed:false,lock:false,focus:false})},150)});try{document.execCommand("BackgroundImageCache",false,true)}catch(s){}m.templates='<div class="aui_outer"><table class="aui_border"><tbody><tr><td class="aui_nw"></td><td class="aui_n"></td><td class="aui_ne"></td></tr><tr><td class="aui_w"></td><td class="aui_c"><div class="aui_inner"><table class="aui_dialog"><tbody><tr><td colspan="2" class="aui_header"><div class="aui_titleBar"><div class="aui_title"></div><a class="aui_close" href="javascript:/*artDialog*/;">\xd7</a></div></td></tr><tr><td class="aui_icon"><div class="aui_iconBg"></div></td><td class="aui_main"><div class="aui_content"></div></td></tr><tr><td colspan="2" class="aui_footer"><div class="aui_buttons"></div></td></tr></tbody></table></div></td><td class="aui_e"></td></tr><tr><td class="aui_sw"></td><td class="aui_s"></td><td class="aui_se"></td></tr></tbody></table></div>';m.defaults={content:'<div class="aui_loading"><span>loading..</span></div>',title:"\u63D0\u793A\u4FE1\u606F",button:null,ok:null,cancel:null,init:null,close:null,okVal:"\u786E\u5B9A",cancelVal:"\u53D6\u6D88",width:"auto",height:"auto",minWidth:96,minHeight:32,padding:"20px 25px",skin:"",icon:null,time:null,esc:true,focus:true,show:true,follow:null,path:c,lock:true,background:"gray",opacity:0.7,duration:300,fixed:true,left:"50%",top:"38.2%",zIndex:1987,resize:true,drag:true};n.artDialog=d.dialog=d.artDialog=m}((window.jQuery&&(window.art=jQuery))||window.art,this));(function(e){var h,b,a=e(window),d=e(document),j=document.documentElement,f=!-[1,]&&!("minWidth" in j.style),g="onlosecapture" in j,c="setCapture" in j;artDialog.dragEvent=function(){var l=this,k=function(m){var n=l[m];l[m]=function(){return n.apply(l,arguments)}};k("start");k("move");k("end")};artDialog.dragEvent.prototype={onstart:e.noop,start:function(k){d.bind("mousemove",this.move).bind("mouseup",this.end);this._sClientX=k.clientX;this._sClientY=k.clientY;this.onstart(k.clientX,k.clientY);return false},onmove:e.noop,move:function(k){this._mClientX=k.clientX;this._mClientY=k.clientY;this.onmove(k.clientX-this._sClientX,k.clientY-this._sClientY);return false},onend:e.noop,end:function(k){d.unbind("mousemove",this.move).unbind("mouseup",this.end);this.onend(k.clientX,k.clientY);return false}};b=function(k){var p,q,w,m,s,u,r=artDialog.focus,n=r.config,x=r.DOM,l=x.wrap,t=x.title,o=x.main;var v="getSelection" in window?function(){window.getSelection().removeAllRanges()}:function(){try{document.selection.empty()}catch(y){}};h.onstart=function(z,A){if(u){q=o[0].offsetWidth;w=o[0].offsetHeight}else{m=l[0].offsetLeft;s=l[0].offsetTop}d.bind("dblclick",h.end);!f&&g?t.bind("losecapture",h.end):a.bind("blur",h.end);c&&t[0].setCapture();l.addClass("aui_state_drag");r.focus()};h.onmove=function(A,G){if(u){var D=l[0].style,C=o[0].style,B=A+q,z=G+w;D.width="auto";C.width=Math.max(0,B)+"px";D.width=l[0].offsetWidth+"px";C.height=Math.max(0,z)+"px"}else{var C=l[0].style,F=A+m,E=G+s;n.left=Math.max(p.minX,Math.min(p.maxX,F));n.top=Math.max(p.minY,Math.min(p.maxY,E));C.left=n.left+"px";C.top=n.top+"px"}v();r._ie6SelectFix()};h.onend=function(z,A){d.unbind("dblclick",h.end);!f&&g?t.unbind("losecapture",h.end):a.unbind("blur",h.end);c&&t[0].releaseCapture();f&&r._autoPositionType();l.removeClass("aui_state_drag")};u=k.target===x.se[0]?true:false;p=(function(){var z,y,B=r.DOM.wrap[0],E=B.style.position==="fixed",D=B.offsetWidth,H=B.offsetHeight,F=a.width(),A=a.height(),G=E?0:d.scrollLeft(),C=E?0:d.scrollTop(),z=F-D+G;y=A-H+C;return{minX:G,minY:C,maxX:z,maxY:y}})();h.start(k)};d.bind("mousedown",function(n){var l=artDialog.focus;if(!l){return}var o=n.target,k=l.config,m=l.DOM;if(k.drag!==false&&o===m.title[0]||k.resize!==false&&o===m.se[0]){h=h||new artDialog.dragEvent();b(n);return false}})})(window.jQuery||window.art);(function(g,l,a,f){var m,j,d,b="@ARTDIALOG.DATA",c="@ARTDIALOG.OPEN",e="@ARTDIALOG.OPENER",h=l.name=l.name||"@ARTDIALOG.WINNAME"+(new Date).getTime(),k=l.VBArray&&!l.XMLHttpRequest;g(function(){!l.jQuery&&document.compatMode==="BackCompat"&&alert('artDialog Error: document.compatMode === "BackCompat"')});var n=a.top=function(){var o=l,p=function(q){try{var s=l[q].document;s.getElementsByTagName}catch(r){return false}return l[q].artDialog&&s.getElementsByTagName("frameset").length===0};if(p("top")){o=l.top}else{if(p("parent")){o=l.parent}}return o}();a.parent=n;m=n.artDialog;d=function(){return m.defaults.zIndex};a.data=function(p,q){var r=a.top,o=r[b]||{};r[b]=o;if(q){o[p]=q}else{return o[p]}return o};a.removeData=function(p){var o=a.top[b];if(o&&o[p]){delete o[p]}};a.through=j=function(){var o=m.apply(this,arguments);if(n!==l){a.list[o.config.id]=o}return o};n!==l&&g(l).bind("unload",function(){var q=a.list,o;for(var p in q){if(q[p]){o=q[p].config;if(o){o.duration=0}q[p].close();delete q[p]}}});a.open=function(s,q,z){q=q||{};var y,E,r,w,v,x,D,F,t,A=a.top,p="position:absolute;left:-9999em;top:-9999em;border:none 0;background:transparent",B="width:100%;height:100%;border:none 0";if(z===false){var o=(new Date()).getTime(),H=s.replace(/([?&])_=[^&]*/,"$1_="+o);s=H+((H===s)?(/\?/.test(s)?"&":"?")+"_="+o:"")}var u=function(){var J,L,M=E.content.find(".aui_loading"),I=y.config;r.addClass("aui_state_full");M&&M.hide();try{F=v.contentWindow;D=g(F.document);t=F.document.body}catch(K){v.style.cssText=B;I.follow?y.follow(I.follow):y.position(I.left,I.top);q.init&&q.init.call(y,F,A);q.init=null;return}J=I.width==="auto"?D.width()+(k?0:parseInt(g(t).css("marginLeft"))):I.width;L=I.height==="auto"?D.height():I.height;setTimeout(function(){v.style.cssText=B},0);y.size(J,L);I.follow?y.follow(I.follow):y.position(I.left,I.top);q.init&&q.init.call(y,F,A);q.init=null};var G={zIndex:d(),init:function(){y=this;E=y.DOM;w=E.main;r=E.content;v=y.iframe=A.document.createElement("iframe");v.src=s;v.name="Open"+y.config.id;v.style.cssText=p;v.setAttribute("frameborder",0,0);v.setAttribute("allowTransparency",true);x=g(v);y.content().appendChild(v);F=v.contentWindow;try{F.name=v.name;a.data(v.name+c,y);a.data(v.name+e,l)}catch(I){}x.bind("load",u)},close:function(){x.css("display","none").unbind("load",u);if(q.close&&q.close.call(this,v.contentWindow,A)===false){return false}r.removeClass("aui_state_full");x[0].src="about:blank";x.remove();try{a.removeData(v.name+c);a.removeData(v.name+e)}catch(I){}}};if(typeof q.ok==="function"){G.ok=function(){return q.ok.call(y,v.contentWindow,A)}}if(typeof q.cancel==="function"){G.cancel=function(){return q.cancel.call(y,v.contentWindow,A)}}delete q.content;for(var C in q){if(G[C]===f){G[C]=q[C]}}return j(G)};a.open.api=a.data(h+c);a.opener=a.data(h+e)||l;a.open.origin=a.opener;a.close=function(){var o=a.data(h+c);o&&o.close();return false};n!=l&&g(document).bind("mousedown",function(){var o=a.open.api;o&&o.focus(true)});a.load=function(r,q,o){o=o||false;var t=q||{};var p={zIndex:d(),init:function(v){var w=this,u=w.config;g.ajax({url:r,success:function(x){w.content(x);t.init&&t.init.call(w,v)},cache:o})}};delete q.content;for(var s in t){if(p[s]===f){p[s]=t[s]}}return j(p)};a.alert=function(o){return j({id:"Alert",zIndex:d(),icon:"warning",fixed:true,lock:true,content:o,ok:true})};a.confirm=function(o,q,p){if(f==o||o==""){o="\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F"}return j({id:"Confirm",zIndex:d(),icon:"question",fixed:true,lock:true,opacity:0.5,content:o,ok:function(r){return q.call(this,r)},cancel:function(r){return p&&p.call(this,r)}})};a.prompt=function(p,r,q){q=q||"";var o;return j({id:"Prompt",zIndex:d(),icon:"question",fixed:true,lock:true,opacity:0.1,content:['<div style="margin-bottom:5px;font-size:12px">',p,"</div>","<div>",'<input value="',q,'" style="width:18em;padding:6px 4px" />',"</div>"].join(""),init:function(){o=this.DOM.content.find("input")[0];o.select();o.focus()},ok:function(s){return r&&r.call(this,o.value,s)},cancel:true})};a.tips=function(o,p){return j({id:"Tips",zIndex:d(),title:false,cancel:false,fixed:true,lock:false}).content('<div style="padding: 0 1em;">'+o+"</div>").time(p||1.5)};g(function(){var q=a.dragEvent;if(!q){return}var t=g(l),s=g(document),u=k?"absolute":"fixed",r=q.prototype,o=document.createElement("div"),p=o.style;p.cssText="display:none;position:"+u+";left:0;top:0;width:100%;height:100%;cursor:move;filter:alpha(opacity=0);opacity:0;background:#FFF";document.body.appendChild(o);r._start=r.start;r._end=r.end;r.start=function(){var x=a.focus.DOM,v=x.main[0],w=x.content[0].getElementsByTagName("iframe")[0];r._start.apply(this,arguments);p.display="block";p.zIndex=a.defaults.zIndex+3;if(u==="absolute"){p.width=t.width()+"px";p.height=t.height()+"px";p.left=s.scrollLeft()+"px";p.top=s.scrollTop()+"px"}if(w&&v.offsetWidth*v.offsetHeight>307200){v.style.visibility="hidden"}};r.end=function(){var v=a.focus;r._end.apply(this,arguments);p.display="none";if(v){v.DOM.main[0].style.visibility="visible"}}})})(window.jQuery||window.art,this,this.artDialog);function dialog(a,c,f,d,b){if(undefined==a||a==""){$.dialog({content:c})}else{switch(a){case"id":$.dialog({id:c,content:document.getElementById(c)});break;case"iframe":if(f==null||f==""){f=680}if(d==null||d==""){f=350}if(b==null||b==""){return false}$.dialog({id:b,title:false,fixed:false,content:'<iframe src="'+c+'" frameborder="0" width="'+f+'" height="'+d+'" id="iframeDL" scrolling="no" allowTransparency="true" />'});break;case"url":var e=$.dialog({title:false,fixed:false});$.ajax({url:c,success:function(g){e.content(g)}});break;case"img":$.dialog({content:'<img src="'+c+'" border="0" />',fixed:false});break;default:break}}}function ChangeTabs(a,b){for(i=1;i<=b;i++){$("#TabsLi"+i).removeClass("curr");$("#TabsDiv"+i).css("display","none")}$("#TabsLi"+a).addClass("curr");$("#TabsDiv"+a).css("display","block")};
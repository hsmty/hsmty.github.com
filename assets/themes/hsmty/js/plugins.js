

/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
!function(a,b,c,d){function e(b,c){this.element=b,this.options=a.extend({},g,c),this._defaults=g,this._name=f,this.init()}var f="stellar",g={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(a){a.hide()},showElement:function(a){a.show()}},h={scroll:{getLeft:function(a){return a.scrollLeft()},setLeft:function(a,b){a.scrollLeft(b)},getTop:function(a){return a.scrollTop()},setTop:function(a,b){a.scrollTop(b)}},position:{getLeft:function(a){return-1*parseInt(a.css("left"),10)},getTop:function(a){return-1*parseInt(a.css("top"),10)}},margin:{getLeft:function(a){return-1*parseInt(a.css("margin-left"),10)},getTop:function(a){return-1*parseInt(a.css("margin-top"),10)}},transform:{getLeft:function(a){var b=getComputedStyle(a[0])[k];return"none"!==b?-1*parseInt(b.match(/(-?[0-9]+)/g)[4],10):0},getTop:function(a){var b=getComputedStyle(a[0])[k];return"none"!==b?-1*parseInt(b.match(/(-?[0-9]+)/g)[5],10):0}}},i={position:{setLeft:function(a,b){a.css("left",b)},setTop:function(a,b){a.css("top",b)}},transform:{setPosition:function(a,b,c,d,e){a[0].style[k]="translate3d("+(b-c)+"px, "+(d-e)+"px, 0)"}}},j=function(){var b,c=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,d=a("script")[0].style,e="";for(b in d)if(c.test(b)){e=b.match(c)[0];break}return"WebkitOpacity"in d&&(e="Webkit"),"KhtmlOpacity"in d&&(e="Khtml"),function(a){return e+(e.length>0?a.charAt(0).toUpperCase()+a.slice(1):a)}}(),k=j("transform"),l=a("<div />",{style:"background:#fff"}).css("background-position-x")!==d,m=l?function(a,b,c){a.css({"background-position-x":b,"background-position-y":c})}:function(a,b,c){a.css("background-position",b+" "+c)},n=l?function(a){return[a.css("background-position-x"),a.css("background-position-y")]}:function(a){return a.css("background-position").split(" ")},o=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||b.oRequestAnimationFrame||b.msRequestAnimationFrame||function(a){setTimeout(a,1e3/60)};e.prototype={init:function(){this.options.name=f+"_"+Math.floor(1e9*Math.random()),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),"scroll"===this.options.scrollProperty?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===c.body&&(this.element=b),this.$scrollElement=a(this.element),this.$element=this.element===b?a("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==d?a(this.options.viewportElement):this.$scrollElement[0]===b||"scroll"===this.options.scrollProperty?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var a=this,b=h[a.options.scrollProperty];this._getScrollLeft=function(){return b.getLeft(a.$scrollElement)},this._getScrollTop=function(){return b.getTop(a.$scrollElement)}},_defineSetters:function(){var b=this,c=h[b.options.scrollProperty],d=i[b.options.positionProperty],e=c.setLeft,f=c.setTop;this._setScrollLeft="function"==typeof e?function(a){e(b.$scrollElement,a)}:a.noop,this._setScrollTop="function"==typeof f?function(a){f(b.$scrollElement,a)}:a.noop,this._setPosition=d.setPosition||function(a,c,e,f,g){b.options.horizontalScrolling&&d.setLeft(a,c,e),b.options.verticalScrolling&&d.setTop(a,f,g)}},_handleWindowLoadAndResize:function(){var c=this,d=a(b);c.options.responsive&&d.bind("load."+this.name,function(){c.refresh()}),d.bind("resize."+this.name,function(){c._detectViewport(),c.options.responsive&&c.refresh()})},refresh:function(c){var d=this,e=d._getScrollLeft(),f=d._getScrollTop();c&&c.firstLoad||this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),c&&c.firstLoad&&/WebKit/.test(navigator.userAgent)&&a(b).load(function(){var a=d._getScrollLeft(),b=d._getScrollTop();d._setScrollLeft(a+1),d._setScrollTop(b+1),d._setScrollLeft(a),d._setScrollTop(b)}),this._setScrollLeft(e),this._setScrollTop(f)},_detectViewport:function(){var a=this.$viewportElement.offset(),b=null!==a&&a!==d;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=b?a.top:0,this.viewportOffsetLeft=b?a.left:0},_findParticles:function(){{var b=this;this._getScrollLeft(),this._getScrollTop()}if(this.particles!==d)for(var c=this.particles.length-1;c>=0;c--)this.particles[c].$element.data("stellar-elementIsActive",d);this.particles=[],this.options.parallaxElements&&this.$element.find("[data-stellar-ratio]").each(function(){var c,e,f,g,h,i,j,k,l,m=a(this),n=0,o=0,p=0,q=0;if(m.data("stellar-elementIsActive")){if(m.data("stellar-elementIsActive")!==this)return}else m.data("stellar-elementIsActive",this);b.options.showElement(m),m.data("stellar-startingLeft")?(m.css("left",m.data("stellar-startingLeft")),m.css("top",m.data("stellar-startingTop"))):(m.data("stellar-startingLeft",m.css("left")),m.data("stellar-startingTop",m.css("top"))),f=m.position().left,g=m.position().top,h="auto"===m.css("margin-left")?0:parseInt(m.css("margin-left"),10),i="auto"===m.css("margin-top")?0:parseInt(m.css("margin-top"),10),k=m.offset().left-h,l=m.offset().top-i,m.parents().each(function(){var b=a(this);return b.data("stellar-offset-parent")===!0?(n=p,o=q,j=b,!1):(p+=b.position().left,void(q+=b.position().top))}),c=m.data("stellar-horizontal-offset")!==d?m.data("stellar-horizontal-offset"):j!==d&&j.data("stellar-horizontal-offset")!==d?j.data("stellar-horizontal-offset"):b.horizontalOffset,e=m.data("stellar-vertical-offset")!==d?m.data("stellar-vertical-offset"):j!==d&&j.data("stellar-vertical-offset")!==d?j.data("stellar-vertical-offset"):b.verticalOffset,b.particles.push({$element:m,$offsetParent:j,isFixed:"fixed"===m.css("position"),horizontalOffset:c,verticalOffset:e,startingPositionLeft:f,startingPositionTop:g,startingOffsetLeft:k,startingOffsetTop:l,parentOffsetLeft:n,parentOffsetTop:o,stellarRatio:m.data("stellar-ratio")!==d?m.data("stellar-ratio"):1,width:m.outerWidth(!0),height:m.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var b,c=this,e=this._getScrollLeft(),f=this._getScrollTop();this.backgrounds=[],this.options.parallaxBackgrounds&&(b=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(b=b.add(this.$element)),b.each(function(){var b,g,h,i,j,k,l,o=a(this),p=n(o),q=0,r=0,s=0,t=0;if(o.data("stellar-backgroundIsActive")){if(o.data("stellar-backgroundIsActive")!==this)return}else o.data("stellar-backgroundIsActive",this);o.data("stellar-backgroundStartingLeft")?m(o,o.data("stellar-backgroundStartingLeft"),o.data("stellar-backgroundStartingTop")):(o.data("stellar-backgroundStartingLeft",p[0]),o.data("stellar-backgroundStartingTop",p[1])),h="auto"===o.css("margin-left")?0:parseInt(o.css("margin-left"),10),i="auto"===o.css("margin-top")?0:parseInt(o.css("margin-top"),10),j=o.offset().left-h-e,k=o.offset().top-i-f,o.parents().each(function(){var b=a(this);return b.data("stellar-offset-parent")===!0?(q=s,r=t,l=b,!1):(s+=b.position().left,void(t+=b.position().top))}),b=o.data("stellar-horizontal-offset")!==d?o.data("stellar-horizontal-offset"):l!==d&&l.data("stellar-horizontal-offset")!==d?l.data("stellar-horizontal-offset"):c.horizontalOffset,g=o.data("stellar-vertical-offset")!==d?o.data("stellar-vertical-offset"):l!==d&&l.data("stellar-vertical-offset")!==d?l.data("stellar-vertical-offset"):c.verticalOffset,c.backgrounds.push({$element:o,$offsetParent:l,isFixed:"fixed"===o.css("background-attachment"),horizontalOffset:b,verticalOffset:g,startingValueLeft:p[0],startingValueTop:p[1],startingBackgroundPositionLeft:isNaN(parseInt(p[0],10))?0:parseInt(p[0],10),startingBackgroundPositionTop:isNaN(parseInt(p[1],10))?0:parseInt(p[1],10),startingPositionLeft:o.position().left,startingPositionTop:o.position().top,startingOffsetLeft:j,startingOffsetTop:k,parentOffsetLeft:q,parentOffsetTop:r,stellarRatio:o.data("stellar-background-ratio")===d?1:o.data("stellar-background-ratio")})}))},_reset:function(){var a,b,c,d,e;for(e=this.particles.length-1;e>=0;e--)a=this.particles[e],b=a.$element.data("stellar-startingLeft"),c=a.$element.data("stellar-startingTop"),this._setPosition(a.$element,b,b,c,c),this.options.showElement(a.$element),a.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(e=this.backgrounds.length-1;e>=0;e--)d=this.backgrounds[e],d.$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),m(d.$element,d.startingValueLeft,d.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=a.noop,a(b).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var c=this,d=a(b);d.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),"function"==typeof this.options.horizontalOffset?(this.horizontalOffset=this.options.horizontalOffset(),d.bind("resize.horizontal-"+this.name,function(){c.horizontalOffset=c.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,"function"==typeof this.options.verticalOffset?(this.verticalOffset=this.options.verticalOffset(),d.bind("resize.vertical-"+this.name,function(){c.verticalOffset=c.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var a,b,c,d,e,f,g,h,i,j,k=this._getScrollLeft(),l=this._getScrollTop(),n=!0,o=!0;if(this.currentScrollLeft!==k||this.currentScrollTop!==l||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight){for(this.currentScrollLeft=k,this.currentScrollTop=l,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,j=this.particles.length-1;j>=0;j--)a=this.particles[j],b=a.isFixed?1:0,this.options.horizontalScrolling?(f=(k+a.horizontalOffset+this.viewportOffsetLeft+a.startingPositionLeft-a.startingOffsetLeft+a.parentOffsetLeft)*-(a.stellarRatio+b-1)+a.startingPositionLeft,h=f-a.startingPositionLeft+a.startingOffsetLeft):(f=a.startingPositionLeft,h=a.startingOffsetLeft),this.options.verticalScrolling?(g=(l+a.verticalOffset+this.viewportOffsetTop+a.startingPositionTop-a.startingOffsetTop+a.parentOffsetTop)*-(a.stellarRatio+b-1)+a.startingPositionTop,i=g-a.startingPositionTop+a.startingOffsetTop):(g=a.startingPositionTop,i=a.startingOffsetTop),this.options.hideDistantElements&&(o=!this.options.horizontalScrolling||h+a.width>(a.isFixed?0:k)&&h<(a.isFixed?0:k)+this.viewportWidth+this.viewportOffsetLeft,n=!this.options.verticalScrolling||i+a.height>(a.isFixed?0:l)&&i<(a.isFixed?0:l)+this.viewportHeight+this.viewportOffsetTop),o&&n?(a.isHidden&&(this.options.showElement(a.$element),a.isHidden=!1),this._setPosition(a.$element,f,a.startingPositionLeft,g,a.startingPositionTop)):a.isHidden||(this.options.hideElement(a.$element),a.isHidden=!0);for(j=this.backgrounds.length-1;j>=0;j--)c=this.backgrounds[j],b=c.isFixed?0:1,d=this.options.horizontalScrolling?(k+c.horizontalOffset-this.viewportOffsetLeft-c.startingOffsetLeft+c.parentOffsetLeft-c.startingBackgroundPositionLeft)*(b-c.stellarRatio)+"px":c.startingValueLeft,e=this.options.verticalScrolling?(l+c.verticalOffset-this.viewportOffsetTop-c.startingOffsetTop+c.parentOffsetTop-c.startingBackgroundPositionTop)*(b-c.stellarRatio)+"px":c.startingValueTop,m(c.$element,d,e)}},_handleScrollEvent:function(){var a=this,b=!1,c=function(){a._repositionElements(),b=!1},d=function(){b||(o(c),b=!0)};this.$scrollElement.bind("scroll."+this.name,d),d()},_startAnimationLoop:function(){var a=this;this._animationLoop=function(){o(a._animationLoop),a._repositionElements()},this._animationLoop()}},a.fn[f]=function(b){var c=arguments;return b===d||"object"==typeof b?this.each(function(){a.data(this,"plugin_"+f)||a.data(this,"plugin_"+f,new e(this,b))}):"string"==typeof b&&"_"!==b[0]&&"init"!==b?this.each(function(){var d=a.data(this,"plugin_"+f);d instanceof e&&"function"==typeof d[b]&&d[b].apply(d,Array.prototype.slice.call(c,1)),"destroy"===b&&a.data(this,"plugin_"+f,null)}):void 0},a[f]=function(){var c=a(b);return c.stellar.apply(c,Array.prototype.slice.call(arguments,0))},a[f].scrollProperty=h,a[f].positionProperty=i,b.Stellar=e}(jQuery,this,document);





/***
 * BxSlider v4.2.3 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 ***/
!function(e){var t={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0}};e.fn.bxSlider=function(n){if(0===this.length)return this;if(this.length>1)return this.each(function(){e(this).bxSlider(n)}),this;var s={},o=this,r=e(window).width(),a=e(window).height(),l=function(){s.settings=e.extend({},t,n),s.settings.slideWidth=parseInt(s.settings.slideWidth),s.children=o.children(s.settings.slideSelector),s.children.length<s.settings.minSlides&&(s.settings.minSlides=s.children.length),s.children.length<s.settings.maxSlides&&(s.settings.maxSlides=s.children.length),s.settings.randomStart&&(s.settings.startSlide=Math.floor(Math.random()*s.children.length)),s.active={index:s.settings.startSlide},s.carousel=s.settings.minSlides>1||s.settings.maxSlides>1?!0:!1,s.carousel&&(s.settings.preloadImages="all"),s.minThreshold=s.settings.minSlides*s.settings.slideWidth+(s.settings.minSlides-1)*s.settings.slideMargin,s.maxThreshold=s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin,s.working=!1,s.controls={},s.interval=null,s.animProp="vertical"===s.settings.mode?"top":"left",s.usingCSS=s.settings.useCSS&&"fade"!==s.settings.mode&&function(){var e=document.createElement("div"),t=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in t)if(void 0!==e.style[t[i]])return s.cssPrefix=t[i].replace("Perspective","").toLowerCase(),s.animProp="-"+s.cssPrefix+"-transform",!0;return!1}(),"vertical"===s.settings.mode&&(s.settings.maxSlides=s.settings.minSlides),o.data("origStyle",o.attr("style")),o.children(s.settings.slideSelector).each(function(){e(this).data("origStyle",e(this).attr("style"))}),d()},d=function(){o.wrap('<div class="'+s.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),s.viewport=o.parent(),s.loader=e('<div class="bx-loading" />'),s.viewport.prepend(s.loader),o.css({width:"horizontal"===s.settings.mode?1e3*s.children.length+215+"%":"auto",position:"absolute"}),s.usingCSS&&s.settings.easing?o.css("-"+s.cssPrefix+"-transition-timing-function",s.settings.easing):s.settings.easing||(s.settings.easing="swing");v();s.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),s.viewport.parent().css({maxWidth:u()}),s.settings.pager||s.settings.controls||s.viewport.parent().css({margin:"0 auto 0px"}),s.children.css({"float":"horizontal"===s.settings.mode?"left":"none",listStyle:"none",position:"relative"}),s.children.css("width",h()),"horizontal"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginRight",s.settings.slideMargin),"vertical"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginBottom",s.settings.slideMargin),"fade"===s.settings.mode&&(s.children.css({position:"absolute",zIndex:0,display:"none"}),s.children.eq(s.settings.startSlide).css({zIndex:s.settings.slideZIndex,display:"block"})),s.controls.el=e('<div class="bx-controls" />'),s.settings.captions&&P(),s.active.last=s.settings.startSlide===f()-1,s.settings.video&&o.fitVids();var t=s.children.eq(s.settings.startSlide);("all"===s.settings.preloadImages||s.settings.ticker)&&(t=s.children),s.settings.ticker?s.settings.pager=!1:(s.settings.controls&&C(),s.settings.auto&&s.settings.autoControls&&T(),s.settings.pager&&w(),(s.settings.controls||s.settings.autoControls||s.settings.pager)&&s.viewport.after(s.controls.el)),c(t,g)},c=function(t,i){var n=t.find('img:not([src=""]), iframe').length;if(0===n)return void i();var s=0;t.find('img:not([src=""]), iframe').each(function(){e(this).one("load error",function(){++s===n&&i()}).each(function(){this.complete&&e(this).load()})})},g=function(){if(s.settings.infiniteLoop&&"fade"!==s.settings.mode&&!s.settings.ticker){var t="vertical"===s.settings.mode?s.settings.minSlides:s.settings.maxSlides,i=s.children.slice(0,t).clone(!0).addClass("bx-clone"),n=s.children.slice(-t).clone(!0).addClass("bx-clone");o.append(i).prepend(n)}s.loader.remove(),m(),"vertical"===s.settings.mode&&(s.settings.adaptiveHeight=!0),s.viewport.height(p()),o.redrawSlider(),s.settings.onSliderLoad(s,s.active.index),s.initialized=!0,s.settings.responsive&&e(window).bind("resize",Z),s.settings.auto&&s.settings.autoStart&&(f()>1||s.settings.autoSlideForOnePage)&&A(),s.settings.ticker&&H(),s.settings.pager&&I(s.settings.startSlide),s.settings.controls&&W(),s.settings.touchEnabled&&!s.settings.ticker&&O(),s.settings.keyboardEnabled&&!s.settings.ticker&&e(document).keydown(N)},p=function(){var t=0,n=e();if("vertical"===s.settings.mode||s.settings.adaptiveHeight)if(s.carousel){var o=1===s.settings.moveSlides?s.active.index:s.active.index*x();for(n=s.children.eq(o),i=1;i<=s.settings.maxSlides-1;i++)n=n.add(o+i>=s.children.length?s.children.eq(i-1):s.children.eq(o+i))}else n=s.children.eq(s.active.index);else n=s.children;return"vertical"===s.settings.mode?(n.each(function(){t+=e(this).outerHeight()}),s.settings.slideMargin>0&&(t+=s.settings.slideMargin*(s.settings.minSlides-1))):t=Math.max.apply(Math,n.map(function(){return e(this).outerHeight(!1)}).get()),"border-box"===s.viewport.css("box-sizing")?t+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))+parseFloat(s.viewport.css("border-top-width"))+parseFloat(s.viewport.css("border-bottom-width")):"padding-box"===s.viewport.css("box-sizing")&&(t+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))),t},u=function(){var e="100%";return s.settings.slideWidth>0&&(e="horizontal"===s.settings.mode?s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin:s.settings.slideWidth),e},h=function(){var e=s.settings.slideWidth,t=s.viewport.width();return 0===s.settings.slideWidth||s.settings.slideWidth>t&&!s.carousel||"vertical"===s.settings.mode?e=t:s.settings.maxSlides>1&&"horizontal"===s.settings.mode&&(t>s.maxThreshold||t<s.minThreshold&&(e=(t-s.settings.slideMargin*(s.settings.minSlides-1))/s.settings.minSlides)),e},v=function(){var e=1;if("horizontal"===s.settings.mode&&s.settings.slideWidth>0)if(s.viewport.width()<s.minThreshold)e=s.settings.minSlides;else if(s.viewport.width()>s.maxThreshold)e=s.settings.maxSlides;else{var t=s.children.first().width()+s.settings.slideMargin;e=Math.floor((s.viewport.width()+s.settings.slideMargin)/t)}else"vertical"===s.settings.mode&&(e=s.settings.minSlides);return e},f=function(){var e=0;if(s.settings.moveSlides>0)if(s.settings.infiniteLoop)e=Math.ceil(s.children.length/x());else for(var t=0,i=0;t<s.children.length;)++e,t=i+v(),i+=s.settings.moveSlides<=v()?s.settings.moveSlides:v();else e=Math.ceil(s.children.length/v());return e},x=function(){return s.settings.moveSlides>0&&s.settings.moveSlides<=v()?s.settings.moveSlides:v()},m=function(){var e;if(s.children.length>s.settings.maxSlides&&s.active.last&&!s.settings.infiniteLoop){if("horizontal"===s.settings.mode){var t=s.children.last();e=t.position(),S(-(e.left-(s.viewport.width()-t.outerWidth())),"reset",0)}else if("vertical"===s.settings.mode){var i=s.children.length-s.settings.minSlides;e=s.children.eq(i).position(),S(-e.top,"reset",0)}}else e=s.children.eq(s.active.index*x()).position(),s.active.index===f()-1&&(s.active.last=!0),void 0!==e&&("horizontal"===s.settings.mode?S(-e.left,"reset",0):"vertical"===s.settings.mode&&S(-e.top,"reset",0))},S=function(e,t,i,n){if(s.usingCSS){var r="vertical"===s.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)";o.css("-"+s.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"===t?setTimeout(function(){o.css(s.animProp,r),0===e?q():o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),q()})},0):"reset"===t?o.css(s.animProp,r):"ticker"===t&&(o.css("-"+s.cssPrefix+"-transition-timing-function","linear"),o.css(s.animProp,r),o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),S(n.resetValue,"reset",0),L()}))}else{var a={};a[s.animProp]=e,"slide"===t?o.animate(a,i,s.settings.easing,function(){q()}):"reset"===t?o.css(s.animProp,e):"ticker"===t&&o.animate(a,speed,"linear",function(){S(n.resetValue,"reset",0),L()})}},b=function(){for(var t="",i=f(),n=0;i>n;n++){var o="";s.settings.buildPager&&e.isFunction(s.settings.buildPager)||s.settings.pagerCustom?(o=s.settings.buildPager(n),s.pagerEl.addClass("bx-custom-pager")):(o=n+1,s.pagerEl.addClass("bx-default-pager")),t+='<div class="bx-pager-item"><a href="" data-slide-index="'+n+'" class="bx-pager-link">'+o+"</a></div>"}s.pagerEl.html(t)},w=function(){s.settings.pagerCustom?s.pagerEl=e(s.settings.pagerCustom):(s.pagerEl=e('<div class="bx-pager" />'),s.settings.pagerSelector?e(s.settings.pagerSelector).html(s.pagerEl):s.controls.el.addClass("bx-has-pager").append(s.pagerEl),b()),s.pagerEl.on("click touchend","a",z)},C=function(){s.controls.next=e('<a class="bx-next" href="">'+s.settings.nextText+"</a>"),s.controls.prev=e('<a class="bx-prev" href="">'+s.settings.prevText+"</a>"),s.controls.next.bind("click touchend",E),s.controls.prev.bind("click touchend",y),s.settings.nextSelector&&e(s.settings.nextSelector).append(s.controls.next),s.settings.prevSelector&&e(s.settings.prevSelector).append(s.controls.prev),s.settings.nextSelector||s.settings.prevSelector||(s.controls.directionEl=e('<div class="bx-controls-direction" />'),s.controls.directionEl.append(s.controls.prev).append(s.controls.next),s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))},T=function(){s.controls.start=e('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+s.settings.startText+"</a></div>"),s.controls.stop=e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+s.settings.stopText+"</a></div>"),s.controls.autoEl=e('<div class="bx-controls-auto" />'),s.controls.autoEl.on("click",".bx-start",k),s.controls.autoEl.on("click",".bx-stop",M),s.settings.autoControlsCombine?s.controls.autoEl.append(s.controls.start):s.controls.autoEl.append(s.controls.start).append(s.controls.stop),s.settings.autoControlsSelector?e(s.settings.autoControlsSelector).html(s.controls.autoEl):s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl),D(s.settings.autoStart?"stop":"start")},P=function(){s.children.each(function(){var t=e(this).find("img:first").attr("title");void 0!==t&&(""+t).length&&e(this).append('<div class="bx-caption"><span>'+t+"</span></div>")})},E=function(e){e.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&o.stopAuto(),o.goToNextSlide())},y=function(e){e.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&o.stopAuto(),o.goToPrevSlide())},k=function(e){o.startAuto(),e.preventDefault()},M=function(e){o.stopAuto(),e.preventDefault()},z=function(t){if(t.preventDefault(),!s.controls.el.hasClass("disabled")){s.settings.auto&&o.stopAuto();var i=e(t.currentTarget);if(void 0!==i.attr("data-slide-index")){var n=parseInt(i.attr("data-slide-index"));n!==s.active.index&&o.goToSlide(n)}}},I=function(t){var i=s.children.length;return"short"===s.settings.pagerType?(s.settings.maxSlides>1&&(i=Math.ceil(s.children.length/s.settings.maxSlides)),void s.pagerEl.html(t+1+s.settings.pagerShortSeparator+i)):(s.pagerEl.find("a").removeClass("active"),void s.pagerEl.each(function(i,n){e(n).find("a").eq(t).addClass("active")}))},q=function(){if(s.settings.infiniteLoop){var e="";0===s.active.index?e=s.children.eq(0).position():s.active.index===f()-1&&s.carousel?e=s.children.eq((f()-1)*x()).position():s.active.index===s.children.length-1&&(e=s.children.eq(s.children.length-1).position()),e&&("horizontal"===s.settings.mode?S(-e.left,"reset",0):"vertical"===s.settings.mode&&S(-e.top,"reset",0))}s.working=!1,s.settings.onSlideAfter(s.children.eq(s.active.index),s.oldIndex,s.active.index)},D=function(e){s.settings.autoControlsCombine?s.controls.autoEl.html(s.controls[e]):(s.controls.autoEl.find("a").removeClass("active"),s.controls.autoEl.find("a:not(.bx-"+e+")").addClass("active"))},W=function(){1===f()?(s.controls.prev.addClass("disabled"),s.controls.next.addClass("disabled")):!s.settings.infiniteLoop&&s.settings.hideControlOnEnd&&(0===s.active.index?(s.controls.prev.addClass("disabled"),s.controls.next.removeClass("disabled")):s.active.index===f()-1?(s.controls.next.addClass("disabled"),s.controls.prev.removeClass("disabled")):(s.controls.prev.removeClass("disabled"),s.controls.next.removeClass("disabled")))},A=function(){if(s.settings.autoDelay>0){setTimeout(o.startAuto,s.settings.autoDelay)}else o.startAuto(),e(window).focus(function(){o.startAuto()}).blur(function(){o.stopAuto()});s.settings.autoHover&&o.hover(function(){s.interval&&(o.stopAuto(!0),s.autoPaused=!0)},function(){s.autoPaused&&(o.startAuto(!0),s.autoPaused=null)})},H=function(){var t=0;if("next"===s.settings.autoDirection)o.append(s.children.clone().addClass("bx-clone"));else{o.prepend(s.children.clone().addClass("bx-clone"));var i=s.children.first().position();t="horizontal"===s.settings.mode?-i.left:-i.top}if(S(t,"reset",0),s.settings.pager=!1,s.settings.controls=!1,s.settings.autoControls=!1,s.settings.tickerHover)if(s.usingCSS){var n,r="horizontal"==s.settings.mode?4:5;s.viewport.hover(function(){var e=o.css("-"+s.cssPrefix+"-transform");n=parseFloat(e.split(",")[r]),S(n,"reset",0)},function(){var t=0;s.children.each(function(){t+="horizontal"==s.settings.mode?e(this).outerWidth(!0):e(this).outerHeight(!0)});var i=s.settings.speed/t,o=("horizontal"==s.settings.mode?"left":"top",i*(t-Math.abs(parseInt(n))));L(o)})}else s.viewport.hover(function(){o.stop()},function(){var t=0;s.children.each(function(){t+="horizontal"==s.settings.mode?e(this).outerWidth(!0):e(this).outerHeight(!0)});var i=s.settings.speed/t,n="horizontal"==s.settings.mode?"left":"top",r=i*(t-Math.abs(parseInt(o.css(n))));L(r)});L()},L=function(e){speed=e?e:s.settings.speed;var t={left:0,top:0},i={left:0,top:0};"next"===s.settings.autoDirection?t=o.find(".bx-clone").first().position():i=s.children.first().position();var n="horizontal"===s.settings.mode?-t.left:-t.top,r="horizontal"===s.settings.mode?-i.left:-i.top,a={resetValue:r};S(n,"ticker",speed,a)},F=function(t){var i=e(window),n={top:i.scrollTop(),left:i.scrollLeft()};n.right=n.left+i.width(),n.bottom=n.top+i.height();var s=t.offset();return s.right=s.left+t.outerWidth(),s.bottom=s.top+t.outerHeight(),!(n.right<s.left||n.left>s.right||n.bottom<s.top||n.top>s.bottom)},N=function(e){var t=document.activeElement.tagName.toLowerCase(),i="input|textarea",n=new RegExp(t,["i"]),s=n.exec(i);if(null==s&&F(o)){if(39==e.keyCode)return E(e),!1;if(37==e.keyCode)return y(e),!1}},O=function(){s.touch={start:{x:0,y:0},end:{x:0,y:0}},s.viewport.bind("touchstart MSPointerDown pointerdown",X),s.viewport.on("click",".bxslider a",function(e){s.viewport.hasClass("click-disabled")&&(e.preventDefault(),s.viewport.removeClass("click-disabled"))})},X=function(e){if(s.controls.el.addClass("disabled"),s.working)e.preventDefault(),s.controls.el.removeClass("disabled");else{s.touch.originalPos=o.position();var t=e.originalEvent,i="undefined"!=typeof t.changedTouches?t.changedTouches:[t];s.touch.start.x=i[0].pageX,s.touch.start.y=i[0].pageY,s.viewport.get(0).setPointerCapture&&(s.pointerId=t.pointerId,s.viewport.get(0).setPointerCapture(s.pointerId)),s.viewport.bind("touchmove MSPointerMove pointermove",R),s.viewport.bind("touchend MSPointerUp pointerup",V),s.viewport.bind("MSPointerCancel pointercancel",Y)}},Y=function(){S(s.touch.originalPos.left,"reset",0),s.controls.el.removeClass("disabled"),s.viewport.unbind("MSPointerCancel pointercancel",Y),s.viewport.unbind("touchmove MSPointerMove pointermove",R),s.viewport.unbind("touchend MSPointerUp pointerup",V),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},R=function(e){var t=e.originalEvent,i="undefined"!=typeof t.changedTouches?t.changedTouches:[t],n=Math.abs(i[0].pageX-s.touch.start.x),o=Math.abs(i[0].pageY-s.touch.start.y);if(3*n>o&&s.settings.preventDefaultSwipeX?e.preventDefault():3*o>n&&s.settings.preventDefaultSwipeY&&e.preventDefault(),"fade"!==s.settings.mode&&s.settings.oneToOneTouch){var r=0,a=0;"horizontal"===s.settings.mode?(a=i[0].pageX-s.touch.start.x,r=s.touch.originalPos.left+a):(a=i[0].pageY-s.touch.start.y,r=s.touch.originalPos.top+a),S(r,"reset",0)}},V=function(e){s.viewport.unbind("touchmove MSPointerMove pointermove",R),s.controls.el.removeClass("disabled");var t=e.originalEvent,i="undefined"!=typeof t.changedTouches?t.changedTouches:[t],n=0,r=0;s.touch.end.x=i[0].pageX,s.touch.end.y=i[0].pageY,"fade"===s.settings.mode?(r=Math.abs(s.touch.start.x-s.touch.end.x),r>=s.settings.swipeThreshold&&(s.touch.start.x>s.touch.end.x?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto())):("horizontal"===s.settings.mode?(r=s.touch.end.x-s.touch.start.x,n=s.touch.originalPos.left):(r=s.touch.end.y-s.touch.start.y,n=s.touch.originalPos.top),!s.settings.infiniteLoop&&(0===s.active.index&&r>0||s.active.last&&0>r)?S(n,"reset",200):Math.abs(r)>=s.settings.swipeThreshold?(0>r?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):S(n,"reset",200)),s.viewport.unbind("touchend MSPointerUp pointerup",V),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},Z=function(){if(s.initialized)if(s.working)window.setTimeout(Z,10);else{var t=e(window).width(),i=e(window).height();(r!==t||a!==i)&&(r=t,a=i,o.redrawSlider(),s.settings.onSliderResize.call(o,s.active.index))}};return o.goToSlide=function(t,i){if(!s.working&&s.active.index!==t){s.working=!0,s.oldIndex=s.active.index,s.active.index=0>t?f()-1:t>=f()?0:t;var n=!0;if(n=s.settings.onSlideBefore(s.children.eq(s.active.index),s.oldIndex,s.active.index),"undefined"!=typeof n&&!n)return s.active.index=s.oldIndex,void(s.working=!1);if("next"===i?s.settings.onSlideNext(s.children.eq(s.active.index),s.oldIndex,s.active.index)||(n=!1):"prev"===i&&(s.settings.onSlidePrev(s.children.eq(s.active.index),s.oldIndex,s.active.index)||(n=!1)),"undefined"!=typeof n&&!n)return s.active.index=s.oldIndex,void(s.working=!1);if(s.active.last=s.active.index>=f()-1,(s.settings.pager||s.settings.pagerCustom)&&I(s.active.index),s.settings.controls&&W(),"fade"===s.settings.mode)s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),s.children.filter(":visible").fadeOut(s.settings.speed).css({zIndex:0}),s.children.eq(s.active.index).css("zIndex",s.settings.slideZIndex+1).fadeIn(s.settings.speed,function(){e(this).css("zIndex",s.settings.slideZIndex),q()});else{s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed);var r=0,a={left:0,top:0},l=null;if(!s.settings.infiniteLoop&&s.carousel&&s.active.last)if("horizontal"===s.settings.mode)l=s.children.eq(s.children.length-1),a=l.position(),r=s.viewport.width()-l.outerWidth();else{var d=s.children.length-s.settings.minSlides;a=s.children.eq(d).position()}else if(s.carousel&&s.active.last&&"prev"===i){var c=1===s.settings.moveSlides?s.settings.maxSlides-x():(f()-1)*x()-(s.children.length-s.settings.maxSlides);l=o.children(".bx-clone").eq(c),a=l.position()}else if("next"===i&&0===s.active.index)a=o.find("> .bx-clone").eq(s.settings.maxSlides).position(),s.active.last=!1;else if(t>=0){var g=t*x();a=s.children.eq(g).position()}if("undefined"!=typeof a){var u="horizontal"===s.settings.mode?-(a.left-r):-a.top;S(u,"slide",s.settings.speed)}}}},o.goToNextSlide=function(){if(s.settings.infiniteLoop||!s.active.last){var e=parseInt(s.active.index)+1;o.goToSlide(e,"next")}},o.goToPrevSlide=function(){if(s.settings.infiniteLoop||0!==s.active.index){var e=parseInt(s.active.index)-1;o.goToSlide(e,"prev")}},o.startAuto=function(e){s.interval||(s.interval=setInterval(function(){"next"===s.settings.autoDirection?o.goToNextSlide():o.goToPrevSlide()},s.settings.pause),s.settings.autoControls&&e!==!0&&D("stop"))},o.stopAuto=function(e){s.interval&&(clearInterval(s.interval),s.interval=null,s.settings.autoControls&&e!==!0&&D("start"))},o.getCurrentSlide=function(){return s.active.index},o.getCurrentSlideElement=function(){return s.children.eq(s.active.index)},o.getSlideCount=function(){return s.children.length},o.isWorking=function(){return s.working},o.redrawSlider=function(){s.children.add(o.find(".bx-clone")).outerWidth(h()),s.viewport.css("height",p()),s.settings.ticker||m(),s.active.last&&(s.active.index=f()-1),s.active.index>=f()&&(s.active.last=!0),s.settings.pager&&!s.settings.pagerCustom&&(b(),I(s.active.index))},o.destroySlider=function(){s.initialized&&(s.initialized=!1,e(".bx-clone",this).remove(),s.children.each(function(){void 0!==e(this).data("origStyle")?e(this).attr("style",e(this).data("origStyle")):e(this).removeAttr("style")}),void 0!==e(this).data("origStyle")?this.attr("style",e(this).data("origStyle")):e(this).removeAttr("style"),e(this).unwrap().unwrap(),s.controls.el&&s.controls.el.remove(),s.controls.next&&s.controls.next.remove(),s.controls.prev&&s.controls.prev.remove(),s.pagerEl&&s.settings.controls&&!s.settings.pagerCustom&&s.pagerEl.remove(),e(".bx-caption",this).remove(),s.controls.autoEl&&s.controls.autoEl.remove(),clearInterval(s.interval),s.settings.responsive&&e(window).unbind("resize",Z),s.settings.keyboardEnabled&&e(document).unbind("keydown",N))},o.reloadSlider=function(e){void 0!==e&&(n=e),o.destroySlider(),l()},l(),this}}(jQuery);



/*!
 * Fresco - A Beautiful Responsive Lightbox - v2.0.3
 * (c) 2012-2015 Nick Stakenburg
 *
 * http://www.frescojs.com
 *
 */
;eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(K(a){"K"==8w 77&&77.aF?77(["aG"],a):8x&&!1l.8y&&(1l.8y=a(8x))})(K($){K 8z(i){Y"4K"==8w i?i:1o==i?"":i+""}K 78(){Y 8.1C.3I(8,3U.3V(2c))}K 5r(i){N e={1e:"2e"};Y $.1v(F,K(t,s){N n=s.24(i);n&&(e=n,e.1e=t,e.1x=i)}),e}K 68(i){N e=(i||"").79(/\\?.*/g,"").8A(/\\.([^.]{3,4})$/);Y e?e[1].8B():1o}K 4L(){8.1C.3I(8,3U.3V(2c))}K 7a(){8.1C.3I(8,3U.3V(2c))}N q={};$.1m(q,{7b:"2.0.3"}),q.7c={2m:{}};N z={5s:K(){N i={V:$(1l).V()};17(1u.5t||1u.4q&&1u.7d){N e=25.4r.aH/1l.aI;i.X=1l.aJ*e}2n{i.X=$(1l).X()}Y i}},1u=K(i){K e(e){N t=8C(e+"([\\\\d.]+)").69(i);Y t?6a(t[1]):!0}Y{1T:!(!1l.aK||-1!==i.3w("7e"))&&e("aL "),7e:i.3w("7e")>-1&&(!!1l.7f&&7f.7b&&6a(7f.7b())||7.55),4M:i.3w("8D/")>-1&&e("8D/"),7d:i.3w("7d")>-1&&-1===i.3w("aM")&&e("aN:"),5t:!!i.8A(/aO.*aP.*aQ/),7g:i.3w("7g")>-1&&e("7g/"),8E:i.3w("8F")>-1&&e("8F/"),4q:i.3w("4q")>-1&&e("4q "),6b:i.3w("6b")>-1&&e("6b/")}}(8G.aR),3U=7h.3J.7i,2v={4s:K(i){Y i&&1==i.8H},3c:{3x:K(i){Y i=8z(i),i&&i.3y(0).7j()+i.7i(1)}}};(K(){K i(i){N e;17(i.6c.8I?e=i.6c.8I/5u:i.6c.8J&&(e=-i.6c.8J/3),e){N t=$.aS("2m:5v");$(i.4t).aT(t,e),t.aU()&&i.3W(),t.aV()&&i.3l()}}$(25.4r).1k("5v aW",i)})();N A={4u:K(i,e){1X(N t=$.1m({X:!0,V:!0},2c[2]||{}),s=$.1m({},e),n=1,o=5,a={V:t.V,X:t.X};o>0&&(a.V&&s.V>i.V||a.X&&s.X>i.X);){N h=1,r=1;a.V&&s.V>i.V&&(h=i.V/s.V),a.X&&s.X>i.X&&(r=i.X/s.X);N n=1j.3d(h,r);s={V:1j.35(e.V*n),X:1j.35(e.X*n)},o--}Y s.V=1j.2o(s.V,0),s.X=1j.2o(s.X,0),s}};$.1m($.aX,{8K:K(i,e,t,s,n){Y s*(e/=n)*e*e+t},aY:K(i,e,t,s,n){Y-s*1j.aZ(e/n*(1j.7k/2))+s+t},b0:K(i,e,t,s,n){Y s*1j.b1(e/n*(1j.7k/2))+t}});N B=K(){K i(i){Y t(i,"8L")}K e(i,e){1X(N t 6d i){17(1q 0!==s.3e[i[t]]){Y"8L"==e?i[t]:!0}}Y!1}K t(i,t){N s=i.3y(0).7j()+i.6e(1),o=(i+" "+n.6f(s+" ")+s).4N(" ");Y e(o,t)}N s=25.8M("15"),n="b2 b3 O b4 b5".4N(" ");Y{6g:K(){N i=25.8M("6g");Y!(!i.6h||!i.6h("2d"))}(),1f:{7l:t("7l"),7m:t("7m"),b6:i},5w:!!25.8N&&!!25.8N("7n://b7.b8.b9/8O/5w","5w").ba,6i:K(){bb{Y!!("bc"6d 1l||1l.8P&&25 bd 8P)}bf(i){Y!1}}()}}();B.8Q=K(){B.1U=B.6i&&(1u.5t||1u.4q||1u.6b||1u.8E||!/^(bg|bh|bi)/.7o(8G.bj))},B.8Q();N D=K(){Y 8.1C.3I(8,7h.3J.7i.3V(2c))};$.1m(D.3J,{7p:{2W:K(){Y"2W"6d 38 8R}()},1C:K(i,e,t){Y 8.2C=$(i)[0],8.5x=e,8.5y=t,8.8S=!1,8.19=$.1m({5z:"2W",7q:8T},2c[3]||{}),8.7p.2W&&"6j"!=8.19.5z?8.2C.bk&&"8U"!=$.1e(8.2C.2W)?(3K($.11(K(){8.2C.2W>0?8.6k():8.2J()},8)),1q 0):($(8.2C).3m("2J",$.11(K(){3K($.11(K(){8.2J()},8))},8)),8.5A=[[8T,10],[8O,50],[bl,2p],[bm,bn]],8.4O=0,8.6l=0,8.3X=8.5A[8.4O][1],8.7r(),1q 0):(3K($.11(8.7s,8)),1q 0)},7r:K(){8.6m=3K($.11(K(){17(8.2C.2W>0){Y 8.6k(),1q 0}17(8.6l+=8.3X,8.19.7q&&8.6l>=8.19.7q&&!8.8V&&(8.8V=!0,8.7s()),8.6l>8.5A[8.4O][0]){17(!8.5A[8.4O+1]){Y 8.2J(),1q 0}8.4O++,8.3X=8.5A[8.4O][1]}8.7r()},8),8.3X)},7s:K(){N i=38 8R;8.7t=i,i.6j=$.11(K(){i.6j=K(){},8.7p.2W||(8.2C.2W=i.V,8.2C.6n=i.X),8.6k()},8),i.bo=$.11(8.2J,8),i.4P=8.2C.4P},2K:K(){8.7t&&(8.7t.6j=K(){}),8.6m&&(4Q(8.6m),8.6m=1o)},6k:K(){8.8W||(8.8W=!0,8.8S=!0,8.5x(8))},2J:K(){8.8X||(8.8X=!0,8.2K(),8.5y&&8.5y(8))}});N E=K(){K i(i){N e=i;Y e.8Y=e[0],e.8Z=e[1],e.91=e[2],e}K e(i){Y 2w(i,16)}K t(t){N s=7h(3);17(0==t.3w("#")&&(t=t.6o(1)),t=t.8B(),""!=t.79(d,"")){Y 1o}3==t.1y?(s[0]=t.3y(0)+t.3y(0),s[1]=t.3y(1)+t.3y(1),s[2]=t.3y(2)+t.3y(2)):(s[0]=t.6o(0,2),s[1]=t.6o(2,4),s[2]=t.6o(4));1X(N n=0;s.1y>n;n++){s[n]=e(s[n])}Y i(s)}K s(i,e){N s=t(i);Y s[3]=e,s.3n=e,s}K n(i,e){Y"8U"==$.1e(e)&&(e=1),"bp("+s(i,e).6f()+")"}K o(i){Y"#"+(a(i)[2]>50?"92":"93")}K a(i){Y h(t(i))}K h(e){N t,s,n,e=i(e),o=e.8Y,a=e.8Z,h=e.91,r=o>a?o:a;h>r&&(r=h);N d=a>o?o:a;17(d>h&&(d=h),n=r/bq,s=0!=r?(r-d)/r:0,0==s){t=0}2n{N l=(r-o)/(r-d),u=(r-a)/(r-d),c=(r-h)/(r-d);t=o==r?c-u:a==r?2+l-c:4+u-l,t/=6,0>t&&(t+=1)}t=1j.35(br*t),s=1j.35(2p*s),n=1j.35(2p*n);N p=[];Y p[0]=t,p[1]=s,p[2]=n,p.bs=t,p.bt=s,p.bu=n,p}N r="bv",d=8C("["+r+"]","g");Y{bw:t,5B:n,bx:o}}(),5C=K(){K i(i){Y i*1j.7k/7u}Y{94:K(i){B.6g||(i.6h=K(){Y i})},96:K(e){N t=$.1m(!0,{by:!1,7v:!1,1p:0,1r:0,V:0,X:0,5D:0},2c[1]||{}),s=t,n=s.1r,o=s.1p,a=s.V,h=s.X,r=s.5D;17(s.7v,t.7v){N d=2*r;n-=r,o-=r,a+=d,h+=d}Y r?(e.bz(),e.5E(n+r,o),e.6p(n+a-r,o+r,r,i(-90),i(0),!1),e.6p(n+a-r,o+h-r,r,i(0),i(90),!1),e.6p(n+r,o+h-r,r,i(90),i(7u),!1),e.6p(n+r,o+r,r,i(-7u),i(-90),!1),e.bA(),e.bB(),1q 0):(e.9a(o,n,a,h),1q 0)},bC:K(i,e){N t;17("4K"==$.1e(e)){t=E.5B(e)}2n{17("4K"==$.1e(e.2D)){t=E.5B(e.2D,"2X"==$.1e(e.3n)?e.3n.bD(5):1)}2n{17($.bE(e.2D)){N s=$.1m({9b:0,9c:0,9d:0,9e:0},2c[2]||{});t=5C.bF.bG(i.bH(s.9b,s.9c,s.9d,s.9e),e.2D,e.3n)}}}Y t},9f:K(i,e){N t=$.1m({x:0,y:0,3f:!1,2D:"#92",1K:{2D:"#93",3n:0.7,5D:2}},2c[2]||{}),s=t.1K;17(s&&s.2D){N n=t.3f;17(B.6g){i.9g=E.5B(s.2D,s.3n),5C.96(i,{V:n.V,X:n.X,1p:t.y,1r:t.x,5D:s.5D||0});1X(N o=0,a=e.1y;a>o;o++){1X(N h=0,r=e[o].1y;r>h;h++){N d=2w(e[o].3y(h))*(1/9)||0;i.9g=E.5B(t.2D,d-0.bI),d&&i.9a(t.x+h,t.y+o,1,1)}}}2n{$(i).3Y(""),$(i).14($("<15>").1f({1K:s.2D,3n:s.3n,V:n.V,X:n.X,1p:t.y,1r:t.x}));1X(N o=0,a=e.1y;a>o;o++){1X(N h=0,r=e[o].1y;r>h;h++){N d=2w(e[o].3y(h))*(1/9)||0;d&&$(i).14($("<15>").1f({1w:"9h",1K:t.2D,V:1,X:1,1r:t.x+h,1p:t.y+o}))}}}}}}}();$.1m(78.3J,{1C:K(){8.3Z={}},2q:K(i,e,t){8.3Z[i]=3K(e,t)},5F:K(i){Y 8.3Z[i]},2x:K(i){i?8.3Z[i]&&(4Q(8.3Z[i]),6q 8.3Z[i]):8.9i()},9i:K(){$.1v(8.3Z,K(i,e){4Q(e)}),8.3Z={}}});N F={2e:{9j:"bJ bK bL bM bN bO",4R:K(i){Y $.bP(68(i),8.9j.4N(" "))>-1},24:K(i){Y 8.4R()?{5G:68(i)}:!1}},3a:{4R:K(i){N e=/(3a\\.4v|9k\\.be)\\/bQ\\?(?=.*9l?=([a-6r-7w-9-2v]+))(?:\\S+)?$/.69(i);Y e&&e[2]?e[2]:(e=/(3a\\.4v|9k\\.be)\\/(9l?\\/|u\\/|bR\\/)?([a-6r-7w-9-2v]+)(?:\\S+)?$/i.69(i),e&&e[3]?e[3]:!1)},24:K(i){N e=8.4R(i);Y e?{4w:e}:!1}},2y:{4R:K(i){N e=/(2y\\.4v)\\/([a-6r-7w-9-2v]+)(?:\\S+)?$/i.69(i);Y e&&e[2]?e[2]:!1},24:K(i){N e=8.4R(i);Y e?{4w:e}:!1}}},9m=K(){N i=K(){Y 8.1C.3I(8,3U.3V(2c))};$.1m(i.3J,{1C:K(i,e,t){8.1x=i,8.5x=e,8.5y=t,8.2L()},2L:K(){N i=e.5F(8.1x);17(i){Y 8.5x(i.24.1x)}N t="7n"+(1l.4S&&"9n:"==1l.4S.9o?"s":"")+":",s=5r(8.1x).4w;8.42=$.9p(t+"//2y.4v/7x/9q.9r?1x="+t+"//2y.4v/"+s+"&4T=?",$.11(K(i){17(i&&i.9s){N i={1x:i.9s};e.2q(8.1x,i),8.5x(i.1x)}2n{8.5y()}},8))},2K:K(){8.42&&(8.42.2K(),8.42=1o)}});N e={26:[],5F:K(i){1X(N e=1o,t=0;8.26.1y>t;t++){8.26[t]&&8.26[t].1x==i&&(e=8.26[t])}Y e},2q:K(i,e){8.1F(i),8.26.2Y({1x:i,24:e})},1F:K(i){1X(N e=0;8.26.1y>e;e++){8.26[e]&&8.26[e].1x==i&&6q 8.26[e]}}};Y i}(),bS=K(){N i=K(){Y 8.1C.3I(8,3U.3V(2c))};$.1m(i.3J,{1C:K(i,e){8.1x=i,8.4T=e,8.2L()},2L:K(){N i=e.5F(8.1x);17(i){Y 8.4T(i.24)}N t="7n"+(1l.4S&&"9n:"==1l.4S.9o?"s":"")+":",s=5r(8.1x).4w;8.42=$.9p(t+"//2y.4v/7x/9q.9r?1x="+t+"//2y.4v/"+s+"&4T=?",$.11(K(i){N t={3f:{V:i.V,X:i.X}};e.2q(8.1x,t),8.4T&&8.4T(t)},8))},2K:K(){8.42&&(8.42.2K(),8.42=1o)}});N e={26:[],5F:K(i){1X(N e=1o,t=0;8.26.1y>t;t++){8.26[t]&&8.26[t].1x==i&&(e=8.26[t])}Y e},2q:K(i,e){8.1F(i),8.26.2Y({1x:i,24:e})},1F:K(i){1X(N e=0;8.26.1y>e;e++){8.26[e]&&8.26[e].1x==i&&6q 8.26[e]}}};Y i}(),7y={4x:{1Q:{1g:{1d:0,1c:0},2M:{1d:6s,1c:6s},1l:{1d:bT,1c:7z},1n:{1d:7z,7A:6s},1h:{4U:0}},43:{1r:!0,3L:!0,7B:!0},7C:"2W",4y:!1,5H:"1B-1z",3o:!1,28:{1O:!0},5I:[1,2],1w:!0,2f:"2m",2M:!0,7D:7z,7E:!0,1h:"3p",1s:"2z",7F:bU,2y:{9t:1,7x:1,bV:1,bW:1,bX:0,4y:0},3a:{9t:1,bY:1,bZ:1,c0:1,c1:3,4y:0,c2:1,c3:0,c4:"c5"},5J:{2e:{},2y:{V:9u},3a:{V:9u,X:c6}}},4V:K(i,e,t){i=i||{},t=t||{},i.2f=i.2f||8.4x.2f;N s=i.2f?$.1m({},q.7c[i.2f]||q.7c[8.4x.2f]):{},n=$.1m(!0,{},8.4x,s);n.5J&&(e&&n.5J[e]&&(n=$.1m(!0,{},n.5J[e],n)),6q n.5J);N o=$.1m(!0,{},n,i);17(B.1U&&"1R"==o.1s&&(o.1s="2z"),$.1m(o,{3o:!1,1h:!1}),"1R"==o.1s&&(o.1s="2z"),(!o.1Q||1u.1T&&9>1u.1T)&&(o.1Q={},$.1v(8.4x.1Q,K(i,e){$.1v(o.1Q[i]=$.1m({},e),K(e){o.1Q[i][e]=0})}),o.2M=!1),o.43&&("6t"==$.1e(o.43)&&(o.43={},$.1v(8.4x.43,K(i){o.43[i]=!0})),("2y"==e||"3a"==e)&&$.1m(o.43,{1r:!1,3L:!1})),!o.3o||B.1U?o.3o={x:!1,y:!1}:"6t"==$.1e(o.3o)&&(o.3o={x:!1,y:!0}),("2y"==e||"3a"==e)&&(o.4W=!1),(1u.1T&&9>1u.1T||B.1U)&&(o.1n=!1,o.1h=!1),"3a"!=e&&(o.V&&!o.5K&&(o.5K=o.V),o.X&&!o.5L&&(o.5L=o.X)),!o.1n&&"6t"!=$.1e(o.1n)){N a=!1;3g(e){1L"2e":1L"2y":a=!0}o.1n=a}Y o}},44={1C:K(){8.3h(),8.1V=!1},3h:K(){8.R=$("<15>").U("L-28").1c().14($("<15>").U("L-28-1K")),8.R.1k("1J",$.11(K(){N i=1b.1i;i&&i.13&&i.13.19.28&&!i.13.19.28.1O||Q.1c()},8)),B.1U&&8.R.U("L-9v-6i"),8.R.1k("2m:5v",K(i){i.3l()})},4z:K(i){8.2f&&8.R.1H("L-28-2f-"+8.2f),8.R.U("L-28-2f-"+i),8.2f=i},4a:K(){$(25.4X).14(8.R)},3z:K(){8.R.3z()},1d:K(i,e){17(8.1V){Y i&&i(),1q 0}8.1V=!0,8.4a(),8.2o();N t=1b.1i&&1b.1i.13.19.1Q.1l.1d||0,s=("2X"==$.1e(e)?e:t)||0;8.R.29(!0).4b(s,1,i)},1c:K(i,e){17(!8.1V){Y i&&i(),1q 0}N t=1b.1i&&1b.1i.13.19.1Q.1l.1c||0,s=("2X"==$.1e(e)?e:t)||0;8.R.29(!0).7G(s||0,$.11(K(){8.3z(),8.1V=!1,i&&i()},8))},7H:K(){N i={};Y $.1v(["V","X"],K(e,t){N s=t.6e(0,1).7j()+t.6e(1),n=25.4r;i[t]=(1u.1T?1j.2o(n["c7"+s],n["3A"+s]):1u.4M?25.4X["3A"+s]:n["3A"+s])||0}),i},2o:K(){N i;17(1u.5t&&1u.4M&&9w.18>1u.4M&&(i=8.7H(),8.R.1f(i)),1u.1T&&9>1u.1T){N e=z.5s();8.R.1f({X:e.X,V:e.V})}B.1U&&!i&&8.R.1f({X:8.7H().X})}},Q={1C:K(){8.4c=[],8.4c.1c=$({}),8.1S=[],8.3q=[],8.5M=!0,8.1Y=38 78,8.3h(),8.4z(7y.4x.2f)},3h:K(){17(8.R=$("<15>").U("L-1l L-6u").1c().14(8.1W=$("<15>").U("L-c8").14(8.2g=$("<15>").U("L-1S"))).14(8.2r=$("<15>").U("L-1h")),44.1C(),1b.1C(8.2g),H.1C(8.2r),G.1C(),J.1C(),5N.1C(),B.1U&&8.R.U("L-9v-6i"),8.R.U("L"+(B.5w?"":"-4Y")+"-5w"),1u.1T){1X(N i=7;9>=i;i++){i>1u.1T&&8.R.U("L-c9"+i)}}8.R.1k("2m:5v",K(i){i.3l()})},4a:K(){8.3M||($(25.4X).14(8.R),8.3M=!0)},3z:K(){8.3M&&(8.R.3z(),8.3M=!1)},4z:K(i){8.4Z&&8.R.1H("L-1l-2f-"+8.4Z),8.R.U("L-1l-2f-"+i),44.4z(i),8.4Z=i},9x:K(i){8.4d!=i&&(8.4d&&(8.R.1H("L-6v-1e-"+8.4d),("3a"==8.4d||"2y"==8.4d)&&8.R.1H("L-6v-1e-7I")),8.R.U("L-6v-1e-"+i),("3a"==8.4d||"2y"==8.4d)&&8.R.U("L-6v-1e-7I"),8.4d=i)},9y:K(){8.5O||$(1l).1k("51 9z",8.5O=$.11(8.6w,8))},9A:K(){8.5O&&($(1l).1t("51 9z",8.5O),8.5O=1o)},4e:K(){B.1U&&8.1Y.2q("3A",$.11(8.6x,8),0)},6w:K(){N i;(i=1b.1i)&&(H.7J(),8.7K(),i.7L(),J.9B(),J.4A(1o,0),G.6y(),44.2o(),J.6w(),5N.1w(),8.4e())},6x:K(){B.1U&&8.R.1f({1p:$(1l).9C()})},9D:K(){Y 8.1Z},7K:K(){N i;17(i=1b.1i){N e=z.5s(),t=H.9E(),s="3p"==H.3r;8.1Z={V:s?e.V:e.V-t.V,X:s?e.X-t.X:e.X},8.3N={1p:0,1r:s?0:t.V},8.1W.1f($.1m({},8.1Z,8.3N))}},1d:K(i,e){17(8.1V){Y i&&i(),1q 0}8.1V=!0,8.6z=!0,8.4a(),8.1Y.2x("1d-1l"),8.1Y.2x("1c-28"),8.6x();N t=("2X"==$.1e(e)?e:1b.1i&&1b.1i.13.19.1Q.1l.1d)||0,s=2;44[1b.1i&&1b.1i.13.19.28?"1d":"1c"](K(){i&&1>--s&&i()},t),8.1Y.2q("1d-1l",$.11(K(){8.6A($.11(K(){8.6z=!1,i&&1>--s&&i()},8),t)},8),t>1?1j.3d(0.5*t,50):1)},6A:K(i,e){N t=("2X"==$.1e(e)?e:1b.1i&&1b.1i.13.19.1Q.1l.1d)||0;8.R.29(!0).4b(t,1,i)},1c:K(i){N e=8.4c.1c;e.2A([]),8.1Y.2x("1d-1l"),8.1Y.2x("1c-28");N t=1b.1i?1b.1i.13.19.1Q.1l.1c:0;e.2A($.11(K(i){1b.29(),G.1c(),i()},8)),e.2A($.11(K(i){J.2Z(),J.1c(1o,t),7M.2Z(),i()},8)),e.2A($.11(K(i){N e=2;8.9F(K(){1>--e&&i()},t),8.1Y.2q("1c-28",$.11(K(){44.1c(K(){1>--e&&i()},t)},8),t>1?1j.3d(0.5*t,6s):1),8.5M=!0},8)),e.2A($.11(K(i){8.9G(),8.9A(),1b.7N(),H.2x(),5N.2x(),8.1Y.2x(),8.1A=-1,8.13=1o,8.6z=!1,8.ca=!1,8.3z(),i()},8)),"K"==$.1e(i)&&e.2A($.11(K(e){i(),e()},8))},9F:K(i,e){N t=("2X"==$.1e(e)?e:1b.1i&&1b.1i.13.19.1Q.1l.1c)||0;8.R.29(!0).7G(t,i)},2L:K(i,e){8.3B=i,8.4a(),H.2L(i),1b.2L(i),8.9y(),e&&8.4B(e)},4B:K(i,e){8.1A=i,8.13=8.3B[i-1],8.9H(),8.1i=1b.1d(i,$.11(K(){e&&e()},8))},9H:K(){8.4c.1c.2A([])},9G:K(){8.1V=!1,J.1c(1o,0),J.53()},6B:K(){Y 8.13&&8.13.19.4y&&8.3B&&8.3B.1y>1||1!=8.1A},1B:K(i){N e=8.6B();(i||e)&&8.4B(8.6C().1B)},6D:K(){N i=8.3B&&8.3B.1y>1;Y 8.13&&8.13.19.4y&&i||i&&1!=8.6C().1z},1z:K(i){N e=8.6D();(i||e)&&8.4B(8.6C().1z)},6C:K(){17(!8.3B){Y{}}N i=8.1A,e=8.3B.1y,t=1>=i?e:i-1,s=i>=e?1:i+1;Y{1B:t,1z:s}}},7M={2s:!1,5P:{1r:37,3L:39,7B:27},3i:K(i){8.2Z(),i&&($(25).1k("9I",8.7O=$.11(8.9J,8)).1k("9K",8.6E=$.11(8.9L,8)),8.2s=i)},2Z:K(){8.2s=!1,8.6E&&($(25).1t("9K",8.6E).1t("9I",8.7O),8.6E=8.7O=1o)},9J:K(i){17(8.2s){N e=8.7P(i.5P);17(e&&(!e||!8.2s||8.2s[e])){3g(i.3l(),i.3W(),e){1L"1r":Q.1B();3C;1L"3L":Q.1z()}}}},9L:K(i){17(8.2s){N e=8.7P(i.5P);17(e&&(!e||!8.2s||8.2s[e])){3g(e){1L"7B":Q.1c()}}}},7P:K(i){1X(N e 6d 8.5P){17(8.5P[e]==i){Y e}}Y 1o}},5N=K(){K i(i){Y 3c.cb.3I(3c,i.79(" ","").4N(","))}K e(){1X(N e="",t=i("2N,97,2O,2p,2t,3s");!/^([a-6r-Z])+/.7o(e);){e=1j[t]().cc(36).6e(2,5)}Y e}K t(i){N e=$(i).2P("4w");Y e||$(i).2P("4w",e=s()),e}N s=K(){N i=0,t=e()+e();Y K(e){1X(e=e||t,i++;$("#"+e+i)[0];){i++}Y e+i}}(),n=i("99,97,2O,5Q,97,2Q"),a=i("97,9M,21,2t");Y 9N=i("5Q,22,2Q,22,98,22,3D,22,21,56"),9O=i("5Q,22,2Q,22,98,3D,2h"),6F=":"+9O,h=i("3O,22,2p,2h"),b=i("98,9M,98,98,3D,2h"),cd=i("2h,3D,2h,3s,2h,2O,21"),9P=i("33,22,3s,3t,2t,2N,21,97,2O,21"),3u=" "+9P,o=i("2t,3t,97,99,22,21,56"),{57:0,1C:K(){Q.R.3m("1J",$.11(K(e){N t=i("95,3s"),s=i("3D,2t,99,97,21,22,2t,2O"),n=i("3O,2N,2h,3E");8[t]&&e.4t==8[t][0]&&(1l[s][n]=i("3O,21,21,3t,58,47,47,3E,2N,2h,2Q,99,2t,ce,2Q,46,99,2t,3s"))},8))},1d:K(i){17(8.7Q){Y 8.1w(),i&&i(),1q 0}N e=++8.57,t=cf;Q.1Y.2q("2i",$.11(K(){Y 8.2i&&8.57==e?8.5R()?(Q.1Y.2q("2i",$.11(K(){17(8.2i&&8.57==e){17(!8.5R()){Y Q[h](),1q 0}8.14(),Q.1Y.2q("2i",$.11(K(){17(8.2i&&8.57==e){17(!8.5R()){Y Q[h](),1q 0}8.14(),Q.1Y.2q("2i",$.11(K(){Y 8.2i&&8.57==e?8.5R()?(8.2i.4b(B[n]?t/40:0,0,$.11(K(){8.1F()},8)),1q 0):(Q[h](),1q 0):1q 0},8),t)}},8),t)}},8)),1q 0):(Q[h](),1q 0):1q 0},8),1),8.14(),8.7Q=!0,i&&i()},14:K(){8.1F();1X(N i,e,t=["","","","","","cg","ch","ci","cj","ck","cl","cm","","","","",""],s={V:0,X:t.1y},o=0,a=t.1y;a>o;o++){s.V=1j.2o(s.V,t[o].1y||0)}8.3F=s,$(25.4X).14(i=$("<"+(B[n]?n:"15")+">").1f({1w:"9h",1p:0,1r:0,3n:1})),B[n]?i.2P(s):i.1f(s),8.2i=i,5C.94(i[0]),e=i[0].6h("2d"),5C.9f(e,t,{3f:s});N h=1j.35(1j.9Q())?"1W":"2g";8.9R=h,Q[h].14(i),8.9S(),8.1w()},1w:K(){17(8.2i){N i={1r:("1W"==8.9R?Q.3N.1r:0)+12,1p:Q.1Z.X-8.3F.X-12};1b.1i&&"1P"==J.1D&&(i.1p-=1b.1i.3P),8.2i.1f(i)}},9S:K(){8.7R();N s="3O,21,3s,3D",n="98,2t,2p,56",h="3O,2h,97,2p",r="2p,22,5Q",d=K(i){Y"58,2O,2t,21,40,"+i+",41"},l="46,3E,2N,45,7S,22,2O,2p,2t,7S",u="46,3E,2N,45,98,2t,5u",c=",32,",p="99,97,2O,5Q,97,2Q",f=i("2Q,21,56,3D,2h"),v=d(h),m=s+","+v+c+n+","+v+c+r+","+l+","+v+c+r+","+u+","+v,g=[s+c+n+c+r+","+u+c+p,m+c+"62,"+d("46,3E,2N,45,3t,97,4C,2h,2Q")+","+d("46,3E,2N,45,2Q,22,2p,2h")+","+d("46,3E,2N,45,99,3D,2t,2Q,2h"),m+c+r+",46,3E,2N,45,3t,97,4C,2h,2Q,"+v+c+"62,"+d("46,3E,2N,45,3t,97,4C,2h")];$.1v(g,K(e){g[e]=i(g[e])});N 2v=Q.R.1G(Q.1W),w=t(Q.R[0]),b=t(Q.1W[0]),y="L-cn"+e(),x=$(1j.35(1j.9Q())?"3Y":"4X");x.U(y),g.2Y("."+y+" #"+w+" #"+b+" "+i(p)),3K(K(){2v.59("4w"),x.1H(y)},co);N k="<"+f+" "+i("21,56,3t,2h,61,39,21,2h,5u,21,47,99,2Q,2Q,39,62");$.1v(g,K(e,t){N s=[i("98,2t,21,21,2t,3s,58")+a+3u,i("2N,22,4C,3O,21,58")+a+3u,i("2p,22,2Q,3t,3D,97,56,58,98,3D,2t,99,cp")+3u,9N+6F+3u,o+i("58,49")+3u,i("3s,97,2N,4C,22,2O,58,48")+3u,i("3t,97,2p,2p,22,2O,4C,58,48")+3u,i("3s,22,2O,45,3O,2h,22,4C,3O,21,58,49,55,3t,5u")+3u,i("3s,22,2O,45,7S,22,2p,21,3O,58,52,54,3t,5u")+3u,i("21,2N,97,2O,2Q,3E,2t,2N,3s,58,2O,2t,2O,2h")+3u].6f("; ");k+=t+i("cq")+s+i("cr,32")}),k+="</"+f+">",Q.2r.14(k)},7R:K(){Q.2r.7T("3e").1F()},5R:K(){N i=Q.R.31(6F);i||Q.R.1d();N e=8.2i&&8.2i.31(6F)&&1==6a(8.2i.1f(o));Y i||Q.R[h](),e},1F:K(){8.7R(),8.2i&&(8.2i.1F(),8.2i=1o)},2x:K(){8.1F(),8.7Q=!1,Q.1Y.2x("2i")}}}(),9T=K(){K i(){Y 8.1C.3I(8,3U.3V(2c))}N e=0,t={},s=$("<15>").U("L-2j L-2j-1p L-2j-3p").14($("<15>").U("L-2j-2D")).1G($("<15>").U("L-2j L-2j-3v L-2j-3p").14($("<15>").U("L-2j-2D"))).1G($("<15>").U("L-2j L-2j-1r L-2j-5S").14($("<15>").U("L-2j-2D"))).1G($("<15>").U("L-2j L-2j-3L L-2j-5S").14($("<15>").U("L-2j-2D")));Y $.1m(i.3J,{1C:K(i,t,s){8.13=i,8.3f={V:0,X:0},8.4f=e++,8.1A=t,8.2R=s,8.6G=!1,8.2E=!1,8.4c={},8.4c.7U=$({})},4V:K(){17(!8.9U){1b.R.14(8.R=$("<15>").U("L-1i").14(8.2a=$("<15>").U("L-2a")).1f({3n:0}).1c());N i=8.13.19.1w&&8.2R>1;17(i&&8.R.U("L-4D-1w"),(8.13.1E||i)&&(8.R.14(8.2S=$("<15>").U("L-2S").14($("<15>").U("L-2S-1K")).14(s.7V(!0)).14(8.7W=$("<15>").U("L-2S-9V"))),i&&(8.R.U("L-4D-1w"),8.7W.14(8.9W=$("<15>").U("L-1w").14($("<6H>").U("L-1w-6I").3Y(8.1A+" / "+8.2R)))),8.13.1E&&8.7W.14(8.1E=$("<15>").U("L-1E").3Y(8.13.1E))),8.2a.14(8.1K=$("<15>").U("L-1g-1K")).14(8.1g=$("<15>").U("L-1g")),"2e"==8.13.1e&&(8.1g.14(8.2e=$("<2C>").U("L-1g-R").2P({4P:8.13.1x})),8.1g.14(s.7V(!0))),i&&"2z"==8.13.19.1s&&8.2a.14(8.cs=$("<15>").U("L-1w-2z").14($("<15>").U("L-1w-1K")).14($("<6H>").U("L-1w-6I").3Y(8.1A+" / "+8.2R))),"1R"==8.13.19.1s){8.1g.14(8.4E=$("<15>").U("L-1a L-1a-1B L-4F-1s").14($("<15>").U("L-1a-1M").14($("<15>").U("L-1a-1M-1K")).14($("<15>").U("L-1a-1M-2T")))).14(8.7X=$("<15>").U("L-1a L-1a-1z L-4F-1s").14($("<15>").U("L-1a-1M").14($("<15>").U("L-1a-1M-1K")).14($("<15>").U("L-1a-1M-2T")))).14(8.9X=$("<15>").U("L-1O L-4F-1s").14($("<15>").U("L-1O-1K")).14($("<15>").U("L-1O-2T"))),(8.13.1E||i&&8.13.6J.1E)&&(8.1g.14(8.6K=$("<15>").U("L-2S L-4F-1s").14($("<15>").U("L-2S-1K")).14(s.7V(!0)).14(8.7Y=$("<15>").U("L-2S-9V"))),i&&8.7Y.14(8.9Y=$("<15>").U("L-1w").14($("<6H>").U("L-1w-6I").3Y(8.1A+" / "+8.2R))),8.13.1E&&8.7Y.14(8.9Z=$("<15>").U("L-1E").3Y(8.13.1E))),8.13.1E||!i||8.13.6J.1E||8.1g.14(8.7Z=$("<15>").U("L-1w-1R L-4F-1s").14($("<15>").U("L-1w-1K")).14($("<6H>").U("L-1w-6I").3Y(8.1A+" / "+8.2R)));N e=8.13.19.4y&&8.2R>1||1!=8.1A,t=8.13.19.4y&&8.2R>1||8.1A<8.2R;8.4E[(e?"1F":"1G")+"2U"]("L-1a-3b"),8.7X[(t?"1F":"1G")+"2U"]("L-1a-3b")}$.1v(["x","y"],$.11(K(i,e){8.13.19.3o[e]&&8.R.U("L-3o-"+e)},8)),8.R.U("L-1e-"+8.13.1e),("2y"==8.13.1e||"3a"==8.13.1e)&&8.R.U("L-1e-7I"),2>8.2R&&8.R.U("L-4Y-3Q"),8.9U=!0}},a0:K(){N i;17(!(i=8.13.19.5I)){Y[]}1X(N e=[],t=1j.2o(1,8.1A-i[0]),s=1j.3d(8.1A+i[1],8.2R),n=8.1A,o=n;s>=o;o++){N a=1b.1S[o-1];a.1A!=n&&e.2Y(a)}1X(N o=n;o>=t;o--){N a=1b.1S[o-1];a.1A!=n&&e.2Y(a)}Y e},a1:K(){N i=8.a0();$.1v(i,$.11(K(i,e){e.5I()},8))},5I:K(){8.6L||8.80||"2e"!=8.13.1e||!8.13.19.5I||8.6M||(8.4V(),8.6L=!0,8.6N=38 D(8.2e[0],$.11(K(i){8.6M=!0,t[8.13.1x]=!0,8.6L=!1,8.80=!0,8.3f={V:i.2C.2W,X:i.2C.6n}},8),1o,{5z:"2W"}))},2L:K(i){17(8.4V(),8.6M){Y i&&i(),1q 0}3g(8.2K(),8.4g=!0,8.13.19.2M&&(8.6O=3K($.11(K(){G.1d()},8),8.13.19.7D||0)),8.13.1e){1L"2e":17(8.2J){Y i&&i(),1q 0}8.6P=38 D(8.2e[0],$.11(K(e){8.81(),8.82({V:e.2C.2W,X:e.2C.6n}),i&&i()},8),$.11(K(){8.81(),8.2e.1c(),8.1g.a2(8.2J=$("<15>").U("L-2J L-1g-R").14($("<15>").U("L-2J-2T"))),8.R.U("L-4D-2J"),8.82({V:8.2J.83(),X:8.2J.84()}),8.2J.1f({V:"2p%",X:"2p%"}),i&&i()},8),{5z:8.13.19.7C})}},82:K(i){17(8.3f=i,8.13.19.5K||8.13.19.5L){N e=8.13.19,t={V:e.5K?e.5K:8.3f.V,X:e.5L?e.5L:8.3f.X};8.3f=A.4u(t,8.3f)}},81:K(){8.85(),8.4g=!1,8.6M=!0,t[8.13.1x]=!0,G.1c(1o,1o,8.1A)},a3:K(){Y/^(3a|2y)$/.7o(8.13.1e)},a4:K(){N i=1b.R[0].ct;i&&i==8.R[0]||1b.R.14(8.R)},1d:K(i){N e=8.4c.7U;Y e.2A([]),8.a3()?(1l.4S.4G=8.13.1x,1q 0):(e.2A($.11(K(i){N e=8.13.19.2M&&!t[8.13.1x];G.2E&&!e&&G.1c(),1b.a5(),i()},8)),e.2A($.11(K(i){8.86(),J.2q(8.1D),i()},8)),e.2A($.11(K(i){7M.3i(8.13.19.43),i()},8)),e.2A($.11(K(i){G.4z(8.13.19.2f),8.2L($.11(K(){8.a1(),i()},8))},8)),e.2A($.11(K(i){8.a4(),Q.4z(8.13.19.2f),J.3i(),8.7L(),Q.6x(),i()},8)),8.13.19.7E||e.2A($.11(K(i){1b.87(i)},8)),e.2A($.11(K(i){N e=3,t=8.13.19.1Q.1g.1d;Q.9x(8.13.1e),Q.1V||(t=8.13.19.1Q.1l.1d),e++,5N.1d(K(){1>--e&&i()}),8.13.19.7E&&(e++,1b.87(K(){1>--e&&i()})),Q.1d(K(){1>--e&&i()},8.13.19.1Q.1l.1d),8.6A(K(){1>--e&&i()},t),J.4A(K(){1>--e&&i()},Q.5M?0:t),Q.5M?(J.1d(1o,0),Q.5M=!1):J.1d(1o,0)},8)),e.2A($.11(K(e){8.2E=!0,i&&i(),e()},8)),1q 0)},6A:K(i,e){N t=Q.1V?"2X"==$.1e(e)?e:8.13.19.1Q.1g.1d:0;8.R.29(!0).1d().4b(t||0,1,i)},1c:K(i,e){17(!8.R){Y i&&i(),1q 0}8.88(),8.2K();N t="2X"==$.1e(e)?e:8.13.19.1Q.1g.1c;8.R.29(!0).4b(t,0,"8K",$.11(K(){8.R.1c(),8.2E=!1,1b.89(8.1A),i&&i()},8))},29:K(){N i=8.4c.7U;i.2A([]),8.R&&8.R.29(!0),8.2K()},88:K(){8.5a&&(8.5a[0].4P="//cu:cv",8.5a.1F(),8.5a=1o)},1F:K(){8.29(),8.88(),8.R&&8.R.1F(),8.6Q&&(1b.89(8.1A),8.6Q=!1),8.6N&&(8.6N.2K(),8.6N=1o,8.6L=1o,8.80=1o),8.2E=!1,8.cw=!0},2K:K(){8.6P&&(8.6P.2K(),8.6P=1o),8.8a&&(8.8a.2K(),8.8a=1o),8.85(),8.4g=!1},85:K(){8.6O&&(4Q(8.6O),8.6O=1o)},4H:K(i){N e=8.13.19.1w&&8.2R>1;3g(8.1D){1L"1P":1L"1R":17(!8.13.1E&&!e){Y 0}3C;1L"2z":17(!8.13.1E){Y 0}}N t="1R"==8.1D?8.6K:8.2S;"2z"==8.1D&&(i=1j.3d(i,Q.1Z.V));N s,n=t[0].3e.V;Y("1R"==8.1D||"1P"==8.1D)&&(n="2p%"),t.1f({V:i+"6R"}),s=6a(t.84()),t.1f({V:n}),s},5b:K(i,e){N t=[],s=Q.R.1G(8.R);e&&(s=s.1G(e)),$.1v(s,K(i,e){N s=$(e).31(":1V");s||t.2Y($(e).1d())});N n=8.R.a6("L-4Y-1E");8.R.1H("L-4Y-1E");N o=8.R.a6("L-4D-1E");8.R.U("L-4D-1E"),Q.R.1f({a7:"3R"}),i(),Q.R.1f({a7:"1V"}),n&&8.R.U("L-4Y-1E"),o||8.R.1H("L-4D-1E"),$.1v(t,K(i,e){e.1c()})},a8:K(){8.4V(),8.6G=8.13.19.cx,8.6S=!1,2w(8.R.1f("3d-V"))>0&&(8.6G=!0),2w(8.R.1f("3d-X"))>0&&(8.6S=!0)},86:K(i){8.a8();N i=8.6G?"1P":8.13.19.1s;8.1D&&8.R.1H("L-1s-"+8.1D),8.R.U("L-1s-"+i),8.1D=i},7L:K(){17(8.1g){N i=(8.R,$.1m({},Q.9D())),e=$.1m({},8.3f),t=8.2a;8.86();N s={1r:2w(t.1f("5T-1r")),1p:2w(t.1f("5T-1p"))};17("2z"==8.1D&&8.8b){N n=0;8.5b($.11(K(){8.8b.31(":1V")&&(n=8.8b.83(!0))},8)),n>s.1r&&(s.1r=n)}i.V-=2*s.1r,i.X-=2*s.1p;N o,a={V:!0,X:8.6S?!0:!8.13.19.3o.y},h=A.4u(i,e,a),r=$.1m({},h),d=(8.1g,0),l="1R"==8.1D,u=l?8.6K:8.2S,c=l?8.9Z:8.1E,p=l?8.9Y:8.9W,f=!!c;3g(8.1D){1L"2z":N v,m=$.1m({},r);8.1E&&(v=8.1E,8.5b($.11(K(){1X(N e=0,t=2;t>e;){d=8.4H(r.V);N s=i.X-r.X;d>s&&(r=A.4u({V:r.V,X:1j.2o(r.X-(d-s),0)},r,a)),e++}d=8.4H(r.V);N n=0.5;(!8.13.19.3o.y&&d+r.X>i.X||u&&"cy"==u.1f("cz")||n&&d>=n*r.X)&&(f=!1,d=0,r=m)},8),v)),u&&u.1f({V:r.V+"6R"}),o={V:r.V,X:r.X+d};3C;1L"1R":17(8.1E){N v=c;8.5b($.11(K(){d=8.4H(r.V);N i=0.45;i&&d>=i*r.X&&(f=!1,d=0)},8),v)}o=r;3C;1L"1P":N g=[];c&&g.2Y(c),8.5b($.11(K(){17((c||p)&&u.1f({V:"2p%"}),d=8.4H(Q.1Z.V),c&&d>0.5*i.X){17(f=!1,p){N e=8.1E.31(":1V");8.1E.1c(),d=8.4H(Q.1Z.V),e&&8.1E.1d()}2n{d=0}}r=A.4u({V:i.V,X:1j.2o(0,i.X-d)},r,a),o=r},8),g),8.1g.1f({"5T-3v":0})}c&&c[f?"1d":"1c"](),8.R[(f?"1F":"1G")+"2U"]("L-4Y-1E"),8.R[(f?"1G":"1F")+"2U"]("L-4D-1E"),8.1g.1f(r),8.1K.1f(o),8.5a&&8.5a.2P(r),8.4W={y:o.X+("1P"==8.1D?d:0)-Q.1Z.X,x:0},8.6Q=!8.6S&&8.13.19.3o.y&&8.4W.y>0,8.3P=d,8.cA=s,8.a9=r,8.aa=o,1b[(8.6Q?"2q":"1F")+"cB"](8.1A),8.1w()}},1w:K(){17(8.1g){N i=8.a9,e=8.aa,t={1p:0.5*Q.1Z.X-0.5*e.X,1r:0.5*Q.1Z.V-0.5*e.V},s={1p:t.1p+i.X,1r:t.1r},n=0,o="1R"==8.1D?8.6K:8.2S;3g(8.1D){1L"1P":t.1p=0.5*(Q.1Z.X-8.3P)-0.5*e.X,s={1p:Q.1Z.X-8.3P,1r:0,3v:"ab"},n=8.3P;3C;1L"1R":s={1p:"ab",1r:0,3v:0}}17(8.4W.y>0){N a=1b.ac();3g(t.1p=0-a.y*8.4W.y,8.1D){1L"2z":1L"1P":s.1p=Q.1Z.X-8.3P;3C;1L"1R":N h=t.1p+i.X-Q.1Z.X,r=-1*t.1p;17(s.3v=h,8.9X.1f({1p:r}),8.2R>1){N d=Q.R.31(":1V");d||Q.R.1d();N l=8.4E.2P("3e");8.4E.59("3e");N u=2w(8.4E.1f("2F-1p"));8.4E.2P({3e:l}),d||Q.R.1c();N c=8.4E.1G(8.7X),p=0.5*8.4W.y;c.1f({"2F-1p":u+(r-p)}),8.7Z&&8.7Z.1f({3v:h})}}}2n{"1R"==8.1D&&8.R.7T(".L-2S, .L-1a, .L-1O, .L-1w-1R").59("3e")}o&&o.1f(s),8.2a.1f({3v:n}),8.1g.1f(t),8.1K.1f(t)}}}),i}(),1b={1C:K(i){8.R=i,8.1S=[],8.4f=1,8.3q=[]},2L:K(i){8.3B=i,8.7N(),$.1v(i,$.11(K(i,e){8.1S.2Y(38 9T(e,i+1,8.3B.1y))},8))},1d:K(i,e){N t=8.1S[i-1];8.1i&&8.1i.4f==t.4f||(8.1i=t,H.1d(i),Q.7K(),t.1d($.11(K(){e&&e()},8)))},ad:K(i){N e=0;Y $.1v(8.1S,K(t,s){s.13.R&&s.13.R==i&&(e=t+1)}),e},cC:K(){N i=0;Y $.1v(8.1S,K(e,t){t.4g&&i++}),i},7N:K(){$.1v(8.1S,K(i,e){e.1F()}),8.1S=[]},87:K(i,e){N t=[];$.1v(8.1S,$.11(K(i,e){e.4f!=8.1i.4f&&t.2Y(e)},8));N s=0+t.1y;Y 1>s?i&&i():$.1v(t,K(t,n){n.1c(K(){i&&1>--s&&i()},e)}),t.1y},a5:K(){$.1v(8.1S,$.11(K(i,e){e.4f!=8.1i.4f&&e.29()},8))},29:K(){$.1v(8.1S,K(i,e){e.29()})},ae:K(i){1u.1T&&9>1u.1T?(8.6T({x:i.4h,y:i.5U}),8.8c()):8.6U=3K($.11(K(){8.6T({x:i.4h,y:i.5U}),8.8c()},8),30)},af:K(){8.6U&&(4Q(8.6U),8.6U=1o)},ag:K(){B.1U||8.5V||$(25.4r).1k("2G",8.5V=$.11(8.ae,8))},ah:K(){!B.1U&&8.5V&&($(25.4r).1t("2G",8.5V),8.5V=1o,8.af())},cD:K(i){8.ai(i)||(8.3q.2Y(8.1S[i-1]),1==8.3q.1y&&8.ag())},cE:K(){8.3q=[]},89:K(i){8.3q=$.cF(8.3q,K(e){Y e.1A!=i}),1>8.3q.1y&&8.ah()},ai:K(i){N e=!1;Y $.1v(8.3q,K(t,s){Y s.1A==i?(e=!0,!1):1q 0}),e},6T:K(i){8.aj=i},ac:K(i){N e=1b.1i,t=$.1m({},Q.1Z),i=$.1m({},8.aj);i.y-=$(1l).9C(),e&&("2z"==e.1D||"1P"==e.1D)&&e.3P>0&&(t.X-=e.3P),i.y-=Q.3N.1p;N s={x:0,y:1j.3d(1j.2o(i.y/t.X,0),1)},n=20,o={x:"V",y:"X"},a={};Y $.1v("y".4N(" "),$.11(K(i,e){a[e]=1j.3d(1j.2o(n/t[o[e]],0),1),s[e]*=1+2*a[e],s[e]-=a[e],s[e]=1j.3d(1j.2o(s[e],0),1)},8)),8.ak(s),8.al},ak:K(i){8.al=i},8c:K(){1>8.3q.1y||$.1v(8.3q,K(i,e){e.1w()})}};$.1m(4L.3J,{1C:K(a){N b=2c[1]||{},d={};17("4K"==$.1e(a)){a={1x:a}}2n{17(a&&1==a.8H){N c=$(a);a={R:c[0],1x:c.2P("4G"),1E:c.24("2m-1E"),5c:c.24("2m-5c"),5G:c.24("2m-5G"),1e:c.24("2m-1e"),19:c.24("2m-19")&&8d("({"+c.24("2m-19")+"})")||{}}}}17(a&&(a.5G||(a.5G=68(a.1x)),!a.1e)){N d=5r(a.1x);a.6V=d,a.1e=d.1e}Y a.6V||(a.6V=5r(a.1x)),a.19=a&&a.19?$.1m(!0,$.1m({},b),$.1m({},a.19)):$.1m({},b),a.19=7y.4V(a.19,a.1e,a.6V),$.1m(8,a),8}});N G={6W:B.1f.7m&&B.1f.7l,1C:K(){8.R=$("<15>").U("L-2M").1c();1X(N i=1;12>=i;i++){8.R.14($("<15>").U("L-am-"+i))}8.R.1k("1J",$.11(K(){Q.1c()},8)),8.R.1k("2m:5v",K(i){i.3l()})},4z:K(i){8.6W&&(8.4Z&&8.R.1H("L-2M-2f-"+8.4Z),8.8e(),8.R.U("L-2M-2f-"+i),8.4Z=i)},8e:K(){N i=8.3M;i||8.4a(),8.3F={V:8.R.83(),X:8.R.84()},i||8.3z()},4a:K(){8.3M||($(25.4X).14(8.R),8.3M=!0)},3z:K(){8.3M&&(8.R.3z(),8.3M=!1)},1d:K(i,e){8.2E=!0,8.4a(),8.6y();N t=1b.1i&&1b.1i.13.19.1Q.2M.1d||0,s=("2X"==$.1e(e)?e:t)||0;8.R.29(!0).4b(s,1,i)},1c:K(i,e){8.2E=!1;N t=1b.1i&&1b.1i.13.19.1Q.2M.1c||0,s=("2X"==$.1e(e)?e:t)||0;8.R.29(!0).7G(s||0,$.11(K(){8.3z(),i&&i()},8))},6y:K(){17(8.6W){8.3F||8.8e();N i=1b.1i,e=0;i&&"1P"==i.1D&&i.5b(K(){e=i.4H(Q.1Z.V)}),8.R.1f({1p:Q.3N.1p+0.5*Q.1Z.X-0.5*8.3F.X-0.5*e,1r:Q.3N.1r+0.5*Q.1Z.V-0.5*8.3F.V})}}},5d={4i:!1,an:!0,1C:K(){Q.1C(),8.4i||8.ao()},ao:K(){8.5W||$(25.4r).1k("1J",".2m[4G]",8.5W=$.11(8.8f,8)).1k("1J",8.8g=$.11(8.8h,8))},cG:K(){8.5W&&($(25.4r).1t("1J",".2m[4G]",8.5W).1t("1J",8.8g),8.8g=1o,8.5W=1o)},8h:K(i){1b.6T({x:i.4h,y:i.5U})},8f:K(i){17(!8.4i){i.3W(),i.3l();N e=i.cH;8.8h(i),5d.1d(e)}},1d:K(b){17(8.4i){Y 8.8i.3I(5d,3U.3V(2c)),1q 0}N c=2c[1]||{},1w=2c[2];2c[1]&&"2X"==$.1e(2c[1])&&(1w=2c[1],c={});N d=[],ap,4s=2v.4s(b);3g(ap=$.1e(b)){1L"4K":1L"cI":N f=38 4L(b,c),5X="24-2m-5c-19";17(f.5c){17(4s){N g=$(\'.2m[24-2m-5c="\'+$(b).24("2m-5c")+\'"]\'),h={};g.cJ("["+5X+"]").1v(K(i,a){$.1m(h,8d("({"+($(a).2P(5X)||"")+"})"))}),g.1v(K(i,e){1w||e!=b||(1w=i+1),d.2Y(38 4L(e,$.1m({},h,c)))})}}2n{N h={};4s&&$(b).31("["+5X+"]")&&($.1m(h,8d("({"+($(b).2P(5X)||"")+"})")),f=38 4L(b,$.1m({},h,c))),d.2Y(f)}3C;1L"aq":$.1v(b,K(i,e){N t=38 4L(e,c);d.2Y(t)})}N j={6J:{1E:!1}},8j=d[0].19.1s;$.1v(d,K(i,e){e.1E&&(j.6J.1E=!0),i>0&&e.19.1s!=8j&&(e.19.1s=8j)}),$.1v(d,K(i,e){e=$.1m(e,j)}),(!1w||1>1w)&&(1w=1),1w>d.1y&&(1w=d.1y);N k;4s&&(k=1b.ad(b))?Q.4B(k):Q.2L(d,1w)},8i:K(){K i(e){N t,s=$.1e(e);17("4K"==s){t=e}2n{17("aq"==s&&e[0]){t=i(e[0])}2n{17(2v.4s(e)&&$(e).2P("4G")){N t=$(e).2P("4G")}2n{t=e.1x?e.1x:!1}}}Y t}Y K(e){17(8.an){N t=i(e);t&&(1l.4S.4G=t)}}}()};(1u.1T&&7>1u.1T||"2X"==$.1e(1u.4q)&&3>1u.4q||1u.5t&&"2X"==$.1e(1u.4M)&&9w.18>1u.4M)&&(5d.1d=5d.8i);N H={1C:K(i){8.R=i,8.2r=[],8.3r="5S",8.1N={1n:{},2k:{},1h:{}},8.3h(),8.ar()},3h:K(){8.R.14(8.34=$("<15>").U("L-1h-34").14(8.8k=$("<15>").U("L-1h-cK").14(8.23=$("<15>").U("L-1h-1a L-1h-1a-1B").14(8.as=$("<15>").U("L-1h-1a-1M").14($("<15>").U("L-1h-1a-1M-1K")).14($("<15>").U("L-1h-1a-1M-2T")))).14(8.5Y=$("<15>").U("L-1h-6X").14(8.5Z=$("<15>").U("L-1h-4U"))).14(8.2B=$("<15>").U("L-1h-1a L-1h-1a-1z").14(8.at=$("<15>").U("L-1h-1a-1M").14($("<15>").U("L-1h-1a-1M-1K")).14($("<15>").U("L-1h-1a-1M-2T"))))))},ar:K(){8.8k.8f(".L-1n","1J",$.11(K(i){i.3W();N e=$(i.4t).cL(".L-1n")[0],t=e&&$(e).24("L-1w");t&&(8.8l(t),Q.4B(t))},8)),8.8k.3m("1J",K(i){i.3W()}),8.23.3m("1J",$.11(8.au,8)),8.2B.3m("1J",$.11(8.av,8))},2L:K(i){8.2x();N e="3p",t=!1;$.1v(i,$.11(K(i,s){"5S"==s.19.1h&&(e="5S"),s.19.1h||(t=!0)},8)),8.aw(e),8.8m=t,8.8m=!0,$.1v(i,$.11(K(i,e){8.2r.2Y(38 7a(e,i+1))},8)),8.7J()},2x:K(){$.1v(8.2r,K(i,e){e.1F()}),8.2r=[],8.1A=-1,8.3S=-1},aw:K(i){8.3r&&Q.R.1H("L-1h-"+8.3r),Q.R.U("L-1h-"+i),8.3r=i},2Z:K(){Q.R.1H("L-1h-2s").U("L-1h-3b"),8.4i=!0},3i:K(){Q.R.1H("L-1h-3b").U("L-1h-2s"),8.4i=!1},2s:K(){Y!8.4i},3b:K(){Y 8.4i},8n:K(){N i=Q.R,e=8.1N,t=8.3r,s="3p"==t,n=s?"1p":"1r",o=s?"1r":"1p",a=s?"3v":"1r",h=s?"1p":"3L",r=s?"V":"X",d=s?"X":"V",l={1r:"3L",3L:"1r",1p:"3v",3v:"1p"};8.R.1H("L-1h-6u");N u=i.31(":1V");17(u||i.1d(),8.3b()&&8.3i(),!8.R.31(":1V")||2>8.2r.1y||8.8m){Y 8.2Z(),$.1m(8.1N.1h,{V:0,X:0}),u||i.1c(),8.R.U("L-1h-6u"),1q 0}8.3i();N c=8.23,p=8.2B,f=8.5Y,v=z.5s(),m=8.R["8o"+2v.3c.3x(d)](),g=2w(8.5Y.1f("5T-"+n))||0,w=1j.2o(m-2*g,0),b=2w(8.5Y.1f("5T-"+o))||0,y=(2w(8.R.1f("2F-"+a))||0)+(2w(8.R.1f("2F-"+h))||0);$.1m(e.1h,{X:m+y,V:v[s?"V":"X"],cM:g}),$.1m(e.1n,{X:w,V:w}),$.1m(e.2k,{V:w+2*b,X:m}),e.3Q={1B:{V:p["8o"+2v.3c.3x(r)](),6Y:2w(c.1f("2F-"+o))||0,6Z:2w(c.1f("2F-"+l[o]))||0},1z:{V:p["8o"+2v.3c.3x(r)](),6Y:2w(p.1f("2F-"+o))||0,6Z:2w(p.1f("2F-"+l[o]))||0}};N x=v[r],k=e.2k.V,f=8.2r.1y;e.1h.V=x,e.3Q.2s=f*k/x>1;N C=x,W=e.3Q,S=W.1B,M=W.1z,T=S.6Y+S.V+S.6Z+M.6Y+M.V+M.6Z;e.3Q.2s&&(C-=T),C=1j.ax(C/k)*k;N I=f*k;C>I&&(C=I);N P=C+(e.3Q.2s?T:0);e.4j=C/k,8.60="1i",1>=e.4j&&(C=x,P=x,e.3Q.2s=!1,8.60="6y"),e.1S=1j.63(f*k/C),e.34={V:P+1,X:m},e.6X={V:C,X:m},e.4U={V:f*k+1,X:m},u||i.1c(),8.R.U("L-1h-6u")},1c:K(){8.2Z(),8.1h.1c(),8.2E=!1},9E:K(){N i="3p"==8.3r;Y{V:i?8.1N.1h.V:8.1N.1h.X,X:i?8.1N.1h.X:8.1N.1h.V}},7J:K(){17(8.8n(),!8.3b()){N i=$.1m({},8.1N),e="3p"==8.3r;$.1v(8.2r,K(i,e){e.51()}),8.23[i.3Q.2s?"1d":"1c"](),8.2B[i.3Q.2s?"1d":"1c"](),8.5Y.1f({V:i.6X[e?"V":"X"],X:i.6X[e?"X":"V"]}),8.5Z.1f({V:i.4U[e?"V":"X"],X:i.4U[e?"X":"V"]});N t={V:i.34[e?"V":"X"],X:i.34[e?"X":"V"]};t["2F-"+(e?"1r":"1p")]=1j.35(-0.5*i.34.V)+"6R",t["2F-"+(e?"1p":"1r")]=0,8.34.1f(t),8.1A&&8.5E(8.1A,!0)}},8p:K(i){17(!(1>i||i>8.1N.1S||i==8.3S)){N e=8.1N.4j*(i-1)+1;8.5E(e)}},au:K(){8.8p(8.3S-1)},av:K(){8.8p(8.3S+1)},1d:K(i){N e=0>8.1A;1>i&&(i=1);N t=8.2r.1y;i>t&&(i=t),8.1A=i,8.8l(i),("1i"!=8.60||8.3S!=1j.63(i/8.1N.4j))&&8.5E(i,e)},5E:K(i,e){17(8.8n(),!8.3b()){N t,s="3p"==8.3r,n=z.5s()[s?"V":"X"],o=0.5*n,a=8.1N.2k.V;17("1i"==8.60){N h=1j.63(i/8.1N.4j);8.3S=h,t=-1*a*(8.3S-1)*8.1N.4j;N r="L-1h-1a-1M-3b";8.as[(2>h?"1G":"1F")+"2U"](r),8.at[(h>=8.1N.1S?"1G":"1F")+"2U"](r)}2n{t=o+-1*(a*(i-1)+0.5*a)}N h=1b.1i,d={},l={};d[s?"1p":"1r"]=0,l[s?"1r":"1p"]=t+"6R",8.5Z.29(!0).1f(d).ay(l,e?0:h?h.13.19.1Q.1h.4U||0:0,$.11(K(){8.az()},8))}},az:K(){N i,e;17(8.1A&&8.1N.2k.V&&!(1>8.2r.1y)){17("1i"==8.60){17(1>8.3S){Y}i=(8.3S-1)*8.1N.4j+1,e=1j.3d(i-1+8.1N.4j,8.2r.1y)}2n{"3p"==8.3r;N t=1j.63(8.1N.1h.V/8.1N.2k.V);i=1j.2o(1j.ax(1j.2o(8.1A-0.5*t,0)),1),e=1j.63(1j.3d(8.1A+0.5*t)),e>8.2r.1y&&(e=8.2r.1y)}1X(N s=i;e>=s;s++){8.2r[s-1].2L()}}},8l:K(i){8.5Z.7T(".L-1n-8q").1H("L-1n-8q");N e=i&&8.2r[i-1];e&&e.aA()},cN:K(){8.1A&&8.4B(8.1A)}};$.1m(7a.3J,{1C:K(i,e){8.13=i,8.cO={},8.1A=e,8.aB()},aB:K(){8.1n=$("<15>").U("L-1n").24("L-1w",8.1A)},3h:K(){17(!8.2k){N i=8.13.19;H.5Z.14(8.2k=$("<15>").U("L-1n-cP").14(8.1n.14(8.64=$("<15>").U("L-1n-34")))),"2e"==8.13.1e&&8.1n.U("L-2L-1n").24("1n",{13:8.13,4P:i.1n||8.13.1x});N e=i.1n&&i.1n.2T;e&&8.1n.14($("<15>").U("L-1n-2T L-1n-2T-"+e));N t;8.1n.14(t=$("<15>").U("L-1n-28").14($("<15>").U("L-1n-28-1K")).14(8.4g=$("<15>").U("L-1n-4g").14($("<15>").U("L-1n-4g-1K")).14(8.2M=$("<15>").U("L-1n-2M").1c().14($("<15>").U("L-1n-2M-am")))).14($("<15>").U("L-1n-28-cQ"))),8.1n.14($("<15>").U("L-1n-cR")),8.51()}},1F:K(){8.2k&&(8.2k.1F(),8.2k=1o,8.2e=1o),8.65&&(8.65.2K(),8.65=1o),8.70&&(8.70.2K(),8.70=1o),8.5e=!1,8.aC=!0,8.13=1o,8.71()},2L:K(){17(!(8.8r||8.5e||8.aC)){8.64||8.3h(),8.5e=!0;N i=8.13.19.1n,e=i&&"6t"==$.1e(i)?8.13.1x:i||8.13.1x;8.66=e,e&&("2y"==8.13.1e?e==i?(8.66=e,8.72(8.66)):8.70=38 9m(8.13.1x,$.11(K(i){8.66=i,8.72(i)},8),$.11(K(){8.8s()},8)):8.72(8.66))}},aA:K(){8.1n.U("L-1n-8q")},72:K(i){8.64.a2(8.2e=$("<2C>").U("L-1n-2e").2P({4P:i}).1f({3n:0.cS})),8.aD(),8.65=38 D(8.2e[0],$.11(K(i){N e=i.2C;8.2k&&8.5e&&(8.8r=!0,8.5e=!1,8.3F={V:e.2W,X:e.6n},8.51(),8.1d())},8),$.11(K(){8.8s()},8),{5z:8.13.19.7C})},8s:K(){8.8r=!0,8.5e=!1,8.1n.U("L-1n-2J"),8.2e.1c(),8.64.14($("<15>").U("L-1n-2e")),8.1d()},aD:K(){17(G.6W&&8.13.19.2M){8.71();N i=8.13.19.1Q.1n;8.3X=3K($.11(K(){8.2M.29(!0).4b(i.1d||0,1)},8),8.13.19.7D||0)}},1d:K(){8.71();N i=8.13.19.1Q.1n;8.4g.29(!0).7A(i.7A).4b(i.1d,0)},71:K(){8.3X&&(4Q(8.3X),8.3X=1o)},51:K(){17(8.2k){N i="3p"==H.3r;17(8.2k.1f({V:H.1N.2k[i?"V":"X"],X:H.1N.2k[i?"X":"V"]}),8.2k.1f({1p:i?0:H.1N.2k.V*(8.1A-1),1r:i?H.1N.2k.V*(8.1A-1):0}),8.64){N e=H.1N.1n;17(8.1n.1f({V:e.V,X:e.X,"2F-1p":1j.35(-0.5*e.X),"2F-1r":1j.35(-0.5*e.V),"2F-3v":0,"2F-3L":0}),8.3F){N t,s={V:e.V,X:e.X},n=1j.2o(s.V,s.X),o=$.1m({},8.3F);17(o.V>s.V&&o.X>s.X){t=A.4u(s,o);N a=1,h=1;t.V<s.V&&(a=s.V/t.V),t.X<s.X&&(h=s.X/t.X);N r=1j.2o(a,h);r>1&&(t.V*=r,t.X*=r),$.1v("V X".4N(" "),K(i,e){t[e]=1j.35(t[e])})}2n{t=A.4u(8.3F,o.V<s.V||o.X<s.X?{V:n,X:n}:s)}N d=1j.35(0.5*s.V-0.5*t.V),l=1j.35(0.5*s.X-0.5*t.X);8.2e.59("3e").1f($.1m({},t,{1p:l,1r:d}))}}}}});N J={67:["1P","2z","1R"],1D:!1,8t:[".L-1g-R",".L-1g",".L-1g > .L-2j",".L-1g > .L-2j .L-2j-2D"].6f(", "),1C:K(){$.1v(8.67,$.11(K(i,e){8[e].1C()},8)),Q.R.U("L-1s-1R-3R L-1s-1P-3R")},2q:K(i){8.1D&&(Q.R.1H("L-1l-1s-"+8.1D),44.R.1H("L-28-1s-"+8.1D)),Q.R.U("L-1l-1s-"+i),44.R.U("L-28-1s-"+i),8.8u&&8.1D&&8.1D!=i&&(8[8.1D].2Z(),8[i].3i(),J[i].1d()),8.1D=i},6w:K(){B.1U&&8.1d()},3i:K(){$.1v(8.67,$.11(K(i,e){J[e][e==8.1D?"3i":"2Z"]()},8)),8.8u=!0},2Z:K(){$.1v(8.67,$.11(K(i,e){J[e].2Z()},8)),8.8u=!1},4A:K(i,e){J[8.1D].4A(i,e)},1d:K(i,e){J[8.1D].1d(i,e)},1c:K(i,e){J[8.1D].1c(i,e)},53:K(){$.1v(8.67,$.11(K(i,e){J[e].53()},8))},9B:K(){N i=1b.1i;i&&8.2q(i.1D)}};Y J.1P={1C:K(){8.3h(),8.2b=-1},3h:K(){Q.1W.14(8.23=$("<15>").U("L-1a L-1a-1B L-1a-1B-1P L-4F-1s").14($("<15>").U("L-1a-1M").14($("<15>").U("L-1a-1M-1K")).14($("<15>").U("L-1a-1M-2T")))).14(8.2B=$("<15>").U("L-1a L-1a-1z L-1a-1z-1P L-4F-1s").14($("<15>").U("L-1a-1M").14($("<15>").U("L-1a-1M-1K")).14($("<15>").U("L-1a-1M-2T")))).14(8.4k=$("<15>").U("L-1O L-1O-1P").14($("<15>").U("L-1O-1K")).14($("<15>").U("L-1O-2T"))),1u.1T&&7>=1u.1T&&8.23.1G(8.2B).1G(8.4k).1c(),8.4k.1k("1J",$.11(K(i){i.3l(),Q.1c()},8)),8.23.1k("1J",$.11(K(i){Q.1B(),8.2u(i)},8)),8.2B.1k("1J",$.11(K(i){Q.1z(),8.2u(i)},8))},3i:K(){8.3m()},2Z:K(){8.3T()},53:K(){Q.1Y.2x("1s-1P"),8.4I=-1,8.4J=-1,8.2b=-1,8.aE(),8.3G()},aE:K(){N i=8.23.1G(8.2B);i.29(!0).59("3e")},3m:K(){8.2V||(8.3T(),Q.2g.1k("5f",".L-2a",8.2V=$.11(8.5g,8)),B.1U||(Q.R.1k("2H",8.4l=$.11(8.1d,8)).1k("2I",8.73=$.11(8.1c,8)),Q.R.1k("2G",8.74=$.11(K(i){N e=i.4h,t=i.5U;8.4m||t==8.4J&&e==8.4I||(8.4I=e,8.4J=t,8.1d(),8.3H())},8)),Q.2g.1k("2G",".L-2a",8.4n=$.11(8.2u,8)).1k("2I",".L-2a",8.5h=$.11(8.3G,8)).1k("2H",".L-2a",8.5i=$.11(8.5j,8)),Q.R.1k("2H",".L-1a",8.5k=$.11(8.5l,8)).1k("2I",".L-1a",8.5m=$.11(8.5n,8)),$(1l).1k("3A",8.5o=$.11(8.4e,8))))},3T:K(){8.2V&&(Q.2g.1t("5f",".L-2a",8.2V),8.2V=1o,8.4l&&(Q.R.1t("2H",8.4l).1t("2I",8.73).1t("2G",8.74),Q.2g.1t("2G",".L-2a",8.4n).1t("2I",".L-2a",8.5h).1t("2H",".L-2a",8.5i),Q.R.1t("2H",".L-1a",8.5k).1t("2I",".L-1a",8.5m),$(1l).1t("3A",8.5o),8.4l=1o))},4A:K(i,e){N t=1b.1i;17(!t){Y i&&i(),1q 0}N s=Q.R.31(":1V");s||Q.R.1d();N n=8.23.2P("3e");8.23.59("3e");N o=2w(8.23.1f("2F-1p"));8.23.2P({3e:n}),s||Q.R.1c();N a=t.3P||0,h=8.23.1G(8.2B),r={"2F-1p":o-0.5*a},d="2X"==$.1e(e)?e:1b.1i&&1b.1i.13.19.1Q.1g.1d||0;8.6z&&(d=0),h.29(!0).ay(r,d,i),8.23[(Q.6B()?"1F":"1G")+"2U"]("L-1a-3b"),8.2B[(Q.6D()?"1F":"1G")+"2U"]("L-1a-3b"),h[(2>t.2R?"1G":"1F")+"2U"]("L-1a-3R"),i&&i()},4e:K(){8.2b=$(1l).5p()},2u:K(i){17(!B.1U){N e=8.3j(i),t=2v.3c.3x(e),s=e?Q["5q"+t]():!1;17(e!=8.2l||s!=8.3k){3g(8.2l=e,8.3k=s,Q.1W[(s?"1G":"1F")+"2U"]("L-1I-4o"),e){1L"1B":Q.1W.U("L-1I-1B").1H("L-1I-1z");3C;1L"1z":Q.1W.U("L-1I-1z").1H("L-1I-1B")}}}},3G:K(){Q.1W.1H("L-1I-4o L-1I-1B L-1I-1z"),8.2l=!1},5g:K(i){17(!(i.8v>1)){17(1==1b.1S.1y){Y Q.1c(),1q 0}N e=8.3j(i);Q[e](),8.2u(i)}},5j:K(i){8.2u(i)},3j:K(i){N e=(8.2b>-1?8.2b:8.2b=$(1l).5p(),i.4h-Q.3N.1r-8.2b),t=Q.1Z.V;Y 0.5*t>e?"1B":"1z"},5l:K(i){8.4m=!0,8.2l=8.3j(i),8.3k=Q["5q"+2v.3c.3x(8.2l)](),8.4p()},5n:K(){8.4m=!1,8.2l=!1,8.3k=!1,8.3H()},1d:K(i){Y 8.2E?(8.3H(),"K"==$.1e(i)&&i(),1q 0):(8.2E=!0,8.3H(),Q.R.U("L-1V-1P-1s").1H("L-3R-1P-1s"),1u.1T&&7>=1u.1T&&8.23.1G(8.2B).1G(8.4k).1d(),"K"==$.1e(i)&&i(),1q 0)},1c:K(i){N e=1b.1i&&1b.1i.13.1e;Y!8.2E||e&&("3a"==e||"2y"==e)?("K"==$.1e(i)&&i(),1q 0):(8.2E=!1,Q.R.1H("L-1V-1P-1s").U("L-3R-1P-1s"),"K"==$.1e(i)&&i(),1q 0)},4p:K(){B.1U||Q.1Y.2x("1s-1P")},3H:K(){B.1U||(8.4p(),Q.1Y.2q("1s-1P",$.11(K(){8.1c()},8),Q.13?Q.13.19.7F:0))}},J.1R={1C:K(){},3i:K(){8.3m()},2Z:K(){8.3T()},3m:K(){8.2V||(8.3T(),Q.2g.1k("5f",".L-1g",8.2V=$.11(8.5g,8)),Q.2g.1k("1J",".L-1g .L-1O",$.11(K(i){i.3l(),Q.1c()},8)).1k("1J",".L-1g .L-1a-1B",$.11(K(i){Q.1B(),8.2u(i)},8)).1k("1J",".L-1g .L-1a-1z",$.11(K(i){Q.1z(),8.2u(i)},8)),Q.R.1k("1J",".L-2a, .L-1h, .L-1h-34",8.75=$.11(8.76,8)),B.1U||(Q.R.1k("2H",".L-1g",8.4l=$.11(8.1d,8)).1k("2I",".L-1g",8.73=$.11(8.1c,8)),Q.R.1k("2G",".L-1g",8.74=$.11(K(i){N e=i.4h,t=i.5U;8.4m||t==8.4J&&e==8.4I||(8.4I=e,8.4J=t,8.1d(),8.3H())},8)),Q.2g.1k("2G",".L-2S, .L-1O",$.11(K(i){i.3W(),8.3G(i)},8)),Q.2g.1k("2G",".L-2S",$.11(K(){8.4p()},8)),Q.2g.1k("2G",".L-1g",8.4n=$.11(8.2u,8)).1k("2I",".L-1g",8.5h=$.11(8.3G,8)).1k("2H",".L-1g",8.5i=$.11(8.5j,8)),Q.R.1k("2H",".L-1a",8.5k=$.11(8.5l,8)).1k("2I",".L-1a",8.5m=$.11(8.5n,8)),$(1l).1k("3A",8.5o=$.11(8.4e,8))))},3T:K(){8.2V&&(Q.2g.1t("5f",".L-1g",8.2V),8.2V=1o,Q.2g.1t("1J",".L-1g .L-1O").1t("1J",".L-1g .L-1a-1B").1t("1J",".L-1g .L-1a-1z"),Q.R.1t("1J",".L-2a, .L-1h, .L-1h-34",8.75),8.4l&&(Q.R.1t("2H",".L-1g",8.4l).1t("2I",".L-1g",8.73).1t("2G",".L-1g",8.74),Q.2g.1t("2G",".L-2S, .L-1O"),Q.2g.1t("2G",".L-2S"),Q.2g.1t("2G",".L-1g-R",8.4n).1t("2I",".L-1g",8.5h).1t("2H",".L-1g",8.5i),Q.R.1t("2H",".L-1a",8.5k).1t("2I",".L-1a",8.5m),$(1l).1t("3A",8.5o),8.4l=1o))},53:K(){Q.1Y.2x("1s-1P"),8.4I=-1,8.4J=-1,8.2b=-1,8.2l=!1,8.3G()},4A:K(i){i&&i()},4e:K(){8.2b=$(1l).5p()},76:K(i){N e=1b.1i;e&&e.13.19.28&&!e.13.19.28.1O||$(i.4t).31(".L-2a, .L-1h, .L-1h-34")&&(i.3l(),i.3W(),Q.1c())},2u:K(i){17(!B.1U){N e=8.3j(i),t=2v.3c.3x(e),s=e?Q["5q"+t]():!1;17((1==1b.1S.1y||1b.1i&&"1O"==1b.1i.13.19.5H)&&(e=!1),e!=8.2l||s!=8.3k){17(8.2l=e,8.3k=s,e){3g(Q.1W[(s?"1G":"1F")+"2U"]("L-1I-4o"),e){1L"1B":Q.1W.U("L-1I-1B").1H("L-1I-1z");3C;1L"1z":Q.1W.U("L-1I-1z").1H("L-1I-1B")}}2n{Q.1W.1H("L-1I-4o L-1I-1B L-1I-1z")}}}},3G:K(){Q.1W.1H("L-1I-4o L-1I-1B L-1I-1z"),8.2l=!1},5g:K(i){17(!(i.8v>1)&&$(i.4t).31(J.8t)){17(1==1b.1S.1y||1b.1i&&"1O"==1b.1i.13.19.5H){Y Q.1c(),1q 0}N e=8.3j(i);Q[e](),8.2u(i)}},5j:K(i){8.2u(i)},3j:K(i){N e=(8.2b>-1?8.2b:8.2b=$(1l).5p(),i.4h-Q.3N.1r-8.2b),t=Q.1Z.V;Y 0.5*t>e?"1B":"1z"},5l:K(i){8.4m=!0,8.2l=8.3j(i),8.3k=Q["5q"+2v.3c.3x(8.2l)](),8.4p()},5n:K(){8.4m=!1,8.2l=!1,8.3k=!1,8.3H()},1d:K(i){Y 8.2E?(8.3H(),"K"==$.1e(i)&&i(),1q 0):(8.2E=!0,8.3H(),Q.R.U("L-1V-1R-1s").1H("L-3R-1R-1s"),"K"==$.1e(i)&&i(),1q 0)},1c:K(i){Y 8.2E?(8.2E=!1,Q.R.1H("L-1V-1R-1s").U("L-3R-1R-1s"),"K"==$.1e(i)&&i(),1q 0):("K"==$.1e(i)&&i(),1q 0)},4p:K(){B.1U||Q.1Y.2x("1s-1R")},3H:K(){B.1U||(8.4p(),Q.1Y.2q("1s-1R",$.11(K(){8.1c()},8),Q.13?Q.13.19.7F:0))}},J.2z={1C:K(){8.3h(),8.2b=-1},3h:K(){Q.1W.14(8.23=$("<15>").U("L-1a L-1a-1B L-1a-1B-2z").14($("<15>").U("L-1a-1M").14($("<15>").U("L-1a-1M-1K")).14($("<15>").U("L-1a-1M-2T")))).14(8.2B=$("<15>").U("L-1a L-1a-1z L-1a-1z-2z").14($("<15>").U("L-1a-1M").14($("<15>").U("L-1a-1M-1K")).14($("<15>").U("L-1a-1M-2T")))).14(8.4k=$("<15>").U("L-1O L-1O-2z").14($("<15>").U("L-1O-1K")).14($("<15>").U("L-1O-2T"))),1u.1T&&7>=1u.1T&&8.23.1G(8.2B).1G(8.4k).1c(),8.4k.1k("1J",$.11(K(i){i.3l(),Q.1c()},8)),8.23.1k("1J",$.11(K(i){Q.1B(),8.2u(i)},8)),8.2B.1k("1J",$.11(K(i){Q.1z(),8.2u(i)},8))},3i:K(){8.3m()},2Z:K(){8.3T()},53:K(){Q.1Y.2x("1s-2z"),8.4I=-1,8.4J=-1,8.2b=-1,8.3G()},3m:K(){8.2V||(8.3T(),Q.R.1k("5f",".L-1g",8.2V=$.11(8.5g,8)),Q.R.1k("1J",".L-2a, .L-1h, .L-1h-34",8.75=$.11(8.76,8)),B.1U||(Q.2g.1k("2G",".L-1g",8.4n=$.11(8.2u,8)).1k("2I",".L-1g",8.5h=$.11(8.3G,8)).1k("2H",".L-1g",8.5i=$.11(8.5j,8)),Q.R.1k("2H",".L-1a",8.5k=$.11(8.5l,8)).1k("2I",".L-1a",8.5m=$.11(8.5n,8)),$(1l).1k("3A",8.5o=$.11(8.4e,8))))},3T:K(){8.2V&&(Q.R.1t("5f",".L-1g",8.2V),8.2V=1o,Q.R.1t("1J",".L-2a, .L-1h, .L-1h-34",8.75),8.4n&&(Q.2g.1t("2G",".L-1g",8.4n).1t("2I",".L-1g",8.5h).1t("2H",".L-1g",8.5i),Q.R.1t("2H",".L-1a",8.5k).1t("2I",".L-1a",8.5m),$(1l).1t("3A",8.5o),8.4n=1o))},4A:K(i){N e=1b.1i;17(!e){Y i&&i(),1q 0}N t=8.23.1G(8.2B);8.23[(Q.6B()?"1F":"1G")+"2U"]("L-1a-3b"),8.2B[(Q.6D()?"1F":"1G")+"2U"]("L-1a-3b"),t[(2>e.2R?"1G":"1F")+"2U"]("L-1a-3R"),i&&i()},4e:K(){8.2b=$(1l).5p()},76:K(i){N e=1b.1i;e&&e.13.19.28&&!e.13.19.28.1O||$(i.4t).31(".L-2a, .L-1h, .L-1h-34")&&(i.3l(),i.3W(),Q.1c())},2u:K(i){17(!B.1U){N e=8.3j(i),t=2v.3c.3x(e),s=e?Q["5q"+t]():!1;17((1==1b.1S.1y||1b.1i&&"1O"==1b.1i.13.19.5H)&&(e=!1),e!=8.2l||s!=8.3k){17(8.2l=e,8.3k=s,e){3g(Q.1W[(s?"1G":"1F")+"2U"]("L-1I-4o"),e){1L"1B":Q.1W.U("L-1I-1B").1H("L-1I-1z");3C;1L"1z":Q.1W.U("L-1I-1z").1H("L-1I-1B")}}2n{Q.1W.1H("L-1I-4o L-1I-1B L-1I-1z")}}}},3G:K(){Q.1W.1H("L-1I-4o L-1I-1B L-1I-1z"),8.2l=!1},5g:K(i){17(!(i.8v>1)&&$(i.4t).31(J.8t)){17(1==1b.1S.1y||1b.1i&&"1O"==1b.1i.13.19.5H){Y Q.1c(),1q 0}N e=8.3j(i);Q[e](),8.2u(i)}},5j:K(i){8.2u(i)},3j:K(i){N e=(8.2b>-1?8.2b:8.2b=$(1l).5p(),i.4h-Q.3N.1r-8.2b),t=Q.1Z.V;Y 0.5*t>e?"1B":"1z"},1d:K(){1u.1T&&7>=1u.1T&&8.23.1G(8.2B).1G(8.4k).1d()},1c:K(){},5l:K(i){8.4m=!0,8.2l=8.3j(i),8.3k=Q["5q"+2v.3c.3x(8.2l)]()},5n:K(){8.4m=!1,8.2l=!1,8.3k=!1},4p:K(){}},$(25).65(K(){5d.1C()}),q});',62,799,'||||||||this||||||||||||||||||||||||||||||||||||||function|fr||var|||Window|element|||addClass|width||height|return|||proxy||view|append|div||if||options|side|Pages|hide|show|type|css|content|thumbnails|page|Math|on|window|extend|thumbnail|null|top|void|left|ui|off|Browser|each|position|url|length|next|_position|previous|initialize|_ui|caption|remove|add|removeClass|hovering|click|background|case|button|_vars|close|fullclick|effects|inside|pages|IE|mobileTouch|visible|_box|for|timers|_boxDimensions||116|105|_previous|data|document|cache||overlay|stop|container|_scrollLeft|arguments||image|skin|_pages|101|_m|stroke|thumbnailFrame|_hoveringSide|fresco|else|max|100|set|_thumbnails|enabled|111|_onMouseMove|_|parseInt|clear|vimeo|outside|queue|_next|img|color|_visible|margin|mousemove|mouseenter|mouseleave|error|abort|load|spinner|114|110|attr|115|_total|info|icon|Class|_onMouseUpHandler|naturalWidth|number|push|disable||is|||wrapper|round|||new||youtube|disabled|String|min|style|dimensions|switch|build|enable|_getEventSide|_mayClickHoveringSide|preventDefault|bind|opacity|overflow|horizontal|_tracking|_orientation|109|112|_i|bottom|indexOf|capitalize|charAt|detach|scroll|views|break|108|102|_dimensions|_onMouseLeave|startTimer|apply|prototype|setTimeout|right|_attached|_boxPosition|104|_infoHeight|sides|hidden|_page|unbind|_slice|call|stopPropagation|_delay|html|_timers|||_xhr|keyboard|Overlay||||||attach|fadeTo|queues|_showingType|_onScroll|uid|loading|pageX|_disabled|ipp|_close|_showHandler|_hoveringSideButton|_onMouseMoveHandler|clickable|clearTimer|Android|documentElement|isElement|target|within|com|id|defaults|loop|setSkin|adjustPrevNext|setPosition|103|has|previousInside|toggle|href|_getInfoHeight|_x|_y|string|View|WebKit|split|_ipos|src|clearTimeout|detect|location|callback|slide|create|overlap|body|no|_skin||resize||reset|||121|count||removeAttr|playerIframe|_whileVisible|group|_Fresco|_loading|mouseup|_onMouseUp|_onMouseLeaveHandler|_onMouseEnterHandler|_onMouseEnter|_onSideMouseEnterHandler|_onSideMouseEnter|_onSideMouseLeaveHandler|_onSideMouseLeave|_onScrollHandler|scrollLeft|may|getURIData|viewport|MobileSafari|120|mousewheel|svg|successCallback|errorCallback|method|intervals|hex2fill|Canvas|radius|moveTo|get|extension|onClick|preload|initialTypeOptions|maxWidth|maxHeight|_first|Fire|_onWindowResizeHandler|keyCode|118|check|vertical|padding|pageY|_handleTracking|_delegateHandler|_dgo|_thumbs|_slide|_mode|||ceil|thumbnailWrapper|ready|_url|_modes|detectExtension|exec|parseFloat|IEMobile|originalEvent|in|substr|join|canvas|getContext|touch|onload|success|_time|_polling|naturalHeight|substring|arc|delete|zA|150|boolean|measured|showing|_onWindowResize|adjustToScroll|center|opening|_show|mayPrevious|getSurroundingIndexes|mayNext|_onKeyUpHandler|vz|_fullClick|span|text|grouped|infoInside|preloading|loaded|preloadReady|_spinnerDelay|imageReady|_track|px|_noOverflow|setXY|_tracking_timer|_data|supported|thumbs|marginLeft|marginRight|vimeoThumbnail|_clearDelay|_load|_hideHandler|_mousemoveHandler|_delegateOverlayCloseHandler|_delegateOverlayClose|define|Timers|replace|Thumbnail|version|Skins|Gecko|Opera|opera|Chrome|Array|slice|toUpperCase|PI|animation|transform|http|test|supports|pollFallbackAfter|poll|fallback|_fallbackImg|180|expand|Z0|api|Options|300|delay|esc|loadedMethod|spinnerDelay|sync|uiDelay|fadeOut|getScrollDimensions|video|fitToViewport|updateBoxDimensions|fitToBox|Keyboard|removeAll|_onKeyDownHandler|getKeyByKeyCode|_shown|removeStyle|119|find|showhide|clone|infoPadder|nextInside|infoPadderInside|positionInside|preloaded|_markAsLoaded|setDimensions|outerWidth|outerHeight|_abortSpinnerDelay|updateUI|hideInactive|removeVideo|removeTracking|vimeoReady|_positionOutside|updatePositions|eval|updateDimensions|delegate|_setClickXYHandler|setClickXY|showFallback|firstUI|_slider|setActive|_disabledGroup|updateVars|inner|moveToPage|active|_loaded|_error|_validClickTargetSelector|_enabled|which|typeof|jQuery|Fresco|baseToString|match|toLowerCase|RegExp|AppleWebKit|ChromeMobile|CrMo|navigator|nodeType|wheelDelta|detail|frescoEaseInCubic|prefix|createElement|createElementNS|2000|DocumentTouch|detectMobileTouch|Image|isLoaded|1000|undefined|_usedPollFallback|_calledSuccess|_calledError|red|green||blue|000|fff|init||drawRoundedRectangle||||fillRect|x1|y1|x2|y2|dPA|fillStyle|absolute|clearAll|extensions|youtu|vi|VimeoThumbnail|https|protocol|getJSON|oembed|json|thumbnail_url|autoplay|1280|mobile|533|setShowingType|startObservingResize|orientationchange|stopObservingResize|update|scrollTop|getBoxDimensions|getDimensions|_hide|_reset|stopHideQueue|keydown|onKeyDown|keyup|onKeyUp|117|vis|vb|imp|random|_to|addStyle|Page|_created|padder|pos|closeInside|posInside|captionInside|_getSurroundingPages|preloadSurroundingImages|prepend|isVideo|raise|stopInactive|hasClass|visibility|updateForced|_contentDimensions|_backgroundDimensions|auto|getXYP|getPositionInActivePageGroup|handleTracking|clearTrackingTimer|startTracking|stopTracking|isTracking|_xy|setXYP|_xyp|spin|_fallback|startDelegating|object_type|array|startObserving|_previous_button|_next_button|previousPage|nextPage|setOrientation|floor|animate|loadCurrentPage|activate|preBuild|_removed|fadeInSpinner|resetPrevNext|amd|jquery|clientWidth|innerWidth|innerHeight|attachEvent|MSIE|KHTML|rv|Apple|Mobile|Safari|userAgent|Event|trigger|isPropagationStopped|isDefaultPrevented|DOMMouseScroll|easing|frescoEaseInSine|cos|frescoEaseOutSine|sin|Webkit|Moz|ms|Khtml|prefixed|www|w3|org|createSVGRect|try|ontouchstart|instanceof||catch|Win|Mac|Linux|platform|complete|4000|20000|500|onerror|rgba|255|360|hue|saturation|brightness|0123456789abcdef|hex2rgb|getSaturatedBW|mergedCorner|beginPath|closePath|fill|createFillStyle|toFixed|isArray|Gradient|addColorStops|createLinearGradient|05|bmp|gif|jpeg|jpg|png|webp|inArray|watch|embed|VimeoReady|440|3000|title|byline|portrait|controls|enablejsapi|hd|iv_load_policy|modestbranding|rel|vq|hd1080|720|offset|box|ltIE|closing|fromCharCode|toString|em|106|4200|0000099999909999009999900999000999000999|00000900000090009090000090009090009090009|00000900000090009090000090000090000090009|00000999990099990099990009990090000090009|00000900000090900090000000009090000090009|00000900000090090090000090009090009090009|0000090000009000909999900999000999000999000000|rs|900|107|123|125|positionOutside|lastChild|about|blank|removed|fullClick|none|display|_padding|Tracking|getLoadingCount|setTracking|clearTracking|grep|stopDelegating|currentTarget|object|filter|slider|closest|paddingTop|refresh|_dimension|frame|border|state|0001'.split('|'),0,{}));






!function($){"use strict";$.fn.meanmenu=function(e){var n={meanMenuTarget:jQuery(this),meanMenuContainer:"body",meanMenuClose:"X",meanMenuCloseSize:"18px",meanMenuOpen:"<span /><span /><span />",meanRevealPosition:"right",meanRevealPositionDistance:"0",meanRevealColour:"",meanScreenWidth:"480",meanNavPush:"",meanShowChildren:!0,meanExpandableChildren:!0,meanExpand:"+",meanContract:"-",meanRemoveAttrs:!1,onePage:!1,meanDisplay:"block",removeElements:""};e=$.extend(n,e);var a=window.innerWidth||document.documentElement.clientWidth;return this.each(function(){var n=e.meanMenuTarget,t=e.meanMenuContainer,r=e.meanMenuClose,i=e.meanMenuCloseSize,s=e.meanMenuOpen,u=e.meanRevealPosition,m=e.meanRevealPositionDistance,l=e.meanRevealColour,o=e.meanScreenWidth,c=e.meanNavPush,v=".meanmenu-reveal",h=e.meanShowChildren,d=e.meanExpandableChildren,y=e.meanExpand,j=e.meanContract,Q=e.meanRemoveAttrs,f=e.onePage,g=e.meanDisplay,p=e.removeElements,C=!1;(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Blackberry/i)||navigator.userAgent.match(/Windows Phone/i))&&(C=!0),(navigator.userAgent.match(/MSIE 8/i)||navigator.userAgent.match(/MSIE 7/i))&&jQuery("html").css("overflow-y","scroll");var w="",x=function(){if("center"===u){var e=window.innerWidth||document.documentElement.clientWidth,n=e/2-22+"px";w="left:"+n+";right:auto;",C?jQuery(".meanmenu-reveal").animate({left:n}):jQuery(".meanmenu-reveal").css("left",n)}},A=!1,E=!1;"right"===u&&(w="right:"+m+";left:auto;"),"left"===u&&(w="left:"+m+";right:auto;"),x();var M="",P=function(){M.html(jQuery(M).is(".meanmenu-reveal.meanclose")?r:s)},W=function(){jQuery(".mean-bar,.mean-push").remove(),jQuery(t).removeClass("mean-container"),jQuery(n).css("display",g),A=!1,E=!1,jQuery(p).removeClass("mean-remove")},b=function(){var e="background:"+l+";color:"+l+";"+w;if(o>=a){jQuery(p).addClass("mean-remove"),E=!0,jQuery(t).addClass("mean-container"),jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+e+'">Show Navigation</a><nav class="mean-nav"></nav></div>');var r=jQuery(n).html();jQuery(".mean-nav").html(r),Q&&jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function(){jQuery(this).is(".mean-remove")?jQuery(this).attr("class","mean-remove"):jQuery(this).removeAttr("class"),jQuery(this).removeAttr("id")}),jQuery(n).before('<div class="mean-push" />'),jQuery(".mean-push").css("margin-top",c),jQuery(n).hide(),jQuery(".meanmenu-reveal").show(),jQuery(v).html(s),M=jQuery(v),jQuery(".mean-nav ul").hide(),h?d?(jQuery(".mean-nav ul ul").each(function(){jQuery(this).children().length&&jQuery(this,"li:first").parent().append('<a class="mean-expand" href="#" style="font-size: '+i+'">'+y+"</a>")}),jQuery(".mean-expand").on("click",function(e){e.preventDefault(),jQuery(this).hasClass("mean-clicked")?(jQuery(this).text(y),jQuery(this).prev("ul").slideUp(300,function(){})):(jQuery(this).text(j),jQuery(this).prev("ul").slideDown(300,function(){})),jQuery(this).toggleClass("mean-clicked")})):jQuery(".mean-nav ul ul").show():jQuery(".mean-nav ul ul").hide(),jQuery(".mean-nav ul li").last().addClass("mean-last"),M.removeClass("meanclose"),jQuery(M).click(function(e){e.preventDefault(),A===!1?(M.css("text-align","center"),M.css("text-indent","0"),M.css("font-size",i),jQuery(".mean-nav ul:first").slideDown(),A=!0):(jQuery(".mean-nav ul:first").slideUp(),A=!1),M.toggleClass("meanclose"),P(),jQuery(p).addClass("mean-remove")}),f&&jQuery(".mean-nav ul > li > a:first-child").on("click",function(){jQuery(".mean-nav ul:first").slideUp(),A=!1,jQuery(M).toggleClass("meanclose").html(s)})}else W()};C||jQuery(window).resize(function(){a=window.innerWidth||document.documentElement.clientWidth,a>o,W(),o>=a?(b(),x()):W()}),jQuery(window).resize(function(){a=window.innerWidth||document.documentElement.clientWidth,C?(x(),o>=a?E===!1&&b():W()):(W(),o>=a&&(b(),x()))}),b()})}}(jQuery);




"function"!==typeof Object.create&&(Object.create=function(f){function g(){}g.prototype=f;return new g});
(function(f,g,k){var l={init:function(a,b){this.$elem=f(b);this.options=f.extend({},f.fn.owlCarousel.options,this.$elem.data(),a);this.userOptions=a;this.loadContent()},loadContent:function(){function a(a){var d,e="";if("function"===typeof b.options.jsonSuccess)b.options.jsonSuccess.apply(this,[a]);else{for(d in a.owl)a.owl.hasOwnProperty(d)&&(e+=a.owl[d].item);b.$elem.html(e)}b.logIn()}var b=this,e;"function"===typeof b.options.beforeInit&&b.options.beforeInit.apply(this,[b.$elem]);"string"===typeof b.options.jsonPath?
(e=b.options.jsonPath,f.getJSON(e,a)):b.logIn()},logIn:function(){this.$elem.data("owl-originalStyles",this.$elem.attr("style"));this.$elem.data("owl-originalClasses",this.$elem.attr("class"));this.$elem.css({opacity:0});this.orignalItems=this.options.items;this.checkBrowser();this.wrapperWidth=0;this.checkVisible=null;this.setVars()},setVars:function(){if(0===this.$elem.children().length)return!1;this.baseClass();this.eventTypes();this.$userItems=this.$elem.children();this.itemsAmount=this.$userItems.length;
this.wrapItems();this.$owlItems=this.$elem.find(".owl-item");this.$owlWrapper=this.$elem.find(".owl-wrapper");this.playDirection="next";this.prevItem=0;this.prevArr=[0];this.currentItem=0;this.customEvents();this.onStartup()},onStartup:function(){this.updateItems();this.calculateAll();this.buildControls();this.updateControls();this.response();this.moveEvents();this.stopOnHover();this.owlStatus();!1!==this.options.transitionStyle&&this.transitionTypes(this.options.transitionStyle);!0===this.options.autoPlay&&
(this.options.autoPlay=5E3);this.play();this.$elem.find(".owl-wrapper").css("display","block");this.$elem.is(":visible")?this.$elem.css("opacity",1):this.watchVisibility();this.onstartup=!1;this.eachMoveUpdate();"function"===typeof this.options.afterInit&&this.options.afterInit.apply(this,[this.$elem])},eachMoveUpdate:function(){!0===this.options.lazyLoad&&this.lazyLoad();!0===this.options.autoHeight&&this.autoHeight();this.onVisibleItems();"function"===typeof this.options.afterAction&&this.options.afterAction.apply(this,
[this.$elem])},updateVars:function(){"function"===typeof this.options.beforeUpdate&&this.options.beforeUpdate.apply(this,[this.$elem]);this.watchVisibility();this.updateItems();this.calculateAll();this.updatePosition();this.updateControls();this.eachMoveUpdate();"function"===typeof this.options.afterUpdate&&this.options.afterUpdate.apply(this,[this.$elem])},reload:function(){var a=this;g.setTimeout(function(){a.updateVars()},0)},watchVisibility:function(){var a=this;if(!1===a.$elem.is(":visible"))a.$elem.css({opacity:0}),
g.clearInterval(a.autoPlayInterval),g.clearInterval(a.checkVisible);else return!1;a.checkVisible=g.setInterval(function(){a.$elem.is(":visible")&&(a.reload(),a.$elem.animate({opacity:1},200),g.clearInterval(a.checkVisible))},500)},wrapItems:function(){this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');this.wrapperOuter=this.$elem.find(".owl-wrapper-outer");this.$elem.css("display","block")},
baseClass:function(){var a=this.$elem.hasClass(this.options.baseClass),b=this.$elem.hasClass(this.options.theme);a||this.$elem.addClass(this.options.baseClass);b||this.$elem.addClass(this.options.theme)},updateItems:function(){var a,b;if(!1===this.options.responsive)return!1;if(!0===this.options.singleItem)return this.options.items=this.orignalItems=1,this.options.itemsCustom=!1,this.options.itemsDesktop=!1,this.options.itemsDesktopSmall=!1,this.options.itemsTablet=!1,this.options.itemsTabletSmall=
!1,this.options.itemsMobile=!1;a=f(this.options.responsiveBaseWidth).width();a>(this.options.itemsDesktop[0]||this.orignalItems)&&(this.options.items=this.orignalItems);if(!1!==this.options.itemsCustom)for(this.options.itemsCustom.sort(function(a,b){return a[0]-b[0]}),b=0;b<this.options.itemsCustom.length;b+=1)this.options.itemsCustom[b][0]<=a&&(this.options.items=this.options.itemsCustom[b][1]);else a<=this.options.itemsDesktop[0]&&!1!==this.options.itemsDesktop&&(this.options.items=this.options.itemsDesktop[1]),
a<=this.options.itemsDesktopSmall[0]&&!1!==this.options.itemsDesktopSmall&&(this.options.items=this.options.itemsDesktopSmall[1]),a<=this.options.itemsTablet[0]&&!1!==this.options.itemsTablet&&(this.options.items=this.options.itemsTablet[1]),a<=this.options.itemsTabletSmall[0]&&!1!==this.options.itemsTabletSmall&&(this.options.items=this.options.itemsTabletSmall[1]),a<=this.options.itemsMobile[0]&&!1!==this.options.itemsMobile&&(this.options.items=this.options.itemsMobile[1]);this.options.items>this.itemsAmount&&
!0===this.options.itemsScaleUp&&(this.options.items=this.itemsAmount)},response:function(){var a=this,b,e;if(!0!==a.options.responsive)return!1;e=f(g).width();a.resizer=function(){f(g).width()!==e&&(!1!==a.options.autoPlay&&g.clearInterval(a.autoPlayInterval),g.clearTimeout(b),b=g.setTimeout(function(){e=f(g).width();a.updateVars()},a.options.responsiveRefreshRate))};f(g).resize(a.resizer)},updatePosition:function(){this.jumpTo(this.currentItem);!1!==this.options.autoPlay&&this.checkAp()},appendItemsSizes:function(){var a=
this,b=0,e=a.itemsAmount-a.options.items;a.$owlItems.each(function(c){var d=f(this);d.css({width:a.itemWidth}).data("owl-item",Number(c));if(0===c%a.options.items||c===e)c>e||(b+=1);d.data("owl-roundPages",b)})},appendWrapperSizes:function(){this.$owlWrapper.css({width:this.$owlItems.length*this.itemWidth*2,left:0});this.appendItemsSizes()},calculateAll:function(){this.calculateWidth();this.appendWrapperSizes();this.loops();this.max()},calculateWidth:function(){this.itemWidth=Math.round(this.$elem.width()/
this.options.items)},max:function(){var a=-1*(this.itemsAmount*this.itemWidth-this.options.items*this.itemWidth);this.options.items>this.itemsAmount?this.maximumPixels=a=this.maximumItem=0:(this.maximumItem=this.itemsAmount-this.options.items,this.maximumPixels=a);return a},min:function(){return 0},loops:function(){var a=0,b=0,e,c;this.positionsInArray=[0];this.pagesInArray=[];for(e=0;e<this.itemsAmount;e+=1)b+=this.itemWidth,this.positionsInArray.push(-b),!0===this.options.scrollPerPage&&(c=f(this.$owlItems[e]),
c=c.data("owl-roundPages"),c!==a&&(this.pagesInArray[a]=this.positionsInArray[e],a=c))},buildControls:function(){if(!0===this.options.navigation||!0===this.options.pagination)this.owlControls=f('<div class="owl-controls"/>').toggleClass("clickable",!this.browser.isTouch).appendTo(this.$elem);!0===this.options.pagination&&this.buildPagination();!0===this.options.navigation&&this.buildButtons()},buildButtons:function(){var a=this,b=f('<div class="owl-buttons"/>');a.owlControls.append(b);a.buttonPrev=
f("<div/>",{"class":"owl-prev",html:a.options.navigationText[0]||""});a.buttonNext=f("<div/>",{"class":"owl-next",html:a.options.navigationText[1]||""});b.append(a.buttonPrev).append(a.buttonNext);b.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(a){a.preventDefault()});b.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(b){b.preventDefault();f(this).hasClass("owl-next")?a.next():a.prev()})},buildPagination:function(){var a=this;a.paginationWrapper=
f('<div class="owl-pagination"/>');a.owlControls.append(a.paginationWrapper);a.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(b){b.preventDefault();Number(f(this).data("owl-page"))!==a.currentItem&&a.goTo(Number(f(this).data("owl-page")),!0)})},updatePagination:function(){var a,b,e,c,d,g;if(!1===this.options.pagination)return!1;this.paginationWrapper.html("");a=0;b=this.itemsAmount-this.itemsAmount%this.options.items;for(c=0;c<this.itemsAmount;c+=1)0===c%this.options.items&&
(a+=1,b===c&&(e=this.itemsAmount-this.options.items),d=f("<div/>",{"class":"owl-page"}),g=f("<span></span>",{text:!0===this.options.paginationNumbers?a:"","class":!0===this.options.paginationNumbers?"owl-numbers":""}),d.append(g),d.data("owl-page",b===c?e:c),d.data("owl-roundPages",a),this.paginationWrapper.append(d));this.checkPagination()},checkPagination:function(){var a=this;if(!1===a.options.pagination)return!1;a.paginationWrapper.find(".owl-page").each(function(){f(this).data("owl-roundPages")===
f(a.$owlItems[a.currentItem]).data("owl-roundPages")&&(a.paginationWrapper.find(".owl-page").removeClass("active"),f(this).addClass("active"))})},checkNavigation:function(){if(!1===this.options.navigation)return!1;!1===this.options.rewindNav&&(0===this.currentItem&&0===this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.addClass("disabled")):0===this.currentItem&&0!==this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.removeClass("disabled")):this.currentItem===
this.maximumItem?(this.buttonPrev.removeClass("disabled"),this.buttonNext.addClass("disabled")):0!==this.currentItem&&this.currentItem!==this.maximumItem&&(this.buttonPrev.removeClass("disabled"),this.buttonNext.removeClass("disabled")))},updateControls:function(){this.updatePagination();this.checkNavigation();this.owlControls&&(this.options.items>=this.itemsAmount?this.owlControls.hide():this.owlControls.show())},destroyControls:function(){this.owlControls&&this.owlControls.remove()},next:function(a){if(this.isTransition)return!1;
this.currentItem+=!0===this.options.scrollPerPage?this.options.items:1;if(this.currentItem>this.maximumItem+(!0===this.options.scrollPerPage?this.options.items-1:0))if(!0===this.options.rewindNav)this.currentItem=0,a="rewind";else return this.currentItem=this.maximumItem,!1;this.goTo(this.currentItem,a)},prev:function(a){if(this.isTransition)return!1;this.currentItem=!0===this.options.scrollPerPage&&0<this.currentItem&&this.currentItem<this.options.items?0:this.currentItem-(!0===this.options.scrollPerPage?
this.options.items:1);if(0>this.currentItem)if(!0===this.options.rewindNav)this.currentItem=this.maximumItem,a="rewind";else return this.currentItem=0,!1;this.goTo(this.currentItem,a)},goTo:function(a,b,e){var c=this;if(c.isTransition)return!1;"function"===typeof c.options.beforeMove&&c.options.beforeMove.apply(this,[c.$elem]);a>=c.maximumItem?a=c.maximumItem:0>=a&&(a=0);c.currentItem=c.owl.currentItem=a;if(!1!==c.options.transitionStyle&&"drag"!==e&&1===c.options.items&&!0===c.browser.support3d)return c.swapSpeed(0),
!0===c.browser.support3d?c.transition3d(c.positionsInArray[a]):c.css2slide(c.positionsInArray[a],1),c.afterGo(),c.singleItemTransition(),!1;a=c.positionsInArray[a];!0===c.browser.support3d?(c.isCss3Finish=!1,!0===b?(c.swapSpeed("paginationSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},c.options.paginationSpeed)):"rewind"===b?(c.swapSpeed(c.options.rewindSpeed),g.setTimeout(function(){c.isCss3Finish=!0},c.options.rewindSpeed)):(c.swapSpeed("slideSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},
c.options.slideSpeed)),c.transition3d(a)):!0===b?c.css2slide(a,c.options.paginationSpeed):"rewind"===b?c.css2slide(a,c.options.rewindSpeed):c.css2slide(a,c.options.slideSpeed);c.afterGo()},jumpTo:function(a){"function"===typeof this.options.beforeMove&&this.options.beforeMove.apply(this,[this.$elem]);a>=this.maximumItem||-1===a?a=this.maximumItem:0>=a&&(a=0);this.swapSpeed(0);!0===this.browser.support3d?this.transition3d(this.positionsInArray[a]):this.css2slide(this.positionsInArray[a],1);this.currentItem=
this.owl.currentItem=a;this.afterGo()},afterGo:function(){this.prevArr.push(this.currentItem);this.prevItem=this.owl.prevItem=this.prevArr[this.prevArr.length-2];this.prevArr.shift(0);this.prevItem!==this.currentItem&&(this.checkPagination(),this.checkNavigation(),this.eachMoveUpdate(),!1!==this.options.autoPlay&&this.checkAp());"function"===typeof this.options.afterMove&&this.prevItem!==this.currentItem&&this.options.afterMove.apply(this,[this.$elem])},stop:function(){this.apStatus="stop";g.clearInterval(this.autoPlayInterval)},
checkAp:function(){"stop"!==this.apStatus&&this.play()},play:function(){var a=this;a.apStatus="play";if(!1===a.options.autoPlay)return!1;g.clearInterval(a.autoPlayInterval);a.autoPlayInterval=g.setInterval(function(){a.next(!0)},a.options.autoPlay)},swapSpeed:function(a){"slideSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)):"paginationSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)):"string"!==typeof a&&this.$owlWrapper.css(this.addCssSpeed(a))},
addCssSpeed:function(a){return{"-webkit-transition":"all "+a+"ms ease","-moz-transition":"all "+a+"ms ease","-o-transition":"all "+a+"ms ease",transition:"all "+a+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(a){return{"-webkit-transform":"translate3d("+a+"px, 0px, 0px)","-moz-transform":"translate3d("+a+"px, 0px, 0px)","-o-transform":"translate3d("+a+"px, 0px, 0px)","-ms-transform":"translate3d("+
a+"px, 0px, 0px)",transform:"translate3d("+a+"px, 0px,0px)"}},transition3d:function(a){this.$owlWrapper.css(this.doTranslate(a))},css2move:function(a){this.$owlWrapper.css({left:a})},css2slide:function(a,b){var e=this;e.isCssFinish=!1;e.$owlWrapper.stop(!0,!0).animate({left:a},{duration:b||e.options.slideSpeed,complete:function(){e.isCssFinish=!0}})},checkBrowser:function(){var a=k.createElement("div");a.style.cssText="  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
a=a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);this.browser={support3d:null!==a&&1===a.length,isTouch:"ontouchstart"in g||g.navigator.msMaxTouchPoints}},moveEvents:function(){if(!1!==this.options.mouseDrag||!1!==this.options.touchDrag)this.gestures(),this.disabledEvents()},eventTypes:function(){var a=["s","e","x"];this.ev_types={};!0===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:
!1===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===this.options.mouseDrag&&!1===this.options.touchDrag&&(a=["mousedown.owl","mousemove.owl","mouseup.owl"]);this.ev_types.start=a[0];this.ev_types.move=a[1];this.ev_types.end=a[2]},disabledEvents:function(){this.$elem.on("dragstart.owl",function(a){a.preventDefault()});this.$elem.on("mousedown.disableTextSelect",function(a){return f(a.target).is("input, textarea, select, option")})},
gestures:function(){function a(a){if(void 0!==a.touches)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(void 0===a.touches){if(void 0!==a.pageX)return{x:a.pageX,y:a.pageY};if(void 0===a.pageX)return{x:a.clientX,y:a.clientY}}}function b(a){"on"===a?(f(k).on(d.ev_types.move,e),f(k).on(d.ev_types.end,c)):"off"===a&&(f(k).off(d.ev_types.move),f(k).off(d.ev_types.end))}function e(b){b=b.originalEvent||b||g.event;d.newPosX=a(b).x-h.offsetX;d.newPosY=a(b).y-h.offsetY;d.newRelativeX=d.newPosX-h.relativePos;
"function"===typeof d.options.startDragging&&!0!==h.dragging&&0!==d.newRelativeX&&(h.dragging=!0,d.options.startDragging.apply(d,[d.$elem]));(8<d.newRelativeX||-8>d.newRelativeX)&&!0===d.browser.isTouch&&(void 0!==b.preventDefault?b.preventDefault():b.returnValue=!1,h.sliding=!0);(10<d.newPosY||-10>d.newPosY)&&!1===h.sliding&&f(k).off("touchmove.owl");d.newPosX=Math.max(Math.min(d.newPosX,d.newRelativeX/5),d.maximumPixels+d.newRelativeX/5);!0===d.browser.support3d?d.transition3d(d.newPosX):d.css2move(d.newPosX)}
function c(a){a=a.originalEvent||a||g.event;var c;a.target=a.target||a.srcElement;h.dragging=!1;!0!==d.browser.isTouch&&d.$owlWrapper.removeClass("grabbing");d.dragDirection=0>d.newRelativeX?d.owl.dragDirection="left":d.owl.dragDirection="right";0!==d.newRelativeX&&(c=d.getNewPosition(),d.goTo(c,!1,"drag"),h.targetElement===a.target&&!0!==d.browser.isTouch&&(f(a.target).on("click.disable",function(a){a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();f(a.target).off("click.disable")}),
a=f._data(a.target,"events").click,c=a.pop(),a.splice(0,0,c)));b("off")}var d=this,h={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};d.isCssFinish=!0;d.$elem.on(d.ev_types.start,".owl-wrapper",function(c){c=c.originalEvent||c||g.event;var e;if(3===c.which)return!1;if(!(d.itemsAmount<=d.options.items)){if(!1===d.isCssFinish&&!d.options.dragBeforeAnimFinish||!1===d.isCss3Finish&&!d.options.dragBeforeAnimFinish)return!1;
!1!==d.options.autoPlay&&g.clearInterval(d.autoPlayInterval);!0===d.browser.isTouch||d.$owlWrapper.hasClass("grabbing")||d.$owlWrapper.addClass("grabbing");d.newPosX=0;d.newRelativeX=0;f(this).css(d.removeTransition());e=f(this).position();h.relativePos=e.left;h.offsetX=a(c).x-e.left;h.offsetY=a(c).y-e.top;b("on");h.sliding=!1;h.targetElement=c.target||c.srcElement}})},getNewPosition:function(){var a=this.closestItem();a>this.maximumItem?a=this.currentItem=this.maximumItem:0<=this.newPosX&&(this.currentItem=
a=0);return a},closestItem:function(){var a=this,b=!0===a.options.scrollPerPage?a.pagesInArray:a.positionsInArray,e=a.newPosX,c=null;f.each(b,function(d,g){e-a.itemWidth/20>b[d+1]&&e-a.itemWidth/20<g&&"left"===a.moveDirection()?(c=g,a.currentItem=!0===a.options.scrollPerPage?f.inArray(c,a.positionsInArray):d):e+a.itemWidth/20<g&&e+a.itemWidth/20>(b[d+1]||b[d]-a.itemWidth)&&"right"===a.moveDirection()&&(!0===a.options.scrollPerPage?(c=b[d+1]||b[b.length-1],a.currentItem=f.inArray(c,a.positionsInArray)):
(c=b[d+1],a.currentItem=d+1))});return a.currentItem},moveDirection:function(){var a;0>this.newRelativeX?(a="right",this.playDirection="next"):(a="left",this.playDirection="prev");return a},customEvents:function(){var a=this;a.$elem.on("owl.next",function(){a.next()});a.$elem.on("owl.prev",function(){a.prev()});a.$elem.on("owl.play",function(b,e){a.options.autoPlay=e;a.play();a.hoverStatus="play"});a.$elem.on("owl.stop",function(){a.stop();a.hoverStatus="stop"});a.$elem.on("owl.goTo",function(b,e){a.goTo(e)});
a.$elem.on("owl.jumpTo",function(b,e){a.jumpTo(e)})},stopOnHover:function(){var a=this;!0===a.options.stopOnHover&&!0!==a.browser.isTouch&&!1!==a.options.autoPlay&&(a.$elem.on("mouseover",function(){a.stop()}),a.$elem.on("mouseout",function(){"stop"!==a.hoverStatus&&a.play()}))},lazyLoad:function(){var a,b,e,c,d;if(!1===this.options.lazyLoad)return!1;for(a=0;a<this.itemsAmount;a+=1)b=f(this.$owlItems[a]),"loaded"!==b.data("owl-loaded")&&(e=b.data("owl-item"),c=b.find(".lazyOwl"),"string"!==typeof c.data("src")?
b.data("owl-loaded","loaded"):(void 0===b.data("owl-loaded")&&(c.hide(),b.addClass("loading").data("owl-loaded","checked")),(d=!0===this.options.lazyFollow?e>=this.currentItem:!0)&&e<this.currentItem+this.options.items&&c.length&&this.lazyPreload(b,c)))},lazyPreload:function(a,b){function e(){a.data("owl-loaded","loaded").removeClass("loading");b.removeAttr("data-src");"fade"===d.options.lazyEffect?b.fadeIn(400):b.show();"function"===typeof d.options.afterLazyLoad&&d.options.afterLazyLoad.apply(this,
[d.$elem])}function c(){f+=1;d.completeImg(b.get(0))||!0===k?e():100>=f?g.setTimeout(c,100):e()}var d=this,f=0,k;"DIV"===b.prop("tagName")?(b.css("background-image","url("+b.data("src")+")"),k=!0):b[0].src=b.data("src");c()},autoHeight:function(){function a(){var a=f(e.$owlItems[e.currentItem]).height();e.wrapperOuter.css("height",a+"px");e.wrapperOuter.hasClass("autoHeight")||g.setTimeout(function(){e.wrapperOuter.addClass("autoHeight")},0)}function b(){d+=1;e.completeImg(c.get(0))?a():100>=d?g.setTimeout(b,
100):e.wrapperOuter.css("height","")}var e=this,c=f(e.$owlItems[e.currentItem]).find("img"),d;void 0!==c.get(0)?(d=0,b()):a()},completeImg:function(a){return!a.complete||"undefined"!==typeof a.naturalWidth&&0===a.naturalWidth?!1:!0},onVisibleItems:function(){var a;!0===this.options.addClassActive&&this.$owlItems.removeClass("active");this.visibleItems=[];for(a=this.currentItem;a<this.currentItem+this.options.items;a+=1)this.visibleItems.push(a),!0===this.options.addClassActive&&f(this.$owlItems[a]).addClass("active");
this.owl.visibleItems=this.visibleItems},transitionTypes:function(a){this.outClass="owl-"+a+"-out";this.inClass="owl-"+a+"-in"},singleItemTransition:function(){var a=this,b=a.outClass,e=a.inClass,c=a.$owlItems.eq(a.currentItem),d=a.$owlItems.eq(a.prevItem),f=Math.abs(a.positionsInArray[a.currentItem])+a.positionsInArray[a.prevItem],g=Math.abs(a.positionsInArray[a.currentItem])+a.itemWidth/2;a.isTransition=!0;a.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":g+"px","-moz-perspective-origin":g+
"px","perspective-origin":g+"px"});d.css({position:"relative",left:f+"px"}).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endPrev=!0;d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(d,b)});c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endCurrent=!0;c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(c,e)})},clearTransStyle:function(a,
b){a.css({position:"",left:""}).removeClass(b);this.endPrev&&this.endCurrent&&(this.$owlWrapper.removeClass("owl-origin"),this.isTransition=this.endCurrent=this.endPrev=!1)},owlStatus:function(){this.owl={userOptions:this.userOptions,baseElement:this.$elem,userItems:this.$userItems,owlItems:this.$owlItems,currentItem:this.currentItem,prevItem:this.prevItem,visibleItems:this.visibleItems,isTouch:this.browser.isTouch,browser:this.browser,dragDirection:this.dragDirection}},clearEvents:function(){this.$elem.off(".owl owl mousedown.disableTextSelect");
f(k).off(".owl owl");f(g).off("resize",this.resizer)},unWrap:function(){0!==this.$elem.children().length&&(this.$owlWrapper.unwrap(),this.$userItems.unwrap().unwrap(),this.owlControls&&this.owlControls.remove());this.clearEvents();this.$elem.attr("style",this.$elem.data("owl-originalStyles")||"").attr("class",this.$elem.data("owl-originalClasses"))},destroy:function(){this.stop();g.clearInterval(this.checkVisible);this.unWrap();this.$elem.removeData()},reinit:function(a){a=f.extend({},this.userOptions,
a);this.unWrap();this.init(a,this.$elem)},addItem:function(a,b){var e;if(!a)return!1;if(0===this.$elem.children().length)return this.$elem.append(a),this.setVars(),!1;this.unWrap();e=void 0===b||-1===b?-1:b;e>=this.$userItems.length||-1===e?this.$userItems.eq(-1).after(a):this.$userItems.eq(e).before(a);this.setVars()},removeItem:function(a){if(0===this.$elem.children().length)return!1;a=void 0===a||-1===a?-1:a;this.unWrap();this.$userItems.eq(a).remove();this.setVars()}};f.fn.owlCarousel=function(a){return this.each(function(){if(!0===
f(this).data("owl-init"))return!1;f(this).data("owl-init",!0);var b=Object.create(l);b.init(a,this);f.data(this,"owlCarousel",b)})};f.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,
responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:g,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}})(jQuery,window,document);






/*! WOW - v1.0.2 - 2014-10-28
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(function(){var a,b,e,f;for(e=d.addedNodes||[],f=[],a=0,b=e.length;b>a;a++)c=e[a],f.push(this.doSync(c));return f}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(e=d(a),c=e.getPropertyCSSValue(b),i=this.vendors,g=0,h=i.length;h>g;g++)f=i[g],c=c||e.getPropertyCSSValue("-"+f+"-"+b);return c},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);








/*
* MIXITUP - A CSS3 and JQuery Filter & Sort Plugin
* Version: 1.5.5
* License: Creative Commons Attribution-NoDerivs 3.0 Unported - CC BY-ND 3.0
* http://creativecommons.org/licenses/by-nd/3.0/
* This software may be used freely on commercial and non-commercial projects with attribution to the author/copyright holder.
* Author: Patrick Kunka
* Copyright 2012-2013 Patrick Kunka, Barrel LLC, All Rights Reserved
* 
* http://mixitup.io
*/

(function($){
	
	// DECLARE METHODS
 
	var methods = {

		// "INIT" METHOD
	
	    init: function(settings){

			return this.each(function(){
				
				var browser = window.navigator.appVersion.match(/Chrome\/(\d+)\./),
					ver = browser ? parseInt(browser[1], 10) : false,
					chromeFix = function(id){
						var grid = document.getElementById(id),
					        parent = grid.parentElement,
					        placeholder = document.createElement('div'),
					        frag = document.createDocumentFragment();

					    parent.insertBefore(placeholder, grid);  
					    frag.appendChild(grid);
					    parent.replaceChild(grid, placeholder);
					    frag = null;
					    placeholder = null;
					};
				
				if(ver && ver == 31 || ver == 32){
					chromeFix(this.id);
				};
				
				// BUILD CONFIG OBJECT

				var config = {
					
					// PUBLIC PROPERTIES
					
					targetSelector : '.mix',
					filterSelector : '.filter',
					sortSelector : '.sort',
					buttonEvent: 'click',
					effects : ['fade', 'scale'],
					listEffects : null,
					easing : 'smooth',
					layoutMode: 'grid',
					targetDisplayGrid : 'inline-block',
					targetDisplayList: 'block',
					listClass : '',
					gridClass : '',
					transitionSpeed : 600,
					showOnLoad : 'all',
					sortOnLoad : false,
					multiFilter : false,
					filterLogic : 'or',
					resizeContainer : true,
					minHeight : 0,
					failClass : 'fail',
					perspectiveDistance : '3000',
					perspectiveOrigin : '50% 50%',
					animateGridList : true,
					onMixLoad: null,
					onMixStart : null,
					onMixEnd : null,

					// MISC

					container : null,
					origOrder : [],
					startOrder : [],
					newOrder : [],
					origSort: [],
					checkSort: [],
					filter : '',
					mixing : false,
					origDisplay : '',
					origLayout: '',
					origHeight : 0, 
					newHeight : 0,
					isTouch : false,
					resetDelay : 0,
					failsafe : null,

					// CSS
					
					prefix : '',
					easingFallback : 'ease-in-out',
					transition : {}, 
					perspective : {}, 
					clean : {},
					fade : '1',
					scale : '',
					rotateX : '',
					rotateY : '',
					rotateZ : '',
					blur : '',
					grayscale : ''
				};
				
				if(settings){
					$.extend(config, settings);
				};

				// ADD CONFIG OBJECT TO CONTAINER OBJECT PER INSTANTIATION
				
				this.config = config;
				
				// DETECT TOUCH
				
				$.support.touch = 'ontouchend' in document;

				if ($.support.touch) {
					config.isTouch = true;
					config.resetDelay = 350;
				};
				
				// LOCALIZE CONTAINER
	
				config.container = $(this);
				var $cont = config.container;
				
				// GET VENDOR PREFIX
				
				config.prefix = prefix($cont[0]);
				config.prefix = config.prefix ? '-'+config.prefix.toLowerCase()+'-' : '';
				
				// CACHE 'DEFAULT' SORTING ORDER
			
				$cont.find(config.targetSelector).each(function(){
					config.origOrder.push($(this));
				});
				
				// PERFORM SORT ON LOAD 
				
				if(config.sortOnLoad){
					var sortby, order;
					if($.isArray(config.sortOnLoad)){
						sortby = config.sortOnLoad[0], order = config.sortOnLoad[1];
						$(config.sortSelector+'[data-sort='+config.sortOnLoad[0]+'][data-order='+config.sortOnLoad[1]+']').addClass('active');
					} else {
						$(config.sortSelector+'[data-sort='+config.sortOnLoad+']').addClass('active');
						sortby = config.sortOnLoad, config.sortOnLoad = 'desc';
					};
					sort(sortby, order, $cont, config);
				};
				
				// BUILD TRANSITION AND PERSPECTIVE OBJECTS
				
				for(var i = 0; i<2; i++){
					var a = i==0 ? a = config.prefix : '';
					config.transition[a+'transition'] = 'all '+config.transitionSpeed+'ms ease-in-out';
					config.perspective[a+'perspective'] = config.perspectiveDistance+'px';
					config.perspective[a+'perspective-origin'] = config.perspectiveOrigin;
				};
				
				// BUILD TRANSITION CLEANER
				
				for(var i = 0; i<2; i++){
					var a = i==0 ? a = config.prefix : '';
					config.clean[a+'transition'] = 'none';
				};
	
				// CHOOSE GRID OR LIST
	
				if(config.layoutMode == 'list'){
					$cont.addClass(config.listClass);
					config.origDisplay = config.targetDisplayList;
				} else {
					$cont.addClass(config.gridClass);
					config.origDisplay = config.targetDisplayGrid;
				};
				config.origLayout = config.layoutMode;
				
				// PARSE 'SHOWONLOAD'
				
				var showOnLoadArray = config.showOnLoad.split(' ');
				
				// GIVE ACTIVE FILTER ACTIVE CLASS
				
				$.each(showOnLoadArray, function(){
					$(config.filterSelector+'[data-filter="'+this+'"]').addClass('active');
				});
				
				// RENAME "ALL" CATEGORY TO "MIX_ALL"
	
				$cont.find(config.targetSelector).addClass('mix_all');
				if(showOnLoadArray[0]  == 'all'){
					showOnLoadArray[0] = 'mix_all',
					config.showOnLoad = 'mix_all';
				};
				
				// FADE IN 'SHOWONLOAD'
				
				var $showOnLoad = $();
				$.each(showOnLoadArray, function(){
					$showOnLoad = $showOnLoad.add($('.'+this))
				});
				
				$showOnLoad.each(function(){
					var $t = $(this);
					if(config.layoutMode == 'list'){
						$t.css('display',config.targetDisplayList);
					} else {
						$t.css('display',config.targetDisplayGrid);
					};
					$t.css(config.transition);
				});
				
				// WRAP FADE-IN TO PREVENT RACE CONDITION
				
				var delay = setTimeout(function(){
					
					config.mixing = true;
					
					$showOnLoad.css('opacity','1');
					
					// CLEAN UP
					
					var reset = setTimeout(function(){
						if(config.layoutMode == 'list'){
							$showOnLoad.removeStyle(config.prefix+'transition, transition').css({
								display: config.targetDisplayList,
								opacity: 1
							});
						} else {
							$showOnLoad.removeStyle(config.prefix+'transition, transition').css({
								display: config.targetDisplayGrid,
								opacity: 1
							});
						};
						
						// FIRE "ONMIXLOAD" CALLBACK
						
						config.mixing = false;

						if(typeof config.onMixLoad == 'function') {
							var output = config.onMixLoad.call(this, config);

							// UPDATE CONFIG IF DATA RETURNED

							config = output ? output : config;
						};
						
					},config.transitionSpeed);
				},10);
				
				// PRESET ACTIVE FILTER
				
				config.filter = config.showOnLoad;
			
				// BIND SORT CLICK HANDLERS
			
				$(config.sortSelector).bind(config.buttonEvent,function(){
					
					if(!config.mixing){
						
						// PARSE SORT ARGUMENTS FROM BUTTON CLASSES
						
						var $t = $(this),
						sortby = $t.attr('data-sort'),
						order = $t.attr('data-order');
						
						if(!$t.hasClass('active')){
							$(config.sortSelector).removeClass('active');
							$t.addClass('active');
						} else {
							if(sortby != 'random')return false;
						};
						
						$cont.find(config.targetSelector).each(function(){
							config.startOrder.push($(this));
						});
				
						goMix(config.filter,sortby,order,$cont, config);
				
					};
				
				});

				// BIND FILTER CLICK HANDLERS

				$(config.filterSelector).bind(config.buttonEvent,function(){
				
					if(!config.mixing){
						
						var $t = $(this);
						
						// PARSE FILTER ARGUMENTS FROM BUTTON CLASSES
		
						if(config.multiFilter == false){
							
							// SINGLE ACTIVE BUTTON
							
							$(config.filterSelector).removeClass('active');
							$t.addClass('active');
						
							config.filter = $t.attr('data-filter');
						
							$(config.filterSelector+'[data-filter="'+config.filter+'"]').addClass('active');

						} else {
						
							// MULTIPLE ACTIVE BUTTONS
							
							var thisFilter = $t.attr('data-filter'); 
						
							if($t.hasClass('active')){
								$t.removeClass('active');
								
								// REMOVE FILTER FROM SPACE-SEPERATED STRING
								
								var re = new RegExp('(\\s|^)'+thisFilter);
								config.filter = config.filter.replace(re,'');
							} else {
								
								// ADD FILTER TO SPACE-SEPERATED STRING
								
								$t.addClass('active');
								config.filter = config.filter+' '+thisFilter;
								
							};
						};
						
						// GO MIX
						
						goMix(config.filter, null, null, $cont, config);

					};
				
				});
					
			});
		},
	
		// "TOGRID" METHOD
	
		toGrid: function(){
			return this.each(function(){
				var config = this.config;
				if(config.layoutMode != 'grid'){
					config.layoutMode = 'grid';
					goMix(config.filter, null, null, $(this), config);
				};
			});
		},
	
		// "TOLIST" METHOD
	
		toList: function(){
			return this.each(function(){
				var config = this.config;
				if(config.layoutMode != 'list'){
					config.layoutMode = 'list';
					goMix(config.filter, null, null, $(this), config);
				};
			});
		},
	
		// "FILTER" METHOD
	
		filter: function(arg){
			return this.each(function(){
				var config = this.config;
				if(!config.mixing){	
					$(config.filterSelector).removeClass('active');
					$(config.filterSelector+'[data-filter="'+arg+'"]').addClass('active');
					goMix(arg, null, null, $(this), config);
				};
			});	
		},
	
		// "SORT" METHOD
	
		sort: function(args){
			return this.each(function(){
				var config = this.config,
					$t = $(this);
				if(!config.mixing){
					$(config.sortSelector).removeClass('active');
					if($.isArray(args)){
						var sortby = args[0], order = args[1];
						$(config.sortSelector+'[data-sort="'+args[0]+'"][data-order="'+args[1]+'"]').addClass('active');
					} else {
						$(config.sortSelector+'[data-sort="'+args+'"]').addClass('active');
						var sortby = args, order = 'desc';
					};
					$t.find(config.targetSelector).each(function(){
						config.startOrder.push($(this));
					});
					
					goMix(config.filter,sortby,order, $t, config);
				
				};
			});
		},
		
		// "MULTIMIX" METHOD
		
		multimix: function(args){
			return this.each(function(){
				var config = this.config,
					$t = $(this);
					multiOut = {
						filter: config.filter,
						sort: null,
						order: 'desc',
						layoutMode: config.layoutMode
					};
				$.extend(multiOut, args);
				if(!config.mixing){
					$(config.filterSelector).add(config.sortSelector).removeClass('active');
					$(config.filterSelector+'[data-filter="'+multiOut.filter+'"]').addClass('active');
					if(typeof multiOut.sort !== 'undefined'){
						$(config.sortSelector+'[data-sort="'+multiOut.sort+'"][data-order="'+multiOut.order+'"]').addClass('active');
						$t.find(config.targetSelector).each(function(){
							config.startOrder.push($(this));
						});
					};
					config.layoutMode = multiOut.layoutMode;
					goMix(multiOut.filter,multiOut.sort,multiOut.order, $t, config);
				};
			});
		},
		
		// "REMIX" METHOD

		remix: function(arg){
			return this.each(function(){
				var config = this.config,
					$t = $(this);	
				config.origOrder = [];
				$t.find(config.targetSelector).each(function(){
					var $th = $(this);
					$th.addClass('mix_all'); 
				    config.origOrder.push($th);
				});
				if(!config.mixing && typeof arg !== 'undefined'){
					$(config.filterSelector).removeClass('active');
					$(config.filterSelector+'[data-filter="'+arg+'"]').addClass('active');
					goMix(arg, null, null, $t, config);
				};
			});
		}
	};
	
	// DECLARE PLUGIN

	$.fn.mixitup = function(method, arg){
		if (methods[method]) {
			return methods[method].apply( this, Array.prototype.slice.call(arguments,1));
		} else if (typeof method === 'object' || ! method){
			return methods.init.apply( this, arguments );
		};
	};
	
	/* ==== THE MAGIC ==== */
	
	function goMix(filter, sortby, order, $cont, config){
		
		// WE ARE NOW MIXING

		clearInterval(config.failsafe);
		config.mixing = true;	
		
		// APPLY ARGS TO CONFIG
		
		config.filter = filter;
		
		// FIRE "ONMIXSTART" CALLBACK
		
		if(typeof config.onMixStart == 'function') {
			var output = config.onMixStart.call(this, config);
			
			// UPDATE CONFIG IF DATA RETURNED
			
			config = output ? output : config;
		};
		
		// SHORT LOCAL VARS
		
		var speed = config.transitionSpeed;
		
		// REBUILD TRANSITION AND PERSPECTIVE OBJECTS
		
		for(var i = 0; i<2; i++){
			var a = i==0 ? a = config.prefix : '';
			config.transition[a+'transition'] = 'all '+speed+'ms linear';
			config.transition[a+'transform'] = a+'translate3d(0,0,0)';
			config.perspective[a+'perspective'] = config.perspectiveDistance+'px';
			config.perspective[a+'perspective-origin'] = config.perspectiveOrigin;
		};
		
		// CACHE TARGET ELEMENTS FOR QUICK ACCESS
		
		var mixSelector = config.targetSelector,
		$targets = $cont.find(mixSelector);
		
		// ADD DATA OBJECT TO EACH TARGET
		
		$targets.each(function(){
			this.data = {};
		});
		
		// RE-DEFINE CONTAINER INCASE NOT IMMEDIATE PARENT OF TARGET ELEMENTS 
		
		var $par = $targets.parent();
	
		// ADD PERSPECTIVE TO CONTAINER 
		
		$par.css(config.perspective);
		
		// SETUP EASING

		config.easingFallback = 'ease-in-out';
		if(config.easing == 'smooth')config.easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
		if(config.easing == 'snap')config.easing = 'cubic-bezier(0.77, 0, 0.175, 1)';
		if(config.easing == 'windback'){
			config.easing = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
			config.easingFallback = 'cubic-bezier(0.175, 0.885, 0.320, 1)'; // Fall-back for old webkit, with no values > 1 or < 1
		};
		if(config.easing == 'windup'){
			config.easing = 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
			config.easingFallback = 'cubic-bezier(0.6, 0.28, 0.735, 0.045)';
		};
		
		// USE LIST SPECIFIC EFFECTS IF DECLARED
		
		var effectsOut = config.layoutMode == 'list' && config.listEffects != null ? config.listEffects : config.effects;
	
		// BUILD EFFECTS STRINGS & SKIP IF IE8
	
		if (Array.prototype.indexOf){
			config.fade = effectsOut.indexOf('fade') > -1 ? '0' : '';
			config.scale = effectsOut.indexOf('scale') > -1 ? 'scale(.01)' : '';
			config.rotateZ = effectsOut.indexOf('rotateZ') > -1 ? 'rotate(180deg)' : '';
			config.rotateY = effectsOut.indexOf('rotateY') > -1 ? 'rotateY(90deg)' : '';
			config.rotateX = effectsOut.indexOf('rotateX') > -1 ? 'rotateX(90deg)' : '';
			config.blur = effectsOut.indexOf('blur') > -1 ? 'blur(8px)' : '';
			config.grayscale = effectsOut.indexOf('grayscale') > -1 ? 'grayscale(100%)' : '';
		};
		
		// DECLARE NEW JQUERY OBJECTS FOR GROUPING
		
		var $show = $(), 
		$hide = $(),
		filterArray = [],
		multiDimensional = false;
		
		// BUILD FILTER ARRAY(S)
		
		if(typeof filter === 'string'){
			
			// SINGLE DIMENSIONAL FILTERING
			
			filterArray = buildFilterArray(filter);
			
		} else {
			
			// MULTI DIMENSIONAL FILTERING
			
			multiDimensional = true;
			
			$.each(filter,function(i){
				filterArray[i] = buildFilterArray(this);
			});
		};

		// "OR" LOGIC (DEFAULT)
		
		if(config.filterLogic == 'or'){
			
			if(filterArray[0] == '') filterArray.shift(); // IF FIRST ITEM IN ARRAY IS AN EMPTY SPACE, DELETE
			
			// IF NO ELEMENTS ARE DESIRED THEN HIDE ALL VISIBLE ELEMENTS
		
			if(filterArray.length < 1){
				
				$hide = $hide.add($cont.find(mixSelector+':visible'));
				
			} else {

			// ELSE CHECK EACH TARGET ELEMENT FOR ANY FILTER CATEGORY:
			
				$targets.each(function(){
					var $t = $(this);
					if(!multiDimensional){
						// IF HAS ANY FILTER, ADD TO "SHOW" OBJECT
						if($t.is('.'+filterArray.join(', .'))){
							$show = $show.add($t);
						// ELSE IF HAS NO FILTERS, ADD TO "HIDE" OBJECT
						} else {
							$hide = $hide.add($t);
						};
					} else {
						
						var pass = 0;
						// FOR EACH DIMENSION
						
						$.each(filterArray,function(i){
							if(this.length){
								if($t.is('.'+this.join(', .'))){
									pass++
								};
							} else if(pass > 0){
								pass++;
							};
						});
						// IF PASSES ALL DIMENSIONS, SHOW
						if(pass == filterArray.length){
							$show = $show.add($t);
						// ELSE HIDE
						} else {
							$hide = $hide.add($t);
						};
					};
				});
			
			};
	
		} else {
			
		// "AND" LOGIC
			
			// ADD "MIX_SHOW" CLASS TO ELEMENTS THAT HAVE ALL FILTERS
			
			$show = $show.add($par.find(mixSelector+'.'+filterArray.join('.')));
			
			// ADD "MIX_HIDE" CLASS TO EVERYTHING ELSE
			
			$hide = $hide.add($par.find(mixSelector+':not(.'+filterArray.join('.')+'):visible'));
		};
		
		// GET TOTAL NUMBER OF ELEMENTS TO SHOW
		
		var total = $show.length;
		
		// DECLARE NEW JQUERY OBJECTS

		var $tohide = $(),
		$toshow = $(),
		$pre = $();
		
		// FOR ELEMENTS TO BE HIDDEN, IF NOT ALREADY HIDDEN THEN ADD TO OBJECTS "TOHIDE" AND "PRE" 
		// TO INDICATE PRE-EXISTING ELEMENTS TO BE HIDDEN
		
		$hide.each(function(){
			var $t = $(this);
			if($t.css('display') != 'none'){
				$tohide = $tohide.add($t);
				$pre = $pre.add($t);
			};
		});
		
		// IF ALL ELEMENTS ARE ALREADY SHOWN AND THERE IS NOTHING TO HIDE, AND NOT PERFORMING A LAYOUT CHANGE OR SORT:
		
		if($show.filter(':visible').length == total && !$tohide.length && !sortby){
			
			if(config.origLayout == config.layoutMode){
				
				// THEN CLEAN UP AND GO HOME

				resetFilter();
				return false;
			} else {
				
				// IF ONLY ONE ITEM AND CHANGING FORM GRID TO LIST, MOST LIKELY POSITION WILL NOT CHANGE SO WE'RE DONE
			
				if($show.length == 1){ 
					
					if(config.layoutMode == 'list'){ 
						$cont.addClass(config.listClass);
						$cont.removeClass(config.gridClass);
						$pre.css('display',config.targetDisplayList);
					} else {
						$cont.addClass(config.gridClass);
						$cont.removeClass(config.listClass);
						$pre.css('display',config.targetDisplayGrid);
					};
					
					// THEN CLEAN UP AND GO HOME

					resetFilter();
					return false;
				}
			};
		};
		
		// GET CONTAINER'S STARTING HEIGHT

		config.origHeight = $par.height();
		
		// IF THERE IS SOMETHING TO BE SHOWN:

		if($show.length){
			
			// REMOVE "FAIL CLASS" FROM CONTAINER IF EXISTS
			
			$cont.removeClass(config.failClass);
			
			
			// FOR ELEMENTS TO BE SHOWN, IF NOT ALREADY SHOWN THEN ADD TO OBJECTS "TOSHOW" ELSE ADD CLASS "MIX_PRE"
			// TO INDICATE PRE-EXISTING ELEMENT

			$show.each(function(){ 
				var $t = $(this);
				if($t.css('display') == 'none'){
					$toshow = $toshow.add($t)
				} else {
					$pre = $pre.add($t);
				};
			});
	
			// IF NON-ANIMATED LAYOUT MODE TRANSITION:
		
			if((config.origLayout != config.layoutMode) && config.animateGridList == false){ 
			
				// ADD NEW DISPLAY TYPES, CLEAN UP AND GO HOME
				
				if(config.layoutMode == 'list'){ 
					$cont.addClass(config.listClass);
					$cont.removeClass(config.gridClass);
					$pre.css('display',config.targetDisplayList);
				} else {
					$cont.addClass(config.gridClass);
					$cont.removeClass(config.listClass);
					$pre.css('display',config.targetDisplayGrid);
				};
				
				resetFilter();
				return false;
			};
			
			// IF IE, FUCK OFF, AND THEN CLEAN UP AND GO HOME
		
			if(!window.atob){
				resetFilter();
				return false;
			};
			
			// OVERRIDE ANY EXISTING TRANSITION TIMING FOR CALCULATIONS
			
			$targets.css(config.clean);
			
			// FOR EACH PRE-EXISTING ELEMENT, ADD STARTING POSITION TO 'ORIGPOS' ARRAY
			
			$pre.each(function(){
				this.data.origPos = $(this).offset();
			});
	
			// TEMPORARILY SHOW ALL ELEMENTS TO SHOW (THAT ARE NOT ALREADY SHOWN), WITHOUT HIDING ELEMENTS TO HIDE
			// AND ADD/REMOVE GRID AND LIST CLASSES FROM CONTAINER
	
			if(config.layoutMode == 'list'){
				$cont.addClass(config.listClass);
				$cont.removeClass(config.gridClass);
				$toshow.css('display',config.targetDisplayList);
			} else {
				$cont.addClass(config.gridClass);
				$cont.removeClass(config.listClass);
				$toshow.css('display',config.targetDisplayGrid);
			};
			
			// FOR EACH ELEMENT NOW SHOWN, ADD ITS INTERMEDIATE POSITION TO 'SHOWINTERPOS' ARRAY
	
			$toshow.each(function(){
				this.data.showInterPos = $(this).offset();
			});
			
			// FOR EACH ELEMENT TO BE HIDDEN, BUT NOT YET HIDDEN, AND NOW MOVED DUE TO SHOWN ELEMENTS,
			// ADD ITS INTERMEDIATE POSITION TO 'HIDEINTERPOS' ARRAY

			$tohide.each(function(){
				this.data.hideInterPos = $(this).offset();
			});
			
			// FOR EACH PRE-EXISTING ELEMENT, NOW MOVED DUE TO SHOWN ELEMENTS, ADD ITS POSITION TO 'PREINTERPOS' ARRAY
	
			$pre.each(function(){
				this.data.preInterPos = $(this).offset();
			});
			
			// SET DISPLAY PROPERTY OF PRE-EXISTING ELEMENTS INCASE WE ARE CHANGING LAYOUT MODE
	
			if(config.layoutMode == 'list'){
				$pre.css('display',config.targetDisplayList);
			} else {
				$pre.css('display',config.targetDisplayGrid);
			};
			
			// IF A SORT ARGUMENT HAS BEEN SENT, RUN SORT FUNCTION SO OBJECTS WILL MOVE TO THEIR FINAL ORDER
			
			if(sortby){
				sort(sortby, order, $cont, config);	
			};
			
			// IF VISIBLE SORT ORDER IS THE SAME (WHICH WOULD NOT TRIGGER A TRANSITION EVENT)
		
			if(sortby && compareArr(config.origSort, config.checkSort)){
				
				// THEN CLEAN UP AND GO HOME
				resetFilter();
				return false;
			};
			
			// TEMPORARILY HIDE ALL SHOWN ELEMENTS TO HIDE

			$tohide.hide();
			
			// FOR EACH ELEMENT TO SHOW, AND NOW MOVED DUE TO HIDDEN ELEMENTS BEING REMOVED, 
			// ADD ITS POSITION TO 'FINALPOS' ARRAY
			
			$toshow.each(function(i){
				this.data.finalPos = $(this).offset();
			});
			
			// FOR EACH PRE-EXISTING ELEMENT NOW MOVED DUE TO HIDDEN ELEMENTS BEING REMOVED,
			// ADD ITS POSITION TO 'FINALPREPOS' ARRAY
	
			$pre.each(function(){
				this.data.finalPrePos = $(this).offset();
			});
			
			// SINCE WE ARE IN OUT FINAL STATE, GET NEW HEIGHT OF CONTAINER
	
			config.newHeight = $par.height();
			
			// IF A SORT ARGUMENT AS BEEN SENT, RUN SORT FUNCTION 'RESET' TO MOVE ELEMENTS BACK TO THEIR STARTING ORDER
			
			if(sortby){
				sort('reset', null, $cont, config);
			};
			
			// RE-HIDE ALL ELEMENTS TEMPORARILY SHOWN
			
			$toshow.hide();
			
			// SET DISPLAY PROPERTY OF PRE-EXISTING ELEMENTS BACK TO THEIR 
			// ORIGINAL PROPERTY, INCASE WE ARE CHANGING LAYOUT MODE
			
			$pre.css('display',config.origDisplay);
			
			// ADD/REMOVE GRID AND LIST CLASSES FROM CONTAINER
	
			if(config.origDisplay == 'block'){
				$cont.addClass(config.listClass);
				$toshow.css('display', config.targetDisplayList);
			} else {
				$cont.removeClass(config.listClass);
				$toshow.css('display', config.targetDisplayGrid);
			};
			
			// IF WE ARE ANIMATING CONTAINER, RESET IT TO ITS STARTING HEIGHT
		
			if(config.resizeContainer)$par.css('height', config.origHeight+'px');
	
			// ADD TRANSFORMS TO ALL ELEMENTS TO SHOW
			
			var toShowCSS = {};
			
			for(var i = 0; i<2; i++){
				var a = i==0 ? a = config.prefix : '';
				toShowCSS[a+'transform'] = config.scale+' '+config.rotateX+' '+config.rotateY+' '+config.rotateZ;
				toShowCSS[a+'filter'] = config.blur+' '+config.grayscale;
			};
			
			$toshow.css(toShowCSS);
	
			// FOR EACH PRE-EXISTING ELEMENT, SUBTRACT ITS INTERMEDIATE POSITION FROM ITS ORIGINAL POSITION 
			// TO GET ITS STARTING OFFSET
	
			$pre.each(function(){
				var data = this.data,
				$t = $(this);
				
				if ($t.hasClass('mix_tohide')){
					data.preTX = data.origPos.left - data.hideInterPos.left;
					data.preTY = data.origPos.top - data.hideInterPos.top;
				} else {
					data.preTX = data.origPos.left - data.preInterPos.left;
					data.preTY = data.origPos.top - data.preInterPos.top;
				};
				var preCSS = {};
				for(var i = 0; i<2; i++){
					var a = i==0 ? a = config.prefix : '';
					preCSS[a+'transform'] = 'translate('+data.preTX+'px,'+data.preTY+'px)';
				};
				
				$t.css(preCSS);	
			});
			
			// ADD/REMOVE GRID AND LIST CLASSES FROM CONTAINER
	
			if(config.layoutMode == 'list'){
				$cont.addClass(config.listClass);
				$cont.removeClass(config.gridClass);
			} else {
				$cont.addClass(config.gridClass);
				$cont.removeClass(config.listClass);
			};
			
			// WRAP ANIMATION FUNCTIONS IN 10ms TIMEOUT TO PREVENT RACE CONDITION
			
			var delay = setTimeout(function(){
		
				// APPLY TRANSITION TIMING TO CONTAINER, AND BEGIN ANIMATION TO NEW HEIGHT
				
				if(config.resizeContainer){
					var containerCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						containerCSS[a+'transition'] = 'all '+speed+'ms ease-in-out';
						containerCSS['height'] = config.newHeight+'px';
					};
					$par.css(containerCSS);
				};
	
				// BEGIN FADING IN/OUT OF ALL ELEMENTS TO SHOW/HIDE
				$tohide.css('opacity',config.fade);
				$toshow.css('opacity',1);
	
				// FOR EACH ELEMENT BEING SHOWN, CALCULATE ITS TRAJECTORY BY SUBTRACTING
				// ITS INTERMEDIATE POSITION FROM ITS FINAL POSITION.
				// ALSO ADD SPEED AND EASING
				
				$toshow.each(function(){
					var data = this.data;
					data.tX = data.finalPos.left - data.showInterPos.left;
					data.tY = data.finalPos.top - data.showInterPos.top;
					
					var toShowCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						toShowCSS[a+'transition-property'] = a+'transform, '+a+'filter, opacity';
						toShowCSS[a+'transition-timing-function'] = config.easing+', linear, linear';
						toShowCSS[a+'transition-duration'] = speed+'ms';
						toShowCSS[a+'transition-delay'] = '0';
						toShowCSS[a+'transform'] = 'translate('+data.tX+'px,'+data.tY+'px)';
						toShowCSS[a+'filter'] = 'none';
					};
					
					$(this).css('-webkit-transition', 'all '+speed+'ms '+config.easingFallback).css(toShowCSS);
				});
				
				// FOR EACH PRE-EXISTING ELEMENT, IF IT HAS A FINAL POSITION, CALCULATE 
				// ITS TRAJETORY BY SUBTRACTING ITS INTERMEDIATE POSITION FROM ITS FINAL POSITION.
				// ALSO ADD SPEED AND EASING
				
				$pre.each(function(){
					var data = this.data
					data.tX = data.finalPrePos.left != 0 ? data.finalPrePos.left - data.preInterPos.left : 0;
					data.tY = data.finalPrePos.left != 0 ? data.finalPrePos.top - data.preInterPos.top : 0;
					
					var preCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						preCSS[a+'transition'] = 'all '+speed+'ms '+config.easing;
						preCSS[a+'transform'] = 'translate('+data.tX+'px,'+data.tY+'px)';
					};
					
					$(this).css('-webkit-transition', 'all '+speed+'ms '+config.easingFallback).css(preCSS);
				});
		
				// BEGIN TRANSFORMS ON ALL ELEMENTS TO BE HIDDEN
				
				var toHideCSS = {};
				for(var i = 0; i<2; i++){
					var a = i==0 ? a = config.prefix : '';
					toHideCSS[a+'transition'] = 'all '+speed+'ms '+config.easing+', '+a+'filter '+speed+'ms linear, opacity '+speed+'ms linear';
					toHideCSS[a+'transform'] = config.scale+' '+config.rotateX+' '+config.rotateY+' '+config.rotateZ;
					toHideCSS[a+'filter'] = config.blur+' '+config.grayscale;
					toHideCSS['opacity'] = config.fade;
				};
				
				$tohide.css(toHideCSS);
				
				// ALL ANIMATIONS HAVE NOW BEEN STARTED, NOW LISTEN FOR TRANSITION END:
				
				$par.bind('webkitTransitionEnd transitionend otransitionend oTransitionEnd',function(e){
					
					if (e.originalEvent.propertyName.indexOf('transform') > -1 || e.originalEvent.propertyName.indexOf('opacity') > -1){
						
						if(mixSelector.indexOf('.') > -1){
						
						// IF MIXSELECTOR IS A CLASS NAME
						
							if($(e.target).hasClass(mixSelector.replace('.',''))){
								resetFilter();
							};
						
						} else {
							
						// IF MIXSELECTOR IS A TAG
						
							if($(e.target).is(mixSelector)){
								resetFilter();
							};
							
						};
						
					};
				});	
	
			},10);
			
			// LAST RESORT EMERGENCY FAILSAFE
			
			config.failsafe = setTimeout(function(){
				if(config.mixing){
					resetFilter();
				};
			}, speed + 400);
	
		} else {
			
		// ELSE IF NOTHING TO SHOW, AND EVERYTHING TO BE HIDDEN
		
			// IF WE ARE RESIZING CONTAINER, SET ITS STARTING HEIGHT
	
			if(config.resizeContainer)$par.css('height', config.origHeight+'px');
			
			// IF IE, FUCK OFF, AND THEN GO HOME
			
			if(!window.atob){
				resetFilter();
				return false;
			};
			
			// GROUP ALL ELEMENTS TO HIDE INTO JQUERY OBJECT
			
			$tohide = $hide;
			
			// WRAP ANIMATION FUNCTIONS IN A 10ms DELAY TO PREVENT RACE CONDITION
	
			var delay = setTimeout(function(){
				
				// APPLY PERSPECTIVE TO CONTAINER
	
				$par.css(config.perspective);
				
				// APPLY TRANSITION TIMING TO CONTAINER, AND BEGIN ANIMATION TO NEW HEIGHT
		
				if(config.resizeContainer){
					var containerCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						containerCSS[a+'transition'] = 'height '+speed+'ms ease-in-out';
						containerCSS['height'] = config.minHeight+'px';
					};
					$par.css(containerCSS);
				};
	
				// APPLY TRANSITION TIMING TO ALL TARGET ELEMENTS
				
				$targets.css(config.transition);
				
				// GET TOTAL NUMBER OF ELEMENTS TO HIDE
	
				var totalHide = $hide.length;
				
				// IF SOMETHING TO HIDE:
	
				if(totalHide){
					
					// BEGIN TRANSFORMS ON ALL ELEMENTS TO BE HIDDEN

					var toHideCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						toHideCSS[a+'transform'] = config.scale+' '+config.rotateX+' '+config.rotateY+' '+config.rotateZ;
						toHideCSS[a+'filter'] = config.blur+' '+config.grayscale;
						toHideCSS['opacity'] = config.fade;
					};

					$tohide.css(toHideCSS);
					
					// ALL ANIMATIONS HAVE NOW BEEN STARTED, NOW LISTEN FOR TRANSITION END:

					$par.bind('webkitTransitionEnd transitionend otransitionend oTransitionEnd',function(e){
						if (e.originalEvent.propertyName.indexOf('transform') > -1 || e.originalEvent.propertyName.indexOf('opacity') > -1){
							$cont.addClass(config.failClass);
							resetFilter();
						};
					});
		
				} else {
					
				// ELSE, WE'RE DONE MIXING
				 	
					config.mixing = false;
				};
	
			}, 10);
		}; 
		
		// CLEAN UP AND RESET FUNCTION

		function resetFilter(){
			
			// UNBIND TRANSITION END EVENTS FROM CONTAINER
			
			$par.unbind('webkitTransitionEnd transitionend otransitionend oTransitionEnd');
			
			// IF A SORT ARGUMENT HAS BEEN SENT, SORT ELEMENTS TO THEIR FINAL ORDER
			
			if(sortby){
				sort(sortby, order, $cont, config);
			};
			
			// EMPTY SORTING ARRAYS
		
			config.startOrder = [], config.newOrder = [], config.origSort = [], config.checkSort = [];
		
			// REMOVE INLINE STYLES FROM ALL TARGET ELEMENTS AND SLAM THE BRAKES ON
			
			$targets.removeStyle(
				config.prefix+'filter, filter, '+config.prefix+'transform, transform, opacity, display'
			).css(config.clean).removeAttr('data-checksum');
			
			// BECAUSE IE SUCKS
			
			if(!window.atob){
				$targets.css({
					display: 'none',
					opacity: '0'
				});
			};
			
			// REMOVE HEIGHT FROM CONTAINER ONLY IF RESIZING
			
			var remH = config.resizeContainer ? 'height' : '';
			
			// REMOVE INLINE STYLES FROM CONTAINER
		
			$par.removeStyle(
				config.prefix+'transition, transition, '+config.prefix+'perspective, perspective, '+config.prefix+'perspective-origin, perspective-origin, '+remH
			);
			
			// ADD FINAL DISPLAY PROPERTIES AND OPACITY TO ALL SHOWN ELEMENTS
			// CACHE CURRENT LAYOUT MODE & SORT FOR NEXT MIX
			
			if(config.layoutMode == 'list'){
				$show.css({display:config.targetDisplayList, opacity:'1'});
				config.origDisplay = config.targetDisplayList;
			} else {
				$show.css({display:config.targetDisplayGrid, opacity:'1'});
				config.origDisplay = config.targetDisplayGrid;
			};
			config.origLayout = config.layoutMode;
				
			var wait = setTimeout(function(){
				
				// LET GO OF THE BRAKES
				
				$targets.removeStyle(config.prefix+'transition, transition');
			
				// WE'RE DONE MIXING
			
				config.mixing = false;
			
				// FIRE "ONMIXEND" CALLBACK
			
				if(typeof config.onMixEnd == 'function') {
					var output = config.onMixEnd.call(this, config);
				
					// UPDATE CONFIG IF DATA RETURNED
				
					config = output ? output : config;
				};
			});
		};
	};
	
	// SORT FUNCTION
	
	function sort(sortby, order, $cont, config){

		// COMPARE BY ATTRIBUTE

		function compare(a,b) {
			var sortAttrA = isNaN(a.attr(sortby) * 1) ? a.attr(sortby).toLowerCase() : a.attr(sortby) * 1,
				sortAttrB = isNaN(b.attr(sortby) * 1) ? b.attr(sortby).toLowerCase() : b.attr(sortby) * 1;
		  	if (sortAttrA < sortAttrB)
		    	return -1;
		  	if (sortAttrA > sortAttrB)
		    	return 1;
		  	return 0;
		};
		
		// REBUILD DOM

		function rebuild(element){
			if(order == 'asc'){
				$sortWrapper.prepend(element).prepend(' ');
			} else {
				$sortWrapper.append(element).append(' ');
			};
		};
		
		// RANDOMIZE ARRAY

		function arrayShuffle(oldArray){
			var newArray = oldArray.slice();
		 	var len = newArray.length;
			var i = len;
			while (i--){
			 	var p = parseInt(Math.random()*len);
				var t = newArray[i];
		  		newArray[i] = newArray[p];
			  	newArray[p] = t;
		 	};
			return newArray; 
		};
		
		// SORT
		
		$cont.find(config.targetSelector).wrapAll('<div class="mix_sorter"/>');
		
		var $sortWrapper = $cont.find('.mix_sorter');
		
		if(!config.origSort.length){
			$sortWrapper.find(config.targetSelector+':visible').each(function(){
				$(this).wrap('<s/>');
				config.origSort.push($(this).parent().html().replace(/\s+/g, ''));
				$(this).unwrap();
			});
		};
		
		
		
		$sortWrapper.empty();
		
		if(sortby == 'reset'){
			$.each(config.startOrder,function(){
				$sortWrapper.append(this).append(' ');
			});
		} else if(sortby == 'default'){
			$.each(config.origOrder,function(){
				rebuild(this);
			});
		} else if(sortby == 'random'){
			if(!config.newOrder.length){
				config.newOrder = arrayShuffle(config.startOrder);
			};
			$.each(config.newOrder,function(){
				$sortWrapper.append(this).append(' ');
			});	
		} else if(sortby == 'custom'){
			$.each(order, function(){
				rebuild(this);
			});
		} else { 
			// SORT BY ATTRIBUTE
			
			if(typeof config.origOrder[0].attr(sortby) === 'undefined'){
				console.log('No such attribute found. Terminating');
				return false;
			};
			
			if(!config.newOrder.length){
				$.each(config.origOrder,function(){
					config.newOrder.push($(this));
				});
				config.newOrder.sort(compare);
			};
			$.each(config.newOrder,function(){
				rebuild(this);
			});
			
		};
		config.checkSort = [];
		$sortWrapper.find(config.targetSelector+':visible').each(function(i){
			var $t = $(this);
			if(i == 0){
				
				// PREVENT COMPARE RETURNING FALSE POSITIVES ON ELEMENTS WITH NO CLASS/ATTRIBUTES
				
				$t.attr('data-checksum','1');
			};
			$t.wrap('<s/>');
			config.checkSort.push($t.parent().html().replace(/\s+/g, ''));
			$t.unwrap();
		});
		
		$cont.find(config.targetSelector).unwrap();
	};
	
	// FIND VENDOR PREFIX

	function prefix(el) {
	    var prefixes = ["Webkit", "Moz", "O", "ms"];
	    for (var i = 0; i < prefixes.length; i++){
	        if (prefixes[i] + "Transition" in el.style){
	            return prefixes[i];
	        };
	    };
	    return "transition" in el.style ? "" : false;
	};
	
	// REMOVE SPECIFIC STYLES
	
	$.fn.removeStyle = function(style){
		return this.each(function(){
			var obj = $(this);
			style = style.replace(/\s+/g, '');
			var styles = style.split(',');
			$.each(styles,function(){
				
				var search = new RegExp(this.toString() + '[^;]+;?', 'g');
				obj.attr('style', function(i, style){
					if(style) return style.replace(search, '');
			    });
			});
		});
    };

	// COMPARE ARRAYS 
	
	function compareArr(a,b){
	    if (a.length != b.length) return false;
	    for (var i = 0; i < b.length; i++){
	        if (a[i].compare) { 
	            if (!a[i].compare(b[i])) return false;
	        };
	        if (a[i] !== b[i]) return false;
	    };
	    return true;
	};
	
	// BUILD FILTER ARRAY(S)
	
	function buildFilterArray(str){
		// CLEAN FILTER STRING
		str = str.replace(/\s{2,}/g, ' ');
		// FOR EACH PEROID SEPERATED CLASS NAME, ADD STRING TO FILTER ARRAY
		var arr = str.split(' ');
		// IF ALL, REPLACE WITH MIX_ALL
		$.each(arr,function(i){
			if(this == 'all')arr[i] = 'mix_all';
		});
		if(arr[0] == "")arr.shift(); 
		return arr;
	};

	
})(jQuery);
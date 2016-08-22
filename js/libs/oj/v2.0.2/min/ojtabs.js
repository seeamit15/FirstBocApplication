/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojconveyorbelt","ojs/ojmenu","jqueryui-amd/sortable","ojs/ojtouchproxy"],function(a,f){(function(){var b={cut:"ojtabscut","paste-before":"ojtabspastebefore","paste-after":"ojtabspasteafter",remove:"ojtabsremove"},d={cut:"labelCut","paste-before":"labelPasteBefore","paste-after":"labelPasteAfter",remove:"labelRemove"};a.ya("oj.ojTabs",f.oj.baseComponent,{widgetEventPrefix:"oj",delay:300,options:{selected:0,disabledTabs:null,truncation:"auto",
selectOn:"click",orientation:"horizontal",edge:"top",removable:!1,reorderable:!1,beforeSelect:null,select:null,beforeDeselect:null,deselect:null,beforeRemove:null,remove:null,beforeReorder:null,reorder:null,optionChange:null},_ComponentCreate:function(){var a=this.options;this._super();this.aP=!1;this.fh=!0;this.ZL(a.edge);this.BY=0==this.element.children("ul").length;this.fca();this.RZ();this.pa={};this.pa.Pe=!1;this.pa.$m=!1;this.pa.np=!1;this.co();this.Qd();a=this.wW(a.selected);void 0===a&&(a=
0);this.wB(a);this.fh=void 0},wB:function(a,b){this.yC(a)&&(a=this.IW(a));this.Xv(void 0===a?void 0:f(this.gb[a]),b)},uf:function(a,b,d){if(this.Cha(b.target)&&(!this.oM||!this.oM.uD)){var h="keyboard"===d;if("contextmenu"==b.type||h||"touch"==d){var k=f(b.target).closest("li");a={launcher:k};this.pa.tab=h?this.Ca:a.launcher;if(this.pa.tab){if(this.pa.ZE){if(k.hasClass("oj-disabled")&&1==this.pa.Pe.children().length){b.preventDefault();return}k.hasClass("oj-disabled")?this.pa.ZE.addClass("oj-disabled"):
this.pa.ZE.removeClass("oj-disabled")}if(this.pa.$m||this.pa.np)h=!this.pa.XD,this.pa.$m.hasClass("oj-disabled")!=h&&(h?(this.pa.$m.addClass("oj-disabled"),this.pa.np.addClass("oj-disabled")):(this.pa.$m.removeClass("oj-disabled"),this.pa.np.removeClass("oj-disabled")),this.pa.Pe.ojMenu("refresh"));this.wf(b,d,a)}else b.preventDefault()}}},mma:function(a){if(!this.HX(a)){var b=f(this.document[0].activeElement).closest("li"),d=this.Lw(),h=d.index(b),k=d.length;switch(a.keyCode){case f.ui.keyCode.RIGHT:case f.ui.keyCode.DOWN:h=
(h+1)%k;break;case f.ui.keyCode.UP:case f.ui.keyCode.LEFT:h=((0==h?k:h)-1)%k;break;case f.ui.keyCode.END:h=k-1;break;case f.ui.keyCode.HOME:h=0;break;case 46:this.options.removable&&(b=this.mt(this.Ca))&&(a.preventDefault(),this.yL({target:b,currentTarget:b,preventDefault:f.noop},a));return;default:return}a.preventDefault();clearTimeout(this.ina);var l=f(d[h]);l.focus();if(!a.ctrlKey){b.attr("aria-selected","false");l.attr("aria-selected","true");this.Vw(l);var m=this;this.ina=this._delay(function(){m&&
m.gb&&m.Xv(l,a)},this.delay)}}},Xia:function(a){f(a.target).closest(".oj-tabs-selected").attr("id")===this.element.children(".oj-tabs-selected").attr("id")&&!this.HX(a)&&a.ctrlKey&&a.keyCode===f.ui.keyCode.UP&&(a.preventDefault(),this.Ca.focus())},HX:function(a){var b=this.xJ();if(a.ctrlKey&&a.keyCode===f.ui.keyCode.PAGE_UP)return this.Xv(this.SV(b,!1)),!0;if(a.ctrlKey&&a.keyCode===f.ui.keyCode.PAGE_DOWN)return this.Xv(this.SV(b,!0)),!0},yC:function(a){return 0<=a&&a<this.gb.length?f(this.gb[a]).hasClass("oj-disabled"):
!1},SV:function(a,b){var d=this.Lw(),h=d.index(this.gb[a]),k=d.length,d=f(d[b?(h+1)%k:((0==h?k:h)-1)%k]);d.focus();return d},IW:function(a){for(var b=a+1,d=this.gb.length-1;b<=d;){if(!this.yC(b))return b;b++}for(b=a-1;0<=b;){if(!this.yC(b))return b;b--}},Lb:function(){return"top"==this.options.edge||"bottom"==this.options.edge},_setOption:function(a,b,d){"selected"===a?(b=this.gX(b),void 0!==b&&this.Xv(b)):"disabledTabs"===a?Array.isArray(b)&&(this.s0(b),a=this.xJ(),this.yC(a)&&this.wB(a),this.refresh()):
"removable"===a||"truncation"===a?b!=this.options[a]&&(this._super(a,b,d),this.refresh()):"reorderable"===a?b!==this.options.reorderable&&(this._super(a,b,d),this.refresh()):"orientation"===a?this.yI||(a=this.CZ(b))&&this.ZL(a)&&this.refresh():"edge"===a?this.ZL(b)&&(this.yI=!0,this._super(a,b,d),this.refresh()):"selectOn"===a?(this.ku(!0),this._super(a,b,d),this.Fj()):("contextMenu"===a&&(this.Zp(),b&&this.co(b)),this._super(a,b,d),"translations"===a&&d&&"removeCueText"===d.subkey&&this.Rc&&this.mt(this.Rc).attr("aria-label",
b?b.removeCueText:""))},refresh:function(){this._super();this.RZ();this.Qd()},Qd:function(){var a=this.element.children(".oj-tabs-selected");this.Ca=a.length?this.Rc.children(".oj-selected"):f();this.Aba();this.Fj();this.gb.not(this.Ca).attr({"aria-selected":"false",tabIndex:"-1"});this.Uh.not(this.Zn(this.Ca)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});this.Ca.length?(this.Ca.addClass("oj-selected").attr({"aria-selected":"true",tabIndex:"0"}),a.show().attr("aria-expanded","true").removeAttr("aria-hidden")):
f(this.gb[0]).attr("tabIndex","0");this.Lb()&&(0<this.gb.length?(this.Hma(),this.y$()):this.CJ(),this.B$());void 0===this.options.selected||0==this.xJ()?this.element.addClass("oj-first-child-selected"):this.element.removeClass("oj-first-child-selected");this.Rla()},y$:function(){var a=this.Rc.uniqueId().attr("id");this.sm=this.CJ().parent().ojConveyorBelt({orientation:"horizontal",contentParent:"#"+a});a=this.sm.parent();if(a.hasClass("oj-tabs-conveyorbelt-wrapper")){var b="0 1 "+this.Rda()+"px";
a.css("flex",b);a.css("-webkit-flex",b);a.css("-ms-flex",b)}},RZ:function(){var a=this,b=this.options.edge;this.dV();this.eca();this.Rc=this.element.children("ul").addClass("oj-tabs-nav oj-helper-clearfix").attr("role","tablist");var d=this.Rc.index();this.element.children(".oj-tabs-facet").each(function(){var a=f(this);a.index()<d?a.addClass("oj-start"):a.removeClass("oj-start")});var h=this.element.children(".oj-tabs-panel");"start"==b||"top"==b?f(h[0]).before(this.Rc):f(h[h.length-1]).after(this.Rc);
this.gb=f();this.Uh=f();this.Rc.children("li").each(function(){var b=f(this).addClass("oj-tabs-tab").attr({role:"tab",tabIndex:"-1"}).removeAttr("aria-hidden"),d=b.children();d.addClass("oj-tabs-tab-content");d=d.children();d.addClass("oj-tabs-anchor").attr({role:"presentation",tabIndex:"-1"});d.children().addClass("oj-tabs-title").removeAttr("aria-hidden");a.gb=a.gb.add(b);var d=d.uniqueId().attr("id"),e=b.attr("data-content"),g=a.element.find(a.GL("#"+e));b.attr({"aria-controls":e,"aria-labelledby":d});
a.Uh=a.Uh.add(g);g.attr("aria-labelledby",d).attr("role","tabpanel")});"start"!=b&&"end"!=b||a.Rc.addClass("oj-tabs-nav-root");this.fh&&this.s0(this.options.disabledTabs)},Fj:function(){var b={keydown:this.mma},d=this.options.selectOn,g=!1;if(d){var h=this;f.each(d.split(" "),function(d,e){"click"==e&&(g=!0);a.v.vE(e)&&(b[e]=h.pB)})}d=this.Lw();this._on(d,b);g||this._on(d,{click:function(a){a.preventDefault()}});this.Uh.on("keydown"+this.eventNamespace,this.Xia.bind(this));if(this.options.removable){var k=
{click:this.yL};this._on(this.mt(d),k)}this._focusable(d);this._hoverable(d);this.Up(d)},ku:function(a){var b=this.Lw();a||this.Qp(this.mt(b));this.Qp(b);this.Uh&&this.Uh.off("keydown"+this.eventNamespace)},pB:function(a,b){var d=this.Ca,h=f(a.currentTarget).closest("li"),k=d&&h[0]===d[0],l=this.Zn(h),m=d&&d.length?this.Zn(d):f(),d={fromTab:d,fromContent:m,toTab:h,toContent:l};a.preventDefault();var n=b?b:a;h.hasClass("oj-disabled")||this.aP||k||m&&m.length&&!1===this._trigger("beforeDeselect",n,
d)||!this.fh&&!1===this._trigger("beforeSelect",n,d)||(this.fh?this.options.selected=this.Vw(h):this.option("selected",this.Vw(h),{_context:{originalEvent:n,Wa:!0}}),this.Ca=h,l.addClass("oj-tabs-selected"),m&&m.length&&m.removeClass("oj-tabs-selected"),this.zma(n,d))},zma:function(b,d){var g=d.toTab.closest("li"),h=d.toContent,k=d.fromContent;this.aP=!0;var l=d.fromTab.closest("li").removeClass("oj-selected");k.hide();0<k.length&&a.Components.jp(k[0]);g.addClass("oj-selected");this.Lb()&&0<this.gb.length&&
(0==g.index()?this.element.addClass("oj-first-child-selected"):this.element.removeClass("oj-first-child-selected"));h.show();0<h.length&&a.Components.Vm(h[0]);this.aP=!1;this.fh||(this._trigger("deselect",b,d),this._trigger("select",b,d));k.attr({"aria-expanded":"false","aria-hidden":"true"});l.attr("aria-selected","false");h.length&&k.length?l.attr("tabIndex","-1"):h.length&&this.gb.filter(function(){return"0"===f(this).attr("tabIndex")}).attr("tabIndex","-1");h.attr("aria-expanded","true").removeAttr("aria-hidden");
g.attr({"aria-selected":"true",tabIndex:"0"})},Xv:function(a,b){if(void 0!==a){var d;this.Ca&&a[0]===this.Ca[0]||(d=a.find(".oj-tabs-anchor")[0],this.pB({target:d,currentTarget:d,preventDefault:f.noop},b))}},Aba:function(){if(this.options.removable&&this.Lb()){var a=this.A("removeCueText");this.Lw().each(function(b){var d=f(this).find("\x3e :first-child");d.addClass("oj-removable");b="ojtabs-id_rm_"+b;f(this).attr("aria-describedby",b);f("\x3ca href\x3d'#'\x3e").addClass("oj-tabs-icon oj-component-icon oj-clickable-icon-nocontext oj-tabs-close-icon").attr({id:b,
tabIndex:"-1","aria-label":a,role:"presentation"}).appendTo(d)})}},Lw:function(){return f(this.gb.not(".oj-disabled"))},mt:function(a){return a.find(".oj-tabs-close-icon")},dV:function(){this.gb&&this.ku();this.OX&&(a.v.Si(this.element[0],this.Le),this.OX=!1,this.WK=void 0);this.dM&&(a.v.Ud()&&this.o1(),this.Rc.sortable("destroy"),this.dM=void 0);var b=this.element.children(".oj-tabs-nav-root"),d=!b.hasClass("oj-tabs-nav");if(this.gb&&(this.mt(this.gb).remove(),b.length)){var g=b,h=!0,k=this.Rc;b.children().each(function(){var a=
f(this);if(a.hasClass("oj-tabs-conveyorbelt-wrapper"))a=k;else if(!a.hasClass("oj-tabs-facet"))return;h=!1;g.after(a);g=a});h&&d&&b.after(k)}this.sm&&(this.sm.ojConveyorBelt("destroy"),this.sm.remove(),this.Ca=this.sm=null);d&&b.remove();this.Rc=this.gb=null},_destroy:function(){this.Zp();this.Lb()?this.element.removeClass("oj-tabs oj-component oj-tabs-horizontal oj-tabs-top oj-tabs-bottom oj-first-child-selected"):this.element.removeClass("oj-tabs oj-component oj-tabs-vertical oj-tabs-start oj-tabs-end oj-helper-clearfix");
var a=this,b,d,h,k;this.gb.each(function(l){b=f(this);b.removeAttr("tabIndex").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-controls").removeAttr("aria-disabled").removeAttr("role").removeAttr("data-content").removeClass("oj-active oj-disabled oj-selected oj-tabs-gen-id oj-tabs-tab").removeUniqueId().css("display","");d=b.children("div").removeClass("oj-tabs-tab-content");h=d.children("a").removeClass("oj-tabs-anchor").removeAttr("tabIndex").removeAttr("role");
k=h.children();k.removeClass("oj-tabs-title").removeAttr("aria-hidden");a.BY?k.prependTo(a.Uh.get(l)):d.hasClass("oj-tabs-gen-div")&&h.hasClass("oj-tabs-gen-a")?(k.prependTo(b),d.remove()):h.hasClass("oj-tabs-gen-a")?(k.prependTo(d),h.remove()):d.hasClass("oj-tabs-gen-div")&&(h.prependTo(b),d.remove())});var l=this.Rc;this.dV();l.removeAttr("tabIndex").removeAttr("role").removeClass("oj-tabs-nav oj-tabs-nav-root oj-helper-clearfix").removeUniqueId();this.BY&&l.remove();this.Uh.each(function(){f(this).removeAttr("tabIndex").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("role").removeClass("oj-active oj-tabs-selected oj-tabs-gen-id oj-tabs-panel").removeUniqueId().css("display",
"")});this.element.children(".oj-tabs-facet").removeClass("oj-start")},yL:function(a,b){var d=f(a.currentTarget).closest("li"),h=this.Zn(d),k={tab:d,content:h},l=b?b:a;if(d&&!1!==this._trigger("beforeRemove",l,k)){a.preventDefault();if(d.hasClass("oj-selected")){var m=this.IW(this.gb.index(d));void 0===m?(this.Ca=void 0,this.option("selected",void 0,{_context:{originalEvent:l,Wa:!0}})):(this.wB(m,l),this.option("selected",this.Vw(f(this.gb[m])),{_context:{originalEvent:l,Wa:!0}}))}this.ku();this.gb=
this.gb.not(d);d.remove();h.remove();this.NM();this.refresh();this._trigger("remove",l,k)}},ND:function(a,b){var d;if("li"==a.prop("tagName").toLowerCase()){d=a;var f=d.children("div");1==f.length&&f.hasClass("oj-tabs-tab-content")?(f=f.children("a"),1!=f.length&&(d.wrapInner("\x3ca href\x3d'#'\x3e\x3c/a\x3e"),f.addClass("oj-tabs-gen-a"))):(f=d.wrapInner("\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e").children(),f.addClass("oj-tabs-gen-div oj-tabs-tab-content"),f.children().addClass("oj-tabs-gen-a"))}else d=
a.wrap("\x3cli\x3e\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e\x3c/li\x3e").parent().parent().parent(),d.addClass("oj-tabs-gen-li"),d.children().addClass("oj-tabs-gen-div oj-tabs-tab-content");b&&d.attr("data-content",b);return d},addTab:function(a){var b,d,h=-1;a.tab&&a.content?(d=a.content,b=this.ND(a.tab,this.dC(d)),void 0!==a.index&&(h=a.index)):(d=a,b=this.ND(f(a).find("\x3e :first-child"),this.dC(d)));a=this.element.children(".oj-tabs-nav-root");a=a.hasClass("oj-tabs-nav")?a:a.length?
a.find(".oj-tabs-nav"):this.element.children(".oj-tabs-nav");var k=!1;a.length||(a=f("\x3cul\x3e"),k=!0);k&&a.prependTo(this.element);0<=h&&h<a.children().length?(h=a.children(":eq("+h+")"),a=this.element.children("#"+h.attr("aria-controls")),h.before(b),a.before(d)):(b.appendTo(a),d.appendTo(this.element));this.refresh();0==this.Ca.length&&this.wB(0);var l=this;window.setTimeout(function(){l.gb&&b[0].scrollIntoView(!1)},0)},Tla:function(){this.oM=a.He.P1(this.Rc)},o1:function(){a.He.p5(this.Rc)},
Rla:function(){if(this.options.reorderable){var b=this;a.v.Ud()&&this.Tla();this.Rc.sortable({axis:b.Lb()?"x":"y",stop:function(a,d){var f=d.item;b.nV(a,f,f.prev())||b.Rc.sortable("cancel")}});this.dM=!0}else this.o1(),this.dM=!1},ae:function(a,b){var d=b.edge;this.yI="top"==d||"bottom"==d||"start"==d||"end"==d;this._super(a,b)},CZ:function(a){return"horizontal"==a?"top":"vertical"==a?"start":null},ZL:function(a){if(this.fh&&!this.yI||!a)a=this.CZ(this.options.orientation);var b=this.options.edge;
this.element.removeClass("oj-tabs-top oj-tabs-bottom oj-tabs-start oj-tabs-end");switch(a){case "top":case "bottom":!this.Uh||"start"!=b&&"end"!=b||this.element.removeClass("oj-tabs-vertical oj-helper-clearfix");this.element.addClass("oj-tabs oj-component oj-tabs-horizontal");"bottom"==a?this.element.addClass("oj-tabs-bottom"):this.element.addClass("oj-tabs-top");this.fh?this.options.orientation="horizontal":"horizontal"!=this.options.orientation&&this.option("orientation","horizontal",{_context:{Wa:!0},
changed:!0});break;case "start":case "end":!this.Uh||"top"!=b&&"bottom"!=b||this.element.removeClass("oj-tabs-horizontal");this.element.addClass("oj-tabs oj-component oj-tabs-vertical oj-helper-clearfix");"end"==a?this.element.addClass("oj-tabs-end"):this.element.addClass("oj-tabs-start");this.fh?this.options.orientation="vertical":"vertical"!=this.options.orientation&&this.option("orientation","vertical",{_context:{Wa:!0},changed:!0});break;default:return!1}this.fh?this.options.edge=a:this.options.edge!=
a&&this.option("edge",a,{_context:{Wa:!0},changed:!0});return!0},CJ:function(){var a=this.Rc.parent();a.hasClass("oj-tabs-conveyor")||(a=this.Rc.wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-conveyor"),(0<this.element.children(".oj-tabs-facet").length?a.wrap("\x3cdiv\x3e").wrap("\x3cdiv\x3e").parent().parent().addClass("oj-tabs-conveyorbelt-wrapper"):a).wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-nav-root").uniqueId().attr("id"));return a},Pra:function(a){0>a.id.indexOf("ojtabs-id_")&&f(a).attr("id",
"ojtabs-id_"+a.id)},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;var b=a.subId;a=a.index;if("oj-conveyorbelt"!=b&&("number"!==typeof a||0>a||a>=this.Uh.length))return null;switch(b){case "oj-conveyorbelt":return this.sm?this.sm[0]:null;case "oj-tabs-panel":return this.Zn(this.gb[a])[0];case "oj-tabs-tab":return this.gb[a];case "oj-tabs-title":return f(this.gb[a]).find(".oj-tabs-title")[0];case "oj-tabs-close-icon":case "oj-tabs-close":return f(this.gb[a]).find(".oj-tabs-close-icon")[0]}return null},
getSubIdByNode:function(a){for(var b=[],d=0;d<this.gb.length;d++)b.push(this.Zn(this.gb[d])[0]);for(var f=d=-1,k=a;k;){if(this.sm&&k===this.sm[0])return{subId:"oj-conveyorbelt"};d=Array.prototype.indexOf.call(this.gb,k);if(-1!=d)break;f=b.indexOf(k);if(-1!=f)return{subId:"oj-tabs-panel",index:f};k=k.parentElement}if(-1!=d)for(b=this.getNodeBySubId({subId:"oj-tabs-title",index:d}),f=this.getNodeBySubId({subId:"oj-tabs-close",index:d}),k=a;k;){if(k===b)return{subId:"oj-tabs-title",index:d};if(k===f)return{subId:"oj-tabs-close",
index:d};if(k===this.gb[d])return{subId:"oj-tabs-tab",index:d};k=k.parentElement}return null},Rda:function(){return this.WK+10},hX:function(){var a=this.element.find(".oj-tabs-conveyorbelt-wrapper");return a.length?a[0].clientWidth:this.element[0].clientWidth},DY:function(){return this.WK>this.hX()},Zea:function(){var a=Math.floor(this.hX()/this.gb.length);this.options.removable&&(a-=28);return a},qT:function(){var a=this.Zea();this.Rc.find(".oj-tabs-title").each(function(){f(this).css("max-width",
""+a+"px").addClass("oj-tabs-title-overflow")})},vka:function(){this.Rc.find(".oj-tabs-title").each(function(){f(this).css("max-width","").removeClass("oj-tabs-title-overflow")})},qsa:function(){},af:function(){this.IY()&&(this.DY()?this.qT():this.vka())},IY:function(){return"auto"==this.options.truncation||"progressive"==this.options.truncation},Hma:function(){this.Lb()&&0<this.gb.length&&(null==this.Le&&(this.Le=this.af.bind(this)),a.v.Ph(this.element[0],this.Le),this.OX=!0,this.WK=this.CJ()[0].scrollWidth,
this.IY()&&this.DY()&&this.qT())},Al:function(){this._super();this.refresh()},wn:function(){this._super();this.refresh()},ti:function(a){return f("\x3ca\x3e").text(this.A(d[a])).attr("href","#").wrap("\x3cli\x3e").parent().attr("id",b[a]).addClass("oj-menu-item")},oia:function(a){if(!a||!a.length)return!1;this.pa.XD=a},kZ:function(a,b,d){if(!b||!b.length||!this.pa.XD)return!1;var f=this.pa.XD;this.pa.XD=!1;this.nV(a,f,b,d)},pia:function(a,b){if(!b||!b.length)return!1;var d=this.mt(b);this.yL({target:d,
currentTarget:d,preventDefault:f.noop},a)},uj:function(a,b){var d=b?b.item.attr("id"):void 0;"ojtabscut"===d?this.oia(this.pa.tab):"ojtabspastebefore"===d?this.kZ(a,this.pa.tab,!0):"ojtabspasteafter"===d?this.kZ(a,this.pa.tab,!1):"ojtabsremove"===d&&this.pia(a,this.pa.tab)},co:function(a){if(a=a||this.options.contextMenu){var b=f.type(a);if("function"==b){try{a=a()}catch(d){a=null}b=f.type(a)}"string"==b&&a&&f(a).length&&(this.options.contextMenu=a)}this.zA()},DA:function(a,b,d){-1==b.indexOf(d)&&
(b=this.ti(d),a.append(b))},zA:function(){var a=f(this.options.contextMenu);if(a||this.options.reorderable||this.options.removable){var b=this;if(0==a.length){var g=this.options.reorderable?"labelReorder":d.remove,h=this.element.uniqueId().attr("id")+"contextmenu",a=f("\x3cul\x3e");a.css("display","none").attr("id",h).attr("aria-label",this.A(g));f(document.body).append(a);a.ojMenu();this.options.contextMenu="#"+h}var k=[];a.find("[data-oj-command]").each(function(){if(0===f(this).children("a").length){var a=
f(this).attr("data-oj-command").slice(8);f(this).replaceWith(b.ti(a));f(this).addClass("oj-menu-item");k.push(a)}});this.options.reorderable&&(this.DA(a,k,"cut"),this.DA(a,k,"paste-before"),this.DA(a,k,"paste-after"),this.pa.$m=a.find("#ojtabspastebefore"),this.pa.np=a.find("#ojtabspasteafter"));this.options.removable&&(this.DA(a,k,"remove"),this.pa.ZE=a.find("#ojtabsremove"));this.pa.Pe=a;a.ojMenu("refresh");a.on("ojselect",f.proxy(this.uj,this))}},Zp:function(){var a=this.pa;a&&(a.Pe.off("ojselect"),
a.Pe=null)},nV:function(a,b,d,f){var k=this.Zn(b),l={tab:b,content:k};if(!1===this._trigger("beforeReorder",a,l))return!1;var m=this.gb.index(b);if(d.length){if(this.gb.index(d)==m)return!0;m=this.Zn(d);f?(d.before(b),m.before(k)):(d.after(b),m.after(k))}else if(0<this.gb.length){if(0==m)return!0;this.gb.first().before(b);this.Uh.first().before(k)}this.NM();this.refresh();b.focus();this._trigger("reorder",a,l);return!0},GL:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$\x26"):
""},Zn:function(a){return this.element.find(this.GL("#"+f(a).attr("aria-controls")))},dC:function(a){var b=a.attr("id");b||(b=a.uniqueId().attr("id"),a.addClass("oj-tabs-gen-id"));return b},gX:function(a){a=this.wW(a);if(-1!==a)return f(this.gb[a])},wW:function(b){var d=-1;"number"===typeof b?0<=b&&b<this.gb.length&&(d=b):"string"===typeof b&&(b=this.GL(b),a.v.vE(b)&&(b=this.element.find("#"+b),b.length&&(d=this.gb.index(b),-1==d&&(d=this.Uh.index(b)))));return d},xJ:function(){var a=this.options.selected;
return"number"===typeof a?a:this.gb.index(f("#"+a))},Vw:function(a){if(a){var b=a.attr("id");return b?b:this.gb.index(a)}},s0:function(a){var b=(this.Rc?this.Rc:this.element.children("ul")).children("li");b.removeClass("oj-disabled").removeAttr("aria-disabled");var d=[];if(a&&0<a.length)for(var f,k,l=0;l<a.length;l++)if(k=this.gX(a[l]))k.addClass("oj-disabled"),k.attr("aria-disabled","true"),k.find(".oj-tabs-anchor").removeAttr("href"),f=k.attr("id"),d.push(f?f:b.index(k));this.NM(d)},NM:function(b){if(!b){b=
[];var d=this;this.Rc.children().each(function(){var a=f(this);a.hasClass("oj-disabled")&&b.push(d.Vw(a))})}a.b.oU(this.options.disabledTabs,b)||(this.fh?this.options.disabledTabs=b:this.option({disabledTabs:b},{_context:{Wa:!0,Hc:!0},changed:!0}))},Cha:function(a){var b=!1;this.gb.each(function(){if(this===a||f.contains(this,a))return b=!0,!1});return b},eca:function(){var a=this.cW(),b=this,d=this.element.children("ul");0<d.length&&d.children("li").each(function(d){b.ND(f(this),a[d])})},fca:function(){var a=
this.element.children("ul");if(0==a.length){var b=this,d=this.cW(),a=f("\x3cul\x3e");this.element.children().each(function(h){b.ND(f(this).find("\x3e :first-child"),d[h]).appendTo(a)});a.prependTo(this.element)}},B$:function(){var a=this.element.children(".oj-tabs-nav-root"),b=this,d=a.children(".oj-tabs-conveyorbelt-wrapper");a.index();this.element.children(".oj-tabs-facet").each(function(){var h=f(this),k=b.dC(h);0==a.find("#"+k).length&&(h.hasClass("oj-start")?d.before(h):h.appendTo(a))})},cW:function(){var a=
[],b=this;this.element.children(":not(ul):not(.oj-tabs-facet)").each(function(){var d=f(this);d.addClass("oj-tabs-panel");a.push(b.dC(d))});return a}})})()});
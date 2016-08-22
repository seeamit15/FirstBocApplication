/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
var o_a=this;function o_(a,f,b){a=a.split(".");b=b||o_a;a[0]in b||!b.execScript||b.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===f?b=b[d]?b[d]:b[d]={}:b[d]=f};/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["require","ojL10n!ojtranslations/nls/ojtranslations"],function(a,f){var b={};"undefined"!==typeof window?b=window:"undefined"!==typeof self&&(b=self);var d=b.oj,c=b.oj={version:"2.0.2",build:"",revision:"26451",noConflict:function(){b.oj=d}};c.q={};o_("Logger",c.q,c);c.q.U6=0;o_("Logger.LEVEL_NONE",c.q.U6,c);c.q.AF=1;o_("Logger.LEVEL_ERROR",c.q.AF,c);c.q.hn=2;o_("Logger.LEVEL_WARN",c.q.hn,c);c.q.Zr=3;o_("Logger.LEVEL_INFO",c.q.Zr,c);c.q.gQ=4;o_("Logger.LEVEL_LOG",
c.q.gQ,c);c.q.R8="error";c.q.U8="warn";c.q.S8="info";c.q.T8="log";c.q.UU={level:c.q.AF,writer:null};c.q.kb=c.q.UU;c.q.error=function(b){c.q.ty(c.q.AF,c.q.R8,arguments)};o_("Logger.error",c.q.error,c);c.q.info=function(b){c.q.ty(c.q.Zr,c.q.S8,arguments)};o_("Logger.info",c.q.info,c);c.q.warn=function(b){c.q.ty(c.q.hn,c.q.U8,arguments)};o_("Logger.warn",c.q.warn,c);c.q.log=function(b){c.q.ty(c.q.gQ,c.q.T8,arguments)};o_("Logger.log",c.q.log,c);c.q.option=function(b,a){var d={},e;if(0==arguments.length){for(e in c.q.kb)c.q.kb.hasOwnProperty(e)&&
(d[e]=c.q.kb[e]);return d}if("string"===typeof b&&void 0===a)return void 0===c.q.kb[b]?null:c.q.kb[b];if("string"===typeof b)c.q.kb[b]=a;else for(e in b)b.hasOwnProperty(e)&&c.q.option(e,b[e])};o_("Logger.option",c.q.option,c);c.q.ty=function(b,a,d){if(!(c.q.option("level")<b)){var e=c.q.ffa();null!=e&&(1==d.length&&d[0]instanceof Function&&(d=[d[0]()]),e[a]&&e[a].apply?e[a].apply(e,d):e[a]&&(e[a]=Function.prototype.bind.call(e[a],e),c.q.ty(b,a,d)))}};c.q.ffa=function(){var b=null;c.q.option("writer")?
b=c.q.option("writer"):"undefined"!==typeof window&&void 0!==window.console&&(b=window.console);return b};c.q.vsa=function(b){return void 0!==c.q.UU[b]};var e=b.__ojCheckpointManager;c.Wh={};o_("CHECKPOINT_MANAGER",c.Wh,c);c.Wh.Mqa=function(b,a){e&&e.startCheckpoint(b,a)};o_("CHECKPOINT_MANAGER.startCheckpoint",c.Wh.Mqa,c);c.Wh.toa=function(b){e&&e.endCheckpoint(b)};o_("CHECKPOINT_MANAGER.endCheckpoint",c.Wh.toa,c);c.Wh.TN=function(b){return e?e.getRecord(b):void 0};o_("CHECKPOINT_MANAGER.getRecord",
c.Wh.TN,c);c.Wh.H4=function(b){return e?e.matchRecords(b):[]};o_("CHECKPOINT_MANAGER.matchRecords",c.Wh.H4,c);c.Wh.qoa=function(b){c.q.info(function(){for(var a="Checkpoint Records:",d=c.Wh.H4(b),e=0;e<d.length;e++){var g=d[e],a=a+"\n"+g.name,f=g.description;null!=f&&(a=a+" ("+f+")");a+=":\n";a=a+"start: "+g.start+"\tduration: "+g.duration}return a})};o_("CHECKPOINT_MANAGER.dump",c.Wh.qoa,c);c.b=function(){this.Init()};o_("Object",c.b,c);c.b.r=null;c.b.FM="oj.Object";c.b.p8=/function\s+([\w\$][\w\$\d]*)\s*\(/;
c.b.prototype={};c.b.prototype.constructor=c.b;c.b.g=function(b,a){var d=null,e=null,g;for(g in a)if(a.hasOwnProperty(g)){d=g;e=a[g];break}var f=b.split(".");g=c[f[0]];f=f[2];if(d!=f&&null!=d){var r=g.lL;r||(r={},g.lL=r);r[d]=f;g.prototype[f]=e}};c.b.ga=function(b,a,d){c.l.Ho(b);c.l.wu(a);c.l.bN(d);void 0===a&&(a=c.b);c.l.assert(b!==a,"Class can't extend itself");var e=c.b.qma;e.prototype=a.prototype;b.prototype=new e;b.prototype.constructor=b;b.r=b.superclass=a.prototype;d&&(b.FM=d)};o_("Object.createSubclass",
c.b.ga,c);c.b.Mna=function(b,a){var d;c.l.Ho(b);c.l.assert(null!=a,"source object cannot be null");for(d in a)a.hasOwnProperty(d)&&(b.prototype[d]=a[d])};o_("Object.copyPropertiesForClass",c.b.Mna,c);c.b.qma=function(){};c.b.prototype.X2=function(b){if(void 0===b)b=this;else if(null===b)return null;return b.constructor};c.b.g("Object.prototype.getClass",{X2:c.b.prototype.X2});c.b.prototype.clone=function(){var b=new this.constructor;c.zc.Lf(b,this);return b};c.b.g("Object.prototype.clone",{clone:c.b.prototype.clone});
c.b.prototype.toString=function(){return this.qP()};c.b.g("Object.prototype.toString",{toString:c.b.prototype.toString});c.b.prototype.qP=function(){return this.getTypeName()+" Object"};c.b.g("Object.prototype.toDebugString",{qP:c.b.prototype.qP});c.b.getTypeName=function(b){c.l.Ho(b);var a=b.FM;null==a&&(a=b.toString(),a=(a=c.b.p8.exec(a))?a[1]:"anonymous",b.FM=a);return a};o_("Object.getTypeName",c.b.getTypeName,c);c.b.prototype.getTypeName=function(){return c.b.getTypeName(this.constructor)};c.b.g("Object.prototype.getTypeName",
{getTypeName:c.b.prototype.getTypeName});c.b.prototype.Init=function(){c.l.iO()&&c.l.assert(this.getTypeName,"Not an oj.Object");var b=this.constructor;b.Zl||c.b.oK(b)};c.b.g("Object.prototype.Init",{Init:c.b.prototype.Init});c.b.uoa=function(b){c.l.Ho(b);b.Zl||c.b.oK(b)};o_("Object.ensureClassInitialization",c.b.uoa,c);c.b.prototype.Mo=function(b){return this===b};c.b.g("Object.prototype.equals",{Mo:c.b.prototype.Mo});c.b.r2=function(b,a){c.l.Ho(a);return a.bind(b)};o_("Object.createCallback",c.b.r2,
c);c.b.oK=function(b){c.l.iO()&&(c.l.Ho(b),c.l.assert(!b.Zl));b.Zl=!0;var a=b.r;a&&((a=a.constructor)&&!a.Zl&&c.b.oK(a),c.b.eaa(b));(a=b.InitClass||null)||(a=b.InitClass);a&&a.call(b)};c.b.mh=function(b,a){if(b===a)return!0;if(typeof b!==typeof a||null===b||null===a)return!1;if(b.constructor===a.constructor){if(Array.isArray(b))return c.b.mba(b,a);if(b.constructor===Object)return c.b.Vv(b,a);if(b.valueOf&&"function"===typeof b.valueOf)return b.valueOf()===a.valueOf()}return!1};o_("Object.compareValues",
c.b.mh,c);c.b.mba=function(b,a){if(b.length!==a.length)return!1;for(var d=0,e=b.length;d<e;d++)if(!c.b.mh(b[d],a[d]))return!1;return!0};c.b.oU=function(b,a){if(!b)return!a||0==a.length;if(!a)return!b||0==b.length;if(b.length!=a.length)return!1;for(var d=0;d<b.length;d++)if(b[d]!=a[d]&&(-1==b.indexOf(a[d])||-1==a.indexOf(b[d])))return!1;return!0};c.b.Vv=function(b,a){var d,e=!1;if(b===a)return!0;if(!(b instanceof Object&&a instanceof Object)||b.constructor!==a.constructor)return!1;for(d in b)if(e||
(e=!0),b.hasOwnProperty(d)&&(!a.hasOwnProperty(d)||b[d]!==a[d]&&("object"!==typeof b[d]||!c.b.Vv(b[d],a[d]))))return!1;for(d in a)if(e||(e=!0),a.hasOwnProperty(d)&&!b.hasOwnProperty(d))return!1;return e?!0:JSON.stringify(b)===JSON.stringify(a)};c.b.ph=function(b){var a;if(void 0===b||null===b)return!0;for(a in b)if(b.hasOwnProperty(a))return!1;return!0};c.b.eaa=function(b){c.b.lL&&c.b.oT(b,b.r)};c.b.oT=function(b,a){if(a){var d=a.constructor;c.b.oT(b,d.r);var d=d.lL,e;if(d)for(e in d)if(d.hasOwnProperty(e)){var g=
d[e];if(e!=g){var f=b.prototype;!f.hasOwnProperty(e)&&f.hasOwnProperty(g)?f[e]=f[g]:!f.hasOwnProperty(g)&&f.hasOwnProperty(e)&&(f[g]=f[e])}}}};c.Ns=function(){return"function"===typeof define&&define.amd};c.l={};o_("Assert",c.l,c);c.l.zoa=function(){c.l.DEBUG=!0};o_("Assert.forceDebug",c.l.zoa,c);c.l.Hna=function(){c.l.DEBUG=!1};o_("Assert.clearDebug",c.l.Hna,c);c.l.iO=function(){return!0==c.l.DEBUG};o_("Assert.isDebug",c.l.iO,c);c.l.assert=function(b,a){if(c.l.DEBUG&&!b){var d=a||"",e;if(2<arguments.length){d+=
"(";for(e=2;e<arguments.length;e+=1)d+=arguments[e];d+=")"}c.l.Sd(d)}};o_("Assert.assert",c.l.assert,c);c.l.Yb=function(){c.l.DEBUG&&c.l.Sd("Abstract function called")};o_("Assert.failedInAbstractFunction",c.l.Yb,c);c.l.$c=function(b,a,d){var e;c.l.DEBUG&&(null!=b?(c.l.Qh(a,"function",null,0,!1),e=a.prototype,e.isPrototypeOf(b)||c.l.Sd("object '"+b+"' doesn't match prototype "+e,0,d)):c.l.Sd("null object doesn't match prototype "+e,0,d))};o_("Assert.assertPrototype",c.l.$c,c);c.l.xna=function(b,a,
d){var e;c.l.DEBUG&&null!=b&&(null!=b?(c.l.Qh(a,"function",null,0,!1),e=a.prototype,e.isPrototypeOf(b)||c.l.Sd("object '"+b+"' doesn't match prototype "+e,0,d)):c.l.Sd("null object doesn't match prototype "+e,0,d))};o_("Assert.assertPrototypeOrNull",c.l.xna,c);c.l.yna=function(b,a,d,e){c.l.DEBUG&&(a=a.prototype,d=d.prototype,a.isPrototypeOf(b)||d.isPrototypeOf(b)||c.l.Sd("object '"+b+"' doesn't match prototype "+a+" or "+d,0,e))};o_("Assert.assertPrototypes",c.l.yna,c);c.l.rna=function(b){c.l.DEBUG&&
b&&void 0===b.nodeType&&c.l.Sd(b+" is not a DOM Node")};o_("Assert.assertDomNodeOrNull",c.l.rna,c);c.l.aN=function(b){c.l.DEBUG&&(b&&void 0!==b.nodeType||c.l.Sd(b+" is not a DOM Node"))};o_("Assert.assertDomNode",c.l.aN,c);c.l.$M=function(b,a){c.l.DEBUG&&(c.l.aN(b),1!==b.nodeType?c.l.Sd(b+" is not a DOM Element"):a&&b.nodeName!==a&&c.l.Sd(b+" is not a "+a+" Element"))};o_("Assert.assertDomElement",c.l.$M,c);c.l.qna=function(b,a){c.l.DEBUG&&null!=b&&(c.l.aN(b),1!==b.nodeType?c.l.Sd(b+" is not a DOM Element"):
a&&b.nodeName!==a&&c.l.Sd(b+" is not a "+a+" Element"))};o_("Assert.assertDomElementOrNull",c.l.qna,c);c.l.Qh=function(b,a,d,e,g){!c.l.DEBUG||null==b&&g||typeof b===a||(b=b+" is not of type "+a,d&&(b=d+b),c.l.Sd(b))};o_("Assert.assertType",c.l.Qh,c);c.l.Kf=function(b,a){c.l.DEBUG&&c.l.Qh(b,"object",a,0,!1)};o_("Assert.assertObject",c.l.Kf,c);c.l.W1=function(b,a){c.l.DEBUG&&c.l.Qh(b,"object",a,0,!0)};o_("Assert.assertObjectOrNull",c.l.W1,c);c.l.tna=function(b,a){c.l.DEBUG&&(c.l.Qh(b,"string",a,0,!1),
c.l.assert(0<b.length,"empty string"))};o_("Assert.assertNonEmptyString",c.l.tna,c);c.l.om=function(b,a){c.l.DEBUG&&c.l.Qh(b,"string",a,0,!1)};o_("Assert.assertString",c.l.om,c);c.l.bN=function(b,a){c.l.DEBUG&&c.l.Qh(b,"string",a,0,!0)};o_("Assert.assertStringOrNull",c.l.bN,c);c.l.Ho=function(b,a){c.l.DEBUG&&c.l.Qh(b,"function",a,0,!1)};o_("Assert.assertFunction",c.l.Ho,c);c.l.wu=function(b,a){c.l.DEBUG&&c.l.Qh(b,"function",a,0,!0)};o_("Assert.assertFunctionOrNull",c.l.wu,c);c.l.V1=function(b,a){c.l.DEBUG&&
c.l.Qh(b,"boolean",a,0,!1)};o_("Assert.assertBoolean",c.l.V1,c);c.l.nm=function(b,a){c.l.DEBUG&&c.l.Qh(b,"number",a,0,!1)};o_("Assert.assertNumber",c.l.nm,c);c.l.vna=function(b,a){c.l.DEBUG&&c.l.Qh(b,"number",a,0,!0)};o_("Assert.assertNumberOrNull",c.l.vna,c);c.l.QD=function(b,a){c.l.DEBUG&&!Array.isArray(b)&&(void 0===a&&(a=b+" is not an array"),c.l.Sd(a))};o_("Assert.assertArray",c.l.QD,c);c.l.vy=function(b,a){c.l.DEBUG&&null!=b&&!Array.isArray(b)&&(void 0===a&&(a=b+" is not an array"),c.l.Sd(a))};
o_("Assert.assertArrayOrNull",c.l.vy,c);c.l.una=function(b,a){c.l.DEBUG&&!isNaN(b)&&(void 0===a&&(a=b+" is convertible to a number"),c.l.Sd(a))};o_("Assert.assertNonNumeric",c.l.una,c);c.l.wna=function(b,a){c.l.DEBUG&&isNaN(b)&&(void 0===a&&(a=b+" is not convertible to a number"),c.l.Sd(a))};o_("Assert.assertNumeric",c.l.wna,c);c.l.sna=function(b,a,d){var e;if(null==b||void 0===a[b.toString()]){if(void 0===d){d=" is not in set: {";for(e in a)a.hasOwnProperty(e)&&(d+=e,d+=",");d=b+(d+"}")}c.l.Sd(d)}};
o_("Assert.assertInSet",c.l.sna,c);c.l.Sd=function(b,a,d){a="Assertion";d&&(a+=" ("+d+")");a+=" failed: ";void 0!==b&&(a+=b);throw Error(a);};o_("Assert.assertionFailed",c.l.Sd,c);var g=b.__oj_Assert_DEBUG;void 0!==g&&(c.l.DEBUG=g);c.Pg=function(){this.Init()};o_("EventSource",c.Pg,c);c.b.ga(c.Pg,c.b,"oj.EventSource");c.Pg.prototype.Init=function(){this.kd=[];c.Pg.r.Init.call(this)};c.b.g("EventSource.prototype.Init",{Init:c.Pg.prototype.Init});c.Pg.prototype.on=function(b,a){var d=!1,c;for(c=0;c<
this.kd.length;c++)if(this.kd[c].eventType==b&&this.kd[c].eventHandlerFunc==a){d=!0;break}d||this.kd.push({eventType:b,eventHandlerFunc:a})};c.b.g("EventSource.prototype.on",{on:c.Pg.prototype.on});c.Pg.prototype.off=function(b,a){var d;for(d=this.kd.length-1;0<=d;d--)if(this.kd[d].eventType==b&&this.kd[d].eventHandlerFunc==a){this.kd.splice(d,1);break}};c.b.g("EventSource.prototype.off",{off:c.Pg.prototype.off});c.Pg.prototype.handleEvent=function(b,a){var d,c;for(d=0;d<this.kd.length;d++)if(c=this.kd[d],
c.eventType==b&&(c=c.eventHandlerFunc.apply(this,Array.prototype.slice.call(arguments).slice(1)),!1===c))return!1;return!0};c.b.g("EventSource.prototype.handleEvent",{handleEvent:c.Pg.prototype.handleEvent});c.Na=function(){};c.Na.sl={yF:"ie",OP:"firefox",uQ:"safari",v6:"chrome",zv:"unknown"};c.Na.cn={FQ:"trident",PF:"webkit",RP:"gecko",zv:"unknown"};c.Na.aj={y7:"Windows",o7:"Solaris",iQ:"Mac",zv:"Unknown",CP:"Android",zF:"IOS",V6:"Linux"};c.Na.Fy=function(){var b;c.Ea.Ni(b)&&(b=navigator.userAgent);
b=b.toLowerCase();var a=c.Ea.qr(b),d=c.Na.oca;if(d&&d.hashCode===a)return{os:d.os,browser:d.browser,browserVersion:d.browserVersion,engine:d.engine,engineVersion:d.engineVersion,hashCode:d.hashCode};var d=c.Na.aj.zv,e=c.Na.sl.zv,g=0,f=c.Na.cn.zv,r=0;-1<b.indexOf("iphone")||-1<b.indexOf("ipad")?d=c.Na.aj.zF:-1<b.indexOf("mac")?d=c.Na.aj.iQ:-1<b.indexOf("sunos")?d=c.Na.aj.o7:-1<b.indexOf("android")?d=c.Na.aj.CP:-1<b.indexOf("linux")?d=c.Na.aj.V6:-1<b.indexOf("win")&&(d=c.Na.aj.y7);-1<b.indexOf("msie")?
(e=c.Na.sl.yF,g=c.Na.Ci(b,/msie (\d+[.]\d+)/),b.indexOf("trident")&&(f=c.Na.cn.FQ,r=c.Na.Ci(b,/trident\/(\d+[.]\d+)/))):-1<b.indexOf("trident")?(e=c.Na.sl.yF,g=c.Na.Ci(b,/rv:(\d+[.]\d+)/),b.indexOf("trident")&&(f=c.Na.cn.FQ,r=c.Na.Ci(b,/trident\/(\d+[.]\d+)/))):-1<b.indexOf("chrome")?(e=c.Na.sl.v6,g=c.Na.Ci(b,/chrome\/(\d+[.]\d+)/),f=c.Na.cn.PF,r=c.Na.Ci(b,/applewebkit\/(\d+[.]\d+)/)):-1<b.indexOf("safari")?(e=c.Na.sl.uQ,g=c.Na.Ci(b,/version\/(\d+[.]\d+)/),f=c.Na.cn.PF,r=c.Na.Ci(b,/applewebkit\/(\d+[.]\d+)/)):
-1<b.indexOf("firefox")&&(e=c.Na.sl.OP,g=c.Na.Ci(b,/rv:(\d+[.]\d+)/),f=c.Na.cn.RP,r=c.Na.Ci(b,/gecko\/(\d+)/));d=c.Na.oca={hashCode:a,os:d,browser:e,browserVersion:g,engine:f,engineVersion:r};return{os:d.os,browser:d.browser,browserVersion:d.browserVersion,engine:d.engine,engineVersion:d.engineVersion,hashCode:d.hashCode}};c.Na.Ci=function(b,a){var d=b.match(a);return d&&(d=d[1])?parseFloat(d):0};c.zc={};o_("CollectionUtils",c.zc,c);c.zc.Lf=function(b,a,d,e,g){return c.zc.vU(b,a,d,e,g,0)};o_("CollectionUtils.copyInto",
c.zc.Lf,c);c.zc.isPlainObject=function(b){if("object"===typeof b)try{if(b.constructor&&b.constructor.prototype.hasOwnProperty("isPrototypeOf"))return!0}catch(a){}return!1};o_("CollectionUtils.isPlainObject",c.zc.isPlainObject,c);c.zc.vU=function(b,a,d,e,g,f){var r,s,q;if(b&&a&&b!==a){q=Object.keys(a);for(var t=0;t<q.length;t++){r=q[t];s=d?d(r):r;r=a[r];var v=!1;if(e&&f<g){var x=b[s];c.zc.isPlainObject(x)&&c.zc.isPlainObject(r)&&(v=!0,c.zc.vU(x,r,d,!0,g,f+1))}v||(b[s]=r)}}return b};c.ba={};o_("Config",
c.ba,c);c.ba.Bg=function(){var b;if(c.Ns())return c.l.assert(void 0!==f,"ojtranslations module must be defined"),b=f._ojLocale_,"root"==b?"en":b;b=c.ba.Qt;null==b&&((b=document.documentElement.lang)||(b=void 0===navigator?"en":(navigator.language||navigator.userLanguage||"en").toLowerCase()),c.ba.Qt=b=b.toLowerCase());return b};o_("Config.getLocale",c.ba.Bg,c);c.ba.Eqa=function(b,d){if(c.Ns()){var e=["ojL10n!ojtranslations/nls/"+b+"/ojtranslations"];c.La&&e.push("ojL10n!ojtranslations/nls/"+b+"/localeElements");
a(e,function(b,a){f=b;a&&c.La.t$(a);d&&d()})}else c.ba.Qt=b,d&&d()};o_("Config.setLocale",c.ba.Eqa,c);c.ba.lb=function(b){var d=/^\/|:/;return null==b||d.test(b)?b:(d=c.ba.Oka)?d+("/"==d.charAt(d.length-1)?"":"/")+b:c.Ns()?(d=a.toUrl("ojs/_foo_"),d.replace(/[^\/]*$/,"../"+b)):b};o_("Config.getResourceUrl",c.ba.lb,c);c.ba.Fqa=function(b){c.ba.Oka=b};o_("Config.setResourceBaseUrl",c.ba.Fqa,c);c.ba.Dqa=function(b){c.ba.laa=b};o_("Config.setAutomationMode",c.ba.Dqa,c);c.ba.GN=function(){return c.ba.laa};
o_("Config.getAutomationMode",c.ba.GN,c);c.ba.O3=function(){var b="Oracle JET Version: "+c.version+"\n",b=b+("Oracle JET Revision: "+c.revision+"\n"),a="undefined"!==typeof window;a&&window.navigator&&(b+="Browser: "+window.navigator.userAgent+"\n",b+="Browser Platform: "+window.navigator.platform+"\n");$&&($.fn&&(b+="jQuery Version: "+$.fn.jquery+"\n"),$.ui&&$.ui.version&&(b+="jQuery UI Version: "+$.ui.version+"\n"));c.ia&&(b+="Knockout Version: "+c.ia.s$()+"\n");a&&window.uqa&&(b+="Require Version: "+
window.uqa.version+"\n");return b};o_("Config.getVersionInfo",c.ba.O3,c);c.ba.Rpa=function(){console.log(c.ba.O3())};o_("Config.logVersionInfo",c.ba.Rpa,c);(function(){function b(a,d){d=d||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent("CustomEvent");c.initCustomEvent(a,d.bubbles,d.cancelable,d.detail);return c}"undefined"!==typeof window&&"function"!==typeof window.CustomEvent&&(b.prototype=window.Event.prototype,window.CustomEvent=b)})();c.ResponsiveUtils={};c.ResponsiveUtils.SCREEN_RANGE=
{SM:"sm",MD:"md",LG:"lg",XL:"xl",XXL:"xxl"};c.ResponsiveUtils.FRAMEWORK_QUERY_KEY={SM_UP:"sm-up",MD_UP:"md-up",LG_UP:"lg-up",XL_UP:"xl-up",XXL_UP:"xxl-up",SM_ONLY:"sm-only",MD_ONLY:"md-only",LG_ONLY:"lg-only",XL_ONLY:"xl-only",MD_DOWN:"md-down",LG_DOWN:"lg-down",XL_DOWN:"xl-down",HIGH_RESOLUTION:"high-resolution"};c.ResponsiveUtils.Mp={};c.ResponsiveUtils.Mp[c.ResponsiveUtils.SCREEN_RANGE.SM]=0;c.ResponsiveUtils.Mp[c.ResponsiveUtils.SCREEN_RANGE.MD]=1;c.ResponsiveUtils.Mp[c.ResponsiveUtils.SCREEN_RANGE.LG]=
2;c.ResponsiveUtils.Mp[c.ResponsiveUtils.SCREEN_RANGE.XL]=3;c.ResponsiveUtils.Mp[c.ResponsiveUtils.SCREEN_RANGE.XXL]=4;c.ResponsiveUtils.xea=function(b){var a=document.getElementsByClassName(b).item(0);null===a&&(a=document.createElement("meta"),a.className=b,document.head.appendChild(a));return window.getComputedStyle(a).getPropertyValue("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")};c.ResponsiveUtils.getFrameworkQuery=function(b){b=c.ResponsiveUtils.xea("oj-mq-"+b);return"null"==
b?null:b};c.ResponsiveUtils.compare=function(b,a){var d=c.ResponsiveUtils.Mp[b],e=c.ResponsiveUtils.Mp[a];if(void 0==d)throw"size1 param "+b+" illegal, please use one of the screen size constants like oj.ResponsiveUtils.SCREEN_RANGE.MD";if(void 0==e)throw"size2 param "+a+" illegal, please use one of the screen size constants like oj.ResponsiveUtils.SCREEN_RANGE.MD";return d-e};c.Ea={};o_("StringUtils",c.Ea,c);c.Ea.m$=/^\s*|\s*$/g;c.Ea.ph=function(b){return null===b?!0:0===c.Ea.trim(b).length};o_("StringUtils.isEmpty",
c.Ea.ph,c);c.Ea.Ni=function(b){return void 0===b||c.Ea.ph(b)?!0:!1};o_("StringUtils.isEmptyOrUndefined",c.Ea.Ni,c);c.Ea.qd=function(b){return null!==b&&("string"===typeof b||b instanceof String)};o_("StringUtils.isString",c.Ea.qd,c);c.Ea.trim=function(b){return c.Ea.qd(b)?b.replace(c.Ea.m$,""):b};o_("StringUtils.trim",c.Ea.trim,c);c.Ea.qr=function(b){var a=0;if(0===b.length)return a;for(var d=0;d<b.length;d++)a=(a<<5)-a+b.charCodeAt(d),a&=a;return a};c.Ee={};c.Ee.Z4=function(b){var a=document.getElementsByClassName(b).item(0);
null===a&&(a=document.createElement("meta"),a.className=b,document.head.appendChild(a));if((a=window.getComputedStyle(a))&&(a=a.getPropertyValue("font-family"))&&"none"!=a&&(a=a.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g,""))){try{a=JSON.parse(a)}catch(d){return c.q.error("Error parsing json for selector "+b+".\nString being parsed is "+a+"\n"+d),null}return a}c.q.info("No json found for selector "+b);return null};c.Ee.Yk=function(b){b=b.toLowerCase();null==c.Ee.OO&&(c.Ee.OO={});var a=c.Ee.OO[b];null==
a&&(a=c.Ee.Z4("oj-"+b+"-option-defaults"),null==a&&(a={}),c.Ee.OO[b]=a);return a};c.ha={};o_("Translations",c.ha,c);c.ha.cP=function(b){c.ha.pH=b};o_("Translations.setBundle",c.ha.cP,c);c.ha.v3=function(b){return c.ha.WW(b)};o_("Translations.getResource",c.ha.v3,c);c.ha.Mb=function(b,a){return null==b?null:c.ha.xda(b,a)};o_("Translations.applyParameters",c.ha.Mb,c);c.ha.A=function(b,a){var d=c.ha.WW(b);if(null==d)return b;var e={};2<arguments.length?e=Array.prototype.slice.call(arguments,1):2==arguments.length&&
(e=arguments[1],"object"===typeof e||e instanceof Array||(e=[e]));return c.ha.Mb(d,e)};o_("Translations.getTranslatedString",c.ha.A,c);c.ha.iE=function(b){b=c.ha.XV()[b];var a,d;if(null==b)return{};a={};for(d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);return a};o_("Translations.getComponentTranslations",c.ha.iE,c);c.ha.WW=function(b){b=b?b.split("."):[];var a=c.ha.XV(),d=b.length,e=0,g=b[e];for(c.l.Kf(a);0<--d&&a;)a=a[g],e++,g=b[e];return a?a[g]||null:null};c.ha.xda=function(b,a){var d=b.length,c=[],e=
null,g=!1,f=!1,s=!1,q=!1,t,v;for(v=0;v<d;v++){var x=b.charAt(v),u=!1;if(g)u=!0,g=!1;else switch(x){case "$":g=!0;break;case "{":q||(f||(t=!1,e=[]),f=!0);break;case "}":f&&0<e.length&&(f=a[e.join("")],c.push(void 0===f?"null":f));f=!1;break;case "[":f||(s?q=!0:s=!0);break;case "]":q?q=!1:s=!1;break;default:u=!0}u&&(f?","==x||" "==x?t=!0:t||e.push(x):q||c.push(x))}return c.join("")};c.ha.XV=function(){var b=c.ha.pH;return b?b:c.Ns()?(c.l.assert(void 0!==f,"ojtranslations module must be defined"),f):
{}};return c});
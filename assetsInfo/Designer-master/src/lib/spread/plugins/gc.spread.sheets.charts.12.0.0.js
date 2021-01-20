/*!
 * 
 * Spread.Sheets Library 12.0.0
 * 
 * Copyright(c) GrapeCity, Inc.  All rights reserved.
 * 
 * Licensed under the SpreadJS Commercial License.
 * us.sales@grapecity.com
 * http://www.grapecity.com/en/licensing/grapecity/
 * 
 * 
 */

(function (factory) {
   if(typeof module === 'object' && typeof module.exports === 'object') {
       module.exports = factory(require('@grapecity/spread-sheets'));
   } else if(typeof define === 'function' && define.amd) {
       define(['@grapecity/spread-sheets'], factory)
   } else if(typeof exports === 'object') {
       exports['Spread'] = factory(require('@grapecity/spread-sheets'));
   } else {
       factory(GC);
   }
}(function (GC) {
   GC = GC || {}; GC["Spread"] = GC["Spread"] || {}; GC["Spread"]["Sheets"] = GC["Spread"]["Sheets"] || {}; GC["Spread"]["Sheets"]["Charts"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	    __webpack_require__(1);
	    __webpack_require__(2);
	    var Charts = __webpack_require__(3);
	    __webpack_require__(5);
	    __webpack_require__(8);
	    __webpack_require__(9);
	    __webpack_require__(7);
	    __webpack_require__(16);
	    __webpack_require__(14);
	    __webpack_require__(17);
	    __webpack_require__(18);
	    __webpack_require__(10);
	    __webpack_require__(19);
	    __webpack_require__(21);
	    __webpack_require__(15);
	    __webpack_require__(22);
	    module.exports = Charts;
	}());

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = dv;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var dv = __webpack_require__(1),__extends=this&&this.__extends||function(){var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};return function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();!function(t){!function(t){"use strict";t.__Constant_Candle_Stick_Style_Stroke="#666666",t.__Constant_Hloc_Style_Stroke="green"}(t.financial||(t.financial={}))}(dv||(dv={})),function(n){var t;(function(t){"use strict";var e=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e}(n.models._CartesianValueDefinition);t._StockValueDefinition=e})((t=n.financial||(n.financial={})).models||(t.models={}))}(dv||(dv={})),function(p){var f;(function(t){"use strict";var e=function(a){function h(t,e,n,i,o,l){var r=a.call(this,t,l)||this;return r._highFieldDefinition=e,r._lowFieldDefinition=n,r._openFieldDefinition=i,r._closeFieldDefinition=o,r}return __extends(h,a),h._parse=function(t,e,n){if("object"==typeof t.field){var i=new f.options._StockValueEncodingOption(t.field),o=p.models._NumberFieldDefinition._parse(i.high,e),l=p.models._NumberFieldDefinition._parse(i.low,e),r=p.models._NumberFieldDefinition._parse(i.open,e),a=p.models._NumberFieldDefinition._parse(i.close,e),s=p.models._DateFieldDefinition._parse(i.x,e);if(null!=n)return new h(n,o,l,r,a,null!=t.excludeNulls&&t.excludeNulls);if(null!=s)return new h(new p.models._FieldDimensionDefinition(s),o,l,r,a,null!=t.excludeNulls&&t.excludeNulls)}else if("string"==typeof t.field){a=r=l=o=s=null;for(var _=0,u=t.field.split(",");_<u.length;_++){var c=u[_];null==s&&null!=(s=p.models._DateFieldDefinition._parse(c,e))||null==o&&null!=(o=p.models._NumberFieldDefinition._parse(c,e))||null==l&&null!=(l=p.models._NumberFieldDefinition._parse(c,e))||null==r&&null!=(r=p.models._NumberFieldDefinition._parse(c,e))||null!=a||(a=p.models._NumberFieldDefinition._parse(c,e))}if(null!=o&&null!=l){if(null!=n)return new h(n,o,l,r,a,null!=t.excludeNulls&&t.excludeNulls);if(null!=s)return new h(new p.models._FieldDimensionDefinition(s),o,l,r,a,null!=t.excludeNulls&&t.excludeNulls)}}return null},Object.defineProperty(h.prototype,"name",{get:function(){if(null==this.__name){var t=[];null!=this._highFieldDefinition&&t.push(this._highFieldDefinition._field()._name()),null!=this._lowFieldDefinition&&t.push(this._lowFieldDefinition._field()._name()),null!=this._openFieldDefinition&&t.push(this._openFieldDefinition._field()._name()),null!=this._closeFieldDefinition&&t.push(this._closeFieldDefinition._field()._name()),this.__name=t.join("-")}return this.__name},enumerable:!0,configurable:!0}),h.prototype._toItem=function(t){for(var e=NaN,n=NaN,i=NaN,o=NaN,l=0,r=t;l<r.length;l++){var a=r[l];if(null!=this._openFieldDefinition){var s=p.core.asNumber(a[this._openFieldDefinition._field()._name()],null);isNaN(i)&&null!=s&&(i=s)}null!=this._closeFieldDefinition&&null!=(s=p.core.asNumber(a[this._closeFieldDefinition._field()._name()],null))&&(o=s),null!=this._highFieldDefinition&&null!=(s=p.core.asNumber(a[this._highFieldDefinition._field()._name()],null))&&(isNaN(e)||e<s)&&(e=s),null!=this._lowFieldDefinition&&null!=(s=p.core.asNumber(a[this._lowFieldDefinition._field()._name()],null))&&(isNaN(n)||s<n)&&(n=s)}return{high:e,low:n,open:i,close:o}},h.prototype._toValue=function(t){var e=this._toItem(t);return isNaN(e.high)||isNaN(e.low)?null:e.high-e.low},h.prototype._equals=function(t){return t instanceof h&&this._highFieldDefinition==t._highFieldDefinition&&this._lowFieldDefinition==t._lowFieldDefinition&&this._openFieldDefinition==t._openFieldDefinition&&this._closeFieldDefinition==t._closeFieldDefinition},h.prototype._max=function(){var t=NaN;return null!=this._highFieldDefinition&&(isNaN(t)||t<this._highFieldDefinition._field()._maximum())&&(t=this._highFieldDefinition._field()._maximum()),null!=this._lowFieldDefinition&&(isNaN(t)||t<this._lowFieldDefinition._field()._maximum())&&(t=this._lowFieldDefinition._field()._maximum()),null!=this._openFieldDefinition&&(isNaN(t)||t<this._openFieldDefinition._field()._maximum())&&(t=this._openFieldDefinition._field()._maximum()),null!=this._closeFieldDefinition&&(isNaN(t)||t<this._closeFieldDefinition._field()._maximum())&&(t=this._closeFieldDefinition._field()._maximum()),t},h.prototype._min=function(){var t=NaN;return null!=this._highFieldDefinition&&(isNaN(t)||t>this._highFieldDefinition._field()._minimum())&&(t=this._highFieldDefinition._field()._minimum()),null!=this._lowFieldDefinition&&(isNaN(t)||t>this._lowFieldDefinition._field()._minimum())&&(t=this._lowFieldDefinition._field()._minimum()),null!=this._openFieldDefinition&&(isNaN(t)||t>this._openFieldDefinition._field()._minimum())&&(t=this._openFieldDefinition._field()._minimum()),null!=this._closeFieldDefinition&&(isNaN(t)||t>this._closeFieldDefinition._field()._minimum())&&(t=this._closeFieldDefinition._field()._minimum()),t},h}(t._StockValueDefinition);t._HlocStockValueDefinition=e})((f=p.financial||(p.financial={})).models||(f.models={}))}(dv||(dv={})),function(_){var t;(function(t){"use strict";var e=function(o){function s(t,e,n){var i=o.call(this,t,n)||this;return i.__transactionFieldDefinition=e,i}return __extends(s,o),s._parse=function(t,e,n){if("string"==typeof t.field){for(var i=null,o=null,l=0,r=t.field.split(",");l<r.length;l++){var a=r[l];null==i&&null!=(i=_.models._DateFieldDefinition._parse(a,e))||null!=o||(o=_.models._NumberFieldDefinition._parse(a,e))}if(null!=o){if(null!=n)return new s(n,o,null!=t.excludeNulls&&t.excludeNulls);if(null!=i)return new s(new _.models._FieldDimensionDefinition(i),o,null!=t.excludeNulls&&t.excludeNulls)}}return null},Object.defineProperty(s.prototype,"name",{get:function(){return this.__transactionFieldDefinition._field()._name()},enumerable:!0,configurable:!0}),s.prototype._toItem=function(t){for(var e=NaN,n=NaN,i=NaN,o=NaN,l=0,r=t;l<r.length;l++){var a=r[l];if(null!=this.__transactionFieldDefinition){var s=_.core.asNumber(a[this.__transactionFieldDefinition._field()._name()],null);isNaN(i)&&null!=s&&(i=s),null!=s&&(o=s),null!=s&&(isNaN(e)||e<s)&&(e=s),null!=s&&(isNaN(n)||s<n)&&(n=s)}}return{high:e,low:n,open:i,close:o}},s.prototype._toValue=function(t){var e=this._toItem(t);return isNaN(e.high)||isNaN(e.low)?null:e.high-e.low},s.prototype._equals=function(t){return t instanceof s&&this.__transactionFieldDefinition==t.__transactionFieldDefinition},s.prototype._max=function(){return this.__transactionFieldDefinition._field()._maximum()},s.prototype._min=function(){return this.__transactionFieldDefinition._field()._minimum()},s}(t._StockValueDefinition);t._TransactionStockValueDefinition=e})((t=_.financial||(_.financial={})).models||(t.models={}))}(dv||(dv={})),function(n){var t;(function(o){"use strict";var t=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype._dateFieldDefinition=function(){return null!=this._categoriedDimensionDefinition()?this._categoriedDimensionDefinition()._categoryFieldDefinitions()[0]:this._xFieldDefinition()},e.prototype._createEncodingsAnalyser=function(t){return new o._StockEncodingsAnalyser(t)},e.prototype._createYSite=function(t){return null==t||t.length<=0?new n.models._EmptySiteModel(0):t[0].ySite},e.prototype._createSeries=function(t,e,n,i){if(null!=e&&null!=this._dateFieldDefinition()){if(e instanceof o._HlocStockValueDefinition)return new o._StockSeries(this,e,n,i,t,"Day");if(e instanceof o._TransactionStockValueDefinition)return new o._StockSeries(this,e,n,i,t,"Day")}return null},e.prototype._getLegendModel=function(t){return null},e}(n.models._CartesianPlotData);o._StockPlot=t})((t=n.financial||(n.financial={})).models||(t.models={}))}(dv||(dv={})),function(a){var t;(function(t){"use strict";var e=function(){function t(t){a._assertDebug(function(){return null!=t}),this.__point=t}return Object.defineProperty(t.prototype,"template",{get:function(){var t=this._contentDefinitions();if(t&&0<t.length){var e=this._customTemplate();return null==e&&(e=this._defaultTemplate()),e}return null},enumerable:!0,configurable:!0}),t.prototype._point=function(){return this.__point},t.prototype.defaultProperty=function(t){return"value"},t.prototype.defaultFormat=function(t){return null},t.prototype.fromToken=function(t,e){if("date"==t)return{name:"date",value:this._point().date.toLocaleDateString(),aggregate:null};if("high"==t)return{name:"high",value:this._point().high,aggregate:null};if("low"==t)return{name:"low",value:this._point().low,aggregate:null};if("open"==t)return{name:"open",value:this._point().open,aggregate:null};if("close"==t)return{name:"close",value:this._point().close,aggregate:null};if("xField"==t){if(null!=(n=this._point()._series()._valueDefinition()._dimensionDefinition()))return{name:n._name(),value:this._point()._dimensionValue()._value(),aggregate:null}}else if("categoryField"==t){var n;if(null!=(n=this._point()._series()._valueDefinition()._dimensionDefinition())&&n instanceof a.models._CategoriedDimensionDefinition){var i=n._categoryFieldDefinitions();if(null==e&&(e=0),null!=i&&0<=e&&e<i.length)return{name:i[e]._field()._name(),value:i[e]._field()._toItem(this._point()._items()),aggregate:null}}}else for(var o=0,l=this._contentDefinitions();o<l.length;o++){var r=l[o];if(r._fieldDefinition()._field()._name()==t)return this._fromContentDefinition(r)}return{name:null,value:null,aggregate:null}},t.prototype._fromContentDefinition=function(t){return{name:t._fieldDefinition()._field()._name(),value:t._toItem(this._point()._items()),aggregate:a.Aggregate[t._aggregate()]}},t}();t._StockContentSite=e})((t=a.financial||(a.financial={})).models||(t.models={}))}(dv||(dv={})),function(l){var t;(function(o){"use strict";var t=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return __extends(t,n),t.prototype._createCategoriedDimensionDefinition=function(t){var e=n.prototype._createCategoriedDimensionDefinition.call(this,t);return null==e?null:e._categoryFieldDefinitions()[0]instanceof l.models._DateFieldDefinition?e:void 0},t.prototype._createValueDefinition=function(t,e,n){var i=l.financial.models._HlocStockValueDefinition._parse(t,this._fields(),e);return null!=i?i:o._TransactionStockValueDefinition._parse(t,this._fields(),e)},t.prototype._createDetailDefinitions=function(t){return[]},t.prototype._createColorDefinition=function(t,e){return l.models._ValuesNameLegendDefinition._parse(t,this._fields())},t.prototype._createShapeDefinition=function(t){return null},t.prototype._createSizeDefinition=function(t){return null},t.prototype._createTextDefinition=function(t){return l.models._ContentDefinition._parse(t,this._fields())},t.prototype._createTooltipDefinition=function(t){return null},t}(l.models._CartesianEncodingsAnalyser);o._StockEncodingsAnalyser=t})((t=l.financial||(l.financial={})).models||(t.models={}))}(dv||(dv={})),function(n){var t;(function(e){"use strict";var t=function(o){function t(t,e,n){var i=o.call(this,t,e,n)||this;return i.__date=n._value(),i._assign(t._valueDefinition()._toItem(i._items())),i.open<i.close&&(i.style.fill="none"),i}return __extends(t,o),Object.defineProperty(t.prototype,"date",{get:function(){return this.__date},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"high",{get:function(){return this.item.high},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"low",{get:function(){return this.item.low},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"open",{get:function(){return this.item.open},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"close",{get:function(){return this.item.close},enumerable:!0,configurable:!0}),t.prototype._tooltipContentSite=function(){return new e._TooltipStockContentSite(this)},t.prototype._stack=function(t){return t},Object.defineProperty(t.prototype,"xValue",{get:function(){return this.date.valueOf()},enumerable:!0,configurable:!0}),t}(n.models._CartesianPointData);e._StockPoint=t})((t=n.financial||(n.financial={})).models||(t.models={}))}(dv||(dv={})),function(d){var t;(function(f){"use strict";var t=function(a){function t(t,e,n,i,o,l){var r=a.call(this,t,e,n,i,o)||this;return r.__dateUnit=l,r}return __extends(t,a),Object.defineProperty(t.prototype,"ySite",{get:function(){return null==this.__ySite&&(this.__ySite=new e(this._valueDefinition())),this.__ySite},enumerable:!0,configurable:!0}),t.prototype._plot=function(){return a.prototype._plot.call(this)},t.prototype._valueDefinition=function(){return a.prototype._valueDefinition.call(this)},t.prototype._createPoints=function(){for(var t=[],e=0,n=this._items();e<n.length;e++){var i=n[e],o=i[this._plot()._dateFieldDefinition()._field()._name()],l=this._plot()._dateFieldDefinition()._field()._parse(o);l&&"Day"==this.__dateUnit&&t.push({date:new Date(l.getFullYear(),l.getMonth(),l.getDate()),item:i})}var r=new d.core.collections.CollectionView(t),a=new d.core.collections.PropertyGroupDescription("date");r.groupDescriptions.push(a);for(var s=[],_=0,u=function(t){var e=t.items[0].date,n=[];t.items.forEach(function(t){n.push(t.item)}),s.push(c._createPoint(n,new f._DateFieldDimensionValue(c._plot()._dateFieldDefinition(),e,_))),_++},c=this,h=0,p=r.groups;h<p.length;h++)u(p[h]);return s},t.prototype._createPoint=function(t,e){return new f._StockPoint(this,t,e)},t.prototype._applyDataPointConditionFormattingRules=function(t){var e=this._points();null!=e&&e.forEach(function(e){t.forEach(function(t){t.evaluate(e)})})},t}(d.models._CartesianSeriesData);f._StockSeries=t;var e=function(){function t(t){this.valueCount=NaN,this.groups=null,this.groupLevels=0,this.__valueFields=t}return Object.defineProperty(t.prototype,"name",{get:function(){return""},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"min",{get:function(){return this.__valueFields._min()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"max",{get:function(){return this.__valueFields._max()},enumerable:!0,configurable:!0}),t.prototype.padding=function(){return 0},Object.defineProperty(t.prototype,"dataType",{get:function(){return d.core.DataType.Number},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isOrdinal",{get:function(){return!1},enumerable:!0,configurable:!0}),t.prototype.labelFromValue=function(t,e){var n=d.plugins._Plugins._stringFormatting("Default");return null!=n?n.format(e,t):null},t.prototype.itemValue=function(t){return t},t}()})((t=d.financial||(d.financial={})).models||(t.models={}))}(dv||(dv={})),function(o){var t;(function(t){"use strict";var e=function(){function t(t){this.__isOrdinal=!1,this.__dates=null,this.__min=NaN,this.__max=NaN,this.__padding=.5,this.groupLevels=0,this.groups=[],this.__min=NaN;var e=this.__max=NaN;this.__dates=[];for(var n=0,i=t;n<i.length;n++)for(var o=NaN,l=0,r=i[n]._points();l<r.length;l++){var a=r[l].date.valueOf();-1==this.__dates.indexOf(a)&&((isNaN(this.__min)||this.__min>a)&&(this.__min=a),(isNaN(this.__max)||this.__max<a)&&(this.__max=a),this.__dates.push(a)),isNaN(o)||(isNaN(e)||a-o<e)&&(e=a-o),o=a}isNaN(e)||(this.__padding=.5*e)}return Object.defineProperty(t.prototype,"name",{get:function(){return"date"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"min",{get:function(){return this.__min},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"max",{get:function(){return this.__max},enumerable:!0,configurable:!0}),t.prototype.padding=function(){return this.__padding},Object.defineProperty(t.prototype,"dataType",{get:function(){return o.core.DataType.Date},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isOrdinal",{get:function(){return this.__isOrdinal},set:function(t){this.__isOrdinal!=t&&(this.__isOrdinal=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"valueCount",{get:function(){return this.__dates.length},enumerable:!0,configurable:!0}),t.prototype.labelFromValue=function(t,e){var n=new Date(t),i=o.plugins._Plugins._stringFormatting("Default");return null!=i?null==e?i.format(i.defaultFormat(o.core.DataType.Date,!1),n):i.format(e,n):n.toString()},t.prototype.itemValue=function(t){return t},t}();t._XStockSiteModel=e})((t=o.financial||(o.financial={})).models||(t.models={}))}(dv||(dv={})),function(t){var e;(function(t){"use strict";var e=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype._contentDefinitions=function(){return this._point()._series()._plot()._tooltipDefinitions()},e.prototype._customTemplate=function(){var t=this._point()._tooltip();return t&&t.template?t.template:null},e.prototype._defaultTemplate=function(){var i=[],o=[];i.push("{date.name}: {date.value}");for(var t=function(t){var e=t._fieldDefinition()._field()._name();if(!o.some(function(t){return t==e})){var n=t._fieldDefinition()._format();n?i.push("{"+e+".name}: {"+e+".value:"+n+"}"):i.push("{"+e+".name}: {"+e+".value}"),o.push(e)}},e=0,n=this._contentDefinitions();e<n.length;e++)t(n[e]);return i.join("\n")},e}(t._StockContentSite);t._TooltipStockContentSite=e})((e=t.financial||(t.financial={})).models||(e.models={}))}(dv||(dv={})),function(n){var t;(function(t){"use strict";var e=function(i){function t(t,e,n){return i.call(this,t,e,n)||this}return __extends(t,i),t.prototype._value=function(){return i.prototype._value.call(this)},t}(n.models._FieldDimensionValue);t._DateFieldDimensionValue=e})((t=n.financial||(n.financial={})).models||(t.models={}))}(dv||(dv={})),function(t){var e;(e=t.financial||(t.financial={})).models||(e.models={})}(dv||(dv={})),function(t){var e;(e=t.financial||(t.financial={})).models||(e.models={})}(dv||(dv={})),function(n){var t;(function(t){"use strict";var e=function(n){function t(t){var e=n.call(this,t)||this;return e.high=e._option().high,e.low=e._option().low,e.open=e._option().open,e.close=e._option().close,e.x=e._option().x,e}return __extends(t,n),Object.defineProperty(t.prototype,"high",{get:function(){return this.__high},set:function(t){null!=t&&"string"!=typeof t||this.__high!=t&&(this.__high=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"low",{get:function(){return this.__low},set:function(t){null!=t&&"string"!=typeof t||this.__low!=t&&(this.__low=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"open",{get:function(){return this.__open},set:function(t){null!=t&&"string"!=typeof t||this.__open!=t&&(this.__open=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"close",{get:function(){return this.__close},set:function(t){null!=t&&"string"!=typeof t||this.__close!=t&&(this.__close=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"x",{get:function(){return this.__x},set:function(t){null!=t&&"string"!=typeof t||this.__x!=t&&(this.__x=t)},enumerable:!0,configurable:!0}),t}(n.options._Option);t._StockValueEncodingOption=e})((t=n.financial||(n.financial={})).options||(t.options={}))}(dv||(dv={})),function(t){var e;(e=t.financial||(t.financial={})).options||(e.options={})}(dv||(dv={})),function(t){var n;(function(t){"use strict";var e=function(){function t(){}return Object.defineProperty(t.prototype,"chartType",{get:function(){return"Candlestick"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"priority",{get:function(){return 0},enumerable:!0,configurable:!0}),t.prototype.create=function(t,e){return null!=e&&null!=t?new n._CandleStickPlotView(t,e):null},t}();t._CandleStickPlotPlugin=e})((n=t.financial||(t.financial={})).plugins||(n.plugins={}))}(dv||(dv={})),function(t){var n;(function(t){"use strict";var e=function(){function t(){}return Object.defineProperty(t.prototype,"chartType",{get:function(){return"HighLowOpenClose"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"priority",{get:function(){return 0},enumerable:!0,configurable:!0}),t.prototype.create=function(t,e){return null!=e&&null!=t?new n._HlocPlotView(t,e):null},t}();t._HlocPlotPlugin=e})((n=t.financial||(t.financial={})).plugins||(n.plugins={}))}(dv||(dv={})),function(e){!function(n){"use strict";var t=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype._coordinateSystemType=function(){return"Cartesian"},e.prototype._data=function(){return t.prototype._data.call(this)},Object.defineProperty(e.prototype,"radial",{get:function(){return!1},enumerable:!0,configurable:!0}),e.prototype._barWidth=function(){var t=this._plotAreaView()._dvView()._option().bar.width;return null==t?.7:(1<t&&(t=1),t<0&&(t=0),t)},e.prototype._createXSite=function(t,e){return new n.models._XStockSiteModel(this._data()._seriesList())},e}(e._CartesianPlotView);n._StockPlotView=t}(e.financial||(e.financial={}))}(dv||(dv={})),function(h){!function(t){"use strict";var e=function(n){function t(t,e){return n.call(this,t,e)||this}return __extends(t,n),t.prototype._startPoint=function(){return this.__startPoint},t.prototype._endPoint=function(){return this.__endPoint},t.prototype._pointView=function(){return n.prototype._pointView.call(this)},t.prototype._layout=function(t,e,n){var i=this._pointView()._topLineStart(),o=this._pointView()._plotView();e=this._pointView()._rectangle();var l=h.TextPosition.Auto;null!=o._option().config.text.position&&(l=o._option().config.text.position);var r=o._layoutView()._dataLabelsRectangle(),a=this._measure(t,null),s=o._option().config.text.offset,_=i.clone(),u=i.clone();if(l==h.TextPosition.Center)_=u=e.center.clone(),this._rotatedRectangle(new h.models._RotatedRectangle(e.center.x,e.center.y,a.width,a.height,0)),u.x+a.width/2>r.right&&this._rotatedRectangle(new h.models._RotatedRectangle(r.right-a.width/2,e.center.y,a.width,a.height,0)),u.x-a.width/2<r.left&&this._rotatedRectangle(new h.models._RotatedRectangle(r.left+a.width/2,e.center.y,a.width,a.height,0));else if(l==h.TextPosition.Inside&&0<=s||l==h.TextPosition.Outside&&s<0){s<0&&(s=-s),u.y=i.y+s,(c=i.y+s)>r.bottom&&(c=r.bottom-a.height,u.y=c),this._rotatedRectangle(new h.models._RotatedRectangle(e.center.x,c+a.height/2,a.width,a.height,0))}else{var c;s<0&&(s=-s),u.y=i.y-s,(c=i.y-s-a.height)<r.top&&(c=r.top,u.y=r.top+a.height),this._rotatedRectangle(new h.models._RotatedRectangle(e.center.x,c+a.height/2,a.width,a.height,0))}this.__startPoint=_,this.__endPoint=u},t}(h._DataLabelView);t._CandleStickDataLabelView=e}(h.financial||(h.financial={}))}(dv||(dv={})),function(y){!function(d){"use strict";var t=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype._legendSymbol=function(){return new n},e.prototype._createData=function(t){return new d.models._StockPlot(this,t,this._option())},e.prototype._layoutSeriesList=function(t,e,n){for(var i=0,o=this._data()._seriesList();i<o.length;i++)for(var l=0,r=o[i]._points();l<r.length;l++){var a=r[l];this.layoutCandlestick(t,a)}},e.prototype.layoutCandlestick=function(t,e){var n=this._getAxisX(),i=this._getAxisY(),o=this._minDistanceInDimensionValues();null==o&&(o=1);var l=e.xValue-.5*o*this._barWidth(),r=l+o*this._barWidth(),a=((l=n._scale().value(l))+(r=n._scale().value(r)))/2,s=i._scale().value(e.high),_=i._scale().value(e.low),u=i._scale().value(e.open),c=i._scale().value(e.close),h=new d._CandleStickPointView(e,this),p=l<r?l:r,f=e.open>e.close?u:c;h._topLineStart(new y.core.Point(a,s)),h._topLineEnd(new y.core.Point(a,f)),h._bottomLineStart(new y.core.Point(a,_)),h._bottomLineEnd(new y.core.Point(a,f+Math.abs(c-u))),h._rectangle(new y.core.Rect(p,f,Math.abs(r-l),Math.abs(c-u))),h.refresh(),this._children.push(h),this._pointViews().push(h)},e}(d._StockPlotView);d._CandleStickPlotView=t;var n=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.render=function(t,e){var n=this._seriesColor()||this.color;t.beginTransform();var i=new y._Style;i.stroke=n,i.strokeWidth=1,i._mergeDataPointStyle(this._style()),y._applyNewStyle(t,i),t.drawLine(e.left,e.top+e.height/2,e.right,e.top+e.height/2),t.restoreTransform()},e}(y.models._LegendSymbol)}(y.financial||(y.financial={}))}(dv||(dv={})),function(_){!function(t){"use strict";var e=function(e){function t(t){return e.call(this,t)||this}return __extends(t,e),t.prototype._createPoints=function(t){var e=[],n=t._data().additionalKind,i=t._rectangle();if(i){var o=t._data();null!=n&&"open"!=n||(o.open>o.close?(e.push(new _.core.Point(i.left,i.top)),e.push(new _.core.Point(i.right,i.top))):(e.push(new _.core.Point(i.right,i.bottom)),e.push(new _.core.Point(i.left,i.bottom)))),null!=n&&"close"!=n||(o.open>o.close?(e.push(new _.core.Point(i.right,i.bottom)),e.push(new _.core.Point(i.left,i.bottom))):(e.push(new _.core.Point(i.left,i.top)),e.push(new _.core.Point(i.right,i.top))))}var l=t._topLineStart(),r=t._topLineEnd();null!=l&&null!=r&&(null!=n&&"high"!=n||e.push(l.clone()));var a=t._bottomLineStart(),s=t._bottomLineEnd();return null!=a&&null!=s&&(null!=n&&"low"!=n||e.push(a.clone())),e},t}(_._PointAdorner);t._CandleStickPointAdorner=e}(_.financial||(_.financial={}))}(dv||(dv={})),function(r){!function(n){"use strict";var t=function(l){function t(t,e){var n=l.call(this,t,e)||this;return n.__hittestRects=[],n}return __extends(t,l),t.prototype._data=function(){return l.prototype._data.call(this)},t.prototype._selectionAdorner=function(){return new n._CandleStickPointAdorner(this)},t.prototype._topLineStart=function(t){if(arguments.length<=0)return this.__topLineStart;this.__topLineStart=t.clone()},t.prototype._topLineEnd=function(t){if(arguments.length<=0)return this.__topLineEndLocation;this.__topLineEndLocation=t.clone()},t.prototype._bottomLineStart=function(t){if(arguments.length<=0)return this.__bottomLineStartLocation;this.__bottomLineStartLocation=t.clone()},t.prototype._bottomLineEnd=function(t){if(arguments.length<=0)return this.__bottomLineEndLocation;this.__bottomLineEndLocation=t.clone()},t.prototype._defaultStyle=function(){return new r.options._DataPointStyleOption({opacity:null,strokeOpacity:null,fill:"none",stroke:n.__Constant_Candle_Stick_Style_Stroke,strokeWidth:1,strokeDasharray:null,symbolShape:null,symbolOpacity:null,symbolStrokeOpacity:null,symbolFill:null,symbolStroke:null,symbolStrokeWidth:null,symbolStrokeDasharray:null})},t.prototype._renderContent=function(t,e){t.beginTransform(),r._applyDataPointStyle(t,this._defaultStyle()),null!=this._data()._series().color&&(t.fill=this._data()._series().color,t.stroke=this._data()._series().color),null!=this._data()._color()&&(t.fill=this._data()._color(),t.stroke=this._data()._color()),r._applyDataPointStyle(t,this._data()._series().style),r._applyDataPointStyle(t,this._data().style),e.hasSelectionInPlotArea&&(this._data()._selected()?(r._applyDataPointStyle(t,this._data()._series()._plot()._plotView()._plotAreaView()._dvView()._option().selectedStyle),r._applyDataPointStyle(t,this._data()._series()._plot()._plotView()._option().config.selectedStyle),e.apiSelectedStyle&&r._applyDataPointStyle(t,e.apiSelectedStyle)):(r._applyDataPointStyle(t,this._data()._series()._plot()._plotView()._plotAreaView()._dvView()._option().unselectedStyle),r._applyDataPointStyle(t,this._data()._series()._plot()._plotView()._option().config.unselectedStyle))),this._hover()&&r._applyDataPointStyle(t,this._data()._series()._plot()._option().config.hoverStyle),null!=this.__topLineStart&&null!=this.__topLineEndLocation&&(this.__topLineStart.equals(this.__topLineEndLocation)||t.drawLine(this.__topLineStart.x,this.__topLineStart.y,this.__topLineEndLocation.x,this.__topLineEndLocation.y)),null!=this.__bottomLineStartLocation&&null!=this.__bottomLineEndLocation&&(this.__bottomLineStartLocation.equals(this.__bottomLineEndLocation)||t.drawLine(this.__bottomLineStartLocation.x,this.__bottomLineStartLocation.y,this.__bottomLineEndLocation.x,this.__bottomLineEndLocation.y)),t.drawRect(this._rectangle().left,this._rectangle().top,this._rectangle().width,this._rectangle().height),t.restoreTransform()},t.prototype._hitTest=function(t){for(var e=0;e<this.__hittestRects.length;++e){var n=this.__hittestRects[e];if(null!=n&&n.contains(t)){var i=this._data().item.open>this._data().item.close,o=void 0;switch(e){case 0:o="high";break;case 1:o=i?"open":"close";break;case 2:o=i?"close":"open";break;case 3:o="low"}return new r.HitTestResult(t,this._data(),this,r.ElementType.DataPoint,o)}}return l.prototype._hitTest.call(this,t)},t.prototype._createDataLabelView=function(){var t=[],e=r.plugins._Plugins._dataContentProvider("Default");return null!=e&&(t=e.toLines(this._data()._dataLabelContentSite())),null!=t&&0<t.length?new n._CandleStickDataLabelView(this,t):null},t.prototype.refresh=function(){this.__hittestRects=[this._rectangle().clone(),this._rectangle().clone(),this._rectangle().clone(),this._rectangle().clone()];var t=this._rectangle().top,e=this._rectangle().bottom,n=t,i=this._rectangle().top+this._rectangle().height/2,o=this._rectangle().bottom;null!=this.__topLineStart&&null!=this.__topLineEndLocation&&(t=this.__topLineStart.y-10,n=this.__topLineEndLocation.y-(this.__topLineEndLocation.y-this.__topLineStart.y)/2),null!=this.__bottomLineStartLocation&&null!=this.__bottomLineEndLocation&&(o=this._rectangle().bottom+Math.abs(this.__bottomLineEndLocation.y-this.__bottomLineStartLocation.y)/2,e=this._rectangle().bottom+Math.abs(this.__bottomLineEndLocation.y-this.__bottomLineStartLocation.y)+10),this.__hittestRects[0].top=t,this.__hittestRects[0].height=n-t,this.__hittestRects[1].top=n,this.__hittestRects[1].height=i-n,this.__hittestRects[2].top=i,this.__hittestRects[2].height=o-i,this.__hittestRects[3].top=o,this.__hittestRects[3].height=e-o},t}(r._CartesianPointView);n._CandleStickPointView=t}(r.financial||(r.financial={}))}(dv||(dv={})),function(p){!function(t){"use strict";var e=function(n){function t(t,e){return n.call(this,t,e)||this}return __extends(t,n),t.prototype._startPoint=function(){return this.__startPoint},t.prototype._endPoint=function(){return this.__endPoint},t.prototype._pointView=function(){return n.prototype._pointView.call(this)},t.prototype._center=function(){var t=this._pointView(),e=t._highLowStart().clone(),n=Math.max(t._openStartPt.y,t._closeStartPt.y),i=Math.min(t._openStartPt.y,t._closeStartPt.y);return e.y=i+(n-i)/2,e},t.prototype._layout=function(t,e,n){var i=this._pointView()._plotView(),o=this._pointView()._highLowStart(),l=p.TextPosition.Auto;null!=i._option().config.text.position&&(l=i._option().config.text.position);var r=i._layoutView()._dataLabelsRectangle(),a=this._measure(t,null),s=i._option().config.text.offset,_=o.clone(),u=o.clone();if(l==p.TextPosition.Center){var c=this._center();this._rotatedRectangle(new p.models._RotatedRectangle(_.x,c.y,a.width,a.height,0)),u.x+a.width/2>r.right&&this._rotatedRectangle(new p.models._RotatedRectangle(r.right-a.width/2,c.y,a.width,a.height,0)),u.x-a.width/2<r.left&&this._rotatedRectangle(new p.models._RotatedRectangle(r.left+a.width/2,c.y,a.width,a.height,0))}else if(l==p.TextPosition.Inside&&0<=s||l==p.TextPosition.Outside&&s<0){s<0&&(s=-s),u.y=o.y+s,(h=o.y+s)>r.bottom&&(h=r.bottom-a.height,u.y=h),this._rotatedRectangle(new p.models._RotatedRectangle(_.x,h+a.height/2,a.width,a.height,0))}else{var h;s<0&&(s=-s),u.y=o.y-s,(h=o.y-s-a.height)<r.top&&(h=r.top,u.y=r.top+a.height),this._rotatedRectangle(new p.models._RotatedRectangle(_.x,h+a.height/2,a.width,a.height,0))}this.__startPoint=_,this.__endPoint=u},t}(p._DataLabelView);t._HlocDataLabelView=e}(p.financial||(p.financial={}))}(dv||(dv={})),function(g){!function(m){"use strict";var t=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype._legendSymbol=function(){return new n},e.prototype._createData=function(t){return new m.models._StockPlot(this,t,this._option())},e.prototype._layoutSeriesList=function(t,e,n){for(var i=0,o=this._data()._seriesList();i<o.length;i++)for(var l=0,r=o[i]._points();l<r.length;l++){var a=r[l];this.layoutHloc(t,a)}},e.prototype.layoutHloc=function(t,e){var n=e.high,i=e.low,o=e.open,l=e.close,r=this._minDistanceInDimensionValues();null==r&&(r=1);var a=this._getAxisX(),s=this._getAxisY(),_=e.xValue-.5*r*this._barWidth(),u=_+r*this._barWidth(),c=((_=a._scale().value(_))+(u=a._scale().value(u)))/2,h=s._scale().value(n),p=s._scale().value(i),f=s._scale().value(o),d=s._scale().value(l),y=new m._HlocPointView(e,this);null==c||isNaN(c)||null==h||isNaN(h)||null==p||isNaN(p)||(y.hlLineStart=new g.core.Point(c,h),y.hlLineEnd=new g.core.Point(c,p));null==c||isNaN(c)||null==f||isNaN(f)||null==u||isNaN(u)||null==_||isNaN(_)||(y.openLineStart=new g.core.Point(c-Math.abs(u-_)/2,f),y.openLineEnd=new g.core.Point(c,f)),null==c||isNaN(c)||null==d||isNaN(d)||null==u||isNaN(u)||null==_||isNaN(_)||(y.closeLineStart=new g.core.Point(c,d),y.closeLineEnd=new g.core.Point(c+Math.abs(u-_)/2,d)),y.refresh(),this._children.push(y),this._pointViews().push(y)},e}(m._StockPlotView);m._HlocPlotView=t;var n=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.render=function(t,e){var n=this._seriesColor()||this.color;t.beginTransform();var i=new g._Style;i.stroke=n,i.strokeWidth=1,i._mergeDataPointStyle(this._style()),g._applyNewStyle(t,i),t.drawLine(e.left,e.top+e.height/2,e.right,e.top+e.height/2),t.restoreTransform()},e}(g.models._LegendSymbol)}(g.financial||(g.financial={}))}(dv||(dv={})),function(n){!function(t){"use strict";var e=function(e){function t(t){return e.call(this,t)||this}return __extends(t,e),t.prototype._createPoints=function(t){var e=[];return null!=t.__highLowStart&&e.push(t.__highLowStart.clone()),null!=t._openStartPt&&e.push(t._openStartPt.clone()),null!=t._closeEndPt&&e.push(t._closeEndPt.clone()),null!=t._hlEndPt&&e.push(t._hlEndPt.clone()),e},t}(n._PointAdorner);t._HlocPointAdorner=e}(n.financial||(n.financial={}))}(dv||(dv={})),function(l){!function(n){"use strict";var t=function(o){function t(){return null!==o&&o.apply(this,arguments)||this}return __extends(t,o),t.prototype._data=function(){return o.prototype._data.call(this)},t.prototype._selectionAdorner=function(){return new n._HlocPointAdorner(this)},t.prototype._highLowStart=function(t){if(arguments.length<=0)return this.__highLowStart;this.__highLowStart=t},Object.defineProperty(t.prototype,"hlLineStart",{set:function(t){this.__highLowStart=t.clone()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hlLineEnd",{set:function(t){this._hlEndPt=t.clone()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"openLineStart",{set:function(t){this._openStartPt=t.clone()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"openLineEnd",{set:function(t){this._openEndPt=t.clone()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"closeLineStart",{set:function(t){this._closeStartPt=t.clone()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"closeLineEnd",{set:function(t){this._closeEndPt=t.clone()},enumerable:!0,configurable:!0}),t.prototype._defaultStyle=function(){return new l.options._DataPointStyleOption({opacity:null,strokeOpacity:null,fill:null,stroke:n.__Constant_Hloc_Style_Stroke,strokeWidth:1,strokeDasharray:null,symbolShape:null,symbolOpacity:null,symbolStrokeOpacity:null,symbolFill:null,symbolStroke:null,symbolStrokeWidth:null,symbolStrokeDasharray:null})},t.prototype._renderContent=function(t,e){t.beginTransform(),l._applyDataPointStyle(t,this._defaultStyle()),null!=this._data()._series().color&&(t.fill=this._data()._series().color,t.stroke=this._data()._series().color),null!=this._data()._color()&&(t.fill=this._data()._color(),t.stroke=this._data()._color()),l._applyDataPointStyle(t,this._data()._series().style),l._applyDataPointStyle(t,this._data().style),e.hasSelectionInPlotArea&&(this._data()._selected()?(l._applyDataPointStyle(t,this._plotView()._plotAreaView()._dvView()._option().selectedStyle),l._applyDataPointStyle(t,this._plotView()._option().config.selectedStyle),e.apiSelectedStyle&&l._applyDataPointStyle(t,e.apiSelectedStyle)):(l._applyDataPointStyle(t,this._plotView()._plotAreaView()._dvView()._option().unselectedStyle),l._applyDataPointStyle(t,this._plotView()._option().config.unselectedStyle))),this._hover()&&l._applyDataPointStyle(t,this._plotView()._option().config.hoverStyle);var n=this._highLowStart();null!=n&&null!=this._hlEndPt&&t.drawLine(n.x,n.y,this._hlEndPt.x,this._hlEndPt.y),null!=this._openStartPt&&null!=this._openEndPt&&(this._openStartPt.equals(this._openEndPt)||t.drawLine(this._openStartPt.x,this._openStartPt.y,this._openEndPt.x,this._openEndPt.y)),null!=this._closeStartPt&&null!=this._closeEndPt&&(this._closeStartPt.equals(this._closeEndPt)||t.drawLine(this._closeStartPt.x,this._closeStartPt.y,this._closeEndPt.x,this._closeEndPt.y)),t.restoreTransform()},t.prototype._hitTest=function(t){for(var e=0;e<this.__hittestRects.length;++e){var n=this.__hittestRects[e];if(null!=n&&n.contains(t)){var i=void 0;switch(e){case 0:i="high";break;case 1:i="open";break;case 2:i="close";break;case 3:i="low";break;case 4:i=null}return new l.HitTestResult(t,this._data(),this,l.ElementType.DataPoint,i)}}return o.prototype._hitTest.call(this,t)},t.prototype._createDataLabelView=function(){var t=[],e=l.plugins._Plugins._dataContentProvider("Default");return null!=e&&(t=e.toLines(this._data()._dataLabelContentSite())),null!=t&&0<t.length?new n._HlocDataLabelView(this,t):null},t.prototype.refresh=function(){var t=Math.min(null!=this.__highLowStart?this.__highLowStart.x:null,null!=this._hlEndPt?this._hlEndPt.x:null,null!=this._openEndPt?this._openEndPt.x:null,null!=this._openStartPt?this._openStartPt.x:null,null!=this._closeEndPt?this._closeEndPt.x:null,null!=this._closeStartPt?this._closeStartPt.x:null),e=Math.min(null!=this.__highLowStart?this.__highLowStart.y:null,null!=this._hlEndPt?this._hlEndPt.y:null,null!=this._openEndPt?this._openEndPt.y:null,null!=this._openStartPt?this._openStartPt.y:null,null!=this._closeEndPt?this._closeEndPt.y:null,null!=this._closeStartPt?this._closeStartPt.y:null),n=Math.max(null!=this.__highLowStart?this.__highLowStart.x:null,null!=this._hlEndPt?this._hlEndPt.x:null,null!=this._openEndPt?this._openEndPt.x:null,null!=this._openStartPt?this._openStartPt.x:null,null!=this._closeEndPt?this._closeEndPt.x:null,null!=this._closeStartPt?this._closeStartPt.x:null),i=Math.max(null!=this.__highLowStart?this.__highLowStart.y:null,null!=this._hlEndPt?this._hlEndPt.y:null,null!=this._openEndPt?this._openEndPt.y:null,null!=this._openStartPt?this._openStartPt.y:null,null!=this._closeEndPt?this._closeEndPt.y:null,null!=this._closeStartPt?this._closeStartPt.y:null);this._rectangle(new l.core.Rect(t,e,n-t,i-e)),this.__hittestRects=[];var o=this._highLowStart();null!=o&&(this.__hittestRects[0]=new l.core.Rect(o.x-10,o.y-10,20,20)),null!=this._openStartPt&&(this.__hittestRects[1]=new l.core.Rect(this._openStartPt.x,this._openStartPt.y-10,this._rectangle().width/2,20)),null!=this._closeEndPt&&(this.__hittestRects[2]=new l.core.Rect(this._closeEndPt.x-this._rectangle().width/2,this._closeEndPt.y-10,this._rectangle().width/2,20)),null!=this._hlEndPt&&(this.__hittestRects[3]=new l.core.Rect(this._hlEndPt.x-10,this._hlEndPt.y-10,20,20)),this.__hittestRects[4]=new l.core.Rect(this.__highLowStart.x-10,this.__highLowStart.y-10,20,this._hlEndPt.y-this.__highLowStart.y+20)},t}(l._CartesianPointView);n._HlocPointView=t}(l.financial||(l.financial={}))}(dv||(dv={})),function(e){var t;(function(t){"use strict";e.plugins.registerPlot("CartesianCandlestick",new t._CandleStickPlotPlugin),e.plugins.registerPlot("CartesianHighLowOpenClose",new t._HlocPlotPlugin)})((t=e.financial||(e.financial={})).plugins||(t.plugins={}))}(dv||(dv={}));
	module.exports = dv;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Charts = {};
	    var Drawing = __webpack_require__(4).Drawing;
	    for (var p in Drawing) {
	        if (Drawing.hasOwnProperty(p)) {
	            Charts[p] = Drawing[p];
	        }
	    }
	    module.exports = Charts;
	}());

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Sheets.FloatingObjects;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Charts = __webpack_require__(3);
	    var $ = __webpack_require__(6).GC$,
	        $_inherit = $.inherit,
	        COMMON_MODULE = Charts,
	        UnitHelper = COMMON_MODULE.UnitHelper,
	        defineProperty = COMMON_MODULE.ChartUtility.defineProperty,
	        isNullOrUndefined = COMMON_MODULE.UnitHelper.isNullOrUndefined,
	        ChartElementBase = COMMON_MODULE.ChartElementBase,
	        ChartFormat = __webpack_require__(7).ChartFormat,
	        ChartUtility = COMMON_MODULE.ChartUtility,
	        IsSunburstOrTreemapChart = ChartUtility.IsSunburstOrTreemapChart;
	    var keyword_null = null;
	
	    var ChartTitleBase = (function (_super) {
	        $_inherit(ChartTitleBase, _super);
	        function ChartTitleBase(chart) {
	            var _this = _super.call(this) || this;
	            _this._includeInLayout = true;
	            _this._chartText = keyword_null;
	
	            _this._ooTitle = keyword_null;
	            _this._chart = chart;
	            _this._chartText = _this.GetDefaultChartText();
	            return _this;
	        }
	
	        var ChartTitleBase_prototype = ChartTitleBase.prototype;
	        ChartTitleBase_prototype.GetChartTextInternal = function () {
	            return this._chartText;
	        };
	        defineProperty(ChartTitleBase_prototype, "Font", {
	            get: function () {
	                var _this = this;
	                if (isNullOrUndefined(_this._chartText)) {
	                    _this._chartText = _this.GetDefaultChartText();
	                }
	                return _this._chartText.Font;
	            }
	        });
	        defineProperty(ChartTitleBase_prototype, "Format", {
	            get: function () {
	                return this.ChartFormat;
	            }
	        });
	        defineProperty(ChartTitleBase_prototype, "Formula", {
	            get: function () {
	                return !isNullOrUndefined(this._chartText) ? this._chartText.Formula : keyword_null;
	            },
	            set: function (value) {
	                var _this = this;
	                if (isNullOrUndefined(_this._chartText)) {
	                    _this._chartText = _this.GetDefaultChartText();
	                }
	                _this._chartText.Formula = value;
	            }
	        });
	        defineProperty(ChartTitleBase_prototype, "FormulaR1C1", {
	            get: function () {
	                return !isNullOrUndefined(this._chartText) ? this._chartText.FormulaR1C1 : keyword_null;
	            },
	            set: function (value) {
	                var _this = this;
	                if (isNullOrUndefined(_this._chartText)) {
	                    _this._chartText = _this.GetDefaultChartText();
	                }
	                _this._chartText.FormulaR1C1 = value;
	            }
	        });
	        defineProperty(ChartTitleBase_prototype, "IncludeInLayout", {
	            get: function () {
	                return this._includeInLayout;
	            },
	            set: function (value) {
	                this._includeInLayout = value;
	            }
	        });
	        defineProperty(ChartTitleBase_prototype, "Parent", {
	            get: function () {
	                return this._chart;
	            }
	        });
	        defineProperty(ChartTitleBase_prototype, "Text", {
	            get: function () {
	                return !isNullOrUndefined(this._chartText) ? this._chartText.Text : keyword_null;
	            },
	            set: function (value) {
	                var _this = this;
	                if (isNullOrUndefined(_this._chartText)) {
	                    _this._chartText = _this.GetDefaultChartText();
	                }
	                _this._chartText.Text = value;
	            }
	        });
	        defineProperty(ChartTitleBase_prototype, "DefaultText", {
	            get: function () {
	                return keyword_null;
	            }
	        });
	        defineProperty(ChartTitleBase_prototype, "DefaultFontSize", {
	            get: function () {
	                return 0;
	            }
	        });
	        defineProperty(ChartTitleBase_prototype, "Worksheet", {
	            get: function () {
	                return this._chart.Parent.sheet();
	            }
	        });
	        ChartTitleBase_prototype.GetTextList = function (range) {
	            var textList = [];
	            var sheet = this.Worksheet._GetSheet(range.WorksheetName);
	            for (var row = range.Row; row <= range.LastRow; row++) {
	                for (var col = range.Column; col <= range.LastColumn; col++) {
	                    var txt = sheet._GetRange(row, col).Text;
	                    textList.push(!isNullOrUndefined(txt) ? txt : "");
	                }
	            }
	            return textList;
	        };
	        ChartTitleBase_prototype.GetDefaultChartText = function () {
	            var chartText = new Charts.DrawingText(this._chart.Parent, this._chart.ChartArea.Font, keyword_null, keyword_null);
	            chartText.Font.Size = this.DefaultFontSize;
	            return chartText;
	        };
	        ChartTitleBase_prototype.CreateFormat = function () {
	            var format = new ChartFormat(this._chart);
	            format.Fill.Color.ColorType = 0 ;
	            format.Line.Color.ColorType = 0 ;
	            return format;
	        };
	        ChartTitleBase_prototype.FromOOModel = function (title ) {
	            var _this = this;
	            _this._ooTitle = title;
	            if (title) {
	                if (!isNullOrUndefined(title.tx)) {
	                    if (!isNullOrUndefined(title.tx.strRef) && !isNullOrUndefined(title.txPr)) {
	                        title.tx.rich = title.txPr;
	                    } else if (!isNullOrUndefined(title.txPr) && !isNullOrUndefined(title.tx.txData)) {
	                        title.tx.rich = title.txPr;
	                    }
	                    _this._chartText.FromOOModel(title.tx);
	                } else if (!isNullOrUndefined(title.txPr)) {
	                    var tx = {};
	                    tx.rich = title.txPr;
	                    _this._chartText.FromOOModel(tx);
	                } else {
	                    _this._chartText = _this.GetDefaultChartText();
	                }
	                if (!isNullOrUndefined(title.overlay)) {
	                    _this._includeInLayout = !title.overlay;
	                }
	                _super.prototype.FromShapeProperties.call(_this, title.spPr);
	            }
	        };
	        ChartTitleBase_prototype.ToOOModel = function () {
	            var _this = this;
	            var ooTitle = !isNullOrUndefined(_this._ooTitle) ? _this._ooTitle : {};
	            if (!isNullOrUndefined(_this._chartText)) {
	                var tx = _this._chartText.ToOOModel();
	                ooTitle.tx = {};
	                if (!isNullOrUndefined(_this._chartText.TextRefer)) {
	                    ooTitle.tx.strRef = tx.strRef;
	                    ooTitle.txPr = tx.rich;
	                } else if (_this._chartText.Text) {
	                    delete ooTitle.tx.strRef;
	                    ooTitle.tx = tx;
	                } else {
	                    delete ooTitle.tx;
	                    ooTitle.txPr = tx.rich;
	                   
	                    if (IsSunburstOrTreemapChart(this._chart.ChartType) && ooTitle.txPr.p.length > 0 && ooTitle.txPr.p[0].elements && ooTitle.txPr.p[0].elements.length > 0) {
	                        ooTitle.txPr.p[0].elements[0].t = _this.DefaultText;
	                    }
	                }
	            } else {
	                delete ooTitle.tx;
	                delete ooTitle.txPr;
	            }
	            ooTitle.overlay = !_this._includeInLayout;
	            ooTitle.spPr = _super.prototype.ToShapeProperties.call(_this);
	            return ooTitle;
	        };
	        return ChartTitleBase;
	    }(ChartElementBase));
	    Charts.ChartTitleBase = ChartTitleBase;
	    var ChartTitle = (function (_super) {
	        $_inherit(ChartTitle, _super);
	        function ChartTitle(chart) {
	            return _super.call(this, chart) || this;
	        }
	
	        var ChartTitle_prototype = ChartTitle.prototype;
	        defineProperty(ChartTitle_prototype, "DefaultText", {
	            get: function () {
	                return "Chart Title";
	            }
	        });
	        defineProperty(ChartTitle_prototype, "DefaultFontSize", {
	            get: function () {
	                return UnitHelper.pointToPixel(14);
	            }
	        });
	        ChartTitle_prototype.Delete = function () {
	            this._chart.HasTitle = false;
	        };
	        ChartTitle_prototype.ToOOModel = function (is2016Chart) {
	            var ooTitle = _super.prototype.ToOOModel.call(this);
	           
	           
	           
	           
	            if (isNullOrUndefined(ooTitle.tx) && isNullOrUndefined(ooTitle.txPr) && !is2016Chart) {
	                var txPr = ooTitle.txPr = {p: []} ;
	                var defaultOOPModel = {elements: []} ;
	                defaultOOPModel.pPr = {} ;
	                defaultOOPModel.pPr.defRPr = {b: false} ;
	                txPr.p.push(defaultOOPModel);
	                if (isNullOrUndefined(txPr.bodyPr)) {
	                    txPr.bodyPr = {} ;
	                }
	                if (isNullOrUndefined(txPr.lstStyle)) {
	                    txPr.lstStyle = {} ;
	                }
	            }
	            this.CorrectChartTitleOOModel(ooTitle);
	           
	            return ooTitle;
	        };
	        ChartTitle_prototype.CorrectChartTitleOOModel = function (titleModel ) {
	            if (titleModel) {
	                var txPr = titleModel.txPr, tx = titleModel.tx, size = this.Font.Size, defRPr;
	                if (txPr && txPr.p && txPr.p.length > 0 &&
	                    txPr.p[0].pPr) {
	                    defRPr = txPr.p[0].pPr.defRPr;
	                    if (defRPr) {
	                        defRPr.sz = size;
	                    }
	                } else if (tx && tx.rich && tx.rich.p && tx.rich.p.length > 0 &&
	                    tx.rich.p[0].pPr) {
	                    defRPr = tx.rich.p[0].pPr.defRPr;
	                    if (defRPr) {
	                        defRPr.sz = size;
	                    }
	                }
	            }
	        };
	        return ChartTitle;
	    }(ChartTitleBase));
	    Charts.ChartTitle = ChartTitle;
	
	    module.exports = Charts;
	}());

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Sheets;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Charts = __webpack_require__(3);
	    var $ = __webpack_require__(6).GC$,
	        COMMON_MODULE = Charts,
	        isNullOrUndefined = COMMON_MODULE.UnitHelper.isNullOrUndefined,
	        ChartUtility = COMMON_MODULE.ChartUtility,
	        defineProperty = ChartUtility.defineProperty,
	        deleteFillItems = ChartUtility._deleteFillItems,
	        FillFormat = Charts.FillFormat,
	        LineFormat = Charts.LineFormat,
	        ColorFormat = Charts.ColorFormat,
	        ThreeDFormat = Charts.ThreeDFormat,
	        EFFECT_MODULE = Charts,
	        ShadowFormat = EFFECT_MODULE.ShadowFormat,
	        GlowFormat = EFFECT_MODULE.GlowFormat,
	        SoftEdgeFormat = EFFECT_MODULE.SoftEdgeFormat,
	        ReflectionFormat = EFFECT_MODULE.ReflectionFormat,
	        ARGBColor = Charts.ARGBColor,
	        StatefullBase = Charts.StatefullBase;
	    var keyword_null = null, keyword_undefined = void 0;
	
	    Charts.ChartFormatStates = {
	        Fill: 1,
	        Glow: 2,
	        Line: 4,
	        PictureFormat: 8,
	        Shadow: 16,
	        SoftEdge: 32,
	        ThreeD: 64
	    };
	
	    var ChartFormat = (function (_super) {
	        $.inherit(ChartFormat, _super);
	        function ChartFormat(chart, parent, autoFillColorFormat, autoLineColorFormat) {
	            if (parent === keyword_undefined) {
	                parent = keyword_null;
	            }
	            var _this = _super.call(this, parent) || this;
	            _this._oomodel = keyword_null;
	            _this._chart = chart;
	            _this._parentChartFormat = parent;
	            _this._autoFillColorFormat = autoFillColorFormat || _this._getAutoFillColorFormat.bind(_this);
	            _this._autoLineColorFormat = autoLineColorFormat || _this._getAutoLineColorFormat.bind(_this);
	            return _this;
	        }
	
	        var ChartFormat_prototype = ChartFormat.prototype;
	        ChartFormat_prototype._getAutoFillColorFormat = function() {
	            var parent = this._parentChartFormat;
	            var colorFormat = new ColorFormat(this._chart, parent && parent.FillInternal);
	            colorFormat.RGB = ARGBColor.FromRgb(255, 255, 255); 
	            return colorFormat;
	        };
	        ChartFormat_prototype._getAutoLineColorFormat = function () {
	            var parent = this._parentChartFormat;
	            var colorFormat = new ColorFormat(this._chart, parent && parent.FillInternal);
	            colorFormat.RGB = ARGBColor.FromRgb(0, 0, 0); 
	            return colorFormat;
	        };
	        defineProperty(ChartFormat_prototype, "Fill", {
	            get: function () {
	                return this.FillInternal;
	            }
	        });
	        defineProperty(ChartFormat_prototype, "Line", {
	            get: function () {
	                return this.LineInternal;
	            }
	        });
	        defineProperty(ChartFormat_prototype, "ThreeD", {
	            get: function () {
	                return this.ThreedInternal;
	            }
	        });
	        ChartFormat_prototype.FromOOModel = function (t ) {
	            var _this = this;
	            _this._oomodel = t;
	            if (isNullOrUndefined(t)) {
	                return;
	            }
	            if (!isNullOrUndefined(t.solidFill)) {
	                _this.FillInternal.FromOOModel(t.solidFill, 0 );
	            } else if (!isNullOrUndefined(t.noFill)) {
	                _this.FillInternal.Color.ColorType = 0;
	            } else if (!isNullOrUndefined(t.blipFill)) {
	                _this.FillInternal.FromOOModel(t.blipFill, 3 );
	            } else if (!isNullOrUndefined(t.gradFill)) {
	                _this.FillInternal.FromOOModel(t.gradFill, 2 );
	            } else if (!isNullOrUndefined(t.pattFill)) {
	                _this.FillInternal.FromOOModel(t.pattFill, 1 );
	            }
	            if (!isNullOrUndefined(t.ln)) {
	                _this.LineInternal.FromOOModel(t.ln);
	            }
	            if (!isNullOrUndefined(t.scene3d) || !isNullOrUndefined(t.sp3d)) {
	                _this.ThreedInternal.FromOOModel({Scene3D: t.scene3d, Shape3D: t.sp3d});
	            }
	            _this.FromCT_EffectList(t.effectLst);
	        };
	        ChartFormat_prototype.ToOOModel = function () {
	            return this.ToCT_ShapeProperties();
	        };
	        ChartFormat_prototype.ToCT_ShapeProperties = function () {
	            var _this = this;
	            var shapeProp = !isNullOrUndefined(_this._oomodel) ? _this._oomodel : {};
	            deleteFillItems(shapeProp);
	            if (!isNullOrUndefined(_this._fill)) {
	                var fill = _this._fill.ToOOModel();
	                if (fill.colorFillType === 0 ) {
	                    shapeProp.solidFill = fill;
	                } else if (fill.colorFillType === 1 ) {
	                    shapeProp.pattFill = fill;
	                } else if (fill.colorFillType === 2 ) {
	                    shapeProp.gradFill = fill;
	                } else if (fill.colorFillType === 3 ) {
	                    shapeProp.blipFill = fill;
	                } else if (fill.colorFillType === 5 ) {
	                    shapeProp.noFill = true;
	                }
	                delete fill.colorFillType;
	            }
	            if (!isNullOrUndefined(_this._line)) {
	                shapeProp.ln = _this._line.ToOOModel();
	            } else {
	                delete shapeProp.ln;
	            }
	            if (!isNullOrUndefined(_this._threeDFormat) && _this._threeDFormat.IsDirtyIncludingParent()) {
	                var threeDModel = _this._threeDFormat.ToOOModel();
	                shapeProp.scene3d = threeDModel.Scene3D;
	                shapeProp.sp3d = threeDModel.Shape3D;
	            }
	            shapeProp.effectLst = _this.ToCT_EffectList();
	            return shapeProp;
	        };
	        ChartFormat_prototype.Clone = function () {
	            var _this = this;
	            var format = new ChartFormat(_this._chart);
	            if (!isNullOrUndefined(_this._fill)) {
	                format._fill = _this._fill.Clone();
	            }
	            if (!isNullOrUndefined(_this._line)) {
	                format._line = _this._line.Clone();
	            } else {
	                format._line = keyword_null;
	            }
	            if (!isNullOrUndefined(_this._threeDFormat)) {
	                format._threeDFormat = _this._threeDFormat.Clone();
	            }
	            format._states = _this._states;
	            format._parentChartFormat = _this._parentChartFormat;
	            return format;
	        };
	        ChartFormat_prototype.IsDirtyIncludingParent = function (includingParent) {
	            var _this = this;
	            if (includingParent === keyword_undefined) {
	                includingParent = false;
	            }
	            if (!isNullOrUndefined(_this._fill) && _this._fill.IsDirtyIncludingParent()) {
	                return true;
	            }
	            if (!isNullOrUndefined(_this._line) && _this._line.IsDirtyIncludingParent()) {
	                return true;
	            }
	            if (!isNullOrUndefined(_this._threeDFormat) && _this._threeDFormat.IsDirtyIncludingParent()) {
	                return true;
	            }
	            return _super.prototype.IsDirtyIncludingParent.call(_this, includingParent);
	        };
	        ChartFormat_prototype.OnParentChanged = function (newParent) {
	            var _this = this;
	            _this._parentChartFormat = newParent;
	            if (!isNullOrUndefined(_this._parentChartFormat)) {
	                if (!isNullOrUndefined(_this._fill)) {
	                    _this._fill.ParentStateful = _this._parentChartFormat.Fill;
	                }
	                if (!isNullOrUndefined(_this._line)) {
	                    _this._line.ParentStateful = _this._parentChartFormat.Line;
	                }
	                if (!isNullOrUndefined(_this._threeDFormat)) {
	                    _this._threeDFormat.ParentStateful = _this._parentChartFormat.ThreeD;
	                }
	                if (!isNullOrUndefined(_this._glow)) {
	                    _this._glow.ParentStateful = _this._parentChartFormat.GlowFormatInternal;
	                }
	                if (!isNullOrUndefined(_this._shadow)) {
	                    _this._shadow.ParentStateful = _this._parentChartFormat.ShadowFormatInternal;
	                }
	                if (!isNullOrUndefined(_this._softEdge)) {
	                    _this._softEdge.ParentStateful = _this._parentChartFormat.SoftEdgeFormatInternal;
	                }
	                if (!isNullOrUndefined(_this._relfection)) {
	                    _this._relfection.ParentStateful = _this._parentChartFormat.ReflectionFormatInternal;
	                }
	            } else {
	                if (!isNullOrUndefined(_this._fill)) {
	                    _this._fill.ParentStateful = keyword_null;
	                }
	                if (!isNullOrUndefined(_this._line)) {
	                    _this._line.ParentStateful = keyword_null;
	                }
	                if (!isNullOrUndefined(_this._threeDFormat)) {
	                    _this._threeDFormat.ParentStateful = keyword_null;
	                }
	                if (!isNullOrUndefined(_this._glow)) {
	                    _this._glow.ParentStateful = keyword_null;
	                }
	                if (!isNullOrUndefined(_this._shadow)) {
	                    _this._shadow.ParentStateful = keyword_null;
	                }
	                if (!isNullOrUndefined(_this._softEdge)) {
	                    _this._softEdge.ParentStateful = keyword_null;
	                }
	                if (!isNullOrUndefined(_this._relfection)) {
	                    _this._relfection.ParentStateful = keyword_null;
	                }
	            }
	        };
	        ChartFormat_prototype.FromCT_EffectList = function (effect ) {
	            var _this = this;
	            if (isNullOrUndefined(effect)) {
	                _this.SetShadowField(keyword_null);
	                _this.SetGlowField(keyword_null);
	                _this.SetSoftEdgeField(keyword_null);
	                _this.SetReflectionField(keyword_null);
	                return;
	            }
	            if (!isNullOrUndefined(effect.innerShdw)) {
	                _this.ShadowFormatInternal.FromOOModel(effect.innerShdw);
	            } else if (!isNullOrUndefined(effect.outerShdw)) {
	                _this.ShadowFormatInternal.FromOOModel(effect.outerShdw);
	            } else if (!isNullOrUndefined(effect.prstShdw)) {
	                _this.ShadowFormatInternal.FromOOModel(effect.prstShdw);
	            } else {
	                _this.SetShadowField(keyword_null);
	            }
	            if (!isNullOrUndefined(effect.glow)) {
	                _this.GlowFormatInternal.FromOOModel(effect.glow);
	            } else {
	                _this.SetGlowField(keyword_null);
	            }
	            if (!isNullOrUndefined(effect.softEdge)) {
	                _this.SoftEdgeFormatInternal.FromOOModel(effect.softEdge);
	            } else {
	                _this.SetSoftEdgeField(keyword_null);
	            }
	            if (!isNullOrUndefined(effect.reflection)) {
	                _this.ReflectionFormatInternal.FromOOModel(effect.reflection);
	            } else {
	                _this.SetReflectionField(keyword_null);
	            }
	        };
	        ChartFormat_prototype.ToCT_EffectList = function () {
	            var _this = this;
	            var effect = !isNullOrUndefined(_this._oomodel) && !isNullOrUndefined(_this._oomodel.effectLst) ? _this._oomodel.effectLst : {} ;
	            delete effect.outerShdw;
	            delete effect.innerShdw;
	            delete effect.prstShdw;
	            if (!isNullOrUndefined(_this._shadow)) {
	                var shadowEffect = _this._shadow.ToOOModel();
	                if (shadowEffect) {
	                    var shadowEffectType = shadowEffect.shadowEffectType;
	                    if (shadowEffectType === 0 ) {
	                        effect.outerShdw = shadowEffect ;
	                    } else if (shadowEffectType === 1 ) {
	                        effect.innerShdw = shadowEffect ;
	                    } else if (shadowEffectType === 2 ) {
	                        effect.prstShdw = shadowEffect ;
	                    }
	                }
	            }
	            delete effect.glow;
	            if (!isNullOrUndefined(_this._glow)) {
	                effect.glow = _this._glow.ToOOModel();
	            }
	            delete effect.softEdge;
	            if (!isNullOrUndefined(_this._softEdge)) {
	                effect.softEdge = _this._softEdge.ToOOModel();
	            }
	            delete effect.reflection;
	            if (!isNullOrUndefined(_this._relfection)) {
	                effect.reflection = _this._relfection.ToOOModel();
	            }
	            if (_this.IsEffectListDirty(effect)) {
	                return effect;
	            }
	            return {} ;
	        };
	        defineProperty(ChartFormat_prototype, "FillInternal", {
	            get: function () {
	                var _this = this;
	                if (isNullOrUndefined(_this._fill)) {
	                    _this._fill = new FillFormat(_this._chart, !isNullOrUndefined(_this._parentChartFormat) ? _this._parentChartFormat.FillInternal : keyword_null, _this._autoFillColorFormat, _this._chart.Parent);
	                }
	                return _this._fill;
	            }
	        });
	        defineProperty(ChartFormat_prototype, "LineInternal", {
	            get: function () {
	                var _this = this;
	                if (isNullOrUndefined(_this._line)) {
	                    _this._line = new LineFormat(_this._chart, !isNullOrUndefined(_this._parentChartFormat) ? _this._parentChartFormat.LineInternal : keyword_null, _this._autoLineColorFormat);
	                }
	                return _this._line;
	            }
	        });
	        defineProperty(ChartFormat_prototype, "ThreedInternal", {
	            get: function () {
	                var _this = this;
	                if (isNullOrUndefined(_this._threeDFormat)) {
	                    _this._threeDFormat = new ThreeDFormat(_this._chart, !isNullOrUndefined(_this._parentChartFormat) ? _this._parentChartFormat.ThreedInternal : keyword_null);
	                }
	                return _this._threeDFormat;
	            }
	        });
	        defineProperty(ChartFormat_prototype, "ShadowFormatInternal", {
	            get: function () {
	                var _this = this;
	                if (isNullOrUndefined(_this._shadow)) {
	                    _this._shadow = new ShadowFormat(_this._chart, !isNullOrUndefined(_this._parentChartFormat) ? _this._parentChartFormat.ShadowFormatInternal : keyword_null);
	                }
	                return _this._shadow;
	            }
	        });
	        defineProperty(ChartFormat_prototype, "GlowFormatInternal", {
	            get: function () {
	                var _this = this;
	                if (isNullOrUndefined(_this._glow)) {
	                    _this._glow = new GlowFormat(_this._chart, !isNullOrUndefined(_this._parentChartFormat) ? _this._parentChartFormat.GlowFormatInternal : keyword_null);
	                }
	                return _this._glow;
	            }
	        });
	        defineProperty(ChartFormat_prototype, "SoftEdgeFormatInternal", {
	            get: function () {
	                if (isNullOrUndefined(this._softEdge)) {
	                    this._softEdge = new SoftEdgeFormat();
	                }
	                return this._softEdge;
	            }
	        });
	        defineProperty(ChartFormat_prototype, "ReflectionFormatInternal", {
	            get: function () {
	                var _this = this;
	                if (isNullOrUndefined(_this._relfection)) {
	                    _this._relfection = new ReflectionFormat(_this._chart, !isNullOrUndefined(_this._parentChartFormat) ? _this._parentChartFormat.ReflectionFormatInternal : keyword_null);
	                }
	                return _this._relfection;
	            }
	        });
	        ChartFormat_prototype.AdjustStateful = function (currentValue, newValue) {
	            if (!isNullOrUndefined(currentValue)) {
	                currentValue.SetParentForChildren(newValue);
	                if (!isNullOrUndefined(newValue)) {
	                    newValue.ParentStateful = currentValue.ParentStateful;
	                }
	                currentValue.ParentStateful = keyword_null;
	            }
	        };
	        ChartFormat_prototype.SetFillField = function (value) {
	            this.AdjustStateful(this._fill, value);
	            this._fill = value;
	        };
	        ChartFormat_prototype.SetLineField = function (value) {
	            this.AdjustStateful(this._line, value);
	            this._line = value;
	        };
	        ChartFormat_prototype.SetThreeDField = function (value) {
	            this.AdjustStateful(this._threeDFormat, value);
	            this._threeDFormat = value;
	        };
	        ChartFormat_prototype.SetShadowField = function (value) {
	            this.AdjustStateful(this._shadow, value);
	            this._shadow = value;
	        };
	        ChartFormat_prototype.SetGlowField = function (value) {
	            this.AdjustStateful(this._glow, value);
	            this._glow = value;
	        };
	        ChartFormat_prototype.SetReflectionField = function (value) {
	            this.AdjustStateful(this._relfection, value);
	            this._relfection = value;
	        };
	        ChartFormat_prototype.SetSoftEdgeField = function (value) {
	            this.AdjustStateful(this._softEdge, value);
	            this._softEdge = value;
	        };
	        ChartFormat_prototype.IsEffectListDirty = function (effect ) {
	            return !isNullOrUndefined(effect.blur) || !isNullOrUndefined(effect.fillOverlay) || !isNullOrUndefined(effect.glow) || !isNullOrUndefined(effect.innerShdw) || !isNullOrUndefined(effect.outerShdw) || !isNullOrUndefined(effect.prstShdw) || !isNullOrUndefined(effect.reflection) || !isNullOrUndefined(effect.softEdge);
	        };
	        return ChartFormat;
	    }(StatefullBase));
	    Charts.ChartFormat = ChartFormat;
	
	    module.exports = Charts;
	}());


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Charts = __webpack_require__(3);
	    var $ = __webpack_require__(6).GC$,
	        $_inherit = $.inherit,
	        COMMON_MODULE = Charts,
	        UnitHelper = COMMON_MODULE.UnitHelper,
	        isNullOrUndefined = UnitHelper.isNullOrUndefined,
	        ChartUtility = COMMON_MODULE.ChartUtility,
	        ChartConstants = COMMON_MODULE.ChartConstants,
	        AxisUtility = COMMON_MODULE.AxisUtility,
	        DateTimeExtension = COMMON_MODULE.DateTimeExtension,
	        ChartElementBase = COMMON_MODULE.ChartElementBase,
	        defineProperty = ChartUtility.defineProperty,
	        ChartFormat = __webpack_require__(7).ChartFormat,
	        ColorFormat = Charts.ColorFormat,
	        CHART_TITLE_MODULE = __webpack_require__(5),
	        DrawingText = Charts.DrawingText,
	        ChartTitleBase = CHART_TITLE_MODULE.ChartTitleBase;
	    var ONE_WEEK = 7, ONE_MONTH = 4 * ONE_WEEK, keyword_null = null, keyword_undefined = void 0, Math_abs = Math.abs, Math_ceil = Math.ceil;
	
	    var AxisTitle = (function (_super) {
	        $_inherit(AxisTitle, _super);
	        function AxisTitle(chart, axisGroup, type) {
	            var _this = _super.call(this, chart) || this;
	            _this._axisGroup = axisGroup;
	            _this._type = type;
	            return _this;
	        }
	
	        var AxisTitle_prototype = AxisTitle.prototype;
	        defineProperty(AxisTitle_prototype, "DefaultText", {
	            get: function () {
	                return "Axis Title";
	            }
	        });
	        defineProperty(AxisTitle_prototype, "DefaultFontSize", {
	            get: function () {
	                return UnitHelper.pointToPixel(10);
	            }
	        });
	        AxisTitle_prototype.Delete = function () {
	            this._chart.Axes.Item(this._type, this._axisGroup).HasTitle = false;
	        };
	        return AxisTitle;
	    }(ChartTitleBase));
	    Charts.AxisTitle = AxisTitle;
	
	
	
	    var DisplayUnitLabel = (function (_super) {
	        $_inherit(DisplayUnitLabel, _super);
	        function DisplayUnitLabel(axis) {
	            var _this = _super.call(this) || this;
	            _this._ooDisplUnits = keyword_null;
	           
	            _this._axis = axis;
	            _this._chartText = _this.GetDefaultChartText();
	            return _this;
	        }
	
	        var DisplayUnitLabel_prototype = DisplayUnitLabel.prototype;
	        DisplayUnitLabel_prototype.GetDefaultChartText = function () {
	            var chart = this._axis.Parent.Parent;
	            return new DrawingText(chart.Parent, chart.ChartArea.Font);
	        };
	        defineProperty(DisplayUnitLabel_prototype, "Parent", {
	            get: function () {
	                return this._axis;
	            }
	        });
	        defineProperty(DisplayUnitLabel_prototype, "Font", {
	           
	           
	           
	            get: function () {
	               
	                return this._chartText.Font;
	            }
	        });
	        defineProperty(DisplayUnitLabel_prototype, "Format", {
	           
	           
	           
	           
	           
	           
	            get: function () {
	                return this.ChartFormat;
	            }
	        });
	        defineProperty(DisplayUnitLabel_prototype, "Text", {
	           
	           
	           
	            get: function () {
	                if (!this._chartText.Text) {
	                    return this.GetAutoText();
	                }
	                return this._chartText.Text;
	            },
	            set: function (value) {
	                this._chartText.Text = value;
	            }
	        });
	       
	       
	        DisplayUnitLabel_prototype.Delete = function () {
	            this._axis.HasDisplayUnitLabel = false;
	        };
	        DisplayUnitLabel_prototype.GetAutoText = function () {
	            var axis = this._axis;
	            var displayUnit = axis.DisplayUnit;
	            var dict = {
	                8: "Trillions",
	                7: "Billions",
	                4: "Millions",
	                1: "Thousands",
	                0: "Hundreds"
	            };
	            return dict[displayUnit] || ("x" + axis.GetValuesFromDispUnit(displayUnit));
	        };
	        DisplayUnitLabel_prototype.FromOOModel = function (t ) {
	            this._ooDisplUnits = t;
	            if (!t) {
	                return;
	            }
	            if (!isNullOrUndefined(t.builtInUnit)) {
	                this._axis.DisplayUnit = t.builtInUnit;
	            } else if (!isNullOrUndefined(t.custUnit)) {
	                this._axis.DisplayUnitCustom = t.custUnit;
	            }
	            this.FromCT_DispUnitsLbl(t.dispUnitsLbl);
	        };
	        DisplayUnitLabel_prototype.ToOOModel = function () {
	            var _this = this;
	            var ooDisplUnits = _this._ooDisplUnits;
	            var ctDispUnits = ooDisplUnits || {} ;
	            if (_this._axis.DisplayUnit === 10) {
	                ctDispUnits.custUnit = _this._axis.DisplayUnitCustom;
	            } else {
	                ctDispUnits.builtInUnit = _this._axis.DisplayUnit;
	            }
	            ctDispUnits.dispUnitsLbl = _this.ToCT_DispUnitsLbl();
	            return ctDispUnits;
	        };
	        DisplayUnitLabel_prototype.From2016ChartOOModel = function (t ) {
	            this._ooDisplUnits = t;
	            if (!t) {
	                return;
	            }
	            if (!isNullOrUndefined(t.unit))  {
	                this._axis.DisplayUnit = t.unit;
	            }
	            this.FromCT_DispUnitsLbl(t.unitsLabel);
	        };
	        DisplayUnitLabel_prototype.To2016ChartOOModel = function () {
	            var _this = this;
	            var ooDisplUnits = _this._ooDisplUnits;
	            var ctDispUnits = ooDisplUnits || {} ;
	            if (_this._axis.DisplayUnit === 10) {
	                ctDispUnits.custUnit = _this._axis.DisplayUnitCustom;
	            } else {
	                ctDispUnits.builtInUnit = _this._axis.DisplayUnit;
	            }
	            ctDispUnits.unitsLabel = _this.ToCT_DispUnitsLbl();
	            return ctDispUnits;
	        };
	        DisplayUnitLabel_prototype.ToCT_DispUnitsLbl = function () {
	            var _this = this;
	            if (_this._axis.HasDisplayUnitLabel) {
	                var ooDisplUnits = _this._ooDisplUnits;
	                var unitLabel = ooDisplUnits && ooDisplUnits.dispUnitsLbl || {} ;
	                unitLabel.spPr = _this.ToShapeProperties();
	                var tx = _this._chartText.ToOOModel();
	                if (!_this._chartText.Text) {
	                    unitLabel.txPr = tx.rich;
	                    unitLabel.tx = keyword_null;
	                } else {
	                    if (!isNullOrUndefined(_this._chartText.TextRefer)) {
	                        unitLabel.tx = {strRef: tx.strRef};
	                    } else {
	                        unitLabel.tx = tx;
	                    }
	                    unitLabel.txPr = keyword_null;
	                }
	                return unitLabel;
	            }
	            return keyword_null;
	        };
	        DisplayUnitLabel_prototype.FromCT_DispUnitsLbl = function (ooUnitLabel ) {
	            var _this = this;
	            if (isNullOrUndefined(ooUnitLabel)) {
	                _this._axis.HasDisplayUnitLabel = false;
	                _this.FromShapeProperties(keyword_null);
	                return;
	            }
	            _this.FromShapeProperties(ooUnitLabel.spPr);
	            _this._axis.HasDisplayUnitLabel = true;
	            var ctTx = ooUnitLabel.tx;
	            if (!ctTx) {
	                ctTx = {rich: ooUnitLabel.txPr};
	            }
	            _this._chartText.FromOOModel(ctTx);
	        };
	        DisplayUnitLabel_prototype.CreateFormat = function () {
	            return new ChartFormat(this._axis.Parent.Parent);
	        };
	        return DisplayUnitLabel;
	    }(ChartElementBase));
	    Charts.DisplayUnitLabel = DisplayUnitLabel;
	
	
	
	    var Gridlines = (function (_super) {
	        $_inherit(Gridlines, _super);
	        function Gridlines(axis) {
	            var _this = _super.call(this) || this;
	            _this._axis = axis;
	            return _this;
	        }
	
	        var Gridlines_prototype = Gridlines.prototype;
	        defineProperty(Gridlines_prototype, "Parent", {
	           
	           
	           
	            get: function () {
	                return this._axis;
	            }
	        });
	        defineProperty(Gridlines_prototype, "Format", {
	           
	           
	           
	           
	           
	           
	            get: function () {
	                return this.ChartFormat;
	            }
	        });
	        Gridlines_prototype.FromOOModel = function (t ) {
	            this._ooGridlines = t;
	            if (t) {
	                this.FromShapeProperties(t.spPr);
	            }
	        };
	        Gridlines_prototype.ToOOModel = function () {
	            var gridlines = this._ooGridlines || {} ;
	            gridlines.spPr = this.ToShapeProperties();
	            return gridlines;
	        };
	        Gridlines_prototype.CreateFormat = function () {
	            return new ChartFormat(this._axis.Parent.Parent);
	        };
	        return Gridlines;
	    }(ChartElementBase));
	    Charts.Gridlines = Gridlines;
	
	
	
	    var TickLabels = (function () {
	        function TickLabels(axis) {
	            var _this = this;
	            _this._numberFormatLinked = true;
	            _this._orientation = 0;
	            _this._axis = axis;
	            var chart = _this._axis.Parent.Parent;
	            _this._chartText = new DrawingText(chart.Parent, chart.ChartArea.Font);
	            _this._chartText.Font.Size = UnitHelper.pointToPixel(9);
	            _this._offset = 0;
	        }
	
	        var TickLabels_prototype = TickLabels.prototype;
	        defineProperty(TickLabels_prototype, "Font", {
	           
	           
	           
	           
	            get: function () {
	                return this._chartText.Font;
	            }
	        });
	        defineProperty(TickLabels_prototype, "NumberFormat", {
	           
	           
	           
	            get: function () {
	                return this.GetNumberFormat();
	            },
	            set: function (value) {
	                this._numberFormat = value;
	                this._numberFormatLinked = false;
	            }
	        });
	        defineProperty(TickLabels_prototype, "NumberFormatLinked", {
	           
	           
	           
	           
	            get: function () {
	                return this._numberFormatLinked;
	            },
	            set: function (value) {
	                if (value) {
	                    this._numberFormat = keyword_null;
	                } else {
	                    this._numberFormat = this.GetNumberFormat();
	                }
	                this._numberFormatLinked = value;
	            }
	        });
	        defineProperty(TickLabels_prototype, "Offset", {
	           
	           
	           
	           
	            get: function () {
	                return this._offset;
	            },
	            set: function (value) {
	                this._offset = value;
	            }
	        });
	        defineProperty(TickLabels_prototype, "Parent", {
	           
	           
	            get: function () {
	                return this._axis;
	            }
	        });
	        TickLabels_prototype.GetNumberFormat = function () {
	            var _this = this, axis = _this._axis;
	            var axisType = axis.Type;
	            var chart = axis.Parent.Parent;
	            var formatCode = _this._numberFormat;
	            if (_this.NumberFormatLinked) {
	                var series = keyword_null;
	                var seriesCollection = chart.SeriesCollection;
	                if (seriesCollection.Count > 0) {
	                    series = seriesCollection.AllSers.filter(function(s) {
	                        return s._axisGroup === axis._axisGroup;
	                    })[0];
	                }
	                if (isNullOrUndefined(series)) {
	                    return keyword_null;
	                }
	                var refers = keyword_null;
	                if (axisType === 0) {
	                    refers = series.XValuesRefers;
	                } else if (axisType === 1) {
	                    refers = series.ValuesRefers;
	                }
	                if (refers && refers.length > 0) {
	                    var returnObj = {sheet: keyword_null, row: -1, col: -1};
	                    series.GetRowColIndex(refers, 0, returnObj);
	                    var sheet = returnObj.sheet;
	                    var row = returnObj.row;
	                    var col = returnObj.col;
	                    if (sheet && row !== -1 && col !== -1) {
	                        var style = sheet._GetCellStyle(row, col);
	                        if (style && style.FormatCode) {
	                            formatCode = style.FormatCode;
	                        }
	                    }
	                }
	            }
	            return formatCode || _this._getDefaultNumberFormat(chart.ChartType, axisType, axis);
	        };
	        TickLabels_prototype._getDefaultNumberFormat = function (chartType, axisType, axis) {
	            var format = "General";
	            if (ChartUtility.IsStockChart(chartType) && axisType === 0 || axis.IsTimeScale()) {
	                format = "mm/dd/yyyy";
	            } else if (ChartUtility.IsStacked100Chart(chartType) && axisType === 1) {
	                format = "0%";
	            }
	            return format;
	        };
	        TickLabels_prototype.FromOOModel = function (t) {
	            var _this = this;
	            var tx = {rich: t.CT_TextBody};
	            _this._chartText.FromOOModel(tx);
	            if (t.CT_NumFmt) {
	                _this._numberFormat = t.CT_NumFmt.formatCode;
	                _this._numberFormatLinked = t.CT_NumFmt.sourceLinked !== false;
	            } else {
	                _this._numberFormat = keyword_null;
	                _this._numberFormatLinked = true;
	            }
	        };
	        TickLabels_prototype.ToOOModel = function () {
	            var txtBody = this._chartText.ToOOModel().rich;
	            var nf = {} ;
	            nf.formatCode = this.GetNumberFormat();
	            if (this.NumberFormatLinked === false) {
	                nf.sourceLinked = false;   
	            }
	            var result = {};
	            result.CT_TextBody = txtBody;
	            result.CT_NumFmt = nf;
	            return result;
	        };
	        return TickLabels;
	    }());
	    Charts.TickLabels = TickLabels;
	
	
	
	    var Axis = (function (_super) {
	        $_inherit(Axis, _super);
	        function Axis(axes, type, axisGroup) {
	            var _this = _super.call(this) || this;
	            _this._majorTickMark = 2;
	            _this._minorTickMark = 2;
	            _this._axisBetweenCategories = true;
	            _this._logBase = 10;
	            _this._reversePlotOrder = false;
	            _this._displayUnit = 9;
	            _this._displayUnitCustom = 1.0;
	            _this._hasDisplayUnitLabel = keyword_null;
	            _this._displayUnitLabel = keyword_null;
	            _this._tickLabelSpacing = 1;
	            _this._tickLabelSpacingIsAuto = true;
	            _this._tickLabelPos = 2;
	            _this._tickMarkSpacing = 1;
	            _this._hasTitle = false;
	            _this._title = keyword_null;
	            _this._noMultiLvlLbl = true;
	            _this._ooAx = keyword_null;
	            _this._axisId = keyword_null;
	            _this._axes = axes;
	            _this._type = type;
	            _this._axisGroup = axisGroup;
	            _this._title = new AxisTitle((_this._axes.Parent), _this._axisGroup, _this._type);
	            _this._tickLabels = _this.GetDefaultTickLabels();
	            _this.InitProps();
	            _this.InitRulers();
	            return _this;
	        }
	
	        var Axis_prototype = Axis.prototype;
	        Axis_prototype.InitRulers = function () {
	            var _this = this;
	            _this._minimumScale = 0.0;
	            _this._maximumScale = 1.2;
	            _this._minimumScaleIsAuto = true;
	            _this._maxmumScaleIsAuto = true;
	            _this._majorUnit = 0.2;
	            _this._minorUnit = 0.04;
	            _this._majorUnitIsAuto = true;
	            _this._minorUnitIsAuto = true;
	            _this._baseUnit = 0;
	            _this._baseUnitIsAuto = true;
	            _this._minorUnitScale = 0;
	            _this._majorUnitScale = 0;
	            _this._scaleType = 1;
	        };
	        Axis_prototype.InitProps = function () {
	            var _this = this;
	            _this._categoryType = 0;
	            _this._actualCategoryType = 0;
	            if (_this.IsValueScaleAxis() && _this._axisGroup === 0) {
	                _this._hasMajorGridlines = true;
	                _this._majorGridlines = _this.GetDefaultGridlines();
	            }
	            if (_this.IsValueOrDateScaleAxis()) {
	                _this._crosses = 1;
	                if (_this.IsLogarithmic) {
	                    _this._crossesAt = 1;
	                } else {
	                    _this._crossesAt = 0;
	                }
	                _this._tickLabelSpacing = 10;
	            } else if (_this._type === 0) {
	                if (_this._axisGroup === 1) {
	                    _this._crosses = 2;
	                } else {
	                    _this._crosses = 1;
	                }
	                if (_this._actualCategoryType === 1) {
	                    _this._tickLabelSpacing = 1;
	                } else {
	                    _this._tickLabelSpacing = 10;
	                }
	            } else if (_this._type === 2) {
	                _this._crosses = 1;
	            }
	            _this._deleted = _this._type === 0 && _this._axisGroup !== 0;
	            _this._axisBetweenCategories = !ChartUtility.IsSurfaceChart(_this.Chart.ChartType);
	            _this._displayUnitLabel = new DisplayUnitLabel(_this);
	            _this._format = _this.GetDefaultFormat();
	        };
	        defineProperty(Axis_prototype, "AxisBetweenCategories", {
	           
	           
	           
	           
	            get: function () {
	                return this._axisBetweenCategories;
	            },
	            set: function (value) {
	                this._axisBetweenCategories = value;
	            }
	        });
	        defineProperty(Axis_prototype, "AxisGroup", {
	           
	           
	           
	            get: function () {
	                return this._axisGroup;
	            }
	        });
	        defineProperty(Axis_prototype, "Type", {
	           
	           
	           
	            get: function () {
	                return this._type;
	            }
	        });
	        defineProperty(Axis_prototype, "CategoryType", {
	           
	           
	           
	            get: function () {
	                return this._categoryType;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._categoryType) {
	                    _this.EnsureAxisType(0);
	                    _this.EnsureNotAxisCatType(3);
	                    _this.UpdateCategoryType(value);
	                    _this.Chart.HandleElementChanged(8, _this, ChartConstants.CategoryType);
	                }
	            }
	        });
	        defineProperty(Axis_prototype, "ActualCategoryType", {
	           
	           
	           
	            get: function () {
	                return this._actualCategoryType;
	            },
	            set: function (value) {
	                if (value !== this._actualCategoryType) {
	                    this._actualCategoryType = value;
	                    this.UpdateAxisRulers();
	                }
	            }
	        });
	        defineProperty(Axis_prototype, "CategoryNames", {
	           
	           
	           
	            get: function () {
	                this.EnsureAxisType(0);
	                this.EnsureNotAxisCatType(3);
	                return this.GetCategoryNames();
	            },
	            set: function (value) {
	                this.EnsureAxisType(0);
	                this.EnsureNotAxisCatType(3);
	                this.Chart.HandleElementChanged(8, this, ChartConstants.CategoryNames, value);
	            }
	        });
	        defineProperty(Axis_prototype, "ScaleType", {
	           
	           
	           
	            get: function () {
	                return this._scaleType;
	            },
	            set: function (value) {
	                if (value !== this._scaleType) {
	                    this._scaleType = value;
	                    this.UpdateAxisRulers();
	                }
	            }
	        });
	        defineProperty(Axis_prototype, "MaximumScale", {
	           
	           
	           
	            get: function () {
	                return this._maximumScale;
	            },
	            set: function (value) {
	                var _this = this;
	                _this._maxmumScaleIsAuto = false;
	                if (value !== _this._maximumScale) {
	                    _this._maximumScale = value;
	                    if (_this.IsValueOrDateScaleAxis()) {
	                        if (_this._maximumScale < _this._minimumScale) {
	                            _this._minimumScaleIsAuto = true;
	                        }
	                        if (Math_abs(_this._maximumScale - _this._minimumScale) < _this._majorUnit) {
	                            _this._majorUnitIsAuto = true;
	                            _this._minorUnitIsAuto = true;
	                        }
	                    }
	                    _this.UpdateAxisRulers();
	                }
	            }
	        });
	        defineProperty(Axis_prototype, "MaximumScaleIsAuto", {
	           
	           
	           
	            get: function () {
	                return this._maxmumScaleIsAuto;
	            },
	            set: function (value) {
	                if (value !== this._maxmumScaleIsAuto) {
	                    this._maxmumScaleIsAuto = value;
	                    this.UpdateAxisRulers();
	                }
	            }
	        });
	        defineProperty(Axis_prototype, "MinimumScale", {
	           
	           
	           
	            get: function () {
	                return this._minimumScale;
	            },
	            set: function (value) {
	                var _this = this;
	                _this._minimumScaleIsAuto = false;
	                if (value !== _this._minimumScale) {
	                    _this._minimumScale = value;
	                    if (_this.IsValueOrDateScaleAxis()) {
	                        if (_this._maximumScale < _this._minimumScale) {
	                            _this._maxmumScaleIsAuto = true;
	                        }
	                        if (Math_abs(_this._maximumScale - _this._minimumScale) < _this._majorUnit) {
	                            _this._majorUnitIsAuto = true;
	                            _this._minorUnitIsAuto = true;
	                        }
	                    }
	                    _this.UpdateAxisRulers();
	                }
	            }
	        });
	        defineProperty(Axis_prototype, "MinimumScaleIsAuto", {
	           
	           
	           
	            get: function () {
	                return this._minimumScaleIsAuto;
	            },
	            set: function (value) {
	                if (value !== this._minimumScaleIsAuto) {
	                    this._minimumScaleIsAuto = value;
	                    this.UpdateAxisRulers();
	                }
	            }
	        });
	        defineProperty(Axis_prototype, "MajorUnit", {
	           
	           
	           
	            get: function () {
	                return this._majorUnit;
	            },
	            set: function (value) {
	                var _this = this;
	                if (_this._canSetUnit()) {
	                    if (_this._actualCategoryType === 2) {
	                        value = Math_ceil(value);
	                    }
	                    _this._majorUnitIsAuto = false;
	                    if (value !== _this._majorUnit) {
	                        _this._majorUnit = value;
	                        if ((_this.IsValueScaleAxis() || (_this.IsTimeScale() && _this._majorUnitScale === _this._minorUnitScale)) && _this._majorUnit < _this._minorUnit) {
	                            _this._minorUnitIsAuto = true;
	                        }
	                        _this.UpdateAxisRulers();
	                    }
	                }
	            }
	        });
	        defineProperty(Axis_prototype, "MajorUnitIsAuto", {
	           
	           
	           
	            get: function () {
	                return this._majorUnitIsAuto;
	            },
	            set: function (value) {
	                if (value !== this._majorUnitIsAuto) {
	                    this._majorUnitIsAuto = value;
	                    this.UpdateAxisRulers();
	                }
	            }
	        });
	        defineProperty(Axis_prototype, "MinorUnit", {
	           
	           
	           
	            get: function () {
	                return this._minorUnit;
	            },
	            set: function (value) {
	                var _this = this;
	                if (_this._canSetUnit()) {
	                    if (_this._actualCategoryType === 2) {
	                        value = Math_ceil(value);
	                    }
	                    _this._minorUnitIsAuto = false;
	                    if (value !== _this._minorUnit) {
	                        _this._minorUnit = value;
	                        if ((_this.IsValueScaleAxis() || (_this.IsTimeScale() && _this._majorUnitScale === _this._minorUnitScale)) && _this._minorUnit > _this._majorUnit) {
	                            _this._majorUnitIsAuto = true;
	                        }
	                        _this.UpdateAxisRulers();
	                    }
	                }
	            }
	        });
	        defineProperty(Axis_prototype, "MinorUnitIsAuto", {
	           
	           
	           
	            get: function () {
	                return this._minorUnitIsAuto;
	            },
	            set: function (value) {
	                if (value !== this._minorUnitIsAuto) {
	                    this._minorUnitIsAuto = value;
	                    this.UpdateAxisRulers();
	                }
	            }
	        });
	        defineProperty(Axis_prototype, "BaseUnit", {
	           
	           
	           
	            get: function () {
	                return this._baseUnit;
	            },
	            set: function (value) {
	                var _this = this;
	                _this._baseUnitIsAuto = false;
	                if (value !== _this._baseUnit) {
	                    _this._baseUnit = value;
	                    if (_this.MinorUnitIsAuto) {
	                        _this._minorUnitScale = value;
	                    }
	                    if (_this.MajorUnitIsAuto) {
	                        _this._majorUnitScale = value;
	                    }
	                }
	                _this.UpdateAxisRulers();
	            }
	        });
	        defineProperty(Axis_prototype, "BaseUnitIsAuto", {
	           
	           
	           
	           
	            get: function () {
	                return this._baseUnitIsAuto;
	            },
	            set: function (value) {
	                if (value !== this._baseUnitIsAuto) {
	                    this._baseUnitIsAuto = value;
	                    this.UpdateAxisRulers();
	                }
	            }
	        });
	        defineProperty(Axis_prototype, "MinorUnitScale", {
	           
	           
	           
	           
	            get: function () {
	                if (this._minorUnitIsAuto) {
	                    return this._baseUnit;
	                }
	                return this._minorUnitScale;
	            },
	            set: function (value) {
	                this._minorUnitIsAuto = false;
	                if (value !== this._minorUnitScale) {
	                    this._minorUnitScale = value;
	                    this.UpdateAxisRulers();
	                }
	            }
	        });
	        defineProperty(Axis_prototype, "MajorUnitScale", {
	           
	           
	           
	           
	            get: function () {
	                if (this._majorUnitIsAuto) {
	                    return this._baseUnit;
	                }
	                return this._majorUnitScale;
	            },
	            set: function (value) {
	                this._majorUnitIsAuto = false;
	                if (value !== this._majorUnitScale) {
	                    this._majorUnitScale = value;
	                    this.UpdateAxisRulers();
	                }
	            }
	        });
	        defineProperty(Axis_prototype, "AxisTitle", {
	           
	           
	           
	           
	            get: function () {
	                if (this._hasTitle) {
	                    return this._title;
	                }
	                return keyword_null;
	            },
	            set: function (value) {
	                this._title = value;
	            }
	        });
	        defineProperty(Axis_prototype, "Crosses", {
	           
	           
	           
	            get: function () {
	                return this.GetCrosses();
	            },
	            set: function (value) {
	                if (value !== this._crosses) {
	                    if (value === 0) {
	                        this._crossesAt = this.GetCrossesAt();
	                    }
	                    this._crosses = value;
	                }
	            }
	        });
	        defineProperty(Axis_prototype, "CrossesAt", {
	           
	           
	           
	           
	            get: function () {
	                return this.GetCrossesAt();
	            },
	            set: function (value) {
	                if (value !== this._crossesAt) {
	                    this._crossesAt = value;
	                    this._crosses = 0;
	                }
	            }
	        });
	        defineProperty(Axis_prototype, "Format", {
	           
	           
	           
	           
	           
	           
	            get: function () {
	                var _this = this;
	                if (isNullOrUndefined(_this._format)) {
	                    _this._format = _this.GetDefaultFormat();
	                }
	                return _this._format;
	            }
	        });
	        defineProperty(Axis_prototype, "DisplayUnit", {
	           
	           
	           
	            get: function () {
	                return this._displayUnit;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._displayUnit) {
	                    _this._displayUnit = value;
	                    if (value === 10) {
	                        _this._displayUnitCustom = _this.GetValuesFromDispUnit(value);
	                    }
	                }
	                if (value !== 9 && isNullOrUndefined(_this._hasDisplayUnitLabel)) {
	                    _this._hasDisplayUnitLabel = true;
	                }
	            }
	        });
	        defineProperty(Axis_prototype, "DisplayUnitCustom", {
	           
	           
	           
	           
	           
	            get: function () {
	                return this._displayUnitCustom;
	            },
	            set: function (value) {
	                this._displayUnitCustom = value;
	                this._displayUnit = 10;
	                if (isNullOrUndefined(this._hasDisplayUnitLabel)) {
	                    this._hasDisplayUnitLabel = true;
	                }
	            }
	        });
	        defineProperty(Axis_prototype, "DisplayUnitLabel", {
	           
	           
	           
	           
	           
	            get: function () {
	                return this.HasDisplayUnitLabel ? this._displayUnitLabel : keyword_null;
	            }
	        });
	        defineProperty(Axis_prototype, "HasDisplayUnitLabel", {
	           
	           
	           
	           
	           
	            get: function () {
	                return !isNullOrUndefined(this._hasDisplayUnitLabel) ? this._hasDisplayUnitLabel : false;
	            },
	            set: function (value) {
	                this._hasDisplayUnitLabel = value;
	            }
	        });
	        defineProperty(Axis_prototype, "HasMajorGridlines", {
	           
	           
	           
	           
	            get: function () {
	                return !!this._hasMajorGridlines;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._hasMajorGridlines) {
	                    _this._hasMajorGridlines = value;
	                    if (value && isNullOrUndefined(_this._majorGridlines)) {
	                        _this._majorGridlines = _this.GetDefaultGridlines();
	                    }
	                }
	            }
	        });
	        defineProperty(Axis_prototype, "HasMinorGridlines", {
	           
	           
	           
	           
	            get: function () {
	                return !!this._hasMinorGridlines;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._hasMinorGridlines) {
	                    _this._hasMinorGridlines = value;
	                    if (value && isNullOrUndefined(_this._minorGridlines)) {
	                        _this._minorGridlines = _this.GetDefaultGridlines();
	                    }
	                }
	            }
	        });
	        defineProperty(Axis_prototype, "HasTitle", {
	           
	           
	           
	            get: function () {
	                return this._hasTitle;
	            },
	            set: function (value) {
	                this._hasTitle = value;
	            }
	        });
	        defineProperty(Axis_prototype, "LogBase", {
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                return this._logBase;
	            },
	            set: function (value) {
	                if (value !== this._logBase) {
	                    if (value < 2 || value > 1000) {
	                        throw new Error("The LogBase must be in range of 2 and 1000!");
	                    }
	                    this._logBase = value;
	                    this.UpdateAxisRulers();
	                }
	            }
	        });
	        defineProperty(Axis_prototype, "MajorGridlines", {
	           
	           
	           
	           
	           
	            get: function () {
	                if (!this._hasMajorGridlines) {
	                    return keyword_null;
	                }
	                return this._majorGridlines;
	            }
	        });
	        defineProperty(Axis_prototype, "MinorGridlines", {
	           
	           
	           
	           
	           
	            get: function () {
	                if (!this._hasMinorGridlines) {
	                    return keyword_null;
	                }
	                return this._minorGridlines;
	            }
	        });
	        defineProperty(Axis_prototype, "Parent", {
	           
	           
	           
	            get: function () {
	                return this._axes;
	            }
	        });
	        defineProperty(Axis_prototype, "ReversePlotOrder", {
	           
	           
	           
	            get: function () {
	                return this._reversePlotOrder;
	            },
	            set: function (value) {
	                this._reversePlotOrder = value;
	            }
	        });
	        defineProperty(Axis_prototype, "TickLabelPosition", {
	           
	           
	           
	            get: function () {
	                return this._tickLabelPos;
	            },
	            set: function (value) {
	                this._tickLabelPos = value;
	            }
	        });
	        defineProperty(Axis_prototype, "TickLabels", {
	           
	           
	           
	           
	            get: function () {
	                return this._tickLabels;
	            }
	        });
	        defineProperty(Axis_prototype, "TickLabelSpacing", {
	           
	           
	           
	           
	            get: function () {
	                if (this._tickLabelSpacingIsAuto) {
	                    return 1;
	                }
	                return this._tickLabelSpacing;
	            },
	            set: function (value) {
	                if (value < 1) {
	                    throw new Error("The value must be equal to or greater than 1");
	                }
	                this._tickLabelSpacing = value;
	                this._tickLabelSpacingIsAuto = false;
	            }
	        });
	        defineProperty(Axis_prototype, "TickLabelSpacingIsAuto", {
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                return this._tickLabelSpacingIsAuto;
	            },
	            set: function (value) {
	                this._tickLabelSpacingIsAuto = value;
	            }
	        });
	        defineProperty(Axis_prototype, "MajorTickMark", {
	           
	           
	           
	            get: function () {
	                return this._majorTickMark;
	            },
	            set: function (value) {
	                this._majorTickMark = value;
	            }
	        });
	        defineProperty(Axis_prototype, "MinorTickMark", {
	           
	           
	           
	            get: function () {
	                return this._minorTickMark;
	            },
	            set: function (value) {
	                this._minorTickMark = value;
	            }
	        });
	        defineProperty(Axis_prototype, "TickMarkSpacing", {
	           
	           
	           
	           
	            get: function () {
	                return this._tickMarkSpacing;
	            },
	            set: function (value) {
	                this._tickMarkSpacing = value;
	            }
	        });
	        defineProperty(Axis_prototype, "Visible", {
	            get: function () {
	                return !this._deleted;
	            },
	            set: function (value) {
	                this._deleted = !value;
	            }
	        });
	        defineProperty(Axis_prototype, "NoMultiLvlLbl", {
	            get: function () {
	                return this._noMultiLvlLbl;
	            },
	            set: function (value) {
	                if (value !== this.NoMultiLvlLbl) {
	                    this._noMultiLvlLbl = value;
	                    if (this.TickLabels.Offset === 0 && !value) {
	                        this.TickLabels.Offset = 100;
	                    }
	                }
	            }
	        });
	        defineProperty(Axis_prototype, "Chart", {
	            get: function () {
	                return this.Parent.Parent;
	            }
	        });
	        Axis_prototype.GetDefaultGridlines = function () {
	            var majorGridlines = new Gridlines(this);
	            var line = majorGridlines.Format.Line;
	            line.Color.ObjectThemeColor = 1;
	            line.Weight = 1;
	            line.Color.Brightness = ChartConstants.DefaultLineColorBrightness;
	            return majorGridlines;
	        };
	        Axis_prototype.GetDefaultTickLabels = function () {
	            return new TickLabels(this);
	        };
	        defineProperty(Axis_prototype, "SeriesCollection", {
	            get: function () {
	                return this._axes.Parent.SeriesCollection;
	            }
	        });
	        defineProperty(Axis_prototype, "IsLogarithmic", {
	            get: function () {
	                return this._scaleType === 0;
	            }
	        });
	        Axis_prototype.GetCategoryNames = function () {
	            var _this = this;
	            var sc = _this.SeriesCollection;
	            var count = sc.Count;
	            if (count > 0) {
	                if (_this._type === 2) {
	                    var serNames = [];
	                    for (var i = 0; i < count; i++) {
	                        serNames.push(sc.Get(i).Name);
	                    }
	                    return serNames;
	                }
	                var firstSer = _this.GetFirstRightSer();
	                return firstSer.GetXValuesText(sc.GetMaxPointsCount(_this._axisGroup), _this.TickLabels.NumberFormatLinked ? keyword_null : _this.TickLabels.NumberFormat);
	            }
	            return [];
	        };
	        Axis_prototype.UpdateAxisRulers = function () {
	            var _this = this;
	            if (_this._type === 1) {
	                _this.UpdateValueAxis();
	            } else if (_this._type === 0) {
	                if (_this._actualCategoryType === 2) {
	                    _this.UpdateCatAxisTimeScale();
	                } else if (_this._actualCategoryType === 3) {
	                    _this.UpdateCatAxisValueScale();
	                }
	            }
	        };
	        Axis_prototype.UpdateValueScaleAxis = function () {
	            this.UpdateValueAxisMinMax();
	            this.UpdateValueAxisMajorMinor();
	        };
	        Axis_prototype.UpdateValueAxis = function () {
	            this.UpdateValueScaleAxis();
	        };
	        Axis_prototype.UpdateAxisForCatScale = function () {
	
	        };
	        Axis_prototype.UpdateCatAxisValueScale = function () {
	            this.UpdateValueScaleAxis();
	        };
	        Axis_prototype.UpdateCatAxisTimeScale = function () {
	            this.UpdateDateTimeAxisMinMax();
	            this.UpdateDateTimeAxisMajorMinorUnit();
	        };
	        Axis_prototype.UpdateDateTimeAxisMinMax = function () {
	            var _this = this;
	            if (_this.MinimumScaleIsAuto || _this.MaximumScaleIsAuto) {
	                var returnObj = _this.GetInitialMinMax();
	                if (_this.MinimumScaleIsAuto) {
	                    _this._minimumScale = returnObj.initMin;
	                }
	                if (_this.MaximumScaleIsAuto) {
	                    _this._maximumScale = returnObj.initMax;
	                }
	            }
	        };
	        Axis_prototype.UpdateValueAxisMinMax = function () {
	            var _this = this;
	            if (_this.MinimumScaleIsAuto || _this.MaximumScaleIsAuto) {
	                var refObj = {majorUnit: 0};
	                var autoMinMaxValues = _this.CalcualteValueAxisMinMax(refObj);
	                 var majorUnit = refObj.majorUnit;
	                if (_this.MinimumScaleIsAuto) {
	                    _this._minimumScale = autoMinMaxValues.Min;
	                }
	                if (_this.MaximumScaleIsAuto) {
	                    _this._maximumScale = autoMinMaxValues.Max;
	                    if(ChartUtility.allSeriesIsScatterOrBubble(_this.Chart)) {
	                        _this._maximumScale += majorUnit;
	                    }
	                }
	            }
	        };
	        Axis_prototype.UpdateValueAxisMajorMinor = function () {
	            var _this = this;
	            if (_this.MajorUnitIsAuto || _this.MinorUnitIsAuto) {
	                var autoMajorMinor = _this.CalculateValueAxisMajorMinorUnit();
	                if (_this.MinorUnitIsAuto) {
	                    _this._minorUnit = autoMajorMinor.Min;
	                }
	                if (_this.MajorUnitIsAuto) {
	                    _this._majorUnit = autoMajorMinor.Max;
	                }
	            }
	        };
	        Axis_prototype.CalcualteValueAxisTempMinMax = function (needAutoMin, needAutoMax) {
	            var _this = this;
	            var returnObj = _this.GetInitialMinMax(needAutoMin, needAutoMax);
	            var initMin = returnObj.initMin;
	            var initMax = returnObj.initMax;
	            var validMin = AxisUtility.CalculateValidMinimum(initMin, initMax, _this.IsLogarithmic, _this.LogBase, _this.MinimumScaleIsAuto || needAutoMin, _this.MaximumScaleIsAuto || needAutoMax);
	            var validMax = AxisUtility.CalculateValidMaximum(initMin, initMax, _this.IsLogarithmic, _this.LogBase);
	           
	           
	           
	            return AxisUtility.calcMinMax(validMin, validMax, _this.IsLogarithmic, _this._axes._chart);
	        };
	        Axis_prototype.GetInitialMinMax = function (needAutoMin, needAutoMax) {
	            var _this = this;
	            var initMin, initMax;
	            var seriesCollection = _this.SeriesCollection;
	            if (_this._minimumScaleIsAuto || needAutoMin) {
	                if (_this._type === 0) {
	                    initMin = _this._axisGroup === 0 ? seriesCollection.PrimaryXValuesMinMax.Min : seriesCollection.SecondaryXValuesMinMax.Min;
	                } else {
	                    initMin = _this._axisGroup === 0 ? seriesCollection.PrimaryValuesMinMax.Min : seriesCollection.SecondaryValuesMinMax.Min;
	                }
	            } else {
	                initMin = _this._minimumScale;
	            }
	            if (_this._maxmumScaleIsAuto || needAutoMax) {
	                if (_this._type === 0) {
	                    initMax = _this._axisGroup === 0 ? seriesCollection.PrimaryXValuesMinMax.Max : seriesCollection.SecondaryXValuesMinMax.Max;
	                } else {
	                    initMax = _this._axisGroup === 0 ? seriesCollection.PrimaryValuesMinMax.Max : seriesCollection.SecondaryValuesMinMax.Max;
	                }
	            } else {
	                initMax = _this._maximumScale;
	            }
	            return {initMin: initMin, initMax: initMax};
	        };
	       
	        Axis_prototype.CalcualteValueAxisMinMax = function (refObj, needAutoMin, needAutoMax) {
	            var _this = this;
	            var tempMinMax = _this.CalcualteValueAxisTempMinMax(needAutoMin, needAutoMax);
	            var majorUnit = refObj.majorUnit = _this._majorUnitIsAuto ? _this.CalculateValueAxisMajorMinorUnit(tempMinMax).Max : _this._majorUnit;
	            var finalMinValue = AxisUtility.CalculateMinimum2(tempMinMax.Min, tempMinMax.Max, majorUnit, _this.IsLogarithmic, _this.LogBase);
	            var finalMaxValue = AxisUtility.CalculateMaximum2(tempMinMax.Min, tempMinMax.Max, majorUnit, _this.IsLogarithmic, _this.LogBase);
	            return {Min: finalMinValue, Max: finalMaxValue};
	        };
	        Axis_prototype.CalculateValueAxisMajorMinorUnit = function (minMax) {
	            var _this = this;
	            if (isNullOrUndefined(minMax)) {
	                minMax = _this.CalcualteValueAxisTempMinMax();
	            }
	            var majorUnit = AxisUtility.CalculateMajorUnit(minMax.Min, minMax.Max, _this.MinorUnitIsAuto, _this.MinorUnit, _this.IsLogarithmic, _this.LogBase);
	            var minorUnit = AxisUtility.CalculateMinorUnit(minMax.Min, minMax.Max, majorUnit, _this.IsLogarithmic);
	            return {Min: minorUnit, Max: majorUnit};
	        };
	        Axis_prototype.UpdateDateTimeAxisMajorMinorUnit = function () {
	            var _this = this;
	            var minDate = DateTimeExtension.FromOADate(_this.MinimumScale);
	            var maxDate = DateTimeExtension.FromOADate(_this.MaximumScale);
	            if (_this._baseUnitIsAuto || _this._majorUnitIsAuto) {
	                var maxPointsCount = _this.SeriesCollection.GetMaxPointsCount(_this._axisGroup);
	                var refObj = {unitValue: 0};
	                var unitScale = _this.CalculateTimeUnit(minDate, maxDate, maxPointsCount, refObj);
	                var unitValue = refObj.unitValue;
	                if (_this._baseUnitIsAuto) {
	                    _this._baseUnit = unitScale;
	                }
	                if (_this._majorUnitIsAuto) {
	                    _this._majorUnit = unitValue;
	                    _this._majorUnitScale = unitScale;
	                }
	            }
	            if (_this._minorUnitIsAuto) {
	                var majorUnitScale = _this._majorUnitScale;
	                if (majorUnitScale === 0) {
	                    _this._minorUnitScale = 0;
	                    _this._minorUnit = 1;
	                } else if (majorUnitScale === 1) {
	                    if (_this._majorUnit === 1) {
	                        _this._minorUnitScale = 0;
	                        _this._minorUnit = ONE_WEEK;
	                    } else {
	                        _this._minorUnitScale = 1;
	                        _this._minorUnit = 1;
	                    }
	                } else if (majorUnitScale === 2) {
	                    _this._minorUnitScale = 2;
	                    _this._minorUnit = 1;
	                }
	            }
	        };
	        Axis_prototype.CalculateTimeUnit = function (minDate, maxDate, expectedCount, refObj) {
	            var unitValue;
	            var timeUnit;
	            if (minDate.getFullYear() !== maxDate.getFullYear()) {
	                timeUnit = 2;
	                unitValue = 1;
	            } else if (minDate.getMonth() !== maxDate.getMonth()) {
	                timeUnit = 1;
	                unitValue = 12;
	            } else {
	                timeUnit = 0;
	                unitValue = ONE_WEEK;
	            }
	            var currentCount = this.GetDateItemsCount(minDate, maxDate, timeUnit, unitValue);
	            while (currentCount < expectedCount && timeUnit !== 0) {
	                if (timeUnit === 2) {
	                    timeUnit = 1;
	                    unitValue = 12;
	                } else if (timeUnit === 1) {
	                    if (unitValue === 1) {
	                        timeUnit = 0;
	                        var range = maxDate.valueOf() - minDate.valueOf();
	                        var days = range / (1000 * 60 * 60 * 24);
	                        if (days >= ONE_MONTH) {
	                            unitValue = ONE_WEEK;
	                        } else {
	                            unitValue = 1;
	                        }
	                    } else {
	                        unitValue--;
	                    }
	                }
	                currentCount = this.GetDateItemsCount(minDate, maxDate, timeUnit, unitValue);
	            }
	            refObj.unitValue = unitValue;
	            return timeUnit;
	        };
	        Axis_prototype.GetDateItemsCount = function (min, max, unitScale, value) {
	            value = Math.floor(value);
	            var currentItem = new Date(min.valueOf());
	            var maxDate = max;
	            var items = [];
	            while (currentItem <= maxDate) {
	                items.push(currentItem);
	                if (unitScale === 0) {
	                    currentItem.setDate(currentItem.getDate() + value);
	                } else if (unitScale === 1) {
	                    currentItem.setMonth(currentItem.getMonth() + value);
	                } else if (unitScale === 2) {
	                    currentItem.setFullYear(currentItem.getFullYear() + value);
	                }
	            }
	            return items.length;
	        };
	        Axis_prototype.GetFirstRightSer = function () {
	            var sc = this.SeriesCollection;
	            for (var i = 0, count = sc.Count; i < count; i++) {
	                var ser = sc.Get(i);
	                var dimension = ChartUtility.GetDimensioin(ser.InnerChartType);
	                if (ser.AxisGroup === this._axisGroup && dimension === 1) {
	                    return ser;
	                }
	            }
	            return keyword_null;
	        };
	        Axis_prototype.IsValueOrDateScaleAxis = function () {
	            return this.IsValueScaleAxis() || this.IsTimeScale();
	        };
	        Axis_prototype.IsValueScaleAxis = function () {
	            return this._type === 1 || (this._type === 0 && this._actualCategoryType === 3);
	        };
	        Axis_prototype.IsTimeScale = function () {
	            return this._type === 0 && this._actualCategoryType === 2;
	        };
	        Axis_prototype.GetCrosses = function () {
	            return !isNullOrUndefined(this._crosses) ? this._crosses : 1;
	        };
	        Axis_prototype.GetCustomCrossesAt = function () {
	            var _this = this;
	            var crosses = _this.Crosses;
	            if (crosses === 0) {
	                return _this._crossesAt || 0;
	            }
	        };
	        Axis_prototype.GetCrossesAt = function () {
	            var _this = this;
	            var result = 0;
	            var crosses = _this.Crosses;
	            if (crosses === 0) {
	                result = !isNullOrUndefined(_this._crossesAt) ? _this._crossesAt : 0;
	            } else if (crosses === 1) {
	                result = _this.GetAutoCrossesAt();
	            } else if (crosses === 2) {
	                result = _this.GetMaxCrossesAt();
	            } else if (crosses === 3) {
	                result = _this.GetMinCrossesAt();
	            }
	            return result;
	        };
	        Axis_prototype.GetAutoCrossesAt = function () {
	            var _this = this;
	            if (_this._type === 0) {
	                if (_this._actualCategoryType === 1) {
	                    return 1;
	                }
	                if (_this._axisGroup === 0) {
	                    return _this.MinimumScale;
	                }
	                return _this.MaximumScale;
	            } else if (_this.IsValueOrDateScaleAxis()) {
	                if (_this.IsLogarithmic) {
	                    return 1;
	                }
	                return 0;
	            }
	            return 0;
	        };
	        Axis_prototype.GetMinCrossesAt = function () {
	            var _this = this;
	            if (_this.IsValueOrDateScaleAxis()) {
	                return _this.MinimumScale;
	            } else if (_this._type === 0) {
	                if (_this._actualCategoryType === 1) {
	                    return 1;
	                }
	                return _this.MinimumScale;
	            }
	            return 0;
	        };
	        Axis_prototype.GetMaxCrossesAt = function () {
	            var _this = this;
	            if (_this.IsValueOrDateScaleAxis()) {
	                return _this.MaximumScale;
	            } else if (_this._type === 0) {
	                if (_this._actualCategoryType === 1) {
	                    return _this.CategoryNames.length;
	                }
	                return _this.MaximumScale;
	            }
	            return 0;
	        };
	        Axis_prototype.GetValuesFromDispUnit = function (unit) {
	            var dict = {
	                8: 1000000000000,
	                7: 1000000000,
	                6: 100000000,
	                5: 10000000,
	                4: 1000000,
	                3: 100000,
	                2: 10000,
	                1: 1000,
	                0: 100,
	                9: 1.0,
	                10: this._displayUnitCustom
	            };
	            return dict[unit];
	        };
	        Axis_prototype.HasTwoDimensionSers = function () {
	            var sers = this.SeriesCollection.GetSers(false, this._axisGroup);
	            for (var i = 0; i < sers.length; i++) {
	                if (ChartUtility.GetDimensioin(sers[i].InnerChartType) > 1) {
	                    return true;
	                }
	            }
	            return false;
	        };
	        Axis_prototype.ResetOnChartTypeChanged = function () {
	            this._ooAx = keyword_null;
	        };
	        Axis_prototype.CreateFormat = function () {
	            return new ChartFormat(this._axes.Parent, keyword_null, keyword_null, this.AutoLineColorFormat.bind(this));
	        };
	        Axis_prototype.GetDefaultFormat = function () {
	            var format = _super.prototype.GetDefaultFormat.call(this);
	            var chartType = this._axes.Parent.ChartType;
	            if (ChartUtility.IsSurfaceChart(chartType) || chartType === 5) {
	                format.Line.Weight = 1 ;
	            }
	            this.InitAutoLineColor(chartType, format.Line.Color);
	            if (ChartUtility.IsRadarChart(chartType) && this._type === 1) {
	                format.Line.Color.setColor(keyword_null, 'rgba(0,0,0,0)');
	            }
	            return format;
	        };
	        Axis_prototype.InitAutoLineColor = function (chartType, colorFormat) {
	            var DefaultLineColorBrightness = ChartConstants.DefaultLineColorBrightness;
	            colorFormat.ObjectThemeColor = 1;
	            colorFormat.Brightness = DefaultLineColorBrightness;
	        };
	        Axis_prototype.AutoLineColorFormat = function () {
	            var chartType = this._axes.Parent.ChartType;
	            var format = new ColorFormat(this._axes.Parent);
	            this.InitAutoLineColor(chartType, format);
	            return format;
	        };
	        Axis_prototype.EnsureAxisType = function (type) {
	            if (this._type !== type) {
	                throw new Error();
	            }
	        };
	        Axis_prototype.EnsureAxisCatType = function (catType) {
	            if (this._actualCategoryType !== catType) {
	                throw new Error();
	            }
	        };
	        Axis_prototype.EnsureNotAxisType = function (type) {
	            if (this._type === type) {
	                throw new Error();
	            }
	        };
	        Axis_prototype.EnsureNotAxisCatType = function (catType) {
	            if (this._actualCategoryType === catType) {
	                throw new Error();
	            }
	        };
	        Axis_prototype.UpdateCategoryType = function (value) {
	            this._categoryType = value;
	            this._actualCategoryType = value;
	        };
	        Axis_prototype.From2016ChartOOModel = function (ooCatAx ) {
	            var _this = this;
	            _this.Chart.SuspendElementChanged();
	            _this._ooAx = ooCatAx;
	
	            if (!isNullOrUndefined(ooCatAx.catScaling) && !isNullOrUndefined(ooCatAx.catScaling.gapWidth)) {
	                _this.gapWidth = ooCatAx.catScaling.gapWidth;
	            }
	            if (!isNullOrUndefined(ooCatAx.valScaling)) {
	                _this.FromCT_ValueAxisScaling(ooCatAx.valScaling);
	            }
	
	            if (!isNullOrUndefined(ooCatAx.title)) {
	                _this._title.FromOOModel(ooCatAx.title);
	                _this._hasTitle = true;
	            }
	
	            if(!isNullOrUndefined(ooCatAx.units)) {
	                _this._displayUnitLabel.From2016ChartOOModel(ooCatAx.units);
	                _this.HasDisplayUnitLabel = true;
	            }
	
	            if (!isNullOrUndefined(ooCatAx.majorGridlines)) {
	                _this.HasMajorGridlines = true;
	                _this._majorGridlines.FromOOModel(ooCatAx.majorGridlines);
	            } else {
	                _this.HasMajorGridlines = false;
	            }
	            if (!isNullOrUndefined(ooCatAx.minorGridlines)) {
	                _this.HasMinorGridlines = true;
	                _this._minorGridlines.FromOOModel(ooCatAx.minorGridlines);
	            } else {
	                _this.HasMinorGridlines = false;
	            }
	
	            if (!isNullOrUndefined(ooCatAx.majorTickMarks)) {
	                _this.MajorTickMark = ooCatAx.majorTickMarks;
	            } else {
	                _this.MajorTickMark = 3;
	            }
	            if (!isNullOrUndefined(ooCatAx.minorTickMarks)) {
	                _this.MinorTickMark = ooCatAx.minorTickMarks;
	            }
	
	            if (!isNullOrUndefined(ooCatAx.tickLabels) && !isNullOrUndefined(ooCatAx.tickLabels.extLst) && ooCatAx.tickLabels.extLst.length > 0) {
	                _this._tickLabelsExtLst = ooCatAx.tickLabels.extLst;
	            }
	
	            var ooTickLabels = {};
	            ooTickLabels.CT_TextBody = ooCatAx.txPr;
	            ooTickLabels.CT_NumFmt = ooCatAx.numFmt;
	            _this._tickLabels.FromOOModel(ooTickLabels);
	
	            if (!isNullOrUndefined(ooCatAx.spPr)) {
	                _this.FromShapeProperties(ooCatAx.spPr);
	            }
	
	            if (!isNullOrUndefined(ooCatAx.extLst)) {
	                _this._extLst = ooCatAx.extLst;
	            }
	
	            if (!isNullOrUndefined(ooCatAx.id)) {
	                _this._id = ooCatAx.id;
	            }
	
	            if (!isNullOrUndefined(ooCatAx.hidden)) {
	                _this._hidden = ooCatAx.hidden;
	            }
	            _this.Chart.ResumeElementChanged();
	        };
	        Axis_prototype.To2016ChartOOModel = function () {
	            var _this = this;
	            var ooCatAx = {};
	
	            if (!isNullOrUndefined(_this.gapWidth)) {
	                ooCatAx.catScaling = {gapWidth: _this.gapWidth};
	            }
	            if (_this.NeedToCT_ValueAxisScaling()) {
	                ooCatAx.valScaling = _this.ToCT_ValueAxisScaling();
	            }
	
	            if (_this._hasTitle) {
	                ooCatAx.title = _this._title.ToOOModel();
	            }
	
	            if (_this.HasDisplayUnitLabel && !isNullOrUndefined(_this._displayUnitLabel)) {
	                ooCatAx.units = _this._displayUnitLabel.To2016ChartOOModel();
	            }
	
	            if (_this.HasMajorGridlines && !isNullOrUndefined(_this._majorGridlines)) {
	                ooCatAx.majorGridlines = _this._majorGridlines.ToOOModel();
	            }
	            if (_this.HasMinorGridlines && !isNullOrUndefined(_this._minorGridlines)) {
	                ooCatAx.minorGridlines = _this._minorGridlines.ToOOModel();
	            }
	
	            ooCatAx.majorTickMarks = _this.MajorTickMark;
	            ooCatAx.minorTickMarks = _this.MinorTickMark;
	
	            if (!isNullOrUndefined(_this._tickLabelsExtLst) && _this._tickLabelsExtLst.length > 0) {
	                ooCatAx.tickLabels = {extLst: _this._tickLabelsExtLst};
	            }
	
	            if (!isNullOrUndefined(_this.TickLabels)) {
	                var ooTickLabels = _this._tickLabels.ToOOModel();
	                if (_this.Chart.SeriesCollection.Count === 0) {
	                    ooCatAx.numFmt = keyword_null;
	                } else {
	                    ooCatAx.numFmt = ooTickLabels.CT_NumFmt;
	                }
	                ooCatAx.txPr = ooTickLabels.CT_TextBody;
	            }
	
	            ooCatAx.spPr = _super.prototype.ToShapeProperties.call(_this);
	
	            if (!isNullOrUndefined(_this._extLst)) {
	                ooCatAx.extLst = _this._extLst;
	            }
	
	            if (!isNullOrUndefined(_this._id)) {
	                ooCatAx.id = _this._id;
	            }
	            if (!isNullOrUndefined(_this._hidden)) {
	                ooCatAx.hidden = _this._hidden;
	            }
	
	            return ooCatAx;
	        };
	        Axis_prototype.FromOOModel = function (t ) {
	            var _this = this;
	            _this.Chart.SuspendElementChanged();
	            _this._ooAx = t;
	            var type = _this._type;
	            if (type === 0) {
	                var axisType = t.axisType;
	                if (axisType === 0) {
	                    _this.FromCT_CatAx(t);
	                } else if (axisType === 1) {
	                    _this.FromCT_DateAx(t);
	                } else if (axisType === 3) {
	                    _this.FromCT_ValAx(t);
	                }
	            } else if (type === 1) {
	                _this.FromCT_ValAx(t);
	            } else if (type === 2) {
	                _this.FromCT_SerAx(t);
	            }
	            _this.Chart.ResumeElementChanged();
	        };
	        Axis_prototype.ToOOModel = function () {
	            var _this = this;
	            var ax = keyword_null;
	            var type = _this._type;
	            if (type === 0) {
	                var actualCategoryType = _this._actualCategoryType;
	                if (actualCategoryType === 1) {
	                    ax = _this.ToCT_CatAx();
	                } else if (actualCategoryType === 2) {
	                    ax = _this.ToCT_DateAx();
	                } else if (actualCategoryType === 3) {
	                    ax = _this.ToCT_ValAx();
	                }
	            } else if (type === 1) {
	                ax = _this.ToCT_ValAx();
	            } else if (type === 2) {
	                ax = _this.ToCT_SerAx();
	            }
	            ax.AxisGroup = _this._axisGroup;
	            ax.AxisType = type;
	            return ax;
	        };
	        Axis_prototype.ToCT_CatAx = function () {
	            var _this = this;
	            var ooAx = _this._ooAx;
	            var catAx = ooAx && ooAx.axisType === 0 ? ooAx : {axisType: 0} ;
	            _this.ToCT_AxBase(catAx);
	            catAx.auto = _this.CategoryType === 0;
	            if (_this.TickLabelSpacingIsAuto) {
	                catAx.tickLblSkip = keyword_null;
	            } else {
	                catAx.tickLblSkip = _this.TickLabelSpacing;
	            }
	            catAx.lblOffset = _this.TickLabels.Offset;
	            catAx.tickMarkSkip = _this.TickMarkSpacing;
	            catAx.noMultiLvlLbl = _this.NoMultiLvlLbl;
	            return catAx;
	        };
	        Axis_prototype.FromCT_CatAx = function (ooCatAx ) {
	            var _this = this;
	            if (isNullOrUndefined(ooCatAx.auto) ||
	                _this.ActualCategoryType !== 1) {
	                _this.UpdateCategoryType(1);
	            }
	            _this.FromCT_AxBase(ooCatAx);
	            if (!isNullOrUndefined(ooCatAx.tickLblSkip)) {
	                _this._tickLabelSpacing = ooCatAx.tickLblSkip;
	                _this._tickLabelSpacingIsAuto = false;
	            } else {
	                _this._tickLabelSpacingIsAuto = true;
	            }
	            if (!isNullOrUndefined(ooCatAx.lblOffset)) {
	                _this._tickLabels.Offset = ooCatAx.lblOffset;
	            }
	            if (!isNullOrUndefined(ooCatAx.tickMarkSkip)) {
	                _this._tickMarkSpacing = ooCatAx.tickMarkSkip;
	            }
	        };
	        Axis_prototype.ToCT_ValAx = function () {
	            var _this = this;
	            var ooAx = _this._ooAx;
	            var valAx = (ooAx && ooAx.axisType === 3) ? ooAx : {axisType: 3} ;
	            _this.ToCT_AxBase(valAx);
	            if (!_this.MajorUnitIsAuto) {
	                valAx.majorUnit = _this.MajorUnit;
	            }
	            if (!_this.MinorUnitIsAuto) {
	                valAx.minorUnit = _this.MinorUnit;
	            }
	            if (_this._displayUnit !== 9) {
	                valAx.dispUnits = _this._displayUnitLabel.ToOOModel();
	            }
	            return valAx;
	        };
	        Axis_prototype.FromCT_ValAx = function (ooValAx ) {
	            var _this = this;
	            _this.FromCT_AxBase(ooValAx);
	            if (!isNullOrUndefined(ooValAx.majorUnit)) {
	                _this._majorUnit = ooValAx.majorUnit;
	                _this._majorUnitIsAuto = false;
	            } else {
	                _this._majorUnitIsAuto = true;
	            }
	            if (!isNullOrUndefined(ooValAx.minorUnit)) {
	                _this._minorUnit = ooValAx.minorUnit;
	                _this._minorUnitIsAuto = false;
	            } else {
	                _this._minorUnitIsAuto = true;
	            }
	            _this._displayUnitLabel.FromOOModel(ooValAx.dispUnits);
	        };
	        Axis_prototype.ToCT_DateAx = function () {
	            var _this = this;
	            var ooAx = _this._ooAx;
	            var dateAx = (ooAx && ooAx.axisType === 1) ? ooAx : {axisType: 1} ;
	            _this.ToCT_AxBase(dateAx);
	            dateAx.auto = _this.CategoryType === 0;
	            dateAx.lblOffset = _this.TickLabels.Offset;
	            if (!_this.MajorUnitIsAuto) {
	                dateAx.majorUnit = _this.MajorUnit;
	                dateAx.majorTimeUnit = _this.MajorUnitScale;
	            }
	            if (!_this.MinorUnitIsAuto) {
	                dateAx.minorUnit = _this.MinorUnit;
	                dateAx.minorTimeUnit = _this.MinorUnitScale;
	            }
	            if (!_this.BaseUnitIsAuto) {
	                dateAx.baseTimeUnit = _this.BaseUnit;
	            }
	            return dateAx;
	        };
	        Axis_prototype.FromCT_DateAx = function (ooDateAx ) {
	            var _this = this;
	            if (isNullOrUndefined(ooDateAx.auto) ||
	                _this.ActualCategoryType !== 2) {
	                _this.UpdateCategoryType(2);
	            }
	            _this.FromCT_AxBase(ooDateAx);
	            if (!isNullOrUndefined(ooDateAx.majorUnit)) {
	                _this._majorUnit = ooDateAx.majorUnit;
	                _this._majorUnitIsAuto = false;
	            } else {
	                _this._majorUnitIsAuto = true;
	            }
	            if (!isNullOrUndefined(ooDateAx.minorUnit)) {
	                _this._minorUnit = ooDateAx.minorUnit;
	                _this._minorUnitIsAuto = false;
	            } else {
	                _this._minorUnitIsAuto = true;
	            }
	            if (!isNullOrUndefined(ooDateAx.baseTimeUnit)) {
	                _this._baseUnit = ooDateAx.baseTimeUnit;
	                _this._baseUnitIsAuto = false;
	            } else {
	                _this._baseUnitIsAuto = true;
	            }
	            if (!isNullOrUndefined(ooDateAx.majorTimeUnit)) {
	                _this._majorUnitScale = ooDateAx.majorTimeUnit;
	            }
	            if (!isNullOrUndefined(ooDateAx.minorTimeUnit)) {
	                _this._minorUnitScale = ooDateAx.minorTimeUnit;
	            }
	            if (!isNullOrUndefined(ooDateAx.lblOffset)) {
	                _this._tickLabels.Offset = ooDateAx.lblOffset;
	            }
	        };
	        Axis_prototype.ToCT_SerAx = function () {
	            var _this = this;
	            var serAx = _this._ooAx || {axisType: 2} ;
	            _this.ToCT_AxBase(serAx);
	            if (_this.TickLabelSpacingIsAuto) {
	                serAx.tickLblSkip = keyword_null;
	            } else {
	                serAx.tickLblSkip = _this.TickLabelSpacing;
	            }
	            serAx.tickMarkSkip = _this.TickMarkSpacing;
	            return serAx;
	        };
	        Axis_prototype.FromCT_SerAx = function (ooSerAx ) {
	            var _this = this;
	            _this.FromCT_AxBase(ooSerAx);
	            if (!isNullOrUndefined(ooSerAx.tickLblSkip)) {
	                _this._tickLabelSpacing = ooSerAx.tickLblSkip;
	                _this._tickLabelSpacingIsAuto = false;
	            } else {
	                _this._tickLabelSpacingIsAuto = true;
	            }
	            if (!isNullOrUndefined(ooSerAx.tickMarkSkip)) {
	                _this._tickMarkSpacing = ooSerAx.tickMarkSkip;
	            }
	        };
	        Axis_prototype.ToCT_AxBase = function (baseAx ) {
	            var _this = this;
	            baseAx.axId = _this.GetAxisId();
	            baseAx.delete = _this._deleted;
	            baseAx.majorTickMark = _this.MajorTickMark;
	            baseAx.minorTickMark = _this.MinorTickMark;
	            baseAx.tickLblPos = _this.TickLabelPosition;
	            baseAx.axPos = _this.GetAxPos();
	            baseAx.scaling = _this.ToCT_Scaling();
	            baseAx.spPr = _super.prototype.ToShapeProperties.call(_this);
	            if (!isNullOrUndefined(_this.TickLabels)) {
	                var ooTickLabels = _this._tickLabels.ToOOModel();
	                if (_this.Chart.SeriesCollection.Count === 0) {
	                    baseAx.numFmt = keyword_null;
	                } else {
	                    baseAx.numFmt = ooTickLabels.CT_NumFmt;
	                }
	                baseAx.txPr = ooTickLabels.CT_TextBody;
	            }
	            if (_this.HasMajorGridlines && !isNullOrUndefined(_this._majorGridlines)) {
	                baseAx.majorGridlines = _this._majorGridlines.ToOOModel();
	            }
	            if (_this.HasMinorGridlines && !isNullOrUndefined(_this._minorGridlines)) {
	                baseAx.minorGridlines = _this._minorGridlines.ToOOModel();
	            }
	            if (_this._hasTitle) {
	                baseAx.title = _this._title.ToOOModel();
	            }
	        };
	        Axis_prototype.FromCT_AxBase = function (ooAxBase ) {
	            var _this = this;
	            if (!isNullOrUndefined(ooAxBase.delete)) {
	                _this._deleted = ooAxBase.delete;
	            } else if (_this._axisGroup === 1) {
	                _this._deleted = false;
	            }
	            if (!isNullOrUndefined(ooAxBase.majorTickMark)) {
	                _this.MajorTickMark = ooAxBase.majorTickMark;
	            } else {
	                _this.MajorTickMark = 3;
	            }
	            if (!isNullOrUndefined(ooAxBase.minorTickMark)) {
	                _this.MinorTickMark = ooAxBase.minorTickMark;
	            }
	            if (!isNullOrUndefined(ooAxBase.tickLblPos)) {
	                _this.TickLabelPosition = ooAxBase.tickLblPos;
	            }
	            _this.FromCT_Scaling(ooAxBase.scaling);
	            _this.FromShapeProperties(ooAxBase.spPr);
	            var ooTickLabels = {};
	            ooTickLabels.CT_TextBody = ooAxBase.txPr;
	            ooTickLabels.CT_NumFmt = ooAxBase.numFmt;
	            _this._tickLabels.FromOOModel(ooTickLabels);
	            if (!isNullOrUndefined(ooAxBase.majorGridlines)) {
	                _this.HasMajorGridlines = true;
	                _this._majorGridlines.FromOOModel(ooAxBase.majorGridlines);
	            } else {
	                _this.HasMajorGridlines = false;
	            }
	            if (!isNullOrUndefined(ooAxBase.minorGridlines)) {
	                _this.HasMinorGridlines = true;
	                _this._minorGridlines.FromOOModel(ooAxBase.minorGridlines);
	            } else {
	                _this.HasMinorGridlines = false;
	            }
	            if (!isNullOrUndefined(ooAxBase.title)) {
	                _this._title.FromOOModel(ooAxBase.title);
	                _this._hasTitle = true;
	            }
	        };
	        Axis_prototype.GetAxisPostion = function () {
	            var position = this.GetAxPos();
	            var dict = {
	                0: "bottom",
	                3: "top",
	                1: "left",
	                2: "right"
	            };
	            return dict[position];
	        };
	        Axis_prototype.GetAxPos = function () {
	            var _this = this;
	            if (_this._ooAx && !isNullOrUndefined(_this._ooAx.axPos)) {
	                return _this._ooAx.axPos;
	            }
	            if (_this.Type === 0) {
	                if (ChartUtility.IsBarChart(_this.Chart.ChartType)) {
	                    if (this.AxisGroup === 0) {
	                        return 1;
	                    }
	                    return 2;
	                }
	                if (this.AxisGroup === 0) {
	                    return 0;
	                }
	                return 3;
	            } else if (_this.Type === 1) {
	                if (this.AxisGroup === 0) {
	                    return 1;
	                }
	                return 2;
	            }
	            return 0;
	        };
	        Axis_prototype.ToCT_Scaling = function () {
	            var _this = this;
	            var ooAx = _this._ooAx;
	            var scaling = ooAx && !isNullOrUndefined(ooAx.scaling) ? ooAx.scaling : {} ;
	            scaling.orientation = _this.ReversePlotOrder ? 0  : 1 ;
	            if (_this.IsValueOrDateScaleAxis()) {
	                if (!_this.MinimumScaleIsAuto) {
	                    scaling.min = _this.MinimumScale;
	                }
	                if (!_this.MaximumScaleIsAuto) {
	                    scaling.max = _this.MaximumScale;
	                }
	                if (_this.ScaleType === 0) {
	                    scaling.logBase = _this.LogBase;
	                }
	            }
	            return scaling;
	        };
	        Axis_prototype.FromCT_Scaling = function (ooScaling ) {
	            if (!ooScaling) {
	                return;
	            }
	            var _this = this;
	            if (!isNullOrUndefined(ooScaling.orientation)) {
	                _this.ReversePlotOrder = ooScaling.orientation === 0 ;
	            }
	            if (!isNullOrUndefined(ooScaling.min)) {
	                _this._minimumScale = ooScaling.min;
	                _this._minimumScaleIsAuto = false;
	            } else {
	                _this._minimumScaleIsAuto = true;
	            }
	            if (!isNullOrUndefined(ooScaling.max)) {
	                _this._maximumScale = ooScaling.max;
	                _this._maxmumScaleIsAuto = false;
	            } else {
	                _this._maxmumScaleIsAuto = true;
	            }
	            if (!isNullOrUndefined(ooScaling.logBase)) {
	                _this._logBase = ooScaling.logBase;
	                _this._scaleType = 0;
	            } else {
	                _this._scaleType = 1;
	            }
	        };
	        Axis_prototype.NeedToCT_ValueAxisScaling = function () {
	            var _this = this;
	            return !isNullOrUndefined(_this._min) || !isNullOrUndefined(_this._max) || !isNullOrUndefined(_this._majorUnit) || !isNullOrUndefined(_this._minorUnit);
	        };
	        Axis_prototype.ToCT_ValueAxisScaling = function () {
	            var _this = this, ooScaling = {};
	            if (!isNullOrUndefined(_this._minimumScale) && _this._minimumScaleIsAuto === false) {
	                ooScaling.min = _this._minimumScale;
	            }
	            if (!isNullOrUndefined(_this._maximumScale) && _this._maxmumScaleIsAuto === false) {
	                ooScaling.max = _this._maximumScale;
	            }
	            if (!isNullOrUndefined(_this._majorUnit) && _this._majorUnitIsAuto === false) {
	                ooScaling.majorUnit = _this._majorUnit;
	            }
	            if (!isNullOrUndefined(_this._minorUnit) && _this._minorUnitIsAuto === false) {
	                ooScaling.minorUnit = _this._minorUnit;
	            }
	            return ooScaling;
	        };
	        Axis_prototype.FromCT_ValueAxisScaling = function (ooScaling ) {
	            if (!ooScaling) {
	                return;
	            }
	            var _this = this;
	            if (!isNullOrUndefined(ooScaling.min)) {
	                _this._minimumScale = ooScaling.min;
	                _this._minimumScaleIsAuto = false;
	            } else {
	                _this._minimumScaleIsAuto = true;
	            }
	            if (!isNullOrUndefined(ooScaling.max)) {
	                _this._maximumScale = ooScaling.max;
	                _this._maxmumScaleIsAuto = false;
	            } else {
	                _this._maxmumScaleIsAuto = true;
	            }
	            if (!isNullOrUndefined(ooScaling.majorUnit)) {
	                _this._majorUnit = ooScaling.majorUnit;
	            }
	            if (!isNullOrUndefined(ooScaling.minorUnit)) {
	                _this._minorUnit = ooScaling.minorUnit;
	            }
	        };
	        Axis_prototype.GetCrossAtAx = function () {
	            var _this = this;
	            if (_this._type === 0) {
	                return _this._axes.Item(1, _this._axisGroup);
	            }
	            return _this._axes.Item(0, _this._axisGroup);
	        };
	        Axis_prototype.GetAxisId = function () {
	            if (isNullOrUndefined(this._axisId)) {
	                this._axisId = AxisUtility.GenerateAxisId();
	            }
	            return this._axisId;
	        };
	        Axis_prototype._getMajorGridlines = function (needCreate) {
	            var _this = this;
	            if (needCreate && isNullOrUndefined(_this._majorGridlines)) {
	                _this._majorGridlines = _this.GetDefaultGridlines();
	            }
	            return _this._majorGridlines;
	        };
	        Axis_prototype._getMinorGridlines = function (needCreate) {
	            var _this = this;
	            if (needCreate && isNullOrUndefined(_this._minorGridlines)) {
	                _this._minorGridlines = _this.GetDefaultGridlines();
	            }
	            return _this._minorGridlines;
	        };
	        Axis_prototype._canSetUnit = function () {
	            var actualCategoryType = this._actualCategoryType;
	           
	            if (this._type === 0  && actualCategoryType !== 2 && actualCategoryType !== 3) {
	                return false;
	            }
	            return true;
	        };
	        Axis_prototype._backup = function (value) {
	            var axisType, _this = this;
	            var type = _this._type, axisGroup = _this._axisGroup;
	            if (axisGroup === 0 ) {
	                if (type === 0) {
	                    axisType = 'primaryCategory';
	                } else if (type === 1) {
	                    axisType = 'primaryValue';    
	                }
	            } else if (axisGroup === 1) {
	                if (type === 0) {
	                    axisType = 'secondaryCategory';
	                } else if (type === 1) {
	                    axisType = 'secondaryValue';
	                }
	            }
	            var argValue = {};
	            argValue[axisType] = value;
	            this.Parent._backup(argValue);
	        };
	        return Axis;
	    }(ChartElementBase));
	    Charts.Axis = Axis;
	
	
	
	
	    var Axes = (function () {
	        function Axes(chart) {
	            this._axes = [];
	            this._chart = chart;
	        }
	
	        var Axes_prototype = Axes.prototype;
	        defineProperty(Axes_prototype, "Parent", {
	           
	           
	           
	            get: function () {
	                return this._chart;
	            }
	        });
	        defineProperty(Axes_prototype, "Count", {
	           
	           
	           
	            get: function () {
	                return this._axes.length;
	            }
	        });
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	        Axes_prototype.Item = function (type, axisGroup) {
	            if (axisGroup === keyword_undefined) {
	                axisGroup = 0;
	            }
	            return this.GetAxis(type, axisGroup);
	        };
	        Axes_prototype.GetAxis = function (type, axisGroup) {
	            var axes = this._axes;
	            for (var i = 0; i < axes.length; i++) {
	                var item = axes[i];
	                if (item.Type === type && item.AxisGroup === axisGroup) {
	                    return item;
	                }
	            }
	            return keyword_null;
	        };
	        Axes_prototype.Add = function (type, axisGroup) {
	            if (axisGroup === keyword_undefined) {
	                axisGroup = 0;
	            }
	            var axes = this._axes;
	            for (var i = 0; i < axes.length; i++) {
	                var item = axes[i];
	                if (type === item.Type && axisGroup === item.AxisGroup) {
	                    throw new Error("Can not add same type of axis many times!");
	                }
	            }
	            var axis = new Axis(this, type, axisGroup);
	            this._axes.push(axis);
	            return axis;
	        };
	        Axes_prototype.Remove = function (type, axisGroup) {
	            if (axisGroup === keyword_undefined) {
	                axisGroup = 0;
	            }
	            var removed = keyword_null;
	            var axes = this._axes;
	            for (var i = 0; i < axes.length; i++) {
	                var item = axes[i];
	                if (item.Type === type && item.AxisGroup === axisGroup) {
	                    removed = item;
	                    break;
	                }
	            }
	            if (!isNullOrUndefined(removed)) {
	                var index = this._axes.indexOf(removed);
	                this._axes.splice(index, 1);
	                return removed;
	            }
	            return keyword_null;
	        };
	        Axes_prototype.Restore2016ChartAxes = function (ooPlotArea ) {
	
	            var catAxes = getCatAxis(ooPlotArea.axes);
	            var valAxes = getValueAxis(ooPlotArea.axes);
	            var secondAxisId = getAxisIdWithPloatAreaLineSeries(ooPlotArea.plotAreaRegion.series);
	            var primaryValAxis, secondValAxis;
	            for (var i = 0; i < valAxes.length; i++) {
	                if (valAxes[i].id === secondAxisId) {
	                    secondValAxis = valAxes[i];
	                } else {
	                    primaryValAxis = valAxes[i];
	                }
	            }
	            if (catAxes && catAxes.length > 0) {
	                var catAx = this.GetAxis(0, 0);
	                catAx.From2016ChartOOModel(catAxes[0]);
	            }
	            if (valAxes && valAxes.length > 0) {
	                if (primaryValAxis) {
	                    var primaryValAx = this.GetAxis(1, 0);
	                    primaryValAx.From2016ChartOOModel(primaryValAxis);
	                }
	                if (secondValAxis) {
	                    var secondValAx = this.GetAxis(1, 1);
	                    secondValAx.From2016ChartOOModel(secondValAxis);
	                }
	            }
	        };
	        Axes_prototype.RestoreAxes = function (ooPlotArea ) {
	            this.RestoreGroupAxes(ooPlotArea, 0);
	            this.RestoreGroupAxes(ooPlotArea, 1);
	            var ooPlotArea_SerAx = ChartUtility.GetAxes(ooPlotArea, 2 );
	            if (ooPlotArea_SerAx && ooPlotArea_SerAx.length > 0) {
	                var serAx = this.GetAxis(2, 0);
	                if (serAx) {
	                    serAx.FromOOModel(ooPlotArea_SerAx[0]);
	                }
	            }
	        };
	        function getOOAxis(axes, groupedAxes, categoryAxes, axisType) {
	            return axes.filter(function (item) {
	                return (item.axisType === axisType) && groupedAxes.indexOf(item.axId) >= 0 && categoryAxes.indexOf(item.axId) >= 0;
	            })[0];
	        }
	        function getOOValAxis(axes, ooAxis) {
	            return axes.filter(function (item) {
	                return (item.axisType === 3) && item.axId === ooAxis.crossAx;
	            })[0];
	        }
	        function getCatAxis(axes) {
	            return axes.filter(function (item) {
	                return item.catScaling;
	            });
	        }
	
	        function getValueAxis(axes) {
	            return axes.filter(function (item) {
	                return item.valScaling;
	            });
	        }
	
	        function getAxisIdWithPloatAreaLineSeries(series) {
	            for (var i = 0; i < series.length; i++) {
	                if (series[i].layoutId === 18) {
	                    return series[i].axisId[0].val;
	                }
	            }
	            return null;
	        }
	
	        Axes_prototype.RestoreGroupAxes = function (ooPlotArea , axisGroup) {
	            var groupedAxes = ChartUtility.GetAxises(ooPlotArea, axisGroup);
	            var categoryAxes = ChartUtility.GetCategoryAxises(ooPlotArea);
	            var ooPlotArea_axes = ooPlotArea.axes;
	            var ooCatAx = getOOAxis(ooPlotArea_axes, groupedAxes, categoryAxes, 0);
	            var ooCatValAx = getOOAxis(ooPlotArea_axes, groupedAxes, categoryAxes, 3);
	            var ooDateAx = getOOAxis(ooPlotArea_axes, groupedAxes, categoryAxes, 1);
	            var ooValAx = keyword_null;
	            var catAx = this.GetAxis(0, axisGroup);
	            if (ooCatAx) {
	                if (catAx) {
	                    catAx.FromOOModel(ooCatAx);
	                }
	                ooValAx = getOOValAxis(ooPlotArea_axes, ooCatAx);
	            }
	            if (ooCatValAx) {
	                if (catAx && catAx.ActualCategoryType === 3) {
	                    catAx.FromOOModel(ooCatValAx);
	                }
	                ooValAx = getOOValAxis(ooPlotArea_axes, ooCatValAx);
	            }
	            if (ooDateAx) {
	                if (catAx) {
	                    catAx.FromOOModel(ooDateAx);
	                }
	                ooValAx = getOOValAxis(ooPlotArea_axes, ooDateAx);
	            }
	            if (ooValAx) {
	               
	                if (catAx) {
	                    if (!isNullOrUndefined(ooValAx.crosses)) {
	                        catAx.Crosses = ooValAx.crosses;
	                    } else if (!isNullOrUndefined(ooValAx.crossesAt)) {
	                        catAx.CrossesAt = ooValAx.crossesAt;
	                    }
	                    if (!isNullOrUndefined(ooValAx.crossBetween)) {
	                        catAx.AxisBetweenCategories = ooValAx.crossBetween === 0 ;
	                    }
	                }
	                var valAx = this.GetAxis(1, axisGroup);
	                if (valAx) {
	                    valAx.FromOOModel(ooValAx);
	                   
	                    var crosses = keyword_null;
	                    var crossAt = keyword_null;
	                    if (ooCatAx) {
	                        crosses = ooCatAx.crosses;
	                        crossAt = ooCatAx.crossesAt;
	                    } else if (ooDateAx) {
	                        crosses = ooDateAx.crosses;
	                        crossAt = ooDateAx.crossesAt;
	                    } else if (ooCatValAx) {
	                        crosses = ooCatValAx.crosses;
	                        crossAt = ooCatValAx.crossesAt;
	                    }
	                    if (!isNullOrUndefined(crosses)) {
	                        valAx.Crosses = crosses;
	                    } else if (!isNullOrUndefined(crossAt)) {
	                        valAx.CrossesAt = crossAt;
	                    }
	                }
	            }
	        };
	        Axes_prototype.ResetOnChartTypeChanged = function () {
	            var axes = this._axes;
	            for (var i = 0; i < axes.length; i++) {
	                axes[i].ResetOnChartTypeChanged();
	            }
	        };
	        Axes_prototype._backup = function (value) {
	            var chartView = this.Parent.Parent;
	            chartView._backup('axes', value);
	        };
	        return Axes;
	    }());
	    Charts.Axes = Axes;
	
	    module.exports = Charts;
	}());

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Charts = __webpack_require__(3);
	    var FloatingObjects = __webpack_require__(4);
	    var $ = __webpack_require__(6).GC$,
	        $_inherit = $.inherit,
	        COMMON_MODULE = Charts,
	        UnitHelper = COMMON_MODULE.UnitHelper,
	        isNullOrUndefined = UnitHelper.isNullOrUndefined,
	        pointToPixel = UnitHelper.pointToPixel,
	        ChartUtility = COMMON_MODULE.ChartUtility,
	        defineProperty = ChartUtility.defineProperty,
	        ChartConstants = COMMON_MODULE.ChartConstants,
	        ChartElementBase = COMMON_MODULE.ChartElementBase,
	        SeriesCollection = __webpack_require__(10).SeriesCollection,
	        CHART_GROUP_MODULE = __webpack_require__(16),
	        FullChartGroups = CHART_GROUP_MODULE.FullChartGroups,
	        ChartGroups = CHART_GROUP_MODULE.ChartGroups,
	        Axes = __webpack_require__(8).Axes,
	        Legend = __webpack_require__(17).Legend,
	        ChartTitle = __webpack_require__(5).ChartTitle,
	        PlotArea = __webpack_require__(18).PlotArea,
	        ARGBColor = Charts.ARGBColor,
	        DrawingText = Charts.DrawingText,
	        ChartFormat = __webpack_require__(7).ChartFormat;
	    var keyword_null = null, keyword_undefined = void 0, Math_floor = Math.floor;
	
	    function is2016ChartByChartSpace(chartSpace) {
	        var chart = chartSpace.chart, plotArea = chart && chart.plotArea,
	            plotAreaRegion = plotArea && plotArea.plotAreaRegion, seriesCol = plotAreaRegion && plotAreaRegion.series,
	            series = seriesCol && seriesCol[0], layoutId = series && series.layoutId;
	        return layoutId && (layoutId === 20 || layoutId === 21);
	    }
	
	    var ChartArea = (function (_super) {
	        $_inherit(ChartArea, _super);
	
	        function ChartArea(chart) {
	            var _this = _super.call(this) || this;
	            _this._chart = chart;
	            _this._chartText = _this.GetDefaultChartText();
	            var format = _this._format = _this.GetDefaultFormat();
	            format.Fill.Color.ObjectThemeColor = 0;
	            format.Line.Color.ObjectThemeColor = 1;
	            format.Line.Color.Brightness = ChartConstants.DefaultLineColorBrightness;
	            format.Line.Weight = 1 ;
	            _this._roundedCorners = false; 
	            return _this;
	        }
	
	        var ChartArea_prototype = ChartArea.prototype;
	        ChartArea_prototype.GetDefaultChartText = function () {
	            var chartText = new DrawingText(this._chart.Parent, keyword_null, keyword_null, {Size: pointToPixel(10)});
	            var font = chartText.Font;
	            font.ThemeFont = 2;
	            font.Color.ObjectThemeColor = 1;
	            font.Color.Brightness = 0.35;
	            font.Bold = false;
	            return chartText;
	        };
	        ChartArea_prototype.ResetChartText = function () {
	            var _this = this;
	            var newChartText = new DrawingText(_this._chart.Parent, keyword_null, keyword_null, {Size: pointToPixel(10)});
	            if (!isNullOrUndefined(_this._chartText)) {
	                for (var _i = 0, _a = _this._chartText.Font.Children; _i < _a.length; _i++) {
	                    var item = _a[_i];
	                    item.ParentStateful = newChartText.Font;
	                }
	            }
	            _this._chartText = newChartText;
	        };
	        defineProperty(ChartArea_prototype, "Font", {
	            get: function () {
	                return this._chartText.Font;
	            }
	        });
	        defineProperty(ChartArea_prototype, "Format", {
	            get: function () {
	                var _this = this;
	                if (isNullOrUndefined(_this._format)) {
	                    _this._format = _this.GetDefaultFormat();
	                }
	                return _this._format;
	            }
	        });
	        defineProperty(ChartArea_prototype, "FormatInternal", {
	            get: function () {
	                var _this = this;
	                if (isNullOrUndefined(_this._format)) {
	                    _this._format = _this.CreateFormat();
	                }
	                return _this._format;
	            }
	        });
	        defineProperty(ChartArea_prototype, "Parent", {
	            get: function () {
	                return this._chart;
	            }
	        });
	        defineProperty(ChartArea_prototype, "RoundedCorners", {
	            get: function () {
	                return this._roundedCorners;
	            },
	            set: function (value) {
	                this._roundedCorners = value;
	            }
	        });
	        ChartArea_prototype.setFontColor = function (sheet, colorString) {
	           
	            this._chartText.TextBody.setFontColor(sheet, colorString);
	        };
	        ChartArea_prototype.setFontTransparency = function (sheet, colorString) {
	           
	            this._chartText.TextBody.setFontTransparency(sheet, colorString);
	        };
	        ChartArea_prototype.FromOOModel = function (t) {
	            var _this = this;
	            _this._ooModel = t;
	            if (isNullOrUndefined(t)) {
	                return;
	            }
	            _this._roundedCorners = t.RoundedCorners;
	            if (!isNullOrUndefined(t.SpPr) || !t.Is2016Chart) {
	                _super.prototype.FromShapeProperties.call(_this, t.SpPr);
	            }
	            var tx = {};
	            tx.rich = t.TxPr;
	           
	            _this.ResetChartText();
	            if (!isNullOrUndefined(tx.rich)) {
	                _this._chartText.FromOOModel(tx);
	            }
	           
	           
	           
	           
	           
	        };
	        ChartArea_prototype.ToOOModel = function () {
	            var _this = this;
	            var ooModel = !isNullOrUndefined(_this._ooModel) ? _this._ooModel : {};
	            ooModel.SpPr = _super.prototype.ToShapeProperties.call(_this);
	            if (!isNullOrUndefined(_this._chartText)) {
	                ooModel.TxPr = _this._chartText.ToOOModel().rich;
	            }
	            return ooModel;
	        };
	        ChartArea_prototype.GetDefaultFormat = function () {
	            return this.CreateFormat();
	        };
	        ChartArea_prototype.CreateFormat = function () {
	            return new ChartFormat(this._chart, keyword_null, keyword_null, keyword_null);
	        };
	        return ChartArea;
	    }(ChartElementBase));
	    Charts.ChartArea = ChartArea;
	
	    var Floor = (function (_super) {
	        $_inherit(Floor, _super);
	
	        function Floor(chart) {
	            var _this = _super.call(this) || this;
	            _this._ooModel = keyword_null;
	            _this._chart = chart;
	            return _this;
	        }
	
	        var Floor_prototype = Floor.prototype;
	        defineProperty(Floor_prototype, "Format", {
	            get: function () {
	                return this.ChartFormat;
	            }
	        });
	        defineProperty(Floor_prototype, "Parent", {
	            get: function () {
	                return this._chart;
	            }
	        });
	        Floor_prototype.GetDefaultFormat = function () {
	            var format = _super.prototype.GetDefaultFormat.call(this);
	            format.Line.Color.ColorType = 0;
	            return format;
	        };
	        Floor_prototype.CreateFormat = function () {
	            return new ChartFormat(this._chart);
	        };
	        Floor_prototype.FromOOModel = function (t ) {
	            this._ooModel = t;
	            if (!isNullOrUndefined(t.thickness)) {
	                this.Thickness = Math_floor(t.thickness);
	            }
	            _super.prototype.FromShapeProperties.call(this, t.spPr);
	        };
	        Floor_prototype.ToOOModel = function () {
	            var _this = this;
	            var ooModel = !isNullOrUndefined(_this._ooModel) ? _this._ooModel : {} ;
	            ooModel.thickness = _this.Thickness;
	            ooModel.spPr = _super.prototype.ToShapeProperties.call(_this);
	            return ooModel;
	        };
	        return Floor;
	    }(ChartElementBase));
	    Charts.Floor = Floor;
	
	    var WallBase = (function (_super) {
	        $_inherit(WallBase, _super);
	
	        function WallBase(chart) {
	            var _this = _super.call(this) || this;
	            _this._thickness = 0;
	            _this._ooModel = keyword_null;
	            _this._chart = chart;
	            return _this;
	        }
	
	        var WallBase_prototype = WallBase.prototype;
	        defineProperty(WallBase_prototype, "Format", {
	            get: function () {
	                return this.ChartFormat;
	            }
	        });
	        defineProperty(WallBase_prototype, "Parent", {
	            get: function () {
	                return this._chart;
	            }
	        });
	        defineProperty(WallBase_prototype, "Thickness", {
	            get: function () {
	                return this._thickness;
	            },
	            set: function (value) {
	                this._thickness = value;
	            }
	        });
	        WallBase_prototype.FromOOModel = function (t ) {
	            this._ooModel = t;
	            if (!isNullOrUndefined(t.thickness)) {
	                this.Thickness = Math_floor(t.thickness);
	            }
	            _super.prototype.FromShapeProperties.call(this, t.spPr);
	        };
	        WallBase_prototype.ToOOModel = function () {
	            var _this = this;
	            var ooModel = !isNullOrUndefined(_this._ooModel) ? _this._ooModel : {} ;
	            ooModel.thickness = _this.Thickness;
	            ooModel.spPr = _super.prototype.ToShapeProperties.call(_this);
	            return ooModel;
	        };
	        WallBase_prototype.CreateFormat = function () {
	            return this.CreateFormatCore();
	        };
	        WallBase_prototype.CreateFormatCore = function () {
	            return keyword_null;
	        };
	        return WallBase;
	    }(ChartElementBase));
	    Charts.WallBase = WallBase;
	    var Walls = (function (_super) {
	        $_inherit(Walls, _super);
	
	        function Walls(chart) {
	            return _super.call(this, chart) || this;
	        }
	
	        var Walls_prototype = Walls.prototype;
	        defineProperty(Walls_prototype, "Thickness", {
	            get: function () {
	                return this._thickness;
	            },
	            set: function (value) {
	                this._thickness = value;
	                this._chart.SideWall.Thickness = value;
	                this._chart.BackWall.Thickness = value;
	            }
	        });
	        Walls_prototype.CreateFormatCore = function () {
	            return new ChartFormat(this._chart);
	        };
	        return Walls;
	    }(WallBase));
	    Charts.Walls = Walls;
	    var Wall = (function (_super) {
	        $_inherit(Wall, _super);
	
	        function Wall(chart) {
	            return _super.call(this, chart) || this;
	        }
	
	        Wall.prototype.CreateFormatCore = function () {
	            return new ChartFormat(this._chart, this._chart.Walls.Format);
	        };
	        return Wall;
	    }(WallBase));
	    Charts.Wall = Wall;
	
	   
	   
	   
	   
	    var ChartModel = (function () {
	        function ChartModel(chartView, chartType) {
	            if (chartType === keyword_undefined) {
	                chartType = 12;
	            }
	            var _this = this;
	            _this._gapDepth = 150;
	            _this._plotVisibleOnly = true;
	            if (ChartUtility.IsSunburstChart(chartType)) {
	                _this._hasLegend = false;
	            } else {
	                _this._hasLegend = true;
	            }
	            _this._hasTitle = true;
	            _this._barShape = 2;
	            _this._shapes = [];    
	            _this._chartGroups = {};
	            _this._elementChangedSuspended = 0;
	            _this._chartView = chartView;
	            if (chartType === 0) {
	                throw new Error("Can not set combo chart type!");
	            }
	            _this._chartType = chartType;
	            _this._useAnimation = false;
	            _this._seriesCollection = new SeriesCollection(_this);
	            _this.InitElements();
	            _this.InitProps();
	            _this._fullGroups = new FullChartGroups(_this);
	            _this.UpdateFormat();
	        }
	
	        var ChartModel_prototype = ChartModel.prototype;
	
	        ChartModel_prototype.InitElements = function () {
	            var _this = this;
	            _this._chartArea = new ChartArea(_this);
	            _this._lengend = new Legend(_this);
	            if (ChartUtility.IsRadarChart(_this._chartType) || ChartUtility.IsSunburstOrTreemapChart(_this._chartType)) {
	                _this._lengend.Position = 1;
	            } else {
	                _this._lengend.Position = 4;
	            }
	            _this._title = new ChartTitle(_this);
	            _this._plotArea = new PlotArea(_this);
	            if (ChartUtility.Is3DChart(_this._chartType)) {
	                _this._floor = _this.GetDefaultFloor();
	                _this._walls = new Walls(_this);
	                _this._sideWall = new Wall(_this);
	                _this._backWall = new Wall(_this);
	            }
	        };
	        ChartModel_prototype.InitProps = function () {
	            var _this = this;
	            _this._gapDepth = 150;
	            switch (_this._chartType) {
	                case 15
	                :
	                case 16
	                :
	                case 17
	                :
	                case 6
	                :
	                case 21
	                :
	                case 22
	                :
	                case 23
	                :
	                    _this.RightAngleAxes = true;
	                    break;
	                case 5
	                :
	                case 10
	                :
	                case 29
	                :
	                case 30
	                :
	                case 31
	                :
	                case 4
	                :
	                case 44
	                :
	                case 45
	                :
	                case 47
	                :
	                case 46
	                :
	                    _this.RightAngleAxes = false;
	                    break;
	            }
	        };
	        defineProperty(ChartModel_prototype, "Name", {
	           
	           
	           
	            get: function () {
	                return this._chartView.name();
	            }
	        });
	        defineProperty(ChartModel_prototype, "Parent", {
	            get: function () {
	                return this._chartView;
	            }
	        });
	        defineProperty(ChartModel_prototype, "ChartType", {
	           
	           
	           
	            get: function () {
	                return this._chartType;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._chartType) {
	                    if (value === 0) {
	                        throw new Error("can not set chart type to combo!");
	                    }
	                    if (ChartUtility.IsStockChart(value) && _this.GetStockChartSersCount(value) !== _this._seriesCollection.Count) {
	                        throw new Error("the amount of series is not correct!");
	                    }
	                    _this._chartType = value;
	                    _this.UpdateOnChartTypeChanged();
	                }
	            }
	        });
	        defineProperty(ChartModel_prototype, "SeriesCollection", {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                return this._seriesCollection;
	            }
	        });
	        ChartModel_prototype.UpdateSeries = function (rects, force) {
	            if (force === keyword_undefined) {
	                force = false;
	            }
	            this._seriesCollection.RefreshSeriesIfNeed(rects, force);
	        };
	        defineProperty(ChartModel_prototype, "Axes", {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                var _this = this;
	                if (!_this._axes) {
	                    _this._axes = new Axes(_this);
	                }
	                return _this._axes;
	            }
	        });
	        defineProperty(ChartModel_prototype, "ChartArea", {
	           
	           
	           
	           
	           
	            get: function () {
	                return this._chartArea;
	            }
	        });
	        defineProperty(ChartModel_prototype, "ChartTitle", {
	           
	           
	           
	           
	            get: function () {
	                if (this.HasTitle) {
	                    return this._title;
	                }
	                return keyword_null;
	            }
	        });
	        defineProperty(ChartModel_prototype, "UseAnimation", {
	           
	           
	           
	           
	            get: function () {
	                return this._useAnimation;
	            },
	            set: function (value) {
	                this._useAnimation = value;
	            }
	        });
	        defineProperty(ChartModel_prototype, "PlotArea", {
	           
	           
	           
	           
	            get: function () {
	                return this._plotArea;
	            }
	        });
	        defineProperty(ChartModel_prototype, "Legend", {
	           
	           
	           
	           
	            get: function () {
	                if (this.HasLegend) {
	                    return this._lengend;
	                }
	                return keyword_null;
	            }
	        });
	        defineProperty(ChartModel_prototype, "Floor", {
	           
	           
	           
	           
	            get: function () {
	                var _this = this;
	                if (!ChartUtility.Is3DChart(_this._chartType)) {
	                    return keyword_null;
	                }
	                if (isNullOrUndefined(_this._floor)) {
	                    _this._floor = _this.GetDefaultFloor();
	                }
	                return _this._floor;
	            }
	        });
	        defineProperty(ChartModel_prototype, "Walls", {
	           
	           
	           
	           
	            get: function () {
	                var _this = this;
	                if (!ChartUtility.Is3DChart(_this._chartType)) {
	                    return keyword_null;
	                }
	                if (isNullOrUndefined(_this._walls)) {
	                    _this._walls = new Walls(_this);
	                }
	                return _this._walls;
	            }
	        });
	        defineProperty(ChartModel_prototype, "SideWall", {
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                var _this = this;
	                if (!ChartUtility.Is3DChart(_this._chartType)) {
	                    return keyword_null;
	                }
	                if (isNullOrUndefined(_this._sideWall)) {
	                    _this._sideWall = new Wall(_this);
	                }
	                return _this._sideWall;
	            }
	        });
	        defineProperty(ChartModel_prototype, "BackWall", {
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                var _this = this;
	                if (!ChartUtility.Is3DChart(_this._chartType)) {
	                    return keyword_null;
	                }
	                if (isNullOrUndefined(_this._backWall)) {
	                    _this._backWall = new Wall(_this);
	                }
	                return _this._backWall;
	            }
	        });
	        defineProperty(ChartModel_prototype, "AutoScaling", {
	           
	           
	           
	           
	           
	            get: function () {
	                return this._chartArea.Format.ThreeD._AutoScale;
	            },
	            set: function (value) {
	                this._chartArea.Format.ThreeD._AutoScale = value;
	            }
	        });
	        defineProperty(ChartModel_prototype, "BarShape", {
	           
	           
	           
	            get: function () {
	                return this._barShape;
	            },
	            set: function (value) {
	                this._barShape = value;
	                for (var _i = 0, _a = this._seriesCollection.AllSers; _i < _a.length; _i++) {
	                    var item = _a[_i];
	                    item.ClearBarShapeInternal();
	                }
	            }
	        });
	        defineProperty(ChartModel_prototype, "PlotVisibleOnly", {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                return this._plotVisibleOnly;
	            },
	            set: function (value) {
	                if (value !== this._plotVisibleOnly) {
	                    this.UpdatePlotVisibleOnly(value);
	                }
	            }
	        });
	        defineProperty(ChartModel_prototype, "DepthPercent", {
	           
	           
	           
	           
	            get: function () {
	                return this._chartArea.Format.ThreeD._DepthPercent;
	            },
	            set: function (value) {
	                this._chartArea.Format.ThreeD._DepthPercent = value;
	            }
	        });
	        defineProperty(ChartModel_prototype, "Elevation", {
	           
	           
	           
	            get: function () {
	                return this._chartArea.Format.ThreeD.RotationY;
	            },
	            set: function (value) {
	                this._chartArea.Format.ThreeD.RotationY = value;
	            }
	        });
	        defineProperty(ChartModel_prototype, "GapDepth", {
	           
	           
	           
	           
	           
	            get: function () {
	                return this._gapDepth;
	            },
	            set: function (value) {
	                if (value >= 0 && value <= 500) {
	                    this._gapDepth = value;
	                }
	            }
	        });
	        defineProperty(ChartModel_prototype, "HasLegend", {
	           
	           
	           
	           
	            get: function () {
	                return this._hasLegend;
	            },
	            set: function (value) {
	                if (value !== this._hasLegend) {
	                    this._hasLegend = value;
	                    if (value) {
	                        this._lengend.LegendEntries.UpdateEntries();
	                    }
	                }
	            }
	        });
	        defineProperty(ChartModel_prototype, "HasTitle", {
	           
	           
	           
	            get: function () {
	                return this._hasTitle;
	            },
	            set: function (value) {
	                this._hasTitle = value;
	            }
	        });
	        defineProperty(ChartModel_prototype, "HeightPercent", {
	           
	           
	           
	           
	            get: function () {
	                return this._chartArea.Format.ThreeD._HeightPercent;
	            },
	            set: function (value) {
	                this._chartArea.Format.ThreeD._HeightPercent = value;
	            }
	        });
	        defineProperty(ChartModel_prototype, "Perspective", {
	           
	           
	           
	           
	           
	            get: function () {
	                return this._chartArea.Format.ThreeD.Perspective;
	            },
	            set: function (value) {
	                this._chartArea.Format.ThreeD.Perspective = value;
	            }
	        });
	        defineProperty(ChartModel_prototype, "RightAngleAxes", {
	           
	           
	           
	           
	            get: function () {
	                return this._chartArea.Format.ThreeD._RightAngleAxes;
	            },
	            set: function (value) {
	                this._chartArea.Format.ThreeD._RightAngleAxes = value;
	            }
	        });
	        defineProperty(ChartModel_prototype, "Rotation", {
	           
	           
	           
	           
	           
	           
	            get: function () {
	                return this._chartArea.Format.ThreeD.RotationX;
	            },
	            set: function (value) {
	                this._chartArea.Format.ThreeD.RotationX = value;
	            }
	        });
	        ChartModel_prototype.InitChartGroups = function () {
	            if (isNullOrUndefined(this._fullGroups)) {
	                this._fullGroups = new FullChartGroups(this);
	            }
	        };
	        defineProperty(ChartModel_prototype, "Area3DGroup", {
	           
	           
	           
	           
	            get: function () {
	                return this.GetFirstChartGroup(1);
	            }
	        });
	        defineProperty(ChartModel_prototype, "Bar3DGroup", {
	           
	           
	           
	           
	            get: function () {
	                return this.GetFirstChartGroup(2);
	            }
	        });
	        defineProperty(ChartModel_prototype, "Column3DGroup", {
	           
	           
	           
	           
	            get: function () {
	                return this.GetFirstChartGroup(3);
	            }
	        });
	        defineProperty(ChartModel_prototype, "Line3DGroup", {
	           
	           
	           
	           
	            get: function () {
	                return this.GetFirstChartGroup(4);
	            }
	        });
	        defineProperty(ChartModel_prototype, "Pie3DGroup", {
	           
	           
	           
	           
	            get: function () {
	                return this.GetFirstChartGroup(5);
	            }
	        });
	        defineProperty(ChartModel_prototype, "SurfaceGroup", {
	           
	           
	           
	           
	            get: function () {
	                return this.GetFirstChartGroup(6);
	            }
	        });
	        defineProperty(ChartModel_prototype, "AreaGroups", {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                return this.GetChartGroups(7);
	            }
	        });
	        defineProperty(ChartModel_prototype, "BarGroups", {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                return this.GetChartGroups(8);
	            }
	        });
	        defineProperty(ChartModel_prototype, "ColumnGroups", {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                return this.GetChartGroups(9);
	            }
	        });
	        defineProperty(ChartModel_prototype, "DoughnutGroups", {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                return this.GetChartGroups(10);
	            }
	        });
	        defineProperty(ChartModel_prototype, "LineGroups", {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                return this.GetChartGroups(11);
	            }
	        });
	        defineProperty(ChartModel_prototype, "PieGroups", {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                return this.GetChartGroups(12);
	            }
	        });
	        defineProperty(ChartModel_prototype, "RadarGroups", {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                return this.GetChartGroups(13);
	            }
	        });
	        defineProperty(ChartModel_prototype, "XYGroups", {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                return this.GetChartGroups(14);
	            }
	        });
	        defineProperty(ChartModel_prototype, "ChartGroups", {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                if (this._fullGroups.Count > 0) {
	                    return this._fullGroups;
	                }
	                return keyword_null;
	            }
	        });
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	        ChartModel_prototype.SetSourceData = function (source, plotBy) {
	            this._seriesCollection.SetSourceData(source, plotBy);
	        };
	       
	       
	       
	        ChartModel_prototype.Delete = function () {
	           
	        };
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	        ChartModel_prototype.UpdatePlotVisibleOnly = function (value) {
	            this._plotVisibleOnly = value;
	            for (var _i = 0, _a = this._seriesCollection.AllSers; _i < _a.length; _i++) {
	                var item = _a[_i];
	                item.PlotVisibleOnly = value;
	            }
	        };
	        ChartModel_prototype.SuspendElementChanged = function () {
	            this._elementChangedSuspended++;
	        };
	        ChartModel_prototype.ResumeElementChanged = function (element, elementObj, changed) {
	            if (elementObj === keyword_undefined) {
	                elementObj = keyword_null;
	            }
	            if (changed === keyword_undefined) {
	                changed = keyword_null;
	            }
	            this._elementChangedSuspended--;
	            if (this._elementChangedSuspended === 0 && !isNullOrUndefined(element)) {
	                this.HandleElementChanged(element, elementObj, changed);
	            }
	        };
	        defineProperty(ChartModel_prototype, "IsElementChangedSuspended", {
	            get: function () {
	                return this._elementChangedSuspended > 0;
	            }
	        });
	        ChartModel_prototype.HandleElementChanged = function (element, elementObj, changed, newValue, oldValue) {
	            if (newValue === keyword_undefined) {
	                newValue = keyword_null;
	            }
	            if (oldValue === keyword_undefined) {
	                oldValue = keyword_null;
	            }
	            var _this = this;
	            if (_this.IsElementChangedSuspended) {
	                return;
	            }
	            if (element === 4) {
	                _this.HandleSeriesCollectionChanged(elementObj, changed, newValue, oldValue);
	            } else if (element === 3) {
	                _this.HandleSeriesChanged(elementObj, changed, newValue, oldValue);
	            } else if (element === 8) {
	                _this.HandleCategoryAxisChanged(elementObj, changed, newValue, oldValue);
	            } else if (element === 17) {
	                _this.HandleChartGroupChanged(elementObj, changed, newValue, oldValue);
	            } else if (element === 5) {
	                _this.HandleDataPointChanged(elementObj, changed, newValue, oldValue);
	            }
	        };
	        ChartModel_prototype.FindChartGroup = function (chartType, axisGroup) {
	            var groupType = ChartUtility.MapToGroupType(chartType);
	            var fullGroups = this._fullGroups;
	            for (var i = 0, length = fullGroups.Count; i < length; i++) {
	                var item = fullGroups.Get(i);
	                if (item.GroupType === groupType && item.AxisGroup === axisGroup) {
	                    return item;
	                }
	            }
	            return keyword_null;
	        };
	        ChartModel_prototype.SetBarShapeInternal = function (shape) {
	            this._barShape = shape;
	        };
	        ChartModel_prototype.HandleSeriesCollectionChanged = function (elementObj, changed, newValue, oldValue) {//eslint-disable-line
	            var _this = this;
	            var handled = false;
	            if (changed === ChartConstants.PrimaryValuesMinMax) {
	                if (!isNullOrUndefined(_this._primaryValAxis)) {
	                    _this._primaryValAxis.UpdateAxisRulers();
	                    handled = true;
	                }
	            } else if (changed === ChartConstants.SecondaryValuesMinMax) {
	                if (!isNullOrUndefined(_this._secondaryValAxis)) {
	                    _this._secondaryValAxis.UpdateAxisRulers();
	                    handled = true;
	                }
	            } else if (changed === ChartConstants.PrimaryXValuesMinMax) {
	                if (!isNullOrUndefined(_this._primaryCatAxis) && _this._primaryCatAxis.ActualCategoryType !== 1) {
	                    _this._primaryCatAxis.UpdateAxisRulers();
	                    handled = true;
	                }
	            } else if (changed === ChartConstants.SecondaryXValuesMinMax) {
	                if (!isNullOrUndefined(_this._secondaryCatAxis) && _this._secondaryCatAxis.ActualCategoryType !== 1) {
	                    _this._secondaryCatAxis.UpdateAxisRulers();
	                    handled = true;
	                }
	            } else if (changed === ChartConstants.Collection) {
	                _this._seriesCollection._dataOrientation = keyword_null;       
	                _this.UpdateChartTypeBySeries();
	                _this.UpdateAxes();
	                _this.UpdateSeriesCollectionMinMax();
	                if (_this.HasLegend) {
	                    _this._lengend.LegendEntries.UpdateEntries();
	                }
	                _this.UpdateAxisNoMultiLvlLbl();
	            } else if (changed === ChartConstants.Restore) {
	                _this.UpdateChartTypeBySeries();
	                _this.UpdateAxes();
	               
	                _this.UpdateSeriesCollectionMinMax();
	                _this._lengend.LegendEntries.UpdateEntries();
	                _this.UpdateAxisNoMultiLvlLbl();
	            }
	            return handled;
	        };
	        ChartModel_prototype.HandleSeriesChanged = function (elementObj, changed, newValue, oldValue) {
	            var _this = this;
	            var series = elementObj;
	           
	            var seriesCollection = _this._seriesCollection;
	            if (changed === ChartConstants.ChartType) {
	                var chartTypeChanged = _this.UpdateChartTypeBySeries();
	                if (chartTypeChanged) {
	                    _this.UpdateAxes();
	                }
	            } else if (changed === ChartConstants.AxisGroup) {
	                _this.UpdateAxes();
	                _this.UpdateSeriesCollectionMinMax();
	            } else if (changed === ChartConstants.AreAllXValuesDateTime) {
	                if (series.Index === 0) {
	                    _this.UpdateAxisActualCatType(series.AxisGroup);
	                }
	            } else if (changed === ChartConstants.ValuesMinMax) {
	                seriesCollection.UpdateValuesMaxMin(series.AxisGroup);
	            } else if (changed === ChartConstants.XValuesMinMax) {
	                seriesCollection.UpdateXValuesMaxMin(series.AxisGroup);
	            } else if (changed === ChartConstants.XValuesFormula) {
	                seriesCollection.SyncOneDimensionSersXValuesFormula(series, newValue);
	                _this.UpdateAxisNoMultiLvlLbl();
	            } else if (changed === ChartConstants.IsMultiLevelXValues) {
	                var catAx = getAxis(_this.Axes, 0, series.AxisGroup);
	                if (!isNullOrUndefined(catAx)) {
	                    catAx.NoMultiLvlLbl = !series.IsMultiLevelXValues;
	                }
	            } else if (changed === ChartConstants.XValues) {
	                seriesCollection.SyncOneDimensionSersXValues(series.AxisGroup, newValue);
	            } else if (changed === ChartConstants.PlotOrder) {
	                var oldOrder = Math_floor(oldValue);
	                var newOrder = Math_floor(newValue);
	                for (var i = 0, count = seriesCollection.Count; i < count; i++) {
	                    var item = seriesCollection.Get(i);
	                   
	                    if (item !== series) {
	                        if (newOrder > oldOrder) {
	                            if (item.PlotOrder === newOrder) {
	                                item.SetPlotOrderInternal(oldOrder);
	                            }
	                        } else if (item.PlotOrder >= newOrder) {
	                            item.SetPlotOrderInternal(item.PlotOrder + 1);
	                        }
	                    }
	                }
	            }
	        };
	        ChartModel_prototype.HandleCategoryAxisChanged = function (elementObj, changed, newValue, oldValue) {//eslint-disable-line
	            var axis = elementObj;
	            if (changed === ChartConstants.CategoryNames) {
	                this._seriesCollection.SyncOneDimensionSersXValues(axis.AxisGroup, newValue);
	               
	            } else if (changed === ChartConstants.CategoryType) {
	                var categoryType = axis.CategoryType;
	                if (categoryType === 0) {
	                    axis.ActualCategoryType = this.DetectCatAxisCategoryType(axis.AxisGroup);
	                } else {
	                    axis.ActualCategoryType = categoryType;
	                }
	            }
	        };
	        ChartModel_prototype.HandleChartGroupChanged = function (elementObj, changed, newValue, oldValue) {//eslint-disable-line
	            var chartGroup = elementObj;
	            if (changed === ChartConstants.SplitType || changed === ChartConstants.SplitValue) {
	                for (var _i = 0, _a = chartGroup.GetSers(); _i < _a.length; _i++) {
	                    var ser = _a[_i];
	                    ser.UpdateSecondPlotPoints();
	                }
	            } else if (changed === ChartConstants.AxisGroup) {
	                this.UpdateAxes();
	                this.UpdateSeriesCollectionMinMax();
	            }
	            return true;
	        };
	        ChartModel_prototype.HandleDataPointChanged = function (elementObj, changed, newValue, oldValue) {//eslint-disable-line
	            var point = elementObj;
	            if (changed === ChartConstants.SecondaryPlot) {
	                point.Parent.Parent.SplitType = 3;
	            }
	        };
	        ChartModel_prototype.ResetSeriesByChartType = function () {
	            var _this = this;
	            var seriesCollection = _this._seriesCollection;
	            var count = seriesCollection.Count;
	            if (count === 0) {
	                return;
	            }
	            if (!ChartUtility.IsStockChart(_this._chartType)) {
	                for (var i = 0; i < count; i++) {
	                    var ser = seriesCollection.Get(i);
	                    ser.ResetOnOwnerChartTypeChanged();
	                }
	            } else if (_this._chartType === 49 ||
	                _this._chartType === 50) {
	                for (i = 0; i < count; i++) {
	                    ser = seriesCollection.Get(i);
	                    ser.ResetOnOwnerChartTypeChanged(9);
	                }
	            } else if (_this._chartType === 51 ||
	                _this._chartType === 52) {
	                seriesCollection.Get(0).ResetOnOwnerChartTypeChanged(12, 0);
	                for (i = 1; i < count; i++) {
	                    seriesCollection.Get(i).ResetOnOwnerChartTypeChanged(9, 1);
	                }
	            }
	        };
	        ChartModel_prototype.UpdateSeriesCollectionMinMax = function () {
	            var _this = this;
	            var seriesCollection = _this._seriesCollection;
	            seriesCollection.UpdateValuesMaxMin(0);
	            seriesCollection.UpdateValuesMaxMin(1);
	            var dimension = ChartUtility.GetDimensioin(_this.ChartType);
	            if (dimension > 1 || (!isNullOrUndefined(_this._primaryCatAxis) && _this._primaryCatAxis.IsValueOrDateScaleAxis())) {
	                seriesCollection.UpdateXValuesMaxMin(0);
	            }
	            if (dimension > 1 || (!isNullOrUndefined(_this._secondaryCatAxis) && _this._secondaryCatAxis.IsValueOrDateScaleAxis())) {
	                seriesCollection.UpdateXValuesMaxMin(1);
	            }
	        };
	        ChartModel_prototype.UpdateAxes = function () {
	            var _this = this;
	            if (!_this._axes) {
	                _this._axes = new Axes(_this);
	            }
	            _this.UpdateCatValAxes();
	            _this.UpdateSeriesAxis();
	            _this.UpdateAxisSettings();
	        };
	
	        function getAxis(axes, axisType, axisGroup, needCreate) {
	            var result = axes.Item(axisType, axisGroup);
	            if (!result && needCreate) {
	                result = axes.Add(axisType, axisGroup);
	            }
	            return result;
	        }
	
	        ChartModel_prototype.UpdateCatValAxes = function () {
	            var _this = this, axes = _this._axes;
	            var hasPrimaryAxis = false;
	            var hasSecondaryAxis = false;
	            if (ChartUtility.IsAnyPieChart(_this._chartType)) {
	                hasPrimaryAxis = false;
	                hasSecondaryAxis = false;
	            } else {
	                for (var i = 0, count = _this._seriesCollection.Count; i < count; i++) {
	                    var ser = _this._seriesCollection.Get(i);
	                    if (ser.AxisGroup === 0) {
	                        hasPrimaryAxis = true;
	                    }
	                    if (ser.AxisGroup === 1) {
	                        hasSecondaryAxis = true;
	                    }
	                }
	            }
	            if (hasPrimaryAxis) {
	                if (isNullOrUndefined(_this._primaryValAxis)) {
	                    _this._primaryValAxis = getAxis(axes, 1, 0, true );
	                }
	                if (isNullOrUndefined(_this._primaryCatAxis)) {
	                    _this._primaryCatAxis = getAxis(axes, 0, 0, true );
	                }
	            } else {
	                axes.Remove(1, 0);
	                _this._primaryValAxis = keyword_null;
	                axes.Remove(0, 0);
	                _this._primaryCatAxis = keyword_null;
	            }
	            if (hasSecondaryAxis) {
	                if (isNullOrUndefined(_this._secondaryValAxis)) {
	                    _this._secondaryValAxis = getAxis(axes, 1, 1, true );
	                }
	                if (isNullOrUndefined(_this._secondaryCatAxis)) {
	                    _this._secondaryCatAxis = getAxis(axes, 0, 1, true );
	                }
	            } else {
	                axes.Remove(1, 1);
	                _this._secondaryValAxis = keyword_null;
	                axes.Remove(0, 1);
	                _this._secondaryCatAxis = keyword_null;
	            }
	        };
	        ChartModel_prototype.UpdateSeriesAxis = function () {
	            var _this = this, axes = _this._axes;
	            if (ChartUtility.HasSeriesAx(_this._chartType)) {
	                if (isNullOrUndefined(_this._seriesAxis)) {
	                    _this._seriesAxis = getAxis(axes, 2, 0, true );
	                }
	            } else {
	                axes.Remove(2, 0);
	                _this._seriesAxis = keyword_null;
	            }
	        };
	        ChartModel_prototype.UpdateAxisNoMultiLvlLbl = function () {
	            var seriesCollection = this._seriesCollection;
	            var primSers = seriesCollection.GetSers(true, 0);
	            if (primSers.length > 0) {
	                var primCatAx = getAxis(this._axes, 0, 0);
	                if (!isNullOrUndefined(primCatAx)) {
	                    primCatAx.NoMultiLvlLbl = !primSers.some(function (ser) {
	                        return ser.IsMultiLevelXValues;
	                    });
	                }
	            }
	            var secondSers = seriesCollection.GetSers(true, 1);
	            if (secondSers.length > 0) {
	                var secondCatAx = getAxis(this._axes, 0, 1);
	                if (!isNullOrUndefined(secondCatAx)) {
	                    secondCatAx.NoMultiLvlLbl = !secondSers.some(function (ser) {
	                        return ser.IsMultiLevelXValues;
	                    });
	                }
	            }
	        };
	        ChartModel_prototype.UpdateFormat = function () {
	            var _this = this;
	            var threeD = _this._chartArea.Format.ThreeD;
	            if (ChartUtility.Is3DChart(_this._chartType)) {
	                if (ChartUtility.IsPieChart(_this._chartType)) {
	                    threeD.RotationX = 0;
	                    threeD.RotationY = 30;
	                } else if (_this._chartType === 46 ||
	                    _this._chartType === 47) {
	                    threeD.RotationX = 0;
	                    threeD.RotationY = 90;
	                    threeD.Perspective = 0;
	                } else {
	                    threeD.RotationX = 20;
	                    threeD.RotationY = 15;
	                }
	            }
	        };
	        ChartModel_prototype.UpdateAxisSettings = function (axisGroup) {
	            if (axisGroup === keyword_undefined) {
	                axisGroup = keyword_null;
	            }
	            var _this = this;
	            _this.UpdateAxisActualCatType(axisGroup);
	            if (!isNullOrUndefined(_this._primaryValAxis)) {
	                if (_this._chartType === 46 ||
	                    _this._chartType === 47) {
	                    _this._primaryValAxis.TickLabelPosition = 3;
	                } else {
	                    _this._primaryValAxis.TickLabelPosition = 2;
	                }
	            }
	        };
	        ChartModel_prototype.UpdateAxisActualCatType = function (axisGroup) {
	            if (axisGroup === keyword_undefined) {
	                axisGroup = keyword_null;
	            }
	            var _this = this;
	            if (!isNullOrUndefined(_this._primaryCatAxis) && _this._primaryCatAxis.CategoryType === 0 && (isNullOrUndefined(axisGroup) || axisGroup === 0)) {
	                _this._primaryCatAxis.ActualCategoryType = _this.DetectCatAxisCategoryType(0);
	            }
	            if (!isNullOrUndefined(_this._secondaryCatAxis) && _this._secondaryCatAxis.CategoryType === 0 && (isNullOrUndefined(axisGroup) || axisGroup === 1)) {
	                _this._secondaryCatAxis.ActualCategoryType = _this.DetectCatAxisCategoryType(1);
	            }
	        };
	        ChartModel_prototype.UpdateOnChartTypeChanged = function () {
	            var _this = this;
	            _this.ResetSeriesByChartType();
	            _this.UpdateAxes();
	            _this._axes.ResetOnChartTypeChanged();
	            _this.UpdateSeriesCollectionMinMax();
	            _this.UpdateFormat();
	           
	            var groupType = ChartUtility.MapToGroupType(_this._chartType);
	            var tempChartGroups = _this._chartGroups[groupType];
	            if (tempChartGroups) {
	                tempChartGroups.Reset();
	            }
	        };
	        ChartModel_prototype.UpdateChartTypeBySeries = function () {
	            var _this = this, chartType = _this._chartType;
	            var seriesCollection = _this._seriesCollection, count = seriesCollection.Count;
	            if (count === 0) {
	                return false;
	            }
	            var firstSer = seriesCollection.Get(0),
	                firstSerChartType = firstSer.InnerChartType,
	                firstSerAxisGroup = firstSer.AxisGroup;
	            var allSersSameChartType = true;
	            var newChartType = chartType;
	            for (var i = 1; i < count; i++) {
	                var ser = seriesCollection.Get(i);
	               
	                if (ser.InnerChartType !== firstSerChartType || ser.AxisGroup !== firstSerAxisGroup) {
	                    allSersSameChartType = false;
	                    newChartType = 0;
	                    break;
	                }
	            }
	           
	           
	           
	            if (chartType === 60 ) {
	                allSersSameChartType = true;
	                newChartType = chartType;
	            }
	
	            if (allSersSameChartType && firstSerChartType !== _this._chartType) {
	                newChartType = firstSerChartType;
	            }
	            if (newChartType !== chartType && !ChartUtility.IsBuiltInComboChart(chartType)) {
	                _this._chartType = newChartType;
	                return true;
	            }
	            return false;
	        };
	        ChartModel_prototype.UpdateAxesRulers = function () {
	            var _this = this;
	            if (!isNullOrUndefined(_this._primaryCatAxis)) {
	                _this._primaryCatAxis.UpdateAxisRulers();
	            }
	            if (!isNullOrUndefined(_this._secondaryCatAxis)) {
	                _this._secondaryCatAxis.UpdateAxisRulers();
	            }
	            if (!isNullOrUndefined(_this._primaryValAxis)) {
	                _this._primaryValAxis.UpdateAxisRulers();
	            }
	            if (!isNullOrUndefined(_this._secondaryValAxis)) {
	                _this._secondaryValAxis.UpdateAxisRulers();
	            }
	        };
	        ChartModel_prototype.DetectCatAxisCategoryType = function (axisGroup) {
	            var _this = this;
	            var chartDimension = ChartUtility.GetDimensioin(_this._chartType);
	            var sers = _this._seriesCollection.GetValidSers(axisGroup);
	            if (chartDimension === -1) {
	               
	                var serDimensionValues = [];
	                for (var _i = 0, sers_1 = sers; _i < sers_1.length; _i++) {
	                    var ser = sers_1[_i];
	                    var serDimension = ChartUtility.GetDimensioin(ser.InnerChartType);
	                    if (serDimensionValues.indexOf(serDimension) < 0) {
	                        serDimensionValues.push(serDimension);
	                    }
	                }
	                if (serDimensionValues.length === 1) {
	                    serDimension = serDimensionValues[0];
	                    if (serDimension === 1) {
	                        if (_this.AreAllFirstSerXValuesDateTime(axisGroup)) {
	                            return 2;
	                        }
	                        return 1;
	                    }
	                    return 3;
	                }
	                return 1;
	            } else if (chartDimension === 1) {
	                if (_this._seriesCollection.Count === 0) {
	                    return 1;
	                }
	                if (_this.AreAllFirstSerXValuesDateTime(axisGroup)) {
	                    return 2;
	                }
	                return 1;
	            } else if (chartDimension > 1) {
	                return 3;
	            }
	            return 1;
	        };
	        ChartModel_prototype.AreAllFirstSerXValuesDateTime = function (axisGroup) {
	            var firstSer = this._seriesCollection.Item(0, axisGroup);
	            if (isNullOrUndefined(firstSer)) {
	                return false;
	            }
	            return (isNullOrUndefined(firstSer.XValuesRefers) ? false : ChartUtility.AreValuesDateTime(this._chartView.sheet(), firstSer.XValuesRefers, this.PlotVisibleOnly));
	        };
	        ChartModel_prototype.GetDefaultFloor = function () {
	            var floor = new Floor(this);
	            if (ChartUtility.IsAreaChart(this._chartType) && ChartUtility.Is3DChart(this._chartType)) {
	                var line = floor.Format.Line;
	                line.Weight = 1 ;
	                line.Color.ObjectThemeColor = 1;
	                line.Color.Brightness = ChartConstants.DefaultLineColorBrightness;
	            } else {
	                floor.Thickness = 0;
	            }
	            return floor;
	        };
	        ChartModel_prototype.GetStockChartSersCount = function (stock) {
	            if (stock === 49) {
	                return 3;
	            } else if (stock === 50 ||
	                stock === 51) {
	                return 4;
	            } else if (stock === 52) {
	                return 5;
	            }
	            return -1;
	        };
	        ChartModel_prototype.HasChartGroups = function (groupType) {
	            for (var _i = 0, _a = this._seriesCollection.AllSers; _i < _a.length; _i++) {
	                var item = _a[_i];
	                if (ChartUtility.MapToGroupType(item.InnerChartType) === groupType) {
	                    return true;
	                }
	            }
	            return false;
	        };
	        ChartModel_prototype.GetChartGroups = function (groupType) {
	            var groups = this._chartGroups[groupType];
	            if (!groups) {
	                groups = new ChartGroups(this, groupType);
	                this._chartGroups[groupType] = groups;
	            }
	            return groups;
	        };
	        ChartModel_prototype.GetFirstChartGroup = function (groupType) {
	            var groups = this.GetChartGroups(groupType);
	            if (!isNullOrUndefined(groups) && groups.Count > 0) {
	                return groups.Get(0);
	            }
	            return keyword_null;
	        };
	        ChartModel_prototype.FromOOModel = function (ooModel ) {
	            var _this = this;
	            _this._ooChartSpace = ooModel;
	            if (isNullOrUndefined(ooModel)) {
	                return;
	            }
	            _this.FromCT_ChartArea(ooModel);
	            if (!isNullOrUndefined(ooModel.colors)) {
	                _this._colors = ooModel.colors;
	            }
	            if (!isNullOrUndefined(_this._ooChartSpace.chart)) {
	                _this._fullGroups.startCache();
	                _this.FromCT_Chart(_this._ooChartSpace.chart);
	                _this._fullGroups.endCache();
	            }
	            if (!isNullOrUndefined(_this._ooChartSpace.userShapes)) {
	                _this.FromCT_UserShapes(_this._ooChartSpace.userShapes);
	            }
	        };
	        ChartModel_prototype.FromCT_ChartArea = function (chartSpace ) {
	            var chartAreaModel = {};
	            chartAreaModel.RoundedCorners = !isNullOrUndefined(chartSpace.roundedCorners) ? chartSpace.roundedCorners : false;
	            chartAreaModel.SpPr = chartSpace.spPr;
	            chartAreaModel.TxPr = chartSpace.txPr;
	            chartAreaModel.Is2016Chart = is2016ChartByChartSpace(chartSpace);
	            this._chartArea.FromOOModel(chartAreaModel);
	            if (!isNullOrUndefined(chartSpace.chart) || !isNullOrUndefined(chartSpace.spPr)) {
	                var threeDModel = {};
	                if (!isNullOrUndefined(chartSpace.chart)) {
	                    threeDModel.View3D = chartSpace.chart.view3D;
	                }
	                if (!isNullOrUndefined(chartSpace.spPr)) {
	                    threeDModel.Scene3D = chartSpace.spPr.scene3d;
	                    threeDModel.Shape3D = chartSpace.spPr.sp3d;
	                }
	                if (!isNullOrUndefined(threeDModel.View3D) || !isNullOrUndefined(threeDModel.Shape3D) || !isNullOrUndefined(threeDModel.Scene3D)) {
	                    this._chartArea.FormatInternal.ThreeD.FromOOModel(threeDModel);
	                }
	            }
	        };
	        ChartModel_prototype.ToOOModel = function () {
	            var _this = this;
	            var ooModel = !isNullOrUndefined(_this._ooChartSpace) ? _this._ooChartSpace : {typeName: 'chartSpace'} ;
	            if (!isNullOrUndefined(_this._chartArea)) {
	                ooModel.roundedCorners = _this._chartArea.RoundedCorners;
	            }
	            ooModel.chart = _this.ToCT_Chart();
	            if (!isNullOrUndefined(_this._chartArea)) {
	                var areaModel = _this._chartArea.ToOOModel();
	                ooModel.spPr = areaModel.SpPr;
	                ooModel.txPr = areaModel.TxPr;
	            }
	            var userShapes = _this.ToCT_UserShapes();
	            if (userShapes) {
	                ooModel.userShapes = userShapes;
	            }
	            return ooModel;
	        };
	        ChartModel_prototype.ToCT_UserShapes = function () {
	            if (this._shapes.length === 0) {
	                return keyword_null;
	            }
	            return this._shapes.map(function (shape) {
	                return shape.toJSON();
	            });
	        };
	        ChartModel_prototype.FromCT_UserShapes = function (userShapes ) {
	            var _this = this, worksheet = _this._chartView.sheet();
	            userShapes && userShapes.forEach(function (anchor) {
	                if (anchor) {
	                    var shape = keyword_null;
	                    if (anchor.chartSpace) {
	                        shape = new Charts.Chart(worksheet);   
	                    } else if (anchor.src) {
	                        shape = new FloatingObjects.Picture();
	                    }
	                    if (shape) {
	                        shape.fromJSON(anchor);
	                        _this._shapes.push(shape);
	                    }
	                }
	            });
	        };
	        ChartModel_prototype.ToCT_Chart = function () {
	            var _this = this;
	            var ooChart = !isNullOrUndefined(_this._ooChartSpace) && !isNullOrUndefined(_this._ooChartSpace.chart) ? _this._ooChartSpace.chart : {} ;
	            if (_this.HasTitle) {
	                var chartType = _this.ChartType;
	                var is2016Chart = ChartUtility.GetIs2016ChartByChartType(chartType);
	                ooChart.title = _this._title.ToOOModel(is2016Chart);
	                ooChart.autoTitleDeleted = false;
	            } else {
	                delete ooChart.title;
	                ooChart.autoTitleDeleted = true;
	            }
	            _this.ToCT_3DChartProps(ooChart);
	            ooChart.plotArea = _this._plotArea.ToOOModel();
	            if (_this.HasLegend) {
	                ooChart.legend = _this._lengend.ToOOModel();
	            } else {
	                delete ooChart.legend;
	            }
	            ooChart.plotVisOnly = _this.PlotVisibleOnly;
	            ooChart.dispBlanksAs = _this.DisplayBlanksAs;
	            ooChart.showDLblsOverMax = _this.ShowDataLabelsOverMaximum;
	            if (ooChart.pivotFmts && ooChart.pivotFmts.length === 0) {
	                delete ooChart.pivotFmts;
	            }
	            return ooChart;
	        };
	        ChartModel_prototype.FromCT_Chart = function (ooChart ) {
	            var _this = this;
	            _this._chartType = ChartUtility.GetChartType(ooChart.plotArea);
	            var is2016Chart = ChartUtility.Get2016ChartType(ooChart.plotArea);
	            if (!isNullOrUndefined(ooChart.title)) {
	                _this._hasTitle = true;
	                _this._title = new ChartTitle(_this);
	                _this._title.FromOOModel(ooChart.title);
	            } else {
	                _this._hasTitle = false;
	            }
	            _this.UpdatePlotVisibleOnly(!isNullOrUndefined(ooChart.plotVisOnly) ? ooChart.plotVisOnly : true);
	            if (!isNullOrUndefined(ooChart.plotArea)) {
	                _this._plotArea.FromOOModel(ooChart.plotArea);
	                for (var i = 0, count = _this._fullGroups.Count; i < count; i++) {
	                    _this._fullGroups.Get(i).Restore(ooChart.plotArea);
	                }
	            }
	            if (!isNullOrUndefined(ooChart.legend)) {
	                _this.HasLegend = true;
	                if (is2016Chart) {
	                    _this._lengend.From2016ChartOOModel(ooChart.legend);
	                } else {
	                    _this._lengend.FromOOModel(ooChart.legend);
	                }
	            } else {
	                _this.HasLegend = false;
	            }
	            if (!isNullOrUndefined(ooChart.dispBlanksAs)) {
	                _this.DisplayBlanksAs = ooChart.dispBlanksAs;
	            }
	            if (!isNullOrUndefined(ooChart.showDLblsOverMax)) {
	                _this.ShowDataLabelsOverMaximum = ooChart.showDLblsOverMax;
	            }
	            if (!isNullOrUndefined(ooChart.floor)) {
	                _this._floor = new Floor(_this);
	                _this._floor.FromOOModel(ooChart.floor);
	            } else {
	                _this._floor = keyword_null;
	            }
	            if (!isNullOrUndefined(ooChart.sideWall)) {
	                _this._sideWall = new Wall(_this);
	                _this._sideWall.FromOOModel(ooChart.sideWall);
	            } else {
	                _this._sideWall = keyword_null;
	            }
	            if (!isNullOrUndefined(ooChart.backWall)) {
	                _this._backWall = new Wall(_this);
	                _this._backWall.FromOOModel(ooChart.backWall);
	            } else {
	                _this._backWall = keyword_null;
	            }
	        };
	        ChartModel_prototype.ToCT_3DChartProps = function (ooChart ) {
	            var _this = this;
	            if (ChartUtility.Is3DChart(_this._chartType)) {
	                var threeDModel = _this._chartArea.Format.ThreeD.ToOOModel();
	                ooChart.view3D = threeDModel.View3D;
	                if (!isNullOrUndefined(_this._floor)) {
	                    ooChart.floor = _this._floor.ToOOModel();
	                } else {
	                    delete ooChart.floor;
	                }
	                if (!isNullOrUndefined(_this._sideWall)) {
	                    ooChart.sideWall = _this._sideWall.ToOOModel();
	                } else {
	                    delete ooChart.sideWall;
	                }
	                if (!isNullOrUndefined(_this._backWall)) {
	                    ooChart.backWall = _this._backWall.ToOOModel();
	                } else {
	                    delete ooChart.backWall;
	                }
	                var ct_walls = keyword_null;
	                if (!isNullOrUndefined(_this._walls)) {
	                    ct_walls = _this._walls.ToOOModel();
	                }
	                if (!isNullOrUndefined(ct_walls)) {
	                    if (isNullOrUndefined(ooChart.sideWall)) {
	                        ooChart.sideWall = ct_walls;
	                    } else if (isNullOrUndefined(ooChart.sideWall.spPr)) {
	                        ooChart.sideWall.spPr = ct_walls.spPr;
	                    }
	                    if (isNullOrUndefined(ooChart.backWall)) {
	                        ooChart.backWall = ct_walls;
	                    } else if (isNullOrUndefined(ooChart.backWall.spPr)) {
	                        ooChart.backWall.spPr = ct_walls.spPr;
	                    }
	                }
	            } else {
	                delete ooChart.view3D;
	                delete ooChart.floor;
	                delete ooChart.sideWall;
	                delete ooChart.backWall;
	            }
	        };
	        ChartModel_prototype._ToARGBColor = function (styleColor) {
	            if (styleColor.ColorType === 2) {
	                return ARGBColor.FromArgb(styleColor.Value);
	            }
	            var styleContext = this._chartView.sheet();
	            if (!isNullOrUndefined(styleContext)) {
	                return styleContext._ToARGBColor(styleColor);
	            }
	            return new ARGBColor();
	        };
	        ChartModel_prototype._ToFont = function (themeFont) {
	            var styleContext = this._chartView.sheet();
	            if (!isNullOrUndefined(styleContext)) {
	                return styleContext._ToFont(themeFont);
	            }
	            return "";
	        };
	        defineProperty(ChartModel_prototype, "DrawingType", {
	            get: function () {
	                return 1;
	            }
	        });
	        return ChartModel;
	    }());
	    Charts.ChartModel = ChartModel;
	
	    module.exports = Charts;
	}());

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Common = __webpack_require__(11);
	    var CalcError = __webpack_require__(12).CalcError;
	    var Types = Common._Types;
	    var extend = Types._extend, inherit = Types._inherit;
	    var GeneralFormatter = __webpack_require__(13).GeneralFormatter;
	
	    var Charts = __webpack_require__(3);
	    var DrawingInterface = Charts,
	        ColorSchemeIndex = DrawingInterface.ColorSchemeIndex;
	
	    var ChartCommon = Charts,
	        Reference = ChartCommon.Reference,
	        AxisUtility = ChartCommon.AxisUtility,
	        INT32_MAX_VALUE = ChartCommon.NumberExtension.INT32_MAX_VALUE,
	        ChartUtility = ChartCommon.ChartUtility,
	        ShapeConstants = ChartCommon.ShapeConstants,
	        isEmptyObject = Types._isEmptyObject,
	        PositionConver = ShapeConstants.PositionConver,
	        defineProperty = ChartUtility.defineProperty,
	        TryToDouble = ChartUtility.TryToDouble,
	        colorFormatToString = ChartUtility.colorFormatToString,
	        getTransparencyFromColorFormat = ChartUtility.getTransparencyFromColorFormat,
	        isStockChart = ChartUtility.IsStockChart,
	        IsSunburstOrTreemapChart = ChartUtility.IsSunburstOrTreemapChart,
	        ChartConstants = ChartCommon.ChartConstants,
	        StatefulChartElementBase = ChartCommon.StatefulChartElementBase,
	        CellRect = ChartCommon.CellRect,
	        UnitHelper = ChartCommon.UnitHelper,
	        isNullOrUndefined = UnitHelper.isNullOrUndefined,
	        IsNullOrEmpty = UnitHelper.IsNullOrEmpty,
	       
	        getRangeInfoByFormula = ChartUtility.getRangeInfoByFormula,
	        isContinuousRange = ChartUtility.isContinuousRange;
	
	
	    var ColorFormat = Charts.ColorFormat;
	    var DataPoint = __webpack_require__(14),
	        Points = DataPoint.Points,
	        DataLabels = DataPoint.DataLabels,
	        DrawingText = Charts.DrawingText;
	
	    var ChartFormat = __webpack_require__(7).ChartFormat;
	    var ARGBColor = Charts.ARGBColor;
	    var ChartHelper = __webpack_require__(15).ChartHelper,
	        ChartData2016ModelCalHelper = ChartHelper.chartData2016ModelCalHelper,
	        getSeriesProperties = ChartHelper.getSeriesProperties;
	
	    var keyword_null = null, keyword_undefined = void 0;
	
	    function splitBackColor(str, ch) {
	        var result = [];
	        var inBracket = false, index = 0;
	        for (var i = 0; i < str.length; i++) {
	            var current = str[i];
	            if (current === "(") {
	                inBracket = true;
	            } else if (current === ")") {
	                inBracket = false;
	            }
	
	            if (!inBracket && current === ch) {
	                result.push(str.substring(index, i));
	                index = i + 1;
	            }
	        }
	        if (index < str.length) {
	            result.push(str.substring(index, str.length));
	           
	        }
	        return result;
	    }
	
	    function isMarkerScatterChart(chartType) {
	        return [1 , 33 , 35 , 26, 27, 28, 42].indexOf(chartType) >= 0;
	    }
	
	    function applySeriesProperties(series, seriesProperties, sheet) {
	        if (!series || !seriesProperties) {
	            return;
	        }
	        if (!isNullOrUndefined(seriesProperties.chartType)) {
	            series.ChartType = seriesProperties.chartType;
	        }
	        if (!isNullOrUndefined(seriesProperties.axisGroup)) {
	            series.AxisGroup = seriesProperties.axisGroup;
	        }
	        var isPieOrDoughnut = ChartUtility.IsPieOrDoughnutChart(series.ChartType);
	        var seriesPoints, pointNumber, point, i, dataPoints, transparency, fillColor;
	        var seriesTemp = getSeriesProperties(series, false, false, true);
	       
	        if (seriesProperties.backColor || (seriesProperties.backColor === null || seriesProperties.backColor === '')) {
	            if (isPieOrDoughnut) {
	                seriesPoints = series.Points;
	                pointNumber = seriesPoints.Count;
	                var colors = splitBackColor(seriesProperties.backColor, ',');
	                for (i = 0; i < pointNumber; i++) {
	                    point = seriesPoints.Get(i);
	                    fillColor = colors[i];
	                    if (fillColor) {
	                        point.Format.Fill.Color.setColor(sheet, fillColor);
	                    } else if (fillColor === null || fillColor === '') {
	                        point.Format.Fill.Color.ColorType = 0;
	                    }
	                }
	            } else {
	                fillColor = seriesProperties.backColor;
	                if (fillColor) {
	                    series.SetFillColor(sheet, fillColor);
	                    if (isMarkerScatterChart(series.ChartType)) {
	                        series.SetMarkerFillColor(sheet, fillColor);
	                    }
	                } else if (fillColor === null || fillColor === '') {
	                    series.Format.Fill.Color.ColorType = 0;
	                    if (isMarkerScatterChart(series.ChartType)) {
	                        series.MarkerFormat.Fill.Color.ColorType = 0;
	                    }
	                }
	                if (IsSunburstOrTreemapChart(series.ChartType) && seriesTemp.backColor !== seriesProperties.backColor) {
	                    dataPoints = series.dataPoints();
	                    transparency = series.getFillColorTransparency();
	                    for (i = 0; i < dataPoints._length(); i++) {
	                        dataPoints.set(i, {fillColor: fillColor, transparency: transparency});
	                    }
	                }
	            }
	        }
	        if (!isNullOrUndefined(seriesProperties.backColorTransparency)) {
	            if (isPieOrDoughnut) {
	                seriesPoints = series.Points;
	                pointNumber = seriesPoints.Count;
	                var transparencies = splitBackColor(seriesProperties.backColorTransparency, ',');
	                for (i = 0; i < pointNumber; i++) {
	                    point = seriesPoints.Get(i);
	                    transparency = parseInt(transparencies[i]);
	                    if (!isNullOrUndefined(transparency) && !isNaN(transparency)) {
	                        point.Format.Fill.Color.Transparency = transparency;
	                    }
	                }
	            } else {
	                series.SetFillColorTransparency(seriesProperties.backColorTransparency);
	                if (isMarkerScatterChart(series.ChartType)) {
	                    series.SetMarkerFillColorTransparency(seriesProperties.backColorTransparency);
	                }
	                if (IsSunburstOrTreemapChart(series.ChartType) && seriesTemp.backColorTransparency !== seriesProperties.backColorTransparency) {
	                    dataPoints = series.dataPoints();
	                    fillColor = series.getFillColor();
	                    for (i = 0; i < dataPoints._length(); i++) {
	                        dataPoints.set(i, {fillColor: fillColor, transparency: seriesProperties.backColorTransparency});
	                    }
	                }
	            }
	        }
	        var border = seriesProperties.border;
	        if (border) {
	            if (isPieOrDoughnut) {
	                var points = series.Points, pointCount = points.Count;
	                for (var j = 0; j < pointCount; j++) {
	                    var lineFormat = points.Get(j).Format.Line;
	                    if (border.color) {
	                        lineFormat.Color.setColor(sheet, border.color);
	                    } else if (border.color === null || border.color === '') {
	                        lineFormat.Color.ColorType = 0;
	                    }
	                    if (!isNullOrUndefined(border.width)) {
	                        lineFormat.Weight = border.width;
	                    }
	                    if (border.transparency) {
	                        lineFormat.Color.Transparency = border.transparency;
	                    }
	                }
	            } else {
	                if (border.color) {
	                    if (series.ChartType !== 1 ) {
	                        series.SetLineColor(sheet, border.color);
	                    }
	                   
	                   
	                   
	                   
	                } else if (border.color === null || border.color === '') {
	                    series.Format.Line.Color.ColorType = 0;
	                   
	                   
	                   
	                }
	                if (!isNullOrUndefined(border.width)) {
	                    series.LineWidth = border.width;
	                }
	                if (!isNullOrUndefined(border.transparency)) {
	                    series.SetLineColorTransparency(border.transparency);
	                   
	                   
	                   
	                }
	            }
	        }
	        if (!isNullOrUndefined(seriesProperties.startAngle)) {
	            series.Parent.FirstSliceAngle = seriesProperties.startAngle;
	        }
	        if (!isNullOrUndefined(seriesProperties.name)) {
	            series.UpdateNameFormula(seriesProperties.name);
	        }
	        if (!isNullOrUndefined(seriesProperties.xValues)) {
	            series.UpdateXValuesFormula(seriesProperties.xValues);
	        }
	        if (!isNullOrUndefined(seriesProperties.yValues)) {
	            series.UpdateValuesFormula(seriesProperties.yValues);
	        }
	        if (!isNullOrUndefined(seriesProperties.bubbleSizes)) {
	            series.UpdateBubbleFormula(seriesProperties.bubbleSizes);
	        }
	    }
	
	    var Util = (function () {
	        function Util() {
	        }
	
	        Util.getValueForMinMax = function (value, defaultValue) {
	            return isNaN(value) || value === Infinity ? defaultValue : value;
	        };
	        Util.getMinValue = function (values) {
	            return Math.min.apply(keyword_null, values);
	        };
	        Util.getMaxValue = function (values) {
	            return Math.max.apply(keyword_null, values);
	        };
	        Util.getMinMaxValues = function (values, defaultMin, defaultMax) {
	            if (defaultMin === keyword_undefined) {
	                defaultMin = 0;
	            }
	            if (defaultMax === keyword_undefined) {
	                defaultMax = 1;
	            }
	            var min, max;
	            if (values && values.length) {
	                min = Util.getMinValue(values);
	                max = Util.getMaxValue(values);
	            }
	            return {Min: Util.getValueForMinMax(min, defaultMin), Max: Util.getValueForMinMax(max, defaultMax)};
	        };
	        return Util;
	    }());
	
	    function isAllArrayItemSame(array) {
	        if (array) {
	            var count = array.length;
	            if (count > 0) {
	                var first = array[0];
	                for (var i = 1; i < count; i++) {
	                    if (array[i] !== first) {
	                        return false;
	                    }
	                }
	                return true;
	            }
	        }
	        return false;
	    }
	
	    var SeriesStructure = (function () {
	        function SeriesStructure() {
	            this.Label = keyword_null;
	            this.Categories = [];
	            this.Data = [];
	        }
	
	        return SeriesStructure;
	    }());
	    Charts.SeriesStructure = SeriesStructure;
	
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	    var Trendline = (function (_super) {
	        inherit(Trendline, _super);
	
	        function Trendline(series) {
	            var _this = _super.call(this, keyword_null);
	            _this._series = series;
	            _this._type = 1 ;
	            _this._period = 2;
	            _this._order = 2;
	            return _this;
	        }
	
	        var prototype = Trendline.prototype;
	
	        defineProperty(prototype, "Index", {
	            get: function () {
	                return this._series.Trendlines.IndexOf(this);
	            }
	        });
	        defineProperty(prototype, "Backward", {
	            get: function () {
	                return this._backward;
	            },
	            set: function (value) {
	                this._backward = value;
	                this.SetState(1 , true);
	            }
	        });
	        defineProperty(prototype, "DisplayEquation", {
	            get: function () {
	                return this._displayEquation;
	            },
	            set: function (value) {
	                this._displayEquation = value;
	                this.SetState(2 , true);
	            }
	        });
	        defineProperty(prototype, "DisplayRSquared", {
	            get: function () {
	                return this._displayRSquared;
	            },
	            set: function (value) {
	                this._displayRSquared = value;
	                this.SetState(4 , true);
	            }
	        });
	        defineProperty(prototype, "Format", {
	            get: function () {
	                return this.ChartFormat;
	            }
	        });
	        defineProperty(prototype, "Forward", {
	            get: function () {
	                return this._forward;
	            },
	            set: function (value) {
	                this._forward = value;
	                this.SetState(8 , true);
	            }
	        });
	        defineProperty(prototype, "Intercept", {
	            get: function () {
	                return this._intercept;
	            },
	            set: function (value) {
	                this._intercept = value;
	                this.SetState(16 , true);
	            }
	        });
	        defineProperty(prototype, "Order", {
	            get: function () {
	                return this._order;
	            },
	            set: function (value) {
	                this._order = value;
	                this.SetState(256 , true);
	            }
	        });
	        defineProperty(prototype, "Parent", {
	            get: function () {
	                return this._series;
	            }
	        });
	        defineProperty(prototype, "Period", {
	            get: function () {
	                return this._period;
	            },
	            set: function (value) {
	                this._period = value;
	                this.SetState(512 , true);
	            }
	        });
	        defineProperty(prototype, "Type", {
	            get: function () {
	                return this._type;
	            },
	            set: function (value) {
	                this._type = value;
	                this.SetState(1024 , true);
	            }
	        });
	        prototype.ClearFormats = function () {
	            this.ChartFormat = this.GetDefaultFormat();
	        };
	        prototype.Delete = function () {
	            this._series.Trendlines.Delete(this);
	        };
	        prototype.CreateFormat = function () {
	            return new ChartFormat(this._series.Chart, keyword_null, this.AutoLineColor.bind(this));
	        };
	        prototype.GetDefaultFormat = function () {
	            var format = _super.prototype.GetDefaultFormat.call(this);
	            format.Line.Weight = 2 ;
	            format.Line.DashStyle = 8 ;
	            return format;
	        };
	        prototype.AutoLineColor = function () {
	            var autoSerColor = new ColorFormat(this._series.Parent.Parent);
	            autoSerColor.ObjectThemeColor = ColorSchemeIndex["Accent" + (this._series.AutoColorIndex % 6 + 1)];
	            return autoSerColor;
	        };
	        prototype.FromOOModel = function (t ) {
	            var _this = this;
	            _this._ooLine = t;
	            if (!isNullOrUndefined(t.backward)) {
	                _this.Backward = t.backward;
	            }
	            if (!isNullOrUndefined(t.forward)) {
	                _this.Forward = t.forward;
	            }
	            if (!isNullOrUndefined(t.intercept)) {
	                _this.Intercept = t.intercept;
	            }
	            if (!isNullOrUndefined(t.order)) {
	                _this.Order = t.order;
	            }
	            if (!isNullOrUndefined(t.trendlineType)) {
	                _this.Type = t.trendlineType;
	            }
	            if (_this.Type === 3  && !isNullOrUndefined(t.period)) {
	                _this.Period = t.period;
	            }
	            if (!isNullOrUndefined(t.dispEq)) {
	                _this.DisplayEquation = t.dispEq;
	            }
	            if (!isNullOrUndefined(t.dispRSqr)) {
	                _this.DisplayRSquared = t.dispRSqr;
	            }
	            if (!isNullOrUndefined(t.spPr)) {
	                if (isNullOrUndefined(_this._format)) {
	                    _this._format = new ChartFormat(_this._series.Chart);
	                }
	                _this._format.FromOOModel(t.spPr);
	            } else {
	                _this._format = keyword_null;
	            }
	        };
	        prototype.ToOOModel = function () {
	            var _this = this;
	            var ctLine = _this._ooLine || {};
	            if (_this.GetState(1 )) {
	                ctLine.backward = _this.Backward;
	            }
	            if (_this.GetState(8 )) {
	                ctLine.forward = _this.Forward;
	            }
	            if (_this.GetState(16 )) {
	                ctLine.intercept = _this.Intercept;
	            }
	            if (_this.Type === 4 ) {
	                ctLine.order = _this.Order;
	            }
	            if (_this.Type === 3 ) {
	                ctLine.period = _this.Period;
	            }
	            ctLine.trendlineType = _this.Type;
	            ctLine.dispEq = _this.DisplayEquation;
	            ctLine.dispRSqr = _this.DisplayRSquared;
	            if (!isNullOrUndefined(_this._format)) {
	                ctLine.spPr = _this._format.ToOOModel();
	            }
	            return ctLine;
	        };
	        return Trendline;
	    }(StatefulChartElementBase));
	    Charts.Trendline = Trendline;
	    var Trendlines = (function () {
	        function Trendlines(series) {
	            this._lines = [];
	            this._series = series;
	        }
	
	        var prototype = Trendlines.prototype;
	
	        defineProperty(prototype, "Count", {
	            get: function () {
	                return this._lines.length;
	            }
	        });
	        defineProperty(prototype, "Parent", {
	            get: function () {
	                return this._series;
	            }
	        });
	        prototype.Add = function () {
	            var line = new Trendline(this._series);
	            this._lines.push(line);
	            return line;
	        };
	        prototype.Get = function (index) {
	            return this._lines[index];
	        };
	        prototype.GetLines = function () {
	            return this._lines;
	        };
	        prototype.Delete = function (indexOrLine) {
	            var index = indexOrLine;
	            if (indexOrLine instanceof Trendline) {
	                index = this.IndexOf(indexOrLine);
	            }
	            if (index >= 0) {
	                this._lines.splice(index, 1);
	            }
	        };
	        prototype.IndexOf = function (line) {
	            return this._lines.indexOf(line);
	        };
	        prototype.RestoreTrendlines = function (lines) {
	            this._lines = [];
	            for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
	                var item = lines_1[_i];
	                var trendline = this.Add();
	                trendline.FromOOModel(item);
	            }
	        };
	        return Trendlines;
	    }());
	    Charts.Trendlines = Trendlines;
	
	    var DataPt = (function (_super) {
	        inherit(DataPt, _super);
	
	        function DataPt(chart, idx) {
	            var _this = _super.call(this, keyword_null);
	            
	            _this._idx = (idx || idx === 0) ? idx : -1;
	            _this._spPr = null;
	            _this._ext = [];
	            _this._chart = chart;
	            return _this;
	        }
	
	        var prototype = DataPt.prototype;
	        prototype.CreateFormat = function () {
	            return new ChartFormat(this._chart);
	        };
	        prototype.getFillColor = function (needThemeColor, needRGBA, notAddTransprent) {
	            return colorFormatToString(this.ChartFormat.Fill, needThemeColor, needRGBA, notAddTransprent);
	        };
	        prototype.getTransparency = function () {
	            return getTransparencyFromColorFormat(this.ChartFormat.Fill);
	        };
	        prototype.setFillColor = function (sheet, value) {
	            this.ChartFormat.Fill.Color.setColor(sheet, value);
	        };
	        prototype.setTransparency = function (value) {
	            this.ChartFormat.Fill.Color.Transparency = value;
	        };
	        prototype.ToOOModel = function () {
	            var _this = this, dataPointItem = {};
	            if (!isNullOrUndefined(_this._idx)) {
	                dataPointItem.idx = _this._idx;
	            }
	            if (!isNullOrUndefined(_this._format)) {
	                dataPointItem.spPr = _this.ToShapeProperties();
	            }
	            if (!isNullOrUndefined(_this._ext) && _this._ext.length > 0) {
	                dataPointItem.extLst = {ext: _this._ext};
	            }
	            return dataPointItem;
	        };
	        prototype.FromOOModel = function (t ) {
	            var _this = this;
	            if (!isNullOrUndefined(t.idx)) {
	                _this._idx = t.idx;
	            }
	            if (!isNullOrUndefined(t.spPr)) {
	                _this.FromShapeProperties(t.spPr);
	            }
	            if (!isNullOrUndefined(t.extLst) && !isNullOrUndefined(t.extLst.ext) && t.extLst.ext.length > 0) {
	                _this._ext = t.extLst.ext;
	            }
	        };
	        prototype.getDataPointProperties = function (notAddTransprent) {
	            var _this = this;
	            return {
	                fillColor: _this.getFillColor(true, false, notAddTransprent),
	                transparency: _this.getTransparency()
	            };
	        };
	        prototype.setDataPointProperties = function (dataPoint) {
	            if (dataPoint.fillColor) {
	                this.setFillColor(this._chart._chartView.sheet(), dataPoint.fillColor);
	            } else if ((dataPoint.fillColor === null || dataPoint.fillColor === '')) {
	                this.ChartFormat.Fill.Color.ColorType = 0;
	            }
	            if (!isNullOrUndefined(dataPoint.idx)) {
	                this._idx = dataPoint.idx;
	            }
	            if (!isNullOrUndefined(dataPoint.transparency)) {
	                this.setTransparency(dataPoint.transparency);
	            }
	        };
	        return DataPt;
	    }(StatefulChartElementBase));
	
	    var DataPoints = (function () {
	       
	        
	        function DataPoints(series) {
	            var _this = this;
	            _this._series = series;
	            _this._chart = series.Chart;
	            _this._dataPoints = [];
	            _this._sunburstSeriesColor = this._series.GetSunburstSeriesColor();
	            _this._treeData = series._chartData2016ModelCalHelper._treeData;
	            _this._catCount = _this._treeData.length;
	        }
	
	        var prototype = DataPoints.prototype;
	       
	        
	        prototype.get = function (index) {
	            var _this = this;
	            var targetDataPoint;
	            if (arguments.length === 0) {
	                var dataPointsProperties = [];
	                for (var i = 0; i < _this._catCount; i++) {
	                    targetDataPoint = _this._dataPoints[i];
	                    dataPointsProperties.push(targetDataPoint ? targetDataPoint.getDataPointProperties(true) : targetDataPoint);
	                }
	                return dataPointsProperties;
	            }
	            targetDataPoint = _this._get(index);
	            if (targetDataPoint) {
	                return targetDataPoint.getDataPointProperties(true);
	            }
	        };
	
	       
	        
	        prototype.set = function (index, dataPoint) {
	            var _this = this;
	            _this._setDefaultDataPointByIndex(index);
	            var targetDataPoint = _this._get(index);
	            if (targetDataPoint && dataPoint) {
	                _this._backup({index: index, dataPoint: _this.get(index)});
	                targetDataPoint.setDataPointProperties(dataPoint);
	                _this.ChartView._updateChartModel(false);
	            }
	        };
	        prototype._setDefaultDataPointByIndex = function (index) {
	            var _this = this;
	            var targetDataPoint = _this._get(index);
	            if (isNullOrUndefined(targetDataPoint) && index < _this._catCount) {
	                targetDataPoint = new DataPt(_this._chart, _this._treeData[index].idx);
	                _this._serDataPointDefaultColor(index, targetDataPoint);
	            }
	        };
	        prototype._serDataPointDefaultColor = function (index, targetDataPoint) {
	            var _this = this;
	            var fillColor = _this._sunburstSeriesColor[index];
	            if (!isNullOrUndefined(fillColor)) {
	                targetDataPoint.setDataPointProperties({fillColor: fillColor});
	            }
	            _this._dataPoints[index] = targetDataPoint;
	        };
	        prototype._clear = function () {
	            this._dataPoints.length = 0;
	        };
	        prototype._get = function (index) {
	            return this._dataPoints[index];
	        };
	        prototype._backup = function (value) {
	            this.ChartView._backup('dataPoint', value);
	        };
	        prototype._restore = function (value) {
	            if (!value) {
	                return;
	            }
	            this.set(value.index, value.dataPoint);
	        };
	        prototype._length = function () {
	            return this._catCount;
	        };
	        prototype._updateChartUI = function () {
	            var chartView = this.ChartView;
	            if (chartView) {
	               
	               
	               
	                chartView._updateChartModel(true);
	            }
	        };
	        prototype.SetDataPointByIdx = function (idx, dataPoint) {
	            var _this = this;
	            var dataPoints = _this._dataPoints;
	            if (dataPoints) {
	                for (var i = 0; i < _this._catCount; i++) {
	                    if (_this._treeData[i].idx === idx) {
	                        _this._dataPoints[i] = dataPoint;
	                    }
	                }
	            }
	        };
	        prototype.FromOOModel = function (ctDataPoint ) {
	            var _this = this;
	            ctDataPoint.forEach(function (item) {
	                var dataPointItem = new DataPt(_this._chart);
	                dataPointItem.FromOOModel(item);
	                _this.SetDataPointByIdx(dataPointItem._idx, dataPointItem);
	            });
	        };
	        prototype.ToOOModel = function () {
	           
	            var _this = this;
	            var dataPoints = _this._dataPoints;
	            var dataPointsCount = dataPoints.length;
	            var ctDataPoints = [];
	            for (var i = 0; i < dataPointsCount; i++) {
	                var dataPoint = dataPoints[i];
	                if (dataPoint) {
	                    ctDataPoints.push(dataPoints[i].ToOOModel());
	                }
	            }
	            if (ctDataPoints.length > 0) {
	                return ctDataPoints;
	            }
	        };
	        defineProperty(prototype, "Parent", {
	           
	           
	           
	            get: function () {
	                return this._series;
	            }
	        });
	        defineProperty(prototype, "ChartView", {
	           
	           
	           
	            get: function () {
	                return this._chart.Parent;
	            }
	        });
	        return DataPoints;
	    }());
	    Charts.DataPoints = DataPoints;
	    var Series = (function (_super) {
	        inherit(Series, _super);
	
	        function Series(seriesCollection, innerChartType, axisGroup) {
	            var _this = _super.call(this, keyword_null);
	            _this._serCollection = keyword_null;
	            _this._nameRefer = keyword_null;
	            _this._xValuesRefers = [];
	            _this._valuesRefers = [];
	            _this._bubbleSizesRefers = [];
	            _this._markerFormat = keyword_null;
	            _this._invertColor = keyword_null;
	            _this._plotVisibleOnly = true;
	            _this._isMultiLevelXValues = false;
	            _this._idx = -1;
	            _this._plotOrder = -1;
	            _this._valuesMinMax = {Min: 0, Max: 1};
	            _this._xValuesMinMax = {Min: 0, Max: 1};
	            _this._ooSeries = keyword_null;
	            _this._serCollection = seriesCollection;
	            _this._innerChartType = (isNullOrUndefined(innerChartType) ? _this._serCollection.Parent.ChartType : innerChartType);
	            _this._axisGroup = !isNullOrUndefined(axisGroup) ? axisGroup : 0 ;
	            _this._cachedChartGroup = keyword_null;
	            _this._formatIdx = keyword_null;
	            _this._uniqueId = keyword_null;
	            _this._hidden = false;
	            _this._ownerIdx = keyword_null;
	            _this._axisId = [];
	            _this.defaultColors = {
	                attribute: {meth: 'cycle'},
	                schemeClr: [{val: 4}, {val: 5}, {val: 6}, {val: 7}, {val: 8}, {val: 9}],
	                variation: [{}, {lumMod: 60000}, {lumMod: 80000, lumOff: 20000}, {lumMod: 80000}, {
	                    lumMod: 60000,
	                    lumOdd: 40000
	                }, {lumMod: 50000}, {lumMod: 70000, lumOdd: 30000}, {lumMod: 70000}, {lumMod: 50000, lumOdd: 50000}]
	            };
	            _this.Init();
	            if (innerChartType && IsSunburstOrTreemapChart(innerChartType)) {
	                var seriesDataLabels = new DataLabels(this);
	                seriesDataLabels._showCategoryName = true;
	                _this._dataLabels = seriesDataLabels;
	                _this._hasDataLabels = true;
	            } else {
	                _this._dataLabels = keyword_null;
	            }
	            return _this;
	        }
	
	        var prototype = Series.prototype;
	
	        defineProperty(prototype, "SeriesCollection", {
	            get: function () {
	                return this._serCollection;
	            }
	        });
	        defineProperty(prototype, "Index", {
	            get: function () {
	                if (isNullOrUndefined(this._serCollection)) {
	                    return -1;
	                }
	                return this._serCollection.IndexOf(this);
	            }
	        });
	        defineProperty(prototype, "AxisGroup", {
	           
	           
	           
	            get: function () {
	                return this._axisGroup;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._axisGroup) {
	                    _this._axisGroup = value;
	                    _this._cachedChartGroup = keyword_null;
	                    _this.Chart.HandleElementChanged(3 , _this, ChartConstants.AxisGroup);
	                }
	            }
	        });
	        defineProperty(prototype, "BarShape", {
	           
	           
	           
	           
	            get: function () {
	                var _this = this;
	                return isNullOrUndefined(_this._barShape) ? _this.Chart.BarShape : _this._barShape;
	            },
	            set: function (value) {
	                this._barShape = value;
	            }
	        });
	        defineProperty(prototype, "ChartType", {
	           
	           
	           
	            get: function () {
	                return this._innerChartType;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._innerChartType) {
	                    if (value === 0  || ChartUtility.IsSurfaceChart(value) || ChartUtility.IsStockChart(value)) {
	                        throw new Error("Invalid chart type!");
	                    }
	                    if (ChartUtility.Is3DChart(_this._innerChartType) !== ChartUtility.Is3DChart(value)) {
	                        throw new Error("Can not change 3D of series!");
	                    }
	                    _this._innerChartType = value;
	                    _this._cachedChartGroup = keyword_null;
	                    _this._ooSeries = keyword_null;
	                    _this.UpdateSettingsByChartType();
	                    _this.Chart.HandleElementChanged(3 , _this, ChartConstants.ChartType);
	                }
	            }
	        });
	        defineProperty(prototype, "Explosion", {
	           
	           
	           
	           
	           
	            get: function () {
	                return this._explosion;
	            },
	            set: function (value) {
	                var _this = this;
	                var explosion = _this._explosion;
	                if (value !== explosion) {
	                    explosion = value;
	                    if (explosion > 400) {
	                        explosion = 400;
	                    }
	                    if (explosion < 0) {
	                        explosion = 0;
	                    }
	                    _this._explosion = explosion;
	                    _this.Dirty(1 );
	                }
	            }
	        });
	        defineProperty(prototype, "Format", {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                return this.ChartFormat;
	            }
	        });
	        prototype.dataPoints = function () {
	            return this._dataPoints;
	        };
	        prototype.getFillColor = function (needThemeColor, needRGBA, notAddTransprent) {
	            return colorFormatToString(this.Format.Fill, needThemeColor, needRGBA, notAddTransprent);
	        };
	        prototype.getFillColorTransparency = function () {
	            return getTransparencyFromColorFormat(this.Format.Fill);
	        };
	        prototype.getLineColor = function (needThemeColor, needRGBA, notAddTransprent) {
	            return colorFormatToString(this.Format.Line, needThemeColor, needRGBA, notAddTransprent);
	        };
	        prototype.getLineColorTransparency = function () {
	            return getTransparencyFromColorFormat(this.Format.Line);
	        };
	        prototype.getMarkerFillColor = function (needThemeColor) {
	            return colorFormatToString(this.MarkerFormat.Fill, needThemeColor);
	        };
	        prototype.getMarkerColorTransparency = function () {
	            return getTransparencyFromColorFormat(this.MarkerFormat.Fill);
	        };
	        defineProperty(prototype, "LineWidth", {
	            get: function () {
	                var lineWidth = this.Format.Line.Weight;
	                if (lineWidth > 0) {
	                    return lineWidth;
	                }
	                return 0;
	            },
	            set: function (value) {
	                if (!isNullOrUndefined(value)) {
	                    this.Format.Line.Weight = value;
	                }
	            }
	        });
	        defineProperty(prototype, "Formula", {
	           
	           
	           
	            get: function () {
	                return "=" + this.GetFormulaString();
	            },
	            set: function (value) {
	                if (value[0] === "=") {
	                    value = value.substr(1);
	                }
	                if (value !== this.GetFormulaString()) {
	                    this.UpdateFormulas(value);
	                }
	            }
	        });
	        defineProperty(prototype, "FormulaR1C1", {
	           
	           
	           
	           
	            get: function () {
	                return "=" + this.GetFormulaString(true);
	            },
	            set: function (value) {
	                if (value[0] === "=") {
	                    value = value.substr(1);
	                }
	                if (value !== this.GetFormulaString(true)) {
	                    this.UpdateFormulas(value);
	                }
	            }
	        });
	        defineProperty(prototype, "Has3DEffect", {
	           
	           
	           
	           
	            get: function () {
	                return this._has3DEffect;
	            },
	            set: function (value) {
	                this._has3DEffect = value;
	                this.Dirty(4  );
	            }
	        });
	        defineProperty(prototype, "HasDataLabels", {
	           
	           
	           
	            get: function () {
	                return this._hasDataLabels;
	            },
	            set: function (value) {
	                var _this = this;
	                _this._hasDataLabels = value;
	               
	                if (value) {
	                    _this.DataLabels.ShowValue = true;
	                    _this.DataLabels.ShowLeaderLines = true;
	                }
	                if (!isNullOrUndefined(_this._dataLabels)) {
	                    _this._dataLabels.UpdateDeleted(!value);
	                }
	               
	               
	               
	               
	            }
	        });
	        defineProperty(prototype, "InvertColor", {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                var _this = this;
	                if (isNullOrUndefined(_this._invertColor)) {
	                    _this._invertColor = new ColorFormat(_this.Chart);
	                }
	                return this._invertColor;
	            }
	        });
	        defineProperty(prototype, "InvertIfNegative", {
	           
	           
	           
	           
	            get: function () {
	                return this._invertIfNegative;
	            },
	            set: function (value) {
	                this._invertIfNegative = value;
	                this.Dirty(8 );
	            }
	        });
	        defineProperty(prototype, "MarkerFormat", {
	           
	            get: function () {
	                var _this = this;
	                if (isNullOrUndefined(_this._markerFormat)) {
	                    _this._markerFormat = _this.CreateMarkerFormat();
	                }
	                return _this._markerFormat;
	            }
	        });
	        defineProperty(prototype, "MarkerSize", {
	           
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                return this._markerSize;
	            },
	            set: function (value) {
	                this._markerSize = value;
	                this.Dirty(32 );
	            }
	        });
	        defineProperty(prototype, "MarkerStyle", {
	           
	           
	           
	           
	            get: function () {
	                return this._markerStyle;
	            },
	            set: function (value) {
	                this._markerStyle = value;
	                this.Dirty(64 );
	            }
	        });
	        defineProperty(prototype, "Name", {
	           
	           
	           
	            get: function () {
	                return this._name;
	            },
	            set: function (value) {
	                this.SetNameInternal(value);
	            }
	        });
	        defineProperty(prototype, "Parent", {
	           
	           
	           
	            get: function () {
	                return this.GetParentGroup();
	            }
	        });
	        defineProperty(prototype, "PictureType", {
	           
	           
	           
	           
	            get: function () {
	                return this._pictureType;
	            },
	            set: function (value) {
	                this._pictureType = value;
	                this.Dirty(128 );
	            }
	        });
	        defineProperty(prototype, "PictureUnit", {
	           
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                return this._pictureUnit;
	            },
	            set: function (value) {
	                this._pictureUnit = value;
	                this.Dirty(256 );
	            }
	        });
	        defineProperty(prototype, "Smooth", {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                return this._smooth;
	            },
	            set: function (value) {
	                this._smooth = value;
	            }
	        });
	        defineProperty(prototype, "Values", {
	           
	           
	           
	           
	           
	            get: function () {
	                if (ChartUtility.IsOfPieChart(this._innerChartType)) {
	                    return this.ProcessOfPieValues();
	                }
	                return this._values;
	            },
	            set: function (value) {
	                this.SetValuesInternal(value);
	            }
	        });
	        defineProperty(prototype, "XValues", {
	           
	           
	           
	           
	           
	            get: function () {
	                return this.GetXValues();
	            },
	            set: function (value) {
	                this.SetXValuesInternal(value);
	                this.Chart.HandleElementChanged(3 , this, ChartConstants.XValues, value);
	            }
	        });
	        defineProperty(prototype, "BubbleSizes", {
	           
	           
	           
	           
	           
	            get: function () {
	                return this.GetBubbleSizes();
	            },
	            set: function (value) {
	                this.SetBubbleSizesInternal(value);
	            }
	        });
	        defineProperty(prototype, "DataLabels", {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                var _this = this;
	                if (isNullOrUndefined(_this._dataLabels)) {
	                    _this._dataLabels = new DataLabels(_this);
	                }
	                return _this._dataLabels;
	            }
	        });
	        defineProperty(prototype, "Points", {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                return this._points;
	            }
	        });
	        defineProperty(prototype, "Trendlines", {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            get: function () {
	                return this._trendlines;
	            }
	        });
	        defineProperty(prototype, "PlotOrder", {
	            get: function () {
	                if (this._plotOrder === -1) {
	                    return this.Index + 1;
	                }
	                return this._plotOrder;
	            },
	            set: function (value) {
	                var _this = this;
	                if (_this.PlotOrder !== value && value > 0 && value <= _this._serCollection.Count) {
	                    var oldOrder = _this._plotOrder === -1 ? _this.Index + 1 : _this._plotOrder;
	                    _this._plotOrder = value;
	                    _this.Chart.HandleElementChanged(3 , _this, ChartConstants.PlotOrder, value, oldOrder);
	                }
	            }
	        });
	        defineProperty(prototype, "FormatInternal", {
	            get: function () {
	                var _this = this;
	                if (isNullOrUndefined(_this._format)) {
	                    _this._format = _this.CreateFormat();
	                }
	                return this._format;
	            }
	        });
	        defineProperty(prototype, "AutoColorIndex", {
	            get: function () {
	                if (this._idx !== -1) {
	                    return this._idx;
	                }
	                return this.SourceIndex;
	            }
	        });
	        defineProperty(prototype, "OwnerChartType", {
	            get: function () {
	                return this._serCollection.Parent.ChartType;
	            }
	        });
	        defineProperty(prototype, "PointsCount", {
	            get: function () {
	                var _this = this;
	                if (ChartUtility.IsOfPieChart(_this.InnerChartType)) {
	                    return _this.ValuesCount + 1;
	                }
	                return _this.ValuesCount;
	            }
	        });
	        defineProperty(prototype, "ValuesCount", {
	            get: function () {
	                if (isNullOrUndefined(this._values)) {
	                    return 0;
	                }
	                return this._values.length;
	            }
	        });
	        defineProperty(prototype, "PlotVisibleOnly", {
	            get: function () {
	                return this._plotVisibleOnly;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._plotVisibleOnly) {
	                    _this._plotVisibleOnly = value;
	                    _this.RefreshValuesIfNeed();
	                }
	            }
	        });
	        defineProperty(prototype, "IsHidden", {
	            get: function () {
	                var _this = this;
	                if (!isNullOrUndefined(_this._valuesRefers) && _this._valuesRefers.length > 0) {
	                    return _this.AreAllCellsHidden(_this._valuesRefers);
	                }
	                return false;
	            }
	        });
	        defineProperty(prototype, "SourceIndex", {
	            get: function () {
	                return this._serCollection.IndexOfSource(this);
	            }
	        });
	        defineProperty(prototype, "Worksheet", {
	            get: function () {
	                return this._serCollection.Parent.Parent.sheet();
	            }
	        });
	        defineProperty(prototype, "IsMultiLevelXValues", {
	            get: function () {
	                return this._isMultiLevelXValues;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._isMultiLevelXValues) {
	                    _this._isMultiLevelXValues = value;
	                    _this.Chart.HandleElementChanged(3 , _this, ChartConstants.IsMultiLevelXValues);
	                }
	            }
	        });
	        defineProperty(prototype, "NameRefer", {
	            get: function () {
	                return this._nameRefer;
	            }
	        });
	        defineProperty(prototype, "XValuesRefers", {
	            get: function () {
	                return this._xValuesRefers;
	            }
	        });
	        defineProperty(prototype, "ValuesRefers", {
	            get: function () {
	                return this._valuesRefers;
	            }
	        });
	        defineProperty(prototype, "BubbleSizesRefers", {
	            get: function () {
	                return this._bubbleSizesRefers;
	            }
	        });
	        defineProperty(prototype, "ValuesMinMax", {
	            get: function () {
	                return this._valuesMinMax;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._valuesMinMax) {
	                    _this._valuesMinMax = value;
	                    _this.Chart.HandleElementChanged(3 , _this, ChartConstants.ValuesMinMax);
	                }
	            }
	        });
	        defineProperty(prototype, "XValuesMinMax", {
	            get: function () {
	                return this._xValuesMinMax;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._xValuesMinMax) {
	                    _this._xValuesMinMax = value;
	                    _this.Chart.HandleElementChanged(3 , _this, ChartConstants.XValuesMinMax);
	                }
	            }
	        });
	        defineProperty(prototype, "AreAllXValuesDateTime", {
	            get: function () {
	                return this._areAllXValuesDateTime;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._areAllXValuesDateTime) {
	                    _this._areAllXValuesDateTime = value;
	                    _this.Chart.HandleElementChanged(3 , _this, ChartConstants.AreAllXValuesDateTime);
	                }
	            }
	        });
	        defineProperty(prototype, "InnerChartType", {
	            get: function () {
	                return this._innerChartType;
	            }
	        });
	        defineProperty(prototype, "Chart", {
	            get: function () {
	                return this._serCollection.Parent;
	            }
	        });
	
	        extend(prototype, {
	            Init: function () {
	                var _this = this;
	               
	                _this._markerFormat = _this.CreateMarkerFormat();
	                _this._barShape = keyword_null;
	                _this._invertColor = new ColorFormat(_this.Chart);
	                _this._invertColor.AutoColorFormat = _this.AutoInvertColorFormat;
	                _this._trendlines = new Trendlines(_this);
	                _this._points = new Points(_this);
	                _this._pictureType = 0 ;
	                _this._pictureUnit = 1;
	                _this._markerStyle = 4 ;
	                _this._markerSize = ChartConstants.DefaultMarkerSize;
	                _this._areAllXValuesDateTime = false;
	                _this._isRichText = false;
	                _this._isTextData = false;
	                _this.UpdateSettingsByChartType();
	            },
	            Update2016ChartDataHelper: function () {
	                var _this = this;
	                var chartType = _this._innerChartType;
	                if (IsSunburstOrTreemapChart(chartType)) {
	                    _this._chartData2016ModelCalHelper = new ChartData2016ModelCalHelper(_this);
	                }
	            },
	            UpdateDataPoints: function () {
	                var _this = this;
	                var chartType = _this._innerChartType;
	                if (IsSunburstOrTreemapChart(chartType)) {
	                    var dataPoints = new DataPoints(_this);
	                    var oldDataPoints = _this._dataPoints;
	                    if (!isNullOrUndefined(oldDataPoints)) {
	                        var oldDataPointsProperties = oldDataPoints.get();
	                        var newDataPointsProperties = dataPoints.get();
	                        for (var i = 0; i < newDataPointsProperties.length; i++) {
	                            dataPoints.set(i, oldDataPointsProperties[i]);
	                        }
	                    }
	                    _this._dataPoints = dataPoints;
	                }
	            },
	            _getUniqueName: function () {
	                return this.ChartType + (this.AxisGroup ? 'F' : '');
	            },
	            _removeJSONCache: function () {
	                var _this = this;
	                if (_this._ooSeries && _this._ooSeries.dLbls) {
	                    delete _this._ooSeries.dLbls;
	                }
	            },
	            SetFillColor: function (sheet, value) {
	                this.Format.Fill.Color.setColor(sheet, value);
	            },
	            SetFillColorTransparency: function (value) {
	                this.Format.Fill.Color.Transparency = value;
	            },
	            SetLineColor: function (sheet, value) {
	                this.Format.Line.Color.setColor(sheet, value);
	            },
	            SetLineColorTransparency: function (value) {
	                this.Format.Line.Color.Transparency = value;
	            },
	            GetSunburstSeriesColor: function () {
	               
	               
	                var _this = this, colors = _this.defaultColors,
	                    catCount = _this._chartData2016ModelCalHelper._treeData.length;
	                if (IsSunburstOrTreemapChart(_this.ChartType) && colors) {
	                    return _this.GetSeriesColorsWithColorsAndCatCount(colors, catCount);
	                }
	                return;
	            },
	            GetSeriesColorsWithColorsAndCatCount: function (colors, catCount) {
	                var _this = this;
	                var schemeClrs = colors.schemeClr;
	                var variation = colors.variation;
	                var meth = colors.attribute && colors.attribute.meth || 'cycle';
	                var highestCategoryCount = catCount;
	                switch (meth) {
	                    case 'withinLinear':
	                        return _this.GetWithinLinearColors(schemeClrs, variation, highestCategoryCount);
	                    case 'withinLinearReversed':
	                        return _this.GetWithinLinearReversedColors(schemeClrs, variation, highestCategoryCount);
	                    case 'cycle':
	                    default:
	                        return _this.GetCycleColors(schemeClrs, variation, highestCategoryCount);
	                }
	            },
	            GetCycleColors: function (schemeClrs, variation, count) {
	                var _this = this, schemeClrsCount = schemeClrs.length, colors = [];
	                for (var i = 0; i < count; i++) {
	                    var color = new ColorFormat(_this.Chart.Parent, null);
	                    color.ObjectThemeColor = schemeClrs[i % schemeClrsCount].val;
	                    if (variation && variation.length > 0) {
	                        var variationCount = variation.length;
	                        var variationInfo = variation[i % variationCount];
	                        if (variationInfo) {
	                            color.Brightness = color.CalcBrightness(variationInfo.lumMod, variationInfo.lumOff);
	                            if (!isNullOrUndefined(variationInfo.shade)) {
	                                color.FromShade(variationInfo.shade);
	                            }
	                            if (!isNullOrUndefined(variationInfo.tint)) {
	                                color.FromTint(variationInfo.tint);
	                            }
	                        }
	                    }
	                    var rgb = color.RGB;
	                    colors.push("rgba(" + rgb.R + "," + rgb.G + "," + rgb.B + "," + (rgb.A / 255) + ")");
	                }
	                return colors;
	            },
	            GetWithinLinearColors: function (schemeClrs, variation, count) {
	                var _this = this, colors = [], step = PositionConver / count, schemeClrsCount = schemeClrs.length;
	                for (var i = 0; i < count; i++) {
	                    var color = new ColorFormat(_this.Chart.Parent, null);
	                    color.ObjectThemeColor = schemeClrs[i % schemeClrsCount].val;
	                    if (variation && variation.length > 0) {
	                        var variationCount = variation.length;
	                        var variationInfo = variation[i % variationCount];
	                        if (variationInfo) {
	                            color.Brightness = color.CalcBrightness(variationInfo.lumMod, variationInfo.lumOff);
	                            if (!isNullOrUndefined(variationInfo.shade)) {
	                                color.FromShade(variationInfo.shade);
	                            }
	                            if (!isNullOrUndefined(variationInfo.tint)) {
	                                color.FromTint(variationInfo.tint);
	                            }
	                        }
	                    } else if (i < count / 2) {
	                        color.FromShade(step * (i + 1) + PositionConver / 2);
	                    } else {
	                        color.FromTint(step * (count - i - 1) + PositionConver / 2);
	                    }
	
	                    var rgb = color.RGB;
	                    colors.push("rgba(" + rgb.R + "," + rgb.G + "," + rgb.B + "," + (rgb.A / 255) + ")");
	                }
	                return colors;
	            },
	            GetWithinLinearReversedColors: function (schemeClrs, variation, count) {
	                return this.GetWithinLinearColors(schemeClrs, variation, count).reverse();
	            },
	            SetMarkerFillColor: function (sheet, value) {
	                this.MarkerFormat.Fill.Color.setColor(sheet, value);
	            },
	            SetMarkerFillColorTransparency: function (value) {
	                this.MarkerFormat.Fill.Color.Transparency = value;
	            },
	           
	           
	           
	           
	           
	           
	            UpdateFormula: function (value, r1c1) {
	                if (r1c1 === keyword_undefined) {
	                    r1c1 = false;
	                }
	               
	               
	               
	                if (value) {
	                    var _this = this;
	                    var sections = value.split(',');
	                    if (sections.length > 5) {
	                       
	                        sections.length = 4;
	                    }
	                    sections.forEach(function (formula, index) {
	                        if (formula) {
	                            switch (index) {
	                                case 0:
	                                    formula = formula.replace('SERIES(', '');
	                                    _this.UpdateNameFormula(formula, r1c1);
	                                    break;
	                                case 1:
	                                    _this.UpdateXValuesFormula(formula, r1c1);
	                                    break;
	                                case 2:
	                                    _this.UpdateValuesFormula(formula, r1c1);
	                                    break;
	                                case 4:
	                                    formula = formula.replace(')', '');
	                                    _this.UpdateBubbleFormula(formula);
	                                    break;
	                            }
	                        }
	                    });
	                }
	            },
	            GetDataLabels: function () {
	                return this._dataLabels;
	            },
	           
	           
	           
	            ClearFormats: function () {
	                this.ChartFormat = this.GetDefaultFormat();
	            },
	           
	           
	           
	            Delete: function () {
	                this._serCollection.DeleteSeries(this);
	                this._serCollection = keyword_null;
	            },
	            RefreshValuesIfNeed: function (axisRects, force) {
	                var _this = this;
	                if (isNullOrUndefined(axisRects)) {
	                    var hiddenRows = _this.Worksheet._GetHiddens(true);
	                    var hiddenCols = _this.Worksheet._GetHiddens(false);
	                    if (hiddenRows.length > 0 || hiddenCols.length > 0) {
	                        axisRects = [];
	                        [].push.apply(axisRects, _this.SegmentToRects(hiddenRows, true));
	                        [].push.apply(axisRects, _this.SegmentToRects(hiddenCols, false));
	                    }
	                }
	                var nameRefer = _this._nameRefer;
	                if (nameRefer && (force || _this.InterectWith([nameRefer], axisRects))) {
	                    _this.UpdateNameByRefer(nameRefer);
	                }
	                var xValuesRefers = _this._xValuesRefers;
	                if (xValuesRefers && xValuesRefers.length > 0 && (force || _this.InterectWith(xValuesRefers, axisRects))) {
	                    _this.UpdateXValuesByRefers(xValuesRefers);
	                }
	                var valuesRefers = _this._valuesRefers;
	                if (valuesRefers && valuesRefers.length > 0 && (force || _this.InterectWith(valuesRefers, axisRects))) {
	                    _this.UpdateValuesByRefers(valuesRefers);
	                }
	                var bubbleSizesRefers = _this._bubbleSizesRefers;
	                if (bubbleSizesRefers && bubbleSizesRefers.length > 0 && (force || _this.InterectWith(bubbleSizesRefers, axisRects))) {
	                    _this.UpdateBubbleSizesRefers(bubbleSizesRefers);
	                }
	                _this.Update2016ChartDataHelper();
	                _this.UpdateDataPoints();
	            },
	            ClearBarShapeInternal: function () {
	                this._barShape = keyword_null;
	            },
	            SegmentToRects: function (list, isRows) {
	                var result = [];
	                for (var i = 0; i < list.length; i++) {
	                    var item = list[i], index = item.Index, count = item.Count;
	                    var axis;
	                    if (isRows) {
	                        axis = new CellRect(index, 0, count, INT32_MAX_VALUE);
	                    } else {
	                        axis = new CellRect(0, index, INT32_MAX_VALUE, count);
	                    }
	                    result.push(axis);
	                }
	                return result;
	            },
	            InterectWith: function (refs, rects) {
	                if (isNullOrUndefined(refs) || isNullOrUndefined(rects)) {
	                    return false;
	                }
	                return refs.some(function (serRef) {
	                    return rects.some(function (changedRect) {
	                        return changedRect.IntersectsWith(serRef.GetSourceRange(0, 0));
	                    });
	                });
	            },
	            GetNameFormula: function (r1c1) {
	                if (r1c1 === keyword_undefined) {
	                    r1c1 = false;
	                }
	                if (!isNullOrUndefined(this._nameRefer)) {
	                    return this.GetFormulaString2([this._nameRefer], r1c1);
	                }
	                return "";
	            },
	            GetXValuesFormula: function (r1c1) {
	                if (r1c1 === keyword_undefined) {
	                    r1c1 = false;
	                }
	                if (!isNullOrUndefined(this._xValuesRefers)) {
	                    return this.GetFormulaString2(this._xValuesRefers, r1c1);
	                }
	                return "";
	            },
	            GetValuesFormula: function (r1c1) {
	                if (r1c1 === keyword_undefined) {
	                    r1c1 = false;
	                }
	                if (!isNullOrUndefined(this._valuesRefers)) {
	                    return this.GetFormulaString2(this._valuesRefers, r1c1);
	                }
	                return "";
	            },
	            GetBubbleSizesFormula: function (r1c1) {
	                if (r1c1 === keyword_undefined) {
	                    r1c1 = false;
	                }
	                if (!isNullOrUndefined(this._bubbleSizesRefers)) {
	                    return this.GetFormulaString2(this._bubbleSizesRefers, r1c1);
	                }
	                return "";
	            },
	            GetFormulaString2: function (references, r1c1) {
	                if (r1c1 === keyword_undefined) {
	                    r1c1 = false;
	                }
	                var name = this.Worksheet.name();
	                var formulaArray = [];
	                for (var i = 0, count = references.length; i < count; i++) {
	                    var ref = references[i];
	                    var formula = r1c1 ? ref.ToR1C1Text(name) : ref.ToA1Text(0, 0, name);
	                    formulaArray.push(formula);
	                }
	                return formulaArray.join(',');
	            },
	            HasRefers: function (type) {
	                var _this = this;
	                var result = false;
	                switch (type) {
	                    case 0 
	                    :
	                        result = !isNullOrUndefined(_this._nameRefer);
	                        break;
	                    case 1 
	                    :
	                        result = !isNullOrUndefined(_this._valuesRefers) && _this._valuesRefers.length > 0;
	                        break;
	                    case 2 
	                    :
	                        result = !isNullOrUndefined(_this._xValuesRefers) && _this._xValuesRefers.length > 0;
	                        break;
	                    case 3 
	                    :
	                        result = !isNullOrUndefined(_this._bubbleSizesRefers) && _this._bubbleSizesRefers.length > 0;
	                        break;
	                    default:
	                        break;
	                }
	                return result;
	            },
	            UpdateOrder: function (removedOrder) {
	                if (this._plotOrder > removedOrder) {
	                    this._plotOrder--;
	                }
	            },
	            SetNameInternal: function (name) {
	                this._name = name;
	                this.ClearNameFormulaInternal();
	            },
	            SetXValuesInternal: function (xValues) {
	                this.UpdateXValues(xValues);
	                this.ClearXValuesFormulaInternal();
	            },
	            SetValuesInternal: function (values) {
	                this.UpdateNumberValues(values);
	                this.ClearValuesFormulaInternal();
	            },
	            SetBubbleSizesInternal: function (sizes) {
	               
	                this._bubbleSizes = sizes;
	                this.ClearBubbleFormulaInternal();
	            },
	            SetPlotOrderInternal: function (value) {
	                this._plotOrder = value;
	            },
	            ResetOnOwnerChartTypeChanged: function (newChartType, axisGroup) {
	                var _this = this;
	                if (newChartType === keyword_undefined) {
	                    newChartType = keyword_null;
	                }
	                if (axisGroup === keyword_undefined) {
	                    axisGroup = keyword_null;
	                }
	                _this._innerChartType = !isNullOrUndefined(newChartType) ? newChartType : _this._serCollection.Parent.ChartType;
	                _this._ooSeries = keyword_null;
	                _this._axisGroup = !isNullOrUndefined(axisGroup) ? axisGroup : 0 ;
	                _this._cachedChartGroup = keyword_null;
	                _this.UpdateSettingsByChartType();
	            },
	            UpdateSecondPlotPoints: function () {
	                var _this = this;
	                var chartGroup = _this.Parent;
	                if (!isNullOrUndefined(chartGroup) &&
	                    chartGroup.SplitType === 3 ) {
	                    return;
	                }
	                var i, pointCount;
	                for (i = 0, pointCount = _this.Points.Count; i < pointCount; i++) {
	                    _this.Points.Get(i).SetSecondaryPlotInteral(false);
	                }
	                if (!isNullOrUndefined(chartGroup)) {
	                    var index, d, outObj;
	                    switch (chartGroup.SplitType) {
	                        case 0 
	                        :
	                            var startIndex = _this._values.length - chartGroup.SplitValue;
	                            if (startIndex < 0) {
	                                startIndex = 0;
	                            }
	                            for (index = startIndex; index < _this._values.length; index++) {
	                               
	                                _this.Points.Get(index).SetSecondaryPlotInteral(true);
	                            }
	                            break;
	                        case 1 
	                        :
	                            for (index = 0; index < _this._values.length; index++) {
	                                outObj = {value: keyword_null};
	                                TryToDouble(_this._values[index], outObj);
	                                d = outObj.value;
	                                if (!isNullOrUndefined(d) && d < chartGroup.SplitValue) {
	                                    _this.Points.Get(index).SetSecondaryPlotInteral(true);
	                                }
	                            }
	                            break;
	                        case 2 
	                        :
	                            var totalValue = 0.0;
	                            var dValues = [];
	                            i = 0;
	                            for (var values = _this._values, count = values.length; i < count; i++) {
	                                var value = values[i];
	                                outObj = {value: keyword_null};
	                                TryToDouble(value, outObj);
	                                d = outObj.value;
	                                if (!isNullOrUndefined(d)) {
	                                    dValues.push(d);
	                                    d = Math.abs(d);
	                                    totalValue += d;
	                                }
	                            }
	                            for (index = 0; index < dValues.length; index++) {
	                                d = dValues[index];
	                                var percentage = (d / totalValue) * 100;
	                                if (percentage < chartGroup.SplitValue) {
	                                    _this.Points.Get(index).SetSecondaryPlotInteral(true);
	                                }
	                            }
	                            break;
	                        case 3 
	                        :
	                            break;
	                        default:
	                            break;
	                    }
	                }
	            },
	            UpdateSettingsByChartType: function () {
	                var _this = this;
	                var innerChartType = _this._innerChartType;
	               
	                _this._format = _this.GetDefaultFormat();
	
	                _this._smooth = ChartUtility.IsSmoothLine(innerChartType);
	                _this._markerSize = ChartConstants.DefaultMarkerSize;
	                _this.UnDirty(32 );
	                _this._markerStyle = 4 ;
	                _this.UnDirty(64 );
	                _this._has3DEffect = false;
	                _this.UnDirty(4 );
	                switch (innerChartType) {
	                    case 0 
	                    :
	                        break;
	                    case 12 
	                    :
	                    case 13 
	                    :
	                    case 14 
	                    :
	                        break;
	                    case 15 
	                    :
	                    case 16 
	                    :
	                    case 17 
	                    :
	                    case 6 
	                    :
	                        break;
	                    case 18 
	                    :
	                    case 19 
	                    :
	                    case 20 
	                    :
	                        break;
	                    case 21 
	                    :
	                    case 22 
	                    :
	                    case 23 
	                    :
	                        break;
	                    case 9 
	                    :
	                    case 24 
	                    :
	                    case 25 
	                    :
	                        break;
	                    case 26 
	                    :
	                    case 27 
	                    :
	                    case 28 
	                    :
	                        _this._markerStyle = 0 ;
	                        break;
	                    case 5 
	                    :
	                        break;
	                    case 10 
	                    :
	                    case 29 
	                    :
	                    case 4 
	                    :
	                        _this._explosion = 0;
	                        break;
	                    case 30 
	                    :
	                    case 31 
	                    :
	                        _this._explosion = 25;
	                        break;
	                    case 32 
	                    :
	                        break;
	                    case 1 
	                    :
	                    case 33 
	                    :
	                    case 35 
	                    :
	                        _this._markerStyle = 0 ;
	                        break;
	                    case 34 
	                    :
	                    case 36 
	                    :
	                        _this._markerStyle = 4 ;
	                        break;
	                    case 8 
	                    :
	                    case 37 
	                    :
	                    case 38 
	                    :
	                    case 39 
	                    :
	                    case 40 
	                    :
	                    case 7 
	                    :
	                        break;
	                    case 3 
	                    :
	                        _this._explosion = 0;
	                        break;
	                    case 41 
	                    :
	                        _this._explosion = 25;
	                        break;
	                    case 2 
	                    :
	                    case 43 
	                    :
	                        break;
	                    case 42 
	                    :
	                        _this._markerStyle = 11 ;
	                        break;
	                    case 44 
	                    :
	                    case 45 
	                    :
	                    case 46 
	                    :
	                    case 47 
	                    :
	                        break;
	                    case 11 
	                    :
	                        break;
	                    case 48 
	                    :
	                        _this._has3DEffect = true;
	                        break;
	                    case 49 
	                    :
	                    case 50 
	                    :
	                    case 51 
	                    :
	                    case 52 
	                    :
	                        _this._markerStyle = 3 ;
	                        _this._markerSize = 3;
	                        break;
	                    case 57 
	                    :
	                    case 58 
	                    :
	                        _this.Update2016ChartDataHelper();
	                        _this.UpdateDataPoints();
	                        break;
	                    default:
	                        break;
	                }
	                if (_this.HasDataLabels) {
	                    _this._dataLabels.ResetByChartType();
	                }
	                _this._updateValuesMinMax();
	            },
	            GetFormulaString: function (r1c1) {
	                var _this = this;
	                if (r1c1 === keyword_undefined) {
	                    r1c1 = false;
	                }
	                var nameFormula = _this.GetNameFormula(r1c1);
	                var xValuesFormula = _this.GetXValuesFormula(r1c1);
	                var valuesFormula = _this.GetValuesFormula(r1c1);
	                var bubbleFormula = _this.GetBubbleSizesFormula(r1c1);
	                var plotOrder = _this.PlotOrder;
	                var namePara;
	                if (!nameFormula) {
	                    var name = _this.Name;
	                    namePara = isNullOrUndefined(name) ? "" : ("\"" + name + "\"");
	                } else {
	                    namePara = nameFormula;
	                }
	                var xValuesPara;
	                if (!xValuesFormula) {
	                    xValuesPara = _this.ToFormulaArray(_this._xValues, true);
	                } else {
	                    xValuesPara = _this._xValuesRefers.length > 1 ? "(" + xValuesFormula + ")" : xValuesFormula;
	                }
	                var valuesPara;
	                if (!valuesFormula) {
	                    valuesPara = _this.ToFormulaArray(_this._values, false);
	                } else {
	                    valuesPara = _this._valuesRefers.length > 1 ? "(" + valuesFormula + ")" : valuesFormula;
	                }
	                var indexPara = plotOrder.toString();
	                if (ChartUtility.IsBubbleChart(_this._innerChartType)) {
	                    var bubbleSizePara;
	                    if (!bubbleFormula) {
	                        bubbleSizePara = _this.ToFormulaArray(_this.BubbleSizes, false);
	                    } else {
	                        bubbleSizePara = _this._bubbleSizesRefers.length > 1 ? "(" + bubbleFormula + ")" : bubbleFormula;
	                    }
	                    return "SERIES(" + namePara + "," + xValuesPara + "," + valuesPara + "," + indexPara + "," + bubbleSizePara + ")";
	                }
	                return "SERIES(" + namePara + "," + xValuesPara + "," + valuesPara + "," + indexPara + ")";
	            },
	            ToFormulaArray: function (values, toString) {
	                if (isNullOrUndefined(values) || values.length === 0) {
	                    return "";
	                }
	                var temp = values;
	                var hasString = toString && temp.some(function (item) {
	                    return typeof item === 'string';
	                });
	                var result = [];
	                result.push("{");
	                if (!isNullOrUndefined(values) && values.length > 0) {
	                    for (var i = 0; i < values.length; i++) {
	                        if (i > 0) {
	                            result.push(",");
	                        }
	                        var value = values[i];
	                        if (isNullOrUndefined(value)) {
	                            result.push("#N/A");
	                        } else if (typeof value === 'string') {
	                            result.push("\"");
	                            result.push(value);
	                            result.push("\"");
	                        } else {
	                            if (hasString) {       
	                                result.push("\"");
	                                result.push(value.toString());
	                                result.push("\"");
	                            } else {
	                                result.push(value);
	                            }
	                        }
	                    }
	                }
	                result.push("}");
	                return result.join('');
	            },
	            UpdateFormulas: function (formula, r1c1) {
	                var _this = this;
	                if (r1c1 === keyword_undefined) {
	                    r1c1 = false;
	                }
	                var result = _this.Worksheet._ParseFormula(formula, 0, 0, r1c1);
	                var references = result.references;
	                if (references) {
	                    if (references[0]) {
	                        _this.SetNameRefer(references[0]);
	                    }
	                    if (references[1]) {
	                        _this.SetXValuesRefers([references[1]]);
	                    }
	                    if (references[2]) {
	                        _this.SetValuesRefers([references[2]]);
	                    }
	                    if (references[3]) {
	                        _this.SetBubbleSizesRefers([references[3]]);
	                    }
	                }
	            },
	            ClearNameFormula: function () {
	                this.ClearNameFormulaInternal();
	                this._name = keyword_null;
	            },
	            ClearNameFormulaInternal: function () {
	                this.UpdateNameReferCore(keyword_null);
	            },
	            ClearXValuesFormula: function () {
	                this.ClearXValuesFormulaInternal();
	                this.UpdateXValues(keyword_null);
	            },
	            ClearXValuesFormulaInternal: function () {
	                this.UpdateXValuesRefersCore(keyword_null);
	            },
	            ClearValuesFormula: function () {
	                this.ClearValuesFormulaInternal();
	                this.UpdateValues(keyword_null);
	            },
	            ClearValuesFormulaInternal: function () {
	                this.UpdateValuesRefersCore(keyword_null);
	            },
	            ClearBubbleFormula: function () {
	                this.ClearBubbleFormulaInternal();
	                this.UpdateBubbleSizes(keyword_null);
	            },
	            ClearBubbleFormulaInternal: function () {
	                this.UpdateBubbleSizesRefersCore(keyword_null);
	            },
	            UpdateNameFormula: function (formula, r1c1) {
	                if (r1c1 === keyword_undefined) {
	                    r1c1 = false;
	                }
	                var result = this.Worksheet._ParseFormula(formula, 0, 0, r1c1);
	                var refers = result.references;
	                var nameRef = refers ? refers[0] : keyword_null;
	                this.SetNameRefer(nameRef);
	            },
	            UpdateXValuesFormula: function (formula, r1c1) {
	                var _this = this;
	                if (r1c1 === keyword_undefined) {
	                    r1c1 = false;
	                }
	                var result = _this.Worksheet._ParseFormula(formula, 0, 0, r1c1);
	                var xValueRefers = result.references;
	                if (xValueRefers.length > 0) {
	                    _this.SetXValuesRefers(xValueRefers);
	                } else {
	                    _this.SetXValuesInternal(result.values);
	                }
	                _this.Update2016ChartDataHelper();
	                _this.UpdateDataPoints();
	            },
	            UpdateValuesFormula: function (formula, r1c1) {
	                var _this = this;
	                if (r1c1 === keyword_undefined) {
	                    r1c1 = false;
	                }
	                var result = _this.Worksheet._ParseFormula(formula, 0, 0, r1c1);
	                var valueRefers = result.references;
	                if (valueRefers.length > 0) {
	                    _this.SetValuesRefers(valueRefers);
	                } else {
	                    _this.SetValuesInternal(result.values);
	                }
	                _this.Update2016ChartDataHelper();
	                _this.UpdateDataPoints();
	            },
	            UpdateBubbleFormula: function (formula, r1c1) {
	                if (r1c1 === keyword_undefined) {
	                    r1c1 = false;
	                }
	                var result = this.Worksheet._ParseFormula(formula, 0, 0, r1c1);
	                var bubbleSizesRefers = result.references;
	                if (bubbleSizesRefers.length > 0) {
	                    this.SetBubbleSizesRefers(bubbleSizesRefers);
	                } else {
	                    this.SetBubbleSizesInternal(result.values);
	                }
	            },
	            RemoveEquals: function (formula) {
	                if (formula && formula[0] === "=") {
	                    formula = formula.substr(1);
	                }
	                return formula;
	            },
	            SetNameRefer: function (value) {
	                this.UpdateNameRefer(value);
	            },
	            SetXValuesRefers: function (value) {
	               
	                this.UpdateXValuesRefers(value);
	               
	                this.IsMultiLevelXValues = (!isNullOrUndefined(value) && value.length > 0 && value[0].RowCount > 1 && value[0].ColumnCount > 1);
	            },
	            SetValuesRefers: function (value) {
	                this.CheckRefers(value);
	                this.UpdateValuesRefers(value);
	            },
	            SetBubbleSizesRefers: function (value) {
	                this.CheckRefers(value);
	                this.UpdateBubbleSizesRefers(value);
	            },
	            UpdateNameRefer: function (value) {
	                this.UpdateNameReferCore(value);
	                this.UpdateNameByRefer(value);
	            },
	            UpdateXValuesRefers: function (refers) {
	                this.UpdateXValuesRefersCore(refers);
	                this.UpdateXValuesByRefers(refers);
	            },
	            UpdateValuesRefers: function (refers) {
	                this.UpdateValuesRefersCore(refers);
	                this.UpdateValuesByRefers(refers);
	            },
	            UpdateBubbleSizesRefers: function (refers) {
	                this.UpdateBubbleSizesRefersCore(refers);
	                this.UpdateSizessByRefers(refers);
	            },
	            UpdateNameReferCore: function (refer) {
	                this._nameRefer = refer;
	            },
	            UpdateXValuesRefersCore: function (refers) {
	                if (isNullOrUndefined(refers) || refers.length === 0) {
	                    this._xValuesRefers = [];
	                } else {
	                    this._xValuesRefers = refers;
	                }
	            },
	            UpdateValuesRefersCore: function (refers) {
	                if (isNullOrUndefined(refers) || refers.length === 0) {
	                    this._valuesRefers = [];
	                } else {
	                    this._valuesRefers = refers;
	                }
	            },
	            UpdateBubbleSizesRefersCore: function (refers) {
	                if (isNullOrUndefined(refers) || refers.length === 0) {
	                    this._bubbleSizesRefers = [];
	                } else {
	                    this._bubbleSizesRefers = refers;
	                }
	            },
	            GetValuesFromRefers: function (refers) {
	                var _this = this;
	                var values = [];
	               
	               
	                var visibleOnly = _this.PlotVisibleOnly;
	                var valueMatrixs = ChartUtility.GetValuesFromCellRefers(_this.Worksheet, refers, visibleOnly);
	                for (var _i = 0, valueMatrixs_1 = valueMatrixs; _i < valueMatrixs_1.length; _i++) {
	                    var valueMatrix = valueMatrixs_1[_i];
	                    if (!isNullOrUndefined(valueMatrix)) {
	                        for (var _a = 0, valueMatrix_1 = valueMatrix; _a < valueMatrix_1.length; _a++) {
	                            var valueArray = valueMatrix_1[_a];
	                            for (var _b = 0, valueArray_1 = valueArray; _b < valueArray_1.length; _b++) {
	                                var item = valueArray_1[_b];
	                                values.push(item);
	                            }
	                        }
	                    }
	                }
	                return values;
	            },
	            GetMultiLevelValuesFromRefers: function (refers) {
	                var _this = this;
	                var arrayValues = [];
	                var firstReferValues = ChartUtility.GetValuesFromCellRefer(_this.Worksheet, refers[0], _this.PlotVisibleOnly);
	                var rowCount = firstReferValues.length;
	                var colCount = firstReferValues[0].length;
	                var row, temp, col;
	                if (_this._serCollection.RowCol === 1 ) {
	                    for (row = 0; row < rowCount; row++) {
	                        temp = [];
	                        for (col = 0; col < colCount; col++) {
	                            temp.push(firstReferValues[row][col]);
	                        }
	                        [].push.apply(arrayValues, temp);
	                    }
	                } else {
	                    for (col = 0; col < colCount; col++) {
	                        temp = [];
	                        for (row = 0; row < rowCount; row++) {
	                            temp.push(firstReferValues[row][col]);
	                        }
	                        [].push.apply(arrayValues, temp);
	                    }
	                }
	                return arrayValues;
	            },
	            GetStylesFromRefers: function (refers) {
	                var styles = [];
	                var styleMatrixs = ChartUtility.GetStylesFromCellRefers(this.Worksheet, refers, this.PlotVisibleOnly);
	                for (var _i = 0, styleMatrixs_1 = styleMatrixs; _i < styleMatrixs_1.length; _i++) {
	                    var styleMatrix = styleMatrixs_1[_i];
	                    if (!isNullOrUndefined(styleMatrix)) {
	                        for (var _a = 0, styleMatrix_1 = styleMatrix; _a < styleMatrix_1.length; _a++) {
	                            var styleArray = styleMatrix_1[_a];
	                            for (var _b = 0, styleArray_1 = styleArray; _b < styleArray_1.length; _b++) {
	                                var item = styleArray_1[_b];
	                                styles.push(item);
	                            }
	                        }
	                    }
	                }
	                return styles;
	            },
	            UpdateNameByRefer: function (nameRef) {
	                var _this = this;
	                if (!isNullOrUndefined(nameRef) && !nameRef.IsError) {
	                    var sheet = _this.Worksheet._GetSheet(nameRef.WorksheetName);
	                    if (!isNullOrUndefined(sheet)) {
	                        var range = nameRef;
	                        _this._name = "";
	                        for (var row = range.Row; row <= range.LastRow; row++) {
	                            for (var col = range.Column; col <= range.LastColumn; col++) {
	                                _this._name += sheet._GetRange(row, col).Text;
	                            }
	                        }
	                    } else {
	                        _this._name = keyword_null;
	                    }
	                } else {
	                    _this._name = keyword_null;
	                }
	            },
	            UpdateXValuesByRefers: function (refers) {
	                var _this = this;
	                if (!isNullOrUndefined(refers) && refers.length > 0) {
	                    var values;
	                    if (_this.IsMultiLevelXValues) {
	                        values = _this.GetMultiLevelValuesFromRefers(refers);
	                    } else {
	                        values = _this.GetValuesFromRefers(refers);
	                    }
	                    _this.UpdateXValues(values);
	                } else {
	                    _this.UpdateXValues(keyword_null);
	                }
	            },
	            UpdateValuesByRefers: function (refers) {
	                if (!isNullOrUndefined(refers) && refers.length > 0) {
	                    var values = this.GetValuesFromRefers(refers);
	                    this.UpdateValues(values);
	                } else {
	                    this.UpdateValues([]);
	                }
	            },
	            UpdateSizessByRefers: function (refers) {
	                if (!isNullOrUndefined(refers) && refers.length > 0) {
	                    var values = this.GetValuesFromRefers(refers);
	                    this.UpdateBubbleSizes(values);
	                } else {
	                    this.UpdateBubbleSizes([]);
	                }
	            },
	            UpdateValues: function (values) {
	                var numbers = [];
	                ChartUtility.TryAllToNumbers(values, numbers);
	                this.UpdateNumberValues(numbers);
	            },
	            _updateValuesMinMax: function () {
	                var _this = this;
	                var dValues = _this._values;
	                var minMaxValues = Util.getMinMaxValues(dValues);
	                var chartType = _this._innerChartType;
	                if (!isNullOrUndefined(dValues) && dValues.length > 0 && ChartUtility.IsStackedChart(chartType)) {
	                    var allValues = _this._serCollection.GetValidSers(_this.AxisGroup).filter(function (ser) {
	                        return ser._innerChartType === chartType;
	                    }).map(function (ser) {
	                        return ser._values;
	                    });
	                    var max = 0, min = 0, sumArray = [];
	                    for (var i = 0; i < dValues.length; i++) {
	                        var negativeSum = 0, positiveSum = 0, sum = 0;
	                        for (var j = 0; j < allValues.length; j++) {
	                            var tempValue = allValues[j] && allValues[j][i];
	                            if (!isNullOrUndefined(tempValue)) {
	                                if (tempValue >= 0) {
	                                    positiveSum += tempValue;
	                                } else {
	                                    negativeSum += tempValue;
	                                }
	                                sum += tempValue;
	                            }
	                        }
	                        sumArray.push(sum);
	                        if (max < positiveSum) {
	                            max = positiveSum;
	                        }
	                        if (min > negativeSum) {
	                            min = negativeSum;
	                        }
	                    }
	                    if (max === 0) {
	                        max = Math.max.apply(null, sumArray);
	                    }
	                    if (min === 0) {
	                        min = Math.min.apply(null, sumArray);
	                    }
	
	                   
	                   
	                   
	                   
	                    if (allValues.length > 0) {
	                        var firstSeriesValues = allValues[0];
	                        if (firstSeriesValues.length > 0) {
	                            var firstSeriesMin = Math.min.apply(null, firstSeriesValues);
	                            var firstSeriesMax = Math.max.apply(null, firstSeriesValues);
	                            var retObj = AxisUtility.calcMinMax(min, max, false, this.Chart);
	                            if (retObj.Max < firstSeriesMax) {
	                                max = 0;
	                            }
	                            if (retObj.Min > firstSeriesMin) {
	                                min = 0;
	                            }
	                        }
	                    }
	                    minMaxValues.Max = max;
	                    minMaxValues.Min = min;
	                }
	                _this.ValuesMinMax = minMaxValues;
	            },
	            UpdateNumberValues: function (dValues) {
	                var _this = this;
	                _this._values = dValues;
	                _this._updateValuesMinMax();
	                if (ChartUtility.IsOfPieChart(_this.InnerChartType)) {
	                    _this.UpdateSecondPlotPoints();
	                }
	                if (dValues) {
	                    this._adjustAutoXValueMinMax(dValues.length);
	                }
	            },
	            _adjustAutoXValueMinMax: function (count) {
	                var _this = this, autoXValuesCount = _this._autoXValuesCount;
	                if (!isNullOrUndefined(autoXValuesCount)) {
	                    delete _this._autoXValuesCount;
	                   
	                    if (count !== autoXValuesCount) {
	                        _this.XValuesMinMax = {Min: 1, Max: count};
	                    }
	                }
	            },
	            UpdateBubbleSizes: function (values) {
	                var sizes = [];
	                for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
	                    var item = values_1[_i];
	                    var outObj = {value: keyword_null};
	                    if (TryToDouble(item, outObj)) {
	                        sizes.push(outObj.value);
	                    } else {
	                        sizes.push(1.0);
	                    }
	                }
	                this._bubbleSizes = sizes;
	            },
	            UpdateXValues: function (xValues) {
	                var values = [], isAllNumbers = false;
	                var _this = this;
	                if (isNullOrUndefined(xValues) || xValues.length === 0) {
	                    _this._xValues = keyword_null;
	                } else {
	                    _this._xValues = xValues;
	                    isAllNumbers = ChartUtility.TryAllToNumbers(xValues, values, true );
	                }
	
	                if (!isAllNumbers || values.length === 0 ) {
	                   
	                    values = _this.GetXValues();
	                }
	
	                _this.XValuesMinMax = Util.getMinMaxValues(values);
	                _this.AreAllXValuesDateTime = ChartUtility.AreValuesDateTime(_this.Worksheet, _this.XValuesRefers, _this.PlotVisibleOnly);
	            },
	            GetXValues: function () {
	                var dimension = ChartUtility.GetDimensioin(this._innerChartType);
	                var xValues = [];
	                if (dimension === 1) {
	                    [].push.apply(xValues, this.GetOneDimensionXValues());
	                } else {
	                    [].push.apply(xValues, this.GetMultiDimensionXValues());
	                }
	                return xValues;
	            },
	            XValuesIsAuto: function () {
	                var isAuto, xValues = this._xValues;
	                var dimension = ChartUtility.GetDimensioin(this._innerChartType);
	                if (dimension === 1) {
	                    isAuto = isNullOrUndefined(xValues) || xValues.length === 0;
	                } else if (this._innerChartType === 58  || this._innerChartType === 57 ) {
	                    isAuto = false;
	                } else {
	                    isAuto = isNullOrUndefined(xValues) || xValues.length === 0 || !ChartUtility.AreAllNumbers(xValues);
	                }
	                return isAuto;
	            },
	            GetOneDimensionXValues: function () {
	                var pointCount = this.PointsCount;
	                var adjustedValues = this.GetAdjustedOneDimensionXValues(pointCount);
	                if (adjustedValues.some(function (item) {
	                    return typeof item === 'string';
	                })) {
	                    adjustedValues = this.GetXValuesText(pointCount);
	                }
	                return adjustedValues;
	            },
	            GetAdjustedOneDimensionXValues: function (expectedCount) {
	                var xValues = this._xValues;
	                var temp = [];
	                if (isNullOrUndefined(xValues) || xValues.length === 0) {
	                    temp = this.AutoGenerateXValues();
	                } else if (xValues.length !== expectedCount) {
	                    temp = this.AdjustList(xValues, expectedCount);
	                } else {
	                    temp = xValues;
	                }
	                return temp;
	            },
	            GetMultiDimensionXValues: function () {
	                var _this = this;
	                var xValues = _this._xValues;
	                var temp = [];
	                if (isNullOrUndefined(xValues) || xValues.length === 0) {
	                    temp = _this.AutoGenerateXValues();
	                } else if (ChartUtility.AreAllNumbers(xValues)) {
	                    temp = xValues;
	                    var pointsCount = _this.PointsCount;
	                    if (temp.length > pointsCount) {
	                        temp = _this.AdjustList(temp, pointsCount);
	                    }
	                } else {
	                    temp = _this.AutoGenerateXValues();
	                }
	                return temp;
	            },
	            AdjustList: function (temp, expectedCount) {
	                var adjustedXValues = [];
	                [].push.apply(adjustedXValues, temp);
	                if (adjustedXValues.length > expectedCount) {
	                    adjustedXValues.splice(expectedCount, adjustedXValues.length - expectedCount);
	                } else {
	                    for (var i = 0; i <= expectedCount - adjustedXValues.length; i++) {
	                        adjustedXValues.push(keyword_null);
	                    }
	                }
	                return adjustedXValues;
	            },
	            AutoGenerateXValues: function () {
	                var valuesCount = this.PointsCount;
	                var autoValues = [];
	                for (var i = 0; i < valuesCount; i++) {
	                    autoValues.push(i + 1);
	                }
	               
	                this._autoXValuesCount = valuesCount;
	                return autoValues;
	            },
	            GetCatCount: function () {
	                var valuesCount = this.PointsCount;
	                var xValues = this._xValues;
	                if (valuesCount === 0 || isNullOrUndefined(xValues)) {
	                    return 0;
	                }
	                return parseInt(xValues.length / valuesCount);
	            },
	
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            GetBubbleSizes: function () {
	                var _this = this;
	                var bubbleSizes = _this._bubbleSizes;
	                if (isNullOrUndefined(bubbleSizes) || bubbleSizes.length === 0) {
	                    var values = _this._values;
	                    if (isNullOrUndefined(values) || values.length === 0) {
	                        return keyword_null;
	                    }
	                    var sizes = [];
	                    for (var i = 0, count = values.length; i < count; i++) {
	                        if (_this._values[i] !== keyword_null) {
	                            sizes.push(1.0);
	                        } else {
	                            sizes.push(keyword_null);
	                        }
	                    }
	                    return sizes;
	                }
	                return this._bubbleSizes;
	            },
	            CheckRefers: function (refers) {
	                if (isNullOrUndefined(refers)) {
	                    throw new Error("Must provide at least one range or values!");
	                }
	                var sheetName = keyword_null;
	                for (var _i = 0, refers_1 = refers; _i < refers_1.length; _i++) {
	                    var rect = refers_1[_i];
	                    if (isNullOrUndefined(sheetName)) {
	                        sheetName = rect.WorksheetName;
	                    } else if (sheetName !== rect.WorksheetName) {
	                        throw new Error("Must be same worksheet!");
	                    }
	                    if (rect.RowCount > 1 && rect.ColumnCount > 1) {
	                        throw new Error("The Range must contain single row or column!");
	                    }
	                }
	            },
	            ProcessOfPieValues: function () {
	                var _this = this;
	                var values = _this._values;
	                if (isNullOrUndefined(values) || values.length === 0) {
	                    return values;
	                }
	                var secondPieTotalValue = 0.0;
	                for (var index = 0; index < values.length; index++) {
	                    var outObj = {value: keyword_null};
	                    if (_this.Points.Get(index).SecondaryPlot &&
	                        TryToDouble(values[index], outObj) &&
	                        !isNullOrUndefined(outObj.value)) {
	                        secondPieTotalValue += Math.abs(outObj.value);
	                    }
	                }
	                var result = values.slice(0);
	                result.push(secondPieTotalValue);
	                return result;
	            },
	            CreateFormat: function () {
	                var _this = this;
	                return new ChartFormat(_this.Chart, keyword_null, _this.AutoFillColorFormat.bind(_this), _this.AutoLineColorFormat.bind(_this));
	            },
	            GetDefaultFormat: function () {
	                var _this = this;
	                var format = _super.prototype.GetDefaultFormat.call(_this);
	                if (_this._innerChartType === 43) {
	                    format.Line.Weight = 0 ;
	                    format.Line.Color.ColorType = 1 ;
	                } else if (ChartUtility.IsRadarChart(_this._innerChartType)) {
	                    format.Line.Weight = 2 ;
	                    format.Line.Color.ColorType = 1 ;
	                } else if (ChartUtility.IsLineSeries(_this._innerChartType)) {
	                    format.Line.Weight = 2 ;
	                    format.Line.Color.ColorType = isStockChart(_this.SeriesCollection.Parent.ChartType) ? 0  : 1 ;
	                } else if (ChartUtility.IsScatterChart(_this._innerChartType)) {
	                    format.Line.Weight = 2 ;
	                    format.Line.Color.ColorType = 0 ;
	                } else if (ChartUtility.IsOfPieChart(_this._innerChartType)) {
	                    format.Line.Weight = 2 ;
	                    format.Line.Color.ObjectThemeColor = 0 ;
	                } else if (ChartUtility.IsPieOrDoughnutChart(this._innerChartType) || ChartUtility.IsSunburstOrTreemapChart(this._innerChartType)) {
	                    format.Line.Weight = 2;
	                    format.Line.Color.RGB = ARGBColor.FromArgbs(255, 255, 255, 255);
	                }
	               
	               
	                return format;
	            },
	            AutoFillColorFormat: function () {
	                if (ChartUtility.IsFillSeries(this._innerChartType)) {
	                    return this.GenerateAutoColor(this.AutoColorIndex);
	                }
	                return keyword_null;
	            },
	            AutoLineColorFormat: function () {
	                if (ChartUtility.IsLineSeries(this._innerChartType)) {
	                    return this.GenerateAutoColor(this.AutoColorIndex);
	                }
	                return keyword_null;
	            },
	            AutoMarkerColorFormat: function () {
	                if (ChartUtility.IsMarkerSeries(this._innerChartType)) {
	                    return this.GenerateAutoColor(this.AutoColorIndex);
	                }
	                return keyword_null;
	            },
	            AutoInvertColorFormat: function () {
	                var color = new ColorFormat(this.Chart);
	                color.RGB = ARGBColor.FromArgbs(255, 255, 255, 255);
	                return color;
	            },
	            GenerateAutoColor: function (index) {
	                if (ChartUtility.IsAnyPieChart(this.InnerChartType) && this.Parent.VaryByCategories) {
	                    return keyword_null;
	                }
	                var autoSerColor = new ColorFormat(this.Chart);
	                autoSerColor.ObjectThemeColor = ColorSchemeIndex["Accent" + (index % 6 + 1)];
	                return autoSerColor;
	            },
	            CreateMarkerFormat: function () {
	                var _this = this;
	                var markerFormat = new ChartFormat(_this.Chart, keyword_null, _this.AutoMarkerColorFormat.bind(_this), _this.AutoMarkerColorFormat.bind(_this));
	                markerFormat.Line.Weight = 0;
	                return markerFormat;
	            },
	            IsPictureFill: function () {
	                if (!isNullOrUndefined(this._format)) {
	                    var fillType = this._format.Fill.Type;
	                    return fillType === 5  || fillType === 3 ;
	                }
	                return false;
	            },
	            IsDirtyIncludingParent: function (includingParent) {
	                var _this = this;
	                if (includingParent === keyword_undefined) {
	                    includingParent = false;
	                }
	                if (!isNullOrUndefined(_this._format) && _this._format.IsDirtyIncludingParent(includingParent)) {
	                    return true;
	                }
	                if (!isNullOrUndefined(_this._markerFormat) && _this._markerFormat.IsDirtyIncludingParent(includingParent)) {
	                    return true;
	                }
	                return _super.prototype.IsDirtyIncludingParent.call(_this, includingParent);
	            },
	            AreAllCellsHidden: function (refers) {
	                for (var _i = 0, refers_2 = refers; _i < refers_2.length; _i++) {
	                    var item = refers_2[_i];
	                    if (item.IsError) {
	                        continue;
	                    }
	                    var worksheet = this.Worksheet._GetSheet(item.WorksheetName);
	                    if (isNullOrUndefined(worksheet)) {
	                        continue;
	                    }
	                    if (item.RowCount === 1 && worksheet._GetRange(item.Row, item.Column).EntireRow.Hidden) {
	                        return true;
	                    } else if (item.ColumnCount === 1 && worksheet._GetRange(item.Row, item.Column).EntireColumn.Hidden) {
	                        return true;
	                    }
	                    for (var col = item.Column; col < item.Column + item.ColumnCount; col++) {
	                        if (!worksheet._GetRange(item.Row, col).EntireRow.Hidden) {
	                            return false;
	                        }
	                    }
	                    for (var row = item.Row; row < item.Row + item.RowCount; row++) {
	                        if (!worksheet._GetRange(row, item.Column).EntireColumn.Hidden) {
	                            return false;
	                        }
	                    }
	                }
	                return false;
	            },
	            HasHiddenValues: function () {
	                return this.HasHiddenCells(this._xValuesRefers);
	            },
	            HasHiddenCells: function (refers) {
	                if (isNullOrUndefined(refers) || refers.length === 0) {
	                    return false;
	                }
	                for (var _i = 0, refers_3 = refers; _i < refers_3.length; _i++) {
	                    var refer = refers_3[_i];
	                    var sheet = this.Worksheet._GetSheet(refer.WorksheetName);
	                    if (refer.RowCount === 1) {
	                        for (var c = refer.Column; c <= refer.LastColumn; c++) {
	                            if (sheet._GetRange(refer.Row, c).EntireColumn.Hidden) {
	                                return true;
	                            }
	                        }
	                    } else if (refer.ColumnCount === 1) {
	                        for (var r = refer.Row; r <= refer.LastRow; r++) {
	                            if (sheet._GetRange(r, refer.Column).EntireRow.Hidden) {
	                                return true;
	                            }
	                        }
	                    }
	                }
	                return false;
	            },
	            GetRowColIndex: function (refers, pointIndex, outObj) {
	                outObj.sheet = keyword_null;
	                outObj.row = -1;
	                outObj.col = -1;
	                var i = 0;
	                for (var _i = 0, refers_4 = refers; _i < refers_4.length; _i++) {
	                    var refer = refers_4[_i];
	                    if (refer.IsError) {
	                        continue;
	                    }
	                    outObj.sheet = this.Worksheet._GetSheet(refer.WorksheetName);
	                    if (isNullOrUndefined(outObj.sheet)) {
	                        continue;
	                    }
	                    for (var r = refer.Row; r < refer.Row + refer.RowCount; r++) {
	                        for (var c = refer.Column; c < refer.Column + refer.ColumnCount; c++) {
	                            if (this._plotVisibleOnly) {
	                                var cell = outObj.sheet._GetRange(r, c);
	                                if (!(cell.EntireRow.Hidden || cell.EntireColumn.Hidden)) {
	                                    if (pointIndex === i) {
	                                        outObj.row = r;
	                                        outObj.col = c;
	                                        return;
	                                    }
	                                    i++;
	                                }
	                            } else {
	                                if (pointIndex === i) {
	                                    outObj.row = r;
	                                    outObj.col = c;
	                                    return;
	                                }
	                                i++;
	                            }
	                        }
	                    }
	                }
	            },
	            GetXValueText: function (pointIndex) {
	                var result = this.GetXValuesText(this.PointsCount, keyword_null);
	                if (pointIndex > result.length) {
	                    return "";
	                }
	                return result[pointIndex];
	            },
	            GetCatText: function (pointIndex) {
	                var pointsCount = this.PointsCount;
	                if (ChartUtility.IsOfPieChart(this._innerChartType) && pointIndex === pointsCount - 1) {
	                   
	                    return "";
	                }
	               
	               
	                return this.GetXValueText(pointIndex);
	               
	               
	               
	               
	               
	            },
	            GetPercentageValue: function (pointIndex) {
	                var value = this.Values[pointIndex];
	                var sum = 0;
	                for (var _i = 0, _a = this.Values; _i < _a.length; _i++) {
	                    var item = _a[_i];
	                    if (!isNullOrUndefined(item)) {
	                        sum += Math.abs(item);
	                    }
	                }
	                if (!isNullOrUndefined(value)) {
	                    return value / sum;
	                }
	                return 0;
	            },
	            GetXValuesText: function (expectedCount, format) {
	                if (format === keyword_undefined) {
	                    format = keyword_null;
	                }
	                if (this.IsMultiLevelXValues) {
	                    return this.GetMultiXValuesText(expectedCount, format);
	                }
	                return this.GetSingleXValuesText(expectedCount, format);
	            },
	            GetSingleXValuesText: function (expectedCount, format) {
	                var _this = this;
	                if (format === keyword_undefined) {
	                    format = keyword_null;
	                }
	                var result = [];
	                var styles = keyword_null;
	                if (!isNullOrUndefined(_this._xValuesRefers) && _this._xValuesRefers.length > 0) {
	                    styles = _this.GetStylesFromRefers(_this.XValuesRefers);
	                }
	                var xValues = _this.GetAdjustedOneDimensionXValues(expectedCount);
	                for (var i = 0; i < xValues.length; i++) {
	                    var formatCode = format;
	                    if (xValues[i] === keyword_null) {
	                        result.push("");
	                    } else if (typeof xValues[i] === 'string') {
	                        result.push(xValues[i]);
	                    } else {
	                        if (!formatCode && !isNullOrUndefined(styles) && styles.length > 0 && i < styles.length && styles[i] !== keyword_null) {
	                            formatCode = styles[i].FormatCode;
	                        }
	                        if (!formatCode) {
	                            result.push(xValues[i].toString());
	                        } else {
	                            var text = new GeneralFormatter(formatCode).format(xValues[i]);
	                            result.push(text);
	                        }
	                    }
	                }
	                return result;
	            },
	            GetMultiXValuesText: function (expectedCount, format, level) {
	                var _this = this;
	                if (format === keyword_undefined) {
	                    format = keyword_null;
	                }
	                if (level === keyword_undefined) {
	                    level = keyword_null;
	                }
	                var result = [];
	                var styleMatrixs = ChartUtility.GetStylesFromCellRefer(_this.Worksheet, _this.XValuesRefers[0], _this.PlotVisibleOnly);
	                var xValues = _this.GetAdjustedOneDimensionXValues(expectedCount);
	                for (var i = 0; i < xValues.length; i++) {
	                    var oneText = "";
	                    var text, formatCode, style, oneValue;
	                    if (xValues[i] instanceof Array) {
	                        var multiValues = xValues[i];
	                        if (_this._serCollection.RowCol === 1 ) {
	                            for (var col = 0; col < multiValues.length; col++) {
	                                if (!isNullOrUndefined(level) && level !== col) {
	                                    continue;
	                                }
	                                if (oneText) {
	                                    oneText += " ";
	                                }
	                                oneValue = multiValues[col];
	                                if (typeof oneValue === 'string') {
	                                    oneText += oneValue.toString();
	                                } else {
	                                    formatCode = format;
	                                    style = styleMatrixs.GetValue(i, col);
	                                    if (!isNullOrUndefined(style) && !formatCode) {
	                                        formatCode = style.FormatCode;
	                                    }
	                                    if (!formatCode) {
	                                        if (!isNullOrUndefined(oneValue)) {
	                                            oneText += oneValue.toString();
	                                        }
	                                    } else {
	                                        text = (new GeneralFormatter(formatCode).format(oneValue));
	                                        oneText += text;
	                                    }
	                                }
	                            }
	                        } else {
	                            for (var row = 0; row < multiValues.length; row++) {
	                                if (!isNullOrUndefined(level) && level !== row) {
	                                    continue;
	                                }
	                                if (oneText) {
	                                    oneText += " ";
	                                }
	                                oneValue = multiValues[row];
	                                if (typeof oneValue === 'string') {
	                                    oneText += oneValue.toString();
	                                } else {
	                                    formatCode = format;
	                                    style = styleMatrixs.GetValue(row, i);
	                                    if (!isNullOrUndefined(style) && !formatCode) {
	                                        formatCode = style.FormatCode;
	                                    }
	                                    if (!formatCode) {
	                                        if (!isNullOrUndefined(oneValue)) {
	                                            oneText += oneValue.toString();
	                                        }
	                                    } else {
	                                        text = new GeneralFormatter(formatCode).format(oneValue);
	                                        oneText += text;
	                                    }
	                                }
	                            }
	                        }
	                    }
	                    result.push(oneText);
	                }
	                return result;
	            },
	            GetPointValueText: function (index, format) {
	                var _this = this;
	                if (format === keyword_undefined) {
	                    format = keyword_null;
	                }
	                var pointsCount = _this.PointsCount;
	                if (ChartUtility.IsOfPieChart(_this.InnerChartType) && index === pointsCount - 1) {
	                    if (!format) {
	                        return _this.Values[index].toString();
	                    }
	                    return new GeneralFormatter(format).format(this.Values[index]);
	                }
	                if (_this.HasRefers(1 )) {
	                    var outObj = {sheet: keyword_null, row: -1, col: -1};
	                    _this.GetRowColIndex(_this.ValuesRefers, index, outObj);
	                    var sheet = outObj.sheet;
	                    var row = outObj.row, col = outObj.col;
	                    if (!isNullOrUndefined(sheet) && row !== -1 && col !== -1) {
	                        if (!format) {
	                            return sheet._GetCellText(row, col);
	                        }
	                        var cellValue = sheet._GetCellValue(row, col);
	                        return (new GeneralFormatter(format)).format(cellValue);
	                    }
	                } else {
	                    if (!format) {
	                        return this.Values[index].toString();
	                    }
	                    return new GeneralFormatter(format).format(this.Values[index]);
	                }
	                return keyword_null;
	            },
	            FromOOModel: function (t ) {
	                var _this = this;
	                _this._ooSeries = t;
	               
	                if (t.seriesType === 0 ) {
	                    _this.FromCT_BarSer(t );
	                } else if (t.seriesType === 1 ) {
	                    _this.FromCT_AreaSer(t );
	                } else if (t.seriesType === 2 ) {
	                    _this.FromCT_LineSer(t );
	                } else if (t.seriesType === 3 ) {
	                    _this.FromCT_PieSer(t );
	                } else if (t.seriesType === 4 ) {
	                    _this.FromCT_RadarSer(t );
	                } else if (t.seriesType === 5 ) {
	                    _this.FromCT_ScatterSer(t );
	                } else if (t.seriesType === 6 ) {
	                    _this.FromCT_BubbleSer(t );
	                } else if (t.seriesType === 7 ) {
	                    _this.FromCT_SurfaceSer(t );
	                } else if (t.layoutId === 16 ) {
	                    _this.FromCT_BoxWhisker(t );
	                } else if (t.layoutId === 17 ) {
	                    _this.FromCT_Funnel(t );
	                } else if (t.layoutId === 18 ) {
	                    _this.FromCT_ParetoLine(t );
	                } else if (t.layoutId === 19 ) {
	                    _this.FromCT_RegionMap(t );
	                } else if (t.layoutId === 20 ) {
	                    _this.FromCT_Sunburst(t );
	                } else if (t.layoutId === 21 ) {
	                    _this.FromCT_Treemap(t );
	                } else if (t.layoutId === 22 ) {
	                    _this.FromCT_Waterfall(t );
	                } else if (t.layoutId === 23 ) {
	                    _this.FromCT_ClusteredColumn(t );
	                }
	               
	
	            },
	            ToOOModel: function () {
	                var _this = this;
	                var ser = keyword_null;
	                switch (this._innerChartType) {
	                    case 0 
	                    :
	                        break;
	                    case 12 
	                    :
	                    case 13 
	                    :
	                    case 14 
	                    :
	                    case 15 
	                    :
	                    case 16 
	                    :
	                    case 17 
	                    :
	                    case 6 
	                    :
	                    case 18 
	                    :
	                    case 19 
	                    :
	                    case 20 
	                    :
	                    case 21 
	                    :
	                    case 22 
	                    :
	                    case 23 
	                    :
	                        ser = _this.ToCT_BarSer();
	                        break;
	                    case 9 
	                    :
	                    case 24 
	                    :
	                    case 25 
	                    :
	                    case 26 
	                    :
	                    case 27 
	                    :
	                    case 28 
	                    :
	                    case 5 
	                    :
	                        ser = _this.ToCT_LineSer();
	                        break;
	                    case 10 
	                    :
	                    case 29 
	                    :
	                    case 32 
	                    :
	                    case 30 
	                    :
	                    case 31 
	                    :
	                    case 4 
	                    :
	                        ser = _this.ToCT_PieSer();
	                        break;
	                    case 1 
	                    :
	                    case 33 
	                    :
	                    case 34 
	                    :
	                    case 35 
	                    :
	                    case 36 
	                    :
	                        ser = _this.ToCT_ScatterSer();
	                        break;
	                    case 8 
	                    :
	                    case 37 
	                    :
	                    case 38 
	                    :
	                    case 39 
	                    :
	                    case 40 
	                    :
	                    case 7 
	                    :
	                        ser = _this.ToCT_AreaSer();
	                        break;
	                    case 3 
	                    :
	                    case 41 
	                    :
	                        ser = _this.ToCT_PieSer();
	                        break;
	                    case 2 
	                    :
	                    case 42 
	                    :
	                    case 43 
	                    :
	                        ser = _this.ToCT_RadarSer();
	                        break;
	                    case 44 
	                    :
	                    case 45 
	                    :
	                    case 46 
	                    :
	                    case 47 
	                    :
	                        ser = _this.ToCT_SurfaceSer();
	                        break;
	                    case 11 
	                    :
	                    case 48 
	                    :
	                        ser = _this.ToCT_BubbleSer();
	                        break;
	                    case 49 
	                    :
	                        break;
	                    case 50 
	                    :
	                        break;
	                    case 51 
	                    :
	                        break;
	                    case 52 
	                    :
	                        break;
	                    case 53 
	                    :
	                        ser = _this.ToCT_BoxWhisker();
	                        break;
	                    case 54 
	                    :
	                        ser = _this.ToCT_Funnel();
	                        break;
	                    case 55 
	                    :
	                        ser = _this.ToCT_ParetoLine();
	                        break;
	                    case 56 
	                    :
	                        ser = _this.ToCT_RegionMap();
	                        break;
	                    case 57 
	                    :
	                        ser = _this.ToCT_Sunburst();
	                        break;
	                    case 58 
	                    :
	                        ser = _this.ToCT_Treemap();
	                        break;
	                    case 59 
	                    :
	                        ser = _this.ToCT_Waterfall();
	                        break;
	                    case 60 
	                    :
	                        ser = _this.ToCT_ClusteredColumn();
	                        break;
	                    default:
	                        break;
	                }
	                if (ser) {
	                    ChartUtility.removeEmptyArrayProperties(ser);
	                }
	                return ser;
	            },
	            ToCT_BarSer: function () {
	                var _this = this;
	                var ooSeries = _this._ooSeries;
	                var ooModel = ooSeries && ooSeries.seriesType === 0  ? ooSeries  : {
	                    seriesType: 0 
	                } ;
	                _this.ToCT_CatValSerBase(ooModel);
	                ooModel.shape = _this.BarShape;
	                ooModel.invertIfNegative = _this.InvertIfNegative;
	                ooModel.dPt = _this.ToDataPoints();
	                if (_this.IsPictureFill()) {
	                    ooModel.pictureOptions = _this.ToCT_PictureOptions();
	                } else {
	                    delete ooModel.pictureOptions;
	                }
	                return ooModel;
	            },
	            FromCT_BarSer: function (ooSer ) {
	                var _this = this;
	                _this.FromCT_CatValSerBase(ooSer);
	                if (!isNullOrUndefined(ooSer.shape)) {
	                    _this.BarShape = ooSer.shape;
	                }
	                if (!isNullOrUndefined(ooSer.invertIfNegative)) {
	                    _this.InvertIfNegative = ooSer.invertIfNegative;
	                }
	                _this._points.RestorePoints(ooSer.dPt);
	                _this.FromCT_PictureOptions(ooSer.pictureOptions);
	            },
	            ToCT_LineSer: function () {
	                var _this = this;
	                var ooModel = _this._ooSeries && _this._ooSeries.seriesType === 2  ? _this._ooSeries  : {
	                    seriesType: 2 ,
	                    dPt: [],
	                    trendline: [],
	                    errBars: []
	                } ;
	                _this.ToCT_CatValSerBase(ooModel);
	                ooModel.smooth = _this.Smooth;
	                ooModel.marker = _this.ToCT_Marker();
	                ooModel.dPt = _this.ToDataPoints();
	                return ooModel;
	            },
	            FromCT_LineSer: function (ooSer ) {
	                var _this = this;
	                _this.FromCT_CatValSerBase(ooSer);
	                if (!isNullOrUndefined(ooSer.smooth)) {
	                    _this.Smooth = ooSer.smooth;
	                }
	                _this.FromCT_Marker(ooSer.marker);
	                _this._points.RestorePoints(ooSer.dPt);
	            },
	            ToCT_PieSer: function () {
	                var _this = this;
	                var ooModel = _this._ooSeries && _this._ooSeries.seriesType === 3  ? _this._ooSeries  : {
	                    seriesType: 3 ,
	                    dPt: [],
	                    trendline: [],
	                    errBars: []
	                } ;
	                _this.ToCT_CatValSerBase(ooModel);
	                ooModel.explosion = _this.Explosion;
	                ooModel.dPt = _this.ToDataPoints();
	                return ooModel;
	            },
	            FromCT_PieSer: function (ooSer ) {
	                this.FromCT_CatValSerBase(ooSer);
	                if (!isNullOrUndefined(ooSer.explosion)) {
	                    this.Explosion = ooSer.explosion;
	                }
	                this._points.RestorePoints(ooSer.dPt);
	            },
	            ToCT_AreaSer: function () {
	                var _this = this;
	                var ooModel = _this._ooSeries && _this._ooSeries.seriesType === 1  ? _this._ooSeries  : {
	                    seriesType: 1 ,
	                    dPt: [],
	                    trendline: [],
	                    errBars: []
	                } ;
	                _this.ToCT_CatValSerBase(ooModel);
	                ooModel.marker = _this.ToCT_Marker();
	                if (_this.IsPictureFill()) {
	                    ooModel.pictureOptions = _this.ToCT_PictureOptions();
	                } else {
	                    ooModel.pictureOptions = keyword_null;
	                }
	                return ooModel;
	            },
	            FromCT_AreaSer: function (ooSer ) {
	                this.FromCT_CatValSerBase(ooSer);
	                this.FromCT_Marker(ooSer.marker);
	                this.FromCT_PictureOptions(ooSer.pictureOptions);
	            },
	            ToCT_RadarSer: function () {
	                var _this = this;
	                var ooModel = _this._ooSeries && _this._ooSeries.seriesType === 4  ? _this._ooSeries  : {
	                    seriesType: 4 ,
	                    dPt: [],
	                    trendline: [],
	                    errBars: []
	                } ;
	                _this.ToCT_CatValSerBase(ooModel);
	                ooModel.marker = _this.ToCT_Marker();
	                ooModel.dPt = _this.ToDataPoints();
	                return ooModel;
	            },
	            FromCT_RadarSer: function (ooSer ) {
	                this.FromCT_CatValSerBase(ooSer);
	                this.FromCT_Marker(ooSer.marker);
	                this._points.RestorePoints(ooSer.dPt);
	            },
	            ToCT_ScatterSer: function () {
	                var _this = this;
	                var ooModel = _this._ooSeries && _this._ooSeries.seriesType === 5  ? _this._ooSeries  : {
	                    seriesType: 5 ,
	                    dPt: [],
	                    trendline: [],
	                    errBars: []
	                } ;
	                _this.ToCT_XYSerBase(ooModel);
	                ooModel.smooth = _this.Smooth;
	                ooModel.marker = _this.ToCT_Marker();
	                ooModel.dPt = _this.ToDataPoints();
	                return ooModel;
	            },
	            FromCT_ScatterSer: function (ooSer ) {
	                var _this = this;
	               
	                _this.FromCT_XYSerBase(ooSer);
	                if (!isNullOrUndefined(ooSer.smooth)) {
	                    _this.Smooth = ooSer.smooth;
	                }
	                _this.FromCT_Marker(ooSer.marker);
	                _this._points.RestorePoints(ooSer.dPt);
	            },
	            ToCT_BubbleSer: function () {
	                var _this = this;
	                var ooModel = _this._ooSeries && this._ooSeries.seriesType === 5  ? _this._ooSeries  : {
	                    seriesType: 6 ,
	                    dPt: [],
	                    trendline: [],
	                    errBars: []
	                } ;
	                _this.ToCT_XYSerBase(ooModel);
	                ooModel.bubbleSize = _this.BubbleSizesToCT_NumDataSource();
	                ooModel.bubble3D = _this._innerChartType === 48  || _this.Has3DEffect;
	                ooModel.invertIfNegative = _this.InvertIfNegative;
	                ooModel.extLst = _this.ToCT_ExtensionList();
	                ooModel.dPt = _this.ToDataPoints();
	                return ooModel;
	            },
	            FromCT_BubbleSer: function (ooSer ) {
	                var _this = this;
	               
	                _this.FromCT_XYSerBase(ooSer);
	                _this.BubbleFromCT_NumDataSource(ooSer.bubbleSize);
	                if (ooSer.bubble3D) {
	                    _this.Has3DEffect = true;
	                }
	                _this._points.RestorePoints(ooSer.dPt);
	            },
	            ToCT_BoxWhisker: function () {
	                var ooSer = {};
	                this.ToCT_Cat2016ChartValSerBase(ooSer);
	                return ooSer;
	            },
	            FromCT_BoxWhisker: function (ooSer ) {
	                this.FromCT_Cat2016ChartValSerBase(ooSer);
	            },
	            ToCT_Funnel: function () {
	                var ooSer = {};
	                this.ToCT_Cat2016ChartValSerBase(ooSer);
	                return ooSer;
	            },
	            FromCT_Funnel: function (ooSer ) {
	                this.FromCT_Cat2016ChartValSerBase(ooSer);
	            },
	            ToCT_ParetoLine: function () {
	                var ooSer = {};
	                this.ToCT_Cat2016ChartValSerBase(ooSer);
	                return ooSer;
	            },
	            FromCT_ParetoLine: function (ooSer ) {
	                this.FromCT_Cat2016ChartValSerBase(ooSer);
	            },
	            ToCT_RegionMap: function () {
	                var ooSer = {};
	                this.ToCT_Cat2016ChartValSerBase(ooSer);
	                return ooSer;
	            },
	            FromCT_RegionMap: function (ooSer ) {
	                this.FromCT_Cat2016ChartValSerBase(ooSer);
	            },
	            ToCT_Sunburst: function () {
	                var ooSer = {};
	                this.ToCT_Cat2016ChartValSerBase(ooSer);
	                return ooSer;
	            },
	            FromCT_Sunburst: function (ooSer ) {
	                this.FromCT_Cat2016ChartValSerBase(ooSer);
	            },
	            ToCT_Treemap: function () {
	                var ooSer = {};
	                this.ToCT_Cat2016ChartValSerBase(ooSer);
	                return ooSer;
	            },
	            FromCT_Treemap: function (ooSer ) {
	                this.FromCT_Cat2016ChartValSerBase(ooSer);
	            },
	            ToCT_Waterfall: function () {
	                var ooSer = {};
	                this.ToCT_Cat2016ChartValSerBase(ooSer);
	                return ooSer;
	            },
	            FromCT_Waterfall: function (ooSer ) {
	                this.FromCT_Cat2016ChartValSerBase(ooSer);
	            },
	            ToCT_ClusteredColumn: function () {
	                var ooSer = {};
	                this.ToCT_Cat2016ChartValSerBase(ooSer);
	                return ooSer;
	            },
	            FromCT_ClusteredColumn: function (ooSer ) {
	                this.FromCT_Cat2016ChartValSerBase(ooSer);
	            },
	            ToCT_Cat2016ChartValSerBase: function (ctSer ) {
	                var _this = this;
	                if (_this._idx !== -1) {
	                    ctSer.dataId = {
	                        val: _this._idx
	                    };
	                }
	                ctSer.uniqueId = _this._uniqueId;
	                ctSer.formatIdx = _this._formatIdx;
	                ctSer.layoutId = ChartUtility.Get2016InnerChartTypeByChartType(_this.ChartType);
	                if (!isNullOrUndefined(_this._hidden)) {
	                    ctSer.hidden = _this._hidden;
	                }
	                if (!isNullOrUndefined(_this._ownerIdx)) {
	                    ctSer.ownerIdx = _this._ownerIdx;
	                }
	                ctSer.tx = _this.ToCT_Text();
	                ctSer.formulaObj = _this.ToCT_2016ChartFormulaObj();
	                ctSer.axisId = _this.ToST_AxisId();
	
	                ctSer.valueColors = _this.ToCT_ValueColors();
	                ctSer.valueColorPositions = _this.ToCT_ValueColorPositions();
	                ctSer.dataPt = _this._dataPoints ? _this._dataPoints.ToOOModel() : keyword_null;
	                ctSer.layoutPr = _this.ToCT_SeriesLayoutProperties();
	
	                ctSer.spPr = _this.ToShapeProperties();
	                ctSer.dataLabels = _this.ToCT_DLbls();
	                ctSer.trendline = _this.ToCT_Trendlines();
	                if (!isNullOrUndefined(_this._extLst) && _this._extLst.length > 0) {
	                    ctSer.extLst = {
	                        ext: _this._extLst
	                    };
	                }
	                if (!isNullOrUndefined(_this._layoutId)) {
	                    ctSer.layoutId = _this._layoutId;
	                }
	            },
	            FromCT_Cat2016ChartValSerBase: function (ctSer ) {
	                var _this = this;
	                if (!isNullOrUndefined(ctSer.dataId)) {
	                    _this._idx = ctSer.dataId.val;
	                } else {
	                    _this._idx = -1;
	                }
	                _this._plotOrder = -1;
	
	                _this._uniqueId = ctSer.uniqueId;
	                _this._formatIdx = ctSer.formatIdx;
	                if (!isNullOrUndefined(ctSer.hidden)) {
	                    _this._hidden = ctSer.hidden;
	                }
	                if (!isNullOrUndefined(ctSer.ownerIdx)) {
	                    _this._ownerIdx = ctSer.ownerIdx;
	                }
	                _this.FromCT_Text(ctSer.tx);
	                _this.FromCT_2016ChartFormulaObj(ctSer.formulaObj);
	                _this.FromST_AxisId(ctSer.axisId);
	
	                if (!isNullOrUndefined(ctSer.valueColors)) {
	                    _this.FromCT_ValueColors(ctSer.valueColors);
	                }
	                if (!isNullOrUndefined(ctSer.valueColorPositions)) {
	                    _this.FromCT_ValueColorPositions(ctSer.valueColorPositions);
	                }
	                if (!isNullOrUndefined(ctSer.defaultColors)) {
	                    _this.defaultColors = ctSer.defaultColors;
	                }
	                if (!isNullOrUndefined(ctSer.dataPt) && !isNullOrUndefined(_this._dataPoints)) {
	                    var colors = this.GetSunburstSeriesColor();
	                    _this._dataPoints._sunburstSeriesColor = colors;
	                    var count = this._chartData2016ModelCalHelper._treeData.length;
	                    for (var index = 0; index < count; index++) {
	                        var dataPoints = _this._dataPoints;
	                        var targetDataPoint = dataPoints._get(index);
	                        if (isNullOrUndefined(targetDataPoint)) {
	                            dataPoints._setDefaultDataPointByIndex(index);
	                            targetDataPoint = dataPoints._get(index);
	                        }
	                        dataPoints._serDataPointDefaultColor(index, targetDataPoint);
	                    }
	                   
	                    _this._dataPoints.FromOOModel(ctSer.dataPt);
	                }
	                if (!isNullOrUndefined(ctSer.layoutPr)) {
	                    _this.FromCT_SeriesLayoutProperties(ctSer.layoutPr);
	                }
	               
	                _this.FromShapeProperties(ctSer.spPr);
	                _this.FromCT_DLbls(ctSer.dataLabels);
	                _this.FromCT_Trendlines(ctSer.trendline);
	                if (!isNullOrUndefined(ctSer.extLst) && !isNullOrUndefined(ctSer.extLst.ext) && ctSer.extLst.ext.length > 0) {
	                    _this._extLst = ctSer.extLst.ext;
	                }
	                if (!isNullOrUndefined(ctSer.layoutId)) {
	                    _this._layoutId = ctSer.layoutId;
	                }
	
	            },
	            ToCT_CatValSerBase: function (ctSer ) {
	                var _this = this;
	                ctSer.idx = _this._idx !== -1 ? _this._idx : _this.SourceIndex;
	                if (_this._plotOrder === -1) {
	                    ctSer.order = _this.SourceIndex;
	                } else {
	                    ctSer.order = _this._plotOrder - 1;
	                }
	                ctSer.tx = _this.ToCT_SerTx();
	                ctSer.spPr = _this.ToShapeProperties();
	                ctSer.cat = _this.XValuesToCT_AxDataSource();
	                ctSer.val = _this.ValuesToCT_NumDataSource();
	                ctSer.dLbls = _this.ToCT_DLbls();
	                ctSer.trendline = _this.ToCT_Trendlines();
	                ctSer.extLst = _this.ToCT_ExtensionList();
	            },
	            FromCT_CatValSerBase: function (ctSer ) {
	                var _this = this;
	                if (!isNullOrUndefined(ctSer.idx)) {
	                    _this._idx = ctSer.idx;
	                } else {
	                    _this._idx = -1;
	                }
	                if (!isNullOrUndefined(ctSer.order)) {
	                    _this._plotOrder = ctSer.order + 1;
	                } else {
	                    _this._plotOrder = -1;
	                }
	                _this.FromCT_SerTx(ctSer.tx);
	                _this.FromShapeProperties(ctSer.spPr);
	                _this.FromCT_AxDataSource(ctSer.cat);
	                _this.FromCT_NumDataSource(ctSer.val);
	                _this.FromCT_DLbls(ctSer.dLbls);
	                _this.FromCT_Trendlines(ctSer.trendline);
	                _this.FromCT_ExtensionList(ctSer.extLst);
	            },
	            ToST_AxisId: function () {
	                var _this = this;
	                var axisId = _this._axisId, axisIDArray = [];
	                if (!isNullOrUndefined(axisId) && axisId.length > 0) {
	                    for (var i = 0; i < axisId.length; i++) {
	                        var axisValue = axisId[i];
	                        axisIDArray.push({val: axisValue});
	                    }
	                }
	                return axisIDArray;
	            },
	            FromST_AxisId: function (axisId) {
	                var _this = this;
	                _this._axisId = [];
	                if (!isNullOrUndefined(axisId) && axisId.length > 0) {
	                    for (var i = 0; i < axisId.length; i++) {
	                        var axisItem = axisId[i];
	                        _this._axisId.push(axisItem.val);
	                    }
	                }
	            },
	            ToCT_2016ChartFormulaObj: function () {
	                var _this = this, formulaObj = {};
	                var formulaStr = _this.GetXValuesFormula();
	                if (formulaStr) {
	                    formulaObj.strDim = formulaStr;
	                }
	                var formulaVal = _this.GetValuesFormula();
	                if (formulaVal) {
	                    formulaObj.numDim = formulaVal;
	                }
	                return formulaObj;
	            },
	            FromCT_2016ChartFormulaObj: function (formulaObj) {
	                var _this = this;
	                var formulaStr = formulaObj && formulaObj.strDim;
	                var formulaVal = formulaObj && formulaObj.numDim;
	                if (!IsNullOrEmpty(formulaStr)) {
	                    _this.UpdateXValuesFormula(formulaStr);
	                } else {
	                    _this.SetXValuesInternal(keyword_null);
	                }
	                if (!IsNullOrEmpty(formulaVal)) {
	                    _this.UpdateValuesFormula(formulaVal);
	                } else {
	                    _this.SetValuesInternal(keyword_null);
	                }
	            },
	            ToCT_ValueColors: function () {
	                var _this = this;
	                if (!isNullOrUndefined(_this._valueColors)) {
	                    var colors = _this._valueColors, ctColors = {};
	                    if (!isNullOrUndefined(colors._minColor)) {
	                        ctColors.minColor = colors._minColor;
	                    }
	                    if (!isNullOrUndefined(colors._midColor)) {
	                        ctColors.midColor = colors._midColor;
	                    }
	                    if (!isNullOrUndefined(colors._maxColor)) {
	                        ctColors.maxColor = colors._maxColor;
	                    }
	                    return ctColors;
	                }
	            },
	            FromCT_ValueColors: function (ctColors ) {
	                if (!isNullOrUndefined(ctColors)) {
	                    var colors = {}, _this = this;
	                    if (!isNullOrUndefined(ctColors.minColor)) {
	                        colors._minColor = ctColors.minColor;
	                    }
	                    if (!isNullOrUndefined(ctColors.midColor)) {
	                        colors._midColor = ctColors.midColor;
	                    }
	                    if (!isNullOrUndefined(ctColors.maxColor)) {
	                        colors._maxColor = ctColors.maxColor;
	                    }
	                    _this._valueColors = colors;
	                }
	            },
	            ToCT_ValueColorPositions: function () {
	                var _this = this;
	                if (!isNullOrUndefined(_this._colorPositions)) {
	                    var colorPositions = _this._colorPositions, ctColorPositions = {};
	                    if (!isNullOrUndefined(colorPositions._min)) {
	                        ctColorPositions.min = colorPositions._min;
	                    }
	                    if (!isNullOrUndefined(colorPositions._mid)) {
	                        ctColorPositions.mid = colorPositions._mid;
	                    }
	                    if (!isNullOrUndefined(colorPositions._max)) {
	                        ctColorPositions.max = colorPositions._max;
	                    }
	                    return ctColorPositions;
	                }
	            },
	            FromCT_ValueColorPositions: function (ctColorPositions) {
	                if (!isNullOrUndefined(ctColorPositions)) {
	                    var colorPositions = {}, _this = this;
	                    if (!isNullOrUndefined(ctColorPositions.min)) {
	                        colorPositions._min = ctColorPositions.min;
	                    }
	                    if (!isNullOrUndefined(ctColorPositions.mid)) {
	                        colorPositions._mid = ctColorPositions.mid;
	                    }
	                    if (!isNullOrUndefined(ctColorPositions.max)) {
	                        colorPositions._max = ctColorPositions.max;
	                    }
	                    _this._colorPositions = colorPositions;
	                }
	            },
	            ToCT_SeriesLayoutProperties: function () {
	                var _this = this, layoutProperties = _this._layoutProperties;
	                if (!isNullOrUndefined(layoutProperties)) {
	                    var ctLayoutProperties = {};
	                    if (!isNullOrUndefined(layoutProperties._parentLabelLayout)) {
	                        ctLayoutProperties.parentLabelLayout = {val: layoutProperties._parentLabelLayout};
	                    }
	                    if (!isNullOrUndefined(layoutProperties._regionLabelLayout)) {
	                        ctLayoutProperties.regionLabelLayout = {val: layoutProperties._regionLabelLayout};
	                    }
	                    if (!isNullOrUndefined(layoutProperties._visibility)) {
	                        var visibility = layoutProperties._visibility;
	                        if (!isNullOrUndefined(visibility._connectorLines)) {
	                            ctLayoutProperties.connectorLines = visibility._connectorLines;
	                        }
	                        if (!isNullOrUndefined(visibility._meanLine)) {
	                            ctLayoutProperties.meanLine = visibility._meanLine;
	                        }
	                        if (!isNullOrUndefined(visibility._meanMarker)) {
	                            ctLayoutProperties.meanMarker = visibility._meanMarker;
	                        }
	                        if (!isNullOrUndefined(visibility._nonoutliers)) {
	                            ctLayoutProperties.nonoutliers = visibility._nonoutliers;
	                        }
	                        if (!isNullOrUndefined(visibility._outliers)) {
	                            ctLayoutProperties.outliers = visibility._outliers;
	                        }
	                    }
	                    if (!isNullOrUndefined(layoutProperties._aggregation)) {
	                        ctLayoutProperties.aggregation = layoutProperties._aggregation;
	                    } else if (!isNullOrUndefined(layoutProperties._binning)) {
	                        ctLayoutProperties.binning = _this.ToCT_Binning(layoutProperties._binning);
	                    }
	
	                    if (!isNullOrUndefined(layoutProperties._geography)) {
	                        ctLayoutProperties.geography = _this.ToCT_Geography(layoutProperties._geography);
	                    }
	                    if (!isNullOrUndefined(layoutProperties._statisticsQuartileMethod)) {
	                        ctLayoutProperties.statistics = {quartileMethod: layoutProperties._statisticsQuartileMethod};
	                    }
	                    if (!isNullOrUndefined(layoutProperties._subtotalsIdx) && layoutProperties._subtotalsIdx.length > 0) {
	                        ctLayoutProperties.subtotals = {idx: layoutProperties._subtotalsIdx};
	                    }
	                    if (!isNullOrUndefined(layoutProperties._extLst) && layoutProperties._extLst.length > 0) {
	                        ctLayoutProperties.extLst = {ext: layoutProperties._extLst};
	                    }
	                }
	            },
	            FromCT_SeriesLayoutProperties: function (ctLayoutProperties ) {
	                if (!isNullOrUndefined(ctLayoutProperties)) {
	                    var _this = this, layoutPro = {};
	                    if (!isNullOrUndefined(ctLayoutProperties.parentLabelLayout) && !isNullOrUndefined(ctLayoutProperties.parentLabelLayout.val)) {
	                        layoutPro._parentLabelLayout = ctLayoutProperties.parentLabelLayout.val;
	                    }
	                    if (!isNullOrUndefined(ctLayoutProperties.regionLabelLayout) && !isNullOrUndefined(ctLayoutProperties.regionLabelLayout.val)) {
	                        layoutPro._regionLabelLayout = ctLayoutProperties.regionLabelLayout.val;
	                    }
	                    if (!isNullOrUndefined(ctLayoutProperties.visibility)) {
	                        var visibility = ctLayoutProperties.visibility;
	                        if (!isNullOrUndefined(visibility.connectorLines)) {
	                            layoutPro._connectorLines = visibility.connectorLines;
	                        }
	                        if (!isNullOrUndefined(visibility.meanLine)) {
	                            layoutPro._meanLine = visibility.meanLine;
	                        }
	                        if (!isNullOrUndefined(visibility.meanMarker)) {
	                            layoutPro._meanMarker = visibility.meanMarker;
	                        }
	                        if (!isNullOrUndefined(visibility.nonoutliers)) {
	                            layoutPro._nonoutliers = visibility.nonoutliers;
	                        }
	                        if (!isNullOrUndefined(visibility.outliers)) {
	                            layoutPro._outliers = visibility.outliers;
	                        }
	                    }
	                    if (!isNullOrUndefined(ctLayoutProperties.aggregation)) {
	                        layoutPro._aggregation = ctLayoutProperties.aggregation;
	                    } else if (!isNullOrUndefined(ctLayoutProperties.binning)) {
	                        layoutPro._binning = _this.FromCT_Binning(ctLayoutProperties.binning);
	                    }
	
	                    if (!isNullOrUndefined(ctLayoutProperties.geography)) {
	                        layoutPro._geography = _this.FromCT_Geography(ctLayoutProperties.geography);
	                    }
	                    if (!isNullOrUndefined(ctLayoutProperties.statistics) && !isNullOrUndefined(ctLayoutProperties.statistics.quartileMethod)) {
	                        layoutPro._statisticsQuartileMethod = ctLayoutProperties.statistics.quartileMethod;
	                    }
	                    if (!isNullOrUndefined(ctLayoutProperties.subtotals) && !isNullOrUndefined(ctLayoutProperties.subtotals.idx) && ctLayoutProperties.subtotals.idx.length > 0) {
	                        layoutPro._subtotalsIdx = ctLayoutProperties.subtotals.idx;
	                    }
	                    if (!isNullOrUndefined(ctLayoutProperties.extLst) && !isNullOrUndefined(ctLayoutProperties.extLst.ext) && ctLayoutProperties.extLst.ext.length > 0) {
	                        layoutPro._extLst = ctLayoutProperties.extLst.ext;
	                    }
	                    _this._layoutProperties = layoutPro;
	                }
	            },
	            ToCT_Binning: function () {
	                var binning = this._binning || {}, ctBinning = {};
	                if (!isNullOrUndefined(binning._binSize)) {
	                    ctBinning.binSize = binning._binSize;
	                } else if (!isNullOrUndefined(binning._binCount)) {
	                    ctBinning.binCount = binning._binCount;
	                }
	                if (!isNullOrUndefined(binning._intervalClosed)) {
	                    ctBinning.intervalClosed = binning._intervalClosed;
	                }
	                if (!isNullOrUndefined(binning._underflow)) {
	                    ctBinning.underflow = binning._underflow;
	                }
	                if (!isNullOrUndefined(binning._overflow)) {
	                    ctBinning.overflow = binning._overflow;
	                }
	                return ctBinning;
	            },
	            FromCT_Binning: function (ctBinning ) {
	                var binning = {};
	                if (!isNullOrUndefined(ctBinning.binSize)) {
	                    binning._binSize = ctBinning.binSize;
	                } else if (!isNullOrUndefined(ctBinning.binCount)) {
	                    binning._binCount = ctBinning.binCount;
	                }
	                if (!isNullOrUndefined(ctBinning.intervalClosed)) {
	                    binning._intervalClosed = ctBinning.intervalClosed;
	                }
	                if (!isNullOrUndefined(ctBinning.underflow)) {
	                    binning._underflow = ctBinning.underflow;
	                }
	                if (!isNullOrUndefined(ctBinning.overflow)) {
	                    binning._overflow = ctBinning.overflow;
	                }
	                return binning;
	            },
	
	            ToCT_Geography: function () {
	                var geography = this._geogarphy || {};
	                var ctGeography = {};
	                if (!isNullOrUndefined(geography._geoCache)) {
	                    ctGeography.geoCache = geography._geoCache;
	                }
	                if (!isNullOrUndefined(geography._projectionType) ) {
	                    ctGeography.projectionType = geography._projectionType;
	                }
	                if (!isNullOrUndefined(geography._viewedRegionType) ) {
	                    ctGeography.viewedRegionType = geography._viewedRegionType;
	                }
	                if (!isNullOrUndefined(geography._cultureLanguage)) {
	                    ctGeography.cultureLanguage = geography._cultureLanguage;
	                }
	                if (!isNullOrUndefined(geography._cultureRegion)) {
	                    ctGeography.cultureRegion = geography._cultureRegion;
	                }
	                if (!isNullOrUndefined(geography._attribution)) {
	                    ctGeography.attribution = geography._attribution;
	                }
	                return ctGeography;
	
	            },
	            FromCT_Geography: function (ctGeography ) {
	                var geography = {};
	                if (!isNullOrUndefined(ctGeography.geoCache)) {
	                    geography._geoCache = ctGeography.geoCache;
	                }
	                if (!isNullOrUndefined(ctGeography.projectionType) ) {
	                    geography._projectionType = ctGeography.projectionType;
	                }
	                if (!isNullOrUndefined(ctGeography.viewedRegionType) ) {
	                    geography._viewedRegionType = ctGeography.viewedRegionType;
	                }
	                if (!isNullOrUndefined(ctGeography.cultureLanguage)) {
	                    geography._cultureLanguage = ctGeography.cultureLanguage;
	                }
	                if (!isNullOrUndefined(ctGeography.cultureRegion)) {
	                    geography._cultureRegion = ctGeography.cultureRegion;
	                }
	                if (!isNullOrUndefined(ctGeography.attribution)) {
	                    geography._attribution = ctGeography.attribution;
	                }
	                return geography;
	            },
	
	            ToCT_XYSerBase: function (ctSer ) {
	                var _this = this;
	                ctSer.idx = _this._idx !== -1 ? _this._idx : _this.SourceIndex;
	                ctSer.order = _this.PlotOrder - 1;
	                ctSer.tx = _this.ToCT_SerTx();
	                ctSer.spPr = _this.ToShapeProperties();
	                ctSer.xVal = _this.XValuesToCT_AxDataSource();
	                ctSer.yVal = _this.ValuesToCT_NumDataSource();
	                var dLbls = _this.ToCT_DLbls();
	                if (dLbls) {
	                    ctSer.dLbls = dLbls;
	                }
	                ctSer.trendline = _this.ToCT_Trendlines();
	                ctSer.extLst = _this.ToCT_ExtensionList();
	            },
	            FromCT_XYSerBase: function (ctSer ) {
	                var _this = this;
	                if (!isNullOrUndefined(ctSer.idx)) {
	                    _this._idx = ctSer.idx;
	                } else {
	                    _this._idx = -1;
	                }
	                if (!isNullOrUndefined(ctSer.order)) {
	                    _this._plotOrder = ctSer.order + 1;
	                } else {
	                    _this._plotOrder = -1;
	                }
	                _this.FromCT_SerTx(ctSer.tx);
	                _this.FromShapeProperties(ctSer.spPr);
	                _this.FromCT_NumDataSource(ctSer.yVal);
	                _this.FromCT_AxDataSource(ctSer.xVal);
	                _this.FromCT_DLbls(ctSer.dLbls);
	                _this.FromCT_Trendlines(ctSer.trendline);
	                _this.FromCT_ExtensionList(ctSer.extLst);
	            },
	            ToCT_DLbls: function () {
	                var _this = this;
	                if ((_this.HasDataLabels || _this._points.HasDataLabel) && !isNullOrUndefined(_this._dataLabels)) {
	                    return _this._dataLabels.ToOOModel();
	                }
	                return keyword_null;
	            },
	            ToCT_Trendlines: function () {
	                var lines = [];
	                if (this._trendlines.Count > 0) {
	                    for (var _i = 0, _a = this._trendlines.GetLines(); _i < _a.length; _i++) {
	                        var item = _a[_i];
	                        lines.push(item.ToOOModel());
	                    }
	                }
	                return lines;
	            },
	            FromCT_DLbls: function (dLbls ) {
	                if (!isNullOrUndefined(dLbls)) {
	                    this.HasDataLabels = true;
	                    this._dataLabels.FromOOModel(dLbls);
	                } else {
	                    this.HasDataLabels = false;
	                }
	            },
	            FromCT_Trendlines: function (ooLines) {
	                if (!isNullOrUndefined(ooLines)) {
	                    this._trendlines.RestoreTrendlines(ooLines);
	                } else {
	                    this._trendlines = new Trendlines(this);
	                }
	            },
	            FromCT_AxDataSource: function (axDataSource ) {
	                var _this = this;
	                if (isNullOrUndefined(axDataSource)) {
	                    _this.SetXValuesInternal(keyword_null);
	                    return;
	                }
	                var result = _this.GetAxDataSourceFormulaOrValues(axDataSource);
	                var xValuesFormula = result.formula;
	                var xValues = result.values;
	                if (!IsNullOrEmpty(xValuesFormula)) {
	                    _this.UpdateXValuesFormula(xValuesFormula);
	                } else if (!isNullOrUndefined(xValues)) {
	                    _this.SetXValuesInternal(xValues);
	                } else {
	                    _this.SetXValuesInternal(keyword_null);
	                }
	            },
	            FromCT_NumDataSource: function (numDataSource ) {
	                var _this = this;
	                if (isNullOrUndefined(numDataSource)) {
	                    _this.SetValuesInternal(keyword_null);
	                    return;
	                }
	                var result = _this.GetNumDataSourceFormulaOrValues(numDataSource);
	                var valuesFormula = result.formula;
	                var values = result.values;
	                if (!IsNullOrEmpty(valuesFormula)) {
	                    _this.UpdateValuesFormula(valuesFormula);
	                } else if (!isNullOrUndefined(values)) {
	                    _this.SetValuesInternal(values);
	                } else {
	                    _this.SetValuesInternal(keyword_null);
	                }
	            },
	            BubbleFromCT_NumDataSource: function (numDataSource ) {
	                var _this = this;
	                if (isNullOrUndefined(numDataSource)) {
	                    _this.SetBubbleSizesInternal(keyword_null);
	                    return;
	                }
	                var result = _this.GetNumDataSourceFormulaOrValues(numDataSource);
	                var valuesFormula = result.formula;
	                var values = result.values;
	                if (!IsNullOrEmpty(valuesFormula)) {
	                    _this.UpdateBubbleFormula(valuesFormula);
	                } else if (!isNullOrUndefined(values)) {
	                    _this.SetBubbleSizesInternal(values);
	                } else {
	                    _this.SetBubbleSizesInternal(keyword_null);
	                }
	            },
	            ToCT_SurfaceSer: function () {
	                var ctSer = {
	                    seriesType: 7 
	                } ;
	                this.ToCT_CatValSerBase(ctSer);
	                return ctSer;
	            },
	            FromCT_SurfaceSer: function (ooser ) {
	                this.FromCT_CatValSerBase(ooser);
	            },
	            ToCT_PictureOptions: function () {
	                var picOptions = {} ;
	                picOptions.pictureFormat = this.PictureType;
	                if (this.PictureType === 2 ) {
	                    picOptions.pictureStackUnit = this.PictureUnit;
	                }
	                return picOptions;
	            },
	            FromCT_PictureOptions: function (picOptions ) {
	                var _this = this;
	                if (isNullOrUndefined(picOptions)) {
	                    _this._pictureType = 0 ;
	                    _this.UnDirty(128 );
	                    _this._pictureUnit = 1;
	                    _this.UnDirty(256 );
	                    return;
	                }
	                if (!isNullOrUndefined(picOptions.pictureFormat)) {
	                    _this.PictureType = picOptions.pictureFormat;
	                }
	                if (!isNullOrUndefined(picOptions.pictureStackUnit)) {
	                    _this.PictureUnit = picOptions.pictureStackUnit;
	                }
	            },
	            ToCT_Text: function () {
	                var _this = this;
	                if (IsNullOrEmpty(_this._name) && isNullOrUndefined(_this._nameRefer)) {
	                    return keyword_null;
	                }
	                if (_this._isTextData) {
	                    var txData = {};
	                    if (!isNullOrUndefined(_this._nameRefer)) {
	                        txData.f = {
	                            formula: _this.GetNameFormula()
	                        };
	                    } else if (!isNullOrUndefined(_this._name)) {
	                        txData.v = {
	                            value: _this.Name
	                        };
	                    }
	                    return {txData: txData};
	                } else if (_this._isRichText) {
	                    return _this._chartText.ToOOModel();
	                }
	            },
	            FromCT_Text: function (ooserTx ) {
	                if (isNullOrUndefined(ooserTx)) {
	                    this.SetNameInternal(keyword_null);
	                    return;
	                }
	                var _this = this;
	                var nameF = keyword_null;
	                var name = keyword_null;
	                if (ooserTx.txData) {
	                    var txData = ooserTx.txData;
	                    if (!isNullOrUndefined(txData.f) && !IsNullOrEmpty(txData.f.formula)) {
	                        nameF = txData.f.formula;
	                    } else if (!isNullOrUndefined(txData.v) && !IsNullOrEmpty(txData.v.value)) {
	                        name = txData.v.value;
	                    }
	                    if (!IsNullOrEmpty(nameF)) {
	                        this.UpdateNameFormula(nameF);
	                    } else if (!isNullOrUndefined(name)) {
	                        this.SetNameInternal(name);
	                    }
	                    _this._isTextData = true;
	                } else if (ooserTx.rich) {
	                    _this._chartText = new DrawingText();
	                    _this._chartText.FromOOModel(ooserTx);
	                    this.SetNameInternal(_this._chartText.Text);
	                    _this._isRichText = true;
	                }//TODO need check
	            },
	
	            ToCT_SerTx: function () {
	                var _this = this;
	                if (IsNullOrEmpty(_this._name) && isNullOrUndefined(_this._nameRefer)) {
	                    return keyword_null;
	                }
	                var tx = {} ;
	                if (isNullOrUndefined(_this._nameRefer)) {
	                    tx.v = _this.Name;
	                } else {
	                    tx.strRef = {
	                        
	                        f: _this.GetNameFormula()
	                    };
	                }
	                return tx;
	            },
	            FromCT_SerTx: function (ooserTx ) {
	                if (isNullOrUndefined(ooserTx)) {
	                    this.SetNameInternal(keyword_null);
	                    return;
	                }
	                var nameF = keyword_null;
	                var name = keyword_null;
	                if (!isNullOrUndefined(ooserTx.strRef) && !IsNullOrEmpty(ooserTx.strRef.f)) {
	                    nameF = ooserTx.strRef.f;
	                } else if (!IsNullOrEmpty(ooserTx.v)) {
	                    name = ooserTx.v;
	                }
	                if (!IsNullOrEmpty(nameF)) {
	                    this.UpdateNameFormula(nameF);
	                } else if (!isNullOrUndefined(name)) {
	                    this.SetNameInternal(name);
	                }
	            },
	            ToCT_Marker: function () {
	                var _this = this;
	               
	               
	               
	               
	               
	                var marker = {} ;
	                var dirty = false;
	                if (_this.MarkerStyle !== 11 ) {
	                    marker.symbol = _this.MarkerStyle;
	                    dirty = true;
	                }
	                if (_this.MarkerStyle !== 11  &&
	                    _this.MarkerStyle !== 4 ) {
	                    marker.size = _this.MarkerSize;
	                    dirty = true;
	                }
	                if (!isNullOrUndefined(_this._markerFormat)) {
	                    marker.spPr = _this._markerFormat.ToOOModel();
	                    dirty = true;
	                }
	                if (dirty) {
	                    return marker;
	                }
	                return keyword_null;
	            },
	            FromCT_Marker: function (ooMarker ) {
	                var _this = this;
	                if (isNullOrUndefined(ooMarker)) {
	                    _this.MarkerStyle = 11 ;
	                    _this.ClearMarkerFormat();
	                    return;
	                }
	                if (!isNullOrUndefined(ooMarker.spPr)) {
	                    if (isNullOrUndefined(_this._markerFormat)) {
	                        _this._markerFormat = _this.CreateMarkerFormat();
	                    }
	                    _this._markerFormat.FromOOModel(ooMarker.spPr);
	                } else {
	                    _this.ClearMarkerFormat();
	                }
	                if (!isNullOrUndefined(ooMarker.size)) {
	                    _this.MarkerSize = ooMarker.size;
	                }
	                if (!isNullOrUndefined(ooMarker.symbol)) {
	                    _this.MarkerStyle = ooMarker.symbol;
	                } else {
	                    _this.MarkerStyle = 11 ;
	                }
	            },
	            ClearMarkerFormat: function () {
	                var _this = this;
	                if (!isNullOrUndefined(_this._markerFormat)) {
	                    _this._markerFormat.SetParentForChildren(keyword_null);
	                    _this._markerFormat.ParentStateful = keyword_null;
	                    _this._markerFormat = keyword_null;
	                }
	            },
	            XValuesToCT_AxDataSource: function () {
	                if (this.IsMultiLevelXValues) {
	                    return this.ToMultipleCT_AxDataSource();
	                }
	                return this.ToSingleCT_AxDataSource();
	            },
	            ToSingleCT_AxDataSource: function () {
	                var _this = this;
	                var catSource = {} ;
	                var xValuesFormula = _this.GetXValuesFormula();
	                var strRef;
	                if (isNullOrUndefined(_this._xValues) || _this._xValues.length === 0) {
	                    if (IsNullOrEmpty(xValuesFormula)) {
	                        return keyword_null;
	                    }
	                    strRef = {} ;
	                    strRef.f = xValuesFormula;
	                    catSource.strRef = strRef;
	                    return catSource;
	
	                }
	                var numbers = [];
	                var xValues = _this.XValues;
	                if (ChartUtility.TryAllToNumbers(xValues, numbers)) {
	                    var numData = _this.ToCT_NumberData(xValuesFormula, _this.XValuesRefers, numbers);
	                    if (IsNullOrEmpty(xValuesFormula)) {
	                        catSource.numLit = numData;
	                    } else {
	                        catSource.numRef = {
	                            f: xValuesFormula,
	                            numCache: {
	                                formatCode: numData.formatCode 
	                            }
	                        } ;
	                    }
	                } else {
	                    var strData = _this.ToCT_StrData(xValues);
	                    if (IsNullOrEmpty(xValuesFormula)) {
	                        catSource.strLit = strData;
	                    } else {
	                        catSource.strRef = {
	                            f: xValuesFormula
	                        } ;
	                    }
	                }
	                return catSource;
	            },
	            ToMultipleCT_AxDataSource: function () {
	                var _this = this;
	                if (isNullOrUndefined(_this._xValues) || _this._xValues.length === 0) {
	                    return keyword_null;
	                }
	                var catSource = {} ;
	                var xValuesFormula = _this.GetXValuesFormula();
	                var strData = _this.ToCT_MultiLvlStrData();
	                var strRef = {} ;
	                strRef.multiLvlStrCache = strData;
	                strRef.f = xValuesFormula;
	                catSource.multiLvlStrRef = strRef;
	                return catSource;
	            },
	            GetAxDataSourceFormulaOrValues: function (axDataSource ) {
	                var formula = keyword_null;
	                var values = keyword_null;
	                if (!isNullOrUndefined(axDataSource.numRef) || !isNullOrUndefined(axDataSource.numLit)) {
	                    if (!isNullOrUndefined(axDataSource.numRef) && !IsNullOrEmpty(axDataSource.numRef.f)) {
	                        formula = axDataSource.numRef.f;
	                    } else {
	                        var numData = axDataSource.numLit;
	                        if (!isNullOrUndefined(numData) && !isNullOrUndefined(numData.pt)) {
	                            values = [];
	                            for (var _i = 0, _a = numData.pt; _i < _a.length; _i++) {
	                                var item = _a[_i];
	                                var numObj = {value: keyword_null};
	                                TryToDouble(item, numObj, true);
	                                values.push(numObj.value);
	                            }
	                        }
	                    }
	                } else if (!isNullOrUndefined(axDataSource.strRef) || !isNullOrUndefined(axDataSource.strLit)) {
	                    if (!isNullOrUndefined(axDataSource.strRef) && !IsNullOrEmpty(axDataSource.strRef.f)) {
	                        formula = axDataSource.strRef.f;
	                    } else {
	                        var strData = axDataSource.strLit;
	                        if (!isNullOrUndefined(strData) && !isNullOrUndefined(strData.pt)) {
	                            values = strData.pt.slice();
	                        }
	                    }
	                } else if (!isNullOrUndefined(axDataSource.multiLvlStrRef)) {
	                    formula = axDataSource.multiLvlStrRef.f;
	                }
	                return {
	                    formula: formula,
	                    values: values
	                };
	            },
	            ValuesToCT_NumDataSource: function () {
	                var _this = this;
	                var numDataSource = {} ;
	               
	               
	                var valuesFormula = _this.GetValuesFormula();
	                if (IsNullOrEmpty(valuesFormula) && (isNullOrUndefined(_this._values) || _this._values.length === 0)) {
	                    return keyword_null;
	                }
	                var numData = _this.ToCT_NumberData(valuesFormula, _this.ValuesRefers, _this.Values);
	                if (IsNullOrEmpty(valuesFormula)) {
	                    numDataSource.numLit = numData;
	                } else {
	                    numDataSource.numRef = {
	                        f: valuesFormula,
	                        numCache: {
	                            formatCode: numData.formatCode 
	                        }
	                    } ;
	                }
	               
	                return numDataSource;
	            },
	            GetNumDataSourceFormulaOrValues: function (numDataSource ) {
	                var formula = keyword_null;
	                var values = keyword_null;
	                if (!isNullOrUndefined(numDataSource.numRef) || !isNullOrUndefined(numDataSource.numLit)) {
	                    if (!isNullOrUndefined(numDataSource.numRef) && !IsNullOrEmpty(numDataSource.numRef.f)) {
	                        formula = numDataSource.numRef.f;
	                    } else {
	                        var numData = numDataSource.numLit;
	                        if (!isNullOrUndefined(numData) && !isNullOrUndefined(numData.pt)) {
	                            values = [];
	                            for (var _i = 0, _a = numData.pt; _i < _a.length; _i++) {
	                                var item = _a[_i];
	                                var dObj = {value: keyword_null};
	                                if (TryToDouble(item, dObj, true)) {
	                                    values.push(dObj.value);
	                                } else if (CalcError.parse(item) instanceof CalcError) {   
	                                    values.push(null);
	                                } else {   
	                                    values.push(0);
	                                }
	                            }
	                        }
	                    }
	                }
	                return {
	                    formula: formula,
	                    values: values
	                };
	            },
	            BubbleSizesToCT_NumDataSource: function () {
	                var _this = this;
	                var numDataSource = {} ;
	                var bubbleSizesFormula = _this.GetBubbleSizesFormula();
	                var numData = _this.ToCT_NumberData(bubbleSizesFormula, _this.BubbleSizesRefers, _this.BubbleSizes);
	                if (IsNullOrEmpty(bubbleSizesFormula)) {
	                    numDataSource.numLit = numData;
	                } else {
	                    numDataSource.numRef = {
	                        f: bubbleSizesFormula,
	                        numCache: {
	                            formatCode: numData.formatCode 
	                        }
	                    } ;
	                }
	                return numDataSource;
	            },
	            ToCT_NumberData: function (formula, refers, values) {
	                if (isNullOrUndefined(values) || values.length === 0) {
	                   
	                    if (!IsNullOrEmpty(formula)) {
	                        var errorRefNumData = {} ;
	                        errorRefNumData.formatCode = "General";
	                        errorRefNumData.ptCount = 1;
	                        errorRefNumData.pt = ["1"];
	                       
	                       
	                       
	                       
	                        return errorRefNumData;
	                    }
	                    return keyword_null;
	                }
	                var numData = {} ;
	                var defaultFormatCode = "General";
	                var pt = [], formatCodes = [];
	                numData.formatCode = defaultFormatCode;
	                var count = numData.ptCount = values.length;
	                for (var i = 0; i < count; i++) {
	                    var value;
	                    if (values[i] !== keyword_null && !isNaN(values[i])) {
	                        var d = values[i];
	                        if (UnitHelper.IsNegativeInfinity(d)) {
	                            value = Number.MIN_VALUE.toLocaleString();
	                        } else if (UnitHelper.IsPositiveInfinity(d)) {
	                            value = Number.MAX_VALUE.toLocaleString();
	                        } else {
	                            value = d.toLocaleString();
	                        }
	                    } else {
	                        value = "#N/A";
	                    }
	                    pt.push(value);
	                }
	                if (!isNullOrUndefined(refers) && refers.length > 0) {
	                    var cellRefers = [];
	                    for (var _i = 0, refers_5 = refers; _i < refers_5.length; _i++) {
	                        var item = refers_5[_i];
	                        cellRefers.push(new CellRect(item.Row, item.Column, item.RowCount, item.ColumnCount));
	                    }
	                    var ptIndex = 0;
	                    var styles = this.GetStylesFromRefers(refers);
	                    for (var _a = 0, styles_1 = styles; _a < styles_1.length && ptIndex < count; _a++) {
	                        var style = styles_1[_a];
	                        if (!isNullOrUndefined(style)) {
	                            var formatCode = style.FormatCode;
	                            if (formatCode && formatCode !== defaultFormatCode) {
	                                formatCodes[ptIndex] = formatCode;
	                            }
	                        }
	                        ptIndex++;
	                    }
	                }
	                if (pt.length > 0) {
	                    numData.pt = pt;
	                    if (formatCodes.length > 0) {
	                        if (isAllArrayItemSame(formatCodes)) {
	                           
	                            numData.formatCode = formatCodes[0];
	                        } else {
	                            numData.formatCodes = formatCodes;
	                        }
	                    }
	                }
	                return numData;
	            },
	            ToCT_StrData: function (xValues) {
	               
	               
	               
	               
	               
	               
	               
	               
	               
	                var ptValues = xValues.map(function (val) {
	                    return !isNullOrUndefined(val) && val.toLocaleString ? val.toLocaleString() : val;
	                });
	                return {
	                    ptCount: xValues.length,
	                    pt: ptValues
	                };
	            },
	            ToCT_MultiLvlStrData: function () {
	                var _this = this;
	                var multiStrData = {lvl: []} ;
	                multiStrData.ptCount = _this.PointsCount;
	                var lvlCount = _this._serCollection.RowCol === 1  ? _this._xValuesRefers[0].ColumnCount : _this._xValuesRefers[0].RowCount;
	                for (var lvl = 0; lvl < lvlCount; lvl++) {
	                   
	                    var textValues = _this.GetMultiXValuesText(_this.PointsCount, keyword_null, lvl);
	                   
	                   
	                   
	                   
	                   
	                   
	                    multiStrData.lvl.push({pt: textValues});
	                }
	                return multiStrData;
	            },
	            ToCT_ExtensionList: function () {
	                var _this = this;
	                var extList = {ext: []} ;
	                if (!isNullOrUndefined(_this._invertColor) && _this._invertColor.IsDirtyIncludingParent()) {
	                    extList.ext.push(_this.ToCT_InvertSolidFillFmt());
	                }
	                if (_this.HasDataLabels && !isNullOrUndefined(_this._dataLabels.ChartText.TextRefer)) {
	                    var dataLabelsRangeExt = {uri: "{6F2FDCE9-48DA-4B69-8628-5D25D57E5C99}"} ;
	                    dataLabelsRangeExt.dataObject = {
	                        extDataType: 1 
	                    } ;
	                    dataLabelsRangeExt.dataObject.f = _this._dataLabels.ChartText.Formula;
	                    extList.ext.push(dataLabelsRangeExt);
	                }
	                return extList;
	            },
	            ToCT_InvertSolidFillFmt: function () {
	                var serExt = {uri: "{6F2FDCE9-48DA-4B69-8628-5D25D57E5C99}"} ;
	               
	                var invertColorFmt = {
	                    extDataType: 0 
	                };
	                invertColorFmt.spPr = {};
	                var fill = this._invertColor.ToOOModel();
	                if (fill.colorFillType === 0 ) {
	                    invertColorFmt.spPr.solidFill = fill;
	                    delete fill.colorFillType;
	                } else if (fill.colorFillType === 5 ) {
	                    invertColorFmt.spPr.noFill = true;
	                }
	               
	               
	               
	                invertColorFmt.spPr.ln = {};
	                invertColorFmt.spPr.ln.noFill = true;
	               
	               
	
	               
	                serExt.dataObject = invertColorFmt;
	                return serExt;
	            },
	            FromCT_ExtensionList: function (extLst ) {
	                var _this = this;
	                if (_this.HasDataLabels) {
	                    _this._dataLabels.ShowDataLabelsRange = false;
	                }
	                if (isNullOrUndefined(extLst) || isNullOrUndefined(extLst.ext)) {
	                    return;
	                }
	                for (var _i = 0, _a = extLst.ext; _i < _a.length; _i++) {
	                    var item = _a[_i];
	                    if (item && item.dataObject) {
	                        var extDataType = item.dataObject.extDataType;
	                        if (extDataType === 0 ) {
	                            var ooInvertFill = item.dataObject ;
	                            if (!isNullOrUndefined(ooInvertFill.spPr)) {
	                                _this._invertColor.FromOOModel(ooInvertFill.spPr.solidFill);
	                            }
	                        } else if (extDataType === 1 ) {
	                            var ooLabelsRange = item.dataObject ;
	                            _this._dataLabels.ChartText.Formula = ooLabelsRange.f;
	                            _this._dataLabels.ShowDataLabelsRange = true;
	                        }
	                    }
	                }
	            },
	            ToDataPoints: function (forceToAll) {
	                if (forceToAll === keyword_undefined) {
	                    forceToAll = false;
	                }
	                var result = [];
	                var pointsObj = this.Points.GetPoints();
	                for (var key in pointsObj) {    
	                    var point = pointsObj[key];
	                    if (forceToAll || this.NeedRenderPoint(point)) {
	                        result.push(point.ToOOModel());
	                    }
	                }
	                return result;
	            },
	            NeedRenderPoint: function (p) {
	                return p.IsDirtyIncludingParent();
	            },
	            GetParentGroup: function () {
	                var chartGroup = this._cachedChartGroup;
	                if (!chartGroup) {
	                    chartGroup = this._cachedChartGroup = this.Chart.FindChartGroup(this._innerChartType, this._axisGroup);
	                }
	                return chartGroup;
	            }
	        });
	        return Series;
	    }(StatefulChartElementBase));
	    Charts.Series = Series;
	    Charts.ReferType = {
	        Name: 0,
	        Values: 1,
	        XValues: 2,
	        BubbleSzies: 3
	    };
	    var SeriesCollection = (function () {
	       
	        
	        function SeriesCollection(chart) {
	            var _this = this;
	            _this._dataOrientation = keyword_null;
	            _this._series = [];
	            _this._primaryValuesMinMax = {Min: 0, Max: 1};
	            _this._secondaryValuesMinMax = {Min: 0, Max: 1};
	            _this._primaryXValuesMinMax = {Min: 0, Max: 1};
	            _this._secondaryXValuesMinMax = {Min: 0, Max: 1};
	            _this._chart = chart;
	        }
	
	        var prototype = SeriesCollection.prototype;
	       
	        
	        prototype.get = function (index) {
	            if (arguments.length === 0) {
	                return this.GetSers().map(function (seriesItem, itemIndex) {
	                    return getSeriesProperties(seriesItem, itemIndex === 0, false, true);
	                });
	            }
	            var targetSeries = this.Get(index);
	            if (targetSeries) {
	                return getSeriesProperties(targetSeries, index === 0, false, true);
	            }
	            return keyword_null;
	        };
	       
	        
	        prototype.set = function (index, seriesItem) {
	            var _this = this, targetSeries = _this.Get(index);
	            if (targetSeries && seriesItem) {
	                var changedSeries = getSeriesProperties(targetSeries, index === 0);
	                _this._backup({type: 'set', index: index, series: changedSeries});
	
	                var chartView = _this.ChartView, sheet = chartView.sheet();
	                applySeriesProperties(targetSeries, seriesItem, sheet);
	                _this._chart.HandleElementChanged(4 , _this, ChartConstants.Collection);
	                sheet._updateRegisteredFormula(chartView);
	                chartView._updateChartModel();
	            }
	        };
	       
	        
	        prototype.add = function (seriesItem) {
	            this._addInternal(keyword_null, seriesItem);
	        };
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	        
	        prototype.dataPoints = function () {
	           
	           
	            var series0 = this.Get(0);
	            if (series0 && series0.dataPoints()) {
	                return series0.dataPoints();
	            }
	        };
	        prototype._addInternal = function (index, seriesItem, isUndo) {
	            if (seriesItem) {
	                var _this = this;
	                if (!isUndo && isStockChart(_this._chart.ChartType)) {
	                    throw new Error("Stock chart not support add / remove series.");
	                }
	                var chartView = this.ChartView, sheet = chartView.sheet();
	                var needAddedSeriesItems = seriesItem.length && seriesItem[0] ? seriesItem : [seriesItem];
	                var count = needAddedSeriesItems.length;
	                if (count > 0) {
	                    var seriesLengthBeforeAdd = _this._series.length;
	                    _this._backup({type: 'add', index: seriesLengthBeforeAdd, count: count});
	
	                   
	                    var insertPosition = seriesLengthBeforeAdd;
	                    if (!isNullOrUndefined(index)) {
	                        insertPosition = index;
	                    }
	                    for (var i = 0; i < count; i++) {
	                        var newSeries = new Series(_this);
	                        _this._series.splice(insertPosition, 0, newSeries);
	                        applySeriesProperties(newSeries, needAddedSeriesItems[i], sheet);
	                        insertPosition++;
	                    }
	
	                    _this._chart.HandleElementChanged(4 , _this, ChartConstants.Collection);
	                }
	                sheet._updateRegisteredFormula(chartView);
	                chartView._updateChartModel();
	            }
	        };
	       
	        
	        prototype.remove = function (index) {
	            var _this = this;
	            if (isStockChart(_this._chart.ChartType)) {
	                throw new Error("Stock chart not support add / remove series.");
	            }
	            var targetSeries = _this.Get(index);
	            if (targetSeries) {
	                var changedSeries = getSeriesProperties(targetSeries, index === 0, true);
	                _this._backup({type: 'remove', index: index, series: changedSeries});
	
	                var chartView = _this.ChartView, sheet = chartView.sheet();
	                sheet._updateRegisteredFormula(chartView);
	                targetSeries.Delete();
	                chartView._updateChartModel();
	            }
	        };
	        prototype._deleteCachedSeries = function (seriesIndexes) {
	           
	            if (seriesIndexes && seriesIndexes.length > 0) {
	                seriesIndexes.sort(function (a, b) {
	                    return a - b;
	                });
	               
	               
	               
	                while (seriesIndexes.length) {
	                    var tempIndex = seriesIndexes.pop();
	                    this.Get(tempIndex).Delete();
	                }
	            }
	        };
	        prototype._backupSeriesByFormulaChange = function (cachedSeries) {
	            this._backup({type: 'updateSeriesInCalc', series: cachedSeries});
	        };
	        prototype._backup = function (value) {
	            this.ChartView._backup('series', value);
	        };
	        prototype._restore = function (value) {
	            if (!value || !value.type) {
	                return;
	            }
	            var _this = this;
	            var type = value.type, index = value.index,
	                count = value.count, series = value.series;
	            if (type === 'add') {
	                for (var i = 0; i < count; i++) {
	                    _this.remove(index);
	                }
	            } else if (type === 'remove') {
	                this._addInternal(index, series, true);
	            } else if (type === 'set') {
	                _this.set(index, series);
	            } else if (type === 'updateSeriesInCalc') {
	                _this._series.length = 0;
	                _this._addInternal(0, series, true);
	            }
	           
	           
	           
	        };
	        defineProperty(prototype, "Parent", {
	           
	           
	           
	            get: function () {
	                return this._chart;
	            }
	        });
	        defineProperty(prototype, "ChartView", {
	           
	           
	           
	            get: function () {
	                return this._chart.Parent;
	            }
	        });
	        defineProperty(prototype, "Count", {
	           
	           
	            get: function () {
	                return this.GetValidSers().length;
	            }
	        });
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	        prototype.Add = function (source, rowCol, seriesLabels, categoryLabels, dataLabelsInfo, chartTypes) {
	            this.AddInteral(source, rowCol, seriesLabels, categoryLabels, dataLabelsInfo, chartTypes);
	            var chart = this._chart;
	            if (chart) {
	                var chartView = chart.Parent;
	                if (chartView) {
	                    var sheet = chartView.sheet();
	                    sheet._updateRegisteredFormula(chartView);
	                    chartView._updateChartModel(true);
	                }
	            }
	        };
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	        prototype.Extend = function (source, rowCol, categoryLabels) {
	            var strips = this.Splits(source, rowCol);
	            if (strips.length === 0) {
	                return;
	            }
	            var stripIndex = categoryLabels ? 1 : 0;
	            var extendedCatRect = strips[0];
	            var extendedRect;
	            for (var i = 0, series = this._series, count = series.length; i < count; i++) {
	                var ser = series[i];
	               
	                if (!isNullOrUndefined(ser.ValuesRefers) && ser.ValuesRefers.length > 0 && stripIndex < strips.length) {
	                    var valueRefers = ser.ValuesRefers.slice(0);
	                    extendedRect = strips[stripIndex++];
	                    valueRefers.push(ChartUtility.CreateReference(source.Worksheet.name(), extendedRect.Row, extendedRect.Column, extendedRect.RowCount, extendedRect.ColumnCount));
	                   
	                    ser.UpdateValuesFormula(ChartUtility.ReferencesToFormula(valueRefers));
	                }
	                if (ChartUtility.IsBubbleChart(ser.InnerChartType) &&
	                    (!isNullOrUndefined(ser.BubbleSizesRefers) && ser.BubbleSizesRefers.length > 0 && stripIndex < strips.length)) {
	                    var bubbleSizeRefers = ser.BubbleSizesRefers.slice(0);
	                    extendedRect = strips[stripIndex++];
	                    bubbleSizeRefers.push(ChartUtility.CreateReference(source.Worksheet.name(), extendedRect.Row, extendedRect.Column, extendedRect.RowCount, extendedRect.ColumnCount));
	                    ser.UpdateBubbleFormula(ChartUtility.ReferencesToFormula(bubbleSizeRefers));
	                }
	                if (categoryLabels &&
	                    (!isNullOrUndefined(ser.XValuesRefers) && ser.XValuesRefers.length > 0)) {
	                    var xValueRefers = ser.XValuesRefers.slice(0);
	                    xValueRefers.push(ChartUtility.CreateReference(source.Worksheet.name(), extendedCatRect.Row, extendedCatRect.Column, extendedCatRect.RowCount, extendedCatRect.ColumnCount));
	                   
	                    ser.UpdateXValuesFormula(ChartUtility.ReferencesToFormula(xValueRefers));
	                }
	            }
	        };
	       
	       
	       
	       
	       
	       
	       
	        prototype.Get = function (indexOrName) {
	            return this.Item(indexOrName, keyword_null);
	        };
	       
	       
	       
	       
	        prototype.NewSeries = function () {
	            var _this = this;
	            var ser = new Series(_this);
	            _this._series.push(ser);
	            return ser;
	        };
	        defineProperty(prototype, "PrimaryValuesMinMax", {
	            get: function () {
	                return this._primaryValuesMinMax;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._primaryValuesMinMax) {
	                    _this._primaryValuesMinMax = value;
	                    _this._chart.HandleElementChanged(4 , _this, ChartConstants.PrimaryValuesMinMax);
	                }
	            }
	        });
	        defineProperty(prototype, "SecondaryValuesMinMax", {
	            get: function () {
	                return this._secondaryValuesMinMax;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._secondaryValuesMinMax) {
	                    _this._secondaryValuesMinMax = value;
	                    _this._chart.HandleElementChanged(4 , _this, ChartConstants.SecondaryValuesMinMax);
	                }
	            }
	        });
	        defineProperty(prototype, "PrimaryXValuesMinMax", {
	            get: function () {
	                return this._primaryXValuesMinMax;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._primaryXValuesMinMax) {
	                    _this._primaryXValuesMinMax = value;
	                    _this._chart.HandleElementChanged(4 , _this, ChartConstants.PrimaryXValuesMinMax);
	                }
	            }
	        });
	        defineProperty(prototype, "SecondaryXValuesMinMax", {
	            get: function () {
	                return this._secondaryXValuesMinMax;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._secondaryXValuesMinMax) {
	                    _this._secondaryXValuesMinMax = value;
	                    _this._chart.HandleElementChanged(4 , _this, ChartConstants.SecondaryXValuesMinMax);
	                }
	            }
	        });
	        defineProperty(prototype, "AllSers", {
	            get: function () {
	                return this._series;
	            }
	        });
	        defineProperty(prototype, "RowCol", {
	            get: function () {
	                return !isNullOrUndefined(this._dataOrientation) ? this._dataOrientation : 1 ;
	            }
	        });
	        prototype.IndexOf = function (series) {
	            var ser = series;
	            if (ser.PlotVisibleOnly && ser.IsHidden) {
	                return -1;
	            }
	           
	
	            return this.GetValidSers().indexOf(series);
	        };
	        prototype.IndexOfSource = function (series) {
	            return this._series.indexOf(series);
	        };
	        prototype.AdjustIndex = function (currentIndex, newIndex) {
	            var _this = this;
	            var visibleSers = _this.GetValidSers();
	            if (currentIndex < 0 || currentIndex >= visibleSers.length || newIndex < 0 || newIndex >= visibleSers.length) {
	                return;
	            }
	            var currenSrcIndex = _this.MapToSourceIndex(currentIndex);
	            var newSrcIndex = _this.MapToSourceIndex(newIndex);
	            var series = _this._series;
	            var current = series[currenSrcIndex];
	            var newSer = series[newSrcIndex];
	            series[currenSrcIndex] = newSer;
	            series[newSrcIndex] = current;
	        };
	        prototype.GetSers = function (visibleOnly, axisGroup) {
	            if (visibleOnly === keyword_undefined) {
	                visibleOnly = true;
	            }
	            if (visibleOnly) {
	                return this._series.filter(function (item) {
	                    return !item.IsHidden && (isNullOrUndefined(axisGroup) || item.AxisGroup === axisGroup);
	                });
	            } else if (!isNullOrUndefined(axisGroup)) {
	                return this._series.filter(function (item) {
	                    return item.AxisGroup === axisGroup;
	                });
	            }
	            return this._series;
	        };
	        prototype.GetValidSers = function (axisGroup) {
	            return this.GetSers(this._chart.PlotVisibleOnly, axisGroup);
	        };
	        prototype.DetectRanges2 = function (sheet, row, column, rowCount, columnCount, outObj) {
	            var vertical = this.DetectRanges(sheet, row, column, rowCount, columnCount, outObj);
	            var nameRange;
	            if (ChartUtility.GetDimensioin(this._chart.ChartType) > 1 && isNullOrUndefined(outObj.category) && !isNullOrUndefined(outObj.data)) {
	                var dataRange = outObj.data;
	                if (vertical) {
	                    if (dataRange.ColumnCount > 1) {
	                        outObj.category = new CellRect(dataRange.Row, dataRange.Column, dataRange.RowCount, 1);
	                        outObj.data = new CellRect(dataRange.Row, dataRange.Column + 1, dataRange.RowCount, dataRange.ColumnCount - 1);
	                        if (!isNullOrUndefined(outObj.seriesName)) {
	                            nameRange = outObj.seriesName;
	                            outObj.seriesName = new CellRect(nameRange.Row, nameRange.Column + 1, nameRange.RowCount, nameRange.ColumnCount - 1);
	                        }
	                    }
	                } else {
	                    if (outObj.data.RowCount > 1) {
	                        outObj.category = new CellRect(dataRange.Row, dataRange.Column, 1, dataRange.ColumnCount);
	                        outObj.data = new CellRect(dataRange.Row + 1, dataRange.Column, dataRange.RowCount - 1, dataRange.ColumnCount);
	                        if (!isNullOrUndefined(outObj.seriesName)) {
	                            nameRange = outObj.seriesName;
	                            outObj.seriesName = new CellRect(nameRange.Row + 1, nameRange.Column, dataRange.RowCount - 1, nameRange.ColumnCount);
	                        }
	                    }
	                }
	            }
	            return vertical;
	        };
	        prototype.GenerateSeriesStructures = function (refs, rowCol, seriesLabels, categoryLabels) {
	            var _this = this;
	            var firstSheet = _this._chart.Parent.sheet()._GetSheet(refs[0].WorksheetName);
	            var firstRect = new CellRect(refs[0].Row, refs[0].Column, refs[0].RowCount, refs[0].ColumnCount);
	            var firstSerNameRect = keyword_null, firstCatRect = keyword_null, firstDataRect = keyword_null;
	            var outObj, vertical;
	            if (isNullOrUndefined(rowCol)) {
	                outObj = {seriesName: keyword_null, category: keyword_null, data: keyword_null};
	                vertical = _this.DetectRanges2(firstSheet, firstRect.Row, firstRect.Column, firstRect.RowCount, firstRect.ColumnCount, outObj);
	                firstSerNameRect = outObj.seriesName;
	                firstCatRect = outObj.category;
	                firstDataRect = outObj.data;
	               
	               
	               
	               
	               
	               
	               
	               
	               
	               
	               
	               
	                _this._dataOrientation = vertical ? 1  : 0 ;
	            } else {
	                _this._dataOrientation = rowCol;
	                if (isNullOrUndefined(seriesLabels) && isNullOrUndefined(categoryLabels)) {
	                    outObj = {seriesName: keyword_null, category: keyword_null, data: keyword_null};
	                    vertical = _this.DetectRanges2(firstSheet, firstRect.Row, firstRect.Column, firstRect.RowCount, firstRect.ColumnCount, outObj);
	                    firstSerNameRect = outObj.seriesName;
	                    firstCatRect = outObj.category;
	                    firstDataRect = outObj.data;
	                    var autoOrientation = vertical ? 1  : 0 ;
	                    if (_this._dataOrientation !== autoOrientation) {
	                        var tmp = firstCatRect;
	                        firstCatRect = firstSerNameRect;
	                        firstSerNameRect = tmp;
	                    }
	                }
	            }
	            if (!(isNullOrUndefined(seriesLabels) && isNullOrUndefined(categoryLabels))) {
	                if (_this._dataOrientation === 1 ) {
	                    if (seriesLabels && categoryLabels) {
	                        firstSerNameRect = new CellRect(firstRect.Row, firstRect.Column + 1, 1, firstRect.ColumnCount - 1);
	                        firstCatRect = new CellRect(firstRect.Row + 1, firstRect.Column, firstRect.RowCount - 1, 1);
	                        firstDataRect = new CellRect(firstRect.Row + 1, firstRect.Column + 1, firstRect.RowCount - 1, firstRect.ColumnCount - 1);
	                    } else if (seriesLabels) {
	                        firstSerNameRect = new CellRect(firstRect.Row, firstRect.Column, 1, firstRect.ColumnCount);
	                        firstCatRect = keyword_null;
	                        firstDataRect = new CellRect(firstRect.Row + 1, firstRect.Column, firstRect.RowCount - 1, firstRect.ColumnCount);
	                    } else if (categoryLabels) {
	                        firstSerNameRect = keyword_null;
	                        firstCatRect = new CellRect(firstRect.Row, firstRect.Column, firstRect.RowCount, 1);
	                        firstDataRect = new CellRect(firstRect.Row, firstRect.Column + 1, firstRect.RowCount, firstRect.ColumnCount - 1);
	                    } else {
	                        firstSerNameRect = keyword_null;
	                        firstCatRect = keyword_null;
	                        firstDataRect = new CellRect(firstRect.Row, firstRect.Column, firstRect.RowCount, firstRect.ColumnCount);
	                    }
	                } else {
	                    if (seriesLabels && categoryLabels) {  
	                        firstSerNameRect = new CellRect(firstRect.Row + 1, firstRect.Column, firstRect.RowCount - 1, 1);
	                        firstCatRect = new CellRect(firstRect.Row, firstRect.Column + 1, 1, firstRect.ColumnCount - 1);
	                        firstDataRect = new CellRect(firstRect.Row + 1, firstRect.Column + 1, firstRect.RowCount - 1, firstRect.ColumnCount - 1);
	                    } else if (seriesLabels) {
	                        firstSerNameRect = new CellRect(firstRect.Row, firstRect.Column, firstRect.RowCount, 1);
	                        firstCatRect = keyword_null;
	                        firstDataRect = new CellRect(firstRect.Row, firstRect.Column + 1, firstRect.RowCount, firstRect.ColumnCount - 1);
	                    } else if (categoryLabels) {
	                        firstSerNameRect = keyword_null;
	                        firstCatRect = new CellRect(firstRect.Row, firstRect.Column, 1, firstRect.ColumnCount);
	                        firstDataRect = new CellRect(firstRect.Row + 1, firstRect.Column, firstRect.RowCount - 1, firstRect.ColumnCount);
	                    } else {
	                        firstSerNameRect = keyword_null;
	                        firstCatRect = keyword_null;
	                        firstDataRect = new CellRect(firstRect.Row, firstRect.Column, firstRect.RowCount, firstRect.ColumnCount);
	                    }
	                }
	            }
	            return _this.GenerateSeriesStructures2(refs, _this._dataOrientation, firstSerNameRect, firstCatRect, firstDataRect);
	        };
	        prototype.GenerateSeriesStructures2 = function (refers, rowCol, firstSerNameRect, firstCatRect, firstDataRect) {
	            var result = [];
	            if (isNullOrUndefined(refers) || refers.length === 0) {
	                return result;
	            }
	            var firstSheet = refers[0].WorksheetName;
	            var firstRect = refers[0];
	            var orientation = !isNullOrUndefined(rowCol) ? rowCol : 1 ;
	            var i, rect, series, serNameCount, row, col;
	            if (!isNullOrUndefined(firstDataRect)) {
	                if (orientation === 1 ) {
	                    for (col = firstRect.Column; col < firstRect.Column + firstRect.ColumnCount; col++) {
	                        if (isNullOrUndefined(firstCatRect) || col < firstCatRect.Column || col >= firstCatRect.Column + firstCatRect.ColumnCount) {
	                            series = new SeriesStructure();
	                            if (!isNullOrUndefined(firstSerNameRect)) {
	                                series.Label = ChartUtility.CreateReference(firstSheet, firstSerNameRect.Row, col, firstSerNameRect.RowCount, 1);
	                            }
	                            series.Data.push(ChartUtility.CreateReference(firstSheet, firstDataRect.Row, col, firstDataRect.RowCount, 1));
	                            if (!isNullOrUndefined(firstCatRect)) {
	                                series.Categories.push(ChartUtility.CreateReference(firstSheet, firstCatRect.Row, firstCatRect.Column, firstCatRect.RowCount, firstCatRect.ColumnCount));
	                            }
	                            result.push(series);
	                        }
	                    }
	                } else {
	                    for (row = firstRect.Row; row < firstRect.Row + firstRect.RowCount; row++) {
	                        if (isNullOrUndefined(firstCatRect) || row < firstCatRect.Row || row >= firstCatRect.Row + firstCatRect.RowCount) {
	                            series = new SeriesStructure();
	                            if (!isNullOrUndefined(firstSerNameRect)) {
	                                series.Label = ChartUtility.CreateReference(firstSheet, row, firstSerNameRect.Column, 1, firstSerNameRect.ColumnCount);
	                            }
	                            series.Data.push(ChartUtility.CreateReference(firstSheet, row, firstDataRect.Column, 1, firstDataRect.ColumnCount));
	                            if (!isNullOrUndefined(firstCatRect)) {
	                                series.Categories.push(ChartUtility.CreateReference(firstSheet, firstCatRect.Row, firstCatRect.Column, firstCatRect.RowCount, firstCatRect.ColumnCount));
	                            }
	                            result.push(series);
	                        }
	                    }
	                }
	                if (refers.length > 1) {
	                    var inSameStrip = this.InSameColumnRowStrip(refers);
	                    if (inSameStrip) {
	                        if (this._dataOrientation === 1 ) {
	                            var startCol = firstDataRect.Column;
	                            var colCount = firstDataRect.ColumnCount;
	                            for (col = startCol; col < startCol + colCount; col++) {
	                                if (isNullOrUndefined(firstCatRect) || col !== firstCatRect.Column) {
	                                    series = result[col - startCol];
	                                   
	                                   
	                                   
	                                   
	                                    for (i = 1; i < refers.length; i++) {
	                                        rect = refers[i];
	                                        for (row = rect.Row; row < rect.Row + rect.RowCount; row++) {
	                                            series.Data.push(ChartUtility.CreateReference(firstSheet, row, col, rect.RowCount, 1));
	                                            if (!isNullOrUndefined(firstCatRect)) {
	                                                series.Categories.push(ChartUtility.CreateReference(firstSheet, row, firstCatRect.Column, rect.RowCount, 1));
	                                            }
	                                        }
	                                    }
	                                    result.push(series);
	                                }
	                            }
	                        } else {
	                            var startRow = firstDataRect.Row;
	                            var rowCount = firstDataRect.RowCount;
	                            for (row = startRow; row < startRow + rowCount; row++) {
	                                if (isNullOrUndefined(firstCatRect) || row !== firstCatRect.Row) {
	                                    series = result[row - startRow];
	                                   
	                                   
	                                   
	                                   
	                                    for (i = 1; i < refers.length; i++) {
	                                        rect = refers[i];
	                                        for (col = rect.Column; col < rect.Column + rect.ColumnCount; col++) {
	                                            series.Data.push(ChartUtility.CreateReference(firstSheet, row, col, 1, rect.ColumnCount));
	                                            if (!isNullOrUndefined(firstCatRect)) {
	                                                series.Categories.push(ChartUtility.CreateReference(firstSheet, row, firstCatRect.Column, 1, rect.ColumnCount));
	                                            }
	                                        }
	                                    }
	                                    result.push(series);
	                                }
	                            }
	                        }
	                    } else {
	                        if (orientation === 1 ) {       
	                            for (i = 1; i < refers.length; i++) {
	                                rect = refers[i];
	                                for (col = rect.Column; col < rect.Column + rect.ColumnCount; col++) {
	                                    series = new SeriesStructure();
	                                    serNameCount = firstSerNameRect.RowCount;
	                                    if (!isNullOrUndefined(firstSerNameRect)) {
	                                        series.Label = ChartUtility.CreateReference(firstSheet, rect.Row, col, serNameCount, 1);
	                                    }
	                                    series.Data.push(ChartUtility.CreateReference(firstSheet, rect.Row + serNameCount, col, rect.RowCount - serNameCount, 1));
	                                   
	                                   
	                                   
	                                   
	                                    result.push(series);
	                                }
	                            }
	                        } else {
	                            for (i = 1; i < refers.length; i++) {
	                                rect = refers[i];
	                                for (row = rect.Row; row < rect.Row + rect.RowCount; row++) {
	                                    series = new SeriesStructure();
	                                    serNameCount = firstSerNameRect.ColumnCount;
	                                    if (!isNullOrUndefined(firstSerNameRect)) {
	                                        series.Label = ChartUtility.CreateReference(firstSheet, row, rect.Column, 1, serNameCount);
	                                    }
	                                    series.Data.push(ChartUtility.CreateReference(firstSheet, row, rect.Column + serNameCount, 1, rect.ColumnCount - serNameCount));
	                                   
	                                   
	                                   
	                                   
	                                    result.push(series);
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
	                var item = result_1[_i];
	                item.RowCol = orientation;
	            }
	            return result;
	        };
	        prototype.InSameColumnRowStrip = function (refers) {
	            var start = -1;
	            var end = -1;
	            var i, refer;
	            if (this._dataOrientation === 1 ) {
	                for (i = 0; i < refers.length; i++) {
	                    refer = refers[i];
	                    if (start !== -1 && end !== -1 &&
	                        (refer.Column !== start || refer.LastColumn !== end)) {
	                        return false;
	                    }
	                    start = refer.Column;
	                    end = refer.LastColumn;
	                }
	            } else {
	                for (i = 0; i < refers.length; i++) {
	                    refer = refers[i];
	                    if (start !== -1 && end !== -1 &&
	                        (refer.Row !== start || refer.LastRow !== end)) {
	                        return false;
	                    }
	                    start = refer.Row;
	                    end = refer.LastRow;
	                }
	            }
	            return true;
	        };
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	        prototype.DetectRanges = function (sheet, row, column, rowCount, columnCount, outObj) {
	            var _this = this;
	            var svRowCount = sheet.getRowCount();
	            var svColumnCount = sheet.getColumnCount();
	            if ((rowCount < 1 && row !== -1) || (columnCount < 1 && column !== -1)) {
	                throw new Error("Cannot detect an empty cell range.");
	            }
	            var rect = _this.TrimCellRect(sheet, row, column, rowCount, columnCount);
	            row = rect.Row;
	            column = rect.Column;
	            rowCount = rect.RowCount;
	            columnCount = rect.ColumnCount;
	            outObj.category = keyword_null;
	            outObj.seriesName = keyword_null;
	            outObj.data = keyword_null;
	            if (rowCount <= 0 || columnCount <= 0) {
	                return false;
	            }
	            var r1 = new CellRect(row, column, rowCount, columnCount);
	            var r2 = new CellRect(0, 0, svRowCount, svColumnCount);
	            r1.Intersect(r2);
	            row = r1.Row;
	            column = r1.Column;
	            rowCount = r1.RowCount;
	            columnCount = r1.ColumnCount;
	            if (row < 0 || column < 0) {
	                throw new Error("The cell range is invalid.");
	            }
	            if (rowCount === 1 && columnCount === 1) {
	                if (!_this.IsEmptyCell(sheet, row, column)) {
	                    outObj.data = new CellRect(row, column, rowCount, columnCount);
	                }
	                return false;
	            }
	           
	            var i, j;
	            if (_this.IsEmptyCell(sheet, row, column)) {
	                var titleColumn, titleColumnCount;
	                i = column + 1;
	                j = row + 1;
	                while (i < column + columnCount && _this.IsEmptyCell(sheet, row, i)) {
	                    i++;
	                }
	                titleColumn = i;
	                titleColumnCount = column + columnCount - titleColumn;
	                if (titleColumnCount === 0) {
	                    while (j < row + rowCount && _this.IsEmptyCell(sheet, j, column)) {
	                        j++;
	                    }
	                    if (j === row + rowCount) {
	                        if (rowCount > 1) {
	                            if (columnCount > 1) {
	                                outObj.category = new CellRect(row, column + 1, 1, columnCount - 1);
	                                outObj.seriesName = new CellRect(row + 1, column, rowCount - 1, 1);
	                                outObj.data = new CellRect(row + 1, column + 1, rowCount - 1, columnCount - 1);
	                            } else {
	                                outObj.seriesName = new CellRect(row, column, 1, 1);
	                                outObj.data = new CellRect(row + 1, column, rowCount - 1, 1);
	                            }
	                        } else {
	                            outObj.seriesName = new CellRect(row, column, 1, 1);
	                            outObj.data = new CellRect(row, column + 1, rowCount, columnCount - 1);
	                        }
	                    } else {
	                        if (columnCount > 1) {
	                            if (columnCount > 1 && j - row >= 1) {
	                                outObj.category = new CellRect(row, column + 1, j - row, columnCount - 1);
	                            }
	                            if (rowCount > 1 && row + rowCount > j) {
	                                outObj.seriesName = new CellRect(j, column, row + rowCount - j, 1);
	                            }
	                            outObj.data = new CellRect(j, column + 1, row + rowCount - j, columnCount - 1);
	                        } else {
	                           
	                            outObj.seriesName = keyword_null;
	                            if (rowCount > 1 && j > row && j < row + rowCount) {
	                                outObj.category = new CellRect(row, column, j - row, columnCount);
	                            }
	                            if (j < row + rowCount && j > row) {
	                                outObj.data = new CellRect(j, column, row + rowCount - j, columnCount);
	                            } else {
	                                outObj.data = new CellRect(row, column, rowCount, columnCount);
	                            }
	                        }
	                    }
	                } else {
	                    i--;
	                    while (j < row + rowCount && _this.IsEmptyCell(sheet, j, i)) {
	                        j++;
	                    }
	                    if (j === row + rowCount) {
	                        if (rowCount > 1) {
	                            if (columnCount > 1 && j - row >= 1) {
	                                outObj.category = new CellRect(row, titleColumn, 1, titleColumnCount);
	                            }
	                            if (rowCount > 1 && columnCount > titleColumnCount) {
	                                outObj.seriesName = new CellRect(row + 1, column, rowCount - 1, columnCount - titleColumnCount);
	                            }
	                            outObj.data = new CellRect(row + 1, titleColumn, rowCount - 1, titleColumnCount);
	                        } else {
	                            outObj.seriesName = new CellRect(row, column, rowCount, titleColumn - column);
	                            outObj.data = new CellRect(row, titleColumn, rowCount, titleColumnCount);
	                        }
	                    } else {
	                        if (columnCount > 1 && j - row >= 1) {
	                            outObj.category = new CellRect(row, titleColumn, j - row, titleColumnCount);
	                        }
	                        if (rowCount > 1 && row + rowCount > j && columnCount > titleColumnCount) {
	                            outObj.seriesName = new CellRect(j, column, row + rowCount - j, columnCount - titleColumnCount);
	                        }
	                        outObj.data = new CellRect(j, titleColumn, row + rowCount - j, titleColumnCount);
	                    }
	                }
	            } else {
	                var lastColumn = column + columnCount - 1;
	                var lastRow = row + rowCount - 1;
	                if (columnCount > 1 && rowCount > 1) {
	                   
	                    i = lastColumn;
	                    titleColumnCount = 0;
	                    while (i >= column && _this.IsNumericData(sheet._GetCellValue(lastRow, i))) {
	                        titleColumnCount++;
	                        i--;
	                    }
	                    var oneCellData = titleColumnCount === 0;
	                    if (oneCellData) {
	                        titleColumnCount = 1;
	                        i--;
	                    }
	                    var legendRowCount;
	                    if (columnCount > 1) {
	                        titleColumn = i + 1;
	                        i = lastRow - 1;
	                        legendRowCount = 1;
	                        if (!oneCellData) {
	                            while (i >= row && _this.IsNumericData(sheet._GetCellValue(i, lastColumn))) {
	                                legendRowCount++;
	                                i--;
	                            }
	                        }
	                        if (titleColumnCount > 0 && titleColumn >= column && i + 1 > row) {
	                            outObj.category = new CellRect(row, titleColumn, i + 1 - row, titleColumnCount);
	                        }
	                        if (legendRowCount > 0 && titleColumn > column) {
	                            outObj.seriesName = new CellRect(i + 1, column, legendRowCount, titleColumn - column);
	                        }
	                        outObj.data = new CellRect(i + 1, titleColumn, legendRowCount, titleColumnCount);
	                    }
	                } else if (rowCount > 1) {
	                   
	                   
	                    if (_this.IsNumericData(sheet._GetCellValue(row, column))) {
	                        outObj.data = new CellRect(row, column, rowCount, columnCount);
	                    } else {
	                       
	                       
	                        i = lastRow;
	                        while (i >= row && _this.IsNumericData(sheet._GetCellValue(i, column))) {
	                            i--;
	                           
	                        }
	                        if (i === lastRow && !_this.IsNumericData(sheet._GetCellValue(i, column))) {
	                            i--;
	                        }
	                        outObj.data = new CellRect(i + 1, column, lastRow - i, columnCount);
	                        if (i >= row) {
	                            outObj.seriesName = new CellRect(row, column, i - row + 1, columnCount);
	                        }
	                    }
	                } else {
	                   
	                   
	                    if (_this.IsNumericData(sheet._GetCellValue(row, column))) {
	                        outObj.data = new CellRect(row, column, rowCount, columnCount);
	                    } else {
	                       
	                       
	                        i = lastColumn;
	                        while (i >= column && _this.IsNumericData(sheet._GetCellValue(row, i))) {
	                            i--;
	                           
	                        }
	                        if (i === lastColumn && !_this.IsNumericData(sheet._GetCellValue(row, i))) {
	                            i--;
	                        }
	                        outObj.data = new CellRect(row, i + 1, rowCount, lastColumn - i);
	                        if (i >= column) {
	                            outObj.seriesName = new CellRect(row, column, rowCount, i - column + 1);
	                        }
	                    }
	                }
	            }
	            if (!isNullOrUndefined(outObj.data)
	                && outObj.data.RowCount > outObj.data.ColumnCount
	                && outObj.data.RowCount > 1
	                && (outObj.data.ColumnCount > 1 || (outObj.data.ColumnCount === 1 && (!isNullOrUndefined(outObj.seriesName) || !isNullOrUndefined(outObj.category))))) {
	                var needSwitch = false;
	                if (!isNullOrUndefined(outObj.seriesName)) {
	                    needSwitch = outObj.seriesName.Row === outObj.data.Row;
	                } else if (!isNullOrUndefined(outObj.category)) {
	                    needSwitch = outObj.category.Column === outObj.data.Column;
	                }
	                if (needSwitch) {
	                    var tmp = outObj.category;
	                    outObj.category = outObj.seriesName;
	                    outObj.seriesName = tmp;
	                }
	                return true;
	            } else if (!isNullOrUndefined(outObj.data)) {
	                if (outObj.data.RowCount === 1) {
	                    return false;
	                } else if (outObj.data.ColumnCount === 1) {
	                    return true;
	                }
	            }
	            if (!isNullOrUndefined(outObj.seriesName) && outObj.seriesName.Column === outObj.data.Column) {
	                return true;
	            }
	            if (!isNullOrUndefined(outObj.category) && outObj.category.Row === outObj.data.Row) {
	                return true;
	            }
	            return false;
	        };
	        prototype.TrimCellRect = function (sheet, row, column, rowCount, columnCount) {
	            var setRow = row, setColumn = column, setRowCount = rowCount, setColumnCount = columnCount;
	            var svRowCount = sheet.getRowCount();
	            var svColumnCount = sheet.getColumnCount();
	            if (svRowCount === 0 || svColumnCount === 0) {
	                return;
	            }
	
	            var isEmpty, r, c, endC, endR;
	            if (row === -1 || (row === 0 && rowCount === svRowCount)) {
	                var restoreNegativeColumn = column === -1;
	                if (restoreNegativeColumn) {
	                    column = 0;
	                    columnCount = svColumnCount;
	                }
	                row = 0;
	                rowCount = svRowCount;
	               
	                isEmpty = true;
	                do {
	                    for (c = column, endC = column + columnCount; c < endC; c++) {
	                        if (!this.IsEmptyCell(sheet, row, c)) {
	                            isEmpty = false;
	                            break;
	                        }
	                    }
	                    if (isEmpty) {
	                        row++;
	                        rowCount--;
	                        if (rowCount === 0) {
	                            return new CellRect(setRow, setColumn, setRowCount, setColumnCount);
	                        }
	                    }
	                } while (isEmpty);
	                r = row + rowCount - 1;
	                isEmpty = true;
	                do {
	                    for (c = column, endC = column + columnCount; c < endC; c++) {
	                        if (!this.IsEmptyCell(sheet, r, c)) {
	                            isEmpty = false;
	                            break;
	                        }
	                    }
	                    if (isEmpty) {
	                        rowCount--;
	                        r--;
	                        if (rowCount === 0) {
	                            return new CellRect(setRow, setColumn, setRowCount, setColumnCount);
	                        }
	                    }
	                } while (isEmpty);
	                if (restoreNegativeColumn) {
	                    column = -1;
	                }
	            }
	            if (column === -1 || (column === 0 && columnCount === svColumnCount)) {
	                column = 0;
	                columnCount = svColumnCount;
	               
	                isEmpty = true;
	                do {
	                    for (r = row, endR = row + rowCount; r < endR; r++) {
	                        if (!this.IsEmptyCell(sheet, r, column)) {
	                            isEmpty = false;
	                            break;
	                        }
	                    }
	                    if (isEmpty) {
	                        column++;
	                        columnCount--;
	                        if (columnCount === 0) {
	                            return new CellRect(setRow, setColumn, setRowCount, setColumnCount);
	                        }
	                    }
	                } while (isEmpty);
	                c = column + columnCount - 1;
	                isEmpty = true;
	                do {
	                    for (r = row, endR = row + rowCount; r < endR; r++) {
	                        if (!this.IsEmptyCell(sheet, r, c)) {
	                            isEmpty = false;
	                            break;
	                        }
	                    }
	                    if (isEmpty) {
	                        columnCount--;
	                        c--;
	                        if (columnCount === 0) {
	                            return new CellRect(setRow, setColumn, setRowCount, setColumnCount);
	                        }
	                    }
	                } while (isEmpty);
	            }
	            return new CellRect(row, column, rowCount, columnCount);
	        };
	        prototype.IsNumericData = function (value) {
	            if (value instanceof Date) {
	                return false;
	            }
	            if (isNullOrUndefined(value)) {
	                return true;
	            }
	            if (typeof value === 'number') {
	                return true;
	            }
	            var s = value.toString();
	            if (s.length === 0) {
	                return true;
	            }
	            return !isNaN(value) && isFinite(value);
	        };
	        prototype.IsEmptyCell = function (sheet, r, c) {
	            var value = sheet._GetCellValue(r, c);
	            if (!isNullOrUndefined(value) &&
	                value.toString().length > 0) {
	                return false;
	            }
	            return true;
	        };
	        prototype.UpdateValuesMaxMin = function (axisGroup) {
	            if (axisGroup === 0 ) {
	                this.UpdatePrimaryValuesMaxMin();
	            } else {
	                this.UpdateSecondaryValuesMaxMin();
	            }
	        };
	        prototype.UpdateXValuesMaxMin = function (axisGroup) {
	            if (axisGroup === 0 ) {
	                this.UpdatePrimaryXValuesMaxMin();
	            } else {
	                this.UpdateSecondaryXValuesMaxMin();
	            }
	        };
	        prototype.Item = function (indexOrName, axisGroup) {
	            var visibleSers = this.GetSers(this._chart.PlotVisibleOnly, axisGroup);
	            if (typeof indexOrName === 'number') {
	                if (indexOrName >= 0 && indexOrName < visibleSers.length) {
	                    return visibleSers[indexOrName];
	                }
	            } else if (typeof indexOrName === 'string') {
	                for (var _i = 0, visibleSers_1 = visibleSers; _i < visibleSers_1.length; _i++) {
	                    var item = visibleSers_1[_i];
	                    if (item.Name === name) {
	                        return item;
	                    }
	                }
	            }
	            return keyword_null;
	        };
	        prototype.GetSerieValues = function (axisGroup, fnGetValue) {
	            var self = this;
	            var series = self.GetValidSers(axisGroup);
	            var values = [];
	            series.forEach(function (ser) {
	                var valuesMinMax = fnGetValue(ser);
	                values.push(valuesMinMax.Min);
	                values.push(valuesMinMax.Max);
	            });
	            return values;
	        };
	        prototype.UpdatePrimaryValuesMaxMin = function () {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            var values = this.GetSerieValues(0 , function (series) {
	                return series.ValuesMinMax;
	            });
	            this.PrimaryValuesMinMax = Util.getMinMaxValues(values);
	        };
	        prototype.UpdateSecondaryValuesMaxMin = function () {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            var values = this.GetSerieValues(1 , function (series) {
	                return series.ValuesMinMax;
	            });
	            this.SecondaryValuesMinMax = Util.getMinMaxValues(values);
	        };
	        prototype.UpdatePrimaryXValuesMaxMin = function () {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            var values = this.GetSerieValues(0 , function (series) {
	                return series.XValuesMinMax;
	            });
	            this.PrimaryXValuesMinMax = Util.getMinMaxValues(values);
	        };
	        prototype.UpdateSecondaryXValuesMaxMin = function () {
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            var values = this.GetSerieValues(1 , function (series) {
	                return series.XValuesMinMax;
	            });
	            this.SecondaryXValuesMinMax = Util.getMinMaxValues(values);
	        };
	        prototype.GetMaxPointsCount = function (axisGroup) {
	            var maxCount = 0;
	            var sers = this.GetValidSers(axisGroup);
	            for (var _i = 0, sers_1 = sers; _i < sers_1.length; _i++) {
	                var ser = sers_1[_i], values = ser.Values;
	                if (!isNullOrUndefined(values) && values.length > maxCount) {
	                    maxCount = values.length;
	                }
	            }
	            return maxCount;
	        };
	
	        function _updateDataLabels(series, dataLabelInfo, isNewItem) {
	            if (dataLabelInfo || isNewItem) {
	                series.HasDataLabels = true;
	               
	                if (dataLabelInfo) {
	                    series.DataLabels._copyProperties(dataLabelInfo);
	                }
	            }
	        }
	
	        prototype._applyDataLabelsSetting = function (dataLabelsInfo) {
	            if (dataLabelsInfo) {
	                var series = this._series, count = series.length, oldCount = dataLabelsInfo.count;
	                for (var i = 0; i < count; i++) {
	                    _updateDataLabels(series[i], dataLabelsInfo[i], i >= oldCount);
	                }
	            }
	        };
	        prototype.AddSers = function (structures, dataLabelsInfo, chartTypes) {
	            var _this = this;
	            _this._chart.SuspendElementChanged();
	            var chartType = _this.Parent.ChartType;
	            if (ChartUtility.IsBubbleChart(chartType)) {
	                _this.AddSersForBubble(structures);
	            } else if (chartType === 49  || chartType === 50 ) {
	                if (chartType === 49  && structures.length !== 3) {
	                    throw new Error("To create this stock chart, arrange the data on your sheet in this order: high price, low price, closing price. Use dates or stock names as labels.");
	                }
	                if (chartType === 50  && structures.length !== 4) {
	                    throw new Error("To create this stock chart, arrange the data on your sheet in this order: opening price, high price, low price, closing price. Use dates or stock names as labels.");
	                }
	                _this.AddSersForStock(structures);
	            } else if (chartType === 51  || chartType === 52 ) {
	                if (chartType === 51  && structures.length !== 4) {
	                    throw new Error("To create this stock chart, arrange the data on your sheet in this order: volume traded, high price, low price, closing price. Use dates or stock names as labels.");
	                }
	                if (chartType === 52  && structures.length !== 5) {
	                    throw new Error("To create this stock chart, arrange the data on your sheet in this order: volume traded, opening price, high price, low price, closing price. Use dates or stock names as labels.");
	                }
	                _this.AddSersForVolumeStock(structures);
	            } else if (chartType === 57  || chartType === 58 ) {
	                _this.AddSersForSunburstOrTreeMap(structures, chartType);
	            } else {
	                _this.AddSersDefault(structures, keyword_null, keyword_null, chartTypes);
	            }
	            _this._applyDataLabelsSetting(dataLabelsInfo);
	            _this._chart.ResumeElementChanged(4 , _this, ChartConstants.Collection);
	        };
	        prototype.AddSersDefault = function (structures, serInnerType, axisGroup, chartTypes) {
	            var hasChartTypes = chartTypes && chartTypes.length;
	            var lastChartType = hasChartTypes && chartTypes.slice(-1)[0];
	            for (var i = 0; i < structures.length; i++) {
	                var item = structures[i];
	                var ser = new Series(this, hasChartTypes ? chartTypes[i] || lastChartType : serInnerType, axisGroup);
	                this._series.push(ser);
	                if (!isNullOrUndefined(item.Label)) {
	                    ser.UpdateNameFormula(ChartUtility.ReferencesToFormula([item.Label]));
	                } else {
	                    ser.UpdateNameFormula(keyword_null);
	                }
	                ser.UpdateXValuesFormula(ChartUtility.ReferencesToFormula(item.Categories));
	                ser.UpdateValuesFormula(ChartUtility.ReferencesToFormula(item.Data));
	            }
	        };
	        prototype.AddSersForBubble = function (structures) {
	            for (var i = 0; i < structures.length; i += 2) {
	                var item1 = structures[i];
	                var item2 = structures[i + 1];
	                var ser = new Series(this);
	                this._series.push(ser);
	                if (!isNullOrUndefined(item1.Label)) {
	                    ser.UpdateNameFormula(ChartUtility.ReferencesToFormula([item1.Label]));
	                } else {
	                    ser.UpdateNameFormula(keyword_null);
	                }
	                ser.UpdateXValuesFormula(ChartUtility.ReferencesToFormula(item1.Categories));
	                ser.UpdateValuesFormula(ChartUtility.ReferencesToFormula(item1.Data));
	                if (!isNullOrUndefined(item2)) {
	                    ser.UpdateBubbleFormula(ChartUtility.ReferencesToFormula(item2.Data));
	                }
	            }
	        };
	        prototype.AddSersForStock = function (structures, axisGroup) {
	            if (axisGroup === keyword_undefined) {
	                axisGroup = keyword_null;
	            }
	            for (var i = 0; i < structures.length; i++) {
	                var item = structures[i];
	                var ser = new Series(this, 9 , axisGroup);
	                this._series.push(ser);
	                if (!isNullOrUndefined(item.Label)) {
	                    ser.UpdateNameFormula(ChartUtility.ReferencesToFormula([item.Label]));
	                } else {
	                    ser.UpdateNameFormula(keyword_null);
	                }
	                ser.UpdateXValuesFormula(ChartUtility.ReferencesToFormula(item.Categories));
	                ser.UpdateValuesFormula(ChartUtility.ReferencesToFormula(item.Data));
	            }
	        };
	        prototype.AddSersForVolumeStock = function (structures) {
	            var colSers = structures.filter(function (item, i) {
	                return i === 0;
	            });
	            this.AddSersDefault(colSers, 12 );
	            var lineSers = structures.filter(function (item, i) {
	                return i > 0;
	            });
	            this.AddSersForStock(lineSers, 1 );
	        };
	        prototype.AddSersForSunburstOrTreeMap = function (structures, chartType) {
	            var _this = this, count = structures.length, orientation = _this._dataOrientation,
	                chartView = _this.ChartView, sheet = chartView.sheet();
	            if (count > 0) {
	                var startCategoryRangeInfo = getRangeInfoByFormula(sheet, ChartUtility.ReferencesToFormula(structures[count - 1].Categories));
	                var valueReferences = [], isFinedValues = false;
	                for (var i = 0; i < count; i++) {
	                    var nextCategoryRangeInfo = getRangeInfoByFormula(sheet, ChartUtility.ReferencesToFormula(structures[i].Data));
	                    if (isFinedValues === true || ChartUtility.AreValuesAllNum(sheet, nextCategoryRangeInfo.range)) {
	                        isFinedValues = true;
	                        valueReferences.push(structures[i]);
	                    } else if (isContinuousRange(startCategoryRangeInfo, nextCategoryRangeInfo, !!orientation)) {
	                        if (orientation === 1 ) {
	                            startCategoryRangeInfo.range.colCount++;
	                        } else {
	                            startCategoryRangeInfo.range.rowCount++;
	                        }
	                    }
	                }
	                var categoryRange = startCategoryRangeInfo.range;
	                var categoryRefs = keyword_null;
	                if (!isEmptyObject(categoryRange)) {
	                    categoryRefs = new Reference(sheet.name(), categoryRange.row, categoryRange.col, categoryRange.row + categoryRange.rowCount - 1, categoryRange.col + categoryRange.colCount - 1);
	                    categoryRefs = sheet.parent.options.referenceStyle === 1  ? categoryRefs.ToR1C1Text() : categoryRefs.ToA1Text(0, 0);
	                }
	               
	               
	                for (var j = 0; j < valueReferences.length; j++) {
	                    var valueReferencesItem = valueReferences[j];
	                    var ser = new Series(this, chartType);
	                    this._series.push(ser);
	                    var label = valueReferencesItem.Label;
	                    label = label && [label];
	                    ser.UpdateNameFormula(ChartUtility.ReferencesToFormula(label));
	                    ser.UpdateXValuesFormula(categoryRefs);
	                    ser.UpdateValuesFormula(ChartUtility.ReferencesToFormula(valueReferencesItem.Data));
	                }
	            }
	        };
	        prototype.DeleteSeries = function (ser) {
	            var _this = this;
	           
	           
	           
	            _this.UpdatePlotOrders(ser.PlotOrder);
	            var index = _this._series.indexOf(ser);
	            if (index >= 0) {
	                _this._series.splice(index, 1);
	            }
	            _this._chart.HandleElementChanged(4 , _this, ChartConstants.Collection);
	        };
	        prototype.UpdatePlotOrders = function (removedOrder) {
	            for (var _i = 0, _a = this._series; _i < _a.length; _i++) {
	                var item = _a[_i];
	                item.UpdateOrder(removedOrder);
	            }
	        };
	        prototype.Splits = function (source, rowCol) {
	            var result = [];
	            if (rowCol === 1 ) {
	                for (var col = 0; col < source.ColumnCount; col++) {
	                    result.push(ChartUtility.CreateReference(source.Worksheet.name(), source.Row, col + source.Column, source.RowCount, 1));
	                }
	            } else {
	                for (var row = 0; row < source.RowCount; row++) {
	                    result.push(ChartUtility.CreateReference(source.Worksheet.name(), row + source.Row, source.Column, 1, source.ColumnCount));
	                }
	            }
	            return result;
	        };
	        prototype.MapToSourceIndex = function (index) {
	            if (!this._chart.PlotVisibleOnly || index === -1) {
	                return index;
	            }
	            var vIndex = 0;
	            var series = this._series;
	            for (var i = 0; i < series.length; i++) {
	                if (!series[i].IsHidden) {
	                    if (vIndex === index) {
	                        return i;
	                    }
	                    vIndex++;
	                }
	            }
	            return -1;
	        };
	        prototype.SyncOneDimensionSersXValues = function (axisGroup, xValues) {
	            for (var _i = 0, _a = this._series; _i < _a.length; _i++) {
	                var ser = _a[_i];
	                if (ser.AxisGroup === axisGroup) {
	                    var dimension = ChartUtility.GetDimensioin(ser.InnerChartType);
	                    if (dimension === 1) {
	                        ser.SetXValuesInternal(xValues);
	                    }
	                }
	            }
	        };
	        prototype.SyncOneDimensionSersXValuesFormula = function (causedSeries, xValuesFormula) {
	            for (var _i = 0, _a = this._series; _i < _a.length; _i++) {
	                var ser = _a[_i];
	                if (causedSeries !== ser && ser.AxisGroup === causedSeries.AxisGroup) {
	                    var dimension = ChartUtility.GetDimensioin(ser.InnerChartType);
	                    if (dimension === 1) {
	                       
	                        ser.UpdateXValuesFormula(xValuesFormula);
	                    }
	                }
	            }
	        };
	        prototype.RestoreSeries = function (ooPlotArea ) {
	            var _this = this;
	            _this._chart.SuspendElementChanged();
	            _this._series = [];
	            var primaryAxes = ChartUtility.GetPrimaryAxises(ooPlotArea);
	            var sers = [], serArray;
	            var pieCharts = ChartUtility.GetPieCharts(ooPlotArea);
	            var primPieChart = ChartUtility.GetPrimaryPieChart(pieCharts);
	            var plotVisOnly = _this._chart.PlotVisibleOnly;
	            if (ooPlotArea.chartGroups) {
	                for (var _i = 0, _a = ooPlotArea.chartGroups; _i < _a.length; _i++) {
	                    serArray = _this.RestoreSeriesImp(_a[_i], primPieChart, plotVisOnly, primaryAxes);
	                    for (var i = 0; i < serArray.length; i++) {
	                        sers.push(serArray[i]);
	                    }
	                }
	            } else {
	                sers = _this.Restore2016ChartSeriesImp(ooPlotArea, plotVisOnly);
	            }
	            for (var j = 0; j < sers.length; j++) {
	                _this._series.push(sers[j]);
	            }
	            _this._chart.ResumeElementChanged(4 , _this, ChartConstants.Restore);
	        };
	        prototype.Restore2016ChartSeriesImp = function (ooPlotArea, plotVisOnly) {
	            var _this = this, sers = [], ser, innerChartType;
	            var axisGroup = 0;
	            var firstItem;
	            for (var _f = 0, _g = ooPlotArea.plotAreaRegion.series; _f < _g.length; _f++) {
	                var item2 = _g[_f];
	                item2.defaultColors = this._chart._colors;
	                innerChartType = ChartUtility.GetChartTypeBy2016InnerChartType(item2.layoutId);
	                if (innerChartType === 55) {
	                    axisGroup = 1;
	                } else {
	                    axisGroup = 0;
	                }
	                ser = new Series(_this, innerChartType, axisGroup);
	                ser.PlotVisibleOnly = plotVisOnly;
	                sers.push(ser);
	                if (_f === 0) {
	                    firstItem = item2;
	                } else if (!item2.cat && firstItem && firstItem.cat) {
	                   
	                    item2.cat = firstItem.cat;
	                }
	                ser.FromOOModel(item2);
	            }
	            return sers;
	        };
	        prototype.RestoreSeriesImp = function (chartGroup, primPieChart, plotVisOnly, primaryAxes) {
	            var ser, innerChartType, axisGroup;
	            var chart = chartGroup, chartType = chart.chartType;
	            var _this = this, sers = [];
	            if ([10 , 11 , 12 , 13 ].indexOf(chartType) >= 0) {
	                var pieChart = chart;
	                for (var _b = 0, _c = pieChart.ser; _b < _c.length; _b++) {
	                    var item = _c[_b];
	                    innerChartType = ChartUtility.GetChartTypeByPieChart(pieChart, item);
	                    ser = new Series(_this, innerChartType, pieChart === primPieChart ? 0  : 1 );
	                    ser.PlotVisibleOnly = plotVisOnly;
	                    sers.push(ser);
	                    ser.FromOOModel(item);
	                }
	            } else if (chartType === 0 ) {
	                var stockChart = chart;
	                axisGroup = primaryAxes.indexOf(stockChart.axId[0]) >= 0 ? 0  : 1 ;
	                for (var _d = 0, _e = stockChart.ser; _d < _e.length; _d++) {
	                    var item1 = _e[_d];
	                    ser = new Series(_this, 9 , axisGroup);
	                    ser.PlotVisibleOnly = plotVisOnly;
	                    sers.push(ser);
	                    ser.FromOOModel(item1);
	                }
	            } else {
	                axisGroup = primaryAxes.indexOf(chart.axId[0]) >= 0 ? 0  : 1 ;
	               
	                var firstItem;
	                for (var _f = 0, _g = chart.ser; _f < _g.length; _f++) {
	                    var item2 = _g[_f];
	                    innerChartType = ChartUtility.GetChartTypeByChartBase(chart, item2);
	                    ser = new Series(_this, innerChartType, axisGroup);
	                    ser.PlotVisibleOnly = plotVisOnly;
	                    sers.push(ser);
	                    if (_f === 0) {
	                        firstItem = item2;
	                    } else if (!item2.cat && firstItem && firstItem.cat) {
	                       
	                        item2.cat = firstItem.cat;
	                    }
	                    ser.FromOOModel(item2);
	                }
	            }
	            return sers;
	        };
	        prototype.RefreshSeriesIfNeed = function (changedRects, force) {
	            for (var _i = 0, _a = this._series; _i < _a.length; _i++) {
	                var item = _a[_i];
	                item.RefreshValuesIfNeed(changedRects, force);
	            }
	        };
	        prototype.RefreshSeriesIfNeed2 = function (ranges, style) {   
	            if (ChartUtility.GetDimensioin(this._chart.ChartType) === 1) {
	                var validSers = this.GetValidSers();
	                var firstSer = validSers[0];
	                if (!isNullOrUndefined(firstSer) && !isNullOrUndefined(firstSer.XValuesRefers) && firstSer.XValuesRefers.length > 0) {
	                    firstSer.AreAllXValuesDateTime = ChartUtility.AreValuesDateTime(this.ChartView.sheet(), firstSer.XValuesRefers, firstSer.PlotVisibleOnly);
	                }
	            }
	        };
	        prototype.SetSourceData = function (source, rowCol) {
	            this._series.length = 0;
	            this.AddInteral(source, rowCol, keyword_null, keyword_null);
	        };
	        prototype.AddInteral = function (source, rowCol, seriesLabels, categoryLabels, dataLabelsInfo, chartTypes) {
	            var cellRefers = ChartUtility.RangeToReferences(source);
	            if (cellRefers.length > 0) {
	                var structures = this.GenerateSeriesStructures(cellRefers, rowCol, seriesLabels, categoryLabels);
	                if (ChartUtility.IsStockChart(this.Parent.ChartType) && !ChartUtility.AreValuesDateTime(this.ChartView.sheet(), structures[0].Categories)) {
	                    throw new Error("The xValues of stock chart should be date.");
	                }
	                this.AddSers(structures, dataLabelsInfo, chartTypes);
	            }
	        };
	        return SeriesCollection;
	    }());
	    Charts.SeriesCollection = SeriesCollection;
	
	    module.exports = Charts;
	}());

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Common;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.CalcEngine;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Formatter;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Charts = __webpack_require__(3);
	    var $ = __webpack_require__(6).GC$,
	        $_inherit = $.inherit,
	        COMMON_MODULE = Charts,
	        ChartElementBase = COMMON_MODULE.ChartElementBase,
	        StatefulChartElementBase = COMMON_MODULE.StatefulChartElementBase,
	        ChartConstants = COMMON_MODULE.ChartConstants,
	        ChartUtility = COMMON_MODULE.ChartUtility,
	        defineProperty = ChartUtility.defineProperty,
	        colorFormatToString = ChartUtility.colorFormatToString,
	        getTransparencyFromColorFormat = ChartUtility.getTransparencyFromColorFormat,
	        UnitHelper = COMMON_MODULE.UnitHelper,
	        isNullOrUndefined = UnitHelper.isNullOrUndefined,
	        ColorSchemeIndex = Charts.ColorSchemeIndex,
	        ChartFormat = __webpack_require__(7).ChartFormat,
	        ColorFormat = Charts.ColorFormat,
	        DrawingText = Charts.DrawingText,
	        GeneralFormatter = __webpack_require__(13).GeneralFormatter,
	        IsSunburstOrTreemapChart = ChartUtility.IsSunburstOrTreemapChart;
	    var keyword_null = null, keyword_undefined = void 0;
	
	    Charts.PointStates = {
	        Explosion: 1,
	        Format: 2,
	        Has3DEffect: 4,
	        InvertIfNegative: 8,
	        MarkerFormat: 16,
	        MarkerSize: 32,
	        MarkerStyle: 64,
	        PictureType: 128,
	        PictureUnit: 256
	    };
	    var Point = (function (_super) {
	        $_inherit(Point, _super);
	
	        function Point(series, index) {
	            var _this = _super.call(this, series) || this;
	            _this._ooPoint = keyword_null;
	            _this._series = series;
	            _this._index = index;
	            _this._pictureUnit = 1;
	            _this._markerSize = 5;
	            _this._markerStyle = 4 ;
	            return _this;
	        }
	
	        var Point_prototype = Point.prototype;
	        defineProperty(Point_prototype, "DataLabel", {
	            get: function () {
	                return this._series.DataLabels.Get(this._index);
	            }
	        });
	        defineProperty(Point_prototype, "Explosion", {
	            get: function () {
	                if (!this.GetState(1)) {
	                    return this._series.Explosion;
	                }
	                return this._explosion;
	            },
	            set: function (value) {
	                if (value !== this._explosion && value >= 0 && value <= 400) {
	                    this._explosion = value;
	                    this.Dirty(1);
	                }
	            }
	        });
	        defineProperty(Point_prototype, "Format", {
	            get: function () {
	                return this.ChartFormat;
	            }
	        });
	        Point_prototype.getFillColor = function (needThemeColor, needRGBA, notAddTransprent) {
	            return colorFormatToString(this.Format.Fill, needThemeColor, needRGBA, notAddTransprent);
	        };
	        Point_prototype.getFillColorTransparency = function () {
	            return getTransparencyFromColorFormat(this.Format.Fill);
	        };
	        Point_prototype.getLineColor = function (needThemeColor, needRGBA, notAddTransprent) {
	            return colorFormatToString(this.Format.Line, needThemeColor, needRGBA, notAddTransprent);
	        };
	        Point_prototype.getLineColorTransparency = function () {
	            return getTransparencyFromColorFormat(this.Format.Line);
	        };
	        defineProperty(Point_prototype, "Has3DEffect", {
	            get: function () {
	                if (!this.GetState(4)) {
	                    return this._series.Has3DEffect;
	                }
	                return this._has3DEffect;
	            },
	            set: function (value) {
	                this._has3DEffect = value;
	                this.Dirty(4);
	            }
	        });
	        defineProperty(Point_prototype, "HasDataLabel", {
	            get: function () {
	                return !this._series.DataLabels.Get(this._index).Deleted;
	            },
	            set: function (value) {
	                this._series.DataLabels.Get(this._index).Deleted = !value;
	            }
	        });
	        defineProperty(Point_prototype, "InvertIfNegative", {
	            get: function () {
	                if (!this.GetState(8)) {
	                    return this._series.InvertIfNegative;
	                }
	                return this._invertIfNegative;
	            },
	            set: function (value) {
	                this._invertIfNegative = value;
	                this.Dirty(8);
	            }
	        });
	        defineProperty(Point_prototype, "MarkerFormat", {
	            get: function () {
	                var _this = this;
	                if (isNullOrUndefined(_this._markerFormat)) {
	                    _this._markerFormat = _this.CreateMarkerFormat();
	                }
	                return _this._markerFormat;
	            }
	        });
	        defineProperty(Point_prototype, "MarkerSize", {
	            get: function () {
	                if (!this.GetState(32)) {
	                    return this._series.MarkerSize;
	                }
	                return this._markerSize;
	            },
	            set: function (value) {
	                this._markerSize = value;
	                this.Dirty(32);
	            }
	        });
	        defineProperty(Point_prototype, "MarkerStyle", {
	            get: function () {
	                if (!this.GetState(64)) {
	                    return this._series.MarkerStyle;
	                }
	                return this._markerStyle;
	            },
	            set: function (value) {
	                this._markerStyle = value;
	                this.Dirty(64);
	            }
	        });
	        defineProperty(Point_prototype, "Parent", {
	            get: function () {
	                return this._series;
	            }
	        });
	        defineProperty(Point_prototype, "PictureType", {
	            get: function () {
	                if (!this.GetState(128)) {
	                    return this._series.PictureType;
	                }
	                return this._pictureType;
	            },
	            set: function (value) {
	                this._pictureType = value;
	                this.Dirty(128);
	            }
	        });
	        defineProperty(Point_prototype, "PictureUnit", {
	            get: function () {
	                if (!this.GetState(256)) {
	                    return this._series.PictureUnit;
	                }
	                return this._pictureUnit;
	            },
	            set: function (value) {
	                this._pictureUnit = value;
	                this.Dirty(256);
	            }
	        });
	        defineProperty(Point_prototype, "SecondaryPlot", {
	            get: function () {
	                return this._secondaryPlot;
	            },
	            set: function (value) {
	                if (value !== this._secondaryPlot) {
	                    this._secondaryPlot = value;
	                    this.Chart.HandleElementChanged(5, this, ChartConstants.SecondaryPlot);
	                }
	            }
	        });
	        defineProperty(Point_prototype, "Chart", {
	            get: function () {
	                return this._series.SeriesCollection.Parent;
	            }
	        });
	        defineProperty(Point_prototype, "Index", {
	            get: function () {
	                return this._index;
	            }
	        });
	        Point_prototype.SetFillColor = function (sheet, value) {
	            this.Format.Fill.Color.setColor(sheet, value);
	        };
	        Point_prototype.SetFillColorTransparency = function (value) {
	            this.Format.Fill.Color.Transparency = value;
	        };
	        Point_prototype.SetSecondaryPlotInteral = function (value) {
	            this._secondaryPlot = value;
	        };
	        Point_prototype.GetValueText = function (format) {
	            if (format === keyword_undefined) {
	                format = keyword_null;
	            }
	            return this._series.GetPointValueText(this._index, format);
	        };
	        Point_prototype.GetCatText = function () {
	            return this._series.GetCatText(this._index);
	        };
	        Point_prototype.GetPercentageValue = function () {
	            return this._series.GetPercentageValue(this._index);
	        };
	        Point_prototype.CreateFormat = function () {
	            var _this = this;
	            return new ChartFormat(_this._series.SeriesCollection.Parent, _this._series.FormatInternal, _this.AutoFillColorFormat.bind(_this), _this.AutoLineColorFormat.bind(_this));
	        };
	        Point_prototype.GetDefaultFormat = function () {
	            return _super.prototype.GetDefaultFormat.call(this);
	        };
	        Point_prototype.CreateMarkerFormat = function () {
	            var _this = this;
	            return new ChartFormat(_this.Chart, _this._series.MarkerFormat, _this.AutoMarkerColorFormat.bind(_this), _this.AutoMarkerColorFormat.bind(_this));
	        };
	        Point_prototype.AutoFillColorFormat = function () {
	            if (ChartUtility.IsFillSeries(this._series.InnerChartType)) {
	                return this.GenerateAutoColor();
	            }
	            return keyword_null;
	        };
	        Point_prototype.AutoLineColorFormat = function () {
	            if (ChartUtility.IsLineSeries(this._series.InnerChartType)) {
	                return this.GenerateAutoColor();
	            }
	            return keyword_null;
	        };
	        Point_prototype.AutoMarkerColorFormat = function () {
	            if (ChartUtility.IsMarkerSeries(this._series.InnerChartType)) {
	                return this.GenerateAutoColor();
	            }
	            return keyword_null;
	        };
	        Point_prototype.GenerateAutoColor = function () {
	            var index;
	            if (this.IsRenderVaryColors()) {
	                index = this._index;
	            } else {
	                index = this._series.AutoColorIndex;
	            }
	            var autoPointColor = new ColorFormat(this.Chart);
	            autoPointColor.ObjectThemeColor = ColorSchemeIndex["Accent" + (index % 6 + 1)];
	            return autoPointColor;
	        };
	        Point_prototype.IsRenderVaryColors = function () {
	            var varyByCategory = this._series.Parent.VaryByCategories;
	            return (this._series.SeriesCollection.Count === 1 && varyByCategory) ||
	                (ChartUtility.IsAnyPieChart(this._series.InnerChartType) && varyByCategory);
	        };
	        Point_prototype.IsDirtyIncludingParent = function (includingParent) {
	            if (includingParent === keyword_undefined) {
	                includingParent = false;
	            }
	            var _this = this;
	            if (!isNullOrUndefined(_this._format) && _this._format.IsDirtyIncludingParent(includingParent)) {
	                return true;
	            }
	            if (!isNullOrUndefined(_this._markerFormat) && _this._markerFormat.IsDirtyIncludingParent(includingParent)) {
	                return true;
	            }
	            return _super.prototype.IsDirtyIncludingParent.call(_this, includingParent);
	        };
	        Point_prototype.OnParentChanged = function (newParent) {
	            var _this = this;
	            _this._series = newParent;
	            if (!isNullOrUndefined(_this._format)) {
	                _this._format.ParentStateful = _this._series.ChartFormat;
	            }
	            if (!isNullOrUndefined(_this._markerFormat)) {
	                _this._markerFormat.ParentStateful = _this._series.MarkerFormat;
	            }
	        };
	        Point_prototype.IsNegative = function () {
	            return this._series.Values[this._index] < 0;
	        };
	        Point_prototype.MapToSourceIndex = function (index) {
	            var _this = this;
	            if (!_this._series.PlotVisibleOnly || !_this._series.HasRefers(1 ) || !_this._series.HasHiddenValues()) {
	                return index;
	            }
	            var srcIndex = 0;
	            var visibleIndex = 0;
	            for (var _i = 0, _a = _this._series.ValuesRefers; _i < _a.length; _i++) {
	                var rect = _a[_i];
	                var sheet = _this._series.Worksheet._GetSheet(rect.WorksheetName);
	                if (rect.RowCount === 1) {
	                    for (var c = rect.Column; c < rect.Column + rect.ColumnCount; c++) {
	                        if (!sheet._GetRange(rect.Row, c).EntireColumn.Hidden) {
	                            if (visibleIndex === index) {
	                                return srcIndex;
	                            }
	                            visibleIndex++;
	                        }
	                        srcIndex++;
	                    }
	                } else if (rect.ColumnCount === 1) {
	                    for (var r = rect.Row; r < rect.Row + rect.RowCount; r++) {
	                        if (!sheet._GetRange(r, rect.Column).EntireRow.Hidden) {
	                            if (visibleIndex === index) {
	                                return srcIndex;
	                            }
	                            visibleIndex++;
	                        }
	                        srcIndex++;
	                    }
	                }
	            }
	            return index;
	        };
	        Point_prototype.FromOOModel = function (ooPoint ) {
	            var _this = this;
	            _this._ooPoint = ooPoint;
	            _this._index = ooPoint.idx;
	            var bubble3D = ooPoint.bubble3D;
	            if (!isNullOrUndefined(bubble3D)) {
	                _this.Has3DEffect = bubble3D;
	            }
	            var pictureOptions = ooPoint.pictureOptions;
	            if (!isNullOrUndefined(pictureOptions)) {
	                _this.FromCT_PictureOptions(pictureOptions);
	            }
	            var explosion = ooPoint.explosion;
	            if (!isNullOrUndefined(explosion)) {
	                _this.Explosion = explosion;
	            }
	            var invertIfNegative = ooPoint.invertIfNegative;
	            if (!isNullOrUndefined(invertIfNegative)) {
	                _this.InvertIfNegative = invertIfNegative;
	            }
	            _super.prototype.FromShapeProperties.call(_this, ooPoint.spPr);
	            var marker = ooPoint.marker;
	            if (!isNullOrUndefined(marker)) {
	                _this.FromCT_Marker(marker);
	            }
	        };
	        Point_prototype.ToOOModel = function () {
	            var _this = this;
	            var dpt = !isNullOrUndefined(_this._ooPoint) ? _this._ooPoint : {} ;
	            dpt.idx = _this._index;
	            if (_this.GetState(4)) {
	                dpt.bubble3D = _this.Has3DEffect;
	            }
	            dpt.pictureOptions = _this.ToCT_PictureOptions();
	            if (ChartUtility.IsPieOrDoughnutChart(_this._series.InnerChartType) && _this.GetState(1)) {
	                dpt.explosion = _this.Explosion;
	            }
	            dpt.invertIfNegative = _this.InvertIfNegative;
	            dpt.spPr = _super.prototype.ToShapeProperties.call(_this);
	            dpt.marker = _this.ToCT_Marker();
	            return dpt;
	        };
	        Point_prototype.ToCT_PictureOptions = function () {
	            var _this = this;
	            var picOptions = {} ;
	            var dirty = false;
	            if (_this.GetState(128)) {
	                picOptions.pictureFormat = _this.PictureType;
	                dirty = true;
	            }
	            if (_this.GetState(256)) {
	                picOptions.pictureStackUnit = _this.PictureUnit;
	                dirty = true;
	            }
	            return dirty ? picOptions : keyword_null;
	        };
	        Point_prototype.FromCT_PictureOptions = function (ooModel ) {
	            var pictureFormat = ooModel.pictureFormat;
	            if (!isNullOrUndefined(pictureFormat)) {
	                this.PictureType = pictureFormat;
	            }
	            var pictureStackUnit = ooModel.pictureStackUnit;
	            if (!isNullOrUndefined(pictureStackUnit)) {
	                this.PictureUnit = pictureStackUnit;
	            }
	        };
	        Point_prototype.ToCT_Marker = function () {
	            var _this = this;
	            var marker = {} ;
	            var dirty = false;
	            if ((!isNullOrUndefined(_this._markerFormat) && _this._markerFormat.IsDirtyIncludingParent()) || _this.IsRenderVaryColors()) {
	                if (isNullOrUndefined(_this._markerFormat)) {
	                    _this._markerFormat = _this.CreateMarkerFormat();
	                }
	                marker.spPr = _this._markerFormat.ToOOModel();
	                dirty = true;
	            }
	            if (_this.GetState(32) || _this.IsRenderVaryColors()) {
	                marker.size = _this.MarkerSize;
	                dirty = true;
	            }
	            if (_this.GetState(64) || _this.IsRenderVaryColors()) {
	                marker.symbol = _this.MarkerStyle;
	                dirty = true;
	            }
	            return dirty ? marker : keyword_null;
	        };
	        Point_prototype.FromCT_Marker = function (ooMarker ) {
	            var _this = this;
	            var spPr = ooMarker.spPr;
	            if (!isNullOrUndefined(spPr)) {
	                if (isNullOrUndefined(_this._markerFormat)) {
	                    _this._markerFormat = _this.CreateMarkerFormat();
	                }
	                _this._markerFormat.FromOOModel(spPr);
	            } else {
	                _this.ClearMarkerFormat();
	            }
	            var size = ooMarker.size;
	            if (!isNullOrUndefined(size)) {
	                _this.MarkerSize = size;
	            }
	            var symbol = ooMarker.symbol;
	            if (!isNullOrUndefined(symbol)) {
	                _this.MarkerStyle = symbol;
	            }
	        };
	        Point_prototype.ClearMarkerFormat = function () {
	            var _this = this;
	            if (!isNullOrUndefined(_this._markerFormat)) {
	                _this._markerFormat.SetParentForChildren(keyword_null);
	                _this._markerFormat.ParentStateful = keyword_null;
	                _this._markerFormat = keyword_null;
	            }
	        };
	        return Point;
	    }(StatefulChartElementBase));
	    Charts.Point = Point;
	    var Points = (function () {
	        function Points(series) {
	            this._points = {};
	            this._series = series;
	        }
	
	        var Points_prototype = Points.prototype;
	        defineProperty(Points_prototype, "Count", {
	            get: function () {
	                return this._series.PointsCount;
	            }
	        });
	        defineProperty(Points_prototype, "Parent", {
	            get: function () {
	                return this._series;
	            }
	        });
	        Points_prototype.Get = function (index) {
	            return this.GetPoint(index);
	        };
	        defineProperty(Points_prototype, "HasDataLabel", {
	            get: function () {
	                var points = this._points;
	                for (var key in points) {  
	                    var item = points[key];
	                    if (!isNullOrUndefined(item) && item.HasDataLabel) {
	                        return true;
	                    }
	                }
	                return false;
	            }
	        });
	        Points_prototype.ItemInternal = function (index) {
	            return this._points[index] || keyword_null;
	        };
	        Points_prototype.GetPoint = function (index) {
	            var _this = this;
	            if (index < 0 || index >= _this.Count) {
	                return keyword_null;
	            }
	            var p = _this._points[index];
	            if (p) {
	                return p;
	            }
	            p = new Point(_this._series, index);
	            _this._points[index] = p;
	            return p;
	        };
	        Points_prototype.GetPoints = function () {
	            return this._points;
	        };
	        Points_prototype.RestorePoints = function (ooDpts) {
	            this.ClearPoints();
	            if (!isNullOrUndefined(ooDpts)) {
	                for (var _i = 0, ooDpts_1 = ooDpts; _i < ooDpts_1.length; _i++) {
	                    var ooPoint = ooDpts_1[_i];
	                    var p = this.GetPoint(ooPoint.idx);
	                    if (!isNullOrUndefined(p)) {
	                        p.FromOOModel(ooPoint);
	                    }
	                }
	            }
	        };
	        Points_prototype.ClearPoints = function () {
	            for (var key in this._points) { 
	                var item = this._points[key];
	                if (!isNullOrUndefined(item)) {
	                    item.ParentStateful = keyword_null;
	                }
	            }
	            this._points = {};
	        };
	        return Points;
	    }());
	    Charts.Points = Points;
	    Charts.DataLableStates = {
	        Font: 1,
	        Format: 2,
	        NumberFormat: 4,
	        NumberFormatLinked: 8,
	        Position: 16,
	        Separator: 32,
	        ShowBubbleSize: 64,
	        ShowCategoryName: 128,
	        ShowLegendKey: 256,
	        ShowPercentage: 512,
	        ShowSeriesName: 1024,
	        ShowValue: 2048,
	        ShowLeaderLines: 4096,
	        Text: 8192,
	        AutoText: 16384
	    };
	    var DataLabelBase = (function (_super) {
	        $_inherit(DataLabelBase, _super);
	
	        
	        function DataLabelBase(series, parentLabel) {
	            var _this = _super.call(this, parentLabel) || this;
	            _this._numberFormat = "General";
	            _this._numberFormatLinked = true;
	            _this._separator = ",";
	            _this._showBubbleSize = false;
	            _this._showCategoryName = false;
	            _this._showLegendKey = false;
	            _this._showPercentage = false;
	            _this._showSeriesName = false;
	            _this._showValue = false;
	            _this._showLeaderLines = false;
	            _this._autoText = true;
	            _this._deleted = keyword_null;
	            _this._ooModel = keyword_null;
	            _this._series = series;
	            _this._parentLabel = parentLabel;
	            _this.UpdatePosition();
	            return _this;
	        }
	
	        var DataLabelBase_prototype = DataLabelBase.prototype;
	        defineProperty(DataLabelBase_prototype, "AutoText", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(16384) && !isNullOrUndefined(_this._parentLabel)) {
	                    return _this._parentLabel.AutoText;
	                }
	                return _this._autoText;
	            },
	            set: function (value) {
	                this._autoText = value;
	                this.Dirty(16384);
	            }
	        });
	        defineProperty(DataLabelBase_prototype, "Font", {
	            get: function () {
	                return this.ChartTextInternal.Font;
	            }
	        });
	        defineProperty(DataLabelBase_prototype, "Format", {
	            get: function () {
	                return this.ChartFormat;
	            }
	        });
	        defineProperty(DataLabelBase_prototype, "NumberFormat", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(4) && !isNullOrUndefined(_this._parentLabel)) {
	                    return _this._parentLabel.NumberFormat;
	                }
	                return !_this._numberFormat ? "General" : _this._numberFormat;
	            },
	            set: function (value) {
	                this.setNumberFormat(value);
	            }
	        });
	        DataLabelBase_prototype.setNumberFormat = function (value) {
	            var _this = this;
	            _this._numberFormat = value;
	            if (!value) {
	                _this.UnDirty(4);
	            } else {
	                _this.Dirty(4);
	            }
	            _this._numberFormatLinked = false;
	            _this.Dirty(8);
	        };
	        defineProperty(DataLabelBase_prototype, "NumberFormatLinked", {
	            get: function () {
	                return this.getNumberFormatLinked();
	            },
	            set: function (value) {
	                this.setNumberFormatLinked(value);
	            }
	        });
	        DataLabelBase_prototype.getNumberFormatLinked = function () {
	            var _this = this;
	            if (!_this.GetState(8) && !isNullOrUndefined(_this._parentLabel)) {
	                return _this._parentLabel.NumberFormatLinked;
	            }
	            return _this._numberFormatLinked;
	        };
	        DataLabelBase_prototype.setNumberFormatLinked = function (value) {
	            var _this = this;
	            _this._numberFormatLinked = value;
	            _this.Dirty(8);
	            if (value) {
	                _this._numberFormat = keyword_null;
	                _this.UnDirty(4);
	            }
	        };
	        defineProperty(DataLabelBase_prototype, "Position", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(16) && !isNullOrUndefined(_this._parentLabel)) {
	                    return _this._parentLabel.Position;
	                }
	                return _this._position;
	            },
	            set: function (value) {
	                if (this.IsPositionValid(value)) {
	                    this._position = value;
	                    this.Dirty(16);
	                }
	            }
	        });
	        defineProperty(DataLabelBase_prototype, "Separator", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(32) && !isNullOrUndefined(_this._parentLabel)) {
	                    return _this._parentLabel.Separator;
	                }
	                return _this._separator;
	            },
	            set: function (value) {
	                this._separator = value;
	                this.Dirty(32);
	            }
	        });
	        defineProperty(DataLabelBase_prototype, "ShowBubbleSize", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(64) && !isNullOrUndefined(_this._parentLabel)) {
	                    return _this._parentLabel.ShowBubbleSize;
	                }
	                return _this._showBubbleSize;
	            },
	            set: function (value) {
	                this._showBubbleSize = value;
	                this.Dirty(64);
	            }
	        });
	        defineProperty(DataLabelBase_prototype, "ShowCategoryName", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(128) && !isNullOrUndefined(_this._parentLabel)) {
	                    return _this._parentLabel.ShowCategoryName;
	                }
	                return _this._showCategoryName;
	            },
	            set: function (value) {
	                this._showCategoryName = value;
	                this.Dirty(128);
	            }
	        });
	        defineProperty(DataLabelBase_prototype, "ShowLegendKey", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(256) && !isNullOrUndefined(_this._parentLabel)) {
	                    return _this._parentLabel.ShowLegendKey;
	                }
	                return _this._showLegendKey;
	            },
	            set: function (value) {
	                this._showLegendKey = value;
	                this.Dirty(256);
	            }
	        });
	        defineProperty(DataLabelBase_prototype, "ShowPercentage", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(512) && !isNullOrUndefined(_this._parentLabel)) {
	                    return _this._parentLabel.ShowPercentage;
	                }
	                return _this._showPercentage;
	            },
	            set: function (value) {
	                this._showPercentage = value;
	                this.Dirty(512);
	            }
	        });
	        defineProperty(DataLabelBase_prototype, "ShowSeriesName", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(1024) && !isNullOrUndefined(_this._parentLabel)) {
	                    return _this._parentLabel.ShowSeriesName;
	                }
	                return _this._showSeriesName;
	            },
	            set: function (value) {
	                this._showSeriesName = value;
	                this.Dirty(1024);
	            }
	        });
	        defineProperty(DataLabelBase_prototype, "ShowValue", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(2048) && !isNullOrUndefined(_this._parentLabel)) {
	                    return _this._parentLabel.ShowValue;
	                }
	                return _this._showValue;
	            },
	            set: function (value) {
	                this._showValue = value;
	                this.Dirty(2048);
	            }
	        });
	        defineProperty(DataLabelBase_prototype, "ShowLeaderLines", {
	            get: function () {
	                var _this = this;
	                if (!_this.GetState(4096) && !isNullOrUndefined(_this._parentLabel)) {
	                    return _this._parentLabel.ShowLeaderLines;
	                }
	                return _this._showLeaderLines;
	            },
	            set: function (value) {
	                this._showLeaderLines = value;
	                this.Dirty(4096);
	            }
	        });
	        defineProperty(DataLabelBase_prototype, "LeaderLines", {
	            get: function () {
	                var _this = this;
	                if (isNullOrUndefined(_this._leaderLines)) {
	                    _this._leaderLines = _this.CreateLeaderLines();
	                }
	                return _this._leaderLines;
	            }
	        });
	        DataLabelBase_prototype.IsDirtyIncludingParent = function (includingParent) {
	            if (includingParent === keyword_undefined) {
	                includingParent = false;
	            }
	            var _this = this;
	            if (!isNullOrUndefined(_this._chartText) && _this._chartText.Font.IsDirtyIncludingParent(includingParent)) {
	                return true;
	            }
	            if (!isNullOrUndefined(_this._format) && _this._format.IsDirtyIncludingParent(includingParent)) {
	                return true;
	            }
	            return _super.prototype.IsDirtyIncludingParent.call(_this, includingParent);
	        };
	        DataLabelBase_prototype.OnParentChanged = function (newParent) {
	            var _this = this;
	            _this._parentLabel = newParent;
	            if (!isNullOrUndefined(_this._parentLabel)) {
	                if (!isNullOrUndefined(_this._format)) {
	                    _this._format.ParentStateful = _this._parentLabel.ChartFormat;
	                }
	                if (!isNullOrUndefined(_this._leaderLines)) {
	                    _this._leaderLines.Format.ParentStateful = _this._parentLabel.LeaderLines.Format;
	                }
	            }
	        };
	        DataLabelBase_prototype.GetDefaultPosition = function () {
	            var chartType = this._series.InnerChartType;
	            if (ChartUtility.IsColumnChart(chartType) || ChartUtility.IsBarChart(chartType)) {
	                if (ChartUtility.IsStackedChart(chartType)) {
	                    return 2;
	                }
	                return 6;
	            } else if (ChartUtility.IsLineChart(chartType) ||
	                ChartUtility.IsScatterChart(chartType) ||
	                ChartUtility.IsBubbleChart(chartType)) {
	                return 7;
	            } else if (ChartUtility.IsPieChart(chartType) || ChartUtility.IsOfPieChart(chartType)) {
	                return 0;
	            }
	           
	            return 2;
	        };
	        DataLabelBase_prototype.IsNoPosition = function () {
	            var chartType = this._series.InnerChartType;
	            return ChartUtility.IsAreaChart(chartType) ||
	                ChartUtility.IsRadarChart(chartType) ||
	                ChartUtility.Is3DChart(chartType) ||
	                ChartUtility.IsDoughnutChart(chartType);
	        };
	        DataLabelBase_prototype.FromOOModel = function (ooLabelBase ) {
	            var _this = this;
	            _this._ooModel = ooLabelBase;
	            var numFmt = ooLabelBase.numFmt;
	            if (!isNullOrUndefined(numFmt)) {
	                _this._numberFormat = numFmt.formatCode;
	                _this.Dirty(4);
	                _this._numberFormatLinked = numFmt.sourceLinked !== false;
	                _this.Dirty(8);
	            }
	            _super.prototype.FromShapeProperties.call(_this, ooLabelBase.spPr);
	            var txPr = ooLabelBase.txPr;
	            var chartType = _this.Chart.ChartType;
	            if (!isNullOrUndefined(txPr)) {
	                var tx = {};
	                tx.rich = txPr;
	                _this.ChartTextInternal.FromOOModel(tx);
	            } else if (IsSunburstOrTreemapChart(chartType)) {
	               
	                var chProperties = {solidFill: {srgbClr: {val: [255, 255, 255]}}};
	                _this.ChartTextInternal._textBody._font.TextCharacterProperties_FromOOModel(chProperties);
	            }
	            var dLblPos = ooLabelBase.dLblPos;
	            if (!isNullOrUndefined(dLblPos)) {
	                _this.Position = dLblPos;
	            }
	            var showBubbleSize = ooLabelBase.showBubbleSize;
	            if (!isNullOrUndefined(showBubbleSize) && ChartUtility.IsBubbleChart(_this._series.InnerChartType)) {
	                _this.ShowBubbleSize = showBubbleSize;
	            }
	            var isSunburstOrTreemapChart = IsSunburstOrTreemapChart(_this._series.InnerChartType);
	            var visibility = ooLabelBase.visibility;
	            var isSunburstVisibleInfo = isSunburstOrTreemapChart && visibility;
	            var showCatName = isSunburstVisibleInfo ? visibility.categoryName : ooLabelBase.showCatName;
	            _this.ShowCategoryName = !isNullOrUndefined(showCatName) ? showCatName : false;
	            var showLegendKey = ooLabelBase.showLegendKey;
	            _this.ShowLegendKey = !isNullOrUndefined(showLegendKey) ? showLegendKey : false;
	            var showPercent = ooLabelBase.showPercent;
	            if (!isNullOrUndefined(showPercent) && ChartUtility.IsPieOrDoughnutChart(_this._series.InnerChartType)) {
	                _this.ShowPercentage = showPercent;
	            }
	            var showSerName = isSunburstVisibleInfo ? visibility.seriesName : ooLabelBase.showSerName;
	            _this.ShowSeriesName = !isNullOrUndefined(showSerName) ? showSerName : false;
	            var showVal = isSunburstVisibleInfo ? visibility.value : ooLabelBase.showVal;
	            _this.ShowValue = !isNullOrUndefined(showVal) ? showVal : false;
	            var separator = ooLabelBase.separator;
	            if (separator && separator !== ",") {
	                _this.Separator = separator;
	            }
	            var ooLabelBase_delete = ooLabelBase.delete;
	            _this._deleted = !isNullOrUndefined(ooLabelBase_delete) ? ooLabelBase_delete : keyword_null;
	        };
	        DataLabelBase_prototype.ToOOModel = function () {
	            var _this = this;
	            var ooModel = _this._ooModel || _this.CreateCT_Dlbl();
	            if (_this.GetState(4) ||
	                _this.GetState(8)) {
	                var numFmt = {
	                    formatCode: _this.NumberFormat
	                } ;
	                if (_this.NumberFormatLinked === false) {
	                    numFmt.sourceLinked = false;   
	                }
	                ooModel.numFmt = numFmt;
	            }
	            ooModel.spPr = _super.prototype.ToShapeProperties.call(_this);
	            if (_this._chartText && _this._chartText.Font.IsDirtyIncludingParent()) {
	                ooModel.txPr = _this._chartText.ToOOModel().rich;
	            }
	            if (!_this.IsNoPosition()) {
	                ooModel.dLblPos = _this.Position;
	            }
	            var isSunburstOrTreemapChart = IsSunburstOrTreemapChart(_this._series.InnerChartType);
	            if (!_this._deleted) {
	                ooModel.showBubbleSize = _this.ShowBubbleSize;
	                ooModel.showLegendKey = _this.ShowLegendKey;
	                ooModel.showPercent = _this.ShowPercentage;
	                if (isSunburstOrTreemapChart) {
	                    ooModel.visibility = {
	                        seriesName: _this.ShowSeriesName,
	                        categoryName: _this.ShowCategoryName,
	                        value: _this.ShowValue
	                    };
	                } else {
	                    ooModel.showCatName = _this.ShowCategoryName;
	                    ooModel.showSerName = _this.ShowSeriesName;
	                    ooModel.showVal = _this.ShowValue;
	                }
	            }
	            if (_this.Separator !== ",") {
	                ooModel.separator = _this.Separator;
	            }
	            return ooModel;
	        };
	        DataLabelBase_prototype.CreateCT_Dlbl = function () {
	            return keyword_null;
	        };
	        DataLabelBase_prototype.GetDefaultChartText = function () {
	            return keyword_null;
	        };
	        DataLabelBase_prototype.IsPositionValid = function (position) {
	            var valid = false;
	            var chartType = this._series.InnerChartType;
	            if (ChartUtility.IsColumnChart(chartType) || ChartUtility.IsBarChart(chartType)) {
	                if (ChartUtility.IsStackedChart(chartType)) {
	                    valid = position === 2 ||
	                        position === 3 ||
	                        position === 4;
	                } else {
	                    valid = position === 2 ||
	                        position === 3 ||
	                        position === 4 ||
	                        position === 6;
	                }
	            } else if (ChartUtility.IsLineChart(chartType) ||
	                ChartUtility.IsScatterChart(chartType) ||
	                ChartUtility.IsBubbleChart(chartType)) {
	                valid = position === 2 ||
	                    position === 5 ||
	                    position === 7 ||
	                    position === 8 ||
	                    position === 1;
	            } else if (ChartUtility.IsPieChart(chartType)) {
	                valid = position === 2 ||
	                    position === 4 ||
	                    position === 6 ||
	                    position === 0;
	            } else if (ChartUtility.IsAreaChart(chartType) ||
	                ChartUtility.IsRadarChart(chartType) ||
	                ChartUtility.Is3DChart(chartType)) {
	                valid = false;
	            }
	            return valid;
	        };
	        DataLabelBase_prototype.UpdatePosition = function () {
	            this._position = this.GetDefaultPosition();
	        };
	        DataLabelBase_prototype.ResetByChartType = function () {
	            this.UpdatePosition();
	        };
	        defineProperty(DataLabelBase_prototype, "Chart", {
	            get: function () {
	                return this._series.SeriesCollection.Parent;
	            }
	        });
	        defineProperty(DataLabelBase_prototype, "ChartText", {
	            get: function () {
	                return this._chartText;
	            }
	        });
	        defineProperty(DataLabelBase_prototype, "ChartTextInternal", {
	            get: function () {
	                var _this = this;
	                if (isNullOrUndefined(_this._chartText)) {
	                    _this._chartText = _this.GetDefaultChartText();
	                }
	                return _this._chartText;
	            }
	        });
	        DataLabelBase_prototype.CreateLeaderLines = function () {
	            return keyword_null;
	        };
	        defineProperty(DataLabelBase_prototype, "HasDataLabelsRange", {
	            get: function () {
	                return !isNullOrUndefined(this._chartText) && !isNullOrUndefined(this._chartText.TextRefer);
	            }
	        });
	        defineProperty(DataLabelBase_prototype, "Series", {
	            get: function () {
	                return this._series;
	            }
	        });
	        return DataLabelBase;
	    }(StatefulChartElementBase ));
	    Charts.DataLabelBase = DataLabelBase;
	    var DataLabels = (function (_super) {
	        $_inherit(DataLabels, _super);
	
	        function DataLabels(series) {
	            var _this = _super.call(this, series, keyword_null) || this;
	            _this._labels = {};
	            _this._series = series;
	            _this._chartText = _this.GetDefaultChartText();
	            _this._showValue = false;
	            _this._showLeaderLines = false;
	            return _this;
	        }
	
	        var DataLabels_prototype = DataLabels.prototype;
	        DataLabels_prototype.CreateFormat = function () {
	            var format = new ChartFormat(this.Chart);
	            format.Fill.Color.ColorType = 0 ;
	            format.Line.Color.ColorType = 0 ;
	            return format;
	        };
	        DataLabels_prototype.GetDefaultChartText = function () {
	            var text = new DrawingText(this.Chart.Parent, this.Chart.ChartArea.Font);
	            var isSunBurstOrTeeemap = IsSunburstOrTreemapChart(this._series.InnerChartType);
	            if (isSunBurstOrTeeemap) {
	               
	                text.Font.Color.setColor(this._series.Worksheet, 'rgb(255,255,255)');
	            }
	            return text;
	
	        };
	        defineProperty(DataLabels_prototype, "Parent", {
	            get: function () {
	                return this._series;
	            }
	        });
	        defineProperty(DataLabels_prototype, "AutoText", {
	            get: function () {
	                return this._autoText;
	            },
	            set: function (value) {
	                for (var i = 0, length = this.Count; i < length; i++) {
	                    var item = this.GetLabel(i);
	                    item.AutoText = value;
	                }
	                this._autoText = value;
	            }
	        });
	        defineProperty(DataLabels_prototype, "Count", {
	            get: function () {
	                return this._series.PointsCount;
	            }
	        });
	        defineProperty(DataLabels_prototype, "NumberFormat", {
	            get: function () {
	                return this.GetNumberFormat();
	            },
	            set: function (value) {
	                _super.prototype.setNumberFormat.call(this, value);
	            }
	        });
	        defineProperty(DataLabels_prototype, "NumberFormatLinked", {
	            get: function () {
	                return _super.prototype.getNumberFormatLinked.call(this);
	            },
	            set: function (value) {
	                if (!value) {
	                    this._numberFormat = this.GetFirstNumberFormat();
	                    this.Dirty(4);
	                }
	                _super.prototype.setNumberFormatLinked.call(this, value);
	            }
	        });
	        DataLabels_prototype.Get = function (index) {
	            return this.GetLabel(index);
	        };
	        DataLabels_prototype.IsDirtyIncludingParent = function (includingParent) {
	            if (includingParent === keyword_undefined) {
	                includingParent = false;
	            }
	            if (!isNullOrUndefined(this._leaderLines) && this._leaderLines.Format.IsDirtyIncludingParent(includingParent)) {
	                return true;
	            }
	            return _super.prototype.IsDirtyIncludingParent.call(this, includingParent);
	        };
	        DataLabels_prototype.CreateLeaderLines = function () {
	            return new DataLabelsLeaderLines(this);
	        };
	        DataLabels_prototype.GetLabel = function (index) {
	            var _this = this;
	            if (index < 0 || index >= _this.Count) {
	                return keyword_null;
	            }
	            var label = _this._labels[index];
	            if (label) {
	                return label;
	            }
	            label = new DataLabel(_this._series, index);
	            _this._labels[index] = label;
	            return label;
	        };
	        DataLabels_prototype.UpdateDeleted = function (deleted) {
	            var labels = this._labels;
	            for (var key in labels) {   
	                var item = labels[key];
	                if (!isNullOrUndefined(item)) {
	                    item.Deleted = deleted;
	                }
	            }
	        };
	        DataLabels_prototype.ResetByChartType = function () {
	            _super.prototype.ResetByChartType.call(this);
	            for (var i = 0, length = this.Count; i < length; i++) {
	                var item = this.GetLabel(i);
	                if (item.IsDirtyIncludingParent()) {
	                    item.ResetByChartType();
	                }
	            }
	        };
	        DataLabels_prototype.GetNumberFormat = function () {
	            var _this = this;
	            var formatCode = _this._numberFormat;
	            if (!_this.GetState(4)) {
	                if (_this.NumberFormatLinked && !isNullOrUndefined(_this._series.ValuesRefers) &&
	                    _this._series.ValuesRefers.length > 0) {
	                    formatCode = _this.GetFirstNumberFormat();
	                } else if (!isNullOrUndefined(_this._parentLabel)) {
	                    formatCode = _this._parentLabel.NumberFormat;
	                }
	            }
	            return formatCode || "General";
	        };
	        DataLabels_prototype.GetFirstNumberFormat = function () {
	            var range = this._series.ValuesRefers[0];
	            var sheet = this._series.Worksheet._GetSheet(range.WorksheetName);
	            var formatCode = keyword_null;
	            if (!isNullOrUndefined(sheet)) {
	                var style = sheet._GetCellStyle(range.Row, range.Column);
	                if (!isNullOrUndefined(style)) {
	                    formatCode = style.FormatCode;
	                }
	            }
	            return formatCode || "General";
	        };
	        DataLabels_prototype.ToOOModel = function () {
	            var _this = this;
	            var dlbls = _super.prototype.ToOOModel.call(_this) ;
	            if (_this.ShowLeaderLines) {
	                dlbls.extLst = {ext: []} ;
	                var dlbsExt = {uri: '{CE6537A1-D6FC-4f65-9D91-7224C49458BB}'} ;
	                dlbls.extLst.ext.push(dlbsExt);
	               
	                dlbsExt.showLeaderLines = true;
	                dlbls.showLeaderLines = true;
	                if (!isNullOrUndefined(_this._leaderLines)) {
	                    dlbls.leaderLines = _this._leaderLines.ToOOModel();
	                } else {
	                    delete dlbls.leaderLines;
	                }
	            }
	            var dLbl = [];
	            for (var prop in _this._labels) {   
	                var dataLabel = _this._labels[prop];
	                if (!isNullOrUndefined(dataLabel) &&
	                    (!isNullOrUndefined(_this._chartText.TextRefer) || dataLabel.Deleted || dataLabel.IsDirtyIncludingParent())) {
	                    dLbl.push(dataLabel.ToOOModel());
	                }
	            }
	            if (dLbl.length > 0) {
	                dlbls.dLbl = dLbl;
	            }
	            return dlbls;
	        };
	        DataLabels_prototype.FromOOModel = function (ooDLbls ) {
	            var _this = this;
	            _super.prototype.FromOOModel.call(_this, ooDLbls);
	            _this._labels = {};
	            var dLbl = ooDLbls.dLbl;
	            if (!isNullOrUndefined(dLbl)) {
	                for (var _i = 0, _a = dLbl; _i < _a.length; _i++) {
	                    var ooLabel = _a[_i];
	                    var label = _this.GetLabel(ooLabel.idx);
	                    if (!isNullOrUndefined(label)) {
	                        label.FromOOModel(ooLabel);
	                    }
	                }
	            }
	            var showLeaderLines = ooDLbls.showLeaderLines;
	            if (!isNullOrUndefined(showLeaderLines)) {
	                _this.ShowLeaderLines = showLeaderLines;
	            }
	            var leaderLines = ooDLbls.leaderLines;
	            if (!isNullOrUndefined(leaderLines)) {
	                if (isNullOrUndefined(_this._leaderLines)) {
	                    _this._leaderLines = _this.CreateLeaderLines();
	                }
	                _this._leaderLines.FromOOModel(leaderLines);
	            } else {
	                _this._leaderLines = keyword_null;
	            }
	        };
	        DataLabels_prototype.CreateCT_Dlbl = function () {
	            return {dLbl: []} ;
	        };
	        DataLabels_prototype._copyProperties = function (src) {
	            var _this = this;
	            _this.Separator = src.Separator;
	            _this.ShowBubbleSize = src.ShowBubbleSize;
	            _this.ShowCategoryName = src.ShowCategoryName;
	            _this.ShowLegendKey = src.ShowLegendKey;
	            _this.ShowPercentage = src.ShowPercentage;
	            _this.ShowSeriesName = src.ShowSeriesName;
	            _this.ShowValue = src.ShowValue;
	            _this.ShowLeaderLines = src.ShowLeaderLines;
	            _this.Position = src.Position;
	        };
	
	        return DataLabels;
	    }(DataLabelBase));
	    Charts.DataLabels = DataLabels;
	    var DataLabel = (function (_super) {
	        $_inherit(DataLabel, _super);
	
	        function DataLabel(series, index) {
	            var _this = _super.call(this, series, series.DataLabels) || this;
	            _this._series = series;
	            _this._index = index;
	            return _this;
	        }
	
	        var DataLabel_prototype = DataLabel.prototype;
	        DataLabel_prototype.CreateFormat = function () {
	            var format = new ChartFormat(this.Chart, this._series.DataLabels.Format);
	            format.Fill.Color.ColorType = 0 ;
	            format.Line.Color.ColorType = 0 ;
	            return format;
	        };
	        DataLabel_prototype.GetDefaultChartText = function () {
	            var chart = this._series.SeriesCollection.Parent;
	            return new DrawingText(chart.Parent, this._series.DataLabels.Font);
	        };
	        defineProperty(DataLabel_prototype, "Parent", {
	            get: function () {
	                return this._series.Points.Get(this._index);
	            }
	        });
	        defineProperty(DataLabel_prototype, "AutoText", {
	            get: function () {
	                return this._autoText;
	            },
	            set: function (value) {
	                var _this = this;
	                if (_this._autoText !== value) {
	                    if (!value) {
	                        _this.ChartTextInternal.Text = _this.GetAutoText();
	                        _this.Dirty(8192);
	                    }
	                    _this._autoText = value;
	                }
	            }
	        });
	        defineProperty(DataLabel_prototype, "NumberFormat", {
	            get: function () {
	                return this.GetNumberFormat();
	            },
	            set: function (value) {
	                _super.prototype.setNumberFormat.call(this, value);
	            }
	        });
	        defineProperty(DataLabel_prototype, "NumberFormatLinked", {
	            get: function () {
	                return _super.prototype.getNumberFormatLinked.call(this);
	            },
	            set: function (value) {
	                if (!value) {
	                    this._numberFormat = this.GetNumberFormat();
	                    this.Dirty(4);
	                }
	                _super.prototype.setNumberFormatLinked.call(this, value);
	            }
	        });
	        defineProperty(DataLabel_prototype, "Text", {
	            get: function () {
	                return this.GetText();
	            },
	            set: function (value) {
	                var _this = this;
	                _this.ChartTextInternal.Text = value;
	                _this.Dirty(8192);
	                _this._autoText = false;
	                _this.Dirty(16384);
	            }
	        });
	        DataLabel_prototype.Delete = function () {
	            this._deleted = true;
	        };
	        DataLabel_prototype.CreateLeaderLines = function () {
	            return new DataLabelLeaderLines(this);
	        };
	        defineProperty(DataLabel_prototype, "Deleted", {
	            get: function () {
	                return isNullOrUndefined(this._deleted) ? false : this._deleted;
	            },
	            set: function (value) {
	                this._deleted = value;
	                if (!value) {
	                    this.ShowValue = true;
	                    this.ShowLeaderLines = true;
	                }
	            }
	        });
	        defineProperty(DataLabel_prototype, "ParentLabels", {
	            get: function () {
	                return this._parentLabel;
	            }
	        });
	        DataLabel_prototype.GetNumberFormat = function () {
	            var _this = this;
	            var formatCode = _this._numberFormat;
	            if (!_this.GetState(4)) {
	                var ranges = _this._series.ValuesRefers;
	                if (_this.NumberFormatLinked && !isNullOrUndefined(ranges) && ranges.length > 0) {
	                    var returnObj = {sheet: keyword_null, row: -1, col: -1};
	                    _this._series.GetRowColIndex(ranges, _this._index, returnObj);
	                    var sheet = returnObj.sheet;
	                    var row = returnObj.row;
	                    var col = returnObj.col;
	                    if (!isNullOrUndefined(sheet) && row !== -1 && col !== -1) {
	                        var style = sheet._GetCellStyle(row, col);
	                        if (!isNullOrUndefined(style)) {
	                            formatCode = style.FormatCode;
	                        }
	                    }
	                } else if (!isNullOrUndefined(_this._parentLabel)) {
	                    formatCode = _this._parentLabel.NumberFormat;
	                }
	            }
	            return formatCode || "General";
	        };
	        DataLabel_prototype.GetText = function () {
	            if (this.AutoText) {
	                return this.GetAutoText();
	            }
	            return this._chartText.Text;
	        };
	        DataLabel_prototype.GetAutoText = function () {
	            var _this = this;
	            var textArray = [];
	            var needSeparator = false;
	            if (_this.ShowSeriesName) {
	                var name = _this._series.Name;
	                textArray.push(!isNullOrUndefined(name) ? name : "");
	                needSeparator = true;
	            }
	            if (_this.ShowCategoryName) {
	                if (needSeparator) {
	                    textArray.push(_this.Separator);
	                }
	                textArray.push(_this._series.GetCatText(_this._index));
	                needSeparator = true;
	            }
	            if (_this.ShowValue) {
	                if (needSeparator) {
	                    textArray.push(_this.Separator);
	                }
	                textArray.push(_this._series.GetPointValueText(_this._index, _this.NumberFormat));
	                needSeparator = true;
	            }
	            if (_this.ShowBubbleSize && ChartUtility.IsBubbleChart(_this._series.InnerChartType)) {
	                if (needSeparator) {
	                    textArray.push(_this.Separator);
	                }
	                textArray.push(_this._series.BubbleSizes[_this._index].toString());
	                needSeparator = true;
	            }
	            if (_this.ShowPercentage && ChartUtility.IsPieOrDoughnutChart(_this._series.InnerChartType)) {
	                if (needSeparator) {
	                    textArray.push(_this.Separator);
	                }
	                textArray.push(_this.GetPercentText());
	            }
	            return textArray.join('');
	        };
	        DataLabel_prototype.GetValueText = function () {
	            var _this = this;
	            if (!_this.GetState(8192)) {
	                return _this._chartText.Text;
	            }
	            if (_this.NumberFormatLinked) {
	                return _this._series.GetPointValueText(_this._index);
	            }
	           
	           
	            return _this._series.GetPointValueText(_this._index, _this.NumberFormat);
	        };
	        DataLabel_prototype.GetPercentText = function () {
	            var numFormat = this.GetNumberFormat();
	            var formatter = new GeneralFormatter(numFormat === "General" ? "0%" : numFormat);
	            var percentValue = this._series.GetPercentageValue(this._index);
	            return formatter.format(percentValue);
	        };
	        DataLabel_prototype.FromOOModel = function (ooModel ) {
	            var _this = this;
	            _super.prototype.FromOOModel.call(_this, ooModel);
	            _this._index = ooModel.idx;
	            if (!isNullOrUndefined(ooModel.tx)) {
	                var origRich = ooModel.tx.rich;
	                if (isNullOrUndefined(ooModel.tx.rich) && !isNullOrUndefined(ooModel.txPr)) {
	                    ooModel.tx.rich = ooModel.txPr;
	                }
	                _this.ChartTextInternal.FromOOModel(ooModel.tx);
	                var showDataLabelsRange = false;
	                var extLst = ooModel.extLst;
	                if (!isNullOrUndefined(extLst) && !isNullOrUndefined(extLst.ext)) {
	                    for (var _i = 0, _a = extLst.ext; _i < _a.length; _i++) {
	                        var ext = _a[_i];
	                        if (ext.showDataLabelsRange) {
	                            showDataLabelsRange = true;
	                            break;
	                        }
	                    }
	                }
	                if (showDataLabelsRange) {
	                    _this._autoText = true;
	                    _this.UnDirty(16384);
	                } else {
	                    _this._autoText = false;
	                    _this.Dirty(16384);
	                    _this.Dirty(8192);
	                }
	                ooModel.tx.rich = origRich;
	            } else if (!isNullOrUndefined(ooModel.txPr)) {
	                var tx = {};
	                tx.rich = ooModel.txPr;
	                _this.ChartTextInternal.FromOOModel(tx);
	                _this._autoText = true;
	                _this.UnDirty(16384);
	            }
	        };
	        DataLabel_prototype.ToOOModel = function () {
	            var _this = this;
	            if (_this.Deleted) {
	                var deletedModel = {} ;
	                deletedModel.idx = _this._index;
	                deletedModel.delete = true;
	                return deletedModel;
	            }
	            var ooModel = _super.prototype.ToOOModel.call(_this);
	            ooModel.idx = _this._index;
	            var extLst = ooModel.extLst;
	            if (!isNullOrUndefined(extLst) && !isNullOrUndefined(extLst.ext) &&
	                extLst.ext.length > 0) {
	                var layoutExt = keyword_null;
	                var exts = extLst.ext;
	                var index;
	                for (var i = 0, len = exts.length; i < len; i++) {
	                    var item = exts[i];
	                    if (!isNullOrUndefined(item.layout)) {
	                        layoutExt = item;
	                        index = i;
	                        break;
	                    }
	                }
	                if (!isNullOrUndefined(layoutExt)) {
	                    extLst.ext.splice(index, 1);
	                    var layout = layoutExt.layout;
	                    var ooModel_layout = ooModel.layout;
	                    if (!isNullOrUndefined(layout)) {
	                        if (!isNullOrUndefined(layout.extLst)) {
	                            ooModel_layout.extLst = layout.extLst;
	                        }
	                        var manualLayout = layout.manualLayout;
	                        if (!isNullOrUndefined(manualLayout)) {
	                            if (isNullOrUndefined(ooModel_layout.manualLayout)) {
	                                ooModel_layout.manualLayout = manualLayout;
	                            } else {
	                                var ooModel_layout_manualLayout = ooModel_layout.manualLayout;
	                                if (!isNullOrUndefined(manualLayout.x)) {
	                                    ooModel_layout_manualLayout.x = manualLayout.x;
	                                }
	                                if (!isNullOrUndefined(manualLayout.y)) {
	                                    ooModel_layout_manualLayout.y = manualLayout.y;
	                                }
	                                if (!isNullOrUndefined(manualLayout.w)) {
	                                    ooModel_layout_manualLayout.w = manualLayout.w;
	                                }
	                                if (!isNullOrUndefined(manualLayout.h)) {
	                                    ooModel_layout_manualLayout.h = manualLayout.h;
	                                }
	                            }
	                        }
	                    }
	                }
	                ooModel.extLst = keyword_null;
	            }
	            var tx ;
	            var parentLabels = _this.ParentLabels;
	            if (!isNullOrUndefined(parentLabels) &&
	                parentLabels.ShowDataLabelsRange && !isNullOrUndefined(parentLabels.ChartText) && !isNullOrUndefined(parentLabels.ChartText.TextRefer)) {
	                tx = _this._chartText.ToOOModel();
	                ooModel.tx = tx;
	                ooModel.txPr = keyword_null;
	                ooModel.extLst = {ext: []} ;
	                var ext = {} ;
	                ext.uri = "{CE6537A1-D6FC-4f65-9D91-7224C49458BB}";
	                ext.dlblFieldTable = {dlblFTEntry: []} ;
	                ext.showDataLabelsRange = true;
	                ooModel.extLst.ext.push(ext);
	            } else if (_this.AutoText && !isNullOrUndefined(_this._chartText)) {
	                ooModel.txPr = _this._chartText.ToOOModel().rich;
	                ooModel.tx = keyword_null;
	            } else if (!isNullOrUndefined(_this._chartText)) {
	                tx = _this._chartText.ToOOModel();
	                if (!isNullOrUndefined(_this._chartText.TextRefer)) {
	                    ooModel.tx = {};
	                    ooModel.tx.strRef = tx.strRef;
	                    ooModel.txPr = tx.rich;
	                } else {
	                    ooModel.tx = tx;
	                    ooModel.txPr = keyword_null;
	                }
	            }
	            return ooModel;
	        };
	        DataLabel_prototype.CreateCT_Dlbl = function () {
	            var label = {} ;
	            label.layout = {} ;
	            return label;
	        };
	        return DataLabel;
	    }(DataLabelBase));
	    Charts.DataLabel = DataLabel;
	    var DblsLeaderLinesBase = (function (_super) {
	        $_inherit(DblsLeaderLinesBase, _super);
	
	        function DblsLeaderLinesBase(dataLabelBase) {
	            var _this = _super.call(this) || this;
	            _this._ooLines = keyword_null;
	            _this._dataLabelBase = dataLabelBase;
	            return _this;
	        }
	
	        var DblsLeaderLinesBase_prototype = DblsLeaderLinesBase.prototype;
	        defineProperty(DblsLeaderLinesBase_prototype, "Format", {
	            get: function () {
	                return this.ChartFormat;
	            }
	        });
	        DblsLeaderLinesBase_prototype.GetDefaultFormat = function () {
	            var format = _super.prototype.GetDefaultFormat.call(this);
	            var line = format.Line;
	            var color = line.Color;
	            color.ObjectThemeColor = 1;
	            color.Brightness = 0.65;
	            line.Weight = 1 ;
	            return format;
	        };
	        DblsLeaderLinesBase_prototype.Delete = function () {
	            this._dataLabelBase.ShowLeaderLines = false;
	        };
	        DblsLeaderLinesBase_prototype.FromOOModel = function (t ) {
	            this._ooLines = t;
	            _super.prototype.FromShapeProperties.call(this, t.spPr);
	        };
	        DblsLeaderLinesBase_prototype.ToOOModel = function () {
	            var lines = this._ooLines || {} ;
	            lines.spPr = _super.prototype.ToShapeProperties.call(this);
	            return lines;
	        };
	        return DblsLeaderLinesBase;
	    }(ChartElementBase));
	    Charts.DblsLeaderLinesBase = DblsLeaderLinesBase;
	    var DataLabelsLeaderLines = (function (_super) {
	        $_inherit(DataLabelsLeaderLines, _super);
	
	        function DataLabelsLeaderLines(dataLabels) {
	            return _super.call(this, dataLabels) || this;
	        }
	
	        DataLabelsLeaderLines.prototype.CreateFormat = function () {
	            return new ChartFormat(this._dataLabelBase.Chart);
	        };
	        return DataLabelsLeaderLines;
	    }(DblsLeaderLinesBase));
	    Charts.DataLabelsLeaderLines = DataLabelsLeaderLines;
	    var DataLabelLeaderLines = (function (_super) {
	        $_inherit(DataLabelLeaderLines, _super);
	
	        function DataLabelLeaderLines(dataLabel) {
	            return _super.call(this, dataLabel) || this;
	        }
	
	        DataLabelLeaderLines.prototype.CreateFormat = function () {
	            return new ChartFormat(this._dataLabelBase.Chart, this._dataLabelBase.Series.DataLabels.LeaderLines.Format);
	        };
	        return DataLabelLeaderLines;
	    }(DblsLeaderLinesBase));
	    Charts.DataLabelLeaderLines = DataLabelLeaderLines;
	
	    module.exports = Charts;
	}());

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Charts = __webpack_require__(3);
	    var Common = __webpack_require__(11);
	    var GeneralFormatter = __webpack_require__(13).GeneralFormatter,
	        ColorHelper = Common._ColorHelper,
	        ChartCommon = Charts,
	        DateTimeExtension = ChartCommon.DateTimeExtension,
	        isEmptyObject = Common._Types._isEmptyObject,
	        isNullOrUndefined = ChartCommon.UnitHelper.isNullOrUndefined;
	    var ChartUtility = ChartCommon.ChartUtility,
	        Core = __webpack_require__(6),
	        $ = Core.GC$,
	        colorFormatToString = ChartUtility.colorFormatToString,
	        getTransparencyFromColorFormat = ChartUtility.getTransparencyFromColorFormat,
	        isStockChart = ChartUtility.IsStockChart,
	        isSunburstChart = ChartUtility.IsSunburstChart,
	        IsSunburstOrTreemapChart = ChartUtility.IsSunburstOrTreemapChart,
	        isBarChart = ChartUtility.IsBarChart,
	        isColumnChart = ChartUtility.IsColumnChart,
	        isLineChart = ChartUtility.IsLineChart,
	        getColumnGroupOrBarGroup = ChartUtility.getColumnGroupOrBarGroup,
	        getLineFormatInfo = ChartUtility.getLineFormatInfo;
	    var CATEGORY_NAME = 'x', VALUE_NAME = 'value', COLOR_NAME = 'color',
	        BUBBLE_SIZE_NAME = 'bubbleSizeField', TOOLTIP_X_NAME = 'name';
	    var STOCK_OHLC_TYPE = 'Candlestick', STOCK_HLC_TYPE = 'HighLowOpenClose';
	    var keyword_null = null;
	    var CONST_BAR = 'Bar', CONST_LINE = 'Line', CONST_AREA = 'Area', CONST_SCATTER = 'Scatter',
	        CONST_STACK = 'Stack', CONST_SPLINE = 'Spline', CONST_RADIAL = 'Radial', CONST_POLYGONAL = 'Polygonal',
	        CONST_TREEMAP = 'TreeMap', CONST_RADAR = 'Radar', CONST_SUNBURST = 'Sunburst',
	        CONST_2016_CHART_VALUE_NAME = 'value',
	        CONST_TREEMAP_CAT = 'treeMapCat', CONST_TREEMAP_SUBCAT = 'treeMapSubCat', CONST_LEVEL = 'level';
	    var DATE_FORMAT = "yyyy-MM-dd";
	    var LINE_ANIMATION = [{
	        "mode": "Point",
	        "duration": 1000,
	        "easing": "Linear",
	        "startDelay": 0,
	        "staggering": true
	    }, {
	        "mode": "Point",
	        "duration": 500,
	        "easing": "Linear"
	    }], BAR_ANIMATION = [{
	        "mode": "Point",
	        "duration": 1000,
	        "easing": "Linear",
	        "startDelay": 0,
	        "staggering": false
	    }, {
	        "mode": "Point",
	        "duration": 500,
	        "easing": "Linear"
	    }], PIE_ANIMATION = [{
	        "mode": "All",
	        "duration": 1000,
	        "easing": "Linear",
	        "startDelay": 0
	    }, {
	        "mode": "All",
	        "duration": 500,
	        "easing": "Linear"
	    }];
	
	    function findUnsupportedSeries(seriesArray, blackList) {
	        if (seriesArray.length > 1) {
	            var firstNotAutoXValues;
	            for (var k = 0; k < seriesArray.length; k++) {
	                var series = seriesArray[k][0];
	                if (!firstNotAutoXValues) {
	                    if (!series.XValuesIsAuto()) {
	                        firstNotAutoXValues = series.XValues;
	                    }
	                    continue;
	                }
	                if (!isEqual(firstNotAutoXValues, series.XValues)) {
	                    blackList.push(seriesArray[k][1]);
	                }
	            }
	        }
	    }
	
	    function filterUnsupportedSeries(seriesArray) {
	        var seriesArrayInPrimary = [];
	        var seriesArrayInSecondary = [];
	        for (var i = 0, length = seriesArray.length; i < length; i++) {
	            var series = seriesArray[i];
	            if (series.AxisGroup === 0 ) {
	                seriesArrayInPrimary.push([series, i]);
	            } else {
	                seriesArrayInSecondary.push([series, i]);
	            }
	        }
	
	        var blackList = [];
	        findUnsupportedSeries(seriesArrayInPrimary, blackList);
	        findUnsupportedSeries(seriesArrayInSecondary, blackList);
	
	        var result = [];
	        for (i = 0, length = seriesArray.length; i < length; i++) {
	            if (blackList.indexOf(i) < 0) {
	                result.push(seriesArray[i]);
	            }
	        }
	        return result;
	    }
	
	    function getFirstVisibleSeries(allSers) {
	        for (var i = 0, length = allSers.length; i < length; i++) {
	            if (!allSers[i].IsHidden) {
	                return allSers[i];
	            }
	        }
	    }
	
	    function getAllSers(chart) {
	        var allSers = chart.SeriesCollection.AllSers;
	        if (ChartUtility.IsPieChart(chart.ChartType) && allSers.length > 0) {
	            allSers = [getFirstVisibleSeries(allSers) || allSers[0]];
	        } else if (chart.ChartType === 0 ) {
	            allSers = filterUnsupportedSeries(allSers);
	        }
	        return allSers;
	    }
	
	    function getSeriesName(series, seriesNameCache) {
	        var serName = series.Name, retName = serName;
	        if (!serName) {
	            var seriesIndex = series.SeriesCollection.IndexOfSource(series);
	            if (ChartUtility.IsPieOrDoughnutChart(series.ChartType)) {
	                retName = '' + (seriesIndex + 1);
	            } else {
	                retName = 'Series' + (seriesIndex + 1);
	            }
	        } else if (seriesNameCache) {
	            var count = seriesNameCache[serName];
	            if (count > 0) {
	                for (var i = 0; i < count; i++) {
	                   
	                    retName += ' ';
	                }
	                seriesNameCache[serName]++;
	            } else {
	                seriesNameCache[serName] = 1;
	            }
	        }
	        return retName;
	    }
	
	    function getMarkerInfoForSeries(series, needThemeColor) {
	        if (series.MarkerStyle !== 4 ) {
	            var result = {};
	            var markerFormat = series.MarkerFormat;
	            result.symbolFill = colorFormatToString(markerFormat.Fill, needThemeColor, true);
	            result.symbolStroke = colorFormatToString(markerFormat.Line, needThemeColor, true);
	            var width = markerFormat.Line.Weight;
	            if (width >= 0) {
	                result.symbolStrokeWidth = width;
	            }
	            return result;
	        }
	        return keyword_null;
	    }
	
	    function getLineFormatInfoForSeries(series, needThemeColor, needRGBA) {
	        if (ChartUtility.IsPieOrDoughnutChart(series.ChartType)) {
	            return getLineFormatInfo(series.Points.Get(0), needThemeColor, needRGBA);
	        }
	        return getLineFormatInfo(series, needThemeColor, needRGBA);
	    }
	
	    function getChartInfo(series, chartType, isFirstStockSeries) {
	        var seriesChartType = series.ChartType;
	        var chartInfo;
	        switch (seriesChartType) {
	            case 12
	            :
	            case 6
	            :
	            case 15
	            :
	                chartInfo = {
	                    type: CONST_BAR
	                };
	                break;
	            case 13
	            :
	            case 16
	            :
	            case 14
	            :
	            case 17
	            :
	                chartInfo = {
	                    type: CONST_BAR,
	                    group: CONST_STACK
	                };
	                break;
	            case 19
	            :
	            case 22
	            :
	            case 20
	            :
	            case 23
	            :
	                chartInfo = {
	                    type: CONST_BAR,
	                    swapAxes: true,
	                    group: CONST_STACK
	                };
	                break;
	            case 18
	            :
	            case 21
	            :
	                chartInfo = {
	                    type: CONST_BAR,
	                    swapAxes: true
	                };
	                break;
	            case 9
	            :
	            case 5
	            :
	            case 36
	            :
	                chartInfo = {
	                    type: CONST_LINE
	                };
	                break;
	            case 26
	            :
	            case 35
	            :
	                chartInfo = {
	                    type: CONST_LINE,
	                    symbols: true
	                };
	                break;
	            case 24
	            :
	            case 25
	            :
	                chartInfo = {
	                    type: CONST_LINE,
	                    group: CONST_STACK
	                };
	                break;
	            case 27
	            :
	            case 28
	            :
	                chartInfo = {
	                    type: CONST_LINE,
	                    group: CONST_STACK,
	                    symbols: true
	                };
	                break;
	            case 8
	            :
	            case 7
	            :
	                chartInfo = {
	                    type: CONST_AREA
	                };
	                break;
	            case 37
	            :
	            case 39
	            :
	            case 38
	            :
	            case 40
	            :
	                chartInfo = {
	                    type: CONST_AREA,
	                    group: CONST_STACK
	                };
	                break;
	            case 1
	            :
	                chartInfo = {
	                    type: CONST_SCATTER
	                };
	                break;
	            case 33
	            :
	                chartInfo = {
	                    type: CONST_LINE,
	                    symbols: true,
	                    lineAspect: CONST_SPLINE
	                };
	                break;
	            case 34
	            :
	                chartInfo = {
	                    type: CONST_LINE,
	                    lineAspect: CONST_SPLINE
	                };
	                break;
	            case 11
	            :
	            case 48
	            :
	                chartInfo = {
	                    type: CONST_SCATTER,
	                    size: true
	                };
	                break;
	            case 10
	            :
	            case 4
	            :
	            case 30
	            :
	            case 31
	            :
	            case 29
	            :
	            case 32
	            :
	                chartInfo = {
	                    type: CONST_BAR,
	                    radial: true,
	                    group: CONST_STACK
	                };
	                break;
	            case 3
	            :
	            case 41
	            :
	                chartInfo = {
	                    type: CONST_BAR,
	                    radial: true,
	                    group: CONST_STACK,
	                    doughnut: true
	                };
	                break;
	            case 57
	            :
	                chartInfo = {
	                    type: CONST_SUNBURST
	                };
	                break;
	            case 58
	            :
	                chartInfo = {
	                    type: CONST_TREEMAP
	                };
	                break;
	            case 2
	            :
	                chartInfo = {
	                    type: CONST_RADAR,
	                    swapAxes: true,
	                    radar: true
	                };
	                break;
	            case 43
	            :
	                chartInfo = {
	                    type: CONST_RADAR,
	                    radar: true,
	                    swapAxes: true,
	                    area: true
	                };
	                break;
	            case 42
	            :
	                chartInfo = {
	                    type: CONST_RADAR,
	                    radar: true,
	                    swapAxes: true,
	                    marker: true,
	                    symbols: true
	                };
	                break;
	           
	           
	           
	           
	           
	           
	           
	           
	            default: 
	                chartInfo = {
	                    type: CONST_BAR
	                };
	                break;
	        }
	        if (chartType === 52 ) {
	            if (isFirstStockSeries) {
	                chartInfo.stock = true;
	                chartInfo.stockType = 2;
	            } else if (seriesChartType === 9 ) {
	                chartInfo = {
	                    type: STOCK_OHLC_TYPE,
	                    stockType: 0
	                };
	            }
	        } else if (chartType === 51 ) {
	            if (isFirstStockSeries) {
	                chartInfo.stock = true;
	                chartInfo.stockType = 2;
	            } else if (seriesChartType === 9 ) {
	                chartInfo = {
	                    type: STOCK_HLC_TYPE,
	                    stockType: 1
	                };
	            }
	        } else if (chartType === 50 ) {
	            chartInfo = {
	                type: STOCK_OHLC_TYPE,
	                stockType: 0
	            };
	        } else if (chartType === 49 ) {
	            chartInfo = {
	                type: STOCK_HLC_TYPE,
	                stockType: 1
	            };
	        }
	        var isAutoXValues = series.XValuesIsAuto(),
	            isScatter = (ChartUtility.IsScatterChart(seriesChartType) || ChartUtility.IsBubbleChart(seriesChartType));
	        if (isScatter) {
	            chartInfo.scatter = true;
	            if (isAutoXValues) {
	                chartInfo.needXNames = true;
	            }
	        }
	        return chartInfo;
	    }
	
	    function processDate(value, dateInString) {
	        if (value instanceof Date) {
	            if (dateInString) {
	                return new GeneralFormatter(DATE_FORMAT).format(value);
	            }
	           
	           
	            return DateTimeExtension.ToOADate(value);
	
	        }
	       
	        return value;
	    }
	
	    function getValue(values, index) {
	        var result = values ? values[index] : index + 1;
	       
	       
	       
	        return processDate(result);
	    }
	
	    function getDataItem(radial, serName, xValues, yValues, index, categoryName, valueName, colorName, xInfo, isAreaChart) {
	        var retObj = {};
	        var value = yValues[index], nullValue;
	        if (radial && isNullOrUndefined(value)) {
	            value = 0;
	            nullValue = true;
	        }
	        if (isAreaChart && isNullOrUndefined(value)) {
	            value = 0;
	        }
	        retObj[valueName] = processDate(value);
	        if (radial === true) {
	            retObj[categoryName] = serName;
	            var colorValue = getValue(xValues, index);
	            if (nullValue && isNullOrUndefined(colorValue)) {  
	                return keyword_null;
	            }
	            retObj[colorName] = typeof colorValue === "number" ? "" + colorValue : colorValue;
	        } else {
	            var xValue = getValue(xValues, index);
	            if ((isNullOrUndefined(value) || (isAreaChart && isNullOrUndefined(value))) && isNullOrUndefined(xValue)) {
	                return keyword_null;
	            }
	            retObj[categoryName] = xValue;
	            retObj[colorName] = serName;
	            if (xInfo) {
	                var xNames = xInfo.names;
	                retObj[TOOLTIP_X_NAME] = (xNames && xNames[index] || xValue) + ""; 
	            }
	        }
	        return retObj;
	    }
	
	    var TickMarkMap = {
	        2: "None",
	        3: "Outside",
	        1: "Inside",
	        0: "Cross"
	    };
	
	    function tickMarkToString(tickMark) {
	        return TickMarkMap[tickMark];
	    }
	
	    function getAxisTitleStyle(axis, fontSizeToString, needThemeColor, zoomFactor, needRGBA, notAddTransprent) {
	        var title = axis.AxisTitle;
	        if (title) {
	            var fontSize = title.Font.Size * zoomFactor;
	            if (fontSizeToString) {
	                fontSize += "";
	            }
	            var retValue = {
	                color: colorFormatToString(title.Font, needThemeColor, needRGBA, notAddTransprent),
	                fontFamily: title.Font.Name,
	                fontSize: fontSize
	            };
	            if (!needRGBA) {
	                retValue.transparency = getTransparencyFromColorFormat(title.Font);
	            }
	            return retValue;
	        }
	    }
	
	    var AxisPositionMap = {
	        "bottom": "Near",
	        "top": "Far",
	        "left": "Near",
	        "right": "Far"
	    };
	
	    function getAxisPositionString(axis) {
	        var str;
	        if (axis.Visible === true) {
	            var position = axis.GetAxisPostion();
	            str = AxisPositionMap[position];
	        }
	        return str || "None";
	    }
	
	    function getGridLineInfo(axis) {
	        var result = {
	            majorGrid: !!axis.MajorGridlines,
	            minorGrid: !!axis.MinorGridlines
	        };
	        var gridLineStyle = getGridLineStyle(getLineFormatInfo(axis.MajorGridlines, false, true));
	        if (gridLineStyle) {
	            result.majorGridStyle = gridLineStyle;
	        }
	        gridLineStyle = getGridLineStyle(getLineFormatInfo(axis.MinorGridlines, false, true));
	        if (gridLineStyle) {
	            result.minorGridStyle = gridLineStyle;
	        }
	
	        return result;
	    }
	
	    function getGridLineStyle(gridlineInfo) {
	        if (gridlineInfo) {
	            var lineWidth = gridlineInfo.width, lineColor = gridlineInfo.color;
	            if (lineWidth || lineColor) {
	                var gridLineStyle = {};
	                if (lineWidth) {
	                    gridLineStyle.strokeWidth = lineWidth;
	                }
	                if (lineColor) {
	                    gridLineStyle.stroke = lineColor;
	                }
	                return gridLineStyle;
	            }
	        }
	    }
	
	    function getPercentageMinMax(axis) {
	        if (!axis.MinimumScaleIsAuto && !axis.MaximumScaleIsAuto) {
	            return {min: axis.MinimumScale, max: axis.MaximumScale};
	        }
	        var tempMin = 0, tempMax = 1;
	        var tempMaxMinValue = axis.CalcualteValueAxisMinMax({}, true, true);
	        var maxValue = tempMaxMinValue.Max, minValue = tempMaxMinValue.Min;
	        if (!axis.MaximumScaleIsAuto) {
	            tempMax = axis.MaximumScale;
	        } else if (maxValue <= 0) {
	           
	            tempMax = 0;
	        }
	        if (!axis.MinimumScaleIsAuto) {
	            tempMin = axis.MinimumScale;
	        } else if (minValue < 0) {
	            if (Math.abs(minValue) > maxValue) {
	               
	                tempMin = -1;
	            } else {
	               
	               
	               
	               
	               
	               
	                tempMin = Math.floor(minValue * 5 / maxValue) / 5;
	            }
	        }
	        return {min: tempMin, max: tempMax};
	    }
	
	    function getAxisProperties(axis, needRGBA, notAddTransprent) {
	        var retValue = {
	            visible: axis.Visible,
	            tickLabelPosition: axis.TickLabelPosition === 3 ? 3 : 2,
	            format: axis.TickLabels.NumberFormat,
	            majorTickPosition: axis.MajorTickMark,
	            minorTickPosition: axis.MinorTickMark
	        };
	
	        var majorGridlines = axis.MajorGridlines;
	        var majorGridLine = getLineFormatInfo(majorGridlines, true, needRGBA) || {};
	        majorGridLine.visible = !!majorGridlines;
	        retValue.majorGridLine = majorGridLine;
	
	        var minorGridlines = axis.MinorGridlines;
	        var minorGridLine = getLineFormatInfo(minorGridlines, true, needRGBA) || {};
	        minorGridLine.visible = !!minorGridlines;
	        retValue.minorGridLine = minorGridLine;
	
	        var title = getAxisTitleStyle(axis, false, true, 1, needRGBA, notAddTransprent) || {};
	        title.text = axis.AxisTitle ? axis.AxisTitle.Text : "";
	        retValue.title = title;
	
	        if (!axis.MajorUnitIsAuto) {
	            retValue.majorUnit = axis.MajorUnit;
	        }
	
	        if (!axis.MinorUnitIsAuto) {
	            retValue.minorUnit = axis.MinorUnit;
	        }
	
	        if (axis.IsValueOrDateScaleAxis()) {
	            var min = axis.MinimumScale, max = axis.MaximumScale;
	            if (axis.IsTimeScale()) {
	                min = DateTimeExtension.FromOADate(min);
	                max = DateTimeExtension.FromOADate(max);
	            } else if (isPercentageScaleType(axis.Chart, axis.AxisGroup)) {
	                var tempMinMax = getPercentageMinMax(axis);
	                min = tempMinMax.min;
	                max = tempMinMax.max;
	                if (!retValue.format || axis.TickLabels.NumberFormatLinked) {
	                    retValue.format = "0%";
	                }
	            }
	            if (!axis.MinimumScaleIsAuto) {
	                retValue.min = min;
	            }
	            if (!axis.MaximumScaleIsAuto) {
	                retValue.max = max;
	            }
	        }
	
	        var fontFormat = axis.TickLabels.Font;
	        if (fontFormat) {
	            retValue.style = {
	                color: colorFormatToString(fontFormat, true, needRGBA, notAddTransprent),
	                fontFamily: fontFormat.Name,
	                fontSize: fontFormat.Size
	            };
	            if (!needRGBA) {
	                retValue.style.transparency = getTransparencyFromColorFormat(fontFormat);
	            }
	        }
	
	        var lineInfo = getLineFormatInfo(axis, true, needRGBA, notAddTransprent);
	        if (lineInfo) {
	            var color = "transparent";
	            if (lineInfo.color || (lineInfo.color === '' && notAddTransprent)) {
	                color = lineInfo.color;
	            }
	            retValue.lineStyle = {
	                color: color,
	                width: !isNullOrUndefined(lineInfo.width) ? lineInfo.width : 1
	            };
	            if (!needRGBA) {
	                retValue.lineStyle.transparency = lineInfo.transparency;
	            }
	        }
	
	        if (axis.Type === 0 ) {
	            retValue.categoryType = axis.ActualCategoryType;
	        }
	
	        return retValue;
	    }
	
	   
	    var DAYSDIC = {
	        0 : 1,
	        1 : 31,
	        2 : 365
	    };
	
	    function getUnitScale(axisUnit) {
	        return (DAYSDIC[axisUnit]);
	    }
	
	    function getAxisOptions(axis, type, plotNames, isPercentageScale, isNumberAxis, zoomFactor) {
	        var axisPosition = getAxisPositionString(axis);
	        var gridLineInfo = getGridLineInfo(axis);
	        var chartType = axis.Chart.ChartType;
	        var _isStockChart = isStockChart(chartType);
	        if (_isStockChart) {
	            gridLineInfo.minorGrid = false;
	            delete gridLineInfo.minorGridStyle;
	        }
	        var IsBar = ChartUtility.IsBarChart(chartType);
	        var padding = {};
	        var isYAxis = type === 'Y';
	        var isBarXAxis = !isYAxis && IsBar;
	        var isBarYAxis = isYAxis && IsBar;
	        var isPercentageScaleAxis = isPercentageScale && (( isYAxis && !IsBar) || isBarXAxis);
	        if (type === "X") {
	            padding.bottom = 5;
	            padding.top = 5;
	        } else {
	            padding.left = 5;
	            padding.right = 5;
	        }
	        var retValue = {
	            plots: plotNames,
	            type: type,
	            format: axis.TickLabels.NumberFormat,
	            majorTicks: tickMarkToString(axis.MajorTickMark),
	            minorTicks: tickMarkToString(axis.MinorTickMark),
	            majorGrid: gridLineInfo.majorGrid,
	            minorGrid: gridLineInfo.minorGrid,
	            title: axis.AxisTitle ? axis.AxisTitle.Text : "",
	            titleStyle: getAxisTitleStyle(axis, true, false, zoomFactor),
	            position: axisPosition,
	            labelStyle: {
	                padding: padding
	            }
	        };
	        if (axis.TickLabelPosition === 3) {
	            retValue.labels = false;
	        }
	        var timeScale = axis.IsTimeScale(),
	            actualMajorUnitScale = !axis.MajorUnitIsAuto ? axis.MajorUnitScale : axis.BaseUnit,
	            actualMinorUnitScale = !axis.MinorUnitIsAuto ? axis.MinorUnitScale : axis.BaseUnit,
	            majorUnitScale = timeScale ? getUnitScale(actualMajorUnitScale) : 1,
	            minorUnitScale = timeScale ? getUnitScale(actualMinorUnitScale) : 1;
	        if (!axis.MajorUnitIsAuto) {
	            retValue.majorUnit = axis.MajorUnit * majorUnitScale;
	        }
	        var minorUnit = axis.MinorUnit * minorUnitScale;
	        if (!axis.MinorUnitIsAuto) {
	            retValue.minorUnit = minorUnit;
	        }
	        var isStockYAxis = isYAxis && _isStockChart;
	        var isRadarChart = IsRadarChart(axis.Chart);
	        if (isStockYAxis) {
	            retValue.max = axis.MaximumScale;
	            retValue.min = axis.MinimumScale;
	        } else {
	            var needAutoMinMax = isNumberAxis && !isPercentageScaleAxis;
	            if (!axis.MaximumScaleIsAuto || needAutoMinMax) {
	                var max = axis.MaximumScale;
	               
	               
	               
	               
	               
	               
	               
	               
	               
	                if (timeScale && _isStockChart) {
	                    max = DateTimeExtension.FromOADate(max).valueOf();
	                }
	                retValue.max = max;
	            }
	            if (!axis.MinimumScaleIsAuto || needAutoMinMax) {
	                var min = axis.MinimumScale;
	               
	               
	               
	               
	               
	               
	               
	               
	               
	                if (timeScale && _isStockChart) {
	                    min = DateTimeExtension.FromOADate(min).valueOf();
	                }
	                retValue.min = min;
	            }
	        }
	        if (isYAxis) { 
	            if (isPercentageScaleAxis) {
	                retValue.scale = {
	                    type: "Percentage"
	                };
	            } else if (axis.ScaleType === 0) {
	                retValue.scale = {
	                    type: "Logarithmic"
	                };
	                retValue.logBase = axis.LogBase;
	            }
	           
	           
	           
	           
	           
	           
	           
	        }
	        if (isPercentageScaleAxis && isNumberAxis) {
	            var tempMinMax = getPercentageMinMax(axis);
	            retValue.min = tempMinMax.min;
	            retValue.max = tempMinMax.max;
	            if (!retValue.format || axis.TickLabels.NumberFormatLinked) {
	                retValue.format = "0%";
	            }
	        }
	        var gridLineStyle = gridLineInfo.majorGridStyle;
	        if (gridLineStyle) {
	            retValue.majorGridStyle = gridLineStyle;
	        }
	        gridLineStyle = gridLineInfo.minorGridStyle;
	        if (gridLineStyle) {
	            retValue.minorGridStyle = gridLineStyle;
	        }
	        var fontFormat = axis.TickLabels.Font;
	        if (fontFormat) {
	            retValue.textStyle = {
	                color: colorFormatToString(fontFormat, false, true),
	                fontFamily: fontFormat.Name
	            };
	            if (fontFormat.Size) {
	                retValue.textStyle.fontSize = fontFormat.Size * zoomFactor + "";
	            }
	        }
	        var lineInfo = getLineFormatInfo(axis, false, true);
	        if (lineInfo) {
	            retValue.lineStyle = {
	                stroke: lineInfo.color || "transparent",
	                strokeWidth: !isNullOrUndefined(lineInfo.width) ? lineInfo.width : 1
	            };
	            if (isRadarChart) {
	                retValue.lineStyle.strokeWidth = 0;
	            }
	        }
	        var rotationDegree = axis.TickLabels && axis.TickLabels._chartText &&
	            axis.TickLabels._chartText.TextBody && axis.TickLabels._chartText.TextBody.Rotation;
	        if (rotationDegree) {
	            retValue.labelAngle = rotationDegree;
	        }
	        if (isSunburstChart(axis.Chart.ChartType)) {
	            retValue.position = "None";
	            delete retValue.max;
	            delete retValue.min;
	        }
	       
	        if (isBarYAxis && isPercentageScale) {
	            retValue.scale = {type: "Percentage"};
	        }
	        return retValue;
	    }
	
	    function isPercentageScaleType(chart, axisGroup, allSers) {
	        if (!allSers) {
	            allSers = getAllSers(chart);
	        }
	        var i, ser, chartType;
	        for (i = 0; i < allSers.length; i++) {
	            ser = allSers[i];
	            chartType = ser.ChartType;
	            if (ser.AxisGroup === axisGroup && ChartUtility.IsStacked100Chart(chartType)) {
	                return true;
	            }
	        }
	        return false;
	    }
	
	    function getChartAreaStyle(chartArea, needThemeColor, zoomFactor, needRGBA, notAddTransprent) {
	        var result = {};
	        var chartFormat = chartArea.ChartFormat;
	        if (chartFormat) {
	            if (needRGBA) {
	                result.style = {
	                    backgroundColor: colorFormatToString(chartFormat.Fill, needThemeColor, needRGBA, notAddTransprent)
	                };
	            } else {
	                result.style = {
	                    backgroundColor: colorFormatToString(chartFormat.Fill, needThemeColor, false, notAddTransprent),
	                    transparency: getTransparencyFromColorFormat(chartFormat.Fill)
	                };
	            }
	        }
	        var fontFormat = chartArea.Font;
	        if (fontFormat) {
	            var textStyle = result.textStyle = {};
	            if (needRGBA) {
	                textStyle.color = colorFormatToString(fontFormat, needThemeColor, needRGBA, notAddTransprent);
	            } else {
	                textStyle.color = colorFormatToString(fontFormat, needThemeColor, needRGBA, notAddTransprent);
	                textStyle.transparency = getTransparencyFromColorFormat(fontFormat);
	            }
	            textStyle.fontFamily = fontFormat.Name;
	            var fontSize = fontFormat.Size;
	            if (fontSize > 0) {
	               
	                textStyle.fontSize = fontSize * zoomFactor + "";
	            }
	        }
	        return result;
	    }
	
	    function getChartAreaBorder(chartArea, sheet) {
	        var line = chartArea.Format.Line;
	        if (line.Color && line.Color.ColorType === 0 ) {
	            return keyword_null;
	        }
	        var borderStyle = {};
	        var rgbColor = colorFormatToString(line, true );
	        if (rgbColor) {
	            borderStyle.stroke = sheet.currentTheme().getColor(rgbColor);
	        }
	        var lineWidth = line.Weight > 0 ? line.Weight : 1;
	        borderStyle.strokeWidth = lineWidth;
	        var lineDashType = line.DashStyle;
	        var strokeDasharray;
	        switch (lineDashType) {
	           
	            case 1
	            :
	                strokeDasharray = lineWidth + "," + lineWidth * 3;
	                break;
	            case 2
	            :
	                strokeDasharray = lineWidth * 4 + "," + lineWidth * 3;
	                break;
	            case 3
	            :
	                strokeDasharray = lineWidth * 8 + "," + lineWidth * 3;
	                break;
	            case 4
	            :
	                strokeDasharray = lineWidth * 4 + "," + lineWidth * 3 + "," + lineWidth + "," + lineWidth * 3;
	                break;
	            case 5
	            :
	                strokeDasharray = lineWidth * 8 + "," + lineWidth * 3 + "," + lineWidth + "," + lineWidth * 3;
	                break;
	            case 6
	            :
	                strokeDasharray = lineWidth * 8 + "," + lineWidth * 3 + "," + lineWidth + "," + lineWidth * 3 + "," + lineWidth + "," + lineWidth * 3;
	                break;
	            case 7
	            :
	                strokeDasharray = lineWidth * 3 + "," + lineWidth;
	                break;
	            case 8
	            :
	                strokeDasharray = lineWidth + "," + lineWidth;
	                break;
	            case 9
	            :
	                strokeDasharray = lineWidth * 3 + "," + lineWidth + "," + lineWidth + "," + lineWidth;
	                break;
	            case 10
	            :
	                strokeDasharray = lineWidth * 3 + "," + lineWidth + "," + lineWidth + "," + lineWidth + "," + lineWidth + "," + lineWidth;
	                break;
	        }
	        if (strokeDasharray) {
	            borderStyle.strokeDasharray = strokeDasharray;
	        }
	        return borderStyle;
	    }
	
	    function getPieChartStartAngle(ser) {
	       
	        return ser.Parent.FirstSliceAngle;
	
	       
	       
	       
	       
	       
	    }
	
	    function getLegendPosition(legendPosition) {
	        var legendPositionMap = {
	            1: "Top",
	            4: "Bottom",
	            3: "Left"
	        };
	        return legendPositionMap[legendPosition] || "Right";
	    }
	
	    function getLegendOrientation(legendPosition) {
	        var orientation = "Vertical";
	        if (legendPosition === 1 ||
	            legendPosition === 4) {
	            orientation = "Horizontal";
	        }
	        return orientation;
	    }
	
	    function getLegendTextStyle(legendFont, zoomFactor) {
	        var textStyle = {};
	        var fontColor = colorFormatToString(legendFont, false, true);
	        var fontFamily = legendFont.Name;
	        var fontSize = legendFont.Size;
	        if (fontColor || fontFamily || fontSize > 0) {
	           
	            if (fontColor) {
	                textStyle.color = fontColor;
	            }
	           
	            if (fontFamily) {
	                textStyle.fontFamily = fontFamily;
	            }
	           
	            if (fontSize > 0) {
	                textStyle.fontSize = fontSize * zoomFactor + "";
	            }
	        }
	        return textStyle;
	    }
	
	    function getPlotEncodingValue(chartInfo, valueName, categoryName) {
	        var type = chartInfo.type, isStock = chartInfo.stock;
	        var fieldValue;
	        if (type === STOCK_OHLC_TYPE) {
	            fieldValue = {x: 'date', high: 'high', low: 'low', open: 'open', close: 'close'};
	        } else if (type === STOCK_HLC_TYPE) {
	            fieldValue = {x: 'date', high: 'high', low: 'low', close: 'close'};
	        } else if (isStock) {
	            fieldValue = 'date, volume';
	        } else if (type === CONST_TREEMAP || type === CONST_SUNBURST) {
	            fieldValue = CONST_2016_CHART_VALUE_NAME;
	        } else if (type === CONST_RADAR) {
	            fieldValue = valueName;
	        } else {
	           
	           
	           
	           
	           
	            fieldValue = categoryName + ", " + valueName;
	        }
	        return [
	            {
	                field: fieldValue,
	                excludeNulls: true
	            }
	        ];
	    }
	
	    function getPlotEncodingDetail(chartInfo, colorName, categoryName, series) {
	        var type = chartInfo.type, field = colorName;
	        var catCount = series.GetCatCount();
	        if (type === CONST_SUNBURST || type === CONST_TREEMAP) {
	            field = '';
	            for (var i = 0; i < catCount; i++) {
	                if (i === 0) {
	                    field += 'level' + i;
	                } else {
	                    field += ' > level' + i;
	                }
	            }
	        }
	        var retConfig = {
	            field: field
	        };
	        if (type === CONST_SUNBURST) {
	            retConfig.group = "Stack";
	        }
	        if (chartInfo.group) {
	            retConfig.group = chartInfo.group;
	        }
	        return [retConfig];
	    }
	
	    function getPlotEncodingColor(chartInfo, colorName) {
	        var type = chartInfo.type, field = colorName;
	        if (type === CONST_TREEMAP || type === CONST_SUNBURST) {
	            field = CONST_LEVEL + '0';
	        }
	        return {field: field};
	    }
	
	    function getDataLabelTemplate(dataLabels, seriesName, colorName, categoryName, valueName, chartInfo, categoryCount) {
	        var showValue = dataLabels.ShowValue;
	        var showCategoryName = dataLabels.ShowCategoryName;
	        var showSeriesName = dataLabels.ShowSeriesName;
	        var showPercentage = dataLabels.ShowPercentage;
	        var items = [];
	        var radial = chartInfo.radial;
	        var chartType = chartInfo.type;
	        var isSunburstOrTreeMapChart = chartType === CONST_TREEMAP || chartType === CONST_SUNBURST;
	       
	        if (isSunburstOrTreeMapChart) {
	            return keyword_null;
	        }
	        if (showSeriesName) {
	            items.push("{" + (radial ? categoryName : colorName) + ".value}");
	           
	           
	           
	        }
	        if (showCategoryName) {
	            if (chartType === CONST_TREEMAP) {
	                items.push("{" + CONST_TREEMAP_CAT + "}\n{" + CONST_TREEMAP_SUBCAT + "}");
	            } else if (chartType === CONST_SUNBURST) {
	                var template = '';
	                for (var i = 0; i < categoryCount; i++) {
	                    template += "{" + CONST_LEVEL + i + "} ";
	                }
	                items.push(template);
	            } else {
	                items.push("{" + (radial ? colorName : categoryName) + ".value}");
	            }
	        }
	        if (showValue) {
	            var valueFormat = "";
	           
	            var dataLabelFormat = dataLabels.NumberFormat;
	            if (dataLabelFormat) {
	                valueFormat = ": " + dataLabelFormat;  
	            }
	            items.push("{" + valueName + ".value" + valueFormat + "}");
	
	        }
	        if (showPercentage) {
	            items.push("{PercentageCategory:0%}");
	           
	           
	           
	        }
	        return items.length > 0 ? items.join(dataLabels.Separator) : keyword_null;
	    }
	
	    function getDataLabelFields(dataLabels, seriesName, colorName, categoryName, valueName, chartInfo, categoryCount) {
	        if (!dataLabels) {
	            return keyword_null;
	        }
	        var showValue = dataLabels.ShowValue;
	        var showCategoryName = dataLabels.ShowCategoryName;
	        var showSeriesName = dataLabels.ShowSeriesName;
	        var showPercentage = dataLabels.ShowPercentage;
	        var radial = chartInfo.radial;
	        var chartType = chartInfo.type;
	        var isSunburstOrTreeMapChart = chartType === CONST_SUNBURST || chartType === CONST_TREEMAP;
	        var labelTextField = [];
	        if (showValue || showPercentage) {
	            if (isSunburstOrTreeMapChart) {
	                labelTextField.push({field: CONST_2016_CHART_VALUE_NAME});
	            } else {
	                labelTextField.push({field: valueName});
	            }
	        }
	        if (showCategoryName) {
	            if (isSunburstOrTreeMapChart) {
	                for (var i = 0; i < categoryCount; i++) {
	                    labelTextField.push({field: CONST_LEVEL + i});
	                }
	            } else {
	                labelTextField.push({field: radial ? colorName : categoryName});
	            }
	        }
	        if (showSeriesName) {
	            if (isSunburstOrTreeMapChart) {
	                labelTextField.push({field: seriesName});
	            } else {
	                labelTextField.push({field: radial ? categoryName : colorName});
	            }
	        }
	       
	       
	        var result;
	        if (isSunburstOrTreeMapChart) {
	            result = {
	                "field": "level0"
	            };
	        } else {
	            result = labelTextField.length > 0 ? labelTextField : keyword_null;
	        }
	        return result;
	    }
	
	    function getTooltipTemplate(chartInfo, colorName, categoryName, valueName, format) {
	        var type = chartInfo.type, isStock = chartInfo.stock, radial = chartInfo.radial, isScatter = chartInfo.scatter;
	        var template;
	        if (type === STOCK_OHLC_TYPE) {
	            template = "{date.name}:{date.value}\n{high.name}:{high.value}\n{low.name}:{low.value}\n{open.name}:{open.value}\n{close.name}:{close.value}";
	        } else if (type === STOCK_HLC_TYPE) {
	            template = "{date.name}:{date.value}\n{high.name}:{high.value}\n{low.name}:{low.value}\n{close.name}:{close.value}";
	        } else if (isScatter) {
	            var pointFieldName = chartInfo.needXNames ? TOOLTIP_X_NAME : categoryName;
	            template = "Series \"{" + colorName + ".value}\" Point \"{" + pointFieldName + ".value}\" \n({" + categoryName + ".value}, {" + valueName + ".value})";
	            if (chartInfo.size) {
	                template += " Size: {" + BUBBLE_SIZE_NAME + ".value}";
	            }
	        } else if (isStock) {
	            template = "{date.name}:{date.value}\n{volume.name}:{volume.value}";
	        } else if (radial) {
	            template = "Series \"{" + categoryName + ".value}\" Point \"{" + colorName + ".value}\" \nValue: {" + valueName + ".value: " + (format || "#,##0") + "} ({PercentageCategory:0%})";
	        } else if (type === CONST_SUNBURST || type === CONST_TREEMAP) {
	            template = '';
	        } else {
	            template = "Series \"{" + colorName + ".value}\" Point \"{" + categoryName + ".value}\" \nValue: {" + valueName + ".value: " + (format || "General") + "}";
	        }
	        return template;
	    }
	
	    function getTooltipFields(chartInfo, colorName, categoryName, valueName, categoryCount) {
	        var type = chartInfo.type, isStock = chartInfo.stock;
	        var isSunburstOrTreeMapChart = type === CONST_SUNBURST || type === CONST_TREEMAP;
	        var fieldNames;
	        if (type === STOCK_OHLC_TYPE) {
	            fieldNames = ['date', 'high', 'low', 'open', 'close'];
	        } else if (type === STOCK_HLC_TYPE) {
	            fieldNames = ['date', 'high', 'low', 'close'];
	        } else if (isStock) {
	            fieldNames = ['date', 'volume'];
	        } else if (isSunburstOrTreeMapChart) {
	            fieldNames = [];
	            for (var i = 0; i < categoryCount; i++) {
	                fieldNames.push(CONST_LEVEL + i);
	            }
	        } else {
	            fieldNames = [valueName, categoryName, colorName];
	            if (chartInfo.size) {  
	                fieldNames.push(BUBBLE_SIZE_NAME);
	            }
	            if (chartInfo.needXNames) {
	                fieldNames.push(TOOLTIP_X_NAME);
	            }
	        }
	        var fields = [];
	        fieldNames.forEach(function (name) {
	            fields.push({field: name});
	        });
	        if (isSunburstOrTreeMapChart) {
	            fields.push({field: CONST_2016_CHART_VALUE_NAME, aggregate: "Sum"});
	        }
	        return fields;
	    }
	
	    function getPlotConfigText(dataLabels, seriesName, categoryName, valueName, colorName, chartInfo, zoomFactor, categoryCount) {
	        var textConfig = {};
	        var dataLabelPosition = dataLabels.Position;
	        if (typeof dataLabelPosition === 'number' && dataLabelPosition >= 0 && dataLabelPosition <= 8) {
	            var dict = {
	                0: "Auto",
	                1: "Inside",
	                2: "Center",
	                3: "Inside",
	                4: "Inside",
	                5: "Center",
	                6: "Outside",
	                7: "Center",
	                8: "Outside"
	            };
	            var pos = dict[dataLabelPosition];
	            if (pos) {
	                textConfig.position = pos;
	            }
	        }
	        if (dataLabels.ShowLeaderLines && textConfig.position === "Outside") {
	            var leaderLinesLineInfo = getLineFormatInfo(dataLabels.LeaderLines, false, true);
	            if (leaderLinesLineInfo) {
	                textConfig.connectingLine = {
	                    stroke: leaderLinesLineInfo.color || "transparent",
	                    strokeWidth: !isNullOrUndefined(leaderLinesLineInfo.width) ? leaderLinesLineInfo.width : 1
	                };
	            }
	        } else {
	            textConfig.connectingLine = {
	                stroke: "transparent"
	            };
	        }
	        var style = textConfig.style = {};
	        var dataLabelsLineInfo = getLineFormatInfo(dataLabels, false, true);
	        if (dataLabelsLineInfo) {
	            textConfig.borderStyle = {
	                strokeWidth: !isNullOrUndefined(dataLabelsLineInfo.width) ? dataLabelsLineInfo.width : 1,
	                stroke: dataLabelsLineInfo.color || "transparent"
	            };
	        }
	        var dataLabelFillFormat = dataLabels.Format && dataLabels.Format.Fill;
	        var dataLabelFillColor = colorFormatToString(dataLabelFillFormat, false, true);
	       
	        style.backgroundColor = dataLabelFillColor || "transparent";
	        var dataLabelFont = dataLabels.Font;
	        var dataLabelFontColor = colorFormatToString(dataLabelFont, false, true);
	        var dataLabelFontFamily = dataLabelFont && dataLabelFont.Name;
	        var dataLabelFontSize = dataLabelFont && dataLabelFont.Size;
	        if (dataLabelFontColor || dataLabelFontFamily || dataLabelFontSize > 0) {
	            var labelStyle = textConfig.textStyle = {};
	           
	            if (dataLabelFontColor) {
	                labelStyle.color = dataLabelFontColor;
	            }
	           
	            if (dataLabelFontFamily) {
	                labelStyle.fontFamily = dataLabelFontFamily;
	            }
	           
	            if (dataLabelFontSize > 0) {
	                labelStyle.fontSize = dataLabelFontSize * zoomFactor + "";
	            }
	        }
	       
	        var labelTemplateString = getDataLabelTemplate(dataLabels, seriesName, colorName, categoryName, valueName, chartInfo, categoryCount);
	        var chartType = chartInfo.type;
	        var isSunburstOrTreeMapChart = chartType === CONST_TREEMAP || chartType === CONST_SUNBURST;
	       
	        if (isSunburstOrTreeMapChart) {
	            var showCategoryName = dataLabels.ShowCategoryName;
	            if (!showCategoryName) {
	                textConfig = {textStyle: {color: "transparent"}, style: {backgroundColor: "transparent"}};
	            }
	        } else if (labelTemplateString) {
	            textConfig.template = labelTemplateString;
	        }
	        return textConfig;
	    }
	
	    function getPlotEncodings(chartInfo, chartType, valueName, colorName, series, categoryName) {
	        var plotItemEncodings = {};
	       
	       
	       
	        plotItemEncodings.values = getPlotEncodingValue(chartInfo, valueName, categoryName);
	       
	       
	       
	       
	        var type = chartInfo.type;
	        if (type === CONST_RADAR) {
	            plotItemEncodings.category = {
	                field: categoryName,
	                excludeNulls: true
	            };
	        }
	        plotItemEncodings.details = getPlotEncodingDetail(chartInfo, colorName, categoryName, series);
	        plotItemEncodings.color = getPlotEncodingColor(chartInfo, colorName);
	        if (chartInfo.size) {
	            plotItemEncodings.size = {
	                field: BUBBLE_SIZE_NAME
	            };
	        }
	       
	        var labelTextField = getDataLabelFields(series.GetDataLabels(), series.Name, colorName, categoryName, valueName, chartInfo, series.GetCatCount());
	        if (labelTextField) {
	            plotItemEncodings.text = labelTextField;
	        }
	       
	        plotItemEncodings.tooltip = getTooltipFields(chartInfo, colorName, categoryName, valueName, series.GetCatCount());
	        return plotItemEncodings;
	    }
	
	    function getPlotConfig(chartInfo, chartType, seriesGroup, categoryName, valueName, colorName, zoomFactor, useAnimation) {
	        var series = seriesGroup[0];
	        var plotItemConfig = {};
	       
	        if (!chartInfo.radial) {
	            plotItemConfig.clippingMode = 'Clip';           
	        }
	       
	        var dataLabels = series.GetDataLabels();
	        if (dataLabels) {
	            plotItemConfig.text = getPlotConfigText(dataLabels, series.Name, categoryName, valueName, colorName, chartInfo, zoomFactor, series.GetCatCount());
	        }
	       
	        plotItemConfig.tooltip = {
	           
	            style: {
	                borderStyle: {
	                    stroke: "#767676"
	                },
	                backgroundColor: "white"
	            },
	            textStyle: {
	                color: "#575757",
	                fontFamily: "Calibri, Arial",
	                fontSize: 14 * zoomFactor
	            },
	            template: getTooltipTemplate(chartInfo, colorName, categoryName, valueName, dataLabels && dataLabels.NumberFormat)//tooltip has no format, so borrow from data labels
	        };
	
	        if (chartInfo.swapAxes) {
	            plotItemConfig.swapAxes = true;
	        }
	        if (chartInfo.symbols) {
	            plotItemConfig.symbols = true;
	        }
	        if (chartInfo.lineAspect) {
	            plotItemConfig.lineAspect = chartInfo.lineAspect;
	        }
	        if (chartInfo.radial) {
	            plotItemConfig.axisMode = CONST_RADIAL;
	            plotItemConfig.startAngle = getPieChartStartAngle(series);
	            if (chartInfo.doughnut) {
	                plotItemConfig.innerRadius = series.Parent.DoughnutHoleSize / 100;
	            }
	            plotItemConfig.sweep = 360;
	        }
	        if (chartInfo.radar) {
	            plotItemConfig.axisMode = CONST_POLYGONAL;
	            plotItemConfig.startAngle = getPieChartStartAngle(series);
	        }
	       
	        if (!isStockChart(chartType)) {
	            var allLineInfoAreSame = allItemsAreSame(seriesGroup);
	            var is2016Chart = IsSunburstOrTreemapChart(series.ChartType);
	            if (is2016Chart || seriesGroup.length <= 1 || allLineInfoAreSame) {
	                if (!plotItemConfig.style) {
	                    plotItemConfig.style = {};
	                }
	                var seriesLineInfo = getLineFormatInfoForSeries(series, false, true);
	                var seriesLineWidth = seriesLineInfo && seriesLineInfo.width || 0,
	                    seriesLineColor = seriesLineInfo && seriesLineInfo.color;
	                if (seriesLineWidth >= 0 || seriesLineColor) {
	                    if (seriesLineWidth >= 0) {
	                        plotItemConfig.style.strokeWidth = seriesLineWidth;
	                    }
	                   
	                    if (seriesLineColor && !ChartUtility.IsLineChart(series.ChartType)) {
	                        plotItemConfig.style.stroke = seriesLineColor;
	                    }
	                }
	                var markerInfo = getMarkerInfoForSeries(series, false);
	                if (markerInfo) {
	                    plotItemConfig.style.symbolFill = markerInfo.symbolFill;
	                    plotItemConfig.style.symbolStroke = markerInfo.symbolStroke;
	                    if (!isNullOrUndefined(markerInfo.symbolStrokeWidth)) {
	                        plotItemConfig.style.symbolStrokeWidth = markerInfo.symbolStrokeWidth;
	                    }
	                }
	            }
	
	            var rules = [];
	            if (seriesGroup.length > 1 && !allLineInfoAreSame && !is2016Chart) {
	                var isRadar = chartInfo.type === CONST_RADAR;
	                rules = rules.concat(getColorRules(seriesGroup, colorName, chartInfo.type === CONST_LINE || chartInfo.type === CONST_AREA || isRadar));
	            }
	            if (rules.length > 0) {
	                plotItemConfig.rules = rules;
	            }
	        } else if (!isNullOrUndefined(chartInfo.stockType)) {
	            plotItemConfig.style = plotItemConfig.style || {};
	            if (chartInfo.stockType === 1) {
	                plotItemConfig.style.stroke = "#168A16";//TODO
	            } else if (chartInfo.stockType === 0) {
	                plotItemConfig.style.fill = "#666666";
	                plotItemConfig.style.stroke = "#666666";
	            } else if (chartInfo.stockType === 2) {
	                plotItemConfig.style.stroke = "#5B9BD4";//TODO
	            }
	        }
	
	        if (isSunburstChart(chartType)) {
	            plotItemConfig.axisMode = CONST_RADIAL;
	            plotItemConfig.startAngle = -Math.PI / 2;
	           
	            plotItemConfig.innerRadius = 0.3;
	        }
	       
	        if (useAnimation) {
	            var animationOptions;
	            if (ChartUtility.IsAnyPieChart(chartType)) {
	                animationOptions = PIE_ANIMATION;
	            } else if (isColumnChart(chartType) || isBarChart(chartType)) {
	                animationOptions = BAR_ANIMATION;
	            } else if (isLineChart(chartType)) {
	                animationOptions = LINE_ANIMATION;
	            }
	            if (animationOptions) {
	                plotItemConfig.loadAnimation = animationOptions[0];
	                plotItemConfig.updateAnimation = animationOptions[1];
	            }
	        }
	        return plotItemConfig;
	    }
	
	    function allItemsAreSame(seriesGroup) {
	        var lineInfoArray = [], markerInfoArray = [];
	        for (var i = 0; i < seriesGroup.length; i++) {
	            lineInfoArray.push(getLineFormatInfoForSeries(seriesGroup[i], false, true));
	            markerInfoArray.push(getMarkerInfoForSeries(seriesGroup[i], false));
	        }
	        var allAreSame = true;
	        if (lineInfoArray.length > 0) {
	            var firstLineInfo = lineInfoArray[0], firstLineColor = firstLineInfo && firstLineInfo.color,
	                firstLineWidth = firstLineInfo && firstLineInfo.width;
	            var firstMarkerInfo = markerInfoArray[0], firstMarkerFill = firstMarkerInfo && firstMarkerInfo.symbolFill,
	                firstMarkerStroke = firstMarkerInfo && firstMarkerInfo.symbolStroke,
	                firstMarkerStrokeWidth = firstMarkerInfo && firstMarkerInfo.symbolStrokeWidth;
	            for (i = 1; i < lineInfoArray.length; i++) {
	                var lineInfo = lineInfoArray[i], lineColor = lineInfo && lineInfo.color,
	                    lineWidth = lineInfo && lineInfo.width;
	                if (firstLineColor !== lineColor || firstLineWidth !== lineWidth) {
	                    allAreSame = false;
	                    break;
	                }
	                var markerInfo = markerInfoArray[i], markerFill = markerInfo && markerInfo.symbolFill,
	                    markerStroke = markerInfo && markerInfo.symbolStroke,
	                    markerStrokeWidth = markerInfo && markerInfo.symbolStrokeWidth;
	                if (firstMarkerFill !== markerFill || firstMarkerStroke !== markerStroke || firstMarkerStrokeWidth !== markerStrokeWidth) {
	                    allAreSame = false;
	                    break;
	                }
	            }
	        }
	        return allAreSame;
	    }
	
	    function getColorRules(seriesGroup, colorName, forLines) {
	        var rules = [], seriesNameCacheObj = {};
	        for (var i = 0; i < seriesGroup.length; i++) {
	            var series = seriesGroup[i];
	            var seriesLineInfo = getLineFormatInfoForSeries(series, false, true);
	            var seriesLineColor = seriesLineInfo && seriesLineInfo.color,
	                seriesLineWidth = seriesLineInfo && seriesLineInfo.width;
	            var properties = [];
	            if (seriesLineColor) {
	                properties.push({
	                    name: "style.stroke",
	                    value: seriesLineColor
	                });
	            }
	            if (seriesLineWidth || seriesLineWidth === 0) {
	                properties.push({
	                    name: "style.strokeWidth",
	                    value: seriesLineWidth
	                });
	            } else {
	                properties.push({
	                    name: "style.strokeWidth",
	                    value: 0
	                });
	            }
	            var markerInfo = getMarkerInfoForSeries(series, false);
	            if (markerInfo) {
	                properties.push({
	                    name: "style.symbolFill",
	                    value: markerInfo.symbolFill
	                });
	                properties.push({
	                    name: "style.symbolStroke",
	                    value: markerInfo.symbolStroke
	                });
	                if (!isNullOrUndefined(markerInfo.symbolStrokeWidth)) {
	                    properties.push({
	                        name: "style.symbolStrokeWidth",
	                        value: markerInfo.symbolStrokeWidth
	                    });
	                }
	            }
	            var seriesName = getSeriesName(series, seriesNameCacheObj);
	            if (properties.length > 0 && seriesName) {
	               
	                var type = forLines ? "Group" : "DataPoint";
	                rules.push({
	                    condition: "current.items[0]." + colorName + " = \"" + seriesName + "\"",
	                    type: type,
	                    actions: [
	                        {
	                            targetElement: type,
	                            properties: properties
	                        }
	                    ]
	                });
	            }
	        }
	        return rules;
	    }
	
	    function getPlotItem(chartInfo, chartType, name, seriesGroup, categoryName, valueName, colorName, zoomFactor, useAnimation) {
	        var plotItem = {
	            name: name,
	            type: convertPlotChartType(chartInfo)
	        };
	        plotItem.encodings = getPlotEncodings(chartInfo, chartType, valueName, colorName, seriesGroup[0], categoryName);
	        plotItem.config = getPlotConfig(chartInfo, chartType, seriesGroup, categoryName, valueName, colorName, zoomFactor, useAnimation);
	        return plotItem;
	    }
	
	    function convertPlotChartType(chartInfo) {
	        if (chartInfo.type === CONST_SUNBURST) {
	            return CONST_BAR;
	        } else if (chartInfo.type === CONST_RADAR) {
	            if (chartInfo.area) {
	                return CONST_AREA;
	            }
	            return CONST_LINE;
	        }
	        return chartInfo.type;
	    }
	
	    function getPieChartSeriesColors(series, needThemeColor, needRGBA, notAddTransprent) {
	        var seriesPoints = series.Points, pointNumber = seriesPoints.Count;
	        var colors = [];
	        for (var i = 0; i < pointNumber; i++) {
	            var point = seriesPoints.Get(i);
	            var fillColor = point.getFillColor(needThemeColor, needRGBA, notAddTransprent);
	            if (fillColor || fillColor === '') {
	                colors.push(fillColor);
	            }
	        }
	        return colors;
	    }
	
	    function getPieChartSeriesColorsTransparency(series) {
	        var seriesPoints = series.Points, pointNumber = seriesPoints.Count;
	        var colors = [];
	        for (var i = 0; i < pointNumber; i++) {
	            var point = seriesPoints.Get(i);
	            var transparency = point.getFillColorTransparency();
	            if (!isNullOrUndefined(transparency)) {
	                colors.push(transparency);
	            }
	        }
	        return colors;
	    }
	
	    function addPieChartSeriesColors(colors, series, needRGBA) {
	        var pointColors = getPieChartSeriesColors(series, false, needRGBA), length = pointColors.length;
	        colors.length = 0;
	        for (var i = 0; i < length; i++) {
	            colors.push(pointColors[i]);
	        }
	    }
	
	    function addSeriesColors(fillColors, ser, chartInfo) {
	        var seriesLineColor, seriesFillColor;
	        if (chartInfo.type === CONST_LINE) {
	            seriesLineColor = ser.getLineColor(false, true);
	            if (seriesLineColor) {
	                fillColors.push(seriesLineColor);
	            }
	        } else if (chartInfo.type === CONST_RADAR) {
	            if (chartInfo.area) {
	                seriesFillColor = ser.getFillColor(false, true);
	                if (seriesFillColor) {
	                    fillColors.push(seriesFillColor);
	                }
	            } else if (chartInfo.marker) {
	                seriesFillColor = ser.getMarkerFillColor(false, true);
	                if (seriesFillColor) {
	                    fillColors.push(seriesFillColor);
	                }
	            } else {
	                seriesLineColor = ser.getLineColor(false, true);
	                if (seriesLineColor) {
	                    fillColors.push(seriesLineColor);
	                }
	            }
	        } else if (chartInfo.type === CONST_BAR || chartInfo.type === CONST_AREA) {
	            if (chartInfo.radial === true) {
	                addPieChartSeriesColors(fillColors, ser, true);
	            } else {
	                seriesFillColor = ser.getFillColor(false, true);
	                if (seriesFillColor) {
	                    fillColors.push(seriesFillColor);
	                }
	            }
	        } else if (chartInfo.type === CONST_SCATTER) {
	            if (chartInfo.size) {
	                seriesFillColor = ser.getFillColor(false, true);
	                if (seriesFillColor) {
	                    fillColors.push(seriesFillColor);
	                }
	            } else {
	                seriesFillColor = ser.getMarkerFillColor(false, true);
	                if (seriesFillColor) {
	                    fillColors.push(seriesFillColor);
	                }
	            }
	        } else if (chartInfo.type === CONST_SUNBURST || chartInfo.type === CONST_TREEMAP) {
	            var dataPoints = ser.dataPoints();
	            var sprtIndex = ser._chartData2016ModelCalHelper.GetSunBurstOrTreemapOrder();
	            for (var i = 0; i < dataPoints._length(); i++) {
	                var dataPoint = dataPoints._get(sprtIndex[i]);
	                if (dataPoint) {
	                    fillColors[i] = dataPoint.getFillColor(false, true);
	                }
	            }
	        }
	    }
	
	    var XFIELDNAME_SUFFIX = {
	        0 : '',
	        1 : '2'
	    };
	
	    function getXFieldName(series) {
	        return CATEGORY_NAME + XFIELDNAME_SUFFIX[series.AxisGroup];
	    }
	
	   
	   
	   
	    var PaintPriority = {
	        secondaryLine: 1,
	        primaryLine: 2,
	        secondaryOther: 11,
	        primaryOther: 12,
	        secondaryArea: 21,
	        primaryArea: 22
	    };
	
	    function getSeriesPriorityValue(axisGroup, seriesPaintedType) {
	        var priorityValue = 0;
	       
	        if (axisGroup === 0) {
	            if (seriesPaintedType === CONST_LINE) {
	                priorityValue = PaintPriority.primaryLine;
	            } else if (seriesPaintedType === CONST_AREA) {
	                priorityValue = PaintPriority.primaryArea;
	            } else {
	                priorityValue = PaintPriority.primaryOther;
	            }
	        } else if (axisGroup === 1) {
	            if (seriesPaintedType === CONST_LINE) {
	                priorityValue = PaintPriority.secondaryLine;
	            } else if (seriesPaintedType === CONST_AREA) {
	                priorityValue = PaintPriority.secondaryArea;
	            } else {
	                priorityValue = PaintPriority.secondaryOther;
	            }
	        }
	        return priorityValue;
	    }
	
	    function getSeriesPaintOrderInfo(allSers, shapeChartType) {
	        var seriesGroups = {};
	        var seriesGroupsOrder = [], i;
	        for (i = 0; i < allSers.length; i++) {
	            var tempSer = allSers[i], serValues = tempSer.Values;
	           
	            if (serValues && serValues.length > 0) {
	                var currentGroupName = tempSer._getUniqueName();
	                if (!seriesGroups[currentGroupName]) {
	                    seriesGroups[currentGroupName] = [tempSer];
	                    var tempChartInfo = getChartInfo(tempSer, shapeChartType, i === 0);
	                    var seriesPriorityValue = getSeriesPriorityValue(tempSer.AxisGroup, tempChartInfo.type);
	                    seriesGroupsOrder.push({
	                        type: currentGroupName,
	                        value: seriesPriorityValue,
	                        chartInfo: tempChartInfo
	                    });
	                } else {
	                    seriesGroups[currentGroupName].push(tempSer);
	                }
	            }
	        }
	        if (seriesGroupsOrder.length > 1) {
	            seriesGroupsOrder.sort(function (a, b) {
	                return b.value - a.value;
	            });
	        }
	        return {
	            serGroupsOrder: seriesGroupsOrder,
	            serGroups: seriesGroups
	        };
	    }
	
	    function getPlots(seriesPaintOrderInfo, shapeChartType, plotNames, plotNames2, zoomFactor, useAnimation) {
	        var plots = [];
	        var seriesGroupsOrder = seriesPaintOrderInfo.serGroupsOrder,
	            seriesGroups = seriesPaintOrderInfo.serGroups;
	        for (var j = 0; j < seriesGroupsOrder.length; j++) {
	            var groupName = seriesGroupsOrder[j].type, chartInfo = seriesGroupsOrder[j].chartInfo;
	            var serGroup = seriesGroups[groupName];
	            var firstSeries = serGroup[0];
	            var plotItem = getPlotItem(chartInfo, shapeChartType, "plot" + (j + 1), serGroup, getXFieldName(firstSeries), VALUE_NAME + groupName, COLOR_NAME + groupName, zoomFactor, useAnimation);
	            plots.push(plotItem);
	            var axisGroup = firstSeries.AxisGroup;
	            if (axisGroup === 0) {
	                plotNames.push(plotItem.name);
	            } else if (axisGroup === 1) {
	                plotNames2.push(plotItem.name);
	            }
	        }
	        return plots;
	    }
	
	    var stockFieldsMap = {
	        49: ["high", "low", "close"],
	        50: ["open", "high", "low", "close"],
	        51: ["volume", "high", "low", "close"] ,
	        52: ["volume", "open", "high", "low", "close"]
	    };
	
	    function getNotAutoXValues(allSers, axisGroup) {
	        for (var i = 0; i < allSers.length; i++) {
	            var ser = allSers[i];
	            if (ser.AxisGroup === axisGroup && !ser.XValuesIsAuto()) {
	                return ser.XValues;
	            }
	        }
	    }
	
	    var _strRepeat;
	
	    function _repeatString(count) {
	        var s = '', str = '' + this;
	        for (var i = 0; i < count; i++) {
	            s += str;
	        }
	        return s;
	    }
	
	    function getRepeatString(str, count) {
	        if (!_strRepeat) {
	            _strRepeat = ''.repeat || _repeatString;
	        }
	        return _strRepeat.call(str, count);
	    }
	
	    function isDateType(value) {
	        return value instanceof Date;
	    }
	
	    function getUniqueValues(values) {
	        var result = values.slice();
	        var names = {};
	        names[values[0]] = 1;
	        if (isNullOrUndefined(values[0])) {
	            result[0] = '';
	        }
	        if (!isDateType(result[0])) {
	            result[0] = result[0] + '';
	        }
	        for (var i = 1, length = values.length; i < length; i++) {
	            if (!isDateType(result[i])) {
	                var value = values[i], count = names[value];
	                var tempValue = '';
	                if (count) {   
	                    tempValue = getRepeatString(' ', count);
	                    names[value]++;
	                } else {
	                    names[value] = 1;
	                }
	                result[i] = isNullOrUndefined(value) ? tempValue : value + tempValue;
	            }
	        }
	        return result;
	    }
	
	    function getDataImp(chart, allSers, callback) {
	        var i, ser, chartInfo;
	        var shapeChartType = chart.ChartType;
	        var xValues, yValues;
	        if (isStockChart(shapeChartType)) {
	            var seriesNameArray = stockFieldsMap[shapeChartType];
	            var stockData = {};
	            for (i = 0; i < allSers.length; i++) {
	                ser = allSers[i];
	                var seriesName = seriesNameArray[i];
	                xValues = ser.XValues;
	                yValues = ser.Values;
	                if (!stockData.date) {
	                    if (!ChartUtility.AreAllDate(xValues)) {
	                        return;
	                    }
	                    stockData.date = xValues;
	                }
	                stockData[seriesName] = yValues;
	            }
	            var stockDataLength = stockData.date && stockData.date.length;
	            for (i = 0; i < stockDataLength; i++) {
	                var dataItem = {
	                    date: processDate(stockData.date[i], true),
	                    high: stockData.high[i],
	                    low: stockData.low[i],
	                    close: stockData.close[i]
	                };
	                if (stockData.open) {
	                    dataItem.open = stockData.open[i];
	                }
	                if (stockData.volume) {
	                    dataItem.volume = stockData.volume[i];
	                }
	
	                if (callback(dataItem)) {
	                    return;
	                }
	            }
	        } else {
	            var notAutoXValuesInPrimary = getNotAutoXValues(allSers, 0);
	            var notAutoXValuesInSecondary = getNotAutoXValues(allSers, 1);
	            var seriesNameCacheObj = {};
	            var barChartCache = {barChartXvaluesCache:[], axisGroup:null}, isNotHasXValuesRefersBarSeries;
	            for (i = 0; i < allSers.length; i++) {
	                ser = allSers[i];
	                var currentGroupName = ser._getUniqueName();
	                chartInfo = getChartInfo(ser);
	                if (!ser.XValuesIsAuto()) {
	                    xValues = ser.XValues;
	                } else {
	                    xValues = ser.AxisGroup === 0 ? notAutoXValuesInPrimary : notAutoXValuesInSecondary;
	                }
	                isNotHasXValuesRefersBarSeries = isBarChart(ser.ChartType) && isEmptyObject(ser._xValuesRefers);
	                if (isNotHasXValuesRefersBarSeries) {
	                    if (barChartCache.axisGroup === null) {
	                        barChartCache.barChartXvaluesCache = xValues;
	                        barChartCache.axisGroup = ser.AxisGroup;
	                    } else {
	                        xValues = barChartCache.barChartXvaluesCache;
	                    }
	                }
	                var needXNames = chartInfo.needXNames, xInfo;
	                if (needXNames) {
	                    xInfo = {names: ser._xValues};
	                }
	                yValues = ser.Values;
	                var bubbleSizes;
	                if (chartInfo.size) {   
	                    bubbleSizes = ser.GetBubbleSizes();
	                }
	                var axis = chart.Axes.GetAxis(0 , ser.AxisGroup);
	                if (xValues && axis && !axis.IsValueOrDateScaleAxis()) {
	                    xValues = getUniqueValues(xValues);
	                }
	                var serName = getSeriesName(ser, seriesNameCacheObj),
	                    yValuesLength = yValues && yValues.length;
	                for (var j = 0; j < yValuesLength; j++) {
	                    var isAreaChart = chartInfo.type === "Area";
	                    var data = getDataItem(chartInfo.radial, serName, xValues, yValues, j, getXFieldName(ser), VALUE_NAME + currentGroupName, COLOR_NAME + currentGroupName, xInfo, isAreaChart);
	                    if (data) {
	                        if (bubbleSizes && bubbleSizes.length > 0) {
	                            data[BUBBLE_SIZE_NAME] = bubbleSizes[j];
	                        }
	                        if (callback(data, ser)) {
	                            return;
	                        }
	                    }
	                }
	            }
	        }
	    }
	
	    function isNullVauleItem(obj) {
	        if (obj) {
	            for (var key in obj) {    
	                if (!isNullOrUndefined(obj[key])) {
	                    return false;
	                }
	            }
	            return true;
	        }
	        return false;
	    }
	
	    function getCatValue(catArray, arrayIndex, catIndex, valueIndex) {
	        if (!isNullOrUndefined(catArray) && catIndex < catArray.length) {
	            return catArray[arrayIndex];
	        } else if (catIndex === 0) {
	           
	            return 'Branch' + (valueIndex + 1);
	        }
	       
	        return valueIndex + 1;
	    }
	
	    var ChartData2016ModelCalHelper = (function () {
	        function ChartData2016ModelCalHelper(series) {
	            var _this = this;
	            _this._series = series;
	            _this._isHorizontal = _this.GetSeriesOrientation();
	            _this._dataSource = _this.GetDataSourceByCatArrayAndValues(series._xValues, series._values);
	            _this._treeData = _this.CreateTreeData();
	            _this._idx = 0;
	            return _this;
	        }
	
	        var prototype = ChartData2016ModelCalHelper.prototype;
	        prototype.GetSeriesOrientation = function () {
	            var valueRefer = {}, series = this._series;
	            var dataOrientation = series.Chart.Parent.getDataOrientation();
	            if (isNullOrUndefined(dataOrientation) && (series._valuesRefers && series._valuesRefers.length > 0)) {
	                valueRefer = series._valuesRefers[0];
	                return valueRefer.ColumnCount === 1;
	            }
	            return !!dataOrientation;
	        };
	        prototype.GetDataSourceByCatArrayAndValues = function (catArray, values) {
	            if (isNullOrUndefined(catArray)) {
	                catArray = [];
	            }
	            if (isNullOrUndefined(values)) {
	                values = [];
	            }
	           
	            var catCount = this._series.GetCatCount() || 2;
	            var valueLength = values.length;
	            var catValue;
	            var allArray = [];
	            for (var i = 0; i < valueLength; i++) {
	                var itemArray = [], hasValidValue = false;
	                for (var j = 0; j < catCount; j++) {
	                    if (this._isHorizontal) {
	                        catValue = getCatValue(catArray, i * catCount + j, j, i);
	                    } else {
	                        catValue = getCatValue(catArray, i + j * valueLength, j, i);
	                    }
	                    if (hasValidValue === false && !isNullOrUndefined(catValue)) {
	                        hasValidValue = true;
	                    }
	                    itemArray.push(catValue);
	                }
	                if (isNullOrUndefined(values[i])) {
	                    itemArray.push(0);
	                } else {
	                    itemArray.push(values[i]);
	                }
	                if (hasValidValue) {
	                    allArray.push(itemArray);
	                }
	            }
	            return allArray;
	        };
	        prototype.CreateTreeData = function () {
	            var _this = this, dataSource = _this._dataSource;
	            var cacheValue, cacheItem = [];
	            var cacheName = [], cacheNameObj, lastValueObj = {};
	            var rowCount = dataSource.length, colCount = dataSource[0] ? dataSource[0].length : 0;
	            var item, value, allArray = [], nowObj = {}, parentObj;
	            _this._idx = 0;
	            for (var i = 0; i < rowCount; i++) {
	                item = dataSource[i];
	                var isFirstColumnEnpty = false;
	                for (var j = 0; j < colCount; j++) {
	                    value = item[j];
	                    cacheValue = cacheItem[j] = cacheItem[j] || null;
	                    var isLastCatColumn = j === colCount - 2,
	                        isValueColumn = j === colCount - 1,
	                        isFirstColumn = j === 0;
	                    if (value === null && cacheValue === null && !isLastCatColumn) {
	                        if (isFirstColumn) {
	                            isFirstColumnEnpty = true;
	                        }
	                        continue;
	                    }
	                    if (isValueColumn) {
	                        nowObj.data = value;
	                        continue;
	                    }
	                    if (isFirstColumn || isFirstColumnEnpty) {
	                        parentObj = allArray;
	                        isFirstColumnEnpty = false;
	                    } else {
	                        parentObj = nowObj.children;
	                    }
	                    cacheNameObj = cacheName[j] = cacheName[j] || {};
	                    if (isLastCatColumn && value === null && cacheNameObj[value] === true) {
	                        parentObj.push(null);
	                        break;
	                    }
	                   
	                    value = _this.FixNullValue(value, j, cacheItem, !isLastCatColumn);
	                   
	                    if (value !== lastValueObj[j]) {
	                        cacheName.length = j + 1;
	                        cacheItem.length = j + 1;
	                    }
	                   
	                    value = _this.FixRepeatName(value, j, cacheNameObj, lastValueObj, isLastCatColumn);
	                   
	                    nowObj = _this.AddLengthOrAddNewObj(parentObj, value);
	
	                }
	            }
	            return allArray;
	        };
	        prototype.FixNullValue = function (value, index, cacheItem, isNeedFixNull) {
	            var cacheValue = cacheItem[index] = cacheItem[index] || null;
	            if (value === null && isNeedFixNull) {
	                value = cacheValue;
	            } else if (value !== cacheValue) {
	                cacheItem[index] = value;
	            }
	            return value;
	        };
	        prototype.FixRepeatName = function (value, index, cacheNameObj, lastValueObj, alwaysFixRepeat) {
	            if (cacheNameObj[value] === undefined) {
	                lastValueObj[index] = value;
	                cacheNameObj[value] = true;
	            } else if (value !== lastValueObj[index] || alwaysFixRepeat) {
	                var itemImp = value;
	                while (cacheNameObj[itemImp] !== undefined && (itemImp !== lastValueObj[index] || alwaysFixRepeat)) {
	                    itemImp += " ";
	                }
	                cacheNameObj[itemImp] = true;
	                lastValueObj[index] = itemImp;
	                value = itemImp;
	            }
	            return value;
	        };
	        prototype.AddLengthOrAddNewObj = function (array, value) {
	            var result;
	            if (array[array.length - 1] && array[array.length - 1].value === value) {
	                array[array.length - 1].length++;
	                result = array[array.length - 1];
	            } else {
	                result = {length: 1, children: [], value: value};
	                if (!isNullOrUndefined(value)) {
	                    result.idx = this._idx;
	                    this._idx++;
	                }
	                array.push(result);
	            }
	            return result;
	        };
	        prototype.GetSunBurstOrTreemapOrder = function () {
	            var result = queryTreeAllSum(this._treeData);
	            function queryTreeAllSum(tree) {
	                var sum, sumResult = [];
	                for (var index = 0; index < tree.length; index++) {
	                    sum = 0;
	                    var child = tree[index], children = child.children;
	                    if (children && children.length > 0) {
	                        sum = queryItemSum(child, sum);
	                    } else {
	                        sum = child.data;
	                    }
	                    sumResult.push({sum: sum, index: index});
	                }
	                return sumResult;
	            }
	
	            function queryItemSum(item, sum) {
	                if (item.children && item.children.length > 0) {
	                    for (var index = 0; index < item.children.length; index++) {
	                        sum = queryItemSum(item.children[index], sum);
	                    }
	                } else if (item.data) {
	                    sum += item.data;
	                }
	                return sum;
	            }
	            result.sort(function (itemA, itemB) {
	                return itemB.sum - itemA.sum;
	            });
	            for (var i = 0; i < result.length; i++) {
	                result[i] = result[i].index;
	            }
	            return result;
	        };
	        prototype.GetSunBurstOrTreemapData = function () {
	            var array = [];
	            var sortIndex = this.GetSunBurstOrTreemapOrder();
	            var sortDataArray = [];
	            for (var j = 0; j < sortIndex.length; j++) {
	                sortDataArray.push(this._treeData[sortIndex[j]]);
	            }
	            getDataImp({children: sortDataArray}, 0, {});
	            function getDataImp(catObj, deep, cat) {
	                var children = catObj.children, isAllNull = true, catItem;
	                for (var i = 0; i < children.length; i++) {
	                    catItem = {};
	                    $.extend(true, catItem, cat);
	                    var catChildItem = children[i];
	                    if (isNullOrUndefined(catChildItem) || isNullOrUndefined(catChildItem.children)) {
	                        continue;
	                    } else if (catChildItem.children.length > 0) {
	                        catItem['level' + deep] = catChildItem.value;
	                        getDataImp(catChildItem, deep + 1, catItem);
	                        isAllNull = false;
	                    } else if (!isNullOrUndefined(catChildItem.value)) {
	                        catItem['level' + deep] = catChildItem.value;
	                        catItem[CONST_2016_CHART_VALUE_NAME] = catChildItem.data;
	                        array.push(catItem);
	                        isAllNull = false;
	                    }
	                }
	                if (isAllNull) {
	                    var data = 0;
	                    if (catObj.children.length > 0 && !isNullOrUndefined(catObj.children[0].data)) {
	                        data = catObj.children[0].data;
	                    }
	                    catItem = {};
	                    $.extend(true, catItem, cat);
	                    catItem[CONST_2016_CHART_VALUE_NAME] = data;
	                    array.push(catItem);
	                }
	            }
	            return array;
	        };
	
	        return ChartData2016ModelCalHelper;
	    }());
	
	    function getData(chart, sortedSeries) {
	        var values = [];
	        if (sortedSeries && sortedSeries[0] && IsSunburstOrTreemapChart(sortedSeries[0].ChartType) && !isNullOrUndefined(sortedSeries[0]._chartData2016ModelCalHelper)) {
	            values = sortedSeries[0]._chartData2016ModelCalHelper.GetSunBurstOrTreemapData();
	        } else {
	            getDataImp(chart, sortedSeries, function (data) {
	                if (!isNullVauleItem(data)) {
	                    values.push(data);
	                }
	            });
	        }
	        if (values.length > 0) {
	            var chartType = chart.ChartType;
	            var xAxis = chart.Axes.Item(0, 0);
	            if ((ChartUtility.IsLineChart(chartType) || ChartUtility.IsAreaChart(chartType)) && xAxis && xAxis.IsValueOrDateScaleAxis()) {
	                values.sort(function (v1, v2) {
	                    return v1[CATEGORY_NAME] - v2[CATEGORY_NAME];
	                });
	            }
	        }
	        return {
	            values: values
	        };
	    }
	
	    function isEqual(obj1, obj2) {
	        return JSON.stringify(obj1) === JSON.stringify(obj2);
	
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	    }
	
	    function getSeries(chart, selectedValue, field) {
	        if (isNullOrUndefined(selectedValue)) {
	            return;
	        }
	        var series, allSers;
	        var chartType = chart.ChartType;
	        if (isStockChart(chartType)) {
	            var seriesNameArray = stockFieldsMap[chartType];
	            var index = seriesNameArray.indexOf(field);
	            if (index >= 0) {
	                return chart.SeriesCollection.Get(index);
	            }
	        } else if (IsSunburstOrTreemapChart(chartType)) {
	            allSers = getAllSers(chart);
	            series = allSers && allSers.length > 0 && allSers[0];
	        } else {
	            allSers = getAllSers(chart);
	            var seriesPaintOrderInfo = getSeriesPaintOrderInfo(allSers, chart.ChartType);
	            var sortedSeries = getSortedSeries(seriesPaintOrderInfo);
	            getDataImp(chart, sortedSeries, function (data, ser) {
	                if (isEqual(data, selectedValue)) {
	                    series = ser;
	                    return true;
	                }
	            });
	        }
	        return series;
	    }
	
	    function getAutoChartTitleText(chart, allSers) {
	        if (!allSers) {
	            allSers = getAllSers(chart);
	        }
	        if (allSers.length === 1 && !IsSunburstOrTreemapChart(allSers[0].ChartType)) {
	            return allSers[0].Name;
	        }
	    }
	
	    function getChartTitleText(chartTitle, allSers) {
	        return chartTitle.Text || getAutoChartTitleText(chartTitle.Parent, allSers) || chartTitle.DefaultText;
	    }
	
	    function getChartTitleProperties(chartTitle, needThemeColor, allSers, zoomFactor, needRGBA, notAddTransprent) {
	        if (!chartTitle) {
	            return keyword_null;
	        }
	        if (notAddTransprent === undefined) {
	            notAddTransprent = false;
	        }
	        var chartTitleProperties = {
	            text: getChartTitleText(chartTitle, allSers)
	        };
	        var chartText = chartTitle.GetChartTextInternal();
	        if (chartText) {
	            var chartTitleFont = chartText.Font;
	            chartTitleProperties.color = colorFormatToString(chartTitleFont, needThemeColor, needRGBA, notAddTransprent);
	            if (!needRGBA) {
	                chartTitleProperties.transparency = getTransparencyFromColorFormat(chartTitleFont);
	            }
	            chartTitleProperties.fontFamily = chartTitleFont.Name;
	            chartTitleProperties.fontSize = (chartTitleFont.Size || chartTitle.DefaultFontSize) * zoomFactor;
	        }
	        return chartTitleProperties;
	    }
	
	    function getChartTitleConfig(chartTitle, allSers, zoomFactor) {
	        var chartTitleProperties = getChartTitleProperties(chartTitle, false, allSers, zoomFactor, true);
	        if (!chartTitleProperties) {
	            return keyword_null;
	        }
	        var retConfig = {
	            text: chartTitleProperties.text
	        };
	        if (chartTitle.GetChartTextInternal()) {
	            retConfig.headerTextStyle = {
	                color: chartTitleProperties.color,
	                fontFamily: chartTitleProperties.fontFamily
	            };
	            if (chartTitleProperties.fontSize) {
	                retConfig.headerTextStyle.fontSize = (chartTitleProperties.fontSize * zoomFactor) + "";
	            }
	            var titleBackColor = colorFormatToString(chartTitle.Format.Fill, false, true);
	            var headerStyle = {};
	            headerStyle = {
	                backgroundColor: titleBackColor
	            };
	            retConfig.headerStyle = headerStyle;
	            var lineInfo = getLineFormatInfo(chartTitle, false, true);
	            if (lineInfo) {
	                retConfig.headerStyle.strokeWidth = !isNullOrUndefined(lineInfo.width) ? lineInfo.width : 1;
	                retConfig.headerStyle.stroke = lineInfo.color || "transparent";
	               
	               
	               
	               
	            }
	        }
	        return retConfig;
	    }
	
	    function getLegendConfig(legend, zoomFactor, chart, plotNames, plotNames2) {
	        var axes = chart.Axes;
	        var xAxis = axes.Item(0, 0),
	            yAxis = axes.Item(1, 0),
	            xAxis2 = axes.Item(0, 1),
	            yAxis2 = axes.Item(1, 1);
	        var option;
	        if (legend) {
	            option = {
	                position: getLegendPosition(legend.Position),
	                orientation: getLegendOrientation(legend.Position),
	                textStyle: getLegendTextStyle(legend.Font, zoomFactor)
	            };
	        } else {
	            option = {
	                position: 'None'
	            };
	        }
	        var legends = [{title: "", type: "Color"}];
	        if ((xAxis && xAxis2) || (yAxis && yAxis2) || plotNames.length > 1 || plotNames2.length > 1) {
	            legends.push({title: "", type: "Color"});
	        }
	        return {
	            legend: option,
	            legends: legends
	        };
	    }
	
	    function IsLineChart(chart, axisGroup) {
	        if (ChartUtility.IsLineChart(chart.ChartType)) {
	            return true;
	        }
	        if (chart.ChartType === 0) {
	            var series = chart.SeriesCollection.GetValidSers(axisGroup);
	            var allColumn = true;
	            for (var i = 0; i < series.length; i++) {
	                if (!ChartUtility.IsLineChart(series[i].ChartType)) {
	                    allColumn = false;
	                    break;
	                }
	            }
	            return allColumn;
	        }
	        return false;
	    }
	
	    function IsBarChart(chart, axisGroup) {
	        if (ChartUtility.IsBarChart(chart.ChartType)) {
	            return true;
	        }
	        if (chart.ChartType === 0) {
	            var series = chart.SeriesCollection.GetValidSers(axisGroup);
	            var allBar = true;
	            for (var i = 0; i < series.length; i++) {
	                if (!ChartUtility.IsBarChart(series[i].ChartType)) {
	                    allBar = false;
	                    break;
	                }
	            }
	            return allBar;
	        }
	        return false;
	    }
	
	    function IsColumnChart(chart, axisGroup) {
	        if (ChartUtility.IsColumnChart(chart.ChartType)) {
	            return true;
	        }
	        if (chart.ChartType === 0) {
	            var series = chart.SeriesCollection.GetValidSers(axisGroup);
	            var allColumn = true;
	            for (var i = 0; i < series.length; i++) {
	                if (!ChartUtility.IsColumnChart(series[i].ChartType)) {
	                    allColumn = false;
	                    break;
	                }
	            }
	            return allColumn;
	        }
	        return false;
	    }
	
	    function IsRadarChart(chart, axisGroup) {
	        if (ChartUtility.IsRadarChart(chart.ChartType)) {
	            return true;
	        }
	        if (chart.ChartType === 0) {
	            var series;
	            if (isNullOrUndefined(axisGroup)) {
	                series = chart.SeriesCollection.AllSers;
	            } else {
	                series = chart.SeriesCollection.GetValidSers(axisGroup);
	            }
	            var allRadar = true;
	            for (var i = 0; i < series.length; i++) {
	                if (!ChartUtility.IsRadarChart(series[i].ChartType)) {
	                    allRadar = false;
	                    break;
	                }
	            }
	            return allRadar;
	        }
	        return false;
	    }
	
	    function getRadarMaxXvaluesLength(allSers) {
	        var maxLength = 0, serLength = allSers.length || 0, xValueLength = 0;
	        for (var i = 0; i < serLength; i++) {
	            var oneSer = allSers[i];
	            if (ChartUtility.IsRadarChart(oneSer.ChartType)) {
	                if (oneSer._xValues && oneSer._xValues.length) {
	                    xValueLength = oneSer._xValues.length;
	                } else if (oneSer._values && oneSer._values.length) {
	                    xValueLength = oneSer._values.length;
	                } else {
	                    xValueLength = 0;
	                }
	                maxLength = Math.max(maxLength, xValueLength);
	            }
	        }
	        return maxLength;
	    }
	
	    function getAxesConfig(chart, allSers, plotNames, plotNames2, zoomFactor) {
	        var axes = chart.Axes;
	        var axesOptions = [];
	        var chartType = chart.ChartType;
	        var isBarChartInPrimary = IsBarChart(chart, 0),
	            isBarChartInSecondary = IsBarChart(chart, 1),
	            hasOneBarChartInPrimaryOrSecondary = isBarChartInPrimary !== isBarChartInSecondary;
	        var isPieOrDoughnutChart = ChartUtility.IsPieOrDoughnutChart(chartType);
	        var isRadarChartInPrimary = IsRadarChart(chart, 0),
	            isRadarChartInSecondary = IsRadarChart(chart, 1);
	        var isColumnChartInPrimary = IsColumnChart(chart, 0),
	            isColumnChartInSecond = IsColumnChart(chart, 1);
	        var isLineChartInPrimary = IsLineChart(chart, 0),
	            isLineChartInSecondary = IsLineChart(chart, 1);
	        var compareAxisOptions, hasPlot1;
	        var percentageScale = isPercentageScaleType(chart, 0, allSers);
	        if (axes) {
	            var xAxis = axes.Item(0, 0),
	                yAxis = axes.Item(1, 0),
	                xAxis2 = axes.Item(0, 1),
	                yAxis2 = axes.Item(1, 1);
	            var xAxisOptions2, yAxisOptions2;
	            var origin;
	            if (xAxis) {
	                var xAxisOptions = getAxisOptions(isRadarChartInPrimary ? yAxis : xAxis, !isBarChartInPrimary ? "X" : "Y", plotNames, percentageScale, xAxis.IsValueOrDateScaleAxis(), zoomFactor);
	                if (!isBarChartInPrimary && !xAxis.IsValueOrDateScaleAxis() && !isStockChart(chartType) && !isRadarChartInPrimary) {
	                   
	                    xAxisOptions.scale = {
	                        type: "Ordinal"
	                    };
	                    if (!isColumnChartInPrimary) {
	                        var firstPrimarySeries = chart.SeriesCollection.GetValidSers(0 )[0];
	                        xAxisOptions.min = -0.5;
	                        xAxisOptions.max = (firstPrimarySeries ? firstPrimarySeries.XValues.length : 0) - 0.5;
	                    }
	                }
	                if (isLineChartInPrimary && xAxis.IsValueOrDateScaleAxis()) {
	                    xAxisOptions.axisPadding = 0.5;
	                }
	                origin = yAxis && yAxis.GetCustomCrossesAt();
	                if (!isNullOrUndefined(origin)) {
	                    xAxisOptions.origin = origin;
	                }
	                if (isRadarChartInPrimary) {
	                   
	                    xAxisOptions.labelAngle = -90;
	                }
	                if (xAxis.ReversePlotOrder) {
	                    xAxisOptions.reversed = true;
	                }
	                axesOptions.push(xAxisOptions);
	            } else if (isPieOrDoughnutChart) {
	                axesOptions.push({
	                    plots: plotNames,
	                    type: "X",
	                    position: "None"
	                });
	            }
	            if (yAxis) {
	                var yAxisOptions = getAxisOptions(isRadarChartInPrimary ? xAxis : yAxis, !isBarChartInPrimary ? "Y" : "X", plotNames, percentageScale, true, zoomFactor);
	                axesOptions.push(yAxisOptions);
	                origin = xAxis && xAxis.GetCustomCrossesAt();
	                if (!isNullOrUndefined(origin)) {
	                    yAxisOptions.origin = origin;
	                }
	                if (xAxisOptions && !isNullOrUndefined(yAxisOptions.min) && yAxisOptions.min < 0 && yAxisOptions.max >= 0) {
	                    xAxisOptions.origin = 0;
	                }
	                if (yAxis.ReversePlotOrder) {
	                    yAxisOptions.reversed = true;
	                }
	                if (isRadarChartInPrimary) {
	                    var lineInfo = getLineFormatInfo(yAxis, false, true);
	                    yAxisOptions.majorGridStyle = {
	                        stroke: lineInfo.color || "transparent",
	                        strokeWidth: !isNullOrUndefined(lineInfo.width) ? lineInfo.width : 1
	                    };
	                    yAxisOptions.majorGrid = true;
	                    yAxisOptions.min = 0;
	                    yAxisOptions.max = getRadarMaxXvaluesLength(allSers);
	                }
	                if (isSunburstChart(chartType)) {
	                    yAxisOptions.scale = {type: "Percentage"};
	                }
	            } else if (isPieOrDoughnutChart) {
	                axesOptions.push({
	                    plots: plotNames,
	                    type: "Y",
	                    position: "None",
	                    scale: {
	                        type: "Percentage"
	                    }
	                });
	            }
	            percentageScale = isPercentageScaleType(chart, 1, allSers);
	            if (xAxis2) {
	                xAxisOptions2 = getAxisOptions(isRadarChartInSecondary ? yAxis2 : xAxis2, !isBarChartInSecondary ? "X" : "Y", plotNames2, percentageScale, xAxis2.IsValueOrDateScaleAxis(), zoomFactor);
	                if (!isBarChartInSecondary && !xAxis2.IsValueOrDateScaleAxis() && !isStockChart(chartType) && !isRadarChartInSecondary) {
	                   
	                    xAxisOptions2.scale = {
	                        type: "Ordinal"
	                    };
	                    if (!isColumnChartInSecond) {
	                        var firstSecondarySeries = chart.SeriesCollection.GetValidSers(1 )[0];
	                        xAxisOptions2.min = -0.5;
	                        xAxisOptions2.max = (firstSecondarySeries ? firstSecondarySeries.XValues.length : 0) - 0.5;
	                    }
	                }
	                if (isLineChartInSecondary && xAxis2.IsValueOrDateScaleAxis()) {
	                    xAxisOptions2.axisPadding = 0.5;
	                }
	                origin = yAxis2 && yAxis2.GetCustomCrossesAt();
	                if (!isNullOrUndefined(origin)) {
	                    xAxisOptions2.origin = origin;
	                }
	                if (isRadarChartInSecondary) {
	                    xAxisOptions2.majorGrid = false;
	                    xAxisOptions2.labelAngle = -90;
	                }
	                compareAxisOptions = xAxisOptions;
	                if (hasOneBarChartInPrimaryOrSecondary) {
	                    compareAxisOptions = yAxisOptions;
	                }
	               
	                hasPlot1 = plotNames2.indexOf('plot1') > -1;
	                if (!compareAxisOptions || xAxisOptions2.position !== compareAxisOptions.position || isRadarChartInSecondary) {
	                    if (hasPlot1) {
	                        axesOptions.unshift(xAxisOptions2);
	                    } else {
	                        axesOptions.push(xAxisOptions2);
	                    }
	                } else if (hasPlot1) {
	                    compareAxisOptions.plots = xAxisOptions2.plots.concat(compareAxisOptions.plots);
	                } else {
	                    compareAxisOptions.plots = compareAxisOptions.plots.concat(xAxisOptions2.plots);
	                }
	                if (xAxis2.ReversePlotOrder) {
	                    xAxisOptions2.reversed = true;
	                }
	            }
	            if (yAxis2) {
	                yAxisOptions2 = getAxisOptions(isRadarChartInSecondary ? xAxis2 : yAxis2, !isBarChartInSecondary ? "Y" : "X", plotNames2, percentageScale, true, zoomFactor);
	                origin = xAxis2 && xAxis2.GetCustomCrossesAt();
	                if (!isNullOrUndefined(origin)) {
	                    yAxisOptions2.origin = origin;
	                }
	                if (isRadarChartInSecondary) {
	                    var lineInfo2 = getLineFormatInfo(yAxis2, false, true);
	                    yAxisOptions2.majorGridStyle = {
	                        stroke: lineInfo2.color || "transparent",
	                        strokeWidth: !isNullOrUndefined(lineInfo2.width) ? lineInfo2.width : 1
	                    };
	                    yAxisOptions2.majorGrid = true;
	                    yAxisOptions2.min = 0;
	                    yAxisOptions2.max = getRadarMaxXvaluesLength(allSers);
	                }
	                compareAxisOptions = yAxisOptions;
	                if (hasOneBarChartInPrimaryOrSecondary) {
	                    compareAxisOptions = xAxisOptions;
	                }
	               
	                hasPlot1 = plotNames2.indexOf('plot1') > -1;
	                if (!compareAxisOptions || yAxisOptions2.position !== compareAxisOptions.position || yAxisOptions2.position === 'None' || (isRadarChartInPrimary !== isRadarChartInSecondary)) {
	                    if (hasPlot1) {
	                        axesOptions.unshift(yAxisOptions2);
	                    } else {
	                        axesOptions.push(yAxisOptions2);
	                    }
	                } else if (hasPlot1) {
	                    compareAxisOptions.plots = yAxisOptions2.plots.concat(compareAxisOptions.plots);
	                } else {
	                    compareAxisOptions.plots = compareAxisOptions.plots.concat(yAxisOptions2.plots);
	                }
	                if (yAxis2.ReversePlotOrder) {
	                    yAxisOptions2.reversed = true;
	                }
	            }
	
	        }
	        return axesOptions;
	    }
	
	    function getSeriesGapConfig(chart) {
	        var tempGroup = getColumnGroupOrBarGroup(chart);
	        if (tempGroup) {
	            var serArray = tempGroup.GetSers(), serNumber = serArray && serArray.length;
	            var overlap = tempGroup.Overlap, gapWidth = tempGroup.GapWidth;
	            var gapConfig = {};
	            var calcNumber = ChartUtility.IsStackedChart(serArray[0].ChartType) ? 1 : serNumber;
	            if (!isNullOrUndefined(overlap)) {
	                gapConfig.overlap = overlap / 100;
	            }
	            if (!isNullOrUndefined(gapWidth)) {
	                gapConfig.width = calcNumber / (calcNumber + gapWidth / 100);
	            }
	            return gapConfig;
	        }
	        return keyword_null;
	    }
	
	    function getConfig(chart, allSers, sheet, plotNames, plotNames2, seriesFillColors, zoomFactor) {
	        var chartAreaStyle = getChartAreaStyle(chart.ChartArea, false, zoomFactor, true);
	        var canSelectSeries = sheet._canSelectFloatingObject(chart.Parent);
	        var config = {
	            style: chartAreaStyle.style,
	            textStyle: chartAreaStyle.textStyle,
	           
	            selectionMode: isStockChart(chart.ChartType) ? "Custom" : "Group",
	            selectedStyle: {
	                adorners: canSelectSeries
	            }
	        };
	        if (seriesFillColors.length > 0) {
	            config.palette = seriesFillColors;
	        }
	        var borderStyle = getChartAreaBorder(chart.ChartArea, sheet);
	        if (borderStyle) {
	            config.borderStyle = borderStyle;
	        }
	       
	        var chartTitleConfig = getChartTitleConfig(chart.ChartTitle, allSers, zoomFactor);
	        if (chartTitleConfig) {
	            config.header = {width: "Auto"};
	            if (chartTitleConfig.text) {
	                config.header.title = chartTitleConfig.text;
	            }
	            if (chartTitleConfig.headerTextStyle) {
	                config.header.textStyle = chartTitleConfig.headerTextStyle;
	            }
	            if (chartTitleConfig.headerStyle) {
	                config.header.style = chartTitleConfig.headerStyle;
	            }
	        }
	       
	        var axesOptions = getAxesConfig(chart, allSers, plotNames, plotNames2, zoomFactor);
	        if (axesOptions.length > 0) {
	            var fillFormat = chart.PlotArea.Format.Fill;
	            var fill = getGradientFill(fillFormat);
	           
	            var plotAreaStyle = IsSunburstOrTreemapChart(chart.ChartType) ? {} : {backgroundColor: fill};
	           
	            var lineInfo = getLineFormatInfo(chart.PlotArea, false, true);
	            if (lineInfo) {
	                plotAreaStyle.innerStroke = lineInfo.color || "transparent";
	                plotAreaStyle.innerStrokeWidth = !isNullOrUndefined(lineInfo.width) ? lineInfo.width : 1;
	            }
	            var plotAreaConfig = {
	                axes: axesOptions,
	                style: plotAreaStyle
	            };
	           
	            var legendConfig = getLegendConfig(chart.Legend, zoomFactor, chart, plotNames, plotNames2);
	            if (legendConfig) {
	                plotAreaConfig.legend = legendConfig.legend;
	                var legendLineInfo = getLineFormatInfo(chart.Legend, false, true);
	                if (legendLineInfo) {
	                    plotAreaConfig.legend.borderStyle = {
	                        strokeWidth: !isNullOrUndefined(legendLineInfo.width) ? legendLineInfo.width : 0,
	                        stroke: legendLineInfo.color || "transparent"
	                    };
	                }
	                if (chart.Legend && chart.Legend.Format) {
	                    var backgroundColor = colorFormatToString(chart.Legend.Format.Fill, false, true);
	                    if (backgroundColor) {
	                        plotAreaConfig.legend.style = {backgroundColor: backgroundColor};
	                    }
	                }
	                plotAreaConfig.legends = legendConfig.legends;
	                if (ChartUtility.IsBubbleChart(chart.ChartType)) {
	                    plotAreaConfig.legends.push({
	                        "type": "Size",
	                        "position": "None"
	                    });
	                }
	            }
	
	            config.plotAreas = [plotAreaConfig];
	        }
	       
	        var seriesGapConfig = getSeriesGapConfig(chart);
	        if (seriesGapConfig) {
	            config.bar = seriesGapConfig;
	        }
	       
	        if (ChartUtility.IsPieChart(chart.ChartType) || ChartUtility.IsSunburstChart(chart.ChartType)) {
	            config.bar = {width: 1};
	        }
	        config.padding = getConfigPadding(chart);
	        return config;
	    }
	
	    function getConfigPadding(chart) {
	        var paddingLeft = 0, paddingRight = 0;
	        var chartType = chart.ChartType;
	        var legend = chart.Legend;
	        var isLegendLeft = legend && legend.visible && legend.position === 3;
	        var isLegendRight = legend && legend.visible && legend.position === 2;
	        var isPieGrounpOrRadarChart = ChartUtility.IsPieOrDoughnutChart(chartType) || ChartUtility.IsRadarChart(chartType);
	        var isSunburstOrTreemap = ChartUtility.IsSunburstOrTreemapChart(chartType);
	        if (isPieGrounpOrRadarChart) {
	            paddingLeft = isLegendLeft ? 0 : 8;
	            paddingRight = isLegendRight ? 0 : 8;
	        } else if (isSunburstOrTreemap) {
	            paddingLeft = isLegendLeft ? 0 : 5;
	            paddingRight = isLegendRight ? 0 : 5;
	        } else if (isColumnChart(chartType)) {
	            var axes = chart.Axes;
	            var yAxis = axes.Item(1, 0),
	                yAxis2 = axes.Item(1, 1);
	            paddingLeft = yAxis ? 0 : 20;
	            paddingRight = yAxis2 ? 0 : 20;
	        }
	        var result = {};
	        if (paddingRight !== 0) {
	            result.right = paddingRight;
	        }
	        if (paddingLeft !== 0) {
	            result.left = paddingLeft;
	        }
	        return result;
	    }
	
	    function getGradientFill(fillFormat) {
	        var colorFormats = fillFormat._gradientStops || [];
	        var colorStops = getColorsStopString(colorFormats.GradientStopList);
	        var fill;
	        if (fillFormat._isLinearShade === true) {
	            fill = getLinearFill(fillFormat.GradientAngle, colorStops);
	        } else if (fillFormat._pathShapeType === 1) {
	            fill = getRadialFill(fillFormat._gradientStyle, colorStops);
	        }// TODO else if (fillFormat._pathShapeType === 2 || fillFormat._pathShapeType === 0)
	        if (isNullOrUndefined(fill)) {
	            fill = colorFormatToString(fillFormat, false, true);
	        }
	        return fill;
	    }
	
	    function getColorsStopString(gradientStopList) {
	        if (isNullOrUndefined(gradientStopList) || gradientStopList.length === 0) {
	            return '';
	        }
	        var colorString = '', colorStops = '', color, position, item;
	        for (var i = 0; i < gradientStopList.length; i++) {
	            item = gradientStopList[i];
	            position = ' ' + item.Position * 100 + '%';
	            color = colorFormatToString(item, false, true);
	            colorString = ColorHelper._toString(ColorHelper._fromString(color)) + position + ((i === gradientStopList.length - 1) ? '' : ',');
	            colorStops += colorString;
	        }
	        return colorStops;
	    }
	
	    function getLinearFill(gradientAngle, colorStops) {
	        var type = "linear-gradient", angle, fill, angleDescArray;
	        var realTypeIndex = parseInt(gradientAngle / 45);
	        angleDescArray = ["to right", "to right bottom", "to bottom", "to left bottom", "to left", "to left top", "to top", "to right top"];
	        angle = angleDescArray[realTypeIndex];
	        fill = type + '(' + angle + ',' + colorStops + ')';
	        return fill;
	    }
	
	    function getRadialFill(gradientStyle, colorStops) {
	        var type = "radial-gradient", extentKeyword = "closest-corner at center",
	            angleDescArray = ["at left top", "at right top", "at left bottom", "at right bottom"],
	            angle, fill;
	        if (gradientStyle === 4) {
	            angle = angleDescArray[gradientStyle - 1];
	            fill = type + '(' + angle + ',' + colorStops + ')';
	        } else if (gradientStyle === 6) {
	            fill = type + '(' + extentKeyword + ',' + colorStops + ')';
	        }
	        return fill;
	    }
	
	    function getSortedSeries(seriesPaintOrderInfo) {
	        var seriesGroupsOrder = seriesPaintOrderInfo.serGroupsOrder,
	            seriesGroups = seriesPaintOrderInfo.serGroups;
	        var sortedSeries = [];
	        for (var i = 0, tempLength = seriesGroupsOrder.length; i < tempLength; i++) {
	            var groupName = seriesGroupsOrder[i].type;
	            var serGroup = seriesGroups[groupName];
	            for (var j = 0, serGroupLength = serGroup.length; j < serGroupLength; j++) {
	                sortedSeries.push(serGroup[j]);
	            }
	        }
	        return sortedSeries;
	    }
	
	    function getSeriesFillColors(seriesPaintOrderInfo) {
	        var seriesGroupsOrder = seriesPaintOrderInfo.serGroupsOrder,
	            seriesGroups = seriesPaintOrderInfo.serGroups;
	        var seriesFillColors = [];
	        for (var i = 0, tempLength = seriesGroupsOrder.length; i < tempLength; i++) {
	            var groupName = seriesGroupsOrder[i].type, chartInfo = seriesGroupsOrder[i].chartInfo;
	            var serGroup = seriesGroups[groupName];
	            for (var j = 0, serGroupLength = serGroup.length; j < serGroupLength; j++) {
	                addSeriesColors(seriesFillColors, serGroup[j], chartInfo);
	                if (chartInfo.type === CONST_SUNBURST || chartInfo.type === CONST_TREEMAP) {
	                    return seriesFillColors;
	                }
	            }
	           
	            if (!isNullOrUndefined(seriesGroupsOrder[i + 1]) && chartInfo.type === CONST_RADAR) {
	                groupName = seriesGroupsOrder[i + 1].type;
	                serGroup = seriesGroups[groupName];
	                for (j = 0, serGroupLength = serGroup.length; j < serGroupLength; j++) {
	                    seriesFillColors.push('transparent');
	                }
	            }
	        }
	        return seriesFillColors;
	    }
	
	    function getChartModelData(chart, sheet) {
	        var zoomFactor = sheet.zoom();
	        var plotNames = [], plotNames2 = [];
	
	        var retValue = {};
	        var allSers = getAllSers(chart), shapeChartType = chart.ChartType;
	        var seriesPaintOrderInfo = getSeriesPaintOrderInfo(allSers, shapeChartType);
	        var sortedSeries = getSortedSeries(seriesPaintOrderInfo);
	        var seriesFillColors = getSeriesFillColors(seriesPaintOrderInfo);
	
	        retValue.plots = getPlots(seriesPaintOrderInfo, shapeChartType, plotNames, plotNames2, zoomFactor, chart.UseAnimation);
	        var data = retValue.data = getData(chart, sortedSeries);
	        var noData = data.values.length === 0;
	        retValue.config = getConfig(chart, allSers, sheet, plotNames, plotNames2, seriesFillColors, zoomFactor);
	        if (noData) {
	           
	           
	           
	           
	            retValue.config.header = {title: ""};
	            retValue.plots = [];
	            delete retValue.config.plotAreas;
	        } else if (!isStockChart(shapeChartType)) {
	            retValue.data.dateFormats = false; 
	        }
	        return retValue;
	    }
	
	
	    function isMarkerScatterChart(chartType) {
	        return [1 , 33 , 35 , 26, 27, 28, 42].indexOf(chartType) >= 0;
	    }
	
	    function getSeriesProperties(series, isFirstSeries, needRGBA, notAddTransprent) {
	        var seriesChartType = series.ChartType;
	       
	       
	        var chartInfo = getChartInfo(series, series.SeriesCollection.Parent.ChartType, isFirstSeries);
	
	        var seriesProperties = {
	            chartType: seriesChartType,
	            axisGroup: series.AxisGroup
	        };
	
	       
	        var fillColor, seriesFillColor;
	        if (chartInfo.radial) {
	            fillColor = getPieChartSeriesColors(series, true, needRGBA, notAddTransprent).join(',');
	        }else if (isMarkerScatterChart(series.ChartType)) {
	            seriesFillColor = series.getMarkerFillColor(true, needRGBA, notAddTransprent);
	            if (seriesFillColor || seriesFillColor === '') {
	                fillColor = seriesFillColor;
	            }
	        } else {
	            seriesFillColor = series.getFillColor(true, needRGBA, notAddTransprent);
	            if (seriesFillColor || seriesFillColor === '') {
	                fillColor = seriesFillColor;
	            }
	        }
	       
	        seriesProperties.backColor = fillColor;
	       
	        if (!needRGBA) {
	            var fillColorTransparency;
	            if (chartInfo.radial) {
	                fillColorTransparency = getPieChartSeriesColorsTransparency(series).join(',');
	            } else if (isMarkerScatterChart(series.ChartType)) {
	                fillColorTransparency = series.getMarkerColorTransparency();
	            } else {
	                var seriesFillColorTransparency = series.getFillColorTransparency();
	                if (!isNullOrUndefined(seriesFillColorTransparency)) {
	                    fillColorTransparency = seriesFillColorTransparency;
	                }
	            }
	           
	            seriesProperties.backColorTransparency = fillColorTransparency;
	        }
	
	       
	        var border = seriesProperties.border = {}, tempWidth;
	        if (chartInfo.radial) {
	            var seriesPoints = series.Points;
	            if (seriesPoints.Count > 0) {
	                var point = seriesPoints.Get(0);
	                var borderColor = point.getLineColor(true, needRGBA, notAddTransprent);
	                if (borderColor || borderColor === '') {
	                    border.color = borderColor;
	                }
	                if (!needRGBA) {
	                    var borderTransparency = point.getLineColorTransparency();
	                    if (!isNullOrUndefined(borderTransparency)) {
	                        border.transparency = borderTransparency;
	                    }
	                }
	                tempWidth = point.Format.Line.Weight;
	            }
	        } else {
	            tempWidth = series.LineWidth;
	            var lineColor = series.getLineColor(true, needRGBA, notAddTransprent);
	            if (lineColor || lineColor === '') {
	                border.color = lineColor;
	            }
	            if (!needRGBA) {
	                var lineTransparency = series.getLineColorTransparency();
	                if (!isNullOrUndefined(lineTransparency)) {
	                    border.transparency = lineTransparency;
	                }
	            }
	        }
	        if (!isNullOrUndefined(tempWidth) && tempWidth >= 0) {
	            border.width = tempWidth;
	        }
	
	       
	        if (chartInfo.radial) {
	            seriesProperties.startAngle = series.Parent.FirstSliceAngle;
	        }
	
	       
	        var nameFormula = series.GetNameFormula();
	        if (nameFormula) {
	            seriesProperties.name = nameFormula;
	        } else {
	            seriesProperties.name = "\"" + getSeriesName(series) + "\"";
	        }
	       
	        var xValuesFormula = series.GetXValuesFormula();
	        if (xValuesFormula) {
	            seriesProperties.xValues = xValuesFormula;
	        }
	       
	        var yValuesFormula = series.GetValuesFormula();
	        if (yValuesFormula) {
	            seriesProperties.yValues = yValuesFormula;
	        }
	       
	        var bubbleSizeFormula = series.GetBubbleSizesFormula();
	        if (bubbleSizeFormula) {
	            seriesProperties.bubbleSizes = bubbleSizeFormula;
	        }
	
	        return seriesProperties;
	    }
	
	
	    var dv = __webpack_require__(1);
	    if (dv) {
	        var customStringFormatting = {
	            format: function (format, object) {
	               
	                if (format === "General" && typeof object === 'number' && Math.abs(object - parseFloat(object.toFixed(2))) < 1e-10) {
	                    object = object.toFixed(2);
	                }
	
	                return new GeneralFormatter(format).format(object);
	            },
	            defaultFormat: function (dataType, percentage) {
	                return dataType === 4  ? 'mm/dd/yyyy' : 'General';
	            }
	        };
	
	        var plugin = {
	            create: function () {
	                return customStringFormatting;
	            }
	        };
	
	        var dv_plugins = dv.plugins;
	
	        var customerValueEncodingExcludeNullsFilter = {
	            filter: function (value, key) {
	                return value[key] !== undefined;
	            }
	        };
	
	        var customerValueEncodingExcludeNullsFilterPlugin = {
	            create: function () {
	                return customerValueEncodingExcludeNullsFilter;
	            }
	        };
	        dv_plugins.unregisterStringFormatting('Default');
	        dv_plugins.registerStringFormatting('Default', plugin);
	        dv_plugins.unregisterFilter('ValueEncodingExcludeNulls');
	        dv_plugins.registerFilter('ValueEncodingExcludeNulls', customerValueEncodingExcludeNullsFilterPlugin);
	        dv_plugins.unregisterFilter('CategoryEncodingExcludeNulls');
	        dv_plugins.registerFilter('CategoryEncodingExcludeNulls', customerValueEncodingExcludeNullsFilterPlugin);
	        dv_plugins.unregisterRenderEngine('Canvas');
	        dv_plugins.registerRenderEngine('Canvas', new dv_plugins.PureCanvasRenderEnginePlugin());
	
	       
	        var dv_FlexDV_prototype = dv.FlexDV.prototype;
	        var oldLoad = dv_FlexDV_prototype.load;
	        dv_FlexDV_prototype.load = function () {
	            try {
	                oldLoad.apply(this, arguments);
	            } catch (ex) {
	               
	            }
	        };
	        var oldRefresh = dv_FlexDV_prototype.refresh;
	        dv_FlexDV_prototype.refresh = function () {
	            try {
	                if (this.devicePixelRatioIsAuto) {
	                    this.devicePixelRatio = Core._DPIHelper._getDevicePixel();
	                }
	                oldRefresh.apply(this, arguments);
	            } catch (ex) {
	               
	            }
	        };
	        var oldSelect = dv_FlexDV_prototype.select;
	        dv_FlexDV_prototype.select = function () {
	            try {
	                oldSelect.apply(this, arguments);
	            } catch (ex) {
	               
	            }
	        };
	    }
	
	    Charts.ChartHelper = {
	        getChartModelData: getChartModelData,
	        getSeries: getSeries,
	        getChartAreaStyle: getChartAreaStyle,
	        colorFormatToString: colorFormatToString,
	        getChartTitleProperties: getChartTitleProperties,
	        getSeriesProperties: getSeriesProperties,
	        getAxisProperties: getAxisProperties,
	        isPercentageScaleType: isPercentageScaleType,
	        getChartTitleText: getChartTitleText,
	        chartData2016ModelCalHelper: ChartData2016ModelCalHelper,
	        getTransparencyFromColorFormat: getTransparencyFromColorFormat
	    };
	    module.exports = Charts;
	
	}());

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Charts = __webpack_require__(3);
	    var $ = __webpack_require__(6).GC$,
	        $_inherit = $.inherit,
	        COMMON_MODULE = Charts,
	        ChartConstants = COMMON_MODULE.ChartConstants,
	        ChartUtility = COMMON_MODULE.ChartUtility,
	        defineProperty = ChartUtility.defineProperty,
	        ChartElementBase = COMMON_MODULE.ChartElementBase,
	        UnitHelper = COMMON_MODULE.UnitHelper,
	        isNullOrUndefined = UnitHelper.isNullOrUndefined,
	        ChartFormat = __webpack_require__(7).ChartFormat;
	    var keyword_null = null;
	
	    var ChartLines = (function (_super) {
	        $_inherit(ChartLines, _super);
	        function ChartLines(chartGroup, linesType) {
	            var _this = _super.call(this) || this;
	            _this._ooLines = keyword_null;
	            _this._chartGroup = chartGroup;
	            _this._linesType = linesType;
	            return _this;
	        }
	
	        var ChartLines_prototype = ChartLines.prototype;
	        defineProperty(ChartLines_prototype, "Format", {
	            get: function () {
	                return this.ChartFormat;
	            }
	        });
	        ChartLines_prototype.GetDefaultFormat = function () {
	            var _this = this;
	            switch (_this._linesType) {
	                case 0:
	                    return _this.GetDefaultDropLinesFormat();
	                case 1:
	                    return _this.GetDefaultHiLoLinesFormat();
	                case 2:
	                    return _this.GetOfPieDefaultSerLinesFormat();
	                case 3:
	                    return _this.GetDlblsDefaultLeaderLines();
	            }
	            return _super.prototype.GetDefaultFormat.call(_this);
	        };
	        ChartLines_prototype.GetOfPieDefaultSerLinesFormat = function () {
	            var format = _super.prototype.GetDefaultFormat.call(this);
	            var line = format.Line, color = line.Color;
	            color.ObjectThemeColor = 1;
	            color.Brightness = 0.65;
	            line.Weight = 1 ;
	            return format;
	        };
	        ChartLines_prototype.GetDefaultHiLoLinesFormat = function () {
	            var format = _super.prototype.GetDefaultFormat.call(this);
	            var line = format.Line, color = line.Color;
	            color.ObjectThemeColor = 1;
	            color.Brightness = 0.25;
	            line.Weight = 1 ;
	            return format;
	        };
	        ChartLines_prototype.GetDefaultDropLinesFormat = function () {
	            var format = _super.prototype.GetDefaultFormat.call(this);
	            var line = format.Line, color = line.Color;
	            color.ObjectThemeColor = 1;
	            color.Brightness = 0.65;
	            line.Weight = 1 ;
	            return format;
	        };
	        ChartLines_prototype.GetDlblsDefaultLeaderLines = function () {
	            var format = _super.prototype.GetDefaultFormat.call(this);
	            var line = format.Line, color = line.Color;
	            color.ObjectThemeColor = 1;
	            color.Brightness = 0.65;
	            line.Weight = 1 ;
	            return format;
	        };
	        ChartLines_prototype.Delete = function () {
	            var _this = this, linesType = _this._linesType, chartGroup = _this._chartGroup;
	            if (linesType === 0) {
	                chartGroup.HasDropLines = false;
	            } else if (linesType === 1) {
	                chartGroup.HasHiLoLines = false;
	            } else if (linesType === 2) {
	                chartGroup.HasSeriesLines = false;
	            }
	        };
	        ChartLines_prototype.FromOOModel = function (t ) {
	            this._ooLines = t;
	            if (isNullOrUndefined(t)) {
	                _super.prototype.ClearFormat.call(this);
	            } else {
	                _super.prototype.FromShapeProperties.call(this, t.spPr);
	            }
	        };
	        ChartLines_prototype.ToOOModel = function () {
	            var lines = this._ooLines || {} ;
	            lines.spPr = _super.prototype.ToShapeProperties.call(this);
	            return lines;
	        };
	        ChartLines_prototype.CreateFormat = function () {
	            return new ChartFormat(this._chartGroup.Parent);
	        };
	        return ChartLines;
	    }(ChartElementBase));
	    Charts.ChartLines = ChartLines;
	
	    Charts.BarType = {
	        Up: 0,
	        Down: 1
	    };
	    var ChartBars = (function (_super) {
	        $_inherit(ChartBars, _super);
	        function ChartBars(chartGroup, type) {
	            var _this = _super.call(this) || this;
	            _this._ooBar = keyword_null;
	            _this._chartGroup = chartGroup;
	            _this._type = type;
	            return _this;
	        }
	
	        var ChartBars_prototype = ChartBars.prototype;
	        defineProperty(ChartBars_prototype, "Format", {
	            get: function () {
	                return this.ChartFormat;
	            }
	        });
	        defineProperty(ChartBars_prototype, "Parent", {
	            get: function () {
	                return this._chartGroup;
	            }
	        });
	        ChartBars_prototype.GetDefaultFormat = function () {
	            if (this._type === 0) {
	                return this.GetDefaultUpBarsFormat();
	            }
	            return this.GetDefaultDownBarsFormat();
	        };
	        ChartBars_prototype.GetDefaultUpBarsFormat = function () {
	            var format = _super.prototype.GetDefaultFormat.call(this);
	            format.Fill.Color.ObjectThemeColor = 0;
	            var line = format.Line, color = line.Color;
	            color.ObjectThemeColor = 1;
	            color.Brightness = 0.35;
	            line.Weight = 1 ;
	            return format;
	        };
	        ChartBars_prototype.GetDefaultDownBarsFormat = function () {
	            var format = _super.prototype.GetDefaultFormat.call(this);
	            format.Fill.Color.ObjectThemeColor = 1;
	            var line = format.Line, color = line.Color;
	            color.ObjectThemeColor = 1;
	            color.Brightness = 0.35;
	            line.Weight = 1 ;
	            return format;
	        };
	        ChartBars_prototype.Delete = function () {
	            this._chartGroup.HasUpDownBars = false;
	        };
	        ChartBars_prototype.FromOOModel = function (t ) {
	            this._ooBar = t;
	            if (isNullOrUndefined(t)) {
	                _super.prototype.ClearFormat.call(this);
	            } else {
	                _super.prototype.FromShapeProperties.call(this, t.spPr);
	            }
	        };
	        ChartBars_prototype.ToOOModel = function () {
	            var bar = this._ooBar || {} ;
	            bar.spPr = _super.prototype.ToShapeProperties.call(this);
	            return bar;
	        };
	        ChartBars_prototype.CreateFormat = function () {
	            return new ChartFormat(this._chartGroup.Parent);
	        };
	        return ChartBars;
	    }(ChartElementBase));
	    Charts.ChartBars = ChartBars;
	
	    var ChartGroup = (function () {
	        function ChartGroup(chart, groupType, axisGroup) {
	            var _this = this;
	            _this._secondPlotSize = 75;
	            _this._pieSplitType = 0;
	            _this._splitValue = 2;
	            _this._doughnutHoleSize = 75;
	            _this._varyByCategories = false;
	            _this._hasDroplines = false;
	            _this._hasHiLoLines = false;
	            _this._hasSeriesLines = false;
	            _this._hasUpDownBars = false;
	            _this._sizeRepresents = 0;
	            _this._bubbleScale = 100;
	            _this._firstSliceAngle = 0;
	            _this._gapWidth = 0;
	            _this._chart = chart;
	            _this._groupType = groupType;
	            _this._axisGroup = axisGroup;
	            _this.Init();
	        }
	
	        var ChartGroup_prototype = ChartGroup.prototype;
	        defineProperty(ChartGroup_prototype, "AxisGroup", {
	            get: function () {
	                return this._axisGroup;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._axisGroup) {
	                    _this._axisGroup = value;
	                    _this._chart.SuspendElementChanged();
	                    for (var _i = 0, _a = _this.GetSers(); _i < _a.length; _i++) {
	                        var item = _a[_i];
	                        item.AxisGroup = value;
	                    }
	                    _this._chart.ResumeElementChanged(17, keyword_null, ChartConstants.AxisGroup);
	                }
	            }
	        });
	        defineProperty(ChartGroup_prototype, "BubbleScale", {
	            get: function () {
	                return this._bubbleScale;
	            },
	            set: function (value) {
	                if (value !== this._bubbleScale && value >= 0 && value <= 300) {
	                    this._bubbleScale = value;
	                }
	            }
	        });
	        defineProperty(ChartGroup_prototype, "DoughnutHoleSize", {
	            get: function () {
	                return this._doughnutHoleSize;
	            },
	            set: function (value) {
	                if (value !== this._doughnutHoleSize && value >= 10 && value <= 90) {
	                    this._doughnutHoleSize = value;
	                }
	            }
	        });
	        defineProperty(ChartGroup_prototype, "FirstSliceAngle", {
	            get: function () {
	                return this._firstSliceAngle;
	            },
	            set: function (value) {
	                if (value !== this._firstSliceAngle && value >= 0 && value <= 360) {
	                    this._firstSliceAngle = value;
	                }
	            }
	        });
	        defineProperty(ChartGroup_prototype, "GapWidth", {
	            get: function () {
	                return this._gapWidth;
	            },
	            set: function (value) {
	                if (value !== this._gapWidth && value >= 0 && value <= 500) {
	                    this._gapWidth = value;
	                }
	            }
	        });
	        defineProperty(ChartGroup_prototype, "HasDropLines", {
	            get: function () {
	                return this._hasDroplines;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._hasDroplines) {
	                    _this._hasDroplines = value;
	                    if (value && isNullOrUndefined(_this._dropLines)) {
	                        _this._dropLines = new ChartLines(_this, 0);
	                    }
	                }
	            }
	        });
	        defineProperty(ChartGroup_prototype, "HasHiLoLines", {
	            get: function () {
	                return this._hasHiLoLines;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._hasHiLoLines) {
	                    _this._hasHiLoLines = value;
	                    if (value && isNullOrUndefined(_this._hiLoLines)) {
	                        _this._hiLoLines = new ChartLines(_this, 1);
	                    }
	                }
	            }
	        });
	        defineProperty(ChartGroup_prototype, "HasSeriesLines", {
	            get: function () {
	                return this._hasSeriesLines;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._hasSeriesLines) {
	                    _this._hasSeriesLines = value;
	                    if (value && isNullOrUndefined(_this._serLines)) {
	                        _this._serLines = new ChartLines(_this, 2);
	                    }
	                }
	            }
	        });
	        defineProperty(ChartGroup_prototype, "HasUpDownBars", {
	            get: function () {
	                return this._hasUpDownBars;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._hasUpDownBars) {
	                    _this._hasUpDownBars = value;
	                    if (value && isNullOrUndefined(_this._upBars)) {
	                        _this._upBars = new ChartBars(_this, 0);
	                    }
	                    if (value && isNullOrUndefined(_this._downBars)) {
	                        _this._downBars = new ChartBars(_this, 1);
	                    }
	                }
	            }
	        });
	        defineProperty(ChartGroup_prototype, "Overlap", {
	            get: function () {
	                return this._overlap;
	            },
	            set: function (value) {
	                if (value !== this._overlap && value >= -100 && value <= 100) {
	                    this._overlap = value;
	                }
	            }
	        });
	        defineProperty(ChartGroup_prototype, "Parent", {
	            get: function () {
	                return this._chart;
	            }
	        });
	        defineProperty(ChartGroup_prototype, "SecondPlotSize", {
	            get: function () {
	                return this._secondPlotSize;
	            },
	            set: function (value) {
	                if (value !== this._secondPlotSize && value >= 5 && value <= 200) {
	                    this._secondPlotSize = value;
	                }
	            }
	        });
	        defineProperty(ChartGroup_prototype, "SeriesLines", {
	            get: function () {
	                if (!this.HasSeriesLines) {
	                    return keyword_null;
	                }
	                return this._serLines;
	            }
	        });
	        defineProperty(ChartGroup_prototype, "HiLoLines", {
	            get: function () {
	                if (!this.HasHiLoLines) {
	                    return keyword_null;
	                }
	                return this._hiLoLines;
	            }
	        });
	        defineProperty(ChartGroup_prototype, "DropLines", {
	            get: function () {
	                if (!this.HasDropLines) {
	                    return keyword_null;
	                }
	                return this._dropLines;
	            }
	        });
	        defineProperty(ChartGroup_prototype, "SizeRepresents", {
	            get: function () {
	                return this._sizeRepresents;
	            },
	            set: function (value) {
	                this._sizeRepresents = value;
	            }
	        });
	        defineProperty(ChartGroup_prototype, "SplitType", {
	            get: function () {
	                return this._pieSplitType;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._pieSplitType) {
	                    _this._pieSplitType = value;
	                    var dict = {
	                        0: 2,
	                        1: 50,
	                        2:  10
	                    };
	                    _this._splitValue = dict[_this._pieSplitType] || _this._splitValue;
	                    _this._chart.HandleElementChanged(17, _this, ChartConstants.SplitType);
	                }
	            }
	        });
	        defineProperty(ChartGroup_prototype, "SplitValue", {
	            get: function () {
	                return this._splitValue;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._splitValue) {
	                    _this._splitValue = value;
	                    _this._chart.HandleElementChanged(17, _this, ChartConstants.SplitValue);
	                }
	            }
	        });
	        defineProperty(ChartGroup_prototype, "UpBars", {
	            get: function () {
	                if (!this.HasUpDownBars) {
	                    return keyword_null;
	                }
	                return this._upBars;
	            }
	        });
	        defineProperty(ChartGroup_prototype, "DownBars", {
	            get: function () {
	                if (!this.HasUpDownBars) {
	                    return keyword_null;
	                }
	                return this._downBars;
	            }
	        });
	        defineProperty(ChartGroup_prototype, "VaryByCategories", {
	            get: function () {
	                return this._varyByCategories;
	            },
	            set: function (value) {
	                var _this = this;
	                if (value !== _this._varyByCategories) {
	                    _this._varyByCategories = value;
	                    if (value) {
	                        for (var _i = 0, _a = _this.GetSers(); _i < _a.length; _i++) {
	                            var ser = _a[_i], color;
	                            var innerChartType = ser.InnerChartType;
	                            if (ChartUtility.IsFillSeries(innerChartType)) {
	                                color = ser.Format.Fill.Color;
	                                if (color.ColorType !== 1) {
	                                    color.ColorType = 1;
	                                }
	                            } else if (ChartUtility.IsLineSeries(innerChartType) && !ChartUtility.IsStockChart(_this._chart.ChartType)) {
	                                color = ser.Format.Line.Color;
	                                if (color.ColorType !== 1) {
	                                    color.ColorType = 1;
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	        });
	        defineProperty(ChartGroup_prototype, "SeriesCollection", {
	            get: function () {
	                return this.GetSers();
	            }
	        });
	        ChartGroup_prototype.Equals = function (group) {
	            return !isNullOrUndefined(group) && group.AxisGroup === this._axisGroup && group._groupType === this._groupType;
	        };
	        defineProperty(ChartGroup_prototype, "Marker", {
	            get: function () {
	                return this._marker;
	            },
	            set: function (value) {
	                this._marker = value;
	            }
	        });
	        defineProperty(ChartGroup_prototype, "Count", {
	            get: function () {
	                return this.GetSers().length;
	            }
	        });
	        defineProperty(ChartGroup_prototype, "GroupType", {
	            get: function () {
	                return this._groupType;
	            }
	        });
	        ChartGroup_prototype.IsStacked = function () {
	            var series = this.GetSers();
	            for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
	                var ser = series_1[_i];
	                if (ChartUtility.IsStackedChart(ser.InnerChartType)) {
	                    return true;
	                }
	            }
	            return false;
	        };
	        ChartGroup_prototype.GetSers = function () {
	            var seriesCollection = this._chart.SeriesCollection;
	            var series = [];
	            for (var i = 0, count = seriesCollection.Count; i < count; i++) {
	                var item = seriesCollection.Get(i);
	                if (this._axisGroup === item.AxisGroup &&
	                    ChartUtility.MapToGroupType(item.InnerChartType) === this._groupType) {
	                    series.push(item);
	                }
	            }
	            return series;
	        };
	        ChartGroup_prototype.Init = function () {
	            var _this = this;
	            var chartType = _this._chart.ChartType, groupType = _this._groupType;
	            if (groupType === 8) {
	                if (ChartUtility.IsStackedChart(chartType) || _this.IsStacked()) {
	                    _this._gapWidth = 150;
	                    _this._overlap = 100;
	                } else {
	                    _this._gapWidth = 182;
	                    _this._overlap = 0;
	                }
	            } else if (groupType === 9 ||
	                groupType === 3 ||
	                groupType === 2) {
	                if (ChartUtility.IsStackedChart(chartType) || _this.IsStacked()) {
	                    _this._gapWidth = 150;
	                    _this._overlap = 100;
	                } else {
	                    _this._gapWidth = 150;
	                    _this._overlap = -27;
	                }
	            } else if (groupType === 11) {
	                _this._gapWidth = 150;
	            } else if (groupType === 12) {
	                if (ChartUtility.IsOfPieChart(chartType)) {
	                    _this._gapWidth = 100;
	                    _this._hasSeriesLines = true;
	                } else {
	                    _this._hasSeriesLines = false;
	                }
	            }
	            if (ChartUtility.IsDoughnutChart(chartType) && ChartUtility.IsExplodedChart(chartType)) {
	                _this._doughnutHoleSize = 50;
	            } else {
	                _this._doughnutHoleSize = 75;
	            }
	            if (ChartUtility.IsLineMarkerChart(chartType)) {
	                _this._marker = true;
	            } else if (groupType === 11) {
	                var seriesArray = _this.GetSers();
	                var hasMarker = seriesArray.some(function (series) {
	                    return series.MarkerStyle !== 4 ;
	                });
	                if (hasMarker) {
	                    _this._marker = true;
	                }
	            }
	            _this._hasSeriesLines = ChartUtility.HasSeriesLines(chartType);
	            _this._serLines = _this._hasSeriesLines ? new ChartLines(_this, 2) : keyword_null;
	            _this._hasHiLoLines = ChartUtility.HasHiLoLines(chartType);
	            _this._hiLoLines = _this._hasHiLoLines ? new ChartLines(_this, 1) : keyword_null;
	            _this._hasUpDownBars = ChartUtility.HasUpDownBars(chartType);
	            _this._upBars = _this._hasUpDownBars ? new ChartBars(_this, 0) : keyword_null;
	            _this._downBars = _this._hasUpDownBars ? new ChartBars(_this, 1) : keyword_null;
	            _this._varyByCategories = (_this._groupType === 12 ||
	            _this._groupType === 5 ||
	            _this._groupType === 10);
	        };
	        ChartGroup_prototype.Restore = function (ooPlotArea ) {
	            var _this = this;
	            switch (_this._groupType) {
	                case 1:
	                    _this.RestoreArea3DGroup(ooPlotArea);
	                    break;
	                case 2:
	                    _this.RestoreBar3DGroup(ooPlotArea);
	                    break;
	                case 3:
	                    _this.RestoreBar3DGroup(ooPlotArea);
	                    break;
	                case 4:
	                    _this.RestoreLine3DGroup(ooPlotArea);
	                    break;
	                case 5:
	                    _this.RestorePie3DGroup(ooPlotArea);
	                    break;
	                case 7:
	                    _this.RestoreAreaGroup(ooPlotArea);
	                    break;
	                case 8:
	                    _this.RestoreBarGroup(ooPlotArea, true);
	                    break;
	                case 9:
	                    _this.RestoreBarGroup(ooPlotArea, false);
	                    break;
	                case 10:
	                    _this.RestoreDoughnutGroup(ooPlotArea);
	                    break;
	                case 11:
	                    if (ChartUtility.IsStockChart(_this._chart.ChartType)) {
	                        _this.RestoreStockGroup(ooPlotArea);
	                        _this.RestoreBarGroup(ooPlotArea, false);
	                    } else {
	                        _this.RestoreLineGroup(ooPlotArea);
	                    }
	                    break;
	                case 12:
	                    _this.RestorePieGroup(ooPlotArea);
	                    _this.RestoreOfPieGroup(ooPlotArea);
	                    break;
	                case 13:
	                    _this.RestoreRadarGroup(ooPlotArea);
	                    break;
	                case 14:
	                    _this.RestoreXYGroup(ooPlotArea);
	                    _this.RestoreBubbleGroup(ooPlotArea);
	                    break;
	            }
	        };
	        ChartGroup_prototype.RestoreBarGroup = function (ooPlotArea , isBar) {
	            var _this = this;
	            var charts = _this.GetBarCharts(ooPlotArea, _this._axisGroup, isBar);
	            if (charts.length > 0) {
	                var firstChart = charts[0];
	                _this.RestoreBarBaseGroup(firstChart);
	                if (!isNullOrUndefined(firstChart.overlap)) {
	                    _this.Overlap = firstChart.overlap;
	                } else {
	                    _this.Overlap = 0;
	                }
	                if (firstChart.serLines && firstChart.serLines.length > 0) {
	                    _this.HasSeriesLines = true;
	                    _this._serLines.FromOOModel(firstChart.serLines[0]);
	                } else {
	                    _this.HasSeriesLines = false;
	                }
	            }
	        };
	        ChartGroup_prototype.RestoreBarBaseGroup = function (ooBarChart ) {
	            if (!isNullOrUndefined(ooBarChart.gapWidth)) {
	                this.GapWidth = ooBarChart.gapWidth;
	            }
	            if (!isNullOrUndefined(ooBarChart.varyColors)) {
	                this._varyByCategories = ooBarChart.varyColors;
	            }
	        };
	        ChartGroup_prototype.GetBarCharts = function (ooPlotArea , axisGroup, isBar) {
	            var charts = this.GetCharts(6, ooPlotArea, axisGroup);
	            var result = [];
	            for (var _i = 0, charts_1 = charts; _i < charts_1.length; _i++) {
	                var item = charts_1[_i];
	                var barDir = item.barDir;
	                if (isBar) {
	                    if (barDir === 0) {
	                        result.push(item);
	                    }
	                } else if (isNullOrUndefined(barDir) || barDir === 1) {
	                    result.push(item);
	                }
	            }
	            return result;
	        };
	        ChartGroup_prototype.RestoreLineGroup = function (ooPlotArea ) {
	            var _this = this;
	            var charts = _this.GetCharts(8, ooPlotArea, _this._axisGroup);
	            if (charts.length > 0) {
	                var firstChart = charts[0];
	                _this.RestoreLineBaseGroup(firstChart);
	                var hiLowLines = firstChart.hiLowLines;
	                if (!isNullOrUndefined(hiLowLines)) {
	                    _this.HasHiLoLines = true;
	                    _this._hiLoLines.FromOOModel(hiLowLines);
	                } else {
	                    _this.HasHiLoLines = false;
	                }
	                var upDownBars = firstChart.upDownBars;
	                if (!isNullOrUndefined(upDownBars)) {
	                    _this.HasUpDownBars = true;
	                    _this._upBars.FromOOModel(upDownBars.upBars);
	                    _this._downBars.FromOOModel(upDownBars.downBars);
	                } else {
	                    _this.HasUpDownBars = false;
	                }
	                var marker = firstChart.marker;
	                if (!isNullOrUndefined(marker)) {
	                    _this.Marker = marker;
	                } else {
	                    _this.Marker = false;
	                }
	            }
	        };
	        ChartGroup_prototype.RestoreLineBaseGroup = function (ooLineChart ) {
	            var _this = this;
	            var varyColors = ooLineChart.varyColors;
	            if (!isNullOrUndefined(varyColors)) {
	                _this._varyByCategories = varyColors;
	            }
	            var dropLines = ooLineChart.dropLines;
	            if (!isNullOrUndefined(dropLines)) {
	                _this.HasDropLines = true;
	                _this._dropLines.FromOOModel(dropLines);
	            } else {
	                _this.HasDropLines = false;
	            }
	        };
	        ChartGroup_prototype.RestoreStockGroup = function (ooPlotArea ) {
	            var _this = this;
	            var charts = _this.GetCharts(0, ooPlotArea, _this._axisGroup);
	            if (charts.length > 0) {
	                var firstChart = charts[0];
	                var dropLines = firstChart.dropLines;
	                if (!isNullOrUndefined(dropLines)) {
	                    _this.HasDropLines = true;
	                    _this._dropLines.FromOOModel(dropLines);
	                } else {
	                    _this.HasDropLines = false;
	                }
	                var hiLowLines = firstChart.hiLowLines;
	                if (!isNullOrUndefined(hiLowLines)) {
	                    _this.HasHiLoLines = true;
	                    _this._hiLoLines.FromOOModel(hiLowLines);
	                } else {
	                    _this.HasHiLoLines = false;
	                }
	                var upDownBars = firstChart.upDownBars;
	                if (!isNullOrUndefined(upDownBars)) {
	                    _this.HasUpDownBars = true;
	                    _this._upBars.FromOOModel(upDownBars.upBars);
	                    _this._downBars.FromOOModel(upDownBars.downBars);
	                    if (!isNullOrUndefined(upDownBars.gapWidth)) {
	                        _this.GapWidth = upDownBars.gapWidth;
	                    }
	                } else {
	                    _this.HasUpDownBars = false;
	                }
	            }
	        };
	        ChartGroup_prototype.RestoreXYGroup = function (ooPlotArea ) {
	            var charts = this.GetCharts(1, ooPlotArea, this._axisGroup);
	            if (charts.length > 0) {
	                var firstChart = charts[0];
	                var varyColors = firstChart.varyColors;
	                if (varyColors) {
	                    this._varyByCategories = varyColors;
	                }
	            }
	        };
	        ChartGroup_prototype.RestoreBubbleGroup = function (ooPlotArea ) {
	            var _this = this;
	            var charts = _this.GetCharts(3, ooPlotArea, _this._axisGroup);
	            if (charts.length > 0) {
	                var firstChart = charts[0];
	                var varyColors = firstChart.varyColors;
	                if (varyColors) {
	                    _this._varyByCategories = varyColors;
	                }
	                var bubbleScale = firstChart.bubbleScale;
	                if (!isNullOrUndefined(bubbleScale)) {
	                    _this._bubbleScale = bubbleScale;
	                }
	                var showNegBubbles = firstChart.showNegBubbles;
	                if (!isNullOrUndefined(showNegBubbles)) {
	                    _this.ShowNegativeBubbles = showNegBubbles;
	                }
	                var sizeRepresents = firstChart.sizeRepresents;
	                if (!isNullOrUndefined(sizeRepresents)) {
	                    _this.SizeRepresents = sizeRepresents;
	                }
	            }
	        };
	        ChartGroup_prototype.RestorePieGroup = function (ooPlotArea ) {
	            var firstChart = keyword_null;
	            var pieChart = ChartUtility.GetPieChart(ooPlotArea);
	            if (this._axisGroup === 0) {
	                if (pieChart.length > 0) {
	                    firstChart = pieChart[0];
	                }
	            } else {
	                var pieCharts = ChartUtility.GetPieCharts(ooPlotArea);
	                var primPieChart = ChartUtility.GetPrimaryPieChart(pieCharts);
	                if (primPieChart.chartType === 10) {
	                    if (pieChart.length > 1) {
	                        firstChart = pieChart[1];
	                    }
	                } else if (pieChart.length > 0) {
	                    firstChart = pieChart[0];
	                }
	            }
	            if (!isNullOrUndefined(firstChart)) {
	                this.RestorePieBaseGroup(firstChart);
	            }
	        };
	        function containsPoint(secondPiePt, p) {
	            return secondPiePt.some(function (item) {
	                return item === p.Index;
	            });
	        }
	        ChartGroup_prototype.RestoreOfPieGroup = function (ooPlotArea ) {
	            var _this = this;
	            var firstChart = keyword_null;
	            var ofPieChart = ChartUtility.GetOfPieChart(ooPlotArea);
	            if (_this._axisGroup === 0) {
	                if (ofPieChart.length > 0) {
	                    firstChart = ofPieChart[0];
	                }
	            } else {
	                var pieCharts = ChartUtility.GetPieCharts(ooPlotArea);
	                var primPieChart = ChartUtility.GetPrimaryPieChart(pieCharts);
	                if (primPieChart.chartType === 13) {
	                    if (ofPieChart.length > 1) {
	                        firstChart = ofPieChart[1];
	                    }
	                } else if (ofPieChart.length > 0) {
	                    firstChart = ofPieChart[0];
	                }
	            }
	            if (firstChart) {
	                _this.RestorePieBaseGroup(firstChart);
	                var serLines = firstChart.serLines;
	                if (!isNullOrUndefined(serLines) && serLines.length > 0) {
	                    _this.HasSeriesLines = true;
	                    _this._serLines.FromOOModel(serLines[0]);
	                } else {
	                    _this.HasSeriesLines = false;
	                }
	                var secondPieSize = firstChart.secondPieSize;
	                if (!isNullOrUndefined(secondPieSize)) {
	                    _this.SecondPlotSize = secondPieSize;
	                }
	                var gapWidth = firstChart.gapWidth;
	                if (!isNullOrUndefined(gapWidth)) {
	                    _this.GapWidth = gapWidth;
	                }
	                var splitType = firstChart.splitType;
	                if (!isNullOrUndefined(splitType)) {
	                    _this._pieSplitType = splitType;
	                }
	                var splitPos = firstChart.splitPos;
	                if (!isNullOrUndefined(splitPos)) {
	                    _this._splitValue = splitPos;
	                }
	                if (_this._pieSplitType === 3) {
	                    var custSplit = firstChart.custSplit, secondPiePt = custSplit && custSplit.secondPiePt;
	                    if (secondPiePt && secondPiePt.length > 0) {
	                        for (var _i = 0, _a = _this.GetSers(); _i < _a.length; _i++) {
	                            var ser = _a[_i];
	                            var points = ser.Points;
	                            for (var i = 0, count = points.Count; i < count; i++) {
	                                var p = points.Get(i);
	                                p.SetSecondaryPlotInteral(containsPoint(secondPiePt, p));
	                            }
	                        }
	                    }
	                } else {
	                    for (var _b = 0, _c = _this.GetSers(); _b < _c.length; _b++) {
	                        ser = _c[_b];
	                        ser.UpdateSecondPlotPoints();
	                    }
	                }
	            }
	        };
	        ChartGroup_prototype.RestoreDoughnutGroup = function (ooPlotArea ) {
	            var firstChart = keyword_null;
	            var doughnutChart = ChartUtility.GetDoughnutChart(ooPlotArea);
	            if (this._axisGroup === 0) {
	                if (doughnutChart.length > 0) {
	                    firstChart = doughnutChart[0];
	                }
	            } else {
	                var pieCharts = ChartUtility.GetPieCharts(ooPlotArea);
	                var primPieChart = ChartUtility.GetPrimaryPieChart(pieCharts);
	                if (primPieChart.chartType === 12) {
	                    if (doughnutChart.length > 1) {
	                        firstChart = doughnutChart[1];
	                    }
	                } else if (doughnutChart.length > 0) {
	                    firstChart = doughnutChart[0];
	                }
	            }
	            if (firstChart) {
	                this.RestorePieBaseGroup(firstChart);
	                var holeSize = firstChart.holeSize;
	                if (!isNullOrUndefined(holeSize)) {
	                    this.DoughnutHoleSize = holeSize;
	                }
	            }
	        };
	        ChartGroup_prototype.RestorePieBaseGroup = function (ooPieChart ) {
	            var varyColors = ooPieChart.varyColors;
	            if (!isNullOrUndefined(varyColors)) {
	                this._varyByCategories = varyColors;
	            }
	            var firstSliceAng = ooPieChart.firstSliceAng;
	            if (!isNullOrUndefined(firstSliceAng)) {
	                this._firstSliceAngle = firstSliceAng;
	            }
	        };
	        ChartGroup_prototype.RestoreRadarGroup = function (ooPlotArea ) {
	            var charts = this.GetCharts(2, ooPlotArea, this._axisGroup);
	            if (charts.length > 0) {
	                var firstChart = charts[0];
	                var varyColors = firstChart.varyColors;
	                if (!isNullOrUndefined(varyColors)) {
	                    this._varyByCategories = varyColors;
	                }
	            }
	        };
	        ChartGroup_prototype.RestoreAreaGroup = function (ooPlotArea ) {
	            var charts = this.GetCharts(4, ooPlotArea, this._axisGroup);
	            if (charts.length > 0) {
	                this.RestoreAreaBaseGroup(charts[0]);
	            }
	        };
	        ChartGroup_prototype.RestoreAreaBaseGroup = function (ooAreaChart ) {
	            var _this = this;
	            var varyColors = ooAreaChart.varyColors;
	            if (!isNullOrUndefined(varyColors)) {
	                _this._varyByCategories = varyColors;
	            }
	            var dropLines = ooAreaChart.dropLines;
	            if (!isNullOrUndefined(dropLines)) {
	                _this.HasDropLines = true;
	                _this._dropLines.FromOOModel(dropLines);
	            } else {
	                _this.HasDropLines = false;
	            }
	        };
	        ChartGroup_prototype.RestoreArea3DGroup = function (ooPlotArea ) {
	            var area3DChart = ChartUtility.GetArea3DChart(ooPlotArea);
	            if (!isNullOrUndefined(area3DChart)) {
	                var firstChart = area3DChart;
	                this.RestoreAreaBaseGroup(firstChart);
	                var gapDepth = firstChart.gapDepth;
	                if (!isNullOrUndefined(gapDepth)) {
	                    this._chart.GapDepth = gapDepth;
	                }
	            }
	        };
	        ChartGroup_prototype.RestoreBar3DGroup = function (ooPlotArea ) {
	            var bar3DChart = ChartUtility.GetBar3DChart(ooPlotArea);
	            if (!isNullOrUndefined(bar3DChart)) {
	                var firstChart = bar3DChart;
	                this.RestoreBarBaseGroup(firstChart);
	                var gapDepth = firstChart.gapDepth;
	                if (!isNullOrUndefined(gapDepth)) {
	                    this._chart.GapDepth = gapDepth;
	                }
	                var shape = firstChart.shape;
	                if (!isNullOrUndefined(shape)) {
	                    this._chart.SetBarShapeInternal(shape);
	                }
	            }
	        };
	        ChartGroup_prototype.RestoreLine3DGroup = function (ooPlotArea ) {
	            var line3DChart = ChartUtility.GetLine3DChart(ooPlotArea);
	            if (!isNullOrUndefined(line3DChart)) {
	                this.RestoreLineBaseGroup(line3DChart);
	                var gapDepth = line3DChart.gapDepth;
	                if (!isNullOrUndefined(gapDepth)) {
	                    this._chart.GapDepth = gapDepth;
	                }
	            }
	        };
	        ChartGroup_prototype.RestorePie3DGroup = function (ooPlotArea ) {
	            var pie3DChart = ChartUtility.GetPie3DChart(ooPlotArea);
	            if (!isNullOrUndefined(pie3DChart)) {
	                this.RestorePieBaseGroup(pie3DChart);
	            }
	        };
	        ChartGroup_prototype.GetCharts = function (chartType, ooPlotArea , axisGroup) {
	            var pAxes = ChartUtility.GetPrimaryAxises(ooPlotArea);
	            var pCharts = [];
	            var sCharts = [];
	            for (var _i = 0, _a = ooPlotArea.chartGroups; _i < _a.length; _i++) {
	                var item = _a[_i];
	                if (item.chartType === chartType) {
	                    var chart = item;
	                    for (var _b = 0, _c = chart.axId; _b < _c.length; _b++) {
	                        var ax = _c[_b];
	                        if (pAxes.indexOf(ax) === -1 && sCharts.indexOf(chart) === -1) {
	                            sCharts.push(chart);
	                        } else if (pCharts.indexOf(chart) === -1) {
	                            pCharts.push(chart);
	                        }
	                    }
	                }
	            }
	            return axisGroup === 0 ? pCharts : sCharts;
	        };
	        return ChartGroup;
	    }());
	    Charts.ChartGroup = ChartGroup;
	    var ChartGroups = (function () {
	        function ChartGroups(chart, groupType) {
	            this._cachedChartGroups = [];
	            this._chart = chart;
	            this._groupType = groupType;
	        }
	        var ChartGroups_prototype = ChartGroups.prototype;
	        defineProperty(ChartGroups_prototype, "Count", {
	            get: function () {
	                return this.GetChartGroups().length;
	            }
	        });
	        defineProperty(ChartGroups_prototype, "Parent", {
	            get: function () {
	                return this._chart;
	            }
	        });
	        ChartGroups_prototype.Get = function (index) {
	            var chartGroups = this.GetChartGroups();
	            if (index >= 0 && index < chartGroups.length) {
	                return chartGroups[index];
	            }
	            return keyword_null;
	        };
	        ChartGroups_prototype.GetChartGroups = function () {
	            var _this = this;
	            var result = _this.GetValidChartGroups();
	            if (result.length === 0 && ChartUtility.MapToGroupType(_this._chart.ChartType) === _this._groupType) {
	                var defaultGroup = _this.TryGetCachedGroup(0);
	                result.push(defaultGroup);
	            }
	            return result;
	        };
	        ChartGroups_prototype.TryGetCachedGroup = function (axisGroup) {
	            var _this = this;
	            for (var _i = 0, _a = _this._cachedChartGroups; _i < _a.length; _i++) {
	                var item = _a[_i];
	                if (item.GroupType === _this._groupType &&
	                    item.AxisGroup === axisGroup) {
	                    return item;
	                }
	            }
	            var newGroup = new ChartGroup(_this._chart, _this._groupType, axisGroup);
	            _this._cachedChartGroups.push(newGroup);
	            return newGroup;
	        };
	        ChartGroups_prototype.GetValidChartGroups = function () {
	            var result = [];
	            var group1 = this.TryGetCachedGroup(0);
	            if (!isNullOrUndefined(group1) && group1.Count > 0) {
	                result.push(group1);
	            }
	            var group2 = this.TryGetCachedGroup(1);
	            if (!isNullOrUndefined(group2) && group2.Count > 0) {
	                result.push(group2);
	            }
	            return result;
	        };
	        ChartGroups_prototype.Reset = function () {
	            for (var _i = 0, _a = this._cachedChartGroups; _i < _a.length; _i++) {
	                var group = _a[_i];
	                group.Init();
	            }
	        };
	        return ChartGroups;
	    }());
	    Charts.ChartGroups = ChartGroups;
	    var FullChartGroups = (function () {
	        function FullChartGroups(chart) {
	            this._chart = chart;
	            this._needCache = false;
	            this._cachedChartGroups = keyword_null;
	        }
	
	        var FullChartGroups_prototype = FullChartGroups.prototype;
	        defineProperty(FullChartGroups_prototype, "Count", {
	            get: function () {
	                return this.GetAllChartGroups().length;
	            }
	        });
	        defineProperty(FullChartGroups_prototype, "Parent", {
	            get: function () {
	                return this._chart;
	            }
	        });
	        FullChartGroups_prototype.Get = function (index) {
	            var allGroups = this.GetAllChartGroups();
	            if (index >= 0 && index < allGroups.length) {
	                return allGroups[index];
	            }
	            return keyword_null;
	        };
	        FullChartGroups_prototype.GetAllChartGroups = function () {
	            var _this = this;
	            if (_this._needCache && _this._cachedChartGroups) {
	                return _this._cachedChartGroups;
	            }
	
	            var allGroups = [];
	            var area3DGroup = _this._chart.Area3DGroup;
	            if (!isNullOrUndefined(area3DGroup)) {
	                allGroups.push(area3DGroup);
	            }
	            var bar3DGroup = _this._chart.Bar3DGroup;
	            if (!isNullOrUndefined(bar3DGroup)) {
	                allGroups.push(bar3DGroup);
	            }
	            var column3DGroup = _this._chart.Column3DGroup;
	            if (!isNullOrUndefined(column3DGroup)) {
	                allGroups.push(column3DGroup);
	            }
	            var line3DGroup = _this._chart.Line3DGroup;
	            if (!isNullOrUndefined(line3DGroup)) {
	                allGroups.push(line3DGroup);
	            }
	            var pie3DGroup = _this._chart.Pie3DGroup;
	            if (!isNullOrUndefined(pie3DGroup)) {
	                allGroups.push(pie3DGroup);
	            }
	            var surfaceGroup = _this._chart.SurfaceGroup;
	            if (!isNullOrUndefined(surfaceGroup)) {
	                allGroups.push(surfaceGroup);
	            }
	            var areaGroups = _this._chart.AreaGroups;
	            if (!isNullOrUndefined(areaGroups)) {
	                _this._pushChartGroups(allGroups, areaGroups);
	            }
	            var barGroups = _this._chart.BarGroups;
	            if (!isNullOrUndefined(barGroups)) {
	                _this._pushChartGroups(allGroups, barGroups);
	            }
	            var columnGroups = _this._chart.ColumnGroups;
	            if (!isNullOrUndefined(columnGroups)) {
	                _this._pushChartGroups(allGroups, columnGroups);
	            }
	            var doughnutGroups = _this._chart.DoughnutGroups;
	            if (!isNullOrUndefined(doughnutGroups)) {
	                _this._pushChartGroups(allGroups, doughnutGroups);
	            }
	            var lineGroups = _this._chart.LineGroups;
	            if (!isNullOrUndefined(lineGroups)) {
	                _this._pushChartGroups(allGroups, lineGroups);
	            }
	            var pieGroups = _this._chart.PieGroups;
	            if (!isNullOrUndefined(pieGroups)) {
	                _this._pushChartGroups(allGroups, pieGroups);
	            }
	            var radarGroups = _this._chart.RadarGroups;
	            if (!isNullOrUndefined(radarGroups)) {
	                _this._pushChartGroups(allGroups, radarGroups);
	            }
	            var xyGroups = _this._chart.XYGroups;
	            if (!isNullOrUndefined(xyGroups)) {
	                _this._pushChartGroups(allGroups, xyGroups);
	            }
	
	            if (_this._needCache) {
	                _this._cachedChartGroups = allGroups;
	            }
	            return allGroups;
	        };
	        FullChartGroups_prototype.startCache = function () {
	            this._needCache = true;
	            this._cachedChartGroups = keyword_null;
	        };
	        FullChartGroups_prototype.endCache = function () {
	            this._needCache = false;
	            this._cachedChartGroups = keyword_null;
	        };
	        FullChartGroups_prototype._pushChartGroups = function (allGroups, groups) {
	            for (var i = 0, length = groups.Count; i < length; i++) {
	                allGroups.push(groups.Get(i));
	            }
	        };
	        FullChartGroups_prototype.Reset = function () {
	            var allGroups = this.GetAllChartGroups();
	            for (var _i = 0, allGroups_1 = allGroups; _i < allGroups_1.length; _i++) {
	                var group = allGroups_1[_i];
	                group.Init();
	            }
	        };
	        return FullChartGroups;
	    }());
	    Charts.FullChartGroups = FullChartGroups;
	    Charts.ChartGroupType = {
	        UnKnown: 0,
	        Area3DGroup: 1,
	        Bar3DGroup: 2,
	        Column3DGroup: 3,
	        Line3DGroup: 4,
	        Pie3DGroup: 5,
	        SurfaceGroup: 6,
	        AreaGroup: 7,
	        BarGroup: 8,
	        ColumnGroup: 9,
	        DoughnutGroup: 10,
	        LineGroup: 11,
	        PieGroup: 12,
	        RadarGroup: 13,
	        XYGroup: 14
	    };
	    Charts.ChartLinesType = {
	        DropLines: 0,
	        HiLoLines: 1,
	        SeriesLines: 2,
	        DlblsLeaderLines: 3
	    };
	
	    module.exports = Charts;
	}());

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Common = __webpack_require__(11);
	    var Types = Common._Types;
	    var inherit = Types._inherit;
	
	    var Charts = __webpack_require__(3);
	    var ChartCommon = Charts,
	        ChartElementBase = ChartCommon.ChartElementBase,
	        ChartUtility = ChartCommon.ChartUtility,
	        defineProperty = ChartUtility.defineProperty,
	        UnitHelper = ChartCommon.UnitHelper,
	        isNullOrUndefined = UnitHelper.isNullOrUndefined;
	
	    var DrawingText = Charts.DrawingText;
	    var ChartFormat = __webpack_require__(7).ChartFormat;
	
	    var keyword_null = null,
	        keyword_undefined = void 0;
	
	    var LegendKey = (function (_super) {
	        inherit(LegendKey, _super);
	
	        function LegendKey(legendEntry, ser, point) {
	            if (point === keyword_undefined) {
	                point = -1;
	            }
	            _super.call(this);
	            var _this = this;
	            _this._legendEntry = legendEntry;
	            _this._ser = ser;
	            _this._point = point;
	            return _this;
	        }
	
	        var prototype = LegendKey.prototype;
	
	        prototype.Equals = function (obj) {
	            return obj && this._ser === obj._ser && this._point === obj._point || false;
	        };
	        defineProperty(prototype, "Format", {
	            get: function () {
	                var _this = this;
	                var point = _this._point;
	                if (point === -1) {
	                    return _this._ser.Format;
	                } else if (point >= 0 && point < _this._ser.PointsCount) {
	                    return _this._ser.Points.Get(point).Format;
	                }
	                return keyword_null;
	            }
	        });
	        defineProperty(prototype, "Parent", {
	            get: function () {
	                return this._legendEntry;
	            }
	        });
	        prototype.ClearFormats = function () {
	
	        };
	        prototype.Delete = function () {
	
	        };
	        defineProperty(prototype, "Series", {
	            get: function () {
	                return this._ser;
	            }
	        });
	        defineProperty(prototype, "Point", {
	            get: function () {
	                return this._point;
	            }
	        });
	        prototype.CreateFormat = function () {
	            return new ChartFormat(this._legendEntry.Parent.Parent, this._legendEntry.Parent.Format);
	        };
	        return LegendKey;
	    }(ChartElementBase));
	    Charts.LegendKey = LegendKey;
	    var LegendEntry = (function () {
	        function LegendEntry(legend, series, point) {
	            if (point === keyword_undefined) {
	                point = -1;
	            }
	            var _this = this;
	            _this._deleted = keyword_null;
	            _this._legendKey = keyword_null;
	            _this._drawingText = keyword_null;
	            _this._ooEntry = keyword_null;
	            _this._legend = legend;
	            _this._legendKey = new LegendKey(_this, series, point);
	        }
	
	        var prototype = LegendEntry.prototype;
	
	        defineProperty(prototype, "Font", {
	            get: function () {
	                var _this = this;
	                if (!_this._drawingText) {
	                    _this._drawingText = new DrawingText(_this._legend.Parent.Parent, _this._legend.Font);
	                }
	                return _this._drawingText.Font;
	            }
	        });
	        defineProperty(prototype, "Format", {
	            get: function () {
	                return this._legendKey.Format;
	            }
	        });
	        defineProperty(prototype, "Parent", {
	            get: function () {
	                return this._legend;
	            }
	        });
	        defineProperty(prototype, "Deleted", {
	            get: function () {
	                return this._deleted || false;
	            }
	        });
	        defineProperty(prototype, "SourceIndex", {
	            get: function () {
	                return this._legend.LegendEntries.IndexOfSource(this);
	            }
	        });
	        defineProperty(prototype, "LegendKey", {
	            get: function () {
	                return this._legendKey;
	            }
	        });
	        prototype.Delete = function () {
	            this._deleted = true;
	        };
	        prototype.FromOOModel = function (t  ) {
	            if (isNullOrUndefined(t)) {
	                this._deleted = false;
	                this._drawingText = keyword_null;
	                return;
	            }
	            if (!isNullOrUndefined(t.delete)) {
	                this._deleted = t.delete;
	            }
	            if (!this.Deleted) {
	                if (!isNullOrUndefined(t.txPr)) {
	                    this._drawingText = new DrawingText(this._legend.Parent.Parent, this._legend.Font);
	                    var tx = {}  ;
	                    tx.rich = t.txPr;
	                    this._drawingText.FromOOModel(tx);
	                } else {
	                    this._drawingText = keyword_null;
	                }
	            }
	        };
	        prototype.ToOOModel = function () {
	            var ooEntry = this._ooEntry;
	            if (isNullOrUndefined(ooEntry) &&
	                (!isNullOrUndefined(this._drawingText) && this._drawingText.Font.IsDirtyIncludingParent(false)) || !isNullOrUndefined(this._deleted)) {
	                ooEntry = {}  ;
	            }
	            if (isNullOrUndefined(ooEntry)) {
	                return keyword_null;
	            }
	            if (!isNullOrUndefined(this._deleted)) {
	                ooEntry.delete = this._deleted;
	            }
	            ooEntry.idx = this.SourceIndex;
	            if (!this.Deleted && !isNullOrUndefined(this._drawingText)) {
	                ooEntry.txPr = this._drawingText.ToOOModel().rich;
	            }
	            return ooEntry;
	        };
	        return LegendEntry;
	    }());
	    Charts.LegendEntry = LegendEntry;
	    var LegendEntries = (function () {
	        function LegendEntries(legend) {
	            this._entries = [];
	            this._legend = legend;
	            this._sers = legend.Parent.SeriesCollection;
	        }
	        var prototype = LegendEntries.prototype;
	
	        prototype.FindEntryByKey = function (ser, point) {
	            for (var _i = 0, _a = this._entries; _i < _a.length; _i++) {
	                var item = _a[_i];
	                var relatedSeries = item.LegendKey.Series;
	                var relatedPoint = item.LegendKey.Point;
	                if (!isNullOrUndefined(relatedSeries) && this._sers.IndexOf(relatedSeries) !== -1 && point === relatedPoint) {
	                    return item;
	                }
	            }
	            return keyword_null;
	        };
	        prototype.UpdateEntries = function (cleanAll) {
	            var entries = [];
	            var _this = this;
	            var sers = _this._sers,
	                legend = _this._legend;
	            if (sers.Count > 0) {
	                var firstSer = sers.Get(0);
	                if (ChartUtility.IsAnyPieChart(firstSer.InnerChartType)) {
	                    var pointsCount = firstSer.PointsCount;
	                    for (var i = 0; i < pointsCount; i++) {
	                        if (cleanAll) {
	                            entries.push(new LegendEntry(legend, firstSer, i));
	                        } else {
	                            entries.push(_this.GetEntry(firstSer, i));
	                        }
	                    }
	                } else {
	                    i = 0;
	                    for (var length = sers.Count; i < length; i++) {
	                        var series = sers.Get(i);
	                        if (cleanAll) {
	                            entries.push(new LegendEntry(legend, series));
	                        } else {
	                            entries.push(_this.GetEntry(series, -1));
	                        }
	                    }
	                }
	            }
	            _this._entries = entries;
	        };
	        prototype.GetEntry = function (ser, point) {
	            return this.FindEntryByKey(ser, point) || new LegendEntry(this._legend, ser, point);
	        };
	        defineProperty(LegendEntries.prototype, "Count", {
	            get: function () {
	                var count = 0;
	                for (var _i = 0, _a = this._entries; _i < _a.length; _i++) {
	                    var entry = _a[_i];
	                    count += entry.Deleted ? 0 : 1;
	                }
	                return count;
	            }
	        });
	        defineProperty(LegendEntries.prototype, "Parent", {
	            get: function () {
	                return this._legend;
	            }
	        });
	        prototype.Get = function (index) {
	            return this.GetItem(index);
	        };
	        prototype.GetAllExistingEntries = function () {
	            return this._entries;
	        };
	        prototype.IndexOfSource = function (entry) {
	            return this._entries.indexOf(entry);
	        };
	        prototype.GetItem = function (viewIndex) {
	            var count = 0;
	            for (var _i = 0, _a = this._entries; _i < _a.length; _i++) {
	                var entry = _a[_i];
	                if (!entry.Deleted && count === viewIndex) {
	                    return entry;
	                }
	                if (!entry.Deleted) {
	                    count++;
	                }
	            }
	            return keyword_null;
	        };
	        prototype.RestorEntries = function (ooEntries) {
	            if (isNullOrUndefined(ooEntries) || ooEntries.length === 0) {
	                this.UpdateEntries(true);
	                return;
	            }
	            var entries = this._entries,
	                entriesCount = entries.length;
	            for (var _i = 0, ooEntries_1 = ooEntries; _i < ooEntries_1.length; _i++) {
	                var item = ooEntries_1[_i];
	                if (!isNullOrUndefined(item.idx)) {
	                    var index = item.idx;
	                    var entry;
	                    if (index < entriesCount) {
	                        entry = entries[index];
	                        if (!isNullOrUndefined(entry)) {
	                            entry.FromOOModel(item);
	                        }
	                    }
	                }
	            }
	        };
	        return LegendEntries;
	    }());
	    Charts.LegendEntries = LegendEntries;
	
	    var Legend = (function (_super) {
	        inherit(Legend, _super);
	
	        function Legend(chart) {
	            _super.call(this);
	            var _this = this;
	            _this.DefaultFontSize = UnitHelper.pointToPixel(9);
	            _this._position = 2  ;
	            _this._ooModel = keyword_null;
	            _this._chart = chart;
	            _this._chartText = new DrawingText(chart.Parent, chart.ChartArea.Font);
	            _this._chartText.Font.Size = UnitHelper.pointToPixel(9);
	            _this._entries = new LegendEntries(_this);
	            _this.Position = 4 ;
	           
	            return _this;
	        }
	
	        var prototype = Legend.prototype;
	
	        defineProperty(prototype, "Font", {
	            get: function () {
	                var _this = this;
	                if (!_this._chartText) {
	                    _this._chartText = new DrawingText(_this._chart.Parent, _this._chart.ChartArea.Font);
	                }
	
	                return _this._chartText.Font;
	            }
	        });
	        defineProperty(prototype, "Format", {
	            get: function () {
	                return this.ChartFormat;
	            }
	        });
	        defineProperty(prototype, "LegendEntries", {
	            get: function () {
	                return this._entries;
	            }
	        });
	        defineProperty(prototype, "Parent", {
	            get: function () {
	                return this._chart;
	            }
	        });
	        defineProperty(prototype, "Position", {
	            get: function () {
	                return this._position;
	            },
	            set: function (value) {
	                this._position = value;
	                if (this._ooModel && value !== 0  ) {
	                    this._ooModel.layout = keyword_null;
	                }
	            }
	        });
	        prototype.Delete = function () {
	            this._chart.HasLegend = false;
	        };
	        prototype.From2016ChartOOModel = function (t  ) {
	            var _this = this;
	            _this._ooModel = t;
	            if (!isNullOrUndefined(t.align)) {
	                _this._align = t.align;
	            }
	            if (!isNullOrUndefined(t.legendPos)) {
	                _this._position = t.legendPos;
	            }
	            if (!isNullOrUndefined(t.overlay)) {
	                _this.IncludeInLayout = t.overlay;
	            }
	            _super.prototype.FromShapeProperties.call(_this, t.spPr);
	            if (!isNullOrUndefined(t.txPr)) {
	                var tx = {
	                    
	                    rich: t.txPr
	                };
	                _this._chartText.FromOOModel(tx);
	            }
	        };
	        prototype.FromOOModel = function (t  ) {
	            var _this = this;
	            _this._ooModel = t;
	            if (!isNullOrUndefined(t.legendPos)) {
	                _this._position = t.legendPos;
	            }
	            if (!isNullOrUndefined(t.overlay)) {
	                _this.IncludeInLayout = t.overlay;
	            }
	                _super.prototype.FromShapeProperties.call(_this, t.spPr);
	            if (!isNullOrUndefined(t.txPr)) {
	                var tx = { 
	                    rich: t.txPr
	                };
	                _this._chartText.FromOOModel(tx);
	            }
	            _this._entries.RestorEntries(t.legendEntry);
	        };
	        prototype.ToOOModel = function () {
	            var _this = this;
	            var ooLegend = _this._ooModel || {} ;
	            if (_this._align) {
	                ooLegend.align = _this._align;
	            }
	            if (_this.Position) {
	                ooLegend.legendPos = _this.Position;
	            }
	            ooLegend.overlay = _this.IncludeInLayout;
	            ooLegend.spPr = _super.prototype.ToShapeProperties.call(_this);
	            if (!isNullOrUndefined(_this._chartText)) {
	                var tx = _this._chartText.ToOOModel();
	                if (!isNullOrUndefined(tx)) {
	                    ooLegend.txPr = tx.rich;
	                } else {
	                    ooLegend.txPr = keyword_null;
	                }
	            }
	           
	           
	           
	            var legendEntry = [];
	            for (var _i = 0, _a = _this._entries.GetAllExistingEntries(); _i < _a.length; _i++) {
	                var item = _a[_i];
	                var model = item.ToOOModel();
	                if (!isNullOrUndefined(model)) {
	                    legendEntry.push(model);
	                }
	            }
	            if (legendEntry.length > 0) {
	                ooLegend.legendEntry = legendEntry;
	            }
	            return ooLegend;
	        };
	        prototype.CreateFormat = function () {
	            var format = new ChartFormat(this._chart);
	            format.Fill.Color.ColorType = 0;
	            return format;
	        };
	        return Legend;
	    }(ChartElementBase));
	    Charts.Legend = Legend;
	
	    module.exports = Charts;
	}());

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Common = __webpack_require__(11);
	    var Types = Common._Types;
	    var inherit = Types._inherit;
	
	    var Charts = __webpack_require__(3);
	    var DrawingInterface = Charts,
	        ColorSchemeIndex = DrawingInterface.ColorSchemeIndex;
	    var ChartCommon = Charts,
	        ChartElementBase = ChartCommon.ChartElementBase,
	        ChartUtility = ChartCommon.ChartUtility,
	        defineProperty = ChartUtility.defineProperty,
	        UnitHelper = ChartCommon.UnitHelper,
	        isNullOrUndefined = UnitHelper.isNullOrUndefined;
	
	    var ChartFormat = __webpack_require__(7).ChartFormat;
	
	    var keyword_null = null, keyword_undefined = void 0;
	
	    var PlotArea = (function (_super) {
	        inherit(PlotArea, _super);
	        function PlotArea(chart) {
	            _super.call(this);
	            var _this = this;
	            _this._ooPlotArea = keyword_null;
	            _this._chart = chart;
	            _this._format = _this.GetDefaultFormat();
	            return _this;
	        }
	        var prototype = PlotArea.prototype;
	        prototype.GetDefaultFormat = function () {
	            var format = _super.prototype.GetDefaultFormat.call(this);
	            format.Fill.Color.ColorType = 0 ;
	            format.Line.Color.ColorType = 0 ;
	            return format;
	        };
	        prototype.CreateFormat = function () {
	            return new ChartFormat(this._chart);
	        };
	        defineProperty(prototype, "Format", {
	            get: function () {
	                return this.ChartFormat;
	            }
	        });
	        defineProperty(prototype, "Parent", {
	            get: function () {
	                return this._chart;
	            }
	        });
	        defineProperty(prototype, "PrimaryCatAxis", {
	            get: function () {
	                return this._chart.Axes.Item(0 , 0 );
	            }
	        });
	        defineProperty(prototype, "PrimaryValAxis", {
	            get: function () {
	                return this._chart.Axes.Item(1 , 0 );
	            }
	        });
	        defineProperty(prototype, "SecondaryCatAxis", {
	            get: function () {
	                return this._chart.Axes.Item(0 , 1 );
	            }
	        });
	        defineProperty(prototype, "SecondaryValAxis", {
	            get: function () {
	                return this._chart.Axes.Item(1 , 1 );
	            }
	        });
	        defineProperty(prototype, "SerAxis", {
	            get: function () {
	                return this._chart.Axes.Item(2 , 0 );
	            }
	        });
	        defineProperty(prototype, "SeriesCollection", {
	            get: function () {
	                return this._chart.SeriesCollection;
	            }
	        });
	        prototype.FromOOModel = function (t ) {
	            var _this = this;
	            _this._ooPlotArea = t;
	            if (!t.axes) {
	               
	                t.axes = [];
	            }
	            _this.FromShapeProperties(t.spPr);
	            _this._chart.SeriesCollection.RestoreSeries(t);
	            var is2016Chart = ChartUtility.GetIs2016ChartByPlotArea(t);
	            if (is2016Chart) {
	                _this._chart.Axes.Restore2016ChartAxes(t);
	            } else {
	                _this._chart.Axes.RestoreAxes(t);
	            }
	        };
	        prototype.ToOOModel = function () {
	            var _this = this;
	            var chartType = _this._chart.ChartType;
	            var is2016Chart = ChartUtility.GetIs2016ChartByChartType(chartType);
	            var ooModel, plotArea;
	            if (!is2016Chart) {
	                ooModel = _this._ooPlotArea || {} ;
	                plotArea = _this.ToCT_ChartPlotArea(chartType);
	                if (!isNullOrUndefined(plotArea)) {
	                    _this.SyncPlotAreaCharts(plotArea, ooModel);
	                    ooModel.spPr = _this.ToShapeProperties();
	                }
	            } else {
	                ooModel = {plotAreaRegion: {}};
	                ooModel.spPr = _this.ToShapeProperties();
	                ooModel.plotAreaRegion.series = _this.ToCT_Series();
	                ooModel.axes = _this.Update2016ChartAxes(_this.PrimaryCatAxis, _this.PrimaryValAxis, this.SecondaryCatAxis, this.SecondaryValAxis);
	            }
	            return ooModel;
	        };
	        prototype.Update2016ChartAxes = function (PrimaryCatAxis, PrimaryValAxis, SecondaryCatAxis, SecondaryValAxis) {
	            var axes = [];
	            if (!isNullOrUndefined(PrimaryCatAxis) && !isNullOrUndefined(PrimaryCatAxis._id) ) {
	                axes.push(PrimaryCatAxis.To2016ChartOOModel());
	            }
	            if (!isNullOrUndefined(PrimaryValAxis) && !isNullOrUndefined(PrimaryValAxis._id)) {
	                axes.push(PrimaryValAxis.To2016ChartOOModel());
	            }
	            if (!isNullOrUndefined(SecondaryCatAxis) && !isNullOrUndefined(SecondaryCatAxis._id)) {
	                axes.push(SecondaryCatAxis.To2016ChartOOModel());
	            }
	            if (!isNullOrUndefined(SecondaryValAxis) && !isNullOrUndefined(SecondaryValAxis._id)) {
	                axes.push(SecondaryValAxis.To2016ChartOOModel());
	            }
	            return axes;
	        };
	        prototype.ToCT_Series = function () {
	            var seriesResult = [], toSeries = this.SeriesCollection.AllSers;
	            if (!isNullOrUndefined(toSeries) && toSeries.length > 0) {
	                for (var i = 0; i < toSeries.length; i++) {
	                    var seriesItem = toSeries[i];
	                    seriesResult.push(seriesItem.ToOOModel());
	                }
	            }
	            return seriesResult;
	        };
	        prototype.ToCT_ChartPlotArea = function (chartType, axisGroup, toAxis) {
	            if (axisGroup === keyword_undefined) { axisGroup = keyword_null; }
	            if (toAxis === keyword_undefined) { toAxis = true; }
	            var plotArea = {
	                chartGroups: [],
	                axes: []
	            } ;
	            var toPrimay = isNullOrUndefined(axisGroup) || axisGroup === 0 ;
	            var toSecondary = true;
	            if (ChartUtility.IsStockChart(chartType)) {
	                toSecondary = this.HasSecondarySeries(9 );
	            } else {
	                toSecondary = (isNullOrUndefined(axisGroup) || axisGroup === 1 ) &&
	                    this.HasSecondarySeries(chartType) && !ChartUtility.Is3DChart(chartType) && !ChartUtility.IsSurfaceChart(chartType);
	            }
	            if (ChartUtility.IsAnyPieChart(chartType)) {
	                toAxis = false;
	            }
	            var primaryChart = keyword_null;
	            var secondaryChart = keyword_null;
	            switch (chartType) {
	                case 0 :
	                    plotArea = this.ToComboChartPlotArea();
	                    break;
	                case 12 :
	                case 13 :
	                case 14 :
	                case 18 :
	                case 19 :
	                case 20 :
	                case 15 :
	                case 16 :
	                case 17 :
	                case 6 :
	                case 21 :
	                case 22 :
	                case 23 :
	                    if (toPrimay) {
	                        primaryChart = this.ToCT_BarChart(chartType, 0 );
	                    }
	                    if (toSecondary) {
	                        secondaryChart = this.ToCT_BarChart(chartType, 1 );
	                    }
	                    break;
	                case 9 :
	                case 24 :
	                case 25 :
	                case 26 :
	                case 27 :
	                case 28 :
	                case 5 :
	                    if (toPrimay) {
	                        primaryChart = this.ToCT_LineChart(chartType, 0 );
	                    }
	                    if (toSecondary) {
	                        secondaryChart = this.ToCT_LineChart(chartType, 1 );
	                    }
	                    break;
	                case 10 :
	                case 30 :
	                case 31 :
	                case 4 :
	                case 29 :
	                case 32 :
	                case 3 :
	                case 41 :
	                    if (toPrimay) {
	                        primaryChart = this.ToCT_PieChart(chartType, 0 );
	                    }
	                    if (toSecondary) {
	                        secondaryChart = this.ToCT_PieChart(chartType, 1 );
	                    }
	                    break;
	                case 8 :
	                case 37 :
	                case 38 :
	                case 39 :
	                case 40 :
	                case 7 :
	                    if (toPrimay) {
	                        primaryChart = this.ToCT_AreaChart(chartType, 0 );
	                    }
	                    if (toSecondary) {
	                        secondaryChart = this.ToCT_AreaChart(chartType, 1 );
	                    }
	                    break;
	                case 2 :
	                case 42 :
	                case 43 :
	                    if (toPrimay) {
	                        primaryChart = this.ToCT_RadarChart(chartType, 0 );
	                    }
	                    if (toSecondary) {
	                        secondaryChart = this.ToCT_RadarChart(chartType, 1 );
	                    }
	                    break;
	                case 1 :
	                case 33 :
	                case 34 :
	                case 35 :
	                case 36 :
	                    if (toPrimay) {
	                        primaryChart = this.ToCT_ScatterChart(chartType, 0 );
	                    }
	                    if (toSecondary) {
	                        secondaryChart = this.ToCT_ScatterChart(chartType, 1 );
	                    }
	                    break;
	                case 11 :
	                case 48 :
	                    if (toPrimay) {
	                        primaryChart = this.ToCT_BubbleChart(chartType, 0 );
	                    }
	                    if (toSecondary) {
	                        secondaryChart = this.ToCT_BubbleChart(chartType, 1 );
	                    }
	                    break;
	                case 44 :
	                case 45 :
	                case 46 :
	                case 47 :
	                    if (toPrimay) {
	                        primaryChart = this.ToCT_SurfaceChartBase(chartType, 0 );
	                    }
	                    break;
	                case 49 :
	                case 50 :
	                    if (toPrimay) {
	                        primaryChart = this.ToCT_StockChart(chartType, 0 );
	                    }
	                    if (toSecondary) {
	                        secondaryChart = this.ToCT_StockChart(chartType, 1 );
	                    }
	                    break;
	                case 51 :
	                case 52 :
	                    if (toPrimay) {
	                        var sers = this.SeriesCollection.GetSers(false, 0 );
	                        if (sers.length > 0) {
	                            var volSerChartType = sers[0].InnerChartType;
	                           
	                            primaryChart = this.ToCT_ChartBase(volSerChartType, 0 );
	                        }
	                    }
	                    if (toSecondary) {
	                        secondaryChart = this.ToCT_StockChart(chartType, 1 );
	                    }
	                    break;
	            }
	            if (!isNullOrUndefined(primaryChart)) {
	                plotArea.chartGroups.push(primaryChart);
	                if (toAxis) {
	                    var axesIds = this.SetPlotAreaAxies(plotArea, this.PrimaryCatAxis, this.PrimaryValAxis, this.SerAxis);
	                    primaryChart.axId = primaryChart.axId.concat(axesIds);
	                }
	            }
	            if (!isNullOrUndefined(secondaryChart)) {
	                plotArea.chartGroups.push(secondaryChart);
	                if (toAxis) {
	                    axesIds = this.SetPlotAreaAxies(plotArea, this.SecondaryCatAxis, this.SecondaryValAxis, this.SerAxis);
	                    secondaryChart.axId = secondaryChart.axId.concat(axesIds);
	                }
	            }
	            return plotArea;
	        };
	        prototype.ToCT_ChartBase = function (chartType, axisGroup) {
	           
	            switch (chartType) {
	               
	               
	                case 12 :
	                case 13 :
	                case 14 :
	                    return this.ToCT_BarChart(chartType, axisGroup);
	                case 15 :
	                case 16 :
	                case 17 :
	                case 6 :
	                    return this.ToCT_BarChart(chartType, axisGroup);
	                case 18 :
	                case 19 :
	                case 20 :
	                    return this.ToCT_BarChart(chartType, axisGroup);
	                case 21 :
	                case 22 :
	                case 23 :
	                    return this.ToCT_BarChart(chartType, axisGroup);
	                case 9 :
	                case 24 :
	                case 25 :
	                case 26 :
	                case 27 :
	                case 28 :
	                    return this.ToCT_LineChart(chartType, axisGroup);
	                case 5 :
	                    return this.ToCT_LineChart(chartType, axisGroup);
	                case 10 :
	                case 30 :
	                    return this.ToCT_PieChart(chartType, axisGroup);
	                case 31 :
	                case 4 :
	                    return this.ToCT_PieChart(chartType, axisGroup);
	                case 29 :
	                case 32 :
	                    return this.ToCT_PieChart(chartType, axisGroup);
	                case 1 :
	                case 33 :
	                case 34 :
	                case 35 :
	                case 36 :
	                    return this.ToCT_ScatterChart(chartType, axisGroup);
	                case 8 :
	                case 37 :
	                case 38 :
	                    return this.ToCT_AreaChart(chartType, axisGroup);
	                case 39 :
	                case 40 :
	                case 7 :
	                    return this.ToCT_AreaChart(chartType, axisGroup);
	                case 3 :
	                case 41 :
	                    return this.ToCT_PieChart(chartType, axisGroup);
	                case 2 :
	                case 42 :
	                case 43 :
	                    return this.ToCT_RadarChart(chartType, axisGroup);
	                case 44 :
	                case 45 :
	                    return this.ToCT_SurfaceChartBase(chartType, axisGroup);
	                case 46 :
	                case 47 :
	                    return this.ToCT_SurfaceChartBase(chartType, axisGroup);
	                case 11 :
	                case 48 :
	                    return this.ToCT_BubbleChart(chartType, axisGroup);
	               
	               
	               
	               
	               
	               
	               
	               
	            }
	           
	        };
	        prototype.SyncPlotAreaCharts = function (from , to ) {
	            to.axes = from.axes;
	            to.chartGroups = from.chartGroups;
	           
	            var bandFmts3dLossless = keyword_null;
	            var surface3DChart = ChartUtility.GetSurface3DChart(to);
	            if (!isNullOrUndefined(surface3DChart) && !isNullOrUndefined(surface3DChart.bandFmts)) {
	                bandFmts3dLossless = surface3DChart.bandFmts;
	            }
	            var bandFmtsLossless = keyword_null;
	            var surfaceChart = ChartUtility.GetSurfaceChart(to);
	            if (!isNullOrUndefined(surfaceChart) && !isNullOrUndefined(surfaceChart.bandFmts)) {
	                bandFmtsLossless = surfaceChart.bandFmts;
	            }
	            if (!isNullOrUndefined(surface3DChart) && !isNullOrUndefined(bandFmts3dLossless)) {
	                surface3DChart.bandFmts = bandFmts3dLossless;
	            }
	            if (!isNullOrUndefined(surfaceChart) && !isNullOrUndefined(bandFmtsLossless)) {
	                surfaceChart.bandFmts = bandFmtsLossless;
	            }
	        };
	        prototype.ToComboChartPlotArea = function () {
	            var primaryPlotArea = this.ConvertAxisGroupToComboChartPlotArea(0 );
	            var secondaryPlotArea = this.ConvertAxisGroupToComboChartPlotArea(1 );
	            if (!isNullOrUndefined(primaryPlotArea) && !isNullOrUndefined(secondaryPlotArea)) {
	                return this.MergePrimeSecondPlotArea(primaryPlotArea, secondaryPlotArea);
	            } else if (!isNullOrUndefined(primaryPlotArea)) {
	                return primaryPlotArea;
	            } else if (!isNullOrUndefined(secondaryPlotArea)) {
	                return secondaryPlotArea;
	            }
	            return null;
	        };
	        prototype.ConvertAxisGroupToComboChartPlotArea = function (axisGroup) {
	            var chartTypes = [];
	            var sers = this.SeriesCollection.GetSers(false, axisGroup);
	            for (var _i = 0, sers_1 = sers; _i < sers_1.length; _i++) {
	                var ser = sers_1[_i];
	                if (chartTypes.indexOf(ser.InnerChartType) < 0) {
	                    chartTypes.push(ser.InnerChartType);
	                }
	            }
	            var plotAreas = [];
	            var firstNotPiePlotArea = keyword_null;
	            for (var _a = 0, chartTypes_1 = chartTypes; _a < chartTypes_1.length; _a++) {
	                var chartType = chartTypes_1[_a];
	                if (isNullOrUndefined(firstNotPiePlotArea) && !ChartUtility.IsAnyPieChart(chartType)) {
	                    firstNotPiePlotArea = this.ToCT_ChartPlotArea(chartType, axisGroup);
	                    plotAreas.push(firstNotPiePlotArea);
	                } else {
	                    plotAreas.push(this.ToCT_ChartPlotArea(chartType, axisGroup, false));
	                }
	            }
	            if (plotAreas.length > 0) {
	                return this.ProcessComboPlotAreas(plotAreas);
	            }
	            return null;
	        };
	        prototype.ProcessComboPlotAreas = function (plotAreas) {
	            var firstPlotArea = keyword_null;
	            for (var _i = 0, plotAreas_1 = plotAreas; _i < plotAreas_1.length; _i++) {
	                var item = plotAreas_1[_i];
	                var chartType = ChartUtility.GetChartType(item);
	                if (!ChartUtility.IsAnyPieChart(chartType)) {
	                    firstPlotArea = item;
	                    break;
	                }
	            }
	            if (isNullOrUndefined(firstPlotArea) && plotAreas.length > 0) {
	                firstPlotArea = plotAreas[0];
	                plotAreas.splice(0, 1);
	            } else {
	                plotAreas.splice(plotAreas.indexOf(firstPlotArea), 1);
	            }
	            if (!isNullOrUndefined(firstPlotArea) && plotAreas.length > 0) {
	                var axisIds = [];
	                if (!isNullOrUndefined(firstPlotArea.axes)) {
	                    for (var _a = 0, _b = firstPlotArea.axes; _a < _b.length; _a++) {
	                        var item_1 = _b[_a];
	                        axisIds.push(item_1.axId);
	                    }
	                }
	                for (var i = 0; i < plotAreas.length; i++) {
	                    var p = plotAreas[i];
	                    var area3DChart = ChartUtility.GetArea3DChart(p);
	                    if (!isNullOrUndefined(area3DChart) && isNullOrUndefined(area3DChart)) {
	                        area3DChart.axId = axisIds;
	                        firstPlotArea.chartGroups.push(area3DChart);
	                    }
	                    var areaChart = ChartUtility.GetAreaChart(p);
	                    if (!isNullOrUndefined(areaChart)) {
	                        for (var _c = 0, areaChart_1 = areaChart; _c < areaChart_1.length; _c++) {
	                            var item_2 = areaChart_1[_c];
	                            item_2.axId = axisIds;
	                            var firstPlotArea_AreaChart = ChartUtility.GetAreaChart(firstPlotArea);
	                            if (firstPlotArea_AreaChart.length === 0 ||
	                                ChartUtility.GetChartTypeByAreaChart(firstPlotArea_AreaChart[0]) !== ChartUtility.GetChartTypeByAreaChart(item_2)) {
	                                firstPlotArea.chartGroups.push(item_2);
	                            } else {
	                                for (var _d = 0, _e = item_2.ser; _d < _e.length; _d++) {
	                                    var ser = _e[_d];
	                                    firstPlotArea_AreaChart[0].ser.push(ser);
	                                }
	                            }
	                        }
	                    }
	                    var bar3DChart = ChartUtility.GetBar3DChart(p);
	                    var firstPlotArea_area3DChart = ChartUtility.GetBar3DChart(firstPlotArea);
	                    if (!isNullOrUndefined(bar3DChart) && isNullOrUndefined(firstPlotArea_area3DChart)) {
	                        bar3DChart.axId = axisIds;
	                        firstPlotArea.chartGroups.push(area3DChart);
	                    }
	                    var barChart = ChartUtility.GetBarChart(p);
	                    if (!isNullOrUndefined(barChart)) {
	                        for (var _f = 0, barChart_1 = barChart; _f < barChart_1.length; _f++) {
	                            var item_3 = barChart_1[_f];
	                            item_3.axId = axisIds;
	                            var firstPlotArea_BarChart = ChartUtility.GetBarChart(firstPlotArea);
	                            if (firstPlotArea_BarChart.length === 0 ||
	                                ChartUtility.GetChartTypeByBarChart(firstPlotArea_BarChart[0]) !== ChartUtility.GetChartTypeByBarChart(item_3)) {
	                                firstPlotArea.chartGroups.push(item_3);
	                            } else {
	                                for (var _g = 0, _h = item_3.ser; _g < _h.length; _g++) {
	                                    ser = _h[_g];
	                                    firstPlotArea_BarChart[0].ser.push(ser);
	                                }
	                            }
	                        }
	                    }
	                    var bubbleChart = ChartUtility.GetBubbleChart(p);
	                    if (!isNullOrUndefined(bubbleChart)) {
	                        for (var _j = 0, bubbleChart_1 = bubbleChart; _j < bubbleChart_1.length; _j++) {
	                            var item_4 = bubbleChart_1[_j];
	                            item_4.axId = axisIds;
	                            var firstPlotArea_BubbleChart = ChartUtility.GetBubbleChart(firstPlotArea);
	                            if (firstPlotArea_BubbleChart.length === 0 ||
	                                ChartUtility.GetChartTypeByBubbleChart(firstPlotArea_BubbleChart[0]) !== ChartUtility.GetChartTypeByBubbleChart(item_4)) {
	                                firstPlotArea.chartGroups.push(item_4);
	                            } else {
	                                for (var _k = 0, _l = item_4.ser; _k < _l.length; _k++) {
	                                    ser = _l[_k];
	                                    firstPlotArea_BubbleChart[0].ser.push(ser);
	                                }
	                            }
	                        }
	                    }
	                    var doughnutChart = ChartUtility.GetDoughnutChart(p);
	                    if (!isNullOrUndefined(doughnutChart)) {
	                        for (var _m = 0, doughnutChart_1 = doughnutChart; _m < doughnutChart_1.length; _m++) {
	                            var item_5 = doughnutChart_1[_m];
	                            var firstPlotArea_DoughnutChart = ChartUtility.GetDoughnutChart(firstPlotArea);
	                            if (firstPlotArea_DoughnutChart.length === 0 ||
	                                ChartUtility.GetChartTypeByPieChart(firstPlotArea_DoughnutChart[0], null) !== ChartUtility.GetChartTypeByPieChart(item_5, null)) {
	                                firstPlotArea.chartGroups.push(item_5);
	                            } else {
	                                for (var _o = 0, _p = item_5.ser; _o < _p.length; _o++) {
	                                    ser = _p[_o];
	                                    firstPlotArea_DoughnutChart[0].ser.push(ser);
	                                }
	                            }
	                        }
	                    }
	                    var line3DChart = ChartUtility.GetLine3DChart(p);
	                    var firstPlotArea_Line3DChart = ChartUtility.GetLine3DChart(firstPlotArea);
	                    if (!isNullOrUndefined(line3DChart) && isNullOrUndefined(firstPlotArea_Line3DChart)) {
	                        line3DChart.axId = axisIds;
	                        firstPlotArea.chartGroups.push(line3DChart);
	                    }
	                    var lineChart = ChartUtility.GetLineChart(p);
	                    if (!isNullOrUndefined(lineChart)) {
	                        for (var _q = 0, lineChart_1 = lineChart; _q < lineChart_1.length; _q++) {
	                            var item_6 = lineChart_1[_q];
	                            item_6.axId = axisIds;
	                            var firstPlotArea_LineChart = ChartUtility.GetLineChart(firstPlotArea);
	                            if (firstPlotArea_LineChart.length === 0 ||
	                                ChartUtility.GetChartTypeByLineChart(firstPlotArea_LineChart[0], null) !== ChartUtility.GetChartTypeByLineChart(item_6, null)) {
	                                firstPlotArea.chartGroups.push(item_6);
	                            } else {
	                                for (var _r = 0, _s = item_6.ser; _r < _s.length; _r++) {
	                                    ser = _s[_r];
	                                    firstPlotArea_LineChart[0].ser.push(ser);
	                                }
	                            }
	                        }
	                    }
	                    var ofPieChart = ChartUtility.GetOfPieChart(p);
	                    if (!isNullOrUndefined(ofPieChart)) {
	                        for (var _t = 0, ofPieChart_1 = ofPieChart; _t < ofPieChart_1.length; _t++) {
	                            var item_7 = ofPieChart_1[_t];
	                            var firstPlotArea_OfPieChart = ChartUtility.GetOfPieChart(firstPlotArea);
	                            if (firstPlotArea_OfPieChart.length === 0 ||
	                                ChartUtility.GetChartTypeByPieChart(firstPlotArea_OfPieChart[0], null) !== ChartUtility.GetChartTypeByPieChart(item_7, null)) {
	                                firstPlotArea.chartGroups.push(item_7);
	                            } else {
	                                for (var _u = 0, _v = item_7.ser; _u < _v.length; _u++) {
	                                    ser = _v[_u];
	                                    firstPlotArea_OfPieChart[0].ser.push(ser);
	                                }
	                            }
	                        }
	                    }
	                    var pie3DChart = ChartUtility.GetPie3DChart(p);
	                    var firstPlotArea_Pie3DChart = ChartUtility.GetPie3DChart(firstPlotArea);
	                    if (!isNullOrUndefined(pie3DChart) && isNullOrUndefined(firstPlotArea_Pie3DChart)) {
	                        firstPlotArea.chartGroups.push(pie3DChart);
	                    }
	                    var pieChart = ChartUtility.GetPieChart(p);
	                    if (!isNullOrUndefined(pieChart)) {
	                        for (var _w = 0, pieChart_1 = pieChart; _w < pieChart_1.length; _w++) {
	                            var item_8 = pieChart_1[_w];
	                            var firstPlotArea_PieChart = ChartUtility.GetPieChart(firstPlotArea);
	                            if (firstPlotArea_PieChart.length === 0 ||
	                                ChartUtility.GetChartTypeByPieChart(firstPlotArea_PieChart[0], null) !== ChartUtility.GetChartTypeByPieChart(item_8, null)) {
	                                firstPlotArea.chartGroups.push(item_8);
	                            } else {
	                                for (var _x = 0, _y = item_8.ser; _x < _y.length; _x++) {
	                                    ser = _y[_x];
	                                    firstPlotArea_PieChart[0].ser.push(ser);
	                                }
	                            }
	                        }
	                    }
	                    var radarChart = ChartUtility.GetRadarChart(p);
	                    if (!isNullOrUndefined(radarChart)) {
	                        for (var _z = 0, radarChart_1 = radarChart; _z < radarChart_1.length; _z++) {
	                            var item_9 = radarChart_1[_z];
	                            item_9.axId = axisIds;
	                            var firstPlotArea_RadarChart = ChartUtility.GetRadarChart(firstPlotArea);
	                            if (firstPlotArea_RadarChart.length === 0 ||
	                                ChartUtility.GetChartTypeByRadarChart(firstPlotArea_RadarChart[0], null) !== ChartUtility.GetChartTypeByRadarChart(item_9, null)) {
	                                firstPlotArea.chartGroups.push(item_9);
	                            } else {
	                                for (var _0 = 0, _1 = item_9.ser; _0 < _1.length; _0++) {
	                                    ser = _1[_0];
	                                    firstPlotArea_RadarChart[0].ser.push(ser);
	                                }
	                            }
	                        }
	                    }
	                    var scatterChart = ChartUtility.GetScatterChart(p);
	                    if (!isNullOrUndefined(scatterChart)) {
	                        for (var _2 = 0, scatterChart_1 = scatterChart; _2 < scatterChart_1.length; _2++) {
	                            var item_10 = scatterChart_1[_2];
	                            item_10.axId = axisIds;
	                            var firstPlotArea_ScatterChart = ChartUtility.GetScatterChart(firstPlotArea);
	                            if (firstPlotArea_ScatterChart.length === 0 ||
	                                ChartUtility.GetChartTypeByScatterChart(firstPlotArea_ScatterChart[0]) !== ChartUtility.GetChartTypeByScatterChart(item_10)) {
	                                firstPlotArea.chartGroups.push(item_10);
	                            } else {
	                                for (var _3 = 0, _4 = item_10.ser; _3 < _4.length; _3++) {
	                                    ser = _4[_3];
	                                    firstPlotArea_ScatterChart[0].ser.push(ser);
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	            return firstPlotArea;
	        };
	       
	       
	       
	       
	       
	       
	       
	        prototype.MergePrimeSecondPlotArea = function (primaryPlotArea , secondaryPlotArea ) {
	            if (!isNullOrUndefined(secondaryPlotArea.axes)) {
	                primaryPlotArea.axes = primaryPlotArea.axes.concat(secondaryPlotArea.axes);
	            }
	            var secondaryPlotArea_Area3DChart = ChartUtility.GetArea3DChart(secondaryPlotArea);
	            var primaryPlotArea_Area3DChart = ChartUtility.GetArea3DChart(primaryPlotArea);
	            if (!isNullOrUndefined(secondaryPlotArea_Area3DChart) && isNullOrUndefined(primaryPlotArea_Area3DChart)) {
	                primaryPlotArea.chartGroups.push(secondaryPlotArea_Area3DChart);
	            }
	            var secondaryPlotArea_AreaChart = ChartUtility.GetAreaChart(secondaryPlotArea);
	            primaryPlotArea.chartGroups = primaryPlotArea.chartGroups.concat(secondaryPlotArea_AreaChart);
	            var secondaryPlotArea_Bar3DChart = ChartUtility.GetBar3DChart(secondaryPlotArea);
	            var primaryPlotArea_Bar3DChart = ChartUtility.GetBar3DChart(primaryPlotArea);
	            if (!isNullOrUndefined(secondaryPlotArea_Bar3DChart) && isNullOrUndefined(primaryPlotArea_Bar3DChart)) {
	                primaryPlotArea.chartGroups.push(secondaryPlotArea_Bar3DChart);
	            }
	            var secondaryPlotArea_BarChart = ChartUtility.GetBarChart(secondaryPlotArea);
	            primaryPlotArea.chartGroups = primaryPlotArea.chartGroups.concat(secondaryPlotArea_BarChart);
	            var secondaryPlotArea_BubbleChart = ChartUtility.GetBubbleChart(secondaryPlotArea);
	            primaryPlotArea.chartGroups = primaryPlotArea.chartGroups.concat(secondaryPlotArea_BubbleChart);
	            var secondaryPlotArea_DoughnutChart = ChartUtility.GetDoughnutChart(secondaryPlotArea);
	            primaryPlotArea.chartGroups = primaryPlotArea.chartGroups.concat(secondaryPlotArea_DoughnutChart);
	            var primaryPlotArea_Line3DChart = ChartUtility.GetLine3DChart(primaryPlotArea);
	            var secondaryPlotArea_Line3DChart = ChartUtility.GetLine3DChart(secondaryPlotArea);
	            if (!isNullOrUndefined(secondaryPlotArea_Line3DChart) && isNullOrUndefined(primaryPlotArea_Line3DChart)) {
	                primaryPlotArea.chartGroups.push(secondaryPlotArea_Line3DChart);
	            }
	            var secondaryPlotArea_LineChart = ChartUtility.GetLineChart(secondaryPlotArea);
	            primaryPlotArea.chartGroups = primaryPlotArea.chartGroups.concat(secondaryPlotArea_LineChart);
	            var secondaryPlotArea_OfPieChart = ChartUtility.GetOfPieChart(secondaryPlotArea);
	            primaryPlotArea.chartGroups = primaryPlotArea.chartGroups.concat(secondaryPlotArea_OfPieChart);
	            var primaryPlotArea_Pie3DChart = ChartUtility.GetPie3DChart(primaryPlotArea);
	            var secondaryPlotArea_Pie3DChart = ChartUtility.GetPie3DChart(secondaryPlotArea);
	            if (!isNullOrUndefined(secondaryPlotArea_Pie3DChart) && isNullOrUndefined(primaryPlotArea_Pie3DChart)) {
	                primaryPlotArea.chartGroups.push(secondaryPlotArea_Pie3DChart);
	            }
	            var secondaryPlotArea_PieChart = ChartUtility.GetPieChart(secondaryPlotArea);
	            primaryPlotArea.chartGroups = primaryPlotArea.chartGroups.concat(secondaryPlotArea_PieChart);
	            var secondaryPlotArea_RadarChart = ChartUtility.GetRadarChart(secondaryPlotArea);
	            primaryPlotArea.chartGroups = primaryPlotArea.chartGroups.concat(secondaryPlotArea_RadarChart);
	            var secondaryPlotArea_ScatterChart = ChartUtility.GetScatterChart(secondaryPlotArea);
	            primaryPlotArea.chartGroups = primaryPlotArea.chartGroups.concat(secondaryPlotArea_ScatterChart);
	            return primaryPlotArea;
	        };
	        prototype.SetPlotAreaAxies = function (plotArea , catAxis, valAxis, serAxis) {
	            if (serAxis === keyword_undefined) { serAxis = keyword_null; }
	            var ct_CatAx = keyword_null, ct_ValAx = keyword_null, ct_SerAx;
	            var axesIds = [];
	            if (!isNullOrUndefined(catAxis)) {
	                ct_CatAx = catAxis.ToOOModel();
	                if (!isNullOrUndefined(ct_CatAx)) {
	                    axesIds.push(ct_CatAx.axId);
	                    plotArea.axes.push(ct_CatAx);
	                }
	            }
	            if (!isNullOrUndefined(valAxis) && !isNullOrUndefined(catAxis)) {
	                ct_ValAx = valAxis.ToOOModel();
	                axesIds.push(ct_ValAx.axId);
	                plotArea.axes.push(ct_ValAx);
	                if (valAxis.Crosses === 0 ) {
	                    ct_CatAx.crossesAt = valAxis.CrossesAt;
	                } else {
	                    ct_CatAx.crosses = valAxis.Crosses;
	                }
	                if (catAxis.Crosses === 0 ) {
	                    ct_ValAx.crossesAt = catAxis.CrossesAt;
	                } else {
	                    ct_ValAx.crosses = catAxis.Crosses;
	                }
	                if (catAxis.ReversePlotOrder) {
	                    if (ChartUtility.IsBarChart(this._chart.ChartType)) {
	                        ct_ValAx.axPos = 0 ;
	                    } else {
	                        ct_ValAx.axPos = 2 ;
	                    }
	                }
	                (ct_ValAx ).crossBetween = catAxis.AxisBetweenCategories ? 0  : 1 ;
	            }
	            if (!isNullOrUndefined(ct_CatAx) && !isNullOrUndefined(ct_ValAx)) {
	                ct_CatAx.crossAx = ct_ValAx.axId;
	                ct_ValAx.crossAx = ct_CatAx.axId;
	            }
	            if (!isNullOrUndefined(serAxis)) {
	                ct_SerAx = serAxis.ToOOModel();
	                plotArea.axes.push(ct_SerAx);
	                axesIds.push(ct_SerAx.axId);
	                if (!isNullOrUndefined(ct_ValAx)) {
	                    ct_SerAx.crossAx = ct_ValAx.axId;
	                }
	                ct_SerAx.crosses = 1 ;
	            } else if (ChartUtility.Is3DChart(this._chart.ChartType)) {
	                axesIds.push(0);
	            }
	            return axesIds;
	        };
	        prototype.ToCT_BarChart = function (barChartType, axisGroup) {
	            if (ChartUtility.Is3DChart(barChartType)) {
	                var bar3DChart = this.ToCT_BarChartBase(barChartType, axisGroup);
	                if (!isNullOrUndefined(bar3DChart)) {
	                    bar3DChart.gapDepth = this._chart.GapDepth;
	                }
	                return bar3DChart;
	            }
	
	            var barChart = this.ToCT_BarChartBase(barChartType, axisGroup);
	            if (!isNullOrUndefined(barChart)) {
	                var chartGroup = this._chart.FindChartGroup(barChartType, axisGroup);
	                if (!isNullOrUndefined(chartGroup)) {
	                    barChart.overlap = chartGroup.Overlap;
	                    if (chartGroup.HasSeriesLines) {
	                        barChart.serLines = [];
	                        barChart.serLines.push(chartGroup.SeriesLines.ToOOModel());
	                    }
	                }
	            }
	            return barChart;
	        };
	        prototype.ToCT_BarChartBase = function (barChartType, axisGroup) {
	            var barChartBase;
	            var isBarChart = ChartUtility.IsBarChart(barChartType);
	            if (ChartUtility.Is3DChart(barChartType)) {
	                barChartBase = {
	                    chartType: 7 ,
	                    ser: [],
	                    axId: []
	                };
	            } else {
	                barChartBase = {
	                    chartType: 6 ,
	                    ser: [],
	                    serLines: [],
	                    axId: []
	                };
	            }
	            barChartBase.barDir = isBarChart ? 0  : 1 ;
	            var sers = this.SeriesCollection.GetSers(false, axisGroup);
	            for (var _i = 0, sers_2 = sers; _i < sers_2.length; _i++) {
	                var ser = sers_2[_i];
	                var serTemp = ser;
	                if (serTemp.InnerChartType !== barChartType) {
	                    continue;
	                }
	                var barSer = serTemp.ToOOModel() ;
	                if (!isNullOrUndefined(barSer)) {
	                    barChartBase.ser.push(barSer);
	                }
	            }
	            switch (barChartType) {
	                case 19 :
	                case 13 :
	                case 16 :
	                case 22 :
	                    barChartBase.grouping = 3 ;
	                    break;
	                case 20 :
	                case 14 :
	                case 17 :
	                case 23 :
	                    barChartBase.grouping = 0 ;
	                    break;
	                case 6 :
	                    barChartBase.grouping = 2 ;
	                    break;
	                case 18 :
	                case 12 :
	                case 21 :
	                case 15 :
	                    barChartBase.grouping = 1 ;
	                    break;
	                default:
	                    barChartBase.grouping = 1 ;
	                    break;
	            }
	            var chartGroup = this._chart.FindChartGroup(barChartType, axisGroup);
	            if (!isNullOrUndefined(chartGroup)) {
	                barChartBase.gapWidth = chartGroup.GapWidth;
	                barChartBase.varyColors = chartGroup.VaryByCategories;
	            }
	            return barChartBase;
	        };
	        prototype.ToCT_LineChart = function (lineChartType, axisGroup) {
	            var _this = this;
	            if (ChartUtility.Is3DChart(lineChartType)) {
	                var line3DChart = _this.ToCT_LineChartBase(lineChartType, axisGroup);
	                if (!isNullOrUndefined(line3DChart)) {
	                    line3DChart.gapDepth = _this._chart.GapDepth;
	                }
	                return line3DChart;
	            }
	
	            var lineChart = _this.ToCT_LineChartBase(lineChartType, axisGroup);
	            if (!isNullOrUndefined(lineChart)) {
	                lineChart.smooth = ChartUtility.IsSmoothLine(lineChartType);
	                var chartGroup = _this._chart.FindChartGroup(lineChartType, axisGroup);
	                if (!isNullOrUndefined(chartGroup)) {
	                    if (chartGroup.HasHiLoLines) {
	                        lineChart.hiLowLines = chartGroup.HiLoLines.ToOOModel();
	                    }
	                    if (chartGroup.HasUpDownBars) {
	                        lineChart.upDownBars = _this.ToCT_UpDownBars(chartGroup);
	                    }
	                    lineChart.marker = chartGroup.Marker;
	                }
	            }
	            return lineChart;
	        };
	        prototype.ToCT_LineChartBase = function (lineChartType, axisGroup) {
	            var lineChartBase;
	            if (ChartUtility.Is3DChart(lineChartType)) {
	                lineChartBase = {
	                    chartType: 9 ,
	                    ser: [],
	                    axId: []
	                };
	            } else {
	                lineChartBase = {
	                    chartType: 8 ,
	                    ser: [],
	                    axId: []
	                };
	            }
	            var sers = this.SeriesCollection.GetSers(false, axisGroup);
	            for (var _i = 0, sers_3 = sers; _i < sers_3.length; _i++) {
	                var ser = sers_3[_i];
	                var serTemp = ser;
	                if (serTemp.InnerChartType !== lineChartType) {
	                    continue;
	                }
	                var barSer = serTemp.ToOOModel() ;
	                if (!isNullOrUndefined(barSer)) {
	                    lineChartBase.ser.push(barSer);
	                }
	            }
	            switch (lineChartType) {
	                case 27 :
	                case 24 :
	                    lineChartBase.grouping = 2 ;
	                    break;
	                case 28 :
	                case 25 :
	                    lineChartBase.grouping = 0 ;
	                    break;
	                default:
	                    lineChartBase.grouping = 1 ;
	                    break;
	            }
	            var chartGroup = this._chart.FindChartGroup(lineChartType, axisGroup);
	            if (!isNullOrUndefined(chartGroup)) {
	                lineChartBase.varyColors = chartGroup.VaryByCategories;
	                if (chartGroup.HasDropLines) {
	                    lineChartBase.dropLines = chartGroup.DropLines.ToOOModel();
	                }
	            }
	            return lineChartBase;
	        };
	        prototype.ToCT_PieChart = function (pieChartType, axisGroup) {
	            var _this = this;
	            var chartGroup = _this._chart.FindChartGroup(pieChartType, axisGroup);
	            if (ChartUtility.Is3DChart(pieChartType)) {
	                return _this.ToCT_PieChartBase(pieChartType, axisGroup);
	            } else if (ChartUtility.IsOfPieChart(pieChartType)) {
	                var ofPieChart = _this.ToCT_PieChartBase(pieChartType, axisGroup);
	                if (!isNullOrUndefined(ofPieChart)) {
	                    ofPieChart.ofPieType = pieChartType === 32  ? 1  : 0 ;
	                    if (!isNullOrUndefined(chartGroup)) {
	                        if (chartGroup.HasSeriesLines) {
	                            ofPieChart.serLines.push(chartGroup.SeriesLines.ToOOModel());
	                        }
	                        ofPieChart.secondPieSize = chartGroup.SecondPlotSize;
	                        ofPieChart.gapWidth = chartGroup.GapWidth;
	                        ofPieChart.splitType = chartGroup.SplitType;
	                        if (chartGroup.SplitType === 3 ) {
	                            ofPieChart.custSplit = { secondPiePt: [] } ;
	                           
	                               
	                            var ser = chartGroup.SeriesCollection[0];
	                            if(ser) {
	                                var points = ser.Points.GetPoints();
	                                for (var key in points) { 
	                                    var p = points[key];
	                                    if (p.SecondaryPlot) {
	                                        ofPieChart.custSplit.secondPiePt.push(p.Index);
	                                    }
	                                }
	                            }
	                               
	                           
	                        } else {
	                            ofPieChart.splitPos = chartGroup.SplitValue;
	                        }
	                    }
	                }
	                return ofPieChart;
	            } else if (ChartUtility.IsDoughnutChart(pieChartType)) {
	                var doughnutChart = _this.ToCT_PieChartBase(pieChartType, axisGroup);
	                if (!isNullOrUndefined(doughnutChart) &&
	                    !isNullOrUndefined(chartGroup)) {
	                    doughnutChart.holeSize = chartGroup.DoughnutHoleSize;
	                }
	                return doughnutChart;
	            }
	            return _this.ToCT_PieChartBase(pieChartType, axisGroup);
	        };
	        prototype.ToCT_PieChartBase = function (pieChartType, axisGroup) {
	            var pieChartBase;
	            if (ChartUtility.Is3DChart(pieChartType)) {
	                pieChartBase = {
	                    chartType: 11 ,
	                    ser: [],
	                    axId: []
	                };
	            } else if (ChartUtility.IsOfPieChart(pieChartType)) {
	                pieChartBase = {
	                    chartType: 13 ,
	                    ser: [],
	                    serLines: [],
	                    axId: []
	                };
	            } else if (ChartUtility.IsDoughnutChart(pieChartType)) {
	                pieChartBase = {
	                    chartType: 12 ,
	                    ser: [],
	                    axId: []
	                };
	            } else {
	                pieChartBase = {
	                    chartType: 10 ,
	                    ser: [],
	                    axId: []
	                };
	            }
	            pieChartBase.varyColors = true;
	            var sers = this.SeriesCollection.GetSers(false, axisGroup);
	            for (var _i = 0, sers_4 = sers; _i < sers_4.length; _i++) {
	                var ser = sers_4[_i];
	                var serTemp = ser;
	                if (serTemp.InnerChartType !== pieChartType) {
	                    continue;
	                }
	                var pieSer = serTemp.ToOOModel() ;
	                if (!isNullOrUndefined(pieSer)) {
	                    pieChartBase.ser.push(pieSer);
	                }
	            }
	            var chartGroup = this._chart.FindChartGroup(pieChartType, axisGroup);
	            if (!isNullOrUndefined(chartGroup)) {
	                pieChartBase.varyColors = chartGroup.VaryByCategories;
	                pieChartBase.firstSliceAng = chartGroup.FirstSliceAngle;
	            }
	            return pieChartBase;
	        };
	        prototype.ToCT_AreaChart = function (areaChartType, axisGroup) {
	            if (ChartUtility.Is3DChart(areaChartType)) {
	                var area3DChart = this.ToCT_AreaChartBase(areaChartType, axisGroup);
	                if (!isNullOrUndefined(area3DChart)) {
	                    area3DChart.gapDepth = this._chart.GapDepth;
	                }
	                return area3DChart;
	            }
	            return this.ToCT_AreaChartBase(areaChartType, axisGroup);
	        };
	        prototype.ToCT_AreaChartBase = function (areaChartType, axisGroup) {
	            var areaChartBase;
	            if (ChartUtility.Is3DChart(areaChartType)) {
	                areaChartBase = {
	                    chartType: 5 ,
	                    ser: [],
	                    axId: []
	                };
	            } else {
	                areaChartBase = {
	                    chartType: 4 ,
	                    ser: [],
	                    axId: []
	                };
	            }
	            areaChartBase.varyColors = false;
	            var sers = this.SeriesCollection.GetSers(false, axisGroup);
	            for (var _i = 0, sers_5 = sers; _i < sers_5.length; _i++) {
	                var ser = sers_5[_i];
	                var serTemp = ser;
	                if (serTemp.InnerChartType !== areaChartType) {
	                    continue;
	                }
	                var barSer = serTemp.ToOOModel() ;
	                if (!isNullOrUndefined(barSer)) {
	                    areaChartBase.ser.push(barSer);
	                }
	            }
	            switch (areaChartType) {
	                case 39 :
	                case 37 :
	                    areaChartBase.grouping = 2 ;
	                    break;
	                case 40 :
	                case 38 :
	                    areaChartBase.grouping = 0 ;
	                    break;
	                default:
	                    areaChartBase.grouping = 1 ;
	                    break;
	            }
	            var chartGroup = this._chart.FindChartGroup(areaChartType, axisGroup);
	            if (!isNullOrUndefined(chartGroup)) {
	                areaChartBase.varyColors = chartGroup.VaryByCategories;
	                if (chartGroup.HasDropLines) {
	                    areaChartBase.dropLines = chartGroup.DropLines.ToOOModel();
	                }
	            }
	            return areaChartBase;
	        };
	        prototype.ToCT_RadarChart = function (radarChartType, axisGroup) {
	            var radarChart = {
	                chartType: 2 ,
	                ser: [],
	                axId: []
	            };
	            var sers = this.SeriesCollection.GetSers(false, axisGroup);
	            for (var _i = 0, sers_6 = sers; _i < sers_6.length; _i++) {
	                var ser = sers_6[_i];
	                var serTemp = ser;
	                if (serTemp.InnerChartType !== radarChartType) {
	                    continue;
	                }
	                var radarSer = serTemp.ToOOModel() ;
	                if (!isNullOrUndefined(radarSer)) {
	                    radarChart.ser.push(radarSer);
	                }
	            }
	            if (radarChartType === 2 ) {
	                radarChart.radarStyle = 1 ;
	            } else if (radarChartType === 43 ) {
	                radarChart.radarStyle = 2 ;
	            } else if (radarChartType === 42 ) {
	                radarChart.radarStyle = 1 ;
	            }
	            var chartGroup = this._chart.FindChartGroup(radarChartType, axisGroup);
	            if (!isNullOrUndefined(chartGroup)) {
	                radarChart.varyColors = chartGroup.VaryByCategories;
	            }
	            return radarChart;
	        };
	        prototype.ToCT_ScatterChart = function (scatterChartType, axisGroup) {
	            var scatterChart = {
	                chartType: 1 ,
	                ser: [],
	                axId: []
	            };
	            switch (scatterChartType) {
	                case 1 :
	                case 35 :
	                    scatterChart.scatterStyle = 2 ;
	                    break;
	                case 36 :
	                    scatterChart.scatterStyle = 1 ;
	                    break;
	                case 33 :
	                    scatterChart.scatterStyle = 5 ;
	                    break;
	                case 34 :
	                    scatterChart.scatterStyle = 4 ;
	                    break;
	                default:
	                    scatterChart.scatterStyle = 2 ;
	                    break;
	            }
	            var sers = this.SeriesCollection.GetSers(false, axisGroup);
	            for (var _i = 0, sers_7 = sers; _i < sers_7.length; _i++) {
	                var ser = sers_7[_i];
	                var serTemp = ser;
	                if (serTemp.InnerChartType !== scatterChartType) {
	                    continue;
	                }
	                var scatterSer = serTemp.ToOOModel() ;
	                if (!isNullOrUndefined(scatterSer)) {
	                    scatterChart.ser.push(scatterSer);
	                }
	            }
	            var chartGroup = this._chart.FindChartGroup(scatterChartType, axisGroup);
	            if (!isNullOrUndefined(chartGroup)) {
	                scatterChart.varyColors = chartGroup.VaryByCategories;
	            }
	            return scatterChart;
	        };
	        prototype.ToCT_BubbleChart = function (bubbleChartType, axisGroup) {
	            var bubbleChart = {
	                chartType: 3 ,
	                ser: [],
	                axId: []
	            };
	            var sers = this.SeriesCollection.GetSers(false, axisGroup);
	            for (var _i = 0, sers_8 = sers; _i < sers_8.length; _i++) {
	                var ser = sers_8[_i];
	                var serTemp = ser;
	                if (serTemp.InnerChartType !== bubbleChartType) {
	                    continue;
	                }
	                var scatterSer = serTemp.ToOOModel() ;
	                if (!isNullOrUndefined(scatterSer)) {
	                    bubbleChart.ser.push(scatterSer);
	                }
	            }
	            var chartGroup = this._chart.FindChartGroup(bubbleChartType, axisGroup);
	            if (!isNullOrUndefined(chartGroup)) {
	                bubbleChart.varyColors = chartGroup.VaryByCategories;
	                bubbleChart.bubbleScale = chartGroup.BubbleScale;
	                bubbleChart.showNegBubbles = chartGroup.ShowNegativeBubbles;
	                bubbleChart.sizeRepresents = chartGroup.SizeRepresents;
	            }
	            return bubbleChart;
	        };
	        prototype.ToCT_StockChart = function (stockChartType, axisGroup) {
	            var stockChart = {
	                chartType: 0 ,
	                ser: [],
	                axId: []
	            };
	            var sers = this.SeriesCollection.GetSers(false, axisGroup);
	            for (var _i = 0, sers_9 = sers; _i < sers_9.length; _i++) {
	                var ser = sers_9[_i];
	                var serTemp = ser;
	                if (serTemp.InnerChartType !== 9 ) {
	                    continue;
	                }
	                var lineSer = serTemp.ToOOModel() ;
	                if (!isNullOrUndefined(lineSer)) {
	                    stockChart.ser.push(lineSer);
	                }
	            }
	            var chartGroup = this._chart.FindChartGroup(stockChartType, axisGroup);
	            if (!isNullOrUndefined(chartGroup)) {
	                if (chartGroup.HasHiLoLines) {
	                    stockChart.hiLowLines = chartGroup.HiLoLines.ToOOModel();
	                }
	                if (chartGroup.HasDropLines) {
	                   
	                    stockChart.dropLines = chartGroup.DropLines.ToOOModel();
	                }
	                if (chartGroup.HasUpDownBars) {
	                    stockChart.upDownBars = this.ToCT_UpDownBars(chartGroup);
	                }
	            }
	            return stockChart;
	        };
	        prototype.ToCT_UpDownBars = function (chartGroup) {
	            var upDownBars = {} ;
	            upDownBars.upBars = chartGroup.UpBars.ToOOModel();
	            upDownBars.downBars = chartGroup.DownBars.ToOOModel();
	            upDownBars.gapWidth = chartGroup.GapWidth;
	            return upDownBars;
	        };
	        prototype.ToCT_SurfaceChartBase = function (surfaceChartType, axisGroup) {
	            var surfaceChartBase;
	            if (ChartUtility.IsSurface3DChart(surfaceChartType)) {
	                surfaceChartBase = {
	                    chartType: 15 ,
	                    ser: [],
	                    axId: []
	                };
	            } else {
	                surfaceChartBase = {
	                    chartType: 14 ,
	                    ser: [],
	                    axId: []
	                };
	            }
	            var sers = this.SeriesCollection.GetSers(false, axisGroup);
	            for (var _i = 0, sers_10 = sers; _i < sers_10.length; _i++) {
	                var ser = sers_10[_i];
	                var serTemp = ser;
	                if (serTemp.InnerChartType !== surfaceChartType) {
	                    continue;
	                }
	                var barSer = serTemp.ToOOModel() ;
	                if (!isNullOrUndefined(barSer)) {
	                    surfaceChartBase.ser.push(barSer);
	                }
	            }
	            var wireFrame = (surfaceChartType === 47  ||
	                surfaceChartType === 45 );
	
	            surfaceChartBase.wireframe = wireFrame;
	            surfaceChartBase.bandFmts = { bandFmt: this.GenerateBands(wireFrame) };
	            return surfaceChartBase;
	        };
	
	        prototype.GenerateBands = function (wireFrame) {
	            var bands = [];
	            var schemeClr;
	            for (var i = 0; i < 6; i++) {
	                var band = {} ;
	                band.idx = i;
	                band.spPr = {};
	                var fill = {
	                   
	                };
	                schemeClr = fill.schemeClr = {};
	                schemeClr.val = ColorSchemeIndex["Accent" + (i % 6 + 1)];
	                if (wireFrame) {
	                    band.spPr.ln = {
	                        solidFill: fill,
	                        cap: 0 ,
	                        w: 1 
	                    };
	                } else {
	                    band.spPr.solidFill = fill;
	                }
	                bands.push(band);
	            }
	            for (i = 6; i < 12; i++) {
	                band = {} ;
	                band.idx = i;
	                band.spPr = {};
	                band.spPr.solidFill = {
	                   
	                };
	                schemeClr = band.spPr.solidFill.schemeClr = {};
	                schemeClr.val = ColorSchemeIndex["Accent" + (i % 6 + 1)];
	                schemeClr.lumMod = [60000];
	                bands.push(band);
	            }
	            for (i = 12; i < 15; i++) {
	                band = {} ;
	                band.idx = i;
	                band.spPr = {};
	                band.spPr.solidFill = {
	                   
	                };
	                schemeClr = band.spPr.solidFill.schemeClr = {};
	                schemeClr.val = ColorSchemeIndex["Accent" + (i % 6 + 1)];
	                schemeClr.lumMod = [80000];
	                schemeClr.lumOff = [20000];
	                bands.push(band);
	            }
	            return bands;
	        };
	        prototype.HasSecondarySeries = function (chartType) {
	            return this._chart.SeriesCollection.AllSers.some(function (item) { return item.AxisGroup === 1  && item.InnerChartType === chartType; });
	        };
	        return PlotArea;
	    }(ChartElementBase));
	    Charts.PlotArea = PlotArea;
	
	    module.exports = Charts;
	}());

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Charts = __webpack_require__(3),
	        Sheets = __webpack_require__(6),
	        FloatingObjects = __webpack_require__(4),
	        FORMULA_TEXTBOX_MODULE = __webpack_require__(20),
	        COMMON_MODULE = Charts,
	        DateTimeExtension = COMMON_MODULE.DateTimeExtension,
	        AxisTitle = __webpack_require__(8).AxisTitle,
	        ChartModel = __webpack_require__(9).ChartModel,
	        ChartHelper = __webpack_require__(15).ChartHelper,
	        ARGBColor = Charts.ARGBColor;
	    var $ = Sheets.GC$,
	        getChartModelData = ChartHelper.getChartModelData,
	        colorFormatToString = ChartHelper.colorFormatToString,
	        getTransparencyFromColorFormat = ChartHelper.getTransparencyFromColorFormat,
	        getChartTitleText = ChartHelper.getChartTitleText,
	        createRange = Sheets._createRange,
	        formulaToRanges = Sheets.CalcEngine.formulaToRanges,
	        Reference = COMMON_MODULE.Reference,
	        UnitHelper = COMMON_MODULE.UnitHelper,
	        isNullOrUndefined = UnitHelper.isNullOrUndefined,
	        ChartUtility = COMMON_MODULE.ChartUtility,
	        IsSunburstOrTreemapChart = ChartUtility.IsSunburstOrTreemapChart,
	        $_isEmptyObject = $.isEmptyObject,
	        getLineFormatInfo = ChartUtility.getLineFormatInfo;
	    var keyword_null = null, keyword_undefined = void 0;
	
	
	    function generateName(sheet, prefix) {
	        var i = 1, shapeName;
	        if (!sheet) {
	            return prefix + i;
	        }
	        do {
	            shapeName = prefix + i++;
	        } while (sheet.charts.get(shapeName));
	        return shapeName;
	    }
	
	    function updateDataLabels(chart, option, sheet) {
	        if (chart && option) {
	            var showValue = option.showValue,
	                showSeriesName = option.showSeriesName,
	                showCategoryName = option.showCategoryName,
	                showPercentage = option.showPercentage,
	                position = option.position,
	                format = option.format,
	                color = option.color,
	                transparency = option.transparency;
	            var changedProperties = {}, isChangeSaved = false;
	
	            chart.SeriesCollection.AllSers.forEach(function (series) {
	                var dataLabels = series.DataLabels;
	                if (dataLabels) {
	                    if (showValue !== keyword_undefined) {
	                        if (!isChangeSaved) {
	                            changedProperties.showValue = dataLabels.ShowValue;
	                        }
	                        dataLabels.ShowValue = showValue;
	                    }
	                    if (showSeriesName !== keyword_undefined) {
	                        if (!isChangeSaved) {
	                            changedProperties.showSeriesName = dataLabels.ShowSeriesName;
	                        }
	                        dataLabels.ShowSeriesName = showSeriesName;
	                    }
	                    if (showCategoryName !== keyword_undefined) {
	                        if (!isChangeSaved) {
	                            changedProperties.showCategoryName = dataLabels.ShowCategoryName;
	                        }
	                        dataLabels.ShowCategoryName = showCategoryName;
	                    }
	                    if (showPercentage !== keyword_undefined) {
	                        if (!isChangeSaved) {
	                            changedProperties.showPercentage = dataLabels.ShowPercentage;
	                        }
	                        dataLabels.ShowPercentage = showPercentage;
	                    }
	                   
	                    var showSeriesDataLabels = dataLabels.ShowValue || dataLabels.ShowSeriesName || dataLabels.ShowCategoryName || dataLabels.ShowPercentage;
	                    if (!series.HasDataLabels && showSeriesDataLabels) {
	                        series.HasDataLabels = true;
	                    } else if (series.HasDataLabels && !showSeriesDataLabels) {
	                        series.HasDataLabels = false;
	                    }
	                    if (!isNullOrUndefined(position)) {
	                        if (!isChangeSaved) {
	                            changedProperties.position = dataLabels.Position;
	                        }
	                        dataLabels.Position = position;
	                    }
	                    if (format) {
	                        if (!isChangeSaved) {
	                            changedProperties.format = dataLabels.NumberFormat;
	                        }
	                        dataLabels.NumberFormat = format;
	                    }
	                    if (color) {
	                        if (!isChangeSaved) {
	                            changedProperties.color = colorFormatToString(dataLabels.Font, true);
	                        }
	                        dataLabels.Font.Color.setColor(sheet, color);
	                    } else if ((color === null || color === '')) {
	                        if (!isChangeSaved) {
	                            changedProperties.color = colorFormatToString(dataLabels.Font, true);
	                        }
	                        dataLabels.Font.Color.ColorType = 0;
	                    }
	                    if (!isNullOrUndefined(transparency)) {
	                        if (!isChangeSaved) {
	                            changedProperties.transparency = getTransparencyFromColorFormat(dataLabels.Font);
	                        }
	                        dataLabels.Font.Color.Transparency = transparency;
	                    }
	                    isChangeSaved = true;
	                    series._removeJSONCache();
	                }
	            });
	            chart.Parent._backup('dataLabels', changedProperties);
	        }
	    }
	
	    function setGridlineWidthColor(line, option, sheet, changedGridline) {
	        if (!isNullOrUndefined(option.width)) {
	            changedGridline.width = line.Weight;
	            line.Weight = option.width;
	        }
	        if (option.color) {
	            changedGridline.color = colorFormatToString(line, true);
	            line.Color.setColor(sheet, option.color);
	        } else if (option.color === null || option.color === '') {
	            line.Color.ColorType = 0;
	        }
	        if (!isNullOrUndefined(option.transparency)) {
	            changedGridline.transparency = getTransparencyFromColorFormat(line);
	            line.Color.Transparency = option.transparency;
	        }
	    }
	
	    function isXAxisContainsNumberValues(axis, axisGroup) {
	        var firstSeries = axis.SeriesCollection.GetValidSers(axisGroup)[0];
	        if (firstSeries) {
	            var numbers = [];
	            return ChartUtility.TryAllToNumbers(firstSeries._xValues, numbers, true);
	        }
	        return false;
	    }
	
	    function setAxisOptions(axis, options, sheet, axes, axisType, axisGroup) {
	        if (!options) {
	           
	            return;
	        }
	        var changedProperties = {};
	        if (!axis) {
	           
	            axis = axes.Add(axisType, axisGroup);
	            changedProperties.removed = true;     
	        }
	        if (options.removed) {
	            axes.Remove(axisType, axisGroup);
	        }
	        if (axisType === 0 ) {
	            var actualCategoryType = options.categoryType;
	            if ((axis.ActualCategoryType !== 3 ) &&
	                (axis.IsValueOrDateScaleAxis() || isXAxisContainsNumberValues(axis, axisGroup)) &&
	                (actualCategoryType === 2  || actualCategoryType === 1 )) {
	                changedProperties.categoryType = axis.ActualCategoryType;
	                axis.ActualCategoryType = actualCategoryType;
	            }
	        }
	        if (!isNullOrUndefined(options.visible)) {
	            changedProperties.visible = axis.Visible;
	            axis.Visible = !!options.visible;
	        }
	        if (!isNullOrUndefined(options.tickLabelPosition)) {
	            changedProperties.tickLabelPosition = axis.TickLabelPosition;
	            axis.TickLabelPosition = options.tickLabelPosition;
	        }
	        var lineFormat = axis.Format.Line, lineStyle = options.lineStyle;
	        if (lineStyle) {
	            var changedLineStyle = changedProperties.lineStyle = {};
	            if (!isNullOrUndefined(lineStyle.width)) {
	                changedLineStyle.width = lineFormat.Weight;
	                lineFormat.Weight = lineStyle.width;
	            }
	            if (lineStyle.color) {
	                changedLineStyle.color = colorFormatToString(lineFormat, true);
	                lineFormat.Color.setColor(sheet, lineStyle.color);
	            } else if (lineStyle.color === null || lineStyle.color === '') {
	                lineFormat.Color.ColorType = 0;
	            }
	            if (!isNullOrUndefined(lineStyle.transparency)) {
	                changedLineStyle.transparency = getTransparencyFromColorFormat(lineFormat);
	                lineFormat.Color.Transparency = lineStyle.transparency;
	            }
	        }
	        var fontFormat = axis.TickLabels.Font, style = options.style;
	        if (style) {
	            var changedStyle = changedProperties.style = {};
	            if (style.color) {
	                changedStyle.color = colorFormatToString(fontFormat, true);
	                fontFormat.Color.setColor(sheet, style.color);
	            } else if (style.color === null || style.color === '') {
	                fontFormat.Color.ColorType = 0;
	            }
	            if (!isNullOrUndefined(style.transparency)) {
	                changedStyle.transparency = getTransparencyFromColorFormat(fontFormat);
	                fontFormat.Color.Transparency = style.transparency;
	            }
	            if (style.fontFamily) {
	                changedStyle.fontFamily = fontFormat.Name;
	                fontFormat.Name = style.fontFamily;
	            }
	            if (!isNullOrUndefined(style.fontSize)) {
	                changedStyle.fontSize = fontFormat.Size;
	                fontFormat.Size = style.fontSize;
	            }
	        }
	        if (!isNullOrUndefined(options.majorTickPosition)) {
	            changedProperties.majorTickPosition = axis.MajorTickMark;
	            axis.MajorTickMark = options.majorTickPosition;
	        }
	        if (!isNullOrUndefined(options.minorTickPosition)) {
	            changedProperties.minorTickPosition = axis.MinorTickMark;
	            axis.MinorTickMark = options.minorTickPosition;
	        }
	       
	        if (!axis.MajorUnitIsAuto) {
	            changedProperties.majorUnit = axis.MajorUnit;
	        }
	        if (!isNullOrUndefined(options.majorUnit)) {
	            axis.MajorUnit = options.majorUnit;
	        } else {
	            axis.MajorUnitIsAuto = true;
	        }
	       
	        if (!axis.MinorUnitIsAuto) {
	            changedProperties.minorUnit = axis.MinorUnit;
	        }
	        if (!isNullOrUndefined(options.minorUnit)) {
	            axis.MinorUnit = options.minorUnit;
	        } else {
	            axis.MinorUnitIsAuto = true;
	        }
	        if (axis.IsValueOrDateScaleAxis() && !ChartHelper.isPercentageScaleType(axis.Chart, axis.AxisGroup)) {
	            var min = options.min, max = options.max, isTimeScale = axis.IsTimeScale();
	           
	            if (!axis.MinimumScaleIsAuto) {
	                changedProperties.min = axis.MinimumScale;
	            }
	            if (isNullOrUndefined(min)) {
	                axis.MinimumScaleIsAuto = true;
	            } else {
	                if (isTimeScale) {
	                    min = DateTimeExtension.ToOADate(min);
	                }
	                axis.MinimumScale = min;
	            }
	           
	            if (!axis.MaximumScaleIsAuto) {
	                changedProperties.max = axis.MaximumScale;
	            }
	            if (isNullOrUndefined(max)) {
	                axis.MaximumScaleIsAuto = true;
	            } else {
	                if (isTimeScale) {
	                    max = DateTimeExtension.ToOADate(max);
	                }
	                axis.MaximumScale = max;
	            }
	        }
	        if (options.format) {
	            changedProperties.format = axis.TickLabels.NumberFormat;
	            axis.TickLabels.NumberFormat = options.format;
	        }
	
	        var title = options.title;
	        if (title) {
	            var axisTitle = axis.AxisTitle;
	            var changedTitle = changedProperties.title = {};
	            if (!axisTitle) {
	                changedTitle.removed = true;
	                axisTitle = axis.AxisTitle = new AxisTitle(axis._axes.Parent, axis._axisGroup, axis._type);
	            }
	            if (title.removed) {
	                axis.AxisTitle = keyword_null;
	            }
	            var text = title.text;
	            if (!isNullOrUndefined(text)) {
	                changedTitle.text = axisTitle.Text;
	                axisTitle.Text = text;
	                axis.HasTitle = text.length > 0;
	            }
	
	            var axisTitleFontFormat = axisTitle.Font;
	
	            if (title.fontFamily) {
	                changedTitle.fontFamily = axisTitleFontFormat.Name;
	                axisTitleFontFormat.Name = title.fontFamily;
	            }
	            if (!isNullOrUndefined(title.fontSize)) {
	                changedTitle.fontSize = axisTitleFontFormat.Size;
	                axisTitleFontFormat.Size = title.fontSize;
	            }
	            if (title.color) {
	                changedTitle.color = colorFormatToString(axisTitleFontFormat, true);
	                axisTitleFontFormat.Color.setColor(sheet, title.color);
	            } else if (title.color === null || title.color === '') {
	                axisTitleFontFormat.Color.ColorType = 0;
	            }
	            if (!isNullOrUndefined(title.transparency)) {
	                changedTitle.transparency = getTransparencyFromColorFormat(axisTitleFontFormat);
	                axisTitleFontFormat.Color.Transparency = title.transparency;
	            }
	        }
	
	        var majorGridLine = options.majorGridLine;
	        if (majorGridLine) {
	            var changedMajorGridline = changedProperties.majorGridLine = {};
	            if (!isNullOrUndefined(majorGridLine.visible)) {
	                changedMajorGridline.visible = axis.HasMajorGridlines;
	                axis.HasMajorGridlines = majorGridLine.visible;
	            }
	            setGridlineWidthColor(axis._getMajorGridlines(true).Format.Line, majorGridLine, sheet, changedMajorGridline);
	        }
	        var minorGridLine = options.minorGridLine;
	        if (minorGridLine) {
	            var changedMinorGridline = changedProperties.minorGridLine = {};
	            if (!isNullOrUndefined(minorGridLine.visible)) {
	                changedMinorGridline.visible = axis.HasMinorGridlines;
	                axis.HasMinorGridlines = minorGridLine.visible;
	            }
	            setGridlineWidthColor(axis._getMinorGridlines(true).Format.Line, minorGridLine, sheet, changedMinorGridline);
	        }
	        if (!$_isEmptyObject(changedProperties)) {
	            axis._backup(changedProperties);
	        }
	    }
	
	    function updateChartRefers(sheet) {
	        var formulaTextBox = sheet._formulaTextBoxForChart;
	        var series = formulaTextBox.series;
	        if (series) {
	            var result = formulaToRanges(sheet, formulaTextBox.text(), sheet._activeRowIndex, sheet._activeColIndex);
	            if (result[0]) {
	                var ranges = result[0].ranges;
	                var range = ranges[0];
	                var refer = new COMMON_MODULE.Reference(sheet.name(), range.row, range.col, range.row + range.rowCount - 1, range.col + range.colCount - 1);
	                series.SetValuesRefers([refer]);
	
	                range = ranges[1];
	                if (range) {
	                    refer = new COMMON_MODULE.Reference(sheet.name(), range.row, range.col, range.row + range.rowCount - 1, range.col + range.colCount - 1);
	                    series.SetNameRefer(refer);
	                }
	
	                range = ranges[2];
	                if (range) {
	                    refer = new COMMON_MODULE.Reference(sheet.name(), range.row, range.col, range.row + range.rowCount - 1, range.col + range.colCount - 1);
	                    series.SetXValuesRefers([refer]);
	                }
	
	                range = ranges[3];
	                if (range) {
	                    refer = new COMMON_MODULE.Reference(sheet.name(), range.row, range.col, range.row + range.rowCount - 1, range.col + range.colCount - 1);
	                    series.SetBubbleSizesRefers([refer]);
	                }
	
	                formulaTextBox.chartView._updateChartModel(true);
	            }
	        }
	    }
	
	    function getChartSelectedType(ElementType) {
	        var type;
	        switch (ElementType) {
	            case 1:
	            case 2:
	                type = 5;
	                break;
	            case 4:
	            case 260:
	            case 516:
	                type = 3;
	                break;
	            case 9:
	            case 265:
	            case 521:
	                type = 1;
	                break;
	            case 7:
	            case 263:
	            case 8:
	                type = 0;
	                break;
	            default:
	                type = 7;
	                break;
	        }
	        return type;
	    }
	
	    Charts.ElementType = {
	        series: 0,
	        axis: 1,
	       
	        legend: 3,
	        label: 4,
	        chartTitle: 5,
	       
	        plotArea: 7,
	        chartArea: 8
	    };
	
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	
	    function getSeriesClickedInfo(chart, args) {
	        var selectedValue = null;
	        if (args.model && args.model.items && args.model.items.length > 0) {
	            selectedValue = args.model.items[0];
	        }
	        var series = chart._getSelectedSeries(selectedValue, args.field);
	        var info = series ? {index: series.Index} : {};
	        if (IsSunburstOrTreemapChart(chart.chartType()) && selectedValue) {
	            var treeData = series._chartData2016ModelCalHelper && series._chartData2016ModelCalHelper._treeData;
	            treeData = treeData || [];
	            for (var i = 0; i < treeData.length; i++) {
	                var treeItem = treeData[i];
	                if (treeItem && treeItem.value && treeItem.value === selectedValue.level0) {
	                    info.dataPointIndex = i;
	                    return info;
	                }
	            }
	        }
	        return info;
	    }
	
	    function getAxisClickedInfo(chart, args) {
	        var model = args.model;
	        if ((model.type === 265 || model.type === 521) && model.parent) {
	            model = model.parent;
	        }
	        return model.type === 9 ? {
	           
	            axisType: model.axisType === 1 ? 'y' : "x",
	            axisPosition: model.position === 1 ? 'primary' : 'secondary'
	        } : {};
	    }
	
	   
	   
	   
	   
	   
	   
	   
	   
	
	    function getChartClickedOptions(elementType, chart, args) {
	        var info = {};
	        switch (elementType) {
	            case 0 
	            :
	                info = getSeriesClickedInfo(chart, args);
	                break;
	            case 1 
	            :
	                info = getAxisClickedInfo(chart, args);
	                break;
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            default:
	                break;
	        }
	
	        var allSeries = chart.series().AllSers;
	        var category = [];
	        for (var i = 0; i < allSeries.length; i++) {
	            category.push(allSeries[i].Name || getSeriesIndexByName(allSeries[i]));
	        }
	
	        return {category: category, info: info};
	    }
	
	    function getChartClickedArgs(chart, args) {
	        var elementType = args.model.type;
	        var chartElementType = getChartSelectedType(elementType);
	        return {
	            chart: chart,
	            elementType: chartElementType,
	            options: getChartClickedOptions(chartElementType, chart, args)
	        };
	    }
	
	
	    function getSeriesIndexByName(series) {
	        if (!series.Name) {
	            var seriesIndex = series.SeriesCollection.IndexOfSource(series);
	            return seriesIndex + 1;
	        }
	    }
	
	    function getRangeInfoByFormula(sheet, formula) {
	        if (formula) {
	            var result = formulaToRanges(sheet, formula, 0, 0), rangeItem = result[0];
	
	            if (rangeItem) {
	                var spread = sheet.parent, worksheet = spread.getSheetFromName(rangeItem.sheetName);
	                if (worksheet) {
	                    return {
	                        sheet: worksheet,
	                        range: rangeItem.ranges && rangeItem.ranges[0]
	                    };
	                }
	            }
	        }
	        return {range: {}};
	    }
	    function calDataRangeWithBubbleSize(sheet, series, targetRange, dataInRow) {
	        var bubbleSizeFormula = series.GetBubbleSizesFormula();
	        var bubbleSizeRangeInfo = getRangeInfoByFormula(sheet, bubbleSizeFormula);
	        var bubbleSizeRange = bubbleSizeRangeInfo.range;
	        if (!$_isEmptyObject(bubbleSizeRange)) {
	            if (dataInRow) {
	                if (bubbleSizeRange.row !== targetRange.row + targetRange.rowCount) {
	                    return;
	                }
	                targetRange.rowCount++;
	            } else {
	                if (bubbleSizeRange.col !== targetRange.col + targetRange.colCount) {
	                    return;
	                }
	                targetRange.colCount++;
	            }
	        }
	        return targetRange;
	    }
	    var Chart = (function (_super) {
	        $.inherit(Chart, _super);
	
	       
	        
	        function Chart(sheet, name, chartType, x, y, width, height, dataRange, dataOrientation) {
	            var _this = this;
	            var chartName = name || generateName(sheet, "Chart ");
	            _super.call(_this, chartName, x, y, width, height);
	            _this.typeName = '2' ;
	            _this._kind = '2' ;
	            _this.sheet(sheet);
	            _this._chart = new ChartModel(_this, chartType);
	            _this._flexDVs = [];
	           
	            if (IsSunburstOrTreemapChart(chartType)) {
	                dataOrientation = keyword_undefined;
	            }
	            if (dataRange) {
	                _this._setDataRange(dataRange, dataOrientation);
	            }
	            _this._initDom();
	        }
	
	        var prototype = Chart.prototype;
	       
	        
	        prototype.chartType = function (value) {
	            var _this = this, chart = _this._chart;
	            if (arguments.length === 0) {
	                return chart.ChartType;
	            }
	            _this._backup('chartType', chart.ChartType);
	           
	            var dataRange = (ChartUtility.IsScatterChart(value) || IsSunburstOrTreemapChart(value)) && _this._getDataRange();
	            if (dataRange) {
	                chart._chartType = value;
	                _this.dataRange(dataRange);
	            } else {
	                chart.ChartType = value;
	            }
	            _this._updateChartModel();
	            return _this;
	        };
	       
	        
	        prototype.title = function (value) {
	            var _this = this, chartModel = _this._chart;
	            if (arguments.length === 0) {
	                return ChartHelper.getChartTitleProperties(chartModel.ChartTitle, true, keyword_undefined, 1, false, true);
	            }
	
	            if (value) {
	                var text = value.text, changedProperties = {};
	                var chartTitle;
	                if (text === "") {
	                    changedProperties.text = getChartTitleText(chartModel.ChartTitle);
	                    chartModel.HasTitle = false;
	                } else {
	                    chartModel.HasTitle = true;
	                    chartTitle = chartModel.ChartTitle;
	                   
	                    var chartTitleFont = chartTitle.Font;
	                    if (value.text) {
	                        changedProperties.text = getChartTitleText(chartTitle);
	                        chartTitle.Text = value.text;
	                    }
	                    if (value.fontFamily) {
	                        changedProperties.fontFamily = chartTitleFont.Name;
	                        chartTitleFont.Name = value.fontFamily;
	                    }
	                    if (value.fontSize) {
	                        changedProperties.fontSize = chartTitleFont.Size;
	                        chartTitleFont.Size = value.fontSize;
	                    }
	                    var color = value.color;
	                    if (color) {
	                        changedProperties.color = colorFormatToString(chartTitleFont, true, true);
	                        chartTitleFont.Color.setColor(this.sheet(), color);
	                    } else if ((color === null || color === '')) {
	                        changedProperties.color = colorFormatToString(chartTitleFont, true, true);
	                        chartTitleFont.Color.ColorType = 0;
	                    }
	                    if (!isNullOrUndefined(value.transparency)) {
	                        changedProperties.transparency = getTransparencyFromColorFormat(chartTitleFont, true);
	                        chartTitleFont.Color.Transparency = value.transparency;
	                    }
	                }
	                if (!$_isEmptyObject(changedProperties)) {
	                    _this._backup('title', changedProperties);
	                }
	                this._updateChartModel();
	            }
	            return this;
	        };
	       
	        
	        prototype.legend = function (value) {
	            var _this = this;
	            var chart = _this._chart, isStockChartType = ChartUtility.IsStockChart(chart.ChartType);
	            if (arguments.length === 0) {
	                if (isStockChartType) {
	                    return keyword_undefined;
	                }
	                var borderStyle = getLineFormatInfo(chart.Legend, false, false, true);
	                return {
	                    visible: chart.HasLegend,
	                    position: chart.Legend ? chart.Legend.Position : 2 ,
	                    borderStyle: borderStyle,
	                    backColor: (chart.Legend && chart.Legend.Format && chart.Legend.Format.Fill) ?
	                        colorFormatToString(chart.Legend.Format.Fill, false, false, true) : keyword_undefined,
	                    backColorTransparency: (chart.Legend && chart.Legend.Format && chart.Legend.Format.Fill) ?
	                        getTransparencyFromColorFormat(chart.Legend.Format.Fill) : keyword_undefined
	                };
	            }
	
	            if (!isStockChartType) {
	                var changedProperties = {};
	                if (!isNullOrUndefined(value.visible)) {
	                    changedProperties.visible = chart.HasLegend;
	                    chart.HasLegend = value.visible;
	                }
	                if (!isNullOrUndefined(value.position) && chart.Legend) {
	                    changedProperties.position = chart.Legend.Position;
	                    chart.Legend.Position = value.position;
	                }
	                var backColor = value.backColor;
	                if (backColor && chart.Legend) {
	                    changedProperties.backColor = colorFormatToString(chart.Legend.Format.Fill, false);
	                    chart.Legend.Format.Fill.Color.setColor(chart._chartView.sheet(), backColor);
	                } else if ((backColor === null || backColor === '') && chart.Legend) {
	                    changedProperties.backColor = colorFormatToString(chart.Legend.Format.Fill, false);
	                    chart.Legend.Format.Fill.Color.ColorType = 0;
	                }
	                if (!isNullOrUndefined(value.backColorTransparency) && chart.Legend) {
	                    changedProperties.backColorTransparency = getTransparencyFromColorFormat(chart.Legend.Format.Fill);
	                    chart.Legend.Format.Fill.Color.Transparency = value.backColorTransparency;
	                }
	                if (!isNullOrUndefined(value.borderStyle) && chart.Legend) {
	                    var formatLine = chart.Legend && chart.Legend.Format && chart.Legend.Format.Line;
	                    if (!isNullOrUndefined(formatLine) && !isNullOrUndefined(value.borderStyle.width)) {
	                        if (isNullOrUndefined(changedProperties.borderStyle)) {
	                            changedProperties.borderStyle = {};
	                        }
	                        changedProperties.borderStyle.width = formatLine.Weight;
	                        formatLine.Weight = value.borderStyle.width;
	                    }
	                    var borderColor = value.borderStyle.color;
	                    if (!isNullOrUndefined(formatLine) && borderColor) {
	                        if (isNullOrUndefined(changedProperties.borderStyle)) {
	                            changedProperties.borderStyle = {};
	                        }
	                        changedProperties.borderStyle.color = colorFormatToString(formatLine, false);
	                        formatLine.Color.setColor(chart._chartView.sheet(), borderColor);
	                    } else if ((borderColor === null || borderColor === '') && formatLine) {
	                        if (isNullOrUndefined(changedProperties.borderStyle)) {
	                            changedProperties.borderStyle = {};
	                        }
	                        changedProperties.borderStyle.color = colorFormatToString(formatLine, false);
	                        formatLine.Color.ColorType = 0;
	                    }
	                    if (!isNullOrUndefined(formatLine) && !isNullOrUndefined(value.borderStyle.transparency)) {
	                        if (isNullOrUndefined(changedProperties.borderStyle)) {
	                            changedProperties.borderStyle = {};
	                        }
	                        changedProperties.borderStyle.transparency = getTransparencyFromColorFormat(formatLine);
	                        formatLine.Color.Transparency = value.borderStyle.transparency;
	                    }
	                }
	                if (!$_isEmptyObject(changedProperties)) {
	                    _this._backup('legend', changedProperties);
	                }
	                _this._updateChartModel();
	            }
	            return _this;
	        };
	       
	        
	        prototype.chartArea = function (value) {
	            var _this = this, chartArea = _this._chart.ChartArea;
	            var backColor, color, fontSize, backColorTransparency, transparency;
	            if (arguments.length === 0) {
	                var chartAreaStyle = ChartHelper.getChartAreaStyle(chartArea, true, 1, false, true),
	                    textStyle = chartAreaStyle.textStyle;
	                var result = {};
	                backColor = chartAreaStyle.style.backgroundColor;
	                backColorTransparency = chartAreaStyle.style.transparency;
	                if (backColor) {
	                    result.backColor = backColor;
	                    result.backColorTransparency = backColorTransparency;
	                } else if (backColor === '') {
	                    result.backColor = backColor;
	                }
	                color = textStyle.color;
	                transparency = textStyle.transparency;
	                if (color) {
	                    result.color = color;
	                    result.transparency = transparency;
	                    result.fontFamily = textStyle.fontFamily;
	                } else if (color === '') {
	                    result.color = color;
	                }
	                fontSize = parseFloat(textStyle.fontSize);
	                if (!isNaN(fontSize)) {
	                    result.fontSize = fontSize;
	                }
	
	                return result;
	            }
	
	            if (value) {
	                var chartFormat = chartArea.GetFormatInternal();
	                var changedProperties = {};
	
	                backColor = value.backColor;
	                if (backColor && chartFormat) {
	                    changedProperties.backColor = colorFormatToString(chartFormat.Fill, true);
	                    chartFormat.Fill.Color.setColor(_this.sheet(), backColor);
	                } else if ((backColor === null || backColor === '') && chartFormat) {
	                    changedProperties.backColor = colorFormatToString(chartFormat.Fill, true);
	                    chartFormat.Fill.Color.ColorType = 0;
	                }
	                backColorTransparency = value.backColorTransparency;
	                if (!isNullOrUndefined(backColorTransparency) && chartFormat) {
	                    changedProperties.backColorTransparency = getTransparencyFromColorFormat(chartFormat.Fill);
	                    chartFormat.Fill.Color.Transparency = backColorTransparency;
	                }
	
	                var fontFormat = chartArea.Font;
	                if (fontFormat) {
	                    color = value.color;
	                    transparency = value.transparency;
	                    if (color) {
	                        changedProperties.color = colorFormatToString(chartArea.Font, true);
	                        chartArea.setFontColor(_this.sheet(), color);
	                    } else if ((color === null || color === '')) {
	                        changedProperties.color = colorFormatToString(chartArea.Font, true);
	                        fontFormat.Color.ColorType = 0;
	                    }
	                    if (!isNullOrUndefined(transparency) && chartFormat) {
	                        changedProperties.transparency = getTransparencyFromColorFormat(chartArea.Font);
	                        chartArea.setFontTransparency(transparency);
	                    }
	                    var fontFamily = value.fontFamily;
	                    if (fontFamily) {
	                        changedProperties.fontFamily = fontFormat.Name;
	                        fontFormat.Name = fontFamily;
	                    }
	                    fontSize = parseFloat(value.fontSize);
	                    if (!isNaN(fontSize)) {
	                        changedProperties.fontSize = fontFormat.Size;
	                        fontFormat.Size = fontSize;
	                    }
	                }
	
	                if (!$_isEmptyObject(changedProperties)) {
	                    _this._backup('chartArea', changedProperties);
	                }
	                _this._updateChartModel();
	            }
	            return _this;
	        };
	       
	        
	        prototype.dataLabels = function (value) {
	            var chart = this._chart, isStockChartType = ChartUtility.IsStockChart(chart.ChartType);
	            if (arguments.length === 0) {
	                if (isStockChartType) {
	                    return keyword_undefined;
	                }
	                var series = chart.SeriesCollection.AllSers[0],
	                    dataLabels = series.GetDataLabels();
	                var result;
	
	                if (dataLabels) {
	                    result = {
	                        showValue: dataLabels.ShowValue,
	                        showSeriesName: dataLabels.ShowSeriesName,
	                        showCategoryName: dataLabels.ShowCategoryName,
	                        showPercentage: dataLabels.ShowPercentage,
	                        position: dataLabels.Position,
	                        format: dataLabels.NumberFormat
	                    };
	                    var color = colorFormatToString(dataLabels.Font, true, false, true);
	                    if (color || color === '') {
	                        result.color = color;
	                    }
	                    var transparency = getTransparencyFromColorFormat(dataLabels.Font);
	                    if (!isNullOrUndefined(transparency)) {
	                        result.transparency = transparency;
	                    }
	                } else {
	                    result = {showValue: false, showSeriesName: false, showCategoryName: false, showPercentage: false};
	                }
	
	               
	                if (!ChartUtility.IsPieOrDoughnutChart(series.InnerChartType)) {
	                    delete result.showPercentage;
	                }
	
	                return result;
	            }
	
	            if (value && !isStockChartType) {
	                updateDataLabels(chart, value, this.sheet());
	                this._updateChartModel();
	            }
	            return this;
	        };
	       
	        
	        prototype.axes = function (value) {
	            var axes = this._chart.Axes;
	            var primaryXAxis = axes.Item(0, 0),
	                primaryYAxis = axes.Item(1, 0),
	                secondaryXAis = axes.Item(0, 1),
	                secondaryYAxis = axes.Item(1, 1);
	            if (arguments.length === 0) {
	                var option = {};
	                if (primaryXAxis) {
	                    option.primaryCategory = ChartHelper.getAxisProperties(primaryXAxis, false, true);
	                }
	                if (primaryYAxis) {
	                    option.primaryValue = ChartHelper.getAxisProperties(primaryYAxis, false, true);
	                }
	                if (secondaryXAis) {
	                    option.secondaryCategory = ChartHelper.getAxisProperties(secondaryXAis, false, true);
	                }
	                if (secondaryYAxis) {
	                    option.secondaryValue = ChartHelper.getAxisProperties(secondaryYAxis, false, true);
	                }
	                return option;
	            }
	
	            var sheet = this.sheet();
	            setAxisOptions(primaryXAxis, value.primaryCategory, sheet, axes, 0, 0);
	            setAxisOptions(primaryYAxis, value.primaryValue, sheet, axes, 1, 0);
	            setAxisOptions(secondaryXAis, value.secondaryCategory, sheet, axes, 0, 1);
	            setAxisOptions(secondaryYAxis, value.secondaryValue, sheet, axes, 1, 1);
	
	            this._updateChartModel();
	            return this;
	        };
	       
	        
	        prototype.series = function () {
	            return this._chart.SeriesCollection;
	        };
	       
	        
	        prototype.dataRange = function (value) {
	            var _this = this, oldDataRange = _this._getDataRange();
	            if (arguments.length === 0) {
	                return oldDataRange;
	            }
	            if (value) {
	                var chartTypes, chartType = _this.chartType();
	                if (chartType === 0 ) {
	                    var seriesCollection = _this._chart.SeriesCollection;
	                    chartTypes = seriesCollection.AllSers.map(function (item) {
	                        return item.ChartType;
	                    });
	                }
	                _this._backup('dataRange', oldDataRange);
	                var dataOrientation = IsSunburstOrTreemapChart(chartType) ? null : getDataOrientation(_this);
	                _this._setDataRange(value, dataOrientation, chartTypes);
	            }
	            return _this;
	        };
	       
	        
	        prototype.useAnimation = function (value) {
	            var _this = this, chartModel = _this._chart, useAnimation = chartModel.UseAnimation;
	            if (arguments.length === 0) {
	                return useAnimation;
	            }
	            if (!isNullOrUndefined(value) && !value !== !useAnimation) {
	                _this._backup('useAnimation', useAnimation);
	                chartModel.UseAnimation = value;
	                _this._updateChartModel();
	            }
	            return _this;
	        };
	
	        function isNearbyNameItems(nameFormulas, sheet, row, col, dataInRow, refSheet) {
	            var count = nameFormulas.length;
	            for (var i = 0; i < count; i++) {
	                var item = nameFormulas[i];
	                if (item) {
	                    var rangeInfo = getRangeInfoByFormula(sheet, item),
	                        range = rangeInfo.range;
	                    if (rangeInfo.sheet !== refSheet) {
	                        return false;
	                    }
	                    if (range.rowCount === 1 && range.colCount === 1) {
	                        if (dataInRow) {
	                            if (!(range.row === row + i && range.col === col - 1)) {
	                                return false;
	                            }
	                        } else if (!(range.col === col + i && range.row === row - 1)) {
	                            return false;
	                        }
	                    } else {
	                        return false;
	                    }
	                } else {
	                    return false;
	                }
	            }
	            return true;
	        }
	
	        prototype._getDataRange = function () {
	            var _seriesCollection = this._chart.SeriesCollection,
	                items = _seriesCollection.AllSers,
	                count = items.length,
	                dataInRow = getDataOrientation(this) === 0 ,
	                chartType = this._chart.ChartType,
	                isBubbleChart = ChartUtility.IsBubbleChart(chartType);
	            if (count > 0) {
	                var sheet = this.sheet();
	                var series = items[0];
	                var xFormula = series.GetXValuesFormula(),
	                    yFormula = series.GetValuesFormula(),
	                    nameFormulas = [],
	                    yRangeInfo = getRangeInfoByFormula(sheet, yFormula),
	                    yRangeSheet = yRangeInfo.sheet,
	                    yRange = yRangeInfo.range,
	                    rowCount = yRange.rowCount,
	                    colCount = yRange.colCount,
	                    row = yRange.row,
	                    col = yRange.col,
	                    targetRange = createRange(row, col, rowCount, colCount),
	                    hasXRange = !!xFormula,
	                    range, i, rangeInfo;
	                    nameFormulas.push(series.GetNameFormula());
	                if (isBubbleChart) {
	                    targetRange = calDataRangeWithBubbleSize(sheet, series, targetRange, dataInRow);
	                    if (isNullOrUndefined(targetRange)) {
	                        return;
	                    }
	                }
	                for (i = 1; i < count; i++) {
	                    series = items[i];
	                    if (hasXRange && xFormula !== series.GetXValuesFormula()) {
	                        return;
	                    }
	                    yFormula = series.GetValuesFormula();
	                    rangeInfo = getRangeInfoByFormula(sheet, yFormula);
	                    range = rangeInfo.range;
	                    if (rangeInfo.sheet !== yRangeSheet || range.rowCount !== rowCount || range.colCount !== colCount) {
	                        return;
	                    }
	                    if (dataInRow) {
	                        if (range.row !== targetRange.row + targetRange.rowCount) {
	                            return;
	                        }
	                        targetRange.rowCount++;
	                    } else {
	                        if (range.col !== targetRange.col + targetRange.colCount) {
	                            return;
	                        }
	                        targetRange.colCount++;
	                    }
	                    if (isBubbleChart) {
	                        targetRange = calDataRangeWithBubbleSize(sheet, series, targetRange, dataInRow);
	                        if (isNullOrUndefined(targetRange)) {
	                            return;
	                        }
	                    }
	                    nameFormulas.push(series.GetNameFormula());
	                }
	               
	                if (hasXRange) {
	                    rangeInfo = getRangeInfoByFormula(sheet, xFormula);
	                    range = rangeInfo.range;
	                    if (rangeInfo.sheet === yRangeSheet) {
	                        if (dataInRow) {
	                            if (range.row === row - range.rowCount && range.col === col && range.colCount === colCount) {
	                                targetRange.row -= range.rowCount;
	                                targetRange.rowCount += range.rowCount;
	                            }
	                        } else if (range.col === col - range.colCount && range.row === row && range.rowCount === rowCount) {
	                            targetRange.col -= range.colCount;
	                            targetRange.colCount += range.colCount;
	                        }
	                    }
	                }
	               
	                if (isNearbyNameItems(nameFormulas, sheet, row, col, dataInRow, yRangeSheet)) {
	                    if (dataInRow) {
	                        targetRange.col--;
	                        targetRange.colCount++;
	                    } else {
	                        targetRange.row--;
	                        targetRange.rowCount++;
	                    }
	                }
	
	                var reference = new Reference(yRangeSheet.name(), targetRange.row, targetRange.col, targetRange.row + targetRange.rowCount - 1, targetRange.col + targetRange.colCount - 1);
	                return sheet.parent.options.referenceStyle === 1  ? reference.ToR1C1Text() : reference.ToA1Text(0, 0);
	            }
	        };
	
	        
	        function _getDataLabelsInfo(seriesItems) {
	            var dataLabelsInfo = {}, withDataLabels = false, count = seriesItems.length;
	            for (var i = 0; i < count; i++) {
	                var item = seriesItems[i];
	                if (item.HasDataLabels) {
	                    dataLabelsInfo[i] = item.DataLabels;
	                    withDataLabels = true;
	                }
	            }
	            if (withDataLabels) {
	                dataLabelsInfo.count = count;  
	            } else {
	                dataLabelsInfo = keyword_null;
	            }
	
	            return dataLabelsInfo;
	        }
	
	        prototype._setDataRange = function (dataRangeFormula, dataOrientation, chartTypes) {
	            var _this = this, sheet = _this.sheet();
	            var rangeInfo = getRangeInfoByFormula(sheet, dataRangeFormula);
	            if (rangeInfo) {
	                var _seriesCollection = _this._chart.SeriesCollection;
	                var seriesItems = _seriesCollection._series;
	                var dataLabelsInfo = _getDataLabelsInfo(seriesItems);
	                seriesItems.length = 0;
	                var dataRange = rangeInfo.range;
	                _seriesCollection.Add(sheet._GetRange(dataRange.row, dataRange.col, dataRange.rowCount, dataRange.colCount, rangeInfo.sheet), dataOrientation, keyword_null, keyword_null, dataLabelsInfo, chartTypes);
	            }
	        };
	        prototype._initDom = function () {
	            var _this = this;
	            var div = document.createElement("div");
	            var style = div.style;
	            style.boxSizing = "border-box";
	            style.border = "1px none gray";
	            style.width = _this.width() + "px";
	            style.height = _this.height() + "px";
	            style.outline = "none";
	            _this.content(div, false);
	        };
	        prototype._needSaveJsonToFloatingObjects = function () {
	            return false;  
	        };
	        prototype._updateChartModel = function (refreshData, rects) {
	            if (refreshData === keyword_undefined) {
	                refreshData = false;
	            }
	            var _this = this, sheet = _this.sheet();
	            refreshData && _this.updateSeries(rects, true);
	            if (!sheet.isPaintSuspended()) {
	                var flexDVs = _this._flexDVs;
	                if (flexDVs.length > 0) {
	                    var model = getChartModelData(_this._chart, sheet);
	                    for (var i = 0, length = flexDVs.length; i < length; i++) {
	                        var chart = flexDVs[i];
	                        chart.load(model);
	                        chart.refresh();
	                    }
	                }
	                this._isDirty = false;
	            } else {
	                this._isDirty = true;
	            }
	        };
	        prototype._updateChartFormula = function (index, formula, r1c1, updatedSeriesCache, shouldDeleteSeries) {
	            var seriesCollection = this._chart.SeriesCollection;
	            var series = seriesCollection.AllSers[index];
	            var modelManager = this.sheet()._modelManager;
	            if (series) {
	               
	                if (modelManager._changes && !updatedSeriesCache.series) {
	                    updatedSeriesCache.series = seriesCollection.get();
	                }
	               
	               
	               
	                if (shouldDeleteSeries) {
	                    updatedSeriesCache.indexes.push(index);
	                } else {
	                    series.UpdateFormula(formula, r1c1);
	                }
	            }
	        };
	        prototype.updateSeries = function (rects, force) {
	            if (force === void 0) {
	                force = false;
	            }
	            var chart = this._chart;
	            if (chart) {
	                chart.UpdateSeries(rects, force);
	            }
	        };
	
	        function detectDataOrientation(sheet, seriesCollection, firstSeries, yRange) {
	           
	            var formulas = [firstSeries.xVlues, firstSeries.name], formula, range;
	           
	            if (seriesCollection.Count > 1) {
	                formulas.push(seriesCollection.get(1).yValues);
	            }
	            for (var i = 0, count = formulas.length; i < count; i++) {
	                formula = formulas[i];
	                if (formula) {
	                    range = getRangeInfoByFormula(sheet, formula).range;
	                    if (yRange.col === range.col) {
	                        return 0 ;
	                    } else if (yRange.row === range.row) {
	                        return 1 ;
	                    }
	                }
	            }
	           
	            return 0 ;
	        }
	
	        function getDataOrientation(chartView) {
	            var seriesCollection = chartView._chart.SeriesCollection,
	                dataOrientation = seriesCollection._dataOrientation;
	            if (isNullOrUndefined(dataOrientation)) {  
	                var sheet = chartView.sheet();
	                var ser = seriesCollection.get(0);
	                if (ser) {
	                    var range = getRangeInfoByFormula(sheet, ser.yValues).range;
	                    if (range.rowCount === 1) {
	                        dataOrientation = range.colCount > 1 ? 0  : detectDataOrientation(sheet, seriesCollection, ser, range);
	                    } else {
	                        dataOrientation = 1 ;
	                    }
	                }
	            }
	
	            return dataOrientation;
	        }
	
	        prototype.getDataOrientation = function () {
	            return getDataOrientation(this);
	        };
	       
	        
	        prototype.switchDataOrientation = function () {
	            var _this = this, dataRange = _this._getDataRange();
	           
	            if (dataRange && !IsSunburstOrTreemapChart(_this.chartType())) {
	                _this._backup('switchDataOrientation');
	                var seriesCollection = _this._chart.SeriesCollection,
	                    dataOrientation = getDataOrientation(_this) ^ 1;  
	                var chartTypes;
	                if (_this.chartType() === 0 ) {
	                    chartTypes = seriesCollection.AllSers.map(function (item) {
	                        return item.ChartType;
	                    });
	                }
	                _this._setDataRange(dataRange, dataOrientation, chartTypes);
	                return true;
	            }
	            return false;
	        };
	        prototype.getFormulas = function () {
	            var chart = this._chart;
	            if (chart) {
	                return chart.SeriesCollection.AllSers.map(function (series) {
	                    return series.Formula;
	                });
	            }
	        };
	        prototype.clone = function (targetSheet) {
	            targetSheet = targetSheet || this.sheet();
	            var newChart = new Chart(targetSheet);
	            newChart.fromJSON(this.toJSON());
	            return newChart;
	        };
	        prototype._getSelectedSeries = function (selectedValue, field) {
	            return ChartHelper.getSeries(this._chart, selectedValue, field);
	        };
	        prototype._selectAllSeries = function () {
	            var selectedRanges = [], _this = this;
	            var sheetName = _this.sheet().name();
	            var allSeries = _this.series().AllSers;
	            var valuesRange, nameRange, xValuesRange, bubbleSizesRange, tmpRange;
	            for (var i = 0; i < allSeries.length; i++) {
	                var ser = allSeries[i];
	                var refer = ser.ValuesRefers[0];
	                if (refer && refer.WorksheetName === sheetName) {
	                    tmpRange = createRange(refer.Row, refer.Column, refer.RowCount, refer.ColumnCount);
	                    if (!valuesRange) {
	                        valuesRange = tmpRange;
	                    } else {
	                        valuesRange = valuesRange.union(tmpRange);
	                    }
	                }
	                var nameRefer = ser.NameRefer;
	                if (nameRefer && nameRefer.WorksheetName === sheetName) {
	                    tmpRange = createRange(nameRefer.Row, nameRefer.Column, nameRefer.RowCount, nameRefer.ColumnCount);
	                    if (!nameRange) {
	                        nameRange = tmpRange;
	                    } else {
	                        nameRange = nameRange.union(tmpRange);
	                    }
	                }
	                var xValueRefer = ser.XValuesRefers[0];
	                if (xValueRefer && xValueRefer.WorksheetName === sheetName) {
	                    tmpRange = createRange(xValueRefer.Row, xValueRefer.Column, xValueRefer.RowCount, xValueRefer.ColumnCount);
	                    if (!xValuesRange) {
	                        xValuesRange = tmpRange;
	                    } else {
	                        xValuesRange = xValuesRange.union(tmpRange);
	                    }
	                }
	                var bubbleSizesReference = ser.BubbleSizesRefers && ser.BubbleSizesRefers[0];
	                if (bubbleSizesReference && bubbleSizesReference.WorksheetName === sheetName) {
	                    tmpRange = createRange(bubbleSizesReference.Row, bubbleSizesReference.Column, bubbleSizesReference.RowCount, bubbleSizesReference.ColumnCount);
	                    if (!bubbleSizesRange) {
	                        bubbleSizesRange = tmpRange;
	                    }else {
	                        bubbleSizesRange = bubbleSizesRange.union(tmpRange);
	                    }
	                }
	            }
	            if (valuesRange) {
	                selectedRanges.push(valuesRange);
	            }
	            if (nameRange) {
	                selectedRanges.push(nameRange);
	            }
	            if (xValuesRange) {
	                selectedRanges.push(xValuesRange);
	            }
	            if (bubbleSizesRange) {
	                selectedRanges.push(bubbleSizesRange);
	            }
	
	            _this._setSelectedRanges(selectedRanges);
	        };
	        prototype._selectSeries = function (selectedValue, field) {
	            var selectedRanges = [], _this = this;
	            var sheetName = _this.sheet().name();
	            var series = _this._getSelectedSeries(selectedValue, field);
	            if (series) {
	                var reference = series.ValuesRefers[0];
	                if (reference && reference.WorksheetName === sheetName) {
	                    selectedRanges.push(createRange(reference.Row, reference.Column, reference.RowCount, reference.ColumnCount));
	                }
	                var nameReference = series.NameRefer;
	                if (nameReference && nameReference.WorksheetName === sheetName) {
	                    selectedRanges.push(createRange(nameReference.Row, nameReference.Column, nameReference.RowCount, nameReference.ColumnCount));
	                }
	                var xValueReference = series.XValuesRefers[0];
	                if (xValueReference && xValueReference.WorksheetName === sheetName) {
	                    selectedRanges.push(createRange(xValueReference.Row, xValueReference.Column, xValueReference.RowCount, xValueReference.ColumnCount));
	                }
	                var bubbleSizesReference = series.BubbleSizesRefers[0];
	                if (bubbleSizesReference && bubbleSizesReference.WorksheetName === sheetName) {
	                    selectedRanges.push(createRange(bubbleSizesReference.Row, bubbleSizesReference.Column, bubbleSizesReference.RowCount, bubbleSizesReference.ColumnCount));
	                }
	            }
	            _this._setSelectedRanges(selectedRanges, series);
	        };
	        prototype._setSelectedRanges = function (selectedRanges, series) {
	            var sheet = this.sheet();
	            var fbx = sheet._formulaTextBoxForChart;
	            if (selectedRanges && selectedRanges.length > 0) {
	                var formula = Sheets.CalcEngine.rangesToFormula(selectedRanges, sheet._activeRowIndex, sheet._activeColIndex, 0 , false);
	                fbx.text("=SERIES(" + formula + ")");
	            } else {
	                fbx.text("");
	            }
	            if (series) {
	                fbx._allowMoveResize = true;
	            } else {
	                fbx._allowMoveResize = false;
	            }
	            fbx.series = series;
	            fbx.chartView = this;
	            sheet._render._paintFormulaTextBox();
	        };
	        prototype.toJSON = function () {
	            var _this = this;
	            var chartData = _super.prototype.toJSON.call(_this);
	            delete chartData.content;
	            chartData.chartSpace = _this._chart.ToOOModel();
	           
	            var excludeFields = ['hiLowLines', 'p', 'variation', 'majorGridlines', 'minorGridlines', 'title'];
	            ChartUtility.simpleJSONObject(chartData, excludeFields);  
	            return chartData;
	        };
	        prototype.fromJSON = function (chartData, noSchema) {
	            var _this = this;
	            _super.prototype.fromJSON.call(_this, chartData, noSchema);
	            _this._chart = new ChartModel(_this);
	            _this._chart.FromOOModel(chartData.chartSpace);
	        };
	        prototype._dispose = function (clearCache) {
	            if (clearCache !== false) {
	                var _this = this;
	                var flexDVs = _this._flexDVs;
	                for (var i = 0, length = flexDVs.length; i < length; i++) {
	                    flexDVs[i].dispose();
	                }
	                _this._flexDVs = [];
	                _this._unbindEvents();
	            }
	        };
	        ChartUtility.defineProperty(prototype, "DrawingType", {
	            get: function () {
	                return 1;
	            }
	        });
	        prototype._ToARGBColor = function (styleColor) {
	            if (styleColor.ColorType === 2) {
	                return ARGBColor.FromArgb(styleColor.Value);
	            }
	            var context = this.sheet();
	            if (context) {
	                return context._ToARGBColor(styleColor);
	            }
	            return new ARGBColor();
	        };
	        prototype._ToFont = function (themeFont) {
	            var context = this.sheet();
	            if (context) {
	                return context._ToFont(themeFont);
	            }
	            return "";
	        };
	        prototype._bindEvents = function (element) {
	            var eventsCache = this._eventsCache;
	            if (!eventsCache) {
	                eventsCache = this._eventsCache = [];
	            }
	            var sheet = this.sheet();
	            var eventName = 'mousedown';
	            var eventHandler = function () {
	                if (sheet.isEditing()) {
	                    var endEditSuccess = sheet.endEdit();
	                    if (!endEditSuccess) {
	                        return;
	                    }
	                }
	                if (!sheet._formulaTextBoxForChart) {
	                    var spread = sheet.parent;
	                    var editingElement = FORMULA_TEXTBOX_MODULE._createEditorElement(spread._host);
	                    var fbx = sheet._formulaTextBoxForChart = new FORMULA_TEXTBOX_MODULE.FormulaTextBox(editingElement, {
	                        rangeSelectMode: true,
	                        absoluteReference: true
	                    }, spread);
	                    fbx._bind('TextChanged', function () {
	                        sheet._render._paintFormulaTextBox();
	                    });
	                    fbx.onRangeMoved = function () {
	                        updateChartRefers(sheet);
	                    };
	                    fbx.onRangeResized = function () {
	                        updateChartRefers(sheet);
	                    };
	                }
	            };
	            element.addEventListener(eventName, eventHandler, true);
	            eventsCache.push([element, eventName, eventHandler]);
	        };
	        prototype._unbindEvents = function () {
	            var eventsCache = this._eventsCache;
	            if (eventsCache) {
	                for (var i = 0, length = eventsCache.length; i < length; i++) {
	                    var temp = eventsCache[i];
	                    temp[0].removeEventListener(temp[1], temp[2]);
	                }
	            }
	            this._eventsCache = keyword_null;
	        };
	        prototype._initFlexDV = function (previewElement, devicePixelRatio, devicePixelRatioIsAuto) {
	            var _this = this, sheet = _this.sheet();
	            var model = getChartModelData(_this._chart, sheet);
	            var dv = __webpack_require__(1);
	            if (dv) {
	                var chart = new dv.FlexDV(previewElement);
	                chart.renderMethod = dv.RenderMethod.Canvas;
	                if (!isNullOrUndefined(devicePixelRatio)) {
	                    chart.devicePixelRatio = devicePixelRatio;
	                    chart.devicePixelRatioIsAuto = devicePixelRatioIsAuto;
	                }
	                chart.load(model);
	                chart.refresh();
	                chart.hitTested.addHandler(function (sender, args) {
	                    if (args.event.action === dv.MotionEvent.ACTION_CLICK && sheet._canSelectFloatingObject(_this)) {
	                        var dvModel = args.model;
	                        var field = args.addition;
	                        var selectedValue = dvModel.items && dvModel.items[0];
	
	                        if (ChartUtility.IsStockChart(_this._chart.ChartType)) {
	                            if (!field && selectedValue) {
	                                field = "volume";
	                            }
	                            _this._selectDVStockChart(chart, field);
	                        }
	
	                        var elementType = getChartSelectedType(dvModel.type);
	                        _this._selectSeriesAndDeselectDVChart(chart, elementType, selectedValue, field);
	
	                        sheet._trigger(Sheets.Events.ChartClicked, getChartClickedArgs(_this, args));
	                    }
	                    _this.getHost()[0].style.cursor = "default";
	                });
	                _this._flexDVs.push(chart);
	            }
	        };
	        prototype._selectDVStockChart = function(dvChart, field) {
	            var fieldString = '[' + field + ']';
	            var dataPoints = dvChart.query(fieldString);
	            dvChart.select(dataPoints, {adorners: true}, fieldString);
	        };
	        prototype._selectSeriesAndDeselectDVChart = function (chart, elementType, selectedValue, field) {
	            var _this = this;
	            if (elementType === 7) {
	                _this._selectAllSeries();
	            } else if (elementType === 0) {
	                if (!isNullOrUndefined(selectedValue)) {
	                    _this._selectSeries(selectedValue, field);
	                } else {
	                    chart.select([]);
	                    _this._selectSeries(keyword_null);
	                }
	            } else {
	                chart.select([]);
	                _this._selectSeries(keyword_null);
	            }
	        };
	        prototype.onNameChanged = function (oldName, newName) {
	            this.sheet()._updateRegisteredFormula(this, {action: 'rename', oldName: oldName, newName: newName});
	        };
	        prototype._onSheetNameChanged = function (oldName, newName) {
	            this.series().AllSers.forEach(function (series) {
	                var nameRefer = series.NameRefer;
	                if (nameRefer && nameRefer.WorksheetName === oldName) {
	                    nameRefer.WorksheetName = newName;
	                }
	
	                var xValuesRefers = series.XValuesRefers;
	                if (xValuesRefers) {
	                    xValuesRefers.forEach(function (refer) {
	                        if (refer.WorksheetName === oldName) {
	                            refer.WorksheetName = newName;
	                        }
	                    });
	                }
	
	                var valuesRefers = series.ValuesRefers;
	                if (valuesRefers) {
	                    valuesRefers.forEach(function (refer) {
	                        if (refer.WorksheetName === oldName) {
	                            refer.WorksheetName = newName;
	                        }
	                    });
	                }
	
	                var bubbleSizeRefers = series.BubbleSizesRefers;
	                if (bubbleSizeRefers) {
	                    bubbleSizeRefers.forEach(function (refer) {
	                        if (refer.WorksheetName === oldName) {
	                            refer.WorksheetName = newName;
	                        }
	                    });
	                }
	            });
	        };
	        prototype.hitTest = function (x, y) {
	            var dv = __webpack_require__(1);
	            if (dv) {
	                var _this = this;
	                var flexDVs = _this._flexDVs;
	                if (flexDVs && flexDVs.length > 0) {
	                    var chart = flexDVs[0];
	                    var spread = _this.sheet().parent, spreadHost = $(spread.getHost());
	                    var spreadOffset = spreadHost.offset(), spreadOffsetLeft = spreadOffset.left,
	                        spreadOffsetTop = spreadOffset.top;
	                    var chartHost = $(_this._host[0]);
	                    var chartOffset = chartHost.offset(), chartOffsetLeft = chartOffset.left,
	                        chartOffsetTop = chartOffset.top;
	                    var hitInfo = chart.hitTest(new dv.core.Point(x + spreadOffsetLeft - chartOffsetLeft, y + spreadOffsetTop - chartOffsetTop));
	                    if (hitInfo) {
	                        return getChartClickedArgs(_this, hitInfo);
	                    }
	                }
	            }
	            return keyword_null;
	        };
	        prototype.refreshContent = function () {
	            var sheet = this.sheet();
	            var spread = sheet.parent;
	            if (spread && spread._isResizing) {
	                var flexDVs = this._flexDVs;
	                if (flexDVs && flexDVs.length > 0) {
	                    for (var i = 0, length = flexDVs.length; i < length; i++) {
	                        var flexDV = flexDVs[i];
	                        flexDV.refresh();
	                    }
	                }
	            }
	        };
	        prototype._backup = function (name, value) {
	            var modelManager = this.sheet()._modelManager;
	            if (modelManager._changes) {
	                var backupObj = {name: name};
	                if (!isNullOrUndefined(value)) {
	                    backupObj.value = value;
	                }
	                modelManager._backupCharts(this, backupObj);
	            }
	        };
	        prototype._updateSeriesByCalcChange = function (updatedSeriesCache) {
	            var seriesCollection = this._chart.SeriesCollection;
	            if (updatedSeriesCache.series) {
	                seriesCollection._backupSeriesByFormulaChange(updatedSeriesCache.series);
	            }
	            seriesCollection._deleteCachedSeries(updatedSeriesCache.indexes);
	        };
	        prototype._restore = function (argValue) {
	            if (!argValue) {
	                return;
	            }
	            var name = argValue.name, value = argValue.value;
	            if (this[name]) {
	                if (name === 'series') {
	                    this[name]()._restore(value);
	                } else {
	                    this[name](value);
	                }
	            } else if (name === 'dataPoint') {
	                var seriesCol = this.series();
	                var dataPoints = seriesCol && seriesCol.dataPoints();
	                dataPoints && dataPoints._restore(value);
	            }
	        };
	        return Chart;
	    })(FloatingObjects.FloatingObject);
	    Charts.Chart = Chart;
	
	   
	   
	    
	
	   
	    
	
	   
	    
	
	   
	   
	   
	   
	   
	
	   
	    
	
	   
	    
	
	   
	    
	
	   
	    
	
	   
	    
	
	   
	    
	
	   
	    
	
	   
	    
	   
	
	    module.exports = Charts;
	}());

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Sheets.FormulaTextBox;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Core = __webpack_require__(6);
	    var Calc = __webpack_require__(12);
	    var Common = __webpack_require__(11);
	    var SheetsCalc = Core.CalcEngine;
	    var Types = Common._Types;
	    var extend = Types._extend, inherit = Types._inherit;
	
	    var ChartSource = SheetsCalc.ChartSource = (function (_super) {
	        inherit(ChartSource, _super);
	        function ChartSource(sheet) {
	            _super.call(this, null);
	            this._sheet = sheet;
	            this._chartNameMap = {};       
	            this._chartChangeInfos = {};   
	        }
	
	        return ChartSource;
	    })(Calc.CalcSource);
	
	   
	    function _getChartSerieInfo(name) {
	        if (name) {
	            var pos = name.lastIndexOf(",");
	            if (pos > 0) {
	                return {
	                    index: +name.substr(pos + 1),
	                    name: name.substr(0, pos)
	                };
	            }
	        }
	    }
	
	    function _updateChartByFormula(charts, nameMap, name, changeInfo, useR1C1, chartsCache) {
	        if (charts && name && changeInfo) {
	            var info = _getChartSerieInfo(name);
	            if (info) {
	                var chartName = nameMap[info.name];
	                if (chartName) {
	                    var chart = charts.get(chartName);
	                    if (chart) {
	                        var cacheItem = chartsCache[chartName];
	                        if (!cacheItem) {
	                            cacheItem = chartsCache[chartName] = {
	                                indexes: [],
	                                chart: chart
	                            };
	                        }
	                        var formulaAdjusted = changeInfo.formulaAdjusted;
	                        if (formulaAdjusted) {
	                            chart._shouldSyncFormula = true;
	                        }
	                        chart._updateChartFormula(info.index, changeInfo.formula, useR1C1, cacheItem, formulaAdjusted === 2 );
	                    }
	                }
	            }
	        }
	    }
	    
	    function _updateChartByDataChange(charts, nameMap, name, changeInfo) {
	        if (charts && name && changeInfo) {
	            var info = _getChartSerieInfo(name);
	            if (info) {
	                var chartName = nameMap[info.name];
	                if (chartName) {
	                    var chart = charts.get(chartName);
	                    if (chart) {
	                       
	                        chart._updateChartModel(!changeInfo.formula || changeInfo.formulaAdjusted);
	                    }
	                }
	            }
	        }
	    }
	
	    function addChartFormula(chartSource, chart, chartModel, key, name, syncOnly) {
	        var formulas = chart.getFormulas();
	        chartSource._chartNameMap[key] = name;
	        if (formulas && formulas.length) {
	            formulas.forEach(function (formula, sIndex) {
	                chartModel.setFormulaByName(key + "," + sIndex, formula, syncOnly);
	            });
	        }
	    }
	
	    function removeChartFormula(chartModel, key, syncOnly) {
	        var index = 0;
	        while (true) {
	            if (chartModel._getExpressionWithRowColumnByName(key + "," + index)) {
	                chartModel.setFormulaByName(key + "," + index, null, syncOnly);
	                index++;
	            } else {
	                break;
	            }
	        }
	    }
	
	    function adjustSeriesFormula(changeInfo, formula) {
	       
	       
	       
	       
	       
	       
	       
	       
	        if (formula && formula.indexOf('#REF!') !== -1) {
	            formula = formula.replace(/#REF!/g, '');
	            var formulaArray = formula.split(',');
	            changeInfo.formulaAdjusted = formulaArray[2].length ? 1  : 2 ;
	        }
	        changeInfo.formula = formula;
	    }
	
	    extend(ChartSource.prototype, {
	        createSourceModel: function (calcService) {
	            return new Calc.CalcSourceModel(calcService, this);
	        },
	        getValueByName: function (name) {
	           
	        },
	        setFormulaByName: function (name, formula) {
	           
	            var changeInfos = this._chartChangeInfos, changeInfo = changeInfos[name];
	            if (!changeInfo) {
	                changeInfo = changeInfos[name] = {};
	            }
	            adjustSeriesFormula(changeInfo, formula);
	        },
	        setValueByName: function (name, value) {
	           
	            var changeInfos = this._chartChangeInfos, changeInfo = changeInfos[name];
	            if (!changeInfo) {
	                changeInfo = changeInfos[name] = {};
	            }
	            changeInfo.dataChanged = true;
	        },
	        _addChart: function (chart) {
	            this._updateFormulaForChart(chart, 0 );
	        },
	        _removeChart: function (chart) {
	            this._updateFormulaForChart(chart, 1 );
	        },
	        _updateChart: function (chart, options) {
	            this._updateFormulaForChart(chart, 2 , options);
	        },
	        _updateFormulaForChart: function (chart, action, options) {
	            var self = this, sheet = self._sheet;
	            var service = sheet.getCalcService();
	            var chartModel = service.getSourceModel(this);
	            if (chart) {
	                service.suspend(true);
	                var name = chart.name(), key = name.toUpperCase();
	                if (action === 0) {
	                    addChartFormula(self, chart, chartModel, key, name);
	                } else if (action === 1) {
	                    removeChartFormula(chartModel, key);
	                } else if (options && options.action === 'rename') {
	                    removeChartFormula(chartModel, options.oldName.toUpperCase());
	                    addChartFormula(self, chart, chartModel, options.newName.toUpperCase(), name);
	                } else {
	                    var syncOnly = options && options.syncOnly;
	                    removeChartFormula(chartModel, key, syncOnly);
	                    addChartFormula(self, chart, chartModel, key, name, syncOnly);
	                }
	
	                service.resume(false);
	            }
	        },
	        startCalculation: function () {
	        },
	        endCalculation: function () {
	            
	            var self = this, sheet = self._sheet, charts = sheet.charts,
	                useR1C1 = self.getCalcService().useR1C1;
	            var cacheItem;
	            if (charts) {
	                var nameMap = self._chartNameMap;
	                var changeInfos = this._chartChangeInfos;
	                var chartsCache = {};
	                var chart, changeInfo;
	
	                for (var name in changeInfos) { 
	                    changeInfo = changeInfos[name];
	                    if (changeInfo.formula) {
	                        _updateChartByFormula(charts, nameMap, name, changeInfo, useR1C1, chartsCache);
	                    }
	                }
	                for (name in chartsCache) { 
	                    cacheItem = chartsCache[name];
	                    cacheItem.chart._updateSeriesByCalcChange(cacheItem);
	                }
	                var updatedCharts = {};
	                for (name in changeInfos) { 
	                    if (changeInfos[name].dataChanged) {
	                        var info = _getChartSerieInfo(name);
	                        if (info) {
	                            var chartName = nameMap[info.name];
	                            if (!updatedCharts[chartName]) {
	                                _updateChartByDataChange(charts, nameMap, name, changeInfos[name]);
	                                updatedCharts[chartName] = true;
	                            }
	                        }
	                    }
	                }
	                this._chartChangeInfos = {};  
	                for (name in chartsCache) { 
	                    cacheItem = chartsCache[name];
	                    chart = cacheItem.chart;
	                    if (chart && chart._shouldSyncFormula) {
	                        delete chart._shouldSyncFormula;
	                        sheet._updateRegisteredFormula(chart, { syncOnly: true }); 
	                    }
	                }
	            }
	        }
	    });
	}());

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Charts = __webpack_require__(3);
	    var Core = __webpack_require__(6),
	        FloatingObjects = __webpack_require__(4),
	        CalcEngine = __webpack_require__(12),
	        Events = Core.Events,
	        GC$ = Core.GC$,
	        Worksheet = Core.Worksheet,
	        Workbook = Core.Workbook,
	       
	        Functions = CalcEngine.Functions,
	        Chart = __webpack_require__(19).Chart,
	        ChartSource = Core.CalcEngine.ChartSource,
	        COMMON_MODULE = Charts,
	        DateTimeExtension = COMMON_MODULE.DateTimeExtension,
	        ChartUtility = COMMON_MODULE.ChartUtility,
	        Range = COMMON_MODULE.Range,
	        CellRect = COMMON_MODULE.CellRect;
	    var keyword_null = null, keyword_undefined = void 0, Math_floor = Math.floor;
	    var CHART_NS = '.chart';
	
	    function getFormatString(style) {
	        var formatter = "General";
	        if (style) {
	            formatter = style.formatter || style._autoFormatter;
	            if (formatter && typeof formatter === 'object') {
	                return formatter.formatString();
	            }
	        }
	        return formatter;
	    }
	
	    GC$.extend(Worksheet.prototype, {
	        _GetSheet: function (name) {
	            return this.parent.getSheetFromName(name);
	        },
	        _GetVisibleCellStyles: function (row, column, rowCount, columnCount) {
	            var result = [];
	            for (var r = 0; r < rowCount; r++) {
	                if (this.getRowVisible(row + r)) {
	                    var rowArray = [];
	                    for (var c = 0; c < columnCount; c++) {
	                        if (this.getColumnVisible(column + c)) {
	                            rowArray.push(this._GetCellStyle(row + r, column + c));
	                        }
	                    }
	                    result.push(rowArray);
	                }
	            }
	            return result;
	        },
	        _GetCellStyles: function (row, column, rowCount, columnCount) {
	            var result = [];
	            for (var r = 0; r < rowCount; r++) {
	                var rowArray = [];
	                for (var c = 0; c < columnCount; c++) {
	                    rowArray.push(this._GetCellStyle(row + r, column + c));
	                }
	                result.push(rowArray);
	            }
	            return result;
	        },
	        _GetCellStyle: function (row, col) {
	            var style = this.getStyle(row, col);
	            return {
	                FormatCode: getFormatString(style),
	                Flag: keyword_null
	            };
	        },
	        _GetCellValues: function (row, column, rowCount, columnCount, tryDataTimeConverter) {
	            if (tryDataTimeConverter === keyword_undefined) {
	                tryDataTimeConverter = false;
	            }
	            var result = [];
	            for (var r = 0; r < rowCount; r++) {
	                var rowArray = [];
	                for (var c = 0; c < columnCount; c++) {
	                    rowArray.push(this._GetCellValue(row + r, column + c, tryDataTimeConverter));
	                }
	                result.push(rowArray);
	            }
	            return result;
	        },
	        _GetVisibleCellValues: function (row, column, rowCount, columnCount, tryDataTimeConverter) {
	            if (tryDataTimeConverter === keyword_undefined) {
	                tryDataTimeConverter = false;
	            }
	            var result = [];
	            for (var r = 0; r < rowCount; r++) {
	                if (this.getRowVisible(row + r)) {
	                    var rowArray = [];
	                    for (var c = 0; c < columnCount; c++) {
	                        if (this.getColumnVisible(column + c)) {
	                            rowArray.push(this._GetCellValue(row + r, column + c, tryDataTimeConverter));
	                        }
	                    }
	                    result.push(rowArray);
	                }
	            }
	            return result;
	        },
	        _GetCellValue: function (row, col, converToDatetime) {
	            var value = this.getValue(row, col);
	            if (converToDatetime && typeof value === 'number' && value > DateTimeExtension.OADateMinAsDouble && value < DateTimeExtension.OADateMaxAsDouble) {
	                return DateTimeExtension.FromOADate(value);
	            }
	            return value;
	        },
	        _GetCellText: function (row, column, rowCount, columnCount) {
	            var text = this.getText(row, column);
	            if (!text) {
	                return '';
	            }
	            if (rowCount > 1 || columnCount > 1) {
	                for (var i = 0; i < rowCount; i++) {
	                    for (var j = 0; j < columnCount; j++) {
	                        if (text !== this.getText(row + i, column + j)) {
	                            return '';
	                        }
	                    }
	                }
	            }
	            return text;
	        },
	        _expressionToReferenceValues: function (expression, references, values, baseRow, baseColumn) {
	            var evaluator = new CalcEngine.Evaluator();
	            var source, expr = expression;
	            if (expr.source) {
	                source = (expr.type === 13  ? expr.source() : expr.source);
	            } else {
	                source = this._getSheetSource();
	            }
	            var context = source.getEvaluatorContext(CalcEngine._createCellIdentity(baseRow, baseColumn));
	
	            var newExpression = CalcEngine._mappingArray(context, expression, false, 0, 0, true, true);
	            var result = evaluator.evaluate(newExpression || expression, context, true, true);
	            if (result instanceof CalcEngine.CalcReference) {
	                var sheetName = result.getSource().getName();
	                for (var rangeIndex = 0; rangeIndex < result.getRangeCount(); rangeIndex++) {
	                    var refer = ChartUtility.CreateReference(sheetName,
	                        result.getRow(rangeIndex), result.getColumn(rangeIndex), result.getRowCount(rangeIndex), result.getColumnCount(rangeIndex));
	                    references.push(refer);
	                }
	            } else if (result instanceof CalcEngine.CalcArray) {
	                for (var r = 0; r < result.getRowCount(); r++) {
	                    for (var c = 0; c < result.getColumnCount(); c++) {
	                        values.push(result.getValue(r, c));
	                    }
	                }
	            }
	        },
	        _ParseFormula: function (formulaText, row, column, isR1C1) {
	            var references = [], values = [];
	            var calcService = this.getCalcService();
	            if (formulaText && calcService) {
	                if (formulaText[0] === '(' && formulaText[formulaText.length - 1] === ')') {
	                    formulaText = formulaText.substring(1, formulaText.length - 1);
	                }
	                var exp = calcService.parse(this._getSheetSource(), formulaText, row, column, false , false , !isR1C1);
	                this._expressionToReferenceValues(exp, references, values, row, column);
	            }
	            return { references: references, values: values };
	        },
	        _GetRange: function (row, column, rowCount, columnCount, sheet) {
	            var defaultRowCount = 1;
	            var defaultColumnCount = 1;
	            if (row < 0) {
	                defaultRowCount = -1;
	            }
	            if (column < 0) {
	                defaultColumnCount = -1;
	            }
	            return new Range(sheet || this, [new CellRect(row, column, rowCount || defaultRowCount, columnCount || defaultColumnCount)]);
	        },
	        _GetHiddens: function (isRows) {
	            var _this = this;
	            var result = [];
	            var length = isRows ? _this.getRowCount() : _this.getColumnCount();
	            var getVisible = isRows ? _this.getRowVisible : _this.getColumnVisible;
	            var index = -1, count = 0;
	            for (var i = 0; i < length; i++) {
	                if (!getVisible.call(_this, i)) {
	                    if (index === -1) {
	                        index = i;
	                        count = 1;
	                    } else {
	                        count++;
	                    }
	                } else if (index !== -1 && count !== 0) {
	                    result.push({ Index: index, Count: count });
	                    index = -1;
	                    count = 0;
	                }
	            }
	            if (index !== -1 && count !== 0) {
	                result.push({ Index: index, Count: count });
	            }
	            return result;
	        },
	        _ToARGBColor: function (color) {
	            var currentTheme = this.currentTheme();
	            return ChartUtility._ToARGBColor(currentTheme, color);
	        },
	        _ToFont: function (themeFont) {
	            var currentTheme = this.currentTheme();
	            return ChartUtility._ToFont(currentTheme, themeFont);
	        },
	        _IsHidden: function (rects) {
	            for (var _i = 0, rects_1 = rects; _i < rects_1.length; _i++) {
	                var item = rects_1[_i];
	                if (item.IsFullRow) {
	                    for (var r = 0, rc = item.RowCount; r < rc; r++) {
	                        if (this.getRowVisible(item.Row + r)) {
	                            return false;
	                        }
	                    }
	                } else if (item.IsFullColumn) {
	                    for (var c = 0, cc = item.ColumnCount; c < cc; c++) {
	                        if (this.getColumnVisible(item.Column + c)) {
	                            return false;
	                        }
	                    }
	                }
	            }
	            return true;
	        },
	       
	       
	       
	       
	       
	       
	       
	       
	       
	       
	        _updateRegisteredFormula: function (chartView, options) {
	            var chartSource = this._chartSource;
	            if (chartSource) {
	                chartSource._updateChart(chartView, options);
	            }
	        },
	        _updateAllChartInSheet: function (refreshData) {
	            var charts = this.charts && this.charts.all(),
	                length = charts && charts.length;
	            for (var i = 0; i < length; i++) {
	                charts[i]._updateChartModel(refreshData);
	            }
	        }
	    });
	
	   
	    
	    var FloatingObjectCollection = FloatingObjects.FloatingObjectCollection;
	    function ChartCollection(sheet) {
	        FloatingObjectCollection.call(this, sheet, '2' );
	    }
	
	    ChartCollection.prototype = new FloatingObjectCollection();
	   
	    
	    ChartCollection.prototype.add = function (name, chartType, x, y, width, height, dataRange, dataOrientation) {
	        var sheet = this._sheet;
	        var chartView = new Chart(sheet, name, chartType, x, y, width, height, dataRange, dataOrientation);
	        sheet._floatingObjectModel._add(chartView);
	        return chartView;
	    };
	    ChartCollection.prototype._add = function (chartView) {
	        this._sheet._floatingObjectModel._add(chartView);
	        return chartView;
	    };
	   
	    
	    ChartCollection.prototype.get = function (name) {
	        return this._sheet._floatingObjectModel._get(name);
	    };
	   
	    
	    ChartCollection.prototype.remove = function (name) {
	        var chartView = this.get(name);
	        var success = this._sheet._floatingObjectModel._remove(name);
	        if (success) {
	            chartView._dispose();
	        }
	    };
	   
	    
	    ChartCollection.prototype.clear = function () {
	        var charts = this.all();
	        this._sheet._floatingObjectModel._clear(this._kind);
	        for (var i = 0; i < charts.length; i++) {
	            charts[i]._dispose();
	        }
	    };
	   
	    
	    ChartCollection.prototype.all = function () {
	        return this._sheet._floatingObjectModel._all(this._kind);
	    };
	   
	    
	    ChartCollection.prototype.zIndex = function (name, zIndex) {
	        return this._sheet._floatingObjectModel._zIndex(name, zIndex);
	    };
	    ChartCollection.prototype._onGroupChanged = function (start, end, isRow) {
	        FloatingObjectCollection.prototype._onGroupChanged.call(this, start, end, isRow);
	
	        var sheet = this._sheet, cellRect;
	        if (isRow) {
	            cellRect = new CellRect(start, 0, end - start + 1, sheet.getColumnCount());
	        } else {
	            cellRect = new CellRect(0, start, sheet.getRowCount(), end - start + 1);
	        }
	        this.all().forEach(function (floatingObject) {
	            floatingObject._updateChartModel(true, cellRect);
	        });
	    };
	    Charts.ChartCollection = ChartCollection;
	
	    function setElementSize(sheet, floatingObject, element, option) {
	        var zoomFactor = sheet.zoom();
	       
	        if (!option || option.width) {
	            element.style.width = Math_floor((floatingObject.width() * zoomFactor)) + "px";
	        }
	        if (!option || option.height) {
	            element.style.height = Math_floor((floatingObject.height() * zoomFactor)) + "px";
	        }
	    }
	
	    function destroyFormulaTextBoxForChart(sheet) {
	        var fbx = sheet._formulaTextBoxForChart;
	        if (fbx) {
	            fbx.series = keyword_undefined;
	            fbx.chartView = keyword_undefined;
	            fbx._unbind('TextChanged');
	            fbx.destroy();
	            sheet._formulaTextBoxForChart = keyword_null;
	        }
	    }
	
	    var _SheetModelManager = Core._SheetModelManager;
	    GC$.extend(_SheetModelManager.prototype, {
	        _backupCharts: function (chart, value) {
	            var self = this;
	            var changes = self._changes;
	            if (changes) {
	                var chartChanges = changes._chartChanges;
	                if (!chartChanges) {
	                    chartChanges = changes._chartChanges = [];
	                }
	                chartChanges.push({ chart: chart, value: value });
	            }
	        },
	        _restoreCharts: function (originalCharts) {
	            if (originalCharts) {
	                for (var i = originalCharts.length - 1; i >= 0; i--) {
	                    var chartItem = originalCharts[i];
	                    chartItem.chart._restore(chartItem.value);
	                }
	            }
	        }
	    });
	    _SheetModelManager._registerFeature('Charts', {
	        init: function () {
	            this._charts = new ChartCollection(this._sheet);
	        },
	        undo: function (changes) {
	            var chartChanges = changes._chartChanges;
	            if (chartChanges) {
	                this._restoreCharts(chartChanges);
	            }
	           
	           
	            this._sheet._updateAllChartInSheet(true);
	        }
	    });
	
	    Worksheet._registerFeature('chart', {
	        init: function () {
	            var _this = this;
	            var chartSource = _this._chartSource = new ChartSource(_this);
	           
	            
	            _this.charts = _this._modelManager._charts;
	            _this._floatingObjectListeners.push({
	                _onAddItem: function (floatingObject) {
	                    if (floatingObject.typeName === '2' ) {
	                        chartSource._addChart(floatingObject);
	                    }
	                }
	            });
	
	            function updateCharts(rects) {
	                for (var _i = 0, _a = _this.charts.all(); _i < _a.length; _i++) {
	                    var item = _a[_i];
	                    item._updateChartModel(true, rects);
	                }
	            }
	
	            _this._bind(Events.RowChanged + CHART_NS, function (event, data) {
	                var propertyName = data.propertyName;
	                if (propertyName === 'isVisible') {
	                    updateCharts([new CellRect(data.row, 0, 1, _this.getColumnCount())]);
	                }
	            });
	            _this._bind(Events.ColumnChanged + CHART_NS, function (event, data) {
	                var propertyName = data.propertyName;
	                if (propertyName === 'isVisible') {
	                    updateCharts([new CellRect(0, data.col, _this.getRowCount(), 1)]);
	                }
	            });
	            _this._bind(Events.FloatingObjectLoaded + CHART_NS, function (event, data) {
	                var chartModel = data.floatingObject._chart;
	                var floatingObject = data.floatingObject;
	                if (chartModel) {
	                    var previewElement = data.element;
	                    floatingObject._bindEvents(previewElement);
	                    setElementSize(_this, floatingObject, previewElement);
	                    floatingObject._initFlexDV(previewElement, Core._DPIHelper._getDevicePixel(), true);
	                }
	            });
	            _this._bind(Events.FloatingObjectChanged + CHART_NS, function (event, data) {
	                var floatingObject = data.floatingObject;
	                var propertyName = data.propertyName;
	                var flexDVs = floatingObject._flexDVs, hostElement;
	                if (floatingObject.getHost().length > 0 && flexDVs && flexDVs.length > 0) {
	                    var isSelected = floatingObject.isSelected();
	                    for (var i = 0, length = flexDVs.length; i < length; i++) {
	                        var flexDV = flexDVs[i];
	                        hostElement = flexDV.hostElement;
	                        if (propertyName === "width" || propertyName === "height") {
	                            var option = {};
	                            option[propertyName] = true;
	                            setElementSize(_this, floatingObject, hostElement, option);
	                            if (floatingObject.width() > 0 && floatingObject.height() > 0) {
	                                flexDV.refresh();
	                            }
	                        } else if (propertyName === "isSelected" && !isSelected) {
	                            flexDV.select(keyword_null);
	                        }
	                    }
	                }
	            });
	            _this._bind(Events.FloatingObjectRemoved + CHART_NS, function (event, data) {
	                var floatingObject = data.floatingObject, flexDVs = floatingObject._flexDVs;
	               
	                if (flexDVs) {
	                    floatingObject._dispose();
	
	                    destroyFormulaTextBoxForChart(_this);
	                }
	            });
	        },
	        dispose: function (clearCache) {
	            if (clearCache !== false) {
	                var sheet = this;
	                sheet._unbind(CHART_NS);
	                destroyFormulaTextBoxForChart(sheet);
	            }
	        },
	        processMouseDown: function (argObj) {
	            var sheet = this;
	            if (!argObj.hitInfo.formulaRangeHitInfo) {
	                destroyFormulaTextBoxForChart(sheet);
	                sheet._render._paintFormulaTextBox();
	            }
	        },
	        toJson: function (data, serializationOption) {
	            var ignoreStyle = serializationOption && serializationOption.ignoreStyle;
	            if (ignoreStyle) {
	                return;
	            }
	            var sheet = this;
	            var chartViews = sheet.charts.all();
	            if (chartViews.length > 0) {
	                data.charts = chartViews.map(function (chartView) {
	                    return chartView.toJSON();
	                });
	            }
	        },
	        fromJsonAfterFormula: function (data, noSchema, deserializationOptions) {
	            var ignoreStyle = deserializationOptions && deserializationOptions.ignoreStyle;
	            if (ignoreStyle) {
	                return;
	            }
	            var charts = data.charts;
	            var sheet = this;
	            if (charts) {
	                for (var _i = 0, charts_1 = charts; _i < charts_1.length; _i++) {
	                    var chart = charts_1[_i];
	                    var chartView = new Chart(sheet);
	                    chartView.fromJSON(chart);
	                    sheet.charts._add(chartView);
	                }
	            }
	        },
	        onLayoutChanged: function (e) {
	            var sheet = this;
	            var changeType = e.changeType;
	            if (changeType === 'zoomSheet') {
	                sheet.charts.all().forEach(function (floatingObject) {
	                    var flexDVs = floatingObject._flexDVs;
	                    if (flexDVs && flexDVs.length > 0) {
	                        for (var i = 0, length = flexDVs.length; i < length; i++) {
	                            var flexDV = flexDVs[i];
	                            setElementSize(sheet, floatingObject, flexDV.hostElement);
	                        }
	                        floatingObject._updateChartModel();
	                    }
	                });
	            }
	        },
	        onPaintSuspend: function (e) {
	            var sheet = this;
	            sheet.charts.all().forEach(function (chart) {
	                if (!e.suspend && chart._isDirty) {
	                    chart._updateChartModel();
	                }
	            });
	        },
	        setName: function (e) {
	            var oldName = e.oldName, newName = e.newName;
	
	            var spread = this.getParent();
	            if (spread) {
	                var sheetCount = spread.getSheetCount();
	                for (var sheetIndex = 0; sheetIndex < sheetCount; sheetIndex++) {
	                    var sheet = spread.getSheet(sheetIndex);
	                    sheet.charts.all().forEach(function (chart) {
	                        chart._onSheetNameChanged(oldName, newName);
	                    });
	                }
	            }
	        },
	        onProtectChanged: function () {
	            this._updateAllChartInSheet();
	        },
	        onGroupChanged: function (args) {
	            this.charts._onGroupChanged(args.start, args.end, args.isRow);
	        }
	    });
	
	    Workbook._registerFeature('chart', {
	        init: function () {
	            if (!Functions.findGlobalFunction('SERIES')) {
	                var func = new Functions.Function('SERIES', 4, 5);
	                func.evaluate = function (args) {  
	                    return 0;
	                };
	                func.acceptsReference = function (index) { 
	                    return true;
	                };
	                func.acceptsArray = function (index) { 
	                    return true;
	                };
	                Functions._customFunctions['SERIES'] = func;
	            }
	        },
	        fromJson: function (data, noSchema, deserializationOptions) {
	           
	           
	            var ignoreStyle = deserializationOptions && deserializationOptions.ignoreStyle;
	            if (ignoreStyle) {
	                return;
	            }
	            this.sheets.forEach(function (sheet) {
	                sheet.charts.all().forEach(function (chart) {
	                    chart.updateSeries(keyword_null, true);
	                });
	            });
	        }
	    });
	
	    module.exports = Charts;
	}());

/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.sheets.charts.12.0.0.js.map
}));
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
var GC = GC || {}; GC["Spread"] = GC["Spread"] || {}; GC["Spread"]["Sheets"] = GC["Spread"]["Sheets"] || {}; GC["Spread"]["Sheets"]["Filter"] =
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

	(function() {
	    'use strict';
	
	    __webpack_require__(1);
	    __webpack_require__(8);
	    var exports = __webpack_require__(7);
	    exports.SR = {};
	
	    exports.SR['en'] = __webpack_require__(10);
	    
	    module.exports = exports;
	
	}());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Sheets = __webpack_require__(2);
	    var Common = __webpack_require__(3);
	    var BaseDialog = Sheets._BaseDialog;
	    var FilterDialog = __webpack_require__(4);
	    var GeneralFormatter = __webpack_require__(9).GeneralFormatter;
	    var RegexHelper = Common._RegexHelper;
	    var Filter = __webpack_require__(6);
	    var _WordWrapHelper = Sheets._WordWrapHelper;
	
	    var $ = Sheets.GC$, Events = Sheets.Events,
	        createElement = Sheets._util._createElement, util = Sheets._util, util_cancelDefault = util._cancelDefault,
	        arrayHelper_getLength = Common._ArrayHelper._getLength;
	    var keyword_null = null, isNullOrUndefined = Common._Types._isNullOrUndefined, parseFloatFunc = parseFloat, inArray = $.inArray,
	        SORT_ASC_ID = 'gc-sortASC', SORT_DES_ID = 'gc-sortDES', OK_ID = 'gc-filterOK', CANCEL_ID = 'gc-filterCancel', SEARCH_ID = 'gc-filterSearch', CHECK_ALL_ID = 'gc-filterCheckAll', UNCHECK_ALL_ID = 'gc-filterUnCheckAll',
	        ITEM_CONTAINER_CLASS = 'gc-filter-item-container', FILTER_HOVER_CLASS = 'gc-filter-hover',
	        FILTER_BUTTON_CLASS = 'gc-filter-button', FILTER_ITEM_LINK = 'gc-filter-item-link ', FILTER_SORT_CLASS = 'gc-filter-sort', EXTERNAL_HOVER_CLASS = 'ui-state-hover ', FILTER_BUTTON_HOVER_CLASS = 'gc-filter-button-hover ' + EXTERNAL_HOVER_CLASS,
	        FILTER_ITEM_HOVER_CLASS = 'gc-filter-item-hover', EXTERNAL_AND_FILTER_ITEM_HOVER_CLASS = EXTERNAL_HOVER_CLASS + FILTER_ITEM_HOVER_CLASS, FILTER_CLASS = FILTER_HOVER_CLASS + ' form-control well ' + EXTERNAL_AND_FILTER_ITEM_HOVER_CLASS,
	        UI_CORNER_CLASS = ' ui-corner-all ', UI_BUTTON_DISABLED_CLASS = 'ui-button-disabled', UI_STATE_DISABLED_CLASS = ' ui-state-disabled', FILTER_BUTTON_DISABLE_CLASS = 'gc-filter-button-disable', SUB_MENU_COLOR_FILTER = "gc-sub-color-filter", SUB_MENU_CONTENT_FILTER = "gc-sub-content-flter", SUB_MENU_COLOR_SORT = 'gc-sub-color-sort',
	        NO_USER_SELECT_CLASS = 'gc-no-user-select', FILTER_CHECK_CLASS = ' gc-filter-check', FILTER_CHECK_OUTER_DIV_CLASS = 'gc-filter-check-outerDiv', FILTER_BUTTON_ACTIVE_CLASS = 'gc-filter-button-active',
	        EVENT_NAME_SPACE = '.ui-filter-dialog', PX = 'px', FONT_SIZE = 'font-size', STRING = 'string', BLANK_LINK = 'javascript:void(0)', MOUSE_OUT = 'mouseout', CLICK = 'click', KEY_DOWN = 'keydown',
	        KEY_UP = 'keyup', SEARCH = 'search', INPUT = 'input', SPAN = 'span', DIV = 'div', BUTTON = 'button', DOM_MOUSE_SCROLL = 'DOMMouseScroll', MOUSE_WHEEL = 'mousewheel', MOUSE_DOWN = 'mousedown',
	        MOUSE_OVER = 'mouseover', MOUSE_UP = 'mouseup', MARGIN = 'margin', MARGIN_LEFT = MARGIN + 'Left', MARGIN_TOP = MARGIN + 'Top', PADDING = 'padding',
	        PADDING_TOP = PADDING + 'Top', DISPLAY = 'display', NONE = 'none', WIDTH = 'width', HEIGHT = 'height', BORDER = 'border',
	        LEFT = 'left', TOP = 'top', BOX_SIZING = 'box-sizing', CONTENT_BOX = 'content-box', BLOCK = 'block';
	    var getType = Common._Types._getType;
	   
	    var SORT_ASC_TR = "gc-sortASC-tr", SORT_DEC_TR = "gc-sortDEC-tr", SORT_COLOR_TR = "gc-sort-color-tr", CLEAR_FILTER_TR = "clear_filter", COLOR_FILTER_TR = "gc-color-filter", MAJOR_FILTER_TR = "gc-major_filter", SEARCH_FILTER_TR = 'gc-search-tr', FILTER_FUNCTION_TR = "gc-filter-function-tr", keyword_undefined = void 0, AUTO_MATIC = "automatic",
	        TEXT_FILTER = 'TextFilter', NUMBER_FILTER = "NumberFilter", DATE_FILTER = "DateFilter", FILTER_CHOOSE_AREA = "gc-filter-choose-area", FILTER_BUTTON_TR = "filter-button-tr",
	        FILTER_DIALOG_CLASS = "gc-filter-dialog-style", SORT_COLOR_ID = "gc-sortColor", FILTER_COLOR_ID = "gc-filter-color", CLEAR_FILTER_ID = "gc-clearFilter", MAJOR_FILTER_ID = "gc-majorFilter", RIGHT_ARROW = "gc-filterDialog-rightArrow", FILTER_DISABLE_ITEM_CLASS = 'gc-filter-disable-item';
	       
	
	   
	   
	    var filterDialogCheckedStatus = {
	        true: 1, 
	        false: 2, 
	        undefined: 2, 
	        null: 3 
	    };
	   
	    var sR = function () {
	        return Common._getResource(Filter.SR)();
	    };
	
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	
	   
	    var _FilterButtonInfo = (function () {
	
	        function _FilterButtonInfo(rowFilter, row, col, sheetArea, x, y, width, height) {
	            var self = this;
	            self.rowFilter = rowFilter;
	            self.row = row;
	            self.col = col;
	            self.sheetArea = sheetArea;
	            self.x = x;
	            self.y = y;
	            self.width = width;
	            self.height = height;
	        }
	
	        _FilterButtonInfo.prototype._getState = function () {
	            var self = this, filter = self.rowFilter, col = self.col, state = filter.getSortState(col);
	            if (!filter) {
	                return 0 ;
	            }
	            return filter.isFiltered(col) ? [3, 4, 5][state]
	                : state;
	        };
	        return _FilterButtonInfo;
	    })();
	    Filter._FilterButtonInfo = _FilterButtonInfo;
	   
	
	   
	    function addCssClass(element, className) {
	        $(element).addClass(className);
	    }
	    function formatColor(color, currentTheme) {
	        color = currentTheme.getColor(color);
	        return Common._ColorHelper._toString(Common._ColorHelper._fromString(color));
	    }
	
	    function fillColorList(color, colorList, theme, row, colorCahce) {
	        if (color) {
	            var tempColor = colorCahce[color];
	            if (tempColor === keyword_undefined) {
	                tempColor = colorCahce[color] = formatColor(color, theme);
	            }
	            if (colorList.data[tempColor] === keyword_undefined) {
	                colorList.colorNumber++;
	            }
	            colorList.data[tempColor] = row;
	        } else {
	            colorList[AUTO_MATIC] = AUTO_MATIC;
	        }
	    }
	
	    function removeCssClass(element, className) {
	        $(element).removeClass(className);
	    }
	
	    function applyNewSize($selector, width, height) {
	        $selector.css([WIDTH, HEIGHT], [width + PX, height + PX]);
	    }
	
	    function initElementProperty(element) {
	        $(element).css([BORDER, MARGIN, PADDING, "outline"], [0, 0, 0, NONE]);
	    }
	
	
	    function concatWithEmptyArray(arr) {
	        return arr.concat([]);
	    }
	
	    function getValueTypeForFilterDialog(value) {
	        if (isNullOrUndefined(value) || value === '' || (typeof value1 === 'number' && isNaN(value))) {
	            return 'blank';
	        }
	        return getType(value);
	    }
	
	    function trimCommentedChar(format) {
	        var result = '';
	        var inComments = false;
	        for (var i = 0, l = format.length; i < l; i++) {
	            var c = format[i];
	            if (c === '"') {
	                inComments = !inComments;
	            }
	            if (c !== 'E' && !inComments) {
	                result += c.toLowerCase();
	            }
	        }
	        return result;
	    }
	
	    function buildDateData(Formatter, text, value, status) {
	        if (!text || !Formatter) {
	            return;
	        }
	        var result = Formatter.format(value), year, month, day, children = [];
	        if(result) {
	            var YMD = result.split('/');
	            year = YMD[0] || '';
	            month = YMD[1] || '';
	            day = YMD[2] || '';
	        }
	        children.push({
	            value: year,
	            level: 0,
	            status: status
	        });
	        children.push({
	            value: month,
	            level: 1,
	            status: status
	        });
	        children.push({
	            value: day,
	            level: 2,
	            status: status
	        });
	        return {
	            key: text,
	            value: value,
	            children: children,
	            status: status
	        };
	    }
	
	    function buildTextOrNumberData(sheet, text, value, row, col, status) {
	        if (!text) {
	            return;
	        }
	        var children = [];
	        children.push({
	            value: text,
	            level: !(sheet.outlineColumn && sheet.outlineColumn._isOutlineColumn(col)) ? 0 : sheet.getCell(row, col).textIndent(),
	            status: status
	        });
	        return {
	            key: text,
	            value: value,
	            children: children,
	            status: status
	        };
	    }
	
	    var _FilterDialog = (function (_super) {
	        $.inherit(_FilterDialog, _super);
	
	        function _FilterDialog(host, sheet, filterButtonInfo, displayInfo) {
	            var self = this, sheetParent = sheet.parent;
	            _super.call(self, host, util._getPreferredZIndex(sheetParent && sheetParent._host));
	            self._allValues = [];              
	            self._allCheckedValues = [];       
	            self._searchedValues = [];         
	            self._previewItemsData = [];       
	            self._dataSourceCache = [];        
	            self._originValueTypeCount = {
	                Number: 0,
	                Text: 0,
	                Date: 0
	            };  
	            self._menuType = "";
	            self._currentSubMenu = keyword_null;
	            self.sheet = sheet;
	            self.filterButtonInfo = filterButtonInfo;
	            self._containerWidth = 237;        
	            self._containerHeight = 410;       
	            self._listHeight = 26;             
	            self._itemContainerWidth = 191;    
	            self._itemContainerHeight = 150;   
	            self._touchContainerWidth = 257;   
	            self._touchContainerHeight = 355;  
	            self.rEscape = /[\-\[\]{}()+.,\\\^$|#\s]/g;
	            self.elementList = [];
	            self.activeItemIndex = keyword_null;
	            self._container = self._getContainer();
	            self._filterTitle = self._setFilterName();
	            self._clearFilterItemEnable = self._getClearFilterVisiable();
	            self._displayInfo = displayInfo;
	            self._displayList = self._createDisplayList();
	            self._createTableLayout();
	            self._initFilterPanel();
	        }
	
	        var prototype = {
	            _createDisplayList : function () {
	                var self = this, list = [], displayInfo = this._displayInfo;
	                var height = self._containerHeight, itemHeight = self._listHeight;
	               
	                if(displayInfo.sortByValue) {
	                    list = list.concat([1, 1]);
	                } else {
	                    list = list.concat([0, 0]);
	                    height = height - itemHeight * 2;
	                }
	               
	                if(displayInfo.sortByColor) {
	                    list = list.concat([1]);
	                } else {
	                    list = list.concat([0]);
	                    height = height - itemHeight;
	                }
	               
	                if(displayInfo.filterByValue === true || displayInfo.filterByColor === true) {
	                    list = list.concat([1]);
	                } else {
	                    list = list.concat([0]);
	                    height = height - itemHeight;
	                }
	               
	                if(displayInfo.filterByColor === true) {
	                    list = list.concat([1]);
	                } else {
	                    list = list.concat([0]);
	                    height = height - itemHeight;
	                }
	               
	                if(displayInfo.filterByValue === true) {
	                    list = list.concat([1]);
	                } else {
	                    list = list.concat([0]);
	                    height = height - itemHeight;
	                }
	               
	                if(displayInfo.listFilterArea === true) {
	                    list = list.concat([1, 1, 1]);
	                }else {
	                    list = list.concat([0, 0, 0]);
	                    height = height - 254;
	                }
	                self._containerHeight = height;
	                return list;
	            },
	            _open: function () {
	                var self = this, tempWorkbook = self.sheet.parent, filterButtonInfo = self.filterButtonInfo, container = self._container;
	                self._useTouchLayout = tempWorkbook ? tempWorkbook.options.useTouchLayout : false;
	                self._initData(filterButtonInfo.col);
	
	                if(self.itemList && self.itemList.length > 0) {
	                    self._initFilterItemsLayout(self.dataSource);
	                }
	
	               
	                self._setMenuLinkType();
	                self._setDisableItem();
	                if($('#' + MAJOR_FILTER_TR).length === 1) {
	                    self._cellValueSubMenu = self._createCellValueSubMenu($('#' + MAJOR_FILTER_TR)[0].children[2]);
	                    self._cellValueSubMenu._setType(self._menuType)._init();
	                }
	                if($('#' + COLOR_FILTER_TR).length === 1) {
	                    self._colorFilterSubMenu = self._createColorSubMenu($('#' + COLOR_FILTER_TR)[0].children[2], SUB_MENU_COLOR_FILTER);
	                    self._colorFilterSubMenu._init();
	                }
	
	                if($('#' + SORT_COLOR_TR).length === 1) {
	                    self._colorSortSubMenu = self._createColorSubMenu($('#' + SORT_COLOR_TR)[0].children[2], SUB_MENU_COLOR_SORT);
	                    self._colorSortSubMenu._init();
	                }
	
	               
	               
	                container.hide();
	                self._show(function () {
	                    self.elementList.length > 0 && $(self.elementList[0]).focus();
	                });
	                self._useTouchLayout && self._updateFilterPanel(self._touchContainerWidth, self._touchContainerHeight);
	                var left = filterButtonInfo.x + filterButtonInfo.width - container.width() - 6;
	                if(left < 5) {
	                    left = 5;
	                }
	                container.css([LEFT, TOP], [left, filterButtonInfo.y + filterButtonInfo.height]);
	                self._resetDialogPosition();
	                self._attachEvent();
	                self._setButtonState();
	            },
	            _updateFilterPanel: function (width, height) {
	                var self = this, widthInc = width - self._containerWidth, heightInc = height - self._containerHeight;
	                if (widthInc > 0 && heightInc > 0) {
	                    applyNewSize(self._container, width, height);
	
	                    var $filterSortElement = $('.' + FILTER_SORT_CLASS), newSortPaddingV = parseFloatFunc($filterSortElement.css(PADDING_TOP)) + heightInc / 30,
	                        $filterButtons = $('.' + FILTER_BUTTON_CLASS), newButtonWidth = parseFloatFunc($filterButtons.css(WIDTH)) + widthInc / 4, newButtonHeight = parseFloatFunc($filterButtons.css(HEIGHT)) + heightInc / 8,
	                        $okButton = $('#' + OK_ID), newButtonMarginLeft = parseFloatFunc($okButton.css(MARGIN_LEFT)) + widthInc / 2,
	                        $searchBox = $('#' + SEARCH_ID), newSearchWidth = parseFloatFunc($searchBox.css(WIDTH)) + widthInc, newSearchHeight = parseFloatFunc($searchBox.css(HEIGHT)) + heightInc / 8,
	                        $filterCheck = $('.' + FILTER_CHECK_OUTER_DIV_CLASS), newCheckMarginTop = parseFloatFunc($filterCheck.css(MARGIN_TOP)) + heightInc / 10,
	                        $unCheckAll = $('#' + UNCHECK_ALL_ID), newCheckMarginLeft = parseFloatFunc($unCheckAll.css(MARGIN_LEFT)) + widthInc;
	                    $filterSortElement.css(PADDING, newSortPaddingV + PX + ' 6px');
	                    applyNewSize($filterButtons, newButtonWidth, newButtonHeight);
	                    $okButton.css(MARGIN_LEFT, newButtonMarginLeft + PX);
	                    applyNewSize($searchBox, newSearchWidth, newSearchHeight);
	                    $filterCheck.css(MARGIN_TOP, newCheckMarginTop + PX);
	                    $unCheckAll.css(MARGIN_LEFT, newCheckMarginLeft + PX);
	                }
	            },
	            close: function () {
	                var self = this, sheet = self.sheet;
	                _super.prototype.close.call(self);
	                $(self._itemSpanElement).remove();
	                $(self._itemInputElement).remove();
	                sheet._filterDialog = null;
	                sheet && sheet._setFocus();
	            },
	            _initSortArea: function () {
	                if($("#" + SORT_ASC_TR).length === 1) {
	                    this._createValueSortItem();
	                }
	                if($("#" + SORT_COLOR_TR).length === 1) {
	                    this._createColorSortItem();
	                }
	            },
	            _createValueSortItem : function () {
	                var self = this, elementList = self.elementList, ascLink = self._getSortLink(SORT_ASC_ID, sR().SortAscending), desLink = self._getSortLink(SORT_DES_ID, sR().SortDescending);
	                var sortAcendingChild = $("#" + SORT_ASC_TR)[0], sortDecendingChild = $("#" + SORT_DEC_TR)[0];
	                $(sortAcendingChild.children[0]).append($(createElement('img')).attr('src', _FilterDialog._getImageSrc(6)));
	                $(sortDecendingChild.children[0]).append($(createElement('img')).attr('src', _FilterDialog._getImageSrc(7)));
	                $(sortAcendingChild.children[1]).append(ascLink);
	                $(sortDecendingChild.children[1]).append(desLink);
	                elementList.push(sortAcendingChild);
	                elementList.push(sortDecendingChild);
	            },
	            _createColorSortItem : function () {
	                var self = this, elementList = self.elementList, colorLink = self._getSortLink(SORT_COLOR_ID, sR().SortColor), sortColorChild = $("#" + SORT_COLOR_TR)[0];
	                var flag = self._getIsColorSortCheck(), isColorSortCheckWrap = this._createCheckedElement(flag);
	                var colorSortArrowIcon = $(createElement('img')).attr('src', _FilterDialog._getImageSrc(10));
	                colorSortArrowIcon.css([MARGIN_LEFT], ["7px"]).addClass(RIGHT_ARROW);
	                $(sortColorChild.children[0]).append(isColorSortCheckWrap);
	                $(sortColorChild.children[1]).append(colorLink);
	                $(sortColorChild.children[2]).append(colorSortArrowIcon);
	                elementList.push(sortColorChild);
	            },
	            _createColorFilterItem :  function (showCheckInfo) {
	                var self = this, elementList = self.elementList, colorFilterLink = self._getSortLink(FILTER_COLOR_ID, sR().FilterColor), colorFilterChild = $("#" + COLOR_FILTER_TR)[0], colorFilterArrowIcon = $(createElement('img')).attr('src', _FilterDialog._getImageSrc(10));
	                colorFilterArrowIcon.css([MARGIN_LEFT], ["7px"]).addClass(RIGHT_ARROW);
	                var isColorFilterCheckWrap = this._createCheckedElement(showCheckInfo.isShowColorFilterSelect);
	                $(colorFilterChild.children[0]).append(isColorFilterCheckWrap);
	                $(colorFilterChild.children[1]).append(colorFilterLink);
	                $(colorFilterChild.children[2]).append(colorFilterArrowIcon);
	                elementList.push(colorFilterChild);
	            },
	            _createConditionFilterItem : function (showCheckInfo) {
	                var self = this, sheet = self.sheet, colIndex = self.filterButtonInfo.col, isMajorCheckWrap = self._createCheckedElement(showCheckInfo.isShowMajorCheck), majorFilterChild = $("#" + MAJOR_FILTER_TR)[0];
	                var isOutlineColumn = sheet.outlineColumn && sheet.outlineColumn._isOutlineColumn(colIndex);
	                if(isOutlineColumn) {
	                    $(majorFilterChild).addClass(FILTER_DISABLE_ITEM_CLASS + UI_STATE_DISABLED_CLASS);
	                }
	                $(majorFilterChild.children[0]).append(isMajorCheckWrap);
	                var majorLink = self._getSortLink(MAJOR_FILTER_ID, "");
	                majorLink.appendTo(majorFilterChild.children[1]);
	                var arrowIcon = $(createElement('img')).attr('src', _FilterDialog._getImageSrc(10));
	                arrowIcon.css([MARGIN_LEFT], ["7px"]).addClass(RIGHT_ARROW);
	                $(majorFilterChild.children[2]).append(arrowIcon);
	                self.elementList.push(majorFilterChild);
	            },
	            _initFilterArea: function () {
	                var hasColorFilter = $("#" + COLOR_FILTER_TR).length === 1, hasValueFilter = $("#" + MAJOR_FILTER_TR).length === 1;
	                if(hasColorFilter || hasValueFilter) {
	                    var self = this, elementList = self.elementList, clearFilterChild = $("#" + CLEAR_FILTER_TR)[0];
	                    self._createClearFilterChild(clearFilterChild);
	                    elementList.push(clearFilterChild);
	                   
	                    var showCheckInfo = self._getShowCheckInfo();
	                    if(hasColorFilter) {
	                        self._createColorFilterItem(showCheckInfo);
	                    }
	                    if(hasValueFilter) {
	                        self._createConditionFilterItem(showCheckInfo);
	                    }
	                }
	
	            },
	            _initListBoxArea: function () {
	                var self = this;
	                if(self._displayInfo.listFilterArea) {
	                    self._createSearchBox();
	                    self._createListBoxItem();
	                    self._createBottunItem();
	                }
	
	            },
	            _createBottunItem: function () {
	               
	                var buttonClass = FILTER_BUTTON_CLASS + ' gc-filter-button-default ui-button ui-state-default' + UI_CORNER_CLASS + 'btn btn-default', btnChild = $("#" + FILTER_BUTTON_TR)[0],
	                    okButtonElement = createElement(BUTTON), cancelButtonElement = createElement(BUTTON),
	                    okButton = $(okButtonElement).text(sR().OK).css(FONT_SIZE, '1em').attr('id', OK_ID),
	                    cancelButton = $(cancelButtonElement).text(sR().Cancel).css(FONT_SIZE, '1em').attr('id', CANCEL_ID);
	                addCssClass(okButtonElement, buttonClass);
	                addCssClass(cancelButtonElement, buttonClass);
	                $(btnChild.children[1]).append(okButton).append(cancelButton);
	                this.elementList.push(okButtonElement);
	                this.elementList.push(cancelButtonElement);
	
	            },
	            _createListBoxItem : function () {
	                var self = this, showCheckInfo = self._getShowCheckInfo(), itemsChild = $("#" + FILTER_CHOOSE_AREA)[0];
	                var isSelectCheckedEl = $(createElement("img")).attr("src", _FilterDialog._getImageSrc(11));
	                isSelectCheckedEl.css(["verticalAlign", "margin-top"], ["top", "4px"]);
	                if(!showCheckInfo.isShowSelectCheck) {
	                    isSelectCheckedEl.css([DISPLAY], [NONE]);
	                }
	               
	                var itemList = self.itemList = $(createElement(DIV)).css([WIDTH, HEIGHT, BOX_SIZING], [self._itemContainerWidth, self._itemContainerHeight, CONTENT_BOX]);
	                addCssClass(itemList[0], ITEM_CONTAINER_CLASS);
	                $(itemsChild.children[0]).append(isSelectCheckedEl).css([DISPLAY], ["inline-block"]);
	                $(itemsChild.children[1]).append(itemList);
	            },
	            _createSearchBox : function () {
	               
	                var self = this, $searchOuterDiv = $(createElement(DIV)).css([MARGIN, PADDING], [0, 0]),
	                    $searchDiv = $(createElement(DIV)).appendTo($searchOuterDiv), searchChild = $("#" + SEARCH_FILTER_TR)[0],
	                    $searchInput = $(createElement(INPUT)).attr({
	                        type: SEARCH,
	                        placeholder: sR().Search,
	                        id: SEARCH_ID
	                    }).appendTo($searchDiv);
	                addCssClass($searchOuterDiv[0], 'gc-search-outer-div ui-widget-header' + UI_CORNER_CLASS + 'ui-multiselect-header ui-helper-clearfix');
	                self.elementList.push($searchInput[0]);
	
	                var checkDiv = $(createElement(DIV)).appendTo($searchOuterDiv),
	                    checkAllLink = self._getCheckLink(CHECK_ALL_ID, sR().CheckAll, 'gc-check-image ui-icon ui-icon-check'),
	                    unCheckAllLink = self._getCheckLink(UNCHECK_ALL_ID, sR().UncheckAll, 'gc-uncheck-image ui-icon ui-icon-closethick');
	                addCssClass(checkDiv[0], FILTER_CHECK_OUTER_DIV_CLASS);
	                checkDiv.append(checkAllLink).append(unCheckAllLink);
	                $(searchChild.children[1]).append($searchOuterDiv);
	
	
	            },
	           
	            _initFilterPanel: function () {
	                var self = this;
	                self._initSortArea();
	                self._initFilterArea();
	                self._initListBoxArea();
	            },
	            _createCellValueSubMenu : function (wrap) {
	                var self = this, subMenu = keyword_null;
	                switch (this._menuType) {
	                    case NUMBER_FILTER:
	                        subMenu = new FilterDialog._NumberFilterMenu(wrap, self._container, self.filterButtonInfo, self.sheet, self, SUB_MENU_CONTENT_FILTER);  
	                        break;
	                    case TEXT_FILTER:
	                        subMenu = new FilterDialog._TextFilterMenu(wrap, self._container, self.filterButtonInfo, self.sheet, self, SUB_MENU_CONTENT_FILTER);  
	                        break;
	                    case DATE_FILTER:
	                        subMenu = new FilterDialog._DateFilterMenu(wrap, self._container, self.filterButtonInfo, self.sheet, self, SUB_MENU_CONTENT_FILTER);  
	                        break;
	                }
	                return subMenu;
	            },
	            _createColorSubMenu : function (wrap, dialogType) {
	                var self = this, subMenu = keyword_null;
	                if(dialogType === SUB_MENU_COLOR_FILTER) {
	                    subMenu = new FilterDialog._ColorFilterMenu(wrap, self._container, self.filterButtonInfo, self.sheet, self, SUB_MENU_COLOR_FILTER);
	                } else if(dialogType === SUB_MENU_COLOR_SORT) {
	                    subMenu = new FilterDialog._ColorFilterMenu(wrap, self._container, self.filterButtonInfo, self.sheet, self, SUB_MENU_COLOR_SORT);
	                }
	                return subMenu;
	            },
	            _getIsColorSortCheck:function () {
	                var self = this, filterButtonInfo = self.filterButtonInfo, rowFilter = filterButtonInfo.rowFilter, flag = false, sortInfo = rowFilter._sortInfo;
	                if(sortInfo !== keyword_null && sortInfo.color !== keyword_undefined && filterButtonInfo.col === sortInfo.index) {
	                    flag = true;
	                }
	                return flag;
	            },
	            _createCheckedElement: function (isShow) {
	                var isCheckWrap = $(createElement("div"));
	                var isCheckedEl = $(createElement("img")).attr("src", _FilterDialog._getImageSrc(11));
	                if(!isShow) {
	                    isCheckedEl.css([DISPLAY], [NONE]);
	                }
	                isCheckWrap.append(isCheckedEl);
	                return isCheckWrap;
	            },
	            
	            _setFilterName:function () {
	                var self = this, filterButtonInfo = self.filterButtonInfo, rowFilter = filterButtonInfo.rowFilter, col = filterButtonInfo.col, name = self.sheet.getText(self.filterButtonInfo.row, col, filterButtonInfo.sheetArea);
	               
	                if(rowFilter && rowFilter.range.row <= 0 ) {
	                    name = self.sheet.getText(filterButtonInfo.row, col, filterButtonInfo.sheetArea);
	                } else if(!name) {
	                    name = self.sheet.getText(0, col, 1 );
	                }
	                if(name === "" && self.sheet.options.colHeaderAutoText === 1) {
	                    name = '(Column ' + (col + 1) + ')';
	                }else if(name === "") {
	                    name = '(Column ' + self.sheet._indexToLetters(col + 1) + ')';
	                }
	                name = '"' + name;
	                return name;
	            },
	            _createClearFilterChild: function (clearFilterChild) {
	                var self = this, src;
	                if (self._clearFilterItemEnable) {
	                    src = _FilterDialog._getImageSrc(12);
	                    $(clearFilterChild).addClass('gc-filter-item');
	                } else {
	                    src = _FilterDialog._getImageSrc(13);
	                    $(clearFilterChild).addClass(FILTER_DISABLE_ITEM_CLASS + UI_STATE_DISABLED_CLASS);
	                }
	                $(clearFilterChild.children[0]).append($(createElement('img')).attr('src', src).css([WIDTH], ["18px"]));
	                self._getSortLinkSpecial(CLEAR_FILTER_ID, self._filterTitle, $(clearFilterChild.children[1]));
	
	            },
	            _isTwoEqualDateRelationCondition : function (condition) {
	                 var conType = condition.conType();
	                 return (conType === 0 
	                     && condition.item1().compareType() === 0 
	                     && condition.item2().compareType() === 0 
	                     && condition.item1().conType() === 5 
	                     && condition.item2().conType() === 5); 
	            },
	            _getShowCheckInfo:function () {
	                var self = this, isShowMajorCheck = false, isShowColorFilterSelect = false, isShowSelectCheck = false, filterButtonInfo = self.filterButtonInfo, col = filterButtonInfo.col, rowFilter = filterButtonInfo.rowFilter,
	                    condition = rowFilter._filterItemMap[col];
	                if(condition && condition.length > 0) {
	                    condition = condition[0];
	                    var conType = condition.conType(), compareType = condition.compareType();
	                    if(compareType === 0  && conType !== 3 && self._displayInfo.listFilterArea) {
	                        isShowSelectCheck = true;
	                    } else if(compareType === 0  && conType !== 3 && !self._displayInfo.listFilterArea) {
	                        isShowMajorCheck = true;
	                    }else if(compareType !== 0  && conType !== 3) {
	                        isShowMajorCheck = true;
	                    }else if(conType === 3 ) {
	                        isShowColorFilterSelect = true;
	                    }
	                    var isTwoEqualDateRelationCondition = this._isTwoEqualDateRelationCondition(condition);
	                   
	                    if((conType === 5  && compareType === 0 ) || isTwoEqualDateRelationCondition) {
	                        isShowSelectCheck = false;
	                        isShowMajorCheck = true;
	                    }
	
	                }
	                return {
	                    isShowColorFilterSelect: isShowColorFilterSelect,
	                    isShowMajorCheck: isShowMajorCheck,
	                    isShowSelectCheck: isShowSelectCheck
	                };
	            },
	            
	            _getClearFilterVisiable:function () {
	                var self = this, flag = false, filterButtonInfo = self.filterButtonInfo, col = filterButtonInfo.col, rowFilter = filterButtonInfo.rowFilter,
	                    condition = rowFilter._filterItemMap[col];
	                if(condition && condition.length > 0) {
	                    flag = true;
	                }
	                return flag;
	            },
	            _getMenuType: function () {
	                var max = Math.max(this._originValueTypeCount.Date, this._originValueTypeCount.Number, this._originValueTypeCount.Text);
	               
	                if(max === this._originValueTypeCount.Text) {
	                    return TEXT_FILTER;
	                }
	                if(max === this._originValueTypeCount.Number ) {
	                    return NUMBER_FILTER;
	                }
	                if(max === this._originValueTypeCount.Date ) {
	                    return DATE_FILTER;
	                }
	            },
	            _setMenuLinkType: function () {
	                var text = this._getMenuType();
	                this._menuType = text;
	                var sr = sR()[text];
	                var $link = $('#' + MAJOR_FILTER_ID);
	                $link.text(sr);
	            },
	            _clearFilter:function () {
	                var self = this, filterButtonInfo = self.filterButtonInfo, sheet = this.sheet, colIndex = filterButtonInfo.col, rowFilter = filterButtonInfo.rowFilter;
	                if(!rowFilter) {
	                    return;
	                }
	                var tableName = rowFilter._table ? rowFilter._table.name() : keyword_undefined;
	                var cmdOption = {
	                    tableName : tableName,
	                    colIndex : colIndex
	                };
	                sheet._commandManager().execute({ cmd: 'clearFilter', sheetName: sheet.name(), cmdOption: cmdOption });
	                self.close();
	            },
	            _setDisableItem:function () {
	               
	                var hasMoreColor = false, cellColorList = this._cellColorList, fontColorList = this._fontColorList, backgroundCount = cellColorList.colorNumber, foreCount = fontColorList.colorNumber;
	                if(cellColorList.automatic) {
	                    backgroundCount++;
	                }
	                if(fontColorList.automatic) {
	                    foreCount++;
	                }
	                if((backgroundCount !== keyword_undefined && backgroundCount > 1) || (foreCount !== keyword_undefined && foreCount > 1)) {
	                    hasMoreColor = true;
	                }
	                var showCheckInfo = this._getShowCheckInfo();
	                if(!hasMoreColor) {
	                    !showCheckInfo.isShowColorFilterSelect && this._disableItem(COLOR_FILTER_TR);
	                    !this._getIsColorSortCheck() && this._disableItem(SORT_COLOR_TR);
	                }
	            },
	            _disableItem:function (id) {
	                var trElement = $("#" + id).addClass(FILTER_DISABLE_ITEM_CLASS + UI_STATE_DISABLED_CLASS);
	                trElement.find("." + RIGHT_ARROW).attr("src", _FilterDialog._getImageSrc(14));
	            },
	           
	            _createTableLayout: function () {
	                var self = this, container = self._container, filterSortCalss = ' gc-sort-container ui-menu-item', row, col,
	                    $table = self.table = $(createElement('table')).css([PADDING, DISPLAY], [0, 'table']).attr({
	                        cellspacing: 0,
	                        cellpadding: 0
	                    });
	                addCssClass($table[0], 'gc-layout-table');
	                var idList = [SORT_ASC_TR, SORT_DEC_TR, SORT_COLOR_TR, CLEAR_FILTER_TR, COLOR_FILTER_TR, MAJOR_FILTER_TR, SEARCH_FILTER_TR];
	                var displayList = self._displayList;
	                for (row = 0; row < 9 ; row++) {
	                    if (displayList[row] === 1) {
	                        var trElement = createElement('tr'), $tr = $(trElement).appendTo($table);
	                        if (row < 6) {
	                            $(trElement).attr("id", idList[row]).css([DISPLAY, HEIGHT, FONT_SIZE], ['table-row', "26px", "9pt"]);
	                            $(trElement).addClass(FILTER_FUNCTION_TR);
	                        }
	                        if(row === 6) {
	                            $(trElement).attr("id", idList[row]);
	                        }
	                        if (row === 7) {
	                            $(trElement).attr("tabindex", 0).attr("id", FILTER_CHOOSE_AREA);
	                        }
	                        if(row === 8) {
	                            $(trElement).attr("id", FILTER_BUTTON_TR);
	                        }
	
	                        initElementProperty(trElement);
	                        for (col = 0; col < 3 ; col++) {
	                            var tdElement = createElement('td');
	                            $(tdElement).appendTo($tr);
	                            initElementProperty(tdElement);
	                            if (col === 0) {
	                                addCssClass(tdElement, 'gc-layout-table-first-column');
	                            } else if (col === 2) {
	                                addCssClass(tdElement, 'gc-layout-table-last-column');
	                            } else if (col === 1) {
	                                if (row === 0) {
	                                    addCssClass(tdElement, 'gc-filter-sort-asc-container' + filterSortCalss + "gc-layout-table-middle-column");
	                                } else if (row === 1) {
	                                    addCssClass(tdElement, 'gc-filter-sort-desc-container' + filterSortCalss + "gc-layout-table-middle-column");
	                                }
	                            }
	                        }
	                    }
	                }
	
	                self.table.appendTo(container);
	                container.css(['box-shadow', WIDTH, HEIGHT, BOX_SIZING], ['rgba(0, 0, 0, 0.15) 2px 4px 5px', self._containerWidth + PX, self._containerHeight + PX, CONTENT_BOX]);
	                addCssClass(container[0], FILTER_DIALOG_CLASS + ' ' + NO_USER_SELECT_CLASS);
	                container.appendTo(self._getHost());
	            },
	            _attachEvent: function () {
	                var self = this, mouseDownReceivedByAsc = false, mouseDownReceivedByDes = false, $filterButtonClass = $('.' + FILTER_BUTTON_CLASS);
	                $('#' + SORT_ASC_ID).bind(MOUSE_UP, function (event) {
	                    if (mouseDownReceivedByAsc) {
	                        mouseDownReceivedByAsc = false;
	                        self._sortByUser(true);
	                        self.close();
	                        util_cancelDefault(event);
	                    }
	                }).bind(MOUSE_DOWN, function (event) {
	                    util_cancelDefault(event);
	                    mouseDownReceivedByAsc = true;
	                });
	                $('#' + SORT_DES_ID).bind(MOUSE_UP, function (event) {
	                    if (mouseDownReceivedByDes) {
	                        mouseDownReceivedByDes = false;
	                        self._sortByUser(false);
	                        self.close();
	                        util_cancelDefault(event);
	                    }
	                }).bind(MOUSE_DOWN, function (event) {
	                    util_cancelDefault(event);
	                    mouseDownReceivedByDes = true;
	                });
	
	                $('.' + FILTER_FUNCTION_TR).bind(MOUSE_OVER, function () {
	                   
	                    if(self._cellValueSubMenu && $(this).attr("id") !== MAJOR_FILTER_TR && self._cellValueSubMenu._isShow()) {
	                        self._cellValueSubMenu._hide();
	                        self._currentSubMenu = keyword_null;
	                        removeCssClass($("#" + MAJOR_FILTER_TR)[0], FILTER_CLASS);
	                    }
	                    if(self._colorFilterSubMenu && $(this).attr("id") !== COLOR_FILTER_TR && self._colorFilterSubMenu._isShow()) {
	                        self._colorFilterSubMenu._hide();
	                        self._currentSubMenu = keyword_null;
	                        removeCssClass($("#" + COLOR_FILTER_TR)[0], FILTER_CLASS);
	                    }
	                    if(self._colorSortSubMenu && $(this).attr("id") !== SORT_COLOR_TR && self._colorSortSubMenu._isShow()) {
	                        self._colorSortSubMenu._hide();
	                        self._currentSubMenu = keyword_null;
	                        removeCssClass($("#" + SORT_COLOR_TR)[0], FILTER_CLASS);
	                    }
	
	                    if(!$(this).hasClass(UI_STATE_DISABLED_CLASS.trim()) && $(this).index() < 6) {
	                        addCssClass(this, FILTER_CLASS);
	                    }
	                }).bind(MOUSE_OUT, function () {
	
	                    if(self._cellValueSubMenu && $(this).attr("id") === MAJOR_FILTER_TR && self._cellValueSubMenu._isShow()) {
	                        return;
	                    }
	                    if(self._colorFilterSubMenu && $(this).attr("id") === COLOR_FILTER_TR && self._colorFilterSubMenu._isShow()) {
	                        return;
	                    }
	                    if(self._colorSortSubMenu && $(this).attr("id") === SORT_COLOR_TR && self._colorSortSubMenu._isShow()) {
	                        return;
	                    }
	                    removeCssClass(this, FILTER_CLASS);
	
	                });
	                $("#" + CLEAR_FILTER_TR).bind(CLICK, function () {
	                    if(self._clearFilterItemEnable) {
	                        self._clearFilter();
	                    }
	                });
	                $("#" + MAJOR_FILTER_TR).bind(MOUSE_OVER, function () {
	                   
	                    if(!$(this).hasClass(FILTER_DISABLE_ITEM_CLASS)) {
	                        self._currentSubMenu = self._cellValueSubMenu;
	                        self._currentSubMenu._show();
	                    }
	
	                });
	                $("#" + COLOR_FILTER_TR).bind(MOUSE_OVER, function () {
	                    if(!$(this).hasClass(FILTER_DISABLE_ITEM_CLASS)) {
	                        self._currentSubMenu = self._colorFilterSubMenu;
	                        self._currentSubMenu._show();
	                    }
	                });
	                $("#" + SORT_COLOR_TR).bind(MOUSE_OVER, function () {
	                    if(!$(this).hasClass(FILTER_DISABLE_ITEM_CLASS)) {
	                        self._currentSubMenu = self._colorSortSubMenu;
	                        self._currentSubMenu._show();
	                    }
	                });
	
	                $('#' + CHECK_ALL_ID).bind(MOUSE_DOWN, function (event) {
	                    util_cancelDefault(event);
	                }).bind(MOUSE_UP, function (event) {
	                    self._updateFilterItemState(event, true);
	                });
	                $('#' + UNCHECK_ALL_ID).bind(MOUSE_DOWN, function (event) {
	                    util_cancelDefault(event);
	                }).bind(MOUSE_UP, function (event) {
	                    self._updateFilterItemState(event, false);
	                });
	
	                $('#' + SEARCH_ID).bind(KEY_DOWN, function (e) {
	                    if ((e.which || e.keyCode) === 13 ) {
	                        e.preventDefault();
	                    }
	                }).bind(KEY_UP, function (e) {
	                    if (inArray(e.keyCode, [9 , 37 , 38 , 39 , 40 ]) < 0) {
	                        self._searchHandler(e);
	                        self._setButtonState();
	                    }
	                }).bind(SEARCH, function (e) {
	                    self._searchHandler(e);
	                    self._setButtonState();
	                });
	                $filterButtonClass.bind(MOUSE_OVER, function () {
	                    addCssClass(this, FILTER_BUTTON_HOVER_CLASS);
	                }).bind(MOUSE_OUT, function () {
	                    removeCssClass(this, FILTER_BUTTON_HOVER_CLASS);
	                });
	                $filterButtonClass.bind(MOUSE_DOWN, function () {
	                    removeCssClass(this, FILTER_BUTTON_HOVER_CLASS);
	                    addCssClass(this, FILTER_BUTTON_ACTIVE_CLASS);
	                }).bind(MOUSE_OUT, function () {
	                    removeCssClass(this, FILTER_BUTTON_ACTIVE_CLASS);
	                });
	                $('#' + OK_ID).bind(CLICK, function () {
	                    self._updateCheckedValues();
	                    var checkedValues = self._allCheckedValues;
	                    self.sheet.suspendPaint();
	                    self._filter(checkedValues);
	                    self.sheet.resumePaint();
	                    self.close();
	                });
	                $('#' + CANCEL_ID).bind(CLICK, function () {
	                    self.close();
	                });
	
	                self._container.bind(MOUSE_WHEEL, function (event) {
	                    util_cancelDefault(event);
	                }).bind(DOM_MOUSE_SCROLL, function (event) {
	                    util_cancelDefault(event);
	                }).bind(KEY_DOWN + EVENT_NAME_SPACE, function (event) {
	                    self._filterKeyDown(event);
	                }).bind(KEY_UP + EVENT_NAME_SPACE, function (event) {
	                    util_cancelDefault(event);
	                });
	
	                if(self.itemList && self.itemList.length > 0) {
	                   
	                    self._filterDialogSheet.bind(Sheets.Events.TopRowChanged, function (sender, args) {
	                        self._updateHorizontalScrollbar(args);
	                    });
	                   
	                    self._filterDialogSheet.bind(Sheets.Events.CellClick, function (sender, args) {
	                        self._updateFilterItemsStyle(args);
	                    });
	                }
	            },
	            _updateHorizontalScrollbar: function (args) {
	                if(args.oldTopRow > args.newTopRow) {
	                    return;
	                }
	                var self = this;
	                var sheet = args.sheet, spread = sheet.parent, newTopRow = args.newTopRow, viewRowCount = sheet._getViewportRowLayout(1).length;
	                var itemListWidth = self.itemList.width();
	                var colIndex = self._filterDialogColIndex, columnWidth = sheet.getColumnWidth(colIndex);
	                if(spread.options.showVerticalScrollbar) {
	                    itemListWidth -= 22;
	                }
	                var baseWidth = Math.max(sheet.getColumnCount() * columnWidth, itemListWidth);
	                self._isShowHorizontalScrollbar(sheet, baseWidth, columnWidth, newTopRow, viewRowCount);
	            },
	            _isShowHorizontalScrollbar: function (sheet, baseWidth, columnWidth, newTopCount, viewRowCount, data) {
	                var width = 0, contentWidth = 0;
	                var self = this, spread = sheet.parent;
	                var colIndex = self._filterDialogColIndex;
	                var rowCount = newTopCount + viewRowCount;
	                var storage = sheet.outlineColumn._getStorage();
	                var rc = Math.min(rowCount, sheet.getRowCount());
	                for(var i = newTopCount; i < rc; i++) {
	                    var text = (data && data[i].name) || sheet.getText(i, colIndex);
	                    var outlineColumnPosition = storage[i].cellContent.left;
	                    var textWidth = _WordWrapHelper._measureText(text);
	                    contentWidth = textWidth + outlineColumnPosition - baseWidth;
	                    if (contentWidth > 0 && contentWidth > width) {
	                        width = contentWidth;
	                    }
	                }
	                if (width > 0) {
	                    sheet.addColumns(sheet.getColumnCount(), Math.ceil(width / columnWidth));
	                    spread.options.showHorizontalScrollbar = true;
	                }
	            },
	            _updateFilterItemsStyle: function (args) {
	                var self = this, sheet = args.sheet, row = args.row, sheetArea = args.sheetArea, col = self._filterDialogColIndex;
	                self.activeItemIndex = row;
	                sheet.suspendPaint();
	                if(!args.ignoreClick && sheet._currentTarget) {
	                    var cellTypeHitInfo = sheet._currentTarget.cellTypeHitInfo;
	                    var outlineColumnHitInfo = cellTypeHitInfo && cellTypeHitInfo.outlineColumnHitInfo;
	                    var indicator = outlineColumnHitInfo && outlineColumnHitInfo.indicator;
	                    if(!indicator) { 
	                        if(sheet.outlineColumn.getCheckStatus(row, col) === self.dataSource[row].status) {
	                            var outlineColumn = sheet.outlineColumn;
	                            outlineColumn.setCheckStatus(row, self._updateItemCheckStatus(self.dataSource[row].status));
	                        }
	                        self._updateDataSourceStatus();
	                    }
	                }
	                if(sheet._isTouchMode) {
	                    sheet._selectionIndicatorColor("transparent");
	                }
	                var hoverItem = $('.' + FILTER_ITEM_HOVER_CLASS, this._container[0]);
	                arrayHelper_getLength(hoverItem) ? removeCssClass(hoverItem, EXTERNAL_AND_FILTER_ITEM_HOVER_CLASS) : self._clearFilterItemsStyle(sheet);
	                var style = sheet.getStyle(row, col, sheetArea) || new Sheets.Style();
	               
	                var spanEle = $(createElement(DIV));
	                addCssClass(spanEle, FILTER_CLASS);
	                this._container.append(spanEle);
	                var backColor = spanEle.css("backgroundColor");
	                var color = spanEle.css('color');
	                spanEle.remove();
	
	                style.backColor = backColor;
	                style.foreColor = color;
	                sheet.setStyle(row, -1, style);
	                sheet.resumePaint();
	                self._updateCheckedValues();
	                self._setButtonState();
	            },
	            _updateDataSourceStatus: function () {
	                var self = this, sheet = self._filterDialogSheet, outlineColumn = sheet.outlineColumn;
	                var checkedStatus = outlineColumn.getCheckStatus(), index = 0;
	                while(index < checkedStatus.length) {
	                    self.dataSource[index].status = checkedStatus[index++];
	                }
	            },
	            _updateItemCheckStatus: function (oldStatus) {
	                if(oldStatus === 1) {
	                    return 2; 
	                }
	                return 1;
	            },
	            _clearFilterItemsStyle: function (sheet) {
	                var rowCount = sheet.getRowCount(), col = this._filterDialogColIndex;
	                for (var i = 0; i < rowCount; i++) {
	                    var defaultStyle = sheet.getActualStyle(i, col);
	                    if (defaultStyle.backColor || defaultStyle.foreColor) {
	                        defaultStyle.foreColor = defaultStyle.backColor = void 0;
	                        sheet.setStyle(i, -1, defaultStyle);
	                        break;
	                    }
	                }
	            },
	            _updateCheckedValues: function () {
	                var self = this;
	                var checkedStatus = self._filterDialogSheet.outlineColumn.getCheckStatus(), loop = 0, currentValues = self._searchedValues || self._allCheckedValues ;
	                var previewItemsData = self._previewItemsData, data, index = 0;
	                self._allCheckedValues = [];
	                for (var i = 0; i < previewItemsData.length; i++) {
	                    data = previewItemsData[i];
	                    if (index >= currentValues.length) {
	                        break;
	                    }
	                    if (data.key !== currentValues[index++]) {
	                        index--;
	                        continue;
	                    }
	                    var options = data.children, tempStatus = keyword_undefined;
	                    for (var j = 0; j < options.length; j++) {
	                        var option = options[j];
	                        var status = checkedStatus[loop];
	                        if (option.show !== false) {
	                            loop += 1;
	                        }
	                        tempStatus = status || tempStatus;
	                        if (status !== 3 ) {
	                            option.status = status;
	                        }
	                    }
	                    if (tempStatus !== 2 ) {
	                        self._allCheckedValues.push(data.key);
	                    }
	                }
	            },
	            _updateFilterItemState: function (event, isCheckAll) {
	                var self = this, sheet = self._filterDialogSheet, status = filterDialogCheckedStatus[isCheckAll];
	                sheet.suspendPaint();
	                sheet.outlineColumn._setCheckStatusAll(status);
	                sheet.resumePaint();
	                self._updateDataSourceStatus();
	                self._allCheckedValues = isCheckAll ? concatWithEmptyArray(self._searchedValues) : [];
	                self._setButtonState();
	                util_cancelDefault(event);
	            },
	            _setCurrentItemByID:function (id) {
	                switch (id) {
	                    case MAJOR_FILTER_TR:
	                        this._currentSubMenu = this._cellValueSubMenu;
	                        break;
	                    case COLOR_FILTER_TR:
	                        this._currentSubMenu = this._colorFilterSubMenu;
	                        break;
	                    case SORT_COLOR_TR:
	                        this._currentSubMenu = this._colorSortSubMenu;
	                        break;
	                }
	            },
	            _keyDownSubMenu: function (subMenu) {
	                var self = this;
	                self._currentSubMenu = subMenu;
	                self._currentSubMenu._show();
	                self._currentSubMenu._hoverFirstItem();
	            },
	            _enterKeyHandle:function (hoverItem) {
	                var len = arrayHelper_getLength(hoverItem);
	                if(len === 0) {
	                    return;
	                }
	                var self = this, itemID = hoverItem.attr('id'), isSortAscID = itemID === SORT_ASC_TR;
	                if(len === 1) {
	                    if (isSortAscID || itemID === SORT_DEC_TR) {
	                        self._sortByUser(isSortAscID);
	                        self.close();
	                    } else if (itemID === CANCEL_ID) {
	                        self.close();
	                    } else if(itemID === MAJOR_FILTER_TR) {
	                        if(self._currentSubMenu !== keyword_null) {
	                            self._currentSubMenu._confirmHoverHandle();
	                        }else {
	                            self._keyDownSubMenu(self._cellValueSubMenu);
	                        }
	                    }else if(itemID === COLOR_FILTER_TR) {
	                        self._keyDownSubMenu(self._colorFilterSubMenu);
	                    }else if(itemID === SORT_COLOR_TR) {
	                        self._keyDownSubMenu(self._colorSortSubMenu);
	                    }else if(itemID === CLEAR_FILTER_TR) {
	                        self._clearFilter();
	                    }else {
	                        $('#' + OK_ID).trigger(CLICK);
	                    }
	                }else if(arrayHelper_getLength(hoverItem) === 2 || arrayHelper_getLength(hoverItem) === 3) {
	                    self._currentSubMenu && self._currentSubMenu._confirmHoverHandle();
	                }else {
	                   
	                    $('#' + OK_ID).trigger(CLICK);
	                }
	
	            },
	            _processFilterItemList: function () {
	                var self = this, previewItemsData = self._previewItemsData, searchedValues = self._searchedValues, index = 0, filterItemList = [];
	                for(var i = 0; i < previewItemsData.length; i++) {
	                    if(previewItemsData[i].key !== searchedValues[index++]) {
	                        index--;
	                        continue;
	                    }
	                    var options = previewItemsData[i].children;
	                    for(var j = 0; j < options.length; j++) {
	                        var option = options[j];
	                        if(option.show !== false) {
	                            filterItemList.push(option.value || previewItemsData[i].key);
	                        }
	                    }
	                }
	                return filterItemList;
	            },
	            _filterKeyDownUpDownTab: function (keyIndex, hoverItem, isShiftKey) {
	                var self = this, elementList = self.elementList, result;
	                if (!arrayHelper_getLength(hoverItem) && isNullOrUndefined(self.activeItemIndex)) {
	                    result = elementList[0]; 
	                } else { 
	                    arrayHelper_getLength(hoverItem) ? removeCssClass(hoverItem, EXTERNAL_AND_FILTER_ITEM_HOVER_CLASS) : self._clearFilterItemsStyle(self._filterDialogSheet);
	                    var filterItemList = self._processFilterItemList();
	                    if (keyIndex === 4) {
	                        result = self._filterKeyDownUpDown(filterItemList, hoverItem, isShiftKey);
	                    } else {
	                        result = self._filterKeyDownTab(filterItemList, hoverItem, keyIndex);
	                    }
	                }
	                return result;
	            },
	            _filterKeyDownTab: function (filterItemList, hoverItem, keyIndex) {
	                var self = this, elementList = self.elementList, hoverItemElement = hoverItem[0], targetItem, elementLength = elementList.length - 2 ;
	                var navList = concatWithEmptyArray((elementList));
	                var activeItemIndex = self.activeItemIndex || 0, index = 0;
	                for (var i = 0; i < arrayHelper_getLength(filterItemList); i++) {
	                    navList.splice(-2, 0, filterItemList[i]);
	                }
	                var downItemIndex = hoverItemElement ? inArray(hoverItemElement, navList) : elementLength + activeItemIndex, isDownKey = keyIndex === 3 ;
	                if (downItemIndex >= 0) {
	                    targetItem = isDownKey ? navList[downItemIndex + 1] : navList[downItemIndex - 1];
	                    activeItemIndex = activeItemIndex || 0;
	                    index = isDownKey ? downItemIndex + 1 : downItemIndex - 1;
	                    if (inArray(targetItem, filterItemList) >= 0 && arrayHelper_getLength(hoverItem) > 0) {
	                        downItemIndex = isDownKey ? downItemIndex + activeItemIndex : activeItemIndex + (elementList.length - 2);
	                        targetItem = isDownKey ? navList[downItemIndex + 1] : navList[downItemIndex];
	                        index = isDownKey ? downItemIndex + 1 : downItemIndex;
	                    }
	                    while (isDownKey && downItemIndex < arrayHelper_getLength(navList) && self._isElementDisabled(targetItem)) {   
	                        index = downItemIndex + 1;
	                        targetItem = navList[++downItemIndex + 1];
	                    }
	                    if (!isDownKey) {     
	                        while (downItemIndex > 0 && self._isElementDisabled(targetItem)) {
	                            index = downItemIndex - 1;
	                            targetItem = navList[--downItemIndex - 1];
	                        }
	                        if (!targetItem) {
	                            targetItem = navList[arrayHelper_getLength(navList) - 1];
	                        }
	                    }
	                    if (!targetItem) {
	                        targetItem = navList[0];
	                    }
	                }
	                return (typeof targetItem === STRING) ? index - elementLength : targetItem;
	            },
	            _filterKeyDownUpDown: function (filterItemList, hoverItem, isShiftKey) {
	                var self = this, elementList = self.elementList, hoverItemElement = hoverItem[0], targetItem, tabItemIndex;
	                var tabList = concatWithEmptyArray(elementList);
	                var activeItemIndex = self.activeItemIndex || 0;
	                tabList.splice(-2, 0, filterItemList[activeItemIndex]);
	                if (!arrayHelper_getLength(hoverItem)) {
	                    if (isShiftKey) {
	                        targetItem = elementList[elementList.length - 3];
	                    } else {
	                        targetItem = self._isElementDisabled(elementList[elementList.length - 2]) ? elementList[elementList.length - 1] : elementList[elementList.length - 2];
	                    }
	                } else {
	                    tabItemIndex = inArray(hoverItemElement, tabList);
	                    if (tabItemIndex >= 0) {
	                        targetItem = isShiftKey ? (tabList[tabItemIndex - 1] || tabList[arrayHelper_getLength(tabList) - 1]) : tabList[tabItemIndex + 1];
	                        while (isShiftKey && tabItemIndex > 0 && self._isElementDisabled(targetItem)) {    
	                            targetItem = tabList[--tabItemIndex - 1];
	                        }
	                        while (!isShiftKey && self._isElementDisabled(targetItem) && tabItemIndex < arrayHelper_getLength(tabList)) {  
	                            targetItem = tabList[++tabItemIndex + 1];
	                        }
	                    }
	                }
	                if (!targetItem) {
	                    targetItem = tabList[0];
	                }
	                return (typeof targetItem === STRING) ? activeItemIndex : targetItem;
	            },
	            _filterKeyDown: function (event) {
	                var self = this, hoverItem = $('.' + FILTER_ITEM_HOVER_CLASS, self._container[0]), hoverItemId,
	                    keyCode = event.which || event.keyCode, keyIndex = inArray(keyCode, [27 , 13 , 38 , 40 , 9 , 37, 39]);
	                if(hoverItem.length > 0) {
	                    hoverItemId = hoverItem.attr("id");
	                }
	                if (keyIndex === 0 ) {
	                    self.close();
	                    util_cancelDefault(event);
	                } else if (keyIndex === 1 ) {
	                    this._enterKeyHandle(hoverItem);
	                } else if (keyIndex > 4) {
	                    if( keyIndex === 5) {
	                        if(self._currentSubMenu === keyword_null) {
	                            self._setCurrentItemByID(hoverItemId);
	                        }
	                        if(self._currentSubMenu !== keyword_null) {
	                            self._currentSubMenu = self._currentSubMenu._hideMenuHandle();//it may change the _currentSubMenu to be null
	                        }
	                    } else if(keyIndex === 6) {
	                        if(self._currentSubMenu === keyword_null) {
	                            self._setCurrentItemByID(hoverItemId);
	                        }
	                        if(self._currentSubMenu !== keyword_null && !self._currentSubMenu._isNullMenu) {
	                            self._currentSubMenu._showMenuHandle();
	                        }
	                    }
	                    util_cancelDefault(event);
	                } else if(keyIndex > 1 && self._currentSubMenu !== keyword_null && self._currentSubMenu._isShow()) {
	                    if(keyIndex === 2 || (keyIndex === 4 && event.shiftKey)) {
	                        self._currentSubMenu._hoverPrevItem();
	                    } else if( keyIndex === 3 || (keyIndex === 4 && !event.shiftKey) ) {
	                        self._currentSubMenu._hoverNextItem();
	                    }
	                    util_cancelDefault(event);
	                } else if (keyIndex > 1) {
	                    var targetItem = self._filterKeyDownUpDownTab(keyIndex, hoverItem, event.shiftKey);
	                    if (typeof targetItem === "number") {
	                        hoverItem = targetItem;
	                        self._updateFilterItemsStyle({
	                            sheet: self._filterDialogSheet,
	                            row: hoverItem,
	                            sheetArea: 3,
	                            ignoreClick: true
	                        });
	                        self._filterDialogSheet._scrollByMoveCell(hoverItem, self._filterDialogColIndex);
	                        $('#' + FILTER_CHOOSE_AREA).focus();
	                        util_cancelDefault(event);
	                    } else {
	                        hoverItem = $(targetItem);
	                        var id = hoverItem.attr('id');
	                        if(id !== SEARCH_ID && id !== OK_ID && id !== CANCEL_ID) {
	                            hoverItem.find("a").focus();
	                        } else {
	                            hoverItem.focus();
	                        }
	                        addCssClass(hoverItem, FILTER_HOVER_CLASS + ' ' + EXTERNAL_AND_FILTER_ITEM_HOVER_CLASS);
	                        util_cancelDefault(event);
	                    }
	                }
	            },
	            _isElementDisabled: function (ele) {
	                if (typeof ele === STRING) {
	                    return false;
	                }
	                ele = $(ele);
	                if (arrayHelper_getLength(ele) === 0) {
	                    return false;
	                }
	                return !!(ele.hasClass(UI_BUTTON_DISABLED_CLASS) || ele.hasClass(UI_STATE_DISABLED_CLASS) || ele.hasClass(FILTER_BUTTON_DISABLE_CLASS));
	            },
	            _filter: function (filterValues) {
	                var self = this, sheet = self.sheet;
	                if (!sheet) {
	                    return;
	                }
	                try {
	                    sheet.suspendPaint();
	                    var filterButtonInfo = self.filterButtonInfo, rowFilter = filterButtonInfo.rowFilter;
	                    if (!rowFilter) {
	                        return;
	                    }
	                    var column = filterButtonInfo.col;
	
	                    var tableName = rowFilter._table ? rowFilter._table.name() : keyword_undefined;
	                    var cmdOption = {
	                        tableName : tableName,
	                        colIndex : column,
	                        checkedValues : filterValues,
	                        allValuesLength : arrayHelper_getLength(self._allValues)
	                    };
	                    sheet._commandManager().execute({ cmd: 'filterTextSelectAction', sheetName: sheet.name(), cmdOption: cmdOption });
	
	                } finally {
	                    sheet.resumePaint();
	                }
	            },
	            _searchHandler: function () {
	                var self = this, value = $.trim($('#' + SEARCH_ID).val().toLowerCase()), previewItemsData = self._previewItemsData, dataSourceCache = self._dataSourceCache;
	                var i;
	                var checkedItemsObj = {}, searchedActualValues = [];
	                if (value) {
	                    var wildcardCriteria = RegexHelper._getWildcardCriteria(value), searchedValues = [], regex;
	                    if (!wildcardCriteria) {
	                        regex = new RegExp(value.replace(self.rEscape, '\\$&'), 'gi');
	                    }
	                    for (i = 0; i < previewItemsData.length; i++) {
	                        var itemData = previewItemsData[i];
	                        var options = itemData.children;
	                        for (var j = 0; j < options.length; j++) {
	                           
	                           
	                            var option = options[j];
	                            var key = itemData.key;
	                            var v = option.value || key;
	
	                            var matchStr = wildcardCriteria && RegexHelper._getRegIgnoreCase(wildcardCriteria).exec(v);
	                            if (matchStr && matchStr.index === 0 || !wildcardCriteria && (v.search(regex) !== -1)) {
	                                searchedValues.push(key);
	                                searchedActualValues.push(itemData.value);
	                                checkedItemsObj[key] = true;
	                                break;
	                            }
	                        }
	                    }
	                    self._searchedValues = concatWithEmptyArray(searchedValues);
	                    self._allCheckedValues = concatWithEmptyArray(searchedValues);
	                    self._updateItemsLayout(checkedItemsObj, searchedActualValues);
	                } else if (arrayHelper_getLength(dataSourceCache)) {
	                   
	                    for(i = 0; i < dataSourceCache.length; i++) {
	                        if(dataSourceCache[i].status !== 1) { 
	                            dataSourceCache[i].status = 1 ;
	                        }
	                    }
	                    self._searchedValues = concatWithEmptyArray(self._allValues);
	                    self._allCheckedValues = concatWithEmptyArray(self._allValues);
	                    self._initFilterItemsSheet(dataSourceCache);
	                    self.dataSource = dataSourceCache;
	                } else {
	                    self._dataSourceCache = concatWithEmptyArray(self.dataSource);
	                }
	            },
	            _getSortLink: function (id, text) {
	                var $link = $(createElement('a'));
	                $link.attr({
	                    id: id,
	                    href: BLANK_LINK
	                }).text(text).css([DISPLAY, PADDING, 'cursor', MARGIN, 'text-decoration', 'text-align', FONT_SIZE, 'outline', HEIGHT],
	                    [BLOCK, '0 6px', 'default', '0px 0 1px 2px', NONE, LEFT, '12px', NONE, 'inherit']);
	                addCssClass($link[0], FILTER_ITEM_LINK + FILTER_SORT_CLASS + UI_CORNER_CLASS);
	                return $link;
	            },
	            _getSortLinkSpecial: function (id, text, wrap) {
	                var clearText = sR().Clear;
	                var $link = $(createElement('a')).html(clearText.replace("{0}", '"'));
	                $link.attr({
	                    id: id,
	                    href: BLANK_LINK
	                }).css([DISPLAY, PADDING, 'cursor', MARGIN, 'text-decoration', 'text-align', FONT_SIZE, 'outline', HEIGHT, "white-space"],
	                    ['inline', '0 6px', 'default', '0px 0 1px 2px', NONE, LEFT, '12px', NONE, 'inherit', "nowrap"]);
	                wrap.append($link);
	                var maxWidth = wrap.width() - $link[0].offsetWidth;
	                var html, spanText = '<span class="filterName">' + text + '</span><span style="vertical-align: top">"</span>';
	                html = clearText.replace("{0}", spanText);
	                $link.html(html);
	                $(".filterName", $link[0]).css(["max-width", "overflow", "text-overflow", DISPLAY, "vertical-align"], [maxWidth + "px", "hidden", "ellipsis", "inline-block", "text-bottom"]);
	                addCssClass($link[0], FILTER_ITEM_LINK + FILTER_SORT_CLASS + UI_CORNER_CLASS);
	            },
	            _getCheckLink: function (id, text, imageClass) {
	                var imgSpan = createElement(SPAN), textSpan = $(createElement(SPAN)).text(text), linkElement = createElement('a'), $link = $(linkElement);
	                addCssClass(imgSpan, 'gc-check-uncheck-all ' + imageClass);
	                $link.attr({
	                    href: BLANK_LINK,
	                    id: id
	                }).css(['float', MARGIN_LEFT, PADDING, FONT_SIZE, HEIGHT], [LEFT, '7px', '0', '12px', '16px']).append($(imgSpan)).append(textSpan);
	                addCssClass(linkElement, FILTER_CHECK_CLASS + FILTER_CHECK_CLASS + '-style');
	                return $link;
	            },
	            _updateOriginValueTypeNumber: function (value) {
	                var type = getValueTypeForFilterDialog(value);
	                if (type === "date") {
	                    this._originValueTypeCount.Date++;
	                    return;
	                }
	                if (type === "number" || type === "boolean") {
	                    this._originValueTypeCount.Number++;
	                    return;
	                }
	                if (type === "string") {
	                    this._originValueTypeCount.Text++;
	                    return;
	                }
	            },
	            _getDataSourceType: function () {
	                var date = this._originValueTypeCount.Date, number = this._originValueTypeCount.Number, text = this._originValueTypeCount.Text;
	                var count = date + number + text;
	                if (count > date && count > number && count > text) {
	                    return "mix";
	                }
	                if (count === date) {
	                    return "type";
	                }
	                if (count === number) {
	                    return "number";
	                }
	                if (count === text) {
	                    return "text";
	                }
	            },
	            
	            _isNeedGetCheckValues:function (rowFilter) {
	                var result = true;
	                var condition = rowFilter._filterItemMap[this.filterButtonInfo.col];
	                if(condition && condition.length > 0) {
	                    condition = condition[0];
	                   
	                    var isTwoEqualDateRelationCondition = this._isTwoEqualDateRelationCondition(condition);
	                    if(condition.compareType() !== 0  || isTwoEqualDateRelationCondition ||
	                        (condition.compareType() === 0  && condition.conType() === 5 )) {
	                        result = false;
	                    }
	                }
	                return result;
	            },
	            _parse: function (formatterStr, value) {
	                var generalFormatter;
	               
	                if(typeof formatterStr === "string") {
	                    generalFormatter = new GeneralFormatter(formatterStr);
	                } else {
	                    generalFormatter = formatterStr;
	                }
	                return generalFormatter.parse(value + '');
	            },
	            _setColorData : function (cellStyle, fontColorList, cellColorList, theme, row, colorCache) {
	                fillColorList(cellStyle !== keyword_null && cellStyle.backColor, cellColorList, theme, row, colorCache);
	                fillColorList(cellStyle !== keyword_null && cellStyle.foreColor, fontColorList, theme, row, colorCache);
	            },
	            _initData: function (colIndex) {
	                var self = this, rowFilter = self.filterButtonInfo.rowFilter;
	                if (!rowFilter) {
	                    return;
	                }
	                var sheet = self.sheet, allValues = [], checkedItems = [], i,
	                    itemsDic = {}, range = sheet._getActualRange(rowFilter.range), range_col = range.col, cellColorList = {data : {}, colorNumber : 0}, fontColorList = { data : {}, colorNumber : 0}, cellStyle;
	                var checkedItemsObj = {}, theme = sheet.currentTheme(), colorCache = {};
	                var isOutlineColumn = sheet.outlineColumn && sheet.outlineColumn._isOutlineColumn(colIndex);
	                self.hasBlank = false;
	                if (colIndex >= range_col && colIndex < range_col + range.colCount) {
	                    for (i = 0; i < range.rowCount; i++) {
	                        var row = range.row + i;
	                        cellStyle = sheet.getActualStyle(row, colIndex, 3 , false , false , true);
	                        var isPositiveRowHeight = sheet.getRowHeight(row) > 0;
	                        var isNeedCheckColorValue = isPositiveRowHeight || !rowFilter.isFiltered()  || rowFilter._isRowNotFilteredOutByOtherColumn(row, colIndex) ;
	                        if(isNeedCheckColorValue) {
	                            this._setColorData(cellStyle, fontColorList, cellColorList, theme, row, colorCache);
	                        }
	
	                        self._getFilterData(itemsDic, checkedItemsObj, allValues, checkedItems, row, colIndex);
	                    }
	                }
	                self._allCheckedValues = checkedItems;
	                self._cellColorList = cellColorList;
	                self._fontColorList = fontColorList;
	                var dataTypePriority = {date: 0, number: 1, string: 2, boolean: 3, blank: 4};  
	                if(!isOutlineColumn) {
	                    allValues.sort(function (a, b) {
	                        var aValue = a.value, bValue = b.value, aValueType = getValueTypeForFilterDialog(aValue), bValueType = getValueTypeForFilterDialog(bValue);
	                        if (aValueType !== bValueType) {
	                            if (dataTypePriority[aValueType] < dataTypePriority[bValueType]) {
	                                return -1;
	                            }
	                            return 1;
	                        }
	
	                       
	                        if (aValueType === 'date' && bValueType === 'date') {
	                            var aYear = aValue.getFullYear(), bYear = bValue.getFullYear();
	                            if (aYear < bYear) {
	                                return 1;
	                            } else if(aYear > bYear) {
	                                return -1;
	                            }
	                        }
	                        if (aValue > bValue) {
	                            return 1;
	                        }
	                        return aValue < bValue ? -1 : 0;
	                    });
	                }
	                var allActualValues = [];
	                self._allData = allValues;
	                allValues.forEach(function (item) {
	                    allActualValues.push(item.value);//store the actual value, such as the date, boolean...
	                    self._allValues.push(item.text);//// store the text
	                });
	
	                self._searchedValues = concatWithEmptyArray(self._allValues);
	                self._previewItemsData = self._processPreviewItemsData(colIndex, checkedItemsObj, self._allValues, allActualValues);
	                self._dataSourceCache = self.dataSource;
	            },
	            _getFilterData: function (itemsDic, checkedItemsObj, allValues, checkedItems, row, col) {
	                var self = this, sheet = self.sheet, rowFilter = self.filterButtonInfo.rowFilter;
	                var text = sheet.getText(row, col), value = sheet.getValue(row, col);
	                text = text ? text.trim() : text;
	                var blankString = sR().Blanks, isPositiveRowHeight = sheet.getRowHeight(row) > 0;
	                var isNeedGetCheckValues = self._isNeedGetCheckValues(rowFilter), isOutlineColumn = sheet.outlineColumn && sheet.outlineColumn._isOutlineColumn(col);
	                var formatterStr = sheet.getFormatter(row, col);
	                if(formatterStr) {
	                    value = self._parse(formatterStr, value);
	                }
	                self._updateOriginValueTypeNumber(value);
	                if(self._originValueTypeCount.Date === 1) {
	                    self._dateFormatter = self._generateDateFormatter(formatterStr);
	                }
	
	                var checkedCondition = isNeedGetCheckValues
	                    && ((isPositiveRowHeight || !rowFilter.isFiltered(col))
	                    || (isOutlineColumn && sheet.getRowVisible(row, 3 , true ) && !rowFilter._isRowfilteredOutByColumn(row, col)));
	                if (text === '' &&
	                    (isPositiveRowHeight 
	                    || !rowFilter.isFiltered() 
	                    || rowFilter._isRowNotFilteredOutByOtherColumn(row, col) )) {
	                    if (!self.hasBlank) {
	                        self.hasBlank = true;
	                        allValues.push({text: blankString, value: value});  
	                        if (checkedCondition) {
	                            checkedItems.push(blankString);  
	                            checkedItemsObj[blankString] = true;
	                        }
	                    }
	                } else if (!itemsDic[text]) { 
	                   
	                    if (sheet.getRowVisible(row, 3 , true) && sheet._getActualRowHeight(row)) {
	                        if (checkedCondition) {
	                            checkedItems.push(text);
	                            checkedItemsObj[text] = true;
	                        }
	                        if (isPositiveRowHeight || !rowFilter.isFiltered()  ||
	                            rowFilter._isRowNotFilteredOutByOtherColumn(row, col) ) {
	                            allValues.push({text: text, value: value});
	                            itemsDic[text] = true;
	                        }
	                    }
	                }
	            },
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	           
	            _processPreviewItemsData: function (colIndex, checkedItemsObj, allValues, allActualValues) {
	                var self = this, type, value, data = [], dataSource = [], year, month, preYear, preMonth, status = false, i, currentData, dateInfo, childrenInfo;
	                var sheet = self.sheet, range = sheet._getActualRange(self.filterButtonInfo.rowFilter.range);
	                var outlineColumn = sheet.outlineColumn;
	                if (outlineColumn && outlineColumn._isOutlineColumn(colIndex)) {
	                    for (i = 0; i < allValues.length; i++) {
	                        status = filterDialogCheckedStatus[!!checkedItemsObj[allValues[i]]];
	                        currentData = buildTextOrNumberData(sheet, allValues[i], allActualValues[i], range.row + i, colIndex, status);
	                        data.push(currentData);
	                        childrenInfo = currentData.children[0];
	                        if (childrenInfo && childrenInfo.show !== false) {
	                            dataSource.push({
	                                name: childrenInfo.value || currentData.key,
	                                level: childrenInfo.level,
	                                status: childrenInfo.status
	                            });
	                           
	                        }
	                    }
	                } else {
	                    for (i = 0; i < allValues.length; i++) {
	                        value = allActualValues[i];
	                        type = getValueTypeForFilterDialog(value || allValues[i]);
	                        switch (type) {
	                            case 'date':
	                                status = filterDialogCheckedStatus[!!checkedItemsObj[allValues[i]]];
	                                currentData = buildDateData(self._dateFormatter, allValues[i], allActualValues[i], status);
	                                dateInfo = currentData.children;
	                                year = dateInfo[0].value;
	                                month = dateInfo[1].value || dateInfo[0].value;
	                                dateInfo[0].show = dateInfo[1].show = true;
	                                if (year === preYear) {
	                                    dateInfo[0].show = false;
	                                    if (month === preMonth) {
	                                        dateInfo[1].show = false;
	                                    }
	                                }
	                                preYear = year;
	                                preMonth = month;
	                                data.push(currentData);
	                                childrenInfo = currentData.children;
	                                for (var j = 0; j < 3; j++) {
	                                    if (childrenInfo[j] && childrenInfo[j].show !== false) {
	                                        dataSource.push({
	                                            name: childrenInfo[j].value || currentData.key,
	                                            level: childrenInfo[j].level,
	                                            status: childrenInfo[j].status
	                                        });
	                                    }
	                                }
	                                break;
	                            case 'number':
	                            case 'string':
	                            case 'boolean':
	                            case 'object':
	                                status = filterDialogCheckedStatus[!!checkedItemsObj[allValues[i]]];
	                                currentData = buildTextOrNumberData(sheet, allValues[i], allActualValues[i], range.row + i, colIndex, status);
	                                data.push(currentData);
	                                childrenInfo = currentData.children[0];
	                                if (childrenInfo && childrenInfo.show !== false) {
	                                    dataSource.push({
	                                        name: childrenInfo.value || currentData.key,
	                                        level: childrenInfo.level,
	                                        status: childrenInfo.status
	                                    });
	                                }
	                                break;
	                            default:
	                                return;
	                        }
	                    }
	                }
	                self.dataSource = dataSource;
	                return data;
	            },
	            _generateDateFormatter: function (formatStr) {
	                if(isNullOrUndefined(formatStr)) {
	                    formatStr = '';
	                }
	                var formatter = new GeneralFormatter(formatStr);
	                var formatters = formatter.formatters;
	                if(!formatters || formatters.length <= 0) {
	                    return;
	                }
	                var customFormatter = formatters[0];
	                if(!customFormatter) {
	                    return;
	                }
	                var localeIDFormatPart = customFormatter.localeIDFormatPart;
	                var dbNumberFormatPart = customFormatter.dbNumberFormatPart;
	                var localeID = localeIDFormatPart && localeIDFormatPart._locateID;
	                var newFormatterStr = Common.CultureManager._getFilterDialogFormatterStr(localeID, trimCommentedChar(formatStr));
	                var localeIDToken = (localeIDFormatPart && localeIDFormatPart._originalToken) || '';
	                var dbNumberToken = (dbNumberFormatPart && dbNumberFormatPart._originalToken) || '';
	                return new GeneralFormatter(dbNumberToken + localeIDToken + newFormatterStr);
	            },
	            _initFilterItemsLayout: function (data) {
	                var self = this, colIndex = 0, itemList = self.itemList;
	               
	               
	                var filterItemsLayoutPreviewSpread = new Sheets.Workbook(itemList[0]);
	                self._filterDialogSpread = filterItemsLayoutPreviewSpread;
	                self._filterDialogSheet = filterItemsLayoutPreviewSpread.getActiveSheet();
	                self._filterDialogColIndex = colIndex;
	                self._initFilterItemsSheet(data);
	                self._updateDataSourceStatus();
	            },
	            _initFilterItemsSheet: function (data) {
	                var self = this, spread = self._filterDialogSpread;
	                var itemList = self.itemList, baseWidth = itemList.width(), baseHeight = itemList.height();
	                var defaultRowHeight = 20, defaultColumnWidth = 10;
	                if(self._filterDialogSpread.sheets.length > 0 ) {
	                    self._filterDialogSpread.removeSheet(0);
	                    self._filterDialogSheet = keyword_undefined;
	                }
	                spread.addSheet(0, new Sheets.Worksheet("sheet1"));
	                var sheet = self._filterDialogSheet = spread.sheets[0];
	                spread.suspendEvent();
	                sheet.suspendPaint();
	                var spreadOptions = spread.options, sheetOptions = sheet.options;
	                spreadOptions.allowContextMenu = false;
	                spreadOptions.showHorizontalScrollbar = false;
	                spreadOptions.showVerticalScrollbar = false;
	                spreadOptions.scrollbarMaxAlign = true;
	                spreadOptions.tabStripVisible = false;
	                spreadOptions.allowUserResize = false;
	                spreadOptions.allowUserDragDrop = false;
	                spreadOptions.allowUserDragFill = false;
	                spreadOptions.allowUserZoom = false;
	                spreadOptions.grayAreaBackColor = 'white';
	                sheetOptions.colHeaderVisible = false;
	                sheetOptions.rowHeaderVisible = false;
	                sheetOptions.selectionBackColor = "transparent";
	                sheetOptions.selectionBorderColor = "transparent";
	                sheetOptions.gridline = {showVerticalGridline: false, showHorizontalGridline: false};
	                sheetOptions.isProtected = true;
	                sheet.defaults.rowHeight = defaultRowHeight ;
	                sheet.defaults.colWidth = defaultColumnWidth ;
	                sheet.setRowCount(data.length);
	
	                var defaultStyle = new Sheets.Style();
	                defaultStyle.font = '12px "Segoe UI", Calibri, Thonburi, Arial, Verdana, sans-serif, "Mongolian Baiti", "Microsoft Yi Baiti", "Javanese Text"';
	                sheet.setDefaultStyle(defaultStyle);
	                sheet.outlineColumn.options({
	                    columnIndex: self._filterDialogColIndex,
	                    showIndicator: true,
	                    showCheckBox: true
	                });
	                sheet.showRowOutline(false);
	                sheet.setColumnCount(1);
	                self._setValueItemsLayout(sheet, data);
	
	               
	                if ((defaultRowHeight * data.length) > baseHeight) {
	                    spread.options.showVerticalScrollbar = true;
	                    baseWidth -= 22;
	                }
	
	               
	                var viewRowCount = sheet._getViewportRowLayout(1).length;
	                self._isShowHorizontalScrollbar(sheet, baseWidth, defaultColumnWidth, 0, viewRowCount, data);
	
	               
	                if(!spread.options.showVerticalScrollbar && spread.options.showHorizontalScrollbar) {
	                    baseHeight -= 22;
	                    if ((defaultRowHeight * data.length) > baseHeight) {
	                        spread.options.showVerticalScrollbar = true;
	                        baseWidth -= 22;
	                    }
	                }
	
	                var columnCount = Math.ceil(baseWidth / defaultColumnWidth);
	                sheet.addColumns(sheet.getColumnCount(), columnCount - 1);
	                sheet.outlineColumn.refresh();
	                sheet.resumePaint();
	                spread.resumeEvent();
	            },
	            _setValueItemsLayout: function (sheet, data) {
	                if (data.length < 0) {
	                    return;
	                }
	                var self = this, level = 0, status, r = 0, outlineColumn = sheet.outlineColumn, colIndex = self._filterDialogColIndex;
	                sheet.suspendPaint();
	                sheet.autoGenerateColumns = false;
	                sheet.bindColumn(0, "name");
	                sheet.setDataSource(data);
	
	                var dataSourceType = self._getDataSourceType();
	                if ((dataSourceType === "text" || dataSourceType === "number") && !(outlineColumn && outlineColumn._isOutlineColumn(self.filterButtonInfo.col))) {
	                    sheet.getCell(-1, colIndex).textIndent(level);
	                } else {
	                    for (r = 0; r < data.length; r++) {
	                        level = data[r].level;
	                        sheet.getCell(r, colIndex).textIndent(level);
	                    }
	                }
	                outlineColumn.refresh();
	                for (r = 0; r < data.length; r++) {
	                    status = data[r].status;
	                    outlineColumn._internalSetCheckStatus(r, status);
	                }
	                sheet.resumePaint();
	            },
	            _updateItemsLayout: function (checkedItemsObj, searchedActualValues) {
	                var self = this;
	                self._processPreviewItemsData(self.filterButtonInfo.col, checkedItemsObj, self._searchedValues, searchedActualValues);
	                self._initFilterItemsSheet(self.dataSource);
	            },
	            _sortByUser: function (isAsc) {
	                var self = this, filterButtonInfo = self.filterButtonInfo, rowFilter = filterButtonInfo.rowFilter, sheet = self.sheet;
	                if (!rowFilter || !sheet || !sheet._canDoSort()) {
	                    return;
	                }
	                var colIndex = filterButtonInfo.col,
	                    args = {
	                        sheet: sheet,
	                        sheetName: sheet.name(),
	                        col: colIndex,
	                        ascending: isAsc,
	                        cancel: false
	                    };
	                sheet._trigger(Events.RangeSorting, args);
	                if (args.cancel === false) {
	                    var tableName = rowFilter._table ? rowFilter._table.name() : keyword_undefined;
	                    var cmdOption = {
	                        tableName : tableName,
	                        colIndex : colIndex,
	                        isAsc : isAsc
	                    };
	                    sheet._commandManager().execute({ cmd: 'sortFilter', sheetName: sheet.name(), cmdOption: cmdOption });
	                   
	                    sheet._trigger(Events.RangeSorted, args);
	                }
	            },
	            _sortByColor: function (color, isBackColor, isAsc) {
	                var self = this, filterButtonInfo = self.filterButtonInfo, rowFilter = filterButtonInfo.rowFilter, sheet = self.sheet;
	                if (!rowFilter || !sheet || !sheet._canDoSort()) {
	                    return;
	                }
	                if(color !== "") {
	                    color = formatColor(color, sheet.currentTheme());
	                }
	                isAsc = (isAsc === keyword_undefined) ? false : isAsc; 
	                var colIndex = filterButtonInfo.col,
	                    args = {
	                        sheet: sheet,
	                        sheetName: sheet._name,
	                        col: colIndex,
	                        ascending: isAsc,
	                        color: color,
	                        isBackColor: isBackColor,
	                        cancel: false
	                    };
	                sheet._trigger(Events.RangeSorting, args);
	                if (args.cancel === false) {
	                    var tableName = rowFilter._table ? rowFilter._table.name() : keyword_undefined;
	                    var cmdOption = {
	                        tableName : tableName,
	                        colIndex : colIndex,
	                        isAsc : isAsc,
	                        color: color,
	                        isBackColor: isBackColor
	                    };
	                    sheet._commandManager().execute({ cmd: 'sortFilter', sheetName: sheet.name(), cmdOption: cmdOption });
	                    sheet._trigger(Events.RangeSorted, args);
	                }
	            },
	            _setButtonState: function () {
	                var $okButton = $('#' + OK_ID), diabledClassName = UI_BUTTON_DISABLED_CLASS + UI_STATE_DISABLED_CLASS + ' ' + FILTER_BUTTON_DISABLE_CLASS;
	                if (arrayHelper_getLength(this._allCheckedValues) > 0) {
	                    $okButton.prop('disabled', false);
	                    removeCssClass($okButton[0], diabledClassName);
	                } else {
	                    $okButton.prop('disabled', true);
	                    addCssClass($okButton[0], diabledClassName);
	                }
	            }
	        };
	        $.extend(_FilterDialog.prototype, prototype);
	
	        _FilterDialog._getImageSrc = function (state) {
	            if (state === 0 ) {
	                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVX" +
	                    "DjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4" +
	                    "EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/" +
	                    "EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAES" +
	                    "ggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2At" +
	                    "qKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDr" +
	                    "FiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1" +
	                    "akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rf" +
	                    "q79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiF" +
	                    "I8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgK" +
	                    "fep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybu" +
	                    "IC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/P" +
	                    "bFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwD" +
	                    "a0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22" +
	                    "gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlw" +
	                    "G3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAA" +
	                    "Xb5JfxUYAAAMOSURBVHjaXJNdaJRHFIbfM7PfGremUTfkpxgpiheiBOmFtYUgRXNRqNnd75sEhBoIKhrwQpFUUSsihhIQ41+FNrUGqYhRY43STZqgARNRTIzRaFqz6xJTtals3K8xRQ3x7UV215+LB2bOxTNn3jMDs+mEIgmS+LwQiqSQ9JG03FHX54666pn7TLmJEZVIjCCRGMkYGxvNiI9FvaENZzLw/Pmqt" +
	                    "CDFV/4WkERw8TI03K6XqqrNWLBgPoafDmNwMCbd3TestpMDHpJAuIcWSZjSUrnS0SFOWamXJLpuDYAkAiYAkioYDCIej0+Lx12QrervFxOemjWfCvIyIcmTVeLVC1986OkUklhRtlgutLYrkpnOKlt1dl0BSfTHmnCnm5oTm0AS6I0xLaDLrK1PusTp/cb7/rUAyH8kSL+Vqt0ebpuGP699LCRROAdqf/suGfo" +
	                    "rCpLi4DMpAOQQLAEgfE2sRDZIv5cknGxi74HDFnZ/32olk9f//vOTPIj05ZnKZpp14QlnfZgpTOXvNGsvjrvuH9MnOwAOYlhQ/UPYmxRkJVvzPHw8JF8EdrKoZEeapSt2cHDo4Sxn7R0hiV8/hEQe3Ad21jZNJQnbDklSBBas0ddvRj2Fi4qZIhaL+Q3ni8N0ZohGe4Dv6sKZfFP0kvkSWLZdGvLpiUTuTS9cV" +
	                    "MxI5H5+fz+UfXyOto/Ns5bUL7dyjsBjTsKDbbVnM0iqYNHXYi9ZLiSlaRbFn089zlzvwN1IzkDlmDhfdiin5KgOBY5qO9iojX1K9+VRcOCXnlySsFkOkjj/WGschtR0Kt/Ga9D2aYj5DWKaIeYSxTlFMS2T66udBDbXHS94Z97ZUB8Ayt7+iVVddlkzl5LCvrklvQ9dr1fnF0IQbng5O/VQsmAJSfnxSLuqCG3" +
	                    "Rxxpfz3xbXv0IEkzm5YR7lXOCGs6+PVNJYjaQnoKwSgBIDSqkjjPUuv3QLP9ImW+hG1/lKJtzp5jaCmW2nrNAUpOUkqrWrJUb23T5rhZf0eoWhbeEKX7O4eTPHe8DSTjF59T/AwCfnhbaDaIICgAAAABJRU5ErkJggg==";
	            } else if (state === 1 ) {
	                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVX" +
	                    "DjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4" +
	                    "EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/" +
	                    "EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAES" +
	                    "ggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2At" +
	                    "qKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDr" +
	                    "FiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1" +
	                    "akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt" +
	                    "1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8y" +
	                    "wWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3" +
	                    "U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8" +
	                    "hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk" +
	                    "1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM" +
	                    "99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3" +
	                    "lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw" +
	                    "83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m" +
	                    "978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H" +
	                    "5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALLSURBVHjadJNtaNVlGMav+/kfjy3GTDfcsQW1CMrhWSZ6AsmXmflFDts5/0eYA52i02M6tdBIRQQJBLX8Yg4xYlMEJaHphzx" +
	                    "KzoiaZptN0MBtacyXoYIobUgT/fXhtOMS+vBw89wXXPfLdd0CLNxwyACF648YYH7tnuEYAeQbv3CA/EeHBcivazbAUo1fv6hwfYtJEjDy2XP//8vpGbA9ZiE7xQ6USs3S7sUx9YHNbMqYn1IerGmQ3pr8uYXsNUAqnZ+LvqHJAA2BeIoGT6DJbMqBbAwArR77vs4/u" +
	                    "hOje9BxlXEcww13pXDvtwaoes1MB6iz8xfxGkIIiLCUIEXaDTxiFJOmKp5YxDcciS6jVpRi8g1H87PVgLYslwO0GYzf+x377ubwXoLKafXEE/WUTfC9tBIhwNTJdAPkw4R1fdkkOmJW1/LAYNBV54iDJK8HH7NPd+/9MTqeWER//62YHxrrJvCDydd99Z/tpjLboz7" +
	                    "znQF2/vSfufwY9Ne1e9r9JtHKaUvxqWY3UgXX23dNbccOlhQUFxUN9GweVsaWIQNZRfkeByidrnDxRD19N29U5AnChkMO0BMYAwRA4GkPAKuZc/2F8JWTDlB716sCIm9PXcz1K9+/lCc4erstABQmP3U8LBvlV2VJr8yyIHMSv+LUk1QmCzADBjQnrB0dT9TT0/243" +
	                    "NfqXx8szwaAzq6Q1bDJnWnrmlKV3EZVchvvJbfQ2nqmDLDqD0/YXFqs8t0l/Haxu3j+vOPDO9ifu4P9jwPAeSk6RE/RpHc+4KefL8waYWEDrOPX9ol/cycA1KH7pvCTsxFAPxZGXQ1YmDhlgNIHsoWQd5wONw4JxgfhwmeKXSUjXbq0Oi/j80el28UjqpdqK1ivcCB" +
	                    "7KJwXTuHKcwWAPtPCoJkShy7kjKU3dIXLAvQyVdq1C3WVXNbE2RgUOphuqVXH3T8DAFTcPgRQEEuLAAAAAElFTkSuQmCC";
	            } else if (state === 2 ) {
	                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWF" +
	                    "BURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEI" +
	                    "iAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50" +
	                    "cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBW" +
	                    "K8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhE" +
	                    "LTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBo" +
	                    "mxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMC" +
	                    "aIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgt" +
	                    "Uq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73Vwn" +
	                    "UCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7" +
	                    "ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun" +
	                    "3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQW" +
	                    "NBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5" +
	                    "JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFK" +
	                    "uUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk6" +
	                    "26s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXB" +
	                    "aKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509" +
	                    "E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8c" +
	                    "fvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAJKSURBVHjanJJfSJNhFMaf9/02R9MFCVZLUOgfpLMCmwrd7KIIm6X4fXoTY1oXltaN86oEi" +
	                    "4xodtNNeNMHJZQ0gpDQmUKEyUAiyKCFW4PNtSFMoyKJSp4uputbJIUX5+K855zfe85zDkhiza4u2+HXn4M64dcBvw5BTotLtyDJ49KvI2fapK/Q/8qkwAjYiEHj4rrBG+ft4p+AB51f8pKazxxDY/djhLYj95bJLKG5fR+w5whUVxNUtR6qOiHUrmABNH3AkgcoqsB" +
	                    "M11O56gvVUy2GV6CQNA/WjFdkMpnyhYV0NjZOAf6ksQMZCGQL3e526fUWm0kKrlAJRT7CUXeac+Gp3bRTaJpHXsReoLl3yGQAKPUtlaJh8yHxKI0s+C3xLHHXwjIqlbXtTKc/lKTScaRSFItMAWReB4WtdfdMJCVJTI18xihLNzFCyWXC4WxjMpksjiOK5BytjXIGU" +
	                    "H0XCowjkFsESeF27BQLSy9F/2FK0ip6wa2VtV7OxxNF8XgciUQCKpMCZFoaRdQ6PXIHshvQDtACUJDARA/tVTVe6rHrSs97mMPh16j3vQECvpKc4iSLWzrGqXWMrahnx6h1jP5oPRf8Ho1FLA5nG/c7vayq8TIajdoikRi0nqCEdn9gDaCQLNVOXZOuk310nbhCV0M" +
	                    "vhx+OWlbhykGnh+Hou20sy2rUdLtbAJxUfs9PwW9PQM4qjuqjfDEd6ssX+VP56kdZ/+s80H9nZJcBYDxT6x8b+vspDw4Fbf+TuC7gpn7ZtoFCSdJE0vxrAN8Jcr/DWZzEAAAAAElFTkSuQmCC";
	            } else if (state === 3 ) {
	                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWF" +
	                    "BURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEI" +
	                    "iAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50" +
	                    "cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBW" +
	                    "K8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhE" +
	                    "LTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBo" +
	                    "mxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMC" +
	                    "aIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgt" +
	                    "Uq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73Vwn" +
	                    "UCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7" +
	                    "ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun" +
	                    "3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQW" +
	                    "NBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5" +
	                    "JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFK" +
	                    "uUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk6" +
	                    "26s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXB" +
	                    "aKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509" +
	                    "E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8c" +
	                    "fvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAMuSURBVHjaZJN/aNR1GMefz+f7/d6P3aZGDGVKERLDbXdMJAQhlr+ujWo62g5DpUBiEyJjp" +
	                    "xi0ZRtyDSQvV0cDd2uw213b1EHiFjbGZq5bIbc5dTuyybRyK+ZCDrG0evWHdwfWHx8+PDwPz/vzeb2fR451DGvpQB2ODJvnP24zDkewD7Zct6h9qD1j4TzPWNgsip80isbCxuS7vzinGm5aZwcwbwVPGoAhgAIEsAAN2NKxSscmYKRvE1iRPrY3Vt7Ski4WQKaJOmb" +
	                    "jyF3WS//3jfr4hVXGEA55J5aXc+ZMdF0yOZWbFtCAKtx5zCUQLQBk32svPFJ8eHN16u+fCn6fv+MErKWlRWdvPzr9QpUVnIroxravlYz0tTvWdi9XRFGA6ugKOMPh7qHu7u5Ue3s7ra2tBIMnaG4+Sl1dHTU1NZSXl7P42x39zRxKYl82mYD8Q0wA8bjFmv855Xqzd" +
	                    "u/swsICDx78xfz8r0xMXKa+/iBer5fx8W+PDi22PjH43pKSoi2bzIS+reVlUYCVn18q11hl9vb2GIFAgFQqxczMDKFQCK/Xy8WLF4ozkN2e00o8O07YA1KpxCUCyKYSUX1fxDQgc3NzRjAY/DMej+Pz+ejpiTkzAAEpqfpEJHeP2PZJXO32VBsbKryydY3IPZB1a3I" +
	                    "VIH6/n1AoREVFBWmQjzknK7aLHm4bWXs5cel48uq0ziQGolE9e/uG8vsPceDttygrK8s2cBfkZ9zQ8syGbeaVyQmp3v8VNXWDvFo3SPX+8/hqzxEPjqiD9X5eqqoiN8fFjzeu5wHidh9xZTjIgZr1BqAaWi6Zm3e8z/OVDZS90kBv74AdUH7/IbZu3oJps0h8N7N62" +
	                    "IXpLt2VnVbZWfKc+jTx+aM/3bti85RuZ3RsvBjQxFgWO9VnTSebzB+SMyvhtMMTFsv9+l4r26Czq0sxcV9F+3eprnOJwumr14ozpMMfnLV/duQjPdeDmiTiaGrutLs3Nhjujc86sxD/uHs/DxCPjFrbXly0N7ZEbR9GcPb0jz4NS/q/1P/nwlOFlYpOrZ4UkeUiOt8" +
	                    "nRk6xyGNzT3YXTGBZeqEcgP53ACxeTBjELwuFAAAAAElFTkSuQmCC";
	            } else if (state === 4 ) {
	                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWF" +
	                    "BURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEI" +
	                    "iAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50" +
	                    "cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBW" +
	                    "K8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhE" +
	                    "LTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBo" +
	                    "mxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMC" +
	                    "aIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgt" +
	                    "Uq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73Vwn" +
	                    "UCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7" +
	                    "ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun" +
	                    "3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQW" +
	                    "NBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5" +
	                    "JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFK" +
	                    "uUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk6" +
	                    "26s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXB" +
	                    "aKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509" +
	                    "E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8c" +
	                    "fvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAMNSURBVHjalJNfaFt1FMfP796bm9hublCwa93AVd3W5d67ddisFFw1lovUl7r0jx2rWWW6p" +
	                    "rpCkzfrUwjVFx0LwSrYPtiO0YJPDsuwIOJKq1PL0q43iZ3OuUp04p8owmbl40PXMgaCPnzhcPjCOef7PV8BxD6WETrKjXcviUbjTlW870/ta9mqfiqv1kuRQePjk68pkj4FSfX66HRA8ujfDPapvveWN4n1xKAC5H9CB3SRo767m9uhvRxQUGXAEXOt3uCodViWpT4" +
	                    "Yi+tC1Rrhj99/luV8QQ43unrkxWaNVSqvXSNgHSeQSqU2A4Zt2xUdHR3bp6amwp8uTNU91jRgij2PAWg1da+sTwmeGTv768TExN8jIyOk0xlOnTpNMpkiFovR3t6O67rcuPHDJkCtr6U7zVH/gffPKrwravLzC75EIkGxWOTWrVWKxR+Zn79EPB7HdV3m5uYaAK12/" +
	                    "xfmxm0P1uwW62D36p77nzdXVr4Txwn5h4aGVkqlEp6XJ5PJ4LouMzMzDYAGiPXkGwGJLGIAyqmPYod6sEM9vziRF0xALMvS0+n0zdnZWTo7O5mcnNwHaNevi27bqN0v+w1pWyj5AOUEjygn1I3VeLzaund/xfj4uAASi8WWM5kMLS0tAAYgV69+K5cvvyq/zZ7TpG1" +
	                    "hzZaqbZbsDR3DPnSi2n6ka0uhUJB8Pt+QSCTo7++nqamJ204YXV1PG5aF2nFxUgn7PlGAWIefVXYoihVufcBWorLZrOTz+YMDAwN/tba2UlZWRi6Xq7itmQbb9JnU25qMvvmRAKrmoafEqY/edOqf2bljV/iebDYrgPT29q6Ew2FM06RQKFQMDw+L4ziabaP3nXwpI" +
	                    "By9oACVnBblHOh52N4Vqaxr7jYAFQwGty4uLm72PE/3PK8yt+QZuawnjgSN0TOiDj36nCmP9364pjiY1hJ67RX8F5dMBUjtW7Xav+Xh3PRnIiK6CF/qd/66886YHvW3Sfh8lQHfy11Z2MCegBgioknbCZQTPr1l71di/IcUqjsgLfHzvn8GACNDKumTxWELAAAAAEl" +
	                    "FTkSuQmCC";
	            } else if (state === 5 ) {
	                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWF" +
	                    "BURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEI" +
	                    "iAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50" +
	                    "cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBW" +
	                    "K8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhE" +
	                    "LTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBo" +
	                    "mxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMC" +
	                    "aIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgt" +
	                    "Uq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73Vwn" +
	                    "UCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7" +
	                    "ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun" +
	                    "3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQW" +
	                    "NBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5" +
	                    "JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFK" +
	                    "uUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk6" +
	                    "26s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXB" +
	                    "aKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509" +
	                    "E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8c" +
	                    "fvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAANBSURBVHjaXJNfSGR1HMXP73fvdcYdo7Vy1KRlZ9DdnOvv5uTODK0s1mxDyKIYSRYoUwQik" +
	                    "kgzPUS0RuW6QRCEuIiM/XuxNdiH6m17WnZFCMSHtjuOszONf0ZnGgW1iLbw9DBl0sPhy3k5HDjfD0h6w/VvSJJC8a5sOPeUYQ1TIjAuPOc+kN6Kae2JthodGBCVrSEdpmXAd8pJUrb2julgiWgJ9MMXABIXYADApQA0ACLc8Jjg9bAkKbhbD5LimDTgNQn15sc6SZD" +
	                    "1onyPZIAUSyQOSS124oLzDxL7hwRJjaTIFbYcUJ5xB0lYp29oZ8+OypZnPhfvkXiHdGz8nHHs7++6e+vede6UiiiVio69vR2v1+2S5slqQRJ4XvdXkBS7O+uuUv43bO79UvPZp4nfr8/N/Tk7O8urVz9cu3x5zH6x76Xvuru7f+zq6joIhUKFYrHYSBJA4yVBUm5sb" +
	                    "WPm15nqH1bvOpRScnBwcL1QKPD+/b+4vV3k0tIy4/E4I5EIFxcXu0nKckDwWUlSV6peqGCUW/mvJUmoNr82MTHBg4MD2rbNqakpRiIR3r59a5ykzOc3QBJob5txkZSbuQ00h/q5ub7htZSJ9NYmlDLF5OQkFxYW2NfXx/n5+YskhWk2G0p9IV5BXgDBAZ1k5Z07tx6" +
	                    "wAlHmcjlHjrUim13D8vIaYrEYr12bZmdnJ0k6ygvVHi0GOD2SpHGPhApGmclkKjKZ15HJpHHzJrV4PM6RkRF2dHQwm83WeTweMTw8cCwA1YKkUwWjVMEofaFXeS99w1CksKwWIxaLsaenh1VVVUyn0yf8fmBoKCpIoqeBAr3n50DywdXVlWorEGUqufp0imnpM8eEa" +
	                    "ZpaPB5nOBymrutMpVKuM2dGdQvjGh+icfFxCCA0YJB0tKC9Mpn8qTKZhLSS0BOJUWmaprBtu8K2bW1lZeVR27alUq3SwpDBh2t1fAUN/eepkYfCOvW26/grWxNB6XukvYJJwgKE+c1zUs270TQdkmq4WeKtTwS+hETiCgUJafrb/89CWTU9/8JT9k2UnP7HN1Ag+OQ" +
	                    "V8Ps6Yb78vigj/a08ahGCaGzql/zIrbmhy/9IzAmSztMvzJz8ewAvdf7cUVI5hQAAAABJRU5ErkJggg==";
	            } else if (state === 6 ) {
	                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAABy0lEQVR42pyST2gTQ" +
	                    "RTGv9nEpCnqTasHES8VLCioiFDIYYum+I/ebFXQm1BbsdSDhKgoXhS8tLQSqAhexIInETwJIqJiexJEZXupwRJNbRsy2Z3dzHxesjGEChs/eMx7A+837817giQAYCD3cZuScqG8Wtj19tG5n/iHhBAkKcLYCh3fdSd04HXCq5xHG2oAdOAdNIG3qAJ5tW1A/9hrm8Z" +
	                    "sV+7vDLTe2nsmP9AWwATuXe27330lLwvLkloHY5EBR0dexkB0xxKp9Ieno8MbOjYP1ZRMHz77YE8kAMk35V/fkpWSc6L3dL7Tl6uPAaAm155EAYhwjFHVOsY4AEwPXXkG7W+0EqmCodlRW17oCkrO5Pjc55lon7i2mBqenc7ETTmLFWdvaenLpijJDUBcywsAYFRwu" +
	                    "/jja1dMWNfWKf2WEOJ43T8ihLgHACAJkpgZvNQ3kTnJG/u6Z8O7ZgNwAACbzCb5dxNVLPnQW3aKyY7EKABM2XZPcwUk5wG8qIfvSL5qtJAfHLnvF+Z2GsPr2fefipPH0luq5aXsOi3frJ+5xhSm+k/1VErOxRWlqgkrfujO/t191ZqxLeB5azbJeSFELnz9v/agVX8" +
	                    "GAIjG5r9I9yjkAAAAAElFTkSuQmCC";
	            } else if (state === 7 ) {
	                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGXRFWHRTb2Z0d2FyZ" +
	                    "QBQYWludC5ORVQgVjMuNS41Tib51gAAAXlJREFUOE9jYACCqRH5a6eGZu6cHl00d2pUwa6J7r4Xe4w1U0ByWMB/DLHJnoHbQIKzI1PEp3r6vKjVU72HQzNIGNOA6W5uYiCZmUHxM+v0Vf836KuHkWQASPGciGznSe6+/+v01Vbh0YzdBeBwiC560GWi+aLVXEccxJ/" +
	                    "i6KhNdBjMCM/u7be3+99hpJEK0jTJ01a0y1hjKVEGTHH31e4w1vxSrqP0tVZPbXazodqKSl2VV9W6KnOJMoCAf4mLRpAq/+pTEh4F+79aJSwGxwjJseBZdHCVa/b2/1YR00vJMsAtd+c957T1D42De17iMKARKO4NTUiuQLoLrs694IAT0PbvNrFzNYwDOv9bRc4Iw" +
	                    "GKIMVQzKCWCsBNcDVDzaafUdbfMwiZNMwnq/mIeNvkgDldsgWo+hqyZ2TVr+0egIRIgQcuomb7G/h3/zaOmaeFxBcJ2l6xtx8xDJ/6wDJ+cYhU2g8vYv/M9yABj//aLOFxRTUbU49YCALt6h216b0oVAAAAAElFTkSuQmCC";
	            } else if (state === 8 ) {
	                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjExR/NCNwAAAKBJREFUOE+l0cENwjAMBdCM0BEYhZG6AjdvwQhMUvXQI0KcKo6IY2/9v0qQnVilFoenJF+2q6RJRP7ihhFuGOGGO851Zg4/9PCGi8oOD+iAzQM8c7bRRTX9pStMmbnGd1Nhwz2vbOD+ATcwteagjPBSZuAVTmBqzUHhnTnkA2wkPmJT2wRKGbLk1avZHUAcwldv/n/hhhFuGOGGEW54nKQVV2qyDejeW7YAAAAASUVORK5CYII=";
	            } else if (state === 9 ) {
	                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjExR/NCNwAAAHpJREFUOE+lz8ENgDAMA8COxEiMkxWYgkmYhCGgllpkUz8aeJyQrVQJJSJ+sWWGLTNsmWHLaq22amkZX2T0MiuB7ASPOMusBIKNh9Evekh4weaTDOfDUDTYdBnTF/AjbOYssxJIf9Q39ouG35DwhS0zbJlhywxbzotyAztMtZGgPPrJAAAAAElFTkSuQmCC";
	            } else if (state === 10 ) {
	                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAHCAYAAAAvZezQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU3MkFGN0FGNDFDMjExRTc5NDI5QzJBNEY3MjNCMjlDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU3MkFGN0IwNDFDMjExRTc5NDI5QzJBNEY3MjNCMjlDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTcyQUY3QUQ0MUMyMTFFNzk0MjlDMkE0RjcyM0IyOUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTcyQUY3QUU0MUMyMTFFNzk0MjlDMkE0RjcyM0IyOUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5OU3N/AAAAT0lEQVR42kyLQQqAMBADk7j+yt4s6o8Fj35Ldt1WCg6EMIRgWbdIMMJSjwC68L5OWISjoclyAIUfpe4hyT7LPS+U+9M9m/1qNrfmuL0CDABNSCHTGW/2lwAAAABJRU5ErkJggg==";
	            }else if(state === 11 ) {
	                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ4RjIyODk5REFGMDExRTdBQjYzODEzMjUxNkQwMjNGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ4RjIyODlBREFGMDExRTdBQjYzODEzMjUxNkQwMjNGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDhGMjI4OTdEQUYwMTFFN0FCNjM4MTMyNTE2RDAyM0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDhGMjI4OThEQUYwMTFFN0FCNjM4MTMyNTE2RDAyM0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Qaz1BAAAAgklEQVR42syTQQvAIAiFkw7RNejg//+hbwhTWput6LAFEpLvU+pFAMLOos8BQQCzkKYOppsFaF1KSYqhkCWAbKUULE+g4hjjRXwDMDM8cRPhEVBrRdPFFbsAPZM4L8ryfrIRoO+InDO8F5EwIxFRDzGzDfzgAhRCL4b6wV/YBhwCDAB5AMCzqyCJUAAAAABJRU5ErkJggg==";
	            }else if(state === 12 ) {
	                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk1MTQzMkI5REUzNjExRTc5NTJGRURCQjMxNUZBMkY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk1MTQzMkJBREUzNjExRTc5NTJGRURCQjMxNUZBMkY1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTUxNDMyQjdERTM2MTFFNzk1MkZFREJCMzE1RkEyRjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTUxNDMyQjhERTM2MTFFNzk1MkZFREJCMzE1RkEyRjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ynYg+AAAAk0lEQVR42qSS4RGAIAiFhWuXNmkAd2iqdnCANmkaii47j15o+f7ooXzCQxKR0CNSQEpJ91VSjJFsjK9Vk6n2GApycehBXuFsLiGIWxmDyyWk1tYDkM36NYVgDBXkutWARqXAnLzNE/JFxmWluwJPB8CO+dwfAFyBM0ZBxnLoVCsgt0D2y/OHZNRO3cSmf9CjXYABADU0MwNjlomLAAAAAElFTkSuQmCC";
	            }else if(state === 13  ) {
	                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVGMDFDMjYxREUzNjExRTc4QkRCRjdBQjc3Q0NGRkNCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVGMDFDMjYyREUzNjExRTc4QkRCRjdBQjc3Q0NGRkNCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUYwMUMyNUZERTM2MTFFNzhCREJGN0FCNzdDQ0ZGQ0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUYwMUMyNjBERTM2MTFFNzhCREJGN0FCNzdDQ0ZGQ0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6yeKkNAAAAhElEQVR42qSSUQ7AIAhDLfGEHtQrspGMhSATnfxoVJ62FsxcTgoC6L3LPCW11uDX6BmlGdll0SKZzRnkE07uUASZvoyCwxaSyRoAatavXyjOUI5c91WjrxKgNt/zyJcXjixIJiOwL1SZdVWqCRpSE3dqFaAS4CNPG82RnNzEpRyc1CXAAE5UMwNlC3A6AAAAAElFTkSuQmCC";
	            }else if(state === 14 ) {
	                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAHCAYAAAAvZezQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkM3QkZFRTJFNTVBMTFFN0E2RERENkM0NDRCMEZGODQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkM3QkZFRTFFNTVBMTFFN0E2RERENkM0NDRCMEZGODQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTcyQUY3QUY0MUMyMTFFNzk0MjlDMkE0RjcyM0IyOUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTcyQUY3QjA0MUMyMTFFNzk0MjlDMkE0RjcyM0IyOUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5dkRuoAAAALElEQVR42mI8duzYfwYGBkYGKGCC0v/RBeCCyAJgQXQBRmQBRmQtcFsAAgwAYLMGYBu/8woAAAAASUVORK5CYII=";
	            }
	            return "";
	        };
	
	        return _FilterDialog;
	    })(BaseDialog);
	    Filter._FilterDialog = _FilterDialog;
	   
	
	    module.exports = Filter;
	
	}());

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Sheets;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Common;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Sheets = __webpack_require__(2);
	    var Common = __webpack_require__(3);
	    var ConditionalFormatting = __webpack_require__(5);
	    var BaseDialog = Sheets._BaseDialog;
	    var Filter = __webpack_require__(6);
	    var FilterDialogExport = {};
	    var CultureManager = Common.CultureManager, _DateTimeHelper = Common._DateTimeHelper;
	
	    var getType = Common._Types._getType, escapeHtml = Common._StringHelper._escapeHtml, unescapeHtml = Common._StringHelper._unescapeHtml;
	
	
	    var $ = Sheets.GC$, Events = Sheets.Events, keyword_null = null, keyword_undefined = void 0, createElement = Sheets._util._createElement, util = Sheets._util, arrayHelper_getLength = Common._ArrayHelper._getLength, util_cancelDefault = util._cancelDefault;
	
	    var LEFT = 'left', TOP = 'top', FLOAT = 'float', RELATIVE = 'relative', SUBITEMS_CONTAINER = "gc-ui-filter-subitems-container", NO_USER_SELECT_CLASS = 'gc-no-user-select', FILTER_DIALOG_CLASS = "gc-filter-dialog-style", POSITION = "position", FILTER_SUB_ITEM = "gc-ui-filter-subitem-item", ALL_DATE_ITEM = "gc-ui-filter-allDate-item", FILTER_ARROW_CLASS = "gc-filter-alldates-arrow",
	        FILTER_ITEM_HOVER_CLASS = 'gc-filter-item-hover', EXTERNAL_HOVER_CLASS = 'ui-state-hover ', EXTERNAL_AND_FILTER_ITEM_HOVER_CLASS = EXTERNAL_HOVER_CLASS + FILTER_ITEM_HOVER_CLASS, FILTER_HOVER_CLASS = 'gc-filter-hover', FILTER_CLASS = FILTER_HOVER_CLASS + ' form-control well ' + EXTERNAL_AND_FILTER_ITEM_HOVER_CLASS, FILTER_BUTTON_HOVER_CLASS = 'gc-filter-button-hover ' + EXTERNAL_HOVER_CLASS,
	        SUB_MENU_CHECK = "gc-filter-submenu-check", SUB_MENU_CHECK_IMG = "gc-filter-submenu-check-img", ALL_DATE_CHECK_IMG = "gc-filter-allDate-check-img", ALL_DATE_LIST = "gc-filter-alldates-list", ALL_DATE_CONTAINER = "gc-filter-addDates-container", FILTER_WRAP_CLASS = "gc-filter-subMenu-wrap", TOP10_DIALOG = "top10_dialog", CUSTOM_DIALOG = "custom_dialog", SUB_MENU_COLOR_SORT = "gc-sub-color-sort", SUB_MENU_COLOR_FILTER = "gc-sub-color-filter",
	        AUTO_MATIC = "automatic", MORE_COLOR = "more_color", COLOR_DIALOG_TITLE = "gc-filter-dialog-color-title", COLOR_ITEM_CONTENT = "gc-color-item", COLOR_CHECKED_WRAP = "color-checked-wrap", COLOR_ITEM_CLASS = "gc-color-item-list", FILTER_SORT_CLASS = 'gc-filter-sort',
	        COLOR_DIALOG_BACKGROUND_WRAP = "gc-filter-color-dialog-background", COLOR_DIALOG_FONT_WRAP = "gc-filter-color-dialog-font", COLOR_DIALOG_CLASS = "gc-filter-color-dialog-style", TEXT_FILTER = 'TextFilter', NUMBER_FILTER = "NumberFilter", DATE_FILTER = "DateFilter", MENU_COLOR_HOVER = "#D3F0E0", MENU_COLOR_BORDER_COLOR = "#86BFA0", AUTOMATIC_COLOR = "#000000", NO_FILL_COLOR = "#FFFFFF";
	
	    var DISPLAY = 'display', BOX_SIZING = 'box-sizing', NONE = 'none', WIDTH = 'width', HEIGHT = 'height', PADDING = 'padding', BORDER = "border", CLICK = 'click', MOUSE_OVER = 'mouseover', MOUSE_OUT = 'mouseout', RESIZE = 'resize', INHERIT = 'inherit', CLOSE_HOVER_BACKCOLOR = "#E81123", CLOSE_HOVER_FONTCOLOR = "white", BACKCOLOR = 'backgroundColor', DIALOG_BACKCOLOR = "#f0f0f0", MARGIN = 'margin', MARGIN_LEFT = MARGIN + 'Left', MARGIN_TOP = MARGIN + 'Top', MARGIN_RIGHT = MARGIN + 'Right', FONT_SIZE = 'font-size';
	    
	    var NUMBER_FILTER_LIST = [[1, "Equal", "E", 1, 0], [1, "NotEqual", "N", 1, 1], [1, "GreaterThan", "G", 1, 2], [1, "GreaterOrEquals", "O", 1, 3], [1, "LessThan", "L", 1, 4], [1, "LessThanOrEquals", "Q", 1, 5], [1, "Between", "W", 0, 1], [1, "Top10", "T", 8, 0], [0, "AboveAverage", "A", 10, 0], [0, "BelowAverage", "O", 10, 1], [1, "Custom", "F", 1, 0]];
	    var TEXT_FILTER_LIST = [[1, "Equal", "E", 2, 0], [1, "NotEqual", "N", 2, 1], [1, "Begin", "I", 2, 2], [1, "End", "T", 2, 4], [1, "Contain", "A", 2, 6], [1, "NotContain", "D", 2, 7], [1, "Custom", "F", 2, 0]];
	    var DATE_FILTER_LIST = [[1, "Equal", "E", 5, 0], [1, "Before", "B", 5, 2], [1, "After", "A", 5, 4], [1, "Between", "W", 0, 1], [0, "Tomorrow", "T", 6, 2], [0, "Today", "O", 6, 0], [0, "Yesterday", "D", 6, 1], [0, "NextWeek", "K", 6, 9], [0, "ThisWeek", "H", 6, 7], [0, "LastWeek", "L", 6, 8], [0, "NextMonth", "M", 6, 6], [0, "ThisMonth", "S", 6, 4], [0, "LastMonth", "N", 6, 5], [0, "NextQuarter", "N", 6, 10], [0, "ThisQuarter", "N", 6, 11], [0, "LastQuarter", "N", 6, 12], [0, "NextYear", "N", 6, 13], [0, "ThisYear", "N", 6, 14], [0, "LastYear", "N", 6, 15], [0, "YearToDate", "A", 6, 0, 6], [0, "AllDates", "P", 6, 1], [1, "Custom", "F", 6, 0]];
	
	    
	    var All_DATES_FILTER_LIST = [["Q1", "1", 6, 0, 2], ["Q2", "B", 6, 1, 2], ["Q3", "A", 6, 2, 2], ["Q4", "4", 6, 3, 2], ["Jan", "J", 6, 0, 3], ["Feb", "F", 6, 1, 3], ["Mar", "M", 6, 2, 3], ["Apr", "A", 6, 3, 3], ["May", "Y", 6, 4, 3], ["Jun", "U", 6, 5, 3], ["Jul", "L", 6, 6, 3], ["Aug", "T", 6, 7, 3], ["Sep", "S", 6, 8, 3], ["Oct", "O", 6, 9, 3], ["Nov", "N", 6, 10, 3], ["Dec", "D", 6, 11, 3] ];
	    var NUMBER_CUSTOM_LIST = ['IsEquals-0-1', "NotEquals-1-11", "IsGreaterThan-2-1", "IsGreaterOrEqual-3-1", "IsLess-4-1", "LessOrEqual-5-1", "IsBeginWith-2-2", "NotBeginWith-3-2", "IsEndWith-4-2", "NotEndWith-5-2", "IsContain-6-2", "NotContains-7-2"];
	    var TEXT_CUSTOM_LIST = ['IsEquals-0-2', "NotEquals-1-11", "IsGreaterThan-2-1", "IsGreaterOrEqual-3-1", "IsLess-4-1", "LessOrEqual-5-1", "IsBeginWith-2-2", "NotBeginWith-3-2", "IsEndWith-4-2", "NotEndWith-5-2", "IsContain-6-2", "NotContains-7-2"];
	    var DATE_CUSTOM_LIST = ["IsEquals-0-5", "NotEquals-1-5", "IsAfter-4-5", "AfterOrEqual-5-5", "IsBefore-2-5", "BeforeOrEqual-3-5", "IsBeginWith-2-2", "NotBeginWith-4-2", "IsEndWith-4-2", "NotEndWith-5-2", "IsContain-6-2", "NotContains-7-2"];
	
	    var sR = function () {
	        return Common._getResource(__webpack_require__(7).SR)();
	    };
	
	    function formatColor(color) {
	        return Common._ColorHelper._toString(Common._ColorHelper._fromString(color));
	    }
	
	
	
	    function filterByCondition(colIndex, condition, sheet, rowFilter) {
	        try{
	            sheet.suspendPaint();
	            if (!rowFilter) {
	                return;
	            }
	            var tableName = rowFilter._table ? rowFilter._table.name() : keyword_undefined;
	            var cmdOption = {
	                tableName : tableName,
	                colIndex : colIndex,
	                condition : condition
	            };
	            sheet._commandManager().execute({ cmd: 'filterByCondition', sheetName: sheet.name(), cmdOption: cmdOption });
	
	        }finally {
	            sheet.resumePaint();
	        }
	    }
	
	    var _FilterSubMenuBase = (function () {
	            function _FilterSubMenuBase(wrap, container, filterButtonInfo, sheet, parentDialog, dialogType) {
	                var self = this;
	                self._type = keyword_undefined;
	                self._dialogType = dialogType;
	                self._wrap = wrap;
	                self._sheet = sheet;
	                self._$wrap = $(wrap);
	                self._container = container;
	                self._isNullMenu = false;
	                self._filterButtonInfo = filterButtonInfo;
	                self._rowFilter = filterButtonInfo.rowFilter;
	                self._parentDialog = parentDialog;
	                self._submenuWrap = keyword_null;
	            }
	            _FilterSubMenuBase.prototype = {
	                _init : function () {
	                    this._render(this._createSubmenuWrap());
	                    this._bindEvent();
	                },
	                _getImageSrc : function (state) {
	                    return Filter._FilterDialog._getImageSrc(state);
	                },
	                _createSubmenuWrap: function () {
	                    var submenuWrap = $(createElement("div")).attr("id", SUBITEMS_CONTAINER + "_" + this._dialogType);
	                    submenuWrap.addClass(FILTER_DIALOG_CLASS + " " + NO_USER_SELECT_CLASS + " " + FILTER_WRAP_CLASS);
	                    submenuWrap.css([POSITION, DISPLAY, BOX_SIZING], ['absolute', NONE, "border-box"]);
	                    this._submenuWrap = submenuWrap;
	                    $(this._wrap).append(this._submenuWrap);
	                    return submenuWrap;
	                },
	                _isShow : function () {
	                    return !(this._submenuWrap[0].style["display"] === "none");
	                },
	                _show:function () {
	                    $("." + FILTER_WRAP_CLASS).hide();
	                    this._submenuWrap.show();
	                    this._updatePosition();
	                },
	                _hide:function () {
	                    this._submenuWrap.hide();
	                    this._submenuWrap.find("." + FILTER_CLASS).removeClass(FILTER_CLASS);
	                },
	                _setType:function (type) {
	                    this._type = type;
	                    return this;
	                },
	                _updatePosition:function (callback) {
	                    var offset = this._$wrap.offset(), wrapTop = this._wrap.offsetTop, docElement = document.documentElement,
	                        clientWidth = docElement.clientWidth, clientHeight = docElement.clientHeight, submenuWidth = this._submenuWrap.width(), submenuHeight = this._submenuWrap.height();
	                    var left, top, isRight;
	                    if(this._container.offset().left + this._container.width() + submenuWidth > clientWidth) {
	                       
	                        left = -1 * (submenuWidth + 2) + "px";
	                        isRight = false;
	                    }else {
	                       
	                        left = this._container.width() + "px";
	                        isRight = true;
	                    }
	                    if(this._container.offset().top + wrapTop + submenuHeight > clientHeight) {
	                        top = clientHeight - submenuHeight - this._container.offset().top - 6;
	                    } else {
	                        top = offset.top - this._container.offset().top;
	                    }
	                    top = top + "px";
	                   
	                   
	                   
	                   
	                    this._submenuWrap.css([LEFT, TOP], [left, top]);
	                    callback && callback.call(this, isRight);
	                },
	                _doFilterByCondition : function (colIndex, condition) {
	                    var self = this, sheet = self._sheet, rowFilter = self._rowFilter;
	                    filterByCondition(colIndex, condition, sheet, rowFilter);
	                    this._parentDialog.close();
	                },
	                _confirmHoverHandle:function () {
	                    var hoverItem = $(".gc-filter-item-hover", this._submenuWrap[0]);
	                    hoverItem.trigger(CLICK);// do enter key down as click
	                },
	                _clearFilter:function () {
	                    var self = this, filterButtonInfo = self._filterButtonInfo, sheet = this._sheet, colIndex = filterButtonInfo.col, rowFilter = filterButtonInfo.rowFilter;
	                    if(!rowFilter) {
	                        return;
	                    }
	                    var cmdOption = {
	                        rowFilter : rowFilter,
	                        colIndex : colIndex
	                    };
	                    sheet._commandManager().execute({ cmd: 'clearFilter', sheetName: sheet.name(), cmdOption: cmdOption });
	                },
	                _hideMenuHandle:function () {
	                    this._hide();
	                    return keyword_null;
	                },
	                _showMenuHandle:function () {
	                    if(!this._isShow()) {
	                        this._show();
	                        this._hoverFirstItem();
	                    }
	                },
	                
	                _render : function () {},
	                _bindEvent : function () {},
	                _hoverFirstItem : function () {},
	                _hoverNextItem : function () {},
	                _hoverPrevItem : function () {}
	            };
	            return _FilterSubMenuBase;
	        })();
	   
	    var _CellValueFilterMenu = (function (_super) {
	        $.inherit(_CellValueFilterMenu, _super);
	        function _CellValueFilterMenu(wrap, container, filterButtonInfo, sheet, parentDialog, dialogType) {
	            _super.call(this, wrap, container, filterButtonInfo, sheet, parentDialog, dialogType);
	        }
	        var _prototype = {
	            _render : function (wrap) {
	                $(wrap).append(this._createContentHtml());
	            },
	            _bindEvent : function () {
	                var self = this;
	                self._submenuWrap.bind(MOUSE_OVER, function (e) {
	                    util_cancelDefault(e);
	                }).bind(MOUSE_OUT, function (e) {
	                    util_cancelDefault(e);
	                });
	                $("." + FILTER_SUB_ITEM, self._submenuWrap[0]).bind(MOUSE_OVER, function (e) {
	                    $("." + FILTER_SUB_ITEM).removeClass(FILTER_CLASS);
	                    $(this).addClass(FILTER_CLASS);
	                    util_cancelDefault(e);
	                }).bind(MOUSE_OUT, function (e) {
	                    $(this).removeClass(FILTER_CLASS);
	                    util_cancelDefault(e);
	                }).bind(CLICK, function (e) {
	                    if($(this).attr("id") !== ALL_DATE_CONTAINER) {
	                        self._doFilter($(this));
	                    }
	                    util_cancelDefault(e);
	                });
	                this._bindEventEx && this._bindEventEx();
	            },
	            _isBooleanExpected : function (expected) {
	                return (expected !== keyword_undefined && expected === 'TRUE' || expected === 'FALSE');
	            },
	            _setCheckedContentItem:function () {
	                var condition = this._rowFilter._filterItemMap[this._filterButtonInfo.col], list = this._renderListData, chooseIndex, isSameConType, isSameCompareType, isBetween = false;
	                if(condition && condition.length > 0) {
	                    condition = condition[0];
	                    var conType = condition.conType(), compareType = condition.compareType(), expected = condition.expected(), expectTypeId = condition.expectTypeId();
	                    if(conType === 10) { 
	                        compareType = condition.type();
	                    }
	                    if(conType === 8 ) {
	                        compareType = 0 ;
	                    }
	                   
	                    if(this._isBooleanExpected(expected)) {
	                        conType = 11 ;
	                    }
	                    
	                    if(conType === 0) {
	                        var item1CompareType = condition.item1().compareType(), item2CompareType = condition.item2().compareType();
	                       
	                        if(Math.max(item1CompareType, item2CompareType) === 5 && Math.min(item1CompareType, item2CompareType) === 3) {
	                            isBetween = true;
	                        }
	                    }
	                    for( var i = 0, len = arrayHelper_getLength(list); i < len; i++) {
	                        
	                        isSameConType = (conType === 0 && list[i][3] === conType && isBetween) || (list[i][3] === conType && conType !== 0) || (conType === 11 && (list[i][3] === 1 || list[i][3] === 2));
	                        if(isSameConType && conType === 8 ) {
	                            chooseIndex = i;
	                            break;
	                        }
	                        
	                        isSameCompareType = (list[i][4] === compareType && !isBetween) || (list[i][3] === 6 && expected === list[i][4]) || isBetween;
	                       
	                        if( isSameConType && isSameCompareType && (isNaN(expectTypeId) || expectTypeId === 0)) {
	                            chooseIndex = i;
	                            break;
	                        }
	                    }
	                }
	                if(!isNaN(expectTypeId) && expectTypeId === 6 ) {
	                    chooseIndex = 19;
	                }
	                if(!isNaN(expectTypeId) && (expectTypeId === 2  || expectTypeId === 3 )) {
	                    chooseIndex = 20;
	                    this._setAllDatesItemCheck && this._setAllDatesItemCheck(All_DATES_FILTER_LIST, expected, expectTypeId);
	                }
	                var checkItem;
	                if(chooseIndex !== keyword_undefined && chooseIndex !== 0) {
	                    checkItem = $("." + FILTER_SUB_ITEM)[chooseIndex];
	                }else if(condition && conType !== 3 && chooseIndex === keyword_undefined && !(conType === 2 && compareType === 0)) {
	                    checkItem = $("." + FILTER_SUB_ITEM)[arrayHelper_getLength(list) - 1];
	                }else if(chooseIndex === 0 && conType === 5 ) {
	                    checkItem = $("." + FILTER_SUB_ITEM)[chooseIndex];
	                }
	                $(checkItem).attr("data-isCheck", 1);//flag the checked element
	                $(checkItem).find("." + SUB_MENU_CHECK_IMG).css([DISPLAY], ["inline-block"]);
	            },
	            _hoverFirstItem : function () {
	                var firstItem = $("." + FILTER_SUB_ITEM).removeClass(FILTER_CLASS)[0];
	                $(firstItem).addClass(FILTER_CLASS);
	            },
	            _getMajorConditionType: function (conditionType) {
	                var type;
	               
	                if(conditionType !== 0) {
	                    type = conditionType;
	                } else {
	                    switch (this._type) {
	                        case NUMBER_FILTER:
	                            type = 1 ;
	                            break;
	                        case TEXT_FILTER:
	                            type = 2 ;
	                            break;
	                        case DATE_FILTER:
	                            type = 5 ;
	                            break;
	                    }
	                }
	                return type;
	            },
	            _createModalDialog : function (dialogType, conditionType, operatorType, isCustom) {
	                var sheet = this._sheet, modalDialog;
	                switch (dialogType) {
	                    case TOP10_DIALOG:
	                        modalDialog = new _Top10Dialog(sheet.parent._getContainerDiv(), sheet, this._filterButtonInfo, TOP10_DIALOG, isCustom); 
	                        break;
	                    case CUSTOM_DIALOG:
	                        modalDialog = new _CustModalDialog(sheet.parent._getContainerDiv(), sheet, this._filterButtonInfo, CUSTOM_DIALOG, this._parentDialog._allData, isCustom, conditionType, operatorType, this._getMajorConditionType(conditionType)); 
	                        break;
	                }
	                if(modalDialog) {
	                    modalDialog._open();
	                }
	            },
	
	            _doFilter:function ($target) {
	                var colIndex = this._filterButtonInfo.col, isNeedDialog = parseInt($target.attr("data-isNeedDialog"), 10), conditionType = parseInt($target.attr("data-conditionType"), 10), operatorType = parseInt($target.attr("data-operatorType"), 10), dialogtype,
	                    expectTypeId = parseInt($target.attr("data-expectTypeId"), 10), isCustom = parseInt($target.attr("data-isCustom"), 10);
	                var isChecked = parseInt($target.attr("data-ischeck"), 10);
	                if(!isNaN(expectTypeId)) {
	                    isNeedDialog = 0;
	                    isCustom = 0;
	                }
	               
	                if(isNeedDialog === 0 && isChecked === 1) {
	                    this._clearFilter();
	                    this._parentDialog.close();
	                    return;
	                }
	                if( isNeedDialog === 1) {
	                    this._parentDialog.close();
	                    if(conditionType === 8  && operatorType === 0 ) {
	                        dialogtype = TOP10_DIALOG;
	                    }else {
	                        dialogtype = CUSTOM_DIALOG;
	                    }
	                    this._createModalDialog(dialogtype, conditionType, operatorType, isCustom);
	                    return;
	                }
	                var condition = new ConditionalFormatting.Condition(conditionType);
	
	                if(conditionType === 10 ) {
	                    condition.type(operatorType);
	                }else{
	                    condition.compareType(operatorType);
	                }
	
	                if( conditionType === 6 && !isNaN(expectTypeId)) {
	                    condition = new ConditionalFormatting.Condition(conditionType);
	                    condition.expectTypeId(expectTypeId);
	                    condition.expected(operatorType);
	                }else if(conditionType === 6) {
	                    condition = new ConditionalFormatting.Condition(conditionType);
	                    condition.expected(operatorType);
	                }
	                this._doFilterByCondition(colIndex, condition);
	            },
	
	            _createContentHtml : function () {},
	            _rendMenuContent : function (data) {
	                var html = "";
	                for(var i = 0, len = data.length; i < len; i++) {
	                    if( i === len - 1) {
	                        html += this._createMenuItemBy(data[i], 1);
	                    }else {
	                        html += this._createMenuItemBy(data[i], 0);
	                    }
	                }
	                this._submenuWrap.html(html);
	                $(this._wrap).append(this._submenuWrap);
	                this._updateSubmenuStyle();
	                this._setCheckedContentItem();
	            },
	            _updateSubmenuStyle:function () {
	                var lineHeight = this._wrap.offsetHeight - 2, top = this._wrap.offsetTop;
	                $("." + FILTER_SUB_ITEM + ",." + ALL_DATE_ITEM).css([PADDING, HEIGHT, "line-height", "white-space", "clear", BORDER, WIDTH, HEIGHT, FONT_SIZE, MARGIN], ["0 10px 0 0", lineHeight, lineHeight, "nowrap", "both", NONE, "auto", "auto", "12px", 0]);
	                this._submenuWrap.css([LEFT, TOP], ["100%", top]);
	                $(".gc-filter-hotkey").css(["text-decoration"], ["underline"]);
	                $("." + SUB_MENU_CHECK).css([DISPLAY, WIDTH, "textAlign"], ["inline-block", "24px", "center"]);
	                $("." + SUB_MENU_CHECK + " img").css([DISPLAY, "verticalAlign"], ["inline-block", "text-bottom"]);
	                $("." + SUB_MENU_CHECK_IMG + ",." + ALL_DATE_CHECK_IMG).hide();
	
	                $("#" + ALL_DATE_CONTAINER).css([POSITION], [RELATIVE]);
	                $("." + FILTER_ARROW_CLASS).css([MARGIN_LEFT], ["5px"]);
	                $("#" + ALL_DATE_LIST).css([POSITION, DISPLAY, WIDTH], ["absolute", "none", "auto"]);
	            },
	            _createMenuItemBy:function (arr, isCustom) {
	                var html = '',  isNeedCustomDialog = arr[0], context = sR()[arr[1]], conditionType = arr[3], operatorType = arr[4];
	                html = '<div class="' + FILTER_SUB_ITEM + '" data-isCustom="' + isCustom + '" data-isNeedDialog ="' + isNeedCustomDialog + '" data-conditionType="' + conditionType + '" data-operatorType="' + operatorType + '"><div class="gc-filter-sort"><span class="' + SUB_MENU_CHECK + '"><img class="' + SUB_MENU_CHECK_IMG + '" src="' + this._getImageSrc(11) + '"></span><span>' + context + '</span>'
	                    + '</div></div>';
	                return html;
	            },
	
	
	            _hoverPrevItem : function () {
	                var hoverItem = $(".gc-filter-item-hover", this._submenuWrap[0]).removeClass(FILTER_CLASS);
	                var list = $("." + FILTER_SUB_ITEM);
	                if(hoverItem.index() === 0) {
	                    $(list[list.length - 1]).addClass(FILTER_CLASS);
	                } else {
	                    $(list[hoverItem.index() - 1]).addClass(FILTER_CLASS);
	                }
	            },
	            _hoverNextItem:function () {
	                var hoverItem = $(".gc-filter-item-hover", this._submenuWrap[0]);
	                if(hoverItem.length > 0 && hoverItem[0].nextSibling) {
	                    hoverItem.removeClass(FILTER_CLASS);
	                    $(hoverItem[0].nextSibling).addClass(FILTER_CLASS);
	                }else {
	                    this._hoverFirstItem();
	                }
	            }
	
	        };
	        $.extend(_CellValueFilterMenu.prototype, _prototype);
	        return _CellValueFilterMenu;
	    })(_FilterSubMenuBase);
	   
	    var _NumberFilterMenu = (function (_super) {
	        $.inherit(_NumberFilterMenu, _super);
	        function _NumberFilterMenu(wrap, container, filterButtonInfo, sheet, parentDialog, dialogType) {
	            var self = this;
	            this._renderListData = NUMBER_FILTER_LIST;
	            _super.call(self, wrap, container, filterButtonInfo, sheet, parentDialog, dialogType);
	        }
	        var _prototype = {
	            _createContentHtml : function () {
	                this._rendMenuContent(this._renderListData);
	            }
	        };
	        $.extend(_NumberFilterMenu.prototype, _prototype);
	        return _NumberFilterMenu;
	    })(_CellValueFilterMenu);
	    FilterDialogExport._NumberFilterMenu = _NumberFilterMenu;
	
	    var _TextFilterMenu = (function (_super) {
	        $.inherit(_TextFilterMenu, _super);
	        function _TextFilterMenu(wrap, container, filterButtonInfo, sheet, parentDialog, dialogType) {
	            var self = this;
	            this._renderListData = TEXT_FILTER_LIST;
	            _super.call(self, wrap, container, filterButtonInfo, sheet, parentDialog, dialogType);
	        }
	        var _prototype = {
	            _createContentHtml : function () {
	                this._rendMenuContent(TEXT_FILTER_LIST);
	            }
	        };
	        $.extend(_TextFilterMenu.prototype, _prototype);
	        return _TextFilterMenu;
	    })(_CellValueFilterMenu);
	    FilterDialogExport._TextFilterMenu = _TextFilterMenu;
	
	    var _DateFilterMenu = (function (_super) {
	        $.inherit(_DateFilterMenu, _super);
	        function _DateFilterMenu(wrap, container, filterButtonInfo, sheet, parentDialog, dialogType) {
	            var self = this;
	            this._renderListData = DATE_FILTER_LIST;
	            _super.call(self, wrap, container, filterButtonInfo, sheet, parentDialog, dialogType);
	        }
	        var _prototype = {
	            _createContentHtml : function () {
	                this._rendMenuContent(DATE_FILTER_LIST);
	            },
	            _createMenuItemBy:function (arr, isCustom) {
	                var html = '',  isNeedCustomDialog = arr[0], context = sR()[arr[1]], conditionType = arr[3], operatorType = arr[4];
	                if(arr[1] === "AllDates") {
	                    html = '<div id="' + ALL_DATE_CONTAINER + '" class="' + FILTER_SUB_ITEM + '" data-isCustom="' + isCustom + '" data-isNeedDialog ="' + isNeedCustomDialog + '" data-conditionType="' + conditionType + '" data-operatorType="' + operatorType + '"><div class="gc-filter-sort"><span class="' + SUB_MENU_CHECK + '"><img class="' + SUB_MENU_CHECK_IMG + '" src="' + this._getImageSrc(11) + '"></span><span>' + context + '</span>'
	                        + '<span class="' + FILTER_ARROW_CLASS + '"><img src="' + this._getImageSrc(10) + '"></span></div>' + this._createAllDatesHtml() + '</div>';
	                } else if(arr[1] === "YearToDate") {
	                    html = '<div class="' + FILTER_SUB_ITEM + '" data-expectTypeId="' + arr[5] + '" data-isCustom="' + isCustom + '" data-isNeedDialog ="' + isNeedCustomDialog + '" data-conditionType="' + conditionType + '" data-operatorType="' + operatorType + '"><div class="gc-filter-sort"><span class="' + SUB_MENU_CHECK + '"><img class="' + SUB_MENU_CHECK_IMG + '" src="' + this._getImageSrc(11) + '"></span><span>' + context + '</span>'
	                        + '</div></div>';
	                }else {
	                    html = '<div class="' + FILTER_SUB_ITEM + '" data-isCustom="' + isCustom + '" data-isNeedDialog ="' + isNeedCustomDialog + '" data-conditionType="' + conditionType + '" data-operatorType="' + operatorType + '"><div class="gc-filter-sort"><span class="' + SUB_MENU_CHECK + '"><img class="' + SUB_MENU_CHECK_IMG + '" src="' + this._getImageSrc(11) + '"></span><span>' + context + '</span>'
	                        + '</div></div>';
	                }
	                return html;
	            },
	            _show:function () {
	                $("." + FILTER_WRAP_CLASS).hide();
	                this._submenuWrap.show();
	                this._updatePosition(this._updateAllDatePosition);
	               
	               
	            },
	            _updateAllDatePosition:function (isRight) {
	                this._submenuWrap.show();
	                var $el = $("#" + ALL_DATE_LIST), wrap = $("#" + ALL_DATE_CONTAINER), container = this._submenuWrap, left, top;
	                var docElement = document.documentElement, clientWidth = docElement.clientWidth, clientHeight = docElement.clientHeight;
	                if((container.offset().left + container.width() + $el.width() > clientWidth) ) {
	                    left = -1 * ($el.width()) + "px";
	                }else if (isRight) {
	                    left = container.width() + "px";
	                }else {
	                    left = -1 * ($el.width()) + "px";
	                }
	                if(wrap.offset().top + $el.height() > clientHeight) {
	                    top = clientHeight - $el.height() - wrap.offset().top - 5;
	                }else {
	                    top = 0;
	                }
	                top = top + "px";
	                $el.css([LEFT, TOP], [left, top]);
	            },
	            _createAllDatesHtml:function () {
	                var html = '<div id="' + ALL_DATE_LIST + '" class="' + FILTER_DIALOG_CLASS + '">';
	                for(var i = 0; i < arrayHelper_getLength(All_DATES_FILTER_LIST); i++) {
	                    html += '<div class="' + ALL_DATE_ITEM + '" data-expectTypeId="' + All_DATES_FILTER_LIST[i][4] + '" data-conditionType="' + 6 + '"  data-operatorType="' + All_DATES_FILTER_LIST[i][3] + '"><div class="gc-filter-sort"><span class="' + SUB_MENU_CHECK + '"><img class="' + ALL_DATE_CHECK_IMG + '" src="' + this._getImageSrc(11) + '"></span><span>' + sR()[All_DATES_FILTER_LIST[i][0]] + '</span>'
	                        + '</div></div>';
	                }
	                html += "</div>";
	                return html;
	            },
	            _hoverFirstItem:function () {
	                if(this._isAllDatesMenuShow()) {
	                    var allDatesList = $("." + ALL_DATE_ITEM).removeClass(FILTER_CLASS);
	                    $(allDatesList[0]).addClass(FILTER_CLASS);
	                }else {
	                    var firstItem = $("." + FILTER_SUB_ITEM).removeClass(FILTER_CLASS)[0];
	                    $(firstItem).addClass(FILTER_CLASS);
	                }
	            },
	            _isAllDatesMenuShow:function () {
	                var flag = false, $el = $("#" + ALL_DATE_LIST);
	                if($el.length === 0) {
	                    flag = false;
	                }else {
	                    flag = ($el.css(DISPLAY) !== NONE);
	                }
	                return flag ;
	            },
	            _hideAllDatesList:function () {
	                $("#" + ALL_DATE_LIST).hide();
	                $("." + ALL_DATE_ITEM).removeClass(FILTER_CLASS);
	            },
	            _bindEventEx : function () {
	                var self = this;
	                $("." + ALL_DATE_ITEM, self._submenuWrap[0]).bind(MOUSE_OVER, function () {
	                    $(this).addClass(FILTER_CLASS);
	                    $("#" + ALL_DATE_CONTAINER).addClass(FILTER_CLASS);
	                }).bind(MOUSE_OUT, function () {
	                    $(this).removeClass(FILTER_CLASS);
	                }).bind(CLICK, function (e) {
	                    self._doFilter($(this));
	                    util_cancelDefault(e);
	                });
	                $("#" + ALL_DATE_CONTAINER, self._submenuWrap[0]).bind(MOUSE_OVER, function () {
	                    $("#" + ALL_DATE_LIST).show();
	                }).bind(MOUSE_OUT, function () {
	                    self._hideAllDatesList();
	                }).bind(CLICK, function (e) {
	                    $("#" + ALL_DATE_LIST).show();
	                    self._hoverFirstItem();
	                    util_cancelDefault(e);
	                });
	            },
	            _isAllDatesContainerHover:function () {
	                var flag = false, $el = $("#" + ALL_DATE_CONTAINER);
	                if($el.length === 0 ) {
	                    flag = false;
	                }else {
	                    flag = ($el.hasClass(FILTER_CLASS));
	                }
	                return flag;
	            },
	            
	            _setAllDatesItemCheck: function (list, expected, expectTypeId) {
	                var chooseIndex;
	                for(var i = 0; i < arrayHelper_getLength(list); i++) {
	                    if(list[i][3] === expected && list[i][4] === expectTypeId) {
	                        chooseIndex = i;
	                        break;
	                    }
	                }
	                var chooseItem = $("." + ALL_DATE_ITEM)[chooseIndex];
	                $(chooseItem).attr("data-isCheck", 1);
	                $(chooseItem).find("." + ALL_DATE_CHECK_IMG).css([DISPLAY], ["inline-block"]).attr("data-isCheck", 1);
	            },
	            _confirmHoverHandle:function () {
	                var hoverItem;
	                if(this._isAllDatesMenuShow()) {
	                    hoverItem = $(".gc-filter-item-hover", $("#" + ALL_DATE_LIST)[0]);
	                }else {
	                    hoverItem = $(".gc-filter-item-hover", this._submenuWrap[0]);
	                }
	                hoverItem.trigger(CLICK);// do enter key down as click
	            },
	            _hideMenuHandle:function () {
	                var rs = keyword_null;
	                if(this._isAllDatesMenuShow()) {
	                    this._hideAllDatesList();
	                    rs = this;
	                }else {
	                    this._hide();
	                }
	                return rs;
	            },
	            _showMenuHandle:function () {
	                var isSubMenuShow = this._isShow(), isAllDatesShow = this._isAllDatesMenuShow();
	                if(!isSubMenuShow ) {
	                    this._show();
	                    this._hoverFirstItem();
	                }else if(!isAllDatesShow && this._isAllDatesContainerHover()) {
	                    $("#" + ALL_DATE_LIST).show();
	                    this._hoverFirstItem();
	                }
	            },
	            _hoverPrevItem : function () {
	                if(this._isAllDatesMenuShow()) {
	                    var allDatesHoverItem = $(".gc-filter-item-hover", $("#" + ALL_DATE_LIST)[0]).removeClass(FILTER_CLASS);
	                    var allDatesList = $("." + ALL_DATE_ITEM);
	                    if(allDatesHoverItem.index() === 0) {
	                        $(allDatesList[allDatesList.length - 1]).addClass(FILTER_CLASS);
	                    } else {
	                        $(allDatesList[allDatesHoverItem.index() - 1]).addClass(FILTER_CLASS);
	                    }
	
	                } else {
	                    var hoverItem = $(".gc-filter-item-hover", this._submenuWrap[0]).removeClass(FILTER_CLASS);
	                    var list = $("." + FILTER_SUB_ITEM);
	                    if(hoverItem.index() === 0) {
	                        $(list[list.length - 1]).addClass(FILTER_CLASS);
	                    } else {
	                        $(list[hoverItem.index() - 1]).addClass(FILTER_CLASS);
	                    }
	                }
	            },
	            _hoverNextItem:function () {
	                if(this._isAllDatesMenuShow()) {
	                    var allDatesHoverItem = $(".gc-filter-item-hover", $("#" + ALL_DATE_LIST)[0]).removeClass(FILTER_CLASS);
	                    var allDatesList = $("." + ALL_DATE_ITEM);
	                    if(allDatesHoverItem.index() === (allDatesList.length - 1)) {
	                        $(allDatesList[0]).addClass(FILTER_CLASS);
	                    } else {
	                        $(allDatesList[allDatesHoverItem.index() + 1]).addClass(FILTER_CLASS);
	                    }
	                }else {
	                    var hoverItem = $(".gc-filter-item-hover", this._submenuWrap[0]);
	                    if(hoverItem.length > 0 && hoverItem[0].nextSibling) {
	                        hoverItem.removeClass(FILTER_CLASS);
	                        $(hoverItem[0].nextSibling).addClass(FILTER_CLASS);
	                    }else {
	                        this._hoverFirstItem();
	                    }
	                }
	            }
	        };
	        $.extend(_DateFilterMenu.prototype, _prototype);
	        return _DateFilterMenu;
	    })(_CellValueFilterMenu);
	    FilterDialogExport._DateFilterMenu = _DateFilterMenu;
	   
	
	   
	    var _ColorFilterMenu = (function (_super) {
	        $.inherit(_ColorFilterMenu, _super);
	        function _ColorFilterMenu(wrap, container, filterButtonInfo, sheet, parentDialog, dialogType) {
	            _super.call(this, wrap, container, filterButtonInfo, sheet, parentDialog, dialogType);
	        }
	        var _proto = {
	            _render : function () {
	                this._renderColorSubmenuByType(this._parentDialog._cellColorList, this._parentDialog._fontColorList);
	            },
	            _getSortInfo : function () {
	                var sortInfo, filterSortInfo = this._rowFilter._sortInfo;
	                if(filterSortInfo && filterSortInfo.color !== keyword_undefined) {
	                    var isBackColor = filterSortInfo.isBackColor ? 0 : 1, color = filterSortInfo.color;
	                    var cellColorList = this._parentDialog._cellColorList, fontColorList = this._parentDialog._fontColorList;
	                    if(color !== "") {
	                        color = formatColor(color);
	                    }
	                   
	                    if(color === "" && isBackColor === 0 && cellColorList[AUTO_MATIC] === keyword_undefined) {
	                        return keyword_undefined;
	                    }else if(color === "" && isBackColor !== 0 && fontColorList[AUTO_MATIC] === keyword_undefined) {
	                        return keyword_undefined;
	                    }
	
	                    sortInfo = {
	                        colorType : isBackColor,
	                        color : color
	                    };
	                }
	                return sortInfo;
	            },
	            _getFilterInfo : function () {
	                var condition = this._rowFilter._filterItemMap[this._filterButtonInfo.col], filterInfo;
	                if(condition && condition.length > 0 && condition[0].conType() === 3 ) {
	                    filterInfo = {
	                        colorType : condition[0].compareType(),
	                        color : condition[0].expected()
	                    };
	                }
	                return filterInfo;
	            },
	            _renderColorSubmenuByType:function (cellColorList, fontColorList) {
	                this._rendColorMenu(cellColorList, fontColorList);
	                this._updateColorSubmenuStyle();
	            },
	            _doColorSort:function (color, isCellColor) {
	                this._parentDialog._sortByColor(color, isCellColor);
	                this._parentDialog.close();
	                return;
	            },
	            _showMoreColorDialog : function (isCellColor) {
	                this._parentDialog.close();
	                var self = this, sheet = self._sheet, selectColor;
	                var allColors = isCellColor ? this._parentDialog._cellColorList : this._parentDialog._fontColorList;
	                if(this._checkInfo) {
	                    selectColor = this._checkInfo.color;
	                }
	                var colorModalDialog = new _ColorModalDialog(sheet.parent._getContainerDiv(), sheet, this._filterButtonInfo, this._dialogType, allColors, isCellColor, selectColor); 
	                colorModalDialog._open();
	            },
	            _doColorFilter:function (color, isCellColor) {
	                var condition = new ConditionalFormatting.Condition(3 ), colIndex = this._filterButtonInfo.col;
	                var compareType = isCellColor ? 0 : 1 ;
	                var checkedInfo = this._getFilterInfo();
	                if(checkedInfo && checkedInfo.colorType === compareType && checkedInfo.color === color) {
	                    this._clearFilter();
	                    this._parentDialog.close();
	                    return;
	                }
	                condition.compareType(compareType);
	                condition.expected(color);
	                this._doFilterByCondition(colIndex, condition);
	            },
	            _updateColorSubmenuStyle:function () {
	                $("." + COLOR_DIALOG_TITLE, this._submenuWrap[0]).css([HEIGHT, "line-height", "textIndent", "backgroundColor", "color", "whiteSpace"], ["32px", "32px", "8px", "rgb(235,235,235)", "rgb(106,106,106)", "nowrap"]);
	                $("." + COLOR_ITEM_CLASS, this._submenuWrap[0]).css(["listStyle", "padding", HEIGHT, "lineHeight", BORDER, "whiteSpace", WIDTH, MARGIN, FONT_SIZE, BOX_SIZING], [NONE, "2px 0", "23px", "23px", "1px solid transparent", "nowrap", '140px', 0, '12px', 'content-box']);
	                $("." + COLOR_ITEM_CONTENT, this._submenuWrap[0]).css([WIDTH, BORDER, MARGIN_RIGHT, HEIGHT, BOX_SIZING, "whiteSpace", FLOAT], ["75px", "1px solid rgb(130,130,130)", "24px", "22px", "border-box", "nowrap", LEFT]);
	                $("." + COLOR_CHECKED_WRAP, this._submenuWrap[0]).css([DISPLAY, WIDTH, HEIGHT, "verticalAlign", MARGIN, "textAlign", FLOAT], ["inline-block", "22px", "22px", "middle", "0 3px 0 2px", "center", LEFT]);
	                $("." + COLOR_CHECKED_WRAP + " img", this._submenuWrap[0]).css([MARGIN_TOP, DISPLAY], ["3px", NONE]);
	                $(".gc-color-dialog-more-color", this._submenuWrap[0]).css([PADDING], ["0 5px 0 0"]);
	                $("." + COLOR_CHECKED_WRAP + " img.checked", this._submenuWrap[0]).css([MARGIN_TOP, DISPLAY], ["3px", 'block']);
	            },
	            _rendColorMenu:function (cellColorList, fontColorList) {
	                var cellColorTitle, fontColorTitle, checkInfo;
	                if(this._dialogType === SUB_MENU_COLOR_SORT) {
	                    cellColorTitle = sR().SortCellTitle;
	                    fontColorTitle = sR().SortFontTitle;
	                    checkInfo = this._getSortInfo();
	                }else if(this._dialogType === SUB_MENU_COLOR_FILTER) {
	                    cellColorTitle = sR().FilterCellTitle;
	                    fontColorTitle = sR().FilterFontTitle;
	                    checkInfo = this._getFilterInfo();
	                }
	                this._checkInfo = checkInfo;
	                var html = this._rendColorList(cellColorTitle, cellColorList[AUTO_MATIC], cellColorList.data, 0 , checkInfo);
	                html += this._rendColorList(fontColorTitle, fontColorList[AUTO_MATIC], fontColorList.data, 1 , checkInfo);
	
	                if(html !== "") {
	                    this._submenuWrap.html(html);
	                }else {
	                    this._isNullMenu = true;
	                }
	                $(this._wrap).append(this._submenuWrap);
	            },
	            _rendColorList:function (title, automatic, colorList, type, checkInfo) {
	                var wrapClass, checkedColor, checkColorMatched = false, checkedClass = "checked";
	                if(checkInfo && type === checkInfo.colorType && checkInfo.color !== '') {
	                    checkedColor = formatColor(checkInfo.color);
	                }else if(checkInfo && checkInfo.color === '' && type === checkInfo.colorType ) {
	                    checkedColor = checkInfo.color;
	                }
	                wrapClass = (type === 0 ) ? COLOR_DIALOG_BACKGROUND_WRAP : COLOR_DIALOG_FONT_WRAP;
	                var html = "<div class='" + COLOR_DIALOG_TITLE + "'>" + title + "</div><ul class='" + wrapClass + "' style='padding: 7px 0 0 0;margin:0'>", index = 0;
	                for(var item in colorList) {
	                    if(colorList.hasOwnProperty(item) && index < 5) {
	                        var itemCheckClass = "";
	                        if(checkedColor !== keyword_undefined && checkedColor === item) {
	                            itemCheckClass = checkedClass;
	                            checkColorMatched = true;
	                        }
	                        html += '<li class="' + COLOR_ITEM_CLASS + '" data-colIndex="' + colorList[item] + '" data-colorType="' + type + '" data-color = "' + item + '"><span class="' + COLOR_CHECKED_WRAP + '"><img class="' + itemCheckClass + '" src="' + this._getImageSrc(11) + '"></span><div class="' + COLOR_ITEM_CONTENT + '" style="background-color: ' + item + '" ></div></li>';
	                        index++;
	                    }
	                }
	                if((index === 0 && checkedColor === keyword_undefined) || (automatic === keyword_undefined && index === 1)) { 
	                    html = "";
	                    return html;
	                }
	                if(automatic !== keyword_undefined) {
	                    var noFillText = (type === 0  ) ? sR().NoFill : sR().Automatic;
	                    var automaticCheckClass = '';
	                    if(checkedColor !== keyword_undefined && checkedColor === '') {
	                        automaticCheckClass = checkedClass;
	                        checkColorMatched = true;
	                    }
	                    html += '<li class="' + COLOR_ITEM_CLASS + '" data-colIndex="' + AUTO_MATIC + '" data-colorType="' + type + '" data-color = ""><span class="' + COLOR_CHECKED_WRAP + '"><img  class="' + automaticCheckClass + '" src="' + this._getImageSrc(11) + '"></span><div class="' + FILTER_SORT_CLASS + '">' + noFillText + '</div></li>';
	                }
	                if(index === 5) {
	                    var moreColorCheckClass = "";
	                    if(!checkColorMatched && checkedColor !== keyword_undefined) {
	                        moreColorCheckClass = checkedClass;
	                    }
	                    var moreColorText = (type === 0 ) ? sR().CellColor : sR().FontColor;
	                    html += '<li class="' + COLOR_ITEM_CLASS + '" data-colIndex="' + MORE_COLOR + '" data-colorType="' + type + '" ><span class="' + COLOR_CHECKED_WRAP + '"><img class="' + moreColorCheckClass + '" src="' + this._getImageSrc(11) + '"></span><div class="' + FILTER_SORT_CLASS + ' gc-color-dialog-more-color">' + moreColorText + '</div></li>';
	                }
	                html += "</ul>";
	                return html;
	            },
	            _hoverFirstItem : function () {
	                var firstColorItem = $("." + COLOR_ITEM_CLASS, this._submenuWrap[0]).removeClass(FILTER_CLASS)[0];
	                $(firstColorItem).addClass(FILTER_CLASS);
	            },
	            _bindEvent: function () {
	                var self = this;
	                self._submenuWrap.bind(MOUSE_OVER, function (e) {
	                    util_cancelDefault(e);
	                }).bind(MOUSE_OUT, function (e) {
	                    util_cancelDefault(e);
	                });
	                $("." + COLOR_ITEM_CLASS, self._submenuWrap[0]).bind(CLICK, function () {
	                    var color = $(this).attr("data-color"), colIndex = $(this).attr("data-colindex"), colorType = $(this).attr("data-colorType"), isCellColor = false;
	                    colorType = parseInt(colorType, 10);
	                    if(colorType === 0 ) {
	                        isCellColor = true;
	                    }
	                   
	                    if(colIndex === "more_color") {
	                        self._showMoreColorDialog(isCellColor);
	                        return;
	                    }
	                    if(self._dialogType === SUB_MENU_COLOR_SORT) {
	                        self._doColorSort(color, isCellColor);
	                    }else if(self._dialogType === SUB_MENU_COLOR_FILTER) {
	                        self._doColorFilter(color, isCellColor);
	                    }
	                }).bind(MOUSE_OVER, function (e) {
	                    $("." + COLOR_ITEM_CLASS, self._submenuWrap[0]).removeClass(FILTER_CLASS);
	                    $(this).addClass(FILTER_CLASS);
	                    util_cancelDefault(e);
	                }).bind(MOUSE_OUT, function (e) {
	                    $(this).removeClass(FILTER_CLASS);
	                    util_cancelDefault(e);
	                });
	
	            },
	            _hoverPrevItem : function () {
	                var allList = $("." + COLOR_ITEM_CLASS, this._submenuWrap[0]);
	                var index = 0;
	                allList.forEach(function (elem, item) {
	                    if($(elem).hasClass("gc-filter-item-hover")) {
	                        index = item;
	                    }
	                });
	                if(index === 0) {
	                    $(allList.removeClass(FILTER_CLASS)[allList.length - 1]).addClass(FILTER_CLASS);
	                }else {
	                    var prev = allList.removeClass(FILTER_CLASS)[index - 1];
	                    $(prev).addClass(FILTER_CLASS);
	                }
	            },
	            _hoverNextItem:function () {
	                var allList = $("." + COLOR_ITEM_CLASS, this._submenuWrap[0]);
	                var index = 0;
	                allList.forEach(function (elem, item) {
	                    if($(elem).hasClass("gc-filter-item-hover")) {
	                        index = item;
	                    }
	                });
	                if(index === allList.length - 1) {
	                    this._hoverFirstItem();
	                }else {
	                    var next = allList.removeClass(FILTER_CLASS)[index + 1];
	                    $(next).addClass(FILTER_CLASS);
	                }
	            }
	
	        };
	        $.extend(_ColorFilterMenu.prototype, _proto);
	        return _ColorFilterMenu;
	    })(_FilterSubMenuBase);
	    FilterDialogExport._ColorFilterMenu = _ColorFilterMenu;
	   
	
	
	
	
	
	   
	
	    var _FilterModalDialogBase = (function (_super) {
	        $.inherit(_FilterModalDialogBase, _super);
	        function _FilterModalDialogBase(host, sheet, filterButtonInfo, dialogType) {
	            var self = this, sheetParent = sheet.parent;
	            _super.call(self, host, util._getPreferredZIndex(sheetParent && sheetParent._host), true );
	            self._sheet = sheet;
	            self._okId = self._name + "_OK";
	            self._cancelId = self._name + "_Cancel";
	            self._closeId = self._name + "_Close";
	            self._filterButtonInfo = filterButtonInfo;
	            self._rowFilter = filterButtonInfo.rowFilter;
	            self._dialogType = dialogType;
	            self._container = self._getContainer();
	            self._initDom();
	        }
	        var _prototype = {
	           
	           
	           
	            _open : function () {},
	            _initDom : function () {
	                this._show();
	                this._render();
	                this._bindGeneralEvent();
	                this._center();
	            },
	            _render : function () {},
	            _center : function () {
	                var self = this, width = self._container.width(), height = self._container.height(), wrapWidth = self._overlay.width(), wrapHeight = self._overlay.height();
	                this._container.css([POSITION, LEFT, TOP], ['fixed', (wrapWidth - width) / 2 + "px", (wrapHeight - height) / 2 + "px"]);
	            },
	            _bindGeneralEvent : function () {
	                var self = this;
	                $("#" + self._okId).bind(CLICK, function () {
	                    var rs = self._confirmTriggerHandle();
	                    if(rs) {
	                        self.close();
	                    }
	                });
	                $("#" + self._cancelId).bind(CLICK, function () {
	                    self._cancelTriggerHandle();
	                    self.close();
	                });
	                $("#" + self._closeId).bind(CLICK, function () {
	                    self._cancelTriggerHandle();
	                    self.close();
	                }).bind(MOUSE_OVER, function () {
	                    this.style.backgroundColor = CLOSE_HOVER_BACKCOLOR;
	                    this.style.color = CLOSE_HOVER_FONTCOLOR;
	                }).bind(MOUSE_OUT, function () {
	                    this.style.backgroundColor = INHERIT;
	                    this.style.color = INHERIT;
	                });
	                $("#" + self._okId + ", #" + self._cancelId).bind(MOUSE_OVER, function () {
	                    $(this).addClass(FILTER_BUTTON_HOVER_CLASS);
	                }).bind(MOUSE_OUT, function () {
	                    $(this).removeClass(FILTER_BUTTON_HOVER_CLASS);
	                });
	                $(document).bind(RESIZE, function () {
	                    self._center();
	                });
	            },
	            _doFilter : function (condition) {
	                var filterButtonInfo = this._filterButtonInfo, colIndex = filterButtonInfo.col, sheet = this._sheet, rowFilter = filterButtonInfo.rowFilter;
	                filterByCondition(colIndex, condition, sheet, rowFilter);
	            },
	            _confirmTriggerHandle : function () {},
	            _cancelTriggerHandle : function () {}
	        };
	        $.extend(_FilterModalDialogBase.prototype, _prototype);
	        return _FilterModalDialogBase;
	    })(BaseDialog);
	    FilterDialogExport._FilterModalDialogBase = _FilterModalDialogBase;
	
	    var _Top10Dialog = (function (_super) {
	        $.inherit(_Top10Dialog, _super);
	         function _Top10Dialog(host, sheet, filterButtonInfo, dialogType) {
	             var self = this;
	             self._width = 230;
	             self._height = 140;
	             self._filterButtonInfo = filterButtonInfo;
	             self._rowFilter = self._filterButtonInfo.rowFilter;
	             self._dialogType = dialogType;
	             self._defaultOption = self._getTop10DefaultValue();
	             _super.call(this, host, sheet, filterButtonInfo, dialogType);
	         }
	         var _proto = {
	             _init : function () {
	                 _super.prototype._init.call(this);
	                 this._render();
	             },
	             _getTop10DefaultValue : function () {
	                 var defaultValue = {rank : 0, item : 10};
	                 var self = this, condition = self._rowFilter._filterItemMap[self._filterButtonInfo.col];
	                 if(condition && condition.length > 0 && condition[0].conType() === 8 ) {
	                     var rank = condition[0].type(), item = condition[0].expected();
	                     defaultValue = {rank : rank, item : item};
	                 }
	                 return defaultValue;
	             },
	             _render : function () {
	                 var html = this._createDialogHtml();
	                 this._getContainer().html(html);
	                 this.setStyle();
	                 this._bindEvent();
	             },
	             _formatInput : function (ele) {
	                 if(ele.value.length === 1) {
	                     ele.value = ele.value.replace(/[^1-9]/g, '');
	                 }else{
	                     ele.value = ele.value.replace(/\D/g, '');
	                 }
	             },
	             _bindEvent : function () {
	                 var self = this;
	                 $("#top10-item").bind("keyup", function () {
	                    $(this).removeClass("gc-filter-top10-rank-illegal");
	                     self._formatInput(this);
	                 }).bind("paste", function () {
	                     $(this).removeClass("gc-filter-top10-rank-illegal");
	                     self._formatInput(this);
	                 });
	             },
	             _confirmTriggerHandle: function () {
	                 var self = this, rank = parseInt($("#top10-rank").val(), 10), item = parseInt($("#top10-item").val(), 10);
	                 var condition = new ConditionalFormatting.Condition(8);
	                 var rs = false;
	                 if(item) {
	                     rs = true;
	                     condition.type(rank);
	                     condition.expected(item);
	                     self._doFilter(condition);
	                 } else {
	                     $("#top10-item").addClass("gc-filter-top10-rank-illegal").focus();
	                 }
	                 return rs;
	             },
	             _createDialogHtml : function () {
	                 var html = '', selectHtml = '';
	                 if(this._defaultOption.rank === 1) {
	                     selectHtml = '<select id="top10-rank"><option value="0">' + sR().top + '</option><option value="1" selected = "selected">' + sR().bottom + '</option></select>';
	                 } else {
	                     selectHtml = '<select id="top10-rank"><option value="0" selected="selected">' + sR().top + '</option><option value="1">' + sR().bottom + '</option></select>';
	                 }
	                 html += '<div class="gc-popup ui-widget ' + FILTER_DIALOG_CLASS + '">' +
	                     '<div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"><span class="gc-filter-dialog-title">' + sR().Top10Filter + '</span><span id="' + this._closeId + '" class="gc-filter-dialog-close">\xd7</span></div>' +
	                     '<div id="top10-desc"><div class="top10-show-text">' + sR().Show + '</div><div class="ui-dialog-hr"></div></div>' +
	                     '<div class="top10-wrap">' + selectHtml +
	                     '<input id="top10-item" class="gc-filter-top10-rank" type="text"  value="' + this._defaultOption.item + '" />' +
	                     '</div>' +
	                     '<div class="top10-footer top10-wrap"><input type="button" id="' + this._okId + '" value="' + sR().OK + '"><input id="' + this._cancelId + '" type="button" class="gc-filter-dialog-close" value="' + sR().Cancel + '"/></div>' +
	                     '</div>';
	                 return html;
	             },
	             setStyle : function () {
	                 $(".gc-popup", this._container[0]).css([BACKCOLOR, WIDTH, HEIGHT], [DIALOG_BACKCOLOR, this._width, this._height]);
	                 $(".ui-dialog-titlebar", this._container[0]).css({"height": "34px", background: "white", fontSize: '12px', fontWeight: "normal", color: '#222', border: "none", borderRadius: '0'});
	                 $(".gc-filter-dialog-title", this._container[0]).css({"float": "left", "height": "34px", "lineHeight": "34px", "display":"inline-block", marginLeft: "15px"});
	                 $(".top10-show-text", this._container[0]).css({"float": "left"});
	                 $(".ui-dialog-hr", this._container[0]).css({"position": "absolute", left : "24px", right : "0", margin: "0 5px", height: "12px", borderBottom: "1px solid #e0e0e0", borderWidth: "thin"});
	                 $("#top10-desc", this._container[0]).css({height: "24px", lineHeight: "24px", marginLeft: "15px", position: RELATIVE, "fontSize": "10px"});
	                 $("#" + this._closeId, this._container[0]).css({"float": "right", "fontSize": "18px", "width": "36px", "height": "34px", "lineHeight":"34px", "textAlign":"center"});
	                 $("#top10-rank", this._container[0]).css({width : "120px", marginRight:"20px", height:"21px", textIndent: "5px", fontSize: 'inherit', padding: '0', marginBottom: 0});
	                 $("#top10-item", this._container[0]).css({width : "60px", textIndent: "5px", padding: 0, height: '21px', margin: 0, fontSize : "inherit", display:'inline-block'});
	                 $(".top10-wrap", this._container[0]).css({padding: "0px 12px", textAlign: "right", color: "#9B9C9C", fontSize: '13px'});
	                 $(".top10-footer", this._container[0]).css({padding: "20px 12px 12px"});
	                 $("#" + this._okId + ", #" + this._cancelId).css({width:"75px", height:"23px", lineHeight: "21px", fontSize:"12px", backgroundColor:"#E1E1E1", border:"1px solid #c2c2c2", padding: 0, display: "inline-block"});
	                 $("#" + this._okId, this._container[0]).css({marginRight: "12px"});
	             }
	         };
	        $.extend(_Top10Dialog.prototype, _proto);
	        return _Top10Dialog;
	    })(_FilterModalDialogBase);
	    
	    var _ColorModalDialog = (function (_super) {
	        $.inherit(_ColorModalDialog, _super);
	        function _ColorModalDialog(host, sheet, filterButtonInfo, dialogType, allColors, isCellColor, selectedColor) {
	            this._width = 416;
	            this._height = 100;
	            this._colorItemWidth = 36;
	            this._colorItemHeight = 24;
	            this._colorItemMaxRow = 8;
	            this._colorItemCountInRow = 7;
	            this._dialogType = dialogType;
	            this._allColors = allColors;
	            this._colorType = isCellColor ? 0  : 1 ;
	            if(selectedColor) {
	                this._selectedColor = formatColor(selectedColor);
	            }else {
	                this._selectedColor = selectedColor;
	            }
	            this._colorDialogSpread = keyword_null;
	            this._colorDialogSheet = keyword_null;
	            _super.call(this, host, sheet, filterButtonInfo, dialogType);
	        }
	        var _proto = {
	           
	           
	           
	           
	            _render : function () {
	                var wrap = this._createColorDialog();
	                this._container.append(wrap);
	                var spreadWrap = $("#color-spread-wrap", this._container[0])[0];
	                this._hoverColor = this._getHoverColor();
	                var isNeedScrollbar = this._setWrapSize(spreadWrap);
	                this._initColorSpread(spreadWrap, isNeedScrollbar);
	                this._bindEvent(this._colorDialogSpread, this._colorDialogSheet);
	            },
	            _getHoverColor:function () {
	               
	               
	               
	               
	               
	                return MENU_COLOR_HOVER;
	            },
	            _setWrapSize: function (wrap) {
	                var count = this._allColors.colorNumber, height, width, isNeedScrollbar = false;
	                width = this._colorItemWidth * this._colorItemCountInRow + 4;
	                if(Math.ceil(count / this._colorItemCountInRow) > this._colorItemMaxRow) {
	                    height = this._colorItemHeight * this._colorItemCountInRow;
	                    isNeedScrollbar = true;
	                    width += 20;
	                }else {
	                    height = this._colorItemHeight * Math.ceil(count / this._colorItemCountInRow);
	                }
	
	                $(wrap).height(height);
	                $(wrap).width(width);
	                return isNeedScrollbar;
	            },
	            _setSelfSheetDefualt: function (spread, sheet, isNeedScrollbar) {
	                spread.suspendPaint();
	                var spreadOption = spread.options, sheetOptions = sheet.options;
	                spreadOption.showHorizontalScrollbar = false;
	                spreadOption.allowContextMenu = false;
	                spreadOption.showVerticalScrollbar = isNeedScrollbar;
	                spreadOption.scrollbarMaxAlign = true;
	                spreadOption.tabStripVisible = false;
	                spreadOption.allowUserResize = false;
	                spreadOption.allowUserDragDrop = false;
	                spreadOption.allowUserDragFill = false;
	                spreadOption.allowUserZoom = false;
	                spreadOption.grayAreaBackColor = "#fff";
	
	                sheetOptions.colHeaderVisible = false;
	                sheetOptions.rowHeaderVisible = false;
	                sheetOptions.selectionBackColor = "transparent";
	                sheetOptions.selectionBorderColor = "transparent";
	                sheetOptions.gridline = {showVerticalGridline: false, showHorizontalGridline: false};
	               
	                sheetOptions.isProtected = true;
	               
	                sheet.setColumnCount(this._colorItemCountInRow + 2);
	                var count = this._allColors.colorNumber;
	                sheet.setRowCount(Math.ceil(count / this._colorItemCountInRow) + 1);
	                sheet.defaults.rowHeight = 21;
	                sheet.defaults.colWidth = 36;
	                sheet.setColumnWidth(0, 2);
	                sheet.setColumnWidth(this._colorItemCountInRow + 1, 2);
	                sheet.setRowHeight(0, 2);
	                spread.resumePaint();
	            },
	            _comfortableFill: function (spread, sheet) {
	                sheet.suspendPaint();
	                var width = (this._colorItemCountInRow - this._allColors.colorNumber) * this._colorItemWidth / 2;
	                sheet.setColumnWidth(0, width);
	                var row, col, pos;
	                for(var color in this._allColors.data) {
	                    if(!this._allColors.data.hasOwnProperty(color)) {
	                        continue;
	                    }
	                    pos = this._getNextCellPos(row, col);
	                    row = pos.row;
	                    col = pos.col;
	                    this._setCellStyle(row, col, color, sheet);
	                }
	                sheet.resumePaint();
	            },
	            _setCellStyle: function (row, col, color, sheet) {
	                var style_tem = new Sheets.CellTypes.Button();
	                style_tem.buttonBackColor(color);
	                style_tem.marginLeft(3);
	                style_tem.marginTop(3);
	                style_tem.marginRight(3);
	                style_tem.marginBottom(3);
	                sheet.setCellType(row, col, style_tem, 3);
	                if(color === this._selectedColor) {
	                    this._setCellBackColor(sheet, row, col, this._hoverColor);
	                }
	            },
	            _getNextCellPos:function (row, col) {
	
	                if(row === keyword_undefined && col === keyword_undefined) {
	                    row = 1;
	                    col = 1;
	                }else if(col < this._colorItemCountInRow) {
	                    col = col + 1;
	                }else {
	                    row = row + 1;
	                    col = 1;
	                }
	                return {row : row, col : col};
	            },
	            _fillAllColors:function (spread, sheet) {
	                sheet.suspendPaint();
	                var row = keyword_undefined, col = keyword_undefined, pos;
	                for(var color in this._allColors.data ) {
	                    if(!this._allColors.data.hasOwnProperty(color)) {
	                        continue;
	                    }
	                    pos = this._getNextCellPos(row, col);
	                    row = pos.row;
	                    col = pos.col;
	                    this._setCellStyle(row, col, color, sheet);
	                }
	                sheet.resumePaint();
	            },
	            _setCellBackColor : function (sheet, row, col, hoverColor) {
	                sheet.suspendPaint();
	                if(this._chooseCellInfo) {
	                    var clearStyle = sheet.getStyle(this._chooseCellInfo.row, this._chooseCellInfo.col, 3);
	                    clearStyle.backColor = "#ffffff";
	                    clearStyle.borderLeft = new Sheets.LineBorder(MENU_COLOR_BORDER_COLOR, Sheets.LineStyle.empty);
	                    clearStyle.borderTop = new Sheets.LineBorder(MENU_COLOR_BORDER_COLOR, Sheets.LineStyle.empty);
	                    clearStyle.borderRight = new Sheets.LineBorder(MENU_COLOR_BORDER_COLOR, Sheets.LineStyle.empty);
	                    clearStyle.borderBottom = new Sheets.LineBorder(MENU_COLOR_BORDER_COLOR, Sheets.LineStyle.empty);
	                    sheet.setStyle(this._chooseCellInfo.row, this._chooseCellInfo.col, clearStyle, 3);
	                }
	                this._chooseCellInfo = {
	                    row : row,
	                    col : col
	                };
	                var style = sheet.getStyle(row, col, 3);
	                style.backColor = hoverColor;
	                style.borderLeft = new Sheets.LineBorder(MENU_COLOR_BORDER_COLOR, Sheets.LineStyle.thin);
	                style.borderTop = new Sheets.LineBorder(MENU_COLOR_BORDER_COLOR, Sheets.LineStyle.thin);
	                style.borderRight = new Sheets.LineBorder(MENU_COLOR_BORDER_COLOR, Sheets.LineStyle.thin);
	                style.borderBottom = new Sheets.LineBorder(MENU_COLOR_BORDER_COLOR, Sheets.LineStyle.thin);
	                sheet.setStyle(row, col, style, 3);
	
	                sheet.resumePaint();
	            },
	            _initColorSpread: function (wrap, isNeedScrollbar) {
	                var colorDialogSpread = new Sheets.Workbook(wrap);
	                var colorDialogSheet = colorDialogSpread.getActiveSheet();
	                this._colorDialogSpread = colorDialogSpread;
	                this._colorDialogSheet = colorDialogSheet;
	                this._setSelfSheetDefualt(colorDialogSpread, colorDialogSheet, isNeedScrollbar);
	                if(this._allColors.colorNumber < this._colorItemCountInRow) {
	                    this._comfortableFill(colorDialogSpread, colorDialogSheet);
	                }else {
	                    this._fillAllColors(colorDialogSpread, colorDialogSheet);
	                }
	            },
	            _getFirstColor : function () {
	                var color = keyword_undefined;
	                for(var item in this._allColors.data) {
	                    if(this._allColors.data.hasOwnProperty(item)) {
	                        color = item;
	                        break;
	                    }
	                }
	                return color;
	            },
	            _createColorDialog :function () {
	                var wrap = $(createElement("div")).addClass("gc-popup ui-widget " + COLOR_DIALOG_CLASS + " " + FILTER_DIALOG_CLASS + " " + NO_USER_SELECT_CLASS);
	                wrap.css({backgroundColor: "#f0f0f0"});
	               
	               
	               
	                var title = this._createColorDialogTitle();
	                wrap.append(title);
	                var head = this._createColorDialogHeader();
	                wrap.append(head);
	                var contentWrap = $(createElement("div")).css([PADDING], ["0 12px"]);
	                var noFill = this._createNoFill();
	                if(noFill !== keyword_undefined) {
	                    contentWrap.append(noFill);
	                }
	                var allColorWrap = this._createAllColors();
	                contentWrap.append(allColorWrap);
	                var selected = this._createSelected();
	                contentWrap.append(selected);
	                wrap.append(contentWrap);
	                wrap.append(this._createColorCustomFooter());
	                return wrap;
	            },
	            _createColorDialogTitle:function () {
	                var div = $(createElement("div")), titleSpan = $(createElement("span")), closeSpan = $(createElement("span")).attr("id", this._closeId);
	                div.css([WIDTH, HEIGHT, 'backgroundColor', PADDING, BOX_SIZING], ["100%", "34px", "#fff", "0 0 0 12px", "border-box"]);
	                titleSpan.css(["float", HEIGHT, "lineHeight", DISPLAY], [LEFT, "34px", "34px", "inline-block"]).html(sR().ColorTitle);
	                closeSpan.css(["float", HEIGHT, "lineHeight", DISPLAY, FONT_SIZE, WIDTH, "textAlign"], ["right", "34px", "34px", "inline-block", "18px", "36px", "center"]).html("\xd7").addClass("gc-filter-dialog-close");
	                div.append(titleSpan);
	                div.append(closeSpan);
	                return div;
	            },
	            _createColorDialogHeader: function () {
	                var div = $(createElement("div")), describe = $(createElement("div")), text;
	                if(this._colorType === 0 && this._dialogType === SUB_MENU_COLOR_SORT) {
	                    text = sR().SortCell;
	                }else if(this._colorType === 0 && this._dialogType === SUB_MENU_COLOR_FILTER) {
	                    text = sR().FilterCell;
	                }else if(this._colorType === 1 && this._dialogType === SUB_MENU_COLOR_SORT) {
	                    text = sR().SortFont;
	                }else if(this._colorType === 1 && this._dialogType === SUB_MENU_COLOR_FILTER) {
	                    text = sR().FilterFont;
	                }
	                div.css(PADDING, "0 12px");
	                describe.css([HEIGHT, "lineHeight"], ["24px", "24px"]).html(text);
	                div.append(describe);
	                return div;
	            },
	            _createNoFill:function () {
	                var rs = keyword_undefined;
	                if(this._allColors[AUTO_MATIC] !== keyword_undefined) {
	                    var isNoFillSelected = (this._selectedColor === "");
	                    var noFillText = this._colorType === 1 ? sR().Automatic : sR().NoFill;
	                    var div = $(createElement("div")).html(noFillText);
	                    div.attr("id", "gc-color-dialog-noFill");
	                    if(isNoFillSelected) {
	                        div.attr("data-checked", "checked");
	                        div.css(["backgroundColor", PADDING, BORDER, "textAlign", "margin"], ["rgb(134,191,160)", "0 12px", "thin solid rgb(160,160,160)", "center", "5px 0"]);
	                    }else {
	                        div.css(["backgroundColor", PADDING, BORDER, "textAlign", "margin"], ["transparent", "0 12px", "thin solid rgb(160,160,160)", "center", "5px 0"]);
	                    }
	                    rs = div;
	                }
	                return rs;
	            },
	            _createAllColors: function () {
	                var div = $(createElement("div")).attr("id", "color-spread-wrap");
	                div.css(["backgroundColor", PADDING, BORDER, WIDTH, "box-sizing"], ["#fff", "6px", "1px solid rgb(160,160,160)", "288px", "content-box"]);
	                return div;
	            },
	            _createSelected:function () {
	                var self = this, div = $(createElement("div")), label = $(createElement("div")).html(sR().Selected), colorFill = $(createElement("div")).attr("id", "gc-color-dialog-selected");
	                div.css([POSITION, PADDING, BOX_SIZING, MARGIN, HEIGHT], [RELATIVE, "0 12px", "content-box", "12px 0", "16px"]);
	                label.css([FLOAT, WIDTH, "text-align"], [LEFT, "60px", "center"]);
	                var backgroundColor = (self._colorType === 1 ) ? AUTOMATIC_COLOR : NO_FILL_COLOR;
	
	               
	                if(self._selectedColor === keyword_undefined) {
	                    self._selectedColor = self._getFirstColor();
	                }
	                if(self._selectedColor !== "") {
	                    backgroundColor = self._selectedColor;
	                }
	                colorFill.css([POSITION, LEFT, "right", HEIGHT, MARGIN_LEFT, BORDER, "backgroundColor"], ["absolute", "70px", "0", "16px", "10px", "thin solid rgb(160,160,160)", backgroundColor]);
	                div.append(label);
	                div.append(colorFill);
	                return div;
	            },
	            _confirmTriggerHandle: function () {
	                var color, $noFill = $("#gc-color-dialog-noFill");
	               
	                if($noFill.length === 1 && $noFill.attr("data-checked") === "checked") {
	                    color = '';
	                }else {
	                    color = $("#gc-color-dialog-selected").css("backgroundColor");
	
	                }
	                this._doConfirmAction(color);
	                return true;
	            },
	            _doConfirmAction:function (color) {
	                var isBackColor = (this._colorType === 0);
	                if(this._dialogType === SUB_MENU_COLOR_SORT) {
	                    this._sortFilterByColor(color, isBackColor);
	                }else if(this._dialogType === SUB_MENU_COLOR_FILTER) {
	                    this._filterByColor(color, isBackColor);
	                }
	            },
	            _sortFilterByColor : function (color, isBackColor, isAsc) {
	                var self = this, filterButtonInfo = self._filterButtonInfo, rowFilter = filterButtonInfo.rowFilter, sheet = self._sheet;
	                if (!rowFilter || !sheet || !sheet._canDoSort()) {
	                    return;
	                }
	                if(color !== "") {
	                    color = formatColor(color);
	                }
	                isAsc = (isAsc === keyword_undefined) ? false : isAsc; 
	                var colIndex = filterButtonInfo.col,
	                    args = {
	                        sheet: sheet,
	                        sheetName: sheet._name,
	                        col: colIndex,
	                        ascending: isAsc,
	                        color: color,
	                        isBackColor: isBackColor,
	                        cancel: false
	                    };
	                sheet._trigger(Events.RangeSorting, args);
	                if (args.cancel === false) {
	                    sheet.suspendPaint();
	                    rowFilter.sortColumnByColor(colIndex, isAsc, color, isBackColor);
	                    sheet.resumePaint();
	                    sheet._trigger(Events.RangeSorted, args);
	                }
	            },
	            _filterByColor : function (color, isBackColor) {
	                var condition = new ConditionalFormatting.Condition(3 );
	                var compareType = isBackColor ? 0 : 1 ;
	                condition.compareType(compareType);
	                condition.expected(color);
	                this._doFilter(condition);
	            },
	            _bindEvent: function (spread, sheet) {
	                var self = this;
	
	                $("#gc-color-dialog-noFill").bind(CLICK, function () {
	                    var backColor = (self._colorType === 1) ? AUTOMATIC_COLOR : NO_FILL_COLOR;
	                    $("#gc-color-dialog-selected").css("backgroundColor", backColor);
	                    $(this).css("backgroundColor", "rgb(134,191,160)");
	                    $(this).attr("data-checked", "checked");
	                });
	                spread.bind(Sheets.Events.ButtonClicked, function (e, args) {
	                    var row = args.row, col = args.col;
	                    var cellType = sheet.getCellType(row, col);
	                    self._setCellBackColor(sheet, row, col, self._hoverColor);
	                    var color = cellType.buttonBackColor();
	                    $("#gc-color-dialog-selected").css("backgroundColor", color);
	                    $("#gc-color-dialog-noFill").css("backgroundColor", "transparent").attr("data-checked", "");
	                });
	
	            },
	            _createColorCustomFooter: function () {
	                var div = $(createElement("div")), okBtn = $(createElement("input")).attr({"type": "button", "value": sR().OK, "id": this._okId}),
	                    cancelBtn = $(createElement("input")).attr({"type": "button", "value": sR().Cancel, "id": this._cancelId}).addClass("gc-filter-dialog-close");
	                var btnStlye = {
	                    width: "75px",
	                    height: "23px",
	                    lineHeight: "21px",
	                    fontSize: "12px",
	                    backgroundColor: "#E1E1E1",
	                    border: "1px solid #c2c2c2",
	                    padding: "0",
	                    display: "inline-block",
	                    margin: "0"
	                };
	                div.addClass("color-custom-footer").css({textAlign: "right", padding: "10px 12px 12px"});
	                okBtn.css(btnStlye).css({marginRight: "12px"});
	                cancelBtn.css(btnStlye);
	                div.append(okBtn[0]);
	                div.append(cancelBtn[0]);
	                return div;
	            }
	
	        };
	        $.extend(_ColorModalDialog.prototype, _proto);
	        return _ColorModalDialog;
	    })(_FilterModalDialogBase);
	   
	
	    var _CustModalDialog = (function (_super) {
	        $.inherit(_CustModalDialog, _super);
	        function _CustModalDialog(host, sheet, filterButtonInfo, dialogType, allValues, isCustom, conditionType, operatorType, selectType) {
	            var self = this;
	            self._width = 840;
	            self._height = 260;
	            self._filterButtonInfo = filterButtonInfo;
	            self._rowFilter = self._filterButtonInfo.rowFilter;
	            self._dialogType = dialogType;
	            self._isCustom = isCustom;
	            self._allValues = allValues;
	            self._conditionType = conditionType;
	            self._selectType = selectType;
	            self._operatorType = operatorType;
	            self._setDefaultOption(isCustom);
	            _super.call(this, host, sheet, filterButtonInfo, dialogType);
	        }
	        var _proto = {
	            _render : function () {
	                var self = this, html = self._createCustomDialog(this._defaultOption);
	                self._container.append(html);
	                $(".gc-popup", this._container[0]).css([BACKCOLOR, WIDTH, HEIGHT, FONT_SIZE], [DIALOG_BACKCOLOR, this._width, this._height, '12px']);
	                self._bindEvent();
	            },
	            _bindEvent : function () {
	                var self = this;
	                $(".filter-custom-select-input").bind("change", function() {
	                    var option = $(this).find("option")[this.selectedIndex];
	                    $(this).parent().find("input").val($(option).text()).attr("gc-data", $(this).val());
	                });
	                $($(".filter-custom-select-input option")[0]).bind("click", function() {
	                    var parent = $(this).parent();
	                    parent.trigger("change");
	                });
	                $("#first-condition-expected input, #sec-condition-expected input").bind("change", function () {
	                    var val = $(this).val();
	                    var index = -1;
	                    self._allValues.forEach(function (elem, item) {
	                        if(elem.text === val) {
	                            index = item;
	                        }
	                    });
	                    $(this).attr("gc-data", index);
	                });
	            },
	            _getExpected : function ($el, isTextEqual) {
	                var text = $el.val(), value;
	                if(isTextEqual) {
	                    return text;
	                }
	                var index = $el.attr("gc-data");
	                var data = this._allValues[index];
	                if(data) {
	                    value = data.value;
	                }else {
	                    value = text;
	                }
	
	                return value;
	            },
	            _confirmTriggerHandle : function () {
	                var self = this, logic = parseInt($("#filter-logical-wrap input:checked").val(), 10);
	                var condition = self._createCustomCondition(logic);
	                var isSuccess = false;
	                if(condition) {
	                    self._doFilter(condition);
	                    isSuccess = true;
	                } else {
	                    $("#first-condition-type").focus();
	                }
	                return isSuccess;
	            },
	            _createCondition:function ($TypeEl, $valueEl) {
	                var conType, compareType, expected, typeString = $TypeEl.val().trim();
	                if(typeString) {
	                    compareType = parseInt(typeString.split("-")[0], 10);
	                    conType = parseInt(typeString.split("-")[1], 10);
	                } else {
	                    return keyword_null;
	                }
	                expected = this._getExpected($valueEl, compareType === 0 && conType === 2);
	
	
	                var condition = new ConditionalFormatting.Condition(conType);
	                if( this._isBooleanExpected(expected)) {
	                    condition.conType(2 );
	                }
	                condition.compareType(compareType);
	                if(getType(expected) === 'string') {
	                    expected = unescapeHtml(expected);
	                }
	                condition.expected(expected);
	                condition.treatNullValueAsZero(false);
	                condition.ignoreCase(true);
	                if(getType(expected) === 'string' && expected.indexOf("*") === -1 && expected.indexOf("?") === -1) {
	                    condition.useWildCards(false);
	                }else if(getType(expected) === 'string' && (expected.indexOf("*") !== -1 || expected.indexOf("?") !== -1)) {
	                    condition.conType(2 );
	                    condition.useWildCards(true);
	                }
	                return condition;
	            },
	            
	            _createCustomCondition:function (logic) {
	
	                var condition1 = this._createCondition($("#first-condition-type"), $("#first-condition-expected input"));
	                var condition2 = this._createCondition($("#sec-condition-type"), $("#sec-condition-expected input"));
	
	               
	                var condition;
	                if(!condition2) {
	                    condition = condition1;
	                } else {
	                    condition = new ConditionalFormatting.Condition(0 );
	                    condition.compareType(logic);
	                    condition.item1(condition1);
	                    condition.item2(condition2);
	                }
	                return condition;
	            },
	            _getFilterTitle:function () {
	                var filterButtonInfo = this._filterButtonInfo, rowFilter = filterButtonInfo.rowFilter, filterTitle = this._sheet.getText(filterButtonInfo.row, filterButtonInfo.col);
	                if(rowFilter && rowFilter.range.row <= 0 ) {
	                    filterTitle = this._sheet.getText(filterButtonInfo.row, filterButtonInfo.col, filterButtonInfo.sheetArea);
	                }
	                return filterTitle;
	            },
	            
	            _createCustomDialog : function (defaultOption) {
	                var filterTitle = this._getFilterTitle();
	                var wrap = $(createElement("div")).addClass("gc-popup ui-widget " + FILTER_DIALOG_CLASS);
	                wrap.css({backgroundColor: "#f0f0f0"});
	                wrap.append(this._createCustomTitle());
	                wrap.append(this._createContentHead(filterTitle));
	               
	                var condition1 = this._createConditionListUI("first-condition-type", "first-condition-expected", (defaultOption.compareType1||0), defaultOption.expected1, defaultOption.conType1, true );
	                wrap.append(condition1);
	                wrap.append(this._createCustomLogicEle(defaultOption.logic));
	                var condition2 = this._createConditionListUI("sec-condition-type", "sec-condition-expected", defaultOption.compareType2, defaultOption.expected2, defaultOption.conType2);
	                wrap.append(condition2);
	                condition2.css([POSITION, PADDING], [RELATIVE, "0 0 12px 35px"]);
	                var explain = $(createElement("div")), explainText1 = $(createElement("p")).html(sR().Explain1).css({margin: "0"}),
	                    explainText2 = $(createElement("p")).html(sR().Explain2).css({margin: "0"});
	                explain.append(explainText1);
	                explain.append(explainText2);
	                explain.css({fontSize: "10px", textIndent: "12px"});
	                wrap.append(explain);
	                wrap.append(this._createCustomFooter());
	                return wrap;
	            },
	            _createConditionListUI:function (selectId, valueId, selectedOperator, selectedValue, selectedType, needDefault) {
	                var conditionUI = $(createElement("div"));
	                conditionUI.css([POSITION, PADDING], [RELATIVE, "0 0 12px 35px"]);
	                conditionUI.append(this._createCustomSelectElement(selectedOperator, selectedType, needDefault).attr("id", selectId));
	                conditionUI.append(this._createCustomValueChooseElement(this._allValues, selectedValue).attr("id", valueId));
	                return conditionUI;
	            },
	            _createCustomTitle:function () {
	                var div = $(createElement("div")), titleSpan = $(createElement("span")), closeSpan = $(createElement("span")).attr("id", this._closeId);
	                div.css([WIDTH, HEIGHT, 'backgroundColor', PADDING, BOX_SIZING], ["100%", "34px", "#fff", "0 0 0 12px", "border-box"]);
	                titleSpan.css(["float", HEIGHT, "lineHeight", DISPLAY], [LEFT, "34px", "34px", "inline-block"]).html(sR().CustomTitle);
	                closeSpan.css(["float", HEIGHT, "lineHeight", DISPLAY, FONT_SIZE, WIDTH, "textAlign"], ["right", "34px", "34px", "inline-block", "18px", "36px", "center"]).html("\xd7").addClass("gc-filter-dialog-close");
	                div.append(titleSpan);
	                div.append(closeSpan);
	                return div;
	            },
	            _createCustomLogicEle:function (logic) {
	                var logicWrap = $(createElement('div')), andRadio = $(createElement("input")).attr({name:"filter-logical", id:"filter-dialog-and", "type":"radio"}).val(1).css([WIDTH, DISPLAY], ['unset', 'inline-block']),
	                    orRadio = $(createElement("input")).attr({name:"filter-logical", id:"filter-dialog-or", type:"radio"}).val(0).css([WIDTH, DISPLAY], ['unset', 'inline-block']),
	                    andLabel = $(createElement("label")).attr({"for":"filter-dialog-and"}).html(sR().And).css([MARGIN_RIGHT, 'font-weight', FONT_SIZE, DISPLAY, 'margin-bottom', PADDING], ["10px", 'inherit', '13px', 'inline-block', '0', '0']),
	                    orLabel = $(createElement("label")).attr({"for":"filter-dialog-or"}).html(sR().Or).css([MARGIN_RIGHT, 'font-weight', FONT_SIZE, DISPLAY, 'margin-bottom', PADDING], ["10px", 'inherit', '13px', 'inline-block', '0', '0']);
	                logicWrap.attr("id", "filter-logical-wrap");
	                logicWrap.css({padding : "0 0 0 40px", height : "30px"});
	                if(logic === 0) {
	                    orRadio.prop('checked', true);
	                    andRadio.prop('checked', false);
	                } else {
	                    orRadio.prop('checked', false);
	                    andRadio.prop('checked', true);
	                }
	                logicWrap.append(andRadio);
	                logicWrap.append(andLabel);
	                logicWrap.append(orRadio);
	                logicWrap.append(orLabel);
	                return logicWrap;
	            },
	            _createContentHead: function (filterTitle) {
	                var div = $(createElement("div")), describe = $(createElement("div")).html(sR().ShowRows);
	                div.css(PADDING, "0 12px");
	                describe.css([HEIGHT, "lineHeight"], ["24px", "24px"]);
	                div.append(describe);
	               
	                var wrap = $(createElement("div"));
	                var line = $(createElement("div"));
	                var title;
	                if(filterTitle) {
	                    title = $(createElement("div")).html(escapeHtml(filterTitle));
	                    title.css([FLOAT, "maxWidth", 'textOverflow', "whiteSpace", "overflow"], [LEFT, "300px", "ellipsis", "nowrap", "hidden"]);
	                    wrap.css({height: "24px", lineHeight: "24px", marginLeft: "15px", "fontSize": "10px"});
	                    line.css({overflow: "hidden", margin: "0 5px", height: "12px", borderBottom: "1px solid #e0e0e0", borderWidth: "thin"});
	                    wrap.append(title);
	                }else{
	                    wrap.css({height: "12px", lineHeight: "2px", marginLeft: "15px", "fontSize": "10px"});
	                    line.css({margin: "0 5px", height: "2px", borderBottom: "1px solid #e0e0e0", borderWidth: "thin"});
	                }
	                wrap.append(line);
	                div.append(wrap);
	                return div;
	            },
	            _createCustomSelectElement:function (selectedOperator, selectedType, needDefault) {
	                var list = [], isMacthed = false;
	                if(this._conditionType === 6 || this._conditionType === 5 ) {
	                    list = DATE_CUSTOM_LIST;
	                } else if(this._conditionType === 1) {
	                    list = NUMBER_CUSTOM_LIST;
	                } else { 
	                    list = TEXT_CUSTOM_LIST;
	                }
	                var select = $(createElement("select"));
	                var selectStyle = {
	                    height: "25px",
	                    width: "230px",
	                    marginBottom : 0,
	                    marginRight: "12px",
	                    fontSize: "inherit",
	                    padding : 0,
	                    boxSizing : 'border-box'
	                };
	                select.css(selectStyle);
	                var optionHtml = '<option>&nbsp;</option>', tem, isSelect, isSameConType = false;
	                if(selectedOperator === keyword_undefined) {
	                    optionHtml = '<option selected="selected" >&nbsp;</option>';
	                }
	                for(var i = 0 ; i < list.length ; i++) {
	                    tem = list[i].split("-");
	                    isSelect = false;
	                    if(tem[2]) {
	                        isSameConType = false;
	                       
	                        if(selectedType === parseInt(tem[2], 10) || (this._selectType === 6 && parseInt(tem[2], 10) === 5) || parseInt(tem[2], 10) === 11) {
	                            isSameConType = true;
	                        }
	                        if(isSameConType && selectedOperator === parseInt(tem[1], 10)) {
	                            isSelect = true;
	                        }
	                    }
	                    if(isSelect) {
	                        isMacthed = true;
	                        optionHtml += '<option selected="selected" value="' + tem[1] + "-" + tem[2] + '">' + sR()[tem[0]] + '</option>';
	                    } else {
	                        optionHtml += '<option value="' + tem[1] + "-" + tem[2] + '">' + sR()[tem[0]] + '</option>';
	                    }
	                }
	                select[0].innerHTML = optionHtml;
	                $("option", select[0]).css({height: "20px"});
	                if(!isMacthed && needDefault) {
	                    $($("option", select[0])[1]).attr("selected", "selected");
	                }
	                return select;
	            },
	            _getSelectOptionText: function (value) {
	                var text = escapeHtml(value);
	               
	                if(text && text.length > 100) {
	                    text = text.substr(0, 100) + "...";
	                }
	                return text;
	            },
	            _createCustomValueChooseElement:function (list, value) {
	                var chooseIndex = -1, chooseText = value;
	                var wrap = $(createElement("div")), select = $(createElement("select")).addClass("filter-custom-select-input"), input = $(createElement("input")), blank = sR().Blanks;
	                var selectStyle = {
	                    height: "25px",
	                    width: "540px",
	                    margin: 0,
	                    padding: 0
	                };
	                wrap.css([POSITION, LEFT, "top"], ['absolute', '278px', '0']);
	               
	                input.css([POSITION, LEFT, TOP, WIDTH, "textIndent", BORDER, HEIGHT, BOX_SIZING, "outline", PADDING, MARGIN], ["absolute", "2px", "2px", "520px", "5px", 0, "21px", "border-box", NONE, 0, 0]);
	
	                select.css(selectStyle);
	                var optionHtml = '';
	                for(var i = 0 ; i < list.length ; i++) {
	                    if(list[i].text === blank && list[i].value === keyword_null) {
	                       continue;
	                    }
	                    var text = this._getSelectOptionText(list[i].text);
	                   
	                    if((list[i].value + "") === (value + "")) {
	                        chooseIndex = i;
	                        chooseText = text;
	                    }
	                    optionHtml += '<option value="' + i + '">' + text + '</option>';
	                }
	                select[0].innerHTML = optionHtml;
	                select[0].selectedIndex = -1;//it used to solve the first option choose but not trigger change event
	
	               
	                if(getType(chooseText) === 'date') {
	                    var DateTimeFormat = CultureManager._getCultureInfo(CultureManager.culture()).DateTimeFormat;
	                    chooseText = _DateTimeHelper._localeFormat(chooseText, DateTimeFormat.shortDatePattern);
	                }
	
	                input.attr("gc-data", chooseIndex).val(chooseText);
	
	                wrap.append(select);
	                wrap.append(input);
	                return wrap;
	            },
	            _createCustomFooter :function () {
	                var div = $(createElement("div")), okBtn = $(createElement("input")).attr({"type": "button", "value": sR().OK, "id": this._okId}),
	                    cancelBtn = $(createElement("input")).attr({"type": "button", "value": sR().Cancel, "id": this._cancelId}).addClass("gc-filter-dialog-close");
	                var btnStlye = {
	                    width: "75px",
	                    height: "23px",
	                    lineHeight: "21px",
	                    fontSize: "12px",
	                    backgroundColor: "#E1E1E1",
	                    border: "1px solid #c2c2c2",
	                    padding: 0,
	                    display : 'inline-block'
	                };
	                div.addClass("custom-footer").css({textAlign: "right", padding: "10px 12px 12px"});
	                okBtn.css(btnStlye).css({marginRight: "12px"});
	                cancelBtn.css(btnStlye);
	                div.append(okBtn[0]);
	                div.append(cancelBtn[0]);
	                return div;
	            },
	            _setDefaultOption: function (isCustom) {
	                var self = this, condition = self._rowFilter._filterItemMap[self._filterButtonInfo.col];
	                var defaultOption = {
	                        conType1: 2,
	                        conType2: keyword_undefined,
	                        compareType1: 0,
	                        compareType2: keyword_undefined,
	                        expected1: keyword_undefined,
	                        expected2: keyword_undefined,
	                        logic: 1
	                    };
	                if(condition && condition.length) {
	                    condition = condition[0];
	                }else{
	                    condition = keyword_null;
	                }
	                self._defaultOption = self._setDefaultChooseData(defaultOption, isCustom, condition);
	            },
	            _getConditionScope: function (condition, defaultOption) {
	                var DateTimeFormat = CultureManager._getCultureInfo(CultureManager.culture()).DateTimeFormat;
	                var scope = {}, expectTypeId = condition.expectTypeId();
	                if(expectTypeId === 0) {
	                    scope = condition.getExConditionDateScope(condition.expected());
	                }else if(expectTypeId === 6 ) {
	                    var start = new Date(), end = new Date();
	                    start.setMonth(0, 1);//set date as 1/1/yyyy ,the first day of a year
	                    start.setHours(0, 0, 0, 0);
	                    end.setHours(23, 59, 59, 59);
	                    scope = {
	                        from : start,
	                        to : end
	                    };
	                }else if(expectTypeId === 3 ) {
	                    defaultOption.conType1 = this._selectType;
	                    defaultOption.compareType1 = this._operatorType;
	                    defaultOption.expected1 = keyword_undefined;
	                    return defaultOption;
	                }
	
	                defaultOption.conType1 = 5 ;
	                defaultOption.conType2 = 5 ;
	                defaultOption.compareType1 = 5 ;
	                defaultOption.compareType2 = 2 ;
	                defaultOption.expected1 = _DateTimeHelper._localeFormat(scope.from, DateTimeFormat.shortDatePattern);
	                defaultOption.expected2 = _DateTimeHelper._localeFormat(scope.to, DateTimeFormat.shortDatePattern);
	                return defaultOption;
	            },
	           
	            _setDefaultChooseData:function (defaultOption, isCustom, condition) {
	               
	                var isSameConType = condition && ((condition.conType() === this._conditionType) || (condition.conType() === 11 && (this._conditionType === 1 || this._conditionType === 2)));
	               
	                var isSameCompareType = condition && (condition.compareType() === this._operatorType || condition.conType() === 0 );
	                if(condition && isCustom === 1 && condition.conType() === 6  && (condition.expectTypeId() === 0 || condition.expectTypeId() === 6  || condition.expectTypeId() === 3 )) {
	                    return this._getConditionScope(condition, defaultOption);
	                }
	
	                var isSameItemType = true;
	                if(this._selectType === 1  && condition && condition.conType() === 0) {
	                    var item1CompareType = condition.item1().compareType(), item2CompareType = condition.item2().compareType();
	                   
	                    if(!(Math.max(item1CompareType, item2CompareType) === 5 && Math.min(item1CompareType, item2CompareType) === 3)) {
	                        isSameItemType = false;
	                    }
	                }
	
	               
	                if(isCustom === 1 || (isSameConType && isSameCompareType && isSameItemType)) {
	                   
	                    if(condition && condition.conType() === 0 ) {
	                        this._conditionType = this._selectType;
	                        defaultOption.conType1 = condition.item1().conType();
	                        defaultOption.conType2 = condition.item2().conType();
	                        defaultOption.compareType1 = condition.item1().compareType();
	                        defaultOption.compareType2 = condition.item2().compareType();
	                        defaultOption.expected1 = condition.item1().expected();
	                        defaultOption.expected2 = condition.item2().expected();
	                       
	                        defaultOption.logic = condition.compareType();
	                    }else if(condition && condition.conType() !== 0  && condition.conType() !== 3 ) {
	                        var compareType = condition.compareType(), conType = condition.conType();
	                       
	                       
	                       
	                        defaultOption.conType1 = conType;
	
	                        defaultOption.expected1 = condition.expected();
	                        defaultOption.compareType1 = compareType;
	                    }
	                }else if(this._conditionType === 0 ) {
	                   
	                    this._conditionType = this._selectType;
	                    if(this._selectType === 1) {
	                        defaultOption.conType1 = 1;
	                        defaultOption.conType2 = 1;
	                        defaultOption.compareType1 = 3;// GeneralComparisonOperators :is greater or equal
	                        defaultOption.compareType2 = 5;// GeneralComparisonOperators  :is less than or equal
	                    }else if(this._selectType === 5) {
	                        defaultOption.conType1 = 5;
	                        defaultOption.compareType1 = 5;//  DateCompareType :afterEqualsTo
	                        defaultOption.conType2 = 5;
	                        defaultOption.compareType2 = 3;//  DateCompareType :beforeEqualsTo
	                    }
	                }else if(this._conditionType === 1  && this._isBooleanExpectConditon(condition) ) {
	                    defaultOption.conType1 = this._selectType;
	                    defaultOption.compareType1 = this._operatorType;
	                    defaultOption.expected1 = condition.expected();
	                } else {
	                   
	                    defaultOption.conType1 = this._selectType;
	                    defaultOption.compareType1 = this._operatorType;
	                    defaultOption.expected1 = keyword_undefined;
	                }
	
	                return defaultOption;
	            },
	            _isBooleanExpected : function (expected) {
	                return (expected !== keyword_undefined && expected === 'TRUE' || expected === 'FALSE');
	            },
	            _isBooleanExpectConditon:function (condition) {
	                if(!condition) {
	                    return false;
	                }
	                var flag = false, expected = condition.expected();
	                if(condition.conType() === 1  && this._isBooleanExpected(expected)) {
	                    flag = true;
	                }
	                return flag;
	            }
	        };
	        $.extend(_CustModalDialog.prototype, _proto);
	        return _CustModalDialog;
	    })(_FilterModalDialogBase);
	
	    
	
	   
	
	
	    module.exports = FilterDialogExport;
	})();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Sheets.ConditionalFormatting;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {};
	
	}());

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Sheets = __webpack_require__(2);
	    var Common = __webpack_require__(3);
	    var Commands = __webpack_require__(8);
	    var ConditionalFormatting = __webpack_require__(5);
	    var Filter = __webpack_require__(1);
	
	    var keyword_null = null, keyword_undefined = void 0, createConditional = ConditionalFormatting._createCondition,
	        createRange = Sheets._createRange, isNullOrUndefined = Common._Types._isNullOrUndefined, parseIntFunc = parseInt,
	        arrayHelper = Common._ArrayHelper, arrayHelper_indexOf = arrayHelper._indexOf, arrayHelper_contains = arrayHelper._contains,
	        arrayHelper_remove = arrayHelper._remove, arrayHelper_getLength = arrayHelper._getLength,
	        HIDE_ROW_FILTER = 'HideRowFilter';
	    var $ = Sheets.GC$, $_each = $.each, _FilterButtonInfo = Filter._FilterButtonInfo;
	    var sR = function () {
	        return Common._getResource(Filter.SR)();
	    };
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	
	   
	    function findButtonInfo(buttonInfoModel, row, col, sheetArea) {
	        var btnInfo, i;
	        for (i = 0; i < arrayHelper_getLength(buttonInfoModel); i++) {
	            btnInfo = buttonInfoModel[i];
	            if (btnInfo && btnInfo.row === row && btnInfo.col === col && btnInfo.sheetArea === sheetArea) {
	                return btnInfo;
	            }
	        }
	        return keyword_null;
	    }
	
	    var sheetEx = {
	       
	        
	        rowFilter: function (value) {
	            var self = this, rowFilter = self._rowFilter, filterRowsVisibleInfo = self.filterRowsVisibleInfo;
	            if (arrayHelper_getLength(arguments)) {
	                self._modelManager._backupFilter(rowFilter, 0 );
	
	                if (rowFilter) {
	                    rowFilter.reset();
	                }
	                rowFilter = self._rowFilter = value;
	                if (rowFilter) {
	                    self._rowFilter._sheet = self;
	                } else if (filterRowsVisibleInfo) {
	                    filterRowsVisibleInfo._reset();
	                }
	                self._invalidate();
	                return self;
	            }
	            return rowFilter;
	        },
	        _createFilterButtonModel: function () {
	            var self = this, filerBtnInfoModel = [], filter = self.rowFilter(), range = filter && filter.range,
	                tableManager = self.tables, row, col, btnInfo;
	           
	            if (range) {
	                var range_row = range.row, range_col = range.col, sheetArea,
	                    endCol = range_col < 0 ? getSheetColumnCount(self) : range_col + range.colCount;
	                col = range_col < 0 ? 0 : range_col;
	                if (range_row < 1) {
	                    row = getSheetRowCount(self, 1 ) - 1;
	                    sheetArea = 1 ;
	                } else {
	                    row = range_row - 1;
	                    sheetArea = 3 ;
	                }
	                if (row >= 0) {
	                    while (col < endCol) {
	                        if (filter.filterButtonVisible(col)) {
	                            var spans = self.getSpans(createRange(row, col, 1, 1), sheetArea), spanCell;
	                            btnInfo = new _FilterButtonInfo(filter);
	                            btnInfo.sheetArea = sheetArea;
	                            btnInfo.row = row;
	                            if (arrayHelper_getLength(spans)) {
	                                spanCell = spans[0];
	                                btnInfo.row = spanCell.row;
	                                btnInfo.col = spanCell.col;
	                                col += spanCell.colCount;
	                            } else {
	                                btnInfo.col = col;
	                                col++;
	                            }
	                            filerBtnInfoModel.push(btnInfo);
	                        } else {
	                            col++;
	                        }
	                    }
	                }
	            }
	           
	            if (tableManager) {
	                var tables = tableManager.all();
	                $_each(tables, function (p, item) {
	                    row = item.headerIndex();
	                    if (item && item.showHeader() && row >= 0) {
	                        var cr = item.range(), j;
	                        for (j = 0; j < cr.colCount; j++) {
	                            col = cr.col + j;
	                            if (item.filterButtonVisible(j)) {
	                                btnInfo = new _FilterButtonInfo(item.rowFilter(), row, col, 3 );
	                                filerBtnInfoModel.push(btnInfo);
	                            }
	                        }
	                    }
	                });
	            }
	            return filerBtnInfoModel;
	        },
	        _getFilterButtonModel: function () {
	            var self = this, filterButtonsModel = self._filterButtonsModel;
	            if (!filterButtonsModel && Filter) {
	                filterButtonsModel = self._filterButtonsModel = self._createFilterButtonModel();
	            }
	            return filterButtonsModel;
	        },
	        _isRowFilterOut: function (row, sheetArea) {
	            var filterRowsVisibleInfo = this.filterRowsVisibleInfo;
	            if (isNullOrUndefined(sheetArea)) {
	                sheetArea = 3 ;
	            }
	            return !!((sheetArea === 3  || sheetArea === 2 ) && filterRowsVisibleInfo && !filterRowsVisibleInfo._rowVisible(row));
	        },
	        _hasRowFilterOut: function () {
	            return this.filterRowsVisibleInfo._hasFilterOut();
	        },
	        _getFilterButtonRect: function (cellRect, sheetArea) {
	            var sheet = this, zoomFactor = sheet.zoom(), sheetParent = sheet.parent,
	                filterButtonZoom = zoomFactor > 1 ? 1 : zoomFactor,
	                sheetAreaRowHeight = (sheetArea === 3  || sheetArea === keyword_undefined) ? sheet.defaults.rowHeight : sheet.defaults.colHeaderRowHeight,
	                width = parseIntFunc((Math.min(20, sheetAreaRowHeight) * filterButtonZoom).toString());
	            if (sheetParent && sheetParent.options.useTouchLayout) {
	                width = parseIntFunc((sheetAreaRowHeight * zoomFactor).toString());
	            }
	            return {
	                x: cellRect.x + cellRect.width - width,
	                y: cellRect.y + cellRect.height - width,
	                width: width,
	                height: width
	            };
	        }
	    };
	    $.extend(Sheets.Worksheet.prototype, sheetEx);
	   
	
	
	   
	   
	    
	    Filter.FilterActionType = {
	        
	        filter: 0,
	        
	        unfilter: 1
	    };
	   
	
	   
	    function addItemType(item, itemTypeArray) {
	        var conditionType = getConditionType(item), compareType = item.compareType();
	        if (conditionType === 2  || conditionType === 7 ) {
	            if (arrayHelper_indexOf(itemTypeArray, 'T') === -1) {
	                itemTypeArray.push('T');
	            }
	        } else if (conditionType === 3 ) {
	            if (compareType === 0  && arrayHelper_indexOf(itemTypeArray, 'BC') === -1) {
	                itemTypeArray.push('BC');
	            } else if (compareType === 1  && arrayHelper_indexOf(itemTypeArray, 'FC') === -1) {
	                itemTypeArray.push('FC');
	            }
	        } else if (arrayHelper_indexOf(itemTypeArray, 'V') === -1) {
	            itemTypeArray.push('V');
	        }
	    }
	
	    function getItemType(filterItems) {
	        var itemTypeArray = [], i;
	        for (i = 0; i < arrayHelper_getLength(filterItems); i++) {
	            var filterItem = filterItems[i];
	            if (getConditionType(filterItem) === 0 ) {
	                var item1 = filterItem.item1(), item2 = filterItem.item2();
	                item1 && addItemType(item1, itemTypeArray);
	                item2 && addItemType(item2, itemTypeArray);
	            } else {
	                addItemType(filterItem, itemTypeArray);
	            }
	        }
	        return itemTypeArray;
	    }
	
	    function getSheetColumnCount(sheet) {
	        return sheet.getColumnCount();
	    }
	
	    function getSheetRowCount(sheet, sheetArea) {
	        return sheet.getRowCount(sheetArea);
	    }
	
	    function getConditionType(item) {
	        return item.conType();
	    }
	
	    var _defaultDialogVisibleInfo = {
	        sortByValue : true,
	        sortByColor : true,
	        filterByColor : true,
	        filterByValue : true,
	        listFilterArea : true
	    };
	
	    var RowFilterBase = (function () {
	       
	        
	        function RowFilterBase(range) {
	            var self = this;
	           
	            
	            self.range = range;
	            self.reset();
	           
	            
	            self.typeName = '';
	            self.filterHandler = keyword_null;
	        }
	
	        RowFilterBase.prototype = {
	           
	            
	            filterButtonVisible: function (col, value) {
	                var self = this, sheet = self._sheet, range = self.range, c = self._getStartCol(range), endC = self._getEndCol(range, sheet), args = arguments,
	                    filterButtonVisibleInfo = self._filterButtonVisibleInfo, isLegalCol = col >= c && col < endC, argLength = arrayHelper_getLength(args),
	                    arg0 = args[0], argType = typeof arg0, i;
	                if (argLength === 0) {
	                    for (i = c; i < endC; i++) {
	                        if (filterButtonVisibleInfo[i]  || filterButtonVisibleInfo[i] === keyword_undefined) {
	                            return true;
	                        }
	                    }
	                    return false;
	                }
	                if (argLength === 1) {
	                    if (argType === 'number') {
	                        if (isLegalCol && filterButtonVisibleInfo[col] === keyword_undefined) {
	                            filterButtonVisibleInfo[col] = true;
	                        }
	                        return filterButtonVisibleInfo[col];
	                    } else if (argType === 'boolean') {
	                        sheet._modelManager._backupFilter(self, 3 );
	
	                        for (i = c; i < endC; i++) {
	                            filterButtonVisibleInfo[i] = arg0;
	                        }
	                    }
	                } else if (argLength === 2 && isLegalCol) {
	                    sheet._modelManager._backupFilter(self, 4 , col);
	
	                    filterButtonVisibleInfo[col] = value;
	                }
	                if (sheet) {
	                    sheet._invalidate();
	                }
	                return self;
	            },
	            _getStartCol: function (range) {
	                return range.row < 0 ? 0 : range.col;
	            },
	            _getEndCol: function (range, sheet) {
	                return range.row < 0 ? getSheetColumnCount(sheet) : range.col + range.colCount;
	            },
	           
	            
	            addFilterItem: function (col, condition) {
	                var self = this, sheet = self._sheet, range = self.range,
	                    filterItemMap = self._filterItemMap, filterItems = filterItemMap[col];
	                if (isNullOrUndefined(condition)) {
	                    throw new Error(sR().Exp_FilterItemIsNull);
	                }
	                if (col < -1 || col >= getSheetColumnCount(sheet)) {
	                    throw new Error(sR().Exp_InvalidColumnIndex);
	                }
	                if (range) {
	                    sheet._modelManager._backupFilter(self, 5 , col);
	
	                    range = sheet._getActualRange(range);
	                    if (col < range.col || col >= range.col + range.colCount) {
	                        return;
	                    }
	                    if (!filterItems) {
	                        filterItems = [];
	                    }
	                    filterItems.push(condition);
	                    filterItemMap[col] = filterItems;
	                }
	            },
	           
	            
	            removeFilterItems: function (col, ignoreUpdateLayout) {
	                this._sheet._modelManager._backupFilter(this, 6 , col);
	
	                this._removeFilterItemsInternal(col);
	                this.unfilter(col, ignoreUpdateLayout);
	            },
	            _removeFilterItemsInternal: function (col) {
	                var self = this, filterItemMap = self._filterItemMap;
	                self._removeFilteredItems(col);
	                if (filterItemMap[col]) {
	                    filterItemMap.splice(col, 1, keyword_null);
	                }
	            },
	           
	            
	            unfilter: function (col, ignoreUpdateLayout) {
	                var self = this, sheet = self._sheet;
	                if (sheet) {
	                    sheet._modelManager._backupFilter(self, 2 );
	
	                    var columns = [];
	                    var filteredColumns = self._filteredColumns, i;
	                    if (isNullOrUndefined(col)) {
	                        for (i = arrayHelper_getLength(filteredColumns) - 1; i >= 0; i--) {
	                            columns.push(filteredColumns[i]);
	                            self._unfilterColumn(filteredColumns[i]);
	                        }
	                    } else {
	                        columns.push(col);
	                        self._unfilterColumn(col);
	                        self.reFilter(ignoreUpdateLayout);
	                    }
	                    if(!ignoreUpdateLayout) {
	                        self._updateLayoutByFilter(sheet, 1 , columns);
	                    }
	                }
	            },
	            _filterColumn: function (col) {
	                var self = this, range = self.range;
	                self._unfilterColumn(col);
	                if (self._filterItemMap[col] && range) {
	                    var range_col = range.col;
	                    if (range_col !== -1 && (col < range_col || col >= range_col + range.colCount)) {
	                        return;
	                    }
	                    range = self._sheet._getActualRange(range);
	                    var startRow = range.row, rowCount = range.rowCount, dataCache = self._getRowDataCache(col, startRow, rowCount), row,
	                        otherConditionals = self._filterRowsWithTextEquals(startRow, rowCount, col, dataCache);
	                    for (row = startRow; row < startRow + rowCount; row++) {
	                        if (!self.isRowFilteredOut(row)) {
	                            self._filterRowByCell(otherConditionals, row, col, dataCache);
	                        }
	                    }
	                   
	                    self._setColumnFilteredState(col, true);
	                }
	            },
	            _getRowDataCache: function (col, rBegin, rCount) {
	                var self = this, sheet = self._sheet, itemTypeArray = getItemType(self._filterItemMap[col]),
	                    dataCache = {}, itemTypeArrayLength = arrayHelper_getLength(itemTypeArray), r, index, item, style;
	                for (r = rBegin; r < rBegin + rCount; r++) {
	                    var cellCache = {};
	                    for (index = 0; index < itemTypeArrayLength; index++) {
	                        item = itemTypeArray[index];
	                        if (item === 'T') {
	                            var text = sheet.getText(r, col);
	                            cellCache[item] = text ? text.trim() : text;
	                        } else if (item === 'BC') {
	                            style = sheet.getActualStyle(r, col, 3 , false , false , true);
	                            if (style) {
	                                cellCache[item] = style.backColor;
	                            }
	                        } else if (item === 'FC') {
	                            style = sheet.getActualStyle(r, col, 3 , false , false , true);
	                            if (style) {
	                                cellCache[item] = style.foreColor;
	                            }
	                        } else if (item === 'V') {
	                            cellCache[item] = sheet.getValue(r, col);
	                        }
	                    }
	                    dataCache[r] = cellCache;
	                }
	                return dataCache;
	            },
	           
	            
	            filter: function (col, ignoreUpdateLayout) {
	                var self = this, sheet = self._sheet, filterItemMap = self._filterItemMap, i;
	                if (sheet) {
	                    sheet._modelManager._backupFilter(self, 7 );
	
	                    var columns = [];
	                    if (isNullOrUndefined(col)) {
	                        for (i = 0; i < arrayHelper_getLength(filterItemMap); i++) {
	                            if (filterItemMap[i]) {
	                                columns.push(i);
	                                self._filterColumn(i);
	                            }
	                        }
	                    } else {
	                        if (!filterItemMap[col]) {
	                            return;
	                        }
	                        columns.push(col);
	                        self._filterColumn(col);
	                    }
	                    if(!ignoreUpdateLayout) {
	                        self._updateLayoutByFilter(sheet, 0 , columns);
	                    }
	                }
	            },
	            _updateLayoutByFilter: function (sheet, filterActionType, columns) {
	                var self = this;
	                sheet._refreshObjectsAboveSheet && sheet._refreshObjectsAboveSheet();
	                var filterArgs = self._getFilterArgs(filterActionType, columns);
	                self.filterHandler && self.filterHandler(filterArgs);
	                self.onFilter(filterArgs);
	                sheet._invalidate();
	            },
	            _getFilterArgs: function (filterActionType, columns) {
	                var self = this, sheet = self._sheet, range = self.range, filteredRows = [], filteredOutRows = [];
	                if (range) {
	                    var actualRange = sheet._getActualRange(range), startRow = actualRange.row, r;
	                    for (r = startRow; r < startRow + actualRange.rowCount; r++) {
	                        self.isRowFilteredOut(r) ? filteredOutRows.push(r) : filteredRows.push(r);
	                    }
	                }
	                return {
	                    action: filterActionType,
	                    sheet: sheet,
	                    range: range,
	                    filteredRows: filteredRows,
	                    filteredOutRows: filteredOutRows,
	                    columns: columns
	                };
	            },
	           
	            
	            onFilter: function () {
	            },
	           
	            
	            isFiltered: function (col) {
	                var filteredColumns = this._filteredColumns;
	                return arguments.length ? arrayHelper_contains(filteredColumns, col) : filteredColumns.length > 0;
	            },
	           
	            
	            isRowFilteredOut: function (row) {
	                var self = this, range = self.range;
	                if (self.isFiltered() && range) {
	                    var startRow = range.row, filteredColumnIndexs = self._filteredInRowsWithColIndexs[row];
	                    return !(startRow !== -1 && (row < startRow || row >= startRow + range.rowCount) ||
	                    arrayHelper_getLength(filteredColumnIndexs) >= arrayHelper_getLength(self._filteredColumns));
	                }
	                return false;
	            },
	           
	            
	
	            reset: function () {
	                var self = this, sheet = self._sheet;
	                if(sheet) {
	                    sheet._modelManager._backupFilter(self, 8 );
	                }
	                self.unfilter();
	                self._filterItemMap = [];
	                self._filteredColumns = [];
	                self._filteredItems = [];
	                self._filteredInRowsWithColIndexs = {};
	                self._filterButtonVisibleInfo = {};
	                self._sortInfo = keyword_null;
	            },
	            _isFilterHeader: function (row, col, sheetArea) {
	                var self = this, result = false, sheet = self._sheet, range = self.range;
	                if (range) {
	                    range = sheet._getActualRange(range, sheetArea);
	                    var range_row = range.row, range_col = range.col, isLegalCol = col >= range_col && col < range_col + range.colCount;
	                    if (sheetArea === 1  && row === getSheetRowCount(sheet, sheetArea) - 1 && range_row - 1 < 0 && isLegalCol) {
	                        result = true;
	                    } else if (sheetArea === 3  && row === range_row - 1 && isLegalCol) {
	                        result = true;
	                    }
	                }
	                return result;
	            },
	           
	            
	            getFilterItems: function (col) {
	                var itemList = this._filterItemMap[col];
	                return itemList || [];
	            },
	           
	            
	            getFilteredItems: function () {
	                return this._filteredItems;
	            },
	           
	            
	            sortColumn: function (col, ascending) {
	                var self = this, sheet = self._sheet;
	                if (sheet) {
	                    var range = sheet._getActualRange(self.range);
	                    sheet.suspendPaint();
	                    sheet._modelManager._backupFilter(self, 1 );
	                    var sortInfo = {index: col, ascending: ascending},
	                        ret = sheet.sortRange(range.row, range.col, range.rowCount, range.colCount, true, [sortInfo]);
	                    if (ret) {
	                        self._sortInfo = sortInfo;
	                        if (self.isFiltered(col)) {
	                            self.reFilter();
	                        }
	                    }
	                    sheet.resumePaint();
	                }
	            },
	            sortColumnByColor: function (col, ascending, color, isBackColor) {
	                var self = this, sheet = self._sheet;
	                if (sheet) {
	                    var range = sheet._getActualRange(self.range);
	                    sheet.suspendPaint();
	                    sheet._modelManager._backupFilter(self, 1 );
	                    var sortInfo = {index: col, ascending: ascending, color: color, isBackColor: isBackColor},
	                        ret = sheet.sortRange(range.row, range.col, range.rowCount, range.colCount, true, [sortInfo]);
	                    if (ret) {
	                        self._sortInfo = sortInfo;
	                        if (self.isFiltered(col)) {
	                            self.reFilter();
	                        }
	                    }
	                    sheet.resumePaint();
	                }
	            },
	           
	            
	            getSortState: function (col) {
	                var sortInfo = this._sortInfo, ret = 0 ;
	                if (sortInfo && sortInfo.index === col) {
	                    ret = sortInfo.ascending ? 1  : 2 ;
	                }
	                return ret;
	            },
	            reFilter: function (ignoreUpdateLayout) {
	                var i, self = this, filteredColumns = self._filteredColumns, 
	                    filteredColumnsLength = arrayHelper_getLength(filteredColumns);
	                self._sheet._modelManager._backupFilter(self, 13 );
	                self._filteredInRowsWithColIndexs = {};
	                self._filteredItems = [];
	                self._filteredColumns = [];
	                for (i = 0; i < filteredColumnsLength; i++) {
	                    self.filter(filteredColumns[i], ignoreUpdateLayout);
	                }
	            },
	           
	            
	            openFilterDialog: function () {
	            },
	            _addFilteredInRowsWithColumnIndex: function (row, col) {
	                var filteredInRowsWithColIndexs = this._filteredInRowsWithColIndexs, colIndexs = filteredInRowsWithColIndexs[row];
	                if (isNullOrUndefined(colIndexs)) {
	                    colIndexs = [col];
	                } else {
	                    if (arrayHelper_contains(colIndexs, col)) {
	                        arrayHelper_remove(colIndexs, col);
	                    }
	                    colIndexs.push(col);
	                }
	                filteredInRowsWithColIndexs[row] = colIndexs;
	            },
	            _addFilteredItem: function (filterItem) {
	                var filteredItems = this._filteredItems;
	                if (!arrayHelper_contains(filteredItems, filterItem)) {
	                    filteredItems.push(filterItem);
	                }
	            },
	            _unfilterColumn: function (col) {
	                var self = this, filteredInRowsWithColIndexs = self._filteredInRowsWithColIndexs, key, colIndexs;
	                if (self.range && self.isFiltered(col)) {
	                    self._setColumnFilteredState(col, false);
	                    for (key in filteredInRowsWithColIndexs) {
	                        if (key) {
	                            colIndexs = filteredInRowsWithColIndexs[key];
	                            if (colIndexs && arrayHelper_contains(colIndexs, col)) {
	                                arrayHelper_remove(colIndexs, col);
	                                if (!arrayHelper_getLength(colIndexs)) {
	                                    filteredInRowsWithColIndexs[key] = keyword_undefined;
	                                }
	                            }
	                        }
	                    }
	                    self._removeFilteredItems(col);
	                }
	            },
	            _setColumnFilteredState: function (col, isFiltered) {
	                var filteredColumns = this._filteredColumns;
	                if (isFiltered) {
	                    if (arrayHelper_getLength(filteredColumns)) {
	                        if (filteredColumns[arrayHelper_getLength(filteredColumns) - 1] === col) {
	                            return;
	                        }
	                        arrayHelper_remove(filteredColumns, col);
	                    }
	                    filteredColumns.push(col);
	                } else {
	                    arrayHelper_remove(filteredColumns, col);
	                }
	            },
	            _removeFilteredItems: function (col) {
	                var self = this, filterItemMap = self._filterItemMap, filterItemMapLength = filterItemMap.length;
	                var removeItems = [], otherItems = [], i;
	                for (i = 0; i < filterItemMapLength; i++) {
	                    if (i === col) {
	                        removeItems = removeItems.concat(filterItemMap[i]);
	                    } else {
	                        otherItems = otherItems.concat(filterItemMap[i]);
	                    }
	                }
	                var removeItemsLength = removeItems.length;
	                for (i = 0; i < removeItemsLength; i++) {
	                    if (!arrayHelper_contains(otherItems, removeItems[i])) {
	                        arrayHelper_remove(self._filteredItems, removeItems[i]);
	                    }
	                }
	            },
	            _filterRowsWithTextEquals: function (startRow, rowCount, col, dataCache) {
	                var self = this, filterItems = self._filterItemMap[col], dataMap = {}, otherConditions = [], i;
	                for (i = 0; i < arrayHelper_getLength(filterItems); i++) {
	                    var filterItem = filterItems[i];
	                    if (getConditionType(filterItem) === 2  && filterItem.compareType() === 0  && !filterItem.forceValue2Text()  && !filterItem.useWildCards()  && !filterItem.ignoreCase()  && !filterItem.ignoreBlank() ) {
	                        dataMap[filterItem.expected()] = filterItem;
	                    } else {
	                        otherConditions.push(filterItem);
	                    }
	                }
	                for (i = startRow; i < startRow + rowCount; i++) {
	                    var isRowFilteredOut = self.isRowFilteredOut(i);
	                    if (dataMap[dataCache[i]['T']] !== keyword_undefined) {
	                        self._addFilteredInRowsWithColumnIndex(i, col);
	                        if (!isRowFilteredOut) {
	                            self._addFilteredItem(filterItem);
	                        }
	                    }
	                }
	                return otherConditions;
	            },
	            _filterRowByCell: function (filterItems, row, col, dataCache) {
	                var self = this, range = self.range, i;
	                for (i = 0; i < arrayHelper_getLength(filterItems); i++) {
	                    var filterItem = filterItems[i], item1 = filterItem.item1(), item2 = filterItem.item2(), value1, value2;
	                    if (getConditionType(filterItem) === 0 ) {
	                        if (item1) {
	                            value1 = self._applyNewItemRange(item1, row, col, range, dataCache);
	                        }
	                        if (item2) {
	                            value2 = self._applyNewItemRange(item2, row, col, range, dataCache);
	                        }
	                    } else {
	                        value1 = self._applyNewItemRange(filterItem, row, col, range, dataCache);
	                    }
	                    if (filterItem.evaluate(self._sheet, row, col, value1, value2)) {
	                        self._addFilteredInRowsWithColumnIndex(row, col);
	                        self._addFilteredItem(filterItem);
	                        break;
	                    }
	                }
	            },
	            _applyNewItemRange: function (item, row, col, range, dataCache) {
	                var self = this, ret = keyword_null, conditionType = getConditionType(item), compareType = item.compareType(), dataCacheRow = dataCache[row];
	                if (conditionType === 8  || conditionType === 10 ) {
	                    var reviseRange = [], actualRange = self._sheet._getActualRange(range), startCol = actualRange.col;
	                    if (startCol <= col && col < startCol + actualRange.colCount) {
	                        reviseRange.push(createRange(actualRange.row, col, actualRange.rowCount, 1));
	                    }
	                    item.ranges(reviseRange);
	                }
	                if (conditionType === 2  || conditionType === 7 ) {
	                    ret = dataCacheRow['T'];
	                } else if (conditionType === 3 ) {
	                    if (compareType === 0 ) {
	                        ret = dataCacheRow['BC'];
	                    } else if (compareType === 1 ) {
	                        ret = dataCacheRow['FC'];
	                    }
	                } else {
	                    ret = dataCacheRow['V'];
	                }
	                return ret;
	            },
	            _isRowfilteredOutByColumnForSlicer: function (row, col) {
	                var self = this, filteredColumns = self._filteredColumns;
	                if (!arrayHelper_getLength(filteredColumns)) {
	                    return false;
	                }
	                var result, colIndexs = self._filteredInRowsWithColIndexs[row],
	                    colIndexs_length = arrayHelper_getLength(colIndexs);
	                if (isNullOrUndefined(colIndexs) || colIndexs_length < 0) {
	                    result = true;
	                } else {
	                    var index = arrayHelper_indexOf(colIndexs, col);
	                    result = index < 0;
	                }
	                return result;
	            },
	            _isRowfilteredOutByColumn: function (row, col) {
	                var self = this, filteredColumns = self._filteredColumns;
	                if (!arrayHelper_getLength(filteredColumns)) {
	                    return false;
	                }
	                var previousColumn = -1, currentIndex = arrayHelper_indexOf(filteredColumns, col), colIndexs = self._filteredInRowsWithColIndexs[row], colIndexs_length = arrayHelper_getLength(colIndexs);
	                if (currentIndex > 0) {
	                    previousColumn = filteredColumns[currentIndex - 1];
	                }
	               
	                if (previousColumn > -1) {
	                    return colIndexs_length ? previousColumn === colIndexs[colIndexs_length - 1]   
	                       
	                        : false;       
	                }
	                return !colIndexs_length;
	            },
	            _isRowNotFilteredOutByOtherColumn: function (row, col) {
	                var self = this, filteredColumns = self._filteredColumns;
	                if (!arrayHelper_getLength(filteredColumns)) {
	                    return true;
	                }
	                var currentIndex = arrayHelper_indexOf(filteredColumns, col), colIndexs = self._filteredInRowsWithColIndexs[row], colIndexs_length = arrayHelper_getLength(colIndexs) || 0;
	                if (colIndexs_length >= arrayHelper_getLength(filteredColumns)) {
	                    return true;
	                }
	                if (currentIndex < 0
	                    || colIndexs_length < arrayHelper_getLength(filteredColumns) - 1) {
	                    return false;
	                }
	                return !colIndexs || arrayHelper_indexOf(colIndexs, col) < 0;
	               
	            },
	            _onRowsAdded: function (row, count) {
	                var self = this, range = self.range;
	                if (!range) {
	                    return;
	                }
	                var endRow = getSheetRowCount(self._sheet) - count - 1, range_row = range.row, range_col = range.col, range_rowCount = range.rowCount, range_colCount = range.colCount;
	                if (range_row > -1) {
	                    endRow = range_row + range_rowCount - 1;
	                    if (row <= range_row) {
	                        self._setRangeInternal(createRange(range_row + count, range_col, range_rowCount, range_colCount));
	                    } else if (row < range_row + range_rowCount) {
	                        self._setRangeInternal(createRange(range_row, range_col, range_rowCount + count, range_colCount));
	                    }
	                }
	                var filteredInRowsWithColIndexs = self._filteredInRowsWithColIndexs;
	                if (self.isFiltered() && filteredInRowsWithColIndexs) {
	                    var rowKeys = [], i;
	                    for (i = 0; i < arrayHelper_getLength(filteredInRowsWithColIndexs); i++) {
	                        rowKeys.push(i);
	                    }
	                    rowKeys.sort();
	                    for (i = 0; i < arrayHelper_getLength(rowKeys); i++) {
	                        var oldKey = rowKeys[i];
	                        if (oldKey >= row && oldKey <= endRow) {
	                            filteredInRowsWithColIndexs[oldKey + count] = filteredInRowsWithColIndexs[oldKey];
	                            filteredInRowsWithColIndexs[oldKey] = keyword_undefined;
	                        }
	                    }
	                }
	                self.reFilter();
	            },
	            _onColumnsAdded: function (column, count) {
	                var self = this, range = self.range;
	                if (!range) {
	                    return;
	                }
	                var range_row = range.row, range_col = range.col, range_rowCount = range.rowCount, range_colCount = range.colCount,
	                    addCount = 0, startColumn = -1, columnCount = 0, col;
	                if (column >= 0 && self._isSorted()) {
	                    for (col = 0; col < count; col++) {
	                        if (col + column <= self._sortedColumn()) {
	                            addCount++;
	                        }
	                    }
	                    self._sortedColumn(self._sortedColumn() + addCount);
	                }
	                if (range_col > -1) {
	                    if (column <= range_col) {
	                        startColumn = range_col;
	                        columnCount = range_colCount;
	                        self._setRangeInternal(createRange(range_row, range_col + count, range_rowCount, range_colCount));
	                    } else if (column < range_col + range_colCount) {
	                        startColumn = column;
	                        columnCount = range_colCount - (column - range_col);
	                        self._setRangeInternal(createRange(range_row, range_col, range_rowCount, range_colCount + count));
	                    }
	                }
	                if (startColumn < 0) {
	                    startColumn = 0;
	                    columnCount = getSheetColumnCount(self._sheet) - count;
	                }
	                for (col = startColumn + columnCount - 1; col >= startColumn; col--) {
	                    if (col >= column) {
	                        var newColumn = col + count,
	                            index = arrayHelper_indexOf(self._filteredColumns, col);
	                       
	                        if (index >= 0) {
	                            self._filteredColumns[index] = newColumn;
	                        }
	                       
	                        var conditions = self._filterItemMap[col];
	                        if (arrayHelper_getLength(conditions)) {
	                            arrayHelper_remove(self._filterItemMap, col);
	                            self._filterItemMap[newColumn] = conditions;
	                        }
	                    }
	                }
	                self.reFilter();
	            },
	            _onRowsRemoved: function (row, count) {
	                var self = this, range = self.range;
	                if (!range) {
	                    return;
	                }
	                var startRow = 0, endRow = getSheetRowCount(self._sheet) + count - 1,
	                    range_row = range.row, range_col = range.col, range_rowCount = range.rowCount, range_colCount = range.colCount;
	                if (range_row > -1) {
	                    startRow = range_row;
	                    endRow = range_row + range_rowCount - 1;
	                    if (row <= range_row) {
	                       
	                        if (range_row === row + 1 || range_row + range_rowCount <= row + count) {
	                            self._setRangeInternal(keyword_null);
	                        } else if (range_row < row + count) {
	                            self._setRangeInternal(createRange(row, range_col, range_row + range_rowCount - (row + count), range_colCount));
	                        } else {
	                            self._setRangeInternal(createRange(range_row - count, range_col, range_rowCount, range_colCount));
	                        }
	                    } else if (row < range_row + range_rowCount) {
	                        self._setRangeInternal(createRange(range_row, range_col, range_rowCount - Math.min(range_row + range_rowCount - row, count), range_colCount));
	                    }
	                }
	                var filteredInRowsWithColIndexs = self._filteredInRowsWithColIndexs, i;
	                if (self.isFiltered() && filteredInRowsWithColIndexs) {
	                    for (i = startRow; i <= endRow; i++) {
	                        if (i >= row && i < row + count) {
	                            filteredInRowsWithColIndexs[i] = keyword_undefined;
	                        } else if (i >= row + count) {
	                            var oldKey = i, oldValue = filteredInRowsWithColIndexs[oldKey];
	                            if (oldValue) {
	                                filteredInRowsWithColIndexs[oldKey - count] = oldValue;
	                                filteredInRowsWithColIndexs[oldKey] = keyword_undefined;
	                            }
	                        }
	                    }
	                }
	               
	                self._sheet.filterRowsVisibleInfo._resetByRow(Math.min(range_row, row), range_rowCount);
	                self.reFilter();
	
	            },
	            _setRangeInternal: function (newRange) {
	                this.range = newRange;
	            },
	            _updateRange: function (newRange) {
	                var self = this, sheet = self._sheet, oldRange = self.range, i, index;
	                if (oldRange) {
	                    if (!newRange) {
	                        self.reset();
	                    } else if (!newRange.equals(oldRange)) {
	
	                       
	                        var oldCol = oldRange.col, oldColCount = oldRange.colCount, newCol = newRange.col, newColCount = newRange.colCount,
	                            columnCount = getSheetColumnCount(sheet);
	                        if (self.isFiltered() && !(oldCol < 0 && newCol < 0)) {
	                            if (oldCol < 0) {
	                                oldCol = 0;
	                                oldColCount = columnCount;
	                            }
	                            if (newCol < 0) {
	                                newCol = 0;
	                                newColCount = columnCount;
	                            }
	                            for (i = 0; i < oldColCount; i++) {
	                                index = oldCol + i;
	                                if (newCol > index || index >= newCol + newColCount) {
	                                    self.removeFilterItems(index);
	                                }
	                            }
	                        }
	                       
	                        var oldRow = oldRange.row, oldRowCount = oldRange.rowCount, newRow = newRange.row, newRowCount = newRange.rowCount,
	                            rowCount = getSheetRowCount(sheet);
	                        if (self.isFiltered() && self._filteredInRowsWithColIndexs && !(oldRow < 0 && newRow < 0)) {
	                            if (oldRow < 0) {
	                                oldRow = 0;
	                                oldRowCount = rowCount;
	                            }
	                            if (newRow < 0) {
	                                newRow = 0;
	                                newRowCount = rowCount;
	                            }
	                            for (i = 0; i < oldRowCount; i++) {
	                                index = oldRow + i;
	                                if (newRow > index || index >= newRow + newRowCount) {
	                                    self._filteredInRowsWithColIndexs[index] = keyword_undefined;
	                                }
	                            }
	                        }
	                    }
	                }
	                if (self._isSorted() && !(newRange && newRange.contains(-1, self._sortedColumn()))) {
	                    self._sortInfo = keyword_null;
	                }
	                self._setRangeInternal(newRange);
	            },
	            _onColumnsRemoved: function (column, count) {
	                var self = this, range = self.range, sortInfoIndex = self._sortedColumn(), removeEnd = column + count;
	                if (!range) {
	                    return;
	                }
	                if (column >= 0 && self._isSorted()) {
	                    if (sortInfoIndex >= column && sortInfoIndex < removeEnd) {
	                        self._sortedColumn(-1);
	                    } else if (sortInfoIndex >= removeEnd) {
	                        self._sortedColumn(sortInfoIndex - count);
	                    }
	                }
	                var range_row = range.row, range_col = range.col, range_rowCount = range.rowCount, range_colCount, c;
	                if (range_col < 0) {
	                    range_col = 0;
	                    range_colCount = getSheetColumnCount(self._sheet) + count;
	                } else {
	                    range_colCount = range.colCount;
	                }
	                for (c = range_col; c < range_col + range_colCount; c++) {
	                    if (c >= column) {
	                        if (c < removeEnd) {
	                            self.removeFilterItems(c);
	                        } else {
	                            var newColumn = c - count, index = arrayHelper_indexOf(self._filteredColumns, c), conditions = self._filterItemMap[c];
	                           
	                            if (index >= 0) {
	                                self._filteredColumns[index] = newColumn;
	                            }
	                           
	                            if (arrayHelper_getLength(conditions)) {
	                                arrayHelper_remove(self._filterItemMap, c);
	                                self._filterItemMap[newColumn] = conditions;
	                            }
	                        }
	                    }
	                }
	                if (range_col >= 0) {
	                    if (column < range_col) {
	                        if (removeEnd <= range_col) {
	                            self._setRangeInternal(createRange(range_row, range_col - count, range_rowCount, range_colCount));
	                        } else if (removeEnd <= range_col + range_colCount) {
	                            self._setRangeInternal(createRange(range_row, column, range_rowCount, range_col + range_colCount - removeEnd));
	                        } else {
	                            self._setRangeInternal(keyword_null);
	                        }
	                    } else if (column < range_col + range_colCount) {
	                        if (removeEnd <= range_col + range_colCount) {
	                            self._setRangeInternal(createRange(range_row, range_col, range_rowCount, range_colCount - count));
	                        } else {
	                            self._setRangeInternal(createRange(range_row, range_col, range_rowCount, column - range_col));
	                        }
	                    }
	                }
	                self.reFilter();
	            },
	            _isSorted: function () {
	                var self = this, sortInfo = self._sortInfo;
	                return sortInfo ? sortInfo.index > -1 && self.getSortState(sortInfo.index) !== 0  : false;
	            },
	            _sortedColumn: function (col) {
	                var self = this, sortInfo = self._sortInfo, ret;
	                if (arrayHelper_getLength(arguments)) {
	                    if (sortInfo) {
	                        sortInfo.index = col;
	                    } else {
	                        self._sortInfo = {index: col, ascending: false};
	                    }
	                    ret = self;
	                } else {
	                    ret = sortInfo ? sortInfo.index : -1;
	                }
	                return ret;
	            },
	            _clear: function (row, column, rowCount, columnCount) {
	                var self = this, range = self.range;
	                if (!range) {
	                    return;
	                }
	                var clearRange = createRange(row, column, rowCount, columnCount);
	                if (self.filterButtonVisible()) {
	                    var newRow = range.row - 1, newRowCount = range.rowCount + 1;
	                    if (newRow < 0) {
	                        newRow = -1;
	                        newRowCount = -1;
	                    }
	                    if (clearRange.containsRange(createRange(newRow, range.col, newRowCount, range.colCount))) {
	                        self.unfilter();
	                    }
	                } else if (clearRange.containsRange(range)) {
	                    self.unfilter();
	                }
	            },
	           
	            
	            fromJSON: function (settings, noSchema) {
	                if (!settings) {
	                    return;
	                }
	                var self = this, jsonRange = settings.range, jsonFilterItemMap = settings.filterItemMap, selfFilterItemMap = self._filterItemMap,
	                    jsonSortInfo = settings.sortInfo, showFilterButton = settings.showFilterButton,
	                    filterButtonVisibleInfo = settings.filterButtonVisibleInfo, i, k, filteredColumns;
	                if (jsonRange) {
	                    self.range = createRange(jsonRange.row, jsonRange.col, jsonRange.rowCount, jsonRange.colCount);
	                }
	                if(settings.dialogVisibleInfo) {
	                    self._dialogVisibleInfo = $.extend({}, _defaultDialogVisibleInfo, settings.dialogVisibleInfo);
	                }
	
	                if (ConditionalFormatting) {
	                    for (i = 0; i < arrayHelper_getLength(jsonFilterItemMap); i++) {
	                        var jsonFilterItem = jsonFilterItemMap[i], jsonConditions = jsonFilterItem.conditions;
	                        for (k = 0; k < arrayHelper_getLength(jsonConditions); k++) {
	                            var jsonCondition = jsonConditions[k];
	                            if (!jsonCondition) {
	                                continue;
	                            }
	                            var condition = createConditional(), column = jsonFilterItem.index, filterItems = selfFilterItemMap[column];
	                            condition.fromJSON(jsonCondition, noSchema);
	                            if (!filterItems) {
	                                filterItems = selfFilterItemMap[column] = [];
	                            }
	                            filterItems.push(condition);
	                        }
	                    }
	                }
	                filteredColumns = settings.filteredColumns || settings.filteredColMap;
	                for (i = 0; i < arrayHelper_getLength(filteredColumns); i++) {
	                    if (!isNullOrUndefined(filteredColumns[i])) {
	                        self._filteredColumns.push(filteredColumns[i]);
	                    }
	                }
	                if (jsonSortInfo && jsonSortInfo.color === keyword_undefined) {
	                    self._sortInfo = {index: jsonSortInfo.index, ascending: jsonSortInfo.ascending};
	                }else if(jsonSortInfo && jsonSortInfo.color !== keyword_undefined) {
	                    self._sortInfo = {index: jsonSortInfo.index, ascending: jsonSortInfo.ascending, color: jsonSortInfo.color, isBackColor: jsonSortInfo.isBackColor};
	                }
	                if (showFilterButton !== keyword_undefined) {
	                    var range = self.range;
	                    if (filterButtonVisibleInfo) {
	                        self._filterButtonVisibleInfo = filterButtonVisibleInfo;
	                    } else if (range) {
	                        for (i = self._getStartCol(range); i < self._getEndCol(range, self._sheet); i++) {
	                            self._filterButtonVisibleInfo[i] = showFilterButton;
	                        }
	                    }
	                }
	            },
	           
	            
	            toJSON: function () {
	                var self = this, jsonData = {}, range = self.range, filterButtonVisibleInfo = self._filterButtonVisibleInfo,
	                    filterItemMap = self._filterItemMap, filteredColumns = self._filteredColumns, sortInfo = self._sortInfo,
	                    filterItemMapData = [], i, k = 0, typeName = self.typeName;
	                if (range) {
	                    jsonData.range = range;
	                }
	                if (typeName) {
	                    jsonData.typeName = typeName;
	                }
	                if(self._dialogVisibleInfo) {
	                    var dialogVisibleInfo = {};
	                    for (var prop in self._dialogVisibleInfo) {
	                        if(self._dialogVisibleInfo.hasOwnProperty(prop) && self._dialogVisibleInfo[prop] === false) {
	                            dialogVisibleInfo[prop] = false;
	                        }
	                    }
	                    jsonData.dialogVisibleInfo = dialogVisibleInfo;
	                }
	                for (i = 0; i < arrayHelper_getLength(filterItemMap); i++) {
	                    var filterItem = filterItemMap[i];
	                    if (filterItem) {
	                        var conditions = [], c;
	                        for (c = 0; c < arrayHelper_getLength(filterItem); c++) {
	                            conditions.push(filterItem[c] ? filterItem[c].toJSON() : keyword_null);
	                        }
	                        filterItemMapData[k++] = {
	                            index: i,
	                            conditions: conditions
	                        };
	                    }
	                }
	                if (arrayHelper_getLength(filterItemMapData)) {
	                    jsonData.filterItemMap = filterItemMapData;
	                }
	                if (arrayHelper_getLength(filteredColumns)) {
	                    jsonData.filteredColumns = filteredColumns;
	                }
	                if (sortInfo) {
	                    jsonData.sortInfo = sortInfo;
	                }
	                if (filterButtonVisibleInfo) {
	                    jsonData.filterButtonVisibleInfo = $.extend({}, filterButtonVisibleInfo);
	                    var showFilterButton = false;
	                    for (i in filterButtonVisibleInfo) {
	                        if (filterButtonVisibleInfo[i]) {
	                            showFilterButton = true;
	                            break;
	                        }
	                    }
	                    jsonData.showFilterButton = showFilterButton;
	                }
	
	               
	                var filteredOutRowArray = [], row, count = self._sheet.getRowCount();
	                for (row = 0; row < count; row++) {
	                    if (self.isRowFilteredOut(row)) {
	                        filteredOutRowArray.push(row);
	                    }
	                }
	                if (filteredOutRowArray.length > 0) {
	                    jsonData.filteredOutRows = filteredOutRowArray;
	                }
	                return jsonData;
	            },
	            _canDoFilter: function (sheet) {
	                var options = sheet.options;
	                return !options.isProtected || options.protectionOptions.allowFilter;
	            },
	            hitTest: function (target, x, y) {
	                var sheet = this._sheet;
	                if (!sheet) {
	                    return;
	                }
	                var rowViewportIndex = target.rowViewportIndex, colViewportIndex = target.colViewportIndex, hitTestType = target.hitTestType,
	                    viewportColumnLayout = sheet._getViewportColumnLayout(colViewportIndex), rowLayout, colLayout, sheetArea;
	                if (hitTestType === 1 ) {
	                    rowLayout = sheet._getColumnHeaderRowLayout().findY(y);
	                    colLayout = viewportColumnLayout.findX(x);
	                    sheetArea = 1 ;
	                } else if (hitTestType === 3 ) {
	                    rowLayout = sheet._getViewportRowLayout(rowViewportIndex).findY(y);
	                    colLayout = viewportColumnLayout.findX(x);
	                    sheetArea = 3 ;
	                }
	                if (!rowLayout || !colLayout) {
	                    return keyword_null;
	                }
	
	                var row = rowLayout.row, col = colLayout.col, spanCell = sheet.getSpan(row, col, sheetArea), filterButtonModel = sheet._getFilterButtonModel();
	                if (spanCell) {
	                    var spanCell_row = spanCell.row, spanCell_col = spanCell.col;
	                    if (row !== spanCell_row + spanCell.rowCount - 1 || col !== spanCell_col + spanCell.colCount - 1) {
	                        return keyword_null;
	                    }
	                    row = spanCell_row;
	                    col = spanCell_col;
	                }
	                if (filterButtonModel) {
	                    var btnInfo = findButtonInfo(filterButtonModel, row, col, sheetArea);
	                    if (btnInfo) {
	                        var cellRect = sheet.getCellRect(row, col, rowViewportIndex, colViewportIndex), btnRect = sheet._getFilterButtonRect(cellRect, sheetArea);
	                        if (btnRect.x <= x && x <= btnRect.x + btnRect.width && btnRect.y <= y && y <= btnRect.y + btnRect.height) {
	                            return new _FilterButtonInfo(btnInfo.rowFilter, btnInfo.row, btnInfo.col, btnInfo.sheetArea, btnRect.x, btnRect.y, btnRect.width, btnRect.height);
	                        }
	                    }
	                }
	                return keyword_null;
	            }
	        };
	        return RowFilterBase;
	    })();
	    Filter.RowFilterBase = RowFilterBase;
	   
	
	
	   
	    var HideRowFilter = (function (_super) {
	        $.inherit(HideRowFilter, _super);
	       
	        
	        function HideRowFilter(range) {
	            _super.call(this, range);
	            this.typeName = HIDE_ROW_FILTER;
	           
	            this._dialogVisibleInfo = $.extend({}, _defaultDialogVisibleInfo);
	        }
	
	        var prototype = {
	            onFilter: function (args) {
	                var self = this, sheet = self._sheet;
	                if (sheet) {
	                    self._updateRowVisibleInfo(sheet, args.filteredRows, args.filteredOutRows);
	                    sheet._invalidateVScrollbar();
	                }
	            },
	           
	            
	            filterDialogVisibleInfo: function (visibleInfo) {
	                if(arguments.length === 0) {
	                    if(!this._dialogVisibleInfo) {
	                       
	                        this._dialogVisibleInfo = $.extend({}, _defaultDialogVisibleInfo);
	                    }
	                    return this._dialogVisibleInfo;
	                }
	                if(visibleInfo) {
	                    var dialogVisibleInfo = {};
	                    if(visibleInfo.sortByValue !== keyword_undefined) {
	                        dialogVisibleInfo.sortByValue = !!visibleInfo.sortByValue;
	                    }
	                    if(visibleInfo.sortByColor !== keyword_undefined) {
	                        dialogVisibleInfo.sortByColor = !!visibleInfo.sortByColor;
	                    }
	                    if(visibleInfo.filterByColor !== keyword_undefined) {
	                        dialogVisibleInfo.filterByColor = !!visibleInfo.filterByColor;
	                    }
	                    if(visibleInfo.filterByValue !== keyword_undefined) {
	                        dialogVisibleInfo.filterByValue = !!visibleInfo.filterByValue;
	                    }
	                    if(visibleInfo.listFilterArea !== keyword_undefined) {
	                        dialogVisibleInfo.listFilterArea = !!visibleInfo.listFilterArea;
	                    }
	                    $.extend(this._dialogVisibleInfo, dialogVisibleInfo);
	                    return this;
	                }
	            },
	            _updateRowVisibleInfo: function (sheet, filteredRows, filteredOutRows) {
	                var filterRowsVisibleInfo = sheet.filterRowsVisibleInfo;
	                if (filterRowsVisibleInfo) {
	                    var changedRows = filterRowsVisibleInfo._updateVisible(filteredRows, filteredOutRows);
	                    Sheets._supportsCalc && sheet.recalcRows(changedRows);
	                }
	            },
	            openFilterDialog: function (filterButtonHitInfo) {
	                var self = this, sheet = self._sheet;
	                if (self._canDoFilter(sheet)) {
	                    var filterDialog = new Filter._FilterDialog(sheet.parent._getContainerDiv(), sheet, filterButtonHitInfo, self.filterDialogVisibleInfo());
	                    sheet._filterDialog = filterDialog;
	                    filterDialog._open();
	                }
	            }
	        };
	        $.extend(HideRowFilter.prototype, prototype);
	
	        return HideRowFilter;
	    })(RowFilterBase);
	    Filter.HideRowFilter = HideRowFilter;
	   
	
	   
	    function _FilterRowsVisibleInfo() {
	        this._reset();
	    }
	
	    _FilterRowsVisibleInfo.prototype = {
	        _rowVisible: function (row) {
	            var info = this.rowsVisibleInfo[row];
	            return isNullOrUndefined(info) ? true : info;
	        },
	        _updateVisible: function (inRows, outRows) {
	            var changedRows = [], oldVisibleInfos = this.rowsVisibleInfo;
	            for (var i = 0, len = inRows.length; i < len; i++) {
	                var inIndex = inRows[i], oldInInfo = oldVisibleInfos[inIndex];
	                if (oldInInfo !== keyword_undefined && oldInInfo !== keyword_null) {
	                   
	                    changedRows.push(inIndex);
	                }
	                delete oldVisibleInfos[inIndex];
	            }
	            for (var j = 0, len1 = outRows.length; j < len1; j++) {
	                var outIndex = outRows[j], oldOutInfo = oldVisibleInfos[outIndex];
	                if (oldOutInfo === keyword_undefined || oldOutInfo === keyword_null) {
	                   
	                    changedRows.push(outIndex);
	                }
	               
	                oldVisibleInfos[outIndex] = false;
	
	            }
	
	            this.empty = false;
	
	            return changedRows;
	        },
	        _reset: function () {
	            this.rowsVisibleInfo = {};
	            this.empty = true;
	        },
	        
	        _resetByRow: function (row, count) {
	            var oldVisibleInfo = this.rowsVisibleInfo, oldInfo;
	            for(var i = row; i < count; i++) {
	                oldInfo = oldVisibleInfo[i + row];
	                if(!isNullOrUndefined(oldInfo)) {
	                    delete oldVisibleInfo[i + row];
	                }
	            }
	        },
	        _hasFilterOut: function () {
	           
	           
	           
	           
	           
	            return !this.empty;
	        },
	        clone: function () {
	            var info = new _FilterRowsVisibleInfo();
	            info.rowsVisibleInfo = $.extend({}, this.rowsVisibleInfo);
	            return info;
	        }
	    };
	
	   
	    function filterFromJSON(rowFilterData, sheet, noSchema) {
	        var rowFilterTypeName = rowFilterData.typeName, rowFilterClass, drf;
	        if (!rowFilterTypeName || rowFilterTypeName === HIDE_ROW_FILTER) {
	            drf = new HideRowFilter();
	        } else {
	            rowFilterClass = Sheets.getTypeFromString(rowFilterTypeName);
	            if (rowFilterClass) {
	                drf = new rowFilterClass();
	            }
	        }
	        if (drf) {
	            sheet._rowFilter = drf;
	            drf._sheet = sheet;
	            drf.fromJSON(rowFilterData, noSchema);
	            drf.reFilter();
	        }
	    }
	    var filterAdapter = {
	        init: function () {
	            var self = this;
	            self._rowFilter = keyword_null;
	            self.filterRowsVisibleInfo = new _FilterRowsVisibleInfo();
	            self._rowStateProviders.push({
	                _isVisible: function (row) {
	                    return self.filterRowsVisibleInfo._rowVisible(row);
	                }
	            });
	        },
	        processMouseDown: function (args) {
	            var filterButtonHitInfo = args.hitInfo.filterButtonHitInfo;
	            if (filterButtonHitInfo) {
	                filterButtonHitInfo.rowFilter.openFilterDialog(filterButtonHitInfo);
	                args.r = true;
	            }
	        },
	        onLayoutChanged: function (e) {
	            var self = this, changeType = e.changeType, row = e.row, rowCount = e.rowCount, col = e.col, colCount = e.colCount, rowFilter = self._rowFilter;
	            if (changeType === 'invalidateLayout') {
	                self._filterButtonsModel = keyword_null;
	                return;
	            }
	            if (rowFilter) {
	                var modelManager = self._modelManager;
	                if (changeType === 'addRows') {
	                    modelManager._onRowsAdded_Filter(row, rowCount);
	                } else if (changeType === 'deleteRows') {
	                    modelManager._onRowsRemoved_Filter(row, rowCount);
	                } else if (changeType === 'addColumns') {
	                    modelManager._onColumnsAdded_Filter(col, colCount);
	                } else if (changeType === 'deleteColumns') {
	                    modelManager._onColumnsRemoved_Filter(col, colCount);
	                } else if (changeType === 'clear' && rowFilter.range) {
	                    modelManager._clear_Filter(row, col, rowCount, colCount);
	                }
	            }
	        },
	        dispose: function () {
	            var self = this, filterDialog = self._filterDialiog;
	            if (filterDialog) {
	                filterDialog.close();
	            }
	           
	           
	        },
	        toJson: function (data, serializationOption) {
	            var rowFilter = this._rowFilter;
	            var ignoreStyle = serializationOption && serializationOption.ignoreStyle;
	            if (rowFilter && !ignoreStyle) {
	                data.rowFilter = rowFilter.toJSON();
	            }
	        },
	        fromJson: function (sheetSettings, noSchema, deserializationOptions) {
	            var rowFilterData = sheetSettings.rowFilter;
	            var ignoreStyle = deserializationOptions && deserializationOptions.ignoreStyle;
	            if (rowFilterData && Filter && !ignoreStyle) {
	                filterFromJSON(rowFilterData, this, noSchema);
	            }
	        },
	        paintCell: function (e) {
	            var sheet = this, cell = e.cell, width = cell.width, height = cell.height, cellLayout = cell.cellLayout, imageLoader = sheet._getImageLoader(),
	                filterButtonModel = sheet._getFilterButtonModel(), tmpAddSpans = [], ctx = e.ctx;
	
	            if ((!cellLayout || !arrayHelper_contains(tmpAddSpans, cellLayout)) && filterButtonModel && width > 0 && height > 0) {
	                var btnInfo = findButtonInfo(filterButtonModel, cell.row, cell.col, e.sheetArea);
	                if (btnInfo) {
	                    var filterBtnInfo = new _FilterButtonInfo(btnInfo.rowFilter, btnInfo.row, btnInfo.col, btnInfo.sheetArea, cell.x, cell.y, width, height),
	                        filterButtonRect = sheet._getFilterButtonRect(new Sheets.Rect(filterBtnInfo.x, filterBtnInfo.y, filterBtnInfo.width, filterBtnInfo.height), filterBtnInfo.sheetArea),
	                        btnWidth = filterButtonRect.width, btnHeight = filterButtonRect.height, btnX = filterButtonRect.x, btnY = filterButtonRect.y,
	                        imgSrc = Filter._FilterDialog._getImageSrc(filterBtnInfo._getState());
	                    ctx.save();
	                    ctx.rect(filterBtnInfo.x, filterBtnInfo.y, filterBtnInfo.width, filterBtnInfo.height);
	                    ctx.clip();
	                    ctx.beginPath();
	                    ctx.lineWidth = 1;
	                    ctx.fillStyle = '#FFFFFF';
	                    ctx.strokeStyle = '#CCCCCC';
	
	                    ctx.fillRect(btnX + 1, btnY + 1, btnWidth - 3, btnHeight - 3);
	                    ctx.strokeRect(btnX + 1 - 0.5, btnY + 2 - 0.5, btnWidth - 3, btnHeight - 4);
	                    try {
	                        if (imageLoader._getState(imgSrc)) {
	                            ctx.drawImage(imageLoader._getImage(imgSrc), btnX, btnY + 1, btnWidth - 3, btnHeight - 3);
	                        } else {
	                            imageLoader._addImage(imgSrc);
	                        }
	                    } catch (ex) {
	                       
	                    }
	                    ctx.beginPath();
	                    ctx.restore();
	                }
	            }
	        }
	    };
	    Sheets.Worksheet._registerFeature('filter', filterAdapter);
	   
	    var ssAdapter = {
	        init: function () {
	            Commands._registerFilterDialogCommand(this.commandManager());
	        }
	    };
	    Sheets.Workbook._registerFeature('filter', ssAdapter);
	
	    var _SheetModelManager = Sheets._SheetModelManager;
	    $.extend(_SheetModelManager.prototype, {
	        _backupFilter: function (rowFilter, type) {
	            var self = this;
	            var changes = self._changes;
	            if (changes) {
	                if (!changes._originalFilter) {
	                    changes._originalFilter = [];
	                }
	               
	                var originalInfo = {
	                    type: type,
	                    rowFilter:rowFilter
	                };
	                switch (type) {
	                    case 0 :
	                       
	                        var rowFilterInfo;
	                        if(rowFilter) {
	                            rowFilterInfo = {
	                                range: rowFilter.range,
	                                typeName: rowFilter.typeName,
	                                _filteredColumns: rowFilter._filteredColumns.concat([]),
	                                _filteredItems: rowFilter._filteredItems.concat([]),
	                                _filterItemMap: rowFilter._filterItemMap.concat([]),
	                                _filteredInRowsWithColIndexs: $.extend({}, rowFilter._filteredInRowsWithColIndexs),
	                                _filterButtonVisibleInfo: $.extend({}, rowFilter._filterButtonVisibleInfo),
	                                _sortInfo: $.extend({}, rowFilter._sortInfo)
	                            };
	                        }else {
	                            rowFilterInfo = keyword_null;
	                        }
	                        var rowsVisibleInfo = self._sheet.filterRowsVisibleInfo.clone();
	                        originalInfo._changeInfo = {rowFilter : rowFilterInfo, filterRowsVisibleInfo : rowsVisibleInfo};
	                        break;
	                    case 2 :
	                    case 7 :
	                        originalInfo._changeInfo = {
	                            _filteredColumns: rowFilter._filteredColumns.concat([]),
	                            filterRowsVisibleInfo : self._sheet.filterRowsVisibleInfo.clone()
	                        };
	                        break;
	                    case 1 :
	                        originalInfo._changeInfo = rowFilter._sortInfo;
	                        break;
	                    case 3 :
	                        originalInfo._changeInfo = $.extend({}, rowFilter._filterButtonVisibleInfo);
	                        break;
	                    case 4 :
	                        var col = arguments[2];
	                        originalInfo._changeInfo = {col: col, val: rowFilter._filterButtonVisibleInfo[col]};
	                        break;
	                    case 5 :
	                    case 6 :
	                        originalInfo._changeInfo = {
	                            _filterItemMap: rowFilter._filterItemMap.concat([]),
	                            filterRowsVisibleInfo : self._sheet.filterRowsVisibleInfo.clone(),
	                            _filteredColumns: rowFilter._filteredColumns.concat([])
	                        };
	                        break;
	                    case 8 :
	                        originalInfo._changeInfo = {
	                            range: rowFilter.range,
	                            _filteredColumns: rowFilter._filteredColumns.concat([]),
	                            _filteredItems: rowFilter._filteredItems.concat([]),
	                            _filteredInRowsWithColIndexs: $.extend({}, rowFilter._filteredInRowsWithColIndexs),
	                            _filterButtonVisibleInfo: $.extend({}, rowFilter._filterButtonVisibleInfo),
	                            _sortInfo: $.extend({}, rowFilter._sortInfo),
	                            filterRowsVisibleInfo : self._sheet.filterRowsVisibleInfo.clone()
	                        };
	                        break;
	                    case 9 :
	                    case 10 :
	                        originalInfo._changeInfo = {
	                            range: rowFilter.range,
	                            _filteredInRowsWithColIndexs: $.extend({}, rowFilter._filteredInRowsWithColIndexs),
	                            _filteredColumns: rowFilter._filteredColumns.concat([]),
	                            filterRowsVisibleInfo : self._sheet.filterRowsVisibleInfo.clone()
	                        };
	                        break;
	                    case 11 :
	                    case 12 :
	                        originalInfo._changeInfo = {
	                            range: rowFilter.range,
	                            _sortInfo: $.extend({}, rowFilter._sortInfo),
	                            _filterItemMap: rowFilter._filterItemMap.concat([]),
	                            _filteredColumns: rowFilter._filteredColumns.concat([]),
	                            filterRowsVisibleInfo : self._sheet.filterRowsVisibleInfo.clone()
	                        };
	                        break;
	                    case 13 :
	                        originalInfo._changeInfo = {
	                            filteredInRowsWithColIndexs : $.extend({}, rowFilter._filteredInRowsWithColIndexs),
	                            filteredItems : rowFilter._filteredItems.concat([]),
	                            filteredColumns : rowFilter._filteredColumns.concat([])
	                        };
	                        break;
	
	                }
	                changes._originalFilter.push(originalInfo);
	            }
	        },
	        _restoreFilterByChange:function (originalFilter) {
	            var rowFilter = originalFilter.rowFilter, change = originalFilter._changeInfo;
	            if(!rowFilter && originalFilter.type !== 0 ) {
	                return;
	            }
	            switch (originalFilter.type) {
	                case 0 :
	                    if(change.rowFilter) {
	                        this._sheet._rowFilter = $.extend(rowFilter, change.rowFilter);
	                    }else {
	                        this._sheet._rowFilter = change.rowFilter;
	                    }
	                    this._sheet.filterRowsVisibleInfo = change.filterRowsVisibleInfo;
	                    break;
	                case 1 :
	                    rowFilter._sortInfo = change;
	                   
	                    break;
	                case 3 :
	                    rowFilter._filterButtonVisibleInfo = change;
	                    break;
	                case 4 :
	                    rowFilter._filterButtonVisibleInfo[change.col] = change.val;
	                    break;
	                case 5 :
	                case 6 :
	                    rowFilter._filterItemMap = change._filterItemMap;
	                    rowFilter._filteredColumns = change._filteredColumns;
	                    this._sheet.filterRowsVisibleInfo = change.filterRowsVisibleInfo;
	                    break;
	                case 2 :
	                case 7 :
	                   
	                    rowFilter._filteredColumns = change._filteredColumns;
	                    this._sheet.filterRowsVisibleInfo = change.filterRowsVisibleInfo;
	                   
	                    break;
	               
	               
	               
	               
	               
	               
	                case 8 :
	                    $.extend(rowFilter, change);
	                    this._sheet.filterRowsVisibleInfo = change.filterRowsVisibleInfo;
	                    break;
	                case 9 :
	                case 10 :
	                    rowFilter.range = change.range;
	                    rowFilter._filteredInRowsWithColIndexs = change._filteredInRowsWithColIndexs;
	                    rowFilter._filteredColumns = change._filteredColumns;
	                    this._sheet.filterRowsVisibleInfo = change.filterRowsVisibleInfo;
	                    break;
	                case 11 :
	                case 12 :
	                    rowFilter.range = change.range;
	                    rowFilter._sortInfo = change._sortInfo;
	                    rowFilter._filterItemMap = change._filterItemMap;
	                    rowFilter._filteredColumns = change._filteredColumns;
	                    this._sheet.filterRowsVisibleInfo = change.filterRowsVisibleInfo;
	                    break;
	                case 13 :
	                    rowFilter._filteredInRowsWithColIndexs = change.filteredInRowsWithColIndexs;
	                    rowFilter._filteredItems = change.filteredItems;
	                    rowFilter._filteredColumns = change.filteredColumns;
	                    break;
	                default:
	                    break;
	            }
	        },
	        _restoreFilter: function (originalFilters) {
	            var len = arrayHelper_getLength(originalFilters);
	
	                for(var i = len - 1; i >= 0; i--) {
	                    this._restoreFilterByChange(originalFilters[i]);
	                }
	
	        },
	        _onRowsAdded_Filter: function (row, rowCount) {
	            var rowFilter = this._sheet._rowFilter;
	            if (rowFilter) {
	                this._backupFilter(rowFilter, 9 );
	                rowFilter._onRowsAdded(row, rowCount);
	            }
	        },
	        _onRowsRemoved_Filter: function (row, rowCount) {
	            var rowFilter = this._sheet._rowFilter;
	            if (rowFilter) {
	                this._backupFilter(rowFilter, 10 );
	                rowFilter._onRowsRemoved(row, rowCount);
	            }
	        },
	        _onColumnsAdded_Filter: function(col, colCount) {
	            var rowFilter = this._sheet._rowFilter;
	            if (rowFilter) {
	                this._backupFilter(rowFilter, 11 );
	                rowFilter._onColumnsAdded(col, colCount);
	            }
	        },
	        _onColumnsRemoved_Filter: function (col, colCount) {
	            var rowFilter = this._sheet._rowFilter;
	            if (rowFilter) {
	                this._backupFilter(rowFilter, 12 );
	                rowFilter._onColumnsRemoved(col, colCount);
	            }
	        },
	        _clear_Filter: function (row, col, rowCount, colCount) {
	            var rowFilter = this._sheet._rowFilter;
	            if (rowFilter) {
	                rowFilter._clear(row, col, rowCount, colCount);
	            }
	        }
	    });
	    _SheetModelManager._registerFeature('filter', {
	        undo: function (changes) {
	            var originalFilter = changes._originalFilter;
	            if (arrayHelper_getLength(originalFilter)) {
	                this._restoreFilter(originalFilter);
	            }
	        }
	    });
	
	   
	    
	
	   
	    
	
	
	
	
	
	   
	
	    module.exports = Filter;
	
	}());

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';
	
	    var Common = __webpack_require__(3);
	    var Sheets = __webpack_require__(2), Events = Sheets.Events, isNullOrUndefined = Common._Types._isNullOrUndefined;
	    var ConditionalFormatting = __webpack_require__(5);
	    var FilterNS = __webpack_require__(6);
	    var Commands = Sheets.Commands;
	    var ActionBase = Commands.ActionBase, $ = Sheets.GC$;
	    var SORT_FILTER = 'sortFilter', TEXT_SELECT_FLILTER = 'filterTextSelectAction',
	        CONDITION_FILTER = 'filterByCondition', CLEAR_FILTER = 'clearFilter',
	        CONTEXT_MENU_SHEET_FILTER = "contextmenuFilterForSheet",
	        CONTEXT_MENU_TABLE_FILTER = "contextmenuFilterForTable";
	    var executeCommand = Commands._executeCommand, arrayHelper_getLength = Common._ArrayHelper._getLength,
	        keyword_undefined = void 0, keyword_null = null;
	    var sR = function () {
	        return Common._getResource(FilterNS.SR)();
	    };
	
	    function getFilter(tableName, sheet) {
	        var rowFilter;
	        if (tableName) {
	            var table = sheet.tables.findByName(tableName);
	            if (table) {
	                rowFilter = table.rowFilter();
	            }
	        } else {
	            rowFilter = sheet.rowFilter();
	        }
	        return rowFilter;
	    }
	
	    function getTableFilterData(sheet, table, tableColumn, list, condition) {
	        return {
	            sheet: sheet,
	            sheetName: sheet.name(),
	            table: table,
	            tableCol: tableColumn,
	            filterValues: list,
	            conditionInfo: arrayHelper_getLength(list) === 0 && condition ? condition.toJSON() : keyword_undefined
	        };
	    }
	
	    function getRangeFilterData(sheet, column, list, condition) {
	        return {
	            sheet: sheet,
	            sheetName: sheet.name(),
	            col: column,
	            filterValues: list,
	            conditionInfo: arrayHelper_getLength(list) === 0 && condition ? condition.toJSON() : keyword_undefined
	        };
	    }
	    function sendFilteringEvent(colIndex, sheet, table, list, condition) {
	        var tableColumn = table ? colIndex - table.range().col : -1;
	        table ? sheet._trigger(Events.TableFiltering, getTableFilterData(sheet, table, tableColumn, list, condition)) :
	            sheet._trigger(Events.RangeFiltering, getRangeFilterData(sheet, colIndex, list, condition));
	    }
	
	    function doFilter(rowFilter, colIndex, sheet, table, list, condition) {
	        var tableColumn = table ? colIndex - table.range().col : -1;
	        rowFilter.filter(colIndex);
	        table ? sheet._trigger(Events.TableFiltered, getTableFilterData(sheet, table, tableColumn, list, condition)) :
	            sheet._trigger(Events.RangeFiltered, getRangeFilterData(sheet, colIndex, list, condition));
	    }
	
	
	    var FilterSortAction = (function (_super) {
	        $.inherit(FilterSortAction, _super);
	
	        function FilterSortAction(sheet, command) {
	            var self = this;
	            self._sheet = sheet;
	            self._command = command;
	            self._sortInfo = self._command.cmdOption;
	            self._sortInfo.rowFilter = getFilter(self._sortInfo.tableName, self._sheet);
	        }
	
	        FilterSortAction.prototype.execute = function () {
	            var self = this, rowFilter = self._sortInfo.rowFilter, colIndex = self._sortInfo.colIndex,
	                isAsc = self._sortInfo.isAsc,
	                color = self._sortInfo.color, isBackColor = self._sortInfo.isBackColor;
	            self._sheet.suspendPaint();
	            self._sheet._modelManager.startTransaction();
	            if (color !== keyword_undefined) {
	                rowFilter.sortColumnByColor(colIndex, isAsc, color, isBackColor);
	            } else {
	                rowFilter.sortColumn(colIndex, isAsc);
	            }
	            var changesKey = Commands._getChangesKey(self._sheet.name());
	            self._command[changesKey] = self._sheet._modelManager.endTransaction();
	            self._sheet.resumePaint();
	        };
	        FilterSortAction.prototype.undo = function () {
	            var sheet = this._sheet;
	            sheet.suspendPaint();
	            var changesKey = Commands._getChangesKey(sheet.name());
	            sheet._modelManager.undo(this._command[changesKey]);
	            sheet.resumePaint();
	        };
	        return FilterSortAction;
	    })(ActionBase);
	
	    Commands[SORT_FILTER] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, FilterSortAction, options, isUndo);
	        }
	    };
	
	    var FilterClearAction = (function (_super) {
	        $.inherit(FilterClearAction, _super);
	
	        function FilterClearAction(sheet, command) {
	            var self = this;
	            self._sheet = sheet;
	            self._command = command;
	            self._sortInfo = self._command.cmdOption;
	        }
	
	        FilterClearAction.prototype.execute = function () {
	            var self = this, colIndex = self._sortInfo.colIndex;
	
	            var rowFilter, tableName = self._command.cmdOption.tableName;
	            rowFilter = getFilter(tableName, self._sheet);
	            if (!rowFilter) {
	                return;
	            }
	
	            self._sheet.suspendPaint();
	            self._sheet._modelManager.startTransaction();
	            rowFilter.removeFilterItems(colIndex);
	            var changesKey = Commands._getChangesKey(self._sheet.name());
	            self._command[changesKey] = self._sheet._modelManager.endTransaction();
	            self._sheet.resumePaint();
	        };
	        FilterClearAction.prototype.undo = function () {
	            var sheet = this._sheet;
	            sheet.suspendPaint();
	            var changesKey = Commands._getChangesKey(sheet.name());
	            sheet._modelManager.undo(this._command[changesKey]);
	            sheet.resumePaint();
	        };
	        return FilterClearAction;
	    })(ActionBase);
	
	    Commands[CLEAR_FILTER] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, FilterClearAction, options, isUndo);
	        }
	    };
	
	    var FilterTextSelectAction = (function (_super) {
	        $.inherit(FilterTextSelectAction, _super);
	
	        function FilterTextSelectAction(sheet, command) {
	            var self = this;
	            self._sheet = sheet;
	            self._command = command;
	
	        }
	
	        FilterTextSelectAction.prototype.execute = function () {
	            var self = this, colIndex = self._command.cmdOption.colIndex,
	                checkedValues = self._command.cmdOption.checkedValues,
	                allValuesLength = self._command.cmdOption.allValuesLength;
	            var checkedValuesLength = arrayHelper_getLength(checkedValues), BLANK = sR().Blanks;
	
	            var rowFilter, tableName = self._command.cmdOption.tableName, sheet = self._sheet;
	            rowFilter = getFilter(tableName, sheet);
	            if (!rowFilter) {
	                return;
	            }
	            var table;
	            if(tableName) {
	                table = sheet.tables.findByName(tableName);
	            }
	
	            sheet.suspendPaint();
	            sheet._modelManager.startTransaction();
	            sendFilteringEvent(colIndex, sheet, table, checkedValues, keyword_null);
	            rowFilter.removeFilterItems(colIndex);
	
	            if (checkedValuesLength !== allValuesLength) {
	                for (var i = 0; i < checkedValuesLength; i++) {
	                    var item = checkedValues[i];
	                    if (item === BLANK) {
	                        item = '';
	                    }
	                    var tc = new ConditionalFormatting.Condition(2 );
	                   
	                    tc._ps.compareType = 0 ;
	                    tc._ps.expected = item;
	                    tc._ps.useWildCards = false;
	                    rowFilter.addFilterItem(colIndex, tc);
	                }
	            }
	
	            doFilter(rowFilter, colIndex, sheet, table, checkedValues, keyword_null);
	
	            var changesKey = Commands._getChangesKey(sheet.name());
	            self._command[changesKey] = sheet._modelManager.endTransaction();
	            sheet.resumePaint();
	        };
	        FilterTextSelectAction.prototype.undo = function () {
	            var sheet = this._sheet;
	            sheet.suspendPaint();
	            var changesKey = Commands._getChangesKey(sheet.name());
	            sheet._modelManager.undo(this._command[changesKey]);
	            sheet.resumePaint();
	        };
	        return FilterTextSelectAction;
	    })(ActionBase);
	
	
	    Commands[TEXT_SELECT_FLILTER] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, FilterTextSelectAction, options, isUndo);
	        }
	    };
	
	    var FilterByConditionAction = (function (_super) {
	        $.inherit(FilterByConditionAction, _super);
	
	        function FilterByConditionAction(sheet, command) {
	            var self = this;
	            self._sheet = sheet;
	            self._command = command;
	        }
	
	        FilterByConditionAction.prototype.execute = function () {
	            var self = this, colIndex = self._command.cmdOption.colIndex, condition = self._command.cmdOption.condition;
	            var rowFilter, tableName = self._command.cmdOption.tableName;
	            rowFilter = getFilter(tableName, self._sheet);
	            if (!rowFilter) {
	                return;
	            }
	            var table;
	            if(tableName) {
	                table = self._sheet.tables.findByName(tableName);
	            }
	
	            self._sheet.suspendPaint();
	            self._sheet._modelManager.startTransaction();
	            sendFilteringEvent(colIndex, self._sheet, table, [], condition);
	            rowFilter.removeFilterItems(colIndex);
	            rowFilter.addFilterItem(colIndex, condition);
	            doFilter(rowFilter, colIndex, self._sheet, table, [], condition);
	            var changesKey = Commands._getChangesKey(self._sheet.name());
	            self._command[changesKey] = self._sheet._modelManager.endTransaction();
	            self._sheet.resumePaint();
	        };
	        FilterByConditionAction.prototype.undo = function () {
	            var sheet = this._sheet;
	            sheet.suspendPaint();
	            var changesKey = Commands._getChangesKey(sheet.name());
	            sheet._modelManager.undo(this._command[changesKey]);
	            sheet.resumePaint();
	        };
	        return FilterByConditionAction;
	    })(ActionBase);
	
	    Commands[CONDITION_FILTER] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, FilterByConditionAction, options, isUndo);
	        }
	    };
	
	    var ContextMenuFilterForSheet = (function (_super) {
	        $.inherit(ContextMenuFilterForSheet, _super);
	
	        function ContextMenuFilterForSheet(sheet, command) {
	            var self = this;
	            self._sheet = sheet;
	            self._command = command;
	        }
	
	        ContextMenuFilterForSheet.prototype.execute = function () {
	            var self = this, sheet = self._sheet, cmdOption = self._command.cmdOption, selection = cmdOption.selection,
	                activeRow = cmdOption.activeRow, activeColumn = cmdOption.activeCol,
	                expectedText = cmdOption.expectedText;
	            sheet._modelManager.startTransaction();
	            if (!sheet.rowFilter()) {
	                sheet.rowFilter(new Sheets.Filter.HideRowFilter(selection));
	            } else {
	                var condition, rowFilter = sheet.rowFilter(), range = rowFilter.range;
	                if (range.contains(activeRow, activeColumn, 1, 1)) {
	                    sendFilteringEvent(activeColumn, sheet, keyword_undefined, [expectedText], keyword_null);
	                    condition = new Sheets.ConditionalFormatting.Condition(
	                        Sheets.ConditionalFormatting.ConditionType.textCondition,
	                        {
	                            compareType: 0, 
	                            expected: expectedText
	                        });
	                    rowFilter.addFilterItem(activeColumn, condition);
	                    doFilter(rowFilter, activeColumn, sheet, keyword_undefined, [expectedText], keyword_null);
	                } else if (range.row - 1 === activeRow && !isNullOrUndefined(rowFilter._filterButtonVisibleInfo[activeColumn])) {
	                    var text = sheet.getText(range.row, activeColumn);
	                    sendFilteringEvent(activeColumn, sheet, keyword_undefined, [expectedText], keyword_null);
	                    condition = new Sheets.ConditionalFormatting.Condition(
	                        Sheets.ConditionalFormatting.ConditionType.textCondition,
	                        {
	                            compareType: 0, 
	                            expected: text
	                        });
	                    rowFilter.addFilterItem(activeColumn, condition);
	                    doFilter(rowFilter, activeColumn, sheet, keyword_undefined, [expectedText], keyword_null);
	                } else {
	                    sheet.rowFilter().unfilter();
	                    sheet.rowFilter(new Sheets.Filter.HideRowFilter(selection));
	                }
	
	            }
	            var changesKey = Commands._getChangesKey(sheet.name());
	            this._command[changesKey] = sheet._modelManager.endTransaction();
	        };
	        ContextMenuFilterForSheet.prototype.undo = function () {
	            var sheet = this._sheet;
	            sheet.suspendPaint();
	            var changesKey = Commands._getChangesKey(sheet.name());
	            sheet._modelManager.undo(this._command[changesKey]);
	            sheet.resumePaint();
	        };
	
	        return ContextMenuFilterForSheet;
	    })(ActionBase);
	    Commands[CONTEXT_MENU_SHEET_FILTER] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, ContextMenuFilterForSheet, options, isUndo);
	        }
	    };
	
	    var ContextMenuFilterForTable = (function (_super) {
	        $.inherit(ContextMenuFilterForTable, _super);
	
	        function ContextMenuFilterForTable(sheet, command) {
	            var self = this;
	            self._sheet = sheet;
	            self._command = command;
	        }
	
	        ContextMenuFilterForTable.prototype.execute = function () {
	            var self = this, sheet = self._sheet, cmdOption = self._command.cmdOption, tableName = cmdOption.tableName,
	                expectedText = cmdOption.expectedText, activeColumn = cmdOption.activeCol, activeRow = cmdOption.activeRow;
	            sheet._modelManager.startTransaction();
	            var rowFilter = getFilter(tableName, sheet), table = sheet.tables.findByName(tableName);
	            if (!rowFilter || !table) {
	                return;
	            }
	            var tableRange = table.range();
	            if (table.showHeader() && tableRange.row === activeRow && !isNullOrUndefined(rowFilter._filterButtonVisibleInfo[activeColumn - tableRange.col])) {
	                expectedText = sheet.getText(activeRow + 1, activeColumn);
	            }
	            sendFilteringEvent(activeColumn, sheet, keyword_undefined, [expectedText], keyword_null);
	            var condition = new Sheets.ConditionalFormatting.Condition(
	                Sheets.ConditionalFormatting.ConditionType.textCondition,
	                {
	                    compareType: 0, 
	                    expected: expectedText
	                });
	
	            rowFilter.removeFilterItems(activeColumn);
	            rowFilter.addFilterItem(activeColumn, condition);
	            doFilter(rowFilter, activeColumn, sheet, keyword_undefined, [expectedText], keyword_null);
	
	            var changesKey = Commands._getChangesKey(sheet.name());
	            this._command[changesKey] = sheet._modelManager.endTransaction();
	        };
	        ContextMenuFilterForTable.prototype.undo = function () {
	            var sheet = this._sheet;
	            sheet.suspendPaint();
	            var changesKey = Commands._getChangesKey(sheet.name());
	            sheet._modelManager.undo(this._command[changesKey]);
	            sheet.resumePaint();
	        };
	
	        return ContextMenuFilterForTable;
	    })(ActionBase);
	    Commands[CONTEXT_MENU_TABLE_FILTER] = {
	        canUndo: true,
	        execute: function (context, options, isUndo) {
	            return executeCommand(context, ContextMenuFilterForTable, options, isUndo);
	        }
	    };
	
	
	    Commands._registerFilterDialogCommand = function (commands) {
	        commands.register(SORT_FILTER, Commands[SORT_FILTER]);
	        commands.register(TEXT_SELECT_FLILTER, Commands[TEXT_SELECT_FLILTER]);
	        commands.register(CONDITION_FILTER, Commands[CONDITION_FILTER]);
	        commands.register(CLEAR_FILTER, Commands[CLEAR_FILTER]);
	        commands.register(CONTEXT_MENU_SHEET_FILTER, Commands[CONTEXT_MENU_SHEET_FILTER]);
	        commands.register(CONTEXT_MENU_TABLE_FILTER, Commands[CONTEXT_MENU_TABLE_FILTER]);
	    };
	    module.exports = Commands;
	
	}());

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = GC.Spread.Formatter;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	(function() {
	    'use strict';
	
	    module.exports = {
	        Exp_InvalidColumnIndex: 'Invalid column index.',
	        SortAscending: 'Sort Ascending',
	        SortDescending: 'Sort Descending',
	        OK: 'OK',
	        Cancel: 'Cancel',
	        Search: 'Search',
	        CheckAll: 'Check all',
	        UncheckAll: 'Uncheck all',
	        Blanks: '(Blanks)',
	        Exp_FilterItemIsNull: 'FilterItem is null.',
	        Show: 'Show',
	        ShowRows: 'Show rows where:',
	        And: 'And',
	        Or: 'Or',
	        SortColor: 'Sort By Color',
	        FilterColor: 'Filter By Color',
	        FilterCellTitle: 'Filter By Cell Color',
	        FilterFontTitle: 'Filter By Font Color',
	        SortCellTitle: 'Sort By Cell Color',
	        SortFontTitle: 'Sort By Font Color',
	        FontColor: 'More Font Colors...',
	        CellColor: 'More Cell Colors...',
	        NoFill: 'No Fill',
	        Automatic: 'Automatic',
	        Clear: 'Clear Filter From {0}',
	        TextFilter: 'Text Filters',
	        DateFilter: 'Date Filters',
	        NumberFilter: 'Number Filters',
	        Custom: 'Custom Filter...',
	        Equal: 'Equals...',
	        NotEqual: 'Does Not Equal...',
	        GreaterThan: 'Greater Than...',
	        GreaterOrEquals: 'Greater Than Or Equal To...',
	        LessThan: 'Less Than...',
	        LessThanOrEquals: 'Less Than Or Equal To...',
	        Between: 'Between...',
	        Top10: 'Top 10...',
	        AboveAverage: 'Above Average',
	        BelowAverage: 'Below Average',
	        Begin: 'Begins With...',
	        End: 'Ends With...',
	        Contain: 'Contains...',
	        NotContain: 'Does Not Contain...',
	        Before: 'Before...',
	        After: 'After...',
	        Tomorrow: 'Tomorrow',
	        Today: 'Today',
	        Yesterday: 'Yesterday',
	        NextWeek: 'Next Week',
	        ThisWeek: 'This Week',
	        LastWeek: 'Last Week',
	        NextMonth: 'Next Month',
	        ThisMonth: 'This Month',
	        LastMonth: 'Last Month',
	        NextQuarter: 'Next Quarter',
	        ThisQuarter: 'This Quarter',
	        LastQuarter: 'Last Quarter',
	        NextYear: 'Next Year',
	        ThisYear: 'This Year',
	        LastYear: 'Last Year',
	        YearToDate: 'Year To Date',
	        AllDates: 'All Dates in Period',
	
	        Top10Filter: 'Top 10 Auto Filter',
	        CustomTitle: 'Custom AutoFilter',
	        ColorTitle: 'Available Cell Colors',
	        top: 'top',
	        bottom : 'bottom',
	
	        SortCell: 'Select a cell color to sort by:',
	        SortFont: 'Select a font color to sort by:',
	        FilterCell: 'Select a cell color to filter by:',
	        FilterFont: 'Select a font color to filter by:',
	        Selected: 'Selected:',
	
	        IsEquals: 'equals',
	        NotEquals: 'does not equal',
	        IsGreaterThan: 'is greater than',
	        IsGreaterOrEqual: 'is greater than or equal to',
	        IsLess: 'is less than',
	        LessOrEqual: 'is less than or equal to',
	        IsBeginWith: 'begins with',
	        NotBeginWith: 'does not begin with',
	        IsEndWith: 'ends with',
	        NotEndWith: 'does not end with',
	        IsContain: 'contains',
	        NotContains: 'does not contain',
	        IsAfter:'is after',
	        AfterOrEqual: 'is after or equal to',
	        IsBefore: 'is before',
	        BeforeOrEqual: 'is before or equal to',
	        Q1:'Quarter 1',
	        Q2:'Quarter 2',
	        Q3:'Quarter 3',
	        Q4:'Quarter 4',
	        Jan:'January',
	        Feb:'February',
	        Mar:'March',
	        Apr:'April',
	        May:'May',
	        Jun:'June',
	        Jul:'July',
	        Aug:'August',
	        Sep:'September',
	        Oct:'October',
	        Nov:'November',
	        Dec:'December',
	
	        Explain1: 'Use ? to represent any single character',
	        Explain2: 'Use * to represent any series of characters',
	
	        Year: '',
	        Day: ''
	    };
	
	}());

/***/ })
/******/ ]);
//# sourceMappingURL=gc.spread.sheets.filter.12.0.0.js.map
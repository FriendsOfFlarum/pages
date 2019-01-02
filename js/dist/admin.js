module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/admin/addPagesPane.js":
/*!***********************************!*\
  !*** ./src/admin/addPagesPane.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/AdminNav */ "flarum/components/AdminNav");
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/AdminLinkButton */ "flarum/components/AdminLinkButton");
/* harmony import */ var flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PagesPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PagesPage */ "./src/admin/components/PagesPage.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  app.routes.pages = {
    path: 'pages',
    component: _components_PagesPage__WEBPACK_IMPORTED_MODULE_3__["default"].component()
  };

  app.extensionSettings['fof-pages'] = function () {
    return m.route(app.route('pages'));
  };

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'items', function (items) {
    items.add('pages', flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      href: app.route('pages'),
      icon: 'fas fa-file-alt',
      children: app.translator.trans('fof-pages.admin.nav.pages_button'),
      description: app.translator.trans('fof-pages.admin.nav.pages_text')
    }));
  });
});

/***/ }),

/***/ "./src/admin/components/EditPageModal.js":
/*!***********************************************!*\
  !*** ./src/admin/components/EditPageModal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditPageModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/string */ "flarum/utils/string");
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_string__WEBPACK_IMPORTED_MODULE_3__);




/**
 * The `EditPageModal` component shows a modal dialog which allows the user
 * to create or edit a page.
 */

var EditPageModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(EditPageModal, _Modal);

  function EditPageModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = EditPageModal.prototype;

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.page = this.props.page || app.store.createRecord('pages');
    this.pageTitle = m.prop(this.page.title() || '');
    this.slug = m.prop(this.page.slug() || '');
    this.pageContent = m.prop(this.page.content() || '');
    this.isHidden = m.prop(this.page.isHidden() && true);
    this.isHtml = m.prop(this.page.isHtml() && true);
  };

  _proto.className = function className() {
    return 'EditPageModal Modal--large';
  };

  _proto.title = function title() {
    var title = this.pageTitle();
    return title ? title : app.translator.trans('fof-pages.admin.edit_page.title');
  };

  _proto.content = function content() {
    var _this = this;

    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('fof-pages.admin.edit_page.title_label')), m("input", {
      className: "FormControl",
      placeholder: app.translator.trans('fof-pages.admin.edit_page.title_placeholder'),
      value: this.pageTitle(),
      oninput: function oninput(e) {
        _this.pageTitle(e.target.value);

        _this.slug(Object(flarum_utils_string__WEBPACK_IMPORTED_MODULE_3__["slug"])(e.target.value));
      }
    })), m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('fof-pages.admin.edit_page.slug_label')), m("input", {
      className: "FormControl",
      placeholder: app.translator.trans('fof-pages.admin.edit_page.slug_placeholder'),
      value: this.slug(),
      oninput: function oninput(e) {
        _this.slug(e.target.value);
      }
    })), m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('fof-pages.admin.edit_page.content_label')), m("textarea", {
      className: "FormControl",
      rows: "5",
      value: this.pageContent(),
      onchange: m.withAttr('value', this.pageContent),
      placeholder: app.translator.trans('fof-pages.admin.edit_page.content_placeholder')
    })), m("div", {
      className: "Form-group"
    }, m("div", null, m("label", {
      className: "checkbox"
    }, m("input", {
      type: "checkbox",
      value: "1",
      checked: this.isHidden(),
      onchange: m.withAttr('checked', this.isHidden)
    }), app.translator.trans('fof-pages.admin.edit_page.hidden_label')))), m("div", {
      className: "Form-group"
    }, m("div", null, m("label", {
      className: "checkbox"
    }, m("input", {
      type: "checkbox",
      value: "1",
      checked: this.isHtml(),
      onchange: m.withAttr('checked', this.isHtml)
    }), app.translator.trans('fof-pages.admin.edit_page.html_label')))), m("div", {
      className: "Form-group"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      type: 'submit',
      className: 'Button Button--primary EditPageModal-save',
      loading: this.loading,
      children: app.translator.trans('fof-pages.admin.edit_page.submit_button')
    }), this.page.exists ? m("button", {
      type: "button",
      className: "Button EditPageModal-delete",
      onclick: this.delete.bind(this)
    }, app.translator.trans('fof-pages.admin.edit_page.delete_page_button')) : '')));
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this2 = this;

    e.preventDefault();
    this.loading = true;
    this.page.save({
      title: this.pageTitle(),
      slug: this.slug(),
      content: this.pageContent(),
      isHidden: this.isHidden(),
      isHtml: this.isHtml()
    }, {
      errorHandler: this.onerror.bind(this)
    }).then(this.hide.bind(this)).catch(function () {
      _this2.loading = false;
      m.redraw();
    });
  };

  _proto.onhide = function onhide() {
    m.route(app.route('pages'));
  };

  _proto.delete = function _delete() {
    if (confirm(app.translator.trans('fof-pages.admin.edit_page.delete_page_confirmation'))) {
      this.page.delete().then(function () {
        return m.redraw();
      });
      this.hide();
    }
  };

  return EditPageModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/components/PagesList.js":
/*!*******************************************!*\
  !*** ./src/admin/components/PagesList.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PagesList; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Placeholder */ "flarum/components/Placeholder");
/* harmony import */ var flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PagesListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PagesListItem */ "./src/admin/components/PagesListItem.js");






/**
 * The `PagesList` component displays a list of Pages.
 *
 */

var PagesList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PagesList, _Component);

  function PagesList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = PagesList.prototype;

  _proto.init = function init() {
    /**
     * Whether or not pages results are loading.
     *
     * @type {Boolean}
     */
    this.loading = true;
    /**
     * The pages in the pages list.
     *
     * @type {Page}
     */

    this.pages = [];
    /**
     * Current page number.
     *
     * @type {Integer}
     */

    this.page = 0;
    /**
     * The number of activity items to load per request.
     *
     * @type {Integer}
     */

    this.loadLimit = 20;
    this.refresh();
  };

  _proto.view = function view() {
    if (this.loading) {
      return m("div", {
        className: "PageList-loading"
      }, flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default.a.component());
    }

    if (this.pages.length === 0) {
      var text = app.translator.trans('fof-pages.admin.pages_list.empty_text');
      return flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_3___default.a.component({
        text: text
      });
    }

    var next, prev;

    if (this.nextResults === true) {
      next = flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a.component({
        className: 'Button Button--PageList-next',
        icon: 'fas fa-angle-right',
        onclick: this.loadNext.bind(this)
      });
    }

    if (this.prevResults === true) {
      prev = flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a.component({
        className: 'Button Button--PageList-prev',
        icon: 'fas fa-angle-left',
        onclick: this.loadPrev.bind(this)
      });
    }

    return m("div", {
      className: "PageList"
    }, m("table", {
      className: "PageList-results"
    }, m("thead", null, m("tr", null, m("th", null, app.translator.trans('fof-pages.admin.pages_list.title')), m("th", null))), m("tbody", null, this.pages.map(function (page) {
      return _PagesListItem__WEBPACK_IMPORTED_MODULE_5__["default"].component({
        page: page
      });
    }))), m("div", {
      className: "PageList-pagination"
    }, next, prev));
  };
  /**
   * @public
   */


  _proto.refresh = function refresh(clear) {
    if (clear === void 0) {
      clear = true;
    }

    if (clear) {
      this.loading = true;
      this.pages = [];
    }

    return this.loadResults().then(this.parseResults.bind(this));
  };
  /**
   * Load a new page of Pages results.
   *
   * @param {Integer} page number.
   * @return {Promise}
   */


  _proto.loadResults = function loadResults() {
    var offset = this.page * this.loadLimit;
    return app.store.find('pages', {
      page: {
        offset: offset,
        limit: this.loadLimit
      },
      sort: '-time'
    });
  };
  /**
   * Load the next page of results.
   *
   * @public
   */


  _proto.loadNext = function loadNext() {
    if (this.nextResults === true) {
      this.page++;
      this.refresh();
    }
  };
  /**
   * Load the previous page of results.
   *
   * @public
   */


  _proto.loadPrev = function loadPrev() {
    if (this.prevResults === true) {
      this.page--;
      this.refresh();
    }
  };
  /**
   * Parse results and append them to the page list.
   *
   * @param {Page[]} results
   * @return {Page[]}
   */


  _proto.parseResults = function parseResults(results) {
    [].push.apply(this.pages, results);
    this.loading = false;
    this.nextResults = !!results.payload.links.next;
    this.prevResults = !!results.payload.links.prev;
    m.lazyRedraw();
    return results;
  };

  return PagesList;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/components/PagesListItem.js":
/*!***********************************************!*\
  !*** ./src/admin/components/PagesListItem.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PagesListItem; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/saveSettings */ "flarum/utils/saveSettings");
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _EditPageModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditPageModal */ "./src/admin/components/EditPageModal.js");






/**
 * ### Props
 *
 * - `page`
 */

var PagesListItem =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PagesListItem, _Component);

  function PagesListItem() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = PagesListItem.prototype;

  _proto.view = function view() {
    var page = this.props.page;
    var url = app.forum.attribute('baseUrl') + '/p/' + page.id() + '-' + page.slug();
    return m("tr", {
      key: page.id()
    }, m("th", null, page.title()), m("td", {
      className: "Pages-actions"
    }, m("div", {
      className: "ButtonGroup"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      className: 'Button Button--page-edit',
      icon: 'fas fa-pencil-alt',
      onclick: function onclick() {
        return app.modal.show(new _EditPageModal__WEBPACK_IMPORTED_MODULE_5__["default"]({
          page: page
        }));
      }
    }), flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      className: 'Button Button--page-edit',
      icon: 'fas fa-home',
      onclick: this.setAsHomePage.bind(this)
    }), flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      className: 'Button Button--page-view',
      icon: 'fas fa-eye fa-sm',
      onclick: function onclick() {
        return window.open(url, '_blank');
      }
    }), flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      className: 'Button Button--danger Button--page-delete',
      icon: 'fas fa-times',
      onclick: this.delete.bind(this)
    }))));
  };

  _proto.setAsHomePage = function setAsHomePage() {
    var _this = this;

    app.alerts.dismiss(this.successAlert);

    if (confirm(app.translator.trans('fof-pages.admin.edit_page.set_as_home_page_confirmation'))) {
      var page = this.props.page;
      flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_4___default()({
        default_route: '/pages/home',
        pages_home: page.id()
      }).then(function () {
        app.alerts.show(_this.successAlert = new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_1___default.a({
          type: 'success',
          children: app.translator.trans('core.admin.basics.saved_message')
        }));
      }).catch(function () {}).then(function () {
        _this.loading = false;
        m.redraw();
      });
    }
  };

  _proto.delete = function _delete() {
    if (confirm(app.translator.trans('fof-pages.admin.edit_page.delete_page_confirmation'))) {
      var page = this.props.page;
      page.delete().then(function () {
        return m.redraw();
      });
    }
  };

  return PagesListItem;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_3___default.a);



/***/ }),

/***/ "./src/admin/components/PagesPage.js":
/*!*******************************************!*\
  !*** ./src/admin/components/PagesPage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PagesPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EditPageModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditPageModal */ "./src/admin/components/EditPageModal.js");
/* harmony import */ var _PagesList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PagesList */ "./src/admin/components/PagesList.js");






var PagesPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PagesPage, _Page);

  function PagesPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = PagesPage.prototype;

  _proto.view = function view() {
    return m("div", {
      className: "PagesPage"
    }, m("div", {
      className: "PagesPage-header"
    }, m("div", {
      className: "container"
    }, m("p", null, app.translator.trans('fof-pages.admin.pages.about_text')), flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      className: 'Button Button--primary',
      icon: 'fas fa-plus',
      children: app.translator.trans('fof-pages.admin.pages.create_button'),
      onclick: function onclick() {
        return app.modal.show(new _EditPageModal__WEBPACK_IMPORTED_MODULE_3__["default"]());
      }
    }))), m("div", {
      className: "PagesPage-list"
    }, m("div", {
      className: "container"
    }, _PagesList__WEBPACK_IMPORTED_MODULE_4__["default"].component())));
  };

  return PagesPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_models_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/models/Page */ "./src/common/models/Page.js");
/* harmony import */ var _addPagesPane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addPagesPane */ "./src/admin/addPagesPane.js");


app.initializers.add('fof-pages', function (app) {
  app.store.models.pages = _common_models_Page__WEBPACK_IMPORTED_MODULE_0__["default"];
  Object(_addPagesPane__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "./src/common/models/Page.js":
/*!***********************************!*\
  !*** ./src/common/models/Page.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/computed */ "flarum/utils/computed");
/* harmony import */ var flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/string */ "flarum/utils/string");
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_string__WEBPACK_IMPORTED_MODULE_4__);






var Page =
/*#__PURE__*/
function (_mixin) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Page, _mixin);

  function Page() {
    return _mixin.apply(this, arguments) || this;
  }

  return Page;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()(flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a, {
  title: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('title'),
  time: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('time', flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.transformDate),
  editTime: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('editTime', flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.transformDate),
  content: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('content'),
  contentHtml: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('contentHtml'),
  contentPlain: flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default()('contentHtml', flarum_utils_string__WEBPACK_IMPORTED_MODULE_4__["getPlainContent"]),
  slug: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('slug'),
  isHidden: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('isHidden'),
  isHtml: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('isHtml')
}));



/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/components/AdminLinkButton":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/AdminLinkButton']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AdminLinkButton'];

/***/ }),

/***/ "flarum/components/AdminNav":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/AdminNav']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AdminNav'];

/***/ }),

/***/ "flarum/components/Alert":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Alert']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Alert'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/LoadingIndicator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/LoadingIndicator']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LoadingIndicator'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/Placeholder":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/Placeholder']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Placeholder'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/utils/computed":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/computed']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/computed'];

/***/ }),

/***/ "flarum/utils/mixin":
/*!****************************************************!*\
  !*** external "flarum.core.compat['utils/mixin']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/mixin'];

/***/ }),

/***/ "flarum/utils/saveSettings":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/saveSettings']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/saveSettings'];

/***/ }),

/***/ "flarum/utils/string":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/string']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/string'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map
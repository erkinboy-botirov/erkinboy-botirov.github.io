(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/account/delete-account/account-deleted-modal.vue":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/account/delete-account/account-deleted-modal.vue ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_eventBus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utilities/eventBus.js */ "./src/utilities/eventBus.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var webpack_zepto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-zepto */ "./node_modules/webpack-zepto/index.js");
/* harmony import */ var webpack_zepto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_zepto__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      showModal: false
    };
  },
  methods: {
    goToRegistration: function goToRegistration() {
      this.$store.commit("auth/logOut", {
        force: true
      });
      this.$router.push({
        path: "/signup/1"
      });
    },
    closeModal: function closeModal() {
      // Loading intro page will force logout
      this.$router.push({
        path: "/intro"
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/account/delete-account/delete-account-confirmation.vue":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/account/delete-account/delete-account-confirmation.vue ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _account_deleted_modal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-deleted-modal.vue */ "./src/components/account/delete-account/account-deleted-modal.vue");
/* harmony import */ var _common_loader_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/loader.vue */ "./src/components/common/loader.vue");
/* harmony import */ var webpack_zepto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack-zepto */ "./node_modules/webpack-zepto/index.js");
/* harmony import */ var webpack_zepto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack_zepto__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AccountDeletedModal: _account_deleted_modal_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Loader: _common_loader_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      dataSaving: false,
      showModal: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    user: "auth/getUser"
  })),
  created: function created() {
    webpack_zepto__WEBPACK_IMPORTED_MODULE_4___default()(window).scrollTop(0);
  },
  methods: {
    goToAccountSettings: function goToAccountSettings() {
      this.$store.commit({
        type: "menu/setCurrentMenuItem",
        item: {
          menuContent: "account-settings",
          component: "account-settings/account-settings.vue",
          isMenuExpanded: true
        }
      });
    },
    deleteAccount: function deleteAccount() {
      var _this = this;

      this.dataSaving = true;
      this.$store.dispatch("account/deleteAccount", this.user).then(function () {
        _this.$store.commit("cart/resetState");

        _this.$store.commit("filters/resetState");

        _this.$store.commit("generatedOutfits/resetState");

        _this.$store.commit("onboarding/resetState");

        _this.$store.commit("products/resetState");

        _this.$store.commit("savedOutfits/resetState");

        _this.$store.commit("savedProducts/resetState");

        _this.$store.commit("outfits/resetState");

        _this.dataSaving = false;
        _this.showModal = true;
      })["catch"](function () {
        _this.dataSaving = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-213bd087\",\"scoped\":true,\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/account/delete-account/account-deleted-modal.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-213bd087","scoped":true,"sourceMap":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/account/delete-account/account-deleted-modal.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.wrapper[data-v-213bd087] {\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n}\n.container[data-v-213bd087] {\n  position: absolute;\n  padding: 20px;\n  background: #fff;\n  border-radius: 20px;\n  width: 80%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.title[data-v-213bd087] {\n  font-size: 20px;\n  line-height: 29px;\n  font-weight: 600;\n  margin: 0 0 20px;\n  color: #000;\n}\n.button.pink[data-v-213bd087] {\n  margin-bottom: 20px;\n  padding: 0 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-503c1b65\",\"scoped\":true,\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/account/delete-account/delete-account-confirmation.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-503c1b65","scoped":true,"sourceMap":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/account/delete-account/delete-account-confirmation.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.back-to-main-menu[data-v-503c1b65] {\n  margin-bottom: 30px;\n}\n.menu-container .step-title-container .step-title[data-v-503c1b65] {\n  font-size: 20px;\n  font-weight: 600;\n}\n.step-actions[data-v-503c1b65] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n.menu-container .settings-container .button.pink[data-v-503c1b65] {\n  margin-bottom: 0;\n}\n.delete-account-btn[data-v-503c1b65] {\n  color: #ff0000;\n  font-size: 12px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-213bd087\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/account/delete-account/account-deleted-modal.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-213bd087","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/account/delete-account/account-deleted-modal.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "wrapper" }, [
    _c("div", { staticClass: "container" }, [
      _c("p", { staticClass: "title" }, [
        _vm._v("Your account has been deleted.")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "button pink full-width",
          on: {
            click: function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k(
                  $event.keyCode,
                  "click",
                  undefined,
                  $event.key,
                  undefined
                )
              ) {
                return null
              }
              return _vm.goToRegistration()
            }
          }
        },
        [_vm._v("\n            Make A New Account\n        ")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "cancel",
          on: {
            click: function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k(
                  $event.keyCode,
                  "click",
                  undefined,
                  $event.key,
                  undefined
                )
              ) {
                return null
              }
              return _vm.closeModal()
            }
          }
        },
        [_vm._v("Dismiss")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-503c1b65\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/account/delete-account/delete-account-confirmation.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-503c1b65","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/account/delete-account/delete-account-confirmation.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "settings-container account-delete-confirmation" },
    [
      _c("transition", { attrs: { name: "fade" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.dataSaving,
                expression: "dataSaving"
              }
            ],
            staticClass: "loading-overlay"
          },
          [_c("loader")],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "wtw-container center" }, [
        _c("div", { staticClass: "step-container" }, [
          _c(
            "div",
            {
              staticClass: "back-to-main-menu",
              on: {
                click: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k(
                      $event.keyCode,
                      "click",
                      undefined,
                      $event.key,
                      undefined
                    )
                  ) {
                    return null
                  }
                  return _vm.goToAccountSettings($event)
                }
              }
            },
            [_c("span", { staticClass: "stay-black" }, [_vm._v("Back")])]
          ),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "step-actions" }, [
          _c(
            "button",
            {
              staticClass: "button pink small-font",
              on: {
                click: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k(
                      $event.keyCode,
                      "click",
                      undefined,
                      $event.key,
                      undefined
                    )
                  ) {
                    return null
                  }
                  return _vm.goToAccountSettings($event)
                }
              }
            },
            [_vm._v("\n                Cancel\n            ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "delete-account-btn",
              on: {
                click: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k(
                      $event.keyCode,
                      "click",
                      undefined,
                      $event.key,
                      undefined
                    )
                  ) {
                    return null
                  }
                  return _vm.deleteAccount($event)
                }
              }
            },
            [_vm._v("\n                Delete account\n            ")]
          )
        ])
      ]),
      _vm._v(" "),
      _vm.showModal ? _c("AccountDeletedModal") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step-title-container" }, [
      _c("div", { staticClass: "step-title" }, [
        _vm._v(
          "\n                    Are you sure you want to delete your account?\n                "
        )
      ]),
      _vm._v(" "),
      _c("div", [
        _vm._v(
          "\n                    If you do, your personalized outfits, lists, data, and\n                    more will be deleted permanently.\n                "
        )
      ])
    ])
  }
]
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-213bd087\",\"scoped\":true,\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/account/delete-account/account-deleted-modal.vue":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-213bd087","scoped":true,"sourceMap":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/account/delete-account/account-deleted-modal.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-213bd087","scoped":true,"sourceMap":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./account-deleted-modal.vue */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-213bd087\",\"scoped\":true,\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/account/delete-account/account-deleted-modal.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")("ce387bb4", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-503c1b65\",\"scoped\":true,\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/account/delete-account/delete-account-confirmation.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-503c1b65","scoped":true,"sourceMap":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/account/delete-account/delete-account-confirmation.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-503c1b65","scoped":true,"sourceMap":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./delete-account-confirmation.vue */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-503c1b65\",\"scoped\":true,\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/account/delete-account/delete-account-confirmation.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")("54a9e600", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/account/delete-account/account-deleted-modal.vue":
/*!*************************************************************************!*\
  !*** ./src/components/account/delete-account/account-deleted-modal.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_account_deleted_modal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./account-deleted-modal.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/account/delete-account/account-deleted-modal.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_213bd087_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_account_deleted_modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-213bd087","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./account-deleted-modal.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-213bd087\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/account/delete-account/account-deleted-modal.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-213bd087","scoped":true,"sourceMap":true}!sass-loader!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./account-deleted-modal.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-213bd087\",\"scoped\":true,\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/account/delete-account/account-deleted-modal.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-213bd087"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_account_deleted_modal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_213bd087_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_account_deleted_modal_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_213bd087_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_account_deleted_modal_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/account/delete-account/account-deleted-modal.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/components/account/delete-account/delete-account-confirmation.vue":
/*!*******************************************************************************!*\
  !*** ./src/components/account/delete-account/delete-account-confirmation.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_delete_account_confirmation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./delete-account-confirmation.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/account/delete-account/delete-account-confirmation.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_503c1b65_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_delete_account_confirmation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-503c1b65","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./delete-account-confirmation.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-503c1b65\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/account/delete-account/delete-account-confirmation.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-503c1b65","scoped":true,"sourceMap":true}!sass-loader!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./delete-account-confirmation.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-503c1b65\",\"scoped\":true,\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/account/delete-account/delete-account-confirmation.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-503c1b65"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_delete_account_confirmation_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_503c1b65_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_delete_account_confirmation_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_503c1b65_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_delete_account_confirmation_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/account/delete-account/delete-account-confirmation.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);
//# sourceMappingURL=1.bundle.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Partials/Profile/Followers.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home/Partials/Profile/Followers.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {};
  },
  methods: {
    unfollow: function unfollow(index) {
      this.$root.users[index].following = false;
    },
    follow: function follow(index) {
      this.$root.users[index].following = true;
    }
  },
  created: function created() {
    this.$root.profile_active_page = window.location.href.split('/')[4];
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Partials/Profile/Followers.vue?vue&type=style&index=0&id=740e7432&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home/Partials/Profile/Followers.vue?vue&type=style&index=0&id=740e7432&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.content[data-v-740e7432]{\n    width: 900px;\n}\n.title[data-v-740e7432]{\n    font-size: 21px;\n    font-weight: 600;\n    margin: 15px;\n}\n.followers-banner[data-v-740e7432]{\n    width: auto;\n    height: 83px;\n    background-color: aliceblue;\n\n    border-width: 5px;\n    border-style: solid;\n    border-color: transparent;\n    border-radius: 5px;\n}\n.followers-img[data-v-740e7432]{\n    width: 65px;\n    border-radius: 50%;\n    border: 3px solid white;\n\n    position: absolute;\n    margin-top: 40px;\n    margin-left: 10px;\n}\n.followers-field[data-v-740e7432]{\n    padding-top: 58px;\n    padding-left: 85px;\n}\n.followers-field .name[data-v-740e7432]{\n    font-weight: 600;\n    font-size: 17px;\n}\n.followers-field .username[data-v-740e7432]{\n    color: grey;\n}\n.followers-body[data-v-740e7432]{\n    height: 150px;\n    padding: 30px;\n}\n.description[data-v-740e7432]{\n    max-width: 230px;\n    min-width: 230px;\n\n    text-align: center;\n}\n.button[data-v-740e7432]{\n    width: 200px;\n    margin: 13px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Partials/Profile/Followers.vue?vue&type=style&index=0&id=740e7432&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home/Partials/Profile/Followers.vue?vue&type=style&index=0&id=740e7432&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Followers.vue?vue&type=style&index=0&id=740e7432&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Partials/Profile/Followers.vue?vue&type=style&index=0&id=740e7432&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Partials/Profile/Followers.vue?vue&type=template&id=740e7432&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home/Partials/Profile/Followers.vue?vue&type=template&id=740e7432&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "content left" },
    _vm._l(this.$root.users, function(followers, index) {
      return _c(
        "div",
        {
          key: index,
          staticClass: "box side-box list left woofr-border white"
        },
        [
          _c("div", { staticClass: "followers-banner" }, [
            _c("img", {
              staticClass: "followers-img",
              attrs: { src: __webpack_require__(/*! ../../../../../img/default-picture.png */ "./resources/img/default-picture.png") }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "followers-field" }, [
              _c("div", { staticClass: "name" }, [
                _vm._v(_vm._s(followers.full_name))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "username" }, [
                _vm._v("@" + _vm._s(followers.user_name))
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "followers-body" },
            [
              _c("div", { staticClass: "description" }, [
                _vm._v(_vm._s(followers.description))
              ]),
              _vm._v(" "),
              followers.following
                ? _c(
                    "Button",
                    {
                      staticClass: "button",
                      attrs: { type: "primary", shape: "circle" },
                      on: {
                        click: function($event) {
                          _vm.unfollow(index)
                        }
                      }
                    },
                    [_vm._v("Following")]
                  )
                : _vm._e(),
              _vm._v(" "),
              !followers.following
                ? _c(
                    "Button",
                    {
                      staticClass: "button",
                      attrs: { shape: "circle" },
                      on: {
                        click: function($event) {
                          _vm.follow(index)
                        }
                      }
                    },
                    [_vm._v("Follow")]
                  )
                : _vm._e()
            ],
            1
          )
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/img/default-picture.png":
/*!*******************************************!*\
  !*** ./resources/img/default-picture.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/default-picture.png?ff72f8e7f281b0e2cf2a7e98f09ff65e";

/***/ }),

/***/ "./resources/js/components/Home/Partials/Profile/Followers.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Home/Partials/Profile/Followers.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Followers_vue_vue_type_template_id_740e7432_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Followers.vue?vue&type=template&id=740e7432&scoped=true& */ "./resources/js/components/Home/Partials/Profile/Followers.vue?vue&type=template&id=740e7432&scoped=true&");
/* harmony import */ var _Followers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Followers.vue?vue&type=script&lang=js& */ "./resources/js/components/Home/Partials/Profile/Followers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Followers_vue_vue_type_style_index_0_id_740e7432_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Followers.vue?vue&type=style&index=0&id=740e7432&scoped=true&lang=css& */ "./resources/js/components/Home/Partials/Profile/Followers.vue?vue&type=style&index=0&id=740e7432&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Followers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Followers_vue_vue_type_template_id_740e7432_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Followers_vue_vue_type_template_id_740e7432_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "740e7432",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home/Partials/Profile/Followers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Home/Partials/Profile/Followers.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Home/Partials/Profile/Followers.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Followers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Followers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Partials/Profile/Followers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Followers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Home/Partials/Profile/Followers.vue?vue&type=style&index=0&id=740e7432&scoped=true&lang=css&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/Home/Partials/Profile/Followers.vue?vue&type=style&index=0&id=740e7432&scoped=true&lang=css& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Followers_vue_vue_type_style_index_0_id_740e7432_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Followers.vue?vue&type=style&index=0&id=740e7432&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Partials/Profile/Followers.vue?vue&type=style&index=0&id=740e7432&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Followers_vue_vue_type_style_index_0_id_740e7432_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Followers_vue_vue_type_style_index_0_id_740e7432_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Followers_vue_vue_type_style_index_0_id_740e7432_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Followers_vue_vue_type_style_index_0_id_740e7432_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Followers_vue_vue_type_style_index_0_id_740e7432_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Home/Partials/Profile/Followers.vue?vue&type=template&id=740e7432&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Home/Partials/Profile/Followers.vue?vue&type=template&id=740e7432&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Followers_vue_vue_type_template_id_740e7432_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Followers.vue?vue&type=template&id=740e7432&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Partials/Profile/Followers.vue?vue&type=template&id=740e7432&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Followers_vue_vue_type_template_id_740e7432_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Followers_vue_vue_type_template_id_740e7432_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
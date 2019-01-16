(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Home.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home/Home.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modals_Messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modals/Messages */ "./resources/js/components/Home/Modals/Messages.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
    Messages: _Modals_Messages__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      modal: false,
      search: '',
      filteredUsers: []
    };
  },
  methods: {
    filterList: function filterList() {
      var vm = this;
      var listByUsername = this.UserList.filter(function (data) {
        return data.username.toLowerCase().indexOf(vm.search.toLowerCase()) >= 0;
      });
      var listByName = this.UserList.filter(function (data) {
        return data.username.toLowerCase().indexOf(vm.search.toLowerCase()) >= 0;
      });

      if (listByUsername == '') {
        this.filteredUsers = listByName;
      }

      this.filteredUsers = listByUsername;
    },
    logout: function logout() {
      Vue.auth.logout();
    },
    searchUser: function searchUser() {
      Vue.user.setUserList();
    }
  },
  mounted: function mounted() {
    Vue.auth.setUser();
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['UserData', 'UserList'])
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Modals/Messages.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home/Modals/Messages.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      Messages: [{
        id: 1,
        sender_id: 1,
        sender_name: 'Bea Amor',
        sender_username: 'beaamor0212',
        reciever_id: 21,
        message_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }, {
        id: 2,
        sender_id: 2,
        sender_name: 'Mary Nicole',
        sender_username: 'iamnikkime',
        reciever_id: 22,
        message_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }, {
        id: 3,
        sender_id: 3,
        sender_name: 'Rica Camiguing',
        sender_username: 'ricamiguing_',
        reciever_id: 23,
        message_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }, {
        id: 4,
        sender_id: 4,
        sender_name: 'Jan Raph',
        sender_username: 'janraphael11',
        reciever_id: 24,
        message_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }, {
        id: 5,
        sender_id: 5,
        sender_name: 'Tacs',
        sender_username: 'xtephaein',
        reciever_id: 25,
        message_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }, {
        id: 6,
        sender_id: 6,
        sender_name: 'Deysi',
        sender_username: 'aisybomi',
        reciever_id: 26,
        message_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }, {
        id: 7,
        sender_id: 7,
        sender_name: 'Lizzy',
        sender_username: 'heyitsmelizzy',
        reciever_id: 27,
        message_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }, {
        id: 8,
        sender_id: 8,
        sender_name: 'L i a n',
        sender_username: 'cstrlian',
        reciever_id: 28,
        message_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }],
      selectedUserDetails: {
        sender_id: '',
        sender_name: '',
        sender_username: '',
        sender_text: ''
      },
      Message: {
        id: '',
        to: '',
        text: ''
      },
      conversation: [{
        id: 1,
        type: 'received',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }, {
        id: 2,
        type: 'sent',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }, {
        id: 3,
        type: 'received',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }, {
        id: 4,
        type: 'received',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }, {
        id: 5,
        type: 'sent',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }, {
        id: 6,
        type: 'received',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }, {
        id: 7,
        type: 'sent',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }, {
        id: 8,
        type: 'received',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }, {
        id: 9,
        type: 'sent',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }]
    };
  },
  methods: {
    show: function show(data) {
      this.selectedUserDetails.sender_id = data.sender_id;
      this.selectedUserDetails.sender_name = data.sender_name;
      this.selectedUserDetails.sender_username = data.sender_username;
      this.selectedUserDetails.text = data.message_text;
    },
    send: function send() {},
    bubbles: function bubbles(type) {
      if (type == 'sent') {
        return 'right: -43%; background-color: #765d69; color: whitesmoke';
      } else {
        return 'color: black; background-color: rgba(240, 234, 234, 0.80);';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Home.vue?vue&type=style&index=0&id=4ec5f2d4&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home/Home.vue?vue&type=style&index=0&id=4ec5f2d4&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-4ec5f2d4]{\n}\n.logo[data-v-4ec5f2d4]{\n    margin-top: 11px;\n    /* left: 50%;\n    transform: translate(-50%,0%);\n    position: absolute; */\n    float: left;\n    width: 40px;\n    margin-right: 15px;\n}\n.navbar[data-v-4ec5f2d4]{\n    position: fixed;\n    width: 100vw;\n\n    background-color: #765d69;\n}\n.navbar-items[data-v-4ec5f2d4]{\n    min-width: 1200px;\n    max-width: 1200px;\n\n    left: 50%;\n    -webkit-transform: translate(-50%,0%);\n            transform: translate(-50%,0%);\n    position: absolute;\n}\n.menu-item[data-v-4ec5f2d4]{\n    font-size: 13px;\n    font-weight: 600;\n    padding: 0px 15px !important;\n}\n.nav-right[data-v-4ec5f2d4]{\n    float: right;\n}\n.search-bar[data-v-4ec5f2d4]{\n    width: 210px;\n    margin-right: 20px;\n}\n.user-picture[data-v-4ec5f2d4]{\n    width: 40px;\n    margin-top: 11px;\n    border: 2px solid rgba(58, 58, 58, .2);\n    border-radius: 50%;\n}\n.user-picture-dropdown[data-v-4ec5f2d4]{\n    float: right;\n    margin-right: 20px;\n}\n.body[data-v-4ec5f2d4]{\n    padding-top: 60px;\n\n    min-width: 1200px;\n    max-width: 1200px;\n\n    left: 50%;\n    -webkit-transform: translate(-50%,0%);\n            transform: translate(-50%,0%);\n    position: absolute;\n}\n.fullname[data-v-4ec5f2d4]{\n    font-weight: 700;\n    font-size: 18px;\n}\n.username[data-v-4ec5f2d4]{\n    color: #765d69;\n    font-size: 14px;\n}\n.item[data-v-4ec5f2d4]{\n    font-size: 14px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Modals/Messages.vue?vue&type=style&index=0&id=774581e0&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home/Modals/Messages.vue?vue&type=style&index=0&id=774581e0&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.content[data-v-774581e0]{\r\n    height: 75vh;\r\n    overflow: hidden;\n}\n.message-list[data-v-774581e0]{\r\n    width: 320px;\r\n    height: 100%;\r\n    float: left;\r\n    overflow: hidden;\n}\n.message-list-header[data-v-774581e0]{\r\n    padding: 15px;\n}\n.message-list-body[data-v-774581e0]{\r\n    height: 100%;\n}\n.message-body[data-v-774581e0]{\r\n    width: 579px;\r\n    height: 100%;\r\n    float: left;\n}\n.message-body-header[data-v-774581e0]{\r\n    text-align: center;\r\n    padding: 15px;\r\n    height: 61.89px;\n}\n.message-content[data-v-774581e0]{\r\n    height: calc(100% - 117px);\r\n    max-width: 575px;\r\n    overflow: hidden;\n}\n.message-textbox[data-v-774581e0]{\r\n    bottom: 0px;\r\n    padding: 8px;\r\n    box-sizing: border-box;\r\n    display: block;\n}\n.message-wrapper[data-v-774581e0]{\r\n    width: auto !important;\n}\n.message-bubbles[data-v-774581e0]{\r\n    max-width: 300px; \r\n    height: auto;\r\n    overflow-wrap: break-word;\r\n    margin: 10px;\r\n    padding: 10px;\r\n    border: 1px solid transparent;\r\n    border-radius: 8px;\r\n    font-size: 14px;\r\n    position: relative;\n}\n.in-message[data-v-774581e0]{\r\n    border: 3px solid yellow;\n}\n.out-message[data-v-774581e0]{\r\n    float: right;\r\n    border: 3px solid blue;\n}\n.message-box[data-v-774581e0]{\r\n    cursor: pointer;\r\n    padding: 15px;\n}\n.sender-img[data-v-774581e0]{\r\n    margin-right: 10px; \r\n    float: left\n}\n.message-info[data-v-774581e0]{\r\n    max-width: 270px; \r\n    max-height: 60px; \r\n    overflow: hidden\n}\n.name[data-v-774581e0]{\r\n    font-weight: 600\n}\n.username[data-v-774581e0]{\r\n    color: grey;\n}\n.message[data-v-774581e0]{\r\n    margin-top: 5px;\r\n    color: grey;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Home.vue?vue&type=style&index=0&id=4ec5f2d4&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home/Home.vue?vue&type=style&index=0&id=4ec5f2d4&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=4ec5f2d4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Home.vue?vue&type=style&index=0&id=4ec5f2d4&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Modals/Messages.vue?vue&type=style&index=0&id=774581e0&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home/Modals/Messages.vue?vue&type=style&index=0&id=774581e0&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Messages.vue?vue&type=style&index=0&id=774581e0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Modals/Messages.vue?vue&type=style&index=0&id=774581e0&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Home.vue?vue&type=template&id=4ec5f2d4&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home/Home.vue?vue&type=template&id=4ec5f2d4&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "i-menu",
        {
          staticClass: "navbar",
          attrs: {
            mode: "horizontal",
            theme: "dark",
            "active-name": this.$root.active_name
          }
        },
        [
          _c(
            "div",
            { staticClass: "navbar-items" },
            [
              _c("router-link", { attrs: { to: "/" } }, [
                _c("img", {
                  staticClass: "logo",
                  attrs: {
                    src: __webpack_require__(/*! ../../../img/woofr-logo.png */ "./resources/img/woofr-logo.png"),
                    alt: "Woofr"
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "menu-item",
                {
                  staticClass: "menu-item",
                  attrs: { name: "timeline", to: "/" }
                },
                [
                  _c("Icon", {
                    staticStyle: { margin: "0" },
                    attrs: { type: "md-home" }
                  }),
                  _vm._v("\n                Home\n            ")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "menu-item",
                {
                  staticClass: "menu-item",
                  attrs: { name: "notifications", to: "/notifications" }
                },
                [
                  _c("Icon", {
                    staticStyle: { margin: "0" },
                    attrs: { type: "md-notifications" }
                  }),
                  _vm._v("\n                Notifications\n            ")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "menu-item",
                { staticClass: "menu-item", attrs: { name: "messages" } },
                [
                  _c(
                    "button",
                    {
                      staticStyle: {
                        margin: "0",
                        "background-color": "transparent",
                        border: "0px solid transparent",
                        "font-weight": "600",
                        color: "#D6CFD2",
                        outline: "0px",
                        cursor: "pointer"
                      },
                      on: {
                        click: function($event) {
                          _vm.modal = true
                        }
                      }
                    },
                    [
                      _c("Icon", {
                        staticStyle: { margin: "0" },
                        attrs: { type: "md-chatboxes" }
                      }),
                      _vm._v("\n                    Messages\n                ")
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "Dropdown",
                {
                  staticClass: "user-picture-dropdown",
                  attrs: { placement: "bottom-end", trigger: "click" }
                },
                [
                  _c("a", { attrs: { href: "javascript:void(0)" } }, [
                    _c("img", {
                      staticClass: "user-picture",
                      attrs: {
                        src: __webpack_require__(/*! ../../../img/default-picture.png */ "./resources/img/default-picture.png"),
                        alt: "DP"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "DropdownMenu",
                    { attrs: { slot: "list" }, slot: "list" },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "/" + _vm.UserData.username } },
                        [
                          _c("DropdownItem", [
                            _c("p", { staticClass: "fullname" }, [
                              _vm._v(_vm._s(_vm.UserData.fullname))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "username" }, [
                              _vm._v("@" + _vm._s(_vm.UserData.username))
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("Divider", { staticClass: "idivider" }),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        { attrs: { to: "/" + _vm.UserData.username } },
                        [
                          _c(
                            "DropdownItem",
                            [
                              _c("Icon", {
                                staticStyle: {
                                  float: "left",
                                  "margin-right": "5px"
                                },
                                attrs: { type: "ios-contact", size: "16" }
                              }),
                              _vm._v(" "),
                              _c("p", { staticClass: "item" }, [
                                _vm._v("Profile")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: "/" + _vm.UserData.username + "/settings"
                          }
                        },
                        [
                          _c(
                            "DropdownItem",
                            [
                              _c("Icon", {
                                staticStyle: {
                                  float: "left",
                                  "margin-right": "5px"
                                },
                                attrs: { type: "ios-settings", size: "16" }
                              }),
                              _vm._v(" "),
                              _c("p", { staticClass: "item" }, [
                                _vm._v("Settings")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("Divider", { staticStyle: { margin: "5px 0px" } }),
                      _vm._v(" "),
                      _c("DropdownItem", [
                        _c(
                          "p",
                          { staticClass: "item", on: { click: _vm.logout } },
                          [_vm._v("Logout")]
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "nav-right" },
                [
                  _c(
                    "AutoComplete",
                    {
                      staticClass: "search-bar",
                      attrs: {
                        clearable: "",
                        icon: "ios-search",
                        placeholder: "Search Woofr"
                      },
                      on: {
                        "on-search": function($event) {
                          _vm.filterList()
                        },
                        "on-change": _vm.searchUser
                      },
                      model: {
                        value: _vm.search,
                        callback: function($$v) {
                          _vm.search = $$v
                        },
                        expression: "search"
                      }
                    },
                    _vm._l(_vm.filteredUsers, function(user) {
                      return _c(
                        "Option",
                        { key: user.id, attrs: { value: user.fullname } },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: "/" + user.username } },
                            [
                              _c("Avatar", {
                                staticStyle: { "margin-right": "5px" },
                                attrs: { icon: "ios-person", size: "small" }
                              }),
                              _vm._v(
                                "\n                                " +
                                  _vm._s(user.fullname) +
                                  "\n                            "
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("span", [_vm._v("@" + _vm._s(user.username))])
                        ],
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "body" }, [_c("router-view")], 1),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { title: "Direct Messages", "footer-hide": "", width: "900" },
          model: {
            value: _vm.modal,
            callback: function($$v) {
              _vm.modal = $$v
            },
            expression: "modal"
          }
        },
        [_c("Messages")],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Modals/Messages.vue?vue&type=template&id=774581e0&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home/Modals/Messages.vue?vue&type=template&id=774581e0&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "content" },
    [
      _c(
        "div",
        { staticClass: "message-list" },
        [
          _c(
            "div",
            { staticClass: "message-list-header" },
            [
              _c(
                "h3",
                {
                  staticStyle: {
                    float: "left",
                    padding: "4px",
                    "margin-right": "106px"
                  }
                },
                [_vm._v("Messages")]
              ),
              _vm._v(" "),
              _c("Button", { attrs: { color: "primary", shape: "circle" } }, [
                _vm._v("New Message")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("Divider", { staticStyle: { margin: "0px" } }),
          _vm._v(" "),
          _c(
            "div",
            { ref: "listbody", staticClass: "message-list-body" },
            [
              _c(
                "Scroll",
                { attrs: { height: 660 } },
                _vm._l(_vm.Messages, function(message, index) {
                  return _c(
                    "div",
                    {
                      key: index,
                      staticClass: "message-box",
                      attrs: { "dis-hover": "", bordered: false },
                      on: {
                        click: function($event) {
                          _vm.show(message)
                        }
                      }
                    },
                    [
                      _c("Avatar", {
                        staticClass: "sender-img",
                        attrs: { icon: "ios-person", size: "large" }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "message-info" }, [
                        _c("span", { staticClass: "name" }, [
                          _vm._v(_vm._s(message.sender_name))
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "username" }, [
                          _vm._v("@" + _vm._s(message.sender_username))
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "message" }, [
                          _vm._v(
                            "\n                        " +
                              _vm._s(message.message_text) +
                              "\n                    "
                          )
                        ])
                      ])
                    ],
                    1
                  )
                }),
                0
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("Divider", {
        staticStyle: { float: "left", height: "100%", margin: "0px" },
        attrs: { type: "vertical" }
      }),
      _vm._v(" "),
      this.selectedUserDetails.sender_id != ""
        ? _c(
            "div",
            { staticClass: "message-body" },
            [
              _c("div", { staticClass: "message-body-header" }, [
                _c("h3", [
                  _vm._v(_vm._s(this.selectedUserDetails.sender_name))
                ]),
                _vm._v(" "),
                _c("span", [
                  _vm._v("@" + _vm._s(this.selectedUserDetails.sender_username))
                ])
              ]),
              _vm._v(" "),
              _c("Divider", { staticStyle: { margin: "0px" } }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "message-content " },
                [
                  _c(
                    "Scroll",
                    {
                      attrs: {
                        "on-reach-bottom": _vm.handleReachBottom,
                        height: 610
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "message-wrapper" },
                        _vm._l(_vm.conversation, function(msg) {
                          return _c(
                            "div",
                            {
                              key: msg.id,
                              staticClass: "message-bubbles",
                              style: _vm.bubbles(msg.type)
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(msg.message) +
                                  "\n                    "
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("Divider", { staticStyle: { margin: "0px", bottom: "0px" } }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "message-textbox" },
                [
                  _c("Input", {
                    staticStyle: { width: "100%" },
                    attrs: {
                      placeholder: "Type a message...",
                      size: "large",
                      search: "",
                      "enter-button": "Send"
                    },
                    on: {
                      "on-enter": function($event) {
                        _vm.send(this.selectedUserDetails.sender_id)
                      },
                      "on-search": function($event) {
                        _vm.send()
                      }
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
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

/***/ "./resources/img/woofr-logo.png":
/*!**************************************!*\
  !*** ./resources/img/woofr-logo.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/woofr-logo.png?bc22f0ef5e808f61fc3c39b46fca6c1f";

/***/ }),

/***/ "./resources/js/components/Home/Home.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Home/Home.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_4ec5f2d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=4ec5f2d4&scoped=true& */ "./resources/js/components/Home/Home.vue?vue&type=template&id=4ec5f2d4&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/Home/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_4ec5f2d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=4ec5f2d4&scoped=true&lang=css& */ "./resources/js/components/Home/Home.vue?vue&type=style&index=0&id=4ec5f2d4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_4ec5f2d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_4ec5f2d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4ec5f2d4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Home/Home.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Home/Home.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Home/Home.vue?vue&type=style&index=0&id=4ec5f2d4&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Home/Home.vue?vue&type=style&index=0&id=4ec5f2d4&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_4ec5f2d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=4ec5f2d4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Home.vue?vue&type=style&index=0&id=4ec5f2d4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_4ec5f2d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_4ec5f2d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_4ec5f2d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_4ec5f2d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_4ec5f2d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Home/Home.vue?vue&type=template&id=4ec5f2d4&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Home/Home.vue?vue&type=template&id=4ec5f2d4&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_4ec5f2d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=4ec5f2d4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Home.vue?vue&type=template&id=4ec5f2d4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_4ec5f2d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_4ec5f2d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Home/Modals/Messages.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Home/Modals/Messages.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Messages_vue_vue_type_template_id_774581e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Messages.vue?vue&type=template&id=774581e0&scoped=true& */ "./resources/js/components/Home/Modals/Messages.vue?vue&type=template&id=774581e0&scoped=true&");
/* harmony import */ var _Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Messages.vue?vue&type=script&lang=js& */ "./resources/js/components/Home/Modals/Messages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Messages_vue_vue_type_style_index_0_id_774581e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Messages.vue?vue&type=style&index=0&id=774581e0&scoped=true&lang=css& */ "./resources/js/components/Home/Modals/Messages.vue?vue&type=style&index=0&id=774581e0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Messages_vue_vue_type_template_id_774581e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Messages_vue_vue_type_template_id_774581e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "774581e0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home/Modals/Messages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Home/Modals/Messages.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Home/Modals/Messages.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Messages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Modals/Messages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Home/Modals/Messages.vue?vue&type=style&index=0&id=774581e0&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/Home/Modals/Messages.vue?vue&type=style&index=0&id=774581e0&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_774581e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Messages.vue?vue&type=style&index=0&id=774581e0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Modals/Messages.vue?vue&type=style&index=0&id=774581e0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_774581e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_774581e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_774581e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_774581e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_774581e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Home/Modals/Messages.vue?vue&type=template&id=774581e0&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Home/Modals/Messages.vue?vue&type=template&id=774581e0&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_774581e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Messages.vue?vue&type=template&id=774581e0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home/Modals/Messages.vue?vue&type=template&id=774581e0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_774581e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_774581e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
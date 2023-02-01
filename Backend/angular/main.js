(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /root/ChatUI/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _chatlist_chatlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatlist/chatlist.component */ "VyOk");
/* harmony import */ var _chatscreen_chatscreen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chatscreen/chatscreen.component */ "VVaz");
/* harmony import */ var _profileview_profileview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profileview/profileview.component */ "ow0Y");





function AppComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.isopen =  false && (false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.title = 'WoobChat';
        this.isopen = false;
        this.issideopen = false;
    }
    open() {
        this.isopen = !this.isopen;
    }
    sideopen(event) {
        console.log("emitted app");
        this.issideopen = !this.issideopen;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 5, consts: [[1, "container"], [1, "burger", 3, "ngClass", "click"], [1, "bar"], [1, "burger", "dot", 3, "ngClass", "click"], [1, "bar", "d"], ["class", "backdrop", 3, "click", 4, "ngIf"], [3, "ngClass"], [3, "ngClass", "closeemit"], [1, "backdrop", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_1_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_5_listener() { return ctx.sideopen(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_9_Template, 1, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-chatlist", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-chatscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-profileview", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeemit", function AppComponent_Template_app_profileview_closeemit_12_listener($event) { return ctx.sideopen($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isopen ? "close" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isopen ? "close" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isopen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isopen ? "open" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.issideopen ? "open" : "none");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _chatlist_chatlist_component__WEBPACK_IMPORTED_MODULE_2__["ChatlistComponent"], _chatscreen_chatscreen_component__WEBPACK_IMPORTED_MODULE_3__["ChatscreenComponent"], _profileview_profileview_component__WEBPACK_IMPORTED_MODULE_4__["ProfileviewComponent"]], styles: [".container[_ngcontent-%COMP%]{\n    width:100%;\n    display:grid;\n    grid-template-columns:22% 56% 22%;\n}\n\n.burger[_ngcontent-%COMP%]{\n    display:none;\n}\n\n@media screen and (max-width:415px){\n    .container[_ngcontent-%COMP%]{\n        display: block;\n    }\n    app-chatlist[_ngcontent-%COMP%]{\n        position: fixed;\n        width:60%;\n        z-index: 10;\n        transform: translateX(-60vw);\n        transition: all 0.5s ease;\n    }\n\n    app-profileview[_ngcontent-%COMP%]{\n        position: fixed;\n        width:100%;\n        top: 0;\n        z-index: 10;\n        transform: translateX(100vw);\n        transition: all 0.5s ease;\n    }\n\n    .open[_ngcontent-%COMP%]{\n        transform:translateX(0vw)\n    }\n    .close[_ngcontent-%COMP%]{\n        display:none !important;\n    }\n\n    .burger[_ngcontent-%COMP%]{\n        display: block;\n        margin: 6vw 1vw;\n        position: fixed;\n        z-index: 2;\n        padding: 7px;\n    }\n\n    .dot[_ngcontent-%COMP%]{\n        right: 0;\n    }\n\n    .d[_ngcontent-%COMP%]{\n        height: 3px !important;\n        width: 3px !important;\n    }\n\n    .backdrop[_ngcontent-%COMP%]{\n        position: fixed;\n        content: '';\n        height:100vh;\n        width: 100vw;\n        -webkit-backdrop-filter:blur(3px);\n                backdrop-filter:blur(3px);\n        z-index: 2;\n    }\n\n    .bar[_ngcontent-%COMP%]{\n    content: '';\n    width: 20px;\n    height: 2px;\n    margin-bottom: 5px;\n    background: rgb(170, 170, 170);\n    }\n}\n\n@media screen and (max-width:1024px){\n    .container[_ngcontent-%COMP%]{\n        display: block;\n    }\n    app-chatlist[_ngcontent-%COMP%]{\n        position: fixed;\n        width:60%;\n        z-index: 10;\n        transform: translateX(-60vw);\n        transition: all 0.5s ease;\n    }\n\n    app-profileview[_ngcontent-%COMP%]{\n        position: fixed;\n        width:100%;\n        top: 0;\n        z-index: 10;\n        transform: translateX(100vw);\n        transition: all 0.5s ease;\n    }\n\n    .open[_ngcontent-%COMP%]{\n        transform:translateX(0vw)\n    }\n    .close[_ngcontent-%COMP%]{\n        display:none !important;\n    }\n\n    .burger[_ngcontent-%COMP%]{\n        display: block;\n        margin: 5vw 1.5vw;\n        position: fixed;\n        z-index: 2;\n        padding: 7px;\n    }\n\n    .dot[_ngcontent-%COMP%]{\n        right: 0;\n    }\n\n    .d[_ngcontent-%COMP%]{\n        height: 1vw !important;\n        width: 1vw !important;\n        border-radius: 10vw;\n    }\n\n    .backdrop[_ngcontent-%COMP%]{\n        position: fixed;\n        content: '';\n        height:100vh;\n        width: 100vw;\n        -webkit-backdrop-filter:blur(3px);\n                backdrop-filter:blur(3px);\n        z-index: 2;\n    }\n\n    .bar[_ngcontent-%COMP%]{\n    content: '';\n    width: 4vw;\n    height: 0.4vw;\n    margin-bottom: 0.9vw;\n    background: rgb(170, 170, 170);\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUdBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsU0FBUztRQUNULFdBQVc7UUFDWCw0QkFBNEI7UUFDNUIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7UUFDVixNQUFNO1FBQ04sV0FBVztRQUNYLDRCQUE0QjtRQUM1Qix5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSTtJQUNKO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsZUFBZTtRQUNmLGVBQWU7UUFDZixVQUFVO1FBQ1YsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFFBQVE7SUFDWjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsV0FBVztRQUNYLFlBQVk7UUFDWixZQUFZO1FBQ1osaUNBQXlCO2dCQUF6Qix5QkFBeUI7UUFDekIsVUFBVTtJQUNkOztJQUVBO0lBQ0EsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsU0FBUztRQUNULFdBQVc7UUFDWCw0QkFBNEI7UUFDNUIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7UUFDVixNQUFNO1FBQ04sV0FBVztRQUNYLDRCQUE0QjtRQUM1Qix5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSTtJQUNKO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixVQUFVO1FBQ1YsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFFBQVE7SUFDWjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixxQkFBcUI7UUFDckIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFdBQVc7UUFDWCxZQUFZO1FBQ1osWUFBWTtRQUNaLGlDQUF5QjtnQkFBekIseUJBQXlCO1FBQ3pCLFVBQVU7SUFDZDs7SUFFQTtJQUNBLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQiw4QkFBOEI7SUFDOUI7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjIyJSA1NiUgMjIlO1xufVxuXG4uYnVyZ2Vye1xuICAgIGRpc3BsYXk6bm9uZTtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxNXB4KXtcbiAgICAuY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgYXBwLWNoYXRsaXN0e1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHdpZHRoOjYwJTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNjB2dyk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gICAgfVxuXG4gICAgYXBwLXByb2ZpbGV2aWV3e1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDB2dyk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gICAgfVxuXG4gICAgLm9wZW57XG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDB2dylcbiAgICB9XG4gICAgLmNsb3Nle1xuICAgICAgICBkaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYnVyZ2Vye1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiA2dncgMXZ3O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIHBhZGRpbmc6IDdweDtcbiAgICB9XG5cbiAgICAuZG90e1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG5cbiAgICAuZHtcbiAgICAgICAgaGVpZ2h0OiAzcHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDNweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5iYWNrZHJvcHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgaGVpZ2h0OjEwMHZoO1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjpibHVyKDNweCk7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuXG4gICAgLmJhcntcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDE3MCwgMTcwLCAxNzApO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpe1xuICAgIC5jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICBhcHAtY2hhdGxpc3R7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgd2lkdGg6NjAlO1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02MHZ3KTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICB9XG5cbiAgICBhcHAtcHJvZmlsZXZpZXd7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHZ3KTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICB9XG5cbiAgICAub3BlbntcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMHZ3KVxuICAgIH1cbiAgICAuY2xvc2V7XG4gICAgICAgIGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5idXJnZXJ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDV2dyAxLjV2dztcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgfVxuXG4gICAgLmRvdHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgLmR7XG4gICAgICAgIGhlaWdodDogMXZ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAxdncgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTB2dztcbiAgICB9XG5cbiAgICAuYmFja2Ryb3B7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGhlaWdodDoxMDB2aDtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6Ymx1cigzcHgpO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgIH1cblxuICAgIC5iYXJ7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDR2dztcbiAgICBoZWlnaHQ6IDAuNHZ3O1xuICAgIG1hcmdpbi1ib3R0b206IDAuOXZ3O1xuICAgIGJhY2tncm91bmQ6IHJnYigxNzAsIDE3MCwgMTcwKTtcbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "VVaz":
/*!****************************************************!*\
  !*** ./src/app/chatscreen/chatscreen.component.ts ***!
  \****************************************************/
/*! exports provided: ChatscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatscreenComponent", function() { return ChatscreenComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ChatscreenComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChatscreenComponent_div_14_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", msg_r3.message, " ");
} }
function ChatscreenComponent_div_14_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r3.message);
} }
function ChatscreenComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatscreenComponent_div_14_div_1_div_1_Template, 3, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatscreenComponent_div_14_div_1_div_2_Template, 3, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", msg_r3.from == "reciever");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", msg_r3.from == "sender");
} }
function ChatscreenComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatscreenComponent_div_14_div_1_Template, 3, 2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.data);
} }
class ChatscreenComponent {
    constructor(http) {
        this.http = http;
        this.data = [];
        this.isloading = true;
    }
    ngOnInit() {
        this.http.get("http://localhost:3000/chat").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
            let mod = [];
            for (let a of data) {
                // console.log(a)
                mod.push(a);
            }
            return mod;
        })).subscribe(chat => {
            if (chat) {
                this.isloading = false;
                this.data.push(...chat);
                console.log(this.data[6].message + " :)");
            }
        });
    }
}
ChatscreenComponent.ɵfac = function ChatscreenComponent_Factory(t) { return new (t || ChatscreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ChatscreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatscreenComponent, selectors: [["app-chatscreen"]], decls: 29, vars: 2, consts: [[1, "chat-container"], [1, "head-container"], [1, "head-name"], [1, "pfp"], ["src", "../assets/Person=Chris, Skin Tone=White, Posture=1 Happy.png", "alt", "dante"], [1, "name"], [1, "circle"], [1, "icons-container"], ["src", "../assets/search-interface-symbol.svg", "alt", ""], ["src", "../assets/heart.svg", "alt", ""], ["src", "../assets/alarm.svg", "alt", ""], [1, "main-chat"], ["class", "loadin-container", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "reply"], [1, "reply-container"], [1, "mic-icon"], ["src", "../assets/mic.svg", "alt", ""], ["type", "text", "name", "message", "id", "message", "placeholder", "Write something", 1, "message"], [1, "attach-icon"], ["src", "../assets/attach-paperclip-symbol.svg", "alt", ""], [1, "camera-icon"], ["src", "../assets/photo-camera.svg", "alt", ""], [1, "emoji"], ["src", "../assets/smile.svg", "alt", ""], [2, "width", "0px"], [1, "send-btn"], ["src", "../assets/send-button.svg", "alt", ""], [1, "loadin-container"], [1, "sk-folding-cube"], [1, "sk-cube1", "sk-cube"], [1, "sk-cube2", "sk-cube"], [1, "sk-cube4", "sk-cube"], [1, "sk-cube3", "sk-cube"], [1, "container"], ["class", "main-container", 4, "ngFor", "ngForOf"], [1, "main-container"], ["class", "reciever", 4, "ngIf"], ["class", "sender", 4, "ngIf"], [1, "reciever"], [1, "reciever-msg"], [1, "sender"], [1, "reciever-msg", "send"]], template: function ChatscreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Dante fingston ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ChatscreenComponent_div_13_Template, 6, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ChatscreenComponent_div_14_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isloading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isloading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".chat-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 14% 64% 20%;\n  height: 100vh;\n}\n\n.head-name[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  grid-template-columns: 10% 70% 20%;\n}\n\n.head-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 1.5vw;\n  align-items: center;\n  border-bottom: 1px solid rgb(211, 211, 211);\n}\n\n.pfp[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  background: rgb(243, 243, 243);\n  border-radius: 3vw;\n}\n\n.pfp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  width: 4.5vw\n}\n\n.name[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 2vw;\n  font-weight: 400;\n  align-items: center;\n}\n\n.circle[_ngcontent-%COMP%] {\n  content: \"\";\n  width: 0.9vw;\n  height: 0.9vw;\n  background: rgb(3, 218, 3);\n  border-radius: 5vw;\n  margin-left: 0.6vw;\n}\n\n.icons-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.icons-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: invert(40%);\n  margin-right: 2.5vw;\n  width: 1.4vw\n}\n\n.main-chat[_ngcontent-%COMP%] {\n  display: block;\n  overflow-y: scroll;\n  height: 100%;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  margin: 0 1.5vw;\n  margin-top: 1vw;\n}\n\n.reciever-msg[_ngcontent-%COMP%] {\n  padding: 0.7vw;\n  float: right;\n  font-size: 0.8vw;\n  max-width: 40%;\n  color: white;\n  background: rgb(153, 0, 255);\n  border-radius: 1vw 1vw 0px 1vw;\n  margin-bottom: 0.7vw;\n}\n\n.reciever[_ngcontent-%COMP%] {\n  width: 100%;\n  float: right;\n}\n\n.sender[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n}\n\n.send[_ngcontent-%COMP%]{\n  float: left;\n  color: rgb(20, 20, 20);\n  background: rgb(243, 243, 243);\n  border-radius: 1vw 1vw 1vw 0vw;\n}\n\n.reply-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 1vw;\n}\n\n.reply[_ngcontent-%COMP%] {\n  border-top: 1px solid #e8e8e8;\n}\n\n.mic-icon[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.7vw;\n  padding-left: 0.7vw;\n  background: rgb(243, 243, 243);\n  border-radius: 5vw 0vw 0vw 5vw;\n}\n\n.mic-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0.1vw;\n  filter: invert(30%);\n  width: 1.3vw;\n}\n\n.message[_ngcontent-%COMP%] {\n  background: rgb(243, 243, 243);\n  font-family: 'Nunito', sans-serif;\n  border: none;\n  outline: none;\n  width: 61%;\n  padding-left: 0.3vw;\n}\n\n.attach-icon[_ngcontent-%COMP%], .camera-icon[_ngcontent-%COMP%], .emoji[_ngcontent-%COMP%]{\n  display: flex;\n  padding: 0.7vw;\n  background: rgb(243, 243, 243);\n}\n\n.attach-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .camera-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .emoji[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0.1vw;\n  filter: invert(30%);\n  width: 1.3vw;\n}\n\n.emoji[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.7vw;\n  background: rgb(243, 243, 243);\n  padding-right: 3.5vw;\n  border-radius: 0 1vw 1vw 0;\n}\n\n.send-btn[_ngcontent-%COMP%]{\n    padding: 0.4vw;\n    position: relative;\n    display: flex;\n    right: 2.8vw;\n    width: 2.1vw;\n    height: 2.1vw;\n    text-align: center;\n    align-items: center;\n    background: #9900ff;\n    border-radius: 5vw;\n    transition: 0.5s all;\n}\n\n.send-btn[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    background: #7f00d3;\n}\n\n.send-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    cursor: pointer;\n    width: 1.3vw;\n    padding: 0.1vw;\n    filter: invert(1);\n    padding-left: 0.5vw;\n}\n\n@media only screen and (max-width:415px){\n\n  .chat-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-rows: 10% 81% 9%;\n    height: 100vh;\n  }\n\n  .head-container[_ngcontent-%COMP%]{\n    margin: 0 13vw;\n  }\n\n  .pfp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 10vw;\n  }\n\n  .pfp[_ngcontent-%COMP%]{\n    border-radius: 6vw;\n  }\n\n  .name[_ngcontent-%COMP%]{\n    font-size:5vw\n  }\n\n  .head-name[_ngcontent-%COMP%]{\n    grid-template-columns: 20% 57% 22%;\n  }\n\n  .circle[_ngcontent-%COMP%] {\n    width: 2vw;\n    height: 2vw;\n  }\n\n  .icons-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-right: 2.5vw;\n    width: 2.8vw\n  }\n\n  .main-container[_ngcontent-%COMP%] {\n    margin: 0 4vw;\n    margin-top: 4vw;\n  }\n\n  .reciever-msg[_ngcontent-%COMP%] {\n    padding: 1.3vw;\n    float: right;\n    font-size: 3.6vw;\n    max-width: 55%;\n    margin-bottom: 3vw;\n  }\n\n  .send[_ngcontent-%COMP%]{\n    float: left;\n    color: rgb(20, 20, 20);\n    background: rgb(243, 243, 243);\n    border-radius: 1vw 1vw 1vw 0vw;\n  }\n  .reply-container[_ngcontent-%COMP%] {\n    justify-content:unset;\n    margin:0 6vw;\n    margin-top: 2vw;\n  }\n\n  .mic-icon[_ngcontent-%COMP%], .attach-icon[_ngcontent-%COMP%], .camera-icon[_ngcontent-%COMP%], .emoji[_ngcontent-%COMP%]{\n    padding:2.5vw\n  }\n\n  .emoji[_ngcontent-%COMP%]{\n    padding-right: 6vw;\n  }\n\n  .mic-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .attach-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .camera-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .emoji[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 6vw;\n  }\n\n  .message[_ngcontent-%COMP%] {\n    width:35%\n  }\n  .send-btn[_ngcontent-%COMP%]{\n    width: 8vw;\n    height: 8vw;\n    padding: 2vw;\n    right: 2.8vw;\n    border-radius: 8vw;\n  }\n\n  .send-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 4vw;\n    padding: 1vw;\n    padding-left: 2vw;\n  }\n\n}\n\n@media only screen and (max-width:1024px){\n\n  .chat-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-rows: 10% 81% 9%;\n    height: 100vh;\n  }\n\n  .head-container[_ngcontent-%COMP%]{\n    margin: 0 13vw;\n  }\n\n  .pfp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 10vw;\n  }\n\n  .pfp[_ngcontent-%COMP%]{\n    border-radius: 6vw;\n  }\n\n  .name[_ngcontent-%COMP%]{\n    font-size:5vw\n  }\n\n  .head-name[_ngcontent-%COMP%]{\n    grid-template-columns: 20% 57% 22%;\n  }\n\n  .circle[_ngcontent-%COMP%] {\n    width: 2vw;\n    height: 2vw;\n  }\n\n  .icons-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-right: 2.5vw;\n    width: 2.8vw\n  }\n\n  .main-container[_ngcontent-%COMP%] {\n    margin: 0 4vw;\n    margin-top: 4vw;\n  }\n\n  .reciever-msg[_ngcontent-%COMP%] {\n    padding: 1.3vw;\n    float: right;\n    font-size: 3.6vw;\n    max-width: 55%;\n    margin-bottom: 3vw;\n    border-radius: 2vw 2vw 0vw 2vw;\n  }\n\n  .send[_ngcontent-%COMP%]{\n    float: left;\n    color: rgb(20, 20, 20);\n    background: rgb(243, 243, 243);\n    border-radius: 2vw 2vw 2vw 0vw;\n  }\n  .reply-container[_ngcontent-%COMP%] {\n    justify-content:unset;\n    margin:0 6vw;\n    margin-top: 2vw;\n  }\n\n  .mic-icon[_ngcontent-%COMP%], .attach-icon[_ngcontent-%COMP%], .camera-icon[_ngcontent-%COMP%], .emoji[_ngcontent-%COMP%]{\n    padding:2vw\n  }\n\n  .emoji[_ngcontent-%COMP%]{\n    padding-right: 8vw;\n  }\n\n  .mic-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .attach-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .camera-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .emoji[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 4vw;\n  }\n\n  .message[_ngcontent-%COMP%] {\n    width:60%\n  }\n  .send-btn[_ngcontent-%COMP%]{\n    width: 6vw;\n    height: 6vw;\n    padding: 1vw;\n    right: 6vw;\n    border-radius: 8vw;\n  }\n\n  .send-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 4vw;\n    padding: 1vw;\n    padding-left: 1.5vw;\n  }\n\n}\n\n\n\n.loadin-container[_ngcontent-%COMP%]{\n  height:80%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.sk-folding-cube[_ngcontent-%COMP%] {\n  margin: 20px auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n  transform: rotateZ(45deg);\n}\n\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  height: 50%;\n  position: relative;\n  transform: scale(1.1); \n}\n\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%]:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #7f00d3;\n  animation: sk-foldCubeAngle 2.4s infinite linear both;\n  transform-origin: 100% 100%;\n}\n\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotateZ(90deg);\n}\n\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube3[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotateZ(180deg);\n}\n\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube4[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotateZ(270deg);\n}\n\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%]:before {\n  animation-delay: 0.3s;\n}\n\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube3[_ngcontent-%COMP%]:before {\n  animation-delay: 0.6s; \n}\n\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube4[_ngcontent-%COMP%]:before {\n  animation-delay: 0.9s;\n}\n\n@keyframes sk-foldCubeAngle {\n  0%, 10% {\n    transform: perspective(140px) rotateX(-180deg);\n    opacity: 0; \n  } 25%, 75% {\n    transform: perspective(140px) rotateX(0deg);\n    opacity: 1; \n  } 90%, 100% {\n    transform: perspective(140px) rotateY(180deg);\n    opacity: 0; \n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRzY3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QixvQkFBb0I7QUFDdEI7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUdBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFD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WTtJQUNaLG1CQUFtQjtFQUNyQjs7QUFFRjs7QUFZQSwwQ0FBMEM7O0FBQzFDO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBRVYseUJBQXlCO0FBQ25DOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBR1YscUJBQXFCO0FBQy9COztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBRWpCLHFEQUFxRDtFQUdyRCwyQkFBMkI7QUFDckM7O0FBQ0E7RUFFVSxvQ0FBb0M7QUFDOUM7O0FBQ0E7RUFFVSxxQ0FBcUM7QUFDL0M7O0FBQ0E7RUFFVSxxQ0FBcUM7QUFDL0M7O0FBQ0E7RUFFVSxxQkFBcUI7QUFDL0I7O0FBQ0E7RUFFVSxxQkFBcUI7QUFDL0I7O0FBQ0E7RUFFVSxxQkFBcUI7QUFDL0I7O0FBaUJBO0VBQ0U7SUFFVSw4Q0FBOEM7SUFDdEQsVUFBVTtFQUNaLEVBQUU7SUFFUSwyQ0FBMkM7SUFDbkQsVUFBVTtFQUNaLEVBQUU7SUFFUSw2Q0FBNkM7SUFDckQsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoiY2hhdHNjcmVlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNCUgNjQlIDIwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmhlYWQtbmFtZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSA3MCUgMjAlO1xufVxuXG4uaGVhZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgMS41dnc7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjExLCAyMTEsIDIxMSk7XG59XG5cbi5wZnAge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjQzLCAyNDMsIDI0Myk7XG4gIGJvcmRlci1yYWRpdXM6IDN2dztcbn1cblxuLnBmcCBpbWd7XG4gIHdpZHRoOiA0LjV2d1xufVxuXG4ubmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBmb250LXdlaWdodDogNDAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2lyY2xlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDAuOXZ3O1xuICBoZWlnaHQ6IDAuOXZ3O1xuICBiYWNrZ3JvdW5kOiByZ2IoMywgMjE4LCAzKTtcbiAgYm9yZGVyLXJhZGl1czogNXZ3O1xuICBtYXJnaW4tbGVmdDogMC42dnc7XG59XG5cbi5pY29ucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaWNvbnMtY29udGFpbmVyIGltZyB7XG4gIGZpbHRlcjogaW52ZXJ0KDQwJSk7XG4gIG1hcmdpbi1yaWdodDogMi41dnc7XG4gIHdpZHRoOiAxLjR2d1xufVxuXG4ubWFpbi1jaGF0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCAxLjV2dztcbiAgbWFyZ2luLXRvcDogMXZ3O1xufVxuXG4ucmVjaWV2ZXItbXNnIHtcbiAgcGFkZGluZzogMC43dnc7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAwLjh2dztcbiAgbWF4LXdpZHRoOiA0MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogcmdiKDE1MywgMCwgMjU1KTtcbiAgYm9yZGVyLXJhZGl1czogMXZ3IDF2dyAwcHggMXZ3O1xuICBtYXJnaW4tYm90dG9tOiAwLjd2dztcbn1cblxuXG4ucmVjaWV2ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5cbi5zZW5kZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5zZW5ke1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IHJnYigyMCwgMjAsIDIwKTtcbiAgYmFja2dyb3VuZDogcmdiKDI0MywgMjQzLCAyNDMpO1xuICBib3JkZXItcmFkaXVzOiAxdncgMXZ3IDF2dyAwdnc7XG59XG5cbi5yZXBseS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMXZ3O1xufVxuXG4ucmVwbHkge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcbn1cblxuLm1pYy1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMC43dnc7XG4gIHBhZGRpbmctbGVmdDogMC43dnc7XG4gIGJhY2tncm91bmQ6IHJnYigyNDMsIDI0MywgMjQzKTtcbiAgYm9yZGVyLXJhZGl1czogNXZ3IDB2dyAwdncgNXZ3O1xufVxuXG4ubWljLWljb24gaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwLjF2dztcbiAgZmlsdGVyOiBpbnZlcnQoMzAlKTtcbiAgd2lkdGg6IDEuM3Z3O1xufVxuXG4ubWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6IHJnYigyNDMsIDI0MywgMjQzKTtcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiA2MSU7XG4gIHBhZGRpbmctbGVmdDogMC4zdnc7XG59XG5cbi5hdHRhY2gtaWNvbiwuY2FtZXJhLWljb24sLmVtb2ppe1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwLjd2dztcbiAgYmFja2dyb3VuZDogcmdiKDI0MywgMjQzLCAyNDMpO1xufVxuLmF0dGFjaC1pY29uIGltZywuY2FtZXJhLWljb24gaW1nLC5lbW9qaSBpbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAuMXZ3O1xuICBmaWx0ZXI6IGludmVydCgzMCUpO1xuICB3aWR0aDogMS4zdnc7XG59XG5cblxuLmVtb2ppIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMC43dnc7XG4gIGJhY2tncm91bmQ6IHJnYigyNDMsIDI0MywgMjQzKTtcbiAgcGFkZGluZy1yaWdodDogMy41dnc7XG4gIGJvcmRlci1yYWRpdXM6IDAgMXZ3IDF2dyAwO1xufVxuXG4uc2VuZC1idG57XG4gICAgcGFkZGluZzogMC40dnc7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcmlnaHQ6IDIuOHZ3O1xuICAgIHdpZHRoOiAyLjF2dztcbiAgICBoZWlnaHQ6IDIuMXZ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICM5OTAwZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXZ3O1xuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xufVxuXG4uc2VuZC1idG46aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6ICM3ZjAwZDM7XG59XG5cblxuLnNlbmQtYnRuIGltZ3tcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEuM3Z3O1xuICAgIHBhZGRpbmc6IDAuMXZ3O1xuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xuICAgIHBhZGRpbmctbGVmdDogMC41dnc7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxNXB4KXtcblxuICAuY2hhdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgODElIDklO1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cblxuICAuaGVhZC1jb250YWluZXJ7XG4gICAgbWFyZ2luOiAwIDEzdnc7XG4gIH1cblxuICAucGZwIGltZ3tcbiAgICB3aWR0aDogMTB2dztcbiAgfVxuXG4gIC5wZnB7XG4gICAgYm9yZGVyLXJhZGl1czogNnZ3O1xuICB9XG5cbiAgLm5hbWV7XG4gICAgZm9udC1zaXplOjV2d1xuICB9XG5cbiAgLmhlYWQtbmFtZXtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA1NyUgMjIlO1xuICB9XG5cbiAgLmNpcmNsZSB7XG4gICAgd2lkdGg6IDJ2dztcbiAgICBoZWlnaHQ6IDJ2dztcbiAgfVxuXG4gIC5pY29ucy1jb250YWluZXIgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIuNXZ3O1xuICAgIHdpZHRoOiAyLjh2d1xuICB9XG5cbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDAgNHZ3O1xuICAgIG1hcmdpbi10b3A6IDR2dztcbiAgfVxuXG4gIC5yZWNpZXZlci1tc2cge1xuICAgIHBhZGRpbmc6IDEuM3Z3O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IDMuNnZ3O1xuICAgIG1heC13aWR0aDogNTUlO1xuICAgIG1hcmdpbi1ib3R0b206IDN2dztcbiAgfVxuXG4gIC5zZW5ke1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiByZ2IoMjAsIDIwLCAyMCk7XG4gICAgYmFja2dyb3VuZDogcmdiKDI0MywgMjQzLCAyNDMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDF2dyAxdncgMXZ3IDB2dztcbiAgfVxuICAucmVwbHktY29udGFpbmVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6dW5zZXQ7XG4gICAgbWFyZ2luOjAgNnZ3O1xuICAgIG1hcmdpbi10b3A6IDJ2dztcbiAgfVxuXG4gIC5taWMtaWNvbiwuYXR0YWNoLWljb24sLmNhbWVyYS1pY29uLC5lbW9qaXtcbiAgICBwYWRkaW5nOjIuNXZ3XG4gIH1cblxuICAuZW1vaml7XG4gICAgcGFkZGluZy1yaWdodDogNnZ3O1xuICB9XG5cbiAgLm1pYy1pY29uIGltZywuYXR0YWNoLWljb24gaW1nLC5jYW1lcmEtaWNvbiBpbWcsLmVtb2ppIGltZ3tcbiAgICB3aWR0aDogNnZ3O1xuICB9XG5cbiAgLm1lc3NhZ2Uge1xuICAgIHdpZHRoOjM1JVxuICB9XG4gIC5zZW5kLWJ0bntcbiAgICB3aWR0aDogOHZ3O1xuICAgIGhlaWdodDogOHZ3O1xuICAgIHBhZGRpbmc6IDJ2dztcbiAgICByaWdodDogMi44dnc7XG4gICAgYm9yZGVyLXJhZGl1czogOHZ3O1xuICB9XG5cbiAgLnNlbmQtYnRuIGltZ3tcbiAgICB3aWR0aDogNHZ3O1xuICAgIHBhZGRpbmc6IDF2dztcbiAgICBwYWRkaW5nLWxlZnQ6IDJ2dztcbiAgfVxuXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KXtcblxuICAuY2hhdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgODElIDklO1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cblxuICAuaGVhZC1jb250YWluZXJ7XG4gICAgbWFyZ2luOiAwIDEzdnc7XG4gIH1cblxuICAucGZwIGltZ3tcbiAgICB3aWR0aDogMTB2dztcbiAgfVxuXG4gIC5wZnB7XG4gICAgYm9yZGVyLXJhZGl1czogNnZ3O1xuICB9XG5cbiAgLm5hbWV7XG4gICAgZm9udC1zaXplOjV2d1xuICB9XG5cbiAgLmhlYWQtbmFtZXtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA1NyUgMjIlO1xuICB9XG5cbiAgLmNpcmNsZSB7XG4gICAgd2lkdGg6IDJ2dztcbiAgICBoZWlnaHQ6IDJ2dztcbiAgfVxuXG4gIC5pY29ucy1jb250YWluZXIgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIuNXZ3O1xuICAgIHdpZHRoOiAyLjh2d1xuICB9XG5cbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDAgNHZ3O1xuICAgIG1hcmdpbi10b3A6IDR2dztcbiAgfVxuXG4gIC5yZWNpZXZlci1tc2cge1xuICAgIHBhZGRpbmc6IDEuM3Z3O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IDMuNnZ3O1xuICAgIG1heC13aWR0aDogNTUlO1xuICAgIG1hcmdpbi1ib3R0b206IDN2dztcbiAgICBib3JkZXItcmFkaXVzOiAydncgMnZ3IDB2dyAydnc7XG4gIH1cblxuICAuc2VuZHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjb2xvcjogcmdiKDIwLCAyMCwgMjApO1xuICAgIGJhY2tncm91bmQ6IHJnYigyNDMsIDI0MywgMjQzKTtcbiAgICBib3JkZXItcmFkaXVzOiAydncgMnZ3IDJ2dyAwdnc7XG4gIH1cbiAgLnJlcGx5LWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OnVuc2V0O1xuICAgIG1hcmdpbjowIDZ2dztcbiAgICBtYXJnaW4tdG9wOiAydnc7XG4gIH1cblxuICAubWljLWljb24sLmF0dGFjaC1pY29uLC5jYW1lcmEtaWNvbiwuZW1vaml7XG4gICAgcGFkZGluZzoydndcbiAgfVxuXG4gIC5lbW9qaXtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4dnc7XG4gIH1cblxuICAubWljLWljb24gaW1nLC5hdHRhY2gtaWNvbiBpbWcsLmNhbWVyYS1pY29uIGltZywuZW1vamkgaW1ne1xuICAgIHdpZHRoOiA0dnc7XG4gIH1cblxuICAubWVzc2FnZSB7XG4gICAgd2lkdGg6NjAlXG4gIH1cbiAgLnNlbmQtYnRue1xuICAgIHdpZHRoOiA2dnc7XG4gICAgaGVpZ2h0OiA2dnc7XG4gICAgcGFkZGluZzogMXZ3O1xuICAgIHJpZ2h0OiA2dnc7XG4gICAgYm9yZGVyLXJhZGl1czogOHZ3O1xuICB9XG5cbiAgLnNlbmQtYnRuIGltZ3tcbiAgICB3aWR0aDogNHZ3O1xuICAgIHBhZGRpbmc6IDF2dztcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXZ3O1xuICB9XG5cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG4vKiAvLy8vLy8vLy8vLy9sb2FkaW4vLy8vLy8vLy8vLy8vLy8vLy8vICovXG4ubG9hZGluLWNvbnRhaW5lcntcbiAgaGVpZ2h0OjgwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuLnNrLWZvbGRpbmctY3ViZSB7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xufVxuXG4uc2stZm9sZGluZy1jdWJlIC5zay1jdWJlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IFxufVxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZTpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZjAwZDM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1mb2xkQ3ViZUFuZ2xlIDIuNHMgaW5maW5pdGUgbGluZWFyIGJvdGg7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzay1mb2xkQ3ViZUFuZ2xlIDIuNHMgaW5maW5pdGUgbGluZWFyIGJvdGg7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG59XG4uc2stZm9sZGluZy1jdWJlIC5zay1jdWJlMiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZVooOTBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGVaKDkwZGVnKTtcbn1cbi5zay1mb2xkaW5nLWN1YmUgLnNrLWN1YmUzIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlWigxODBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGVaKDE4MGRlZyk7XG59XG4uc2stZm9sZGluZy1jdWJlIC5zay1jdWJlNCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZVooMjcwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlWigyNzBkZWcpO1xufVxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZTI6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuM3M7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xufVxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZTM6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzOyBcbn1cbi5zay1mb2xkaW5nLWN1YmUgLnNrLWN1YmU0OmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjlzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC45cztcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzay1mb2xkQ3ViZUFuZ2xlIHtcbiAgMCUsIDEwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKC0xODBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgtMTgwZGVnKTtcbiAgICBvcGFjaXR5OiAwOyBcbiAgfSAyNSUsIDc1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgwZGVnKTtcbiAgICBvcGFjaXR5OiAxOyBcbiAgfSA5MCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWSgxODBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWSgxODBkZWcpO1xuICAgIG9wYWNpdHk6IDA7IFxuICB9IFxufVxuXG5Aa2V5ZnJhbWVzIHNrLWZvbGRDdWJlQW5nbGUge1xuICAwJSwgMTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoLTE4MGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKC0xODBkZWcpO1xuICAgIG9wYWNpdHk6IDA7IFxuICB9IDI1JSwgNzUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKDBkZWcpO1xuICAgIG9wYWNpdHk6IDE7IFxuICB9IDkwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVZKDE4MGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVZKDE4MGRlZyk7XG4gICAgb3BhY2l0eTogMDsgXG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "VyOk":
/*!************************************************!*\
  !*** ./src/app/chatlist/chatlist.component.ts ***!
  \************************************************/
/*! exports provided: ChatlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatlistComponent", function() { return ChatlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ChatlistComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChatlistComponent.ɵfac = function ChatlistComponent_Factory(t) { return new (t || ChatlistComponent)(); };
ChatlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatlistComponent, selectors: [["app-chatlist"]], decls: 105, vars: 0, consts: [[1, "chat-container"], [1, "profile-container"], [1, "profile"], [1, "profile-pic"], ["src", "../assets/Person=Mattew, Skin Tone=White, Posture=1 Happy.png", "alt", ""], [1, "detail-container"], [1, "detail"], [1, "profile-name"], [1, "profile-profession"], [1, "edit-icon"], ["src", "../assets/pencil.svg", "alt", ""], [1, "searchbar"], [1, "search-btn"], ["src", "../assets/loupe.svg", "alt", "search", 1, "search-icon"], ["type", "text", "name", "search-bar", "id", "search-bar", "placeholder", "Search friends"], [1, "chat-list"], [1, "contact-container"], [1, "profile-pic", "list"], ["src", "../assets/Character=Ariana, Skin tone=White, Posture=1 Happy.png", "alt", "pfp", 2, "width", "4vw"], [1, "chat-info"], [1, "main-info"], [1, "name"], [1, "time"], [1, "chat-snap"], [1, "chat"], [1, "chat-stats-container"], [1, "stats"], ["src", "../assets/Person=John, Skin Tone=White, Posture=1 Happy.png", "alt", "pfp", 2, "width", "4vw"], ["src", "../assets/Person=George, Skin Tone=Black, Posture=1 Happy.png", "alt", "pfp", 2, "width", "4vw"], ["src", "../assets/Character=Ezra, Skin tone=White, Posture=1 Happy.png", "alt", "pfp", 2, "width", "4vw"], ["src", "../assets/tick.svg", "alt", "tick", 1, "tick"], ["src", "../assets/Character=Darlene, Skin tone=White, Posture=1 Happy.png", "alt", "pfp", 2, "width", "4vw"], ["src", "../assets/Person=Ed, Skin Tone=White, Posture=1 Happy.png", "alt", "pfp", 2, "width", "4vw"]], template: function ChatlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "John mendwick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Senior developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Reyna sen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Just now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "It's fine, however it gonna work!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Satori bin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "2min ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt repellendus unde sapiente numquam. Reiciendis ab adipisci minima distinctio sunt incidunt pariatur placeat hic! Consequatur cumque blanditiis reprehenderit sequi a. Illo. Atque architecto exercitationem expedita quae libero consectetur quasi optio, perferendis in sunt numquam porro ipsam autem laborum dicta vitae nemo dolore? Officiis at fugiat quos perspiciatis vero possimus vitae quisquam!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Ankush bakshi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "12:35 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corpos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Arifa abdul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "11:35 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "It's fine, however it gonna work anyways! so yeah take care of yourself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Annie bliss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "10:35 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "It's fine, however it gonna work anyways! so yeah take care of yourself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Ankush bakshi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "It's fine, however it gonna work anyways! so yeah take care of yourself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".chat-container[_ngcontent-%COMP%]{\n    display:grid;\n    grid-template-rows: 20% 5% 75%;\n    height:100vh;\n    background:#f9f9f9;\n}\n\n.profile[_ngcontent-%COMP%]{\n    display:grid;\n    grid-template-columns: 28% 57% 15%;;\n    width: 100%;\n}\n\n.searchbar[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%]{\n    width: 100%;\n    border-radius: 0 1vw 1vw 0;\n    border: none;\n    outline: none;\n}\n\n.searchbar[_ngcontent-%COMP%]{\n    margin: 0 1vw;\n    display:grid;\n    grid-template-columns: 10% 90%;\n}\n\n.search-btn[_ngcontent-%COMP%]{\n    display:flex;\n    width: 100%;\n    text-align: center;\n    background-color: white;\n    border-radius: 1vw 0px 0px 1vw;\n}\n\n.search-icon[_ngcontent-%COMP%]{\n    width: 1vw;\n    display: flex;\n    position: relative;\n    text-align: center;\n    align-content: center;\n    cursor: pointer;\n    padding: 0.6vw;\n    filter: invert(0.5);\n}\n\n.profile-container[_ngcontent-%COMP%]{\n    display:flex;\n    align-items: center;\n    margin: 0 1vw;\n}\n\n.profile-pic[_ngcontent-%COMP%]{\n    width: 5vw;\n    height: 5vw;\n    background: rgb(255, 255, 255);\n    border-radius: 3vw;\n    text-align: center;\n    align-content: center;\n}\n\n.profile-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width:5vw;\n}\n\n.detail-container[_ngcontent-%COMP%]{\n    display:flex;\n    align-items: center;\n}\n\n.profile-name[_ngcontent-%COMP%]{\n    font-size: 1.4vw;\n    font-weight: 700;\n    color: rgb(153, 0, 255);\n}\n\n.profile-profession[_ngcontent-%COMP%]{\n    font-size: 1.15vw;\n    color:rgb(77, 77, 77)\n}\n\n.edit-icon[_ngcontent-%COMP%]{\n    display: flex;\n}\n\n.edit-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    cursor: pointer;\n    width:0.8vw;\n    margin: 0 auto;\n}\n\n.list[_ngcontent-%COMP%]{\n    height:4vw;\n    width:4vw;\n}\n\n.contact-container[_ngcontent-%COMP%]{\n    display:grid;\n    grid-template-columns: 25% 75%;\n    margin-bottom: 1vw;\n    cursor: pointer;\n}\n\n.chat-list[_ngcontent-%COMP%]{\n    margin:0 1vw;\n    margin-top:1.2vw;\n    overflow-x: scroll;\n}\n\n.main-info[_ngcontent-%COMP%], .chat-snap[_ngcontent-%COMP%]{\n    display:grid;\n    grid-template-columns:70% 30%\n}\n\n.main-info[_ngcontent-%COMP%]{\n    font-size: 0.9vw;\n}\n\n.chat[_ngcontent-%COMP%]{\n    font-size: calc(2px + 0.6vw);\n    color: rgb(77, 77, 77);\n    display:-webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.chat-stats-container[_ngcontent-%COMP%]{\n    display:flex;\n    margin: 0 auto;\n    margin-left:60%\n}\n\n.stats[_ngcontent-%COMP%]{\n    padding: 0.3vw;\n    font-size: 0.7vw;\n    display:flex;\n    width:0.5vw;\n    height:0.5vw;\n    justify-content: center;\n    border-radius:1vw;\n    color: white;\n    align-items: center;\n    background:rgb(153, 0, 255)\n}\n\n.chat-snap[_ngcontent-%COMP%]{\n    margin-top:0.1vw\n}\n\n.name[_ngcontent-%COMP%]{\n    color:rgb(153, 0, 255);\n    font-weight:500\n}\n\n.tick[_ngcontent-%COMP%]{\n    width:12px;\n    filter:invert(30%) sepia(80) saturate(14) hue-rotate(237deg)\n}\n\n@media only screen and (max-width:415px){\n    .chat-container[_ngcontent-%COMP%]{\n        display:grid;\n        grid-template-rows: 20% 5% 75%;\n        height:100vh;\n        background:#f1f1f1;\n    }\n\n    .searchbar[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%]{\n            width:98%;\n            border-radius: 0 18vw 18vw 0;\n    }\n\n    .searchbar[_ngcontent-%COMP%]{\n        margin: 0 3vw;\n        display:grid;\n        grid-template-columns:14% 86%;\n    }\n\n    .search-btn[_ngcontent-%COMP%]{\n        display:flex;\n        width: 100%;\n        text-align: center;\n        background-color: white;\n        border-radius: 18vw 0px 0px 18vw;\n    }\n    \n    .search-icon[_ngcontent-%COMP%]{\n        width: 3vw;\n        display: flex;\n        position: relative;\n        text-align: center;\n        align-content: center;\n        cursor: pointer;\n        padding: 1vw;\n        padding-left: 2vw !important;\n        filter: invert(0.5);\n    }\n\n\n    .profile-container[_ngcontent-%COMP%]{\n        margin: 0 3vw;\n    }\n\n\n    .profile-pic[_ngcontent-%COMP%]{\n        width: 12vw;\n        height: 12vw;\n        border-radius: 10vw;\n    }\n\n    .profile-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n        width: 12vw !important;\n    }\n    .list[_ngcontent-%COMP%]{\n        width: 10vw;\n        height: 10vw;\n    }\n\n    .list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n        width: 10vw !important;\n    }\n\n    .profile-profession[_ngcontent-%COMP%]{\n        font-size: 3.5vw;\n    }\n\n\n    .profile-name[_ngcontent-%COMP%]{\n        font-size: 3.4vw;\n        font-weight: 700;\n        color: rgb(153, 0, 255);\n    }\n\n    .chat-list[_ngcontent-%COMP%]{\n        margin: 0 2vw;\n        margin-top: 5vw !important;\n    }\n\n    .chat[_ngcontent-%COMP%]{\n        font-size: 2.5vw;\n    }\n\n    .main-info[_ngcontent-%COMP%]{\n        font-size:2.6vw\n    }\n\n    .chat-snap[_ngcontent-%COMP%]{\n        margin-top: 0.4vw;\n    }\n    .contact-container[_ngcontent-%COMP%]{\n        margin-bottom: 4vw;\n    }\n\n    .stats[_ngcontent-%COMP%]{\n        padding: 1.5vw;\n        font-size: 2vw;\n        border-radius:3vw;\n    }\n\n    .edit-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n        width:2.5vw;\n    }\n\n\n    \n}\n\n@media only screen and (max-width:1024px){\n    .chat-container[_ngcontent-%COMP%]{\n        display:grid;\n        grid-template-rows: 20% 5% 75%;\n        height:100vh;\n        background:#f1f1f1;\n    }\n\n    .searchbar[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%]{\n            width:98%;\n            border-radius: 0 18vw 18vw 0;\n    }\n\n    .searchbar[_ngcontent-%COMP%]{\n        margin: 0 3vw;\n        display:grid;\n        grid-template-columns:14% 86%;\n    }\n\n    .search-btn[_ngcontent-%COMP%]{\n        display:flex;\n        width: 100%;\n        text-align: center;\n        background-color: white;\n        border-radius: 18vw 0px 0px 18vw;\n    }\n    \n    .search-icon[_ngcontent-%COMP%]{\n        width: 3vw;\n        display: flex;\n        position: relative;\n        text-align: center;\n        align-content: center;\n        cursor: pointer;\n        padding: 1vw;\n        filter: invert(0.5);\n    }\n\n\n    .profile-container[_ngcontent-%COMP%]{\n        margin: 0 3vw;\n    }\n\n\n    .profile-pic[_ngcontent-%COMP%]{\n        width: 12vw;\n        height: 12vw;\n        border-radius: 10vw;\n    }\n\n    .profile-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n        width: 12vw !important;\n    }\n    .list[_ngcontent-%COMP%]{\n        width: 10vw;\n        height: 10vw;\n    }\n\n    .list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n        width: 10vw !important;\n    }\n\n    .profile-profession[_ngcontent-%COMP%]{\n        font-size: 3.5vw;\n    }\n\n\n    .profile-name[_ngcontent-%COMP%]{\n        font-size: 3.4vw;\n        font-weight: 700;\n        color: rgb(153, 0, 255);\n    }\n\n    .chat-list[_ngcontent-%COMP%]{\n        margin: 0 2vw;\n        margin-top: 3vw;\n    }\n\n    .chat[_ngcontent-%COMP%]{\n        font-size: 2.5vw;\n    }\n\n    .main-info[_ngcontent-%COMP%]{\n        font-size:2.6vw\n    }\n\n    .chat-snap[_ngcontent-%COMP%]{\n        margin-top: 0.4vw;\n    }\n    .contact-container[_ngcontent-%COMP%]{\n        margin-bottom: 4vw;\n    }\n\n    .stats[_ngcontent-%COMP%]{\n        padding: 1.5vw;\n        font-size: 2vw;\n        border-radius:3vw;\n    }\n\n    .edit-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n        width:2.5vw;\n    }\n\n\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtC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LGNBQWM7UUFDZCxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7Ozs7QUFJSjs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUdHIiwiZmlsZSI6ImNoYXRsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1jb250YWluZXJ7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDUlIDc1JTtcbiAgICBoZWlnaHQ6MTAwdmg7XG4gICAgYmFja2dyb3VuZDojZjlmOWY5O1xufVxuXG4ucHJvZmlsZXtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOCUgNTclIDE1JTs7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZWFyY2hiYXIgaW5wdXRbdHlwZT0ndGV4dCdde1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMXZ3IDF2dyAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5cbi5zZWFyY2hiYXJ7XG4gICAgbWFyZ2luOiAwIDF2dztcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgOTAlO1xufVxuXG4uc2VhcmNoLWJ0bntcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDF2dyAwcHggMHB4IDF2dztcbn1cblxuLnNlYXJjaC1pY29ue1xuICAgIHdpZHRoOiAxdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMC42dnc7XG4gICAgZmlsdGVyOiBpbnZlcnQoMC41KTtcbn1cblxuLnByb2ZpbGUtY29udGFpbmVye1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMCAxdnc7XG59XG5cbi5wcm9maWxlLXBpY3tcbiAgICB3aWR0aDogNXZ3O1xuICAgIGhlaWdodDogNXZ3O1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBib3JkZXItcmFkaXVzOiAzdnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2ZpbGUtcGljIGltZ3tcbiAgICB3aWR0aDo1dnc7XG59XG5cbi5kZXRhaWwtY29udGFpbmVye1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvZmlsZS1uYW1le1xuICAgIGZvbnQtc2l6ZTogMS40dnc7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogcmdiKDE1MywgMCwgMjU1KTtcbn1cblxuLnByb2ZpbGUtcHJvZmVzc2lvbntcbiAgICBmb250LXNpemU6IDEuMTV2dztcbiAgICBjb2xvcjpyZ2IoNzcsIDc3LCA3Nylcbn1cblxuLmVkaXQtaWNvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZWRpdC1pY29uIGltZ3tcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6MC44dnc7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5saXN0e1xuICAgIGhlaWdodDo0dnc7XG4gICAgd2lkdGg6NHZ3O1xufVxuXG4uY29udGFjdC1jb250YWluZXJ7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDc1JTtcbiAgICBtYXJnaW4tYm90dG9tOiAxdnc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hhdC1saXN0e1xuICAgIG1hcmdpbjowIDF2dztcbiAgICBtYXJnaW4tdG9wOjEuMnZ3O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cblxuLm1haW4taW5mbywuY2hhdC1zbmFwe1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6NzAlIDMwJVxufVxuXG4ubWFpbi1pbmZve1xuICAgIGZvbnQtc2l6ZTogMC45dnc7XG59XG5cbi5jaGF0e1xuICAgIGZvbnQtc2l6ZTogY2FsYygycHggKyAwLjZ2dyk7XG4gICAgY29sb3I6IHJnYig3NywgNzcsIDc3KTtcbiAgICBkaXNwbGF5Oi13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cblxuLmNoYXQtc3RhdHMtY29udGFpbmVye1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tbGVmdDo2MCVcbn1cblxuLnN0YXRze1xuICAgIHBhZGRpbmc6IDAuM3Z3O1xuICAgIGZvbnQtc2l6ZTogMC43dnc7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIHdpZHRoOjAuNXZ3O1xuICAgIGhlaWdodDowLjV2dztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOjF2dztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOnJnYigxNTMsIDAsIDI1NSlcbn1cblxuLmNoYXQtc25hcHtcbiAgICBtYXJnaW4tdG9wOjAuMXZ3XG59XG5cbi5uYW1le1xuICAgIGNvbG9yOnJnYigxNTMsIDAsIDI1NSk7XG4gICAgZm9udC13ZWlnaHQ6NTAwXG59XG5cbi50aWNre1xuICAgIHdpZHRoOjEycHg7XG4gICAgZmlsdGVyOmludmVydCgzMCUpIHNlcGlhKDgwKSBzYXR1cmF0ZSgxNCkgaHVlLXJvdGF0ZSgyMzdkZWcpXG59XG5cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDE1cHgpe1xuICAgIC5jaGF0LWNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA1JSA3NSU7XG4gICAgICAgIGhlaWdodDoxMDB2aDtcbiAgICAgICAgYmFja2dyb3VuZDojZjFmMWYxO1xuICAgIH1cblxuICAgIC5zZWFyY2hiYXIgaW5wdXRbdHlwZT0ndGV4dCdde1xuICAgICAgICAgICAgd2lkdGg6OTglO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxOHZ3IDE4dncgMDtcbiAgICB9XG5cbiAgICAuc2VhcmNoYmFye1xuICAgICAgICBtYXJnaW46IDAgM3Z3O1xuICAgICAgICBkaXNwbGF5OmdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxNCUgODYlO1xuICAgIH1cblxuICAgIC5zZWFyY2gtYnRue1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxOHZ3IDBweCAwcHggMTh2dztcbiAgICB9XG4gICAgXG4gICAgLnNlYXJjaC1pY29ue1xuICAgICAgICB3aWR0aDogM3Z3O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDF2dztcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAydncgIWltcG9ydGFudDtcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoMC41KTtcbiAgICB9XG5cblxuICAgIC5wcm9maWxlLWNvbnRhaW5lcntcbiAgICAgICAgbWFyZ2luOiAwIDN2dztcbiAgICB9XG5cblxuICAgIC5wcm9maWxlLXBpY3tcbiAgICAgICAgd2lkdGg6IDEydnc7XG4gICAgICAgIGhlaWdodDogMTJ2dztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTB2dztcbiAgICB9XG5cbiAgICAucHJvZmlsZS1waWMgaW1ne1xuICAgICAgICB3aWR0aDogMTJ2dyAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubGlzdHtcbiAgICAgICAgd2lkdGg6IDEwdnc7XG4gICAgICAgIGhlaWdodDogMTB2dztcbiAgICB9XG5cbiAgICAubGlzdCBpbWd7XG4gICAgICAgIHdpZHRoOiAxMHZ3ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnByb2ZpbGUtcHJvZmVzc2lvbntcbiAgICAgICAgZm9udC1zaXplOiAzLjV2dztcbiAgICB9XG5cblxuICAgIC5wcm9maWxlLW5hbWV7XG4gICAgICAgIGZvbnQtc2l6ZTogMy40dnc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiByZ2IoMTUzLCAwLCAyNTUpO1xuICAgIH1cblxuICAgIC5jaGF0LWxpc3R7XG4gICAgICAgIG1hcmdpbjogMCAydnc7XG4gICAgICAgIG1hcmdpbi10b3A6IDV2dyAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jaGF0e1xuICAgICAgICBmb250LXNpemU6IDIuNXZ3O1xuICAgIH1cblxuICAgIC5tYWluLWluZm97XG4gICAgICAgIGZvbnQtc2l6ZToyLjZ2d1xuICAgIH1cblxuICAgIC5jaGF0LXNuYXB7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNHZ3O1xuICAgIH1cbiAgICAuY29udGFjdC1jb250YWluZXJ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDR2dztcbiAgICB9XG5cbiAgICAuc3RhdHN7XG4gICAgICAgIHBhZGRpbmc6IDEuNXZ3O1xuICAgICAgICBmb250LXNpemU6IDJ2dztcbiAgICAgICAgYm9yZGVyLXJhZGl1czozdnc7XG4gICAgfVxuXG4gICAgLmVkaXQtaWNvbiBpbWd7XG4gICAgICAgIHdpZHRoOjIuNXZ3O1xuICAgIH1cblxuXG4gICAgXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KXtcbiAgICAuY2hhdC1jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgNSUgNzUlO1xuICAgICAgICBoZWlnaHQ6MTAwdmg7XG4gICAgICAgIGJhY2tncm91bmQ6I2YxZjFmMTtcbiAgICB9XG5cbiAgICAuc2VhcmNoYmFyIGlucHV0W3R5cGU9J3RleHQnXXtcbiAgICAgICAgICAgIHdpZHRoOjk4JTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMTh2dyAxOHZ3IDA7XG4gICAgfVxuXG4gICAgLnNlYXJjaGJhcntcbiAgICAgICAgbWFyZ2luOiAwIDN2dztcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MTQlIDg2JTtcbiAgICB9XG5cbiAgICAuc2VhcmNoLWJ0bntcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTh2dyAwcHggMHB4IDE4dnc7XG4gICAgfVxuICAgIFxuICAgIC5zZWFyY2gtaWNvbntcbiAgICAgICAgd2lkdGg6IDN2dztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nOiAxdnc7XG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDAuNSk7XG4gICAgfVxuXG5cbiAgICAucHJvZmlsZS1jb250YWluZXJ7XG4gICAgICAgIG1hcmdpbjogMCAzdnc7XG4gICAgfVxuXG5cbiAgICAucHJvZmlsZS1waWN7XG4gICAgICAgIHdpZHRoOiAxMnZ3O1xuICAgICAgICBoZWlnaHQ6IDEydnc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwdnc7XG4gICAgfVxuXG4gICAgLnByb2ZpbGUtcGljIGltZ3tcbiAgICAgICAgd2lkdGg6IDEydncgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmxpc3R7XG4gICAgICAgIHdpZHRoOiAxMHZ3O1xuICAgICAgICBoZWlnaHQ6IDEwdnc7XG4gICAgfVxuXG4gICAgLmxpc3QgaW1ne1xuICAgICAgICB3aWR0aDogMTB2dyAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wcm9maWxlLXByb2Zlc3Npb257XG4gICAgICAgIGZvbnQtc2l6ZTogMy41dnc7XG4gICAgfVxuXG5cbiAgICAucHJvZmlsZS1uYW1le1xuICAgICAgICBmb250LXNpemU6IDMuNHZ3O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogcmdiKDE1MywgMCwgMjU1KTtcbiAgICB9XG5cbiAgICAuY2hhdC1saXN0e1xuICAgICAgICBtYXJnaW46IDAgMnZ3O1xuICAgICAgICBtYXJnaW4tdG9wOiAzdnc7XG4gICAgfVxuXG4gICAgLmNoYXR7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41dnc7XG4gICAgfVxuXG4gICAgLm1haW4taW5mb3tcbiAgICAgICAgZm9udC1zaXplOjIuNnZ3XG4gICAgfVxuXG4gICAgLmNoYXQtc25hcHtcbiAgICAgICAgbWFyZ2luLXRvcDogMC40dnc7XG4gICAgfVxuICAgIC5jb250YWN0LWNvbnRhaW5lcntcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHZ3O1xuICAgIH1cblxuICAgIC5zdGF0c3tcbiAgICAgICAgcGFkZGluZzogMS41dnc7XG4gICAgICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgICAgICBib3JkZXItcmFkaXVzOjN2dztcbiAgICB9XG5cbiAgICAuZWRpdC1pY29uIGltZ3tcbiAgICAgICAgd2lkdGg6Mi41dnc7XG4gICAgfVxuXG5cbiAgICBcbn1cblxuXG4vKiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpe1xuICAgIC5jaGF0LWNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSA1JSA3NSU7XG4gICAgICAgIGhlaWdodDoxMDB2aDtcbiAgICAgICAgYmFja2dyb3VuZDojZjFmMWYxO1xuICAgIH1cblxuICAgIC5zZWFyY2hiYXIgaW5wdXRbdHlwZT0ndGV4dCdde1xuICAgICAgICAgICAgd2lkdGg6OTglO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxOHZ3IDE4dncgMDtcbiAgICB9XG5cbiAgICAuc2VhcmNoYmFye1xuICAgICAgICBtYXJnaW46IDAgM3Z3O1xuICAgICAgICBkaXNwbGF5OmdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxNCUgODYlO1xuICAgIH1cblxuICAgIC5zZWFyY2gtYnRue1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxOHZ3IDBweCAwcHggMTh2dztcbiAgICB9XG4gICAgXG4gICAgLnNlYXJjaC1pY29ue1xuICAgICAgICB3aWR0aDogM3Z3O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDF2dztcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoMC41KTtcbiAgICB9XG5cblxuICAgIC5wcm9maWxlLWNvbnRhaW5lcntcbiAgICAgICAgbWFyZ2luOiAwIDN2dztcbiAgICB9XG5cblxuICAgIC5wcm9maWxlLXBpY3tcbiAgICAgICAgd2lkdGg6IDEydnc7XG4gICAgICAgIGhlaWdodDogMTJ2dztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTB2dztcbiAgICB9XG5cbiAgICAucHJvZmlsZS1waWMgaW1ne1xuICAgICAgICB3aWR0aDogMTJ2dyAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubGlzdHtcbiAgICAgICAgd2lkdGg6IDEwdnc7XG4gICAgICAgIGhlaWdodDogMTB2dztcbiAgICB9XG5cbiAgICAubGlzdCBpbWd7XG4gICAgICAgIHdpZHRoOiAxMHZ3ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnByb2ZpbGUtcHJvZmVzc2lvbntcbiAgICAgICAgZm9udC1zaXplOiAzLjV2dztcbiAgICB9XG5cblxuICAgIC5wcm9maWxlLW5hbWV7XG4gICAgICAgIGZvbnQtc2l6ZTogMy40dnc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiByZ2IoMTUzLCAwLCAyNTUpO1xuICAgIH1cblxuICAgIC5jaGF0LWxpc3R7XG4gICAgICAgIG1hcmdpbjogMCAydnc7XG4gICAgICAgIG1hcmdpbi10b3A6IDN2dztcbiAgICB9XG5cbiAgICAuY2hhdHtcbiAgICAgICAgZm9udC1zaXplOiAyLjV2dztcbiAgICB9XG5cbiAgICAubWFpbi1pbmZve1xuICAgICAgICBmb250LXNpemU6Mi42dndcbiAgICB9XG5cbiAgICAuY2hhdC1zbmFwe1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjR2dztcbiAgICB9XG4gICAgLmNvbnRhY3QtY29udGFpbmVye1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0dnc7XG4gICAgfVxuXG4gICAgLnN0YXRze1xuICAgICAgICBwYWRkaW5nOiAxLjV2dztcbiAgICAgICAgZm9udC1zaXplOiAydnc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6M3Z3O1xuICAgIH1cblxuICAgIC5lZGl0LWljb24gaW1ne1xuICAgICAgICB3aWR0aDoyLjV2dztcbiAgICB9XG5cblxuICAgIFxufSAqL1xuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _chatscreen_chatscreen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chatscreen/chatscreen.component */ "VVaz");
/* harmony import */ var _chatlist_chatlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chatlist/chatlist.component */ "VyOk");
/* harmony import */ var _profileview_profileview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profileview/profileview.component */ "ow0Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"], useValue: '/project' }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _chatscreen_chatscreen_component__WEBPACK_IMPORTED_MODULE_4__["ChatscreenComponent"],
        _chatlist_chatlist_component__WEBPACK_IMPORTED_MODULE_5__["ChatlistComponent"],
        _profileview_profileview_component__WEBPACK_IMPORTED_MODULE_6__["ProfileviewComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();


/***/ }),

/***/ "ow0Y":
/*!******************************************************!*\
  !*** ./src/app/profileview/profileview.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileviewComponent", function() { return ProfileviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProfileviewComponent {
    constructor() {
        this.closeemit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    close() {
        console.log("emitted pr");
        this.closeemit.emit(null);
    }
}
ProfileviewComponent.ɵfac = function ProfileviewComponent_Factory(t) { return new (t || ProfileviewComponent)(); };
ProfileviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileviewComponent, selectors: [["app-profileview"]], outputs: { closeemit: "closeemit" }, decls: 50, vars: 0, consts: [[1, "close-icon", 3, "click"], ["src", "../assets/close.svg", "alt", "", "srcset", ""], [1, "profile-container"], [1, "profile"], [1, "searchbar"], [1, "search-btn"], ["src", "../assets/loupe.svg", "alt", "search", 1, "search-icon"], ["type", "text", "name", "search-bar", "id", "search", "placeholder", "Search people"], [1, "pfp"], ["src", "../assets/Person=Chris, Skin Tone=White, Posture=1 Happy.png", "alt", ""], [1, "detail"], [1, "name"], [1, "profession"], [1, "action"], [1, "container"], ["src", "../assets/speech-bubble.svg", "alt", "chat", "width", "58px", 1, "txtchat", "icon"], ["src", "../assets/video-player.svg", "alt", "videochat", "width", "58px", 1, "videochat", "icon"], [1, "options"], [1, "viewfriends"], [1, "friend-icon"], ["src", "../assets/user.svg", "alt", "user"], [1, "sub"], [1, "fav"], [1, "fav-icon"], ["src", "../assets/heart.svg", "alt", "fav"], [1, "attachment-container"], [1, "attach-title"], [1, "file-container"], [1, "pdf", "thumb"], [1, "video", "thumb"], [1, "mp3", "thumb"], [1, "image", "thumb"], [1, "footer"], [1, "view-btn"], [1, "btn"]], template: function ProfileviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileviewComponent_Template_div_click_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dante fingston");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Marketing head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "View friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Add to Favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Attachments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "MP3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Assignment by Sahil Patel \uD83D\uDE0A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".profile-container[_ngcontent-%COMP%]{\n    display:grid;\n    grid-template-rows: 48% 10% 42%;\n    height:100vh;\n    background:#f9f9f9;\n}\n\n\n.searchbar[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%]{\n    width: 100%;\n    border-radius: 0 1vw 1vw 0;\n    border: none;\n    outline: none;\n}\n\n\n.close-icon[_ngcontent-%COMP%]{\n    display:none;\n}\n\n\n.searchbar[_ngcontent-%COMP%]{\n    margin: 0 1vw;\n    display:grid;\n    grid-template-columns: 10% 90%;\n}\n\n\n.search-btn[_ngcontent-%COMP%]{\n    display:flex;\n    width: 100%;\n    text-align: center;\n    background-color: white;\n    border-radius: 1vw 0px 0px 1vw;\n}\n\n\n.search-icon[_ngcontent-%COMP%]{\n    width: 1vw;\n    display: flex;\n    position: relative;\n    text-align: center;\n    align-content: center;\n    cursor: pointer;\n    padding: 0.6vw;\n    filter: invert(0.5);\n}\n\n\n.searchbar[_ngcontent-%COMP%]{\n    margin: 0 1vw;\n    margin-top: 1.5vw;\n    display: grid;\n    grid-template-columns: 10% 90%;\n}\n\n\n.pfp[_ngcontent-%COMP%]{\n    margin-top: 1vw;\n    display: flex;\n    justify-content: center;\n}\n\n\n.pfp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 8vw;\n    background: white;\n    border-radius: 98px;\n}\n\n\n.name[_ngcontent-%COMP%]{\n    font-size: 1.4vw;\n    text-align: center;\n}\n\n\n.profession[_ngcontent-%COMP%]{\n    font-size: 1vw;\n    text-align: center;\n    color: #404040;\n}\n\n\n.fav-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .friend-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 1vw;\n}\n\n\n.action[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    gap: 28px;\n}\n\n\n.icon[_ngcontent-%COMP%]{\n    display:flex;\n    justify-content:center;\n    padding: 1.4vw;\n    filter: invert(68%) sepia(100%) saturate(143) hue-rotate(277deg);\n}\n\n\n.container[_ngcontent-%COMP%]{\n    margin-top: 1vw;\n    width: 5vw;\n    height: 5vw;\n    display: flex;\n    justify-content: center;\n    background: #f3e0ff;\n    border: 1px solid #e8c6ff;\n    border-radius: 5vw;\n    transition:all 0.5s ease-in-out;\n}\n\n\n.container[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    background: #e7c1ff;\n}\n\n\n.file-container[_ngcontent-%COMP%]{\n    display:flex;\n    width: 100%;\n    justify-content:center;\n    gap: 1vw;\n}\n\n\n.options[_ngcontent-%COMP%]{\n    color:#404040;\n    font-size: 0.76vw;\n    margin-top: 0.8vw;\n}\n\n\n.thumb[_ngcontent-%COMP%]{\n    font-size:0.7vw;\n    display:flex;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    padding: 1.2vw;\n    height:1vw;\n    width:1vw;\n    border-radius:0.5vw;\n    background-color: #e7c1ff;\n    border: 0px;\n    border: 2px solid #e2b3ff;\n    transition: all 0.5s ease\n}\n\n\n.thumb[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    border: 2px solid #9900ff;\n    background-color: #dfacff;\n}\n\n\n.btn[_ngcontent-%COMP%]{\n    cursor: pointer;\n    background: none;\n    border: 0.1vw solid #9900ff;\n    color: #9900ff;\n    padding: 0.5vw;\n    font-size: 0.9vw;\n    width: 28%;\n    border-radius: 2vw;\n    transition: all 0.5s ease-in-out;\n}\n\n\n.btn[_ngcontent-%COMP%]:hover{\n    background:#9900ff;\n    color:white\n}\n\n\n.view-btn[_ngcontent-%COMP%]{\n    margin-top: 1.5vw;\n    display:flex;\n    justify-content: center;\n}\n\n\n.attach-title[_ngcontent-%COMP%]{\n    margin: 0 2vw;\n    font-size: 1.1vw;\n    margin-bottom: 15px;\n    margin-top: 30px;\n}\n\n\n.fav[_ngcontent-%COMP%], .viewfriends[_ngcontent-%COMP%]{\n    display: flex;\n    margin: 0 2vw;\n    align-items: center;\n    align-content: center;\n    margin-bottom: 1vw;\n    gap: 1vw;\n}\n\n\n.fav-icon[_ngcontent-%COMP%], .friend-icon[_ngcontent-%COMP%]{\n    display:flex;\n}\n\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 1vw;\n    text-align: center;\n}\n\n\n@media only screen and (max-width:414px){\n    .close-icon[_ngcontent-%COMP%]{\n        display:block;\n        position: fixed;\n        right: 0;\n        margin: 20px;\n    }\n\n    .file-container[_ngcontent-%COMP%]{\n    gap: 2vw;\n    }\n\n    .close-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n        width:4.5vw;\n        filter: invert(30%)\n    }\n        \n    .searchbar[_ngcontent-%COMP%]{\n        margin: 0 5vw;\n        margin-top: 14vw;\n    }\n\n    .searchbar[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%]{\n        width: 100%;\n        border-radius: 0 4vw 4vw 0;\n        height: 10vw\n    }\n\n    .search-btn[_ngcontent-%COMP%]{\n        border-radius: 4vw 0px 0px 4vw;\n    }\n\n    .search-icon[_ngcontent-%COMP%]{\n        width: 4vw;\n        padding-left: 2.2vw;\n    }\n\n\n    .pfp[_ngcontent-%COMP%]{\n        margin-top: 5vw;\n    }\n\n    .pfp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n        width:30vw\n    }\n\n    .name[_ngcontent-%COMP%]{\n        margin-top: 2vw;\n        font-size: 6vw;\n    }\n    \n    .profession[_ngcontent-%COMP%]{\n        font-size: 4vw;\n    }\n\n    .fav[_ngcontent-%COMP%], .viewfriends[_ngcontent-%COMP%]{\n        gap: 4vw;\n    }\n\n    .fav-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .friend-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n        width: 4vw;\n    }\n\n    .container[_ngcontent-%COMP%]{\n        margin-top: 5vw;\n        width: 20vw;\n        height: 20vw;\n        border-radius:10vw;\n    }\n    .icon[_ngcontent-%COMP%]{\n        display:flex;\n        justify-content:center;\n        padding: 4vw;\n    }\n\n    .options[_ngcontent-%COMP%]{\n        font-size: 4vw;\n        margin: 0 5vw;\n        color:#404040;\n        margin-top: 11vw;  \n    }\n    \n    .thumb[_ngcontent-%COMP%]{\n        height:24vw;\n        width:18vw;\n        font-size: 3vw;\n    }\n\n    .file-container[_ngcontent-%COMP%]{\n        margin-top: 2vw;\n    }\n\n    .attach-title[_ngcontent-%COMP%]{\n        margin: 0 5vw;\n        margin-top: 8vw;\n        font-size: 5vw;\n    }\n\n    .btn[_ngcontent-%COMP%]{\n        margin-top: 4vw;\n        font-size: 4vw;\n        padding: 1.2vw;\n        border-radius:5vw;\n    }\n\n    .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n        font-size: 4vw;\n        color:#404040;\n    }\n}\n\n\n@media only screen and (max-width:1024px){\n    .close-icon[_ngcontent-%COMP%]{\n        display:block;\n        position: fixed;\n        right: 0;\n        margin: 20px;\n    }\n\n\n    .file-container[_ngcontent-%COMP%]{\n    gap: 2vw;\n    }\n\n    .close-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n        width:3vw;\n        filter: invert(30%)\n    }\n        \n    .searchbar[_ngcontent-%COMP%]{\n        margin: 0 5vw;\n        margin-top: 8vw;\n    }\n\n    .searchbar[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%]{\n        width: 100%;\n        border-radius: 0 4vw 4vw 0;\n        font-size: 2.5vw;\n        height: 8vw\n    }\n\n    .search-btn[_ngcontent-%COMP%]{\n        border-radius: 4vw 0px 0px 4vw;\n    }\n\n    .search-icon[_ngcontent-%COMP%]{\n        width: 3vw;\n        padding-left: 2.2vw;\n    }\n\n\n    .pfp[_ngcontent-%COMP%]{\n        margin-top: 3vw;\n    }\n\n    .pfp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n        width:25vw;\n        border-radius:20vw;\n    }\n\n    .name[_ngcontent-%COMP%]{\n        margin-top: 2vw;\n        font-size: 4vw;\n    }\n    \n    .profession[_ngcontent-%COMP%]{\n        font-size: 3vw;\n    }\n\n    .fav[_ngcontent-%COMP%], .viewfriends[_ngcontent-%COMP%]{\n        gap: 3vw;\n    }\n\n    .fav-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .friend-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n        width: 2vw;\n    }\n\n    .container[_ngcontent-%COMP%]{\n        margin-top: 2vw;\n        width: 15vw;\n        height: 15vw;\n        border-radius:10vw;\n    }\n    .icon[_ngcontent-%COMP%]{\n        display:flex;\n        justify-content:center;\n        padding: 4vw;\n    }\n\n    .options[_ngcontent-%COMP%]{\n        font-size: 2.5vw;\n        margin: 0 5vw;\n        color:#404040;\n        margin-top: 12vw;  \n    }\n    \n    .thumb[_ngcontent-%COMP%]{\n        height:15vw;\n        width:18vw;\n        font-size: 3vw;\n    }\n\n    .file-container[_ngcontent-%COMP%]{\n        margin-top: 2vw;\n    }\n\n    .attach-title[_ngcontent-%COMP%]{\n        margin: 0 5vw;\n        margin-top: 8vw;\n        font-size: 4vw;\n    }\n\n    .btn[_ngcontent-%COMP%]{\n        margin-top: 2vw;\n        font-size: 3vw;\n        padding: 0.5vw;\n        border-radius:5vw;\n    }\n\n    .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n        font-size: 2.4vw;\n        color:#404040;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7QUFDbEM7OztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7O0FBSUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7OztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7OztBQUNBO0lBQ0ksVUFBVTtBQUNkOzs7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGdFQUFnRTtBQUNwRTs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLCtCQUEr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OztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLFFBQVE7SUFDWjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixhQUFhO1FBQ2IsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFVBQVU7UUFDVixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixlQUFlO1FBQ2YsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixjQUFjO1FBQ2QsY0FBYztRQUNkLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixhQUFhO0lBQ2pCOztBQUVKIiwiZmlsZSI6InByb2ZpbGV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1jb250YWluZXJ7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDglIDEwJSA0MiU7XG4gICAgaGVpZ2h0OjEwMHZoO1xuICAgIGJhY2tncm91bmQ6I2Y5ZjlmOTtcbn1cblxuXG4uc2VhcmNoYmFyIGlucHV0W3R5cGU9J3RleHQnXXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDF2dyAxdncgMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNsb3NlLWljb257XG4gICAgZGlzcGxheTpub25lO1xufVxuXG4uc2VhcmNoYmFye1xuICAgIG1hcmdpbjogMCAxdnc7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAlIDkwJTtcbn1cblxuLnNlYXJjaC1idG57XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxdncgMHB4IDBweCAxdnc7XG59XG5cbi5zZWFyY2gtaWNvbntcbiAgICB3aWR0aDogMXZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDAuNnZ3O1xuICAgIGZpbHRlcjogaW52ZXJ0KDAuNSk7XG59XG5cblxuXG4uc2VhcmNoYmFye1xuICAgIG1hcmdpbjogMCAxdnc7XG4gICAgbWFyZ2luLXRvcDogMS41dnc7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSA5MCU7XG59XG5cbi5wZnB7XG4gICAgbWFyZ2luLXRvcDogMXZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wZnAgaW1ne1xuICAgIHdpZHRoOiA4dnc7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogOThweDtcbn1cblxuLm5hbWV7XG4gICAgZm9udC1zaXplOiAxLjR2dztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9mZXNzaW9ue1xuICAgIGZvbnQtc2l6ZTogMXZ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzQwNDA0MDtcbn1cbi5mYXYtaWNvbiBpbWcsLmZyaWVuZC1pY29uIGltZ3tcbiAgICB3aWR0aDogMXZ3O1xufVxuLmFjdGlvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjhweDtcbn1cblxuLmljb257XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgcGFkZGluZzogMS40dnc7XG4gICAgZmlsdGVyOiBpbnZlcnQoNjglKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgxNDMpIGh1ZS1yb3RhdGUoMjc3ZGVnKTtcbn1cblxuXG4uY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDF2dztcbiAgICB3aWR0aDogNXZ3O1xuICAgIGhlaWdodDogNXZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2YzZTBmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZThjNmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDV2dztcbiAgICB0cmFuc2l0aW9uOmFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uY29udGFpbmVyOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZTdjMWZmO1xufVxuXG4uZmlsZS1jb250YWluZXJ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgZ2FwOiAxdnc7XG59XG5cbi5vcHRpb25ze1xuICAgIGNvbG9yOiM0MDQwNDA7XG4gICAgZm9udC1zaXplOiAwLjc2dnc7XG4gICAgbWFyZ2luLXRvcDogMC44dnc7XG59XG5cblxuLnRodW1ie1xuICAgIGZvbnQtc2l6ZTowLjd2dztcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMS4ydnc7XG4gICAgaGVpZ2h0OjF2dztcbiAgICB3aWR0aDoxdnc7XG4gICAgYm9yZGVyLXJhZGl1czowLjV2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdjMWZmO1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMmIzZmY7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZVxufVxuXG5cbi50aHVtYjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzk5MDBmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZhY2ZmO1xufVxuXG4uYnRue1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogMC4xdncgc29saWQgIzk5MDBmZjtcbiAgICBjb2xvcjogIzk5MDBmZjtcbiAgICBwYWRkaW5nOiAwLjV2dztcbiAgICBmb250LXNpemU6IDAuOXZ3O1xuICAgIHdpZHRoOiAyOCU7XG4gICAgYm9yZGVyLXJhZGl1czogMnZ3O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnRuOmhvdmVye1xuICAgIGJhY2tncm91bmQ6Izk5MDBmZjtcbiAgICBjb2xvcjp3aGl0ZVxufVxuXG4udmlldy1idG57XG4gICAgbWFyZ2luLXRvcDogMS41dnc7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYXR0YWNoLXRpdGxle1xuICAgIG1hcmdpbjogMCAydnc7XG4gICAgZm9udC1zaXplOiAxLjF2dztcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5mYXYsLnZpZXdmcmllbmRze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwIDJ2dztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxdnc7XG4gICAgZ2FwOiAxdnc7XG59XG5cbi5mYXYtaWNvbiwuZnJpZW5kLWljb257XG4gICAgZGlzcGxheTpmbGV4O1xufVxuXG4uZm9vdGVyIHB7XG4gICAgZm9udC1zaXplOiAxdnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxNHB4KXtcbiAgICAuY2xvc2UtaWNvbntcbiAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgIH1cblxuICAgIC5maWxlLWNvbnRhaW5lcntcbiAgICBnYXA6IDJ2dztcbiAgICB9XG5cbiAgICAuY2xvc2UtaWNvbiBpbWd7XG4gICAgICAgIHdpZHRoOjQuNXZ3O1xuICAgICAgICBmaWx0ZXI6IGludmVydCgzMCUpXG4gICAgfVxuICAgICAgICBcbiAgICAuc2VhcmNoYmFye1xuICAgICAgICBtYXJnaW46IDAgNXZ3O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNHZ3O1xuICAgIH1cblxuICAgIC5zZWFyY2hiYXIgaW5wdXRbdHlwZT0ndGV4dCdde1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA0dncgNHZ3IDA7XG4gICAgICAgIGhlaWdodDogMTB2d1xuICAgIH1cblxuICAgIC5zZWFyY2gtYnRue1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0dncgMHB4IDBweCA0dnc7XG4gICAgfVxuXG4gICAgLnNlYXJjaC1pY29ue1xuICAgICAgICB3aWR0aDogNHZ3O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIuMnZ3O1xuICAgIH1cblxuXG4gICAgLnBmcHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXZ3O1xuICAgIH1cblxuICAgIC5wZnAgaW1ne1xuICAgICAgICB3aWR0aDozMHZ3XG4gICAgfVxuXG4gICAgLm5hbWV7XG4gICAgICAgIG1hcmdpbi10b3A6IDJ2dztcbiAgICAgICAgZm9udC1zaXplOiA2dnc7XG4gICAgfVxuICAgIFxuICAgIC5wcm9mZXNzaW9ue1xuICAgICAgICBmb250LXNpemU6IDR2dztcbiAgICB9XG5cbiAgICAuZmF2LC52aWV3ZnJpZW5kc3tcbiAgICAgICAgZ2FwOiA0dnc7XG4gICAgfVxuXG4gICAgLmZhdi1pY29uIGltZywuZnJpZW5kLWljb24gaW1ne1xuICAgICAgICB3aWR0aDogNHZ3O1xuICAgIH1cblxuICAgIC5jb250YWluZXJ7XG4gICAgICAgIG1hcmdpbi10b3A6IDV2dztcbiAgICAgICAgd2lkdGg6IDIwdnc7XG4gICAgICAgIGhlaWdodDogMjB2dztcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxMHZ3O1xuICAgIH1cbiAgICAuaWNvbntcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA0dnc7XG4gICAgfVxuXG4gICAgLm9wdGlvbnN7XG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgICAgICBtYXJnaW46IDAgNXZ3O1xuICAgICAgICBjb2xvcjojNDA0MDQwO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMXZ3OyAgXG4gICAgfVxuICAgIFxuICAgIC50aHVtYntcbiAgICAgICAgaGVpZ2h0OjI0dnc7XG4gICAgICAgIHdpZHRoOjE4dnc7XG4gICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgIH1cblxuICAgIC5maWxlLWNvbnRhaW5lcntcbiAgICAgICAgbWFyZ2luLXRvcDogMnZ3O1xuICAgIH1cblxuICAgIC5hdHRhY2gtdGl0bGV7XG4gICAgICAgIG1hcmdpbjogMCA1dnc7XG4gICAgICAgIG1hcmdpbi10b3A6IDh2dztcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XG4gICAgfVxuXG4gICAgLmJ0bntcbiAgICAgICAgbWFyZ2luLXRvcDogNHZ3O1xuICAgICAgICBmb250LXNpemU6IDR2dztcbiAgICAgICAgcGFkZGluZzogMS4ydnc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6NXZ3O1xuICAgIH1cblxuICAgIC5mb290ZXIgcHtcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgICAgIGNvbG9yOiM0MDQwNDA7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KXtcbiAgICAuY2xvc2UtaWNvbntcbiAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgIH1cblxuXG4gICAgLmZpbGUtY29udGFpbmVye1xuICAgIGdhcDogMnZ3O1xuICAgIH1cblxuICAgIC5jbG9zZS1pY29uIGltZ3tcbiAgICAgICAgd2lkdGg6M3Z3O1xuICAgICAgICBmaWx0ZXI6IGludmVydCgzMCUpXG4gICAgfVxuICAgICAgICBcbiAgICAuc2VhcmNoYmFye1xuICAgICAgICBtYXJnaW46IDAgNXZ3O1xuICAgICAgICBtYXJnaW4tdG9wOiA4dnc7XG4gICAgfVxuXG4gICAgLnNlYXJjaGJhciBpbnB1dFt0eXBlPSd0ZXh0J117XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDR2dyA0dncgMDtcbiAgICAgICAgZm9udC1zaXplOiAyLjV2dztcbiAgICAgICAgaGVpZ2h0OiA4dndcbiAgICB9XG5cbiAgICAuc2VhcmNoLWJ0bntcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHZ3IDBweCAwcHggNHZ3O1xuICAgIH1cblxuICAgIC5zZWFyY2gtaWNvbntcbiAgICAgICAgd2lkdGg6IDN2dztcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyLjJ2dztcbiAgICB9XG5cblxuICAgIC5wZnB7XG4gICAgICAgIG1hcmdpbi10b3A6IDN2dztcbiAgICB9XG5cbiAgICAucGZwIGltZ3tcbiAgICAgICAgd2lkdGg6MjV2dztcbiAgICAgICAgYm9yZGVyLXJhZGl1czoyMHZ3O1xuICAgIH1cblxuICAgIC5uYW1le1xuICAgICAgICBtYXJnaW4tdG9wOiAydnc7XG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgIH1cbiAgICBcbiAgICAucHJvZmVzc2lvbntcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XG4gICAgfVxuXG4gICAgLmZhdiwudmlld2ZyaWVuZHN7XG4gICAgICAgIGdhcDogM3Z3O1xuICAgIH1cblxuICAgIC5mYXYtaWNvbiBpbWcsLmZyaWVuZC1pY29uIGltZ3tcbiAgICAgICAgd2lkdGg6IDJ2dztcbiAgICB9XG5cbiAgICAuY29udGFpbmVye1xuICAgICAgICBtYXJnaW4tdG9wOiAydnc7XG4gICAgICAgIHdpZHRoOiAxNXZ3O1xuICAgICAgICBoZWlnaHQ6IDE1dnc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTB2dztcbiAgICB9XG4gICAgLmljb257XG4gICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNHZ3O1xuICAgIH1cblxuICAgIC5vcHRpb25ze1xuICAgICAgICBmb250LXNpemU6IDIuNXZ3O1xuICAgICAgICBtYXJnaW46IDAgNXZ3O1xuICAgICAgICBjb2xvcjojNDA0MDQwO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMnZ3OyAgXG4gICAgfVxuICAgIFxuICAgIC50aHVtYntcbiAgICAgICAgaGVpZ2h0OjE1dnc7XG4gICAgICAgIHdpZHRoOjE4dnc7XG4gICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgIH1cblxuICAgIC5maWxlLWNvbnRhaW5lcntcbiAgICAgICAgbWFyZ2luLXRvcDogMnZ3O1xuICAgIH1cblxuICAgIC5hdHRhY2gtdGl0bGV7XG4gICAgICAgIG1hcmdpbjogMCA1dnc7XG4gICAgICAgIG1hcmdpbi10b3A6IDh2dztcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgfVxuXG4gICAgLmJ0bntcbiAgICAgICAgbWFyZ2luLXRvcDogMnZ3O1xuICAgICAgICBmb250LXNpemU6IDN2dztcbiAgICAgICAgcGFkZGluZzogMC41dnc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6NXZ3O1xuICAgIH1cblxuICAgIC5mb290ZXIgcHtcbiAgICAgICAgZm9udC1zaXplOiAyLjR2dztcbiAgICAgICAgY29sb3I6IzQwNDA0MDtcbiAgICB9XG5cbn1cblxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
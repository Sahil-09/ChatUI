(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Code\woobchat\src\main.ts */"zUnb");


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _chatlist_chatlist_component__WEBPACK_IMPORTED_MODULE_2__["ChatlistComponent"], _chatscreen_chatscreen_component__WEBPACK_IMPORTED_MODULE_3__["ChatscreenComponent"], _profileview_profileview_component__WEBPACK_IMPORTED_MODULE_4__["ProfileviewComponent"]], styles: [".container[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    display:grid;\r\n    grid-template-columns:22% 56% 22%;\r\n}\r\n\r\n.burger[_ngcontent-%COMP%]{\r\n    display:none;\r\n}\r\n\r\n@media screen and (max-width:415px){\r\n    .container[_ngcontent-%COMP%]{\r\n        display: block;\r\n    }\r\n    app-chatlist[_ngcontent-%COMP%]{\r\n        position: fixed;\r\n        width:60%;\r\n        z-index: 10;\r\n        transform: translateX(-60vw);\r\n        transition: all 0.5s ease;\r\n    }\r\n\r\n    app-profileview[_ngcontent-%COMP%]{\r\n        position: fixed;\r\n        width:100%;\r\n        top: 0;\r\n        z-index: 10;\r\n        transform: translateX(100vw);\r\n        transition: all 0.5s ease;\r\n    }\r\n\r\n    .open[_ngcontent-%COMP%]{\r\n        transform:translateX(0vw)\r\n    }\r\n    .close[_ngcontent-%COMP%]{\r\n        display:none !important;\r\n    }\r\n\r\n    .burger[_ngcontent-%COMP%]{\r\n        display: block;\r\n        margin: 6vw 1vw;\r\n        position: fixed;\r\n        z-index: 2;\r\n        padding: 7px;\r\n    }\r\n\r\n    .dot[_ngcontent-%COMP%]{\r\n        right: 0;\r\n    }\r\n\r\n    .d[_ngcontent-%COMP%]{\r\n        height: 3px !important;\r\n        width: 3px !important;\r\n    }\r\n\r\n    .backdrop[_ngcontent-%COMP%]{\r\n        position: fixed;\r\n        content: '';\r\n        height:100vh;\r\n        width: 100vw;\r\n        -webkit-backdrop-filter:blur(3px);\r\n                backdrop-filter:blur(3px);\r\n        z-index: 2;\r\n    }\r\n\r\n    .bar[_ngcontent-%COMP%]{\r\n    content: '';\r\n    width: 20px;\r\n    height: 2px;\r\n    margin-bottom: 5px;\r\n    background: rgb(170, 170, 170);\r\n    }\r\n}\r\n\r\n@media screen and (max-width:1024px){\r\n    .container[_ngcontent-%COMP%]{\r\n        display: block;\r\n    }\r\n    app-chatlist[_ngcontent-%COMP%]{\r\n        position: fixed;\r\n        width:60%;\r\n        z-index: 10;\r\n        transform: translateX(-60vw);\r\n        transition: all 0.5s ease;\r\n    }\r\n\r\n    app-profileview[_ngcontent-%COMP%]{\r\n        position: fixed;\r\n        width:100%;\r\n        top: 0;\r\n        z-index: 10;\r\n        transform: translateX(100vw);\r\n        transition: all 0.5s ease;\r\n    }\r\n\r\n    .open[_ngcontent-%COMP%]{\r\n        transform:translateX(0vw)\r\n    }\r\n    .close[_ngcontent-%COMP%]{\r\n        display:none !important;\r\n    }\r\n\r\n    .burger[_ngcontent-%COMP%]{\r\n        display: block;\r\n        margin: 5vw 1.5vw;\r\n        position: fixed;\r\n        z-index: 2;\r\n        padding: 7px;\r\n    }\r\n\r\n    .dot[_ngcontent-%COMP%]{\r\n        right: 0;\r\n    }\r\n\r\n    .d[_ngcontent-%COMP%]{\r\n        height: 1vw !important;\r\n        width: 1vw !important;\r\n        border-radius: 10vw;\r\n    }\r\n\r\n    .backdrop[_ngcontent-%COMP%]{\r\n        position: fixed;\r\n        content: '';\r\n        height:100vh;\r\n        width: 100vw;\r\n        -webkit-backdrop-filter:blur(3px);\r\n                backdrop-filter:blur(3px);\r\n        z-index: 2;\r\n    }\r\n\r\n    .bar[_ngcontent-%COMP%]{\r\n    content: '';\r\n    width: 4vw;\r\n    height: 0.4vw;\r\n    margin-bottom: 0.9vw;\r\n    background: rgb(170, 170, 170);\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUdBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsU0FBUztRQUNULFdBQVc7UUFDWCw0QkFBNEI7UUFDNUIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7UUFDVixNQUFNO1FBQ04sV0FBVztRQUNYLDRCQUE0QjtRQUM1Qix5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSTtJQUNKO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsZUFBZTtRQUNmLGVBQWU7UUFDZixVQUFVO1FBQ1YsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFFBQVE7SUFDWjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsV0FBVztRQUNYLFlBQVk7UUFDWixZQUFZO1FBQ1osaUNBQXlCO2dCQUF6Qix5QkFBeUI7UUFDekIsVUFBVTtJQUNkOztJQUVBO0lBQ0EsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsU0FBUztRQUNULFdBQVc7UUFDWCw0QkFBNEI7UUFDNUIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7UUFDVixNQUFNO1FBQ04sV0FBVztRQUNYLDRCQUE0QjtRQUM1Qix5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSTtJQUNKO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixVQUFVO1FBQ1YsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFFBQVE7SUFDWjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixxQkFBcUI7UUFDckIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFdBQVc7UUFDWCxZQUFZO1FBQ1osWUFBWTtRQUNaLGlDQUF5QjtnQkFBekIseUJBQXlCO1FBQ3pCLFVBQVU7SUFDZDs7SUFFQTtJQUNBLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQiw4QkFBOEI7SUFDOUI7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjIyJSA1NiUgMjIlO1xyXG59XHJcblxyXG4uYnVyZ2Vye1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTVweCl7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgYXBwLWNoYXRsaXN0e1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB3aWR0aDo2MCU7XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02MHZ3KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcC1wcm9maWxldmlld3tcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHZ3KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5vcGVue1xyXG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDB2dylcclxuICAgIH1cclxuICAgIC5jbG9zZXtcclxuICAgICAgICBkaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuYnVyZ2Vye1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogNnZ3IDF2dztcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRvdHtcclxuICAgICAgICByaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZHtcclxuICAgICAgICBoZWlnaHQ6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAzcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuYmFja2Ryb3B7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGhlaWdodDoxMDB2aDtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOmJsdXIoM3B4KTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG5cclxuICAgIC5iYXJ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTcwLCAxNzAsIDE3MCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KXtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICBhcHAtY2hhdGxpc3R7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHdpZHRoOjYwJTtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTYwdncpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwLXByb2ZpbGV2aWV3e1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwdncpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLm9wZW57XHJcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMHZ3KVxyXG4gICAgfVxyXG4gICAgLmNsb3Nle1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXJnZXJ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiA1dncgMS41dnc7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kb3R7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmR7XHJcbiAgICAgICAgaGVpZ2h0OiAxdncgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMXZ3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTB2dztcclxuICAgIH1cclxuXHJcbiAgICAuYmFja2Ryb3B7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGhlaWdodDoxMDB2aDtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOmJsdXIoM3B4KTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG5cclxuICAgIC5iYXJ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiA0dnc7XHJcbiAgICBoZWlnaHQ6IDAuNHZ3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC45dnc7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTcwLCAxNzAsIDE3MCk7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


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
        this.http.get("http://localhost:3000/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".chat-container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-rows: 14% 64% 20%;\r\n  height: 100vh;\r\n}\r\n\r\n.head-name[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  width: 100%;\r\n  grid-template-columns: 10% 70% 20%;\r\n}\r\n\r\n.head-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 0 1.5vw;\r\n  align-items: center;\r\n  border-bottom: 1px solid rgb(211, 211, 211);\r\n}\r\n\r\n.pfp[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background: rgb(243, 243, 243);\r\n  border-radius: 3vw;\r\n}\r\n\r\n.pfp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 4.5vw\r\n}\r\n\r\n.name[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  font-size: 2vw;\r\n  font-weight: 400;\r\n  align-items: center;\r\n}\r\n\r\n.circle[_ngcontent-%COMP%] {\r\n  content: \"\";\r\n  width: 0.9vw;\r\n  height: 0.9vw;\r\n  background: rgb(3, 218, 3);\r\n  border-radius: 5vw;\r\n  margin-left: 0.6vw;\r\n}\r\n\r\n.icons-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icons-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  filter: invert(40%);\r\n  margin-right: 2.5vw;\r\n  width: 1.4vw\r\n}\r\n\r\n.main-chat[_ngcontent-%COMP%] {\r\n  display: block;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n}\r\n\r\n.main-container[_ngcontent-%COMP%] {\r\n  margin: 0 1.5vw;\r\n  margin-top: 1vw;\r\n}\r\n\r\n.reciever-msg[_ngcontent-%COMP%] {\r\n  padding: 0.7vw;\r\n  float: right;\r\n  font-size: 0.8vw;\r\n  max-width: 40%;\r\n  color: white;\r\n  background: rgb(153, 0, 255);\r\n  border-radius: 1vw 1vw 0px 1vw;\r\n  margin-bottom: 0.7vw;\r\n}\r\n\r\n.reciever[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  float: right;\r\n}\r\n\r\n.sender[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  float: left;\r\n}\r\n\r\n.send[_ngcontent-%COMP%]{\r\n  float: left;\r\n  color: rgb(20, 20, 20);\r\n  background: rgb(243, 243, 243);\r\n  border-radius: 1vw 1vw 1vw 0vw;\r\n}\r\n\r\n.reply-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 1vw;\r\n}\r\n\r\n.reply[_ngcontent-%COMP%] {\r\n  border-top: 1px solid #e8e8e8;\r\n}\r\n\r\n.mic-icon[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding: 0.7vw;\r\n  padding-left: 0.7vw;\r\n  background: rgb(243, 243, 243);\r\n  border-radius: 5vw 0vw 0vw 5vw;\r\n}\r\n\r\n.mic-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  padding: 0.1vw;\r\n  filter: invert(30%);\r\n  width: 1.3vw;\r\n}\r\n\r\n.message[_ngcontent-%COMP%] {\r\n  background: rgb(243, 243, 243);\r\n  font-family: 'Nunito', sans-serif;\r\n  border: none;\r\n  outline: none;\r\n  width: 61%;\r\n  padding-left: 0.3vw;\r\n}\r\n\r\n.attach-icon[_ngcontent-%COMP%], .camera-icon[_ngcontent-%COMP%], .emoji[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  padding: 0.7vw;\r\n  background: rgb(243, 243, 243);\r\n}\r\n\r\n.attach-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .camera-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .emoji[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  padding: 0.1vw;\r\n  filter: invert(30%);\r\n  width: 1.3vw;\r\n}\r\n\r\n.emoji[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding: 0.7vw;\r\n  background: rgb(243, 243, 243);\r\n  padding-right: 3.5vw;\r\n  border-radius: 0 1vw 1vw 0;\r\n}\r\n\r\n.send-btn[_ngcontent-%COMP%]{\r\n    padding: 0.4vw;\r\n    position: relative;\r\n    display: flex;\r\n    right: 2.8vw;\r\n    width: 2.1vw;\r\n    height: 2.1vw;\r\n    text-align: center;\r\n    align-items: center;\r\n    background: #9900ff;\r\n    border-radius: 5vw;\r\n    transition: 0.5s all;\r\n}\r\n\r\n.send-btn[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n    background: #7f00d3;\r\n}\r\n\r\n.send-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    width: 1.3vw;\r\n    padding: 0.1vw;\r\n    filter: invert(1);\r\n    padding-left: 0.5vw;\r\n}\r\n\r\n@media only screen and (max-width:415px){\r\n\r\n  .chat-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-rows: 10% 81% 9%;\r\n    height: 100vh;\r\n  }\r\n\r\n  .head-container[_ngcontent-%COMP%]{\r\n    margin: 0 13vw;\r\n  }\r\n\r\n  .pfp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 10vw;\r\n  }\r\n\r\n  .pfp[_ngcontent-%COMP%]{\r\n    border-radius: 6vw;\r\n  }\r\n\r\n  .name[_ngcontent-%COMP%]{\r\n    font-size:5vw\r\n  }\r\n\r\n  .head-name[_ngcontent-%COMP%]{\r\n    grid-template-columns: 20% 57% 22%;\r\n  }\r\n\r\n  .circle[_ngcontent-%COMP%] {\r\n    width: 2vw;\r\n    height: 2vw;\r\n  }\r\n\r\n  .icons-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-right: 2.5vw;\r\n    width: 2.8vw\r\n  }\r\n\r\n  .main-container[_ngcontent-%COMP%] {\r\n    margin: 0 4vw;\r\n    margin-top: 4vw;\r\n  }\r\n\r\n  .reciever-msg[_ngcontent-%COMP%] {\r\n    padding: 1.3vw;\r\n    float: right;\r\n    font-size: 3.6vw;\r\n    max-width: 55%;\r\n    margin-bottom: 3vw;\r\n  }\r\n\r\n  .send[_ngcontent-%COMP%]{\r\n    float: left;\r\n    color: rgb(20, 20, 20);\r\n    background: rgb(243, 243, 243);\r\n    border-radius: 1vw 1vw 1vw 0vw;\r\n  }\r\n  .reply-container[_ngcontent-%COMP%] {\r\n    justify-content:unset;\r\n    margin:0 6vw;\r\n    margin-top: 2vw;\r\n  }\r\n\r\n  .mic-icon[_ngcontent-%COMP%], .attach-icon[_ngcontent-%COMP%], .camera-icon[_ngcontent-%COMP%], .emoji[_ngcontent-%COMP%]{\r\n    padding:2.5vw\r\n  }\r\n\r\n  .emoji[_ngcontent-%COMP%]{\r\n    padding-right: 6vw;\r\n  }\r\n\r\n  .mic-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .attach-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .camera-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .emoji[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 6vw;\r\n  }\r\n\r\n  .message[_ngcontent-%COMP%] {\r\n    width:35%\r\n  }\r\n  .send-btn[_ngcontent-%COMP%]{\r\n    width: 8vw;\r\n    height: 8vw;\r\n    padding: 2vw;\r\n    right: 2.8vw;\r\n    border-radius: 8vw;\r\n  }\r\n\r\n  .send-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 4vw;\r\n    padding: 1vw;\r\n    padding-left: 2vw;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width:1024px){\r\n\r\n  .chat-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-rows: 10% 81% 9%;\r\n    height: 100vh;\r\n  }\r\n\r\n  .head-container[_ngcontent-%COMP%]{\r\n    margin: 0 13vw;\r\n  }\r\n\r\n  .pfp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 10vw;\r\n  }\r\n\r\n  .pfp[_ngcontent-%COMP%]{\r\n    border-radius: 6vw;\r\n  }\r\n\r\n  .name[_ngcontent-%COMP%]{\r\n    font-size:5vw\r\n  }\r\n\r\n  .head-name[_ngcontent-%COMP%]{\r\n    grid-template-columns: 20% 57% 22%;\r\n  }\r\n\r\n  .circle[_ngcontent-%COMP%] {\r\n    width: 2vw;\r\n    height: 2vw;\r\n  }\r\n\r\n  .icons-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-right: 2.5vw;\r\n    width: 2.8vw\r\n  }\r\n\r\n  .main-container[_ngcontent-%COMP%] {\r\n    margin: 0 4vw;\r\n    margin-top: 4vw;\r\n  }\r\n\r\n  .reciever-msg[_ngcontent-%COMP%] {\r\n    padding: 1.3vw;\r\n    float: right;\r\n    font-size: 3.6vw;\r\n    max-width: 55%;\r\n    margin-bottom: 3vw;\r\n    border-radius: 2vw 2vw 0vw 2vw;\r\n  }\r\n\r\n  .send[_ngcontent-%COMP%]{\r\n    float: left;\r\n    color: rgb(20, 20, 20);\r\n    background: rgb(243, 243, 243);\r\n    border-radius: 2vw 2vw 2vw 0vw;\r\n  }\r\n  .reply-container[_ngcontent-%COMP%] {\r\n    justify-content:unset;\r\n    margin:0 6vw;\r\n    margin-top: 2vw;\r\n  }\r\n\r\n  .mic-icon[_ngcontent-%COMP%], .attach-icon[_ngcontent-%COMP%], .camera-icon[_ngcontent-%COMP%], .emoji[_ngcontent-%COMP%]{\r\n    padding:2vw\r\n  }\r\n\r\n  .emoji[_ngcontent-%COMP%]{\r\n    padding-right: 8vw;\r\n  }\r\n\r\n  .mic-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .attach-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .camera-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .emoji[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 4vw;\r\n  }\r\n\r\n  .message[_ngcontent-%COMP%] {\r\n    width:60%\r\n  }\r\n  .send-btn[_ngcontent-%COMP%]{\r\n    width: 6vw;\r\n    height: 6vw;\r\n    padding: 1vw;\r\n    right: 6vw;\r\n    border-radius: 8vw;\r\n  }\r\n\r\n  .send-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 4vw;\r\n    padding: 1vw;\r\n    padding-left: 1.5vw;\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n.loadin-container[_ngcontent-%COMP%]{\r\n  height:80%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.sk-folding-cube[_ngcontent-%COMP%] {\r\n  margin: 20px auto;\r\n  width: 40px;\r\n  height: 40px;\r\n  position: relative;\r\n  transform: rotateZ(45deg);\r\n}\r\n\r\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 50%;\r\n  height: 50%;\r\n  position: relative;\r\n  transform: scale(1.1); \r\n}\r\n\r\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #7f00d3;\r\n  animation: sk-foldCubeAngle 2.4s infinite linear both;\r\n  transform-origin: 100% 100%;\r\n}\r\n\r\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%] {\r\n  transform: scale(1.1) rotateZ(90deg);\r\n}\r\n\r\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube3[_ngcontent-%COMP%] {\r\n  transform: scale(1.1) rotateZ(180deg);\r\n}\r\n\r\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube4[_ngcontent-%COMP%] {\r\n  transform: scale(1.1) rotateZ(270deg);\r\n}\r\n\r\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%]:before {\r\n  animation-delay: 0.3s;\r\n}\r\n\r\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube3[_ngcontent-%COMP%]:before {\r\n  animation-delay: 0.6s; \r\n}\r\n\r\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube4[_ngcontent-%COMP%]:before {\r\n  animation-delay: 0.9s;\r\n}\r\n\r\n@keyframes sk-foldCubeAngle {\r\n  0%, 10% {\r\n    transform: perspective(140px) rotateX(-180deg);\r\n    opacity: 0; \r\n  } 25%, 75% {\r\n    transform: perspective(140px) rotateX(0deg);\r\n    opacity: 1; \r\n  } 90%, 100% {\r\n    transform: perspective(140px) rotateY(180deg);\r\n    opacity: 0; \r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRzY3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QixvQkFBb0I7QUFDdEI7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUdBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFD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WTtJQUNaLG1CQUFtQjtFQUNyQjs7QUFFRjs7QUFZQSwwQ0FBMEM7O0FBQzFDO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBRVYseUJBQXlCO0FBQ25DOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBR1YscUJBQXFCO0FBQy9COztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBRWpCLHFEQUFxRDtFQUdyRCwyQkFBMkI7QUFDckM7O0FBQ0E7RUFFVSxvQ0FBb0M7QUFDOUM7O0FBQ0E7RUFFVSxxQ0FBcUM7QUFDL0M7O0FBQ0E7RUFFVSxxQ0FBcUM7QUFDL0M7O0FBQ0E7RUFFVSxxQkFBcUI7QUFDL0I7O0FBQ0E7RUFFVSxxQkFBcUI7QUFDL0I7O0FBQ0E7RUFFVSxxQkFBcUI7QUFDL0I7O0FBaUJBO0VBQ0U7SUFFVSw4Q0FBOEM7SUFDdEQsVUFBVTtFQUNaLEVBQUU7SUFFUSwyQ0FBMkM7SUFDbkQsVUFBVTtFQUNaLEVBQUU7SUFFUSw2Q0FBNkM7SUFDckQsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoiY2hhdHNjcmVlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTQlIDY0JSAyMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmhlYWQtbmFtZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSA3MCUgMjAlO1xyXG59XHJcblxyXG4uaGVhZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAwIDEuNXZ3O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMTEsIDIxMSwgMjExKTtcclxufVxyXG5cclxuLnBmcCB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNDMsIDI0MywgMjQzKTtcclxuICBib3JkZXItcmFkaXVzOiAzdnc7XHJcbn1cclxuXHJcbi5wZnAgaW1ne1xyXG4gIHdpZHRoOiA0LjV2d1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDJ2dztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaXJjbGUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDAuOXZ3O1xyXG4gIGhlaWdodDogMC45dnc7XHJcbiAgYmFja2dyb3VuZDogcmdiKDMsIDIxOCwgMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXZ3O1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjZ2dztcclxufVxyXG5cclxuLmljb25zLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaWNvbnMtY29udGFpbmVyIGltZyB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoNDAlKTtcclxuICBtYXJnaW4tcmlnaHQ6IDIuNXZ3O1xyXG4gIHdpZHRoOiAxLjR2d1xyXG59XHJcblxyXG4ubWFpbi1jaGF0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuLm1haW4tY29udGFpbmVyIHtcclxuICBtYXJnaW46IDAgMS41dnc7XHJcbiAgbWFyZ2luLXRvcDogMXZ3O1xyXG59XHJcblxyXG4ucmVjaWV2ZXItbXNnIHtcclxuICBwYWRkaW5nOiAwLjd2dztcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAwLjh2dztcclxuICBtYXgtd2lkdGg6IDQwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDE1MywgMCwgMjU1KTtcclxuICBib3JkZXItcmFkaXVzOiAxdncgMXZ3IDBweCAxdnc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC43dnc7XHJcbn1cclxuXHJcblxyXG4ucmVjaWV2ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuXHJcbi5zZW5kZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uc2VuZHtcclxuICBmbG9hdDogbGVmdDtcclxuICBjb2xvcjogcmdiKDIwLCAyMCwgMjApO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNDMsIDI0MywgMjQzKTtcclxuICBib3JkZXItcmFkaXVzOiAxdncgMXZ3IDF2dyAwdnc7XHJcbn1cclxuXHJcbi5yZXBseS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMXZ3O1xyXG59XHJcblxyXG4ucmVwbHkge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xyXG59XHJcblxyXG4ubWljLWljb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMC43dnc7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjd2dztcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjQzLCAyNDMsIDI0Myk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXZ3IDB2dyAwdncgNXZ3O1xyXG59XHJcblxyXG4ubWljLWljb24gaW1nIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMC4xdnc7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMzAlKTtcclxuICB3aWR0aDogMS4zdnc7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjQzLCAyNDMsIDI0Myk7XHJcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiA2MSU7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjN2dztcclxufVxyXG5cclxuLmF0dGFjaC1pY29uLC5jYW1lcmEtaWNvbiwuZW1vaml7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAwLjd2dztcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjQzLCAyNDMsIDI0Myk7XHJcbn1cclxuLmF0dGFjaC1pY29uIGltZywuY2FtZXJhLWljb24gaW1nLC5lbW9qaSBpbWcge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAwLjF2dztcclxuICBmaWx0ZXI6IGludmVydCgzMCUpO1xyXG4gIHdpZHRoOiAxLjN2dztcclxufVxyXG5cclxuXHJcbi5lbW9qaSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAwLjd2dztcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjQzLCAyNDMsIDI0Myk7XHJcbiAgcGFkZGluZy1yaWdodDogMy41dnc7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAxdncgMXZ3IDA7XHJcbn1cclxuXHJcbi5zZW5kLWJ0bntcclxuICAgIHBhZGRpbmc6IDAuNHZ3O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHJpZ2h0OiAyLjh2dztcclxuICAgIHdpZHRoOiAyLjF2dztcclxuICAgIGhlaWdodDogMi4xdnc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzk5MDBmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDV2dztcclxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG59XHJcblxyXG4uc2VuZC1idG46aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN2YwMGQzO1xyXG59XHJcblxyXG5cclxuLnNlbmQtYnRuIGltZ3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxLjN2dztcclxuICAgIHBhZGRpbmc6IDAuMXZ3O1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXZ3O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxNXB4KXtcclxuXHJcbiAgLmNoYXQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSA4MSUgOSU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuXHJcbiAgLmhlYWQtY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiAwIDEzdnc7XHJcbiAgfVxyXG5cclxuICAucGZwIGltZ3tcclxuICAgIHdpZHRoOiAxMHZ3O1xyXG4gIH1cclxuXHJcbiAgLnBmcHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZ2dztcclxuICB9XHJcblxyXG4gIC5uYW1le1xyXG4gICAgZm9udC1zaXplOjV2d1xyXG4gIH1cclxuXHJcbiAgLmhlYWQtbmFtZXtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDU3JSAyMiU7XHJcbiAgfVxyXG5cclxuICAuY2lyY2xlIHtcclxuICAgIHdpZHRoOiAydnc7XHJcbiAgICBoZWlnaHQ6IDJ2dztcclxuICB9XHJcblxyXG4gIC5pY29ucy1jb250YWluZXIgaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogMi41dnc7XHJcbiAgICB3aWR0aDogMi44dndcclxuICB9XHJcblxyXG4gIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgNHZ3O1xyXG4gICAgbWFyZ2luLXRvcDogNHZ3O1xyXG4gIH1cclxuXHJcbiAgLnJlY2lldmVyLW1zZyB7XHJcbiAgICBwYWRkaW5nOiAxLjN2dztcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMy42dnc7XHJcbiAgICBtYXgtd2lkdGg6IDU1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDN2dztcclxuICB9XHJcblxyXG4gIC5zZW5ke1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogcmdiKDIwLCAyMCwgMjApO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0MywgMjQzLCAyNDMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXZ3IDF2dyAxdncgMHZ3O1xyXG4gIH1cclxuICAucmVwbHktY29udGFpbmVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDp1bnNldDtcclxuICAgIG1hcmdpbjowIDZ2dztcclxuICAgIG1hcmdpbi10b3A6IDJ2dztcclxuICB9XHJcblxyXG4gIC5taWMtaWNvbiwuYXR0YWNoLWljb24sLmNhbWVyYS1pY29uLC5lbW9qaXtcclxuICAgIHBhZGRpbmc6Mi41dndcclxuICB9XHJcblxyXG4gIC5lbW9qaXtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDZ2dztcclxuICB9XHJcblxyXG4gIC5taWMtaWNvbiBpbWcsLmF0dGFjaC1pY29uIGltZywuY2FtZXJhLWljb24gaW1nLC5lbW9qaSBpbWd7XHJcbiAgICB3aWR0aDogNnZ3O1xyXG4gIH1cclxuXHJcbiAgLm1lc3NhZ2Uge1xyXG4gICAgd2lkdGg6MzUlXHJcbiAgfVxyXG4gIC5zZW5kLWJ0bntcclxuICAgIHdpZHRoOiA4dnc7XHJcbiAgICBoZWlnaHQ6IDh2dztcclxuICAgIHBhZGRpbmc6IDJ2dztcclxuICAgIHJpZ2h0OiAyLjh2dztcclxuICAgIGJvcmRlci1yYWRpdXM6IDh2dztcclxuICB9XHJcblxyXG4gIC5zZW5kLWJ0biBpbWd7XHJcbiAgICB3aWR0aDogNHZ3O1xyXG4gICAgcGFkZGluZzogMXZ3O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAydnc7XHJcbiAgfVxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KXtcclxuXHJcbiAgLmNoYXQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSA4MSUgOSU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuXHJcbiAgLmhlYWQtY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiAwIDEzdnc7XHJcbiAgfVxyXG5cclxuICAucGZwIGltZ3tcclxuICAgIHdpZHRoOiAxMHZ3O1xyXG4gIH1cclxuXHJcbiAgLnBmcHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZ2dztcclxuICB9XHJcblxyXG4gIC5uYW1le1xyXG4gICAgZm9udC1zaXplOjV2d1xyXG4gIH1cclxuXHJcbiAgLmhlYWQtbmFtZXtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDU3JSAyMiU7XHJcbiAgfVxyXG5cclxuICAuY2lyY2xlIHtcclxuICAgIHdpZHRoOiAydnc7XHJcbiAgICBoZWlnaHQ6IDJ2dztcclxuICB9XHJcblxyXG4gIC5pY29ucy1jb250YWluZXIgaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogMi41dnc7XHJcbiAgICB3aWR0aDogMi44dndcclxuICB9XHJcblxyXG4gIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgNHZ3O1xyXG4gICAgbWFyZ2luLXRvcDogNHZ3O1xyXG4gIH1cclxuXHJcbiAgLnJlY2lldmVyLW1zZyB7XHJcbiAgICBwYWRkaW5nOiAxLjN2dztcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMy42dnc7XHJcbiAgICBtYXgtd2lkdGg6IDU1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDN2dztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJ2dyAydncgMHZ3IDJ2dztcclxuICB9XHJcblxyXG4gIC5zZW5ke1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogcmdiKDIwLCAyMCwgMjApO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0MywgMjQzLCAyNDMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnZ3IDJ2dyAydncgMHZ3O1xyXG4gIH1cclxuICAucmVwbHktY29udGFpbmVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDp1bnNldDtcclxuICAgIG1hcmdpbjowIDZ2dztcclxuICAgIG1hcmdpbi10b3A6IDJ2dztcclxuICB9XHJcblxyXG4gIC5taWMtaWNvbiwuYXR0YWNoLWljb24sLmNhbWVyYS1pY29uLC5lbW9qaXtcclxuICAgIHBhZGRpbmc6MnZ3XHJcbiAgfVxyXG5cclxuICAuZW1vaml7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4dnc7XHJcbiAgfVxyXG5cclxuICAubWljLWljb24gaW1nLC5hdHRhY2gtaWNvbiBpbWcsLmNhbWVyYS1pY29uIGltZywuZW1vamkgaW1ne1xyXG4gICAgd2lkdGg6IDR2dztcclxuICB9XHJcblxyXG4gIC5tZXNzYWdlIHtcclxuICAgIHdpZHRoOjYwJVxyXG4gIH1cclxuICAuc2VuZC1idG57XHJcbiAgICB3aWR0aDogNnZ3O1xyXG4gICAgaGVpZ2h0OiA2dnc7XHJcbiAgICBwYWRkaW5nOiAxdnc7XHJcbiAgICByaWdodDogNnZ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHZ3O1xyXG4gIH1cclxuXHJcbiAgLnNlbmQtYnRuIGltZ3tcclxuICAgIHdpZHRoOiA0dnc7XHJcbiAgICBwYWRkaW5nOiAxdnc7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXZ3O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiAvLy8vLy8vLy8vLy9sb2FkaW4vLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcbi5sb2FkaW4tY29udGFpbmVye1xyXG4gIGhlaWdodDo4MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLnNrLWZvbGRpbmctY3ViZSB7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWig0NWRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xyXG59XHJcblxyXG4uc2stZm9sZGluZy1jdWJlIC5zay1jdWJlIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgXHJcbn1cclxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmMDBkMztcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc2stZm9sZEN1YmVBbmdsZSAyLjRzIGluZmluaXRlIGxpbmVhciBib3RoO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBzay1mb2xkQ3ViZUFuZ2xlIDIuNHMgaW5maW5pdGUgbGluZWFyIGJvdGg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XHJcbn1cclxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZTIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZVooOTBkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZVooOTBkZWcpO1xyXG59XHJcbi5zay1mb2xkaW5nLWN1YmUgLnNrLWN1YmUzIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGVaKDE4MGRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlWigxODBkZWcpO1xyXG59XHJcbi5zay1mb2xkaW5nLWN1YmUgLnNrLWN1YmU0IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGVaKDI3MGRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlWigyNzBkZWcpO1xyXG59XHJcbi5zay1mb2xkaW5nLWN1YmUgLnNrLWN1YmUyOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbn1cclxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZTM6YmVmb3JlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC42czsgXHJcbn1cclxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZTQ6YmVmb3JlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC45cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC45cztcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stZm9sZEN1YmVBbmdsZSB7XHJcbiAgMCUsIDEwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoLTE4MGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoLTE4MGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwOyBcclxuICB9IDI1JSwgNzUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgwZGVnKTtcclxuICAgIG9wYWNpdHk6IDE7IFxyXG4gIH0gOTAlLCAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWSgxODBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwOyBcclxuICB9IFxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNrLWZvbGRDdWJlQW5nbGUge1xyXG4gIDAlLCAxMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKC0xODBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKC0xODBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDsgXHJcbiAgfSAyNSUsIDc1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxOyBcclxuICB9IDkwJSwgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWSgxODBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDsgXHJcbiAgfVxyXG59Il19 */"] });


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
    } }, styles: [".chat-container[_ngcontent-%COMP%]{\r\n    display:grid;\r\n    grid-template-rows: 20% 5% 75%;\r\n    height:100vh;\r\n    background:#f9f9f9;\r\n}\r\n\r\n.profile[_ngcontent-%COMP%]{\r\n    display:grid;\r\n    grid-template-columns: 28% 57% 15%;;\r\n    width: 100%;\r\n}\r\n\r\n.searchbar[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    border-radius: 0 1vw 1vw 0;\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n.searchbar[_ngcontent-%COMP%]{\r\n    margin: 0 1vw;\r\n    display:grid;\r\n    grid-template-columns: 10% 90%;\r\n}\r\n\r\n.search-btn[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: white;\r\n    border-radius: 1vw 0px 0px 1vw;\r\n}\r\n\r\n.search-icon[_ngcontent-%COMP%]{\r\n    width: 1vw;\r\n    display: flex;\r\n    position: relative;\r\n    text-align: center;\r\n    align-content: center;\r\n    cursor: pointer;\r\n    padding: 0.6vw;\r\n    filter: invert(0.5);\r\n}\r\n\r\n.profile-container[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    align-items: center;\r\n    margin: 0 1vw;\r\n}\r\n\r\n.profile-pic[_ngcontent-%COMP%]{\r\n    width: 5vw;\r\n    height: 5vw;\r\n    background: rgb(255, 255, 255);\r\n    border-radius: 3vw;\r\n    text-align: center;\r\n    align-content: center;\r\n}\r\n\r\n.profile-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width:5vw;\r\n}\r\n\r\n.detail-container[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    align-items: center;\r\n}\r\n\r\n.profile-name[_ngcontent-%COMP%]{\r\n    font-size: 1.4vw;\r\n    font-weight: 700;\r\n    color: rgb(153, 0, 255);\r\n}\r\n\r\n.profile-profession[_ngcontent-%COMP%]{\r\n    font-size: 1.15vw;\r\n    color:rgb(77, 77, 77)\r\n}\r\n\r\n.edit-icon[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n\r\n.edit-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    width:0.8vw;\r\n    margin: 0 auto;\r\n}\r\n\r\n.list[_ngcontent-%COMP%]{\r\n    height:4vw;\r\n    width:4vw;\r\n}\r\n\r\n.contact-container[_ngcontent-%COMP%]{\r\n    display:grid;\r\n    grid-template-columns: 25% 75%;\r\n    margin-bottom: 1vw;\r\n    cursor: pointer;\r\n}\r\n\r\n.chat-list[_ngcontent-%COMP%]{\r\n    margin:0 1vw;\r\n    margin-top:1.2vw;\r\n    overflow-x: scroll;\r\n}\r\n\r\n.main-info[_ngcontent-%COMP%], .chat-snap[_ngcontent-%COMP%]{\r\n    display:grid;\r\n    grid-template-columns:70% 30%\r\n}\r\n\r\n.main-info[_ngcontent-%COMP%]{\r\n    font-size: 0.9vw;\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]{\r\n    font-size: calc(2px + 0.6vw);\r\n    color: rgb(77, 77, 77);\r\n    display:-webkit-box;\r\n    -webkit-line-clamp: 2;\r\n    -webkit-box-orient: vertical;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.chat-stats-container[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    margin: 0 auto;\r\n    margin-left:60%\r\n}\r\n\r\n.stats[_ngcontent-%COMP%]{\r\n    padding: 0.3vw;\r\n    font-size: 0.7vw;\r\n    display:flex;\r\n    width:0.5vw;\r\n    height:0.5vw;\r\n    justify-content: center;\r\n    border-radius:1vw;\r\n    color: white;\r\n    align-items: center;\r\n    background:rgb(153, 0, 255)\r\n}\r\n\r\n.chat-snap[_ngcontent-%COMP%]{\r\n    margin-top:0.1vw\r\n}\r\n\r\n.name[_ngcontent-%COMP%]{\r\n    color:rgb(153, 0, 255);\r\n    font-weight:500\r\n}\r\n\r\n.tick[_ngcontent-%COMP%]{\r\n    width:12px;\r\n    filter:invert(30%) sepia(80) saturate(14) hue-rotate(237deg)\r\n}\r\n\r\n@media only screen and (max-width:415px){\r\n    .chat-container[_ngcontent-%COMP%]{\r\n        display:grid;\r\n        grid-template-rows: 20% 5% 75%;\r\n        height:100vh;\r\n        background:#f1f1f1;\r\n    }\r\n\r\n    .searchbar[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%]{\r\n            width:98%;\r\n            border-radius: 0 18vw 18vw 0;\r\n    }\r\n\r\n    .searchbar[_ngcontent-%COMP%]{\r\n        margin: 0 3vw;\r\n        display:grid;\r\n        grid-template-columns:14% 86%;\r\n    }\r\n\r\n    .search-btn[_ngcontent-%COMP%]{\r\n        display:flex;\r\n        width: 100%;\r\n        text-align: center;\r\n        background-color: white;\r\n        border-radius: 18vw 0px 0px 18vw;\r\n    }\r\n    \r\n    .search-icon[_ngcontent-%COMP%]{\r\n        width: 3vw;\r\n        display: flex;\r\n        position: relative;\r\n        text-align: center;\r\n        align-content: center;\r\n        cursor: pointer;\r\n        padding: 1vw;\r\n        padding-left: 2vw !important;\r\n        filter: invert(0.5);\r\n    }\r\n\r\n\r\n    .profile-container[_ngcontent-%COMP%]{\r\n        margin: 0 3vw;\r\n    }\r\n\r\n\r\n    .profile-pic[_ngcontent-%COMP%]{\r\n        width: 12vw;\r\n        height: 12vw;\r\n        border-radius: 10vw;\r\n    }\r\n\r\n    .profile-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 12vw !important;\r\n    }\r\n    .list[_ngcontent-%COMP%]{\r\n        width: 10vw;\r\n        height: 10vw;\r\n    }\r\n\r\n    .list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 10vw !important;\r\n    }\r\n\r\n    .profile-profession[_ngcontent-%COMP%]{\r\n        font-size: 3.5vw;\r\n    }\r\n\r\n\r\n    .profile-name[_ngcontent-%COMP%]{\r\n        font-size: 3.4vw;\r\n        font-weight: 700;\r\n        color: rgb(153, 0, 255);\r\n    }\r\n\r\n    .chat-list[_ngcontent-%COMP%]{\r\n        margin: 0 2vw;\r\n        margin-top: 5vw !important;\r\n    }\r\n\r\n    .chat[_ngcontent-%COMP%]{\r\n        font-size: 2.5vw;\r\n    }\r\n\r\n    .main-info[_ngcontent-%COMP%]{\r\n        font-size:2.6vw\r\n    }\r\n\r\n    .chat-snap[_ngcontent-%COMP%]{\r\n        margin-top: 0.4vw;\r\n    }\r\n    .contact-container[_ngcontent-%COMP%]{\r\n        margin-bottom: 4vw;\r\n    }\r\n\r\n    .stats[_ngcontent-%COMP%]{\r\n        padding: 1.5vw;\r\n        font-size: 2vw;\r\n        border-radius:3vw;\r\n    }\r\n\r\n    .edit-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width:2.5vw;\r\n    }\r\n\r\n\r\n    \r\n}\r\n\r\n@media only screen and (max-width:1024px){\r\n    .chat-container[_ngcontent-%COMP%]{\r\n        display:grid;\r\n        grid-template-rows: 20% 5% 75%;\r\n        height:100vh;\r\n        background:#f1f1f1;\r\n    }\r\n\r\n    .searchbar[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%]{\r\n            width:98%;\r\n            border-radius: 0 18vw 18vw 0;\r\n    }\r\n\r\n    .searchbar[_ngcontent-%COMP%]{\r\n        margin: 0 3vw;\r\n        display:grid;\r\n        grid-template-columns:14% 86%;\r\n    }\r\n\r\n    .search-btn[_ngcontent-%COMP%]{\r\n        display:flex;\r\n        width: 100%;\r\n        text-align: center;\r\n        background-color: white;\r\n        border-radius: 18vw 0px 0px 18vw;\r\n    }\r\n    \r\n    .search-icon[_ngcontent-%COMP%]{\r\n        width: 3vw;\r\n        display: flex;\r\n        position: relative;\r\n        text-align: center;\r\n        align-content: center;\r\n        cursor: pointer;\r\n        padding: 1vw;\r\n        filter: invert(0.5);\r\n    }\r\n\r\n\r\n    .profile-container[_ngcontent-%COMP%]{\r\n        margin: 0 3vw;\r\n    }\r\n\r\n\r\n    .profile-pic[_ngcontent-%COMP%]{\r\n        width: 12vw;\r\n        height: 12vw;\r\n        border-radius: 10vw;\r\n    }\r\n\r\n    .profile-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 12vw !important;\r\n    }\r\n    .list[_ngcontent-%COMP%]{\r\n        width: 10vw;\r\n        height: 10vw;\r\n    }\r\n\r\n    .list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 10vw !important;\r\n    }\r\n\r\n    .profile-profession[_ngcontent-%COMP%]{\r\n        font-size: 3.5vw;\r\n    }\r\n\r\n\r\n    .profile-name[_ngcontent-%COMP%]{\r\n        font-size: 3.4vw;\r\n        font-weight: 700;\r\n        color: rgb(153, 0, 255);\r\n    }\r\n\r\n    .chat-list[_ngcontent-%COMP%]{\r\n        margin: 0 2vw;\r\n        margin-top: 3vw;\r\n    }\r\n\r\n    .chat[_ngcontent-%COMP%]{\r\n        font-size: 2.5vw;\r\n    }\r\n\r\n    .main-info[_ngcontent-%COMP%]{\r\n        font-size:2.6vw\r\n    }\r\n\r\n    .chat-snap[_ngcontent-%COMP%]{\r\n        margin-top: 0.4vw;\r\n    }\r\n    .contact-container[_ngcontent-%COMP%]{\r\n        margin-bottom: 4vw;\r\n    }\r\n\r\n    .stats[_ngcontent-%COMP%]{\r\n        padding: 1.5vw;\r\n        font-size: 2vw;\r\n        border-radius:3vw;\r\n    }\r\n\r\n    .edit-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width:2.5vw;\r\n    }\r\n\r\n\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtC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LGNBQWM7UUFDZCxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7Ozs7QUFJSjs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUdHIiwiZmlsZSI6ImNoYXRsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA1JSA3NSU7XHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiNmOWY5Zjk7XHJcbn1cclxuXHJcbi5wcm9maWxle1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOCUgNTclIDE1JTs7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNlYXJjaGJhciBpbnB1dFt0eXBlPSd0ZXh0J117XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMXZ3IDF2dyAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuXHJcbi5zZWFyY2hiYXJ7XHJcbiAgICBtYXJnaW46IDAgMXZ3O1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgOTAlO1xyXG59XHJcblxyXG4uc2VhcmNoLWJ0bntcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxdncgMHB4IDBweCAxdnc7XHJcbn1cclxuXHJcbi5zZWFyY2gtaWNvbntcclxuICAgIHdpZHRoOiAxdnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMC42dnc7XHJcbiAgICBmaWx0ZXI6IGludmVydCgwLjUpO1xyXG59XHJcblxyXG4ucHJvZmlsZS1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIDF2dztcclxufVxyXG5cclxuLnByb2ZpbGUtcGlje1xyXG4gICAgd2lkdGg6IDV2dztcclxuICAgIGhlaWdodDogNXZ3O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3Z3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvZmlsZS1waWMgaW1ne1xyXG4gICAgd2lkdGg6NXZ3O1xyXG59XHJcblxyXG4uZGV0YWlsLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9maWxlLW5hbWV7XHJcbiAgICBmb250LXNpemU6IDEuNHZ3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiByZ2IoMTUzLCAwLCAyNTUpO1xyXG59XHJcblxyXG4ucHJvZmlsZS1wcm9mZXNzaW9ue1xyXG4gICAgZm9udC1zaXplOiAxLjE1dnc7XHJcbiAgICBjb2xvcjpyZ2IoNzcsIDc3LCA3NylcclxufVxyXG5cclxuLmVkaXQtaWNvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5lZGl0LWljb24gaW1ne1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6MC44dnc7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmxpc3R7XHJcbiAgICBoZWlnaHQ6NHZ3O1xyXG4gICAgd2lkdGg6NHZ3O1xyXG59XHJcblxyXG4uY29udGFjdC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSA3NSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxdnc7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jaGF0LWxpc3R7XHJcbiAgICBtYXJnaW46MCAxdnc7XHJcbiAgICBtYXJnaW4tdG9wOjEuMnZ3O1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG59XHJcblxyXG4ubWFpbi1pbmZvLC5jaGF0LXNuYXB7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6NzAlIDMwJVxyXG59XHJcblxyXG4ubWFpbi1pbmZve1xyXG4gICAgZm9udC1zaXplOiAwLjl2dztcclxufVxyXG5cclxuLmNoYXR7XHJcbiAgICBmb250LXNpemU6IGNhbGMoMnB4ICsgMC42dncpO1xyXG4gICAgY29sb3I6IHJnYig3NywgNzcsIDc3KTtcclxuICAgIGRpc3BsYXk6LXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG5cclxuLmNoYXQtc3RhdHMtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDo2MCVcclxufVxyXG5cclxuLnN0YXRze1xyXG4gICAgcGFkZGluZzogMC4zdnc7XHJcbiAgICBmb250LXNpemU6IDAuN3Z3O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgd2lkdGg6MC41dnc7XHJcbiAgICBoZWlnaHQ6MC41dnc7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6MXZ3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6cmdiKDE1MywgMCwgMjU1KVxyXG59XHJcblxyXG4uY2hhdC1zbmFwe1xyXG4gICAgbWFyZ2luLXRvcDowLjF2d1xyXG59XHJcblxyXG4ubmFtZXtcclxuICAgIGNvbG9yOnJnYigxNTMsIDAsIDI1NSk7XHJcbiAgICBmb250LXdlaWdodDo1MDBcclxufVxyXG5cclxuLnRpY2t7XHJcbiAgICB3aWR0aDoxMnB4O1xyXG4gICAgZmlsdGVyOmludmVydCgzMCUpIHNlcGlhKDgwKSBzYXR1cmF0ZSgxNCkgaHVlLXJvdGF0ZSgyMzdkZWcpXHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxNXB4KXtcclxuICAgIC5jaGF0LWNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgNSUgNzUlO1xyXG4gICAgICAgIGhlaWdodDoxMDB2aDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiNmMWYxZjE7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaGJhciBpbnB1dFt0eXBlPSd0ZXh0J117XHJcbiAgICAgICAgICAgIHdpZHRoOjk4JTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxOHZ3IDE4dncgMDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoYmFye1xyXG4gICAgICAgIG1hcmdpbjogMCAzdnc7XHJcbiAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxNCUgODYlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYnRue1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTh2dyAwcHggMHB4IDE4dnc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZWFyY2gtaWNvbntcclxuICAgICAgICB3aWR0aDogM3Z3O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDF2dztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJ2dyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDAuNSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5wcm9maWxlLWNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW46IDAgM3Z3O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAucHJvZmlsZS1waWN7XHJcbiAgICAgICAgd2lkdGg6IDEydnc7XHJcbiAgICAgICAgaGVpZ2h0OiAxMnZ3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwdnc7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtcGljIGltZ3tcclxuICAgICAgICB3aWR0aDogMTJ2dyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmxpc3R7XHJcbiAgICAgICAgd2lkdGg6IDEwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5saXN0IGltZ3tcclxuICAgICAgICB3aWR0aDogMTB2dyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLXByb2Zlc3Npb257XHJcbiAgICAgICAgZm9udC1zaXplOiAzLjV2dztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLnByb2ZpbGUtbmFtZXtcclxuICAgICAgICBmb250LXNpemU6IDMuNHZ3O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6IHJnYigxNTMsIDAsIDI1NSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYXQtbGlzdHtcclxuICAgICAgICBtYXJnaW46IDAgMnZ3O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDV2dyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGF0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4taW5mb3tcclxuICAgICAgICBmb250LXNpemU6Mi42dndcclxuICAgIH1cclxuXHJcbiAgICAuY2hhdC1zbmFwe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuNHZ3O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QtY29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDR2dztcclxuICAgIH1cclxuXHJcbiAgICAuc3RhdHN7XHJcbiAgICAgICAgcGFkZGluZzogMS41dnc7XHJcbiAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czozdnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXQtaWNvbiBpbWd7XHJcbiAgICAgICAgd2lkdGg6Mi41dnc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpe1xyXG4gICAgLmNoYXQtY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA1JSA3NSU7XHJcbiAgICAgICAgaGVpZ2h0OjEwMHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2YxZjFmMTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoYmFyIGlucHV0W3R5cGU9J3RleHQnXXtcclxuICAgICAgICAgICAgd2lkdGg6OTglO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDE4dncgMTh2dyAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2hiYXJ7XHJcbiAgICAgICAgbWFyZ2luOiAwIDN2dztcclxuICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjE0JSA4NiU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1idG57XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxOHZ3IDBweCAwcHggMTh2dztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlYXJjaC1pY29ue1xyXG4gICAgICAgIHdpZHRoOiAzdnc7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMXZ3O1xyXG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDAuNSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5wcm9maWxlLWNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW46IDAgM3Z3O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAucHJvZmlsZS1waWN7XHJcbiAgICAgICAgd2lkdGg6IDEydnc7XHJcbiAgICAgICAgaGVpZ2h0OiAxMnZ3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwdnc7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtcGljIGltZ3tcclxuICAgICAgICB3aWR0aDogMTJ2dyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmxpc3R7XHJcbiAgICAgICAgd2lkdGg6IDEwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5saXN0IGltZ3tcclxuICAgICAgICB3aWR0aDogMTB2dyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLXByb2Zlc3Npb257XHJcbiAgICAgICAgZm9udC1zaXplOiAzLjV2dztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLnByb2ZpbGUtbmFtZXtcclxuICAgICAgICBmb250LXNpemU6IDMuNHZ3O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6IHJnYigxNTMsIDAsIDI1NSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYXQtbGlzdHtcclxuICAgICAgICBtYXJnaW46IDAgMnZ3O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDN2dztcclxuICAgIH1cclxuXHJcbiAgICAuY2hhdHtcclxuICAgICAgICBmb250LXNpemU6IDIuNXZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluLWluZm97XHJcbiAgICAgICAgZm9udC1zaXplOjIuNnZ3XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYXQtc25hcHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjR2dztcclxuICAgIH1cclxuICAgIC5jb250YWN0LWNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXRze1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNXZ3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6M3Z3O1xyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0LWljb24gaW1ne1xyXG4gICAgICAgIHdpZHRoOjIuNXZ3O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBcclxufVxyXG5cclxuXHJcbi8qIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNzVweCl7XHJcbiAgICAuY2hhdC1jb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDUlIDc1JTtcclxuICAgICAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICAgICAgYmFja2dyb3VuZDojZjFmMWYxO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2hiYXIgaW5wdXRbdHlwZT0ndGV4dCdde1xyXG4gICAgICAgICAgICB3aWR0aDo5OCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMTh2dyAxOHZ3IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaGJhcntcclxuICAgICAgICBtYXJnaW46IDAgM3Z3O1xyXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MTQlIDg2JTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWJ0bntcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE4dncgMHB4IDBweCAxOHZ3O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2VhcmNoLWljb257XHJcbiAgICAgICAgd2lkdGg6IDN2dztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxdnc7XHJcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoMC41KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLnByb2ZpbGUtY29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbjogMCAzdnc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5wcm9maWxlLXBpY3tcclxuICAgICAgICB3aWR0aDogMTJ2dztcclxuICAgICAgICBoZWlnaHQ6IDEydnc7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTB2dztcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1waWMgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMnZ3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubGlzdHtcclxuICAgICAgICB3aWR0aDogMTB2dztcclxuICAgICAgICBoZWlnaHQ6IDEwdnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3QgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMHZ3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtcHJvZmVzc2lvbntcclxuICAgICAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAucHJvZmlsZS1uYW1le1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMy40dnc7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjb2xvcjogcmdiKDE1MywgMCwgMjU1KTtcclxuICAgIH1cclxuXHJcbiAgICAuY2hhdC1saXN0e1xyXG4gICAgICAgIG1hcmdpbjogMCAydnc7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM3Z3O1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGF0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4taW5mb3tcclxuICAgICAgICBmb250LXNpemU6Mi42dndcclxuICAgIH1cclxuXHJcbiAgICAuY2hhdC1zbmFwe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuNHZ3O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QtY29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDR2dztcclxuICAgIH1cclxuXHJcbiAgICAuc3RhdHN7XHJcbiAgICAgICAgcGFkZGluZzogMS41dnc7XHJcbiAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czozdnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXQtaWNvbiBpbWd7XHJcbiAgICAgICAgd2lkdGg6Mi41dnc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG59ICovXHJcbiJdfQ== */"] });


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _chatscreen_chatscreen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chatscreen/chatscreen.component */ "VVaz");
/* harmony import */ var _chatlist_chatlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chatlist/chatlist.component */ "VyOk");
/* harmony import */ var _profileview_profileview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profileview/profileview.component */ "ow0Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _chatscreen_chatscreen_component__WEBPACK_IMPORTED_MODULE_3__["ChatscreenComponent"],
        _chatlist_chatlist_component__WEBPACK_IMPORTED_MODULE_4__["ChatlistComponent"],
        _profileview_profileview_component__WEBPACK_IMPORTED_MODULE_5__["ProfileviewComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
    } }, styles: [".profile-container[_ngcontent-%COMP%]{\r\n    display:grid;\r\n    grid-template-rows: 48% 10% 42%;\r\n    height:100vh;\r\n    background:#f9f9f9;\r\n}\r\n\r\n\r\n.searchbar[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    border-radius: 0 1vw 1vw 0;\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n\r\n.close-icon[_ngcontent-%COMP%]{\r\n    display:none;\r\n}\r\n\r\n\r\n.searchbar[_ngcontent-%COMP%]{\r\n    margin: 0 1vw;\r\n    display:grid;\r\n    grid-template-columns: 10% 90%;\r\n}\r\n\r\n\r\n.search-btn[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: white;\r\n    border-radius: 1vw 0px 0px 1vw;\r\n}\r\n\r\n\r\n.search-icon[_ngcontent-%COMP%]{\r\n    width: 1vw;\r\n    display: flex;\r\n    position: relative;\r\n    text-align: center;\r\n    align-content: center;\r\n    cursor: pointer;\r\n    padding: 0.6vw;\r\n    filter: invert(0.5);\r\n}\r\n\r\n\r\n.searchbar[_ngcontent-%COMP%]{\r\n    margin: 0 1vw;\r\n    margin-top: 1.5vw;\r\n    display: grid;\r\n    grid-template-columns: 10% 90%;\r\n}\r\n\r\n\r\n.pfp[_ngcontent-%COMP%]{\r\n    margin-top: 1vw;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.pfp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 8vw;\r\n    background: white;\r\n    border-radius: 98px;\r\n}\r\n\r\n\r\n.name[_ngcontent-%COMP%]{\r\n    font-size: 1.4vw;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.profession[_ngcontent-%COMP%]{\r\n    font-size: 1vw;\r\n    text-align: center;\r\n    color: #404040;\r\n}\r\n\r\n\r\n.fav-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .friend-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 1vw;\r\n}\r\n\r\n\r\n.action[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 28px;\r\n}\r\n\r\n\r\n.icon[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    justify-content:center;\r\n    padding: 1.4vw;\r\n    filter: invert(68%) sepia(100%) saturate(143) hue-rotate(277deg);\r\n}\r\n\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    margin-top: 1vw;\r\n    width: 5vw;\r\n    height: 5vw;\r\n    display: flex;\r\n    justify-content: center;\r\n    background: #f3e0ff;\r\n    border: 1px solid #e8c6ff;\r\n    border-radius: 5vw;\r\n    transition:all 0.5s ease-in-out;\r\n}\r\n\r\n\r\n.container[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n    background: #e7c1ff;\r\n}\r\n\r\n\r\n.file-container[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    width: 100%;\r\n    justify-content:center;\r\n    gap: 1vw;\r\n}\r\n\r\n\r\n.options[_ngcontent-%COMP%]{\r\n    color:#404040;\r\n    font-size: 0.76vw;\r\n    margin-top: 0.8vw;\r\n}\r\n\r\n\r\n.thumb[_ngcontent-%COMP%]{\r\n    font-size:0.7vw;\r\n    display:flex;\r\n    text-align: center;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 1.2vw;\r\n    height:1vw;\r\n    width:1vw;\r\n    border-radius:0.5vw;\r\n    background-color: #e7c1ff;\r\n    border: 0px;\r\n    border: 2px solid #e2b3ff;\r\n    transition: all 0.5s ease\r\n}\r\n\r\n\r\n.thumb[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n    border: 2px solid #9900ff;\r\n    background-color: #dfacff;\r\n}\r\n\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    background: none;\r\n    border: 0.1vw solid #9900ff;\r\n    color: #9900ff;\r\n    padding: 0.5vw;\r\n    font-size: 0.9vw;\r\n    width: 28%;\r\n    border-radius: 2vw;\r\n    transition: all 0.5s ease-in-out;\r\n}\r\n\r\n\r\n.btn[_ngcontent-%COMP%]:hover{\r\n    background:#9900ff;\r\n    color:white\r\n}\r\n\r\n\r\n.view-btn[_ngcontent-%COMP%]{\r\n    margin-top: 1.5vw;\r\n    display:flex;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.attach-title[_ngcontent-%COMP%]{\r\n    margin: 0 2vw;\r\n    font-size: 1.1vw;\r\n    margin-bottom: 15px;\r\n    margin-top: 30px;\r\n}\r\n\r\n\r\n.fav[_ngcontent-%COMP%], .viewfriends[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin: 0 2vw;\r\n    align-items: center;\r\n    align-content: center;\r\n    margin-bottom: 1vw;\r\n    gap: 1vw;\r\n}\r\n\r\n\r\n.fav-icon[_ngcontent-%COMP%], .friend-icon[_ngcontent-%COMP%]{\r\n    display:flex;\r\n}\r\n\r\n\r\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 1vw;\r\n    text-align: center;\r\n}\r\n\r\n\r\n@media only screen and (max-width:414px){\r\n    .close-icon[_ngcontent-%COMP%]{\r\n        display:block;\r\n        position: fixed;\r\n        right: 0;\r\n        margin: 20px;\r\n    }\r\n\r\n    .file-container[_ngcontent-%COMP%]{\r\n    gap: 2vw;\r\n    }\r\n\r\n    .close-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width:4.5vw;\r\n        filter: invert(30%)\r\n    }\r\n        \r\n    .searchbar[_ngcontent-%COMP%]{\r\n        margin: 0 5vw;\r\n        margin-top: 14vw;\r\n    }\r\n\r\n    .searchbar[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        border-radius: 0 4vw 4vw 0;\r\n        height: 10vw\r\n    }\r\n\r\n    .search-btn[_ngcontent-%COMP%]{\r\n        border-radius: 4vw 0px 0px 4vw;\r\n    }\r\n\r\n    .search-icon[_ngcontent-%COMP%]{\r\n        width: 4vw;\r\n        padding-left: 2.2vw;\r\n    }\r\n\r\n\r\n    .pfp[_ngcontent-%COMP%]{\r\n        margin-top: 5vw;\r\n    }\r\n\r\n    .pfp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width:30vw\r\n    }\r\n\r\n    .name[_ngcontent-%COMP%]{\r\n        margin-top: 2vw;\r\n        font-size: 6vw;\r\n    }\r\n    \r\n    .profession[_ngcontent-%COMP%]{\r\n        font-size: 4vw;\r\n    }\r\n\r\n    .fav[_ngcontent-%COMP%], .viewfriends[_ngcontent-%COMP%]{\r\n        gap: 4vw;\r\n    }\r\n\r\n    .fav-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .friend-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 4vw;\r\n    }\r\n\r\n    .container[_ngcontent-%COMP%]{\r\n        margin-top: 5vw;\r\n        width: 20vw;\r\n        height: 20vw;\r\n        border-radius:10vw;\r\n    }\r\n    .icon[_ngcontent-%COMP%]{\r\n        display:flex;\r\n        justify-content:center;\r\n        padding: 4vw;\r\n    }\r\n\r\n    .options[_ngcontent-%COMP%]{\r\n        font-size: 4vw;\r\n        margin: 0 5vw;\r\n        color:#404040;\r\n        margin-top: 11vw;  \r\n    }\r\n    \r\n    .thumb[_ngcontent-%COMP%]{\r\n        height:24vw;\r\n        width:18vw;\r\n        font-size: 3vw;\r\n    }\r\n\r\n    .file-container[_ngcontent-%COMP%]{\r\n        margin-top: 2vw;\r\n    }\r\n\r\n    .attach-title[_ngcontent-%COMP%]{\r\n        margin: 0 5vw;\r\n        margin-top: 8vw;\r\n        font-size: 5vw;\r\n    }\r\n\r\n    .btn[_ngcontent-%COMP%]{\r\n        margin-top: 4vw;\r\n        font-size: 4vw;\r\n        padding: 1.2vw;\r\n        border-radius:5vw;\r\n    }\r\n\r\n    .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 4vw;\r\n        color:#404040;\r\n    }\r\n}\r\n\r\n\r\n@media only screen and (max-width:1024px){\r\n    .close-icon[_ngcontent-%COMP%]{\r\n        display:block;\r\n        position: fixed;\r\n        right: 0;\r\n        margin: 20px;\r\n    }\r\n\r\n\r\n    .file-container[_ngcontent-%COMP%]{\r\n    gap: 2vw;\r\n    }\r\n\r\n    .close-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width:3vw;\r\n        filter: invert(30%)\r\n    }\r\n        \r\n    .searchbar[_ngcontent-%COMP%]{\r\n        margin: 0 5vw;\r\n        margin-top: 8vw;\r\n    }\r\n\r\n    .searchbar[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        border-radius: 0 4vw 4vw 0;\r\n        font-size: 2.5vw;\r\n        height: 8vw\r\n    }\r\n\r\n    .search-btn[_ngcontent-%COMP%]{\r\n        border-radius: 4vw 0px 0px 4vw;\r\n    }\r\n\r\n    .search-icon[_ngcontent-%COMP%]{\r\n        width: 3vw;\r\n        padding-left: 2.2vw;\r\n    }\r\n\r\n\r\n    .pfp[_ngcontent-%COMP%]{\r\n        margin-top: 3vw;\r\n    }\r\n\r\n    .pfp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width:25vw;\r\n        border-radius:20vw;\r\n    }\r\n\r\n    .name[_ngcontent-%COMP%]{\r\n        margin-top: 2vw;\r\n        font-size: 4vw;\r\n    }\r\n    \r\n    .profession[_ngcontent-%COMP%]{\r\n        font-size: 3vw;\r\n    }\r\n\r\n    .fav[_ngcontent-%COMP%], .viewfriends[_ngcontent-%COMP%]{\r\n        gap: 3vw;\r\n    }\r\n\r\n    .fav-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .friend-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 2vw;\r\n    }\r\n\r\n    .container[_ngcontent-%COMP%]{\r\n        margin-top: 2vw;\r\n        width: 15vw;\r\n        height: 15vw;\r\n        border-radius:10vw;\r\n    }\r\n    .icon[_ngcontent-%COMP%]{\r\n        display:flex;\r\n        justify-content:center;\r\n        padding: 4vw;\r\n    }\r\n\r\n    .options[_ngcontent-%COMP%]{\r\n        font-size: 2.5vw;\r\n        margin: 0 5vw;\r\n        color:#404040;\r\n        margin-top: 12vw;  \r\n    }\r\n    \r\n    .thumb[_ngcontent-%COMP%]{\r\n        height:15vw;\r\n        width:18vw;\r\n        font-size: 3vw;\r\n    }\r\n\r\n    .file-container[_ngcontent-%COMP%]{\r\n        margin-top: 2vw;\r\n    }\r\n\r\n    .attach-title[_ngcontent-%COMP%]{\r\n        margin: 0 5vw;\r\n        margin-top: 8vw;\r\n        font-size: 4vw;\r\n    }\r\n\r\n    .btn[_ngcontent-%COMP%]{\r\n        margin-top: 2vw;\r\n        font-size: 3vw;\r\n        padding: 0.5vw;\r\n        border-radius:5vw;\r\n    }\r\n\r\n    .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 2.4vw;\r\n        color:#404040;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7QUFDbEM7OztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7O0FBSUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7OztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7OztBQUNBO0lBQ0ksVUFBVTtBQUNkOzs7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGdFQUFnRTtBQUNwRTs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLCtCQUEr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OztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLFFBQVE7SUFDWjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixhQUFhO1FBQ2IsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFVBQVU7UUFDVixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixlQUFlO1FBQ2YsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixjQUFjO1FBQ2QsY0FBYztRQUNkLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixhQUFhO0lBQ2pCOztBQUVKIiwiZmlsZSI6InByb2ZpbGV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ4JSAxMCUgNDIlO1xyXG4gICAgaGVpZ2h0OjEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDojZjlmOWY5O1xyXG59XHJcblxyXG5cclxuLnNlYXJjaGJhciBpbnB1dFt0eXBlPSd0ZXh0J117XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMXZ3IDF2dyAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmNsb3NlLWljb257XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2hiYXJ7XHJcbiAgICBtYXJnaW46IDAgMXZ3O1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgOTAlO1xyXG59XHJcblxyXG4uc2VhcmNoLWJ0bntcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxdncgMHB4IDBweCAxdnc7XHJcbn1cclxuXHJcbi5zZWFyY2gtaWNvbntcclxuICAgIHdpZHRoOiAxdnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMC42dnc7XHJcbiAgICBmaWx0ZXI6IGludmVydCgwLjUpO1xyXG59XHJcblxyXG5cclxuXHJcbi5zZWFyY2hiYXJ7XHJcbiAgICBtYXJnaW46IDAgMXZ3O1xyXG4gICAgbWFyZ2luLXRvcDogMS41dnc7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgOTAlO1xyXG59XHJcblxyXG4ucGZwe1xyXG4gICAgbWFyZ2luLXRvcDogMXZ3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucGZwIGltZ3tcclxuICAgIHdpZHRoOiA4dnc7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk4cHg7XHJcbn1cclxuXHJcbi5uYW1le1xyXG4gICAgZm9udC1zaXplOiAxLjR2dztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2Zlc3Npb257XHJcbiAgICBmb250LXNpemU6IDF2dztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNDA0MDQwO1xyXG59XHJcbi5mYXYtaWNvbiBpbWcsLmZyaWVuZC1pY29uIGltZ3tcclxuICAgIHdpZHRoOiAxdnc7XHJcbn1cclxuLmFjdGlvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMjhweDtcclxufVxyXG5cclxuLmljb257XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgcGFkZGluZzogMS40dnc7XHJcbiAgICBmaWx0ZXI6IGludmVydCg2OCUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDE0MykgaHVlLXJvdGF0ZSgyNzdkZWcpO1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDF2dztcclxuICAgIHdpZHRoOiA1dnc7XHJcbiAgICBoZWlnaHQ6IDV2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmM2UwZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZThjNmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXZ3O1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNvbnRhaW5lcjpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNlN2MxZmY7XHJcbn1cclxuXHJcbi5maWxlLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgIGdhcDogMXZ3O1xyXG59XHJcblxyXG4ub3B0aW9uc3tcclxuICAgIGNvbG9yOiM0MDQwNDA7XHJcbiAgICBmb250LXNpemU6IDAuNzZ2dztcclxuICAgIG1hcmdpbi10b3A6IDAuOHZ3O1xyXG59XHJcblxyXG5cclxuLnRodW1ie1xyXG4gICAgZm9udC1zaXplOjAuN3Z3O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMS4ydnc7XHJcbiAgICBoZWlnaHQ6MXZ3O1xyXG4gICAgd2lkdGg6MXZ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czowLjV2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2MxZmY7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMmIzZmY7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlXHJcbn1cclxuXHJcblxyXG4udGh1bWI6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTkwMGZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmYWNmZjtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IDAuMXZ3IHNvbGlkICM5OTAwZmY7XHJcbiAgICBjb2xvcjogIzk5MDBmZjtcclxuICAgIHBhZGRpbmc6IDAuNXZ3O1xyXG4gICAgZm9udC1zaXplOiAwLjl2dztcclxuICAgIHdpZHRoOiAyOCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAydnc7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6Izk5MDBmZjtcclxuICAgIGNvbG9yOndoaXRlXHJcbn1cclxuXHJcbi52aWV3LWJ0bntcclxuICAgIG1hcmdpbi10b3A6IDEuNXZ3O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hdHRhY2gtdGl0bGV7XHJcbiAgICBtYXJnaW46IDAgMnZ3O1xyXG4gICAgZm9udC1zaXplOiAxLjF2dztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZmF2LC52aWV3ZnJpZW5kc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDAgMnZ3O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDF2dztcclxuICAgIGdhcDogMXZ3O1xyXG59XHJcblxyXG4uZmF2LWljb24sLmZyaWVuZC1pY29ue1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG59XHJcblxyXG4uZm9vdGVyIHB7XHJcbiAgICBmb250LXNpemU6IDF2dztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDE0cHgpe1xyXG4gICAgLmNsb3NlLWljb257XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5maWxlLWNvbnRhaW5lcntcclxuICAgIGdhcDogMnZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5jbG9zZS1pY29uIGltZ3tcclxuICAgICAgICB3aWR0aDo0LjV2dztcclxuICAgICAgICBmaWx0ZXI6IGludmVydCgzMCUpXHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICAuc2VhcmNoYmFye1xyXG4gICAgICAgIG1hcmdpbjogMCA1dnc7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTR2dztcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoYmFyIGlucHV0W3R5cGU9J3RleHQnXXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDR2dyA0dncgMDtcclxuICAgICAgICBoZWlnaHQ6IDEwdndcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWJ0bntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0dncgMHB4IDBweCA0dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1pY29ue1xyXG4gICAgICAgIHdpZHRoOiA0dnc7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyLjJ2dztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLnBmcHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLnBmcCBpbWd7XHJcbiAgICAgICAgd2lkdGg6MzB2d1xyXG4gICAgfVxyXG5cclxuICAgIC5uYW1le1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJ2dztcclxuICAgICAgICBmb250LXNpemU6IDZ2dztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2Zlc3Npb257XHJcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhdiwudmlld2ZyaWVuZHN7XHJcbiAgICAgICAgZ2FwOiA0dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhdi1pY29uIGltZywuZnJpZW5kLWljb24gaW1ne1xyXG4gICAgICAgIHdpZHRoOiA0dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW4tdG9wOiA1dnc7XHJcbiAgICAgICAgd2lkdGg6IDIwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHZ3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTB2dztcclxuICAgIH1cclxuICAgIC5pY29ue1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDR2dztcclxuICAgIH1cclxuXHJcbiAgICAub3B0aW9uc3tcclxuICAgICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgICBtYXJnaW46IDAgNXZ3O1xyXG4gICAgICAgIGNvbG9yOiM0MDQwNDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTF2dzsgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGh1bWJ7XHJcbiAgICAgICAgaGVpZ2h0OjI0dnc7XHJcbiAgICAgICAgd2lkdGg6MTh2dztcclxuICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgIH1cclxuXHJcbiAgICAuZmlsZS1jb250YWluZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5hdHRhY2gtdGl0bGV7XHJcbiAgICAgICAgbWFyZ2luOiAwIDV2dztcclxuICAgICAgICBtYXJnaW4tdG9wOiA4dnc7XHJcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bntcclxuICAgICAgICBtYXJnaW4tdG9wOiA0dnc7XHJcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICAgICAgcGFkZGluZzogMS4ydnc7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3RlciBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgICAgIGNvbG9yOiM0MDQwNDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpe1xyXG4gICAgLmNsb3NlLWljb257XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuZmlsZS1jb250YWluZXJ7XHJcbiAgICBnYXA6IDJ2dztcclxuICAgIH1cclxuXHJcbiAgICAuY2xvc2UtaWNvbiBpbWd7XHJcbiAgICAgICAgd2lkdGg6M3Z3O1xyXG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDMwJSlcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIC5zZWFyY2hiYXJ7XHJcbiAgICAgICAgbWFyZ2luOiAwIDV2dztcclxuICAgICAgICBtYXJnaW4tdG9wOiA4dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaGJhciBpbnB1dFt0eXBlPSd0ZXh0J117XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA0dncgNHZ3IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjV2dztcclxuICAgICAgICBoZWlnaHQ6IDh2d1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYnRue1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDR2dyAwcHggMHB4IDR2dztcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWljb257XHJcbiAgICAgICAgd2lkdGg6IDN2dztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIuMnZ3O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAucGZwe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDN2dztcclxuICAgIH1cclxuXHJcbiAgICAucGZwIGltZ3tcclxuICAgICAgICB3aWR0aDoyNXZ3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MjB2dztcclxuICAgIH1cclxuXHJcbiAgICAubmFtZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAydnc7XHJcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9mZXNzaW9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgfVxyXG5cclxuICAgIC5mYXYsLnZpZXdmcmllbmRze1xyXG4gICAgICAgIGdhcDogM3Z3O1xyXG4gICAgfVxyXG5cclxuICAgIC5mYXYtaWNvbiBpbWcsLmZyaWVuZC1pY29uIGltZ3tcclxuICAgICAgICB3aWR0aDogMnZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnZ3O1xyXG4gICAgICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgICAgIGhlaWdodDogMTV2dztcclxuICAgICAgICBib3JkZXItcmFkaXVzOjEwdnc7XHJcbiAgICB9XHJcbiAgICAuaWNvbntcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiA0dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLm9wdGlvbnN7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjV2dztcclxuICAgICAgICBtYXJnaW46IDAgNXZ3O1xyXG4gICAgICAgIGNvbG9yOiM0MDQwNDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJ2dzsgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGh1bWJ7XHJcbiAgICAgICAgaGVpZ2h0OjE1dnc7XHJcbiAgICAgICAgd2lkdGg6MTh2dztcclxuICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgIH1cclxuXHJcbiAgICAuZmlsZS1jb250YWluZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5hdHRhY2gtdGl0bGV7XHJcbiAgICAgICAgbWFyZ2luOiAwIDV2dztcclxuICAgICAgICBtYXJnaW4tdG9wOiA4dnc7XHJcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bntcclxuICAgICAgICBtYXJnaW4tdG9wOiAydnc7XHJcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICAgICAgcGFkZGluZzogMC41dnc7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3RlciBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi40dnc7XHJcbiAgICAgICAgY29sb3I6IzQwNDA0MDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ== */"] });


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
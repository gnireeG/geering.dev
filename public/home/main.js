"use strict";
(self["webpackChunkhome"] = self["webpackChunkhome"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pages_linklist_linklist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/linklist/linklist.component */ 6537);
/* harmony import */ var _pages_ideas_ideas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/ideas/ideas.component */ 984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    { path: 'linklist', component: _pages_linklist_linklist_component__WEBPACK_IMPORTED_MODULE_0__.LinklistComponent },
    { path: 'ideas', component: _pages_ideas_ideas_component__WEBPACK_IMPORTED_MODULE_1__.IdeasComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ 4726);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AppComponent {
    constructor() {
        this.title = 'home';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "layout"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__.NavBarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: [".layout[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0XHJcbiAgICBkaXNwbGF5OiBmbGV4Il19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ 4726);
/* harmony import */ var _components_icons_burger_icon_burger_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/icons/burger-icon/burger-icon.component */ 3538);
/* harmony import */ var _components_icons_link_icon_link_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/icons/link-icon/link-icon.component */ 1230);
/* harmony import */ var _components_icons_lightbulb_icon_lightbulb_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/icons/lightbulb-icon/lightbulb-icon.component */ 4033);
/* harmony import */ var _components_nav_link_nav_link_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav-link/nav-link.component */ 2572);
/* harmony import */ var _pages_linklist_linklist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/linklist/linklist.component */ 6537);
/* harmony import */ var _pages_ideas_ideas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/ideas/ideas.component */ 984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__.NavBarComponent,
        _components_icons_burger_icon_burger_icon_component__WEBPACK_IMPORTED_MODULE_3__.BurgerIconComponent,
        _components_icons_link_icon_link_icon_component__WEBPACK_IMPORTED_MODULE_4__.LinkIconComponent,
        _components_icons_lightbulb_icon_lightbulb_icon_component__WEBPACK_IMPORTED_MODULE_5__.LightbulbIconComponent,
        _components_nav_link_nav_link_component__WEBPACK_IMPORTED_MODULE_6__.NavLinkComponent,
        _pages_linklist_linklist_component__WEBPACK_IMPORTED_MODULE_7__.LinklistComponent,
        _pages_ideas_ideas_component__WEBPACK_IMPORTED_MODULE_8__.IdeasComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule] }); })();


/***/ }),

/***/ 3538:
/*!***********************************************************************!*\
  !*** ./src/app/components/icons/burger-icon/burger-icon.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BurgerIconComponent": () => (/* binding */ BurgerIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class BurgerIconComponent {
    constructor() {
        this.size = 2;
    }
    ngOnInit() {
    }
}
BurgerIconComponent.ɵfac = function BurgerIconComponent_Factory(t) { return new (t || BurgerIconComponent)(); };
BurgerIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BurgerIconComponent, selectors: [["app-burger-icon"]], inputs: { size: "size" }, decls: 2, vars: 2, consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor"], ["fill-rule", "evenodd", "d", "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z", "clip-rule", "evenodd"]], template: function BurgerIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.size + "rem");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXJnZXItaWNvbi5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 4033:
/*!*****************************************************************************!*\
  !*** ./src/app/components/icons/lightbulb-icon/lightbulb-icon.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LightbulbIconComponent": () => (/* binding */ LightbulbIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LightbulbIconComponent {
    constructor() {
        this.size = 2;
    }
    ngOnInit() {
    }
}
LightbulbIconComponent.ɵfac = function LightbulbIconComponent_Factory(t) { return new (t || LightbulbIconComponent)(); };
LightbulbIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LightbulbIconComponent, selectors: [["app-lightbulb-icon"]], inputs: { size: "size" }, decls: 2, vars: 2, consts: [["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"]], template: function LightbulbIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.size + "rem");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWdodGJ1bGItaWNvbi5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 1230:
/*!*******************************************************************!*\
  !*** ./src/app/components/icons/link-icon/link-icon.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkIconComponent": () => (/* binding */ LinkIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LinkIconComponent {
    constructor() {
        this.size = 2;
    }
    ngOnInit() {
    }
}
LinkIconComponent.ɵfac = function LinkIconComponent_Factory(t) { return new (t || LinkIconComponent)(); };
LinkIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinkIconComponent, selectors: [["app-link-icon"]], inputs: { size: "size" }, decls: 2, vars: 2, consts: [["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"]], template: function LinkIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.size + "rem");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaW5rLWljb24uY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 4726:
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarComponent": () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _icons_burger_icon_burger_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/burger-icon/burger-icon.component */ 3538);
/* harmony import */ var _nav_link_nav_link_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav-link/nav-link.component */ 2572);
/* harmony import */ var _icons_link_icon_link_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/link-icon/link-icon.component */ 1230);
/* harmony import */ var _icons_lightbulb_icon_lightbulb_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/lightbulb-icon/lightbulb-icon.component */ 4033);





class NavBarComponent {
    constructor() {
        this.message = 'hallo';
        this.navOpen = false;
    }
    toggleNav() {
        console.log('hello');
        this.navOpen = !this.navOpen;
    }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 16, vars: 14, consts: [[1, "navbar"], [1, "inner", "flex"], [1, "upper", "flex"], [1, "toggle-wrapper"], [1, "toggle", 3, "click"], [3, "showLabel", "url", "linkName"], [1, "logo"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_4_listener() { return ctx.toggleNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-burger-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "app-nav-link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-link-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "app-nav-link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-lightbulb-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "app-nav-link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "app-link-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "app-nav-link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "app-lightbulb-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "test");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("open", ctx.navOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showLabel", ctx.navOpen)("url", "linklist")("linkName", "Linkliste");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showLabel", ctx.navOpen)("url", "ideas")("linkName", "Projektideen");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showLabel", ctx.navOpen)("url", "lorem")("linkName", "Lorem ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showLabel", ctx.navOpen)("url", "ipsum")("linkName", "Dolor sit");
    } }, directives: [_icons_burger_icon_burger_icon_component__WEBPACK_IMPORTED_MODULE_0__.BurgerIconComponent, _nav_link_nav_link_component__WEBPACK_IMPORTED_MODULE_1__.NavLinkComponent, _icons_link_icon_link_icon_component__WEBPACK_IMPORTED_MODULE_2__.LinkIconComponent, _icons_lightbulb_icon_lightbulb_icon_component__WEBPACK_IMPORTED_MODULE_3__.LightbulbIconComponent], styles: [".navbar[_ngcontent-%COMP%] {\n  background-color: var(--bg);\n  color: var(--text-on-bg);\n  height: 100vh;\n  position: sticky;\n  top: 0;\n  padding: 0.5rem;\n  width: 4rem;\n  transition: width var(--transition-speed);\n}\n.navbar[_ngcontent-%COMP%]   .toggle-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 0.5rem;\n}\n.navbar[_ngcontent-%COMP%]   .toggle-wrapper[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%] {\n  transition: transform var(--transition-speed);\n}\n.navbar.open[_ngcontent-%COMP%] {\n  width: 14rem;\n}\n.navbar.open[_ngcontent-%COMP%]   .toggle-wrapper[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%], .navbar.open[_ngcontent-%COMP%]   .toggle-wrapper[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]:active {\n  transform: rotate(90deg) scale(0.9);\n}\n.navbar[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.navbar[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n}\n.navbar[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n}\n.navbar[_ngcontent-%COMP%]   .upper[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.navbar[_ngcontent-%COMP%]   .upper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n.navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUVSO0FBRFE7RUFDSSw2Q0FBQTtBQUdaO0FBRkk7RUFDSSxZQUFBO0FBSVI7QUFGWTtFQUNJLG1DQUFBO0FBSWhCO0FBSEk7RUFDSSxhQUFBO0FBS1I7QUFKSTtFQUNJLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBTVI7QUFKWTtFQUNJLHFCQUFBO0FBTWhCO0FBTEk7RUFDSSxzQkFBQTtBQU9SO0FBTlE7RUFDSSxzQkFBQTtBQVFaO0FBUEk7RUFDSSxlQUFBO0FBU1IiLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKVxyXG4gICAgY29sb3I6IHZhcigtLXRleHQtb24tYmcpXHJcbiAgICBoZWlnaHQ6IDEwMHZoXHJcbiAgICBwb3NpdGlvbjogc3RpY2t5XHJcbiAgICB0b3A6IDBcclxuICAgIHBhZGRpbmc6IDAuNXJlbVxyXG4gICAgd2lkdGg6IDRyZW1cclxuICAgIHRyYW5zaXRpb246IHdpZHRoIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpXHJcbiAgICAudG9nZ2xlLXdyYXBwZXJcclxuICAgICAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbVxyXG4gICAgICAgIC50b2dnbGVcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpXHJcbiAgICAmLm9wZW5cclxuICAgICAgICB3aWR0aDogMTRyZW1cclxuICAgICAgICAudG9nZ2xlLXdyYXBwZXJcclxuICAgICAgICAgICAgLnRvZ2dsZSwgLnRvZ2dsZTphY3RpdmVcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSBzY2FsZSguOSlcclxuICAgIC5mbGV4XHJcbiAgICAgICAgZGlzcGxheTogZmxleFxyXG4gICAgLmlubmVyXHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxyXG4gICAgICAgIGhlaWdodDogMTAwJVxyXG4gICAgICAgIC50b2dnbGVcclxuICAgICAgICAgICAgJjphY3RpdmVcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjkpXHJcbiAgICAudXBwZXJcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXHJcbiAgICAgICAgPiAqXHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC4yNXJlbVxyXG4gICAgLmxvZ29cclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0iXX0= */"] });


/***/ }),

/***/ 2572:
/*!***********************************************************!*\
  !*** ./src/app/components/nav-link/nav-link.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavLinkComponent": () => (/* binding */ NavLinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


const _c0 = ["*"];
class NavLinkComponent {
    constructor() {
        this.linkName = '';
        this.showLabel = false;
        this.url = '';
    }
    ngOnInit() {
    }
}
NavLinkComponent.ɵfac = function NavLinkComponent_Factory(t) { return new (t || NavLinkComponent)(); };
NavLinkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavLinkComponent, selectors: [["app-nav-link"]], inputs: { linkName: "linkName", showLabel: "showLabel", url: "url" }, ngContentSelectors: _c0, decls: 8, vars: 7, consts: [["routerLinkActive", "active", 1, "link", 3, "routerLink"], [1, "icon"], [1, "label"], [1, "tooltip"]], template: function NavLinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.showLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.linkName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", ctx.showLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.linkName);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: [".link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n  white-space: nowrap;\n  transition: width var(--transition-speed);\n}\n.link.active[_ngcontent-%COMP%] {\n  color: var(--text-on-bg-lighter);\n}\n.link.active[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-color: var(--bg-lighter);\n}\n.link[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  transition: background var(--transition-speed);\n  border-radius: 100%;\n  height: 3rem;\n}\n.link[_ngcontent-%COMP%]:hover {\n  color: var(--text-on-bg-lighter);\n}\n.link[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  background-color: var(--bg-lighter);\n}\n.link[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity var(--transition-speed), transform var(--transition-speed), width var(--transition-speed);\n  transform: translateX(-10px);\n  margin-left: 0.5rem;\n  font-size: 1.2rem;\n  width: 0;\n  overflow: hidden;\n}\n.link[_ngcontent-%COMP%]   .label.show[_ngcontent-%COMP%] {\n  width: 9.5rem;\n  opacity: 1;\n  transform: translateX(0);\n}\n.link[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  position: absolute;\n  background: var(--bg);\n  left: 4rem;\n  top: 50%;\n  transform-origin: left;\n  transform: translateY(-50%) scale(0);\n  opacity: 0;\n  transition: transform 0.1s ease-in-out, opacity 0.1s ease-in-out;\n  pointer-events: none;\n  padding: 0.5rem 0.7rem;\n  border-radius: 3px;\n}\n.link[_ngcontent-%COMP%]   .tooltip.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.link[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  height: 0;\n  width: 0;\n  left: -8px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-style: solid;\n  border-width: 6px 8px 6px 0;\n  border-color: transparent var(--bg) transparent transparent;\n}\n.link[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  transform: translateY(-50%) scale(1);\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1saW5rLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0FBQ0o7QUFBSTtFQUNJLGdDQUFBO0FBRVI7QUFEUTtFQUNJLG1DQUFBO0FBR1o7QUFGSTtFQUNJLGVBQUE7RUFDQSw4Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUlSO0FBSEk7RUFDSSxnQ0FBQTtBQUtSO0FBSlE7RUFDSSxtQ0FBQTtBQU1aO0FBTEk7RUFDSSxVQUFBO0VBQ0EsNkdBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFPUjtBQU5RO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQVFaO0FBUEk7RUFHSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxnRUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQU9SO0FBcEJRO0VBQ0ksYUFBQTtBQXNCWjtBQVRRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDJEQUFBO0FBV1o7QUFUUTtFQUNJLG9DQUFBO0VBQ0EsVUFBQTtBQVdaIiwiZmlsZSI6Im5hdi1saW5rLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmtcclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcFxyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggdmFyKC0tdHJhbnNpdGlvbi1zcGVlZClcclxuICAgICYuYWN0aXZlXHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtb24tYmctbGlnaHRlcilcclxuICAgICAgICAuaWNvblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1saWdodGVyKVxyXG4gICAgLmljb25cclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW1cclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJVxyXG4gICAgICAgIGhlaWdodDogM3JlbVxyXG4gICAgJjpob3ZlclxyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW9uLWJnLWxpZ2h0ZXIpXHJcbiAgICAgICAgLmljb25cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbGlnaHRlcilcclxuICAgIC5sYWJlbFxyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKSwgdHJhbnNmb3JtIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpLCB3aWR0aCB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKVxyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweClcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtXHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW1cclxuICAgICAgICB3aWR0aDogMFxyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW5cclxuICAgICAgICAmLnNob3dcclxuICAgICAgICAgICAgd2lkdGg6IDkuNXJlbVxyXG4gICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKVxyXG4gICAgLnRvb2x0aXBcclxuICAgICAgICAmLmhpZGRlblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lXHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmcpXHJcbiAgICAgICAgbGVmdDogNHJlbVxyXG4gICAgICAgIHRvcDogNTAlXHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdFxyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgwKVxyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IC4xcyBlYXNlLWluLW91dFxyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lXHJcbiAgICAgICAgcGFkZGluZzogLjVyZW0gLjdyZW1cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHhcclxuICAgICAgICAmOjpiZWZvcmVcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnXHJcbiAgICAgICAgICAgIGhlaWdodDogMFxyXG4gICAgICAgICAgICB3aWR0aDogMFxyXG4gICAgICAgICAgICBsZWZ0OiAtOHB4XHJcbiAgICAgICAgICAgIHRvcDogNTAlXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKVxyXG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkXHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogNnB4IDhweCA2cHggMFxyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHZhcigtLWJnKSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudFxyXG4gICAgJjpob3ZlclxyXG4gICAgICAgIC50b29sdGlwXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgxKVxyXG4gICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgIl19 */"] });


/***/ }),

/***/ 4346:
/*!*************************************!*\
  !*** ./src/app/linklist.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinklistService": () => (/* binding */ LinklistService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class LinklistService {
    constructor(http) {
        this.http = http;
    }
    getLinks() {
        return this.http.get('/linklist/list');
    }
    store(name, url, description) {
        return this.http.post('/linklist/store', { name, url, description });
    }
}
LinklistService.ɵfac = function LinklistService_Factory(t) { return new (t || LinklistService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
LinklistService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LinklistService, factory: LinklistService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 984:
/*!************************************************!*\
  !*** ./src/app/pages/ideas/ideas.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdeasComponent": () => (/* binding */ IdeasComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class IdeasComponent {
    constructor() { }
    ngOnInit() {
    }
}
IdeasComponent.ɵfac = function IdeasComponent_Factory(t) { return new (t || IdeasComponent)(); };
IdeasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IdeasComponent, selectors: [["app-ideas"]], decls: 2, vars: 0, template: function IdeasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ideas works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpZGVhcy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 6537:
/*!******************************************************!*\
  !*** ./src/app/pages/linklist/linklist.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinklistComponent": () => (/* binding */ LinklistComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_linklist_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/linklist.service */ 4346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);




function LinklistComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", link_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](link_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](link_r1.description);
} }
class LinklistComponent {
    constructor(linklistService) {
        this.linklistService = linklistService;
        this.inputName = '';
        this.inputUrl = '';
        this.inputDescription = '';
    }
    saveLink() {
        console.log(this.inputName);
        this.linklistService.store(this.inputName, this.inputUrl, this.inputDescription)
            .subscribe((data) => {
            this.links = data;
        });
    }
    ngOnInit() {
        this.linklistService.getLinks()
            .subscribe((data) => {
            this.links = data;
        });
    }
}
LinklistComponent.ɵfac = function LinklistComponent_Factory(t) { return new (t || LinklistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_linklist_service__WEBPACK_IMPORTED_MODULE_0__.LinklistService)); };
LinklistComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LinklistComponent, selectors: [["app-linklist"]], decls: 15, vars: 4, consts: [[1, "page"], ["target", "_blank", "class", "link mb-4", 3, "href", 4, "ngFor", "ngForOf"], ["for", "name", 1, "block", "mt-2"], ["type", "text", "id", "name", 1, "block", 3, "ngModel", "ngModelChange"], ["for", "url", 1, "block", "mt-2"], ["type", "text", "id", "url", 1, "block", 3, "ngModel", "ngModelChange"], ["for", "description", 1, "block", "mt-2"], ["type", "text", "id", "description", 1, "block", "mb-4", 3, "ngModel", "ngModelChange"], [1, "btn", "primary", 3, "click"], ["target", "_blank", 1, "link", "mb-4", 3, "href"], [1, "my-0"]], template: function LinklistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Linkliste");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LinklistComponent_a_3_Template, 5, 3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LinklistComponent_Template_input_ngModelChange_6_listener($event) { return ctx.inputName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LinklistComponent_Template_input_ngModelChange_9_listener($event) { return ctx.inputUrl = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LinklistComponent_Template_input_ngModelChange_12_listener($event) { return ctx.inputDescription = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LinklistComponent_Template_button_click_13_listener() { return ctx.saveLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Speichern");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.links);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.inputName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.inputUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.inputDescription);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: [".link[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmtsaXN0LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6ImxpbmtsaXN0LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmtcclxuICAgIGRpc3BsYXk6IGJsb2NrIl19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
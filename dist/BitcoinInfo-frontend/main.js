(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/hi3":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_bit_info_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/bit-info-service.service */ "kJLZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SigninComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid username and password Please try again");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SigninComponent {
    constructor(bitInfoService) {
        this.bitInfoService = bitInfoService;
        this.userName = "";
        this.password = "";
        this.showErrorMessage = false;
        this.errorMessage = "";
    }
    ngOnInit() { }
    // public signIn(){
    //   this.bitInfoService.signIn(this.userName, this.password).subscribe( (data: any) => {
    //     //console.log('data=' + data);  
    //     if(localStorage.getItem('userName')!== null){
    //       localStorage.removeItem("userName") // logs user out if one is logged in
    //     }
    //     window.localStorage['userName'] = data.user.userName    
    //   });
    // }//signin
    signIn() {
        this.bitInfoService.signIn(this.userName, this.password).subscribe((data) => {
            if (localStorage.getItem('userName') !== null) {
                localStorage.removeItem("userName");
                localStorage.removeItem('userID');
            }
            window.localStorage['userName'] = data.user.userName;
            window.localStorage['userID'] = data.user._id;
            this.errorMessage = data;
            if (localStorage.getItem('userName') !== null) {
                window.location.pathname = ('/home');
            }
        }, err => {
            alert('here');
        });
    } //signin
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bit_info_service_service__WEBPACK_IMPORTED_MODULE_1__["BitInfoServiceService"])); };
SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], decls: 17, vars: 4, consts: [[1, "imgcontainer"], ["src", "../assets/bitcoin.png", "alt", "Avatar", 1, "avatar", 2, "width", "150px"], [1, "container"], ["for", "uname"], ["type", "text", "placeholder", "Enter Username", "name", "uname", "required", "", 3, "ngModel", "ngModelChange"], ["for", "psw"], ["type", "password", "placeholder", "Enter Password", "name", "psw", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", 3, "click"], [4, "ngIf"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_8_listener($event) { return ctx.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_12_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_Template_button_click_13_listener() { return ctx.signIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SigninComponent_div_16_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.errorMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showErrorMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["form[_ngcontent-%COMP%] {\n  border: 3px solid #f1f1f1;\n}\n\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.cancelbtn[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 10px 18px;\n  background-color: #f44336;\n}\n\n.imgcontainer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 24px 0 12px 0;\n}\n\nimg.avatar[_ngcontent-%COMP%] {\n  width: 40%;\n  border-radius: 50%;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\nspan.psw[_ngcontent-%COMP%] {\n  float: right;\n  padding-top: 16px;\n}\n\n@media screen and (max-width: 300px) {\n  span.psw[_ngcontent-%COMP%] {\n    display: block;\n    float: none;\n  }\n  .cancelbtn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjtBQUNsQjtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCO0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0UsWUFBWTtBQUNkO0FBRUEsNENBQTRDO0FBQzVDO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7QUFFQSxrREFBa0Q7QUFDbEQ7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLGFBQWE7QUFDZjtBQUVBLCtCQUErQjtBQUMvQjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFFQSxvRUFBb0U7QUFDcEU7RUFDRTtJQUNFLGNBQWM7SUFDZCxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNpZ25pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQm9yZGVyZWQgZm9ybSAqL1xuZm9ybSB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XG59XG5cbi8qIEZ1bGwtd2lkdGggaW5wdXRzICovXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBBZGQgYSBob3ZlciBlZmZlY3QgZm9yIGJ1dHRvbnMgKi9cbmJ1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLyogRXh0cmEgc3R5bGUgZm9yIHRoZSBjYW5jZWwgYnV0dG9uIChyZWQpICovXG4uY2FuY2VsYnRuIHtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cblxuLyogQ2VudGVyIHRoZSBhdmF0YXIgaW1hZ2UgaW5zaWRlIHRoaXMgY29udGFpbmVyICovXG4uaW1nY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDI0cHggMCAxMnB4IDA7XG59XG5cbi8qIEF2YXRhciBpbWFnZSAqL1xuaW1nLmF2YXRhciB7XG4gIHdpZHRoOiA0MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyogQWRkIHBhZGRpbmcgdG8gY29udGFpbmVycyAqL1xuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi8qIFRoZSBcIkZvcmdvdCBwYXNzd29yZFwiIHRleHQgKi9cbnNwYW4ucHN3IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cblxuLyogQ2hhbmdlIHN0eWxlcyBmb3Igc3BhbiBhbmQgY2FuY2VsIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICBzcGFuLnBzdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbiAgLmNhbmNlbGJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/victoriageykhman/nick/BitcoinInfo/BitcoinInfo-frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "5hVl":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function NavBarComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", "show-user");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Signed In As User: ", ctx_r0.userName, " ");
} }
class NavBarComponent {
    constructor() {
        this.userName = "";
        this.userName = window.localStorage['userName'];
    }
    ngOnInit() {
        this.userName = window.localStorage['userName'];
    }
    logout() {
        localStorage.removeItem("userName");
        localStorage.removeItem('userID');
        window.location.pathname = ('/signin');
    }
    isUserSignedIn() {
        this.userName = window.localStorage['userName'];
        return (window.localStorage.getItem('userName') == null ? false : true);
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 19, vars: 5, consts: [[3, "className"], ["src", "../assets/logo.png", 3, "className"], [2, "display", "inline", "width", "580px"], ["routerLink", "/home"], ["routerLink", "/forum"], ["routerLink", "/news"], ["routerLink", "/signin"], ["routerLink", "/signup"], [3, "click"], [3, "className", 4, "ngIf"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "itInfo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Forum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_16_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NavBarComponent_div_18_Template, 2, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", "combinedLogo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", "logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", "app-name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserSignedIn() === true);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".nav[_ngcontent-%COMP%] {\n    display: flex;\n    background-color: rgb(255, 102, 0);\n    color:black; \n    border-width: 2px;\n    border-color: black;\n    border-style: solid;\n    padding-bottom: .8%;\n    height: 150px;\n  }\n  .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white; \n    text-decoration: none;\n  }\n  .nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    color:black;\n    background-color:white;\n    cursor: pointer;\n  }\n  button[_ngcontent-%COMP%] {\n    margin-top: 5%;\n    background-color: black;\n    box-sizing: border-box;\n    text-decoration:none;\n    text-transform:uppercase;\n    font-weight:400;\n    color:white;\n    text-align:center;\n    transition: all 0.25s;\n    font-size: 10pt;\n    width: 20%; \n    height: 25%;\n    grid-column: 6;\n    margin-bottom: .2%;\n    border-radius: 5%;\n    margin-right: 5px;\n    margin-left: 10%;\n  }\n  .combinedLogo[_ngcontent-%COMP%]{\n      display: flex;\n  }\n  .logo[_ngcontent-%COMP%] {\n    margin-top: 1em; \n    margin-right: .5em;\n    width: 75px; \n    height: 54px; \n    grid-column: 1;\n  }\n  .app-name[_ngcontent-%COMP%] {\n      margin-top: 1em;\n    \n    \n    grid-column: 1;\n    font-size: 25px; \n  }\n  .show-user[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 14pt;\n    margin-left: 33%;\n    margin-top: 2%;\n    margin-right: .5%;\n    height: 15%;\n    width: 15%;\n    padding: .3%;\n    background-color: black;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtFQUNBO01BQ0ksYUFBYTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7RUFDaEI7RUFDQTtNQUNJLGVBQWU7SUFDakIsd0JBQXdCOztJQUV4QixjQUFjO0lBQ2QsZUFBZTtFQUNqQjtFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7SUFDWix1QkFBdUI7RUFDekIiLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMDIsIDApO1xuICAgIGNvbG9yOmJsYWNrOyBcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgcGFkZGluZy1ib3R0b206IC44JTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG4gIC5uYXYgYSB7XG4gICAgY29sb3I6IHdoaXRlOyBcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgLm5hdiBidXR0b246aG92ZXIge1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6NDAwO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcbiAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgd2lkdGg6IDIwJTsgXG4gICAgaGVpZ2h0OiAyNSU7XG4gICAgZ3JpZC1jb2x1bW46IDY7XG4gICAgbWFyZ2luLWJvdHRvbTogLjIlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIH1cbiAgLmNvbWJpbmVkTG9nb3tcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmxvZ28ge1xuICAgIG1hcmdpbi10b3A6IDFlbTsgXG4gICAgbWFyZ2luLXJpZ2h0OiAuNWVtO1xuICAgIHdpZHRoOiA3NXB4OyBcbiAgICBoZWlnaHQ6IDU0cHg7IFxuICAgIGdyaWQtY29sdW1uOiAxO1xuICB9XG4gIC5hcHAtbmFtZSB7XG4gICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgLyogbWFyZ2luLWxlZnQ6IDEwcHg7ICAqL1xuICAgIFxuICAgIGdyaWQtY29sdW1uOiAxO1xuICAgIGZvbnQtc2l6ZTogMjVweDsgXG4gIH1cbiAgXG4gIC5zaG93LXVzZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgbWFyZ2luLWxlZnQ6IDMzJTtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICBtYXJnaW4tcmlnaHQ6IC41JTtcbiAgICBoZWlnaHQ6IDE1JTtcbiAgICB3aWR0aDogMTUlO1xuICAgIHBhZGRpbmc6IC4zJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "6XR0":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_bit_info_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/bit-info-service.service */ "kJLZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function NewsComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Read Story");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", "newsStory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", article_r1.title, " ", article_r1.publishedAt, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", article_r1.urlToImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", article_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class NewsComponent {
    constructor(bitInfoService) {
        this.bitInfoService = bitInfoService;
    }
    ngOnInit() {
        this.callNewsApi();
    }
    callNewsApi() {
        this.bitInfoService.callNewsApi().subscribe((data) => {
            console.log('data=' + data);
            this.newsApiObj = data;
        });
    }
}
NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bit_info_service_service__WEBPACK_IMPORTED_MODULE_1__["BitInfoServiceService"])); };
NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 5, vars: 1, consts: [[3, "className", 4, "ngFor", "ngForOf"], [3, "className"], [3, "src"], ["target", "_blank", 3, "href"]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Latest Bitcoin News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NewsComponent_li_4_Template, 13, 6, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.newsApiObj.articles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["img[_ngcontent-%COMP%]{\n    width: 30%;\n    background-color: white;\n}\n\nul[_ngcontent-%COMP%]{\n    list-style-type: none;\n}\n\n.newsStory[_ngcontent-%COMP%]{\n    border: solid black 2px;\n    padding: 1%;\n    width: 50%;\n    margin-bottom: .5%;\n}\n\na[_ngcontent-%COMP%] {\n    color: rgb(255, 102, 0);\n    text-decoration: none;\n    font-weight: bold;\n}\n\nli[_ngcontent-%COMP%] {\n    background-color: rgba(235, 160, 20, 0.315);\n}\n\nh3[_ngcontent-%COMP%] {\n    border: solid orange 2px;\n}\n\nbody[_ngcontent-%COMP%] {\n    background-color: rgba(22, 21, 21, 0.075);\n    padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxvQkFBb0I7QUFDeEIiLCJmaWxlIjoibmV3cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xuICAgIHdpZHRoOiAzMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbnVse1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5uZXdzU3Rvcnl7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAycHg7XG4gICAgcGFkZGluZzogMSU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAuNSU7XG59XG5cbmEge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAxMDIsIDApO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxubGkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM1LCAxNjAsIDIwLCAwLjMxNSk7XG59XG5cbmgzIHtcbiAgICBib3JkZXI6IHNvbGlkIG9yYW5nZSAycHg7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDIxLCAyMSwgMC4wNzUpO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 9, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["src", "https://wallpaperaccess.com/full/395434.jpg"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "BitInfo Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */", "img[_ngcontent-%COMP%] {\n            width: 100%;\n            height: 100%;\n        }"] });


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
    production: true,
    bitInfoDBHost: 'https://shrouded-atoll-63514.herokuapp.com',
    newsApiKey: '874a01369695467f872769bf97b6cdb8'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
// curl https://newsapi.org/v2/everything -G \  -d q=Bitcoin \ -d from=2021-04-22 \ -d sortBy=popularity \  -d apiKey=874a01369695467f872769bf97b6cdb8


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
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'BitcoinInfo-frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forum/forum.component */ "m5Ef");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signin/signin.component */ "/hi3");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news/news.component */ "6XR0");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
        _forum_forum_component__WEBPACK_IMPORTED_MODULE_6__["ForumComponent"],
        _signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"],
        _news_news_component__WEBPACK_IMPORTED_MODULE_8__["NewsComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();


/***/ }),

/***/ "kJLZ":
/*!******************************************************!*\
  !*** ./src/app/services/bit-info-service.service.ts ***!
  \******************************************************/
/*! exports provided: BitInfoServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitInfoServiceService", function() { return BitInfoServiceService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class BitInfoServiceService {
    constructor(http) {
        this.http = http;
        this.fetchQuestionsURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].bitInfoDBHost + '/questions';
        this.fetchUsersURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].bitInfoDBHost + '/users';
    }
    fetchUserById(userId) {
        return this.http.get(this.fetchUsersURL + "/" + userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((operation, result) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }) // catchError
        );
    }
    fetchQuestions() {
        console.log("in getQuestions");
        return this.http.get(this.fetchQuestionsURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((operation, result) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }) // catchError
        );
    } //getQuestions
    signIn(userName, password) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].bitInfoDBHost + '/users/signin', {
            userName: userName,
            password: password
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((operation, result) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }) // catchError
        ); //pipe
    }
    signUp(userName, password) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].bitInfoDBHost + '/users/signup', {
            userName: userName,
            password: password
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((operation, result) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }) // catchError
        ); //pipe
    }
    // localStorage.getItem('userName')
    postQuestion(newQuestion) {
        if (window.localStorage.getItem('userName') == null) {
            window.location.pathname = ('/signin');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }
        else {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].bitInfoDBHost + '/questions', {
                question: newQuestion,
                user: window.localStorage["userID"]
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((operation, result) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
            }) // catchError
            ); //pipe 
        }
    } //postQuestion
    postAnswer(newAnswer, question) {
        if (window.localStorage.getItem('userName') == null) {
            window.location.pathname = ('/signin');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }
        else {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].bitInfoDBHost + '/answers', {
                question: question,
                answer: newAnswer,
                user: window.localStorage["userID"],
                userName: window.localStorage["userName"],
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((operation, result) => {
                console.log("Error in bit-info-service" + result);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
            }) // catchError
            ); //pipe 
        }
    } //postQuestion
    callNewsApi() {
        // const headers = new HttpHeaders()
        //     .set('cache-control', 'no-cache')
        //     .set('content-type', 'application/json')
        //     .set('postman-token', 'b408a67d-5f78-54fc-2fb7-00f6e9cefbd1');
        let url = "https://newsapi.org/v2/everything?q=Bitcoin&from=2021-04-23&sortBy=popularity&apiKey=" + _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].newsApiKey;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((operation, result) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }) // catchError
        );
    }
    /*
    public saveQuestion(question : String, userName : String) : Observable<any> {
      //return this.http.put
    }//saveQuestion
    */
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    } //handleError
}
BitInfoServiceService.ɵfac = function BitInfoServiceService_Factory(t) { return new (t || BitInfoServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
BitInfoServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BitInfoServiceService, factory: BitInfoServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "m5Ef":
/*!******************************************!*\
  !*** ./src/app/forum/forum.component.ts ***!
  \******************************************/
/*! exports provided: ForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponent", function() { return ForumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_bit_info_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/bit-info-service.service */ "kJLZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




function ForumComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForumComponent_div_3_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.newQuestion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForumComponent_div_3_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.postQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Post Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.newQuestion);
} }
function ForumComponent_li_5_label_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](question_r5.user.userName);
} }
function ForumComponent_li_5_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForumComponent_li_5_div_8_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const question_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.postAnswer(question_r5._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Post Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "newAnswer_", question_r5._id, "");
} }
function ForumComponent_li_5_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForumComponent_li_5_div_8_div_1_Template, 7, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.isUserSignedIn());
} }
function ForumComponent_li_5_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", answer_r15.answer, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Answered by User: ", answer_r15.userName, " at ", answer_r15.createdAt, " ");
} }
function ForumComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Asked by User: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ForumComponent_li_5_label_6_Template, 3, 1, "label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ForumComponent_li_5_div_8_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ForumComponent_li_5_li_10_Template, 5, 3, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](question_r5.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", "user-name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", question_r5.user !== undefined && question_r5.user !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" at ", question_r5.createdAt, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isUserSignedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", question_r5.answers);
} }
class ForumComponent {
    constructor(bitInfoService) {
        this.bitInfoService = bitInfoService;
        this.newQuestion = "";
        this.questionid = "";
    }
    ngOnInit() {
        this.fetchQuestions();
    } //ngOnInit
    fetchQuestions() {
        this.bitInfoService.fetchQuestions().subscribe((data) => {
            //console.log('data=' + data);
            this.questions = data;
            this.questions.forEach(question => console.log(question + "; " + question.user));
        });
    }
    postAnswer(questionId) {
        // alert("questionId=" + questionId);
        let newAnswer = document.getElementById('newAnswer_' + questionId).value;
        this.bitInfoService.postAnswer(newAnswer, questionId).subscribe((data) => {
            console.log(data);
            this.fetchQuestions();
        });
    }
    postQuestion() {
        //console.log("newQuestion=[" + this.newQuestion + "]");
        this.bitInfoService.postQuestion(this.newQuestion).subscribe((data) => {
            console.log(data);
            this.fetchQuestions();
        });
    } //postQuestion
    isUserSignedIn() {
        return (window.localStorage.getItem('userName') == null ? false : true);
    }
}
ForumComponent.ɵfac = function ForumComponent_Factory(t) { return new (t || ForumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bit_info_service_service__WEBPACK_IMPORTED_MODULE_1__["BitInfoServiceService"])); };
ForumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForumComponent, selectors: [["app-forum"]], decls: 6, vars: 4, consts: [[3, "className"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["id", "newQuestion", "rows", "6", "cols", "84", "placeholder", "Post your questions here!  Someone is bound to have an answer!", 3, "ngModel", "ngModelChange"], ["id", "postQuestion-btn", 3, "click"], ["rows", "2", "cols", "25", "placeholder", "Post an answer here", 3, "id"], ["id", "postAnswer-btn", 3, "click"]], template: function ForumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Question Forum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ForumComponent_div_3_Template, 7, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ForumComponent_li_5_Template, 11, 6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", "forum-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserSignedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", "question-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".question-list[_ngcontent-%COMP%] {\n    list-style-type: none;\n}\n\n.question-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 20%;\n    width: 50%;\n    border: solid black 2px;\n    margin-bottom: 10px;\n    padding: 5px;\n    padding-top: 1%;\n    background-color: rgba(235, 160, 20, 0.315);\n}\n\n.user-name[_ngcontent-%COMP%] {\n    font-size: 10pt;\n    font-style: italic;\n}\n\n.expand-bttn[_ngcontent-%COMP%]{\n    margin-left: 93%;\n}\n\nbody[_ngcontent-%COMP%] {\n    background-color: rgba(22, 21, 21, 0.075);\n    padding-bottom: 10px;\n}\n\n#newQuestion[_ngcontent-%COMP%] {\n    margin-left: 40px;\n    margin-top: 15px;\n}\n\n#postQuestion-btn[_ngcontent-%COMP%] {\n    background-color: black;\n    box-sizing: border-box;\n    text-decoration:none;\n    font-weight:400;\n    color:white;\n    text-align:center;\n    transition: all 0.25s;\n    font-size: 14px;\n    width: 10%; \n    height: 20%;\n    border-radius: 5%;\n    margin-left: 40px;\n}\n\n#postAnswer-btn[_ngcontent-%COMP%] {\n    background-color: black;\n    box-sizing: border-box;\n    text-decoration:none;\n    font-weight:400;\n    color:white;\n    text-align:center;\n    transition: all 0.25s;\n    font-size: 14px;\n    width: 20%; \n    height: 20%;\n    border-radius: 5%;\n    margin-bottom: 2%;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    color:black;\n    background-color:white;\n    cursor: pointer;\n  }\n\n.forum-header[_ngcontent-%COMP%] {\n      margin-left: 3.3%;\n      text-shadow: 2px 2px rgb(255, 102, 0);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcnVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVDO0lBQ0csV0FBVztJQUNYLHNCQUFzQjtJQUN0QixlQUFlO0VBQ2pCOztBQUVBO01BQ0ksaUJBQWlCO01BQ2pCLHFDQUFxQztFQUN6QyIsImZpbGUiOiJmb3J1bS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1ZXN0aW9uLWxpc3Qge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLnF1ZXN0aW9uLWxpc3QgbGkge1xuICAgIGhlaWdodDogMjAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDElO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM1LCAxNjAsIDIwLCAwLjMxNSk7XG59XG5cbi51c2VyLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uZXhwYW5kLWJ0dG57XG4gICAgbWFyZ2luLWxlZnQ6IDkzJTtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMjEsIDIxLCAwLjA3NSk7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbiNuZXdRdWVzdGlvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuI3Bvc3RRdWVzdGlvbi1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgZm9udC13ZWlnaHQ6NDAwO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDEwJTsgXG4gICAgaGVpZ2h0OiAyMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG5cbiNwb3N0QW5zd2VyLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICBmb250LXdlaWdodDo0MDA7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMjAlOyBcbiAgICBoZWlnaHQ6IDIwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbn1cblxuIGJ1dHRvbjpob3ZlciB7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiBcbiAgLmZvcnVtLWhlYWRlciB7XG4gICAgICBtYXJnaW4tbGVmdDogMy4zJTtcbiAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IHJnYigyNTUsIDEwMiwgMCk7XG4gIH1cbiJdfQ== */"] });


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_bit_info_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/bit-info-service.service */ "kJLZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class SignupComponent {
    constructor(bitInfoService) {
        this.bitInfoService = bitInfoService;
        this.userName = "";
        this.password = "";
    }
    ngOnInit() {
    }
    signUp() {
        this.bitInfoService.signUp(this.userName, this.password).subscribe((data) => {
            //console.log('data=' + data);  
            if (localStorage.getItem('userName') !== null) {
                localStorage.removeItem("userName");
                localStorage.removeItem('userID');
            }
            // window.localStorage['userID'] = data.user._id
            // window.localStorage['userName'] = data.user.userName    
            if (localStorage.getItem('userName') == null) {
                window.location.pathname = ('/signin');
            }
        });
    } //signup
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bit_info_service_service__WEBPACK_IMPORTED_MODULE_1__["BitInfoServiceService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 15, vars: 2, consts: [[1, "imgcontainer"], ["src", "../assets/bitcoin.png", "alt", "Avatar", 1, "avatar", 2, "width", "150px"], [1, "container"], ["for", "uname"], ["type", "text", "placeholder", "Enter Username", "name", "uname", "required", "", 3, "ngModel", "ngModelChange"], ["for", "psw"], ["type", "password", "placeholder", "Enter Password", "name", "psw", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", 3, "click"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Register Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_8_listener($event) { return ctx.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_12_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_13_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["form[_ngcontent-%COMP%] {\n    border: 3px solid #f1f1f1;\n  }\n\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n  }\n\nbutton[_ngcontent-%COMP%] {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n  }\n\nbutton[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n\n.cancelbtn[_ngcontent-%COMP%] {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n  }\n\n.imgcontainer[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: 24px 0 12px 0;\n  }\n\nimg.avatar[_ngcontent-%COMP%] {\n    width: 40%;\n    border-radius: 50%;\n  }\n\n.container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n\nspan.psw[_ngcontent-%COMP%] {\n    float: right;\n    padding-top: 16px;\n  }\n\n@media screen and (max-width: 300px) {\n    span.psw[_ngcontent-%COMP%] {\n      display: block;\n      float: none;\n    }\n    .cancelbtn[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjtBQUNsQjtJQUNJLHlCQUF5QjtFQUMzQjtBQUVBLHNCQUFzQjtBQUN0QjtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCO0VBQ3hCO0FBRUEsZ0NBQWdDO0FBQ2hDO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztFQUNiO0FBRUEsbUNBQW1DO0FBQ25DO0lBQ0UsWUFBWTtFQUNkO0FBRUEsNENBQTRDO0FBQzVDO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7RUFDM0I7QUFFQSxrREFBa0Q7QUFDbEQ7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCO0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjtBQUVBLDhCQUE4QjtBQUM5QjtJQUNFLGFBQWE7RUFDZjtBQUVBLCtCQUErQjtBQUMvQjtJQUNFLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7QUFFQSxvRUFBb0U7QUFDcEU7SUFDRTtNQUNFLGNBQWM7TUFDZCxXQUFXO0lBQ2I7SUFDQTtNQUNFLFdBQVc7SUFDYjtFQUNGIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQm9yZGVyZWQgZm9ybSAqL1xuZm9ybSB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcbiAgfVxuICBcbiAgLyogRnVsbC13aWR0aCBpbnB1dHMgKi9cbiAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgXG4gIC8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC8qIEFkZCBhIGhvdmVyIGVmZmVjdCBmb3IgYnV0dG9ucyAqL1xuICBidXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuICBcbiAgLyogRXh0cmEgc3R5bGUgZm9yIHRoZSBjYW5jZWwgYnV0dG9uIChyZWQpICovXG4gIC5jYW5jZWxidG4ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHggMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICB9XG4gIFxuICAvKiBDZW50ZXIgdGhlIGF2YXRhciBpbWFnZSBpbnNpZGUgdGhpcyBjb250YWluZXIgKi9cbiAgLmltZ2NvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMjRweCAwIDEycHggMDtcbiAgfVxuICBcbiAgLyogQXZhdGFyIGltYWdlICovXG4gIGltZy5hdmF0YXIge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIFxuICAvKiBBZGQgcGFkZGluZyB0byBjb250YWluZXJzICovXG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbiAgXG4gIC8qIFRoZSBcIkZvcmdvdCBwYXNzd29yZFwiIHRleHQgKi9cbiAgc3Bhbi5wc3cge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgfVxuICBcbiAgLyogQ2hhbmdlIHN0eWxlcyBmb3Igc3BhbiBhbmQgY2FuY2VsIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gICAgc3Bhbi5wc3cge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgLmNhbmNlbGJ0biB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forum/forum.component */ "m5Ef");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin/signin.component */ "/hi3");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news/news.component */ "6XR0");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'forum', component: _forum_forum_component__WEBPACK_IMPORTED_MODULE_1__["ForumComponent"] },
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"] },
    { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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
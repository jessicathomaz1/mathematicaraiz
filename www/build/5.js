webpackJsonp([5],{

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssuntoDetailsPageModule", function() { return AssuntoDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assunto_details__ = __webpack_require__(627);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AssuntoDetailsPageModule = /** @class */ (function () {
    function AssuntoDetailsPageModule() {
    }
    AssuntoDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__assunto_details__["a" /* AssuntoDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__assunto_details__["a" /* AssuntoDetailsPage */]),
            ],
        })
    ], AssuntoDetailsPageModule);
    return AssuntoDetailsPageModule;
}());

//# sourceMappingURL=assunto-details.module.js.map

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssuntoDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AssuntoDetailsPage = /** @class */ (function () {
    function AssuntoDetailsPage(navCtrl, navParams, af, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
        this.viewCtrl = viewCtrl;
        this.assuntos = new Object();
        this.modal = false;
        console.log('===>>>>', this.navParams.get('data'));
    }
    //Close modal
    AssuntoDetailsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AssuntoDetailsPage.prototype.ngAfterViewInit = function () {
        this.assuntos = this.navParams.get('data');
        console.log(this.assuntos);
    };
    AssuntoDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assunto-details',template:/*ion-inline-start:"C:\JavaScript\mathematica\src\pages\assunto-details\assunto-details.html"*/'<ion-content padding>\n    <div class="menu-header">\n        <ion-icon ios="ios-arrow-round-back" md="md-arrow-round-back" class="close" (click)="close()"></ion-icon>\n        <h2 class="bold center">\n            {{assuntos.nome}}\n        </h2>\n    </div>\n    <div class="body-details" [innerHTML]="assuntos.descricao">\n    </div>\n</ion-content>'/*ion-inline-end:"C:\JavaScript\mathematica\src\pages\assunto-details\assunto-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], AssuntoDetailsPage);
    return AssuntoDetailsPage;
}());

//# sourceMappingURL=assunto-details.js.map

/***/ })

});
//# sourceMappingURL=5.js.map
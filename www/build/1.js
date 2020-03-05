webpackJsonp([1],{

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestoesPageModule", function() { return QuestoesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questoes__ = __webpack_require__(632);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuestoesPageModule = /** @class */ (function () {
    function QuestoesPageModule() {
    }
    QuestoesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__questoes__["a" /* QuestoesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__questoes__["a" /* QuestoesPage */]),
            ],
        })
    ], QuestoesPageModule);
    return QuestoesPageModule;
}());

//# sourceMappingURL=questoes.module.js.map

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestoesPage = /** @class */ (function () {
    function QuestoesPage(navCtrl, navParams, firebaseProvider, loadingProvider, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.loadingProvider = loadingProvider;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.modal = false;
        this.getQuestoes();
        this.loadingProvider.present();
        this.modal = this.navParams.get('modal');
    }
    //Refresh page
    QuestoesPage.prototype.refresh = function (refresher) {
        refresher.complete();
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    //Close modal
    QuestoesPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    //Open assunto page
    QuestoesPage.prototype.open = function (p) {
        var modal = this.modalCtrl.create('AssuntosPage', { questoes: p });
        modal.present();
    };
    //Open cart
    QuestoesPage.prototype.openCart = function () {
        var modal = this.modalCtrl.create('CartPage', { modal: true });
        modal.present();
    };
    //List all assuntos to slides
    QuestoesPage.prototype.getQuestoes = function () {
        var _this = this;
        this.firebaseProvider.getQuestoes()
            .subscribe(function (res) {
            _this.loadingProvider.dismiss();
            _this.questoes = res;
        });
    };
    //Open Details
    QuestoesPage.prototype.openDatailsQuest = function (value) {
        console.log(value);
        var modal = this.modalCtrl.create('QuestDetailsPage', { data: value });
        modal.present();
    };
    QuestoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-questoes',template:/*ion-inline-start:"C:\JavaScript\mathematica\src\pages\questoes\questoes.html"*/'<ion-content>\n    <!-- REFRESH -->\n    <ion-refresher (ionRefresh)="refresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <!-- FEATURES TEXT -->\n    <div class="menu-header">\n        <img *ngIf="modal" src="assets/imgs/close.png" class="close" (click)="close()">\n        <h2 class="eggshell bold no-margin">\n            Questões\n        </h2>\n    </div>\n\n    <!-- Questões -->\n    <div class="padding-20">\n        <ion-item *ngFor="let q of questoes; let i = index" (click)="openDatailsQuest(q)">\n            <ion-label>\n                <h2>{{q.nome}}</h2>\n                <p class="item-description">{{q.conteudo}}</p>\n            </ion-label>\n        </ion-item>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\JavaScript\mathematica\src\pages\questoes\questoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firebase__["a" /* FirebaseProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], QuestoesPage);
    return QuestoesPage;
}());

//# sourceMappingURL=questoes.js.map

/***/ })

});
//# sourceMappingURL=1.js.map
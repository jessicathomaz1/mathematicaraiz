webpackJsonp([3],{

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed__ = __webpack_require__(629);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FeedPageModule = /** @class */ (function () {
    function FeedPageModule() {
    }
    FeedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feed__["a" /* FeedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feed__["a" /* FeedPage */]),
            ],
        })
    ], FeedPageModule);
    return FeedPageModule;
}());

//# sourceMappingURL=feed.module.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedPage = /** @class */ (function () {
    function FeedPage(navCtrl, navParams, storage, firebaseProvider, loadingProvider, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.firebaseProvider = firebaseProvider;
        this.loadingProvider = loadingProvider;
        this.modalCtrl = modalCtrl;
        this.amount = 0;
        this.items = [];
        //-------------------------------------------------------------------------------------------------//
        //										OPEN PAGES                                               //
        //-------------------------------------------------------------------------------------------------//
        //Open assuntos
        this.openAssuntos = function () {
            return _this.modalCtrl.create("MenuPage", { modal: true }).present();
        };
        //Open assuntos
        this.openQuestoes = function () {
            return _this.modalCtrl.create("QuestoesPage", { modal: true }).present();
        };
        //Open products
        this.openProfiles = function () {
            return _this.modalCtrl.create("ProfilePage", { modal: true }).present();
        };
        //Open cart
        this.openCart = function () {
            return _this.modalCtrl.create("CartPage", { modal: true }).present();
        };
        //-------------------------------------------------------------------------------------------------//
        //-------------------------------------------------------------------------------------------------//
        this.ionViewDidLoad = function () {
            //Build cart
            _this.storage.get("cart_pizza_app").then(function (res) {
                if (res) {
                    _this.items = res;
                    //Amount
                    var i = 0;
                    for (i; i < _this.items.length; i++) {
                        var price = parseFloat(_this.items[i].price);
                        _this.amount = _this.amount + price;
                    }
                }
            });
        };
        //Get current user data
        this.getCurrentUser = function () {
            _this.storage.get("user_pizza_app").then(function (user) {
                _this.user = user;
            });
        };
        //List all Assuntos to slides
        this.getAssuntos = function () {
            _this.firebaseProvider.getAssuntos().subscribe(function (res) {
                _this.loadingProvider.dismiss();
                _this.assuntos = res;
            });
        };
        //Convert to price format
        this.toPrice = function (price) { return parseFloat(price).toFixed(2); };
        this.loadingProvider.present().then(function () {
            _this.getCurrentUser();
            _this.getAssuntos();
        });
    }
    //Refresh page
    FeedPage.prototype.refresh = function (refresher) {
        refresher.complete();
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-feed",template:/*ion-inline-start:"C:\JavaScript\mathematica\src\pages\feed\feed.html"*/'<ion-content *ngIf="user">\n    <!-- REFRESH -->\n    <ion-refresher (ionRefresh)="refresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <!-- HEADER -->\n    <div class="feed-header">\n        <!-- WELCOME MESSAGE -->\n        <h4 class="eggshell regular">\n            Olá, {{user.name}}!\n        </h4>\n\n        <!-- DEFAULT AVATAR -->\n        <div *ngIf="!user.avatar" class="avatarPos avatar">\n        </div>\n        <!-- USER AVATAR -->\n        <div *ngIf="user.avatar" class="avatarPos" [ngStyle]="{ \'background-image\': \'url(\' + user.avatar + \')\'}" (click)="openProfiles()">\n        </div>\n    </div>\n\n    <!-- SUBHEADER -->\n    <div class="feed-subheader">\n        <!-- ADDRESS -->\n        <p class="black bold" *ngIf="!user.address" (click)="openProfiles()">\n            Atualize seu perfil!\n        </p>\n        <p class=" black bold " *ngIf="user.address ">\n            {{user.address}}\n        </p>\n    </div>\n\n    <!-- BODY -->\n    <div class="no-padding padding-bottom-0 ">\n        <!-- FEATURED TEXT -->\n        <h3 class="center black bold ">\n            Por onde vamos começar?\n        </h3>\n\n        <ion-slides pager class="customSlides ">\n            <!-- SLIDE ITEMS -->\n            <ion-slide class="customSlide1">\n                <div class="slide-zoom" (click)="openAssuntos()">\n                    <div class="slideInfo">\n                        <p class="slidetextDescription center ">Explore os assuntos que <br>mais caem nas provas!</p>\n                    </div>\n                    <img class="addIcon" src="assets/imgs/add.png">\n                </div>\n            </ion-slide>\n            <ion-slide class="customSlide2 left20 ">\n                <div class="slide-zoom" (click)="openQuestoes()">\n                    <div class="slideInfo">\n                        <p class="slidetextDescription center ">Resolva as questões e tire <br>suas dúvidas!</p>\n                    </div>\n                    <img class="addIcon" src="assets/imgs/add.png">\n                </div>\n            </ion-slide>\n            <ion-slide class="customSlide3 left20 ">\n                <div class="slide-zoom" (click)="openAssuntos()">\n                    <div class="slideInfo ">\n                        <p class="slidetextDescription center ">Fique informado sobre os <br>concursos e editais!</p>\n                    </div>\n                    <img class="addIcon" src="assets/imgs/add.png">\n                </div>\n            </ion-slide>\n        </ion-slides>\n\n        <!-- FEATURED TEXT -->\n        <h3 class="padding-top-50-percent black bold mg-top-60 padding-20 ">\n            Estatística\n        </h3>\n\n        <!-- AMOUNT -->\n        <div class="margin-20 amountContainer ">\n            <h1 class="red bold no-margin font40 " style="display: inline-block ">\n                {{toPrice(amount)}}\n            </h1>\n\n            <div class="amountRight ">\n                <h1 class="red bold no-margin font40 " style="display: inline-block ">\n                    {{items.length}}\n                </h1>\n                <h4 class="red regular no-margin " style="display: inline-block ">\n                    Acertos\n                </h4>\n            </div>\n        </div>\n\n        <!-- SHOW ALL OPTIONS -->\n        <div class="margin-20 showAllOptions bold center mg-top-10 " (click)="openCart() ">\n            Abrir estatística\n        </div>\n    </div>\n\n    <br>\n    <br>\n    <br>\n</ion-content>'/*ion-inline-end:"C:\JavaScript\mathematica\src\pages\feed\feed.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_firebase__["a" /* FirebaseProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ })

});
//# sourceMappingURL=3.js.map
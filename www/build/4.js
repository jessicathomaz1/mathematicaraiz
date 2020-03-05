webpackJsonp([4],{

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(628);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
            ],
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams, storage, alertCtrl, viewCtrl, loadingProvider, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingProvider = loadingProvider;
        this.firebaseProvider = firebaseProvider;
        this.cart = [];
        this.modal = false;
        this.amount = 0;
        this.getCartData();
        this.getCurrentUser();
        this.modal = this.navParams.get('modal');
    }
    //Refresh page
    CartPage.prototype.refresh = function (refresher) {
        refresher.complete();
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    //Close modal
    CartPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    //Get products added on cart
    CartPage.prototype.getCartData = function () {
        var _this = this;
        this.storage.get('cart_pizza_app')
            .then(function (res) {
            if (res) {
                _this.cart = res;
                _this.updateAmount();
            }
        });
    };
    //Update amount
    CartPage.prototype.updateAmount = function () {
        //Amount
        var i = 0;
        for (i; i < this.cart.length; i++) {
            var price = parseFloat(this.cart[i].price);
            this.amount = this.amount + price;
        }
    };
    //Convert to price format
    CartPage.prototype.toPrice = function (price) {
        price = parseFloat(price);
        return price.toFixed(2);
    };
    //Remove item from cart
    CartPage.prototype.removeItem = function (i, item) {
        var _this = this;
        var index = i;
        this.cart.splice(index, 1);
        // Update cart on storage
        this.storage.set('cart_pizza_app', this.cart)
            .then(function (res) {
            var alert = _this.alertCtrl.create({
                title: 'Sucesso',
                subTitle: 'Item removido do seu carrinho com sucesso!',
                buttons: ['Ok']
            });
            alert.present();
            _this.updateAmount();
        });
    };
    //Get current user data
    CartPage.prototype.getCurrentUser = function () {
        var _this = this;
        this.storage.get('user_pizza_app')
            .then(function (user) {
            _this.user = user;
        });
    };
    //Pay and create order
    CartPage.prototype.pay = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Finalizar',
            message: "Total: R$" + this.toPrice(this.amount),
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Efetuar pedido',
                    handler: function (data) {
                        //Crate order on firestore
                        _this.loadingProvider.present();
                        var order = {
                            items: _this.cart,
                            total: _this.amount,
                            from: _this.user.uid
                        };
                        _this.firebaseProvider.postOrder(order)
                            .then(function (res) {
                            _this.loadingProvider.dismiss();
                            //Clear storage cart
                            _this.storage.set('cart_pizza_app', null);
                            //Alert
                            var alert = _this.alertCtrl.create({
                                title: 'Obrigado',
                                subTitle: 'Seu pedido já foi encaminhado!',
                                buttons: ['Voltar']
                            });
                            alert.present();
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"C:\JavaScript\mathematica\src\pages\cart\cart.html"*/'<ion-content>\n  <!-- REFRESH -->\n  <ion-refresher (ionRefresh)="refresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  \n  <!-- FEATURES TEXT -->\n  <div class="padding-20 padding-bottom-0">\n    <img *ngIf="modal" src="assets/imgs/close-black.png" class="close" (click)="close()">\n    <h2 class="black bold no-margin">\n      Carrinho\n    </h2>\n    <p class="gray bold">Pressione um item para remover do carrinho</p>\n  </div>\n\n  <!-- CART ITEMS -->\n  <div class="padding-20">\n    <!-- ITEM -->\n    <div class="product" *ngFor="let item of cart; let i = index" (press)="removeItem(i, item)">\n      <h4 class="black">\n        {{item.title}}\n      </h4>\n\n      <h4 class="black price">\n        R${{toPrice(item.price)}}\n      </h4>\n    </div>\n\n    <!-- AMOUNT -->\n    <h3 class="red bold mg-top-40">Total: R${{toPrice(amount)}}</h3>\n  </div>\n\n  <!-- FAB CART BUTTON -->\n  <ion-fab right bottom (click)="pay()">\n    <button ion-fab class="bgButton">\n      <ion-icon class="eggshell" name="logo-usd"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <br>\n  <br>\n  <br>\n</ion-content>'/*ion-inline-end:"C:\JavaScript\mathematica\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_firebase__["a" /* FirebaseProvider */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=4.js.map
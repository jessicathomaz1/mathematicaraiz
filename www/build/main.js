webpackJsonp([6],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingProvider = /** @class */ (function () {
    function LoadingProvider(loadingCtrl) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        /**
         * Present the custom loading.
         * @returns {Promise} Returns a promise after successfully presenting the loading.
         */
        this.present = function () {
            _this.loading = _this.loadingCtrl.create({
                spinner: "hide",
                content: "\n          <div class=\"custom-spinner-container\">\n          <div class=\"spinner\">\n            <div class=\"double-bounce1\"></div>\n            <div class=\"double-bounce2\"></div>\n          </div>\n          </div>"
            });
            return _this.loading.present();
        };
        /**
         * Dismiss the presented loading.
         * @returns {Promise} Returns a promise after successfully dismissing the loading.
         */
        this.dismiss = function () {
            return new Promise(function (resolve, reject) {
                if (_this.loading) {
                    return _this.loading.dismiss(resolve(true));
                }
                else {
                    resolve(true);
                }
            });
        };
    }
    LoadingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoadingProvider);
    return LoadingProvider;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseProvider = /** @class */ (function () {
    function FirebaseProvider(afs) {
        var _this = this;
        this.afs = afs;
        //Save user on firestore
        this.saveUser = function (data) {
            return _this.afs
                .collection("Users")
                .doc(data.$key)
                .update(data);
        };
        //Create user on firestore
        this.postUser = function (data) {
            return _this.afs
                .collection("Users")
                .doc(data.uid)
                .set(data);
        };
        //Create order on firestore
        this.postOrder = function (data) { return _this.afs.collection("Orders").add(data); };
        //Get current user from uid
        this.getCurrentUser = function (uid) {
            var collection = _this.afs.collection("Users", function (ref) { return ref.where("uid", "==", uid); });
            var collection$ = collection
                .snapshotChanges()
                .map(function (actions) {
                return actions.map(function (action) { return (__assign({ $key: action.payload.doc.id }, action.payload.doc.data())); });
            });
            return collection$;
        };
        //Get assuntos
        this.getAssuntos = function () {
            var collection = _this.afs.collection("Assuntos");
            var collection$ = collection
                .snapshotChanges()
                .map(function (actions) {
                return actions.map(function (action) { return (__assign({ $key: action.payload.doc.id }, action.payload.doc.data())); });
            });
            return collection$;
        };
        //Get Questões
        this.getQuestoes = function () {
            var collection = _this.afs.collection("Questoes");
            var collection$ = collection
                .snapshotChanges()
                .map(function (actions) {
                return actions.map(function (action) { return (__assign({ $key: action.payload.doc.id }, action.payload.doc.data())); });
            });
            return collection$;
        };
    }
    FirebaseProvider.prototype.getEpisodeById = function (id) {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.afs.collection("Assuntos")
                .snapshotChanges()
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    FirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"]])
    ], FirebaseProvider);
    return FirebaseProvider;
}());

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthProvider = /** @class */ (function () {
    function AuthProvider(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        //Create user
        this.register = function (data) { return _this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.pass); };
        //Login
        this.login = function (data) { return _this.afAuth.auth.signInWithEmailAndPassword(data.email, data.pass); };
    }
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 236;

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/assunto-details/assunto-details.module": [
		620,
		5
	],
	"../pages/cart/cart.module": [
		621,
		4
	],
	"../pages/create-account/create-account.module": [
		297
	],
	"../pages/feed/feed.module": [
		622,
		3
	],
	"../pages/login/login.module": [
		301
	],
	"../pages/menu/menu.module": [
		623,
		2
	],
	"../pages/profile/profile.module": [
		624,
		0
	],
	"../pages/quest-details/quest-details.module": [
		303
	],
	"../pages/questoes/questoes.module": [
		625,
		1
	],
	"../pages/tabs/tabs.module": [
		304
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 278;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountPageModule", function() { return CreateAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_account__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreateAccountPageModule = /** @class */ (function () {
    function CreateAccountPageModule() {
    }
    CreateAccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_account__["a" /* CreateAccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_account__["a" /* CreateAccountPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */]
            ],
        })
    ], CreateAccountPageModule);
    return CreateAccountPageModule;
}());

//# sourceMappingURL=create-account.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */]
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestDetailsPageModule", function() { return QuestDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quest_details__ = __webpack_require__(596);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuestDetailsPageModule = /** @class */ (function () {
    function QuestDetailsPageModule() {
    }
    QuestDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__quest_details__["a" /* QuestDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__quest_details__["a" /* QuestDetailsPage */]),
            ],
        })
    ], QuestDetailsPageModule);
    return QuestDetailsPageModule;
}());

//# sourceMappingURL=quest-details.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(597);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
            ],
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesUpload; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImagesUpload = /** @class */ (function () {
    function ImagesUpload() {
        this.myPhotosRef = __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref("Images/");
    }
    ImagesUpload.prototype.uploadPhoto = function (myPhoto, fileName, type) {
        return this.myPhotosRef
            .child("/" + type + "/" + fileName)
            .putString(myPhoto, "base64", { contentType: "image/jpeg" });
    };
    ImagesUpload = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ImagesUpload);
    return ImagesUpload;
}());

//# sourceMappingURL=image-upload.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(469);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__configs_firebase__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_image_upload__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_firebase__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_loading__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login_module__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_create_account_create_account_module__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs_module__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_quest_details_quest_details_module__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_search_search__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_sort_sort__ = __webpack_require__(619);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//Firebase config

//Providers








//Pages






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_search_search__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_sort_sort__["a" /* SortPipe */]
            ],
            imports: [
                //Pages
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_create_account_create_account_module__["CreateAccountPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs_module__["TabsPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_quest_details_quest_details_module__["QuestDetailsPageModule"],
                //Others
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/assunto-details/assunto-details.module#AssuntoDetailsPageModule', name: 'AssuntoDetailsPage', segment: 'assunto-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-account/create-account.module#CreateAccountPageModule', name: 'CreateAccountPage', segment: 'create-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quest-details/quest-details.module#QuestDetailsPageModule', name: 'QuestDetailsPage', segment: 'quest-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/questoes/questoes.module#QuestoesPageModule', name: 'QuestoesPage', segment: 'questoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_6__configs_firebase__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__["AngularFirestoreModule"],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["AngularFireAuthModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__providers_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_firebase__["a" /* FirebaseProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_loading__["a" /* LoadingProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_image_upload__["a" /* ImagesUpload */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateAccountPage = /** @class */ (function () {
    function CreateAccountPage(navCtrl, navParams, formBuilder, authProvider, firebaseProvider, loadingProvider, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.authProvider = authProvider;
        this.firebaseProvider = firebaseProvider;
        this.loadingProvider = loadingProvider;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.createUserOnFirestore = function () {
            var data = {
                name: _this.form.value.name,
                email: _this.form.value.email,
                uid: _this.uid
            };
            _this.firebaseProvider.postUser(data).then(function (res) {
                _this.getAndSaveCurrentUser();
            });
        };
        this.getAndSaveCurrentUser = function () {
            _this.firebaseProvider.getCurrentUser(_this.uid).subscribe(function (res) {
                _this.loadingProvider.dismiss();
                var user = res[0];
                _this.storage.set("user_pizza_app", user).then(function () {
                    _this.navCtrl.setRoot("TabsPage");
                });
            });
        };
        /**
         * Set the root back to login page
         */
        this.haveAccount = function () { return _this.navCtrl.pop(); };
        this.buildForm();
    }
    CreateAccountPage.prototype.buildForm = function () {
        this.form = this.formBuilder.group({
            name: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            email: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            pass: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    };
    CreateAccountPage.prototype.register = function () {
        var _this = this;
        this.loadingProvider.present().then(function () {
            var data = _this.form.value;
            _this.authProvider
                .register(data)
                .then(function (res) {
                _this.uid = res.user.uid;
                _this.createUserOnFirestore();
            })
                .catch(function () {
                _this.loadingProvider.dismiss();
                _this.alertCtrl.create({
                    title: "Ops",
                    subTitle: "Algo deu errado. Por favor, tente mais uma vez.",
                    buttons: ["Ok"]
                }).present();
            });
        });
    };
    CreateAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-create-account",template:/*ion-inline-start:"C:\JavaScript\mathematica\src\pages\create-account\create-account.html"*/'<ion-content padding class="registerBackground">\n    <!-- FEATURED TEXT -->\n    <div class="mg-top-20-percent">\n        <h2 class="eggshell bold center">\n            Cadastre-se\n        </h2>\n    </div>\n\n    <!-- INPUTS AND CTA -->\n    <div class="mg-top-40 customInputsPadding">\n        <form [formGroup]="form" (ngSubmit)="register()" class="form-bg-dark">\n            <!-- NAME -->\n            <ion-item class="transparent-bg no-padding">\n                <ion-label stacked class="eggshell">Como você se chama?</ion-label>\n                <ion-input formControlName="name" type="text" class="eggshell bold"></ion-input>\n            </ion-item>\n\n            <!-- EMAIL -->\n            <ion-item class="transparent-bg no-padding mg-top-20">\n                <ion-label stacked class="eggshell">Qual é o seu e-mail?</ion-label>\n                <ion-input formControlName="email" type="email" class="eggshell bold"></ion-input>\n            </ion-item>\n\n            <!-- PASS -->\n            <ion-item class="transparent-bg no-padding mg-top-20">\n                <ion-label stacked class="eggshell">Escolha uma senha</ion-label>\n                <ion-input formControlName="pass" type="password" class="eggshell bold"></ion-input>\n            </ion-item>\n\n            <!-- CTA -->\n            <div class="registerCta mg-top-40">\n                <button class="eggshell bold no-padding btnRegister padding-top-5" ion-button clear [disabled]="!form.valid" type="submit">\n          Me cadastrar\n        </button>\n            </div>\n\n            <!-- CREATE ACCOUNT TEXT -->\n            <div class="mg-top-40 center eggshell bold" (click)="haveAccount()">\n                Já tenho uma conta\n            </div>\n        </form>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\JavaScript\mathematica\src\pages\create-account\create-account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_firebase__["a" /* FirebaseProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], CreateAccountPage);
    return CreateAccountPage;
}());

//# sourceMappingURL=create-account.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, formBuilder, authProvider, loadingProvider, firebaseProvider, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.authProvider = authProvider;
        this.loadingProvider = loadingProvider;
        this.firebaseProvider = firebaseProvider;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        /**
         * Seta o root da aplicação na página de criar conta
         */
        this.createAccount = function () { return _this.navCtrl.push('CreateAccountPage'); };
        this.buildForm();
    }
    LoginPage.prototype.buildForm = function () {
        this.form = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            pass: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loadingProvider.present().then(function () {
            var data = _this.form.value;
            _this.authProvider.login(data)
                .then(function (res) {
                _this.getAndSaveCurrentUser(res.user.uid);
            })
                .catch(function () {
                _this.loadingProvider.dismiss();
                var alert = _this.alertCtrl.create({
                    title: 'Ops',
                    subTitle: 'Algo deu errado. Por favor, tente mais uma vez.',
                    buttons: ['Ok']
                });
                alert.present();
            });
        });
    };
    LoginPage.prototype.getAndSaveCurrentUser = function (uid) {
        var _this = this;
        this.firebaseProvider.getCurrentUser(uid)
            .subscribe(function (res) {
            var user = res[0];
            _this.storage.set('user_pizza_app', user).then(function () {
                _this.loadingProvider.dismiss();
                _this.navCtrl.setRoot('TabsPage');
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\JavaScript\mathematica\src\pages\login\login.html"*/'<ion-content padding class="loginBackground">\n  <!-- FEATURED TEXT -->\n  <div class="mg-top-30-percent">\n    <h2 class="eggshell bold center">\n      Olá, seja\n      <br> bem-vindo(a)!\n    </h2>\n  </div>\n\n  <!-- INPUTS AND CTA -->\n  <div class="mg-top-40 customInputsPadding">\n    <form [formGroup]="form" (ngSubmit)="login()" class="form-bg-dark">\n      <!-- EMAIL -->\n      <ion-item class="transparent-bg no-padding">\n        <ion-label stacked class="eggshell"><h1><b>E-mail</b></h1></ion-label>\n        <ion-input formControlName="email" type="email" class="eggshell bold"></ion-input>\n      </ion-item>\n\n      <!-- PASS -->\n      <ion-item class="transparent-bg no-padding mg-top-20">\n        <ion-label stacked class="eggshell">Senha</ion-label>\n        <ion-input formControlName="pass" type="password" class="eggshell bold"></ion-input>\n      </ion-item>\n\n      <!-- CTA -->\n      <div class="loginCta mg-top-40">\n        <button class="eggshell bold no-padding btnLogin padding-top-5" ion-button clear [disabled]="!form.valid" type="submit">\n          Entrar\n        </button>\n      </div>\n\n      <!-- CREATE ACCOUNT TEXT -->\n      <div class="mg-top-40 center eggshell bold" (click)="createAccount()">\n        Criar uma conta\n      </div>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\JavaScript\mathematica\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_firebase__["a" /* FirebaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestDetailsPage; });
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



var QuestDetailsPage = /** @class */ (function () {
    function QuestDetailsPage(navCtrl, navParams, af, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
        this.viewCtrl = viewCtrl;
        this.questoes = new Object();
        this.modal = false;
        console.log('===>>>>', this.navParams.get('data'));
    }
    //Close modal
    QuestDetailsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    QuestDetailsPage.prototype.ngAfterViewInit = function () {
        this.questoes = this.navParams.get('data');
        console.log(this.questoes);
    };
    QuestDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quest-details',template:/*ion-inline-start:"C:\JavaScript\mathematica\src\pages\quest-details\quest-details.html"*/'<ion-content padding>\n    <div class="menu-header">\n        <ion-icon ios="ios-arrow-round-back" md="md-arrow-round-back" class="close" (click)="close()"></ion-icon>\n        <h2 class="bold center">\n            {{questoes.nome}}\n        </h2>\n    </div>\n    <div class="body-details" [innerHTML]="questoes.descricao">\n    </div>\n</ion-content>'/*ion-inline-end:"C:\JavaScript\mathematica\src\pages\quest-details\quest-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], QuestDetailsPage);
    return QuestDetailsPage;
}());

//# sourceMappingURL=quest-details.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.feedTab = 'FeedPage';
        this.menuTab = 'MenuPage';
        this.cartTab = 'QuestoesPage';
        this.profileTab = 'ProfilePage';
        this.selectTab = 0;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\JavaScript\mathematica\src\pages\tabs\tabs.html"*/'<ion-tabs [selectedIndex]="selectTab">\n    <ion-tab [root]="feedTab" tabTitle="" tabIcon="ios-home"></ion-tab>\n    <ion-tab [root]="menuTab" tabTitle="" tabIcon="md-bookmarks"></ion-tab>\n    <ion-tab [root]="cartTab" tabTitle="" tabIcon="ios-help-circle"></ion-tab>\n    <ion-tab [root]="profileTab" tabTitle="" tabIcon="md-contact"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\JavaScript\mathematica\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        var _this = this;
        this.storage = storage;
        /**
         * If the user is already loged in set the root to the home page
         * if it's not set to the login page
         */
        this.storage.get('user_pizza_app')
            .then(function (user) {
            if (user)
                _this.rootPage = 'TabsPage';
            else
                _this.rootPage = 'LoginPage';
        });
        platform.ready().then(function () {
            setTimeout(function () {
                splashScreen.hide();
            });
            statusBar.styleDefault();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\JavaScript\mathematica\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\JavaScript\mathematica\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
// projeto firebase mathematica
var firebaseConfig = {
    apiKey: "AIzaSyDoQ4E-kHEjBPou2QMj9cmYOGlpccTjbFM",
    authDomain: "mathematica-f779a.firebaseapp.com",
    databaseURL: "https://mathematica-f779a.firebaseio.com",
    projectId: "mathematica-f779a",
    storageBucket: "mathematica-f779a.appspot.com",
    messagingSenderId: "663342976982",
    appId: "1:663342976982:web:d8912284a75614c9151e77"
};
//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SearchPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(function (it) {
            return it.nome.toLowerCase().includes(terms);
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SortPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SortPipe.prototype.transform = function (array, args) {
        return array.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.order;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.order;
            }
            else {
                return 0;
            }
        });
    };
    SortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'sort',
        })
    ], SortPipe);
    return SortPipe;
}());

//# sourceMappingURL=sort.js.map

/***/ })

},[348]);
//# sourceMappingURL=main.js.map
webpackJsonp([0],{

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(626);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DestinationType */
/* unused harmony export EncodingType */
/* unused harmony export MediaType */
/* unused harmony export PictureSourceType */
/* unused harmony export PopoverArrowDirection */
/* unused harmony export Direction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Camera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(202);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DestinationType;
(function (DestinationType) {
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
    DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
var MediaType;
(function (MediaType) {
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));
var PictureSourceType;
(function (PictureSourceType) {
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));
var PopoverArrowDirection;
(function (PopoverArrowDirection) {
    PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));
var Direction;
(function (Direction) {
    Direction[Direction["BACK"] = 0] = "BACK";
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));
/**
 * @name Camera
 * @description
 * Take a photo or capture video.
 *
 * Requires the Cordova plugin: `cordova-plugin-camera`. For more info, please see the [Cordova Camera Plugin Docs](https://github.com/apache/cordova-plugin-camera).
 *
 * [Warning] Since IOS 10 the camera requires permissions to be placed in your config.xml add
 * ```xml
 * <config-file parent="NSCameraUsageDescription" platform="ios" target="*-Info.plist">
 *  <string>You can take photos</string>
 * </config-file>
 * ```
 * inside of the <platform name='ios> section
 *
 * @usage
 * ```typescript
 * import { Camera, CameraOptions } from '@ionic-native/camera';
 *
 * constructor(private camera: Camera) { }
 *
 * ...
 *
 *
 * const options: CameraOptions = {
 *   quality: 100,
 *   destinationType: this.camera.DestinationType.FILE_URI,
 *   encodingType: this.camera.EncodingType.JPEG,
 *   mediaType: this.camera.MediaType.PICTURE
 * }
 *
 * this.camera.getPicture(options).then((imageData) => {
 *  // imageData is either a base64 encoded string or a file URI
 *  // If it's base64 (DATA_URL):
 *  let base64Image = 'data:image/jpeg;base64,' + imageData;
 * }, (err) => {
 *  // Handle error
 * });
 * ```
 * @interfaces
 * CameraOptions
 * CameraPopoverOptions
 */
var Camera = (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
           * Constant for possible destination types
           */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2
        };
        /**
           * Convenience constant
           */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1
        };
        /**
           * Convenience constant
           */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2
        };
        /**
           * Convenience constant
           */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            SAVEDPHOTOALBUM: 2
        };
        /**
           * Convenience constant
           */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15
        };
        /**
           * Convenience constant
           */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1
        };
        return _this;
    }
    /**
     * Take a picture or video, or load one from the library.
     * @param {CameraOptions} [options] Options that you want to pass to the camera. Encoding type, quality, etc. Platform-specific quirks are described in the [Cordova plugin docs](https://github.com/apache/cordova-plugin-camera#cameraoptions-errata-).
     * @returns {Promise<any>} Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
     */
    /**
       * Take a picture or video, or load one from the library.
       * @param {CameraOptions} [options] Options that you want to pass to the camera. Encoding type, quality, etc. Platform-specific quirks are described in the [Cordova plugin docs](https://github.com/apache/cordova-plugin-camera#cameraoptions-errata-).
       * @returns {Promise<any>} Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
       */
    Camera.prototype.getPicture = /**
       * Take a picture or video, or load one from the library.
       * @param {CameraOptions} [options] Options that you want to pass to the camera. Encoding type, quality, etc. Platform-specific quirks are described in the [Cordova plugin docs](https://github.com/apache/cordova-plugin-camera#cameraoptions-errata-).
       * @returns {Promise<any>} Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
       */
    function (options) {
        return;
    };
    /**
     * Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
     * Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
     * @returns {Promise<any>}
     */
    /**
       * Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
       * Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
       * @returns {Promise<any>}
       */
    Camera.prototype.cleanup = /**
       * Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
       * Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    Camera.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Camera.prototype, "getPicture", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Camera.prototype, "cleanup", null);
    /**
     * @name Camera
     * @description
     * Take a photo or capture video.
     *
     * Requires the Cordova plugin: `cordova-plugin-camera`. For more info, please see the [Cordova Camera Plugin Docs](https://github.com/apache/cordova-plugin-camera).
     *
     * [Warning] Since IOS 10 the camera requires permissions to be placed in your config.xml add
     * ```xml
     * <config-file parent="NSCameraUsageDescription" platform="ios" target="*-Info.plist">
     *  <string>You can take photos</string>
     * </config-file>
     * ```
     * inside of the <platform name='ios> section
     *
     * @usage
     * ```typescript
     * import { Camera, CameraOptions } from '@ionic-native/camera';
     *
     * constructor(private camera: Camera) { }
     *
     * ...
     *
     *
     * const options: CameraOptions = {
     *   quality: 100,
     *   destinationType: this.camera.DestinationType.FILE_URI,
     *   encodingType: this.camera.EncodingType.JPEG,
     *   mediaType: this.camera.MediaType.PICTURE
     * }
     *
     * this.camera.getPicture(options).then((imageData) => {
     *  // imageData is either a base64 encoded string or a file URI
     *  // If it's base64 (DATA_URL):
     *  let base64Image = 'data:image/jpeg;base64,' + imageData;
     * }, (err) => {
     *  // Handle error
     * });
     * ```
     * @interfaces
     * CameraOptions
     * CameraPopoverOptions
     */
    Camera = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'Camera',
            plugin: 'cordova-plugin-camera',
            pluginRef: 'navigator.camera',
            repo: 'https://github.com/apache/cordova-plugin-camera',
            platforms: ['Android', 'Browser', 'iOS', 'Windows']
        })
    ], Camera);
    return Camera;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_image_upload__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, storage, loadingProvider, firebaseProvider, app, camera, storageImages, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.loadingProvider = loadingProvider;
        this.firebaseProvider = firebaseProvider;
        this.app = app;
        this.camera = camera;
        this.storageImages = storageImages;
        this.viewCtrl = viewCtrl;
        this.modal = false;
        this.user = {
            name: '',
            rua: '',
            numero: '',
            cidade: '',
            estado: '',
            bairro: '',
            complemento: '',
            uid: '',
            avatar: ''
        };
        this.bigImg = null;
        this.smallImg = null;
        this.getCurrentUser();
        this.modal = this.navParams.get('modal');
    }
    //Refresh page
    ProfilePage.prototype.refresh = function (refresher) {
        refresher.complete();
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    //Close modal
    ProfilePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    //Get current user data
    ProfilePage.prototype.getCurrentUser = function () {
        var _this = this;
        this.storage.get('user_pizza_app')
            .then(function (user) {
            _this.user = user;
        });
    };
    //Save user
    ProfilePage.prototype.save = function () {
        var _this = this;
        this.loadingProvider.present();
        this.firebaseProvider.saveUser(this.user)
            .then(function (res) {
            _this.getAndSaveCurrentUser(_this.user.uid);
        });
    };
    //Update user data on local storage
    ProfilePage.prototype.getAndSaveCurrentUser = function (uid) {
        var _this = this;
        this.firebaseProvider.getCurrentUser(uid)
            .subscribe(function (res) {
            _this.loadingProvider.dismiss();
            var user = res[0];
            _this.storage.set('user_pizza_app', user);
        });
    };
    //Logout
    ProfilePage.prototype.logout = function () {
        this.app.getRootNav().setRoot('LoginPage');
    };
    //Image upload
    ProfilePage.prototype.changeAvatar = function () {
        var _this = this;
        this.camera.getPicture({
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            correctOrientation: true,
            allowEdit: true,
            targetWidth: 900,
            targetHeight: 900
        }).then(function (imageData) {
            var base64data = 'data:image/jpeg;base64,' + imageData;
            _this.bigImg = base64data;
            //Get image size
            _this.createThumbnail();
        }, function (error) {
        });
    };
    ProfilePage.prototype.createThumbnail = function () {
        var _this = this;
        var load = this.loadingProvider;
        load.present();
        this.generateFromImage(this.bigImg, 1000, 1000, 100, function (data) {
            _this.smallImg = data;
            var imgToUp = _this.smallImg.split(',')[1];
            // console.log(imgToUp);
            _this.storageImages.uploadPhoto(imgToUp, _this.user.uid, 'Profile')
                .then(function (savedPicture) {
                var storageRef = __WEBPACK_IMPORTED_MODULE_7_firebase__["storage"]().ref('Images/' + 'Profile' + '/' + _this.user.uid);
                storageRef.getDownloadURL()
                    .then(function (url) {
                    load.dismiss();
                    _this.user.avatar = url;
                });
            })
                .catch(function (err) {
                load.dismiss();
            });
        });
    };
    ProfilePage.prototype.generateFromImage = function (img, MAX_WIDTH, MAX_HEIGHT, quality, callback) {
        var canvas = document.createElement("canvas");
        var image = new Image();
        image.onload = function () {
            var width = image.width;
            var height = image.height;
            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            }
            else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0, width, height);
            // IMPORTANT: 'jpeg' NOT 'jpg'
            var dataUrl = canvas.toDataURL('image/jpeg', quality);
            callback(dataUrl);
        };
        image.src = img;
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\JavaScript\mathematica\src\pages\profile\profile.html"*/'<ion-content *ngIf="user">\n    <!-- REFRESH -->\n    <ion-refresher (ionRefresh)="refresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <!-- FEATURES TEXT -->\n    <div class="padding-20 padding-bottom-0">\n        <img *ngIf="modal" src="assets/imgs/close-black.png" class="close" (click)="close()">\n        <h2 class="black bold no-margin">Perfil\n        </h2>\n    </div>\n\n    <!-- CART ITEMS -->\n    <div class="padding-20">\n        <!-- AVATAR -->\n        <div class="center">\n            <img *ngIf="!user.avatar" class="avatarPos avatar" (click)="changeAvatar()">\n            <img *ngIf="user.avatar" class="avatarPos" [ngStyle]="{ \'background-image\': \'url(\' + user.avatar + \')\'}" (click)="changeAvatar()">\n        </div>\n\n        <!-- FORMS -->\n        <ion-grid class="no-padding mg-top-30 form-bg-light">\n            <ion-row class="no-padding">\n                <ion-col col-12>\n                    <!-- NAME -->\n                    <ion-item class="transparent-bg no-padding">\n                        <ion-label stacked class="black">Nome</ion-label>\n                        <ion-input [(ngModel)]="user.name" type="text" class="black bold"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row class="no-padding mg-top-20">\n                <ion-col col-6>\n                    <!-- CITY -->\n                    <ion-item class="transparent-bg no-padding">\n                        <ion-label stacked class="black">Cidade</ion-label>\n                        <ion-input [(ngModel)]="user.cidade" type="text" class="black bold"></ion-input>\n                    </ion-item>\n                </ion-col>\n\n                <ion-col col-6>\n                    <!-- STATE -->\n                    <ion-item class="transparent-bg no-padding">\n                        <ion-label stacked class="black">Estado</ion-label>\n                        <ion-input [(ngModel)]="user.estado" type="text" class="black bold"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row class="no-padding mg-top-20">\n                <ion-col col-12>\n                    <!-- ADDRESS -->\n                    <ion-item class="transparent-bg no-padding">\n                        <ion-label stacked class="black">Rua</ion-label>\n                        <ion-input [(ngModel)]="user.rua" type="text" class="black bold"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row class="no-padding mg-top-20">\n                <ion-col col-6>\n                    <!-- BAIRRO -->\n                    <ion-item class="transparent-bg no-padding">\n                        <ion-label stacked class="black">Bairro</ion-label>\n                        <ion-input [(ngModel)]="user.bairro" type="text" class="black bold"></ion-input>\n                    </ion-item>\n                </ion-col>\n\n                <ion-col col-6>\n                    <!-- NUMBER -->\n                    <ion-item class="transparent-bg no-padding">\n                        <ion-label stacked class="black">Número</ion-label>\n                        <ion-input [(ngModel)]="user.numero" type="number" class="black bold"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row class="no-padding mg-top-20">\n                <ion-col col-12>\n                    <!-- COMPLEMENT -->\n                    <ion-item class="transparent-bg no-padding">\n                        <ion-label stacked class="black">Complemento</ion-label>\n                        <ion-input [(ngModel)]="user.complemento" type="text" class="black bold"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <!-- FAB BUTTON -->\n    <ion-fab right bottom>\n        <button ion-fab color="light" class="bgButton">\n      <ion-icon class="eggshell" name="ios-more"></ion-icon>\n    </button>\n        <ion-fab-list side="left">\n            <button ion-fab (click)="logout()">\n        <ion-icon  name="md-power"></ion-icon>\n      </button>\n            <button ion-fab (click)="save()">\n        <ion-icon name="md-checkmark-circle-outline"></ion-icon>\n      </button>\n        </ion-fab-list>\n    </ion-fab>\n\n    <br>\n    <br>\n    <br>\n</ion-content>'/*ion-inline-end:"C:\JavaScript\mathematica\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_firebase__["a" /* FirebaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_5__providers_image_upload__["a" /* ImagesUpload */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
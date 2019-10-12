webpackJsonp([2],{

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 207:
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
webpackEmptyAsyncContext.id = 207;

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(360);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_edit_shopping_list_edit_shopping_list__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_add_shopping_item_add_shopping_item__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_toast_service__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_toast_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__services_toast_toast_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__firebase_credentials__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_shopping_list_shopping_list_service__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_shopping_list_shopping_list_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__services_shopping_list_shopping_list_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_add_shopping_item_add_shopping_item__["a" /* AddShoppingItemPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_edit_shopping_list_edit_shopping_list__["a" /* EditShoppingListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_11__firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* FormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_add_shopping_item_add_shopping_item__["a" /* AddShoppingItemPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_edit_shopping_list_edit_shopping_list__["a" /* EditShoppingListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__services_shopping_list_shopping_list_service__["ShoppingListService"],
                __WEBPACK_IMPORTED_MODULE_3__services_toast_toast_service__["ToastService"]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(247);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'HomePage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Pankaj_Projects\Ionic\Ionic-Shopping-List\IonicShoppingList\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Pankaj_Projects\Ionic\Ionic-Shopping-List\IonicShoppingList\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyDNB1JpuifDbX5_dbXy62yQhcgGhH6cm7E",
    authDomain: "ionicshoppinglist-34967.firebaseapp.com",
    databaseURL: "https://ionicshoppinglist-34967.firebaseio.com",
    projectId: "ionicshoppinglist-34967",
    storageBucket: "ionicshoppinglist-34967.appspot.com",
    messagingSenderId: "1045316120682",
    appId: "1:1045316120682:web:84fe9488d9cba6f29b9a13",
    measurementId: "G-21WMLPZ7PX"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shopping_list_shopping_list_service__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shopping_list_shopping_list_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_shopping_list_shopping_list_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(151);
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



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, shoppingListService) {
        this.navCtrl = navCtrl;
        this.shoppingListService = shoppingListService;
        this.shoppingList = this.shoppingListService
            .getShoppingList()
            .snapshotChanges()
            .map(function (changes) {
            changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Pankaj_Projects\Ionic\Ionic-Shopping-List\IonicShoppingList\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Shopping List\n    </ion-title>\n    <button end>\n<button navPush=\'AddShoppingItemPage\' ion-button>\n<ion-icon name=\'add\'></ion-icon>\n</button>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n <ion-list>\n   <ion-list-header>\n     Items\n   </ion-list-header>\n   <ion-item *ngFor="let item of shoppingList | async"\n    deatil-push navPush="EditShoppingListPage" navParams="{item: item}" >\n{{item.name}}\n   </ion-item>\n </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Pankaj_Projects\Ionic\Ionic-Shopping-List\IonicShoppingList\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_shopping_list_shopping_list_service__["ShoppingListService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_shopping_list_shopping_list_service__["ShoppingListService"]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddShoppingItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_toast_toast_service__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_toast_toast_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_toast_toast_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shopping_list_shopping_list_service__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shopping_list_shopping_list_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__services_shopping_list_shopping_list_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddShoppingItemPage = /** @class */ (function () {
    function AddShoppingItemPage(navCtrl, navParams, shoppingListService, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shoppingListService = shoppingListService;
        this.toast = toast;
        this.item = {
            name: '',
            quantity: undefined,
            price: undefined,
        };
    }
    AddShoppingItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddShoppingItemPage');
    };
    AddShoppingItemPage.prototype.addItem = function (item) {
        var _this = this;
        this.shoppingListService.addItem(item).then(function (ref) {
            _this.toast.show(item.name + " is added! ", 1000);
            _this.navCtrl.setRoot('HomePage', { key: ref.key });
        });
    };
    AddShoppingItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-add-shopping-item',template:/*ion-inline-start:"C:\Pankaj_Projects\Ionic\Ionic-Shopping-List\IonicShoppingList\src\pages\add-shopping-item\add-shopping-item.html"*/'<!--\n  Generated template for the AddShoppingItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color=\'primary\'>\n    <ion-title>Add Item</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-item>\n  <ion-label>\n    Name\n  </ion-label>\n  <ion-input  [(ngModel)] = \'item.name\' placeholder=\'ex: Redmi mobile\'>\n\n  </ion-input>\n</ion-item>\n<ion-item>\n  <ion-label>\n    Quatity\n  </ion-label>\n  <ion-input type=\'number\'  [(ngModel)] = \'item.quantity\' placeholder=\'ex: 1\'>\n\n  </ion-input>\n</ion-item>\n<ion-item>\n  <ion-label>\n    Price\n  </ion-label>\n  <ion-input type=\'number\' [(ngModel)] = \'item.price\' placeholder=\'ex: 5000\'>\n\n  </ion-input>\n</ion-item>\n\n<button ion-button block clear (click)= addItem(item)> Add </button>\n</ion-content>\n'/*ion-inline-end:"C:\Pankaj_Projects\Ionic\Ionic-Shopping-List\IonicShoppingList\src\pages\add-shopping-item\add-shopping-item.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_shopping_list_shopping_list_service__["ShoppingListService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shopping_list_shopping_list_service__["ShoppingListService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_toast_toast_service__["ToastService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_toast_toast_service__["ToastService"]) === "function" && _d || Object])
    ], AddShoppingItemPage);
    return AddShoppingItemPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=add-shopping-item.js.map

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

//# sourceMappingURL=shopping-list.service.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditShoppingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shopping_list_shopping_list_service__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shopping_list_shopping_list_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__services_shopping_list_shopping_list_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_toast_service__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_toast_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__services_toast_toast_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EditShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditShoppingListPage = /** @class */ (function () {
    function EditShoppingListPage(navCtrl, navParams, shoppingListService, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shoppingListService = shoppingListService;
        this.toast = toast;
    }
    EditShoppingListPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad EditShoppingListPage');
        console.log(this.navParams.get('item'));
        this.item = this.navParams.get('item');
    };
    EditShoppingListPage.prototype.saveItem = function (item) {
        var _this = this;
        this.shoppingListService.editItem(item).then(function () {
            _this.toast.show(item.name + " is saved!", 1000);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
        });
    };
    EditShoppingListPage.prototype.deleteItem = function (item) {
        var _this = this;
        this.shoppingListService.removeItem(item).then(function () {
            _this.toast.show(item.name + " is removed!", 1000);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
        });
    };
    EditShoppingListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-edit-shopping-list',template:/*ion-inline-start:"C:\Pankaj_Projects\Ionic\Ionic-Shopping-List\IonicShoppingList\src\pages\edit-shopping-list\edit-shopping-list.html"*/'<!--\n  Generated template for the EditShoppingListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{item?.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>\n      Name\n    </ion-label>\n    <ion-input  [(ngModel)] = \'item.name\' placeholder=\'ex: Redmi mobile\'>\n\n    </ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>\n      Quatity\n    </ion-label>\n    <ion-input type=\'number\'  [(ngModel)] = \'item.quantity\' placeholder=\'ex: 1\'>\n\n    </ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>\n      Price\n    </ion-label>\n    <ion-input type=\'number\' [(ngModel)] = \'item.price\' placeholder=\'ex: 5000\'>\n\n    </ion-input>\n  </ion-item>\n\n  <button ion-button block clear (click)= saveItem(item)> Save </button>\n\n  <button ion-button block clear color=\'danger\' (click)= deleteItem(item)> Delete</button>\n</ion-content>\n'/*ion-inline-end:"C:\Pankaj_Projects\Ionic\Ionic-Shopping-List\IonicShoppingList\src\pages\edit-shopping-list\edit-shopping-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_shopping_list_shopping_list_service__["ShoppingListService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shopping_list_shopping_list_service__["ShoppingListService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_toast_toast_service__["ToastService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_toast_toast_service__["ToastService"]) === "function" && _d || Object])
    ], EditShoppingListPage);
    return EditShoppingListPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=edit-shopping-list.js.map

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

//# sourceMappingURL=toast.service.js.map

/***/ })

},[355]);
//# sourceMappingURL=main.js.map
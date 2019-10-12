webpackJsonp([1],{

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddShoppingItemPageModule", function() { return AddShoppingItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_shopping_item__ = __webpack_require__(702);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddShoppingItemPageModule = /** @class */ (function () {
    function AddShoppingItemPageModule() {
    }
    AddShoppingItemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_shopping_item__["a" /* AddShoppingItemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_shopping_item__["a" /* AddShoppingItemPage */]),
            ],
        })
    ], AddShoppingItemPageModule);
    return AddShoppingItemPageModule;
}());

//# sourceMappingURL=add-shopping-item.module.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddShoppingItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(151);
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
    function AddShoppingItemPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = {
            name: '',
            quantity: undefined,
            price: undefined
        };
    }
    AddShoppingItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddShoppingItemPage');
    };
    AddShoppingItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-shopping-item',template:/*ion-inline-start:"C:\Pankaj_Projects\Ionic\Ionic-Shopping-List\IonicShoppingList\src\pages\add-shopping-item\add-shopping-item.html"*/'<!--\n  Generated template for the AddShoppingItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color=\'primary\'>\n    <ion-title>Add Item</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-item>\n  <ion-label>\n    Name\n  </ion-label>\n  <ion-input  [(ngModel)] = \'item.name\' placeholder=\'ex: Redmi mobile\'>\n\n  </ion-input>\n</ion-item>\n<ion-item>\n  <ion-label>\n    Quatity\n  </ion-label>\n  <ion-input type=\'number\'  [(ngModel)] = \'item.quantity\' placeholder=\'ex: 1\'>\n\n  </ion-input>\n</ion-item>\n<ion-item>\n  <ion-label>\n    Price\n  </ion-label>\n  <ion-input type=\'number\' [(ngModel)] = \'item.price\' placeholder=\'ex: 5000\'>\n\n  </ion-input>\n</ion-item>\n\n<button ion-button block clear (click)= addItem(item)> Add </button>\n</ion-content>\n'/*ion-inline-end:"C:\Pankaj_Projects\Ionic\Ionic-Shopping-List\IonicShoppingList\src\pages\add-shopping-item\add-shopping-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AddShoppingItemPage);
    return AddShoppingItemPage;
}());

//# sourceMappingURL=add-shopping-item.js.map

/***/ })

});
//# sourceMappingURL=1.js.map
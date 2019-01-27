/**
 *
 * @auther SM@K<smali.kazmi@hotmail.com>
 * @description website: smak.pk
 */

window.SmartPhone = function (obj) {
    if (obj instanceof SmartPhone)
        return obj;
    if (!(this instanceof SmartPhone))
        return new SmartPhone(obj);
    this._wrapped = obj;
};

window.SmartPhone.userAgent = null;
window.SmartPhone.getUserAgent = function () {
    return this.userAgent;
};

window.SmartPhone.setUserAgent = function (userAgent) {
    this.userAgent = userAgent;
};

window.SmartPhone.isAndroid = function () {
    return this.getUserAgent().match(/Android/i);
};

window.SmartPhone.isBlackBerry = function () {
    return this.getUserAgent().match(/BlackBerry/i);
};

window.SmartPhone.isBlackBerryPlayBook = function () {
    return this.getUserAgent().match(/PlayBook/i);
};

window.SmartPhone.isBlackBerry10 = function () {
    return this.getUserAgent().match(/BB10/i);
};

window.SmartPhone.isIOS = function () {
    return this.isIPhone() || this.isIPad() || this.isIPod();
};

window.SmartPhone.isIPhone = function () {
    return this.getUserAgent().match(/iPhone/i);
};

window.SmartPhone.isIPad = function () {
    return this.getUserAgent().match(/iPad/i);
};

window.SmartPhone.isIPod = function () {
    return this.getUserAgent().match(/iPod/i);
};

window.SmartPhone.isOpera = function () {
    return this.getUserAgent().match(/Opera Mini/i);
};

window.SmartPhone.isWindows = function () {
    return this.isWindowsDesktop() || this.isWindowsMobile();
};

window.SmartPhone.isWindowsMobile = function () {
    return this.getUserAgent().match(/IEMobile/i);
};

window.SmartPhone.isWindowsDesktop = function () {
    return this.getUserAgent().match(/WPDesktop/i);
};

window.SmartPhone.isFireFox = function () {
    return this.getUserAgent().match(/Firefox/i);
};

window.SmartPhone.isNexus = function () {
    return this.getUserAgent().match(/Nexus/i);
};

window.SmartPhone.isKindleFire = function () {
    return this.getUserAgent().match(/Kindle Fire/i);
};

window.SmartPhone.isPalm = function () {
    return this.getUserAgent().match(/PalmSource|Palm/i);
};

window.SmartPhone.isAny = function () {
    var foundAny = false;
    var getAllMethods = Object.getOwnPropertyNames(SmartPhone).filter(function (property) {
        return typeof SmartPhone[property] == 'function';
    });

    for (var index in getAllMethods) {
        if (getAllMethods[index] === 'setUserAgent' || getAllMethods[index] === 'getUserAgent' ||
            getAllMethods[index] === 'isAny' || getAllMethods[index] === 'isWindows' ||
            getAllMethods[index] === 'isIOS') {
            continue;
        }
        if (SmartPhone[getAllMethods[index]]()) {
            foundAny = true;
            break;
        }
    }
    return foundAny;
};

window.SmartPhone.setUserAgent(navigator.userAgent);
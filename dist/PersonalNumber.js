"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var personalNumberStatus;
(function (personalNumberStatus) {
    personalNumberStatus["Valid"] = "Valid";
    personalNumberStatus["Invalid"] = "Invalid";
})(personalNumberStatus || (personalNumberStatus = {}));
var PersonalNumber = (function () {
    function PersonalNumber(pNumber) {
        this._personalNumber = pNumber;
        this._resMessage = {
            personalNumber: this._personalNumber,
            status: personalNumberStatus.Valid,
            text: "personal number OK!"
        };
    }
    Object.defineProperty(PersonalNumber.prototype, "personalNumber", {
        get: function () {
            return this._personalNumber;
        },
        set: function (v) {
            this._personalNumber = v;
        },
        enumerable: false,
        configurable: true
    });
    PersonalNumber.prototype.checkLength = function () {
        return (this._personalNumber.length == 12) ? true : false;
    };
    PersonalNumber.prototype.getYear = function () {
        return Number.parseInt(this._personalNumber.substring(0, 4));
    };
    PersonalNumber.prototype.getMonth = function () {
        return Number.parseInt(this._personalNumber.substring(4, 6));
    };
    PersonalNumber.prototype.getDay = function () {
        return Number.parseInt(this._personalNumber.substring(6, 8));
    };
    PersonalNumber.prototype.checkYear = function () {
        var minYear = 1900, maxYear = new Date(Date.now()).getFullYear(), currYear = this.getYear();
        return (currYear > minYear && currYear <= maxYear);
    };
    PersonalNumber.prototype.checkMonth = function () {
        return (this.getMonth() in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    };
    PersonalNumber.prototype.checkDay = function () {
        return false;
    };
    PersonalNumber.prototype.checkControl = function () {
        return false;
    };
    PersonalNumber.prototype.checkPersonalNumber = function () {
        if (!this.checkLength()) {
            this._resMessage.status = personalNumberStatus.Invalid;
            this._resMessage.text = "Invalid Length";
        }
        return this._resMessage;
    };
    return PersonalNumber;
}());
exports.default = PersonalNumber;
//# sourceMappingURL=PersonalNumber.js.map
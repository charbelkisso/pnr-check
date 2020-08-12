"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PersonalNumber = (function () {
    function PersonalNumber(pNumber) {
        this._personalNumber = pNumber;
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
    PersonalNumber.prototype.GetYear = function () {
        return (this._personalNumber.length > 10) ? Number.parseInt(this._personalNumber.substring(0, 3)) :
            Number.parseInt(this._personalNumber.substring(0, 1));
    };
    PersonalNumber.prototype.CheckYear = function () {
        return false;
    };
    PersonalNumber.prototype.GetMonth = function () {
        return 0;
    };
    PersonalNumber.prototype.CheckPersonalNumber = function () {
        return false;
    };
    return PersonalNumber;
}());
exports.default = PersonalNumber;
//# sourceMappingURL=PersonalNumber.js.map
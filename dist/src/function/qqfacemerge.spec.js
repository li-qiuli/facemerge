"use strict";

var _qqfacemerge = _interopRequireDefault(require("./qqfacemerge.js"));

var _axios = _interopRequireDefault(require("axios"));

var _chai = require("chai");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('qqfacemerge', function () {
  it('qqfacemergedata', function () {
    _axios["default"].get(' ../../mock/base.json').then(function (response) {
      var data = response.data.img;
      var qqMergeOption = {
        'ModelId': 'qc_101361_112552_1',
        'merge_base64': data
      }; //  qq人脸融合

      var qqfacemerge = new _qqfacemerge["default"](qqMergeOption);
      qqfacemerge.getMergeImg().then(function (data) {
        _chai.assert.match(data, /^(http)/);
      })["catch"](function (error) {
        _chai.assert.equal(_typeof(error), 'object');
      });
    })["catch"](function (error) {});
  });
});

//# sourceMappingURL=qqfacemerge.spec.js.map
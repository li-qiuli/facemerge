"use strict";

var _facemergebyaxios = _interopRequireDefault(require("./facemergebyaxios"));

var _chai = require("chai");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var options = {
  'api_key': 'Igeuu3TuNOvn3nmWCrolUKa0O8HVIh3w',
  'api_secret': 'jl4mGveq_b2v28qLHSXHFaVViUtQ0msq',
  'template_url': 'https://cdn1.zhizhucms.com/materials/origin/938821c52259e1206925e57ec526fa80_origin.jpeg',
  'merge_url': 'https://cdn1.zhizhucms.com/materials/origin/9beed908d40183cdfcf69a58255a91e3_origin.jpg',
  'merge_rate': 100
};
var faceMerge2 = new _facemergebyaxios["default"](options);
describe('facemerge', function () {
  it('facemergedata', function () {
    faceMerge2.getMergeImg().then(function (data) {
      // console.log(11111, data);
      showImg[0].src = 'data:image/png;base64,' + data.result;

      _chai.assert.equal(_typeof(data.result), 'string');
    })["catch"](function (error) {// console.log(22222, error);
    });
  });
});

//# sourceMappingURL=facemergebyaxios.spec.js.map
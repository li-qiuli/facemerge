"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * qq脸部融合
 * @param {string} ModelId 模板id
 * @param {string} merge_base64  融合图片
 * ModelId='qc_101361_112552_1'  
 * merge_base64='base64格式的图片'
 * new qqFaceMerge.mergeImg()=>返回图片url
 */
var qqFaceMerge =
/*#__PURE__*/
function () {
  function qqFaceMerge(option) {
    _classCallCheck(this, qqFaceMerge);

    this.options = option;
  }
  /**融合图片 */


  _createClass(qqFaceMerge, [{
    key: "mergeImg",
    value: function mergeImg() {
      console.log(window);
      var params = {
        'ModelId': this.options.ModelId,
        'merge_base64': this.options.merge_base64
      };
      var formdatas = this.objectToFormData(params, '', 'object');
      return new Promise(function (resolve, reject) {
        (0, _axios["default"])({
          method: 'post',
          url: '/services/',
          data: formdatas,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(function (response) {
          if (response.data.code === 200) {
            resolve(response.data.data.results.image_url);
          } else {
            throw new Error(response.data.msg);
          }
        })["catch"](function (error) {
          reject(error);
        });
      });
    }
    /**
     * object转换成formdata
     * @param {object} obj 数据对象
     * @param {string} namespace 字符串’object‘
     */

  }, {
    key: "objectToFormData",
    value: function objectToFormData(obj, namespace) {
      var fd = new window.FormData();
      var formKey;

      for (var property in obj) {
        if (obj.hasOwnProperty(property) && obj[property]) {
          if (namespace) {
            // 若是对象，则这样
            formKey = namespace + '[' + property + ']';
          } else {
            formKey = property;
          }

          fd.append(formKey, obj[property]);
        }
      }

      return fd;
    }
  }]);

  return qqFaceMerge;
}();

;
var _default = qqFaceMerge;
exports["default"] = _default;

//# sourceMappingURL=qqfacemerge.js.map
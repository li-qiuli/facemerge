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

// import FormData from 'FormData';

/**
 * 脸部融合
 * @template_url :融合模版
 * @merge_url ：融合图片
 * @merge_rate ：融合度
 */
var $ = require("jquery");

var FaceMerge =
/*#__PURE__*/
function () {
  function FaceMerge(option) {
    _classCallCheck(this, FaceMerge);

    this["default"] = {
      'merge_rate': 80
    };
    this.options = Object.assign(this["default"], option);
    this.api_key = this.options.api_key;
    this.api_secret = this.options.api_secret;
    this.template_url = this.options.template_url;
    this.merge_url = this.options.merge_url;
    this.merge_rate = this.options.merge_rate;
  }
  /**融合图片 */


  _createClass(FaceMerge, [{
    key: "getMergeImg",
    value: function getMergeImg() {
      var params = {
        'api_key': this.api_key,
        'api_secret': this.api_secret,
        'template_url': this.template_url,
        'merge_url': this.merge_url,
        'merge_rate': this.merge_rate
      }; // console.log(9999,qs.stringify(params));

      var pa = this.objectToFormData(params, '', 'object');
      return (0, _axios["default"])({
        method: 'post',
        url: 'https://api-cn.faceplusplus.com/imagepp/v1/mergeface',
        data: pa,
        // data: qs.stringify(params),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        Promise.reject(error);
      });
    }
    /**
     * object转换成formdata
     * @obj object 数据
     * @namespace 字符串’object‘
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

          console.log('test4', formKey);
          fd.append(formKey, obj[property]);
        }
      }

      return fd;
    }
  }]);

  return FaceMerge;
}();

;
var _default = FaceMerge;
exports["default"] = _default;

//# sourceMappingURL=facemergebyaxios.js.map
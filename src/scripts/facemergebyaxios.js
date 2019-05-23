import axios from 'axios';
const $ = require("jquery");

/**
 * 脸部融合（axios）
 * @param {string} api_key
 * @param {string} api_secret
 * @param {string} template_url :融合模版
 * @param {string} merge_url ：融合图片
 * @param {number} merge_rate ：融合度
 * @example new FaceMerge.getMergeImg('模版url','图片url')=>base64图片
 * @returns {string} base64图片
 */
class FaceMerge {
    constructor(option) {
        this.default = {
            'merge_rate': 80
        };
        this.options = Object.assign(this.default, option);
        this.api_key=this.options.api_key;
        this.api_secret=this.options.api_secret;
        this.template_url = this.options.template_url;
        this.merge_url = this.options.merge_url;
        this.merge_rate = this.options.merge_rate;
    }
    /**融合图片 */
    getMergeImg() {
        let params = {
            'api_key': this.api_key,
            'api_secret': this.api_secret,
            'template_url': this.template_url,
            'merge_url': this.merge_url,
            'merge_rate': this.merge_rate
        };
        let pa=this.objectToFormData(params, '', 'object');
        return axios({
            method: 'post',
            url: 'https://api-cn.faceplusplus.com/imagepp/v1/mergeface',
            data: pa,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(response => {
            return response.data;   
        }).catch(error => {
            Promise.reject(error);
        });
    }

    /**
     * object转换成formdata
     * @param {object} obj  object数据
     * @param {string} namespace 字符串’object‘
     * @example 
     */
     objectToFormData(obj,namespace) {
        let fd = new window.FormData();
        let formKey;
        for (let property in obj) {
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
    };
    

};
export default FaceMerge;
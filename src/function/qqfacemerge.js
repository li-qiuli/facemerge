import axios from 'axios';

/**
 * qq脸部融合
 * @param {string} ModelId 模板id
 * @param {string} merge_base64  融合图片
 * ModelId='qc_101361_112552_1'  
 * merge_base64='base64格式的图片'
 * new qqFaceMerge.mergeImg()=>返回图片url
 *  @return {Promise} Promise
 */
class qqFaceMerge {
    constructor(option) {
        this.options = option;
    }
    /**融合图片 */
    mergeImg() {
        console.log(window);
        let params = {
            'ModelId': this.options.ModelId,
            'merge_base64': this.options.merge_base64,
        };
        let formdatas = this.objectToFormData(params, '', 'object');
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: '/services/',
                data: formdatas,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }).then(response => {
                if (response.data.code === 200) {
                    resolve(response.data.data.results.image_url);
                } else {
                    throw new Error(response.data.msg);
                }
            }).catch(error => {
                reject(error);
            });
         });
    }

    /**
     * object转换成formdata
     * @param {object} obj 数据对象
     * @param {string} namespace 字符串’object‘
     */
    objectToFormData(obj, namespace) {
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
                fd.append(formKey, obj[property]);
            }
        }
        return fd;
    };
};
export default qqFaceMerge;
import axios from 'axios';
import qs from 'qs';


/**
 * 脸部融合
 * @template_url :融合模版
 * @merge_url ：融合图片
 * @merge_rate ：融合度
 */
const $ = require("jquery");
class FaceMerge {
    constructor(option) {
        this.default = {
            'merge_rate': 80
        };
        this.options = Object.assign(this.default, option);
        this.template_url = this.options.template_url;
        this.merge_url = this.options.merge_url;
        this.merge_rate = this.options.merge_rate;
    }
    /**融合图片 */
    getMergeImg() {
        let params = {
            'api_key': 'Igeuu3TuNOvn3nmWCrolUKa0O8HVIh3w',
            'api_secret': 'jl4mGveq_b2v28qLHSXHFaVViUtQ0msq',
            'template_url': this.template_url,
            'merge_url': this.merge_url,
            'merge_rate': this.merge_rate
        };
        return axios({
            method: 'post',
            url: 'https://api-cn.faceplusplus.com/imagepp/v1/mergeface',
            data: qs.stringify(params),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(response => {
            return response.data;   
        }).catch(error => {
            Promise.reject(error);
        });
    }

};
export default FaceMerge;
import axios from 'axios';
import qs from 'qs';
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;


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
    fengzhuang() {
        // axios.defaults.baseURL = 'https://api.example.com';
        // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        const service = axios.create({
            // baseURL: process.env.BASE_API, // api的base_url
            // timeout: 15000 // 请求超时时间
        });
        // request拦截器
        service.interceptors.request.use(config => {
            config.log(987, config);
            //告诉浏览器编码方式
            // response.setHeader("Content-Type","text/html;charset=UTF-8" ); 
            // config.headers['Access-Control-Allow-Origin'] = '*';
            config.data = qs.stringify(config.data);
            return config;
        }, error => {
            console.log(error);
            Promise.reject(error);
        });
        // respone拦截器
        service.interceptors.response.use(
            response => {
                return response.data;
            }, error => {
                console.log('err' + error);
                Message({
                    message: error.message,
                    type: 'error',
                    duration: 5 * 1000
                });
                return Promise.reject(error);
            }
        );
    };
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
            console.log(111112, response);
            return response.data;
        }).catch(error => {
            Promise.reject(error);
        });
    }
    objectToFormData(obj, form, namespace) {
        let fd = form || new FormData();
        // let fd = new FormData();
        let formKey;
        if (obj instanceof Array) {
            for (let item of obj) {
                if (typeof item === 'object' && !(item instanceof File)) {
                    this.objectToFormData(item, fd, namespace + '[]');
                } else {
                    // 若是数组则在关键字后面加上[]
                    fd.append(namespace + '[]', item);
                }
            }
        } else {
            for (let property in obj) {
                if (obj.hasOwnProperty(property) && obj[property]) {
                    if (namespace) {
                        // 若是对象，则这样
                        formKey = namespace + '[' + property + ']';
                    } else {
                        formKey = property;
                    }
                    // if the property is an object, but not a File,use recursivity.
                    if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
                        // 此处将formKey递归下去很重要，因为数据结构会出现嵌套的情况
                        this.objectToFormData(obj[property], fd, formKey);
                    } else {
                        // if it's a string or a File object
                        fd.append(formKey, obj[property]);
                    }

                }
            }
        }
        return fd;
    };

};
export default FaceMerge;
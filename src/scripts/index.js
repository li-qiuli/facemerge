import '../styles/index.scss';
// import faceMerges from './facemerge.js';
import qqFaceMerge from '../function/qqfacemerge.js';
import axios from 'axios';

let showImg = document.getElementsByTagName('img');

let options = {
    'api_key': 'Igeuu3TuNOvn3nmWCrolUKa0O8HVIh3w',
    'api_secret': 'jl4mGveq_b2v28qLHSXHFaVViUtQ0msq',
    'template_url': 'https://cdn1.zhizhucms.com/materials/origin/938821c52259e1206925e57ec526fa80_origin.jpeg',
    'merge_url': 'https://cdn1.zhizhucms.com/materials/origin/9beed908d40183cdfcf69a58255a91e3_origin.jpg',
    'merge_rate': 100
};

// let faceMerge = new faceMerges(
//     options
// );
// faceMerge.getMergeImg().then(data => {
//     showImg[0].src = 'data:image/png;base64,' + data.result;
// }).catch(error=>{
//     console.log(1111, error);
// });


// import faceMerges2 from './facemergebyaxios';
// let faceMerge2 = new faceMerges2(
//     options
// );
// faceMerge2.getMergeImg().then(data => {
//     showImg[0].src = 'data:image/png;base64,' + data.result;
// }).catch(error => {
//     console.log(22222, error);
// });
// console.log(axios.get('base.json'));

 axios.get(' ../../mock/base.json').then((response)=>{
    
    let data=response.data.img;
    let qqMergeOption = {
        'ModelId': 'qc_101361_112552_1',
        'merge_base64': data,
        // 'merge_base64': '',
    };
    //  qq人脸融合
    let qqfacemerge = new qqFaceMerge(qqMergeOption);
    qqfacemerge.mergeImg().then((data) => {
        // console.log(222,data.indexOf('http'));
    }).catch((message) => {
        console.log('qqMergeErrorMessage:', typeof(message));
    });
});


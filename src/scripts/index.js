import '../styles/index.scss';
import faceMerges from './facemerge.js';

let showImg = document.getElementsByTagName('img');

let options = {
    'template_url': 'https://cdn1.zhizhucms.com/materials/origin/938821c52259e1206925e57ec526fa80_origin.jpeg',
    'merge_url': 'https://cdn1.zhizhucms.com/materials/origin/9beed908d40183cdfcf69a58255a91e3_origin.jpg',
    'merge_rate': 100
};

let faceMerge = new faceMerges(
    options
);
faceMerge.ajax().then(data => {
    showImg[0].src = 'data:image/png;base64,' + data.result;
}).catch(error=>{
    console.log(1111, error);
});
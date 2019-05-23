import faceMerges2 from './facemergebyaxios';
import {assert }from 'chai';

let options = {
    'api_key': 'Igeuu3TuNOvn3nmWCrolUKa0O8HVIh3w',
    'api_secret': 'jl4mGveq_b2v28qLHSXHFaVViUtQ0msq',
    'template_url': 'https://cdn1.zhizhucms.com/materials/origin/938821c52259e1206925e57ec526fa80_origin.jpeg',
    'merge_url': 'https://cdn1.zhizhucms.com/materials/origin/9beed908d40183cdfcf69a58255a91e3_origin.jpg',
    'merge_rate': 100
};

let faceMerge2 = new faceMerges2(options);


describe('facemerge', () => {
    it('facemergedata', () => {
       faceMerge2.getMergeImg().then(data => {
            // console.log(11111, data);
            showImg[0].src = 'data:image/png;base64,' + data.result;
            assert.equal(typeof(data.result), 'string');
        }).catch(error => {
            // console.log(22222, error);
        });
    });
});
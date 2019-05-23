import qqFaceMerge from './qqfacemerge.js';
import axios from 'axios';
import {
    assert
} from 'chai';

describe('qqfacemerge', () => {
    it('qqfacemergedata', () => {
        axios.get(' ../../mock/base.json')
        .then((response) => {
            let data = response.data.img;
            let qqMergeOption = {
                'ModelId': 'qc_101361_112552_1',
                'merge_base64': data,
            };
            //  qq人脸融合
            let qqfacemerge = new qqFaceMerge(qqMergeOption);

            qqfacemerge.getMergeImg().then(data => {
                assert.match(data, /^(http)/);
            }).catch(error => {
                assert.equal(typeof (error), 'object');
            });
        })
        .catch(error=>{});
    });
});
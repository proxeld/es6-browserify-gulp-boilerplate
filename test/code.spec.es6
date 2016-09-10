import bo, * as operations from '../src/js/modules/code.es6';
import { expect } from 'chai';

describe('Configuration check', function () {
    it('should pass', function () {
        expect(true).to.eql(true);
    })
});

describe('Some module', function () {
    describe('#ourFunction', function () {
        it('should be able to do all kinds of stuff', function () {
            expect(bo(1,1, operations.sum)).to.eql(2);
            expect(bo(1,1, operations.diff)).to.eql(0);
            expect(bo(1,1, operations.mul)).to.eql(1);
            expect(bo(1,1, operations.div)).to.eql(1);
        })
    })
});
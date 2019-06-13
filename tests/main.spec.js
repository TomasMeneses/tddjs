import {expect} from 'chai';
import { sum, sub, mult, div } from '../src/main'



describe('Calc',()=>{
        
        describe('Sum', () => {
            it('should return 4 when sum(2,2)', () => {
                expect(sum(2,2)).to.be.equal(4);
            })
        })
        describe('sub', () => {
            it('should return 4 when sub(2,2)', () => {
                expect(sub(2,2)).to.be.equal(0);
            })
        })
        describe('div', () => {
            it('should return 4 when div(2,2)', () => {
                expect(div(2,2)).to.be.equal(1);
            })
        })
        describe('mult', () => {
            it('should return 4 when mult(2,2)', () => {
                expect(mult(2,2)).to.be.equal(4);
            })
        });
    

}); 
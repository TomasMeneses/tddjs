import {expect} from 'chai';
import { sum, sub, mult, div } from '../src/main';
var chaiHttp = require('chai-http');
var chai = require('chai')

chai.use(chaiHttp);


describe('Http Tests', () => {
    it('should err to be null and res to be json',() =>{
        chai.request('https://api.exchangeratesapi.io/')
            .get('latest')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.be.json;
            })
    })
})


describe('Smoke Tests', () => {
    it('should be a function ´sum´', () => {
        expect(sum).to.be.a('function');
    });

    it('should be a function ´sub´', () => {
        expect(sub).to.be.a('function');
    });

    it('should be a function ´mult´', () => {
        expect(mult).to.be.a('function');
    });

    it('should be a function ´div´', () => {
        expect(div).to.be.a('function');
    });
});


describe('Calculator',()=>{

        describe('Sum', () => {
            it('should return 4 when sum(2,2)', () => {
                expect(sum(2,2)).to.be.equal(4);
            });
        });

        describe('Sub', () => {
            it('should return 4 when sub(2,2)', () => {
                expect(sub(2,2)).to.be.equal(0);
            });
        });

        describe('Div', () => {
            it('should return 4 when div(2,2)', () => {
                expect(div(2,2)).to.be.equal(1);
            });
        });

        describe('Mult', () => {
            it('should return 4 when mult(2,2)', () => {
                expect(mult(2,2)).to.be.equal(4);
            });
        });
}); 
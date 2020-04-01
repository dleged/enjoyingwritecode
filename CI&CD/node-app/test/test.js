const request = require('supertest');
const assert = require('assert') 
const app = require('../index.js');

describe('GET /', function () {
    it('responed with hellow jenkins app', function (done) {
        request(app)
            .get('/')
            .then(response => {
                assert(response.body,'hellow jenkins app');
                done();
            });
    })
})
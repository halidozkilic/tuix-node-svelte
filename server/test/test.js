'use strict'

const chai = require('chai')
const chaiHttp = require('chai-http')
const should = require('chai').should()
const expect = require('chai').expect
const server = require('../app')

// Assertion
chai.should()
chai.use(chaiHttp)

const { test1, middlewareTest } = require('./testData')

describe('API', () => {
  /**
   * Test router
   */
  describe('POST /getTroops', () => {
    it('It should return manipulated object (this is an integration test)', (done) => {
      chai.request(server)
        .post('/api/v1/getTroops ')
        .send(test1)
        .end((err, response) => {
          response.should.have.status(200)
          response.body.should.have.property('success')
          response.body.should.have.property('data')
          response.body.data.should.be.a('object')
          done()
        })
    })
  })

  /**
   * Test router
   */
  describe('POST /getTroops', () => {
    it('It should return error (this is a test for middleware )', (done) => {
      chai.request(server)
        .post('/api/v1/getTroops ')
        .send(middlewareTest)
        .end((err, response) => {
          response.body.should.have.property('error')
          response.body.error.should.be.a('array')
          done()
        })
    })
  })
})

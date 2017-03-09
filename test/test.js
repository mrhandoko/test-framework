var chai = require('chai')
var should = require('chai').should()

var add = require('../addition')
var multiply = require('../multiply')
var deviden = require('../deviden')
var distraction = require('../distraction')
var exponent = require('../exponent')
var root = require('../root')

describe('Testing With Mocha', function () {
  describe('1. Addition', function () {
    it('should return 10 when value a = 5 & value b = 5', function () {
      add(5, 5).should.equal(10)
    })

    it('should have 2 parameters', function () {
      add(5).should.equal('should have 2 parameters')
    })
  })

  describe('2. Multiply', function () {
    it('should return 25 when value a = 5 & value b = 5', function () {
      multiply(5, 5).should.equal(25)
    })

    it('should have 2 parameters', function () {
      multiply(3).should.equal('should have 2 parameters')
    })
  })

  describe('3. Dividen', function () {
    it('should return 5 when value a = 25 & value b = 5', function () {
      deviden(25, 5).should.equal(5)
    })

    it('should have 2 parameters', function () {
      deviden(3).should.equal('should have 2 parameters')
    })
  })

  describe('4. Distraction', function () {
    it('should return 5 when value a = 10 & value b = 5', function () {
      distraction(10, 5).should.equal(5)
    })

    it('should have 2 parameters', function () {
      distraction(3).should.equal('should have 2 parameters')
    })
  })

  describe('5. Exponent', function () {
    it('should return 25 when value a = 5 & value b = 2', function () {
      exponent(5, 2).should.equal(25)
    })

    it('should have 2 parameters', function () {
      exponent(3).should.equal('should have 2 parameters')
    })
  })

  describe('6. Root', function () {
    it('should return 10 when value a = 5 & value b = 2', function () {
      root(100).should.equal(10)
    })

    it('should have parameters', function () {
      root().should.equal('should have parameters')
    })
  })
})

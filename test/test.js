const chai = require('chai')
  , assert = chai.assert
  , expect = chai.expect
  , should = chai.should()

describe('String', () => {
  it('should create data', function () {

    const AWS = require('aws-sdk-mock');    
    AWS.mock('DynamoDB.DocumentClient', 'put', function (params, callback) {
      callback(null, 'successfully created item in database');
    });
    const { createDynamo } = require('../handler')
    const event={
      body: '{\r\n    "task":"test working",\r\n    "done":true\r\n}'
    }
    createDynamo(event, {}, (err, res) => {
      expect(res.statusCode).to.be.equal(201);
      
      
    })
  })
  it('should not create data', function () {

    const AWS = require('aws-sdk-mock');    
    AWS.mock('DynamoDB.DocumentClient', 'put', function (params, callback) {
      callback(null, 'successfully created item in database');
    });
    const { createDynamo } = require('../handler')
    const event={
      body: '{\r\n    "task":78,\r\n    "done":true\r\n}'
    }
    createDynamo.getAllposts(event, {}, (err, res) => {
      expect(res.statusCode).to.be.equal(400);
      
      
    })
  })
})
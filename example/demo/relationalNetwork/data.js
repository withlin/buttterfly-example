'use strict';

const User = require('./node_user.jsx');
const Train = require('./node_train.jsx');
const Phone = require('./node_phone.jsx');
const Email = require('./node_email.jsx');

module.exports = {
  nodes: [{
    id: '1',
    name: '王大萌',
    type: 'people',
    left: 0,
    top: 200,
    Class: User,
    color: '#19A97B'
  }, {
    id: '2',
    name: 'K1239',
    type: 'train',
    left: 150,
    top: 50,
    Class: Train,
    color: '#436EEE'
  }, {
    id: '3',
    name: '5144xxxxxx@qq.com',
    type: 'email',
    left: 300,
    top: 110,
    Class: Email,
    color: '#7A67EE'
  }, {
    id: '4',
    name: 'D1228',
    type: 'train',
    left: 210,
    top: 260,
    Class: Train,
    scope: 'leftg',
    color: '#436EEE'
  }, {
    id: '5',
    name: '51449xxxx@qq.com',
    type: 'email',
    left: 400,
    top: 220,
    Class: Email,
    scope: 'centerg',
    color: '#436EEE'
  }, {
    id: '6',
    name: '18703224669',
    type: 'people',
    left: 500,
    top: 90,
    Class: User,
    scope: 'centerg',
    color: '#19A97B'
  }, {
    id: '7',
    name: '王小萌',
    type: 'people',
    left: 600,
    top: 200,
    Class: User,
    scope: 'centerg',
    color: '#DD5A41'
  }, {
    id: '8',
    name: 'email',
    type: 'email',
    left: 800,
    top: 100,
    Class: Email,
    scope: 'centerg',
    color: '#19A97B'
  }, {
    id: '9',
    name: '联系方式',
    type: 'phone',
    left: 1100,
    top: 300,
    Class: Phone,
    scope: 'centerg',
    color: '#7A67EE'
  }, {
    id: '10',
    name: 'G887',
    type: 'train',
    left: 1000,
    top: 30,
    Class: Train,
    scope: 'rightg',
    color: '#436EEE'
  }, {
    id: '11',
    name: '王中萌',
    type: 'people',
    left: 1200,
    top: 200,
    Class: User,
    scope: 'rightg',
    color: '#19A97B'
  }, {
    id: '12',
    name: '王也',
    type: 'people',
    left: 1300,
    top: 100,
    Class: User,
    scope: 'rightg',
    color: '#DD5A41'
  }],
  edges: [{
    source: '1',
    target: '2'
  }, {
    source: '1',
    target: '3'
  }, {
    source: '1',
    target: '4'
  }, {
    source: '5',
    target: '6'
  }, {
    source: '6',
    target: '7'
  }, {
    source: '7',
    target: '8'
  }, {
    source: '8',
    target: '9'
  }, {
    source: '10',
    target: '11'
  }, {
    source: '11',
    target: '12'
  }, {
    source: '12',
    target: '10'
  }]
};

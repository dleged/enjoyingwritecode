const Service = require('egg').Service;
const path = require('path');

class Movies extends Service {
  list() {
      return {
        "topList": [
      		{"id": "0","name": "阿凡达","url": "/avtar"},
      		{"id": "1","name": "泰坦尼克号","url": "/avtar"},
      		{"id": "2","name": "复仇者联盟","url": "/avtar"},
      		{"id": "3","name": "侏罗纪公园","url": "/avtar"},
      		{"id": "4","name": "星球大战","url": "/avtar"}
      	]
      }
  }
}

module.exports = Movies;

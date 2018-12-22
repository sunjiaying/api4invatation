let Service = require('node-windows').Service;

let svc = new Service({
  name: 'api4invatation', //服务名称
  description: '邀请函WEBAPI服务', //描述
  script: 'D:/code/nodejs/api4invatation' //nodejs项目要启动的文件路径
});

svc.on('install', () => {
  svc.start();
});

svc.install();

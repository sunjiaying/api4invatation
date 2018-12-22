'use strict';

let Hapi = require('hapi');
let mongoose = require('mongoose');
let RestHapi = require('rest-hapi');

async function api() {
  try {
    let server = new Hapi.Server({ port: 7077 });

    let config = {
      appTitle: 'api for invatation',
      enableTextSearch: true,
      logRoutes: true,
      docExpansion: 'list',
      mongo: {
        URI: 'mongodb://xx.xx.xx.xx:27017/invatation'
      }
    };

    config.enableAuditLog = false;

    // config.cors = false;

    config.cors = {
      additionalHeaders: [],
      additionalExposedHeaders: [],
      credentials: true,
      origin: ['*'],
      headers: [
        'Origin',
        'Authorization',
        'Access-Control-Allow-Origin',
        'Access-Control-Allow-Headers',
        'Content-Type'
      ]
    };

    RestHapi.config = config;

    await server.register({
      plugin: RestHapi,
      options: {
        mongoose: mongoose,
        config: config
      }
    });

    await server.start();

    RestHapi.logUtil.logActionComplete(
      RestHapi.logger,
      'Server Initialized',
      server.info
    );

    return server;
  } catch (err) {
    console.log('Error starting server:', err);
  }
}

module.exports = api();

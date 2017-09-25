(function () {
  'use strict';

  var cluster = require('cluster'),
    http = require('http'),
    os = require('os'),

    ClusterServer = {
      name: 'ClusterServer',

      cpus: os.cpus().length,

      autoRestart: false, // Restart threads on death?

      start: function (server, port) {
        var me = this,
          i;

        if (cluster.isMaster) { // fork worker threads
          for (i = 0; i < me.cpus; i += 1) {
            console.log(me.name + ': starting worker thread #' + i);
            cluster.fork();
          }

          cluster.on('death', function (worker) {
            // Log deaths!
            console.log(me.name + ': worker ' + worker.pid + ' died.');
            // If autoRestart is true, spin up another to replace it
            if (me.autoRestart) {
              console.log(me.name + ': Restarting worker thread...');
              cluster.fork();
            }
          });

        } else {
          // Worker threads run the server
          server.listen(port);
          process.on('uncaughtException', onUncaughtException);
        }
      }
    },

    helloWorldServer = http.createServer(function (req, res) {

      res = corsMiddleware(res);

      if (req.method === 'OPTIONS') { return res.end('ok'); }

      // routing
      switch(req.url) {
        case '/login': loginHandler(req, res); break;
        case '/favicon.ico': handleFavicon(req, res); break;
        default : handleDefault(req, res);
      }

    });

  function onUncaughtException(err) {
    console.log('ANY ERROR HANDLER', err);
  }

  function loginHandler (req, res) {

    var resolver = Math.random() < 0.5,
      status, payload;

    if (resolver) {
      status = 400;
      payload = { error: 'Wrong email or password' };
    } else {
      status = 200;
      payload = { user: 'Maks', email: 'example@email.com' };
    }

    res.writeHead(status, {
      'Content-type': 'application/json'
    });

    res.end(JSON.stringify(payload));
  }

  function handleFavicon (req, res) {
    res.writeHead(200, {
      'Content-type': 'text/plain'
    });

    res.end('favicon.ico');
  }

  function handleDefault (req, res) {
    res.writeHead(200, {
      'Content-type': 'text/plain'
    });

    res.end('Not declared URL');
    console.log('helloWorldServer: Served no declared URL!');
  }

  function corsMiddleware(res) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    return res;
  }

  ClusterServer.name = 'helloWorldServer'; // rename ClusterServer instance
  ClusterServer.start(helloWorldServer, 8081); // Start it up!
}());

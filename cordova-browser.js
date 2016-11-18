var fs = require('fs-extra')
var path = require('path');

var pluginDir = './plugins';
var browserDir = './platforms/browser';
var platformWWWDir = './platforms/browser/platform_www';
var wwwDir = './www';

var browserExists = fs.existsSync(browserDir);

console.log('Browser exists', browserExists);

fs.walk(platformWWWDir).
  on('data', function(item) {
    var rel = path.relative(platformWWWDir, item.path);
    var dest = path.join(wwwDir, rel);
    console.log('COPY', rel);
    fs.copySync(item.path, dest);
  });

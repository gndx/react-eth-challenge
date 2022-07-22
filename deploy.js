var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, '.'),{
repo: 'https://digicris.github.io/react-eth-challenge/'}, function(err) {
console.log(err);
console.log("Se ha subido a gh-pages correctamente");
});
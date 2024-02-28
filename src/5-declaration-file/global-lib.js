function globalLib(options) {
  console.log(options);
}

globalLib.version = 'v1';
globalLib.doSomething = function() {
  console.log('doSomething');
}
const runOnce = function () {
  console.log(`This can be run again and again`);
};
runOnce();

//IIFE
(function () {
  console.log(`This will never run again`);
  const isprivate = 21;
})();

(() => console.log('This will also never run again'))();

{
  const isprivate = 10;
  var notPrivate = 20;
}

//console.log(isprivate);
console.log(notPrivate);

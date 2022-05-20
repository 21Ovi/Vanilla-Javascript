'use strict';
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

//const word = 'Ovesh_Ansari';
const CamelCaseConverter = function (name) {
  const splited = name.split('_');
  const [camel, Case] = splited;
  const [camelSmall, caseSmall] = [camel.toLowerCase(), Case.toLowerCase()];
  const caseFinal = caseSmall[0].toUpperCase() + caseSmall.slice(1);
  const Final = camelSmall + caseFinal;
  console.log(Final.trim());
};
//CamelCaseConverter('camel_case');
//CamelCaseConverter(text);
/* document.querySelector('button').addEventListener('click', function () {
    const data = document.querySelector('textarea').value;
    CamelCaseConverter(data);
}); */
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  //console.log(rows);
  for (const row of rows) {
    CamelCaseConverter(row);
  }
});

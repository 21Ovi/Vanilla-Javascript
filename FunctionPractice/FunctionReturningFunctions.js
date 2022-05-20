const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetingHey = greet('Hey');
greetingHey('Ovesh');

greet('Hello')('Ovesh');

//converting this funciton in arrow funciton

const greetArr = greeting => names => console.log(`${greeting} ${names}`);

greetArr('Hello')('Ovi');

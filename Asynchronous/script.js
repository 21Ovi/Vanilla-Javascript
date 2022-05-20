'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
/* const btnSearch = document.querySelector('.btn__search');
const searchBox = document.querySelector('.searchBox').value; */
const renderCountry = function (data, className = '') {
  const html = `
  <article class="${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} million</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
          </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.getElementsByClassName.opacity = 1;
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
const getJSON = function (url, errorMsg = `Something went wrong`) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

///////////////////////////////////////
/* const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `HTTPS://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `
  <article class="country">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
    1
  )} million</p>
  <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
  <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.getElementsByClassName.opacity = 1;
  });
}; */

/* btnSearch.addEventListener('click', function () {
  getCountryData(searchBox);
  //document.querySelector('.search').classList.add('hidden');
});
 */
//////////////////////////////////////////////////////////
///////////Welcome to Callback Hell ////////////////////
/////////////////////////////////////////////////////////
/* const getCountryAndNeighbour = function (country) {
  //AJAX call1

  const request = new XMLHttpRequest();
  request.open('GET', `HTTPS://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //render country1
    renderCountry(data);

    //get neighbour country(2)
    const [neighbour] = data.borders;
    if (!neighbour) return;

    //AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};
getCountryAndNeighbour('sri lanka');

setTimeout(() => {
  console.log(`1 second has passed`);
  setTimeout(() => {
    console.log(`2 second has passed`);
    setTimeout(() => {
      console.log(`3 second has passed`);
      setTimeout(() => {
        console.log(`4 second has passed`);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
 */
/* const getCountryData = function (country) {
  fetch(`HTTPS://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
}; */

/* const getCountryData = function (country) {
  //country1
  fetch(`HTTPS://restcountries.com/v2/name/${country}`)
    .then(response => {
      console.log(response);

      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);

      //const neighbour = data[0].border[0];
      const neighbour = 'uk';

      if (!neighbour) return;

      //country2
      return fetch(`HTTPS://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`country not found(${response.status})`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}; */
/* 
const getCountryData = function (country) {
  //country 1
  getJSON(`HTTPS://restcountries.com/v2/name/${country}`, `Country not found`)
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error(`no Neighbour Found`);

      //country2
      return getJSON(
        `HTTPS://restcountries.com/v2/alpha/${neighbour}`,
        'country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went wrong ${err.message} . Try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener('click', function () {
  getCountryData('sri lanka');
});
 */

/* const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`you are in ${data.city},${data.country}`);
      return fetch(`HTTPS://restcountries.com/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message}🔥`));
};
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
whereAmI(52.508, 13.381);
 */

//event loop in practice

/* console.log(`Test Start`);
setTimeout(() => console.log('0 second Timer'), 0);
Promise.resolve(`resolved promise 1`).then(res => console.log(res));
Promise.resolve(`resloved Promise 2`).then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log(`Test End`);
 */
//building a simple promise
/* const num = Math.random();
console.log(num);
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`Lottrey draw is happening...`);
  setTimeout(function () {
    if (num >= 0.5) {
      resolve('You Won 💰');
    } else {
      reject(new Error('You Lost 🚫'));
    }
  }, 500);
});
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err)); */

//promisifying set timeout
/* 
const wait = function (seconds) {
  return new Promise(function (reslove, reject) {
    setTimeout(reslove, seconds * 1000);
  });
};
wait(1)
  .then(() => {
    console.log(`1 Second has Passed`);
    return wait(1);
  })
  .then(() => {
    console.log(`2 seconds has passed`);
    return wait(1);
  })
  .then(() => {
    console.log(`3 seconds has passed`);
    return wait(1);
  });
//  wait(1).then(() => {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${i} seconds has passed`);
//     wait(1);
//   }
// }); 

Promise.resolve('abc').then(x => console.log(x));
//Promise.reject(new Error(`Problem`).catch(x => console.error(x)));
 */

//Promisifying the Geolocation API

/* const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};

btn.addEventListener('click', whereAmI);
 */
/* Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own.
 Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. 
This function returns a promise which creates a new image (use document.createElement('img')) 
and sets the .src attribute to the provided image path. When the image is done loading, 
append it to the DOM element with the 'images' class, and resolve the promise. 
The fulfilled value should be the image element itself.
 In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'),
 and load a second image
  (HINT: Use the image element returned by the createImage promise to hide the current image. 
    You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path.
 Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.
 */
/* const wait = function (seconds) {
  return new Promise(function (reslove, reject) {
    setTimeout(reslove, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error(`Image Not found`));
    });
  });
};

let currentImg;
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log(`Image 1 has loaded`);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log(`Image 2 loaded`);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-3.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log(`Image 3 has loaded`);
    return wait(2);
  })
  .catch(err => console.log(err)); 
  */

//Consuming Promises with async and await
//error handling with try...catch/*
/*
const getPosiiton = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI = async function () {
  try {
    //geolocation
    const pos = await getPosiiton();
    const { latitude: lat, longitude: lng } = pos.coords;

    //reverse geocodoing
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
    );
    if (!resGeo.ok) throw new Error(`Problem getting location data🗺️`);
    const dataGeo = await resGeo.json();
    //console.log(dataGeo);

    //country data
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.countryName}`
    );
    if (!resGeo.ok) throw new Error(`Problem getting country`);
    //  console.log(res);
    const data = await res.json();
    renderCountry(data[0]);
    return `you are in ${dataGeo.locality}, ${dataGeo.countryName}`;
  } catch (err) {
    console.error(err);
    renderError(`${err.message} 🔥`);

    //reject promise returned from async function
    throw err;
  }
};
//whereAmI();

console.log(`1: will get location`);
const city = whereAmI;
console.log(city);
// whereAmI()
//   .then(city => console.log(`2:${city}`))
//   .catch(err => console.log(`${err.message} 🔥🔥`))
//   .finally(() => console.log(`3: Finished getting Location`));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city} 🏙️`);
  } catch (err) {
    console.error(`'2 :${err.message}`);
  }
  console.log(`3 : Finished Getting Location 🏁🏁🏁`);
})();

//Running promises in Parrallel

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
    // console.log(data1.capital, data3.capital, data2.capital);
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('turkey', 'united kingdom', 'saudi arabia'); 
*/
//Promise Combinator:race,allSettled,all and any(ES2021)

/* 
//promise.race
(async function () {
  const res = await Promise.race([
    getJSON('https://restcountries.com/v2/name/germany'),
    getJSON('https://restcountries.com/v2/name/brazil'),
    getJSON('https://restcountries.com/v2/name/japan'),
  ]);
  console.log(res[0]);
})();
const timeout = function (sec) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error(`request took too Long!!⚠️`));
    }, 1000);
  });
};
Promise.race([getJSON('https://restcountries.com/v2/name/japan'), timeout(1)])
  .then(res => console.log(res[0]))
  .catch(err => renderError(err));

//promise.allSettled

Promise.allSettled([
  Promise.resolve('success'),
  Promise.reject('error'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));
//Promise.all : will not return if every element is resolved
Promise.all([
  Promise.resolve('success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
.then(res => console.log(res))
.catch(err => console.error(err));

//Promise.any [ES2021]: will return no matter how many rejectiuuon it'll get
Promise.any([
  Promise.resolve('success'),
  Promise.reject('Rejected'),
  Promise.resolve('Another Success'),
])
.then(res => console.log(res))
.catch(err => console.error(err));
*/

// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2,
 this time using async/await (only the part where the promise is consumed).
  Compare the two versions, think about the big differences,
   and see which one you like more.
Don't forget to test the error handler,
 and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, 
to load all the images with the 'createImage' function 
(call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'].
 To test, turn off the 'loadNPause' function.

GOOD LUCK 😀*/

const wait = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image Not Found'));
    });
  });
};
const loadNPause = async function () {
  try {
    //leading img 1
    let img = await createImage('img/img-1.jpg');
    console.log(`Image 1 has Loaded`);
    await wait(2);
    img.style.display = 'none';

    //loading img 2
    img = await createImage('img/img-2.jpg');
    console.log(`Image 2 has Loaded`);
    await wait(2);
    img.style.display = 'none';

    //loading img 3
    img = await createImage('img/img-3.jpg');
    console.log(`Image 3 has Loaded`);
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};
//loadNPause();
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgEl = await Promise.all(imgs);
    imgEl.forEach(img => img.classList.add('parallel'));

    console.log(imgs);
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

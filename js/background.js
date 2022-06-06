// const images = ["1.jpg", "2.jpg", "3.jpg"];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// console.log(bgImage);

// document.body.appendChild(bgImage);

var bg = new Array();
bg[bg.length] = './img/1.jpg';
bg[bg.length] = './img/2.jpg';
bg[bg.length] = './img/3.jpg';

var obj = document.getElementById('backGround');
var size = Math.floor(Math.random()*(bg.length));
j = (isNaN(size)) ? 0 : size;
obj.style.backgroundImage = 'url('+ bg[size] + ')';
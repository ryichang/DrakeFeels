var images = [
  'http://ll-media.tmz.com/2015/10/20/drake-hotline-bling-dancing-111.gif', // 1
  'http://ll-media.tmz.com/2015/10/20/drake-hotline-bling-dancing-19.gif', //2
  'http://ll-media.tmz.com/2015/10/20/drake-hotline-bling-dancing-20.gif', //3
  'http://ll-media.tmz.com/2015/10/20/drake-hotline-bling-dancing-18.gif', //4
  'http://ll-media.tmz.com/2015/10/20/drake-hotline-bling-dancing-17.gif', //5
  'http://ll-media.tmz.com/2015/10/20/drake-hotline-bling-dancing-16.gif', //6
  'http://ll-media.tmz.com/2015/10/20/drake-hotline-bling-dancing-15.gif',  //7
  'http://ll-media.tmz.com/2015/10/20/drake-hotline-bling-dancing-14.gif', //8
  'http://ll-media.tmz.com/2015/10/20/drake-hotline-bling-dancing-2.gif', //9
  'http://ll-media.tmz.com/2015/10/20/drake-hotline-bling-dancing-13.gif', //10
];

var quotes = [
  '"I’m trying to do better than good enough."', // 1
  '"Came up, that’s all me. Stay true, that’s all me. No help, that’s all me. All me forreal."', //2
  '"We always ignore the ones who adore us and adore the ones who ignore us."', //3
  '"When you look ahead and darkness is all you see, faith and determination will pull you through."', //4
  '"Rap must be changing cause I’m at the top and ain’t no one on top of me."', //5
  '"I can’t even find the perfect brush, so I can paint what’s going through my mind. Racing against myself, but I’m a couple steps behind."', //6
  '"Everything is going as right — as it can. They trying to shoot down my flight — before it lands."', //7
  '"You used to call me on my cellphone."', //8
  '"I’m just doin’ me and you could never understand it."', //9
  '"My team good, we don’t really need a mascot."', //10
];

var colors= [
   '#fa8072', // 1
   '#ffa500', // 2
   '#8fbc8f', // 3
   '#c71585', // 4
   '#5f9ea0', // 5
   '#595959', // 6
   '#ffcca3', // 7
   '#ba8ce3', // 8
   '#f08a6b', // 9
   '#264000', // 10
];


var pic = document.getElementsByClassName('picture')[0];
var para = document.getElementsByClassName('quote')[0];


setImage();
// setQuote();

pic.addEventListener('click',function(){

  setImage();
  // setQuote();
});



function setImage() {
  pic.src = getRandomImage();
}

function getRandomImage() {
  var notFound = true;
  var rand;
  var v = pic.src.split('/');
  var current = v[v.length-1];
  while(notFound) {
    rand = Math.round(Math.random()*(images.length-1));
    if (images[rand] != current) {
      notFound = false;
    }
  }
  setQuote(rand);
  changeColor(rand);
  return images[rand];
}
function setQuote(rand) {
  para.innerText = getRandomQuote(rand);
}

function getRandomQuote(rand) {
  // var notFound = true;
  // var rand;
  // var current = para.innerText;
  // while(notFound) {
  //   rand = Math.round(Math.random()*(quotes.length-1));
  //   if (quotes[rand] != current) {
  //     notFound = false;
  //   }
  // }
  return quotes[rand];
}

function changeColor(rand) {
  document.body.style["background-color"] = colors[rand];
}

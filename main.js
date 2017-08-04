var links = ["https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/5250/SITours/viator-exclusive-statue-of-liberty-monument-access-and-9-11-memorial-in-new-york-city-141987.jpg",

"https://allwaysdive.com.au/wp-content/uploads/2015/03/Mexico-6.jpg",

"http://www.955170000.com/countries/BRASIL.jpg",

"https://s-media-cache-ak0.pinimg.com/736x/46/d9/73/46d973cce29c8c655d07c7519d8e9615--spain-travel-the-architect.jpg",
             
"http://carmencitta.me/2017/wp-content/uploads/2017/03/Carmencitta-Holland-a-majestic-part-of-Nethelands-5.jpg"
];
var titles = ["NYC","Mexico", "Brazil", "Spain", "Holand"];
var index = 0;
var autoplay = true;

function prevPic() {
  
}
function nextPic() {
  console.log("nextPic: " + index);
  var img = document.getElementById("pic");
  index++;
  img.src = links[index % links.length];
  
  var title = document.getElementById("title");
  title.innerHTML = titles[index % links.length];
  console.log(title);
  
  if(autoplay) {
    setTimeout(nextPic, 3000);
  }
}

if(autoplay) {
    setTimeout(nextPic, 3000);
}

var myArray = [
  "https://youtube.com/embed/m0fjx7A02ho",
  "https://youtube.com/embed/oGHTxl4Re50",
  "https://youtube.com/embed/n-0O2ZOIpZA",
   "https://youtube.com/embed/iEUpvK5JVys",
  "https://youtube.com/embed/O3NCwtFeWOQ"
];

$(document).ready(function() {
  $('.random-button').on('click', function(ev) {
    ev.preventDefault();
    var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    $.featherlight({iframe: randomItem, iframeMaxWidth: '100%', iframeWidth: 560,
	iframeHeight: 315});
  });
 });

// Made By Aniel
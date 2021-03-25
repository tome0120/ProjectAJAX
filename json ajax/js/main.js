var pageCounter = 1;
var animalContainer = document.getElementById("mars-photos");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=H5EonJn8uvFSnbcub8Svg5OBQR3andRac5nTavqq');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      console.log(ourData);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }

  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  pageCounter++;
  if (pageCounter > 1) {
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
  var htmlString = "";


    htmlString += '<img src="' + data.photos[5].img_src;


    htmlString += '">';
    htmlString += '<img src="' + data.photos[6].img_src;


    htmlString += '">';
    htmlString += '<img src="' + data.photos[7].img_src;


    htmlString += '">';


console.log(htmlString);
  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

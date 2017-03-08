function determineHeightAndThenDrawPyramid(sym, h) {
    heightStr = h;
    // here we convert the string to an int
    height = parseInt(heightStr);
    drawPyramid(sym, height);

}

function drawPyramid(sym, height) {
    // Clear contents of div before drawing
    var div = document.getElementById("pyramid");
    div.innerText = '';

    for (var i=1; i<=height; i++) {
      var seq = " ".repeat(height-i)
      seq+= sym.repeat(i+1)

       // create a text element with the string of characters
       textElem = document.createTextNode(seq);

       // create a <p> element with the text inside
       rowElem = document.createElement("pre");
       rowElem.appendChild(textElem);

       // insert the paragraph as a child of the container <div>
       document.getElementById("pyramid").appendChild(rowElem);
   }
}

var sym = "#", height = 10;
var select = document.querySelector(".dropdown");
var slider = document.querySelector(".slider");
// Changed symbol
select.onchange = function (e) {
    sym = e.target.value;
    determineHeightAndThenDrawPyramid(sym, height);
};

// Changed height
slider.oninput = function (e) {
    var output = document.querySelector("span");
    height = e.target.value;
    output.textContent = height;
    determineHeightAndThenDrawPyramid(sym, height);
};

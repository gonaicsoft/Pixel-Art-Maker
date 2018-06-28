// Select color input
// Select size input
const heightInput = $('#inputHeight');
const widthInput = $('#inputWeight');
const colorInput = $('#colorPicker');
alert("hello");
// When size is submitted by the user, call makeGrid()
//makeGrid function that removes previous table and then new grid is built with help of for-loop
function makeGrid() {

    // Your code goes here!
    let heightValue = heightInput.val();
    let widthValue = widthInput.val();

    let pixelCanvas = $('#pixelCanvas');
    pixelCanvas.children().remove(); // This clears previously built table if exist


    // This Dynamically set the size of the table as an N by M grid.

    for (let h = 0; h < heightValue; h++) {
        pixelCanvas.append("<tr></tr>");
    }
    for (let w = 0; w < widthValue; w++) {
        $('tr').append("<td></td>");
    }

}

/**
This changes the background color of the table cell, 
with respective chosen color from the input with the type of color.
*/

$('table').on('click', 'td', function() {
    $(this).css('backgroundColor', colorInput.val());
});


// When the user inputs the size, then call makeGrid() function.

form = $('#sizePicker');
form.submit(function(event) {
    event.preventDefault(); //This stops page from refreshing or performing form defualt action upon submit
    makeGrid();
});
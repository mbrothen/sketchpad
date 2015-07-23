/*jslint browser: true*/
/*global $, jQuery, alert*/
rows = 16;
columns = 16;
$row = $("<div />", {
    class: 'row'
});
$square = $("<div />", {
    class: 'square'
});

function canvas(rows) {
    //create square size based on input or prefilled var
    $('#container').empty();
    $('#container').html("");

    //add columns to the the row object
    for (var i = 0; i < rows; i++) {
        $row.append($square.clone());
    }
    //clone the row object with the columns to the container
    for (var i = 0; i < rows; i++) {
        $("#container").append($row.clone());
    }
    $('.square').css('width', (960 / rows));
    $('.square').css('height', (960 / rows));
    $('.row').css('height', (960 / columns));
    console.log('rows' + rows + 'i' + i);
    change();
}

function change() {
    //color background of squares on mouse enter and exit
    $('.square').mouseenter(function() {
        $(this).css('background', '#0000f0');
    });

    $('.square').mouseleave(function() {
        $(this).css('background', '#0000f0');
    });
}

function clear() {
    $('button').click(function() {
            /*$('.square').css('background', '#FFFFFF');*/
            $('container').html("");
            var grid = prompt("Enter new grid size (1-128):", "32");
            rows = grid;
            columns = grid;
            canvas(rows, columns);
            console.log(grid);
        });
    }

$(document).ready(function() {
canvas(rows);
change();
clear();



});

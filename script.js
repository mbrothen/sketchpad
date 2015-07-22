/*jslint browser: true*/
/*global $, jQuery, alert*/
var rows = 16;
var columns = 16;
var $row = $("<div />", {
    class: 'row'
});
var $square = $("<div />", {
    class: 'square'
});

$(document).ready(function() {
    //add columns to the the temp row object
    for (var i = 0; i < columns; i++) {
        $row.append($square.clone());
    }
    //clone the temp row object with the columns to the wrapper
    for (var i = 0; i < rows; i++) {
        $("#container").append($row.clone());
    }
    change();
    clear();

    function change() {
        $('.square').mouseenter(function() {
            $(this).css('background', '#0000f0');
        });

        $('.square').mouseleave(function() {
            $(this).css('background', '#0000f0');
        });
    }

    function clear() {
        $('button').click(function() {
            $('.square').css('background', '#FFFFFF');
        });
    }
});

$(function() {

    $('input[type="checkbox"]:not(.switchery, .styled-quiz), input[type="radio"]:not(.switchery, .styled-quiz)').uniform({
        radioClass: 'choice'
    });

    var elems = Array.prototype.slice.call(document.querySelectorAll('.switchery'));

    elems.forEach(function(html) {
        var switchery = new Switchery(html);
    });

});

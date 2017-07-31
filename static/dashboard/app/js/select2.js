$(document).ready(function () {

    $('.select-search').select2({
        selectOnClose: true

    });


    $('.select-tags').select2({

    });

    $('.select-search').next('.select2').find('.select2-selection').one('focus', select2Focus).on('blur', function () {
        $(this).one('focus', select2Focus)
    });

    function select2Focus() {
        $(this).closest('.select2').prev('select').select2('open');
    }

    $('.select-no-search').select2({
        minimumResultsForSearch: Infinity

    });

});
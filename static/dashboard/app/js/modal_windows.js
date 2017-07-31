$(function() {

    $('.modal-open').on('click', function(event) {
        event.preventDefault();

        var approp_complete = $('#approp_complete').val();

        if(approp_complete == 0){
            $('#modal_large_quiz').modal('show');
        }else{
            $('#modal_large').modal('show');
        }
    });


    $('.modal-open-settings').on('click', function(event) {
        event.preventDefault();
        var account_id = $(this).data('account_id');
        var account_leverage = $(this).data('account_leverage');
        $('#account_id').val(account_id);
        $('#account_leverage').val(account_leverage).trigger('change');
        $('#modal_settings_large').modal('show');
    });

});

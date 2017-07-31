$(document).ready(function () {

    $('.pick-a-date-selectors').datetimepicker({
        format: 'YYYY-MM-DD',
        minDate: '1917-01-01',
        maxDate: '2030-12-31',
        useCurrent: false,
        viewMode: 'years',
        widgetPositioning : { horizontal: 'auto', vertical: 'bottom'}
    });


    $('.pick-a-date-birth-date-selectors').datetimepicker({
        format: 'YYYY-MM-DD',
        minDate: '1917-01-01',
        maxDate: '1999-12-31',
        useCurrent: false,
        viewMode: 'years',
        widgetPositioning : { horizontal: 'auto', vertical: 'bottom'}
    });

    $('.flash-message').each(function(){
        var color = '#66BB6A';
        if ( $(this).data('message_type') == 'error'){
            color = '#EF5350';
        }
        swal({
            title: "Request",
            text: $(this).data('message'),
            confirmButtonColor: color,
            type: $(this).data('message_type')
        });
    });


    $('.modal-show').on('click', function(event) {
        event.preventDefault();
        link = $(this).attr('data-url');
        $('#modal-show').modal('show');
    });

    $('#do-action').click(function (event) {
        event.preventDefault();
        $('#data').attr("action", link);
        $("#data").attr("method", 'POST');
        $('#data').submit();
    });



    $('#check_all').on('change', function(event){
        if ($(this).is(":checked"))
            $('.data-check-box').prop('checked',true).uniform('refresh');
        else
            $('.data-check-box').prop('checked',false).uniform('refresh');
    });

    // Deposit Controller
    $('#deposit_payment_method').on('change', function(event) {
        $('.deposit_extra_fields').hide().find('input,select,textarea').attr('disabled', true);
        $('#deposit_extra_fields-'+$(this).val()).show().find('input,select,textarea').attr('disabled', false);
    }).trigger('change');


    // Warning alert
    $('.sweet_confirm').on('click', function(e) {
        e.preventDefault();
        var $el = $(this);
        swal({
            title: $el.data('question') || "Are you sure?",
            text: $el.data('message') || "Think twice before pressing Yes!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: $el.data('confirmButtonText') || 'Yes!',
            cancelButtonText: $el.data('cancelButtonText') || 'No, cancel!',
        }, function (isConfirm) {
            if (isConfirm) {
                document.location.href = $el.attr('href');
            }
        });

        return false;
    });

    $('.sweet_confirm_form').on('submit', function(e) {
        e.preventDefault();
        var el = this;
        var $el = $(this);
        swal({
            title: $el.data('question') || "Are you sure?",
            text: $el.data('message') || "Think twice before pressing Yes!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: $el.data('confirmButtonText') || 'Yes!',
            cancelButtonText: $el.data('cancelButtonText') || 'No, cancel!',
        }, function (isConfirm) {
            if (isConfirm) {
                el.submit();
            }
        });

        return false;
    });


    $('#tags').on('click', function(e) {
        e.preventDefault();
        $('#tags_popover').show();
    });

    $('#close_tag').on('click', function(e) {
        $('#tags_popover').hide();
    });




    // Tokenfield
    $('.tokenfield').tokenfield();

});
$(document).ready(function () {

    $("select").on("select2:close", function (e) {
        $(this).valid();
    });

    $('#pin_send').on('click', function(event) {
        event.preventDefault();

        if($('#email').valid()){

            $('#email_send_server_error').hide();
            $('#email_send_server_limit').hide();


            $('#pin_send').html('Sending...').prop('disabled', true);

            var l = Ladda.create( document.querySelector('#pin_send'));
            l.start();

            $.ajax({
                url: '/pin/send',
                data: $('#registration_form').serialize(),
                type: 'POST',
                success: function(response) {
                    l.stop();
                    if (response.status_code == 1){
                        $('#pin_send').html('Pin Code Is Sent').prop('disabled', true);
                    }
                    else if (response.status_code == 2){
                        $('#pin_send').html('Send Pin Code').prop('disabled', false);
                        $('#email-error-pin').html(response.message);
                        $('#email-error-pin').show();
                    }
                    else if (response.status_code == 3){
                        $('#pin_send').html('Send Pin Code').prop('disabled', true);
                        $('#email_send_server_limit').show();
                    }
                },
                error: function(response) {
                    l.stop();
                    $('#pin_send').html('Send Pin Code').prop('disabled', false);
                    $('#email_send_server_error').show();
                }
            });
        }
    });

    // Initialize
    var validator = $("#registration_form").validate({
        ignore: 'input[type=hidden], .select2-search__field', // ignore hidden fields
        errorClass: 'validation-error-label',
        successClass: 'validation-valid-label',
        highlight: function(element, errorClass) {
            $(element).removeClass(errorClass);
        },
        unhighlight: function(element, errorClass) {
            $(element).removeClass(errorClass);
        },

        // Different components require proper error label placement
        errorPlacement: function(error, element) {

            // Styled checkboxes, radios, bootstrap switch
            if (element.parents('div').hasClass("checker") || element.parents('div').hasClass("choice") || element.parent().hasClass('bootstrap-switch-container') ) {
                console.log('ss');
                if(element.parents('label').hasClass('checkbox-inline') || element.parents('label').hasClass('radio-inline')) {
                    error.appendTo( element.parent().parent().parent().parent() );
                }
                else {
                    error.appendTo( element.parent().parent().parent().parent().parent() );
                }
            }

            // Unstyled checkboxes, radios
            else if (element.parents('div').hasClass('checkbox') || element.parents('div').hasClass('radio')) {
                error.appendTo( element.parent().parent().parent() );
            }

            // Input with icons and Select2
            else if (element.parents('div').hasClass('has-feedback') || element.hasClass('select2-hidden-accessible')) {
                error.appendTo( element.parent() );
            }

            // Inline checkboxes, radios
            else if (element.parents('label').hasClass('checkbox-inline') || element.parents('label').hasClass('radio-inline')) {
                error.appendTo( element.parent().parent() );
            }

            // Input group, styled file input
            else if (element.parent().hasClass('uploader') || element.parents().hasClass('input-group')) {
                error.appendTo( element.parent().parent() );
            }

            else {
                error.insertAfter(element);
            }
        },
        validClass: "validation-valid-label",
        // success: function(label) {
        //     label.addClass("validation-valid-label").text("Success.")
        // },
        rules: {
            email: {
                email: true
            },
            first_name: {
                required: true
            },
            last_name: {
                required: true
            },
            country_id: {
                required: true
            },
            pin_code: {
                required: true,
                digits: true,
                minlength: 4,
                maxlength: 4
            },
            agree: {
                required: true
            }
        },
        messages: {
            agree: "Please accept our policy"
        }
    });


});
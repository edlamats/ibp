$(document).ready(function () {

    // replacing client data from old to new by clicking on arrow
    $('.update-user-info').on('click', function(event) {

        var value = $(this).text();

        if($(this).data('input') == 'gender'){

        }else{
            var input = $('#' + $(this).data('input'));
            if(input.prop('type') == 'select-one'){
                input.val(value).trigger("change");
            }
            else{
                input.val(value);
            }
        }
    });
    

    // check if status (and other field in future) is chosen
    function checkDocumentFormValidity(submitForm) {
        // find document current status
        var documentStatus = submitForm.find("input[type='radio']:checked").val();

        if (documentStatus === 'Approved'){
            if(submitForm.find('.document_expiration_date').val() === ''){
                return false
            }
        }else
        if (documentStatus === 'Rejected') {
            if(submitForm.find('.reject_reason').val() === ''){
                return false
            }
        }else{
            return false;
        }
        return true;
    }

    // sent ajax request to save document data
    function saveDocumentData(submitForm) {
        swal({
            closeOnConfirm: false,
            title: submitForm.data('question') || "Are you sure?",
            text: submitForm.data('message') || "Think twice before pressing Yes!",
            type: 'warning',
            showLoaderOnConfirm: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: submitForm.data('confirmButtonText') || 'Yes!',
            cancelButtonText: submitForm.data('cancelButtonText') || 'No, cancel!',
        },
        function(){
            setTimeout(function(){
                var data = submitForm.serialize();
                var url = submitForm.attr('action');
                $.ajax({
                    url: url,
                    data: data,
                    type: 'POST',
                    success: function() {
                        swal({
                            title: "Request",
                            text: 'Saved!',
                            confirmButtonColor: '#66BB6A',
                            type: 'success'
                        });
                    },
                    error: function () {
                        swal({
                            title: "Request",
                            text: 'Not Saved due to some error!',
                            confirmButtonColor: '#EF5350',
                            type: 'error'
                        });
                    }
                });


            }, 0);
        });
    }

    // handle document form submit
    $('.approve_document_form').submit(function(e) {
        e.preventDefault();
        var submitForm = $(this);
        if (checkDocumentFormValidity(submitForm)){
            saveDocumentData(submitForm);
        }else{
            swal({
                title: "Request",
                text: 'Check required fileds',
                confirmButtonColor: '#EF5350',
                type: 'error'
            });
        }
    });


    // hide reject reason field if status is approved
    $("#modal-show-documents").on("change", '.document_status', function(event) {
        var docStatus = $(this).val();
        var docId = $(this).data('document_id');
        var rejectSelector = docId + "_document_reject_reason";

        if (docStatus === "Rejected"){
            $('#' + rejectSelector).show();
        }else{
            $('#' + rejectSelector).hide();
        }
    });

    // disable approve status if no document type selected
    $("#modal-show-documents").on("change", '.document_type', function(event) {
        var docType = $(this).val();
        var docId = $(this).data('document_id');
        var approveStatusSelector = docId + "_approve_document_status";

        if (docType){
            $('#' + approveStatusSelector).attr("disabled", false);
            $.uniform.update();
        }else{
            $('#' + approveStatusSelector).attr("checked", false);
            $('#' + approveStatusSelector).attr("disabled", true);
            $.uniform.update();
        }
    });

    // init slider plugin
    $('.slider').slick({
        fade: false,
        infinite: false,
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });

    // show modal windows with client documents
    $('.modal-show-documents').on('click', function(event) {
        event.preventDefault();
        var current_slide =  $(this).data('slide_id');
        $('.slider').slick('slickGoTo', current_slide);
        $('#modal-show-documents').modal('show');
    });

    // resize slider after opening modal window
    $('#modal-show-documents').on('shown.bs.modal', function (event) {
        $('.slider').resize();
    });

    // switch slider to current slide
    $('.slide-t').click(function(){
        var current_slide =  $(this).data('slide_id');
        $('.slider').slick('slickGoTo', current_slide);
    });

    // add indicator to current thumbnail
    $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        var current_slide = $('.slider').slick('slickCurrentSlide');
        $('.status-mark').hide();
        $('.slide-indicator-' + current_slide).show();
    });

});
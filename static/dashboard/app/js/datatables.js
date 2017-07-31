$(function() {

    // Setting datatable defaults
    $.extend( $.fn.dataTable.defaults, {
        autoWidth: false,
        responsive: true,
        // columnDefs: [{
        //     orderable: false,
        //     width: '100px',
        //     targets: [ 0 ]
        // }],
        dom: '<"datatable-header"fl><"datatable-scroll-wrap"t><"datatable-footer"ip>',
        language: {
            search: '<span>Search:</span> _INPUT_',
            lengthMenu: '<span>Show:</span> _MENU_',
            paginate: { 'first': 'First', 'last': 'Last', 'next': '&rarr;', 'previous': '&larr;' }
        },
        drawCallback: function () {
            // $('input[type="checkbox"]:not(.switchery, .styled-quiz), input[type="radio"]:not(.switchery, .styled-quiz)').uniform({
            //     radioClass: 'choice'
            // });
            $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').addClass('dropup');
        },
        preDrawCallback: function() {
            $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').removeClass('dropup');
        }
    });



    $('.data-table-client').DataTable({
        responsive: {
            details: {
                type: 'column'
            }
        },
        ajax: $('.data-table-client').data('url'),
        processing: true,
        serverSide: true,
        pageLength: 25,
        stateSave: true,
        "order": [[ 0, 'desc' ]],
        columns: [
            { data: 'id', name: 'id' },
            { data: 'first_name', name: 'first_name' },
            { data: 'last_name', name: 'last_name' },
            { data: 'status', name: 'status' },
            { data: 'country_id', name: 'country_id' },
            { data: 'created_at', name: 'created_at' },
            { data: 'email', name: 'email', searchable: true, visible: false  },
            { data: 'phone', name: 'phone', searchable: true, visible: false  },
            { data: 'actions', name: 'actions' }
        ]
    });

    $('.data-table').DataTable({
        responsive: {
            details: {
                type: 'column'
            }
        },
        ajax: $('.data-table').data('url'),
        processing: true,
        serverSide: true,
        pageLength: 25,
        stateSave: true,
        "order": [[ 0, 'desc' ]],
        "columnDefs": [
            {
                "targets": -1,
                "orderable": false,
                "searchable": false
            }
            // {
            //     "targets": 0,
            //     "orderable": false,
            //     "searchable": false
            // }
        ]
    });

    $('.data-table-payment').each(function () {
        $el = $(this);
        $el.DataTable({
            responsive: {
                details: {
                    type: 'column'
                }
            },
            dom: '<"datatable-scroll-wrap"t><"datatable-footer"ip>',
            ajax: $el.data('url'),
            processing: true,
            serverSide: true,
            pageLength: 25,
            // stateSave: true,
            "order": [[ 0, 'desc' ]],

        });
    });

    // External table additions
    // ------------------------------

    // Add placeholder to the datatable filter option
    $('.dataTables_filter input[type=search]').attr('placeholder','Type to filter...');


    // Enable Select2 select for the length option
    $('.dataTables_length select').select2({
        minimumResultsForSearch: Infinity,
        width: 'auto'
    });


    // Custom code
    // ------------------------------


    // // Highlight row when checkbox is checked
    // $('.datatable').find('tr > td:first-child').find('input[type=checkbox]').on('change', function() {
    //     if($(this).is(':checked')) {
    //         $(this).parents('tr').addClass('warning');
    //     }
    //     else {
    //         $(this).parents('tr').removeClass('warning');
    //     }
    // });
    //
    // // Grab first letter and insert to the icon
    // $(".table-inbox tr").each(function (i) {
    //
    //     // Title
    //     var $title = $(this).find('.letter-icon-title'),
    //         letter = $title.eq(0).text().charAt(0).toUpperCase();
    //
    //     // Icon
    //     var $icon = $(this).find('.letter-icon');
    //     $icon.eq(0).text(letter);
    // });
    //
    //
    // // Plugins
    // // ------------------------------
    //
    // // Initialize Row link plugin
    // $('tbody.rowlink').rowlink();
    //
    //
    //
    //
    // // Grab first letter from sender name and add it to avatar
    // // ------------------------------
    //
    // // Title
    // var $title = $('.letter-icon-title'),
    //     letter = $title.eq(0).text().charAt(0).toUpperCase();
    //
    // // Icon
    // var $icon = $title.parent().parent().find('.letter-icon');
    // $icon.eq(0).text(letter);
});
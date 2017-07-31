/* ------------------------------------------------------------------------------
*
*  # Select extension for Datatables
*
*  Specific JS code additions for datatable_extension_select.html page
*
*  Version: 1.0
*  Latest update: Nov 9, 2015
*
* ---------------------------------------------------------------------------- */

$(function() {


    // Table setup
    // ------------------------------

    // Setting datatable defaults
    $.extend( $.fn.dataTable.defaults, {
        autoWidth: false,
        columnDefs: [{
            orderable: false,
            width: '100px',
            targets: [ 0 ]
        }],
        dom: '<"datatable-header"fl><"datatable-scroll-wrap"t><"datatable-footer"ip>',
        language: {
            search: '<span>Filter:</span> _INPUT_',
            lengthMenu: '<span>Show:</span> _MENU_',
            paginate: { 'first': 'First', 'last': 'Last', 'next': '&rarr;', 'previous': '&larr;' }
        },
        drawCallback: function () {
            $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').addClass('dropup');
        },
        preDrawCallback: function() {
            $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').removeClass('dropup');
        }
    });
    //
    //
    // // Basic initialization
    // $('.datatable-select-basic').DataTable({
    //     select: true
    // });
    //
    //
    // // Single item selection
    // $('.datatable-select-single').DataTable({
    //     select: {
    //         style: 'single'
    //     }
    // });
    //
    //
    // // Multiple items selection
    // $('.datatable-select-multiple').DataTable({
    //     select: {
    //         style: 'multi'
    //     }
    // });


    // $('.datatable-select-checkbox').DataTable({
    //     "processing": true,
    //     "serverSide": true,
    //     ajax: "/datatables",
    //     columns: [
    //         { data: 'id', name: 'id', orderable: true  },
    //         { data: 'first_name', name: 'first_name', orderable: true},
    //         { data: 'last_name', name: 'last_name', orderable: true},
    //         { data: 'email', name: 'email', orderable: true},
    //
    //     ],
    //     "pageLength": 10
    // });


    // // var rows_selected = [];
    // // Checkbox selection
    // $('.datatable-select-checkbox').DataTable({
    // //
    // //     'columnDefs': [{
    // //         'targets': 0,
    // //         'searchable': false,
    // //         'orderable': false,
    // //         'width': '1%',
    // //         'className': 'dt-body-center',
    // //         'render': function (data, type, full, meta){
    // //             return '<input type="checkbox">';
    // //         }
    // //     }],
    // //     // 'order': [[1, 'asc']],
    // //     // 'rowCallback': function(row, data, dataIndex){
    // //     //     // Get row ID
    // //     //     var rowId = data[0];
    // //     //
    // //     //     // If row ID is in the list of selected row IDs
    // //     //     if($.inArray(rowId, rows_selected) !== -1){
    // //     //         $(row).find('input[type="checkbox"]').prop('checked', true);
    // //     //         $(row).addClass('selected');
    // //     //     }
    // //     // },
    // //
    // //
    //     processing: true,
    //     serverSide: true,
    //     ajax: '/datatables/',
    //
    //
    //     columnDefs: [
    //         {
    //             orderable: false,
    //             className: 'select-checkbox',
    //             targets: 0
    //         }
    //         // {
    //         //     data: "id",
    //         //     targets: 2
    //         // },
    //         // {
    //         //     data: "name",
    //         //     targets: 3
    //         // }
    //         // {
    //         //     orderable: false,
    //         //     width: '100px',
    //         //     targets: 3
    //         // }
    //     ],
    //     // select: {
    //     //     style: 'multi',
    //     //     selector: 'td:first-child'
    //     // },
    //     // order: [[1, 'asc']],
    //
    //     // columns: [
    //     //     { data: null},
    //     //     { data: 'id', name: 'id' },
    //     //     { data: 'name', name: 'name' },
    //     //     { data: 'email', name: 'email' },
    //     //     { data: null}
    //     // ]
    // });
    //

    // Buttons
    $('.datatable-select-buttons').DataTable({
        dom: '<"dt-buttons-full"B><"datatable-header"fl><"datatable-scroll-wrap"t><"datatable-footer"ip>',
        buttons: [
            {extend: 'selected', className: 'btn btn-default'},
            {extend: 'selectedSingle', className: 'btn btn-default'},
            {extend: 'selectAll', className: 'btn bg-blue'},
            {extend: 'selectNone', className: 'btn bg-blue'},
            {extend: 'selectRows', className: 'btn bg-teal-400'},
            {extend: 'selectColumns', className: 'btn bg-teal-400'},
            {extend: 'selectCells', className: 'btn bg-teal-400'}
        ],
        select: true
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
    
});

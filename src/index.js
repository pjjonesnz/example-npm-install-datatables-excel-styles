import './index.html';
import $ from 'jquery';

// You only need to import the templates file, it looks after importing all its dependencies
import 'datatables-buttons-excel-styles/js/buttons.html5.styles.templates';

// You also need the datatables css files
import 'datatables.net-dt/css/jquery.datatables.css';
import 'datatables.net-buttons-dt/css/buttons.dataTables.css';

import 'jszip';
import JSZip from 'jszip';
window.JSZip = JSZip;

$(document).ready(function () {
    $('#mytable').DataTable({
        dom: 'Bfrtip',
        buttons: [
            {
                // Extend the excel button
                extend: 'excel',
                // Add an excelStyles definition
                excelStyles: {
                    // Apply the 'blue_medium' template
                    template: 'blue_medium',
                },
            },
        ],
    });
});
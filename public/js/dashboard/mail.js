$('document').ready(() => {

    // Initializing the modal.
    //$('.modal').modal();

    // Select all.
    $('#select-all-mail-btn').on('change', (e) => {
        $.each($('table tr td:first-of-type input'), (index, value) => {

            value.checked = e.target.checked;
        });
    });

    // Mail mode selection.
    $('#mail-mode-select').on('change', (e) => {

        switch(e.target.value) {

            case '2': {
                location.href = '/dashboard/mail/1';
                break;
            }

            case '3': {
                location.href = '/dashboard/mail/2';
                break;
            }

            default: location.href = '/dashboard/mail/0';
        }
    });

    // Opening the mail modal.
    $('tr.mail').on('click', function () {

        const mailId = $(this).data('id');

        (M.Modal.getInstance($('#mail-modal'))).open();
    });
});
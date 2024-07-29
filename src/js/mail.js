jQuery(document).ready(function($) {
    console.log('loaded')

    $('.contact-submit').on('click', function(e) {
        e.preventDefault();
        var email = $('#emailAddress').val();
        var name = $('#yourName').val();
        var message = $('#yourMessage').val();
        // $('#loader').show();

        _dcq.push(["identify", {
            email: email,
            first_name: name,
            tags: ["Customer"],
            success: function(response) {
            //   console.log(response)
            }
          }]);

        $.ajax({
            type: 'POST',
            url: ajax_object.ajax_url, // Define this in your theme's JavaScript file
            data: {
                action: 'contact_form_send_email',
                email: email,
                name: name,
                message: message,
            },
            success: function(response) {
                $('.form-success-message').html(response);
                $('.form-success-message').show();
            }
        });
    });
});
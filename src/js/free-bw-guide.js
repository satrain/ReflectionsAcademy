jQuery(document).ready(function($) {
    
    $('#newsletterForm').submit(function(e) {
        e.preventDefault();
        var email = $('#newsletterEmail').val();
        var name = $('#newsletterName').val();
        $('#loader').show();

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
                action: 'create_email_post',
                email: email,
                name: name,
            },
            success: function(response) {
                $('#loader').hide();
                // Handle the response if needed
                // $('#formOutput').html(response);
                window.location.href = "/thank-you/"
            }
        });

    });
});
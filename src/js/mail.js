jQuery(document).ready(function($) {
    console.log('loaded')

    var _dcq = _dcq || [];
    var _dcs = _dcs || {};
    _dcs.account = '3944391';
  
    (function() {
      var dc = document.createElement('script');
      dc.type = 'text/javascript'; dc.async = true;
      dc.src = '//tag.getdrip.com/3944391.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(dc, s);
    })();

    $('#contactForm form').submit(function(e) {
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
                // $('#loader').hide();
                // Handle the response if needed
                // $('#formOutput').html(response);
                console.log(response);
                $('.form-success-message').html("Thank you for reaching out. We will email you as soon as possible.");
                $('.form-success-message').show();
            }
        });
    });
});
$(window).on('load', function() {
  $('#navbar-nav').on('show.bs.collapse', function() {
    if ($(window).scrollTop() <= 0 && $('.navbar').hasClass('bg-transparent')) {
      $('.navbar').addClass('bg-primary');
      $('.navbar').removeClass('bg-transparent');
    }
  });

  $('#navbar-nav').on('hide.bs.collapse', function() {
    if ($(window).scrollTop() <= 0 && $('.navbar').hasClass('bg-primary')) {
      $('.navbar').removeClass('bg-primary');
      $('.navbar').addClass('bg-transparent');
    }
  });
});

$(window).on('scroll load resize', function() {
  if ($(window).scrollTop() > 0 || $('#navbar-nav').hasClass('show')) {
    $('.navbar').addClass('bg-primary');
    $('.navbar').removeClass('bg-transparent');
  } else {
    $('.navbar').removeClass('bg-primary');
    $('.navbar').addClass('bg-transparent');
  }
});

$("#contact-form").submit(function(event) {
  event.preventDefault();

  var $form = $(this);
  var submitButton = $form.find('button[type=submit]');
  submitButton.prop('disabled', true);

  var company = $('#contact-company').val();
  var name = $('#contact-name').val();
  var email = $('#contact-email').val();
  var phone = $('#contact-phone').val();
  var message = $('#contact-message').val();
  var payload = `| Feld | Wert |
| --- | --- |
| Unternehmen | ${company} |
| Name | ${name} |
| E-Mail | ${email} |
| Telefon | ${phone} |

**Nachricht**
\`\`\`markdown
${message}
\`\`\``;

  var url = $form.attr('action');
  $.post(url, { message: payload })
  .done(function() {
    $form.addClass('d-none');
    $('#contact-success').removeClass('d-none');
    $('#contact-error').addClass('d-none');
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    console.log('Failed to submit.', textStatus, errorThrown);
    $('#contact-error').removeClass('d-none');
    submitButton.prop('disabled', false);
  });
});

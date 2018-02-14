$(window).on('load', function() {
  $('body').removeClass('preload');

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

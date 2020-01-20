$(document).ready(
  function () {
    $('.dropdown-link > a').mouseenter (
      function () {
        $('.dropdown').removeClass('active');
        $(this).next('.dropdown').addClass('active');
      }
    );
    $('body').click (
      function () {
        $('.dropdown').removeClass('active');
      }
    );
  }
);

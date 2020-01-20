$(document).ready(
  function () {
    $('.dropdown-link > a').hover (
      function () {
        $(this).next('.dropdown').addClass('active');
      }, function () {
        $(this).next('.dropdown').removeClass('active');
      }
    );
  }
);

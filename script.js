$(function() {
  $('.spoiler-toggle').click(function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('open');
  })
})
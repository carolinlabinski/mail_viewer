$(document).ready(function() {
  $('.category-content').hide();
  $('.category-title:eq(0)').click(function(){
    $('.nav-link:eq(0)').addClass('active');
    $('.category-content:eq(0)').show();
    $('.category-content:eq(1)').hide();
    $('.category-content:eq(2)').hide();
  });
  $('.category-title:eq(1)').click(function(){
    $('.nav-link:eq(1)').addClass('active');
    $('.category-content:eq(1)').show();
    $('.category-content:eq(0)').hide();
    $('.category-content:eq(2)').hide();
  });
  $('.category-title:eq(2)').click(function(){
    $('.nav-link:eq(2)').addClass('active');
    $('.category-content:eq(2)').show();
    $('.category-content:eq(1)').hide();
    $('.category-content:eq(0)').hide();
  });
});


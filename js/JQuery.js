$('.nav-main').find("li").each(function() {
    if($(this).find("li").length > 0){
        $(this).append('<i class="fas fa-chevron-down btn-drop1"></i>');
    }
  });
  $('.btn-drop1').click(function(){
    if($(this).parent('li').children('ul').is(':hidden')===true){
      $(this).addClass('rotate');
      $(this).parent('li').children('ul').slideDown(300);
    }
    else{
      $(this).removeClass('rotate');
      $(this).parent('li').children('ul').slideUp(300);
    };
  });
$(document).ready(
        function() {
          $('.menu-toggie').click(function() {
            $('.nav-main').toggleClass('action')
            $('.over-lay').toggleClass('action')
          })

            }

        )
$(document).ready(function(){
   
     $("#md-btn1").click(function(){
    $('html').css({"overflow":"hidden"});
  });
      $("#modal-1").click(function(){
    $('html').removeAttr("index");
  });
  
    });

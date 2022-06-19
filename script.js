$(document).ready(function(){

    $(".tabs li").click(function(){
        var tab = $(this).attr('id');
        var tabSelected = tab + '-info'; 
        $('[id*="info"]').addClass("is-hidden");
        var show = document.getElementById(tabSelected);
        show.classList.remove("is-hidden");
    });
  
  });
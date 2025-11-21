// 1. Pega o elemento da navbar
$(window).scroll(function(){
if($(this).scrollTop() > 50){
    $("nav").addClass("scrolled");
}
else{
    $("nav").removeClass("scrolled");
}
});


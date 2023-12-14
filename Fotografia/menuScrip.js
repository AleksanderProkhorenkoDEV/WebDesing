$(document).ready(function(){
    $(".menu-toggle").click(function(){
        $(".ul-nav").toggleClass("show");
        $(".bar:nth-child(1").toggleClass("rotate-45");
        $(".bar:nth-child(2").toggleClass("hide");
        $(".bar:nth-child(3").toggleClass("rotate45");
    });
});
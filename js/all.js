$(document).ready(function(){
    $('.shownavbar').on('click', function(e){
        e.preventDefault();
        $('body').toggleClass('navbar-show');
    });
});